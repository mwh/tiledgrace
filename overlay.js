"use strict"
var markErrorsAlways = false;
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
    ctx.moveTo(x1 + 4, y1 + 4);
    ctx.lineTo(x2 + 4, y2 + 4);
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
    ctx.strokeStyle = "hsla(120, 100%, 25%, 0.6)";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.restore();
}
function drawDialectRequestLines(el) {
    var mn = el.childNodes[0];
    var xy = findOffsetTopLeft(mn);
    var c = document.getElementById('overlay-canvas');
    var ctx = c.getContext('2d');
    ctx.clearRect(0, 0, c.width, c.height);
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
    ctx.strokeStyle = "hsla(120, 100%, 25%, 0.6)";
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
            drawLineBetweenElements(myInput, methInput, "hsla(240, 100%, 50%, 0.6)");
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
            drawLineBetweenElements(myInput, methInput, "hsla(240, 100%, 50%, 0.6)");
    }
}
function clearPopouts() {
    var popouts = codearea.getElementsByClassName('popout');
    while (popouts.length)
        popouts[0].classList.remove('popout');
    popouts = codearea.getElementsByClassName('popout-arrow');
    while (popouts.length)
        popouts[0].parentNode.removeChild(popouts[0]);
}
function highlightVarReferences(el) {
    var vars = [];
    var myInput = el.getElementsByTagName('input')[0];
    var myName = myInput.value;
    findVarRefsInScope(myName, el, vars);
    for (var i=0; i<vars.length; i++) {
        vars[i].classList.add('popout');
    }
}
function highlightVarDefinition(el, name) {
    var varNames = [];
    var vars = [];
    findVarsInScope(el, varNames, vars);
    var myName;
    if (name)
        myName = name;
    else
        myName = el.childNodes[0].innerHTML;
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
    if (defEl.classList.contains('variable-name'))
        defInput = defEl;
    if (defEl.classList.contains('for'))
        defInput = defEl.getElementsByClassName('variable-name')[0];
    if (defEl.classList.contains('dialect-method'))
        defInput = defEl.getElementsByClassName('variable-name')[0];
    if (defEl.classList.contains('inherits'))
        defInput = defEl;
    defInput.classList.add('popout');
    var xy = findOffsetTopLeft(defInput);
    if (xy.top > codearea.scrollTop + codearea.offsetHeight) {
        createOffscreenArrow('down');
    } else if (xy.top + defInput.offsetHeight < codearea.scrollTop) {
        createOffscreenArrow('up');
    } else if (xy.left > codearea.scrollLeft + codearea.offsetWidth) {
        createOffscreenArrow('right');
    } else if (xy.left + defInput.offsetWidth < codearea.scrollLeft) {
        createOffscreenArrow('left');
    }
}
function createOffscreenArrow(dir) {
    var arrow = document.createElement('div');
    arrow.classList.add('popout-arrow');
    if (dir == 'up') {
        arrow.style.top = (codearea.scrollTop) + 'px';
        arrow.style.left = (codearea.scrollLeft + 0.45 * codearea.offsetWidth - 40) + 'px';
        arrow.innerHTML = '&#58543;';
    } else if (dir == 'down') {
        arrow.style.top = (codearea.scrollTop + codearea.offsetHeight - 80) + 'px';
        arrow.style.left = (codearea.scrollLeft + 0.45 * codearea.offsetWidth - 40) + 'px';
        arrow.innerHTML = '&#58544;';
    } else if (dir == 'left') {
        arrow.style.left = (codearea.scrollLeft) + 'px';
        arrow.style.top = (codearea.scrollTop + 0.45 * codearea.scrollHeight - 40) + 'px';
        arrow.innerHTML = '&#58541;';
    } else if (dir == 'right') {
        arrow.style.top = (codearea.scrollTop + 0.45 * codearea.offsetHeight - 40) + 'px';
        arrow.style.left = (codearea.scrollLeft + codearea.offsetWidth - 80) + 'px';
        arrow.innerHTML = '&#58542;';
    }
    arrow.classList.add(dir);
    codearea.appendChild(arrow);
    return arrow;
}
function drawVardecLines(el) {
    var vars = [];
    var myInput = el.getElementsByTagName('input')[0];
    var myName = myInput.value;
    findVarRefsInScope(myName, el, vars);
    for (var i=0; i<vars.length; i++) {
        drawLineBetweenElements(myInput, vars[i], "hsla(240, 100%, 50%, 0.6)");
    }
    vars = [];
    findVarAssignsInScope(myName, el, vars);
    for (var i=0; i<vars.length; i++) {
        drawLineBetweenElements(myInput, vars[i].childNodes[0], "hsla(0, 100%, 50%, 0.6)");
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
    if (defEl.classList.contains('variable-name'))
        defInput = defEl;
    drawLineBetweenElements(el, defInput, "hsla(240, 100%, 50%, 0.6)");
    vars = [];
    findVarAssignsInScope(myName, defEl, vars);
    for (var i=0; i<vars.length; i++) {
        drawLineBetweenElements(defInput, vars[i].childNodes[0], "hsla(0, 100%, 50%, 0.6)");
    }
}
function drawVarLinesOverText(e) {
    if (document.getElementsByClassName('ace_sb').length)
        codearea.scrollTop = document.getElementsByClassName('ace_sb')[0].scrollTop;
    else
        codearea.scrollTop = document.getElementsByClassName('ace_scrollbar')[0].scrollTop;
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

function dameraulevenshtein(seq1, seq2) {
    // codesnippet:D0DE4716-B6E6-4161-9219-2903BF8F547F
    // codesnippet:CA1A7474-48C0-44B6-AF12-D1AA3CFD9988
    // Conceptually, this is based on a (seq1.length + 1) * (seq2.length + 1)
    // matric. However, only the current and two previous rows are
    // needed at once, so we only store those.
    var oneago, twoago;
    var zeroes = [0];
    var thisrow = [];
    for (var i=0; i<=seq2.length; i++) {
        zeroes.push(0);
        thisrow.push(i + 1);
    }
    // To reduce special cases later on, we store the first column
    // of the matrix at index -1 to match the 0-indexed sequences.
    thisrow[-1] = 0;
    for (var x=0; x<seq1.length; x++) {
        twoago = oneago;
        oneago = thisrow;
        thisrow = zeroes.slice(0);
        thisrow[-1] = x + 1;
        for (var y=0; y<seq2.length; y++) {
            var delcost = oneago[y] + 1;
            var addcost = thisrow[y - 1] + 1;
            var subcost = oneago[y - 1] + (seq1[x] != seq2[y] ? 1 : 0);
            thisrow[y] = Math.min(delcost, addcost, subcost);
            // This deals with transpositions
            if (x > 0 && y > 0 && seq1[x] == seq2[y - 1]
                    && seq1[x-1] == seq2[y] && seq1[x] != seq2[y])
                thisrow[y] = Math.min(thisrow[y], twoago[y - 2] + 1);
        }
    }
    return thisrow[seq2.length - 1];
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
            reasons.push("The variable name \"" + varNames[i].value + "\" is invalid");
        }
    var methodNames = codearea.getElementsByClassName("method-name");
    for (var i=0; i<methodNames.length; i++)
        if (!isValidVariableName(methodNames[i].value)) {
            tiles.push(methodNames[i]);
            reasons.push("The method name \"" + methodNames[i].value + "\" is invalid");
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
            tiles.push(varNames[i].parentNode);
            reasons.push("You need to choose a variable name");
        } else {
            var vars = [];
            findVarsInScope(varNames[i], vars, []);
            var found = false;
            for (var j=0; j<vars.length; j++)
                if (vars[j] == varNames[i].innerHTML)
                    found = true;
            if (!found) {
                tiles.push(varNames[i].parentNode);
                reasons.push("The variable \"" + varNames[i].innerHTML + "\" is not in scope");
            }
        }
    }
    var methodDeclarations = codearea.getElementsByClassName('method');
    for (var i=0; i<methodDeclarations.length; i++) {
        var md = methodDeclarations[i];
        if (md.parentNode != codearea &&
            !md.parentNode.classList.contains('object-scope')) {
            tiles.push(md);
            reasons.push("A method declaration cannot appear here");
        }
    }
    var varDeclarations = codearea.getElementsByClassName('vardec');
    for (var i=0; i<varDeclarations.length; i++) {
        var md = varDeclarations[i];
        if (md.parentNode != codearea
                && !md.parentNode.classList.contains('multi')) {
            tiles.push(md);
            reasons.push("A variable declaration cannot appear here");
        }
    }
    var assignments = codearea.getElementsByClassName('assign');
    for (var i=0; i<assignments.length; i++) {
        var md = assignments[i];
        if (md.parentNode != codearea
                && !md.parentNode.classList.contains('multi')) {
            tiles.push(md);
            reasons.push("A variable assignment cannot appear here");
        }
        var lhs = md.childNodes[0];
        if (lhs.childNodes.length > 0) {
            lhs = lhs.lastChild;
            if (!lhs.classList.contains('var')) {
                tiles.push(lhs);
                reasons.push("This cannot be assigned to");
            }
        }
    }
    var selfcalls = codearea.getElementsByClassName('selfcall');
    for (var i=0; i<selfcalls.length; i++) {
        var sc = selfcalls[i];
        var methname = sc.childNodes[0].value;
        var found = false;
        var best = "";
        var bestScore = methname.length;
        for (var j=0; j<methodDeclarations.length; j++) {
            var md = methodDeclarations[j];
            var mn = md.getElementsByClassName('method-name')[0].value;
            if (mn == methname) {
                found = true;
                break;
            }
            var dl = dameraulevenshtein(methname, mn);
            if (dl < bestScore) {
                bestScore = dl;
                best = mn;
            }
        }
        if (!found) {
            tiles.push(sc.childNodes[0]);
            var reason = "There is no method called \"" + methname + "\"";
            if (bestScore <= methname.length / 2) {
                reason += ". Did you mean \"" + best + "\"?";
            }
            reasons.push(reason);
        }
    }
    var holes = codearea.getElementsByClassName('hole');
    for (var i=0; i<holes.length; i++) {
        var hole = holes[i];
        if (!hole.lastChild)
            continue;
        if (!holeCanHoldTile(hole, hole.lastChild)) {
            tiles.push(hole.lastChild);
            var types = hole.lastChild.dataset.types.split(' ');
            reasons.push("This needs to be " + hole.dataset.accepts + ", not "
                    + types[0] + ".");
        }
    }
    for (var i=0; i<codearea.childNodes.length; i++) {
        var ch = codearea.childNodes[i];
        if (!ch.classList || !ch.classList.contains('tile'))
            continue;
        if (ch.dataset && ch.dataset.onlyInObject == "y") {
            tiles.push(ch);
            reasons.push("This can only be inside an object or class.");
        }
    }
    return tiles;
}
function holeCanHoldTile(hole, tile, extra) {
    if (!tile)
        return true;
    if (!extra) extra = {};
    if (!hole.classList.contains('multi') && tile.next) {
        extra.error = "Only a single tile can go here.";
        return false;
    }
    if (tile.classList.contains('method') &&
            !hole.classList.contains('object-scope')) {
        extra.error = "Method declarations cannot go here.";
        return false;
    }
    if (hole.classList.contains('bind-lhs')) {
        if (!tile.classList.contains('var')
                && !tile.classList.contains('request')) {
            extra.error = "This cannot be assigned to.";
            return false;
        }
    }
    if (!hole.dataset || !hole.dataset.accepts)
        return true;
    var accepts = hole.dataset.accepts;
    if (accepts == "Any")
        return true;
    if (!tile.dataset || !tile.dataset.types)
        return true;
    var types = tile.dataset.types.split(' ');
    for (var j=0; j<types.length; j++)
        if (accepts == types[j])
            return true;
    extra.error = "Only " + accepts + " can go here, not " + types[0] + ".";
    return false;
}
function arrowOffscreenTiles(tiles) {
    var arrows = {};
    for (var i=0; i<tiles.length; i++) {
        var tile = tiles[i];
        var xy = findOffsetTopLeft(tile);
        if (xy.top > codearea.scrollTop + codearea.offsetHeight) {
            if (!arrows['down'])
                arrows['down'] = createOffscreenArrow('down');
        } else if (xy.top + tile.offsetHeight < codearea.scrollTop) {
            if (!arrows['up'])
                arrows['up'] = createOffscreenArrow('up');
        } else if (xy.left > codearea.scrollLeft + codearea.offsetWidth) {
            if (!arrows['right'])
                arrows['right'] = createOffscreenArrow('right');
        } else if (xy.left + tile.offsetWidth < codearea.scrollLeft) {
            if (!arrows['left'])
                arrows['left'] = createOffscreenArrow('left');
        }
    }
    return arrows;
}
function highlightTileErrors(tiles) {
    if (!tiles)
        var tiles = findErroneousTiles();
    if (tiles.length > 0) {
        var arrows = arrowOffscreenTiles(tiles);
        for (var k in arrows)
            arrows[k].classList.add('error');
        tiles.push(indicator);
        for (var i=0; i<tiles.length; i++) {
            tiles[i].classList.add('highlight');
        }
        setTimeout(function() {
            for (var i=0; i<tiles.length; i++) {
                tiles[i].classList.remove('highlight');
            }
            for (var k in arrows)
                arrows[k].parentNode.removeChild(arrows[k]);
        }, 2000);
        return true;
    }
    return false;
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
function findMutableVarsInScope(el, accum, elAccum) {
    // First go up
    var e = el;
    if (e.classList.contains('object') || e.classList.contains("class")) {
        // Inside an object, treat all top-level vars as in scope
        for (var i=0; i<codearea.childNodes.length; i++) {
            var ch = codearea.childNodes[i];
            if (!ch.classList)
                continue;
            if (!ch.classList.contains('tile'))
                continue;
            if (!ch.classList.contains('vardec'))
                continue;
            accum.push(ch.getElementsByClassName('variable-name')[0].value);
            elAccum.push(ch);
        }
    }
    while (e) {
        if (e.classList.contains('vardec')) {
            accum.push(e.getElementsByClassName('variable-name')[0].value);
            elAccum.push(e);
        } else if (e.classList.contains('inherits')) {
            var hole = e.children[1];
            if (hole.childNodes.length > 0 && hole.childNodes[0].dataset) {
                var par = hole.childNodes[0];
                if (par.dataset.inheritedVars) {
                    var vars = par.dataset.inheritedVars.split(",");
                    for (var i=0; i<vars.length; i++) {
                        accum.push(vars[i]);
                        elAccum.push(e);
                    }
                }
            }
        }
        e = e.prev;
    }
    // Then go out
    if (el.parentNode != codearea)
        findMutableVarsInScope(el.parentNode, accum, elAccum);
}
function findVarsInScope(el, accum, elAccum) {
    // First go up
    var e = el;
    if (e.classList.contains('method')) {
        var argInputs = e.childNodes[0].getElementsByClassName('variable-name');
        for (var i=0; i<argInputs.length; i++) {
            accum.push(argInputs[i].value);
            elAccum.push(argInputs[i]);
        }
    }
    if (e.classList.contains('class')) {
        var argInputs = e.childNodes[0].getElementsByClassName('variable-name');
        for (var i=1; i<argInputs.length; i++) {
            accum.push(argInputs[i].value);
            elAccum.push(argInputs[i]);
        }
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
    if (e.classList.contains('object') || e.classList.contains("class")) {
        // Inside an object, treat all top-level vars/defs as in scope
        for (var i=0; i<codearea.childNodes.length; i++) {
            var ch = codearea.childNodes[i];
            if (!ch.classList)
                continue;
            if (!ch.classList.contains('tile'))
                continue;
            if (!ch.classList.contains('vardec')
                    && !ch.classList.contains('defdec'))
                continue;
            accum.push(ch.getElementsByClassName('variable-name')[0].value);
            elAccum.push(ch);
        }
    }
    while (e) {
        if (e.classList.contains('vardec')) {
            accum.push(e.getElementsByClassName('variable-name')[0].value);
            elAccum.push(e);
        } else if (e.classList.contains('defdec')) {
            accum.push(e.getElementsByClassName('variable-name')[0].value);
            elAccum.push(e);
        } else if (e.classList.contains('inherits')) {
            var hole = e.children[1];
            if (hole.childNodes.length > 0 && hole.childNodes[0].dataset) {
                var par = hole.childNodes[0];
                if (par.dataset.inheritedVars) {
                    var vars = par.dataset.inheritedVars.split(",");
                    for (var i=0; i<vars.length; i++) {
                        accum.push(vars[i]);
                        elAccum.push(e);
                    }
                }
            }
        }
        e = e.prev;
    }
    // Then go out
    if (el.parentNode != codearea)
        findVarsInScope(el.parentNode, accum, elAccum);
    else {
        // All top-level classes are always in scope
        var classes = codearea.getElementsByClassName('class');
        for (var i=0; i<classes.length; i++) {
            var cls = classes[i];
            var argInputs = cls.getElementsByClassName('variable-name')[0];
            accum.push(argInputs.value);
            elAccum.push(cls);
        }
    }
}
function findDefiniteValue(tile) {
    if (tile.classList.contains("string"))
        return tile;
    if (tile.classList.contains("number"))
        return tile;
    if (!tile.classList.contains("var"))
        return null;
    var varName = tile.getElementsByClassName('var-name')[0].innerHTML;
    var vars = [];
    var varEls = [];
    findVarsInScope(tile, vars, varEls);
    for (var i=0; i<vars.length; i++) {
        if (vars[i] == varName)
            break;
    }
    if (vars[i] != varName)
        return null;
    var defEl = varEls[i];
    if (!defEl.classList.contains("defdec"))
        return null;
    var hole = defEl.getElementsByClassName('hole')[0];
    if (!hole.lastChild)
        return null;
    return findDefiniteValue(hole.lastChild);
}
var overlaidError = document.createElement('div');
overlaidError.classList.add('overlaid-error');
document.body.appendChild(overlaidError);
function overlayError(msg, relativeTo) {
    var xy = findOffsetTopLeft(relativeTo);
    overlaidError.innerHTML = msg;
    xy.top -= relativeTo.offsetHeight + 10;
    overlaidError.style.top = xy.top + 'px';
    overlaidError.style.left = xy.left + 'px';
    overlaidError.style.display = 'block';
}
