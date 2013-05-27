var serialisers = [];
var StandardGrace = {
    'operators': [
        {
            lhs: 'Number',
            rhs: 'Number',
            returns: 'Number',
            operators: ["+", "*", "-", "/"]
        },
        {
            lhs: 'Number',
            rhs: 'Number',
            returns: 'Sequence',
            operators: [".."]
        },
        {
            lhs: 'Any',
            rhs: 'Any',
            returns: 'Boolean',
            operators: ["==", "<", ">", "<=", "=>"]
        },
        {
            lhs: 'String',
            rhs: 'String',
            returns: 'String',
            operators: ["++"]
        }
    ],
    methods: {
        "print": {
            name: "print",
            parts: [
                {
                    name: 'print',
                    args: ["Any"]
                },
            ],
            category: "Input/Output",
            returns: "Done"
        },
        "while()do": {
            name: "while()do",
            parts: [
                {
                    name: 'while',
                    args: [
                        {type: 'Block', returns: 'Boolean', multiline: false}
                    ],
                },
                {
                    name: 'do',
                    args: [
                        {type: 'Block', returns: 'Any', multiline: true}
                    ],
                }
            ],
            category: "Control",
            returns: "Done",
            multiline: true,
        },
        "for()do": {
            name: "for()do",
            parts: [
                {
                    name: 'for',
                    args: ["Any"],
                },
                {
                    name: 'do',
                    args: [
                        {
                            type: 'Block',
                            returns: 'Any',
                            multiline: true,
                            params: 1
                        }
                    ],
                }
            ],
            category: "Control",
            returns: "Done",
            multiline: true,
        },
        "if()then": {
            name: "if()then",
            parts: [
                {
                    name: 'if',
                    args: ["Boolean"],
                },
                {
                    name: 'then',
                    args: [
                        {type: 'Block', returns: 'Any', multiline: true}
                    ],
                }
            ],
            category: "Control",
            returns: "Done",
            multiline: true,
        },
        "if()then()else": {
            name: "if()then()else",
            parts: [
                {
                    name: 'if',
                    args: ["Boolean"],
                },
                {
                    name: 'then',
                    args: [
                        {type: 'Block', returns: 'Any', multiline: true}
                    ],
                },
                {
                    name: 'else',
                    args: [
                        {type: 'Block', returns: 'Any', multiline: true}
                    ],
                }
            ],
            category: "Control",
            returns: "Done",
            multiline: true,
        },
    },
};
var currentDialect = StandardGrace;
var dialects = {
    "StandardGrace": StandardGrace,
    "": StandardGrace
};
function extendDialect(sub, sup) {
    sub = dialects[sub];
    sup = dialects[sup];
    if (!sub.operators)
        sub.operators = sup.operators;
    else {
        for (var k in sup.operators) {
            if (!sub.operators[k])
                sub.operators[k] = sup.operators[k];
        }
    }
    if (!sub.methods)
        sub.methods = sup.methods;
    else {
        for (var k in sup.methods) {
            if (!sub.methods[k])
                sub.methods[k] = sup.methods[k];
        }
    }
}
dialects.logo = {
    methods: {
        "forward": {
            name: "forward",
            parts: [{name: "forward", args: ["Number"]}]
        },
        "turnRight": {
            name: "turnRight",
            parts: [{name: "turnRight", args: ["Number"]}]
        },
        "turnLeft": {
            name: "turnLeft",
            parts: [{name: "turnLeft", args: ["Number"]}]
        },
        "lineColor:=": {
            name: "lineColor:=",
            parts: [{name: "lineColor:=", args: ["Any"]}]
        },
        "blue": {name: "blue", parts: [{name: "blue", args: []}]},
        "red": {name: "red", parts: [{name: "red", args: []}]},
        "green": {name: "green", parts: [{name: "green", args: []}]},
        "black": {name: "black", parts: [{name: "black", args: []}]},
    }
};
for (var k in dialects.logo.methods)
    dialects.logo.methods[k].category = "Turtle";
