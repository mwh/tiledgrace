"use strict"
var compatibleOperators = {
    '+': {'+': true, '-': true, '*': true, '/': true},
    '-': {'+': true, '-': true, '*': true, '/': true},
    '*': {'+': true, '-': true, '*': true, '/': true},
    '/': {'+': true, '-': true, '*': true, '/': true},
};
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
    if (n.classList.contains('defdec')) {
        var name = n.childNodes[1].value;
        if (!name)
            name = "!UNNAMED!";
        return 'def ' + name + ' = ' + generateNodeCode(n.childNodes[3], 'assignment');
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
        var argStr = '';
        if (n.getElementsByClassName('hole').length > 0) {
            var args = [];
            for (var i=0; i<n.childNodes.length; i++) {
                var node = n.childNodes[i];
                if (!node.classList)
                    continue;
                if (node.classList.contains('hole')) {
                    args.push(generateNodeCode(node, 'assignment'));
                }
            }
            if (args.length)
                argStr = '(' + args.join(',') + ')';
        }
        return n.children[0].value + argStr;
    }
    if (n.classList.contains('request')) {
        var argStr = '';
        if (n.getElementsByClassName('hole').length > 1) {
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
                    args.push(generateNodeCode(node, 'assignment'));
                }
            }
            if (args.length)
                argStr = '(' + args.join(',') + ')';
        }
        return generateNodeCode(n.children[0].children[0]) + '.' + n.children[2].value + argStr;
    }
    if (n.classList.contains('operator') || n.classList.contains('comparison-operator')) {
        var l = false;
        var r = false;
        var op = '';
        for (var i=0; i<n.children.length; i++) {
            var c = n.children[i];
            if (c.classList.contains('hole')) {
                if (l) {
                    r = c.childNodes[0];
                    break;
                } else {
                    l = c.childNodes[0];
                }
            }
            if (c.classList.contains('op') || c.classList.contains('cmpop')) {
                op = c.childNodes[0].data;
            }
        }
        var lMode = undefined;
        var rMode = undefined;
        if (l && l.classList.contains('operator') || r && r.classList.contains('operator')) {
            var lop = false;
            var rop = false;
            if (l && l.classList && l.classList.contains('operator'))
                lop = l.childNodes[1].firstChild.data;
            if (r && r.classList && r.classList.contains('operator'))
                rop = r.childNodes[1].firstChild.data;
            if (lop && rop && lop == rop && lop == op
                    || (lop && !rop
                        && (lop == op || (compatibleOperators[op]
                                && compatibleOperators[op][lop])))
                    || (rop && !lop
                        && (rop == op || (compatibleOperators[op]
                                && compatibleOperators[op][rop])))) {
                if (lop)
                    lMode = 'assignment';
                if (rop)
                    rMode = 'assignment';
            }
        }
        if (loc == 'assignment')
            return generateNodeCode(l, lMode) + ' ' + op
                + ' ' + generateNodeCode(r, rMode);
        return '(' + generateNodeCode(l, lMode) + ' ' + op
            + ' ' + generateNodeCode(r, rMode) + ')';
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
        var argInputs = n.childNodes[0].getElementsByClassName('variable-name');
        var args = [];
        for (var i=0; i<argInputs.length; i++)
            args.push(argInputs[i].value);
        var arg = '';
        if (args.length)
            arg = '(' + args.join(',') + ')';
        var bodyHole = n.children[1].children[0];
        var indent = '';
        for (var i=0; i<blockIndent; i++)
            indent += '    ';
        blockIndent++;
        var body = '';
        for (var i=0; i<bodyHole.children.length; i++) {
            var ch = bodyHole.children[i];
            body = body + indent + '    ' + generateNodeCode(ch, 'assignment') + '\n';
        }
        blockIndent--;
        return 'method ' + name + arg + ' {\n' + body + indent + '}'
    }
    if (n.classList.contains('inherits')) {
        var hole = n.children[1];
        return 'inherits ' + generateNodeCode(hole);
    }
    if (n.classList.contains('object')) {
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
        return 'object {\n' + body + indent + '}'
    }
    if (n.classList.contains('class')) {
        var name = n.childNodes[0].getElementsByClassName('variable-name')[0].value;
        var constructor = n.childNodes[0].getElementsByClassName('method-name')[0].value;
        var argInputs = n.childNodes[0].getElementsByClassName('variable-name');
        var args = [];
        for (var i=1; i<argInputs.length; i++)
            args.push(argInputs[i].value);
        var arg = '';
        if (args.length)
            arg = '(' + args.join(',') + ')';
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
        return 'class ' + name + '.' + constructor + arg + ' {\n' + body + indent + '}'
    }
}
function sortChunks() {
    var classes = [];
    var defs = [];
    var others = [];
    for (var i=0; i<codearea.children.length; i++) {
        var child = codearea.children[i];
        if (child.prev != false)
            continue;
        if (child.classList.contains('class'))
            classes.push(child);
        else if (child.classList.contains('defdec'))
            defs.push(child);
        else
            others.push(child);
    }
    return classes.concat(defs).concat(others);
}
function generateCode() {
    blockIndent = 0;
    var tb = document.getElementById('gracecode');
    tb.value = '';
    var dialect = document.getElementById('dialect').value;
    if (dialect)
        tb.value = 'dialect "' + dialect + '"\n';
    var chunkLine = "// chunks:";
    var chunks = sortChunks();
    for (var i=0; i<chunks.length; i++) {
        var child = chunks[i];
        chunkLine += " " + child.style.left + "," + child.style.top;
        while (child) {
            tb.value = tb.value + generateNodeCode(child, 'assignment') + '\n';
            child = child.next;
        }
        tb.value = tb.value + "\n";
    }
    var blob = new Blob([tb.value + chunkLine], {type: "text/x-grace;charset=utf-8"});
    if (document.getElementById('downloadlink').href)
        URL.revokeObjectURL(document.getElementById('downloadlink').href);
    document.getElementById('downloadlink').href = URL.createObjectURL(blob);
}

