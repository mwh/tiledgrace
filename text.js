"use strict"
var shrinkFuncs = [];
var growFuncs = [];
function shrink() {
    if (highlightTileErrors())
        return;
    var viewButton = document.getElementById('viewbutton');
    viewButton.disabled = "disabled";
    editor.setValue(document.getElementById('gracecode').value, -1);
    editor.getSession().clearAnnotations();
    codearea.classList.add('shrink');
    shrinkFuncs.forEach(function(f){f()});
    toolbox.style.visibility = 'hidden';
    var starts = [];
    chunkLine = "\n// chunks:";
    var chunks = sortChunks();
    for (var i=0; i<chunks.length; i++) {
        var child = chunks[i];
        chunkLine += " " + child.style.left + "," + child.style.top;
        starts.push(child);
        continue;
    }
    setTimeout(function() {
        var leftEdge = (document.getElementsByClassName('ace_gutter')[0].offsetWidth + 3) + 'px';
        var runningTop = -1;
        var offset = document.getElementsByClassName('ace_gutter-cell')[0].offsetHeight;
        if (document.getElementById('dialect').value)
            runningTop += offset;
        for (var i=0; i<starts.length; i++) {
            starts[i].oldTop = starts[i].style.top;
            starts[i].oldLeft = starts[i].style.left;
            starts[i].style.left = leftEdge;
            starts[i].style.top = runningTop + 'px';
            runningTop += +starts[i].offsetHeight;
            var child = starts[i].next;
            while (child) {
                child.oldTop = child.style.top;
                child.oldLeft = child.style.left;
                child.style.left = leftEdge;
                child.style.top = runningTop + 'px';
                runningTop += +child.offsetHeight;
                child = child.next;
            }
            runningTop += offset;
        }
        setTimeout(function() {
            ctr.style.visibility = 'visible';
            codearea.style.visibility = 'hidden';
            document.getElementById('indicator').style.background = 'green';
            viewButton.disabled = "";
        }, 1100);
    }, 700);
}
function grow() {
    if (editor.getValue() != document.getElementById('gracecode').value) {
        document.getElementById('stderr_txt').value = "";
        minigrace.modname = "main";
        minigrace.mode = "json";
        minigrace.compile(editor.getValue() + chunkLine);
        minigrace.mode = "js";
        if (minigrace.compileError) {
            var errmsg = showErrorInEditor(document.getElementById('stderr_txt').value);
            if (confirm("This code did not compile: " + errmsg + "\nDo you want to revert to the previous version that did?")) {
                editor.setValue(document.getElementById('gracecode').value, -1);
                editor.getSession().clearAnnotations();
                return;
            }
            return;
        }
        editor.getSession().clearAnnotations();
        rebuildTilesInBackground(minigrace.generated_output);
    }
    var viewButton = document.getElementById('viewbutton');
    viewButton.disabled = "disabled";
    document.getElementById('indicator').style.background = 'green';
    ctr.style.visibility = 'hidden';
    codearea.style.visibility = 'visible';
    setTimeout(function() {
        for (var i=0; i<codearea.children.length; i++) {
            var child = codearea.children[i];
            if (child.prev != false)
                continue;
            while (child) {
                child.style.top = child.oldTop;
                child.style.left = child.oldLeft;
                child = child.next;
            }
        }
        setTimeout(function() {
            codearea.classList.add('growing');
            codearea.classList.remove('shrink');
            growFuncs.forEach(function(f){f()});
            setTimeout(function() {
                codearea.classList.remove('growing');
                toolbox.style.visibility = 'visible';
                viewButton.disabled = "";
            }, 1000);
        }, 1100);
    }, 300);
}
function toggleShrink() {
    if (codearea.classList.contains('shrink'))
        grow();
    else
        shrink();
}
function rebuildTilesInBackground(jsonStr) {
    codearea.classList.add("no-transition");
    codearea.classList.remove('shrink');
    loadJSON(jsonStr);
    checkpointSave();
    var leftEdge = (document.getElementsByClassName('ace_gutter')[0].offsetWidth + 4) + 'px';
    var runningTop = 0;
    if (document.getElementById('dialect').value)
        runningTop = 19;
    var starts = [];
    for (var i=0; i<codearea.children.length; i++) {
        var child = codearea.children[i];
        if (child.prev != false)
            continue;
        starts.push(child);
        continue;
    }
    codearea.classList.add('shrink');
    for (var i=0; i<starts.length; i++) {
        starts[i].oldTop = starts[i].style.top;
        starts[i].oldLeft = starts[i].style.left;
        starts[i].style.left = leftEdge;
        starts[i].style.top = runningTop + 'px';
        runningTop += +starts[i].offsetHeight;
        var child = starts[i].next;
        while (child) {
            child.oldTop = child.style.top;
            child.oldLeft = child.style.left;
            child.style.left = leftEdge;
            child.style.top = runningTop + 'px';
            runningTop += +child.offsetHeight;
            child = child.next;
        }
        runningTop += 19;
    }
    codearea.classList.remove("no-transition");
}
function showErrorInEditor(errstr) {
    var lines = errstr.split("\n");
    var errmsg = "";
    for (var i=0; i<lines.length; i++) {
        if (lines[i].substring(0, 10) != 'minigrace:') {
            errmsg += lines[i].substring(11) + "\n";
            break;
        }
    }
    var bits = errmsg.split(':');
    var errstr = errmsg.substring(bits[0].length + bits[1].length + 3);
    editor.getSession().setAnnotations([{
        row: bits[0] - 1,
        column: bits[1] - 1,
        text: errstr,
        type: "error"
    }]);
    return errstr;
}
coddleBrowser('blink', function() {
    // Chrome has unusual ideas of what input sizes mean
    shrinkFuncs.push(
        function() {
            var inputs = codearea.getElementsByTagName('input');
            Array.prototype.forEach.call(inputs, function(el) {
                el.style.width = (el.size * 8) + 'px';
            });
        }
    );
    growFuncs.push(
        function() {
            var inputs = codearea.getElementsByTagName('input');
            Array.prototype.forEach.call(inputs, blinkCoddleInputs);
        }
    );
});
