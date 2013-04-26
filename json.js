"use strict"
var blockIndent = 0;
function generateNodeJSON(n) {
    if (typeof n == 'undefined' || typeof n == 'boolean')
        return '!ABSENT!';
    if (n.classList.contains('hole')) {
        if (n.childNodes.length)
            return generateNodeJSON(n.childNodes[0]);
        else
            return '!ABSENT!';
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
        return {type: 'var', value: n.getElementsByTagName('select')[0].value};
    }
    if (n.classList.contains('vardec')) {
        return {type: 'vardec',
            name: n.childNodes[1].value,
            value: generateNodeJSON(n.childNodes[3])};
    }
    if (n.classList.contains('print')) {
        var arg = n.children[1].children[0];
        return {type: 'print', value: generateNodeJSON(arg)};
    }
    if (n.classList.contains('request')) {
        return {type: 'request',
            receiver: generateNodeJSON(n.children[0].children[0]),
            name: n.children[2].value};
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
}
function generateJSON() {
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
    var json = JSON.stringify({chunks: chunks}, null, 2);
    localStorage.setItem('autosave-json', json);
    return json;
}
function populateTile(tile, obj) {
    switch(obj.type) {
        case "print":
            tile.childNodes[1].appendChild(createTileFromJSON(obj.value));
            break;
        case "string":
            tile.getElementsByTagName('input')[0].value = obj.value;
            break;
        case "number":
            tile.getElementsByTagName('input')[0].value = obj.value;
            break;
        case "vardec":
            tile.childNodes[1].value = obj.name;
            tile.childNodes[3].appendChild(createTileFromJSON(obj.value));
            break;
        case "request":
            tile.childNodes[0].appendChild(createTileFromJSON(obj.receiver));
            tile.childNodes[2].value = obj.name;
            break;
        case "operator":
        case "comparison-operator":
            tile.childNodes[0].appendChild(createTileFromJSON(obj.left));
            tile.childNodes[1].innerHTML = obj.operator;
            tile.childNodes[2].appendChild(createTileFromJSON(obj.right));
            break;
        case "assign":
            tile.childNodes[0].appendChild(createTileFromJSON(obj.left));
            tile.childNodes[2].appendChild(createTileFromJSON(obj.right));
            break;
        case "while":
            var cond = tile.children[0].children[1].appendChild(createTileFromJSON(obj.condition));
            var bodyHole = tile.children[1].children[0];
            for (var i=0; i<obj.body.length; i++) {
                var ch = obj.body[i];
                bodyHole.appendChild(createTileFromJSON(ch));
            }
            break;
        case "if":
            tile.children[0].children[1].appendChild(createTileFromJSON(obj.condition));
            var bodyHole = n.children[1].children[0];
            for (var i=0; i<obj.body.length; i++) {
                var ch = obj.body[i];
                bodyHole.appendChild(creatTileFromJSON(ch));
            }
            break;
        case "if-else":
            tile.children[0].children[1].appendChild(createTileFromJSON(obj.condition));
            var bodyHole = n.children[1].children[0];
            for (var i=0; i<obj.body.length; i++) {
                var ch = obj.body[i];
                bodyHole.appendChild(creatTileFromJSON(ch));
            }
            var elseHole = n.children[3].children[0];
            for (var i=0; i<obj.elseBody.length; i++) {
                var ch = obj.elseBody[i];
                elseHole.appendChild(creatTileFromJSON(ch));
            }
            break;
        case "var":
            var sel = tile.getElementsByTagName('select')[0];
            var opt = document.createElement('option');
            opt.value = obj.value;
            opt.appendChild(document.createTextNode(obj.value));
            sel.appendChild(opt);
            sel.selectedIndex = 0;
            break;
    }
}
function createTileFromJSON(obj) {
    var template = document.getElementById('toolbox').querySelector('.tile.' + obj.type);
    var newTile = template.cloneNode();
    newTile.style.position = 'static';
    populateTile(newTile, obj);
    return newTile;
}
function createChunkFromJSON(chunk) {
    var tiles = Array.map(chunk.body, createTileFromJSON);
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
    var obj = JSON.parse(str);
    Array.forEach(obj.chunks, createChunkFromJSON);
    Array.forEach(codearea.getElementsByTagName('input'),
            function(el) {
                    el.size = el.value.length;
                    if (el.classList.contains('variable-name')) {
                        renameVar(el.value, el.value);
                        el.oldName = el.value;
                    }
            });
    Array.forEach(tiles, attachTileBehaviour);
    generateCode();
}