extendDialect("logo", "StandardGrace");
dialects.loopinvariant = {
    methods: {
        "print": {
            name: "print",
            parts: [
                {
                    name: 'print',
                    args: ["Any"]
                },
            ],
            category: "Input/Output",
            returns: "Done"
        },
        "while()invariant()do": {
            name: "while()invariant()do",
            parts: [
                {
                    name: 'while',
                    args: [
                        {type: 'Block', returns: 'Boolean', multiline: false}
                    ],
                },
                {
                    name: 'invariant',
                    args: [
                        {type: 'Block', returns: 'Boolean', multiline: false}
                    ],
                },
                {
                    name: 'do',
                    args: [
                        {type: 'Block', returns: 'Any', multiline: true}
                    ],
                }
            ],
            category: "Control",
            returns: "Done",
            multiline: true,
        },
        "for()invariant()do": {
            name: "for()invariant()do",
            parts: [
                {
                    name: 'for',
                    args: ["Any"],
                },
                {
                    name: 'invariant',
                    args: [
                        {type: 'Block', returns: 'Boolean', multiline: false}
                    ],
                },
                {
                    name: 'do',
                    args: [
                        {
                            type: 'Block',
                            returns: 'Any',
                            multiline: true,
                            params: 1
                        }
                    ],
                }
            ],
            category: "Control",
            returns: "Done",
            multiline: true,
        },
        "if()then": {
            name: "if()then",
            parts: [
                {
                    name: 'if',
                    args: ["Boolean"],
                },
                {
                    name: 'then',
                    args: [
                        {type: 'Block', returns: 'Any', multiline: true}
                    ],
                }
            ],
            category: "Control",
            returns: "Done",
            multiline: true,
        },
        "if()then()else": {
            name: "if()then()else",
            parts: [
                {
                    name: 'if',
                    args: ["Boolean"],
                },
                {
                    name: 'then',
                    args: [
                        {type: 'Block', returns: 'Any', multiline: true}
                    ],
                },
                {
                    name: 'else',
                    args: [
                        {type: 'Block', returns: 'Any', multiline: true}
                    ],
                }
            ],
            category: "Control",
            returns: "Done",
            multiline: true,
        },
    },
    operators: StandardGrace.operators
};


function createOperatorTile(op) {
    var tile = document.createElement("div");
    tile.classList.add("tile");
    tile.classList.add("operator");
    var lhs = document.createElement("div");
    lhs.classList.add("hole");
    var rhs = document.createElement("div");
    rhs.classList.add("hole");
    lhs.dataset.accepts = op.lhs;
    rhs.dataset.accepts = op.rhs;
    tile.dataset.returns = op.returns;
    var oper = document.createElement("div");
    oper.classList.add("op");
    oper.appendChild(document.createTextNode(op.operators[0]));
    var operators = op.operators[0];
    for (var i=1; i<op.operators.length; i++)
        operators = operators + " " + op.operators[i];
    oper.dataset.operators = operators;
    tile.appendChild(lhs);
    tile.appendChild(oper);
    tile.appendChild(rhs);
    return tile;
}

