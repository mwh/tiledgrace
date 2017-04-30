function gracecode_loopinvariant () {
  this.definitionModule = "loopinvariant";
  this.definitionLine = 0;
  lineNumber = 7
  var func0 = function(argcv) {
    var curarg = 1;
    var var_it = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func0.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (for)"));
    var var_inv = arguments[curarg];
    curarg++;
    if (argcv[1] !=  func0.paramCounts[1])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (invariant)"));
    var var_blk = arguments[curarg];
    curarg++;
    if (argcv[2] !=  func0.paramCounts[2])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 3 (do)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "loopinvariant";
    try {
      lineNumber = 8
      lineNumber = 14
      var block1 = Grace_allocObject();
      block1.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block1.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block1.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block1.methods["match"] = GraceBlock_match;
      block1.methods["prefix?"] = GraceBlock_lift;
      block1.receiver = this;
      block1.className = 'block<loopinvariant:14>';
      block1.real = function(
        var_i
      ) {
        sourceObject = this;
        lineNumber = 12
        var if2 = var_done;
        lineNumber = 9
        var call3 = callmethod(var_inv,"apply", [0]);
        var call4 = callmethod(call3,"prefix!", [0]);
        if (Grace_isTrue(call4)) {
          lineNumber = 10
          var string5 = new GraceString("Loop invariant not satisfied.");
          var call6 = callmethod(var_InvariantFailure,"raise", [1], string5);
          if2 = call6;
        }
        lineNumber = 12
        var call7 = callmethod(var_blk,"apply", [1], var_i);
        return call7;
      };
      var call8 = callmethod(Grace_prelude,"for()do", [1, 1], var_it, block1);
      lineNumber = 17
      var if9 = var_done;
      lineNumber = 14
      var call10 = callmethod(var_inv,"apply", [0]);
      var call11 = callmethod(call10,"prefix!", [0]);
      if (Grace_isTrue(call11)) {
        lineNumber = 15
        var string12 = new GraceString("Loop invariant not satisfied.");
        var call13 = callmethod(var_InvariantFailure,"raise", [1], string12);
        if9 = call13;
      }
      return if9
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func0.paramCounts = [
    1,
    1,
    1,
  ];
  func0.variableArities = [
    false,
    false,
    false,
  ];
  this.methods["for()invariant()do"] = func0;
  func0.definitionLine = 7;
  func0.definitionModule = "loopinvariant";
  lineNumber = 19
  var func14 = function(argcv) {
    var curarg = 1;
    var var_c = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func14.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (while)"));
    var var_inv = arguments[curarg];
    curarg++;
    if (argcv[1] !=  func14.paramCounts[1])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (invariant)"));
    var var_blk = arguments[curarg];
    curarg++;
    if (argcv[2] !=  func14.paramCounts[2])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 3 (do)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "loopinvariant";
    try {
      lineNumber = 20
      lineNumber = 26
      var block15 = Grace_allocObject();
      block15.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block15.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block15.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block15.methods["match"] = GraceBlock_match;
      block15.methods["prefix?"] = GraceBlock_lift;
      block15.receiver = this;
      block15.className = 'block<loopinvariant:26>';
      block15.real = function(
      ) {
        sourceObject = this;
        lineNumber = 24
        var if16 = var_done;
        lineNumber = 21
        var call17 = callmethod(var_inv,"apply", [0]);
        var call18 = callmethod(call17,"prefix!", [0]);
        if (Grace_isTrue(call18)) {
          lineNumber = 22
          var string19 = new GraceString("Loop invariant not satisfied.");
          var call20 = callmethod(var_InvariantFailure,"raise", [1], string19);
          if16 = call20;
        }
        lineNumber = 24
        var call21 = callmethod(var_blk,"apply", [0]);
        return call21;
      };
      var call22 = callmethod(Grace_prelude,"while()do", [1, 1], var_c, block15);
      lineNumber = 29
      var if23 = var_done;
      lineNumber = 26
      var call24 = callmethod(var_inv,"apply", [0]);
      var call25 = callmethod(call24,"prefix!", [0]);
      if (Grace_isTrue(call25)) {
        lineNumber = 27
        var string26 = new GraceString("Loop invariant not satisfied.");
        var call27 = callmethod(var_InvariantFailure,"raise", [1], string26);
        if23 = call27;
      }
      return if23
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func14.paramCounts = [
    1,
    1,
    1,
  ];
  func14.variableArities = [
    false,
    false,
    false,
  ];
  this.methods["while()invariant()do"] = func14;
  func14.definitionLine = 19;
  func14.definitionModule = "loopinvariant";
  lineNumber = 2
  // Import of StandardPrelude
  if (typeof gracecode_StandardPrelude == 'undefined')
    throw new GraceExceptionPacket(RuntimeErrorObject, 
      new GraceString('could not find module StandardPrelude'));
  var var_StandardPrelude = do_import("StandardPrelude", gracecode_StandardPrelude);
  lineNumber = 3
  var call28 = callmethod(var_StandardPrelude,"methods", [0]);
  this.superobj = call28;
  this.data = call28.data;
  this._value = call28._value;
  lineNumber = 5
  var string29 = new GraceString("InvariantFailure");
  var call30 = callmethod(Grace_prelude,"Error", [0]);
  var call31 = callmethod(call30,"refine", [1], string29);
  var var_InvariantFailure = call31;
  lineNumber = 3
  var func32 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func32.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (InvariantFailure)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "loopinvariant";
    try {
      lineNumber = 5
      return var_InvariantFailure
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func32.paramCounts = [
    0,
  ];
  func32.variableArities = [
    false,
  ];
  this.methods["InvariantFailure"] = func32;
  func32.definitionLine = 3;
  func32.definitionModule = "loopinvariant";
  lineNumber = 5;
  moduleName = "loopinvariant";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_InvariantFailure)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'InvariantFailure' to be of type Unknown"))
  lineNumber = 7
  lineNumber = 19
  return this;
}
gracecode_loopinvariant.imports = [
'StandardPrelude',
];
if (gctCache)
  gctCache['loopinvariant'] = "modules:\n StandardPrelude\npath:\n loopinvariant\nclasses:\npublic:\n InvariantFailure\n for()invariant()do\n while()invariant()do\nconfidential:\nfresh-methods:\n";
if (originalSourceLines) {
  originalSourceLines["loopinvariant"] = [
    "// Loop invariant dialect",
    "import \"StandardPrelude\" as StandardPrelude",
    "inherits StandardPrelude.methods",
    "",
    "def InvariantFailure = Error.refine \"InvariantFailure\"",
    "",
    "method for(it)invariant(inv)do(blk) {",
    "    for (it) do {i->",
    "        if (! inv.apply) then {",
    "            InvariantFailure.raise \"Loop invariant not satisfied.\"",
    "        }",
    "        blk.apply(i)",
    "    }",
    "    if (! inv.apply) then {",
    "        InvariantFailure.raise \"Loop invariant not satisfied.\"",
    "    }",
    "}",
    "",
    "method while(c)invariant(inv)do(blk) {",
    "    while (c) do {",
    "        if (! inv.apply) then {",
    "            InvariantFailure.raise \"Loop invariant not satisfied.\"",
    "        }",
    "        blk.apply",
    "    }",
    "    if (! inv.apply) then {",
    "        InvariantFailure.raise \"Loop invariant not satisfied.\"",
    "    }",
    "}",
    "",
    "// use e.g.:",
    "//  var sum: Number  := 0",
    "//  for (data) invariant { sum >= 0 } do { item : Number ->",
    "//      sum := sum + item",
    "//  }",
  ];
}