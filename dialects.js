"use strict"
var serialisers = [];
var StandardGrace = {
    'operators': [
        {
            lhs: 'Number',
            rhs: 'Number',
            returns: 'Number',
            description: "Double-click to change operator.",
            operators: ["+", "*", "-", "/"]
        },
        {
            lhs: 'Number',
            rhs: 'Number',
            returns: 'Sequence',
            description: "Range from one number to another.",
            operators: [".."]
        },
        {
            lhs: 'Any',
            rhs: 'Any',
            returns: 'Boolean',
            description: "Double-click to change operator.",
            operators: ["==", "<", ">", "<=", "=>"]
        },
        {
            lhs: 'String',
            rhs: 'String',
            returns: 'String',
            description: "Join two strings together.",
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
            description: "Write a string to the text area.",
            returns: "Done"
        },
        "while()do": {
            name: "while()do",
            parts: [
                {
                    name: 'while',
                    args: [
                        {type: 'Block', returns: 'Boolean', multiline: false,
                            description: "Condition."}
                    ],
                },
                {
                    name: 'do',
                    args: [
                        {type: 'Block', returns: 'Any', multiline: true,
                            description: "Something to do."}
                    ],
                }
            ],
            category: "Control",
            returns: "Done",
            description: "While a condition is true, do something.",
            multiline: true,
        },
        "for()do": {
            name: "for()do",
            parts: [
                {
                    name: 'for',
                    args: ["Iterable"],
                },
                {
                    name: 'do',
                    args: [
                        {
                            type: 'Block',
                            returns: 'Any',
                            multiline: true,
                            params: 1,
                            description: "Something to do for each item.",
                        }
                    ],
                }
            ],
            category: "Control",
            returns: "Done",
            description: "For each item, do something.",
            multiline: true,
        },
        "if()then": {
            name: "if()then",
            parts: [
                {
                    name: 'if',
                    args: ["Boolean"],
                    description: "Condition.",
                },
                {
                    name: 'then',
                    args: [
                        {type: 'Block', returns: 'Any', multiline: true,
                            description: "Something to do if true."}
                    ],
                }
            ],
            category: "Control",
            returns: "Done",
            description: "If a condition is true, do something.",
            multiline: true,
        },
        "if()then()else": {
            name: "if()then()else",
            parts: [
                {
                    name: 'if',
                    args: ["Boolean"],
                    description: "Condition.",
                },
                {
                    name: 'then',
                    args: [
                        {type: 'Block', returns: 'Any', multiline: true,
                            description: "Something to do if true."}
                    ],
                },
                {
                    name: 'else',
                    args: [
                        {type: 'Block', returns: 'Any', multiline: true,
                            description: "Something to do if false."}
                    ],
                }
            ],
            category: "Control",
            returns: "Done",
            description: "If a condition is true, do something, otherwise do something else.",
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
            parts: [{name: "forward", args: ["Number"]}],
            description: "Move forward this much.",
            returns: "Done"
        },
        "turnRight": {
            name: "turnRight",
            parts: [{name: "turnRight", args: ["Number"]}],
            description: "Turn anticlockwise this many degrees.",
            returns: "Done"
        },
        "turnLeft": {
            name: "turnLeft",
            parts: [{name: "turnLeft", args: ["Number"]}],
            description: "Turn clockwise this many degrees.",
            returns: "Done"
        },
        "lineColor:=": {
            name: "lineColor:=",
            parts: [{name: "lineColor:=", args: ["Colour"]}],
            description: "Set the colour of the line.",
            returns: "Done"
        },
        "penUp": {name: "penUp", parts: [{name: "penUp", args: []}],
            returns: "Done", description: "Lift the pen and stop drawing."},
        "penDown": {name: "penDown", parts: [{name: "penDown", args: []}],
            returns: "Done",
            description: "Put the pen back down and start drawing again."},
        "blue": {name: "blue", parts: [{name: "blue", args: []}],
            returns: "Colour", constant: true,
            description: "The colour blue."},
        "red": {name: "red", parts: [{name: "red", args: []}],
            returns: "Colour", constant: true,
            description: "The colour red."},
        "green": {name: "green", parts: [{name: "green", args: []}],
            returns: "Colour", constant: true,
            description: "The colour green."},
        "black": {name: "black", parts: [{name: "black", args: []}],
            returns: "Colour", constant: true,
            description: "The colour black."},
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
dialects.sniff = {
    methods: {
        "rectangle": {
            name: "rectangle",
            parts: [{name: "rectangle", args: []}],
            returns: "Shape",
            description: "Create a rectangle.",
            inheritedVars: ["width", "height", "x", "y", "colour"]
        },
        "circle": {
            name: "circle",
            parts: [{name: "circle", args: []}],
            returns: "Shape",
            description: "Create a circle.",
            inheritedVars: ["radius", "x", "y", "colour"]
        },
        "image": {
            name: "image",
            parts: [{name: "image", args: []}],
            returns: "Shape",
            description: "Create an image object.",
            inheritedVars: ["width", "height", "x", "y", "url"],
            onRegenerate: function(tile) {
                var inheritsTile = tile.parentNode.parentNode;
                if (!inheritsTile.classList.contains("inherits"))
                    return;
                var objTile = inheritsTile.parentNode.parentNode.parentNode;
                if (!objTile.classList.contains("object"))
                    return;
                var assigns = objTile.getElementsByClassName("assign");
                assigns = Array.prototype.slice.call(assigns, 0);
                assigns.forEach(function(assign) {
                    var extras = assign.getElementsByClassName("extra-indicator");
                    var extra = null;
                    if (extras.length == 1) {
                        extra = extras[0];
                        if (extra.parentNode != assign)
                            extra = null;
                    }
                    var vhole = assign.childNodes[0];
                    if (vhole.lastChild == null) {
                        if (extra)
                            extra.parentNode.removeChild(extra);
                        return;
                    }
                    var vtile = vhole.childNodes[0];
                    if (!vtile.classList.contains("var")) {
                        if (extra)
                            extra.parentNode.removeChild(extra);
                        return;
                    }
                    var varname = vtile.childNodes[0].innerHTML;
                    if (varname != "url") {
                        if (extra)
                            extra.parentNode.removeChild(extra);
                        return;
                    }
                    var valhole = assign.childNodes[2];
                    if (valhole.lastChild == null) {
                        if (extra)
                            extra.parentNode.removeChild(extra);
                        return;
                    }
                    var valtile = valhole.childNodes[0];
                    var valOrigin = findDefiniteValue(valtile);
                    if (!valOrigin||!valOrigin.classList.contains("string")) {
                        if (extra)
                            extra.parentNode.removeChild(extra);
                        return;
                    }
                    var strValue = valOrigin.getElementsByTagName("input")[0].value;
                    if (extras.length == 0) {
                        var extra = document.createElement("img");
                        extra.classList.add("extra-indicator");
                        extra.style.maxWidth = "3ex";
                        extra.style.maxHeight = "3ex";
                        extra.style.border = "1px solid black";
                    } else
                        var extra = extras[0];
                    var available = ["ball.png", "face.jpg", "moon.png",
                        "star.png", "sun.png", "bug.png",
                        "smile.png", "stuart.jpg"];
                    extra.onmousedown = function() {
                        var menu = document.createElement("ul");
                        menu.classList.add("popup-menu");
                        var xy = findOffsetTopLeft(extra);
                        menu.style.top = (xy.top + extra.offsetHeight - codearea.offsetTop - 10) + 'px';
                        menu.style.left = xy.left + 'px';
                        available.forEach(function(url) {
                            var li = document.createElement('li');
                            var img = document.createElement('img');
                            img.style.maxWidth = '5ex';
                            img.style.maxHeight = '5ex';
                            img.style.marginLeft = 'auto';
                            img.style.marginRight = 'auto';
                            img.src = url;
                            li.appendChild(img);
                            menu.appendChild(li);
                            var inp=valOrigin.getElementsByTagName("input")[0];
                            li.addEventListener('click', function() {
                                inp.value = url;
                                codearea.removeChild(menu);
                                updateTileIndicator();
                                generateCode();
                                checkpointSave();
                                if (typeof Event == 'function') {
                                    var event = new Event('blur');
                                    inp.dispatchEvent(event);
                                }
                                inp.classList.remove('popout');
                            });
                            li.addEventListener('mouseover', function() {
                                inp.classList.add('popout');
                            });
                            li.addEventListener('mouseout', function() {
                                inp.classList.remove('popout');
                            });
                        });
                        codearea.appendChild(menu);
                    }
                    extra.src = strValue;
                    assign.appendChild(extra);
                });
            }
        },
        "value": {
            name: "value",
            parts: [{name: "value", args: [
                {type: 'Block', returns: 'Any', multiline: false}]
            }],
            returns: "Shape",
            description: "Display a value on screen.",
            inheritedVars: ["x", "y", "label"]
        },
        "whenever()do": {
            name: "whenever()do",
            parts: [{name: "whenever", args: [
                    {type: 'Block', returns: 'Boolean', multiline: false,
                        description: "Condition."}]},
                {name: "do", args: [
                    {type: 'Block', returns: 'Any', multiline: true,
                        description: "Something to do when true."}
                    ]}],
            returns: "Done",
            multiline: true,
            selfcall: true,
            description: "Any time a condition is true, do something.",
            toplevel: true
        },
        "always": {
            name: "always",
            parts: [{name: "always",
                    args: [{type: 'Block', returns: 'Any', multiline: true}]
                    }],
            returns: "Done",
            multiline: true,
            selfcall: true,
            description: "Do something all the time.",
            toplevel: true
        },
        "bounce": {
            name: "bounce",
            parts: [{name: "bounce", args: []}],
            returns: "Done",
            description: "Bounce off an edge.",
            selfcall: true
        },
        "forward": {
            name: "forward",
            parts: [{name: "forward", args: ["Number"]}],
            returns: "Done",
            description: "Move forward some distance.",
            selfcall: true
        },
        "bounceOff": {
            name: "bounceOff",
            parts: [{name: "bounceOff", args: ["Shape"]}],
            returns: "Done",
            description: "Bounce off another object.",
            selfcall: true
        },
        "touchingEdge": {
            name: "touchingEdge",
            parts: [{name: "touchingEdge", args: []}],
            returns: "Boolean",
            description: "True if this object is touching an edge.",
            selfcall: true
        },
        "touching": {
            name: "touching",
            parts: [{name: "touching", args: ["Point"]}],
            returns: "Boolean",
            description: "True if this object is touching the other.",
            selfcall: true
        },
        "face": {
            name: "face",
            parts: [{name: "face", args: ["Point"]}],
            returns: "Done",
            description: "Turn to face a particular point.",
            selfcall: true
        },
        "above": {
            name: "above",
            parts: [{name: "above", args: []}],
            description: "Refers to the last object created.",
            returns: "Shape"
        },
        "Δ": {
            name: "Δ",
            parts: [{name: "Δ", args: []}],
            description: "Refers to the last object created.",
            returns: "Shape"
        },
        "stop": {
            name: "stop",
            parts: [{name: "stop", args: []}],
            description: "Stop the program.",
            returns: "Done"
        },
        "random": {
            name: "random",
            parts: [{name: "random", args: ["Number"]}],
            description: "Returns a random number.",
            returns: "Number"
        },
        "randomPoint": {
            name: "randomPoint",
            parts: [{name: "randomPoint", args: []}],
            description: "Returns a random point in the drawing area.",
            returns: "Point"
        },
        "canvasWidth": {
            name: "canvasWidth",
            parts: [{name: "canvasWidth", args: []}],
            description: "Width of the drawing area.",
            returns: "Number"
        },
        "canvasHeight": {
            name: "canvasHeight",
            parts: [{name: "canvasHeight", args: []}],
            description: "Height of the drawing area.",
            returns: "Number"
        },
        "turn": {
            name: "turn",
            parts: [{name: "turn", args: ["Number"]}],
            returns: "Done",
            description: "Rotate anticlockwise this many degrees.",
            selfcall: true
        },
        "jumpTo": {
            name: "jumpTo",
            parts: [{name: "jumpTo", args: ["Point"]}],
            returns: "Done",
            description: "Move immediately to a point.",
            selfcall: true
        },
        "stamp": {
            name: "stamp",
            parts: [{name: "stamp", args: []}],
            returns: "Done",
            description: "Draw this item onto the background.",
            selfcall: true
        },
        "clear": {
            name: "clear",
            parts: [{name: "clear", args: []}],
            description: "Erase the background.",
            returns: "Done",
        },
        "background": {
            name: "background",
            parts: [{name: "background", args: ["String"]}],
            description: "Set the background colour.",
            returns: "Done"
        },
        "playSound": {
            name: "playSound",
            parts: [{name: "playSound", args: ["String"]}],
            returns: "Done",
            description: "Play a sound.",
            selfcall: true
        },
        "stopSound": {
            name: "stopSound",
            parts: [{name: "stopSound", args: ["String"]}],
            returns: "Done",
            description: "Stop playing a sound.",
            selfcall: true
        },
        "mouse": {
            name: "mouse",
            parts: [{name: "mouse", args: []}],
            description: "The current location of the mouse pointer.",
            returns: "Point"
        },
        "centre": {name: "centre", parts: [{name: "centre", args: []}],
            returns: "Point", constant: true,
            description: "The centre of the drawing area."},
        "rightCentre": {name: "rightCentre",
            parts: [{name: "rightCentre", args: []}],
            returns: "Point", constant: true,
            description: "The middle of the right edge of the drawing area."},
        "leftCentre": {name: "leftCentre",
            parts: [{name: "leftCentre", args: []}],
            returns: "Point", constant: true,
            description: "The middle of the left edge of the drawing area."},
        "hue()saturation()lightness": {
            name: "hue()saturation()lightness",
            parts: [{name: "hue", args: [
                    {type: 'Number',
                        description: "0=red, 120=green, 240=blue."}]},
                {name: "saturation", args: [
                    {type: 'Number',
                        description: "How strong the colour is (0-100)."}
                    ]},
                {name: "lightness", args: [
                    {type: 'Number',
                        description: "How light the colour is (0-100)."}
                    ]}
            ],
            returns: "String",
            selfcall: true,
            description: "Create a colour.",
            toplevel: true,
            onRegenerate: function(tile) {
                var colours = tile.getElementsByClassName("extra-indicator");
                var holes = tile.getElementsByClassName("hole");
                if (holes.length > 3) {
                    if (colours.length)
                        colours[0].parentNode.removeChild(colours[0]);
                    return;
                }
                var definiteValues = [null, null, null];
                for (var i=0; i<holes.length; i++) {
                    if (holes[i].childNodes.length != 1) {
                        if (colours.length)
                            colours[0].parentNode.removeChild(colours[0]);
                        return;
                    }
                    definiteValues[i] = findDefiniteValue(holes[i].lastChild);
                }
                for (var i=0; i<definiteValues.length; i++) {
                    if (!definiteValues[i] ||
                            !definiteValues[i].classList.contains("number")) {
                        if (colours.length)
                            colours[0].parentNode.removeChild(colours[0]);
                        return;
                    }
                }
                var hue = definiteValues[0].childNodes[0].value;
                var sat = definiteValues[1].childNodes[0].value;
                var lit = definiteValues[2].childNodes[0].value;
                if (colours.length == 0) {
                    var col = document.createElement("span");
                    col.classList.add("extra-indicator");
                    col.style.width = "2ex";
                    col.style.height = "1.5ex";
                    col.style.border = "1px solid black";
                } else
                    var col = colours[0];
                col.style.background = "hsl(" + hue + ", " + sat + "%, " + lit + "%)";
                tile.appendChild(col);
            }
        },
    }
};
for (var k in dialects.sniff.methods)
    dialects.sniff.methods[k].category = "Sniff";
dialects.sniff.methods['whenever()do'].category = "Control";
dialects.sniff.methods['always'].category = "Control";
dialects.sniff.methods['stop'].category = "Control";
dialects.sniff.methods.turn.category = "Motion";
dialects.sniff.methods.face.category = "Motion";
dialects.sniff.methods.forward.category = "Motion";
dialects.sniff.methods.jumpTo.category = "Motion";
dialects.sniff.methods.bounce.category = "Motion";
dialects.sniff.methods.bounceOff.category = "Motion";
dialects.sniff.methods.mouse.category = "Sensing";
dialects.sniff.methods.touching.category = "Sensing";
dialects.sniff.methods.touchingEdge.category = "Sensing";
extendDialect("sniff", "StandardGrace");


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
    if (!tile.dataset)
        tile.dataset = {};
    tile.classList.add("tile");
    tile.classList.add("dialect-method");
    tile.dataset.category = req.category;
    if (req.constant)
        tile.classList.add('constant');
    var line = tile;
    if (req.multiline) {
        line = document.createElement("div");
        line.classList.add("line");
        tile.appendChild(line);
        tile.classList.add("multiline");
    }
    if (req.description)
        line.title = req.description;
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
                    var arrow = document.createElement('span');
                    arrow.classList.add('arrow');
                    arrow.appendChild(document.createTextNode("->"));
                    line.appendChild(arrow);
                }
                line = document.createElement("div");
                line.classList.add("line");
                tile.appendChild(line);
                var hole = createHole(arg.returns);
                hole.classList.add("multi");
                if (arg.description)
                    hole.title = arg.description;
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
                var hole = createHole(arg.returns);
                if (arg.description)
                    hole.title = arg.description;
                line.appendChild(hole);
                line.appendChild(document.createTextNode("}"));
            } else if (req.parts[i].name.substring(req.parts[i].name.length-2)
                    == ":=") {
                var pad = document.createElement('span');
                pad.style.marginLeft = '1ex';
                ps.appendChild(pad);
                var hole = createHole(arg.returns);
                if (arg.description)
                    hole.title = arg.description;
                line.appendChild(hole);
            } else {
                ps.appendChild(document.createTextNode(" ("));
                var hole = createHole(arg.returns);
                if (arg.description)
                    hole.title = arg.description;
                line.appendChild(hole);
                line.appendChild(document.createTextNode(")"));
            }
        }
        if (req.parts[i].args.length > 1)
            line.appendChild(document.createTextNode(")"));
    }
    tile.dataset.serialiserIndex = serialisers.length;
    serialisers.push(req);
    if (req.inheritedVars)
        tile.dataset.inheritedVars = req.inheritedVars.join(",");
    if (req.selfcall && !req.toplevel)
        tile.dataset.onlyInObject = "y";
    if (req.returns)
        tile.dataset.types = req.returns;
    return tile;
}
function createHole(arg) {
    var hole = document.createElement("div");
    if (!hole.dataset)
        hole.dataset = {};
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
    if (req.onRegenerate) {
        req.onRegenerate(n);
    }
    var holes = getHoles(line);
    var ho = 0;
    for (var i=0; i<req.parts.length; i++) {
        var part = req.parts[i];
        if (i > 0)
            out += " ";
        out += part.name;
        if (part.args.length == 0) {
        } else if (part.args.length == 1) {
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
                    out += "->";
                }
                out += "\n";
                var indent = "";
                for (var j=0; j<blockIndent; j++)
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
            } else if (part.name.substring(part.name.length - 2) == ":=") {
                out += " " + generateNodeCode(holes[ho], 'assignment');
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

function isDialectSelfcall(obj) {
    var req = currentDialect.methods[obj.name];
    if (!req)
        return false;
    return req.selfcall;
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
    if (!req.parts)
        req.parts = [req.args];
    if (!obj.parts)
        obj.parts = [obj.args];
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
    if (req.inheritedVars)
        tile.dataset.inheritedVars = req.inheritedVars.join(",");
    if (req.selfcall && !req.toplevel)
        tile.dataset.onlyInObject = "y";
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
