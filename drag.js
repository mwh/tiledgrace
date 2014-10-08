"use strict"
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
        if (obj.classList.contains('method')
                && !ch.parentElement.classList.contains('object-scope')) {
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
        overlaidError.style.display = 'none';
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
            var reason = {};
            if (!holeCanHoldTile(bestHole, obj, reason)) {
                bestHole.style.background = 'pink';
                overlayError(reason.error, bestHole);
            }
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
        overlaidError.style.display = 'none';
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
            clearPopouts();
            document.getElementById('overlay-canvas').style.display = 'none';
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
            bestHole.style.background = '';
            if (bestHole.children.length == 0
                    && holeCanHoldTile(bestHole, obj)) {
                var tmp = obj;
                while (tmp) {
                    tmp.style.top = 0;
                    tmp.style.left = 0;
                    tmp.style.position = 'static';
                    bestHole.appendChild(tmp);
                    tmp = tmp.next;
                }
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
        runOnDrop(obj);
        reflow();
        updateTileIndicator();
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
function runOnDrop(tile) {
    if (tile.classList.contains('var')) {
        var vars = [];
        if (tile.parentNode.classList.contains('bind-lhs'))
            findMutableVarsInScope(tile, vars, []);
        else
            findVarsInScope(tile, vars, []);
        if (tile.childNodes[0].innerHTML == 'Variable')
            tile.childNodes[0].innerHTML = '';
        if (vars.length == 1 && tile.childNodes[0].innerHTML == '') {
            tile.getElementsByClassName('var-name')[0].innerHTML = vars[0];
        } else if (vars.length != 0) {
            var curname = tile.childNodes[0].innerHTML;
            for (var i=0; i<vars.length; i++)
                if (vars[i] == curname)
                    return;
            popupVarMenu({target: tile.childNodes[0],
                stopImmediatePropagation: function(){}});
        } else if (tile.childNodes[0].innerHTML != ''
                && tile.parentNode.classList.contains('bind-lhs')) {
            tile.childNodes[0].innerHTML = '';
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
    if (markErrorsAlways) {
        var wereErrors = codearea.getElementsByClassName('has-error');
        while (wereErrors.length) {
            wereErrors[0].title = "";
            wereErrors[0].classList.remove('has-error');
        }
    }
    var reasons = [];
    var errorTiles = findErroneousTiles(reasons);
    if (errorTiles.length > 0)
        document.getElementById('indicator').style.background = 'red';
    else
        document.getElementById('indicator').style.background = 'green';
    if (markErrorsAlways) {
        for (var i=0; i<errorTiles.length; i++) {
            errorTiles[i].classList.add('has-error');
            errorTiles[i].title = reasons[i];
        }
    }
}
function renameVar(oldValue, newValue, relativeTo) {
    if (!relativeTo)
        relativeTo = codearea;
    else {
        if (relativeTo.classList.contains('class-name'))
            relativeTo = codearea;
        else {
            while (relativeTo && !relativeTo.classList.contains('tile'))
                relativeTo = relativeTo.parentNode;
            if (!relativeTo)
                relativeTo = codearea;
        }
    }
    var tmp = relativeTo;
    while (tmp) {
        var vars = tmp.getElementsByClassName('var-name');
        for (var i=0; i<vars.length; i++) {
            if (vars[i].innerHTML == oldValue)
                vars[i].innerHTML = newValue;
        }
        tmp = tmp.next;
    }
}
