"use strict"
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
        var argInputs = n.childNodes[0].getElementsByClassName('variable-name');
        var args = [];
        for (var i=0; i<argInputs.length; i++)
            args.push(argInputs[i].value);
        var arg = args.join(',');
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