function createDialectRequestTile(req) {
    var tile = document.createElement("div");
    tile.classList.add("tile");
    tile.classList.add("dialect-method");
    var line = tile;
    if (req.multiline) {
        line = document.createElement("div");
        line.classList.add("line");
        tile.appendChild(line);
        tile.classList.add("multiline");
    }
    for (var i=0; i<req.parts.length; i++) {
        var mn = document.createElement('span');
        mn.classList.add("part");
        var ps = document.createElement('span');
        if (i > 0) {
            if (line.lastChild.nodeType == 3) {
                var lst = line.lastChild;
                line.removeChild(lst);
                ps.appendChild(document.createTextNode(lst.data + " " + req.parts[i].name));
            } else {
                ps.appendChild(document.createTextNode(" " + req.parts[i].name));
            }
        } else
            ps.appendChild(document.createTextNode(req.parts[i].name));
        line.appendChild(ps);
        if (req.parts[i].args.length > 1)
            line.appendChild(document.createTextNode("("));
        for (var j=0; j<req.parts[i].args.length; j++) {
            var arg = req.parts[i].args[j];
            if (arg.type == "Block" && arg.multiline) {
                ps.appendChild(document.createTextNode(" {"));
                if (arg.params) {
                    for (var k=0; k<arg.params; k++) {
                        if (k > 0)
                            line.appendChild(document.createTextNode(", "));
                        var inp = document.createElement("input");
                        inp.type = "text";
                        inp.size = 1;
                        inp.classList.add("variable-name");
                        line.appendChild(inp);
                    }
                    line.appendChild(document.createTextNode(" ->"));
                }
                line = document.createElement("div");
                line.classList.add("line");
                tile.appendChild(line);
                var hole = createHole(arg.returns);
                hole.classList.add("multi");
                var indent = document.createElement("div");
                indent.classList.add("indent");
                indent.appendChild(hole);
                line.appendChild(indent);
                line = document.createElement("div");
                line.classList.add("line");
                tile.appendChild(line);
                line.appendChild(document.createTextNode("}"))
            } else if (arg.type == "Block") {
                ps.appendChild(document.createTextNode(" {"));
                line.appendChild(createHole(arg.returns));
                line.appendChild(document.createTextNode("}"));
            } else {
                ps.appendChild(document.createTextNode(" ("));
                line.appendChild(createHole(arg));
                line.appendChild(document.createTextNode(")"));
            }
        }
        if (req.parts[i].args.length > 1)
            line.appendChild(document.createTextNode(")"));
    }
    tile.dataset.serialiserIndex = serialisers.length;
    serialisers.push(req);
    return tile;
}
function createHole(arg) {
    var hole = document.createElement("div");
    hole.classList.add("hole");
    if (typeof arg == "string") {
        hole.dataset.accepts = arg;
    }
    return hole;
}
function getHoles(n) {
    var holes = [];
    for (var i=0; i<n.childNodes.length; i++)
        if (n.childNodes[i].classList
                && n.childNodes[i].classList.contains("hole"))
            holes.push(n.childNodes[i]);
    return holes;
}
function getVarInputs(n) {
    var vars = [];
    if (n.classList.contains("multiline"))
        n = n.childNodes[0];
    for (var i=0; i<n.childNodes.length; i++)
        if (n.childNodes[i].classList
                && n.childNodes[i].classList.contains("variable-name"))
            vars.push(n.childNodes[i]);
    return vars;
}
function codeSerialiser(n) {
    var req = serialisers[n.dataset.serialiserIndex];
    var out = "";
    var line = n;
    if (req.multiline) {
        line = n.childNodes[0];
    }
    var holes = getHoles(line);
    var ho = 0;
    for (var i=0; i<req.parts.length; i++) {
        var part = req.parts[i];
        if (i > 0)
            out += " ";
        out += part.name;
        if (part.args.length == 1) {
            var arg = part.args[0];
            if (arg.type == "Block" && arg.multiline) {
                out += " {";
                if (arg.params) {
                    var vars = getVarInputs(n);
                    for (var j=0; j<vars.length; j++) {
                        if (j > 0)
                            out += ", ";
                        out += vars[j].value;
                    }
                    out += " ->";
                }
                out += "\n";
                var indent = "";
                for (var j=0; i<blockIndent; j++)
                    indent += '    ';
                blockIndent++;
                line = line.nextSibling;
                var hole = line.childNodes[0].childNodes[0];
                for (var j=0; j<hole.childNodes.length; j++) {
                    out += '    ' + indent + generateNodeCode(hole.childNodes[j]) + "\n";
                }
                out += indent + "}"
                blockIndent--;
                line = line.nextSibling;
                holes = getHoles(line);
            } else if (arg.type == "Block") {
                out += " {" + generateNodeCode(holes[ho], 'assignment') + "}";
            } else {
                out += " (" + generateNodeCode(holes[ho], 'assignment') + ")";
            }
            ho++;
        } else {
            out += " (";
            for (var j=0; j<part.args.length; j++) {
                if (j > 0)
                    out += ", ";
                out += generateNodeCode(holes[ho + j]);
            }
            out += ")";
            ho += j;
        }
    }
    return out;
}

