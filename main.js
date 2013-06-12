"use strict"
var holes = document.getElementsByClassName('hole');
var codearea = document.getElementById('codearea');
var toolbox = document.getElementById('toolbox');
var tiles = codearea.getElementsByClassName('tile');
var supportsPointerEvents = false;
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
            updateTileIndicator();
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
        updateTileIndicator();
        if (!hadDragContinue && ev.target.classList.contains('var-name')) {
            popupVarMenu(ev);
            // So codearea click doesn't remove it
            ev.stopPropagation();
        }
        generateCode();
        checkpointSave();
        runOnDrop(obj);
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
function runOnDrop(tile) {
    if (tile.classList.contains('var')) {
        var vars = [];
        findVarsInScope(tile, vars, []);
        if (vars.length == 1 && tile.childNodes[0].innerHTML == '') {
            tile.getElementsByClassName('var-name')[0].innerHTML = vars[0];
        } else if (vars.length != 0) {
            var curname = tile.childNodes[0].innerHTML;
            for (var i=0; i<vars.length; i++)
                if (vars[i] == curname)
                    return;
            popupVarMenu({target: tile.childNodes[0],
                stopImmediatePropagation: function(){}});
        }
    }
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
function updateTileIndicator() {
    var errorTiles = findErroneousTiles();
    if (errorTiles.length > 0)
        document.getElementById('indicator').style.background = 'red';
    else
        document.getElementById('indicator').style.background = 'green';
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
    if (n.dataset && n.dataset.serialiserIndex !== undefined) {
        return codeSerialiser(n);
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
        return n.children[0].value + '(' + generateNodeCode(n.children[1], 'assignment') + ')';
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
    if (n.classList.contains('for')) {
        var iterand = n.children[0].children[1].children[0];
        var varInput = n.querySelector('div > input[type="text"].variable-name');
        var varName = varInput.value;
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
        return 'for (' + generateNodeCode(iterand, 'assignment') + ') do {' + varName + '->\n' + body + indent + '}';
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
    var chunkLine = "// chunks:";
    for (var i=0; i<codearea.children.length; i++) {
        var child = codearea.children[i];
        if (child.prev != false)
            continue;
        chunkLine += " " + child.style.left + "," + child.style.top;
        while (child) {
            tb.value = tb.value + generateNodeCode(child) + '\n';
            child = child.next;
        }
        tb.value = tb.value + "\n";
    }
    var blob = new Blob([tb.value + chunkLine], {type: "text/x-grace;charset=utf-8"});
    if (document.getElementById('downloadlink').href)
        URL.revokeObjectURL(document.getElementById('downloadlink').href);
    document.getElementById('downloadlink').href = URL.createObjectURL(blob);
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
    if (navigator.userAgent.indexOf("MSIE") == -1)
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
    var tb = document.getElementById('toolbox');
    var dialectMethods = tb.getElementsByClassName("dialect-method");
    while (dialectMethods.length) {
        tb.removeChild(dialectMethods[0]);
    }
    addDialectMethods(document.getElementById('dialect').value);
    var cb = document.getElementById('category-bar');
    while (cb.childNodes.length > 0)
        cb.removeChild(cb.lastChild);
    var cats = {};
    for (var i=0; i<tb.childNodes.length; i++) {
        if (!tb.childNodes[i].dataset)
            continue;
        var cat = tb.childNodes[i].dataset.category;
        if (cats[cat])
            continue;
        cats[cat] = true;
        var but = document.createElement("input");
        but.type = "button";
        but.value = cat;
        but.addEventListener("click", function(ev) {
            switchPane(this.value);
        });
        cb.appendChild(but);
    }
    switchPane("Variables");
    generateCode();
    checkpointSave();
}
var chunkLine;
function shrink() {
    if (highlightTileErrors())
        return;
    editor.setValue(document.getElementById('gracecode').value, -1);
    editor.getSession().clearAnnotations();
    codearea.classList.add('shrink');
    toolbox.style.visibility = 'hidden';
    var starts = [];
    chunkLine = "\n// chunks:";
    for (var i=0; i<codearea.children.length; i++) {
        var child = codearea.children[i];
        if (child.prev != false)
            continue;
        chunkLine += " " + child.style.left + "," + child.style.top;
        starts.push(child);
        continue;
    }
    setTimeout(function() {
        var leftEdge = (document.getElementsByClassName('ace_gutter')[0].offsetWidth + 4) + 'px';
        var runningTop = 0;
        if (document.getElementById('dialect').value)
            runningTop = 19;
        for (var i=0; i<starts.length; i++) {
            starts[i].oldTop = starts[i].style.top;
            starts[i].oldLeft = starts[i].style.left;
            starts[i].style.left = leftEdge;
            starts[i].style.top = runningTop + 'px';
            runningTop += +starts[i].offsetHeight;
            var child = starts[i].next;
            while (child) {
                child.oldTop = child.style.top;
                child.oldLeft = child.style.left;
                child.style.left = leftEdge;
                child.style.top = runningTop + 'px';
                runningTop += +child.offsetHeight;
                child = child.next;
            }
            runningTop += 19;
        }
        setTimeout(function() {
            ctr.style.visibility = 'visible';
            codearea.style.visibility = 'hidden';
            document.getElementById('indicator').style.background = 'green';
        }, 1100);
    }, 700);
}
function grow() {
    if (editor.getValue() != document.getElementById('gracecode').value) {
        document.getElementById('stderr_txt').value = "";
        minigrace.modname = "main";
        minigrace.mode = "json";
        minigrace.compile(editor.getValue() + chunkLine);
        minigrace.mode = "js";
        if (minigrace.compileError) {
            var errmsg = showErrorInEditor(document.getElementById('stderr_txt').value);
            if (confirm("This code did not compile: " + errmsg + "\nDo you want to revert to the previous version that did?")) {
                editor.setValue(document.getElementById('gracecode').value, -1);
                editor.getSession().clearAnnotations();
                return;
            }
            return;
        }
        editor.getSession().clearAnnotations();
        rebuildTilesInBackground(minigrace.generated_output);
    }
    document.getElementById('indicator').style.background = 'green';
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
            setTimeout(function() {
                codearea.classList.remove('growing');
                toolbox.style.visibility = 'visible';
            }, 1000);
        }, 1100);
    }, 300);
}
function toggleShrink() {
    if (codearea.classList.contains('shrink'))
        grow();
    else
        shrink();
}
function isValidVariableName(varname) {
    if (varname == "")
        return false;
    if (/[0-9']/.test(varname[0]))
        return false;
    if (/[] !@#$%^&*()-+=.,<>?]/.test(varname)) {
        return false;
    }
    return true;
}
function findErroneousTiles(reasons) {
    if (!reasons)
        reasons = [];
    var tiles = [];
    var emptyHoles = codearea.querySelectorAll(".hole:empty");
    for (var i=0; i<emptyHoles.length; i++) {
        tiles.push(emptyHoles[i]);
        reasons.push("Something needs to go in here");
    }
    var varNames = codearea.getElementsByClassName("variable-name");
    for (var i=0; i<varNames.length; i++)
        if (!isValidVariableName(varNames[i].value)) {
            tiles.push(varNames[i]);
            reasons.push("The variable name \"" + varNames[i].value + "\"is invalid");
        }
    var numbers = codearea.querySelectorAll(".tile.number > input");
    for (var i=0; i<numbers.length; i++)
        if (numbers[i].value == "") {
            tiles.push(numbers[i]);
            reasons.push("You need to write a number here");
        } else if (/[^0-9.]/.test(numbers[i].value)) {
            tiles.push(numbers[i]);
            reasons.push("This is not a valid number");
        }
    var varNames = codearea.getElementsByClassName("var-name");
    for (var i=0; i<varNames.length; i++) {
        if (varNames[i].innerHTML == "") {
            tiles.push(varNames[i]);
            reasons.push("You need to choose a variable name");
        } else {
            var vars = [];
            findVarsInScope(varNames[i], vars, []);
            var found = false;
            for (var j=0; j<vars.length; j++)
                if (vars[j] == varNames[i].innerHTML)
                    found = true;
            if (!found) {
                tiles.push(varNames[i]);
                reasons.push("The variable \"" + varNames[i].innerHTML + "\" is not in scope");
            }
        }
    }
    return tiles;
}
function highlightTileErrors() {
    var tiles = findErroneousTiles();
    if (tiles.length > 0) {
        for (var i=0; i<tiles.length; i++) {
            tiles[i].classList.add('highlight');
        }
        setTimeout(function() {
            for (var i=0; i<tiles.length; i++) {
                tiles[i].classList.remove('highlight');
            }
        }, 2000);
        return true;
    }
    return false;
}
function rebuildTilesInBackground(jsonStr) {
    codearea.classList.add("no-transition");
    codearea.classList.remove('shrink');
    loadJSON(jsonStr);
    checkpointSave();
    var leftEdge = (document.getElementsByClassName('ace_gutter')[0].offsetWidth + 4) + 'px';
    var runningTop = 0;
    if (document.getElementById('dialect').value)
        runningTop = 19;
    var starts = [];
    for (var i=0; i<codearea.children.length; i++) {
        var child = codearea.children[i];
        if (child.prev != false)
            continue;
        starts.push(child);
        continue;
    }
    codearea.classList.add('shrink');
    for (var i=0; i<starts.length; i++) {
        starts[i].oldTop = starts[i].style.top;
        starts[i].oldLeft = starts[i].style.left;
        starts[i].style.left = leftEdge;
        starts[i].style.top = runningTop + 'px';
        runningTop += +starts[i].offsetHeight;
        var child = starts[i].next;
        while (child) {
            child.oldTop = child.style.top;
            child.oldLeft = child.style.left;
            child.style.left = leftEdge;
            child.style.top = runningTop + 'px';
            runningTop += +child.offsetHeight;
            child = child.next;
        }
        runningTop += 19;
    }
    codearea.classList.remove("no-transition");
}
function showErrorInEditor(errstr) {
    var lines = errstr.split("\n");
    var errmsg = "";
    for (var i=0; i<lines.length; i++) {
        if (lines[i].substring(0, 10) != 'minigrace:') {
            errmsg += lines[i].substring(11) + "\n";
            break;
        }
    }
    var bits = errmsg.split(':');
    var errstr = errmsg.substring(bits[0].length + bits[1].length + 3);
    editor.getSession().setAnnotations([{
        row: bits[0] - 1,
        column: bits[1] - 1,
        text: errstr,
        type: "error"
    }]);
    return errstr;
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
    if (e.classList.contains('method')) {
        accum.push(e.getElementsByTagName('input')[1].value);
        elAccum.push(e);
    }
    if (e.classList.contains('for')) {
        var varInput = e.querySelector('div > input[type="text"].variable-name');
        accum.push(varInput.value);
        elAccum.push(e);
    }
    if (e.classList.contains('dialect-method')) {
        var varInputs = getVarInputs(e);
        for (var i=0; i<varInputs.length; i++)
            accum.push(varInputs[i].value);
        if (varInputs.length)
            elAccum.push(e);
    }
    while (e) {
        if (e.classList.contains('vardec')) {
            accum.push(e.getElementsByClassName('variable-name')[0].value);
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
            updateTileIndicator();
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
    ctx.save();
    ctx.translate(0, -codearea.scrollTop);
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
    ctx.restore();
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
function drawConstantLines(el) {
    if (!el.dataset.dialect)
        return;
    var xy = findOffsetTopLeft(el);
    var c = document.getElementById('overlay-canvas');
    var ctx = c.getContext('2d');
    ctx.save();
    ctx.translate(0, -codearea.scrollTop);
    ctx.beginPath();
    if (codearea.style.visibility == 'hidden') {
        ctx.moveTo(xy.left + el.offsetWidth / 2, xy.top);
        ctx.lineTo(149, 19 - codearea.scrollTop);
    } else {
        ctx.moveTo(xy.left + el.offsetWidth / 2, xy.top + el.offsetHeight);
        ctx.lineTo(50, codearea.scrollTop + codearea.offsetHeight);
    }
    ctx.strokeStyle = "green";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.restore();
}
function drawDialectRequestLines(el) {
    var mn = el.childNodes[0];
    var xy = findOffsetTopLeft(mn);
    var c = document.getElementById('overlay-canvas');
    var ctx = c.getContext('2d');
    ctx.save();
    ctx.translate(0, -codearea.scrollTop);
    ctx.beginPath();
    if (codearea.style.visibility == 'hidden') {
        ctx.moveTo(xy.left + mn.offsetWidth / 2, xy.top);
        ctx.lineTo(149, 19 - codearea.scrollTop);
    } else {
        ctx.moveTo(xy.left + mn.offsetWidth / 2, xy.top + mn.offsetHeight);
        ctx.lineTo(50, codearea.scrollTop + codearea.offsetHeight);
    }
    ctx.strokeStyle = "green";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.restore();
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
        drawLineBetweenElements(myInput, vars[i].childNodes[0], "red");
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
    if (!defEl)
        return;
    var defInput = defEl.getElementsByTagName('input')[0];
    if (defEl.classList.contains('method'))
        defInput = defEl.getElementsByTagName('input')[1];
    if (defEl.classList.contains('for'))
        defInput = defEl.getElementsByClassName('variable-name')[0];
    if (defEl.classList.contains('dialect-method'))
        defInput = defEl.getElementsByClassName('variable-name')[0];
    drawLineBetweenElements(el, defInput, "blue");
    vars = [];
    findVarAssignsInScope(myName, defEl, vars);
    for (var i=0; i<vars.length; i++) {
        drawLineBetweenElements(defInput, vars[i].childNodes[0], "red");
    }
}
function drawVarLinesOverText(e) {
    codearea.scrollTop = document.getElementsByClassName('ace_sb')[0].scrollTop;
    var y = e.clientY + codearea.scrollTop - codearea.offsetTop;
    var x = e.clientX;
    var vars = codearea.getElementsByClassName('var');
    document.getElementById('overlay-canvas').getContext('2d').clearRect(0, 0, codearea.offsetWidth, codearea.offsetHeight);
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
    vars = codearea.getElementsByClassName('dialect-method');
    for (var i=0; i<vars.length; i++) {
        var xy = findOffsetTopLeft(vars[i]);
        if (y >= xy.top - vars[i].clientHeight / 2
                && y <= xy.top + vars[i].clientHeight * 1.5
                && x >= xy.left - vars[i].clientWidth / 2
                && x <= xy.left + vars[i].clientWidth * 1.5) {
            if (token.value + ' :=' == vars[i].childNodes[0].innerHTML) {
            } else if (token.value + " (" == vars[i].childNodes[0].innerHTML) {
            } else if (token.value != vars[i].childNodes[0].innerHTML) {
                continue;
            }
            drawDialectRequestLines(vars[i]);
            document.getElementById('overlay-canvas').style.display = 'block';
        }
    }
    vars = codearea.getElementsByClassName('constant');
    for (var i=0; i<vars.length; i++) {
        var xy = findOffsetTopLeft(vars[i]);
        if (y >= xy.top - vars[i].clientHeight / 2
                && y <= xy.top + vars[i].clientHeight * 1.5
                && x >= xy.left - vars[i].clientWidth / 2
                && x <= xy.left + vars[i].clientWidth * 1.5) {
            if (token.value != vars[i].dataset.name) {
                continue;
            }
            drawConstantLines(vars[i]);
            document.getElementById('overlay-canvas').style.display = 'block';
        }
    }
}
function switchPane(category) {
    var tb = document.getElementById("toolbox");
    for (var i=0; i<tb.childNodes.length; i++)
        if (tb.childNodes[i].dataset && tb.childNodes[i].dataset.category
                && tb.childNodes[i].dataset.category != category)
            tb.childNodes[i].style.display = "none";
        else if (tb.childNodes[i].style)
            tb.childNodes[i].style.display = "";
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
    if (n.classList.contains('vardec') && supportsPointerEvents) {
        n.addEventListener('mouseover', function(ev) {
            drawVardecLines(this);
            document.getElementById('overlay-canvas').style.display = 'block';
        });
        n.addEventListener('mouseout', function(ev) {
            document.getElementById('overlay-canvas').getContext('2d').clearRect(0, 0, codearea.offsetWidth, codearea.offsetHeight);
            document.getElementById('overlay-canvas').style.display = 'none';
        });
    }
    if (n.classList.contains('var') && supportsPointerEvents) {
        n.addEventListener('mouseover', function(ev) {
            drawVarRefLines(this);
            document.getElementById('overlay-canvas').style.display = 'block';
        });
        n.addEventListener('mouseout', function(ev) {
            document.getElementById('overlay-canvas').getContext('2d').clearRect(0, 0, codearea.offsetWidth, codearea.offsetHeight);
            document.getElementById('overlay-canvas').style.display = 'none';
        });
    }
    if (n.classList.contains('selfcall') && supportsPointerEvents) {
        n.addEventListener('mouseover', function(ev) {
            drawMethodRequestLines(this);
            document.getElementById('overlay-canvas').style.display = 'block';
        });
        n.addEventListener('mouseout', function(ev) {
            document.getElementById('overlay-canvas').getContext('2d').clearRect(0, 0, codearea.offsetWidth, codearea.offsetHeight);
            document.getElementById('overlay-canvas').style.display = 'none';
        });
    }
    if (n.classList.contains('method') && supportsPointerEvents) {
        var nInput = n.getElementsByTagName('input')[0];
        var nKeyword = n.getElementsByTagName('span')[0];
        nInput.addEventListener('mouseover', function(ev) {
            drawMethodDefinitionLines(n);
            document.getElementById('overlay-canvas').style.display = 'block';
        });
        nInput.addEventListener('mouseout', function(ev) {
            document.getElementById('overlay-canvas').getContext('2d').clearRect(0, 0, codearea.offsetWidth, codearea.offsetHeight);
            document.getElementById('overlay-canvas').style.display = 'none';
        });
        nKeyword.addEventListener('mouseover', function(ev) {
            drawMethodDefinitionLines(n);
            document.getElementById('overlay-canvas').style.display = 'block';
        });
        nKeyword.addEventListener('mouseout', function(ev) {
            document.getElementById('overlay-canvas').getContext('2d').clearRect(0, 0, codearea.offsetWidth, codearea.offsetHeight);
            document.getElementById('overlay-canvas').style.display = 'none';
        });
    }
    if (n.classList.contains('dialect-method') && supportsPointerEvents) {
        n.addEventListener('mouseover', function(ev) {
            drawDialectRequestLines(this);
            document.getElementById('overlay-canvas').style.display = 'block';
        });
        n.addEventListener('mouseout', function(ev) {
            document.getElementById('overlay-canvas').getContext('2d').clearRect(0, 0, codearea.offsetWidth, codearea.offsetHeight);
            document.getElementById('overlay-canvas').style.display = 'none';
        });
    }
    if (n.classList.contains('constant') && supportsPointerEvents) {
        n.addEventListener('mouseover', function(ev) {
            drawConstantLines(this);
            document.getElementById('overlay-canvas').style.display = 'block';
        });
        n.addEventListener('mouseout', function(ev) {
            document.getElementById('overlay-canvas').getContext('2d').clearRect(0, 0, codearea.offsetWidth, codearea.offsetHeight);
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
                    updateTileIndicator();
                    this.size = this.value.length;
                    generateCode();
                    checkpointSave();
                });
                if (el.classList.contains('variable-name')) {
                    el.addEventListener('blur', function(ev) {
                        renameVar(el.oldName, el.value);
                        updateTileIndicator();
                        el.oldName = el.value;
                        generateCode();
                        checkpointSave();
                    });
                }
            });
    Array.prototype.forEach.call(n.getElementsByClassName('op'),
            function(el) {
                el.addEventListener('dblclick', function(ev) {
                    if (!this.dataset.operators)
                        return;
                    var cur = this.childNodes[0].data;
                    var ops = this.dataset.operators.split(" ");
                    var nxt = cur;
                    for (var i=0; i<ops.length; i++) {
                        if (cur == ops[i]) {
                            if (i < ops.length - 1)
                                nxt = ops[i + 1];
                            else
                                nxt = ops[0];
                            break;
                        }
                    }
                    this.removeChild(this.childNodes[0]);
                    this.appendChild(document.createTextNode(nxt));
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
        if (!cl.dataset) {
            cl.dataset = {};
            for (var k in this.dataset)
                cl.dataset[k] = this.dataset[k];
        }
        codearea.appendChild(cl);
        cl.style.position = 'absolute';
        cl.style.top = (this.offsetTop - toolbox.offsetTop - toolbox.scrollTop + codearea.scrollTop) + 'px';
        cl.style.left = codearea.offsetWidth + 'px';
        attachTileBehaviour(cl);
        dragstart.call(cl, ev);
    });
}
var el = document.createElement('div');
el.style.cssText = 'pointer-events: auto';
supportsPointerEvents = (el.style.pointerEvents == 'auto');
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
var indicator = document.getElementById('indicator');
indicator.addEventListener('mouseover', function(ev) {
    if (codearea.style.visibility == 'hidden')
        return;
    var reasons = [];
    var tiles = findErroneousTiles(reasons);
    if (tiles.length > 0)
        document.getElementById('overlay-canvas').style.display = 'block';
    var c = document.getElementById('overlay-canvas');
    var ctx = c.getContext('2d');
    ctx.font = "9pt sans-serif";
    for (var i=0; i<tiles.length; i++) {
        var mn = tiles[i];
        var xy = findOffsetTopLeft(mn);
        ctx.save();
        ctx.translate(0, -codearea.scrollTop);
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = "pink";
        ctx.moveTo(xy.left + mn.offsetWidth / 2, xy.top + mn.offsetHeight);
        ctx.lineTo(indicator.offsetLeft + indicator.offsetWidth / 2, codearea.scrollTop + codearea.offsetHeight);
        ctx.stroke();
        ctx.restore();
    }
    for (var i=0; i<tiles.length; i++) {
        var mn = tiles[i];
        var xy = findOffsetTopLeft(mn);
        ctx.save();
        ctx.translate(0, -codearea.scrollTop);
        ctx.beginPath();
        var textwidth = ctx.measureText(reasons[i]);
        var textleft = xy.left;
        var texttop = xy.top + mn.offsetHeight + 4;
        if (textleft + textwidth.width > codearea.offsetWidth)
            textleft = codearea.offsetWidth - 2 - textwidth.width;
        ctx.fillStyle = "pink";
        ctx.fillRect(textleft, texttop + 3, textwidth.width + 1, 14);
        ctx.fill();
        ctx.fillStyle = "black";
        ctx.lineWidth = 1;
        ctx.strokeStyle = "hsl(330, 75%, 65%)";
        ctx.rect(textleft, texttop + 2, textwidth.width + 2, 16);
        ctx.stroke();
        ctx.fillText(reasons[i], textleft + 1, texttop + 14);
        ctx.restore();
        tiles[i].classList.add('highlight');
    }
});
indicator.addEventListener('mouseout', function(ev) {
    document.getElementById('overlay-canvas').style.display = 'none';
    var tiles = codearea.getElementsByClassName('highlight');
    while (tiles.length > 0) {
        tiles[0].classList.remove('highlight');
    }
});
window.addEventListener('popstate', function(ev) {
    if (ev.state != null)
        loadJSON(JSON.stringify(ev.state));
});
window.addEventListener('load', function(ev) {
    var tb = document.getElementById('toolbox');
    var tiles = tb.getElementsByClassName('tile');
    for (var i=0; i<tiles.length; i++) {
        if (!tiles[i].dataset) {
            tiles[i].dataset = {};
            for (var j=0; j<tiles[i].attributes.length; j++) {
                var k = tiles[i].attributes[j].name;
                if (k.substring(0, 5) == "data-") {
                    tiles[i].dataset[k.substring(5)] = tiles[i].getAttribute(k);
                }
            }
        }
    }
    var op = tb.querySelector('.tile.assign');
    var holes = op.getElementsByClassName('hole');
    if (holes[0].offsetTop != holes[1].offsetTop) {
        var obscurer = document.createElement("div");
        obscurer.style.position = "fixed";
        obscurer.style.top = '0px';
        obscurer.style.left = '0px';
        obscurer.style.bottom = '0px';
        obscurer.style.right = '0px';
        obscurer.style.background = 'black';
        obscurer.style.color = 'white';
        obscurer.style.fontSize = '100px';
        obscurer.style.opacity = 0.95;
        obscurer.style.textAlign = 'center';
        document.body.appendChild(obscurer);
        if (navigator.userAgent.indexOf('Firefox') != -1) {
            obscurer.appendChild(document.createTextNode(
                    "Go to about:config and set layout.css.flexbox.enabled to true, then reload this page."));
            alert("It looks like you're using Firefox, but haven't "
                + "enabled the preference necessary for this tool to "
                + "use the flexbox layout it requires.\n\nGo to "
                + "about:config and set layout.css.flexbox.enabled to "
                + "true, then reload the page.");
        } else {
            obscurer.appendChild(document.createTextNode(
                    "Not usable in this browser. Try a recent version of "
                    + "Firefox or Chrome."));
            alert("It looks like your browser doesn't support the "
                + "flexbox layout used in this tool. Try returning to "
                + "this page in a recent version of Firefox, Chrome, "
                + "or Internet Explorer.");
        }
    }
    var can = document.getElementById('overlay-canvas');
    can.width = codearea.offsetWidth;
    can.height = codearea.offsetHeight;
});
window.addEventListener('resize', function(ev) {
    var can = document.getElementById('overlay-canvas');
    can.width = codearea.offsetWidth;
    can.height = codearea.offsetHeight;
});
var hideCategoryBar = false;
toolbox.addEventListener('mouseover', function(ev) {
    document.getElementById('category-bar').style.display = 'block';
    if (hideCategoryBar) {
        clearTimeout(hideCategoryBar);
        hideCategoryBar = false;
    }
});
toolbox.addEventListener('mouseout', function(ev) {
    hideCategoryBar = setTimeout(function() {
        document.getElementById('category-bar').style.display = 'none';
    }, 300);
});
document.getElementById('category-bar').addEventListener('mouseover',
        function(ev) {
            document.getElementById('category-bar').style.display = 'block';
            if (hideCategoryBar) {
                clearTimeout(hideCategoryBar);
                hideCategoryBar = false;
            }
        }
);
document.getElementById('category-bar').addEventListener('mouseout',
        function(ev) {
            hideCategoryBar = setTimeout(function() {
                document.getElementById('category-bar').style.display = 'none';
            }, 300);
        }
);
