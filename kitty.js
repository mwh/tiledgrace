function gracecode_kitty () {
  this.definitionModule = "kitty";
  this.definitionLine = 0;
  lineNumber = 44
  var func0 = function(argcv) {
    var curarg = 1;
    var var_url__39__ = arguments[curarg];
    curarg++;
    var var_x__39__ = arguments[curarg];
    curarg++;
    var var_y__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func0.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Image)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 45
      var obj1 = Grace_allocObject();
      obj1.definitionModule = "kitty";
      obj1.definitionLine = 45;
      obj1.outer = this;
      var reader_kitty_outer_2 = function() {
        return this.outer;
      }
      obj1.methods["outer"] = reader_kitty_outer_2;
      function obj_init_1() {
        var origSuperDepth = superDepth;
        superDepth = obj1;
        obj1.annotations = [];
        sourceObject = obj1;
        lineNumber = 46
        var call3 = callmethod(var_KittyImage,"new()object", [3, 1], var_url__39__, var_x__39__, var_y__39__, this);
        obj1.superobj = call3;
        obj1._value = call3._value;
        superDepth = origSuperDepth;
      }
      obj_init_1.apply(obj1, []);
      return obj1
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func0.paramCounts = [
    3,
  ];
  func0.variableArities = [
    false,
  ];
  this.methods["Image"] = func0;
  func0.definitionLine = 44;
  func0.definitionModule = "kitty";
  var func4 = function(argcv) {
    var curarg = 1;
    var var_url__39__ = arguments[curarg];
    curarg++;
    var var_x__39__ = arguments[curarg];
    curarg++;
    var var_y__39__ = arguments[curarg];
    curarg++;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj5 = Grace_allocObject();
      obj5.definitionModule = "kitty";
      obj5.definitionLine = 45;
      var inho5 = inheritingObject;
      while (inho5.superobj) inho5 = inho5.superobj;
      inho5.superobj = obj5;
      obj5.data = inheritingObject.data;
      obj5.outer = this;
      var reader_kitty_outer_6 = function() {
        return this.outer;
      }
      obj5.methods["outer"] = reader_kitty_outer_6;
      function obj_init_5() {
        var origSuperDepth = superDepth;
        superDepth = obj5;
        obj5.annotations = [];
        sourceObject = obj5;
        var call7 = callmethod(var_KittyImage,"new()object", [3, 1], var_url__39__, var_x__39__, var_y__39__, this);
        obj5.superobj = call7;
        obj5._value = call7._value;
        superDepth = origSuperDepth;
      }
      obj_init_5.apply(inheritingObject, []);
      return obj5
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  this.methods["Image()object"] = func4;
  lineNumber = 150
  var func8 = function(argcv) {
    var curarg = 1;
    var var_x__39__ = arguments[curarg];
    curarg++;
    var var_y__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func8.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Entity)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 151
      var obj9 = Grace_allocObject();
      obj9.definitionModule = "kitty";
      obj9.definitionLine = 151;
      obj9.outer = this;
      var reader_kitty_outer_10 = function() {
        return this.outer;
      }
      obj9.methods["outer"] = reader_kitty_outer_10;
      function obj_init_9() {
        var origSuperDepth = superDepth;
        superDepth = obj9;
        obj9.annotations = [];
        sourceObject = obj9;
        lineNumber = 152
        var call11 = callmethod(var_KittyEntity,"new()object", [2, 1], var_x__39__, var_y__39__, this);
        obj9.superobj = call11;
        obj9._value = call11._value;
        superDepth = origSuperDepth;
      }
      obj_init_9.apply(obj9, []);
      return obj9
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func8.paramCounts = [
    2,
  ];
  func8.variableArities = [
    false,
  ];
  this.methods["Entity"] = func8;
  func8.definitionLine = 150;
  func8.definitionModule = "kitty";
  var func12 = function(argcv) {
    var curarg = 1;
    var var_x__39__ = arguments[curarg];
    curarg++;
    var var_y__39__ = arguments[curarg];
    curarg++;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj13 = Grace_allocObject();
      obj13.definitionModule = "kitty";
      obj13.definitionLine = 151;
      var inho13 = inheritingObject;
      while (inho13.superobj) inho13 = inho13.superobj;
      inho13.superobj = obj13;
      obj13.data = inheritingObject.data;
      obj13.outer = this;
      var reader_kitty_outer_14 = function() {
        return this.outer;
      }
      obj13.methods["outer"] = reader_kitty_outer_14;
      function obj_init_13() {
        var origSuperDepth = superDepth;
        superDepth = obj13;
        obj13.annotations = [];
        sourceObject = obj13;
        var call15 = callmethod(var_KittyEntity,"new()object", [2, 1], var_x__39__, var_y__39__, this);
        obj13.superobj = call15;
        obj13._value = call15._value;
        superDepth = origSuperDepth;
      }
      obj_init_13.apply(inheritingObject, []);
      return obj13
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  this.methods["Entity()object"] = func12;
  lineNumber = 299
  var func16 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func16.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (World)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 300
      var obj17 = Grace_allocObject();
      obj17.definitionModule = "kitty";
      obj17.definitionLine = 300;
      obj17.outer = this;
      var reader_kitty_outer_18 = function() {
        return this.outer;
      }
      obj17.methods["outer"] = reader_kitty_outer_18;
      function obj_init_17() {
        var origSuperDepth = superDepth;
        superDepth = obj17;
        obj17.annotations = [];
        sourceObject = obj17;
        lineNumber = 301
        var call19 = callmethod(var_KittyWorld,"new()object", [0, 1], this);
        obj17.superobj = call19;
        obj17._value = call19._value;
        superDepth = origSuperDepth;
      }
      obj_init_17.apply(obj17, []);
      return obj17
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
  this.methods["World"] = func16;
  func16.definitionLine = 299;
  func16.definitionModule = "kitty";
  var func20 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj21 = Grace_allocObject();
      obj21.definitionModule = "kitty";
      obj21.definitionLine = 300;
      var inho21 = inheritingObject;
      while (inho21.superobj) inho21 = inho21.superobj;
      inho21.superobj = obj21;
      obj21.data = inheritingObject.data;
      obj21.outer = this;
      var reader_kitty_outer_22 = function() {
        return this.outer;
      }
      obj21.methods["outer"] = reader_kitty_outer_22;
      function obj_init_21() {
        var origSuperDepth = superDepth;
        superDepth = obj21;
        obj21.annotations = [];
        sourceObject = obj21;
        var call23 = callmethod(var_KittyWorld,"new()object", [0, 1], this);
        obj21.superobj = call23;
        obj21._value = call23._value;
        superDepth = origSuperDepth;
      }
      obj_init_21.apply(inheritingObject, []);
      return obj21
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  this.methods["World()object"] = func20;
  lineNumber = 308
  var func24 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func24.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 310
      var string25 = new GraceString("CHECKING...");
      var call26 = Grace_print(string25);
      lineNumber = 317
      var if27 = var_done;
      lineNumber = 312
      var call28 = callmethod(var_worldSet,"prefix!", [0]);
      if (Grace_isTrue(call28)) {
        lineNumber = 313
        var string29 = new GraceString("NO WORLD!!");
        var call30 = Grace_print(string29);
        lineNumber = 315
        return var_done
      }
      lineNumber = 317
      var string31 = new GraceString("STARTING...");
      var call32 = Grace_print(string31);
      lineNumber = 320
      var call33 = callmethod(var_m__95__world,"start", [0]);
      return call33
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func24.paramCounts = [
    0,
  ];
  func24.variableArities = [
    false,
  ];
  this.methods["start"] = func24;
  func24.definitionLine = 308;
  func24.definitionModule = "kitty";
  lineNumber = 323
  var func34 = function(argcv) {
    var curarg = 1;
    var var_world__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func34.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setWorld)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 325
      lineNumber = 324
      var_m__95__world = var_world__39__;
      lineNumber = 326
      lineNumber = 325
      var bool35 = new GraceBoolean(true)
      var_worldSet = bool35;
      return bool35
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func34.paramTypes = [];
  func34.paramTypes.push([]);
  func34.paramCounts = [
    1,
  ];
  func34.variableArities = [
    false,
  ];
  this.methods["setWorld"] = func34;
  func34.definitionLine = 323;
  func34.definitionModule = "kitty";
  lineNumber = 328
  var func36 = function(argcv) {
    var curarg = 1;
    var var_module = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func36.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (atModuleEnd)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 329
      onSelf = true;
      var call37 = callmethod(this, "start", [0]);
      return call37
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func36.paramCounts = [
    1,
  ];
  func36.variableArities = [
    false,
  ];
  this.methods["atModuleEnd"] = func36;
  func36.definitionLine = 328;
  func36.definitionModule = "kitty";
  lineNumber = 1
  // Import of mgcollections
  if (typeof gracecode_mgcollections == 'undefined')
    throw new GraceExceptionPacket(RuntimeErrorObject, 
      new GraceString('could not find module collections'));
  var var_collections = do_import("mgcollections", gracecode_mgcollections);
  lineNumber = 2
  // Import of dom
  if (typeof gracecode_dom == 'undefined')
    throw new GraceExceptionPacket(RuntimeErrorObject, 
      new GraceString('could not find module dom'));
  var var_dom = do_import("dom", gracecode_dom);
  lineNumber = 4
  // Import of StandardPrelude
  if (typeof gracecode_StandardPrelude == 'undefined')
    throw new GraceExceptionPacket(RuntimeErrorObject, 
      new GraceString('could not find module sp'));
  var var_sp = do_import("StandardPrelude", gracecode_StandardPrelude);
  lineNumber = 5
  var call38 = callmethod(var_sp,"methods()object", [0, 1], this);
  this.superobj = call38;
  this.data = call38.data;
  this._value = call38._value;
  lineNumber = 8
  lineNumber = 9
  var var_m__95__world;
  lineNumber = 320
  var func39 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func39.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (m_world)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 8
      return var_m__95__world
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func39.paramCounts = [
    0,
  ];
  func39.variableArities = [
    false,
  ];
  this.methods["m_world"] = func39;
  func39.definitionLine = 320;
  func39.definitionModule = "kitty";
  lineNumber = 320
  var func40 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func40.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (m_world:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      var_m__95__world = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func40.paramCounts = [
    1,
  ];
  func40.variableArities = [
    false,
  ];
  this.methods["m_world:="] = func40;
  func40.definitionLine = 320;
  func40.definitionModule = "kitty";
  lineNumber = 12
  lineNumber = 9
  var bool41 = new GraceBoolean(false)
  var var_worldSet = bool41;
  lineNumber = 320
  var func42 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func42.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (worldSet)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 9
      return var_worldSet
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func42.paramCounts = [
    0,
  ];
  func42.variableArities = [
    false,
  ];
  this.methods["worldSet"] = func42;
  func42.definitionLine = 320;
  func42.definitionModule = "kitty";
  lineNumber = 320
  var func43 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func43.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (worldSet:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      var_worldSet = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func43.paramCounts = [
    1,
  ];
  func43.variableArities = [
    false,
  ];
  this.methods["worldSet:="] = func43;
  func43.definitionLine = 320;
  func43.definitionModule = "kitty";
  lineNumber = 12;
  moduleName = "kitty";
  lineNumber = 9
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_worldSet)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'worldSet' to be of type Unknown"))
  lineNumber = 12
  lineNumber = 13
  var var_keyDownListener;
  lineNumber = 320
  var func44 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func44.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (keyDownListener)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 12
      return var_keyDownListener
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func44.paramCounts = [
    0,
  ];
  func44.variableArities = [
    false,
  ];
  this.methods["keyDownListener"] = func44;
  func44.definitionLine = 320;
  func44.definitionModule = "kitty";
  lineNumber = 320
  var func45 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func45.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (keyDownListener:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      var_keyDownListener = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func45.paramCounts = [
    1,
  ];
  func45.variableArities = [
    false,
  ];
  this.methods["keyDownListener:="] = func45;
  func45.definitionLine = 320;
  func45.definitionModule = "kitty";
  lineNumber = 14
  var var_keyUpListener;
  lineNumber = 320
  var func46 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func46.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (keyUpListener)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 13
      return var_keyUpListener
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func46.paramCounts = [
    0,
  ];
  func46.variableArities = [
    false,
  ];
  this.methods["keyUpListener"] = func46;
  func46.definitionLine = 320;
  func46.definitionModule = "kitty";
  lineNumber = 320
  var func47 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func47.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (keyUpListener:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      var_keyUpListener = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func47.paramCounts = [
    1,
  ];
  func47.variableArities = [
    false,
  ];
  this.methods["keyUpListener:="] = func47;
  func47.definitionLine = 320;
  func47.definitionModule = "kitty";
  lineNumber = 17
  var var_mouseDownListener;
  lineNumber = 320
  var func48 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func48.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseDownListener)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 14
      return var_mouseDownListener
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func48.paramCounts = [
    0,
  ];
  func48.variableArities = [
    false,
  ];
  this.methods["mouseDownListener"] = func48;
  func48.definitionLine = 320;
  func48.definitionModule = "kitty";
  lineNumber = 320
  var func49 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func49.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseDownListener:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      var_mouseDownListener = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func49.paramCounts = [
    1,
  ];
  func49.variableArities = [
    false,
  ];
  this.methods["mouseDownListener:="] = func49;
  func49.definitionLine = 320;
  func49.definitionModule = "kitty";
  lineNumber = 17
  lineNumber = 22
  lineNumber = 17
  var call50 = callmethod(var_dom,"window", [0]);
  var call51 = callmethod(call50,"Math", [0]);
  var var_math = call51;
  var func52 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func52.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (math)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      return var_math
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func52.paramCounts = [
    0,
  ];
  func52.variableArities = [
    false,
  ];
  this.methods["math"] = func52;
  func52.definitionLine = 17;
  func52.definitionModule = "kitty";
  lineNumber = 22;
  moduleName = "kitty";
  lineNumber = 17
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_math)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'math' to be of type Unknown"))
  lineNumber = 22
  var func53 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func53.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (KittyImage)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      return var_KittyImage
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func53.paramCounts = [
    0,
  ];
  func53.variableArities = [
    false,
  ];
  this.methods["KittyImage"] = func53;
  func53.definitionLine = 22;
  func53.definitionModule = "kitty";
  var obj54 = Grace_allocObject();
  obj54.definitionModule = "kitty";
  obj54.definitionLine = 22;
  obj54.outer = this;
  var reader_kitty_outer_55 = function() {
    return this.outer;
  }
  obj54.methods["outer"] = reader_kitty_outer_55;
  function obj_init_54() {
    var origSuperDepth = superDepth;
    superDepth = obj54;
    obj54.annotations = [];
    var func56 = function(argcv) {
      var curarg = 1;
      var var_url__39__ = arguments[curarg];
      curarg++;
      var var_height__39__ = arguments[curarg];
      curarg++;
      var var_width__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func56.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj57 = Grace_allocObject();
        obj57.definitionModule = "kitty";
        obj57.definitionLine = 22;
        obj57.outer = this;
        var reader_kitty_outer_58 = function() {
          return this.outer;
        }
        obj57.methods["outer"] = reader_kitty_outer_58;
        function obj_init_57() {
          var origSuperDepth = superDepth;
          superDepth = obj57;
          obj57.annotations = [];
          var func59 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            var var_rot = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func59.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 33
              var call60 = callmethod(var_ctx,"save", [0]);
              lineNumber = 34
              var call61 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 35
              var prod65 = callmethod(var_rot, "*", [1], new GraceNum(180));
              var quotient67 = callmethod(prod65, "/", [1], new GraceNum(3.14));
              var call68 = callmethod(var_ctx,"rotate", [1], quotient67);
              lineNumber = 36
              onSelf = true;
              var call69 = callmethod(this, "imgTag", [0]);
              onSelf = true;
              var call71 = callmethod(this, "width", [0]);
              var call72 = callmethod(call71,"prefix-", [0]);
              var quotient74 = callmethod(call72, "/", [1], new GraceNum(2));
              onSelf = true;
              var call76 = callmethod(this, "height", [0]);
              var call77 = callmethod(call76,"prefix-", [0]);
              var quotient79 = callmethod(call77, "/", [1], new GraceNum(2));
              onSelf = true;
              var call80 = callmethod(this, "width", [0]);
              onSelf = true;
              var call81 = callmethod(this, "height", [0]);
              var call82 = callmethod(var_ctx,"drawImage", [5], call69, quotient74, quotient79, call80, call81);
              lineNumber = 37
              var call83 = callmethod(var_ctx,"restore", [0]);
              return call83
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func59.paramCounts = [
            4,
          ];
          func59.variableArities = [
            false,
          ];
          obj57.methods["draw"] = func59;
          func59.definitionLine = 31;
          func59.definitionModule = "kitty";
          sourceObject = obj57;
          lineNumber = 25
          var string84 = new GraceString("img");
          var call85 = callmethod(var_dom,"document", [0]);
          var call86 = callmethod(call85,"createElement", [1], string84);
          obj57.data["imgTag"] = call86;
          var reader_kitty_imgTag_87 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_87.def = true;
          reader_kitty_imgTag_87.confidential = true;
          obj57.methods["imgTag"] = reader_kitty_imgTag_87;
          lineNumber = 25;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call86)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj57;
          lineNumber = 28
          lineNumber = 25
          lineNumber = 26
          onSelf = true;
          var call88 = callmethod(this, "imgTag", [0]);
          var call89 = callmethod(call88,"src:=", [1], var_url__39__);
          sourceObject = obj57;
          lineNumber = 28
          obj57.data["height"] = var_height__39__;
          var reader_kitty_height_90 = function() {
            return this.data["height"];
          }
          obj57.methods["height"] = reader_kitty_height_90;
          obj57.data["height"] = var_height__39__;
          var writer_kitty_height_90 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj57.methods["height:="] = writer_kitty_height_90;
          reader_kitty_height_90.confidential = true;
          writer_kitty_height_90.confidential = true;
          lineNumber = 29;
          moduleName = "kitty";
          lineNumber = 28
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj57.mutable = true;
          sourceObject = obj57;
          lineNumber = 29
          obj57.data["width"] = var_width__39__;
          var reader_kitty_width_91 = function() {
            return this.data["width"];
          }
          obj57.methods["width"] = reader_kitty_width_91;
          obj57.data["width"] = var_width__39__;
          var writer_kitty_width_91 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj57.methods["width:="] = writer_kitty_width_91;
          reader_kitty_width_91.confidential = true;
          writer_kitty_width_91.confidential = true;
          lineNumber = 31;
          moduleName = "kitty";
          lineNumber = 29
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj57.mutable = true;
          sourceObject = obj57;
          superDepth = origSuperDepth;
        }
        obj_init_57.apply(obj57, []);
        return obj57
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func56.paramCounts = [
      3,
    ];
    func56.variableArities = [
      false,
    ];
    obj54.methods["new"] = func56;
    func56.definitionLine = 22;
    func56.definitionModule = "kitty";
    var func92 = function(argcv) {
      var curarg = 1;
      var var_url__39__ = arguments[curarg];
      curarg++;
      var var_height__39__ = arguments[curarg];
      curarg++;
      var var_width__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj93 = Grace_allocObject();
        obj93.definitionModule = "kitty";
        obj93.definitionLine = 22;
        var inho93 = inheritingObject;
        while (inho93.superobj) inho93 = inho93.superobj;
        inho93.superobj = obj93;
        obj93.data = inheritingObject.data;
        obj93.outer = this;
        var reader_kitty_outer_94 = function() {
          return this.outer;
        }
        obj93.methods["outer"] = reader_kitty_outer_94;
        function obj_init_93() {
          var origSuperDepth = superDepth;
          superDepth = obj93;
          obj93.annotations = [];
          var func95 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            var var_rot = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func95.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 33
              var call96 = callmethod(var_ctx,"save", [0]);
              lineNumber = 34
              var call97 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 35
              var prod101 = callmethod(var_rot, "*", [1], new GraceNum(180));
              var quotient103 = callmethod(prod101, "/", [1], new GraceNum(3.14));
              var call104 = callmethod(var_ctx,"rotate", [1], quotient103);
              lineNumber = 36
              onSelf = true;
              var call105 = callmethod(this, "imgTag", [0]);
              onSelf = true;
              var call107 = callmethod(this, "width", [0]);
              var call108 = callmethod(call107,"prefix-", [0]);
              var quotient110 = callmethod(call108, "/", [1], new GraceNum(2));
              onSelf = true;
              var call112 = callmethod(this, "height", [0]);
              var call113 = callmethod(call112,"prefix-", [0]);
              var quotient115 = callmethod(call113, "/", [1], new GraceNum(2));
              onSelf = true;
              var call116 = callmethod(this, "width", [0]);
              onSelf = true;
              var call117 = callmethod(this, "height", [0]);
              var call118 = callmethod(var_ctx,"drawImage", [5], call105, quotient110, quotient115, call116, call117);
              lineNumber = 37
              var call119 = callmethod(var_ctx,"restore", [0]);
              return call119
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func95.paramCounts = [
            4,
          ];
          func95.variableArities = [
            false,
          ];
          obj93.methods["draw"] = func95;
          func95.definitionLine = 31;
          func95.definitionModule = "kitty";
          sourceObject = obj93;
          lineNumber = 25
          var string120 = new GraceString("img");
          var call121 = callmethod(var_dom,"document", [0]);
          var call122 = callmethod(call121,"createElement", [1], string120);
          obj93.data["imgTag"] = call122;
          var reader_kitty_imgTag_123 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_123.def = true;
          reader_kitty_imgTag_123.confidential = true;
          obj93.methods["imgTag"] = reader_kitty_imgTag_123;
          lineNumber = 25;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call122)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj93;
          lineNumber = 28
          lineNumber = 25
          lineNumber = 26
          onSelf = true;
          var call124 = callmethod(this, "imgTag", [0]);
          var call125 = callmethod(call124,"src:=", [1], var_url__39__);
          sourceObject = obj93;
          lineNumber = 28
          obj93.data["height"] = var_height__39__;
          var reader_kitty_height_126 = function() {
            return this.data["height"];
          }
          obj93.methods["height"] = reader_kitty_height_126;
          obj93.data["height"] = var_height__39__;
          var writer_kitty_height_126 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj93.methods["height:="] = writer_kitty_height_126;
          reader_kitty_height_126.confidential = true;
          writer_kitty_height_126.confidential = true;
          lineNumber = 29;
          moduleName = "kitty";
          lineNumber = 28
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj93.mutable = true;
          sourceObject = obj93;
          lineNumber = 29
          obj93.data["width"] = var_width__39__;
          var reader_kitty_width_127 = function() {
            return this.data["width"];
          }
          obj93.methods["width"] = reader_kitty_width_127;
          obj93.data["width"] = var_width__39__;
          var writer_kitty_width_127 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj93.methods["width:="] = writer_kitty_width_127;
          reader_kitty_width_127.confidential = true;
          writer_kitty_width_127.confidential = true;
          lineNumber = 31;
          moduleName = "kitty";
          lineNumber = 29
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj93.mutable = true;
          sourceObject = obj93;
          superDepth = origSuperDepth;
        }
        obj_init_93.apply(inheritingObject, []);
        return obj93
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj54.methods["new()object"] = func92;
    var func128 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 22
        var string129 = new GraceString("class KittyImage");
        return string129
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func128.paramCounts = [
    ];
    func128.variableArities = [
    ];
    obj54.methods["asDebugString"] = func128;
    func128.definitionLine = 22;
    func128.definitionModule = "kitty";
    sourceObject = obj54;
    sourceObject = obj54;
    superDepth = origSuperDepth;
  }
  obj_init_54.apply(obj54, []);
  var var_KittyImage = obj54;
  lineNumber = 44
  lineNumber = 51
  var func130 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func130.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (KittyEntity)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      return var_KittyEntity
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func130.paramCounts = [
    0,
  ];
  func130.variableArities = [
    false,
  ];
  this.methods["KittyEntity"] = func130;
  func130.definitionLine = 51;
  func130.definitionModule = "kitty";
  var obj131 = Grace_allocObject();
  obj131.definitionModule = "kitty";
  obj131.definitionLine = 51;
  obj131.outer = this;
  var reader_kitty_outer_132 = function() {
    return this.outer;
  }
  obj131.methods["outer"] = reader_kitty_outer_132;
  function obj_init_131() {
    var origSuperDepth = superDepth;
    superDepth = obj131;
    obj131.annotations = [];
    var func133 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func133.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj134 = Grace_allocObject();
        obj134.definitionModule = "kitty";
        obj134.definitionLine = 51;
        obj134.outer = this;
        var reader_kitty_outer_135 = function() {
          return this.outer;
        }
        obj134.methods["outer"] = reader_kitty_outer_135;
        function obj_init_134() {
          var origSuperDepth = superDepth;
          superDepth = obj134;
          obj134.annotations = [];
          var func136 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func136.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 72
              var string137 = new GraceString("realyee.png");
              onSelf = true;
              var call138 = callmethod(this, "setImage", [1], string137);
              return call138
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func136.paramCounts = [
            0,
          ];
          func136.variableArities = [
            false,
          ];
          obj134.methods["awake"] = func136;
          func136.definitionLine = 70;
          func136.definitionModule = "kitty";
          var func139 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func139.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              return var_done
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func139.paramCounts = [
            0,
          ];
          func139.variableArities = [
            false,
          ];
          obj134.methods["start"] = func139;
          func139.definitionLine = 76;
          func139.definitionModule = "kitty";
          var func140 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func140.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 82
              onSelf = true;
              var call141 = callmethod(this, "action", [0]);
              var call142 = callmethod(call141,"update", [0]);
              return call142
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func140.paramCounts = [
            0,
          ];
          func140.variableArities = [
            false,
          ];
          obj134.methods["update"] = func140;
          func140.definitionLine = 81;
          func140.definitionModule = "kitty";
          var func143 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func143.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (onDestroy)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              return var_done
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func143.paramCounts = [
            0,
          ];
          func143.variableArities = [
            false,
          ];
          obj134.methods["onDestroy"] = func143;
          func143.definitionLine = 86;
          func143.definitionModule = "kitty";
          var func144 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func144.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 91
              lineNumber = 82
              lineNumber = 91
              onSelf = true;
              var call147 = callmethod(this, "rotation", [0]);
              var prod149 = callmethod(call147, "*", [1], new GraceNum(3.14159));
              var quotient151 = callmethod(prod149, "/", [1], new GraceNum(180));
              var call152 = callmethod(var_math,"cos", [1], quotient151);
              var prod155 = callmethod(var_distance, "*", [1], call152);
              onSelf = true;
              var call157 = callmethod(this, "posX", [0]);
              var opresult159 = callmethod(call157, "+", [1], prod155);
              onSelf = true;
              var call160 = callmethod(this, "posX:=", [1], opresult159);
              lineNumber = 92
              lineNumber = 82
              lineNumber = 92
              onSelf = true;
              var call163 = callmethod(this, "rotation", [0]);
              var prod165 = callmethod(call163, "*", [1], new GraceNum(3.14159));
              var quotient167 = callmethod(prod165, "/", [1], new GraceNum(180));
              var call168 = callmethod(var_math,"sin", [1], quotient167);
              var prod171 = callmethod(var_distance, "*", [1], call168);
              onSelf = true;
              var call173 = callmethod(this, "posY", [0]);
              var opresult175 = callmethod(call173, "+", [1], prod171);
              onSelf = true;
              var call176 = callmethod(this, "posY:=", [1], opresult175);
              return call176
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func144.paramCounts = [
            1,
          ];
          func144.variableArities = [
            false,
          ];
          obj134.methods["move"] = func144;
          func144.definitionLine = 90;
          func144.definitionModule = "kitty";
          var func177 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func177.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 97
              lineNumber = 82
              lineNumber = 97
              lineNumber = 96
              onSelf = true;
              var call179 = callmethod(this, "rotation", [0]);
              var opresult181 = callmethod(call179, "+", [1], var_angle);
              onSelf = true;
              var call182 = callmethod(this, "rotation:=", [1], opresult181);
              return call182
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func177.paramCounts = [
            1,
          ];
          func177.variableArities = [
            false,
          ];
          obj134.methods["turn"] = func177;
          func177.definitionLine = 95;
          func177.definitionModule = "kitty";
          var func183 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func183.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveUp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 101
              lineNumber = 82
              lineNumber = 101
              lineNumber = 100
              onSelf = true;
              var call185 = callmethod(this, "posY", [0]);
              var diff187 = callmethod(call185, "-", [1], var_dy);
              onSelf = true;
              var call188 = callmethod(this, "posY:=", [1], diff187);
              return call188
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func183.paramCounts = [
            1,
          ];
          func183.variableArities = [
            false,
          ];
          obj134.methods["moveUp"] = func183;
          func183.definitionLine = 99;
          func183.definitionModule = "kitty";
          var func189 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func189.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 105
              lineNumber = 82
              lineNumber = 105
              lineNumber = 104
              onSelf = true;
              var call191 = callmethod(this, "posY", [0]);
              var opresult193 = callmethod(call191, "+", [1], var_dy);
              onSelf = true;
              var call194 = callmethod(this, "posY:=", [1], opresult193);
              return call194
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func189.paramCounts = [
            1,
          ];
          func189.variableArities = [
            false,
          ];
          obj134.methods["moveDown"] = func189;
          func189.definitionLine = 103;
          func189.definitionModule = "kitty";
          var func195 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func195.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveLeft)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 109
              lineNumber = 82
              lineNumber = 109
              lineNumber = 108
              onSelf = true;
              var call197 = callmethod(this, "posX", [0]);
              var diff199 = callmethod(call197, "-", [1], var_dx);
              onSelf = true;
              var call200 = callmethod(this, "posX:=", [1], diff199);
              return call200
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func195.paramCounts = [
            1,
          ];
          func195.variableArities = [
            false,
          ];
          obj134.methods["moveLeft"] = func195;
          func195.definitionLine = 107;
          func195.definitionModule = "kitty";
          var func201 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func201.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveRight)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 113
              lineNumber = 82
              lineNumber = 113
              lineNumber = 112
              onSelf = true;
              var call203 = callmethod(this, "posX", [0]);
              var opresult205 = callmethod(call203, "+", [1], var_dx);
              onSelf = true;
              var call206 = callmethod(this, "posX:=", [1], opresult205);
              return call206
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func201.paramCounts = [
            1,
          ];
          func201.variableArities = [
            false,
          ];
          obj134.methods["moveRight"] = func201;
          func201.definitionLine = 111;
          func201.definitionModule = "kitty";
          var func207 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func207.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 116
              var call208 = callmethod(var_ctx,"save", [0]);
              lineNumber = 117
              onSelf = true;
              var call209 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call210 = callmethod(this, "posY", [0]);
              var call211 = callmethod(var_ctx,"translate", [2], call209, call210);
              lineNumber = 118
              onSelf = true;
              var call212 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call213 = callmethod(this, "image", [0]);
              var call214 = callmethod(call213,"draw", [4], var_ctx, var_dx, var_dy, call212);
              lineNumber = 119
              var call215 = callmethod(var_ctx,"restore", [0]);
              return call215
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func207.paramCounts = [
            3,
          ];
          func207.variableArities = [
            false,
          ];
          obj134.methods["draw"] = func207;
          func207.definitionLine = 115;
          func207.definitionModule = "kitty";
          var func216 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func216.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 123
              lineNumber = 119
              lineNumber = 123
              var call217 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call218 = callmethod(call217, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call219 = callmethod(call218, "Image", [3], var_image__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call220 = callmethod(this, "image:=", [1], call219);
              return call220
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func216.paramCounts = [
            1,
          ];
          func216.variableArities = [
            false,
          ];
          obj134.methods["setImage"] = func216;
          func216.definitionLine = 122;
          func216.definitionModule = "kitty";
          var func221 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func221.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 128
              lineNumber = 123
              lineNumber = 127
              onSelf = true;
              var call222 = callmethod(this, "action:=", [1], var_action__39__);
              return call222
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func221.paramCounts = [
            1,
          ];
          func221.variableArities = [
            false,
          ];
          obj134.methods["setAction"] = func221;
          func221.definitionLine = 126;
          func221.definitionModule = "kitty";
          var func223 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func223.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 132
              lineNumber = 123
              lineNumber = 131
              onSelf = true;
              var call224 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 133
              lineNumber = 123
              lineNumber = 132
              onSelf = true;
              var call225 = callmethod(this, "posY:=", [1], var_y);
              return call225
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func223.paramCounts = [
            2,
          ];
          func223.variableArities = [
            false,
          ];
          obj134.methods["setLocation"] = func223;
          func223.definitionLine = 130;
          func223.definitionModule = "kitty";
          var func226 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func226.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 137
              lineNumber = 136
              onSelf = true;
              var call227 = callmethod(this, "posX", [0]);
              return call227
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func226.paramCounts = [
            0,
          ];
          func226.variableArities = [
            false,
          ];
          obj134.methods["getX"] = func226;
          func226.definitionLine = 135;
          func226.definitionModule = "kitty";
          var func228 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func228.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 141
              lineNumber = 140
              onSelf = true;
              var call229 = callmethod(this, "posY", [0]);
              return call229
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func228.paramCounts = [
            0,
          ];
          func228.variableArities = [
            false,
          ];
          obj134.methods["getY"] = func228;
          func228.definitionLine = 139;
          func228.definitionModule = "kitty";
          var func230 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func230.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 145
              lineNumber = 144
              onSelf = true;
              var call231 = callmethod(this, "rotation", [0]);
              return call231
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func230.paramCounts = [
            0,
          ];
          func230.variableArities = [
            false,
          ];
          obj134.methods["getRotation"] = func230;
          func230.definitionLine = 143;
          func230.definitionModule = "kitty";
          sourceObject = obj134;
          lineNumber = 55
          obj134.data["posX"] = var_x__39__;
          var reader_kitty_posX_232 = function() {
            return this.data["posX"];
          }
          obj134.methods["posX"] = reader_kitty_posX_232;
          obj134.data["posX"] = var_x__39__;
          var writer_kitty_posX_232 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj134.methods["posX:="] = writer_kitty_posX_232;
          reader_kitty_posX_232.confidential = true;
          writer_kitty_posX_232.confidential = true;
          lineNumber = 56;
          moduleName = "kitty";
          lineNumber = 55
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj134.mutable = true;
          sourceObject = obj134;
          lineNumber = 56
          obj134.data["posY"] = var_y__39__;
          var reader_kitty_posY_233 = function() {
            return this.data["posY"];
          }
          obj134.methods["posY"] = reader_kitty_posY_233;
          obj134.data["posY"] = var_y__39__;
          var writer_kitty_posY_233 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj134.methods["posY:="] = writer_kitty_posY_233;
          reader_kitty_posY_233.confidential = true;
          writer_kitty_posY_233.confidential = true;
          lineNumber = 57;
          moduleName = "kitty";
          lineNumber = 56
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj134.mutable = true;
          sourceObject = obj134;
          lineNumber = 57
          obj134.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_234 = function() {
            return this.data["rotation"];
          }
          obj134.methods["rotation"] = reader_kitty_rotation_234;
          obj134.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_234 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj134.methods["rotation:="] = writer_kitty_rotation_234;
          reader_kitty_rotation_234.confidential = true;
          writer_kitty_rotation_234.confidential = true;
          lineNumber = 59;
          moduleName = "kitty";
          lineNumber = 57
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj134.mutable = true;
          sourceObject = obj134;
          lineNumber = 59
          var obj235 = Grace_allocObject();
          obj235.definitionModule = "kitty";
          obj235.definitionLine = 59;
          obj235.outer = this;
          var reader_kitty_outer_236 = function() {
            return this.outer;
          }
          obj235.methods["outer"] = reader_kitty_outer_236;
          function obj_init_235() {
            var origSuperDepth = superDepth;
            superDepth = obj235;
            obj235.annotations = [];
            var func237 = function(argcv) {
              var curarg = 1;
              if (argcv[0] !=  func237.paramCounts[0])
                callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
              var returnTarget = invocationCount;
              invocationCount++;
              moduleName = "kitty";
              try {
                return var_done
              } catch(e) {
                if ((e.exctype == 'return') && (e.target == returnTarget)) {
                  return e.returnvalue;
                } else {
                  throw e;
                }
              }
            }
            func237.paramCounts = [
              0,
            ];
            func237.variableArities = [
              false,
            ];
            obj235.methods["update"] = func237;
            func237.definitionLine = 60;
            func237.definitionModule = "kitty";
            sourceObject = obj235;
            superDepth = origSuperDepth;
          }
          obj_init_235.apply(obj235, []);
          obj134.data["action"] = obj235;
          var reader_kitty_action_238 = function() {
            return this.data["action"];
          }
          obj134.methods["action"] = reader_kitty_action_238;
          obj134.data["action"] = obj235;
          var writer_kitty_action_238 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj134.methods["action:="] = writer_kitty_action_238;
          reader_kitty_action_238.confidential = true;
          writer_kitty_action_238.confidential = true;
          lineNumber = 59;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], obj235)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj134.mutable = true;
          sourceObject = obj134;
          obj134.data["image"] = undefined;
          var reader_kitty_image_239 = function() {
            return this.data["image"];
          }
          obj134.methods["image"] = reader_kitty_image_239;
          obj134.data["image"] = undefined;
          var writer_kitty_image_239 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj134.methods["image:="] = writer_kitty_image_239;
          reader_kitty_image_239.confidential = true;
          writer_kitty_image_239.confidential = true;
          obj134.mutable = true;
          sourceObject = obj134;
          lineNumber = 67
          onSelf = true;
          var call240 = callmethod(this, "awake", [0]);
          sourceObject = obj134;
          sourceObject = obj134;
          sourceObject = obj134;
          sourceObject = obj134;
          sourceObject = obj134;
          sourceObject = obj134;
          sourceObject = obj134;
          sourceObject = obj134;
          sourceObject = obj134;
          sourceObject = obj134;
          sourceObject = obj134;
          sourceObject = obj134;
          sourceObject = obj134;
          sourceObject = obj134;
          sourceObject = obj134;
          sourceObject = obj134;
          sourceObject = obj134;
          superDepth = origSuperDepth;
        }
        obj_init_134.apply(obj134, []);
        return obj134
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func133.paramCounts = [
      2,
    ];
    func133.variableArities = [
      false,
    ];
    obj131.methods["new"] = func133;
    func133.definitionLine = 51;
    func133.definitionModule = "kitty";
    var func241 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj242 = Grace_allocObject();
        obj242.definitionModule = "kitty";
        obj242.definitionLine = 51;
        var inho242 = inheritingObject;
        while (inho242.superobj) inho242 = inho242.superobj;
        inho242.superobj = obj242;
        obj242.data = inheritingObject.data;
        obj242.outer = this;
        var reader_kitty_outer_243 = function() {
          return this.outer;
        }
        obj242.methods["outer"] = reader_kitty_outer_243;
        function obj_init_242() {
          var origSuperDepth = superDepth;
          superDepth = obj242;
          obj242.annotations = [];
          var func244 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func244.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 72
              var string245 = new GraceString("realyee.png");
              onSelf = true;
              var call246 = callmethod(this, "setImage", [1], string245);
              return call246
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func244.paramCounts = [
            0,
          ];
          func244.variableArities = [
            false,
          ];
          obj242.methods["awake"] = func244;
          func244.definitionLine = 70;
          func244.definitionModule = "kitty";
          var func247 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func247.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              return var_done
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func247.paramCounts = [
            0,
          ];
          func247.variableArities = [
            false,
          ];
          obj242.methods["start"] = func247;
          func247.definitionLine = 76;
          func247.definitionModule = "kitty";
          var func248 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func248.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 82
              onSelf = true;
              var call249 = callmethod(this, "action", [0]);
              var call250 = callmethod(call249,"update", [0]);
              return call250
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func248.paramCounts = [
            0,
          ];
          func248.variableArities = [
            false,
          ];
          obj242.methods["update"] = func248;
          func248.definitionLine = 81;
          func248.definitionModule = "kitty";
          var func251 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func251.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (onDestroy)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              return var_done
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func251.paramCounts = [
            0,
          ];
          func251.variableArities = [
            false,
          ];
          obj242.methods["onDestroy"] = func251;
          func251.definitionLine = 86;
          func251.definitionModule = "kitty";
          var func252 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func252.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 91
              lineNumber = 82
              lineNumber = 91
              onSelf = true;
              var call255 = callmethod(this, "rotation", [0]);
              var prod257 = callmethod(call255, "*", [1], new GraceNum(3.14159));
              var quotient259 = callmethod(prod257, "/", [1], new GraceNum(180));
              var call260 = callmethod(var_math,"cos", [1], quotient259);
              var prod263 = callmethod(var_distance, "*", [1], call260);
              onSelf = true;
              var call265 = callmethod(this, "posX", [0]);
              var opresult267 = callmethod(call265, "+", [1], prod263);
              onSelf = true;
              var call268 = callmethod(this, "posX:=", [1], opresult267);
              lineNumber = 92
              lineNumber = 82
              lineNumber = 92
              onSelf = true;
              var call271 = callmethod(this, "rotation", [0]);
              var prod273 = callmethod(call271, "*", [1], new GraceNum(3.14159));
              var quotient275 = callmethod(prod273, "/", [1], new GraceNum(180));
              var call276 = callmethod(var_math,"sin", [1], quotient275);
              var prod279 = callmethod(var_distance, "*", [1], call276);
              onSelf = true;
              var call281 = callmethod(this, "posY", [0]);
              var opresult283 = callmethod(call281, "+", [1], prod279);
              onSelf = true;
              var call284 = callmethod(this, "posY:=", [1], opresult283);
              return call284
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func252.paramCounts = [
            1,
          ];
          func252.variableArities = [
            false,
          ];
          obj242.methods["move"] = func252;
          func252.definitionLine = 90;
          func252.definitionModule = "kitty";
          var func285 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func285.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 97
              lineNumber = 82
              lineNumber = 97
              lineNumber = 96
              onSelf = true;
              var call287 = callmethod(this, "rotation", [0]);
              var opresult289 = callmethod(call287, "+", [1], var_angle);
              onSelf = true;
              var call290 = callmethod(this, "rotation:=", [1], opresult289);
              return call290
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func285.paramCounts = [
            1,
          ];
          func285.variableArities = [
            false,
          ];
          obj242.methods["turn"] = func285;
          func285.definitionLine = 95;
          func285.definitionModule = "kitty";
          var func291 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func291.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveUp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 101
              lineNumber = 82
              lineNumber = 101
              lineNumber = 100
              onSelf = true;
              var call293 = callmethod(this, "posY", [0]);
              var diff295 = callmethod(call293, "-", [1], var_dy);
              onSelf = true;
              var call296 = callmethod(this, "posY:=", [1], diff295);
              return call296
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func291.paramCounts = [
            1,
          ];
          func291.variableArities = [
            false,
          ];
          obj242.methods["moveUp"] = func291;
          func291.definitionLine = 99;
          func291.definitionModule = "kitty";
          var func297 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func297.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 105
              lineNumber = 82
              lineNumber = 105
              lineNumber = 104
              onSelf = true;
              var call299 = callmethod(this, "posY", [0]);
              var opresult301 = callmethod(call299, "+", [1], var_dy);
              onSelf = true;
              var call302 = callmethod(this, "posY:=", [1], opresult301);
              return call302
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func297.paramCounts = [
            1,
          ];
          func297.variableArities = [
            false,
          ];
          obj242.methods["moveDown"] = func297;
          func297.definitionLine = 103;
          func297.definitionModule = "kitty";
          var func303 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func303.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveLeft)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 109
              lineNumber = 82
              lineNumber = 109
              lineNumber = 108
              onSelf = true;
              var call305 = callmethod(this, "posX", [0]);
              var diff307 = callmethod(call305, "-", [1], var_dx);
              onSelf = true;
              var call308 = callmethod(this, "posX:=", [1], diff307);
              return call308
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func303.paramCounts = [
            1,
          ];
          func303.variableArities = [
            false,
          ];
          obj242.methods["moveLeft"] = func303;
          func303.definitionLine = 107;
          func303.definitionModule = "kitty";
          var func309 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func309.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveRight)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 113
              lineNumber = 82
              lineNumber = 113
              lineNumber = 112
              onSelf = true;
              var call311 = callmethod(this, "posX", [0]);
              var opresult313 = callmethod(call311, "+", [1], var_dx);
              onSelf = true;
              var call314 = callmethod(this, "posX:=", [1], opresult313);
              return call314
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func309.paramCounts = [
            1,
          ];
          func309.variableArities = [
            false,
          ];
          obj242.methods["moveRight"] = func309;
          func309.definitionLine = 111;
          func309.definitionModule = "kitty";
          var func315 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func315.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 116
              var call316 = callmethod(var_ctx,"save", [0]);
              lineNumber = 117
              onSelf = true;
              var call317 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call318 = callmethod(this, "posY", [0]);
              var call319 = callmethod(var_ctx,"translate", [2], call317, call318);
              lineNumber = 118
              onSelf = true;
              var call320 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call321 = callmethod(this, "image", [0]);
              var call322 = callmethod(call321,"draw", [4], var_ctx, var_dx, var_dy, call320);
              lineNumber = 119
              var call323 = callmethod(var_ctx,"restore", [0]);
              return call323
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func315.paramCounts = [
            3,
          ];
          func315.variableArities = [
            false,
          ];
          obj242.methods["draw"] = func315;
          func315.definitionLine = 115;
          func315.definitionModule = "kitty";
          var func324 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func324.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 123
              lineNumber = 119
              lineNumber = 123
              var call325 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call326 = callmethod(call325, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call327 = callmethod(call326, "Image", [3], var_image__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call328 = callmethod(this, "image:=", [1], call327);
              return call328
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func324.paramCounts = [
            1,
          ];
          func324.variableArities = [
            false,
          ];
          obj242.methods["setImage"] = func324;
          func324.definitionLine = 122;
          func324.definitionModule = "kitty";
          var func329 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func329.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 128
              lineNumber = 123
              lineNumber = 127
              onSelf = true;
              var call330 = callmethod(this, "action:=", [1], var_action__39__);
              return call330
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func329.paramCounts = [
            1,
          ];
          func329.variableArities = [
            false,
          ];
          obj242.methods["setAction"] = func329;
          func329.definitionLine = 126;
          func329.definitionModule = "kitty";
          var func331 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func331.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 132
              lineNumber = 123
              lineNumber = 131
              onSelf = true;
              var call332 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 133
              lineNumber = 123
              lineNumber = 132
              onSelf = true;
              var call333 = callmethod(this, "posY:=", [1], var_y);
              return call333
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func331.paramCounts = [
            2,
          ];
          func331.variableArities = [
            false,
          ];
          obj242.methods["setLocation"] = func331;
          func331.definitionLine = 130;
          func331.definitionModule = "kitty";
          var func334 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func334.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 137
              lineNumber = 136
              onSelf = true;
              var call335 = callmethod(this, "posX", [0]);
              return call335
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func334.paramCounts = [
            0,
          ];
          func334.variableArities = [
            false,
          ];
          obj242.methods["getX"] = func334;
          func334.definitionLine = 135;
          func334.definitionModule = "kitty";
          var func336 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func336.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 141
              lineNumber = 140
              onSelf = true;
              var call337 = callmethod(this, "posY", [0]);
              return call337
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func336.paramCounts = [
            0,
          ];
          func336.variableArities = [
            false,
          ];
          obj242.methods["getY"] = func336;
          func336.definitionLine = 139;
          func336.definitionModule = "kitty";
          var func338 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func338.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 145
              lineNumber = 144
              onSelf = true;
              var call339 = callmethod(this, "rotation", [0]);
              return call339
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func338.paramCounts = [
            0,
          ];
          func338.variableArities = [
            false,
          ];
          obj242.methods["getRotation"] = func338;
          func338.definitionLine = 143;
          func338.definitionModule = "kitty";
          sourceObject = obj242;
          lineNumber = 55
          obj242.data["posX"] = var_x__39__;
          var reader_kitty_posX_340 = function() {
            return this.data["posX"];
          }
          obj242.methods["posX"] = reader_kitty_posX_340;
          obj242.data["posX"] = var_x__39__;
          var writer_kitty_posX_340 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj242.methods["posX:="] = writer_kitty_posX_340;
          reader_kitty_posX_340.confidential = true;
          writer_kitty_posX_340.confidential = true;
          lineNumber = 56;
          moduleName = "kitty";
          lineNumber = 55
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj242.mutable = true;
          sourceObject = obj242;
          lineNumber = 56
          obj242.data["posY"] = var_y__39__;
          var reader_kitty_posY_341 = function() {
            return this.data["posY"];
          }
          obj242.methods["posY"] = reader_kitty_posY_341;
          obj242.data["posY"] = var_y__39__;
          var writer_kitty_posY_341 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj242.methods["posY:="] = writer_kitty_posY_341;
          reader_kitty_posY_341.confidential = true;
          writer_kitty_posY_341.confidential = true;
          lineNumber = 57;
          moduleName = "kitty";
          lineNumber = 56
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj242.mutable = true;
          sourceObject = obj242;
          lineNumber = 57
          obj242.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_342 = function() {
            return this.data["rotation"];
          }
          obj242.methods["rotation"] = reader_kitty_rotation_342;
          obj242.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_342 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj242.methods["rotation:="] = writer_kitty_rotation_342;
          reader_kitty_rotation_342.confidential = true;
          writer_kitty_rotation_342.confidential = true;
          lineNumber = 59;
          moduleName = "kitty";
          lineNumber = 57
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj242.mutable = true;
          sourceObject = obj242;
          lineNumber = 59
          var obj343 = Grace_allocObject();
          obj343.definitionModule = "kitty";
          obj343.definitionLine = 59;
          obj343.outer = this;
          var reader_kitty_outer_344 = function() {
            return this.outer;
          }
          obj343.methods["outer"] = reader_kitty_outer_344;
          function obj_init_343() {
            var origSuperDepth = superDepth;
            superDepth = obj343;
            obj343.annotations = [];
            var func345 = function(argcv) {
              var curarg = 1;
              if (argcv[0] !=  func345.paramCounts[0])
                callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
              var returnTarget = invocationCount;
              invocationCount++;
              moduleName = "kitty";
              try {
                return var_done
              } catch(e) {
                if ((e.exctype == 'return') && (e.target == returnTarget)) {
                  return e.returnvalue;
                } else {
                  throw e;
                }
              }
            }
            func345.paramCounts = [
              0,
            ];
            func345.variableArities = [
              false,
            ];
            obj343.methods["update"] = func345;
            func345.definitionLine = 60;
            func345.definitionModule = "kitty";
            sourceObject = obj343;
            superDepth = origSuperDepth;
          }
          obj_init_343.apply(obj343, []);
          obj242.data["action"] = obj343;
          var reader_kitty_action_346 = function() {
            return this.data["action"];
          }
          obj242.methods["action"] = reader_kitty_action_346;
          obj242.data["action"] = obj343;
          var writer_kitty_action_346 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj242.methods["action:="] = writer_kitty_action_346;
          reader_kitty_action_346.confidential = true;
          writer_kitty_action_346.confidential = true;
          lineNumber = 59;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], obj343)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj242.mutable = true;
          sourceObject = obj242;
          obj242.data["image"] = undefined;
          var reader_kitty_image_347 = function() {
            return this.data["image"];
          }
          obj242.methods["image"] = reader_kitty_image_347;
          obj242.data["image"] = undefined;
          var writer_kitty_image_347 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj242.methods["image:="] = writer_kitty_image_347;
          reader_kitty_image_347.confidential = true;
          writer_kitty_image_347.confidential = true;
          obj242.mutable = true;
          sourceObject = obj242;
          lineNumber = 67
          onSelf = true;
          var call348 = callmethod(this, "awake", [0]);
          sourceObject = obj242;
          sourceObject = obj242;
          sourceObject = obj242;
          sourceObject = obj242;
          sourceObject = obj242;
          sourceObject = obj242;
          sourceObject = obj242;
          sourceObject = obj242;
          sourceObject = obj242;
          sourceObject = obj242;
          sourceObject = obj242;
          sourceObject = obj242;
          sourceObject = obj242;
          sourceObject = obj242;
          sourceObject = obj242;
          sourceObject = obj242;
          sourceObject = obj242;
          superDepth = origSuperDepth;
        }
        obj_init_242.apply(inheritingObject, []);
        return obj242
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj131.methods["new()object"] = func241;
    var func349 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 51
        var string350 = new GraceString("class KittyEntity");
        return string350
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func349.paramCounts = [
    ];
    func349.variableArities = [
    ];
    obj131.methods["asDebugString"] = func349;
    func349.definitionLine = 51;
    func349.definitionModule = "kitty";
    sourceObject = obj131;
    sourceObject = obj131;
    superDepth = origSuperDepth;
  }
  obj_init_131.apply(obj131, []);
  var var_KittyEntity = obj131;
  lineNumber = 150
  lineNumber = 157
  var func351 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func351.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (KittyWorld)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      return var_KittyWorld
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func351.paramCounts = [
    0,
  ];
  func351.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func351;
  func351.definitionLine = 157;
  func351.definitionModule = "kitty";
  var obj352 = Grace_allocObject();
  obj352.definitionModule = "kitty";
  obj352.definitionLine = 157;
  obj352.outer = this;
  var reader_kitty_outer_353 = function() {
    return this.outer;
  }
  obj352.methods["outer"] = reader_kitty_outer_353;
  function obj_init_352() {
    var origSuperDepth = superDepth;
    superDepth = obj352;
    obj352.annotations = [];
    var func354 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func354.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj355 = Grace_allocObject();
        obj355.definitionModule = "kitty";
        obj355.definitionLine = 157;
        obj355.outer = this;
        var reader_kitty_outer_356 = function() {
          return this.outer;
        }
        obj355.methods["outer"] = reader_kitty_outer_356;
        function obj_init_355() {
          var origSuperDepth = superDepth;
          superDepth = obj355;
          obj355.annotations = [];
          var func357 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func357.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 193
              var if358 = var_done;
              lineNumber = 189
              onSelf = true;
              var call359 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call359)) {
                lineNumber = 191
                lineNumber = 190
                var bool360 = new GraceBoolean(false)
                return bool360
              }
              lineNumber = 194
              lineNumber = 157
              lineNumber = 193
              var call361 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call362 = callmethod(this, "document:=", [1], call361);
              lineNumber = 194
              lineNumber = 193
              lineNumber = 194
              var string363 = new GraceString("standard-canvas");
              onSelf = true;
              var call364 = callmethod(this, "document", [0]);
              var call365 = callmethod(call364,"getElementById", [1], string363);
              onSelf = true;
              var call366 = callmethod(this, "canvas:=", [1], call365);
              lineNumber = 196
              lineNumber = 193
              lineNumber = 195
              onSelf = true;
              var call367 = callmethod(this, "canvas", [0]);
              var call368 = callmethod(call367,"width", [0]);
              onSelf = true;
              var call369 = callmethod(this, "canvasWidth:=", [1], call368);
              lineNumber = 199
              lineNumber = 195
              lineNumber = 196
              onSelf = true;
              var call370 = callmethod(this, "canvas", [0]);
              var call371 = callmethod(call370,"height", [0]);
              onSelf = true;
              var call372 = callmethod(this, "canvasHeight:=", [1], call371);
              lineNumber = 211
              var block373 = Grace_allocObject();
              block373.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block373.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block373.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block373.methods["match"] = GraceBlock_match;
              block373.methods["prefix?"] = GraceBlock_lift;
              block373.receiver = this;
              block373.className = 'block<kitty:211>';
              block373.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 202
                lineNumber = 201
                onSelf = true;
                var call374 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call376 = callmethod(this, "canvas", [0]);
                var call377 = callmethod(call376,"offsetWidth", [0]);
                onSelf = true;
                var call379 = callmethod(this, "canvas", [0]);
                var call380 = callmethod(call379,"offsetLeft", [0]);
                var call382 = callmethod(var_ev,"clientX", [0]);
                var diff384 = callmethod(call382, "-", [1], call380);
                var quotient386 = callmethod(diff384, "/", [1], call377);
                var prod388 = callmethod(quotient386, "*", [1], call374);
                var var_x = prod388;
                lineNumber = 202;
                moduleName = "kitty";
                lineNumber = 201
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 206
                lineNumber = 202
                onSelf = true;
                var call389 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call391 = callmethod(this, "canvas", [0]);
                var call392 = callmethod(call391,"offsetHeight", [0]);
                onSelf = true;
                var call394 = callmethod(this, "canvas", [0]);
                var call395 = callmethod(call394,"offsetTop", [0]);
                var call397 = callmethod(var_ev,"clientY", [0]);
                var diff399 = callmethod(call397, "-", [1], call395);
                var quotient401 = callmethod(diff399, "/", [1], call392);
                var prod403 = callmethod(quotient401, "*", [1], call389);
                var var_y = prod403;
                lineNumber = 206;
                moduleName = "kitty";
                lineNumber = 202
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 210
                var if404 = var_done;
                lineNumber = 206
                var opresult407 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call410 = callmethod(this, "canvasWidth", [0]);
                var diff412 = callmethod(call410, "-", [1], new GraceNum(20));
                var opresult415 = callmethod(var_x, ">", [1], diff412);
                var opresult417 = callmethod(opresult415, "&&", [1], opresult407);
                if (Grace_isTrue(opresult417)) {
                  lineNumber = 207
                  var call418 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 208
                  onSelf = true;
                  var call419 = callmethod(this, "stop", [0]);
                  if404 = call419;
                }
                return if404;
              };
              var_mouseDownListener = block373;
              lineNumber = 211
              var string420 = new GraceString("mousedown");
              onSelf = true;
              var call421 = callmethod(this, "canvas", [0]);
              var call422 = callmethod(call421,"addEventListener", [2], string420, var_mouseDownListener);
              lineNumber = 221
              var block423 = Grace_allocObject();
              block423.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block423.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block423.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block423.methods["match"] = GraceBlock_match;
              block423.methods["prefix?"] = GraceBlock_lift;
              block423.receiver = this;
              block423.className = 'block<kitty:221>';
              block423.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 219
                var if424 = var_done;
                lineNumber = 216
                var call426 = callmethod(var_ev,"keyCode", [0]);
                var opresult428 = callmethod(call426, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult428)) {
                  lineNumber = 217
                  onSelf = true;
                  var call429 = callmethod(this, "stop", [0]);
                  if424 = call429;
                }
                lineNumber = 220
                lineNumber = 216
                lineNumber = 219
                var call430 = callmethod(var_ev,"keyCode", [0]);
                onSelf = true;
                var call431 = callmethod(this, "currentKeyDown:=", [1], call430);
                return call431;
              };
              var_keyDownListener = block423;
              lineNumber = 221
              var string432 = new GraceString("keydown");
              onSelf = true;
              var call433 = callmethod(this, "document", [0]);
              var call434 = callmethod(call433,"addEventListener", [2], string432, var_keyDownListener);
              lineNumber = 227
              var block435 = Grace_allocObject();
              block435.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block435.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block435.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block435.methods["match"] = GraceBlock_match;
              block435.methods["prefix?"] = GraceBlock_lift;
              block435.receiver = this;
              block435.className = 'block<kitty:227>';
              block435.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 226
                lineNumber = 219
                lineNumber = 226
                lineNumber = 225
                var call436 = callmethod(new GraceNum(1),"prefix-", [0]);
                onSelf = true;
                var call437 = callmethod(this, "currentKeyDown:=", [1], call436);
                return call437;
              };
              var_keyUpListener = block435;
              lineNumber = 227
              var string438 = new GraceString("keyup");
              onSelf = true;
              var call439 = callmethod(this, "document", [0]);
              var call440 = callmethod(call439,"addEventListener", [2], string438, var_keyUpListener);
              lineNumber = 229
              lineNumber = 219
              lineNumber = 229
              var string441 = new GraceString("canvas");
              var call442 = callmethod(var_dom,"document", [0]);
              var call443 = callmethod(call442,"createElement", [1], string441);
              onSelf = true;
              var call444 = callmethod(this, "backingCanvas:=", [1], call443);
              lineNumber = 231
              lineNumber = 229
              lineNumber = 230
              onSelf = true;
              var call445 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call446 = callmethod(this, "backingCanvas", [0]);
              var call447 = callmethod(call446,"height:=", [1], call445);
              lineNumber = 232
              lineNumber = 229
              lineNumber = 231
              onSelf = true;
              var call448 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call449 = callmethod(this, "backingCanvas", [0]);
              var call450 = callmethod(call449,"width:=", [1], call448);
              lineNumber = 232
              lineNumber = 229
              lineNumber = 232
              var string451 = new GraceString("2d");
              onSelf = true;
              var call452 = callmethod(this, "backingCanvas", [0]);
              var call453 = callmethod(call452,"getContext", [1], string451);
              onSelf = true;
              var call454 = callmethod(this, "backingContext:=", [1], call453);
              lineNumber = 233
              lineNumber = 229
              lineNumber = 233
              var string455 = new GraceString("2d");
              onSelf = true;
              var call456 = callmethod(this, "canvas", [0]);
              var call457 = callmethod(call456,"getContext", [1], string455);
              onSelf = true;
              var call458 = callmethod(this, "mctx:=", [1], call457);
              lineNumber = 236
              var string459 = new GraceString("doggo.jpg");
              onSelf = true;
              var call460 = callmethod(this, "setBackground", [1], string459);
              lineNumber = 244
              lineNumber = 229
              lineNumber = 238
              var bool461 = new GraceBoolean(true)
              onSelf = true;
              var call462 = callmethod(this, "isInit:=", [1], bool461);
              return call462
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func357.paramCounts = [
            0,
          ];
          func357.variableArities = [
            false,
          ];
          obj355.methods["init"] = func357;
          func357.definitionLine = 185;
          func357.definitionModule = "kitty";
          var func463 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func463.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 250
              lineNumber = 229
              lineNumber = 249
              var bool464 = new GraceBoolean(true)
              onSelf = true;
              var call465 = callmethod(this, "isRunning:=", [1], bool464);
              lineNumber = 250
              var block466 = Grace_allocObject();
              block466.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block466.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block466.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block466.methods["match"] = GraceBlock_match;
              block466.methods["prefix?"] = GraceBlock_lift;
              block466.receiver = this;
              block466.className = 'block<kitty:250>';
              block466.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call467 = callmethod(this, "isRunning", [0]);
                return call467;
              };
              lineNumber = 254
              var block468 = Grace_allocObject();
              block468.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block468.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block468.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block468.methods["match"] = GraceBlock_match;
              block468.methods["prefix?"] = GraceBlock_lift;
              block468.receiver = this;
              block468.className = 'block<kitty:254>';
              block468.real = function(
              ) {
                sourceObject = this;
                lineNumber = 251
                onSelf = true;
                var call469 = callmethod(this, "update", [0]);
                return call469;
              };
              lineNumber = 250
              var call470 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block466, new GraceNum(10), block468);
              return call470
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func463.paramCounts = [
            0,
          ];
          func463.variableArities = [
            false,
          ];
          obj355.methods["start"] = func463;
          func463.definitionLine = 247;
          func463.definitionModule = "kitty";
          var func471 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func471.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 263
              lineNumber = 229
              lineNumber = 262
              onSelf = true;
              var call472 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call473 = callmethod(this, "mctx", [0]);
              var call474 = callmethod(call473,"fillStyle:=", [1], call472);
              lineNumber = 263
              onSelf = true;
              var call475 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call476 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call477 = callmethod(this, "mctx", [0]);
              var call478 = callmethod(call477,"fillRect", [4], new GraceNum(0), new GraceNum(0), call475, call476);
              lineNumber = 264
              onSelf = true;
              var call479 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call480 = callmethod(this, "mctx", [0]);
              var call481 = callmethod(call480,"drawImage", [3], call479, new GraceNum(0), new GraceNum(0));
              lineNumber = 265
              onSelf = true;
              var call482 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call484 = callmethod(this, "canvasWidth", [0]);
              var quotient486 = callmethod(call484, "/", [1], new GraceNum(2));
              onSelf = true;
              var call488 = callmethod(this, "canvasHeight", [0]);
              var quotient490 = callmethod(call488, "/", [1], new GraceNum(2));
              onSelf = true;
              var call491 = callmethod(this, "background", [0]);
              var call492 = callmethod(call491,"draw", [4], call482, quotient486, quotient490, new GraceNum(0));
              lineNumber = 268
              onSelf = true;
              var call493 = callmethod(this, "entities", [0]);
              lineNumber = 274
              var block494 = Grace_allocObject();
              block494.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block494.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block494.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block494.methods["match"] = GraceBlock_match;
              block494.methods["prefix?"] = GraceBlock_lift;
              block494.receiver = this;
              block494.className = 'block<kitty:274>';
              block494.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 269
                var call495 = callmethod(var_entity,"update", [0]);
                lineNumber = 270
                onSelf = true;
                var call496 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call498 = callmethod(this, "canvasWidth", [0]);
                var quotient500 = callmethod(call498, "/", [1], new GraceNum(2));
                onSelf = true;
                var call502 = callmethod(this, "canvasHeight", [0]);
                var quotient504 = callmethod(call502, "/", [1], new GraceNum(2));
                var call505 = callmethod(var_entity,"draw", [3], call496, quotient500, quotient504);
                return call505;
              };
              var call506 = callmethod(Grace_prelude,"for()do", [1, 1], call493, block494);
              return call506
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func471.paramCounts = [
            0,
          ];
          func471.variableArities = [
            false,
          ];
          obj355.methods["update"] = func471;
          func471.definitionLine = 257;
          func471.definitionModule = "kitty";
          var func507 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func507.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 277
              var string508 = new GraceString("WORLD STOPPING...");
              var call509 = Grace_print(string508);
              lineNumber = 279
              lineNumber = 269
              lineNumber = 278
              var bool510 = new GraceBoolean(false)
              onSelf = true;
              var call511 = callmethod(this, "isRunning:=", [1], bool510);
              lineNumber = 279
              var string512 = new GraceString("mousedown");
              onSelf = true;
              var call513 = callmethod(this, "canvas", [0]);
              var call514 = callmethod(call513,"removeEventListener", [2], string512, var_mouseDownListener);
              lineNumber = 280
              var string515 = new GraceString("keydown");
              onSelf = true;
              var call516 = callmethod(this, "document", [0]);
              var call517 = callmethod(call516,"removeEventListener", [2], string515, var_keyDownListener);
              lineNumber = 281
              var string518 = new GraceString("keyup");
              onSelf = true;
              var call519 = callmethod(this, "document", [0]);
              var call520 = callmethod(call519,"removeEventListener", [2], string518, var_keyUpListener);
              return call520
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func507.paramCounts = [
            0,
          ];
          func507.variableArities = [
            false,
          ];
          obj355.methods["stop"] = func507;
          func507.definitionLine = 276;
          func507.definitionModule = "kitty";
          var func521 = function(argcv) {
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func521.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isKeyDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 286
              lineNumber = 285
              onSelf = true;
              var call522 = callmethod(this, "currentKeyDown", [0]);
              var opresult525 = callmethod(var_key, "==", [1], call522);
              return opresult525
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func521.paramCounts = [
            1,
          ];
          func521.variableArities = [
            false,
          ];
          obj355.methods["isKeyDown"] = func521;
          func521.definitionLine = 284;
          func521.definitionModule = "kitty";
          var func526 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func526.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 289
              lineNumber = 269
              lineNumber = 289
              onSelf = true;
              var call527 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call528 = callmethod(this, "canvasHeight", [0]);
              var call529 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call530 = callmethod(call529, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call531 = callmethod(call530, "Image", [3], var_background__39__, call527, call528);
              onSelf = true;
              var call532 = callmethod(this, "background:=", [1], call531);
              return call532
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func526.paramCounts = [
            1,
          ];
          func526.variableArities = [
            false,
          ];
          obj355.methods["setBackground"] = func526;
          func526.definitionLine = 288;
          func526.definitionModule = "kitty";
          var func533 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func533.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 293
              onSelf = true;
              var call534 = callmethod(this, "entities", [0]);
              var call535 = callmethod(call534,"push", [1], var_e);
              return call535
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func533.paramTypes = [];
          func533.paramTypes.push([]);
          func533.paramCounts = [
            1,
          ];
          func533.variableArities = [
            false,
          ];
          obj355.methods["addEntity"] = func533;
          func533.definitionLine = 292;
          func533.definitionModule = "kitty";
          sourceObject = obj355;
          obj355.data["background"] = undefined;
          var reader_kitty_background_536 = function() {
            return this.data["background"];
          }
          obj355.methods["background"] = reader_kitty_background_536;
          obj355.data["background"] = undefined;
          var writer_kitty_background_536 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj355.methods["background:="] = writer_kitty_background_536;
          reader_kitty_background_536.confidential = true;
          writer_kitty_background_536.confidential = true;
          obj355.mutable = true;
          sourceObject = obj355;
          lineNumber = 162
          var string537 = new GraceString("black");
          obj355.data["backgroundColour"] = string537;
          var reader_kitty_backgroundColour_538 = function() {
            return this.data["backgroundColour"];
          }
          obj355.methods["backgroundColour"] = reader_kitty_backgroundColour_538;
          obj355.data["backgroundColour"] = string537;
          var writer_kitty_backgroundColour_538 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj355.methods["backgroundColour:="] = writer_kitty_backgroundColour_538;
          reader_kitty_backgroundColour_538.confidential = true;
          writer_kitty_backgroundColour_538.confidential = true;
          lineNumber = 164;
          moduleName = "kitty";
          lineNumber = 162
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string537)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj355.mutable = true;
          sourceObject = obj355;
          obj355.data["document"] = undefined;
          var reader_kitty_document_539 = function() {
            return this.data["document"];
          }
          obj355.methods["document"] = reader_kitty_document_539;
          obj355.data["document"] = undefined;
          var writer_kitty_document_539 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj355.methods["document:="] = writer_kitty_document_539;
          reader_kitty_document_539.confidential = true;
          writer_kitty_document_539.confidential = true;
          obj355.mutable = true;
          sourceObject = obj355;
          obj355.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_540 = function() {
            return this.data["backingCanvas"];
          }
          obj355.methods["backingCanvas"] = reader_kitty_backingCanvas_540;
          obj355.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_540 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj355.methods["backingCanvas:="] = writer_kitty_backingCanvas_540;
          reader_kitty_backingCanvas_540.confidential = true;
          writer_kitty_backingCanvas_540.confidential = true;
          obj355.mutable = true;
          sourceObject = obj355;
          obj355.data["backingContext"] = undefined;
          var reader_kitty_backingContext_541 = function() {
            return this.data["backingContext"];
          }
          obj355.methods["backingContext"] = reader_kitty_backingContext_541;
          obj355.data["backingContext"] = undefined;
          var writer_kitty_backingContext_541 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj355.methods["backingContext:="] = writer_kitty_backingContext_541;
          reader_kitty_backingContext_541.confidential = true;
          writer_kitty_backingContext_541.confidential = true;
          obj355.mutable = true;
          sourceObject = obj355;
          obj355.data["canvas"] = undefined;
          var reader_kitty_canvas_542 = function() {
            return this.data["canvas"];
          }
          obj355.methods["canvas"] = reader_kitty_canvas_542;
          obj355.data["canvas"] = undefined;
          var writer_kitty_canvas_542 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj355.methods["canvas:="] = writer_kitty_canvas_542;
          reader_kitty_canvas_542.confidential = true;
          writer_kitty_canvas_542.confidential = true;
          obj355.mutable = true;
          sourceObject = obj355;
          obj355.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_543 = function() {
            return this.data["canvasWidth"];
          }
          obj355.methods["canvasWidth"] = reader_kitty_canvasWidth_543;
          obj355.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_543 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj355.methods["canvasWidth:="] = writer_kitty_canvasWidth_543;
          reader_kitty_canvasWidth_543.confidential = true;
          writer_kitty_canvasWidth_543.confidential = true;
          obj355.mutable = true;
          sourceObject = obj355;
          obj355.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_544 = function() {
            return this.data["canvasHeight"];
          }
          obj355.methods["canvasHeight"] = reader_kitty_canvasHeight_544;
          obj355.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_544 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj355.methods["canvasHeight:="] = writer_kitty_canvasHeight_544;
          reader_kitty_canvasHeight_544.confidential = true;
          writer_kitty_canvasHeight_544.confidential = true;
          obj355.mutable = true;
          sourceObject = obj355;
          lineNumber = 173
          var call545 = callmethod(var_collections,"list", [0]);
          var call546 = callmethod(call545,"new", [0]);
          obj355.data["entities"] = call546;
          var reader_kitty_entities_547 = function() {
            return this.data["entities"];
          }
          obj355.methods["entities"] = reader_kitty_entities_547;
          obj355.data["entities"] = call546;
          var writer_kitty_entities_547 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj355.methods["entities:="] = writer_kitty_entities_547;
          reader_kitty_entities_547.confidential = true;
          writer_kitty_entities_547.confidential = true;
          lineNumber = 175;
          moduleName = "kitty";
          lineNumber = 173
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call546)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj355.mutable = true;
          sourceObject = obj355;
          lineNumber = 175
          var bool548 = new GraceBoolean(false)
          obj355.data["isInit"] = bool548;
          var reader_kitty_isInit_549 = function() {
            return this.data["isInit"];
          }
          obj355.methods["isInit"] = reader_kitty_isInit_549;
          obj355.data["isInit"] = bool548;
          var writer_kitty_isInit_549 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj355.methods["isInit:="] = writer_kitty_isInit_549;
          reader_kitty_isInit_549.confidential = true;
          writer_kitty_isInit_549.confidential = true;
          lineNumber = 176;
          moduleName = "kitty";
          lineNumber = 175
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool548)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj355.mutable = true;
          sourceObject = obj355;
          lineNumber = 176
          var bool550 = new GraceBoolean(false)
          obj355.data["isRunning"] = bool550;
          var reader_kitty_isRunning_551 = function() {
            return this.data["isRunning"];
          }
          obj355.methods["isRunning"] = reader_kitty_isRunning_551;
          obj355.data["isRunning"] = bool550;
          var writer_kitty_isRunning_551 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj355.methods["isRunning:="] = writer_kitty_isRunning_551;
          reader_kitty_isRunning_551.confidential = true;
          writer_kitty_isRunning_551.confidential = true;
          lineNumber = 178;
          moduleName = "kitty";
          lineNumber = 176
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool550)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj355.mutable = true;
          sourceObject = obj355;
          obj355.data["mctx"] = undefined;
          var reader_kitty_mctx_552 = function() {
            return this.data["mctx"];
          }
          obj355.methods["mctx"] = reader_kitty_mctx_552;
          obj355.data["mctx"] = undefined;
          var writer_kitty_mctx_552 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj355.methods["mctx:="] = writer_kitty_mctx_552;
          reader_kitty_mctx_552.confidential = true;
          writer_kitty_mctx_552.confidential = true;
          obj355.mutable = true;
          sourceObject = obj355;
          lineNumber = 182
          lineNumber = 180
          var call553 = callmethod(new GraceNum(1),"prefix-", [0]);
          obj355.data["currentKeyDown"] = call553;
          var reader_kitty_currentKeyDown_554 = function() {
            return this.data["currentKeyDown"];
          }
          obj355.methods["currentKeyDown"] = reader_kitty_currentKeyDown_554;
          obj355.data["currentKeyDown"] = call553;
          var writer_kitty_currentKeyDown_554 = function(argcv, o) {
            this.data["currentKeyDown"] = o;
          }
          obj355.methods["currentKeyDown:="] = writer_kitty_currentKeyDown_554;
          reader_kitty_currentKeyDown_554.confidential = true;
          writer_kitty_currentKeyDown_554.confidential = true;
          lineNumber = 182;
          moduleName = "kitty";
          lineNumber = 180
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call553)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'currentKeyDown' to be of type Unknown"))
          obj355.mutable = true;
          sourceObject = obj355;
          lineNumber = 182
          onSelf = true;
          var call555 = callmethod(this, "init", [0]);
          sourceObject = obj355;
          sourceObject = obj355;
          sourceObject = obj355;
          sourceObject = obj355;
          sourceObject = obj355;
          sourceObject = obj355;
          sourceObject = obj355;
          superDepth = origSuperDepth;
        }
        obj_init_355.apply(obj355, []);
        return obj355
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func354.paramCounts = [
      0,
    ];
    func354.variableArities = [
      false,
    ];
    obj352.methods["new"] = func354;
    func354.definitionLine = 157;
    func354.definitionModule = "kitty";
    var func556 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj557 = Grace_allocObject();
        obj557.definitionModule = "kitty";
        obj557.definitionLine = 157;
        var inho557 = inheritingObject;
        while (inho557.superobj) inho557 = inho557.superobj;
        inho557.superobj = obj557;
        obj557.data = inheritingObject.data;
        obj557.outer = this;
        var reader_kitty_outer_558 = function() {
          return this.outer;
        }
        obj557.methods["outer"] = reader_kitty_outer_558;
        function obj_init_557() {
          var origSuperDepth = superDepth;
          superDepth = obj557;
          obj557.annotations = [];
          var func559 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func559.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 193
              var if560 = var_done;
              lineNumber = 189
              onSelf = true;
              var call561 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call561)) {
                lineNumber = 191
                lineNumber = 190
                var bool562 = new GraceBoolean(false)
                return bool562
              }
              lineNumber = 194
              lineNumber = 173
              lineNumber = 193
              var call563 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call564 = callmethod(this, "document:=", [1], call563);
              lineNumber = 194
              lineNumber = 193
              lineNumber = 194
              var string565 = new GraceString("standard-canvas");
              onSelf = true;
              var call566 = callmethod(this, "document", [0]);
              var call567 = callmethod(call566,"getElementById", [1], string565);
              onSelf = true;
              var call568 = callmethod(this, "canvas:=", [1], call567);
              lineNumber = 196
              lineNumber = 193
              lineNumber = 195
              onSelf = true;
              var call569 = callmethod(this, "canvas", [0]);
              var call570 = callmethod(call569,"width", [0]);
              onSelf = true;
              var call571 = callmethod(this, "canvasWidth:=", [1], call570);
              lineNumber = 199
              lineNumber = 195
              lineNumber = 196
              onSelf = true;
              var call572 = callmethod(this, "canvas", [0]);
              var call573 = callmethod(call572,"height", [0]);
              onSelf = true;
              var call574 = callmethod(this, "canvasHeight:=", [1], call573);
              lineNumber = 211
              var block575 = Grace_allocObject();
              block575.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block575.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block575.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block575.methods["match"] = GraceBlock_match;
              block575.methods["prefix?"] = GraceBlock_lift;
              block575.receiver = this;
              block575.className = 'block<kitty:211>';
              block575.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 202
                lineNumber = 201
                onSelf = true;
                var call576 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call578 = callmethod(this, "canvas", [0]);
                var call579 = callmethod(call578,"offsetWidth", [0]);
                onSelf = true;
                var call581 = callmethod(this, "canvas", [0]);
                var call582 = callmethod(call581,"offsetLeft", [0]);
                var call584 = callmethod(var_ev,"clientX", [0]);
                var diff586 = callmethod(call584, "-", [1], call582);
                var quotient588 = callmethod(diff586, "/", [1], call579);
                var prod590 = callmethod(quotient588, "*", [1], call576);
                var var_x = prod590;
                lineNumber = 202;
                moduleName = "kitty";
                lineNumber = 201
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 206
                lineNumber = 202
                onSelf = true;
                var call591 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call593 = callmethod(this, "canvas", [0]);
                var call594 = callmethod(call593,"offsetHeight", [0]);
                onSelf = true;
                var call596 = callmethod(this, "canvas", [0]);
                var call597 = callmethod(call596,"offsetTop", [0]);
                var call599 = callmethod(var_ev,"clientY", [0]);
                var diff601 = callmethod(call599, "-", [1], call597);
                var quotient603 = callmethod(diff601, "/", [1], call594);
                var prod605 = callmethod(quotient603, "*", [1], call591);
                var var_y = prod605;
                lineNumber = 206;
                moduleName = "kitty";
                lineNumber = 202
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 210
                var if606 = var_done;
                lineNumber = 206
                var opresult609 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call612 = callmethod(this, "canvasWidth", [0]);
                var diff614 = callmethod(call612, "-", [1], new GraceNum(20));
                var opresult617 = callmethod(var_x, ">", [1], diff614);
                var opresult619 = callmethod(opresult617, "&&", [1], opresult609);
                if (Grace_isTrue(opresult619)) {
                  lineNumber = 207
                  var call620 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 208
                  onSelf = true;
                  var call621 = callmethod(this, "stop", [0]);
                  if606 = call621;
                }
                return if606;
              };
              var_mouseDownListener = block575;
              lineNumber = 211
              var string622 = new GraceString("mousedown");
              onSelf = true;
              var call623 = callmethod(this, "canvas", [0]);
              var call624 = callmethod(call623,"addEventListener", [2], string622, var_mouseDownListener);
              lineNumber = 221
              var block625 = Grace_allocObject();
              block625.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block625.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block625.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block625.methods["match"] = GraceBlock_match;
              block625.methods["prefix?"] = GraceBlock_lift;
              block625.receiver = this;
              block625.className = 'block<kitty:221>';
              block625.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 219
                var if626 = var_done;
                lineNumber = 216
                var call628 = callmethod(var_ev,"keyCode", [0]);
                var opresult630 = callmethod(call628, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult630)) {
                  lineNumber = 217
                  onSelf = true;
                  var call631 = callmethod(this, "stop", [0]);
                  if626 = call631;
                }
                lineNumber = 220
                lineNumber = 216
                lineNumber = 219
                var call632 = callmethod(var_ev,"keyCode", [0]);
                onSelf = true;
                var call633 = callmethod(this, "currentKeyDown:=", [1], call632);
                return call633;
              };
              var_keyDownListener = block625;
              lineNumber = 221
              var string634 = new GraceString("keydown");
              onSelf = true;
              var call635 = callmethod(this, "document", [0]);
              var call636 = callmethod(call635,"addEventListener", [2], string634, var_keyDownListener);
              lineNumber = 227
              var block637 = Grace_allocObject();
              block637.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block637.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block637.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block637.methods["match"] = GraceBlock_match;
              block637.methods["prefix?"] = GraceBlock_lift;
              block637.receiver = this;
              block637.className = 'block<kitty:227>';
              block637.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 226
                lineNumber = 219
                lineNumber = 226
                lineNumber = 225
                var call638 = callmethod(new GraceNum(1),"prefix-", [0]);
                onSelf = true;
                var call639 = callmethod(this, "currentKeyDown:=", [1], call638);
                return call639;
              };
              var_keyUpListener = block637;
              lineNumber = 227
              var string640 = new GraceString("keyup");
              onSelf = true;
              var call641 = callmethod(this, "document", [0]);
              var call642 = callmethod(call641,"addEventListener", [2], string640, var_keyUpListener);
              lineNumber = 229
              lineNumber = 219
              lineNumber = 229
              var string643 = new GraceString("canvas");
              var call644 = callmethod(var_dom,"document", [0]);
              var call645 = callmethod(call644,"createElement", [1], string643);
              onSelf = true;
              var call646 = callmethod(this, "backingCanvas:=", [1], call645);
              lineNumber = 231
              lineNumber = 229
              lineNumber = 230
              onSelf = true;
              var call647 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call648 = callmethod(this, "backingCanvas", [0]);
              var call649 = callmethod(call648,"height:=", [1], call647);
              lineNumber = 232
              lineNumber = 229
              lineNumber = 231
              onSelf = true;
              var call650 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call651 = callmethod(this, "backingCanvas", [0]);
              var call652 = callmethod(call651,"width:=", [1], call650);
              lineNumber = 232
              lineNumber = 229
              lineNumber = 232
              var string653 = new GraceString("2d");
              onSelf = true;
              var call654 = callmethod(this, "backingCanvas", [0]);
              var call655 = callmethod(call654,"getContext", [1], string653);
              onSelf = true;
              var call656 = callmethod(this, "backingContext:=", [1], call655);
              lineNumber = 233
              lineNumber = 229
              lineNumber = 233
              var string657 = new GraceString("2d");
              onSelf = true;
              var call658 = callmethod(this, "canvas", [0]);
              var call659 = callmethod(call658,"getContext", [1], string657);
              onSelf = true;
              var call660 = callmethod(this, "mctx:=", [1], call659);
              lineNumber = 236
              var string661 = new GraceString("doggo.jpg");
              onSelf = true;
              var call662 = callmethod(this, "setBackground", [1], string661);
              lineNumber = 244
              lineNumber = 229
              lineNumber = 238
              var bool663 = new GraceBoolean(true)
              onSelf = true;
              var call664 = callmethod(this, "isInit:=", [1], bool663);
              return call664
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func559.paramCounts = [
            0,
          ];
          func559.variableArities = [
            false,
          ];
          obj557.methods["init"] = func559;
          func559.definitionLine = 185;
          func559.definitionModule = "kitty";
          var func665 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func665.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 250
              lineNumber = 229
              lineNumber = 249
              var bool666 = new GraceBoolean(true)
              onSelf = true;
              var call667 = callmethod(this, "isRunning:=", [1], bool666);
              lineNumber = 250
              var block668 = Grace_allocObject();
              block668.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block668.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block668.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block668.methods["match"] = GraceBlock_match;
              block668.methods["prefix?"] = GraceBlock_lift;
              block668.receiver = this;
              block668.className = 'block<kitty:250>';
              block668.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call669 = callmethod(this, "isRunning", [0]);
                return call669;
              };
              lineNumber = 254
              var block670 = Grace_allocObject();
              block670.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block670.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block670.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block670.methods["match"] = GraceBlock_match;
              block670.methods["prefix?"] = GraceBlock_lift;
              block670.receiver = this;
              block670.className = 'block<kitty:254>';
              block670.real = function(
              ) {
                sourceObject = this;
                lineNumber = 251
                onSelf = true;
                var call671 = callmethod(this, "update", [0]);
                return call671;
              };
              lineNumber = 250
              var call672 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block668, new GraceNum(10), block670);
              return call672
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func665.paramCounts = [
            0,
          ];
          func665.variableArities = [
            false,
          ];
          obj557.methods["start"] = func665;
          func665.definitionLine = 247;
          func665.definitionModule = "kitty";
          var func673 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func673.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 263
              lineNumber = 229
              lineNumber = 262
              onSelf = true;
              var call674 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call675 = callmethod(this, "mctx", [0]);
              var call676 = callmethod(call675,"fillStyle:=", [1], call674);
              lineNumber = 263
              onSelf = true;
              var call677 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call678 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call679 = callmethod(this, "mctx", [0]);
              var call680 = callmethod(call679,"fillRect", [4], new GraceNum(0), new GraceNum(0), call677, call678);
              lineNumber = 264
              onSelf = true;
              var call681 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call682 = callmethod(this, "mctx", [0]);
              var call683 = callmethod(call682,"drawImage", [3], call681, new GraceNum(0), new GraceNum(0));
              lineNumber = 265
              onSelf = true;
              var call684 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call686 = callmethod(this, "canvasWidth", [0]);
              var quotient688 = callmethod(call686, "/", [1], new GraceNum(2));
              onSelf = true;
              var call690 = callmethod(this, "canvasHeight", [0]);
              var quotient692 = callmethod(call690, "/", [1], new GraceNum(2));
              onSelf = true;
              var call693 = callmethod(this, "background", [0]);
              var call694 = callmethod(call693,"draw", [4], call684, quotient688, quotient692, new GraceNum(0));
              lineNumber = 268
              onSelf = true;
              var call695 = callmethod(this, "entities", [0]);
              lineNumber = 274
              var block696 = Grace_allocObject();
              block696.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block696.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block696.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block696.methods["match"] = GraceBlock_match;
              block696.methods["prefix?"] = GraceBlock_lift;
              block696.receiver = this;
              block696.className = 'block<kitty:274>';
              block696.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 269
                var call697 = callmethod(var_entity,"update", [0]);
                lineNumber = 270
                onSelf = true;
                var call698 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call700 = callmethod(this, "canvasWidth", [0]);
                var quotient702 = callmethod(call700, "/", [1], new GraceNum(2));
                onSelf = true;
                var call704 = callmethod(this, "canvasHeight", [0]);
                var quotient706 = callmethod(call704, "/", [1], new GraceNum(2));
                var call707 = callmethod(var_entity,"draw", [3], call698, quotient702, quotient706);
                return call707;
              };
              var call708 = callmethod(Grace_prelude,"for()do", [1, 1], call695, block696);
              return call708
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func673.paramCounts = [
            0,
          ];
          func673.variableArities = [
            false,
          ];
          obj557.methods["update"] = func673;
          func673.definitionLine = 257;
          func673.definitionModule = "kitty";
          var func709 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func709.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 277
              var string710 = new GraceString("WORLD STOPPING...");
              var call711 = Grace_print(string710);
              lineNumber = 279
              lineNumber = 269
              lineNumber = 278
              var bool712 = new GraceBoolean(false)
              onSelf = true;
              var call713 = callmethod(this, "isRunning:=", [1], bool712);
              lineNumber = 279
              var string714 = new GraceString("mousedown");
              onSelf = true;
              var call715 = callmethod(this, "canvas", [0]);
              var call716 = callmethod(call715,"removeEventListener", [2], string714, var_mouseDownListener);
              lineNumber = 280
              var string717 = new GraceString("keydown");
              onSelf = true;
              var call718 = callmethod(this, "document", [0]);
              var call719 = callmethod(call718,"removeEventListener", [2], string717, var_keyDownListener);
              lineNumber = 281
              var string720 = new GraceString("keyup");
              onSelf = true;
              var call721 = callmethod(this, "document", [0]);
              var call722 = callmethod(call721,"removeEventListener", [2], string720, var_keyUpListener);
              return call722
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func709.paramCounts = [
            0,
          ];
          func709.variableArities = [
            false,
          ];
          obj557.methods["stop"] = func709;
          func709.definitionLine = 276;
          func709.definitionModule = "kitty";
          var func723 = function(argcv) {
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func723.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isKeyDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 286
              lineNumber = 285
              onSelf = true;
              var call724 = callmethod(this, "currentKeyDown", [0]);
              var opresult727 = callmethod(var_key, "==", [1], call724);
              return opresult727
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func723.paramCounts = [
            1,
          ];
          func723.variableArities = [
            false,
          ];
          obj557.methods["isKeyDown"] = func723;
          func723.definitionLine = 284;
          func723.definitionModule = "kitty";
          var func728 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func728.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 289
              lineNumber = 269
              lineNumber = 289
              onSelf = true;
              var call729 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call730 = callmethod(this, "canvasHeight", [0]);
              var call731 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call732 = callmethod(call731, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call733 = callmethod(call732, "Image", [3], var_background__39__, call729, call730);
              onSelf = true;
              var call734 = callmethod(this, "background:=", [1], call733);
              return call734
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func728.paramCounts = [
            1,
          ];
          func728.variableArities = [
            false,
          ];
          obj557.methods["setBackground"] = func728;
          func728.definitionLine = 288;
          func728.definitionModule = "kitty";
          var func735 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func735.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 293
              onSelf = true;
              var call736 = callmethod(this, "entities", [0]);
              var call737 = callmethod(call736,"push", [1], var_e);
              return call737
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func735.paramTypes = [];
          func735.paramTypes.push([]);
          func735.paramCounts = [
            1,
          ];
          func735.variableArities = [
            false,
          ];
          obj557.methods["addEntity"] = func735;
          func735.definitionLine = 292;
          func735.definitionModule = "kitty";
          sourceObject = obj557;
          obj557.data["background"] = undefined;
          var reader_kitty_background_738 = function() {
            return this.data["background"];
          }
          obj557.methods["background"] = reader_kitty_background_738;
          obj557.data["background"] = undefined;
          var writer_kitty_background_738 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj557.methods["background:="] = writer_kitty_background_738;
          reader_kitty_background_738.confidential = true;
          writer_kitty_background_738.confidential = true;
          obj557.mutable = true;
          sourceObject = obj557;
          lineNumber = 162
          var string739 = new GraceString("black");
          obj557.data["backgroundColour"] = string739;
          var reader_kitty_backgroundColour_740 = function() {
            return this.data["backgroundColour"];
          }
          obj557.methods["backgroundColour"] = reader_kitty_backgroundColour_740;
          obj557.data["backgroundColour"] = string739;
          var writer_kitty_backgroundColour_740 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj557.methods["backgroundColour:="] = writer_kitty_backgroundColour_740;
          reader_kitty_backgroundColour_740.confidential = true;
          writer_kitty_backgroundColour_740.confidential = true;
          lineNumber = 164;
          moduleName = "kitty";
          lineNumber = 162
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string739)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj557.mutable = true;
          sourceObject = obj557;
          obj557.data["document"] = undefined;
          var reader_kitty_document_741 = function() {
            return this.data["document"];
          }
          obj557.methods["document"] = reader_kitty_document_741;
          obj557.data["document"] = undefined;
          var writer_kitty_document_741 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj557.methods["document:="] = writer_kitty_document_741;
          reader_kitty_document_741.confidential = true;
          writer_kitty_document_741.confidential = true;
          obj557.mutable = true;
          sourceObject = obj557;
          obj557.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_742 = function() {
            return this.data["backingCanvas"];
          }
          obj557.methods["backingCanvas"] = reader_kitty_backingCanvas_742;
          obj557.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_742 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj557.methods["backingCanvas:="] = writer_kitty_backingCanvas_742;
          reader_kitty_backingCanvas_742.confidential = true;
          writer_kitty_backingCanvas_742.confidential = true;
          obj557.mutable = true;
          sourceObject = obj557;
          obj557.data["backingContext"] = undefined;
          var reader_kitty_backingContext_743 = function() {
            return this.data["backingContext"];
          }
          obj557.methods["backingContext"] = reader_kitty_backingContext_743;
          obj557.data["backingContext"] = undefined;
          var writer_kitty_backingContext_743 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj557.methods["backingContext:="] = writer_kitty_backingContext_743;
          reader_kitty_backingContext_743.confidential = true;
          writer_kitty_backingContext_743.confidential = true;
          obj557.mutable = true;
          sourceObject = obj557;
          obj557.data["canvas"] = undefined;
          var reader_kitty_canvas_744 = function() {
            return this.data["canvas"];
          }
          obj557.methods["canvas"] = reader_kitty_canvas_744;
          obj557.data["canvas"] = undefined;
          var writer_kitty_canvas_744 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj557.methods["canvas:="] = writer_kitty_canvas_744;
          reader_kitty_canvas_744.confidential = true;
          writer_kitty_canvas_744.confidential = true;
          obj557.mutable = true;
          sourceObject = obj557;
          obj557.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_745 = function() {
            return this.data["canvasWidth"];
          }
          obj557.methods["canvasWidth"] = reader_kitty_canvasWidth_745;
          obj557.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_745 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj557.methods["canvasWidth:="] = writer_kitty_canvasWidth_745;
          reader_kitty_canvasWidth_745.confidential = true;
          writer_kitty_canvasWidth_745.confidential = true;
          obj557.mutable = true;
          sourceObject = obj557;
          obj557.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_746 = function() {
            return this.data["canvasHeight"];
          }
          obj557.methods["canvasHeight"] = reader_kitty_canvasHeight_746;
          obj557.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_746 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj557.methods["canvasHeight:="] = writer_kitty_canvasHeight_746;
          reader_kitty_canvasHeight_746.confidential = true;
          writer_kitty_canvasHeight_746.confidential = true;
          obj557.mutable = true;
          sourceObject = obj557;
          lineNumber = 173
          var call747 = callmethod(var_collections,"list", [0]);
          var call748 = callmethod(call747,"new", [0]);
          obj557.data["entities"] = call748;
          var reader_kitty_entities_749 = function() {
            return this.data["entities"];
          }
          obj557.methods["entities"] = reader_kitty_entities_749;
          obj557.data["entities"] = call748;
          var writer_kitty_entities_749 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj557.methods["entities:="] = writer_kitty_entities_749;
          reader_kitty_entities_749.confidential = true;
          writer_kitty_entities_749.confidential = true;
          lineNumber = 175;
          moduleName = "kitty";
          lineNumber = 173
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call748)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj557.mutable = true;
          sourceObject = obj557;
          lineNumber = 175
          var bool750 = new GraceBoolean(false)
          obj557.data["isInit"] = bool750;
          var reader_kitty_isInit_751 = function() {
            return this.data["isInit"];
          }
          obj557.methods["isInit"] = reader_kitty_isInit_751;
          obj557.data["isInit"] = bool750;
          var writer_kitty_isInit_751 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj557.methods["isInit:="] = writer_kitty_isInit_751;
          reader_kitty_isInit_751.confidential = true;
          writer_kitty_isInit_751.confidential = true;
          lineNumber = 176;
          moduleName = "kitty";
          lineNumber = 175
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool750)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj557.mutable = true;
          sourceObject = obj557;
          lineNumber = 176
          var bool752 = new GraceBoolean(false)
          obj557.data["isRunning"] = bool752;
          var reader_kitty_isRunning_753 = function() {
            return this.data["isRunning"];
          }
          obj557.methods["isRunning"] = reader_kitty_isRunning_753;
          obj557.data["isRunning"] = bool752;
          var writer_kitty_isRunning_753 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj557.methods["isRunning:="] = writer_kitty_isRunning_753;
          reader_kitty_isRunning_753.confidential = true;
          writer_kitty_isRunning_753.confidential = true;
          lineNumber = 178;
          moduleName = "kitty";
          lineNumber = 176
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool752)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj557.mutable = true;
          sourceObject = obj557;
          obj557.data["mctx"] = undefined;
          var reader_kitty_mctx_754 = function() {
            return this.data["mctx"];
          }
          obj557.methods["mctx"] = reader_kitty_mctx_754;
          obj557.data["mctx"] = undefined;
          var writer_kitty_mctx_754 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj557.methods["mctx:="] = writer_kitty_mctx_754;
          reader_kitty_mctx_754.confidential = true;
          writer_kitty_mctx_754.confidential = true;
          obj557.mutable = true;
          sourceObject = obj557;
          lineNumber = 182
          lineNumber = 180
          var call755 = callmethod(new GraceNum(1),"prefix-", [0]);
          obj557.data["currentKeyDown"] = call755;
          var reader_kitty_currentKeyDown_756 = function() {
            return this.data["currentKeyDown"];
          }
          obj557.methods["currentKeyDown"] = reader_kitty_currentKeyDown_756;
          obj557.data["currentKeyDown"] = call755;
          var writer_kitty_currentKeyDown_756 = function(argcv, o) {
            this.data["currentKeyDown"] = o;
          }
          obj557.methods["currentKeyDown:="] = writer_kitty_currentKeyDown_756;
          reader_kitty_currentKeyDown_756.confidential = true;
          writer_kitty_currentKeyDown_756.confidential = true;
          lineNumber = 182;
          moduleName = "kitty";
          lineNumber = 180
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call755)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'currentKeyDown' to be of type Unknown"))
          obj557.mutable = true;
          sourceObject = obj557;
          lineNumber = 182
          onSelf = true;
          var call757 = callmethod(this, "init", [0]);
          sourceObject = obj557;
          sourceObject = obj557;
          sourceObject = obj557;
          sourceObject = obj557;
          sourceObject = obj557;
          sourceObject = obj557;
          sourceObject = obj557;
          superDepth = origSuperDepth;
        }
        obj_init_557.apply(inheritingObject, []);
        return obj557
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj352.methods["new()object"] = func556;
    var func758 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 157
        var string759 = new GraceString("class KittyWorld");
        return string759
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func758.paramCounts = [
    ];
    func758.variableArities = [
    ];
    obj352.methods["asDebugString"] = func758;
    func758.definitionLine = 157;
    func758.definitionModule = "kitty";
    sourceObject = obj352;
    sourceObject = obj352;
    superDepth = origSuperDepth;
  }
  obj_init_352.apply(obj352, []);
  var var_KittyWorld = obj352;
  lineNumber = 299
  lineNumber = 308
  lineNumber = 323
  lineNumber = 328
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
'dom',
'StandardPrelude',
];
if (gctCache)
  gctCache['kitty'] = "methods-of:KittyImage.new:\n height:=\n width\n width:=\n imgTag\n height\n draw\nmethods-of:KittyWorld.new:\n backingContext:=\n currentKeyDown\n addEntity\n isInit\n mctx:=\n entities:=\n isRunning:=\n entities\n backgroundColour:=\n canvasHeight:=\n start\n init\n canvasHeight\n isRunning\n currentKeyDown:=\n canvas\n isKeyDown\n background\n stop\n isInit:=\n setBackground\n canvasWidth:=\n canvasWidth\n document:=\n mctx\n backgroundColour\n document\n backingCanvas:=\n update\n backingCanvas\n canvas:=\n backingContext\n background:=\nconstructors-of:KittyEntity:\n new\nconstructors-of:KittyImage:\n new\nfresh:World:\n backingContext:=\n currentKeyDown\n addEntity\n isInit\n mctx:=\n canvasWidth\n isRunning:=\n entities\n backgroundColour:=\n canvasHeight:=\n start\n init\n canvasHeight\n isKeyDown\n currentKeyDown:=\n canvas\n isRunning\n background\n stop\n isInit:=\n setBackground\n canvasWidth:=\n entities:=\n document:=\n mctx\n backgroundColour\n document\n backingCanvas:=\n update\n backingCanvas\n canvas:=\n backingContext\n background:=\nfresh-methods:\n Image\n Entity\n World\npath:\n kitty\nclasses:\n KittyImage\n KittyEntity\n KittyWorld\nfresh:Entity:\n posX:=\n posY:=\n image\n rotation:=\n awake\n posX\n posY\n draw\n moveDown\n rotation\n moveRight\n onDestroy\n move\n turn\n setAction\n moveLeft\n update\n setLocation\n start\n setImage\n getRotation\n action:=\n getX\n getY\n image:=\n moveUp\n action\nconfidential:\nconstructors-of:KittyWorld:\n new\nfresh:Image:\n height:=\n width\n width:=\n imgTag\n height\n draw\nmodules:\n StandardPrelude\n mgcollections\nmethods-of:KittyEntity.new:\n posX:=\n posY:=\n image\n rotation:=\n awake\n posX\n posY\n draw\n moveDown\n rotation\n moveRight\n onDestroy\n move\n turn\n setAction\n moveLeft\n update\n setLocation\n setImage\n start\n getRotation\n action:=\n getX\n getY\n image:=\n moveUp\n action\npublic:\n m_world\n m_world:=\n worldSet\n worldSet:=\n keyDownListener\n keyDownListener:=\n keyUpListener\n keyUpListener:=\n mouseDownListener\n mouseDownListener:=\n math\n KittyImage\n Image\n KittyEntity\n Entity\n KittyWorld\n World\n start\n setWorld\n atModuleEnd\n";
