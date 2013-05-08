"use strict"
var holes = document.getElementsByClassName('hole');
var codearea = document.getElementById('codearea');
var toolbox = document.getElementById('toolbox');
var tiles = codearea.getElementsByClassName('tile');
function findOffsetTopLeft(el) {
    var x = el.offsetLeft;
    var y = el.offsetTop;
    if (el.offsetParent && el.offsetParent != codearea && el.offsetParent != toolbox) {
        var xy = findOffsetTopLeft(el.offsetParent);
        x = x + xy.left;
        y = y + xy.top;
    }
    return {left: x, top: y};
}
function isBottomTarget(ch, obj) {
    if (ch.parentElement.classList.contains('hole')) {
        if (!ch.parentElement.classList.contains('multi')) {
            return false;
        }
    }
    var p = ch.parentNode;
    while (p != codearea) {
        if (p.classList.contains('locked'))
            return false;
        p = p.parentNode;
    }
    var chXY = findOffsetTopLeft(ch);
    var objXY = findOffsetTopLeft(obj);
    var t = chXY.top + ch.offsetHeight;
    var l = chXY.left - ch.offsetWidth / 2;
    var r = chXY.left + ch.offsetWidth;
    var m = objXY.left + obj.offsetWidth / 2;
    if (objXY.top < t + 4 && objXY.top > t - 4) {
        if (objXY.left >= l && objXY.left <= r)
            return true;
        if (chXY.left >= objXY.left && chXY.left < m)
            return true;
    }
    return false;
}
function isOverBin(ev) {
    var bin = document.getElementById('bin');
    if (ev.clientY < bin.offsetHeight + codearea.offsetTop
            && ev.clientX > bin.offsetLeft + codearea.offsetLeft)
        return true;
    return false;
}
function dragstart(ev) {
    if (ev.button != 0)
        return;
    var xy = findOffsetTopLeft(this);
    var offsetY = ev.clientY - xy.top;
    var offsetX = ev.clientX - xy.left;
    var obj = this;
    ev.preventDefault();
    if (ev.target.classList.contains('var-name')
            && offsetX > ev.target.offsetWidth
            && ev.target.innerHTML) {
        popupVarMenu(ev);
        return;
    }
    var hadDragContinue = false;
    var dragcontinue = function(ev2) {
        hadDragContinue = true;
        var top = (ev2.clientY - offsetY);
        var left = (ev2.clientX - offsetX);
        obj.style.top = top + 'px';
        obj.style.left = left + 'px';
        top += codearea.scrollTop;
        left += codearea.scrollLeft;
        ev2.preventDefault();
        var tmp = obj;
        var overBin = isOverBin(ev2);
        var tmp = obj;
        while (tmp) {
            if (overBin)
                tmp.classList.add('over-bin');
            else
                tmp.classList.remove('over-bin');
            tmp = tmp.next;
        }
        var holeSize = 1000000;
        var bestHole = null;
        for (var i=holes.length - 1; i>=0; i--) {
            var h = holes[i];
            h.style.background = '';
            if (h.offsetParent == obj)
                continue;
            var xy = findOffsetTopLeft(h);
            xy.top = xy.top + codearea.offsetTop;
            xy.left = xy.left + codearea.offsetLeft;
            if (left + offsetX < xy.left
                    || left + offsetX > xy.left + h.offsetWidth) {
                continue;
            }
            if (top + offsetY < xy.top
                    || top + offsetY > xy.top + h.offsetHeight) {
                continue;
            }
            if (h.offsetWidth * h.offsetHeight < holeSize) {
                holeSize = h.offsetWidth * h.offsetHeight;
                bestHole = h;
            }
        }
        if (bestHole != null && bestHole.children.length == 0) {
            bestHole.style.background = 'yellow';
        }
        var tmp = obj;
        while (typeof tmp.next != "undefined" && tmp.next) {
            if (isOverBin(ev2)) {
                tmp.classList.add('over-bin');
            } else {
                tmp.classList.remove('over-bin');
            }
            var last = tmp;
            tmp = tmp.next;
            tmp.style.top = (last.offsetTop + last.offsetHeight) + 'px';
            tmp.style.left = last.offsetLeft + 'px';
        }
        for (var i=0; i<tiles.length; i++) {
            var ch = tiles[i];
            if (ch == obj)
                continue;
            if (isBottomTarget(ch, obj)) {
                ch.classList.add('bottom-join-target');
            } else {
                ch.classList.remove('bottom-join-target');
            }
        }
    }
    var d = document.getElementById('codearea');
    var originalHole = null;
    if (this.parentNode != d) {
        originalHole = this.parentNode;
        originalHole.style.width = originalHole.offsetWidth + 'px';
        originalHole.style.height = originalHole.offsetHeight + 'px';
    }
    this.style.position = 'absolute';
    this.style.top = xy.top + 'px';
    this.style.left = xy.left + 'px';
    var tmp = this;
    var runningTop = xy.top;
    if (ev.shiftKey) {
        if (tmp.prev)
            tmp.prev.next = tmp.next;
        if (tmp.next)
            tmp.next.prev = tmp.prev;
        tmp.next = false;
        tmp.prev = false;
    } else if (tmp.prev) {
        tmp.prev.next = false;
    }
    while (tmp && tmp.parentNode != d) {
        tmp.parentNode.removeChild(tmp);
        d.appendChild(tmp);
        tmp.style.position = 'absolute';
        tmp.style.top = runningTop + 'px';
        tmp.style.left = xy.left + 'px';
        runningTop += tmp.offsetHeight;
        tmp = tmp.next;
    }
    var dragend = function(ev) {
        var top = (ev.clientY - offsetY);
        var left = (ev.clientX - offsetX);
        obj.style.top = top + 'px';
        obj.style.left = left + 'px';
        top += codearea.scrollTop;
        left += codearea.scrollLeft;
        d.removeEventListener('mousemove', dragcontinue);
        d.removeEventListener('mouseup', dragend);
        obj.classList.remove('selected');
        if (isOverBin(ev)) {
            var tmp = obj;
            while (tmp) {
                tmp.parentNode.removeChild(tmp);
                tmp = tmp.next;
            }
            generateCode();
            if (originalHole != null) {
                originalHole.style.width = 'auto';
                originalHole.style.height = 'auto';
            }
            reflow();
            checkpointSave();
            return;
        }
        var tmp = obj;
        while (typeof tmp.next != "undefined" && tmp.next) {
            tmp = tmp.next;
            tmp.classList.remove('selected');
        }
        var holeSize = 1000000;
        var bestHole = null;
        for (var i=holes.length - 1; i>=0; i--) {
            var h = holes[i];
            if (h.offsetParent == obj)
                continue;
            var xy = findOffsetTopLeft(h);
            xy.top = xy.top + codearea.offsetTop;
            xy.left = xy.left + codearea.offsetLeft;
            if (left + offsetX < xy.left
                    || left + offsetX > xy.left + h.offsetWidth) {
                continue;
            }
            if (top + offsetY < xy.top
                    || top + offsetY > xy.top + h.offsetHeight) {
                continue;
            }
            if (h.offsetWidth * h.offsetHeight < holeSize) {
                holeSize = h.offsetWidth * h.offsetHeight;
                bestHole = h;
            }
        }
        if (bestHole != null) {
            if (bestHole.children.length == 0) {
                var tmp = obj;
                while (tmp) {
                    tmp.style.top = 0;
                    tmp.style.left = 0;
                    tmp.style.position = 'static';
                    bestHole.appendChild(tmp);
                    tmp = tmp.next;
                }
                bestHole.style.background = '';
            } else {
                bestHole = null;
            }
        }
        for (var i=0; i<tiles.length; i++) {
            var ch = tiles[i];
            ch.classList.remove('bottom-join-target');
            if (bestHole)
                continue;
            if (ch == obj)
                continue;
            var t = ch.offsetTop + ch.offsetHeight;
            if (isBottomTarget(ch, obj)) {
                if (ch.next) {
                    var tmp = obj;
                    while (tmp.next)
                        tmp = tmp.next;
                    tmp.next = ch.next;
                    ch.next.prev = tmp;
                }
                ch.next = obj;
                obj.prev = ch;
                var pe = ch.parentElement;
                var tmp = ch;
                var after = ch.nextSibling;
                while (tmp.next) {
                    var last = tmp;
                    tmp = tmp.next;
                    if (tmp == after)
                        break;
                    tmp.parentElement.removeChild(tmp);
                    pe.insertBefore(tmp, after);
                    if (pe.classList.contains('multi')) {
                        tmp.style.position = "static";
                        tmp.style.left = "";
                        tmp.style.top = "";
                    }
                    tmp.style.top = (last.offsetTop + last.offsetHeight) + 'px';
                    tmp.style.left = last.offsetLeft + 'px';
                }
                if (after && pe != codearea) {
                    last.next = after;
                    after.prev = last;
                }
                break;
            }
        }
        if (originalHole != null) {
            originalHole.style.width = 'auto';
            originalHole.style.height = 'auto';
        }
        reflow();
        if (!hadDragContinue && ev.target.classList.contains('var-name')) {
            popupVarMenu(ev);
            // So codearea click doesn't remove it
            ev.stopPropagation();
        }
        generateCode();
        checkpointSave();
    }
    d.addEventListener('mousemove', dragcontinue)
    d.addEventListener('mouseup', dragend)
    this.classList.add('selected');
    var tmp = this;
    while (typeof tmp.next != "undefined" && tmp.next) {
        tmp = tmp.next;
        tmp.classList.add('selected');
    }
    if (typeof this.prev != "undefined" && this.prev) {
        this.prev.next = false;
        this.prev = false;
    }
    ev.stopPropagation();
}
function reflow() {
    for (var i=0; i<tiles.length; i++) {
        if (tiles[i].parentNode != codearea)
            continue;
        if (tiles[i].prev)
            continue;
        var tmp = tiles[i];
        var runningTop = +tmp.style.top.substring(0, tmp.style.top.length - 2);
        var left = tmp.style.left;
        while (tmp) {
            tmp.style.top = runningTop + 'px';
            runningTop += tmp.offsetHeight;
            tmp.style.left = left;
            tmp = tmp.next;
        }
    }
}
var blockIndent = 0;
function generateNodeCode(n, loc) {
    if (typeof n == 'undefined' || typeof n == 'boolean')
        return '!ABSENT!';
    if (n.classList.contains('hole')) {
        if (n.childNodes.length)
            return generateNodeCode(n.childNodes[0], loc);
        else
            return '!ABSENT!';
    }
    if (n.classList.contains('number')) {
        return n.getElementsByTagName('input')[0].value;
    }
    if (n.classList.contains('string')) {
        return '"' + n.getElementsByTagName('input')[0].value + '"';
    }
    if (n.classList.contains('var')) {
        return n.getElementsByClassName('var-name')[0].innerHTML;
    }
    if (n.classList.contains('vardec')) {
        var name = n.childNodes[1].value;
        if (!name)
            name = "!UNNAMED!";
        return 'var ' + name + ' := ' + generateNodeCode(n.childNodes[3], 'assignment');
    }
    if (n.classList.contains('print')) {
        var arg = n.children[1].children[0];
        if (!arg)
            return 'print(!ABSENT!)'
        if (arg.classList.contains('string')) {
            return 'print ' + generateNodeCode(arg);
        } else if (arg.classList.contains('operator')) {
            return 'print' + generateNodeCode(arg);
        } else {
            return 'print(' + generateNodeCode(arg) + ')';
        }
    }
    if (n.classList.contains('dialect-request')) {
        var arg = n.getElementsByClassName('hole')[0].children[0]
        var name = n.getElementsByClassName('method-name')[0].innerHTML;
        if (!arg)
            return name + '(!ABSENT!)'
        if (name.substring(name.length -2) == ":=")
                return name + ' ' + generateNodeCode(arg);
        if (arg.classList.contains('string')) {
            return name + ' ' + generateNodeCode(arg);
        } else if (arg.classList.contains('operator')) {
            return name + generateNodeCode(arg);
        } else {
            return name + '(' + generateNodeCode(arg) + ')';
        }
    }
    if (n.classList.contains('constant')) {
        return n.dataset.name;
    }
    if (n.classList.contains('selfcall')) {
        return n.children[0].value + '(' + generateNodeCode(n.children[1]) + ')';
    }
    if (n.classList.contains('request')) {
        return generateNodeCode(n.children[0].children[0]) + '.' + n.children[2].value;
    }
    if (n.classList.contains('operator') || n.classList.contains('comparison-operator')) {
        var l = false;
        var r = false;
        var op = '';
        for (var i=0; i<n.children.length; i++) {
            var c = n.children[i];
            if (c.classList.contains('hole')) {
                if (l) {
                    r = c.children[0];
                    break;
                } else {
                    l = c.children[0];
                }
            }
            if (c.classList.contains('op') || c.classList.contains('cmpop')) {
                op = c.childNodes[0].data;
            }
        }
        if (loc == 'assignment')
            return generateNodeCode(l) + ' ' + op + ' ' + generateNodeCode(r);
        return '(' + generateNodeCode(l) + ' ' + op + ' ' + generateNodeCode(r) + ')';
    }
    if (n.classList.contains('assign')) {
        var l = false;
        var r = false;
        var op = '';
        for (var i=0; i<n.children.length; i++) {
            var c = n.children[i];
            if (c.classList.contains('hole')) {
                if (l) {
                    r = c.children[0];
                    break;
                } else {
                    l = c.children[0];
                }
            }
        }
        return generateNodeCode(l) + ' := ' + generateNodeCode(r, 'assignment');
    }
    if (n.classList.contains('if')) {
        var cond = n.children[0].children[1].children[0];
        var bodyHole = n.children[1].children[0];
        var body = '';
        var indent = '';
        for (var i=0; i<blockIndent; i++)
            indent += '    ';
        blockIndent++;
        for (var i=0; i<bodyHole.children.length; i++) {
            var ch = bodyHole.children[i];
            body = body + indent + '    ' + generateNodeCode(ch) + '\n'
        }
        var elseText = false;
        if (n.classList.contains('else')) {
            elseText = ' else {\n';
            var elseHole = n.children[3].children[0];
            for (var i=0; i<elseHole.children.length; i++) {
                var ch = elseHole.children[i];
                elseText = elseText + indent + '    ' + generateNodeCode(ch) + '\n'
            }
            elseText = elseText + indent + '}'
        }
        blockIndent--;
        if (!elseText)
            elseText = '';
        return 'if (' + generateNodeCode(cond) + ') then {\n' + body + indent + '}' + elseText;
    }
    if (n.classList.contains('while')) {
        var cond = n.children[0].children[1].children[0];
        var bodyHole = n.children[1].children[0];
        var body = '';
        var indent = '';
        for (var i=0; i<blockIndent; i++)
            indent += '    ';
        blockIndent++;
        for (var i=0; i<bodyHole.children.length; i++) {
            var ch = bodyHole.children[i];
            body = body + indent + '    ' + generateNodeCode(ch) + '\n'
        }
        blockIndent--;
        return 'while {' + generateNodeCode(cond) + '} do {\n' + body + indent + '}';
    }
    if (n.classList.contains('method')) {
        var name = n.childNodes[0].childNodes[1].value;
        var arg = n.childNodes[0].childNodes[3].value;
        var bodyHole = n.children[1].children[0];
        var indent = '';
        for (var i=0; i<blockIndent; i++)
            indent += '    ';
        blockIndent++;
        var body = '';
        for (var i=0; i<bodyHole.children.length; i++) {
            var ch = bodyHole.children[i];
            body = body + indent + '    ' + generateNodeCode(ch) + '\n';
        }
        blockIndent--;
        return 'method ' + name + '(' + arg + ') {\n' + body + indent + '}'
    }
}
function generateCode() {
    var tb = document.getElementById('gracecode');
    tb.value = '';
    var dialect = document.getElementById('dialect').value;
    if (dialect)
        tb.value = 'dialect "' + dialect + '"\n';
    for (var i=0; i<codearea.children.length; i++) {
        var child = codearea.children[i];
        if (child.prev != false)
            continue;
        while (child) {
            tb.value = tb.value + generateNodeCode(child) + '\n';
            child = child.next;
        }
    }
}
function renameVar(oldValue, newValue) {
    var vars = document.getElementsByClassName('var-name');
    for (var i=0; i<vars.length; i++) {
        if (vars[i].innerHTML == oldValue)
            vars[i].innerHTML = newValue;
    }
}
function generateHash(obj) {
    return '#' + btoa(encodeURIComponent(JSON.stringify(obj)));
}
function checkpointSave() {
    var obj = generateJSObject();
    var progHash = generateHash(obj);
    history.pushState(obj, "", progHash);
}
function loadSave() {
    if (!localStorage.getItem("autosave-json")) {
        alert("You have no saved program.");
        return;
    }
    var obj = loadJSON(localStorage.getItem("autosave-json"));
    var progHash = generateHash(obj);
    history.pushState(JSON.parse(localStorage.getItem("autosave-json")), "", progHash);
}

