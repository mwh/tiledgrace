function gracecode_kitty () {
  this.definitionModule = "kitty";
  this.definitionLine = 0;
  lineNumber = 41
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
      lineNumber = 42
      var obj1 = Grace_allocObject();
      obj1.definitionModule = "kitty";
      obj1.definitionLine = 42;
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
        lineNumber = 43
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
  func0.definitionLine = 41;
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
      obj5.definitionLine = 42;
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
  lineNumber = 147
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
      lineNumber = 148
      var obj9 = Grace_allocObject();
      obj9.definitionModule = "kitty";
      obj9.definitionLine = 148;
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
        lineNumber = 149
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
  func8.definitionLine = 147;
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
      obj13.definitionLine = 148;
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
  lineNumber = 296
  var func16 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func16.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (World)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 297
      var obj17 = Grace_allocObject();
      obj17.definitionModule = "kitty";
      obj17.definitionLine = 297;
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
        lineNumber = 298
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
  func16.definitionLine = 296;
  func16.definitionModule = "kitty";
  var func20 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj21 = Grace_allocObject();
      obj21.definitionModule = "kitty";
      obj21.definitionLine = 297;
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
  lineNumber = 305
  var func24 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func24.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 307
      var string25 = new GraceString("CHECKING...");
      var call26 = Grace_print(string25);
      lineNumber = 314
      var if27 = var_done;
      lineNumber = 309
      var call28 = callmethod(var_worldSet,"prefix!", [0]);
      if (Grace_isTrue(call28)) {
        lineNumber = 310
        var string29 = new GraceString("NO WORLD!!");
        var call30 = Grace_print(string29);
        lineNumber = 312
        return var_done
      }
      lineNumber = 314
      var string31 = new GraceString("STARTING...");
      var call32 = Grace_print(string31);
      lineNumber = 317
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
  func24.definitionLine = 305;
  func24.definitionModule = "kitty";
  lineNumber = 320
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
      lineNumber = 322
      lineNumber = 321
      var_m__95__world = var_world__39__;
      lineNumber = 323
      lineNumber = 322
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
  func34.definitionLine = 320;
  func34.definitionModule = "kitty";
  lineNumber = 325
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
      lineNumber = 326
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
  func36.definitionLine = 325;
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
  lineNumber = 3
  // Import of math
  if (typeof gracecode_math == 'undefined')
    throw new GraceExceptionPacket(RuntimeErrorObject, 
      new GraceString('could not find module math'));
  var var_math = do_import("math", gracecode_math);
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
  lineNumber = 317
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
  func39.definitionLine = 317;
  func39.definitionModule = "kitty";
  lineNumber = 317
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
  func40.definitionLine = 317;
  func40.definitionModule = "kitty";
  lineNumber = 12
  lineNumber = 9
  var bool41 = new GraceBoolean(false)
  var var_worldSet = bool41;
  lineNumber = 317
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
  func42.definitionLine = 317;
  func42.definitionModule = "kitty";
  lineNumber = 317
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
  func43.definitionLine = 317;
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
  lineNumber = 317
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
  func44.definitionLine = 317;
  func44.definitionModule = "kitty";
  lineNumber = 317
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
  func45.definitionLine = 317;
  func45.definitionModule = "kitty";
  lineNumber = 14
  var var_keyUpListener;
  lineNumber = 317
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
  func46.definitionLine = 317;
  func46.definitionModule = "kitty";
  lineNumber = 317
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
  func47.definitionLine = 317;
  func47.definitionModule = "kitty";
  lineNumber = 19
  var var_mouseDownListener;
  lineNumber = 317
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
  func48.definitionLine = 317;
  func48.definitionModule = "kitty";
  lineNumber = 317
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
  func49.definitionLine = 317;
  func49.definitionModule = "kitty";
  lineNumber = 19
  var func50 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func50.paramCounts[0])
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
  func50.paramCounts = [
    0,
  ];
  func50.variableArities = [
    false,
  ];
  this.methods["KittyImage"] = func50;
  func50.definitionLine = 19;
  func50.definitionModule = "kitty";
  var obj51 = Grace_allocObject();
  obj51.definitionModule = "kitty";
  obj51.definitionLine = 19;
  obj51.outer = this;
  var reader_kitty_outer_52 = function() {
    return this.outer;
  }
  obj51.methods["outer"] = reader_kitty_outer_52;
  function obj_init_51() {
    var origSuperDepth = superDepth;
    superDepth = obj51;
    obj51.annotations = [];
    var func53 = function(argcv) {
      var curarg = 1;
      var var_url__39__ = arguments[curarg];
      curarg++;
      var var_height__39__ = arguments[curarg];
      curarg++;
      var var_width__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func53.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj54 = Grace_allocObject();
        obj54.definitionModule = "kitty";
        obj54.definitionLine = 19;
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
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            var var_rot = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func56.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 30
              var call57 = callmethod(var_ctx,"save", [0]);
              lineNumber = 31
              var call58 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 32
              var prod62 = callmethod(var_rot, "*", [1], new GraceNum(180));
              var quotient64 = callmethod(prod62, "/", [1], new GraceNum(3.14));
              var call65 = callmethod(var_ctx,"rotate", [1], quotient64);
              lineNumber = 33
              onSelf = true;
              var call66 = callmethod(this, "imgTag", [0]);
              onSelf = true;
              var call68 = callmethod(this, "width", [0]);
              var call69 = callmethod(call68,"prefix-", [0]);
              var quotient71 = callmethod(call69, "/", [1], new GraceNum(2));
              onSelf = true;
              var call73 = callmethod(this, "height", [0]);
              var call74 = callmethod(call73,"prefix-", [0]);
              var quotient76 = callmethod(call74, "/", [1], new GraceNum(2));
              onSelf = true;
              var call77 = callmethod(this, "width", [0]);
              onSelf = true;
              var call78 = callmethod(this, "height", [0]);
              var call79 = callmethod(var_ctx,"drawImage", [5], call66, quotient71, quotient76, call77, call78);
              lineNumber = 34
              var call80 = callmethod(var_ctx,"restore", [0]);
              return call80
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func56.paramCounts = [
            4,
          ];
          func56.variableArities = [
            false,
          ];
          obj54.methods["draw"] = func56;
          func56.definitionLine = 28;
          func56.definitionModule = "kitty";
          sourceObject = obj54;
          lineNumber = 22
          var string81 = new GraceString("img");
          var call82 = callmethod(var_dom,"document", [0]);
          var call83 = callmethod(call82,"createElement", [1], string81);
          obj54.data["imgTag"] = call83;
          var reader_kitty_imgTag_84 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_84.def = true;
          reader_kitty_imgTag_84.confidential = true;
          obj54.methods["imgTag"] = reader_kitty_imgTag_84;
          lineNumber = 22;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call83)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj54;
          lineNumber = 25
          lineNumber = 22
          lineNumber = 23
          onSelf = true;
          var call85 = callmethod(this, "imgTag", [0]);
          var call86 = callmethod(call85,"src:=", [1], var_url__39__);
          sourceObject = obj54;
          lineNumber = 25
          obj54.data["height"] = var_height__39__;
          var reader_kitty_height_87 = function() {
            return this.data["height"];
          }
          obj54.methods["height"] = reader_kitty_height_87;
          obj54.data["height"] = var_height__39__;
          var writer_kitty_height_87 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj54.methods["height:="] = writer_kitty_height_87;
          reader_kitty_height_87.confidential = true;
          writer_kitty_height_87.confidential = true;
          lineNumber = 26;
          moduleName = "kitty";
          lineNumber = 25
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj54.mutable = true;
          sourceObject = obj54;
          lineNumber = 26
          obj54.data["width"] = var_width__39__;
          var reader_kitty_width_88 = function() {
            return this.data["width"];
          }
          obj54.methods["width"] = reader_kitty_width_88;
          obj54.data["width"] = var_width__39__;
          var writer_kitty_width_88 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj54.methods["width:="] = writer_kitty_width_88;
          reader_kitty_width_88.confidential = true;
          writer_kitty_width_88.confidential = true;
          lineNumber = 28;
          moduleName = "kitty";
          lineNumber = 26
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj54.mutable = true;
          sourceObject = obj54;
          superDepth = origSuperDepth;
        }
        obj_init_54.apply(obj54, []);
        return obj54
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func53.paramCounts = [
      3,
    ];
    func53.variableArities = [
      false,
    ];
    obj51.methods["new"] = func53;
    func53.definitionLine = 19;
    func53.definitionModule = "kitty";
    var func89 = function(argcv) {
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
        var obj90 = Grace_allocObject();
        obj90.definitionModule = "kitty";
        obj90.definitionLine = 19;
        var inho90 = inheritingObject;
        while (inho90.superobj) inho90 = inho90.superobj;
        inho90.superobj = obj90;
        obj90.data = inheritingObject.data;
        obj90.outer = this;
        var reader_kitty_outer_91 = function() {
          return this.outer;
        }
        obj90.methods["outer"] = reader_kitty_outer_91;
        function obj_init_90() {
          var origSuperDepth = superDepth;
          superDepth = obj90;
          obj90.annotations = [];
          var func92 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            var var_rot = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func92.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 30
              var call93 = callmethod(var_ctx,"save", [0]);
              lineNumber = 31
              var call94 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 32
              var prod98 = callmethod(var_rot, "*", [1], new GraceNum(180));
              var quotient100 = callmethod(prod98, "/", [1], new GraceNum(3.14));
              var call101 = callmethod(var_ctx,"rotate", [1], quotient100);
              lineNumber = 33
              onSelf = true;
              var call102 = callmethod(this, "imgTag", [0]);
              onSelf = true;
              var call104 = callmethod(this, "width", [0]);
              var call105 = callmethod(call104,"prefix-", [0]);
              var quotient107 = callmethod(call105, "/", [1], new GraceNum(2));
              onSelf = true;
              var call109 = callmethod(this, "height", [0]);
              var call110 = callmethod(call109,"prefix-", [0]);
              var quotient112 = callmethod(call110, "/", [1], new GraceNum(2));
              onSelf = true;
              var call113 = callmethod(this, "width", [0]);
              onSelf = true;
              var call114 = callmethod(this, "height", [0]);
              var call115 = callmethod(var_ctx,"drawImage", [5], call102, quotient107, quotient112, call113, call114);
              lineNumber = 34
              var call116 = callmethod(var_ctx,"restore", [0]);
              return call116
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func92.paramCounts = [
            4,
          ];
          func92.variableArities = [
            false,
          ];
          obj90.methods["draw"] = func92;
          func92.definitionLine = 28;
          func92.definitionModule = "kitty";
          sourceObject = obj90;
          lineNumber = 22
          var string117 = new GraceString("img");
          var call118 = callmethod(var_dom,"document", [0]);
          var call119 = callmethod(call118,"createElement", [1], string117);
          obj90.data["imgTag"] = call119;
          var reader_kitty_imgTag_120 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_120.def = true;
          reader_kitty_imgTag_120.confidential = true;
          obj90.methods["imgTag"] = reader_kitty_imgTag_120;
          lineNumber = 22;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call119)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj90;
          lineNumber = 25
          lineNumber = 22
          lineNumber = 23
          onSelf = true;
          var call121 = callmethod(this, "imgTag", [0]);
          var call122 = callmethod(call121,"src:=", [1], var_url__39__);
          sourceObject = obj90;
          lineNumber = 25
          obj90.data["height"] = var_height__39__;
          var reader_kitty_height_123 = function() {
            return this.data["height"];
          }
          obj90.methods["height"] = reader_kitty_height_123;
          obj90.data["height"] = var_height__39__;
          var writer_kitty_height_123 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj90.methods["height:="] = writer_kitty_height_123;
          reader_kitty_height_123.confidential = true;
          writer_kitty_height_123.confidential = true;
          lineNumber = 26;
          moduleName = "kitty";
          lineNumber = 25
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj90.mutable = true;
          sourceObject = obj90;
          lineNumber = 26
          obj90.data["width"] = var_width__39__;
          var reader_kitty_width_124 = function() {
            return this.data["width"];
          }
          obj90.methods["width"] = reader_kitty_width_124;
          obj90.data["width"] = var_width__39__;
          var writer_kitty_width_124 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj90.methods["width:="] = writer_kitty_width_124;
          reader_kitty_width_124.confidential = true;
          writer_kitty_width_124.confidential = true;
          lineNumber = 28;
          moduleName = "kitty";
          lineNumber = 26
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj90.mutable = true;
          sourceObject = obj90;
          superDepth = origSuperDepth;
        }
        obj_init_90.apply(inheritingObject, []);
        return obj90
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj51.methods["new()object"] = func89;
    var func125 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 19
        var string126 = new GraceString("class KittyImage");
        return string126
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func125.paramCounts = [
    ];
    func125.variableArities = [
    ];
    obj51.methods["asDebugString"] = func125;
    func125.definitionLine = 19;
    func125.definitionModule = "kitty";
    sourceObject = obj51;
    sourceObject = obj51;
    superDepth = origSuperDepth;
  }
  obj_init_51.apply(obj51, []);
  var var_KittyImage = obj51;
  lineNumber = 41
  lineNumber = 48
  var func127 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func127.paramCounts[0])
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
  func127.paramCounts = [
    0,
  ];
  func127.variableArities = [
    false,
  ];
  this.methods["KittyEntity"] = func127;
  func127.definitionLine = 48;
  func127.definitionModule = "kitty";
  var obj128 = Grace_allocObject();
  obj128.definitionModule = "kitty";
  obj128.definitionLine = 48;
  obj128.outer = this;
  var reader_kitty_outer_129 = function() {
    return this.outer;
  }
  obj128.methods["outer"] = reader_kitty_outer_129;
  function obj_init_128() {
    var origSuperDepth = superDepth;
    superDepth = obj128;
    obj128.annotations = [];
    var func130 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func130.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj131 = Grace_allocObject();
        obj131.definitionModule = "kitty";
        obj131.definitionLine = 48;
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
            if (argcv[0] !=  func133.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 69
              var string134 = new GraceString("realyee.png");
              onSelf = true;
              var call135 = callmethod(this, "setImage", [1], string134);
              return call135
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func133.paramCounts = [
            0,
          ];
          func133.variableArities = [
            false,
          ];
          obj131.methods["awake"] = func133;
          func133.definitionLine = 67;
          func133.definitionModule = "kitty";
          var func136 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func136.paramCounts[0])
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
          func136.paramCounts = [
            0,
          ];
          func136.variableArities = [
            false,
          ];
          obj131.methods["start"] = func136;
          func136.definitionLine = 73;
          func136.definitionModule = "kitty";
          var func137 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func137.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 79
              onSelf = true;
              var call138 = callmethod(this, "action", [0]);
              var call139 = callmethod(call138,"update", [0]);
              return call139
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func137.paramCounts = [
            0,
          ];
          func137.variableArities = [
            false,
          ];
          obj131.methods["update"] = func137;
          func137.definitionLine = 78;
          func137.definitionModule = "kitty";
          var func140 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func140.paramCounts[0])
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
          func140.paramCounts = [
            0,
          ];
          func140.variableArities = [
            false,
          ];
          obj131.methods["onDestroy"] = func140;
          func140.definitionLine = 83;
          func140.definitionModule = "kitty";
          var func141 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func141.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 88
              lineNumber = 79
              lineNumber = 88
              onSelf = true;
              var call144 = callmethod(this, "rotation", [0]);
              var prod146 = callmethod(call144, "*", [1], new GraceNum(3.14));
              var quotient148 = callmethod(prod146, "/", [1], new GraceNum(180));
              var call149 = callmethod(var_math,"cos", [1], quotient148);
              var prod152 = callmethod(var_distance, "*", [1], call149);
              onSelf = true;
              var call154 = callmethod(this, "posX", [0]);
              var opresult156 = callmethod(call154, "+", [1], prod152);
              onSelf = true;
              var call157 = callmethod(this, "posX:=", [1], opresult156);
              lineNumber = 89
              lineNumber = 79
              lineNumber = 89
              onSelf = true;
              var call160 = callmethod(this, "rotation", [0]);
              var prod162 = callmethod(call160, "*", [1], new GraceNum(3.14));
              var quotient164 = callmethod(prod162, "/", [1], new GraceNum(180));
              var call165 = callmethod(var_math,"sin", [1], quotient164);
              var prod168 = callmethod(var_distance, "*", [1], call165);
              onSelf = true;
              var call170 = callmethod(this, "posY", [0]);
              var opresult172 = callmethod(call170, "+", [1], prod168);
              onSelf = true;
              var call173 = callmethod(this, "posY:=", [1], opresult172);
              return call173
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func141.paramCounts = [
            1,
          ];
          func141.variableArities = [
            false,
          ];
          obj131.methods["move"] = func141;
          func141.definitionLine = 87;
          func141.definitionModule = "kitty";
          var func174 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func174.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 94
              lineNumber = 79
              lineNumber = 94
              lineNumber = 93
              onSelf = true;
              var call176 = callmethod(this, "rotation", [0]);
              var opresult178 = callmethod(call176, "+", [1], var_angle);
              onSelf = true;
              var call179 = callmethod(this, "rotation:=", [1], opresult178);
              return call179
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func174.paramCounts = [
            1,
          ];
          func174.variableArities = [
            false,
          ];
          obj131.methods["turn"] = func174;
          func174.definitionLine = 92;
          func174.definitionModule = "kitty";
          var func180 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func180.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveUp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 98
              lineNumber = 79
              lineNumber = 98
              lineNumber = 97
              onSelf = true;
              var call182 = callmethod(this, "posY", [0]);
              var diff184 = callmethod(call182, "-", [1], var_dy);
              onSelf = true;
              var call185 = callmethod(this, "posY:=", [1], diff184);
              return call185
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func180.paramCounts = [
            1,
          ];
          func180.variableArities = [
            false,
          ];
          obj131.methods["moveUp"] = func180;
          func180.definitionLine = 96;
          func180.definitionModule = "kitty";
          var func186 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func186.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 102
              lineNumber = 79
              lineNumber = 102
              lineNumber = 101
              onSelf = true;
              var call188 = callmethod(this, "posY", [0]);
              var opresult190 = callmethod(call188, "+", [1], var_dy);
              onSelf = true;
              var call191 = callmethod(this, "posY:=", [1], opresult190);
              return call191
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func186.paramCounts = [
            1,
          ];
          func186.variableArities = [
            false,
          ];
          obj131.methods["moveDown"] = func186;
          func186.definitionLine = 100;
          func186.definitionModule = "kitty";
          var func192 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func192.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveLeft)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 106
              lineNumber = 79
              lineNumber = 106
              lineNumber = 105
              onSelf = true;
              var call194 = callmethod(this, "posX", [0]);
              var diff196 = callmethod(call194, "-", [1], var_dx);
              onSelf = true;
              var call197 = callmethod(this, "posX:=", [1], diff196);
              return call197
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func192.paramCounts = [
            1,
          ];
          func192.variableArities = [
            false,
          ];
          obj131.methods["moveLeft"] = func192;
          func192.definitionLine = 104;
          func192.definitionModule = "kitty";
          var func198 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func198.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveRight)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 110
              lineNumber = 79
              lineNumber = 110
              lineNumber = 109
              onSelf = true;
              var call200 = callmethod(this, "posX", [0]);
              var opresult202 = callmethod(call200, "+", [1], var_dx);
              onSelf = true;
              var call203 = callmethod(this, "posX:=", [1], opresult202);
              return call203
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func198.paramCounts = [
            1,
          ];
          func198.variableArities = [
            false,
          ];
          obj131.methods["moveRight"] = func198;
          func198.definitionLine = 108;
          func198.definitionModule = "kitty";
          var func204 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func204.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 113
              var call205 = callmethod(var_ctx,"save", [0]);
              lineNumber = 114
              onSelf = true;
              var call206 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call207 = callmethod(this, "posY", [0]);
              var call208 = callmethod(var_ctx,"translate", [2], call206, call207);
              lineNumber = 115
              onSelf = true;
              var call209 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call210 = callmethod(this, "image", [0]);
              var call211 = callmethod(call210,"draw", [4], var_ctx, var_dx, var_dy, call209);
              lineNumber = 116
              var call212 = callmethod(var_ctx,"restore", [0]);
              return call212
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func204.paramCounts = [
            3,
          ];
          func204.variableArities = [
            false,
          ];
          obj131.methods["draw"] = func204;
          func204.definitionLine = 112;
          func204.definitionModule = "kitty";
          var func213 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func213.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 120
              lineNumber = 116
              lineNumber = 120
              var call214 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call215 = callmethod(call214, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call216 = callmethod(call215, "Image", [3], var_image__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call217 = callmethod(this, "image:=", [1], call216);
              return call217
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func213.paramCounts = [
            1,
          ];
          func213.variableArities = [
            false,
          ];
          obj131.methods["setImage"] = func213;
          func213.definitionLine = 119;
          func213.definitionModule = "kitty";
          var func218 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func218.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 125
              lineNumber = 120
              lineNumber = 124
              onSelf = true;
              var call219 = callmethod(this, "action:=", [1], var_action__39__);
              return call219
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func218.paramCounts = [
            1,
          ];
          func218.variableArities = [
            false,
          ];
          obj131.methods["setAction"] = func218;
          func218.definitionLine = 123;
          func218.definitionModule = "kitty";
          var func220 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func220.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 129
              lineNumber = 120
              lineNumber = 128
              onSelf = true;
              var call221 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 130
              lineNumber = 120
              lineNumber = 129
              onSelf = true;
              var call222 = callmethod(this, "posY:=", [1], var_y);
              return call222
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func220.paramCounts = [
            2,
          ];
          func220.variableArities = [
            false,
          ];
          obj131.methods["setLocation"] = func220;
          func220.definitionLine = 127;
          func220.definitionModule = "kitty";
          var func223 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func223.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 134
              lineNumber = 133
              onSelf = true;
              var call224 = callmethod(this, "posX", [0]);
              return call224
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func223.paramCounts = [
            0,
          ];
          func223.variableArities = [
            false,
          ];
          obj131.methods["getX"] = func223;
          func223.definitionLine = 132;
          func223.definitionModule = "kitty";
          var func225 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func225.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 138
              lineNumber = 137
              onSelf = true;
              var call226 = callmethod(this, "posY", [0]);
              return call226
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func225.paramCounts = [
            0,
          ];
          func225.variableArities = [
            false,
          ];
          obj131.methods["getY"] = func225;
          func225.definitionLine = 136;
          func225.definitionModule = "kitty";
          var func227 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func227.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 142
              lineNumber = 141
              onSelf = true;
              var call228 = callmethod(this, "rotation", [0]);
              return call228
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func227.paramCounts = [
            0,
          ];
          func227.variableArities = [
            false,
          ];
          obj131.methods["getRotation"] = func227;
          func227.definitionLine = 140;
          func227.definitionModule = "kitty";
          sourceObject = obj131;
          lineNumber = 52
          obj131.data["posX"] = var_x__39__;
          var reader_kitty_posX_229 = function() {
            return this.data["posX"];
          }
          obj131.methods["posX"] = reader_kitty_posX_229;
          obj131.data["posX"] = var_x__39__;
          var writer_kitty_posX_229 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj131.methods["posX:="] = writer_kitty_posX_229;
          reader_kitty_posX_229.confidential = true;
          writer_kitty_posX_229.confidential = true;
          lineNumber = 53;
          moduleName = "kitty";
          lineNumber = 52
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj131.mutable = true;
          sourceObject = obj131;
          lineNumber = 53
          obj131.data["posY"] = var_y__39__;
          var reader_kitty_posY_230 = function() {
            return this.data["posY"];
          }
          obj131.methods["posY"] = reader_kitty_posY_230;
          obj131.data["posY"] = var_y__39__;
          var writer_kitty_posY_230 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj131.methods["posY:="] = writer_kitty_posY_230;
          reader_kitty_posY_230.confidential = true;
          writer_kitty_posY_230.confidential = true;
          lineNumber = 54;
          moduleName = "kitty";
          lineNumber = 53
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj131.mutable = true;
          sourceObject = obj131;
          lineNumber = 54
          obj131.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_231 = function() {
            return this.data["rotation"];
          }
          obj131.methods["rotation"] = reader_kitty_rotation_231;
          obj131.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_231 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj131.methods["rotation:="] = writer_kitty_rotation_231;
          reader_kitty_rotation_231.confidential = true;
          writer_kitty_rotation_231.confidential = true;
          lineNumber = 56;
          moduleName = "kitty";
          lineNumber = 54
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj131.mutable = true;
          sourceObject = obj131;
          lineNumber = 56
          var obj232 = Grace_allocObject();
          obj232.definitionModule = "kitty";
          obj232.definitionLine = 56;
          obj232.outer = this;
          var reader_kitty_outer_233 = function() {
            return this.outer;
          }
          obj232.methods["outer"] = reader_kitty_outer_233;
          function obj_init_232() {
            var origSuperDepth = superDepth;
            superDepth = obj232;
            obj232.annotations = [];
            var func234 = function(argcv) {
              var curarg = 1;
              if (argcv[0] !=  func234.paramCounts[0])
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
            func234.paramCounts = [
              0,
            ];
            func234.variableArities = [
              false,
            ];
            obj232.methods["update"] = func234;
            func234.definitionLine = 57;
            func234.definitionModule = "kitty";
            sourceObject = obj232;
            superDepth = origSuperDepth;
          }
          obj_init_232.apply(obj232, []);
          obj131.data["action"] = obj232;
          var reader_kitty_action_235 = function() {
            return this.data["action"];
          }
          obj131.methods["action"] = reader_kitty_action_235;
          obj131.data["action"] = obj232;
          var writer_kitty_action_235 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj131.methods["action:="] = writer_kitty_action_235;
          reader_kitty_action_235.confidential = true;
          writer_kitty_action_235.confidential = true;
          lineNumber = 56;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], obj232)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj131.mutable = true;
          sourceObject = obj131;
          obj131.data["image"] = undefined;
          var reader_kitty_image_236 = function() {
            return this.data["image"];
          }
          obj131.methods["image"] = reader_kitty_image_236;
          obj131.data["image"] = undefined;
          var writer_kitty_image_236 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj131.methods["image:="] = writer_kitty_image_236;
          reader_kitty_image_236.confidential = true;
          writer_kitty_image_236.confidential = true;
          obj131.mutable = true;
          sourceObject = obj131;
          lineNumber = 64
          onSelf = true;
          var call237 = callmethod(this, "awake", [0]);
          sourceObject = obj131;
          sourceObject = obj131;
          sourceObject = obj131;
          sourceObject = obj131;
          sourceObject = obj131;
          sourceObject = obj131;
          sourceObject = obj131;
          sourceObject = obj131;
          sourceObject = obj131;
          sourceObject = obj131;
          sourceObject = obj131;
          sourceObject = obj131;
          sourceObject = obj131;
          sourceObject = obj131;
          sourceObject = obj131;
          sourceObject = obj131;
          sourceObject = obj131;
          superDepth = origSuperDepth;
        }
        obj_init_131.apply(obj131, []);
        return obj131
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func130.paramCounts = [
      2,
    ];
    func130.variableArities = [
      false,
    ];
    obj128.methods["new"] = func130;
    func130.definitionLine = 48;
    func130.definitionModule = "kitty";
    var func238 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj239 = Grace_allocObject();
        obj239.definitionModule = "kitty";
        obj239.definitionLine = 48;
        var inho239 = inheritingObject;
        while (inho239.superobj) inho239 = inho239.superobj;
        inho239.superobj = obj239;
        obj239.data = inheritingObject.data;
        obj239.outer = this;
        var reader_kitty_outer_240 = function() {
          return this.outer;
        }
        obj239.methods["outer"] = reader_kitty_outer_240;
        function obj_init_239() {
          var origSuperDepth = superDepth;
          superDepth = obj239;
          obj239.annotations = [];
          var func241 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func241.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 69
              var string242 = new GraceString("realyee.png");
              onSelf = true;
              var call243 = callmethod(this, "setImage", [1], string242);
              return call243
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
          obj239.methods["awake"] = func241;
          func241.definitionLine = 67;
          func241.definitionModule = "kitty";
          var func244 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func244.paramCounts[0])
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
          func244.paramCounts = [
            0,
          ];
          func244.variableArities = [
            false,
          ];
          obj239.methods["start"] = func244;
          func244.definitionLine = 73;
          func244.definitionModule = "kitty";
          var func245 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func245.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 79
              onSelf = true;
              var call246 = callmethod(this, "action", [0]);
              var call247 = callmethod(call246,"update", [0]);
              return call247
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
          obj239.methods["update"] = func245;
          func245.definitionLine = 78;
          func245.definitionModule = "kitty";
          var func248 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func248.paramCounts[0])
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
          func248.paramCounts = [
            0,
          ];
          func248.variableArities = [
            false,
          ];
          obj239.methods["onDestroy"] = func248;
          func248.definitionLine = 83;
          func248.definitionModule = "kitty";
          var func249 = function(argcv) {
            var curarg = 1;
            var var_distance = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func249.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 88
              lineNumber = 79
              lineNumber = 88
              onSelf = true;
              var call252 = callmethod(this, "rotation", [0]);
              var prod254 = callmethod(call252, "*", [1], new GraceNum(3.14));
              var quotient256 = callmethod(prod254, "/", [1], new GraceNum(180));
              var call257 = callmethod(var_math,"cos", [1], quotient256);
              var prod260 = callmethod(var_distance, "*", [1], call257);
              onSelf = true;
              var call262 = callmethod(this, "posX", [0]);
              var opresult264 = callmethod(call262, "+", [1], prod260);
              onSelf = true;
              var call265 = callmethod(this, "posX:=", [1], opresult264);
              lineNumber = 89
              lineNumber = 79
              lineNumber = 89
              onSelf = true;
              var call268 = callmethod(this, "rotation", [0]);
              var prod270 = callmethod(call268, "*", [1], new GraceNum(3.14));
              var quotient272 = callmethod(prod270, "/", [1], new GraceNum(180));
              var call273 = callmethod(var_math,"sin", [1], quotient272);
              var prod276 = callmethod(var_distance, "*", [1], call273);
              onSelf = true;
              var call278 = callmethod(this, "posY", [0]);
              var opresult280 = callmethod(call278, "+", [1], prod276);
              onSelf = true;
              var call281 = callmethod(this, "posY:=", [1], opresult280);
              return call281
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func249.paramCounts = [
            1,
          ];
          func249.variableArities = [
            false,
          ];
          obj239.methods["move"] = func249;
          func249.definitionLine = 87;
          func249.definitionModule = "kitty";
          var func282 = function(argcv) {
            var curarg = 1;
            var var_angle = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func282.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 94
              lineNumber = 79
              lineNumber = 94
              lineNumber = 93
              onSelf = true;
              var call284 = callmethod(this, "rotation", [0]);
              var opresult286 = callmethod(call284, "+", [1], var_angle);
              onSelf = true;
              var call287 = callmethod(this, "rotation:=", [1], opresult286);
              return call287
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func282.paramCounts = [
            1,
          ];
          func282.variableArities = [
            false,
          ];
          obj239.methods["turn"] = func282;
          func282.definitionLine = 92;
          func282.definitionModule = "kitty";
          var func288 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func288.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveUp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 98
              lineNumber = 79
              lineNumber = 98
              lineNumber = 97
              onSelf = true;
              var call290 = callmethod(this, "posY", [0]);
              var diff292 = callmethod(call290, "-", [1], var_dy);
              onSelf = true;
              var call293 = callmethod(this, "posY:=", [1], diff292);
              return call293
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func288.paramCounts = [
            1,
          ];
          func288.variableArities = [
            false,
          ];
          obj239.methods["moveUp"] = func288;
          func288.definitionLine = 96;
          func288.definitionModule = "kitty";
          var func294 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func294.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 102
              lineNumber = 79
              lineNumber = 102
              lineNumber = 101
              onSelf = true;
              var call296 = callmethod(this, "posY", [0]);
              var opresult298 = callmethod(call296, "+", [1], var_dy);
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
          func294.paramCounts = [
            1,
          ];
          func294.variableArities = [
            false,
          ];
          obj239.methods["moveDown"] = func294;
          func294.definitionLine = 100;
          func294.definitionModule = "kitty";
          var func300 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func300.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveLeft)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 106
              lineNumber = 79
              lineNumber = 106
              lineNumber = 105
              onSelf = true;
              var call302 = callmethod(this, "posX", [0]);
              var diff304 = callmethod(call302, "-", [1], var_dx);
              onSelf = true;
              var call305 = callmethod(this, "posX:=", [1], diff304);
              return call305
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
          obj239.methods["moveLeft"] = func300;
          func300.definitionLine = 104;
          func300.definitionModule = "kitty";
          var func306 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func306.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveRight)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 110
              lineNumber = 79
              lineNumber = 110
              lineNumber = 109
              onSelf = true;
              var call308 = callmethod(this, "posX", [0]);
              var opresult310 = callmethod(call308, "+", [1], var_dx);
              onSelf = true;
              var call311 = callmethod(this, "posX:=", [1], opresult310);
              return call311
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func306.paramCounts = [
            1,
          ];
          func306.variableArities = [
            false,
          ];
          obj239.methods["moveRight"] = func306;
          func306.definitionLine = 108;
          func306.definitionModule = "kitty";
          var func312 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func312.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 113
              var call313 = callmethod(var_ctx,"save", [0]);
              lineNumber = 114
              onSelf = true;
              var call314 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call315 = callmethod(this, "posY", [0]);
              var call316 = callmethod(var_ctx,"translate", [2], call314, call315);
              lineNumber = 115
              onSelf = true;
              var call317 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call318 = callmethod(this, "image", [0]);
              var call319 = callmethod(call318,"draw", [4], var_ctx, var_dx, var_dy, call317);
              lineNumber = 116
              var call320 = callmethod(var_ctx,"restore", [0]);
              return call320
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func312.paramCounts = [
            3,
          ];
          func312.variableArities = [
            false,
          ];
          obj239.methods["draw"] = func312;
          func312.definitionLine = 112;
          func312.definitionModule = "kitty";
          var func321 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func321.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 120
              lineNumber = 116
              lineNumber = 120
              var call322 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call323 = callmethod(call322, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call324 = callmethod(call323, "Image", [3], var_image__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call325 = callmethod(this, "image:=", [1], call324);
              return call325
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func321.paramCounts = [
            1,
          ];
          func321.variableArities = [
            false,
          ];
          obj239.methods["setImage"] = func321;
          func321.definitionLine = 119;
          func321.definitionModule = "kitty";
          var func326 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func326.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 125
              lineNumber = 120
              lineNumber = 124
              onSelf = true;
              var call327 = callmethod(this, "action:=", [1], var_action__39__);
              return call327
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func326.paramCounts = [
            1,
          ];
          func326.variableArities = [
            false,
          ];
          obj239.methods["setAction"] = func326;
          func326.definitionLine = 123;
          func326.definitionModule = "kitty";
          var func328 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func328.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 129
              lineNumber = 120
              lineNumber = 128
              onSelf = true;
              var call329 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 130
              lineNumber = 120
              lineNumber = 129
              onSelf = true;
              var call330 = callmethod(this, "posY:=", [1], var_y);
              return call330
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func328.paramCounts = [
            2,
          ];
          func328.variableArities = [
            false,
          ];
          obj239.methods["setLocation"] = func328;
          func328.definitionLine = 127;
          func328.definitionModule = "kitty";
          var func331 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func331.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 134
              lineNumber = 133
              onSelf = true;
              var call332 = callmethod(this, "posX", [0]);
              return call332
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func331.paramCounts = [
            0,
          ];
          func331.variableArities = [
            false,
          ];
          obj239.methods["getX"] = func331;
          func331.definitionLine = 132;
          func331.definitionModule = "kitty";
          var func333 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func333.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 138
              lineNumber = 137
              onSelf = true;
              var call334 = callmethod(this, "posY", [0]);
              return call334
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func333.paramCounts = [
            0,
          ];
          func333.variableArities = [
            false,
          ];
          obj239.methods["getY"] = func333;
          func333.definitionLine = 136;
          func333.definitionModule = "kitty";
          var func335 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func335.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 142
              lineNumber = 141
              onSelf = true;
              var call336 = callmethod(this, "rotation", [0]);
              return call336
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func335.paramCounts = [
            0,
          ];
          func335.variableArities = [
            false,
          ];
          obj239.methods["getRotation"] = func335;
          func335.definitionLine = 140;
          func335.definitionModule = "kitty";
          sourceObject = obj239;
          lineNumber = 52
          obj239.data["posX"] = var_x__39__;
          var reader_kitty_posX_337 = function() {
            return this.data["posX"];
          }
          obj239.methods["posX"] = reader_kitty_posX_337;
          obj239.data["posX"] = var_x__39__;
          var writer_kitty_posX_337 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj239.methods["posX:="] = writer_kitty_posX_337;
          reader_kitty_posX_337.confidential = true;
          writer_kitty_posX_337.confidential = true;
          lineNumber = 53;
          moduleName = "kitty";
          lineNumber = 52
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj239.mutable = true;
          sourceObject = obj239;
          lineNumber = 53
          obj239.data["posY"] = var_y__39__;
          var reader_kitty_posY_338 = function() {
            return this.data["posY"];
          }
          obj239.methods["posY"] = reader_kitty_posY_338;
          obj239.data["posY"] = var_y__39__;
          var writer_kitty_posY_338 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj239.methods["posY:="] = writer_kitty_posY_338;
          reader_kitty_posY_338.confidential = true;
          writer_kitty_posY_338.confidential = true;
          lineNumber = 54;
          moduleName = "kitty";
          lineNumber = 53
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj239.mutable = true;
          sourceObject = obj239;
          lineNumber = 54
          obj239.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_339 = function() {
            return this.data["rotation"];
          }
          obj239.methods["rotation"] = reader_kitty_rotation_339;
          obj239.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_339 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj239.methods["rotation:="] = writer_kitty_rotation_339;
          reader_kitty_rotation_339.confidential = true;
          writer_kitty_rotation_339.confidential = true;
          lineNumber = 56;
          moduleName = "kitty";
          lineNumber = 54
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj239.mutable = true;
          sourceObject = obj239;
          lineNumber = 56
          var obj340 = Grace_allocObject();
          obj340.definitionModule = "kitty";
          obj340.definitionLine = 56;
          obj340.outer = this;
          var reader_kitty_outer_341 = function() {
            return this.outer;
          }
          obj340.methods["outer"] = reader_kitty_outer_341;
          function obj_init_340() {
            var origSuperDepth = superDepth;
            superDepth = obj340;
            obj340.annotations = [];
            var func342 = function(argcv) {
              var curarg = 1;
              if (argcv[0] !=  func342.paramCounts[0])
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
            func342.paramCounts = [
              0,
            ];
            func342.variableArities = [
              false,
            ];
            obj340.methods["update"] = func342;
            func342.definitionLine = 57;
            func342.definitionModule = "kitty";
            sourceObject = obj340;
            superDepth = origSuperDepth;
          }
          obj_init_340.apply(obj340, []);
          obj239.data["action"] = obj340;
          var reader_kitty_action_343 = function() {
            return this.data["action"];
          }
          obj239.methods["action"] = reader_kitty_action_343;
          obj239.data["action"] = obj340;
          var writer_kitty_action_343 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj239.methods["action:="] = writer_kitty_action_343;
          reader_kitty_action_343.confidential = true;
          writer_kitty_action_343.confidential = true;
          lineNumber = 56;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], obj340)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj239.mutable = true;
          sourceObject = obj239;
          obj239.data["image"] = undefined;
          var reader_kitty_image_344 = function() {
            return this.data["image"];
          }
          obj239.methods["image"] = reader_kitty_image_344;
          obj239.data["image"] = undefined;
          var writer_kitty_image_344 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj239.methods["image:="] = writer_kitty_image_344;
          reader_kitty_image_344.confidential = true;
          writer_kitty_image_344.confidential = true;
          obj239.mutable = true;
          sourceObject = obj239;
          lineNumber = 64
          onSelf = true;
          var call345 = callmethod(this, "awake", [0]);
          sourceObject = obj239;
          sourceObject = obj239;
          sourceObject = obj239;
          sourceObject = obj239;
          sourceObject = obj239;
          sourceObject = obj239;
          sourceObject = obj239;
          sourceObject = obj239;
          sourceObject = obj239;
          sourceObject = obj239;
          sourceObject = obj239;
          sourceObject = obj239;
          sourceObject = obj239;
          sourceObject = obj239;
          sourceObject = obj239;
          sourceObject = obj239;
          sourceObject = obj239;
          superDepth = origSuperDepth;
        }
        obj_init_239.apply(inheritingObject, []);
        return obj239
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj128.methods["new()object"] = func238;
    var func346 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 48
        var string347 = new GraceString("class KittyEntity");
        return string347
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func346.paramCounts = [
    ];
    func346.variableArities = [
    ];
    obj128.methods["asDebugString"] = func346;
    func346.definitionLine = 48;
    func346.definitionModule = "kitty";
    sourceObject = obj128;
    sourceObject = obj128;
    superDepth = origSuperDepth;
  }
  obj_init_128.apply(obj128, []);
  var var_KittyEntity = obj128;
  lineNumber = 147
  lineNumber = 154
  var func348 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func348.paramCounts[0])
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
  func348.paramCounts = [
    0,
  ];
  func348.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func348;
  func348.definitionLine = 154;
  func348.definitionModule = "kitty";
  var obj349 = Grace_allocObject();
  obj349.definitionModule = "kitty";
  obj349.definitionLine = 154;
  obj349.outer = this;
  var reader_kitty_outer_350 = function() {
    return this.outer;
  }
  obj349.methods["outer"] = reader_kitty_outer_350;
  function obj_init_349() {
    var origSuperDepth = superDepth;
    superDepth = obj349;
    obj349.annotations = [];
    var func351 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func351.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj352 = Grace_allocObject();
        obj352.definitionModule = "kitty";
        obj352.definitionLine = 154;
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
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 190
              var if355 = var_done;
              lineNumber = 186
              onSelf = true;
              var call356 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call356)) {
                lineNumber = 188
                lineNumber = 187
                var bool357 = new GraceBoolean(false)
                return bool357
              }
              lineNumber = 191
              lineNumber = 154
              lineNumber = 190
              var call358 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call359 = callmethod(this, "document:=", [1], call358);
              lineNumber = 191
              lineNumber = 190
              lineNumber = 191
              var string360 = new GraceString("standard-canvas");
              onSelf = true;
              var call361 = callmethod(this, "document", [0]);
              var call362 = callmethod(call361,"getElementById", [1], string360);
              onSelf = true;
              var call363 = callmethod(this, "canvas:=", [1], call362);
              lineNumber = 193
              lineNumber = 190
              lineNumber = 192
              onSelf = true;
              var call364 = callmethod(this, "canvas", [0]);
              var call365 = callmethod(call364,"width", [0]);
              onSelf = true;
              var call366 = callmethod(this, "canvasWidth:=", [1], call365);
              lineNumber = 196
              lineNumber = 192
              lineNumber = 193
              onSelf = true;
              var call367 = callmethod(this, "canvas", [0]);
              var call368 = callmethod(call367,"height", [0]);
              onSelf = true;
              var call369 = callmethod(this, "canvasHeight:=", [1], call368);
              lineNumber = 208
              var block370 = Grace_allocObject();
              block370.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block370.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block370.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block370.methods["match"] = GraceBlock_match;
              block370.methods["prefix?"] = GraceBlock_lift;
              block370.receiver = this;
              block370.className = 'block<kitty:208>';
              block370.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 199
                lineNumber = 198
                onSelf = true;
                var call371 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call373 = callmethod(this, "canvas", [0]);
                var call374 = callmethod(call373,"offsetWidth", [0]);
                onSelf = true;
                var call376 = callmethod(this, "canvas", [0]);
                var call377 = callmethod(call376,"offsetLeft", [0]);
                var call379 = callmethod(var_ev,"clientX", [0]);
                var diff381 = callmethod(call379, "-", [1], call377);
                var quotient383 = callmethod(diff381, "/", [1], call374);
                var prod385 = callmethod(quotient383, "*", [1], call371);
                var var_x = prod385;
                lineNumber = 199;
                moduleName = "kitty";
                lineNumber = 198
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 203
                lineNumber = 199
                onSelf = true;
                var call386 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call388 = callmethod(this, "canvas", [0]);
                var call389 = callmethod(call388,"offsetHeight", [0]);
                onSelf = true;
                var call391 = callmethod(this, "canvas", [0]);
                var call392 = callmethod(call391,"offsetTop", [0]);
                var call394 = callmethod(var_ev,"clientY", [0]);
                var diff396 = callmethod(call394, "-", [1], call392);
                var quotient398 = callmethod(diff396, "/", [1], call389);
                var prod400 = callmethod(quotient398, "*", [1], call386);
                var var_y = prod400;
                lineNumber = 203;
                moduleName = "kitty";
                lineNumber = 199
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 207
                var if401 = var_done;
                lineNumber = 203
                var opresult404 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call407 = callmethod(this, "canvasWidth", [0]);
                var diff409 = callmethod(call407, "-", [1], new GraceNum(20));
                var opresult412 = callmethod(var_x, ">", [1], diff409);
                var opresult414 = callmethod(opresult412, "&&", [1], opresult404);
                if (Grace_isTrue(opresult414)) {
                  lineNumber = 204
                  var call415 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 205
                  onSelf = true;
                  var call416 = callmethod(this, "stop", [0]);
                  if401 = call416;
                }
                return if401;
              };
              var_mouseDownListener = block370;
              lineNumber = 208
              var string417 = new GraceString("mousedown");
              onSelf = true;
              var call418 = callmethod(this, "canvas", [0]);
              var call419 = callmethod(call418,"addEventListener", [2], string417, var_mouseDownListener);
              lineNumber = 218
              var block420 = Grace_allocObject();
              block420.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block420.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block420.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block420.methods["match"] = GraceBlock_match;
              block420.methods["prefix?"] = GraceBlock_lift;
              block420.receiver = this;
              block420.className = 'block<kitty:218>';
              block420.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 216
                var if421 = var_done;
                lineNumber = 213
                var call423 = callmethod(var_ev,"keyCode", [0]);
                var opresult425 = callmethod(call423, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult425)) {
                  lineNumber = 214
                  onSelf = true;
                  var call426 = callmethod(this, "stop", [0]);
                  if421 = call426;
                }
                lineNumber = 217
                lineNumber = 213
                lineNumber = 216
                var call427 = callmethod(var_ev,"keyCode", [0]);
                onSelf = true;
                var call428 = callmethod(this, "currentKeyDown:=", [1], call427);
                return call428;
              };
              var_keyDownListener = block420;
              lineNumber = 218
              var string429 = new GraceString("keydown");
              onSelf = true;
              var call430 = callmethod(this, "document", [0]);
              var call431 = callmethod(call430,"addEventListener", [2], string429, var_keyDownListener);
              lineNumber = 224
              var block432 = Grace_allocObject();
              block432.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block432.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block432.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block432.methods["match"] = GraceBlock_match;
              block432.methods["prefix?"] = GraceBlock_lift;
              block432.receiver = this;
              block432.className = 'block<kitty:224>';
              block432.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 223
                lineNumber = 216
                lineNumber = 223
                lineNumber = 222
                var call433 = callmethod(new GraceNum(1),"prefix-", [0]);
                onSelf = true;
                var call434 = callmethod(this, "currentKeyDown:=", [1], call433);
                return call434;
              };
              var_keyUpListener = block432;
              lineNumber = 224
              var string435 = new GraceString("keyup");
              onSelf = true;
              var call436 = callmethod(this, "document", [0]);
              var call437 = callmethod(call436,"addEventListener", [2], string435, var_keyUpListener);
              lineNumber = 226
              lineNumber = 216
              lineNumber = 226
              var string438 = new GraceString("canvas");
              var call439 = callmethod(var_dom,"document", [0]);
              var call440 = callmethod(call439,"createElement", [1], string438);
              onSelf = true;
              var call441 = callmethod(this, "backingCanvas:=", [1], call440);
              lineNumber = 228
              lineNumber = 226
              lineNumber = 227
              onSelf = true;
              var call442 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call443 = callmethod(this, "backingCanvas", [0]);
              var call444 = callmethod(call443,"height:=", [1], call442);
              lineNumber = 229
              lineNumber = 226
              lineNumber = 228
              onSelf = true;
              var call445 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call446 = callmethod(this, "backingCanvas", [0]);
              var call447 = callmethod(call446,"width:=", [1], call445);
              lineNumber = 229
              lineNumber = 226
              lineNumber = 229
              var string448 = new GraceString("2d");
              onSelf = true;
              var call449 = callmethod(this, "backingCanvas", [0]);
              var call450 = callmethod(call449,"getContext", [1], string448);
              onSelf = true;
              var call451 = callmethod(this, "backingContext:=", [1], call450);
              lineNumber = 230
              lineNumber = 226
              lineNumber = 230
              var string452 = new GraceString("2d");
              onSelf = true;
              var call453 = callmethod(this, "canvas", [0]);
              var call454 = callmethod(call453,"getContext", [1], string452);
              onSelf = true;
              var call455 = callmethod(this, "mctx:=", [1], call454);
              lineNumber = 233
              var string456 = new GraceString("doggo.jpg");
              onSelf = true;
              var call457 = callmethod(this, "setBackground", [1], string456);
              lineNumber = 241
              lineNumber = 226
              lineNumber = 235
              var bool458 = new GraceBoolean(true)
              onSelf = true;
              var call459 = callmethod(this, "isInit:=", [1], bool458);
              return call459
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
          obj352.methods["init"] = func354;
          func354.definitionLine = 182;
          func354.definitionModule = "kitty";
          var func460 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func460.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 247
              lineNumber = 226
              lineNumber = 246
              var bool461 = new GraceBoolean(true)
              onSelf = true;
              var call462 = callmethod(this, "isRunning:=", [1], bool461);
              lineNumber = 247
              var block463 = Grace_allocObject();
              block463.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block463.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block463.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block463.methods["match"] = GraceBlock_match;
              block463.methods["prefix?"] = GraceBlock_lift;
              block463.receiver = this;
              block463.className = 'block<kitty:247>';
              block463.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call464 = callmethod(this, "isRunning", [0]);
                return call464;
              };
              lineNumber = 251
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
              block465.className = 'block<kitty:251>';
              block465.real = function(
              ) {
                sourceObject = this;
                lineNumber = 248
                onSelf = true;
                var call466 = callmethod(this, "update", [0]);
                return call466;
              };
              lineNumber = 247
              var call467 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block463, new GraceNum(10), block465);
              return call467
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func460.paramCounts = [
            0,
          ];
          func460.variableArities = [
            false,
          ];
          obj352.methods["start"] = func460;
          func460.definitionLine = 244;
          func460.definitionModule = "kitty";
          var func468 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func468.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 260
              lineNumber = 226
              lineNumber = 259
              onSelf = true;
              var call469 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call470 = callmethod(this, "mctx", [0]);
              var call471 = callmethod(call470,"fillStyle:=", [1], call469);
              lineNumber = 260
              onSelf = true;
              var call472 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call473 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call474 = callmethod(this, "mctx", [0]);
              var call475 = callmethod(call474,"fillRect", [4], new GraceNum(0), new GraceNum(0), call472, call473);
              lineNumber = 261
              onSelf = true;
              var call476 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call477 = callmethod(this, "mctx", [0]);
              var call478 = callmethod(call477,"drawImage", [3], call476, new GraceNum(0), new GraceNum(0));
              lineNumber = 262
              onSelf = true;
              var call479 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call481 = callmethod(this, "canvasWidth", [0]);
              var quotient483 = callmethod(call481, "/", [1], new GraceNum(2));
              onSelf = true;
              var call485 = callmethod(this, "canvasHeight", [0]);
              var quotient487 = callmethod(call485, "/", [1], new GraceNum(2));
              onSelf = true;
              var call488 = callmethod(this, "background", [0]);
              var call489 = callmethod(call488,"draw", [4], call479, quotient483, quotient487, new GraceNum(0));
              lineNumber = 265
              onSelf = true;
              var call490 = callmethod(this, "entities", [0]);
              lineNumber = 271
              var block491 = Grace_allocObject();
              block491.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block491.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block491.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block491.methods["match"] = GraceBlock_match;
              block491.methods["prefix?"] = GraceBlock_lift;
              block491.receiver = this;
              block491.className = 'block<kitty:271>';
              block491.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 266
                var call492 = callmethod(var_entity,"update", [0]);
                lineNumber = 267
                onSelf = true;
                var call493 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call495 = callmethod(this, "canvasWidth", [0]);
                var quotient497 = callmethod(call495, "/", [1], new GraceNum(2));
                onSelf = true;
                var call499 = callmethod(this, "canvasHeight", [0]);
                var quotient501 = callmethod(call499, "/", [1], new GraceNum(2));
                var call502 = callmethod(var_entity,"draw", [3], call493, quotient497, quotient501);
                return call502;
              };
              var call503 = callmethod(Grace_prelude,"for()do", [1, 1], call490, block491);
              return call503
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func468.paramCounts = [
            0,
          ];
          func468.variableArities = [
            false,
          ];
          obj352.methods["update"] = func468;
          func468.definitionLine = 254;
          func468.definitionModule = "kitty";
          var func504 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func504.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 274
              var string505 = new GraceString("WORLD STOPPING...");
              var call506 = Grace_print(string505);
              lineNumber = 276
              lineNumber = 266
              lineNumber = 275
              var bool507 = new GraceBoolean(false)
              onSelf = true;
              var call508 = callmethod(this, "isRunning:=", [1], bool507);
              lineNumber = 276
              var string509 = new GraceString("mousedown");
              onSelf = true;
              var call510 = callmethod(this, "canvas", [0]);
              var call511 = callmethod(call510,"removeEventListener", [2], string509, var_mouseDownListener);
              lineNumber = 277
              var string512 = new GraceString("keydown");
              onSelf = true;
              var call513 = callmethod(this, "document", [0]);
              var call514 = callmethod(call513,"removeEventListener", [2], string512, var_keyDownListener);
              lineNumber = 278
              var string515 = new GraceString("keyup");
              onSelf = true;
              var call516 = callmethod(this, "document", [0]);
              var call517 = callmethod(call516,"removeEventListener", [2], string515, var_keyUpListener);
              return call517
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func504.paramCounts = [
            0,
          ];
          func504.variableArities = [
            false,
          ];
          obj352.methods["stop"] = func504;
          func504.definitionLine = 273;
          func504.definitionModule = "kitty";
          var func518 = function(argcv) {
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func518.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isKeyDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 283
              lineNumber = 282
              onSelf = true;
              var call519 = callmethod(this, "currentKeyDown", [0]);
              var opresult522 = callmethod(var_key, "==", [1], call519);
              return opresult522
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func518.paramCounts = [
            1,
          ];
          func518.variableArities = [
            false,
          ];
          obj352.methods["isKeyDown"] = func518;
          func518.definitionLine = 281;
          func518.definitionModule = "kitty";
          var func523 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func523.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 286
              lineNumber = 266
              lineNumber = 286
              onSelf = true;
              var call524 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call525 = callmethod(this, "canvasHeight", [0]);
              var call526 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call527 = callmethod(call526, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call528 = callmethod(call527, "Image", [3], var_background__39__, call524, call525);
              onSelf = true;
              var call529 = callmethod(this, "background:=", [1], call528);
              return call529
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func523.paramCounts = [
            1,
          ];
          func523.variableArities = [
            false,
          ];
          obj352.methods["setBackground"] = func523;
          func523.definitionLine = 285;
          func523.definitionModule = "kitty";
          var func530 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func530.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 290
              onSelf = true;
              var call531 = callmethod(this, "entities", [0]);
              var call532 = callmethod(call531,"push", [1], var_e);
              return call532
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func530.paramTypes = [];
          func530.paramTypes.push([]);
          func530.paramCounts = [
            1,
          ];
          func530.variableArities = [
            false,
          ];
          obj352.methods["addEntity"] = func530;
          func530.definitionLine = 289;
          func530.definitionModule = "kitty";
          sourceObject = obj352;
          obj352.data["background"] = undefined;
          var reader_kitty_background_533 = function() {
            return this.data["background"];
          }
          obj352.methods["background"] = reader_kitty_background_533;
          obj352.data["background"] = undefined;
          var writer_kitty_background_533 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj352.methods["background:="] = writer_kitty_background_533;
          reader_kitty_background_533.confidential = true;
          writer_kitty_background_533.confidential = true;
          obj352.mutable = true;
          sourceObject = obj352;
          lineNumber = 159
          var string534 = new GraceString("black");
          obj352.data["backgroundColour"] = string534;
          var reader_kitty_backgroundColour_535 = function() {
            return this.data["backgroundColour"];
          }
          obj352.methods["backgroundColour"] = reader_kitty_backgroundColour_535;
          obj352.data["backgroundColour"] = string534;
          var writer_kitty_backgroundColour_535 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj352.methods["backgroundColour:="] = writer_kitty_backgroundColour_535;
          reader_kitty_backgroundColour_535.confidential = true;
          writer_kitty_backgroundColour_535.confidential = true;
          lineNumber = 161;
          moduleName = "kitty";
          lineNumber = 159
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string534)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj352.mutable = true;
          sourceObject = obj352;
          obj352.data["document"] = undefined;
          var reader_kitty_document_536 = function() {
            return this.data["document"];
          }
          obj352.methods["document"] = reader_kitty_document_536;
          obj352.data["document"] = undefined;
          var writer_kitty_document_536 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj352.methods["document:="] = writer_kitty_document_536;
          reader_kitty_document_536.confidential = true;
          writer_kitty_document_536.confidential = true;
          obj352.mutable = true;
          sourceObject = obj352;
          obj352.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_537 = function() {
            return this.data["backingCanvas"];
          }
          obj352.methods["backingCanvas"] = reader_kitty_backingCanvas_537;
          obj352.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_537 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj352.methods["backingCanvas:="] = writer_kitty_backingCanvas_537;
          reader_kitty_backingCanvas_537.confidential = true;
          writer_kitty_backingCanvas_537.confidential = true;
          obj352.mutable = true;
          sourceObject = obj352;
          obj352.data["backingContext"] = undefined;
          var reader_kitty_backingContext_538 = function() {
            return this.data["backingContext"];
          }
          obj352.methods["backingContext"] = reader_kitty_backingContext_538;
          obj352.data["backingContext"] = undefined;
          var writer_kitty_backingContext_538 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj352.methods["backingContext:="] = writer_kitty_backingContext_538;
          reader_kitty_backingContext_538.confidential = true;
          writer_kitty_backingContext_538.confidential = true;
          obj352.mutable = true;
          sourceObject = obj352;
          obj352.data["canvas"] = undefined;
          var reader_kitty_canvas_539 = function() {
            return this.data["canvas"];
          }
          obj352.methods["canvas"] = reader_kitty_canvas_539;
          obj352.data["canvas"] = undefined;
          var writer_kitty_canvas_539 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj352.methods["canvas:="] = writer_kitty_canvas_539;
          reader_kitty_canvas_539.confidential = true;
          writer_kitty_canvas_539.confidential = true;
          obj352.mutable = true;
          sourceObject = obj352;
          obj352.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_540 = function() {
            return this.data["canvasWidth"];
          }
          obj352.methods["canvasWidth"] = reader_kitty_canvasWidth_540;
          obj352.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_540 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj352.methods["canvasWidth:="] = writer_kitty_canvasWidth_540;
          reader_kitty_canvasWidth_540.confidential = true;
          writer_kitty_canvasWidth_540.confidential = true;
          obj352.mutable = true;
          sourceObject = obj352;
          obj352.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_541 = function() {
            return this.data["canvasHeight"];
          }
          obj352.methods["canvasHeight"] = reader_kitty_canvasHeight_541;
          obj352.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_541 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj352.methods["canvasHeight:="] = writer_kitty_canvasHeight_541;
          reader_kitty_canvasHeight_541.confidential = true;
          writer_kitty_canvasHeight_541.confidential = true;
          obj352.mutable = true;
          sourceObject = obj352;
          lineNumber = 170
          var call542 = callmethod(var_collections,"list", [0]);
          var call543 = callmethod(call542,"new", [0]);
          obj352.data["entities"] = call543;
          var reader_kitty_entities_544 = function() {
            return this.data["entities"];
          }
          obj352.methods["entities"] = reader_kitty_entities_544;
          obj352.data["entities"] = call543;
          var writer_kitty_entities_544 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj352.methods["entities:="] = writer_kitty_entities_544;
          reader_kitty_entities_544.confidential = true;
          writer_kitty_entities_544.confidential = true;
          lineNumber = 172;
          moduleName = "kitty";
          lineNumber = 170
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call543)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj352.mutable = true;
          sourceObject = obj352;
          lineNumber = 172
          var bool545 = new GraceBoolean(false)
          obj352.data["isInit"] = bool545;
          var reader_kitty_isInit_546 = function() {
            return this.data["isInit"];
          }
          obj352.methods["isInit"] = reader_kitty_isInit_546;
          obj352.data["isInit"] = bool545;
          var writer_kitty_isInit_546 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj352.methods["isInit:="] = writer_kitty_isInit_546;
          reader_kitty_isInit_546.confidential = true;
          writer_kitty_isInit_546.confidential = true;
          lineNumber = 173;
          moduleName = "kitty";
          lineNumber = 172
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool545)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj352.mutable = true;
          sourceObject = obj352;
          lineNumber = 173
          var bool547 = new GraceBoolean(false)
          obj352.data["isRunning"] = bool547;
          var reader_kitty_isRunning_548 = function() {
            return this.data["isRunning"];
          }
          obj352.methods["isRunning"] = reader_kitty_isRunning_548;
          obj352.data["isRunning"] = bool547;
          var writer_kitty_isRunning_548 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj352.methods["isRunning:="] = writer_kitty_isRunning_548;
          reader_kitty_isRunning_548.confidential = true;
          writer_kitty_isRunning_548.confidential = true;
          lineNumber = 175;
          moduleName = "kitty";
          lineNumber = 173
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool547)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj352.mutable = true;
          sourceObject = obj352;
          obj352.data["mctx"] = undefined;
          var reader_kitty_mctx_549 = function() {
            return this.data["mctx"];
          }
          obj352.methods["mctx"] = reader_kitty_mctx_549;
          obj352.data["mctx"] = undefined;
          var writer_kitty_mctx_549 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj352.methods["mctx:="] = writer_kitty_mctx_549;
          reader_kitty_mctx_549.confidential = true;
          writer_kitty_mctx_549.confidential = true;
          obj352.mutable = true;
          sourceObject = obj352;
          lineNumber = 179
          lineNumber = 177
          var call550 = callmethod(new GraceNum(1),"prefix-", [0]);
          obj352.data["currentKeyDown"] = call550;
          var reader_kitty_currentKeyDown_551 = function() {
            return this.data["currentKeyDown"];
          }
          obj352.methods["currentKeyDown"] = reader_kitty_currentKeyDown_551;
          obj352.data["currentKeyDown"] = call550;
          var writer_kitty_currentKeyDown_551 = function(argcv, o) {
            this.data["currentKeyDown"] = o;
          }
          obj352.methods["currentKeyDown:="] = writer_kitty_currentKeyDown_551;
          reader_kitty_currentKeyDown_551.confidential = true;
          writer_kitty_currentKeyDown_551.confidential = true;
          lineNumber = 179;
          moduleName = "kitty";
          lineNumber = 177
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call550)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'currentKeyDown' to be of type Unknown"))
          obj352.mutable = true;
          sourceObject = obj352;
          lineNumber = 179
          onSelf = true;
          var call552 = callmethod(this, "init", [0]);
          sourceObject = obj352;
          sourceObject = obj352;
          sourceObject = obj352;
          sourceObject = obj352;
          sourceObject = obj352;
          sourceObject = obj352;
          sourceObject = obj352;
          superDepth = origSuperDepth;
        }
        obj_init_352.apply(obj352, []);
        return obj352
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
    obj349.methods["new"] = func351;
    func351.definitionLine = 154;
    func351.definitionModule = "kitty";
    var func553 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj554 = Grace_allocObject();
        obj554.definitionModule = "kitty";
        obj554.definitionLine = 154;
        var inho554 = inheritingObject;
        while (inho554.superobj) inho554 = inho554.superobj;
        inho554.superobj = obj554;
        obj554.data = inheritingObject.data;
        obj554.outer = this;
        var reader_kitty_outer_555 = function() {
          return this.outer;
        }
        obj554.methods["outer"] = reader_kitty_outer_555;
        function obj_init_554() {
          var origSuperDepth = superDepth;
          superDepth = obj554;
          obj554.annotations = [];
          var func556 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func556.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 190
              var if557 = var_done;
              lineNumber = 186
              onSelf = true;
              var call558 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call558)) {
                lineNumber = 188
                lineNumber = 187
                var bool559 = new GraceBoolean(false)
                return bool559
              }
              lineNumber = 191
              lineNumber = 170
              lineNumber = 190
              var call560 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call561 = callmethod(this, "document:=", [1], call560);
              lineNumber = 191
              lineNumber = 190
              lineNumber = 191
              var string562 = new GraceString("standard-canvas");
              onSelf = true;
              var call563 = callmethod(this, "document", [0]);
              var call564 = callmethod(call563,"getElementById", [1], string562);
              onSelf = true;
              var call565 = callmethod(this, "canvas:=", [1], call564);
              lineNumber = 193
              lineNumber = 190
              lineNumber = 192
              onSelf = true;
              var call566 = callmethod(this, "canvas", [0]);
              var call567 = callmethod(call566,"width", [0]);
              onSelf = true;
              var call568 = callmethod(this, "canvasWidth:=", [1], call567);
              lineNumber = 196
              lineNumber = 192
              lineNumber = 193
              onSelf = true;
              var call569 = callmethod(this, "canvas", [0]);
              var call570 = callmethod(call569,"height", [0]);
              onSelf = true;
              var call571 = callmethod(this, "canvasHeight:=", [1], call570);
              lineNumber = 208
              var block572 = Grace_allocObject();
              block572.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block572.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block572.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block572.methods["match"] = GraceBlock_match;
              block572.methods["prefix?"] = GraceBlock_lift;
              block572.receiver = this;
              block572.className = 'block<kitty:208>';
              block572.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 199
                lineNumber = 198
                onSelf = true;
                var call573 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call575 = callmethod(this, "canvas", [0]);
                var call576 = callmethod(call575,"offsetWidth", [0]);
                onSelf = true;
                var call578 = callmethod(this, "canvas", [0]);
                var call579 = callmethod(call578,"offsetLeft", [0]);
                var call581 = callmethod(var_ev,"clientX", [0]);
                var diff583 = callmethod(call581, "-", [1], call579);
                var quotient585 = callmethod(diff583, "/", [1], call576);
                var prod587 = callmethod(quotient585, "*", [1], call573);
                var var_x = prod587;
                lineNumber = 199;
                moduleName = "kitty";
                lineNumber = 198
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 203
                lineNumber = 199
                onSelf = true;
                var call588 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call590 = callmethod(this, "canvas", [0]);
                var call591 = callmethod(call590,"offsetHeight", [0]);
                onSelf = true;
                var call593 = callmethod(this, "canvas", [0]);
                var call594 = callmethod(call593,"offsetTop", [0]);
                var call596 = callmethod(var_ev,"clientY", [0]);
                var diff598 = callmethod(call596, "-", [1], call594);
                var quotient600 = callmethod(diff598, "/", [1], call591);
                var prod602 = callmethod(quotient600, "*", [1], call588);
                var var_y = prod602;
                lineNumber = 203;
                moduleName = "kitty";
                lineNumber = 199
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 207
                var if603 = var_done;
                lineNumber = 203
                var opresult606 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call609 = callmethod(this, "canvasWidth", [0]);
                var diff611 = callmethod(call609, "-", [1], new GraceNum(20));
                var opresult614 = callmethod(var_x, ">", [1], diff611);
                var opresult616 = callmethod(opresult614, "&&", [1], opresult606);
                if (Grace_isTrue(opresult616)) {
                  lineNumber = 204
                  var call617 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 205
                  onSelf = true;
                  var call618 = callmethod(this, "stop", [0]);
                  if603 = call618;
                }
                return if603;
              };
              var_mouseDownListener = block572;
              lineNumber = 208
              var string619 = new GraceString("mousedown");
              onSelf = true;
              var call620 = callmethod(this, "canvas", [0]);
              var call621 = callmethod(call620,"addEventListener", [2], string619, var_mouseDownListener);
              lineNumber = 218
              var block622 = Grace_allocObject();
              block622.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block622.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block622.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block622.methods["match"] = GraceBlock_match;
              block622.methods["prefix?"] = GraceBlock_lift;
              block622.receiver = this;
              block622.className = 'block<kitty:218>';
              block622.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 216
                var if623 = var_done;
                lineNumber = 213
                var call625 = callmethod(var_ev,"keyCode", [0]);
                var opresult627 = callmethod(call625, "==", [1], new GraceNum(75));
                if (Grace_isTrue(opresult627)) {
                  lineNumber = 214
                  onSelf = true;
                  var call628 = callmethod(this, "stop", [0]);
                  if623 = call628;
                }
                lineNumber = 217
                lineNumber = 213
                lineNumber = 216
                var call629 = callmethod(var_ev,"keyCode", [0]);
                onSelf = true;
                var call630 = callmethod(this, "currentKeyDown:=", [1], call629);
                return call630;
              };
              var_keyDownListener = block622;
              lineNumber = 218
              var string631 = new GraceString("keydown");
              onSelf = true;
              var call632 = callmethod(this, "document", [0]);
              var call633 = callmethod(call632,"addEventListener", [2], string631, var_keyDownListener);
              lineNumber = 224
              var block634 = Grace_allocObject();
              block634.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block634.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block634.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block634.methods["match"] = GraceBlock_match;
              block634.methods["prefix?"] = GraceBlock_lift;
              block634.receiver = this;
              block634.className = 'block<kitty:224>';
              block634.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 223
                lineNumber = 216
                lineNumber = 223
                lineNumber = 222
                var call635 = callmethod(new GraceNum(1),"prefix-", [0]);
                onSelf = true;
                var call636 = callmethod(this, "currentKeyDown:=", [1], call635);
                return call636;
              };
              var_keyUpListener = block634;
              lineNumber = 224
              var string637 = new GraceString("keyup");
              onSelf = true;
              var call638 = callmethod(this, "document", [0]);
              var call639 = callmethod(call638,"addEventListener", [2], string637, var_keyUpListener);
              lineNumber = 226
              lineNumber = 216
              lineNumber = 226
              var string640 = new GraceString("canvas");
              var call641 = callmethod(var_dom,"document", [0]);
              var call642 = callmethod(call641,"createElement", [1], string640);
              onSelf = true;
              var call643 = callmethod(this, "backingCanvas:=", [1], call642);
              lineNumber = 228
              lineNumber = 226
              lineNumber = 227
              onSelf = true;
              var call644 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call645 = callmethod(this, "backingCanvas", [0]);
              var call646 = callmethod(call645,"height:=", [1], call644);
              lineNumber = 229
              lineNumber = 226
              lineNumber = 228
              onSelf = true;
              var call647 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call648 = callmethod(this, "backingCanvas", [0]);
              var call649 = callmethod(call648,"width:=", [1], call647);
              lineNumber = 229
              lineNumber = 226
              lineNumber = 229
              var string650 = new GraceString("2d");
              onSelf = true;
              var call651 = callmethod(this, "backingCanvas", [0]);
              var call652 = callmethod(call651,"getContext", [1], string650);
              onSelf = true;
              var call653 = callmethod(this, "backingContext:=", [1], call652);
              lineNumber = 230
              lineNumber = 226
              lineNumber = 230
              var string654 = new GraceString("2d");
              onSelf = true;
              var call655 = callmethod(this, "canvas", [0]);
              var call656 = callmethod(call655,"getContext", [1], string654);
              onSelf = true;
              var call657 = callmethod(this, "mctx:=", [1], call656);
              lineNumber = 233
              var string658 = new GraceString("doggo.jpg");
              onSelf = true;
              var call659 = callmethod(this, "setBackground", [1], string658);
              lineNumber = 241
              lineNumber = 226
              lineNumber = 235
              var bool660 = new GraceBoolean(true)
              onSelf = true;
              var call661 = callmethod(this, "isInit:=", [1], bool660);
              return call661
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func556.paramCounts = [
            0,
          ];
          func556.variableArities = [
            false,
          ];
          obj554.methods["init"] = func556;
          func556.definitionLine = 182;
          func556.definitionModule = "kitty";
          var func662 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func662.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 247
              lineNumber = 226
              lineNumber = 246
              var bool663 = new GraceBoolean(true)
              onSelf = true;
              var call664 = callmethod(this, "isRunning:=", [1], bool663);
              lineNumber = 247
              var block665 = Grace_allocObject();
              block665.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block665.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block665.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block665.methods["match"] = GraceBlock_match;
              block665.methods["prefix?"] = GraceBlock_lift;
              block665.receiver = this;
              block665.className = 'block<kitty:247>';
              block665.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call666 = callmethod(this, "isRunning", [0]);
                return call666;
              };
              lineNumber = 251
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
              block667.className = 'block<kitty:251>';
              block667.real = function(
              ) {
                sourceObject = this;
                lineNumber = 248
                onSelf = true;
                var call668 = callmethod(this, "update", [0]);
                return call668;
              };
              lineNumber = 247
              var call669 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block665, new GraceNum(10), block667);
              return call669
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func662.paramCounts = [
            0,
          ];
          func662.variableArities = [
            false,
          ];
          obj554.methods["start"] = func662;
          func662.definitionLine = 244;
          func662.definitionModule = "kitty";
          var func670 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func670.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 260
              lineNumber = 226
              lineNumber = 259
              onSelf = true;
              var call671 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call672 = callmethod(this, "mctx", [0]);
              var call673 = callmethod(call672,"fillStyle:=", [1], call671);
              lineNumber = 260
              onSelf = true;
              var call674 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call675 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call676 = callmethod(this, "mctx", [0]);
              var call677 = callmethod(call676,"fillRect", [4], new GraceNum(0), new GraceNum(0), call674, call675);
              lineNumber = 261
              onSelf = true;
              var call678 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call679 = callmethod(this, "mctx", [0]);
              var call680 = callmethod(call679,"drawImage", [3], call678, new GraceNum(0), new GraceNum(0));
              lineNumber = 262
              onSelf = true;
              var call681 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call683 = callmethod(this, "canvasWidth", [0]);
              var quotient685 = callmethod(call683, "/", [1], new GraceNum(2));
              onSelf = true;
              var call687 = callmethod(this, "canvasHeight", [0]);
              var quotient689 = callmethod(call687, "/", [1], new GraceNum(2));
              onSelf = true;
              var call690 = callmethod(this, "background", [0]);
              var call691 = callmethod(call690,"draw", [4], call681, quotient685, quotient689, new GraceNum(0));
              lineNumber = 265
              onSelf = true;
              var call692 = callmethod(this, "entities", [0]);
              lineNumber = 271
              var block693 = Grace_allocObject();
              block693.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block693.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block693.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block693.methods["match"] = GraceBlock_match;
              block693.methods["prefix?"] = GraceBlock_lift;
              block693.receiver = this;
              block693.className = 'block<kitty:271>';
              block693.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 266
                var call694 = callmethod(var_entity,"update", [0]);
                lineNumber = 267
                onSelf = true;
                var call695 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call697 = callmethod(this, "canvasWidth", [0]);
                var quotient699 = callmethod(call697, "/", [1], new GraceNum(2));
                onSelf = true;
                var call701 = callmethod(this, "canvasHeight", [0]);
                var quotient703 = callmethod(call701, "/", [1], new GraceNum(2));
                var call704 = callmethod(var_entity,"draw", [3], call695, quotient699, quotient703);
                return call704;
              };
              var call705 = callmethod(Grace_prelude,"for()do", [1, 1], call692, block693);
              return call705
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func670.paramCounts = [
            0,
          ];
          func670.variableArities = [
            false,
          ];
          obj554.methods["update"] = func670;
          func670.definitionLine = 254;
          func670.definitionModule = "kitty";
          var func706 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func706.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 274
              var string707 = new GraceString("WORLD STOPPING...");
              var call708 = Grace_print(string707);
              lineNumber = 276
              lineNumber = 266
              lineNumber = 275
              var bool709 = new GraceBoolean(false)
              onSelf = true;
              var call710 = callmethod(this, "isRunning:=", [1], bool709);
              lineNumber = 276
              var string711 = new GraceString("mousedown");
              onSelf = true;
              var call712 = callmethod(this, "canvas", [0]);
              var call713 = callmethod(call712,"removeEventListener", [2], string711, var_mouseDownListener);
              lineNumber = 277
              var string714 = new GraceString("keydown");
              onSelf = true;
              var call715 = callmethod(this, "document", [0]);
              var call716 = callmethod(call715,"removeEventListener", [2], string714, var_keyDownListener);
              lineNumber = 278
              var string717 = new GraceString("keyup");
              onSelf = true;
              var call718 = callmethod(this, "document", [0]);
              var call719 = callmethod(call718,"removeEventListener", [2], string717, var_keyUpListener);
              return call719
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func706.paramCounts = [
            0,
          ];
          func706.variableArities = [
            false,
          ];
          obj554.methods["stop"] = func706;
          func706.definitionLine = 273;
          func706.definitionModule = "kitty";
          var func720 = function(argcv) {
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func720.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isKeyDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 283
              lineNumber = 282
              onSelf = true;
              var call721 = callmethod(this, "currentKeyDown", [0]);
              var opresult724 = callmethod(var_key, "==", [1], call721);
              return opresult724
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func720.paramCounts = [
            1,
          ];
          func720.variableArities = [
            false,
          ];
          obj554.methods["isKeyDown"] = func720;
          func720.definitionLine = 281;
          func720.definitionModule = "kitty";
          var func725 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func725.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 286
              lineNumber = 266
              lineNumber = 286
              onSelf = true;
              var call726 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call727 = callmethod(this, "canvasHeight", [0]);
              var call728 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call729 = callmethod(call728, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call730 = callmethod(call729, "Image", [3], var_background__39__, call726, call727);
              onSelf = true;
              var call731 = callmethod(this, "background:=", [1], call730);
              return call731
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func725.paramCounts = [
            1,
          ];
          func725.variableArities = [
            false,
          ];
          obj554.methods["setBackground"] = func725;
          func725.definitionLine = 285;
          func725.definitionModule = "kitty";
          var func732 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func732.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 290
              onSelf = true;
              var call733 = callmethod(this, "entities", [0]);
              var call734 = callmethod(call733,"push", [1], var_e);
              return call734
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func732.paramTypes = [];
          func732.paramTypes.push([]);
          func732.paramCounts = [
            1,
          ];
          func732.variableArities = [
            false,
          ];
          obj554.methods["addEntity"] = func732;
          func732.definitionLine = 289;
          func732.definitionModule = "kitty";
          sourceObject = obj554;
          obj554.data["background"] = undefined;
          var reader_kitty_background_735 = function() {
            return this.data["background"];
          }
          obj554.methods["background"] = reader_kitty_background_735;
          obj554.data["background"] = undefined;
          var writer_kitty_background_735 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj554.methods["background:="] = writer_kitty_background_735;
          reader_kitty_background_735.confidential = true;
          writer_kitty_background_735.confidential = true;
          obj554.mutable = true;
          sourceObject = obj554;
          lineNumber = 159
          var string736 = new GraceString("black");
          obj554.data["backgroundColour"] = string736;
          var reader_kitty_backgroundColour_737 = function() {
            return this.data["backgroundColour"];
          }
          obj554.methods["backgroundColour"] = reader_kitty_backgroundColour_737;
          obj554.data["backgroundColour"] = string736;
          var writer_kitty_backgroundColour_737 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj554.methods["backgroundColour:="] = writer_kitty_backgroundColour_737;
          reader_kitty_backgroundColour_737.confidential = true;
          writer_kitty_backgroundColour_737.confidential = true;
          lineNumber = 161;
          moduleName = "kitty";
          lineNumber = 159
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string736)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj554.mutable = true;
          sourceObject = obj554;
          obj554.data["document"] = undefined;
          var reader_kitty_document_738 = function() {
            return this.data["document"];
          }
          obj554.methods["document"] = reader_kitty_document_738;
          obj554.data["document"] = undefined;
          var writer_kitty_document_738 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj554.methods["document:="] = writer_kitty_document_738;
          reader_kitty_document_738.confidential = true;
          writer_kitty_document_738.confidential = true;
          obj554.mutable = true;
          sourceObject = obj554;
          obj554.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_739 = function() {
            return this.data["backingCanvas"];
          }
          obj554.methods["backingCanvas"] = reader_kitty_backingCanvas_739;
          obj554.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_739 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj554.methods["backingCanvas:="] = writer_kitty_backingCanvas_739;
          reader_kitty_backingCanvas_739.confidential = true;
          writer_kitty_backingCanvas_739.confidential = true;
          obj554.mutable = true;
          sourceObject = obj554;
          obj554.data["backingContext"] = undefined;
          var reader_kitty_backingContext_740 = function() {
            return this.data["backingContext"];
          }
          obj554.methods["backingContext"] = reader_kitty_backingContext_740;
          obj554.data["backingContext"] = undefined;
          var writer_kitty_backingContext_740 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj554.methods["backingContext:="] = writer_kitty_backingContext_740;
          reader_kitty_backingContext_740.confidential = true;
          writer_kitty_backingContext_740.confidential = true;
          obj554.mutable = true;
          sourceObject = obj554;
          obj554.data["canvas"] = undefined;
          var reader_kitty_canvas_741 = function() {
            return this.data["canvas"];
          }
          obj554.methods["canvas"] = reader_kitty_canvas_741;
          obj554.data["canvas"] = undefined;
          var writer_kitty_canvas_741 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj554.methods["canvas:="] = writer_kitty_canvas_741;
          reader_kitty_canvas_741.confidential = true;
          writer_kitty_canvas_741.confidential = true;
          obj554.mutable = true;
          sourceObject = obj554;
          obj554.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_742 = function() {
            return this.data["canvasWidth"];
          }
          obj554.methods["canvasWidth"] = reader_kitty_canvasWidth_742;
          obj554.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_742 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj554.methods["canvasWidth:="] = writer_kitty_canvasWidth_742;
          reader_kitty_canvasWidth_742.confidential = true;
          writer_kitty_canvasWidth_742.confidential = true;
          obj554.mutable = true;
          sourceObject = obj554;
          obj554.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_743 = function() {
            return this.data["canvasHeight"];
          }
          obj554.methods["canvasHeight"] = reader_kitty_canvasHeight_743;
          obj554.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_743 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj554.methods["canvasHeight:="] = writer_kitty_canvasHeight_743;
          reader_kitty_canvasHeight_743.confidential = true;
          writer_kitty_canvasHeight_743.confidential = true;
          obj554.mutable = true;
          sourceObject = obj554;
          lineNumber = 170
          var call744 = callmethod(var_collections,"list", [0]);
          var call745 = callmethod(call744,"new", [0]);
          obj554.data["entities"] = call745;
          var reader_kitty_entities_746 = function() {
            return this.data["entities"];
          }
          obj554.methods["entities"] = reader_kitty_entities_746;
          obj554.data["entities"] = call745;
          var writer_kitty_entities_746 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj554.methods["entities:="] = writer_kitty_entities_746;
          reader_kitty_entities_746.confidential = true;
          writer_kitty_entities_746.confidential = true;
          lineNumber = 172;
          moduleName = "kitty";
          lineNumber = 170
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call745)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj554.mutable = true;
          sourceObject = obj554;
          lineNumber = 172
          var bool747 = new GraceBoolean(false)
          obj554.data["isInit"] = bool747;
          var reader_kitty_isInit_748 = function() {
            return this.data["isInit"];
          }
          obj554.methods["isInit"] = reader_kitty_isInit_748;
          obj554.data["isInit"] = bool747;
          var writer_kitty_isInit_748 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj554.methods["isInit:="] = writer_kitty_isInit_748;
          reader_kitty_isInit_748.confidential = true;
          writer_kitty_isInit_748.confidential = true;
          lineNumber = 173;
          moduleName = "kitty";
          lineNumber = 172
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool747)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj554.mutable = true;
          sourceObject = obj554;
          lineNumber = 173
          var bool749 = new GraceBoolean(false)
          obj554.data["isRunning"] = bool749;
          var reader_kitty_isRunning_750 = function() {
            return this.data["isRunning"];
          }
          obj554.methods["isRunning"] = reader_kitty_isRunning_750;
          obj554.data["isRunning"] = bool749;
          var writer_kitty_isRunning_750 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj554.methods["isRunning:="] = writer_kitty_isRunning_750;
          reader_kitty_isRunning_750.confidential = true;
          writer_kitty_isRunning_750.confidential = true;
          lineNumber = 175;
          moduleName = "kitty";
          lineNumber = 173
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool749)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj554.mutable = true;
          sourceObject = obj554;
          obj554.data["mctx"] = undefined;
          var reader_kitty_mctx_751 = function() {
            return this.data["mctx"];
          }
          obj554.methods["mctx"] = reader_kitty_mctx_751;
          obj554.data["mctx"] = undefined;
          var writer_kitty_mctx_751 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj554.methods["mctx:="] = writer_kitty_mctx_751;
          reader_kitty_mctx_751.confidential = true;
          writer_kitty_mctx_751.confidential = true;
          obj554.mutable = true;
          sourceObject = obj554;
          lineNumber = 179
          lineNumber = 177
          var call752 = callmethod(new GraceNum(1),"prefix-", [0]);
          obj554.data["currentKeyDown"] = call752;
          var reader_kitty_currentKeyDown_753 = function() {
            return this.data["currentKeyDown"];
          }
          obj554.methods["currentKeyDown"] = reader_kitty_currentKeyDown_753;
          obj554.data["currentKeyDown"] = call752;
          var writer_kitty_currentKeyDown_753 = function(argcv, o) {
            this.data["currentKeyDown"] = o;
          }
          obj554.methods["currentKeyDown:="] = writer_kitty_currentKeyDown_753;
          reader_kitty_currentKeyDown_753.confidential = true;
          writer_kitty_currentKeyDown_753.confidential = true;
          lineNumber = 179;
          moduleName = "kitty";
          lineNumber = 177
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call752)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'currentKeyDown' to be of type Unknown"))
          obj554.mutable = true;
          sourceObject = obj554;
          lineNumber = 179
          onSelf = true;
          var call754 = callmethod(this, "init", [0]);
          sourceObject = obj554;
          sourceObject = obj554;
          sourceObject = obj554;
          sourceObject = obj554;
          sourceObject = obj554;
          sourceObject = obj554;
          sourceObject = obj554;
          superDepth = origSuperDepth;
        }
        obj_init_554.apply(inheritingObject, []);
        return obj554
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj349.methods["new()object"] = func553;
    var func755 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 154
        var string756 = new GraceString("class KittyWorld");
        return string756
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func755.paramCounts = [
    ];
    func755.variableArities = [
    ];
    obj349.methods["asDebugString"] = func755;
    func755.definitionLine = 154;
    func755.definitionModule = "kitty";
    sourceObject = obj349;
    sourceObject = obj349;
    superDepth = origSuperDepth;
  }
  obj_init_349.apply(obj349, []);
  var var_KittyWorld = obj349;
  lineNumber = 296
  lineNumber = 305
  lineNumber = 320
  lineNumber = 325
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
'dom',
'math',
'StandardPrelude',
];
if (gctCache)
  gctCache['kitty'] = "methods-of:KittyWorld.new:\n backingCanvas:=\n start\n entities:=\n document:=\n backingContext\n isKeyDown\n update\n entities\n backingContext:=\n setBackground\n canvasWidth:=\n init\n canvasHeight\n currentKeyDown:=\n canvasWidth\n currentKeyDown\n stop\n isInit:=\n backingCanvas\n isInit\n mctx:=\n isRunning:=\n isRunning\n mctx\n document\n addEntity\n backgroundColour:=\n canvasHeight:=\n canvas:=\n backgroundColour\n background:=\n canvas\n background\npath:\n kitty\nconstructors-of:KittyEntity:\n new\nfresh-methods:\n Image\n Entity\n World\nconstructors-of:KittyImage:\n new\nclasses:\n KittyImage\n KittyEntity\n KittyWorld\nfresh:Entity:\n posX:=\n posY:=\n setLocation\n rotation:=\n turn\n posX\n posY\n start\n moveDown\n rotation\n move\n image:=\n action:=\n moveLeft\n image\n onDestroy\n update\n awake\n setAction\n setImage\n getRotation\n moveRight\n getX\n getY\n draw\n moveUp\n action\nconfidential:\nfresh:World:\n backingCanvas:=\n start\n mctx\n document:=\n backingContext\n isRunning\n update\n entities\n backingContext:=\n setBackground\n canvasWidth:=\n init\n canvasHeight\n currentKeyDown:=\n canvasWidth\n currentKeyDown\n stop\n isInit:=\n backingCanvas\n isInit\n mctx:=\n isRunning:=\n isKeyDown\n entities:=\n document\n addEntity\n backgroundColour:=\n canvasHeight:=\n canvas:=\n backgroundColour\n background:=\n canvas\n background\nconstructors-of:KittyWorld:\n new\nfresh:Image:\n width:=\n imgTag\n height\n draw\n width\n height:=\nmodules:\n StandardPrelude\n mgcollections\nmethods-of:KittyEntity.new:\n posX:=\n posY:=\n setLocation\n rotation:=\n turn\n posX\n posY\n start\n moveDown\n rotation\n move\n image:=\n moveRight\n moveLeft\n image\n onDestroy\n update\n awake\n setAction\n setImage\n getRotation\n action:=\n getX\n getY\n draw\n moveUp\n action\npublic:\n m_world\n m_world:=\n worldSet\n worldSet:=\n keyDownListener\n keyDownListener:=\n keyUpListener\n keyUpListener:=\n mouseDownListener\n mouseDownListener:=\n KittyImage\n Image\n KittyEntity\n Entity\n KittyWorld\n World\n start\n setWorld\n atModuleEnd\nmethods-of:KittyImage.new:\n width:=\n imgTag\n height\n draw\n height:=\n width\n";
if (originalSourceLines) {
  originalSourceLines["kitty"] = [
    "import \"mgcollections\" as collections",
    "import \"dom\" as dom",
    "import \"math\" as math",
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
    "        posX := posX + distance * math.cos(rotation * 3.14 / 180)",
    "        posY := posY + distance * math.sin(rotation * 3.14 / 180)",
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
