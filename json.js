"use strict"
var jsonLoadFuncs = [];
function generateNodeJSON(n) {
    if (n == null)
        return null;
    if (typeof n == 'undefined' || typeof n == 'boolean')
        return null;
    if (n.dataset && n.dataset.serialiserIndex !== undefined)
        return jsonSerialiser(n);
    if (n.classList.contains('hole')) {
        if (n.childNodes.length)
            return generateNodeJSON(n.childNodes[0]);
        else
            return null;
    }
    if (n.classList.contains('number')) {
        return {type: 'number',
            value: n.getElementsByTagName('input')[0].value};
    }
    if (n.classList.contains('string')) {
        return {type: 'string',
            value: n.getElementsByTagName('input')[0].value};
    }
    if (n.classList.contains('var')) {
        return {type: 'var', value: n.getElementsByClassName('var-name')[0].innerHTML};
    }
    if (n.classList.contains('vardec')) {
        return {type: 'vardec',
            name: n.childNodes[1].value,
            value: generateNodeJSON(n.childNodes[3])};
    }
    if (n.classList.contains('defdec')) {
        return {type: 'defdec',
            name: n.childNodes[1].value,
            value: generateNodeJSON(n.childNodes[3])};
    }
    if (n.classList.contains('print')) {
        var arg = n.children[1].children[0];
        return {type: 'print', value: generateNodeJSON(arg)};
    }
    if (n.classList.contains('dialect-request')) {
        var arg = n.getElementsByClassName('hole')[0].children[0]
        var name = n.getElementsByClassName('method-name')[0].innerHTML;
        return {type: 'dialect-request',
            value: generateNodeJSON(arg),
            name: name
        };
    }
    if (n.classList.contains('selfcall')) {
        var name = n.children[0].value;
        var args = [];
        for (var i=0; i<n.childNodes.length; i++) {
            var node = n.childNodes[i];
            if (!node.classList)
                continue;
            if (node.classList.contains('hole')) {
                args.push(generateNodeJSON(node));
            }
        }
        return {type: 'selfcall',
            name: name,
            args: args,
            isRequest: true
        };
    }
    if (n.classList.contains('constant')) {
        return {type: 'constant', name: n.dataset.name};
    }
    if (n.classList.contains('method')) {
        var name = n.childNodes[0].childNodes[1].value;
        var argInputs = n.childNodes[0].getElementsByClassName('variable-name');
        var args = [];
        for (var i=0; i<argInputs.length; i++)
            args.push(argInputs[i].value);
        var bodyHole = n.children[1].children[0];
        var body = [];
        for (var i=0; i<bodyHole.children.length; i++) {
            var ch = bodyHole.children[i];
            body.push(generateNodeJSON(ch));
        }
        return {type: 'method',
            name: name,
            arg: args,
            body: body
        };
    }
    if (n.classList.contains('class')) {
        var name = n.childNodes[0].getElementsByClassName('variable-name')[0].value;
        var constructor = n.childNodes[0].getElementsByClassName('method-name')[0].value;
        var argInputs = n.childNodes[0].getElementsByClassName('variable-name');
        var args = [];
        for (var i=1; i<argInputs.length; i++)
            args.push(argInputs[i].value);
        var bodyHole = n.children[1].children[0];
        var body = [];
        for (var i=0; i<bodyHole.children.length; i++) {
            var ch = bodyHole.children[i];
            body.push(generateNodeJSON(ch));
        }
        return {type: 'class',
            name: name,
            constructor: constructor,
            args: args,
            body: body
        };
    }
    if (n.classList.contains('inherits')) {
        var value = n.children[1];
        return {type: 'inherits',
            parent: generateNodeJSON(value)
        };
    }
    if (n.classList.contains('object')) {
        var bodyHole = n.children[1].children[0];
        var body = [];
        for (var i=0; i<bodyHole.children.length; i++) {
            var ch = bodyHole.children[i];
            body.push(generateNodeJSON(ch));
        }
        return {type: 'object',
            body: body
        };
    }
    if (n.classList.contains('request')) {
        var args = [];
        // The receiver is in a hole
        var first = true;
        for (var i=0; i<n.childNodes.length; i++) {
            var node = n.childNodes[i];
            if (!node.classList)
                continue;
            if (node.classList.contains('hole')) {
                if (first) {
                    first = false;
                    continue;
                }
                args.push(generateNodeJSON(node));
            }
        }
        return {type: 'request',
            receiver: generateNodeJSON(n.children[0].children[0]),
            name: n.children[2].value,
            args: args};
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
        if (n.classList.contains('operator'))
            return {type: 'operator',
                operator: op,
                left: generateNodeJSON(l),
                right: generateNodeJSON(r)};
        else
            return {type: 'comparison-operator',
                operator: op,
                left: generateNodeJSON(l),
                right: generateNodeJSON(r)};
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
        return {type: 'assign',
            left: generateNodeJSON(l),
            right: generateNodeJSON(r)};
    }
    if (n.classList.contains('if')) {
        var cond = n.children[0].children[1].children[0];
        var bodyHole = n.children[1].children[0];
        var body = [];
        for (var i=0; i<bodyHole.children.length; i++) {
            var ch = bodyHole.children[i];
            body.push(generateNodeJSON(ch));
        }
        if (!n.classList.contains('else')) {
            return {type: 'if',
                condition: generateNodeJSON(cond),
                body: body};
        }
        var elseBody = [];
        var elseHole = n.children[3].children[0];
        for (var i=0; i<elseHole.children.length; i++) {
            var ch = elseHole.children[i];
            elseBody.push(generateNodeJSON(ch));
        }
        return {type: 'if-else',
            condition: generateNodeJSON(cond),
            body: body,
            elseBody: elseBody};
    }
    if (n.classList.contains('while')) {
        var cond = n.children[0].children[1].children[0];
        var bodyHole = n.children[1].children[0];
        var body = [];
        for (var i=0; i<bodyHole.children.length; i++) {
            var ch = bodyHole.children[i];
            body.push(generateNodeJSON(ch));
        }
        return {type: 'while',
            condition: generateNodeJSON(cond),
            body: body};
    }
    if (n.classList.contains('for')) {
        var iterand = n.children[0].children[1].children[0];
        var varInput = n.querySelector('div > input[type="text"].variable-name');
        var bodyHole = n.children[1].children[0];
        var body = [];
        for (var i=0; i<bodyHole.children.length; i++) {
            var ch = bodyHole.children[i];
            body.push(generateNodeJSON(ch));
        }
        return {type: 'for',
            iterand: generateNodeJSON(iterand),
            loopvar: varInput.value,
            body: body};
    }
}
function generateJSObject() {
    var tb = document.getElementById('gracecode');
    var chunks = [];
    for (var i=0; i<codearea.children.length; i++) {
        var child = codearea.children[i];
        if (child.prev != false)
            continue;
        var y = child.style.top;
        var x = child.style.left;
        var elements = [];
        while (child) {
            elements.push(generateNodeJSON(child))
            child = child.next;
        }
        chunks.push({type: 'chunk', x: x, y: y, body: elements});
    }
    var dialect = document.getElementById('dialect').value;
    return {chunks: chunks, dialect: dialect};
}
function generateJSON() {
    var obj = generateJSObject();
    var json = JSON.stringify(obj, null, 2);
    localStorage.setItem('autosave-json', json);
    return json;
}
function appendChildFromJSON(par, obj) {
    if (obj == null)
        return;
    par.appendChild(createTileFromJSON(obj));
}
function fillNextPrev(hole) {
    var prev = false;
    if (hole.childNodes.length == 0)
        return;
    for (var i=0; i<hole.childNodes.length - 1; i++) {
        hole.childNodes[i].prev = prev;
        hole.childNodes[i].next = hole.childNodes[i+1];
        prev = hole.childNodes[i];
    }
    hole.childNodes[i].prev = prev;
    hole.childNodes[i].next = false;
}
function populateTile(tile, obj) {
    switch(obj.type) {
        case "print":
            appendChildFromJSON(tile.childNodes[1], obj.value);
            break;
        case "dialect-request":
            var argHole = tile.getElementsByClassName('hole')[0];
            appendChildFromJSON(argHole, obj.value);
            tile.childNodes[0].innerHTML = obj.name;
            tile.dataset.name = obj.name;
            if (obj.name.substring(obj.name.length - 2) == ":=") {
                tile.childNodes[0].style.marginRight = '1ex';
                for (var i=0; i<tile.childNodes.length; i++) {
                    if (tile.childNodes[i].nodeType == 3) {
                        tile.removeChild(tile.childNodes[i]);
                        i--;
                    }
                }
            }
            break;
        case "string":
            tile.getElementsByTagName('input')[0].value = obj.value;
            break;
        case "number":
            tile.getElementsByTagName('input')[0].value = obj.value;
            break;
        case "constant":
            tile.innerHTML = obj.name;
            tile.dataset.name = obj.name;
            break;
        case "vardec":
            tile.childNodes[1].value = obj.name;
            appendChildFromJSON(tile.childNodes[3], obj.value);
            break;
        case "defdec":
            tile.childNodes[1].value = obj.name;
            appendChildFromJSON(tile.childNodes[3], obj.value);
            break;
        case "request":
            appendChildFromJSON(tile.childNodes[0], obj.receiver);
            tile.childNodes[2].value = obj.name;
            var argAdder = tile.getElementsByClassName('argument-adder')[0];
            if (obj.args && obj.args.length > 0) {
                for (var i=0; i<obj.args.length; i++) {
                    var hole = addArgumentToRequest(argAdder);
                    appendChildFromJSON(hole, obj.args[i]);
                }
            }
            break;
        case "selfcall":
            tile.childNodes[0].value = obj.name;
            var argAdder = tile.getElementsByClassName('argument-adder')[0];
            if (obj.argument) {
                var hole = addArgumentToRequest(argAdder);
                appendChildFromJSON(hole, obj.argument);
            } else if (obj.args && obj.args.length > 0) {
                for (var i=0; i<obj.args.length; i++) {
                    var hole = addArgumentToRequest(argAdder);
                    appendChildFromJSON(hole, obj.args[i]);
                }
            }
            break;
        case "operator":
        case "comparison-operator":
            var leftHole = tile.childNodes[0];
            var rightHole = tile.childNodes[2];
            ensureDataset(tile);
            ensureDataset(leftHole);
            ensureDataset(rightHole);
            appendChildFromJSON(leftHole, obj.left);
            tile.childNodes[1].innerHTML = obj.operator;
            appendChildFromJSON(rightHole, obj.right);
            var templates = document.getElementById('toolbox').querySelectorAll('.tile.' + obj.type);
            if (templates.length > 1) {
                // Find the right sample tile and copy the datasets
                // (for types, etc) into the new tile. We must also
                // copy holes' datasets for the same reason.
                for (var i=0; i<templates.length; i++)
                    if (templates[i].dataset && templates[i].dataset.operators) {
                        var ops = templates[i].dataset.operators.split(' ');
                        for (var j=0; j<ops.length; j++) {
                            if (ops[j] == obj.operator) {
                                var temp = templates[i];
                                var templhs = templates[i].childNodes[0];
                                var temprhs = templates[i].childNodes[2];
                                for (var k in temp.dataset)
                                    tile.dataset[k] = temp.dataset[k];
                                for (var k in temp.childNodes[0].dataset)
                                    leftHole.dataset[k] = templhs.dataset[k];
                                for (var k in temp.childNodes[2].dataset)
                                    rightHole.dataset[k] = temprhs.dataset[k];
                            }
                        }
                    }
            }
            break;
        case "assign":
            appendChildFromJSON(tile.childNodes[0], obj.left);
            appendChildFromJSON(tile.childNodes[2], obj.right);
            break;
        case "method":
            tile.childNodes[0].childNodes[1].value = obj.name;
            var paramAdder = tile.childNodes[0].getElementsByClassName('parameter-adder')[0];
            if (typeof obj.arg == 'string') {
                addParameterToMethod(paramAdder, obj.arg);
            } else {
                for (var i=0; i<obj.arg.length; i++)
                    addParameterToMethod(paramAdder, obj.arg[i]);
            }
            var bodyHole = tile.children[1].children[0];
            for (var i=0; i<obj.body.length; i++) {
                var ch = obj.body[i];
                appendChildFromJSON(bodyHole, ch);
            }
            fillNextPrev(bodyHole);
            break;
        case "class":
            var name = tile.childNodes[0].getElementsByClassName('variable-name')[0];
            name.value = obj.name;
            var constructor = tile.childNodes[0].getElementsByClassName('method-name')[0];
            constructor.value = obj.constructor;
            var paramAdder = tile.childNodes[0].getElementsByClassName('parameter-adder')[0];
            for (var i=0; i<obj.args.length; i++)
                addParameterToMethod(paramAdder, obj.args[i]);
            var bodyHole = tile.children[1].children[0];
            for (var i=0; i<obj.body.length; i++) {
                var ch = obj.body[i];
                appendChildFromJSON(bodyHole, ch);
            }
            fillNextPrev(bodyHole);
            break;
        case "object":
            var bodyHole = tile.children[1].children[0];
            for (var i=0; i<obj.body.length; i++) {
                var ch = obj.body[i];
                appendChildFromJSON(bodyHole, ch);
            }
            fillNextPrev(bodyHole);
            break;
        case "inherits":
            var bodyHole = tile.children[1];
            appendChildFromJSON(bodyHole, obj.parent);
            break;
        case "while":
            appendChildFromJSON(tile.children[0].children[1], obj.condition);
            var bodyHole = tile.children[1].children[0];
            for (var i=0; i<obj.body.length; i++) {
                var ch = obj.body[i];
                appendChildFromJSON(bodyHole, ch);
            }
            fillNextPrev(bodyHole);
            break;
        case "for":
            appendChildFromJSON(tile.children[0].children[1], obj.iterand);
            tile.childNodes[0].childNodes[3].value = obj.loopvar;
            var bodyHole = tile.children[1].children[0];
            for (var i=0; i<obj.body.length; i++) {
                var ch = obj.body[i];
                appendChildFromJSON(bodyHole, ch);
            }
            fillNextPrev(bodyHole);
            break;
        case "if":
            appendChildFromJSON(tile.children[0].children[1], obj.condition);
            var bodyHole = tile.children[1].children[0];
            for (var i=0; i<obj.body.length; i++) {
                var ch = obj.body[i];
                appendChildFromJSON(bodyHole, ch);
            }
            fillNextPrev(bodyHole);
            break;
        case "if-else":
            appendChildFromJSON(tile.children[0].children[1], obj.condition);
            var bodyHole = tile.children[1].children[0];
            for (var i=0; i<obj.body.length; i++) {
                var ch = obj.body[i];
                appendChildFromJSON(bodyHole, ch);
            }
            var elseHole = tile.children[3].children[0];
            for (var i=0; i<obj.elseBody.length; i++) {
                var ch = obj.elseBody[i];
                appendChildFromJSON(elseHole, ch);
            }
            fillNextPrev(bodyHole);
            fillNextPrev(elseHole);
            break;
        case "var":
            var sel = tile.getElementsByClassName('var-name')[0];
            sel.innerHTML = obj.value;
            sel.oldName = obj.value;
            break;
    }
}
function createTileFromJSON(obj) {
    if (obj.type == "dialect-method") {
        var tile = jsonDeserialiser(obj);
        tile.style.position = 'static';
        tile.style.display = '';
        return tile;
    }
    if (obj.type == "selfcall") {
        if (isDialectSelfcall(obj)) {
            var tile = jsonDeserialiser(obj);
            tile.style.position = 'static';
            tile.style.display = '';
            return tile;
        }
        if (obj.args.length == 0 && !obj.isRequest) {
            // Potential variable
            obj.type = "var";
            obj.value = obj.name;
            var template = document.getElementById('toolbox').querySelector('.tile.var');
            var newTile = template.cloneNode(true);
            newTile.style.position = 'static';
            populateTile(newTile, obj);
            newTile.style.display = '';
            return newTile;
        }
    }
    var template = document.getElementById('toolbox').querySelector('.tile.' + obj.type);
    if (obj.type == "operator" &&
            (obj.operator == "==" || obj.operator == "<"
             || obj.operator == ">")) {
        template = document.getElementById('toolbox').querySelector('.tile.comparison-operator');
    }
    var newTile = template.cloneNode(true);
    newTile.style.position = 'static';
    populateTile(newTile, obj);
    newTile.style.display = '';
    return newTile;
}
function createChunkFromJSON(chunk) {
    if (chunk.body[0] == null)
        return;
    var tiles = Array.prototype.map.call(chunk.body, createTileFromJSON);
    for (var i=1; i<tiles.length; i++) {
        tiles[i].prev = tiles[i-1];
    }
    for (var i=0; i<tiles.length - 1; i++) {
        tiles[i].next = tiles[i+1];
    }
    var runningTop = +chunk.y.substring(0, chunk.y.length - 2);
    for (var i=0; i<tiles.length; i++) {
        codearea.appendChild(tiles[i]);
        tiles[i].style.position = 'absolute';
        tiles[i].style.top = runningTop + 'px';
        runningTop += tiles[i].offsetHeight;
        tiles[i].style.left = chunk.x;
    }
}
function loadJSON(str) {
    var bin = document.getElementById('bin');
    while (codearea.hasChildNodes())
        codearea.removeChild(codearea.lastChild);
    codearea.appendChild(bin);
    codearea.appendChild(desaturator);
    var obj = JSON.parse(str);
    var dialect = document.getElementById('dialect');
    for (var i=0; i<dialect.options.length; i++) {
        if (dialect.options[i].value == obj.dialect) {
            if (dialect.selectedIndex != i) {
                dialect.selectedIndex = i;
                changeDialect();
            }
        }
    }
    if (!obj.dialect) {
        dialect.selectedIndex = 0;
        changeDialect();
    }
    Array.prototype.forEach.call(obj.chunks, createChunkFromJSON);
    Array.prototype.forEach.call(codearea.getElementsByTagName('input'),
            function(el) {
                    if (el.value.length > 0)
                        el.size = el.value.length;
                    if (el.classList.contains('variable-name')) {
                        renameVar(el.value, el.value, el);
                        el.oldName = el.value;
                    }
            });
    Array.prototype.forEach.call(tiles, attachTileBehaviour);
    generateCode();
    if (!codearea.classList.contains('shrink')) {
        updateTileIndicator();
        jsonLoadFuncs.forEach(function(f) {f();});
    }
    return obj;
}
function loadFile() {
    var userfile = document.getElementById('userfile');
    var reader = new FileReader();
    reader.readAsText(userfile.files[0]);
    reader.addEventListener("load", function() {
        minigrace.mode = "json";
        minigrace.compile(reader.result);
        minigrace.mode = "js";
        loadJSON(minigrace.generated_output);
        checkpointSave();
    });
}
function loadSample(k) {
    if (!k || k == 'Select sample')
        return;
    var n = k;
    var sel = document.getElementById('samples');
    for (var i=0; i<sel.options.length; i++)
        if (sel.options[i].value == k)
            n = sel.options[i].label;
    var loading = document.createElement('div');
    loading.style.border = "2px solid hsl(330, 75%, 60%)";
    loading.style.background = 'hsl(180, 0%, 90%)';
    loading.style.color = 'black';
    loading.style.font = '32px sans-serif';
    loading.style.textAlign = 'center';
    loading.style.position = 'absolute';
    loading.style.top = '30%';
    loading.style.left = '30%';
    loading.style.width = '40%';
    var loadingBody = document.createElement('div');
    loadingBody.innerHTML = 'Loading sample "' + n + '": retrieving.<br />This may take a while.';
    loading.appendChild(loadingBody);
    var progressBar = document.createElement('div');
    progressBar.style.background = 'blue';
    progressBar.style.height = '20px';
    progressBar.style.width = '0px';
    loading.appendChild(progressBar);
    document.body.appendChild(loading);
    var req = new XMLHttpRequest();
    req.open("GET", "./sample/" + k + ".grace", false);
    req.send(null);
    if (req.status == 200) {
        bgMinigrace.onmessage = function(ev) {
            if (!ev.data.success) {
                alert("Sample failed to compile for some reason. "
                        + "This is probably a bug.");
                loading.parentNode.removeChild(loading);
                return;
            }
            loadingBody.innerHTML = 'Loading sample "' + n
                + '": creating tiles. <br />This may take a while.';
            progressBar.style.width = "66%";
            setTimeout(function() {
                loadJSON(ev.data.output);
                checkpointSave();
                history.replaceState(generateJSObject(), "", "#sample=" + k);
                loading.parentNode.removeChild(loading);
            }, 50);
        }
        loadingBody.innerHTML = 'Loading sample "' + n + '": compiling. <br />This may take a while.';
        progressBar.style.width = "33%";
        bgMinigrace.postMessage({action: "compile", mode: "json",
            modname: "main", source: req.responseText});
    } else {
        alert("Failed to retrieve sample.");
        loading.parentNode.removeChild(loading);
    }
}
function ensureDataset(n) {
    if (!n.dataset)
        n.dataset = {};
}
coddleBrowser('blink', function() {
    jsonLoadFuncs.push(function() {
        Array.prototype.forEach.call(codearea.getElementsByTagName('input'),
            blinkCoddleInputs);
    });
});