function changeDialect() {
    var cl = document.getElementById('toolbox').classList;
    for (var i=0; i<cl.length; i++)
        if (cl[i].substring(0, 11) == 'in-dialect-')
            cl.remove(cl[i]);
    cl.add('in-dialect-' + document.getElementById('dialect').value);
    generateCode();
    checkpointSave();
}

function shrink() {
    editor.setValue(document.getElementById('gracecode').value, -1);
    codearea.classList.add('shrink');
    var starts = [];
    for (var i=0; i<codearea.children.length; i++) {
        var child = codearea.children[i];
        if (child.prev != false)
            continue;
        starts.push(child);
        continue;
    }
    setTimeout(function() {
        var runningTop = 19;
        for (var i=0; i<starts.length; i++) {
            starts[i].oldTop = starts[i].style.top;
            starts[i].oldLeft = starts[i].style.left;
            starts[i].style.left = '49px';
            starts[i].style.top = runningTop + 'px';
            runningTop += +starts[i].offsetHeight;
            var child = starts[i].next;
            while (child) {
                child.oldTop = child.style.top;
                child.oldLeft = child.style.left;
                child.style.left = '49px';
                child.style.top = runningTop + 'px';
                runningTop += +child.offsetHeight;
                child = child.next;
            }
        }
        setTimeout(function() {
            ctr.style.visibility = 'visible';
            codearea.style.visibility = 'hidden';
        }, 1100);
    }, 700);
}
function grow() {
    ctr.style.visibility = 'hidden';
    codearea.style.visibility = 'visible';
    setTimeout(function() {
        for (var i=0; i<codearea.children.length; i++) {
            var child = codearea.children[i];
            if (child.prev != false)
                continue;
            while (child) {
                child.style.top = child.oldTop;
                child.style.left = child.oldLeft;
                child = child.next;
            }
        }
        setTimeout(function() {
            codearea.classList.add('growing');
            codearea.classList.remove('shrink');
            setTimeout(function() {codearea.classList.remove('growing');}, 1000);
        }, 1100);
    }, 300);
}
function toggleShrink() {
    if (codearea.classList.contains('shrink'))
        grow();
    else
        shrink();
}
function findVarAssignsInScope(varname, el, accum) {
    var e = el;
    var check = function(t) {
        var hole = t.getElementsByClassName('hole')[0];
        if (hole.childNodes.length == 0)
            return;
        if (!hole.childNodes[0].classList.contains('var'))
            return;
        var sel = hole.getElementsByClassName('var-name')[0];
        if (sel.innerHTML == varname)
            accum.push(t);
    }
    while (e) {
        if (e.classList.contains('assign'))
            check(e);
        var refs = e.getElementsByClassName('assign');
        for (var i=0; i<refs.length; i++) {
            check(refs[i]);
        }
        e = e.next;
    }
}
function findVarRefsInScope(varname, el, accum) {
    var e = el;
    while (e) {
        var refs = e.getElementsByClassName('var');
        for (var i=0; i<refs.length; i++) {
            if (refs[i].childNodes[0].innerHTML == varname) {
                if (refs[i].parentNode.parentNode.classList.contains('assign')) {
                    var assign = refs[i].parentNode.parentNode;
                    var hole = assign.getElementsByClassName('hole')[0];
                    if (hole.childNodes.length > 0 && hole.childNodes[0] == refs[i])
                    continue;
                }
                accum.push(refs[i]);
            }
        }
        e = e.next;
    }
}
function findVarsInScope(el, accum, elAccum) {
    // First go up
    var e = el;
    while (e) {
        if (e.classList.contains('vardec')) {
            accum.push(e.getElementsByClassName('variable-name')[0].value);
            elAccum.push(e);
        }
        if (e.classList.contains('method')) {
            accum.push(e.getElementsByTagName('input')[1].value);
            elAccum.push(e);
        }
        e = e.prev;
    }
    // Then go out
    if (el.parentNode != codearea)
        findVarsInScope(el.parentNode, accum, elAccum);
}
function popupVarMenu(ev) {
    var el = ev.target;
    ev.stopImmediatePropagation();
    var menus = codearea.getElementsByClassName('popup-menu');
    if (menus.length) {
        for (var i=0; i<menus.length; i++)
            codearea.removeChild(menus[i]);
        return;
    }
    var menu = document.createElement("ul");
    menu.classList.add("popup-menu");
    var xy = findOffsetTopLeft(el);
    menu.style.top = (xy.top + el.offsetHeight - codearea.offsetTop - 4) + 'px';
    menu.style.left = xy.left + 'px';
    var vars = [];
    findVarsInScope(el, vars, []);
    for (var i=0; i<vars.length; i++) {
        var opt = document.createElement('li');
        opt.innerHTML = vars[i];
        opt.addEventListener("click", function(ev) {
            el.innerHTML = ev.target.innerHTML;
            codearea.removeChild(menu);
            generateCode();
            checkpointSave();
        });
        menu.appendChild(opt);
    }
    if (vars.length == 0) {
        var opt = document.createElement('li');
        opt.innerHTML = '--none--';
        opt.title = "There are no reachable variables from this point in the code.";
        opt.addEventListener("click", function(ev) {
            codearea.removeChild(menu);
            alert("There are no reachable variables from this point in the code.");
        });
        menu.appendChild(opt);
    }
    codearea.appendChild(menu);
    if (menu.offsetLeft + menu.offsetWidth > codearea.offsetWidth) {
        menu.style.left = '';
        menu.style.right = '0px';
    }
    if (menu.offsetTop + menu.offsetHeight - codearea.scrollTop > codearea.offsetHeight) {
        menu.style.top = '';
        menu.style.bottom = (codearea.offsetHeight - xy.top - codearea.offsetTop - 25) + 'px';
    }
}
function drawLineBetweenElements(el1, el2, colour) {
    var c = document.getElementById('overlay-canvas');
    var ctx = c.getContext('2d');
    var xy = findOffsetTopLeft(el1);
    var xy2 = findOffsetTopLeft(el2);
    var c1 = [
        [xy.left, xy.top + el1.offsetHeight / 2],
        [xy.left + el1.offsetWidth, xy.top + el1.offsetHeight / 2],
        [xy.left + el1.offsetWidth / 2, xy.top],
        [xy.left + el1.offsetWidth / 2, xy.top + el1.offsetHeight]
        ];
    var c2 = [
        [xy2.left, xy2.top + el2.offsetHeight / 2],
        [xy2.left + el2.offsetWidth, xy2.top + el2.offsetHeight / 2],
        [xy2.left + el2.offsetWidth / 2, xy2.top],
        [xy2.left + el2.offsetWidth / 2, xy2.top + el2.offsetHeight]
        ];
    var x1, x2, y1, y2;
    var dist = 1000000;
    for (var i=0; i<4; i++) {
        for (var j=0; j<4; j++) {
            var dx = c1[i][0] - c2[j][0];
            var dy = c1[i][1] - c2[j][1];
            var d = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
            if (d < dist) {
                dist = d;
                x1 = c1[i][0];
                x2 = c2[j][0];
                y1 = c1[i][1];
                y2 = c2[j][1];
            }
        }
    }
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = colour;
    ctx.lineWidth = 3;
    ctx.stroke();
}
function showOverlay() {
    var c = document.getElementById('overlay-canvas');
    var ctx = c.getContext('2d');
    c.style.display = 'block';
    setTimeout(function() {
        ctx.clearRect(0, 0, 500, 500);
        c.style.display = 'none';
    }, 1000);
}
function drawMethodRequestLines(el) {
    var vars = [];
    var myInput = el.getElementsByTagName('input')[0];
    var myName = myInput.value;
    var meths = codearea.getElementsByClassName("method");
    for (var i=0; i<meths.length; i++) {
        var methInput = meths[i].getElementsByTagName('input')[0];
        if (myName == methInput.value)
            drawLineBetweenElements(myInput, methInput, "blue");
    }
}
function drawMethodDefinitionLines(el) {
    var vars = [];
    var myInput = el.getElementsByTagName('input')[0];
    var myName = myInput.value;
    var meths = codearea.getElementsByClassName("selfcall");
    for (var i=0; i<meths.length; i++) {
        var methInput = meths[i].getElementsByTagName('input')[0];
        if (myName == methInput.value)
            drawLineBetweenElements(myInput, methInput, "blue");
    }
}
function drawVardecLines(el) {
    var vars = [];
    var myInput = el.getElementsByTagName('input')[0];
    var myName = myInput.value;
    findVarRefsInScope(myName, el, vars);
    for (var i=0; i<vars.length; i++) {
        drawLineBetweenElements(myInput, vars[i], "blue");
    }
    vars = [];
    findVarAssignsInScope(myName, el, vars);
    for (var i=0; i<vars.length; i++) {
        drawLineBetweenElements(myInput, vars[i], "red");
    }
}
function drawVarRefLines(el) {
    var varNames = [];
    var vars = [];
    findVarsInScope(el, varNames, vars);
    var myName = el.childNodes[0].innerHTML;
    var defEl = false;
    for (var i=0; i<vars.length; i++) {
        if (varNames[i] == myName) {
            defEl = vars[i];
            break;
        }
    }
    var defInput = defEl.getElementsByTagName('input')[0];
    if (defEl.classList.contains('method'))
        defInput = defEl.getElementsByTagName('input')[1];
    drawLineBetweenElements(el, defInput, "blue");
    vars = [];
    findVarAssignsInScope(myName, defEl, vars);
    for (var i=0; i<vars.length; i++) {
        drawLineBetweenElements(defInput, vars[i], "red");
    }
}
function drawVarLinesOverText(e) {
    var y = e.clientY;
    var x = e.clientX;
    var vars = codearea.getElementsByClassName('var');
    document.getElementById('overlay-canvas').getContext('2d').clearRect(0, 0, 500, 500);
    var position = e.getDocumentPosition();
    var token = editor.session.getTokenAt(position.row, position.column);
    for (var i=0; i<vars.length; i++) {
        var xy = findOffsetTopLeft(vars[i]);
        if (y >= xy.top - vars[i].clientHeight / 2
                && y <= xy.top + vars[i].clientHeight * 1.5
                && x >= xy.left - vars[i].clientWidth / 2
                && x <= xy.left + vars[i].clientWidth * 1.5) {
            if (token.value != vars[i].getElementsByClassName('var-name')[0].innerHTML) {
                continue;
            }
            drawVarRefLines(vars[i]);
            document.getElementById('overlay-canvas').style.display = 'block';
        }
    }
    vars = codearea.getElementsByClassName('vardec');
    for (var i=0; i<vars.length; i++) {
        var xy = findOffsetTopLeft(vars[i]);
        if (y >= xy.top - vars[i].clientHeight / 2
                && y <= xy.top + vars[i].clientHeight * 1.5
                && x >= xy.left - vars[i].clientWidth / 2
                && x <= xy.left + vars[i].clientWidth * 1.5) {
            if (token.value != vars[i].getElementsByClassName('variable-name')[0].value) {
                continue;
            }
            drawVardecLines(vars[i]);
            document.getElementById('overlay-canvas').style.display = 'block';
        }
    }
    vars = codearea.getElementsByClassName('selfcall');
    for (var i=0; i<vars.length; i++) {
        var xy = findOffsetTopLeft(vars[i]);
        if (y >= xy.top - vars[i].clientHeight / 2
                && y <= xy.top + vars[i].clientHeight * 1.5
                && x >= xy.left - vars[i].clientWidth / 2
                && x <= xy.left + vars[i].clientWidth * 1.5) {
            if (token.value != vars[i].getElementsByTagName('input')[0].value) {
                continue;
            }
            drawMethodRequestLines(vars[i]);
            document.getElementById('overlay-canvas').style.display = 'block';
        }
    }
    vars = codearea.getElementsByClassName('method');
    for (var i=0; i<vars.length; i++) {
        var xy = findOffsetTopLeft(vars[i]);
        if (y >= xy.top - vars[i].clientHeight / 2
                && y <= xy.top + vars[i].clientHeight * 1.5
                && x >= xy.left - vars[i].clientWidth / 2
                && x <= xy.left + vars[i].clientWidth * 1.5) {
            if (token.value != vars[i].getElementsByTagName('input')[0].value) {
                continue;
            }
            drawMethodDefinitionLines(vars[i]);
            document.getElementById('overlay-canvas').style.display = 'block';
        }
    }
}
function attachTileBehaviour(n) {
    n.addEventListener('mousedown', dragstart);
    n.addEventListener('contextmenu', function(ev) {
        ev.preventDefault();
        ev.stopPropagation();
        if (this.classList.contains('var')) {
            drawVarRefLines(this);
            showOverlay();
            return;
        }
        if (this.classList.contains('vardec')) {
            drawVardecLines(this);
            showOverlay();
            return;
        }
        if (this.classList.contains('selfcall')) {
            drawMethodRequestLines(this);
            showOverlay();
            return;
        }
    });
    if (n.classList.contains('vardec') && n.style.pointerEvents != undefined) {
        n.addEventListener('mouseover', function(ev) {
            drawVardecLines(this);
            document.getElementById('overlay-canvas').style.display = 'block';
        });
        n.addEventListener('mouseout', function(ev) {
            document.getElementById('overlay-canvas').getContext('2d').clearRect(0, 0, 500, 500);
            document.getElementById('overlay-canvas').style.display = 'none';
        });
    }
    if (n.classList.contains('var') && n.style.pointerEvents != undefined) {
        n.addEventListener('mouseover', function(ev) {
            drawVarRefLines(this);
            document.getElementById('overlay-canvas').style.display = 'block';
        });
        n.addEventListener('mouseout', function(ev) {
            document.getElementById('overlay-canvas').getContext('2d').clearRect(0, 0, 500, 500);
            document.getElementById('overlay-canvas').style.display = 'none';
        });
    }
    if (n.classList.contains('selfcall') && n.style.pointerEvents != undefined) {
        n.addEventListener('mouseover', function(ev) {
            drawMethodRequestLines(this);
            document.getElementById('overlay-canvas').style.display = 'block';
        });
        n.addEventListener('mouseout', function(ev) {
            document.getElementById('overlay-canvas').getContext('2d').clearRect(0, 0, 500, 500);
            document.getElementById('overlay-canvas').style.display = 'none';
        });
    }
    if (n.classList.contains('method') && n.style.pointerEvents != undefined) {
        var nInput = n.getElementsByTagName('input')[0];
        var nKeyword = n.getElementsByTagName('span')[0];
        nInput.addEventListener('mouseover', function(ev) {
            drawMethodDefinitionLines(n);
            document.getElementById('overlay-canvas').style.display = 'block';
        });
        nInput.addEventListener('mouseout', function(ev) {
            document.getElementById('overlay-canvas').getContext('2d').clearRect(0, 0, 500, 500);
            document.getElementById('overlay-canvas').style.display = 'none';
        });
        nKeyword.addEventListener('mouseover', function(ev) {
            drawMethodDefinitionLines(n);
            document.getElementById('overlay-canvas').style.display = 'block';
        });
        nKeyword.addEventListener('mouseout', function(ev) {
            document.getElementById('overlay-canvas').getContext('2d').clearRect(0, 0, 500, 500);
            document.getElementById('overlay-canvas').style.display = 'none';
        });
    }
    if (!n.next)
        n.next = false;
    if (!n.prev)
        n.prev = false;
    Array.prototype.forEach.call(n.getElementsByTagName('input'),
            function(el) {
                el.addEventListener('mousedown', function(ev) {
                    ev.stopPropagation();
                });
                el.addEventListener('keyup', function(ev) {
                    this.size = this.value.length + 1;
                    generateCode();
                });
                el.addEventListener('blur', function(ev) {
                    this.size = this.value.length;
                    generateCode();
                    checkpointSave();
                });
                if (el.classList.contains('variable-name')) {
                    el.addEventListener('blur', function(ev) {
                        renameVar(el.oldName, el.value);
                        el.oldName = el.value;
                    });
                }
            });
    Array.prototype.forEach.call(n.getElementsByClassName('op'),
            function(el) {
                el.addEventListener('dblclick', function(ev) {
                    switch(this.innerHTML) {
                        case "*":
                            this.innerHTML = '-';
                            break;
                        case "-":
                            this.innerHTML = '/';
                            break;
                        case "/":
                            this.innerHTML = '++';
                            break;
                        case "++":
                            this.innerHTML = '+';
                            break;
                        default:
                            this.innerHTML = '*';
                    }
                    generateCode();
                    checkpointSave();
                });
            });
    Array.prototype.forEach.call(n.getElementsByClassName('cmpop'),
            function(el) {
                el.addEventListener('dblclick', function(ev) {
                    switch(this.innerHTML) {
                        case "==":
                            this.innerHTML = '<';
                            break;
                        case "<":
                            this.innerHTML = '>';
                            break;
                        default:
                            this.innerHTML = '==';
                    }
                    generateCode();
                    checkpointSave();
                });
            });
}
function attachHoleBehaviour(n) {
    n.addEventListener('mouseup', holedrop);
    n.addEventListener('mousemove', function(){alert("entering");});
}
function attachToolboxBehaviour(n) {
    n.addEventListener('mousedown', function(ev) {
        var cl = this.cloneNode(true);
        codearea.appendChild(cl);
        cl.style.position = 'absolute';
        cl.style.top = (this.offsetTop - toolbox.offsetTop - toolbox.scrollTop + codearea.scrollTop) + 'px';
        cl.style.left = '500px';
        attachTileBehaviour(cl);
        dragstart.call(cl, ev);
    });
}
Array.prototype.forEach.call(codearea.getElementsByClassName('tile'),
        attachTileBehaviour);
Array.prototype.forEach.call(toolbox.getElementsByClassName('tile'),
        attachToolboxBehaviour);
codearea.addEventListener('click', function(ev) {
    // Two cases according to whether the event target is considered the
    // span itself or the text node inside it.
    if (ev.target.classList && ev.target.classList.contains('var-name'))
        return;
    if (ev.target.parentNode.classList
        && ev.target.parentNode.classList.contains('var-name'))
        return;
    var menus = codearea.getElementsByClassName('popup-menu');
    for (var i=0; i<menus.length; i++)
        codearea.removeChild(menus[i]);
});
window.addEventListener('popstate', function(ev) {
    if (ev.state != null)
        loadJSON(JSON.stringify(ev.state));
});
