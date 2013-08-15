"use strict"
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
        if (md.parentNode != codearea) {
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
    }
    var selfcalls = codearea.getElementsByClassName('selfcall');
    for (var i=0; i<selfcalls.length; i++) {
        var sc = selfcalls[i];
        var methname = sc.childNodes[0].value;
        var found = false;
        for (var j=0; j<methodDeclarations.length; j++) {
            var md = methodDeclarations[j];
            var mn = md.getElementsByClassName('method-name')[0].value;
            if (mn == methname) {
                found = true;
                break;
            }
        }
        if (!found) {
            tiles.push(sc.childNodes[0]);
            reasons.push("There is no method called \"" + methname + "\"");
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
