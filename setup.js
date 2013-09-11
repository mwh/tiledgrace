"use strict"
var el = document.createElement('div');
var indicator = document.getElementById('indicator');
var desaturator = document.getElementById('desaturator');
var bin = document.getElementById('bin');
var hideCategoryBar = false;
var bgMinigrace = new Worker("background.js");
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
codearea.addEventListener('scroll', function(ev) {
    bin.style.top = codearea.scrollTop + 'px';
    bin.style.right = (-codearea.scrollLeft) + 'px';
});
indicator.addEventListener('mouseover', function(ev) {
    if (codearea.style.visibility == 'hidden')
        return;
    var reasons = [];
    var tiles = findErroneousTiles(reasons);
    if (tiles.length > 0) {
        desaturator.style.width = codearea.scrollWidth + 'px';
        desaturator.style.height = codearea.scrollHeight + 'px';
        desaturator.style.display = 'block';
        setTimeout(function() {codearea.classList.add('desaturate');}, 10);
        document.getElementById('overlay-canvas').style.display = 'block';
    }
    var c = document.getElementById('overlay-canvas');
    var ctx = c.getContext('2d');
    ctx.font = "9pt sans-serif";
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
    var arrows = arrowOffscreenTiles(tiles);
    for (var k in arrows)
        arrows[k].classList.add('error');
});
indicator.addEventListener('mouseout', function(ev) {
    codearea.classList.remove('desaturate');
    setTimeout(function() {desaturator.style.display = 'none';}, 250);
    document.getElementById('overlay-canvas').style.display = 'none';
    var tiles = codearea.getElementsByClassName('highlight');
    while (tiles.length > 0) {
        tiles[0].classList.remove('highlight');
    }
    clearPopouts();
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
    var inputs = tb.getElementsByTagName('input');
    for (var i=0; i<inputs.length; i++) {
        inputs[i].value = inputs[i].getAttribute('value');
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
        if (navigator.userAgent.indexOf('Firefox') != -1 &&
                (+navigator.userAgent.replace(/^.*rv:([0-9.]+)\).*$/,"$1") >= 18
                    || !navigator.userAgent.search(/rv:[0-9.]+/))
                ) {
            obscurer.appendChild(document.createTextNode(
                    "Go to about:config and set layout.css.flexbox.enabled to true, then reload this page."));
            alert("It looks like you're using Firefox 21 or earlier, but "
                + "haven't "
                + "enabled the preference necessary for this tool to "
                + "use the flexbox layout it requires.\n\nGo to "
                + "about:config and set layout.css.flexbox.enabled to "
                + "true, then reload the page. Alternatively, upgrade to "
                + "Firefox 22 or later.");
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
document.addEventListener('keypress', function(ev) {
    if (ev.keyCode == ev.DOM_VK_F5) {
        ev.preventDefault();
        go();
    }
    if (ev.charCode == 114 && ev.target == document.body
            && !ev.ctrlKey && !ev.metaKey) {// "r"
        ev.preventDefault();
        go();
    }
    if (ev.charCode == 118 && ev.target == document.body) {// "v"
        ev.preventDefault();
        toggleShrink();
    }
});
var getCode = function() {
    if (codearea.classList.contains("shrink"))
        return editor.getValue();
    return document.getElementById('gracecode').value;
}

// Setup stderr.
minigrace.stderr_write = function(value) {
    var stderr = document.getElementById("stderr_txt");
    stderr.value += value;
    stderr.scrollTop = stderr.scrollHeight;
};

// Setup stdout.
minigrace.stdout_write = function(value) {
    var stdout = document.getElementById("stdout_txt");
    stdout.value += value;
    stdout.scrollTop = stdout.scrollHeight;
};

(function(canvas){
    canvas.addEventListener('dblclick', function(ev) {
        if (this.classList.contains('big')) {
            this.classList.remove('big');
        } else {
            this.classList.add('big');
        }
        ev.preventDefault();
    });
    var ctx = canvas.getContext("2d")
    ctx.lineWidth = 1;
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "black";
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.stroke;
})(document.getElementById('standard-canvas'))

if (window.location.hash) {
    if (window.location.hash.substring(0, 8) == "#sample=") {
        var sample = window.location.hash.substring(8);
        window.addEventListener("load", function(ev) {
            loadSample(sample);
        });
    } else {
        var obj = loadJSON(decodeURIComponent((atob(window.location.hash.substring(1)))));
        history.replaceState(obj, "", generateHash(obj));
    }
}
bgMinigrace.postMessage({action: "importFile", modname: "logo",
        url: "logo.js"});
bgMinigrace.postMessage({action: "importFile", modname: "turtle",
        url: "turtle.js"});
bgMinigrace.postMessage({action: "importFile",
        modname: "loopinvariant",
        url: "loopinvariant.js"});
bgMinigrace.postMessage({action: "importFile",
        modname: "sniff",
        url: "sniff.js"});
bgMinigrace.postMessage({action: "importGCT", modname: "logo",
    gct: gctCache['logo']});
bgMinigrace.postMessage({action: "importGCT", modname: "loopinvariant",
    gct: gctCache['loopinvariant']});
bgMinigrace.postMessage({action: "importGCT", modname: "sniff",
    gct: gctCache['sniff']});
document.getElementById('code_txt_real').style.display = 'block';
var editor = ace.edit("code_txt_real");
var GraceMode = require("ace/mode/grace").Mode;
editor.getSession().setMode(new GraceMode());
editor.setBehavioursEnabled(false);
editor.setHighlightActiveLine(true);
editor.setShowFoldWidgets(false);
editor.setShowPrintMargin(false);
editor.getSession().setUseSoftTabs(true);
editor.getSession().setTabSize(4);
editor.setFontSize('14px');
editor.commands.bindKeys({"ctrl-l":null, "ctrl-shift-r":null, "ctrl-r":null, "ctrl-t":null})
editor.on('mousemove', function(e) {
    var position = e.getDocumentPosition();
    var token = editor.session.getTokenAt(position.row, position.column);
    if (token && token.type == 'identifier') {
        drawVarLinesOverText(e);
    } else {
        document.getElementById('overlay-canvas').getContext('2d').clearRect(0, 0, codearea.offsetWidth, codearea.offsetHeight);
    }
});
var ctr = document.getElementById('code_txt_real');
ctr.style.height = document.getElementById('codearea').clientHeight + 'px';
ctr.style.position = 'absolute';
ctr.style.top = codearea.offsetTop + 'px';
ctr.style.left = codearea.offsetLeft + 'px';
ctr.style.visibility = 'hidden';
var lastChange = new Date().getTime();
var changedSinceLast = false;
editor.on("change", function(ev) {
   lastChange = new Date().getTime();
   changedSinceLast = true;
});
setInterval(function() {
    if (!changedSinceLast)
        return;
    if (!codearea.classList.contains("shrink"))
        return;
    if (lastChange + 1000 > new Date().getTime())
        return;
    lastChange = new Date().getTime();
    changedSinceLast = false;
    if (editor.getValue()
        == document.getElementById('gracecode').value) {
        document.getElementById('indicator').style.background = 'green';
        editor.getSession().clearAnnotations();
        return;
    }
    bgMinigrace.onmessage = function(ev) {
        if (!codearea.classList.contains("shrink"))
            return;
        if (!ev.data.success) {
            document.getElementById('indicator').style.background = 'red';
            showErrorInEditor(ev.data.stderr)
            return;
        }
        editor.getSession().clearAnnotations();
        rebuildTilesInBackground(ev.data.output);
        document.getElementById('gracecode').value = editor.getValue();
    document.getElementById('indicator').style.background = 'green';
    }
    document.getElementById('indicator').style.background = 'orange';
    bgMinigrace.postMessage({action: "compile", mode: "json",
        modname: "main", source: editor.getValue() + chunkLine});

}, 1000);
setTimeout(function() {
    changeDialect();
}, 250);
