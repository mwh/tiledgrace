function gracecode_logo () {
  this.definitionModule = "logo";
  this.definitionLine = 0;
  lineNumber = 17
  var func0 = function(argcv) {
    var curarg = 1;
    var var_dist = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func0.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (forward)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "logo";
    try {
      lineNumber = 18
      var call1 = callmethod(var_turtle,"move", [3], var_dist, var_lineColor, var_lineWidth);
      return call1
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
  ];
  func0.variableArities = [
    false,
  ];
  this.methods["forward"] = func0;
  func0.definitionLine = 17;
  func0.definitionModule = "logo";
  lineNumber = 20
  var func2 = function(argcv) {
    var curarg = 1;
    var var_ang = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func2.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turnRight)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "logo";
    try {
      lineNumber = 21
      var call3 = callmethod(var_turtle,"turnRight", [1], var_ang);
      return call3
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func2.paramCounts = [
    1,
  ];
  func2.variableArities = [
    false,
  ];
  this.methods["turnRight"] = func2;
  func2.definitionLine = 20;
  func2.definitionModule = "logo";
  lineNumber = 23
  var func4 = function(argcv) {
    var curarg = 1;
    var var_ang = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func4.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turnLeft)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "logo";
    try {
      lineNumber = 24
      var call5 = callmethod(var_turtle,"turnLeft", [1], var_ang);
      return call5
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func4.paramCounts = [
    1,
  ];
  func4.variableArities = [
    false,
  ];
  this.methods["turnLeft"] = func4;
  func4.definitionLine = 23;
  func4.definitionModule = "logo";
  lineNumber = 26
  var func6 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func6.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (penUp)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "logo";
    try {
      lineNumber = 27
      var call7 = callmethod(var_turtle,"penUp", [0]);
      return call7
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func6.paramCounts = [
    0,
  ];
  func6.variableArities = [
    false,
  ];
  this.methods["penUp"] = func6;
  func6.definitionLine = 26;
  func6.definitionModule = "logo";
  lineNumber = 29
  var func8 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func8.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (penDown)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "logo";
    try {
      lineNumber = 30
      var call9 = callmethod(var_turtle,"penDown", [0]);
      return call9
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func8.paramCounts = [
    0,
  ];
  func8.variableArities = [
    false,
  ];
  this.methods["penDown"] = func8;
  func8.definitionLine = 29;
  func8.definitionModule = "logo";
  lineNumber = 33
  var func10 = function(argcv) {
    var curarg = 1;
    var var_mod = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func10.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (atModuleEnd)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "logo";
    try {
      lineNumber = 34
      var call11 = callmethod(var_turtle,"start", [0]);
      return call11
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func10.paramCounts = [
    1,
  ];
  func10.variableArities = [
    false,
  ];
  this.methods["atModuleEnd"] = func10;
  func10.definitionLine = 33;
  func10.definitionModule = "logo";
  lineNumber = 5
  // Import of turtle
  if (typeof gracecode_turtle == 'undefined')
    throw new GraceExceptionPacket(RuntimeErrorObject, 
      new GraceString('could not find module turtle'));
  var var_turtle = do_import("turtle", gracecode_turtle);
  lineNumber = 6
  // Import of StandardPrelude
  if (typeof gracecode_StandardPrelude == 'undefined')
    throw new GraceExceptionPacket(RuntimeErrorObject, 
      new GraceString('could not find module StandardPrelude'));
  var var_StandardPrelude = do_import("StandardPrelude", gracecode_StandardPrelude);
  lineNumber = 7
  var call12 = callmethod(var_StandardPrelude,"new", [0]);
  this.superobj = call12;
  this.data = call12.data;
  this._value = call12._value;
  lineNumber = 9
  lineNumber = 10
  lineNumber = 9
  var call13 = callmethod(var_turtle,"red", [0]);
  var var_red = call13;
  var func14 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func14.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (red)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "logo";
    try {
      return var_red
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func14.paramCounts = [
    0,
  ];
  func14.variableArities = [
    false,
  ];
  this.methods["red"] = func14;
  func14.definitionLine = 9;
  func14.definitionModule = "logo";
  lineNumber = 10;
  moduleName = "logo";
  lineNumber = 9
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_red)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'red' to be of type Unknown"))
  lineNumber = 11
  lineNumber = 10
  var call15 = callmethod(var_turtle,"green", [0]);
  var var_green = call15;
  var func16 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func16.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (green)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "logo";
    try {
      return var_green
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func16.paramCounts = [
    0,
  ];
  func16.variableArities = [
    false,
  ];
  this.methods["green"] = func16;
  func16.definitionLine = 10;
  func16.definitionModule = "logo";
  lineNumber = 11;
  moduleName = "logo";
  lineNumber = 10
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_green)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'green' to be of type Unknown"))
  lineNumber = 12
  lineNumber = 11
  var call17 = callmethod(var_turtle,"blue", [0]);
  var var_blue = call17;
  var func18 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func18.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (blue)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "logo";
    try {
      return var_blue
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func18.paramCounts = [
    0,
  ];
  func18.variableArities = [
    false,
  ];
  this.methods["blue"] = func18;
  func18.definitionLine = 11;
  func18.definitionModule = "logo";
  lineNumber = 12;
  moduleName = "logo";
  lineNumber = 11
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_blue)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'blue' to be of type Unknown"))
  lineNumber = 14
  lineNumber = 12
  var call19 = callmethod(var_turtle,"black", [0]);
  var var_black = call19;
  var func20 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func20.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (black)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "logo";
    try {
      return var_black
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func20.paramCounts = [
    0,
  ];
  func20.variableArities = [
    false,
  ];
  this.methods["black"] = func20;
  func20.definitionLine = 12;
  func20.definitionModule = "logo";
  lineNumber = 14;
  moduleName = "logo";
  lineNumber = 12
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_black)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'black' to be of type Unknown"))
  lineNumber = 14
  lineNumber = 15
  lineNumber = 14
  var var_lineWidth = new GraceNum(1);
  lineNumber = 12
  var func21 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func21.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (lineWidth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "logo";
    try {
      lineNumber = 14
      return var_lineWidth
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func21.paramCounts = [
    0,
  ];
  func21.variableArities = [
    false,
  ];
  this.methods["lineWidth"] = func21;
  func21.definitionLine = 12;
  func21.definitionModule = "logo";
  lineNumber = 12
  var func22 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func22.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (lineWidth:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "logo";
    try {
      var_lineWidth = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func22.paramCounts = [
    1,
  ];
  func22.variableArities = [
    false,
  ];
  this.methods["lineWidth:="] = func22;
  func22.definitionLine = 12;
  func22.definitionModule = "logo";
  lineNumber = 15;
  moduleName = "logo";
  lineNumber = 14
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_lineWidth)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'lineWidth' to be of type Unknown"))
  lineNumber = 17
  lineNumber = 15
  var var_lineColor = var_black;
  lineNumber = 12
  var func23 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func23.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (lineColor)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "logo";
    try {
      lineNumber = 15
      return var_lineColor
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func23.paramCounts = [
    0,
  ];
  func23.variableArities = [
    false,
  ];
  this.methods["lineColor"] = func23;
  func23.definitionLine = 12;
  func23.definitionModule = "logo";
  lineNumber = 12
  var func24 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func24.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (lineColor:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "logo";
    try {
      var_lineColor = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func24.paramCounts = [
    1,
  ];
  func24.variableArities = [
    false,
  ];
  this.methods["lineColor:="] = func24;
  func24.definitionLine = 12;
  func24.definitionModule = "logo";
  lineNumber = 17;
  moduleName = "logo";
  lineNumber = 15
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_lineColor)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'lineColor' to be of type Unknown"))
  lineNumber = 17
  lineNumber = 29
  return this;
}
gracecode_logo.imports = [
'turtle',
'StandardPrelude',
];
if (gctCache)
  gctCache['logo'] = "modules:\n StandardPrelude\nfresh-methods:\npath:\n logo\nclasses:\npublic:\n red\n green\n blue\n black\n lineWidth\n lineWidth:=\n lineColor\n lineColor:=\n forward\n turnRight\n turnLeft\n penUp\n penDown\n atModuleEnd\nconfidential:\n";
if (originalSourceLines) {
  originalSourceLines["logo"] = [
    "// Logo-like dialect",
    "// This dialect provides turtle graphics, embedded in Grace syntax but",
    "// using only statements of what should happen. The turtle module",
    "// handles the actual drawing and user interface.",
    "import \"turtle\" as turtle",
    "import \"StandardPrelude\" as StandardPrelude",
    "inherits StandardPrelude.new",
    "",
    "def red = turtle.red",
    "def green = turtle.green",
    "def blue = turtle.blue",
    "def black = turtle.black",
    "",
    "var lineWidth := 1",
    "var lineColor := black",
    "",
    "method forward(dist) {",
    "    turtle.move(dist, lineColor, lineWidth)",
    "}",
    "method turnRight(ang) {",
    "    turtle.turnRight(ang)",
    "}",
    "method turnLeft(ang) {",
    "    turtle.turnLeft(ang)",
    "}",
    "method penUp {",
    "    turtle.penUp",
    "}",
    "method penDown {",
    "    turtle.penDown",
    "}",
    "",
    "method atModuleEnd(mod) {",
    "    turtle.start",
    "}",
    "",
  ];
}