if (originalSourceLines) {
  originalSourceLines["kitty"] = [
    "import \"mgcollections\" as collections",
    "import \"dom\" as dom",
    "// import \"math\" as math",
    "import \"StandardPrelude\" as sp",
    "inherits sp.methods",
    "",
    "// Main class for game library",
    "var m_world",
    "var worldSet := false",
    "",
    "// Listeners",
    "var keyDownListener",
    "var keyUpListener",
    "var mouseDownListener",
    "",
    "// Grace math returns NaNs",
    "def math = dom.window.Math",
    "",
    "// XXX: Control functions are at the bottom",
    "",
    "// Represents an image in the game world",
    "class KittyImage.new(url', height', width') {",
    "    ",
    "    // print \"CREATING NEW IMAGE: {url'}...\"",
    "    def imgTag = dom.document.createElement(\"img\")",
    "    imgTag.src := url'",
    "",
    "    var height := height'",
    "    var width := width'",
    "",
    "    method draw(ctx, dx, dy, rot) {",
    "        // print \"DRAWING IMAGE: {imgTag.src} ({width}, {height})...\"",
    "        ctx.save",
    "        ctx.translate(dx, dy)",
    "        ctx.rotate(rot *  180 / 3.14)",
    "        ctx.drawImage(imgTag, -width / 2, -height / 2, width, height)",
    "        ctx.restore",
    "        // print \"IMAGE: {imgTag.src} DRAWN\"",
    "    }",
    "",
    "    // print \"CREATED NEW IMAGE: {url'}\"",
    "}",
    "",
    "method Image(url', x', y') {",
    "    object {",
    "        inherits KittyImage.new(url', x', y')",
    "    }",
    "}",
    "",
    "// Represents an object in the game world",
    "class KittyEntity.new(x', y') {",
    "    ",
    "    // print \"CREATING ENTITY AT ({x'}, {y'})...\"",
    "",
    "    var posX := x'",
    "    var posY := y'",
    "    var rotation := 0",
    "",
    "    var action := object {",
    "        method update {",
    "            // print \"UPDATING ENTITY...\"",
    "        }",
    "    }",
    "",
    "    var image",
    "",
    "    awake",
    "",
    "    // Called on creation",
    "    method awake {",
    "        // print \"awake\"",
    "        setImage(\"realyee.png\")",
    "    }",
    "",
    "    // Called on game start",
    "    method start {",
    "        // print \"start\"",
    "    }",
    "",
    "    // Called by main game class",
    "    method update {",
    "        action.update",
    "    }",
    "",
    "    // Called on class destructor",
    "    method onDestroy {",
    "",
    "    }",
    "",
    "    method move(distance) {",
    "        posX := posX + distance * math.cos(rotation * 3.14159 / 180)",
    "        posY := posY + distance * math.sin(rotation * 3.14159 / 180)",
    "    }",
    "",
    "    method turn(angle) {",
    "        rotation := rotation + angle",
    "    }",
    "",
    "    method moveUp(dy) {",
    "        posY := posY - dy",
    "    }",
    "",
    "    method moveDown(dy) {",
    "        posY := posY + dy",
    "    }",
    "",
    "    method moveLeft(dx) {",
    "        posX := posX - dx",
    "    }",
    "",
    "    method moveRight(dx) {",
    "        posX := posX + dx",
    "    }",
    "",
    "    method draw(ctx, dx, dy) {",
    "        ctx.save",
    "        ctx.translate(posX, posY)",
    "        image.draw(ctx, dx, dy, rotation)",
    "        ctx.restore",
    "    }",
    "",
    "    method setImage(image') {",
    "        image := Image(image', 64, 64)",
    "    }",
    "",
    "    method setAction(action') {",
    "        action := action'",
    "    }",
    "",
    "    method setLocation(x, y) {",
    "        self.posX := x",
    "        self.posY := y",
    "    }",
    "",
    "    method getX {",
    "        return posX",
    "    }",
    "",
    "    method getY {",
    "        return posY",
    "    }",
    "",
    "    method getRotation {",
    "        return rotation",
    "    }",
    "",
    "    // print \"ENTITY CREATED\"",
    "} ",
    "",
    "method Entity(x', y') {",
    "    object {",
    "        inherits KittyEntity.new(x', y')",
    "    }",
    "}",
    "",
    "// Represents the game world itself",
    "class KittyWorld.new() {",
    "",
    "    // print \"CREATING NEW WORLD...\"",
    "    ",
    "    var background",
    "    var backgroundColour := \"black\"",
    "",
    "    var document",
    "",
    "    var backingCanvas",
    "    var backingContext",
    "",
    "    var canvas",
    "    var canvasWidth",
    "    var canvasHeight",
    "",
    "    var entities := collections.list.new",
    "",
    "    var isInit := false",
    "    var isRunning := false",
    "",
    "    var mctx",
    "",
    "    var currentKeyDown := -1",
    "",
    "    init",
    "",
    "    // Called on initialization",
    "    method init {",
    "",
    "        // print \"INITIALIZING WORLD...\"",
    "",
    "        if (isInit) then {",
    "            return false",
    "        }",
    "",
    "        document := dom.document",
    "        canvas := document.getElementById(\"standard-canvas\")",
    "        canvasWidth := canvas.width",
    "        canvasHeight := canvas.height",
    "",
    "        // Mouse Listener",
    "        mouseDownListener := { ev ->",
    "            ",
    "            def x = (ev.clientX - canvas.offsetLeft) / canvas.offsetWidth * canvasHeight",
    "            def y = (ev.clientY - canvas.offsetTop) / canvas.offsetHeight * canvasHeight",
    "            ",
    "            // print \"MOUSEDOWN\"",
    "            ",
    "            if ((x > (canvasWidth - 20)) && (y < 20)) then {",
    "                ev.preventDefault",
    "                stop",
    "            }",
    "        }",
    "        canvas.addEventListener(\"mousedown\", mouseDownListener)",
    "",
    "        // Key Listeners",
    "        keyDownListener := { ev->",
    "            // print \"KEYDOWN: {ev.keyCode}\"",
    "            if (ev.keyCode == 75) then {",
    "                stop",
    "            }",
    "            currentKeyDown := ev.keyCode",
    "        }",
    "        document.addEventListener(\"keydown\", keyDownListener)",
    "",
    "        keyUpListener := { ev->",
    "            // print \"KEYUP\"",
    "            currentKeyDown := -1",
    "        }",
    "        document.addEventListener(\"keyup\", keyUpListener)",
    "",
    "        backingCanvas := dom.document.createElement(\"canvas\")",
    "        backingCanvas.height := canvasHeight",
    "        backingCanvas.width := canvasWidth",
    "        backingContext := backingCanvas.getContext(\"2d\")",
    "        mctx := canvas.getContext(\"2d\")",
    "",
    "        // Default background",
    "        setBackground(\"doggo.jpg\")",
    "",
    "        isInit := true",
    "        // print \"INITIALIZATION FINISHED\"",
    "",
    "        // Start the game",
    "        // print \"STARTING WORLD...\"",
    "        // start",
    "    }",
    "",
    "    // Called on game start",
    "    method start {",
    "        // print \"WORLD STARTED\"",
    "        isRunning := true",
    "        dom.while { isRunning } waiting 10 do {",
    "            update",
    "        }",
    "        // print \"WORLD STOPPED\"        ",
    "    }",
    "",
    "    // Updates the game world",
    "    method update {",
    "",
    "        // print \"UPDATING WORLD...\"",
    "",
    "        // Draw the background",
    "        mctx.fillStyle := backgroundColour",
    "        mctx.fillRect(0, 0, canvasWidth, canvasHeight)",
    "        mctx.drawImage(backingCanvas, 0, 0)",
    "        background.draw(mctx, canvasWidth / 2, canvasHeight / 2, 0)",
    "",
    "        // Draw the entities",
    "        for (entities) do { entity->",
    "            entity.update",
    "            entity.draw(mctx, canvasWidth / 2, canvasHeight / 2)",
    "        }",
    "",
    "        // print \"WORLD UPDATED\"",
    "    }",
    "",
    "    method stop {",
    "        print \"WORLD STOPPING...\"",
    "        isRunning := false",
    "        canvas.removeEventListener(\"mousedown\", mouseDownListener)",
    "        document.removeEventListener(\"keydown\", keyDownListener)",
    "        document.removeEventListener(\"keyup\", keyUpListener)",
    "    }",
    "",
    "    method isKeyDown(key) {",
    "        return key == currentKeyDown",
    "    }",
    "",
    "    method setBackground(background') {",
    "        background := Image(background', canvasWidth, canvasHeight)",
    "    }",
    "",
    "    method addEntity(e: KittyEntity) {",
    "        return entities.push(e)",
    "    }",
    "",
    "    // print \"WORLD CREATED\"",
    "}",
    "",
    "method World {",
    "    object {",
    "        inherits KittyWorld.new()",
    "    }",
    "}",
    "",
    "// CONTROL SECTION //",
    "",
    "// Called on game start",
    "method start {",
    "",
    "    print \"CHECKING...\"",
    "",
    "    if (!worldSet) then {",
    "        print \"NO WORLD!!\"",
    "        return ",
    "    }",
    "",
    "    print \"STARTING...\"",
    "",
    "    // Dewit",
    "    m_world.start",
    "}",
    "",
    "method setWorld(world': KittyWorld) {",
    "    m_world := world'",
    "    worldSet := true",
    "}",
    "",
    "method atModuleEnd(module) {",
    "    start",
    "}",
    "",
    "// TEST SECTION //",
    "",
    "// def foo = World.new(100, 100)",
    "// def bar = Entity.new(10, 10)",
    "// foo.addEntity(bar)",
  ];
}
