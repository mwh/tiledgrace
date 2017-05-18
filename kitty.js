function gracecode_kitty () {
  this.definitionModule = "kitty";
  this.definitionLine = 0;
  lineNumber = 45
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
      lineNumber = 46
      var obj1 = Grace_allocObject();
      obj1.definitionModule = "kitty";
      obj1.definitionLine = 46;
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
        lineNumber = 47
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
  func0.definitionLine = 45;
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
      obj5.definitionLine = 46;
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
  lineNumber = 140
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
      lineNumber = 141
      var obj9 = Grace_allocObject();
      obj9.definitionModule = "kitty";
      obj9.definitionLine = 141;
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
        lineNumber = 142
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
  func8.definitionLine = 140;
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
      obj13.definitionLine = 141;
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
  lineNumber = 289
  var func16 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func16.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (World)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 290
      var obj17 = Grace_allocObject();
      obj17.definitionModule = "kitty";
      obj17.definitionLine = 290;
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
        lineNumber = 291
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
  func16.definitionLine = 289;
  func16.definitionModule = "kitty";
  var func20 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj21 = Grace_allocObject();
      obj21.definitionModule = "kitty";
      obj21.definitionLine = 290;
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
  lineNumber = 298
  var func24 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func24.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 300
      var string25 = new GraceString("CHECKING...");
      var call26 = Grace_print(string25);
      lineNumber = 307
      var if27 = var_done;
      lineNumber = 302
      var call28 = callmethod(var_worldSet,"prefix!", [0]);
      if (Grace_isTrue(call28)) {
        lineNumber = 303
        var string29 = new GraceString("NO WORLD!!");
        var call30 = Grace_print(string29);
        lineNumber = 305
        return var_done
      }
      lineNumber = 307
      var string31 = new GraceString("STARTING...");
      var call32 = Grace_print(string31);
      lineNumber = 310
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
  func24.definitionLine = 298;
  func24.definitionModule = "kitty";
  lineNumber = 313
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
      lineNumber = 315
      lineNumber = 314
      var_m__95__world = var_world__39__;
      lineNumber = 316
      lineNumber = 315
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
  func34.definitionLine = 313;
  func34.definitionModule = "kitty";
  lineNumber = 318
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
      lineNumber = 319
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
  func36.definitionLine = 318;
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
  lineNumber = 310
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
  func39.definitionLine = 310;
  func39.definitionModule = "kitty";
  lineNumber = 310
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
  func40.definitionLine = 310;
  func40.definitionModule = "kitty";
  lineNumber = 12
  lineNumber = 9
  var bool41 = new GraceBoolean(false)
  var var_worldSet = bool41;
  lineNumber = 310
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
  func42.definitionLine = 310;
  func42.definitionModule = "kitty";
  lineNumber = 310
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
  func43.definitionLine = 310;
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
  lineNumber = 310
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
  func44.definitionLine = 310;
  func44.definitionModule = "kitty";
  lineNumber = 310
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
  func45.definitionLine = 310;
  func45.definitionModule = "kitty";
  lineNumber = 14
  var var_keyUpListener;
  lineNumber = 310
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
  func46.definitionLine = 310;
  func46.definitionModule = "kitty";
  lineNumber = 310
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
  func47.definitionLine = 310;
  func47.definitionModule = "kitty";
  lineNumber = 17
  var var_mouseDownListener;
  lineNumber = 310
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
  func48.definitionLine = 310;
  func48.definitionModule = "kitty";
  lineNumber = 310
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
  func49.definitionLine = 310;
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
              lineNumber = 36
              var prod65 = callmethod(var_rot, "*", [1], new GraceNum(3.14159));
              var quotient67 = callmethod(prod65, "/", [1], new GraceNum(180));
              var call68 = callmethod(var_ctx,"rotate", [1], quotient67);
              lineNumber = 37
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
              lineNumber = 38
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
              lineNumber = 36
              var prod101 = callmethod(var_rot, "*", [1], new GraceNum(3.14159));
              var quotient103 = callmethod(prod101, "/", [1], new GraceNum(180));
              var call104 = callmethod(var_ctx,"rotate", [1], quotient103);
              lineNumber = 37
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
              lineNumber = 38
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
  lineNumber = 45
  lineNumber = 52
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
  func130.definitionLine = 52;
  func130.definitionModule = "kitty";
  var obj131 = Grace_allocObject();
  obj131.definitionModule = "kitty";
  obj131.definitionLine = 52;
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
        obj134.definitionLine = 52;
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
              lineNumber = 73
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
          func136.definitionLine = 71;
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
          func139.definitionLine = 77;
          func139.definitionModule = "kitty";
          var func140 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func140.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 83
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
          func140.definitionLine = 82;
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
          func143.definitionLine = 87;
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
              lineNumber = 92
              lineNumber = 83
              lineNumber = 92
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
              lineNumber = 93
              lineNumber = 83
              lineNumber = 93
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
          func144.definitionLine = 91;
          func144.definitionModule = "kitty";
          var func177 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func177.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 97
              lineNumber = 83
              lineNumber = 97
              onSelf = true;
              var call180 = callmethod(this, "rotation", [0]);
              var opresult183 = callmethod(new GraceNum(90), "+", [1], call180);
              var prod185 = callmethod(opresult183, "*", [1], new GraceNum(3.14159));
              var quotient187 = callmethod(prod185, "/", [1], new GraceNum(180));
              var call188 = callmethod(var_math,"cos", [1], quotient187);
              var prod191 = callmethod(var_distance, "*", [1], call188);
              onSelf = true;
              var call193 = callmethod(this, "posX", [0]);
              var opresult195 = callmethod(call193, "+", [1], prod191);
              onSelf = true;
              var call196 = callmethod(this, "posX:=", [1], opresult195);
              lineNumber = 98
              lineNumber = 83
              lineNumber = 98
              onSelf = true;
              var call199 = callmethod(this, "rotation", [0]);
              var opresult202 = callmethod(new GraceNum(90), "+", [1], call199);
              var prod204 = callmethod(opresult202, "*", [1], new GraceNum(3.14159));
              var quotient206 = callmethod(prod204, "/", [1], new GraceNum(180));
              var call207 = callmethod(var_math,"sin", [1], quotient206);
              var prod210 = callmethod(var_distance, "*", [1], call207);
              onSelf = true;
              var call212 = callmethod(this, "posY", [0]);
              var opresult214 = callmethod(call212, "+", [1], prod210);
              onSelf = true;
              var call215 = callmethod(this, "posY:=", [1], opresult214);
              return call215
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
          obj134.methods["strafe"] = func177;
          func177.definitionLine = 96;
          func177.definitionModule = "kitty";
          var func216 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func216.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 103
              lineNumber = 83
              lineNumber = 103
              lineNumber = 102
              onSelf = true;
              var call218 = callmethod(this, "rotation", [0]);
              var opresult220 = callmethod(call218, "+", [1], var_angle);
              onSelf = true;
              var call221 = callmethod(this, "rotation:=", [1], opresult220);
              return call221
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
          obj134.methods["turn"] = func216;
          func216.definitionLine = 101;
          func216.definitionModule = "kitty";
          var func222 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func222.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 106
              var call223 = callmethod(var_ctx,"save", [0]);
              lineNumber = 107
              onSelf = true;
              var call224 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call225 = callmethod(this, "posY", [0]);
              var call226 = callmethod(var_ctx,"translate", [2], call224, call225);
              lineNumber = 108
              onSelf = true;
              var call227 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call228 = callmethod(this, "image", [0]);
              var call229 = callmethod(call228,"draw", [4], var_ctx, var_dx, var_dy, call227);
              lineNumber = 109
              var call230 = callmethod(var_ctx,"restore", [0]);
              return call230
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func222.paramCounts = [
            3,
          ];
          func222.variableArities = [
            false,
          ];
          obj134.methods["draw"] = func222;
          func222.definitionLine = 105;
          func222.definitionModule = "kitty";
          var func231 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func231.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 113
              lineNumber = 109
              lineNumber = 113
              var call232 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call233 = callmethod(call232, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call234 = callmethod(call233, "Image", [3], var_image__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call235 = callmethod(this, "image:=", [1], call234);
              return call235
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func231.paramCounts = [
            1,
          ];
          func231.variableArities = [
            false,
          ];
          obj134.methods["setImage"] = func231;
          func231.definitionLine = 112;
          func231.definitionModule = "kitty";
          var func236 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func236.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 118
              lineNumber = 113
              lineNumber = 117
              onSelf = true;
              var call237 = callmethod(this, "action:=", [1], var_action__39__);
              return call237
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func236.paramCounts = [
            1,
          ];
          func236.variableArities = [
            false,
          ];
          obj134.methods["setAction"] = func236;
          func236.definitionLine = 116;
          func236.definitionModule = "kitty";
          var func238 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func238.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 122
              lineNumber = 113
              lineNumber = 121
              onSelf = true;
              var call239 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 123
              lineNumber = 113
              lineNumber = 122
              onSelf = true;
              var call240 = callmethod(this, "posY:=", [1], var_y);
              return call240
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func238.paramCounts = [
            2,
          ];
          func238.variableArities = [
            false,
          ];
          obj134.methods["setLocation"] = func238;
          func238.definitionLine = 120;
          func238.definitionModule = "kitty";
          var func241 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func241.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 127
              lineNumber = 126
              onSelf = true;
              var call242 = callmethod(this, "posX", [0]);
              return call242
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func241.paramCounts = [
            0,
          ];
          func241.variableArities = [
            false,
          ];
          obj134.methods["getX"] = func241;
          func241.definitionLine = 125;
          func241.definitionModule = "kitty";
          var func243 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func243.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 131
              lineNumber = 130
              onSelf = true;
              var call244 = callmethod(this, "posY", [0]);
              return call244
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func243.paramCounts = [
            0,
          ];
          func243.variableArities = [
            false,
          ];
          obj134.methods["getY"] = func243;
          func243.definitionLine = 129;
          func243.definitionModule = "kitty";
          var func245 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func245.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 135
              lineNumber = 134
              onSelf = true;
              var call246 = callmethod(this, "rotation", [0]);
              return call246
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func245.paramCounts = [
            0,
          ];
          func245.variableArities = [
            false,
          ];
          obj134.methods["getRotation"] = func245;
          func245.definitionLine = 133;
          func245.definitionModule = "kitty";
          sourceObject = obj134;
          lineNumber = 56
          obj134.data["posX"] = var_x__39__;
          var reader_kitty_posX_247 = function() {
            return this.data["posX"];
          }
          obj134.methods["posX"] = reader_kitty_posX_247;
          obj134.data["posX"] = var_x__39__;
          var writer_kitty_posX_247 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj134.methods["posX:="] = writer_kitty_posX_247;
          reader_kitty_posX_247.confidential = true;
          writer_kitty_posX_247.confidential = true;
          lineNumber = 57;
          moduleName = "kitty";
          lineNumber = 56
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj134.mutable = true;
          sourceObject = obj134;
          lineNumber = 57
          obj134.data["posY"] = var_y__39__;
          var reader_kitty_posY_248 = function() {
            return this.data["posY"];
          }
          obj134.methods["posY"] = reader_kitty_posY_248;
          obj134.data["posY"] = var_y__39__;
          var writer_kitty_posY_248 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj134.methods["posY:="] = writer_kitty_posY_248;
          reader_kitty_posY_248.confidential = true;
          writer_kitty_posY_248.confidential = true;
          lineNumber = 58;
          moduleName = "kitty";
          lineNumber = 57
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj134.mutable = true;
          sourceObject = obj134;
          lineNumber = 58
          obj134.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_249 = function() {
            return this.data["rotation"];
          }
          obj134.methods["rotation"] = reader_kitty_rotation_249;
          obj134.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_249 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj134.methods["rotation:="] = writer_kitty_rotation_249;
          reader_kitty_rotation_249.confidential = true;
          writer_kitty_rotation_249.confidential = true;
          lineNumber = 60;
          moduleName = "kitty";
          lineNumber = 58
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj134.mutable = true;
          sourceObject = obj134;
          lineNumber = 60
          var obj250 = Grace_allocObject();
          obj250.definitionModule = "kitty";
          obj250.definitionLine = 60;
          obj250.outer = this;
          var reader_kitty_outer_251 = function() {
            return this.outer;
          }
          obj250.methods["outer"] = reader_kitty_outer_251;
          function obj_init_250() {
            var origSuperDepth = superDepth;
            superDepth = obj250;
            obj250.annotations = [];
            var func252 = function(argcv) {
              var curarg = 1;
              if (argcv[0] !=  func252.paramCounts[0])
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
            func252.paramCounts = [
              0,
            ];
            func252.variableArities = [
              false,
            ];
            obj250.methods["update"] = func252;
            func252.definitionLine = 61;
            func252.definitionModule = "kitty";
            sourceObject = obj250;
            superDepth = origSuperDepth;
          }
          obj_init_250.apply(obj250, []);
          obj134.data["action"] = obj250;
          var reader_kitty_action_253 = function() {
            return this.data["action"];
          }
          obj134.methods["action"] = reader_kitty_action_253;
          obj134.data["action"] = obj250;
          var writer_kitty_action_253 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj134.methods["action:="] = writer_kitty_action_253;
          reader_kitty_action_253.confidential = true;
          writer_kitty_action_253.confidential = true;
          lineNumber = 60;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], obj250)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj134.mutable = true;
          sourceObject = obj134;
          obj134.data["image"] = undefined;
          var reader_kitty_image_254 = function() {
            return this.data["image"];
          }
          obj134.methods["image"] = reader_kitty_image_254;
          obj134.data["image"] = undefined;
          var writer_kitty_image_254 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj134.methods["image:="] = writer_kitty_image_254;
          reader_kitty_image_254.confidential = true;
          writer_kitty_image_254.confidential = true;
          obj134.mutable = true;
          sourceObject = obj134;
          lineNumber = 68
          onSelf = true;
          var call255 = callmethod(this, "awake", [0]);
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
    func133.definitionLine = 52;
    func133.definitionModule = "kitty";
    var func256 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj257 = Grace_allocObject();
        obj257.definitionModule = "kitty";
        obj257.definitionLine = 52;
        var inho257 = inheritingObject;
        while (inho257.superobj) inho257 = inho257.superobj;
        inho257.superobj = obj257;
        obj257.data = inheritingObject.data;
        obj257.outer = this;
        var reader_kitty_outer_258 = function() {
          return this.outer;
        }
        obj257.methods["outer"] = reader_kitty_outer_258;
        function obj_init_257() {
          var origSuperDepth = superDepth;
          superDepth = obj257;
          obj257.annotations = [];
          var func259 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func259.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 73
              var string260 = new GraceString("realyee.png");
              onSelf = true;
              var call261 = callmethod(this, "setImage", [1], string260);
              return call261
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func259.paramCounts = [
            0,
          ];
          func259.variableArities = [
            false,
          ];
          obj257.methods["awake"] = func259;
          func259.definitionLine = 71;
          func259.definitionModule = "kitty";
          var func262 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func262.paramCounts[0])
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
          func262.paramCounts = [
            0,
          ];
          func262.variableArities = [
            false,
          ];
          obj257.methods["start"] = func262;
          func262.definitionLine = 77;
          func262.definitionModule = "kitty";
          var func263 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func263.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 83
              onSelf = true;
              var call264 = callmethod(this, "action", [0]);
              var call265 = callmethod(call264,"update", [0]);
              return call265
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func263.paramCounts = [
            0,
          ];
          func263.variableArities = [
            false,
          ];
          obj257.methods["update"] = func263;
          func263.definitionLine = 82;
          func263.definitionModule = "kitty";
          var func266 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func266.paramCounts[0])
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
          func266.paramCounts = [
            0,
          ];
          func266.variableArities = [
            false,
          ];
          obj257.methods["onDestroy"] = func266;
          func266.definitionLine = 87;
          func266.definitionModule = "kitty";
          var func267 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func267.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 92
              lineNumber = 83
              lineNumber = 92
              onSelf = true;
              var call270 = callmethod(this, "rotation", [0]);
              var prod272 = callmethod(call270, "*", [1], new GraceNum(3.14159));
              var quotient274 = callmethod(prod272, "/", [1], new GraceNum(180));
              var call275 = callmethod(var_math,"cos", [1], quotient274);
              var prod278 = callmethod(var_distance, "*", [1], call275);
              onSelf = true;
              var call280 = callmethod(this, "posX", [0]);
              var opresult282 = callmethod(call280, "+", [1], prod278);
              onSelf = true;
              var call283 = callmethod(this, "posX:=", [1], opresult282);
              lineNumber = 93
              lineNumber = 83
              lineNumber = 93
              onSelf = true;
              var call286 = callmethod(this, "rotation", [0]);
              var prod288 = callmethod(call286, "*", [1], new GraceNum(3.14159));
              var quotient290 = callmethod(prod288, "/", [1], new GraceNum(180));
              var call291 = callmethod(var_math,"sin", [1], quotient290);
              var prod294 = callmethod(var_distance, "*", [1], call291);
              onSelf = true;
              var call296 = callmethod(this, "posY", [0]);
              var opresult298 = callmethod(call296, "+", [1], prod294);
              onSelf = true;
              var call299 = callmethod(this, "posY:=", [1], opresult298);
              return call299
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func267.paramCounts = [
            1,
          ];
          func267.variableArities = [
            false,
          ];
          obj257.methods["move"] = func267;
          func267.definitionLine = 91;
          func267.definitionModule = "kitty";
          var func300 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func300.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (strafe)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 97
              lineNumber = 83
              lineNumber = 97
              onSelf = true;
              var call303 = callmethod(this, "rotation", [0]);
              var opresult306 = callmethod(new GraceNum(90), "+", [1], call303);
              var prod308 = callmethod(opresult306, "*", [1], new GraceNum(3.14159));
              var quotient310 = callmethod(prod308, "/", [1], new GraceNum(180));
              var call311 = callmethod(var_math,"cos", [1], quotient310);
              var prod314 = callmethod(var_distance, "*", [1], call311);
              onSelf = true;
              var call316 = callmethod(this, "posX", [0]);
              var opresult318 = callmethod(call316, "+", [1], prod314);
              onSelf = true;
              var call319 = callmethod(this, "posX:=", [1], opresult318);
              lineNumber = 98
              lineNumber = 83
              lineNumber = 98
              onSelf = true;
              var call322 = callmethod(this, "rotation", [0]);
              var opresult325 = callmethod(new GraceNum(90), "+", [1], call322);
              var prod327 = callmethod(opresult325, "*", [1], new GraceNum(3.14159));
              var quotient329 = callmethod(prod327, "/", [1], new GraceNum(180));
              var call330 = callmethod(var_math,"sin", [1], quotient329);
              var prod333 = callmethod(var_distance, "*", [1], call330);
              onSelf = true;
              var call335 = callmethod(this, "posY", [0]);
              var opresult337 = callmethod(call335, "+", [1], prod333);
              onSelf = true;
              var call338 = callmethod(this, "posY:=", [1], opresult337);
              return call338
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func300.paramCounts = [
            1,
          ];
          func300.variableArities = [
            false,
          ];
          obj257.methods["strafe"] = func300;
          func300.definitionLine = 96;
          func300.definitionModule = "kitty";
          var func339 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func339.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 103
              lineNumber = 83
              lineNumber = 103
              lineNumber = 102
              onSelf = true;
              var call341 = callmethod(this, "rotation", [0]);
              var opresult343 = callmethod(call341, "+", [1], var_angle);
              onSelf = true;
              var call344 = callmethod(this, "rotation:=", [1], opresult343);
              return call344
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func339.paramCounts = [
            1,
          ];
          func339.variableArities = [
            false,
          ];
          obj257.methods["turn"] = func339;
          func339.definitionLine = 101;
          func339.definitionModule = "kitty";
          var func345 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func345.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 106
              var call346 = callmethod(var_ctx,"save", [0]);
              lineNumber = 107
              onSelf = true;
              var call347 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call348 = callmethod(this, "posY", [0]);
              var call349 = callmethod(var_ctx,"translate", [2], call347, call348);
              lineNumber = 108
              onSelf = true;
              var call350 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call351 = callmethod(this, "image", [0]);
              var call352 = callmethod(call351,"draw", [4], var_ctx, var_dx, var_dy, call350);
              lineNumber = 109
              var call353 = callmethod(var_ctx,"restore", [0]);
              return call353
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func345.paramCounts = [
            3,
          ];
          func345.variableArities = [
            false,
          ];
          obj257.methods["draw"] = func345;
          func345.definitionLine = 105;
          func345.definitionModule = "kitty";
          var func354 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func354.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 113
              lineNumber = 109
              lineNumber = 113
              var call355 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call356 = callmethod(call355, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call357 = callmethod(call356, "Image", [3], var_image__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call358 = callmethod(this, "image:=", [1], call357);
              return call358
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func354.paramCounts = [
            1,
          ];
          func354.variableArities = [
            false,
          ];
          obj257.methods["setImage"] = func354;
          func354.definitionLine = 112;
          func354.definitionModule = "kitty";
          var func359 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func359.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 118
              lineNumber = 113
              lineNumber = 117
              onSelf = true;
              var call360 = callmethod(this, "action:=", [1], var_action__39__);
              return call360
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func359.paramCounts = [
            1,
          ];
          func359.variableArities = [
            false,
          ];
          obj257.methods["setAction"] = func359;
          func359.definitionLine = 116;
          func359.definitionModule = "kitty";
          var func361 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func361.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 122
              lineNumber = 113
              lineNumber = 121
              onSelf = true;
              var call362 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 123
              lineNumber = 113
              lineNumber = 122
              onSelf = true;
              var call363 = callmethod(this, "posY:=", [1], var_y);
              return call363
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func361.paramCounts = [
            2,
          ];
          func361.variableArities = [
            false,
          ];
          obj257.methods["setLocation"] = func361;
          func361.definitionLine = 120;
          func361.definitionModule = "kitty";
          var func364 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func364.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 127
              lineNumber = 126
              onSelf = true;
              var call365 = callmethod(this, "posX", [0]);
              return call365
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func364.paramCounts = [
            0,
          ];
          func364.variableArities = [
            false,
          ];
          obj257.methods["getX"] = func364;
          func364.definitionLine = 125;
          func364.definitionModule = "kitty";
          var func366 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func366.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 131
              lineNumber = 130
              onSelf = true;
              var call367 = callmethod(this, "posY", [0]);
              return call367
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func366.paramCounts = [
            0,
          ];
          func366.variableArities = [
            false,
          ];
          obj257.methods["getY"] = func366;
          func366.definitionLine = 129;
          func366.definitionModule = "kitty";
          var func368 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func368.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 135
              lineNumber = 134
              onSelf = true;
              var call369 = callmethod(this, "rotation", [0]);
              return call369
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func368.paramCounts = [
            0,
          ];
          func368.variableArities = [
            false,
          ];
          obj257.methods["getRotation"] = func368;
          func368.definitionLine = 133;
          func368.definitionModule = "kitty";
          sourceObject = obj257;
          lineNumber = 56
          obj257.data["posX"] = var_x__39__;
          var reader_kitty_posX_370 = function() {
            return this.data["posX"];
          }
          obj257.methods["posX"] = reader_kitty_posX_370;
          obj257.data["posX"] = var_x__39__;
          var writer_kitty_posX_370 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj257.methods["posX:="] = writer_kitty_posX_370;
          reader_kitty_posX_370.confidential = true;
          writer_kitty_posX_370.confidential = true;
          lineNumber = 57;
          moduleName = "kitty";
          lineNumber = 56
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj257.mutable = true;
          sourceObject = obj257;
          lineNumber = 57
          obj257.data["posY"] = var_y__39__;
          var reader_kitty_posY_371 = function() {
            return this.data["posY"];
          }
          obj257.methods["posY"] = reader_kitty_posY_371;
          obj257.data["posY"] = var_y__39__;
          var writer_kitty_posY_371 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj257.methods["posY:="] = writer_kitty_posY_371;
          reader_kitty_posY_371.confidential = true;
          writer_kitty_posY_371.confidential = true;
          lineNumber = 58;
          moduleName = "kitty";
          lineNumber = 57
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj257.mutable = true;
          sourceObject = obj257;
          lineNumber = 58
          obj257.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_372 = function() {
            return this.data["rotation"];
          }
          obj257.methods["rotation"] = reader_kitty_rotation_372;
          obj257.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_372 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj257.methods["rotation:="] = writer_kitty_rotation_372;
          reader_kitty_rotation_372.confidential = true;
          writer_kitty_rotation_372.confidential = true;
          lineNumber = 60;
          moduleName = "kitty";
          lineNumber = 58
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj257.mutable = true;
          sourceObject = obj257;
          lineNumber = 60
          var obj373 = Grace_allocObject();
          obj373.definitionModule = "kitty";
          obj373.definitionLine = 60;
          obj373.outer = this;
          var reader_kitty_outer_374 = function() {
            return this.outer;
          }
          obj373.methods["outer"] = reader_kitty_outer_374;
          function obj_init_373() {
            var origSuperDepth = superDepth;
            superDepth = obj373;
            obj373.annotations = [];
            var func375 = function(argcv) {
              var curarg = 1;
              if (argcv[0] !=  func375.paramCounts[0])
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
            func375.paramCounts = [
              0,
            ];
            func375.variableArities = [
              false,
            ];
            obj373.methods["update"] = func375;
            func375.definitionLine = 61;
            func375.definitionModule = "kitty";
            sourceObject = obj373;
            superDepth = origSuperDepth;
          }
          obj_init_373.apply(obj373, []);
          obj257.data["action"] = obj373;
          var reader_kitty_action_376 = function() {
            return this.data["action"];
          }
          obj257.methods["action"] = reader_kitty_action_376;
          obj257.data["action"] = obj373;
          var writer_kitty_action_376 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj257.methods["action:="] = writer_kitty_action_376;
          reader_kitty_action_376.confidential = true;
          writer_kitty_action_376.confidential = true;
          lineNumber = 60;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], obj373)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj257.mutable = true;
          sourceObject = obj257;
          obj257.data["image"] = undefined;
          var reader_kitty_image_377 = function() {
            return this.data["image"];
          }
          obj257.methods["image"] = reader_kitty_image_377;
          obj257.data["image"] = undefined;
          var writer_kitty_image_377 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj257.methods["image:="] = writer_kitty_image_377;
          reader_kitty_image_377.confidential = true;
          writer_kitty_image_377.confidential = true;
          obj257.mutable = true;
          sourceObject = obj257;
          lineNumber = 68
          onSelf = true;
          var call378 = callmethod(this, "awake", [0]);
          sourceObject = obj257;
          sourceObject = obj257;
          sourceObject = obj257;
          sourceObject = obj257;
          sourceObject = obj257;
          sourceObject = obj257;
          sourceObject = obj257;
          sourceObject = obj257;
          sourceObject = obj257;
          sourceObject = obj257;
          sourceObject = obj257;
          sourceObject = obj257;
          sourceObject = obj257;
          sourceObject = obj257;
          superDepth = origSuperDepth;
        }
        obj_init_257.apply(inheritingObject, []);
        return obj257
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj131.methods["new()object"] = func256;
    var func379 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 52
        var string380 = new GraceString("class KittyEntity");
        return string380
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func379.paramCounts = [
    ];
    func379.variableArities = [
    ];
    obj131.methods["asDebugString"] = func379;
    func379.definitionLine = 52;
    func379.definitionModule = "kitty";
    sourceObject = obj131;
    sourceObject = obj131;
    superDepth = origSuperDepth;
  }
  obj_init_131.apply(obj131, []);
  var var_KittyEntity = obj131;
  lineNumber = 140
  lineNumber = 147
  var func381 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func381.paramCounts[0])
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
  func381.paramCounts = [
    0,
  ];
  func381.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func381;
  func381.definitionLine = 147;
  func381.definitionModule = "kitty";
  var obj382 = Grace_allocObject();
  obj382.definitionModule = "kitty";
  obj382.definitionLine = 147;
  obj382.outer = this;
  var reader_kitty_outer_383 = function() {
    return this.outer;
  }
  obj382.methods["outer"] = reader_kitty_outer_383;
  function obj_init_382() {
    var origSuperDepth = superDepth;
    superDepth = obj382;
    obj382.annotations = [];
    var func384 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func384.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj385 = Grace_allocObject();
        obj385.definitionModule = "kitty";
        obj385.definitionLine = 147;
        obj385.outer = this;
        var reader_kitty_outer_386 = function() {
          return this.outer;
        }
        obj385.methods["outer"] = reader_kitty_outer_386;
        function obj_init_385() {
          var origSuperDepth = superDepth;
          superDepth = obj385;
          obj385.annotations = [];
          var func387 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func387.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 183
              var if388 = var_done;
              lineNumber = 179
              onSelf = true;
              var call389 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call389)) {
                lineNumber = 181
                lineNumber = 180
                var bool390 = new GraceBoolean(false)
                return bool390
              }
              lineNumber = 184
              lineNumber = 147
              lineNumber = 183
              var call391 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call392 = callmethod(this, "document:=", [1], call391);
              lineNumber = 184
              lineNumber = 183
              lineNumber = 184
              var string393 = new GraceString("standard-canvas");
              onSelf = true;
              var call394 = callmethod(this, "document", [0]);
              var call395 = callmethod(call394,"getElementById", [1], string393);
              onSelf = true;
              var call396 = callmethod(this, "canvas:=", [1], call395);
              lineNumber = 186
              lineNumber = 183
              lineNumber = 185
              onSelf = true;
              var call397 = callmethod(this, "canvas", [0]);
              var call398 = callmethod(call397,"width", [0]);
              onSelf = true;
              var call399 = callmethod(this, "canvasWidth:=", [1], call398);
              lineNumber = 189
              lineNumber = 185
              lineNumber = 186
              onSelf = true;
              var call400 = callmethod(this, "canvas", [0]);
              var call401 = callmethod(call400,"height", [0]);
              onSelf = true;
              var call402 = callmethod(this, "canvasHeight:=", [1], call401);
              lineNumber = 201
              var block403 = Grace_allocObject();
              block403.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block403.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block403.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block403.methods["match"] = GraceBlock_match;
              block403.methods["prefix?"] = GraceBlock_lift;
              block403.receiver = this;
              block403.className = 'block<kitty:201>';
              block403.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 192
                lineNumber = 191
                onSelf = true;
                var call404 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call406 = callmethod(this, "canvas", [0]);
                var call407 = callmethod(call406,"offsetWidth", [0]);
                onSelf = true;
                var call409 = callmethod(this, "canvas", [0]);
                var call410 = callmethod(call409,"offsetLeft", [0]);
                var call412 = callmethod(var_ev,"clientX", [0]);
                var diff414 = callmethod(call412, "-", [1], call410);
                var quotient416 = callmethod(diff414, "/", [1], call407);
                var prod418 = callmethod(quotient416, "*", [1], call404);
                var var_x = prod418;
                lineNumber = 192;
                moduleName = "kitty";
                lineNumber = 191
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 196
                lineNumber = 192
                onSelf = true;
                var call419 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call421 = callmethod(this, "canvas", [0]);
                var call422 = callmethod(call421,"offsetHeight", [0]);
                onSelf = true;
                var call424 = callmethod(this, "canvas", [0]);
                var call425 = callmethod(call424,"offsetTop", [0]);
                var call427 = callmethod(var_ev,"clientY", [0]);
                var diff429 = callmethod(call427, "-", [1], call425);
                var quotient431 = callmethod(diff429, "/", [1], call422);
                var prod433 = callmethod(quotient431, "*", [1], call419);
                var var_y = prod433;
                lineNumber = 196;
                moduleName = "kitty";
                lineNumber = 192
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 200
                var if434 = var_done;
                lineNumber = 196
                var opresult437 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call440 = callmethod(this, "canvasWidth", [0]);
                var diff442 = callmethod(call440, "-", [1], new GraceNum(20));
                var opresult445 = callmethod(var_x, ">", [1], diff442);
                var opresult447 = callmethod(opresult445, "&&", [1], opresult437);
                if (Grace_isTrue(opresult447)) {
                  lineNumber = 197
                  var call448 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 198
                  onSelf = true;
                  var call449 = callmethod(this, "stop", [0]);
                  if434 = call449;
                }
                return if434;
              };
              var_mouseDownListener = block403;
              lineNumber = 201
              var string450 = new GraceString("mousedown");
              onSelf = true;
              var call451 = callmethod(this, "canvas", [0]);
              var call452 = callmethod(call451,"addEventListener", [2], string450, var_mouseDownListener);
              lineNumber = 211
              var block453 = Grace_allocObject();
              block453.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block453.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block453.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block453.methods["match"] = GraceBlock_match;
              block453.methods["prefix?"] = GraceBlock_lift;
              block453.receiver = this;
              block453.className = 'block<kitty:211>';
              block453.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 209
                var if454 = var_done;
                lineNumber = 206
                var call456 = callmethod(var_ev,"keyCode", [0]);
                var opresult458 = callmethod(call456, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult458)) {
                  lineNumber = 207
                  onSelf = true;
                  var call459 = callmethod(this, "stop", [0]);
                  if454 = call459;
                }
                lineNumber = 210
                lineNumber = 206
                lineNumber = 209
                var call460 = callmethod(var_ev,"keyCode", [0]);
                onSelf = true;
                var call461 = callmethod(this, "currentKeyDown:=", [1], call460);
                return call461;
              };
              var_keyDownListener = block453;
              lineNumber = 211
              var string462 = new GraceString("keydown");
              onSelf = true;
              var call463 = callmethod(this, "document", [0]);
              var call464 = callmethod(call463,"addEventListener", [2], string462, var_keyDownListener);
              lineNumber = 217
              var block465 = Grace_allocObject();
              block465.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block465.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block465.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block465.methods["match"] = GraceBlock_match;
              block465.methods["prefix?"] = GraceBlock_lift;
              block465.receiver = this;
              block465.className = 'block<kitty:217>';
              block465.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 216
                lineNumber = 209
                lineNumber = 216
                lineNumber = 215
                var call466 = callmethod(new GraceNum(1),"prefix-", [0]);
                onSelf = true;
                var call467 = callmethod(this, "currentKeyDown:=", [1], call466);
                return call467;
              };
              var_keyUpListener = block465;
              lineNumber = 217
              var string468 = new GraceString("keyup");
              onSelf = true;
              var call469 = callmethod(this, "document", [0]);
              var call470 = callmethod(call469,"addEventListener", [2], string468, var_keyUpListener);
              lineNumber = 219
              lineNumber = 209
              lineNumber = 219
              var string471 = new GraceString("canvas");
              var call472 = callmethod(var_dom,"document", [0]);
              var call473 = callmethod(call472,"createElement", [1], string471);
              onSelf = true;
              var call474 = callmethod(this, "backingCanvas:=", [1], call473);
              lineNumber = 221
              lineNumber = 219
              lineNumber = 220
              onSelf = true;
              var call475 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call476 = callmethod(this, "backingCanvas", [0]);
              var call477 = callmethod(call476,"height:=", [1], call475);
              lineNumber = 222
              lineNumber = 219
              lineNumber = 221
              onSelf = true;
              var call478 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call479 = callmethod(this, "backingCanvas", [0]);
              var call480 = callmethod(call479,"width:=", [1], call478);
              lineNumber = 222
              lineNumber = 219
              lineNumber = 222
              var string481 = new GraceString("2d");
              onSelf = true;
              var call482 = callmethod(this, "backingCanvas", [0]);
              var call483 = callmethod(call482,"getContext", [1], string481);
              onSelf = true;
              var call484 = callmethod(this, "backingContext:=", [1], call483);
              lineNumber = 223
              lineNumber = 219
              lineNumber = 223
              var string485 = new GraceString("2d");
              onSelf = true;
              var call486 = callmethod(this, "canvas", [0]);
              var call487 = callmethod(call486,"getContext", [1], string485);
              onSelf = true;
              var call488 = callmethod(this, "mctx:=", [1], call487);
              lineNumber = 226
              var string489 = new GraceString("doggo.jpg");
              onSelf = true;
              var call490 = callmethod(this, "setBackground", [1], string489);
              lineNumber = 234
              lineNumber = 219
              lineNumber = 228
              var bool491 = new GraceBoolean(true)
              onSelf = true;
              var call492 = callmethod(this, "isInit:=", [1], bool491);
              return call492
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func387.paramCounts = [
            0,
          ];
          func387.variableArities = [
            false,
          ];
          obj385.methods["init"] = func387;
          func387.definitionLine = 175;
          func387.definitionModule = "kitty";
          var func493 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func493.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 240
              lineNumber = 219
              lineNumber = 239
              var bool494 = new GraceBoolean(true)
              onSelf = true;
              var call495 = callmethod(this, "isRunning:=", [1], bool494);
              lineNumber = 240
              var block496 = Grace_allocObject();
              block496.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block496.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block496.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block496.methods["match"] = GraceBlock_match;
              block496.methods["prefix?"] = GraceBlock_lift;
              block496.receiver = this;
              block496.className = 'block<kitty:240>';
              block496.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call497 = callmethod(this, "isRunning", [0]);
                return call497;
              };
              lineNumber = 244
              var block498 = Grace_allocObject();
              block498.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block498.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block498.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block498.methods["match"] = GraceBlock_match;
              block498.methods["prefix?"] = GraceBlock_lift;
              block498.receiver = this;
              block498.className = 'block<kitty:244>';
              block498.real = function(
              ) {
                sourceObject = this;
                lineNumber = 241
                onSelf = true;
                var call499 = callmethod(this, "update", [0]);
                return call499;
              };
              lineNumber = 240
              var call500 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block496, new GraceNum(10), block498);
              return call500
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func493.paramCounts = [
            0,
          ];
          func493.variableArities = [
            false,
          ];
          obj385.methods["start"] = func493;
          func493.definitionLine = 237;
          func493.definitionModule = "kitty";
          var func501 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func501.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 253
              lineNumber = 219
              lineNumber = 252
              onSelf = true;
              var call502 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call503 = callmethod(this, "mctx", [0]);
              var call504 = callmethod(call503,"fillStyle:=", [1], call502);
              lineNumber = 253
              onSelf = true;
              var call505 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call506 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call507 = callmethod(this, "mctx", [0]);
              var call508 = callmethod(call507,"fillRect", [4], new GraceNum(0), new GraceNum(0), call505, call506);
              lineNumber = 254
              onSelf = true;
              var call509 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call510 = callmethod(this, "mctx", [0]);
              var call511 = callmethod(call510,"drawImage", [3], call509, new GraceNum(0), new GraceNum(0));
              lineNumber = 255
              onSelf = true;
              var call512 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call514 = callmethod(this, "canvasWidth", [0]);
              var quotient516 = callmethod(call514, "/", [1], new GraceNum(2));
              onSelf = true;
              var call518 = callmethod(this, "canvasHeight", [0]);
              var quotient520 = callmethod(call518, "/", [1], new GraceNum(2));
              onSelf = true;
              var call521 = callmethod(this, "background", [0]);
              var call522 = callmethod(call521,"draw", [4], call512, quotient516, quotient520, new GraceNum(0));
              lineNumber = 258
              onSelf = true;
              var call523 = callmethod(this, "entities", [0]);
              lineNumber = 264
              var block524 = Grace_allocObject();
              block524.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block524.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block524.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block524.methods["match"] = GraceBlock_match;
              block524.methods["prefix?"] = GraceBlock_lift;
              block524.receiver = this;
              block524.className = 'block<kitty:264>';
              block524.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 259
                var call525 = callmethod(var_entity,"update", [0]);
                lineNumber = 260
                onSelf = true;
                var call526 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call528 = callmethod(this, "canvasWidth", [0]);
                var quotient530 = callmethod(call528, "/", [1], new GraceNum(2));
                onSelf = true;
                var call532 = callmethod(this, "canvasHeight", [0]);
                var quotient534 = callmethod(call532, "/", [1], new GraceNum(2));
                var call535 = callmethod(var_entity,"draw", [3], call526, quotient530, quotient534);
                return call535;
              };
              var call536 = callmethod(Grace_prelude,"for()do", [1, 1], call523, block524);
              return call536
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func501.paramCounts = [
            0,
          ];
          func501.variableArities = [
            false,
          ];
          obj385.methods["update"] = func501;
          func501.definitionLine = 247;
          func501.definitionModule = "kitty";
          var func537 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func537.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 267
              var string538 = new GraceString("WORLD STOPPING...");
              var call539 = Grace_print(string538);
              lineNumber = 269
              lineNumber = 259
              lineNumber = 268
              var bool540 = new GraceBoolean(false)
              onSelf = true;
              var call541 = callmethod(this, "isRunning:=", [1], bool540);
              lineNumber = 269
              var string542 = new GraceString("mousedown");
              onSelf = true;
              var call543 = callmethod(this, "canvas", [0]);
              var call544 = callmethod(call543,"removeEventListener", [2], string542, var_mouseDownListener);
              lineNumber = 270
              var string545 = new GraceString("keydown");
              onSelf = true;
              var call546 = callmethod(this, "document", [0]);
              var call547 = callmethod(call546,"removeEventListener", [2], string545, var_keyDownListener);
              lineNumber = 271
              var string548 = new GraceString("keyup");
              onSelf = true;
              var call549 = callmethod(this, "document", [0]);
              var call550 = callmethod(call549,"removeEventListener", [2], string548, var_keyUpListener);
              return call550
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func537.paramCounts = [
            0,
          ];
          func537.variableArities = [
            false,
          ];
          obj385.methods["stop"] = func537;
          func537.definitionLine = 266;
          func537.definitionModule = "kitty";
          var func551 = function(argcv) {
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func551.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isKeyDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 276
              lineNumber = 275
              onSelf = true;
              var call552 = callmethod(this, "currentKeyDown", [0]);
              var opresult555 = callmethod(var_key, "==", [1], call552);
              return opresult555
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func551.paramCounts = [
            1,
          ];
          func551.variableArities = [
            false,
          ];
          obj385.methods["isKeyDown"] = func551;
          func551.definitionLine = 274;
          func551.definitionModule = "kitty";
          var func556 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func556.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 279
              lineNumber = 259
              lineNumber = 279
              onSelf = true;
              var call557 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call558 = callmethod(this, "canvasHeight", [0]);
              var call559 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call560 = callmethod(call559, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call561 = callmethod(call560, "Image", [3], var_background__39__, call557, call558);
              onSelf = true;
              var call562 = callmethod(this, "background:=", [1], call561);
              return call562
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func556.paramCounts = [
            1,
          ];
          func556.variableArities = [
            false,
          ];
          obj385.methods["setBackground"] = func556;
          func556.definitionLine = 278;
          func556.definitionModule = "kitty";
          var func563 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func563.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 283
              onSelf = true;
              var call564 = callmethod(this, "entities", [0]);
              var call565 = callmethod(call564,"push", [1], var_e);
              return call565
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func563.paramTypes = [];
          func563.paramTypes.push([]);
          func563.paramCounts = [
            1,
          ];
          func563.variableArities = [
            false,
          ];
          obj385.methods["addEntity"] = func563;
          func563.definitionLine = 282;
          func563.definitionModule = "kitty";
          sourceObject = obj385;
          obj385.data["background"] = undefined;
          var reader_kitty_background_566 = function() {
            return this.data["background"];
          }
          obj385.methods["background"] = reader_kitty_background_566;
          obj385.data["background"] = undefined;
          var writer_kitty_background_566 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj385.methods["background:="] = writer_kitty_background_566;
          reader_kitty_background_566.confidential = true;
          writer_kitty_background_566.confidential = true;
          obj385.mutable = true;
          sourceObject = obj385;
          lineNumber = 152
          var string567 = new GraceString("black");
          obj385.data["backgroundColour"] = string567;
          var reader_kitty_backgroundColour_568 = function() {
            return this.data["backgroundColour"];
          }
          obj385.methods["backgroundColour"] = reader_kitty_backgroundColour_568;
          obj385.data["backgroundColour"] = string567;
          var writer_kitty_backgroundColour_568 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj385.methods["backgroundColour:="] = writer_kitty_backgroundColour_568;
          reader_kitty_backgroundColour_568.confidential = true;
          writer_kitty_backgroundColour_568.confidential = true;
          lineNumber = 154;
          moduleName = "kitty";
          lineNumber = 152
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string567)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj385.mutable = true;
          sourceObject = obj385;
          obj385.data["document"] = undefined;
          var reader_kitty_document_569 = function() {
            return this.data["document"];
          }
          obj385.methods["document"] = reader_kitty_document_569;
          obj385.data["document"] = undefined;
          var writer_kitty_document_569 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj385.methods["document:="] = writer_kitty_document_569;
          reader_kitty_document_569.confidential = true;
          writer_kitty_document_569.confidential = true;
          obj385.mutable = true;
          sourceObject = obj385;
          obj385.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_570 = function() {
            return this.data["backingCanvas"];
          }
          obj385.methods["backingCanvas"] = reader_kitty_backingCanvas_570;
          obj385.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_570 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj385.methods["backingCanvas:="] = writer_kitty_backingCanvas_570;
          reader_kitty_backingCanvas_570.confidential = true;
          writer_kitty_backingCanvas_570.confidential = true;
          obj385.mutable = true;
          sourceObject = obj385;
          obj385.data["backingContext"] = undefined;
          var reader_kitty_backingContext_571 = function() {
            return this.data["backingContext"];
          }
          obj385.methods["backingContext"] = reader_kitty_backingContext_571;
          obj385.data["backingContext"] = undefined;
          var writer_kitty_backingContext_571 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj385.methods["backingContext:="] = writer_kitty_backingContext_571;
          reader_kitty_backingContext_571.confidential = true;
          writer_kitty_backingContext_571.confidential = true;
          obj385.mutable = true;
          sourceObject = obj385;
          obj385.data["canvas"] = undefined;
          var reader_kitty_canvas_572 = function() {
            return this.data["canvas"];
          }
          obj385.methods["canvas"] = reader_kitty_canvas_572;
          obj385.data["canvas"] = undefined;
          var writer_kitty_canvas_572 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj385.methods["canvas:="] = writer_kitty_canvas_572;
          reader_kitty_canvas_572.confidential = true;
          writer_kitty_canvas_572.confidential = true;
          obj385.mutable = true;
          sourceObject = obj385;
          obj385.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_573 = function() {
            return this.data["canvasWidth"];
          }
          obj385.methods["canvasWidth"] = reader_kitty_canvasWidth_573;
          obj385.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_573 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj385.methods["canvasWidth:="] = writer_kitty_canvasWidth_573;
          reader_kitty_canvasWidth_573.confidential = true;
          writer_kitty_canvasWidth_573.confidential = true;
          obj385.mutable = true;
          sourceObject = obj385;
          obj385.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_574 = function() {
            return this.data["canvasHeight"];
          }
          obj385.methods["canvasHeight"] = reader_kitty_canvasHeight_574;
          obj385.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_574 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj385.methods["canvasHeight:="] = writer_kitty_canvasHeight_574;
          reader_kitty_canvasHeight_574.confidential = true;
          writer_kitty_canvasHeight_574.confidential = true;
          obj385.mutable = true;
          sourceObject = obj385;
          lineNumber = 163
          var call575 = callmethod(var_collections,"list", [0]);
          var call576 = callmethod(call575,"new", [0]);
          obj385.data["entities"] = call576;
          var reader_kitty_entities_577 = function() {
            return this.data["entities"];
          }
          obj385.methods["entities"] = reader_kitty_entities_577;
          obj385.data["entities"] = call576;
          var writer_kitty_entities_577 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj385.methods["entities:="] = writer_kitty_entities_577;
          reader_kitty_entities_577.confidential = true;
          writer_kitty_entities_577.confidential = true;
          lineNumber = 165;
          moduleName = "kitty";
          lineNumber = 163
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call576)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj385.mutable = true;
          sourceObject = obj385;
          lineNumber = 165
          var bool578 = new GraceBoolean(false)
          obj385.data["isInit"] = bool578;
          var reader_kitty_isInit_579 = function() {
            return this.data["isInit"];
          }
          obj385.methods["isInit"] = reader_kitty_isInit_579;
          obj385.data["isInit"] = bool578;
          var writer_kitty_isInit_579 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj385.methods["isInit:="] = writer_kitty_isInit_579;
          reader_kitty_isInit_579.confidential = true;
          writer_kitty_isInit_579.confidential = true;
          lineNumber = 166;
          moduleName = "kitty";
          lineNumber = 165
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool578)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj385.mutable = true;
          sourceObject = obj385;
          lineNumber = 166
          var bool580 = new GraceBoolean(false)
          obj385.data["isRunning"] = bool580;
          var reader_kitty_isRunning_581 = function() {
            return this.data["isRunning"];
          }
          obj385.methods["isRunning"] = reader_kitty_isRunning_581;
          obj385.data["isRunning"] = bool580;
          var writer_kitty_isRunning_581 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj385.methods["isRunning:="] = writer_kitty_isRunning_581;
          reader_kitty_isRunning_581.confidential = true;
          writer_kitty_isRunning_581.confidential = true;
          lineNumber = 168;
          moduleName = "kitty";
          lineNumber = 166
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool580)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj385.mutable = true;
          sourceObject = obj385;
          obj385.data["mctx"] = undefined;
          var reader_kitty_mctx_582 = function() {
            return this.data["mctx"];
          }
          obj385.methods["mctx"] = reader_kitty_mctx_582;
          obj385.data["mctx"] = undefined;
          var writer_kitty_mctx_582 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj385.methods["mctx:="] = writer_kitty_mctx_582;
          reader_kitty_mctx_582.confidential = true;
          writer_kitty_mctx_582.confidential = true;
          obj385.mutable = true;
          sourceObject = obj385;
          lineNumber = 172
          lineNumber = 170
          var call583 = callmethod(new GraceNum(1),"prefix-", [0]);
          obj385.data["currentKeyDown"] = call583;
          var reader_kitty_currentKeyDown_584 = function() {
            return this.data["currentKeyDown"];
          }
          obj385.methods["currentKeyDown"] = reader_kitty_currentKeyDown_584;
          obj385.data["currentKeyDown"] = call583;
          var writer_kitty_currentKeyDown_584 = function(argcv, o) {
            this.data["currentKeyDown"] = o;
          }
          obj385.methods["currentKeyDown:="] = writer_kitty_currentKeyDown_584;
          reader_kitty_currentKeyDown_584.confidential = true;
          writer_kitty_currentKeyDown_584.confidential = true;
          lineNumber = 172;
          moduleName = "kitty";
          lineNumber = 170
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call583)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'currentKeyDown' to be of type Unknown"))
          obj385.mutable = true;
          sourceObject = obj385;
          lineNumber = 172
          onSelf = true;
          var call585 = callmethod(this, "init", [0]);
          sourceObject = obj385;
          sourceObject = obj385;
          sourceObject = obj385;
          sourceObject = obj385;
          sourceObject = obj385;
          sourceObject = obj385;
          sourceObject = obj385;
          superDepth = origSuperDepth;
        }
        obj_init_385.apply(obj385, []);
        return obj385
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func384.paramCounts = [
      0,
    ];
    func384.variableArities = [
      false,
    ];
    obj382.methods["new"] = func384;
    func384.definitionLine = 147;
    func384.definitionModule = "kitty";
    var func586 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj587 = Grace_allocObject();
        obj587.definitionModule = "kitty";
        obj587.definitionLine = 147;
        var inho587 = inheritingObject;
        while (inho587.superobj) inho587 = inho587.superobj;
        inho587.superobj = obj587;
        obj587.data = inheritingObject.data;
        obj587.outer = this;
        var reader_kitty_outer_588 = function() {
          return this.outer;
        }
        obj587.methods["outer"] = reader_kitty_outer_588;
        function obj_init_587() {
          var origSuperDepth = superDepth;
          superDepth = obj587;
          obj587.annotations = [];
          var func589 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func589.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 183
              var if590 = var_done;
              lineNumber = 179
              onSelf = true;
              var call591 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call591)) {
                lineNumber = 181
                lineNumber = 180
                var bool592 = new GraceBoolean(false)
                return bool592
              }
              lineNumber = 184
              lineNumber = 163
              lineNumber = 183
              var call593 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call594 = callmethod(this, "document:=", [1], call593);
              lineNumber = 184
              lineNumber = 183
              lineNumber = 184
              var string595 = new GraceString("standard-canvas");
              onSelf = true;
              var call596 = callmethod(this, "document", [0]);
              var call597 = callmethod(call596,"getElementById", [1], string595);
              onSelf = true;
              var call598 = callmethod(this, "canvas:=", [1], call597);
              lineNumber = 186
              lineNumber = 183
              lineNumber = 185
              onSelf = true;
              var call599 = callmethod(this, "canvas", [0]);
              var call600 = callmethod(call599,"width", [0]);
              onSelf = true;
              var call601 = callmethod(this, "canvasWidth:=", [1], call600);
              lineNumber = 189
              lineNumber = 185
              lineNumber = 186
              onSelf = true;
              var call602 = callmethod(this, "canvas", [0]);
              var call603 = callmethod(call602,"height", [0]);
              onSelf = true;
              var call604 = callmethod(this, "canvasHeight:=", [1], call603);
              lineNumber = 201
              var block605 = Grace_allocObject();
              block605.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block605.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block605.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block605.methods["match"] = GraceBlock_match;
              block605.methods["prefix?"] = GraceBlock_lift;
              block605.receiver = this;
              block605.className = 'block<kitty:201>';
              block605.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 192
                lineNumber = 191
                onSelf = true;
                var call606 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call608 = callmethod(this, "canvas", [0]);
                var call609 = callmethod(call608,"offsetWidth", [0]);
                onSelf = true;
                var call611 = callmethod(this, "canvas", [0]);
                var call612 = callmethod(call611,"offsetLeft", [0]);
                var call614 = callmethod(var_ev,"clientX", [0]);
                var diff616 = callmethod(call614, "-", [1], call612);
                var quotient618 = callmethod(diff616, "/", [1], call609);
                var prod620 = callmethod(quotient618, "*", [1], call606);
                var var_x = prod620;
                lineNumber = 192;
                moduleName = "kitty";
                lineNumber = 191
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 196
                lineNumber = 192
                onSelf = true;
                var call621 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call623 = callmethod(this, "canvas", [0]);
                var call624 = callmethod(call623,"offsetHeight", [0]);
                onSelf = true;
                var call626 = callmethod(this, "canvas", [0]);
                var call627 = callmethod(call626,"offsetTop", [0]);
                var call629 = callmethod(var_ev,"clientY", [0]);
                var diff631 = callmethod(call629, "-", [1], call627);
                var quotient633 = callmethod(diff631, "/", [1], call624);
                var prod635 = callmethod(quotient633, "*", [1], call621);
                var var_y = prod635;
                lineNumber = 196;
                moduleName = "kitty";
                lineNumber = 192
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 200
                var if636 = var_done;
                lineNumber = 196
                var opresult639 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call642 = callmethod(this, "canvasWidth", [0]);
                var diff644 = callmethod(call642, "-", [1], new GraceNum(20));
                var opresult647 = callmethod(var_x, ">", [1], diff644);
                var opresult649 = callmethod(opresult647, "&&", [1], opresult639);
                if (Grace_isTrue(opresult649)) {
                  lineNumber = 197
                  var call650 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 198
                  onSelf = true;
                  var call651 = callmethod(this, "stop", [0]);
                  if636 = call651;
                }
                return if636;
              };
              var_mouseDownListener = block605;
              lineNumber = 201
              var string652 = new GraceString("mousedown");
              onSelf = true;
              var call653 = callmethod(this, "canvas", [0]);
              var call654 = callmethod(call653,"addEventListener", [2], string652, var_mouseDownListener);
              lineNumber = 211
              var block655 = Grace_allocObject();
              block655.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block655.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block655.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block655.methods["match"] = GraceBlock_match;
              block655.methods["prefix?"] = GraceBlock_lift;
              block655.receiver = this;
              block655.className = 'block<kitty:211>';
              block655.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 209
                var if656 = var_done;
                lineNumber = 206
                var call658 = callmethod(var_ev,"keyCode", [0]);
                var opresult660 = callmethod(call658, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult660)) {
                  lineNumber = 207
                  onSelf = true;
                  var call661 = callmethod(this, "stop", [0]);
                  if656 = call661;
                }
                lineNumber = 210
                lineNumber = 206
                lineNumber = 209
                var call662 = callmethod(var_ev,"keyCode", [0]);
                onSelf = true;
                var call663 = callmethod(this, "currentKeyDown:=", [1], call662);
                return call663;
              };
              var_keyDownListener = block655;
              lineNumber = 211
              var string664 = new GraceString("keydown");
              onSelf = true;
              var call665 = callmethod(this, "document", [0]);
              var call666 = callmethod(call665,"addEventListener", [2], string664, var_keyDownListener);
              lineNumber = 217
              var block667 = Grace_allocObject();
              block667.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block667.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block667.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block667.methods["match"] = GraceBlock_match;
              block667.methods["prefix?"] = GraceBlock_lift;
              block667.receiver = this;
              block667.className = 'block<kitty:217>';
              block667.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 216
                lineNumber = 209
                lineNumber = 216
                lineNumber = 215
                var call668 = callmethod(new GraceNum(1),"prefix-", [0]);
                onSelf = true;
                var call669 = callmethod(this, "currentKeyDown:=", [1], call668);
                return call669;
              };
              var_keyUpListener = block667;
              lineNumber = 217
              var string670 = new GraceString("keyup");
              onSelf = true;
              var call671 = callmethod(this, "document", [0]);
              var call672 = callmethod(call671,"addEventListener", [2], string670, var_keyUpListener);
              lineNumber = 219
              lineNumber = 209
              lineNumber = 219
              var string673 = new GraceString("canvas");
              var call674 = callmethod(var_dom,"document", [0]);
              var call675 = callmethod(call674,"createElement", [1], string673);
              onSelf = true;
              var call676 = callmethod(this, "backingCanvas:=", [1], call675);
              lineNumber = 221
              lineNumber = 219
              lineNumber = 220
              onSelf = true;
              var call677 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call678 = callmethod(this, "backingCanvas", [0]);
              var call679 = callmethod(call678,"height:=", [1], call677);
              lineNumber = 222
              lineNumber = 219
              lineNumber = 221
              onSelf = true;
              var call680 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call681 = callmethod(this, "backingCanvas", [0]);
              var call682 = callmethod(call681,"width:=", [1], call680);
              lineNumber = 222
              lineNumber = 219
              lineNumber = 222
              var string683 = new GraceString("2d");
              onSelf = true;
              var call684 = callmethod(this, "backingCanvas", [0]);
              var call685 = callmethod(call684,"getContext", [1], string683);
              onSelf = true;
              var call686 = callmethod(this, "backingContext:=", [1], call685);
              lineNumber = 223
              lineNumber = 219
              lineNumber = 223
              var string687 = new GraceString("2d");
              onSelf = true;
              var call688 = callmethod(this, "canvas", [0]);
              var call689 = callmethod(call688,"getContext", [1], string687);
              onSelf = true;
              var call690 = callmethod(this, "mctx:=", [1], call689);
              lineNumber = 226
              var string691 = new GraceString("doggo.jpg");
              onSelf = true;
              var call692 = callmethod(this, "setBackground", [1], string691);
              lineNumber = 234
              lineNumber = 219
              lineNumber = 228
              var bool693 = new GraceBoolean(true)
              onSelf = true;
              var call694 = callmethod(this, "isInit:=", [1], bool693);
              return call694
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func589.paramCounts = [
            0,
          ];
          func589.variableArities = [
            false,
          ];
          obj587.methods["init"] = func589;
          func589.definitionLine = 175;
          func589.definitionModule = "kitty";
          var func695 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func695.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 240
              lineNumber = 219
              lineNumber = 239
              var bool696 = new GraceBoolean(true)
              onSelf = true;
              var call697 = callmethod(this, "isRunning:=", [1], bool696);
              lineNumber = 240
              var block698 = Grace_allocObject();
              block698.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block698.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block698.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block698.methods["match"] = GraceBlock_match;
              block698.methods["prefix?"] = GraceBlock_lift;
              block698.receiver = this;
              block698.className = 'block<kitty:240>';
              block698.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call699 = callmethod(this, "isRunning", [0]);
                return call699;
              };
              lineNumber = 244
              var block700 = Grace_allocObject();
              block700.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block700.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block700.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block700.methods["match"] = GraceBlock_match;
              block700.methods["prefix?"] = GraceBlock_lift;
              block700.receiver = this;
              block700.className = 'block<kitty:244>';
              block700.real = function(
              ) {
                sourceObject = this;
                lineNumber = 241
                onSelf = true;
                var call701 = callmethod(this, "update", [0]);
                return call701;
              };
              lineNumber = 240
              var call702 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block698, new GraceNum(10), block700);
              return call702
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func695.paramCounts = [
            0,
          ];
          func695.variableArities = [
            false,
          ];
          obj587.methods["start"] = func695;
          func695.definitionLine = 237;
          func695.definitionModule = "kitty";
          var func703 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func703.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 253
              lineNumber = 219
              lineNumber = 252
              onSelf = true;
              var call704 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call705 = callmethod(this, "mctx", [0]);
              var call706 = callmethod(call705,"fillStyle:=", [1], call704);
              lineNumber = 253
              onSelf = true;
              var call707 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call708 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call709 = callmethod(this, "mctx", [0]);
              var call710 = callmethod(call709,"fillRect", [4], new GraceNum(0), new GraceNum(0), call707, call708);
              lineNumber = 254
              onSelf = true;
              var call711 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call712 = callmethod(this, "mctx", [0]);
              var call713 = callmethod(call712,"drawImage", [3], call711, new GraceNum(0), new GraceNum(0));
              lineNumber = 255
              onSelf = true;
              var call714 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call716 = callmethod(this, "canvasWidth", [0]);
              var quotient718 = callmethod(call716, "/", [1], new GraceNum(2));
              onSelf = true;
              var call720 = callmethod(this, "canvasHeight", [0]);
              var quotient722 = callmethod(call720, "/", [1], new GraceNum(2));
              onSelf = true;
              var call723 = callmethod(this, "background", [0]);
              var call724 = callmethod(call723,"draw", [4], call714, quotient718, quotient722, new GraceNum(0));
              lineNumber = 258
              onSelf = true;
              var call725 = callmethod(this, "entities", [0]);
              lineNumber = 264
              var block726 = Grace_allocObject();
              block726.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block726.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block726.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block726.methods["match"] = GraceBlock_match;
              block726.methods["prefix?"] = GraceBlock_lift;
              block726.receiver = this;
              block726.className = 'block<kitty:264>';
              block726.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 259
                var call727 = callmethod(var_entity,"update", [0]);
                lineNumber = 260
                onSelf = true;
                var call728 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call730 = callmethod(this, "canvasWidth", [0]);
                var quotient732 = callmethod(call730, "/", [1], new GraceNum(2));
                onSelf = true;
                var call734 = callmethod(this, "canvasHeight", [0]);
                var quotient736 = callmethod(call734, "/", [1], new GraceNum(2));
                var call737 = callmethod(var_entity,"draw", [3], call728, quotient732, quotient736);
                return call737;
              };
              var call738 = callmethod(Grace_prelude,"for()do", [1, 1], call725, block726);
              return call738
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func703.paramCounts = [
            0,
          ];
          func703.variableArities = [
            false,
          ];
          obj587.methods["update"] = func703;
          func703.definitionLine = 247;
          func703.definitionModule = "kitty";
          var func739 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func739.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 267
              var string740 = new GraceString("WORLD STOPPING...");
              var call741 = Grace_print(string740);
              lineNumber = 269
              lineNumber = 259
              lineNumber = 268
              var bool742 = new GraceBoolean(false)
              onSelf = true;
              var call743 = callmethod(this, "isRunning:=", [1], bool742);
              lineNumber = 269
              var string744 = new GraceString("mousedown");
              onSelf = true;
              var call745 = callmethod(this, "canvas", [0]);
              var call746 = callmethod(call745,"removeEventListener", [2], string744, var_mouseDownListener);
              lineNumber = 270
              var string747 = new GraceString("keydown");
              onSelf = true;
              var call748 = callmethod(this, "document", [0]);
              var call749 = callmethod(call748,"removeEventListener", [2], string747, var_keyDownListener);
              lineNumber = 271
              var string750 = new GraceString("keyup");
              onSelf = true;
              var call751 = callmethod(this, "document", [0]);
              var call752 = callmethod(call751,"removeEventListener", [2], string750, var_keyUpListener);
              return call752
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func739.paramCounts = [
            0,
          ];
          func739.variableArities = [
            false,
          ];
          obj587.methods["stop"] = func739;
          func739.definitionLine = 266;
          func739.definitionModule = "kitty";
          var func753 = function(argcv) {
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func753.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isKeyDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 276
              lineNumber = 275
              onSelf = true;
              var call754 = callmethod(this, "currentKeyDown", [0]);
              var opresult757 = callmethod(var_key, "==", [1], call754);
              return opresult757
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func753.paramCounts = [
            1,
          ];
          func753.variableArities = [
            false,
          ];
          obj587.methods["isKeyDown"] = func753;
          func753.definitionLine = 274;
          func753.definitionModule = "kitty";
          var func758 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func758.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 279
              lineNumber = 259
              lineNumber = 279
              onSelf = true;
              var call759 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call760 = callmethod(this, "canvasHeight", [0]);
              var call761 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call762 = callmethod(call761, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call763 = callmethod(call762, "Image", [3], var_background__39__, call759, call760);
              onSelf = true;
              var call764 = callmethod(this, "background:=", [1], call763);
              return call764
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func758.paramCounts = [
            1,
          ];
          func758.variableArities = [
            false,
          ];
          obj587.methods["setBackground"] = func758;
          func758.definitionLine = 278;
          func758.definitionModule = "kitty";
          var func765 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func765.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 283
              onSelf = true;
              var call766 = callmethod(this, "entities", [0]);
              var call767 = callmethod(call766,"push", [1], var_e);
              return call767
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func765.paramTypes = [];
          func765.paramTypes.push([]);
          func765.paramCounts = [
            1,
          ];
          func765.variableArities = [
            false,
          ];
          obj587.methods["addEntity"] = func765;
          func765.definitionLine = 282;
          func765.definitionModule = "kitty";
          sourceObject = obj587;
          obj587.data["background"] = undefined;
          var reader_kitty_background_768 = function() {
            return this.data["background"];
          }
          obj587.methods["background"] = reader_kitty_background_768;
          obj587.data["background"] = undefined;
          var writer_kitty_background_768 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj587.methods["background:="] = writer_kitty_background_768;
          reader_kitty_background_768.confidential = true;
          writer_kitty_background_768.confidential = true;
          obj587.mutable = true;
          sourceObject = obj587;
          lineNumber = 152
          var string769 = new GraceString("black");
          obj587.data["backgroundColour"] = string769;
          var reader_kitty_backgroundColour_770 = function() {
            return this.data["backgroundColour"];
          }
          obj587.methods["backgroundColour"] = reader_kitty_backgroundColour_770;
          obj587.data["backgroundColour"] = string769;
          var writer_kitty_backgroundColour_770 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj587.methods["backgroundColour:="] = writer_kitty_backgroundColour_770;
          reader_kitty_backgroundColour_770.confidential = true;
          writer_kitty_backgroundColour_770.confidential = true;
          lineNumber = 154;
          moduleName = "kitty";
          lineNumber = 152
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string769)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj587.mutable = true;
          sourceObject = obj587;
          obj587.data["document"] = undefined;
          var reader_kitty_document_771 = function() {
            return this.data["document"];
          }
          obj587.methods["document"] = reader_kitty_document_771;
          obj587.data["document"] = undefined;
          var writer_kitty_document_771 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj587.methods["document:="] = writer_kitty_document_771;
          reader_kitty_document_771.confidential = true;
          writer_kitty_document_771.confidential = true;
          obj587.mutable = true;
          sourceObject = obj587;
          obj587.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_772 = function() {
            return this.data["backingCanvas"];
          }
          obj587.methods["backingCanvas"] = reader_kitty_backingCanvas_772;
          obj587.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_772 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj587.methods["backingCanvas:="] = writer_kitty_backingCanvas_772;
          reader_kitty_backingCanvas_772.confidential = true;
          writer_kitty_backingCanvas_772.confidential = true;
          obj587.mutable = true;
          sourceObject = obj587;
          obj587.data["backingContext"] = undefined;
          var reader_kitty_backingContext_773 = function() {
            return this.data["backingContext"];
          }
          obj587.methods["backingContext"] = reader_kitty_backingContext_773;
          obj587.data["backingContext"] = undefined;
          var writer_kitty_backingContext_773 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj587.methods["backingContext:="] = writer_kitty_backingContext_773;
          reader_kitty_backingContext_773.confidential = true;
          writer_kitty_backingContext_773.confidential = true;
          obj587.mutable = true;
          sourceObject = obj587;
          obj587.data["canvas"] = undefined;
          var reader_kitty_canvas_774 = function() {
            return this.data["canvas"];
          }
          obj587.methods["canvas"] = reader_kitty_canvas_774;
          obj587.data["canvas"] = undefined;
          var writer_kitty_canvas_774 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj587.methods["canvas:="] = writer_kitty_canvas_774;
          reader_kitty_canvas_774.confidential = true;
          writer_kitty_canvas_774.confidential = true;
          obj587.mutable = true;
          sourceObject = obj587;
          obj587.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_775 = function() {
            return this.data["canvasWidth"];
          }
          obj587.methods["canvasWidth"] = reader_kitty_canvasWidth_775;
          obj587.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_775 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj587.methods["canvasWidth:="] = writer_kitty_canvasWidth_775;
          reader_kitty_canvasWidth_775.confidential = true;
          writer_kitty_canvasWidth_775.confidential = true;
          obj587.mutable = true;
          sourceObject = obj587;
          obj587.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_776 = function() {
            return this.data["canvasHeight"];
          }
          obj587.methods["canvasHeight"] = reader_kitty_canvasHeight_776;
          obj587.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_776 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj587.methods["canvasHeight:="] = writer_kitty_canvasHeight_776;
          reader_kitty_canvasHeight_776.confidential = true;
          writer_kitty_canvasHeight_776.confidential = true;
          obj587.mutable = true;
          sourceObject = obj587;
          lineNumber = 163
          var call777 = callmethod(var_collections,"list", [0]);
          var call778 = callmethod(call777,"new", [0]);
          obj587.data["entities"] = call778;
          var reader_kitty_entities_779 = function() {
            return this.data["entities"];
          }
          obj587.methods["entities"] = reader_kitty_entities_779;
          obj587.data["entities"] = call778;
          var writer_kitty_entities_779 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj587.methods["entities:="] = writer_kitty_entities_779;
          reader_kitty_entities_779.confidential = true;
          writer_kitty_entities_779.confidential = true;
          lineNumber = 165;
          moduleName = "kitty";
          lineNumber = 163
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call778)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj587.mutable = true;
          sourceObject = obj587;
          lineNumber = 165
          var bool780 = new GraceBoolean(false)
          obj587.data["isInit"] = bool780;
          var reader_kitty_isInit_781 = function() {
            return this.data["isInit"];
          }
          obj587.methods["isInit"] = reader_kitty_isInit_781;
          obj587.data["isInit"] = bool780;
          var writer_kitty_isInit_781 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj587.methods["isInit:="] = writer_kitty_isInit_781;
          reader_kitty_isInit_781.confidential = true;
          writer_kitty_isInit_781.confidential = true;
          lineNumber = 166;
          moduleName = "kitty";
          lineNumber = 165
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool780)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj587.mutable = true;
          sourceObject = obj587;
          lineNumber = 166
          var bool782 = new GraceBoolean(false)
          obj587.data["isRunning"] = bool782;
          var reader_kitty_isRunning_783 = function() {
            return this.data["isRunning"];
          }
          obj587.methods["isRunning"] = reader_kitty_isRunning_783;
          obj587.data["isRunning"] = bool782;
          var writer_kitty_isRunning_783 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj587.methods["isRunning:="] = writer_kitty_isRunning_783;
          reader_kitty_isRunning_783.confidential = true;
          writer_kitty_isRunning_783.confidential = true;
          lineNumber = 168;
          moduleName = "kitty";
          lineNumber = 166
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool782)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj587.mutable = true;
          sourceObject = obj587;
          obj587.data["mctx"] = undefined;
          var reader_kitty_mctx_784 = function() {
            return this.data["mctx"];
          }
          obj587.methods["mctx"] = reader_kitty_mctx_784;
          obj587.data["mctx"] = undefined;
          var writer_kitty_mctx_784 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj587.methods["mctx:="] = writer_kitty_mctx_784;
          reader_kitty_mctx_784.confidential = true;
          writer_kitty_mctx_784.confidential = true;
          obj587.mutable = true;
          sourceObject = obj587;
          lineNumber = 172
          lineNumber = 170
          var call785 = callmethod(new GraceNum(1),"prefix-", [0]);
          obj587.data["currentKeyDown"] = call785;
          var reader_kitty_currentKeyDown_786 = function() {
            return this.data["currentKeyDown"];
          }
          obj587.methods["currentKeyDown"] = reader_kitty_currentKeyDown_786;
          obj587.data["currentKeyDown"] = call785;
          var writer_kitty_currentKeyDown_786 = function(argcv, o) {
            this.data["currentKeyDown"] = o;
          }
          obj587.methods["currentKeyDown:="] = writer_kitty_currentKeyDown_786;
          reader_kitty_currentKeyDown_786.confidential = true;
          writer_kitty_currentKeyDown_786.confidential = true;
          lineNumber = 172;
          moduleName = "kitty";
          lineNumber = 170
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call785)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'currentKeyDown' to be of type Unknown"))
          obj587.mutable = true;
          sourceObject = obj587;
          lineNumber = 172
          onSelf = true;
          var call787 = callmethod(this, "init", [0]);
          sourceObject = obj587;
          sourceObject = obj587;
          sourceObject = obj587;
          sourceObject = obj587;
          sourceObject = obj587;
          sourceObject = obj587;
          sourceObject = obj587;
          superDepth = origSuperDepth;
        }
        obj_init_587.apply(inheritingObject, []);
        return obj587
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj382.methods["new()object"] = func586;
    var func788 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 147
        var string789 = new GraceString("class KittyWorld");
        return string789
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func788.paramCounts = [
    ];
    func788.variableArities = [
    ];
    obj382.methods["asDebugString"] = func788;
    func788.definitionLine = 147;
    func788.definitionModule = "kitty";
    sourceObject = obj382;
    sourceObject = obj382;
    superDepth = origSuperDepth;
  }
  obj_init_382.apply(obj382, []);
  var var_KittyWorld = obj382;
  lineNumber = 289
  lineNumber = 298
  lineNumber = 313
  lineNumber = 318
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
'dom',
'StandardPrelude',
];
if (gctCache)
  gctCache['kitty'] = "fresh:Image:\n imgTag\n width:=\n height\n width\n draw\n height:=\nmodules:\n mgcollections\n StandardPrelude\nmethods-of:KittyEntity.new:\n action:=\n getX\n getY\n action\n posX:=\n posY:=\n update\n draw\n rotation:=\n turn\n posX\n posY\n start\n setImage\n rotation\n move\n setLocation\n image:=\n image\n strafe\n onDestroy\n awake\n setAction\n getRotation\npublic:\n m_world\n m_world:=\n worldSet\n worldSet:=\n keyDownListener\n keyDownListener:=\n keyUpListener\n keyUpListener:=\n mouseDownListener\n mouseDownListener:=\n math\n KittyImage\n Image\n KittyEntity\n Entity\n KittyWorld\n World\n start\n setWorld\n atModuleEnd\nmethods-of:KittyImage.new:\n imgTag\n width:=\n height\n height:=\n draw\n width\nconstructors-of:KittyImage:\n new\nmethods-of:KittyWorld.new:\n canvas:=\n backgroundColour\n background:=\n canvasWidth\n background\n backingCanvas\n canvas\n isRunning:=\n document:=\n canvasWidth:=\n update\n entities\n addEntity\n backingContext:=\n entities:=\n isKeyDown\n backingContext\n canvasHeight\n init\n canvasHeight:=\n currentKeyDown:=\n backingCanvas:=\n currentKeyDown\n stop\n isInit:=\n start\n isInit\n mctx:=\n mctx\n isRunning\n document\n backgroundColour:=\n setBackground\nfresh-methods:\n Image\n Entity\n World\nconstructors-of:KittyEntity:\n new\nfresh:World:\n canvas:=\n backgroundColour\n background:=\n canvasWidth\n background\n backingCanvas\n canvas\n isRunning:=\n document:=\n canvasWidth:=\n update\n entities\n addEntity\n backingContext:=\n mctx\n isRunning\n backingContext\n canvasHeight\n init\n setBackground\n currentKeyDown:=\n backingCanvas:=\n currentKeyDown\n stop\n isInit:=\n start\n isInit\n mctx:=\n entities:=\n isKeyDown\n document\n backgroundColour:=\n canvasHeight:=\npath:\n kitty\nclasses:\n KittyImage\n KittyEntity\n KittyWorld\nfresh:Entity:\n action:=\n getX\n getY\n action\n posX:=\n posY:=\n image\n setLocation\n rotation:=\n turn\n posX\n posY\n start\n setImage\n rotation\n move\n setAction\n image:=\n update\n strafe\n onDestroy\n awake\n draw\n getRotation\nconfidential:\nconstructors-of:KittyWorld:\n new\n";
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
    "        // ctx.rotate(rot *  180 / 3.14)",
    "        ctx.rotate(rot * 3.14159 / 180)",
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
    "    method strafe(distance) {",
    "        posX := posX + distance * math.cos((90 + rotation) * 3.14159 / 180)",
    "        posY := posY + distance * math.sin((90 + rotation) * 3.14159 / 180)",
    "    }",
    "",
    "    method turn(angle) {",
    "        rotation := rotation + angle",
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