function jsonSerialiser(n) {
    var req = serialisers[n.dataset.serialiserIndex];
    var line = n;
    if (req.multiline) {
        line = n.childNodes[0];
    }
    var holes = getHoles(line);
    var ho = 0;
    var overallObject = {
        type: "dialect-method",
        name: req.name,
        parts: []
    };
    for (var i=0; i<req.parts.length; i++) {
        var part = req.parts[i];
        var opart = [];
        overallObject.parts.push(opart);
        for (var j=0; j<part.args.length; j++) {
            var arg = part.args[j];
            if (arg.type == "Block") {
                var block = {
                    type: "block",
                    params: [],
                    body: []
                };
                opart.push(block);
                if (arg.params) {
                    var vars = getVarInputs(line);
                    for (var j=0; j<vars.length; j++) {
                        block.params.push(vars[j].value);
                    }
                }
                if (arg.multiline) {
                    line = line.nextSibling;
                    var hole = line.childNodes[0].childNodes[0];
                    for (var j=0; j<hole.childNodes.length; j++) {
                        block.body.push(generateNodeJSON(hole.childNodes[j]));
                    }
                    line = line.nextSibling;
                    holes = getHoles(line);
                    ho = 0;
                } else {
                    var hole = holes[ho++];
                    for (var j=0; j<hole.childNodes.length; j++) {
                        block.body.push(generateNodeJSON(hole.childNodes[j]));
                    }
                }
            } else {
                opart.push(generateNodeJSON(holes[ho]));
                ho++;
            }
        }
    }
    return overallObject;
}

function jsonDeserialiser(obj) {
    var req = currentDialect.methods[obj.name];
    if (!req)
        return null;
    var tile = createDialectRequestTile(req);
    var line = tile;
    if (req.multiline) {
        line = tile.childNodes[0];
    }
    var holes = getHoles(line);
    var ho = 0;
    for (var i=0; i<req.parts.length; i++) {
        var part = req.parts[i];
        for (var j=0; j<part.args.length; j++) {
            var param = part.args[j];
            var arg = obj.parts[i][0];
            if (!arg) {
            } else if (arg.type == "block") {
                if (arg.params) {
                    var vars = getVarInputs(line);
                    for (var k=0; k<vars.length; k++) {
                        vars[k].value = arg.params[k];
                    }
                }
                var hole;
                if (param.multiline) {
                    line = line.nextSibling;
                    hole = line.childNodes[0].childNodes[0];
                    line = line.nextSibling;
                    holes = getHoles(line);
                    ho = 0;
                } else {
                    hole = holes[ho++];
                }
                for (var k=0; k<arg.body.length; k++)
                    appendChildFromJSON(hole, arg.body[k]);
                fillNextPrev(hole);
                for (var k=0; k<hole.childNodes.length; k++)
                    hole.childNodes[k].style.position = 'static';
            } else {
                holes[ho++].appendChild(createTileFromJSON(arg));
            }
        }
    }
    return tile;
}
function addDialectMethods(dialect) {
    var tb = document.getElementById('toolbox');
    var di = dialects[dialect];
    currentDialect = di;
    var categories = {
        "Control": "Control",
        "Variables": "Variables",
        "Numbers and Strings": "Numbers-and-Strings"
    };
    for (var k in di.methods) {
        var tile = createDialectRequestTile(di.methods[k]);
        tb.appendChild(tile);
        attachToolboxBehaviour(tile);
        if (di.methods[k].category) {
            var cat = di.methods[k].category;
            categories[cat] = true;
            tile.dataset.category = cat;
        }
    }
}
window.addEventListener("load", function() {
    changeDialect();
});
