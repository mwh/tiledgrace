function gracecode_kitty () {
  this.definitionModule = "kitty";
  this.definitionLine = 0;
  lineNumber = 40
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
      lineNumber = 41
      var obj1 = Grace_allocObject();
      obj1.definitionModule = "kitty";
      obj1.definitionLine = 41;
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
        lineNumber = 42
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
  func0.definitionLine = 40;
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
      obj5.definitionLine = 41;
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
  lineNumber = 137
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
      lineNumber = 138
      var obj9 = Grace_allocObject();
      obj9.definitionModule = "kitty";
      obj9.definitionLine = 138;
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
        lineNumber = 139
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
  func8.definitionLine = 137;
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
      obj13.definitionLine = 138;
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
  lineNumber = 286
  var func16 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func16.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (World)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 287
      var obj17 = Grace_allocObject();
      obj17.definitionModule = "kitty";
      obj17.definitionLine = 287;
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
        lineNumber = 288
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
  func16.definitionLine = 286;
  func16.definitionModule = "kitty";
  var func20 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj21 = Grace_allocObject();
      obj21.definitionModule = "kitty";
      obj21.definitionLine = 287;
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
  lineNumber = 295
  var func24 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func24.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 297
      var string25 = new GraceString("CHECKING...");
      var call26 = Grace_print(string25);
      lineNumber = 304
      var if27 = var_done;
      lineNumber = 299
      var call28 = callmethod(var_worldSet,"prefix!", [0]);
      if (Grace_isTrue(call28)) {
        lineNumber = 300
        var string29 = new GraceString("NO WORLD!!");
        var call30 = Grace_print(string29);
        lineNumber = 302
        return var_done
      }
      lineNumber = 304
      var string31 = new GraceString("STARTING...");
      var call32 = Grace_print(string31);
      lineNumber = 307
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
  func24.definitionLine = 295;
  func24.definitionModule = "kitty";
  lineNumber = 310
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
      lineNumber = 312
      lineNumber = 311
      var_m__95__world = var_world__39__;
      lineNumber = 313
      lineNumber = 312
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
  func34.definitionLine = 310;
  func34.definitionModule = "kitty";
  lineNumber = 315
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
      lineNumber = 316
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
  func36.definitionLine = 315;
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
  // Import of StandardPrelude
  if (typeof gracecode_StandardPrelude == 'undefined')
    throw new GraceExceptionPacket(RuntimeErrorObject, 
      new GraceString('could not find module sp'));
  var var_sp = do_import("StandardPrelude", gracecode_StandardPrelude);
  lineNumber = 4
  var call38 = callmethod(var_sp,"methods()object", [0, 1], this);
  this.superobj = call38;
  this.data = call38.data;
  this._value = call38._value;
  lineNumber = 7
  lineNumber = 8
  var var_m__95__world;
  lineNumber = 307
  var func39 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func39.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (m_world)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 7
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
  func39.definitionLine = 307;
  func39.definitionModule = "kitty";
  lineNumber = 307
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
  func40.definitionLine = 307;
  func40.definitionModule = "kitty";
  lineNumber = 11
  lineNumber = 8
  var bool41 = new GraceBoolean(false)
  var var_worldSet = bool41;
  lineNumber = 307
  var func42 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func42.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (worldSet)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 8
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
  func42.definitionLine = 307;
  func42.definitionModule = "kitty";
  lineNumber = 307
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
  func43.definitionLine = 307;
  func43.definitionModule = "kitty";
  lineNumber = 11;
  moduleName = "kitty";
  lineNumber = 8
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_worldSet)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'worldSet' to be of type Unknown"))
  lineNumber = 11
  lineNumber = 12
  var var_keyDownListener;
  lineNumber = 307
  var func44 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func44.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (keyDownListener)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 11
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
  func44.definitionLine = 307;
  func44.definitionModule = "kitty";
  lineNumber = 307
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
  func45.definitionLine = 307;
  func45.definitionModule = "kitty";
  lineNumber = 13
  var var_keyUpListener;
  lineNumber = 307
  var func46 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func46.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (keyUpListener)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 12
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
  func46.definitionLine = 307;
  func46.definitionModule = "kitty";
  lineNumber = 307
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
  func47.definitionLine = 307;
  func47.definitionModule = "kitty";
  lineNumber = 18
  var var_mouseDownListener;
  lineNumber = 307
  var func48 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func48.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseDownListener)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 13
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
  func48.definitionLine = 307;
  func48.definitionModule = "kitty";
  lineNumber = 307
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
  func49.definitionLine = 307;
  func49.definitionModule = "kitty";
  lineNumber = 18
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
  func50.definitionLine = 18;
  func50.definitionModule = "kitty";
  var obj51 = Grace_allocObject();
  obj51.definitionModule = "kitty";
  obj51.definitionLine = 18;
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
        obj54.definitionLine = 18;
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
              lineNumber = 29
              var call57 = callmethod(var_ctx,"save", [0]);
              lineNumber = 30
              var call58 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 31
              var prod62 = callmethod(var_rot, "*", [1], new GraceNum(180));
              var quotient64 = callmethod(prod62, "/", [1], new GraceNum(3.14));
              var call65 = callmethod(var_ctx,"rotate", [1], quotient64);
              lineNumber = 32
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
              lineNumber = 33
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
          func56.definitionLine = 27;
          func56.definitionModule = "kitty";
          sourceObject = obj54;
          lineNumber = 21
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
          lineNumber = 21;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call83)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj54;
          lineNumber = 24
          lineNumber = 21
          lineNumber = 22
          onSelf = true;
          var call85 = callmethod(this, "imgTag", [0]);
          var call86 = callmethod(call85,"src:=", [1], var_url__39__);
          sourceObject = obj54;
          lineNumber = 24
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
          lineNumber = 25;
          moduleName = "kitty";
          lineNumber = 24
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj54.mutable = true;
          sourceObject = obj54;
          lineNumber = 25
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
          lineNumber = 27;
          moduleName = "kitty";
          lineNumber = 25
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
    func53.definitionLine = 18;
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
        obj90.definitionLine = 18;
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
              lineNumber = 29
              var call93 = callmethod(var_ctx,"save", [0]);
              lineNumber = 30
              var call94 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 31
              var prod98 = callmethod(var_rot, "*", [1], new GraceNum(180));
              var quotient100 = callmethod(prod98, "/", [1], new GraceNum(3.14));
              var call101 = callmethod(var_ctx,"rotate", [1], quotient100);
              lineNumber = 32
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
              lineNumber = 33
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
          func92.definitionLine = 27;
          func92.definitionModule = "kitty";
          sourceObject = obj90;
          lineNumber = 21
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
          lineNumber = 21;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call119)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj90;
          lineNumber = 24
          lineNumber = 21
          lineNumber = 22
          onSelf = true;
          var call121 = callmethod(this, "imgTag", [0]);
          var call122 = callmethod(call121,"src:=", [1], var_url__39__);
          sourceObject = obj90;
          lineNumber = 24
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
          lineNumber = 25;
          moduleName = "kitty";
          lineNumber = 24
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj90.mutable = true;
          sourceObject = obj90;
          lineNumber = 25
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
          lineNumber = 27;
          moduleName = "kitty";
          lineNumber = 25
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
        lineNumber = 18
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
    func125.definitionLine = 18;
    func125.definitionModule = "kitty";
    sourceObject = obj51;
    sourceObject = obj51;
    superDepth = origSuperDepth;
  }
  obj_init_51.apply(obj51, []);
  var var_KittyImage = obj51;
  lineNumber = 40
  lineNumber = 47
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
  func127.definitionLine = 47;
  func127.definitionModule = "kitty";
  var obj128 = Grace_allocObject();
  obj128.definitionModule = "kitty";
  obj128.definitionLine = 47;
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
        obj131.definitionLine = 47;
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
              lineNumber = 68
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
          func133.definitionLine = 66;
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
          func136.definitionLine = 72;
          func136.definitionModule = "kitty";
          var func137 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func137.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 78
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
          func137.definitionLine = 77;
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
          func140.definitionLine = 82;
          func140.definitionModule = "kitty";
          var func141 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func141.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveUp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 88
              lineNumber = 78
              lineNumber = 88
              lineNumber = 87
              onSelf = true;
              var call143 = callmethod(this, "posY", [0]);
              var diff145 = callmethod(call143, "-", [1], var_dy);
              onSelf = true;
              var call146 = callmethod(this, "posY:=", [1], diff145);
              return call146
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
          obj131.methods["moveUp"] = func141;
          func141.definitionLine = 86;
          func141.definitionModule = "kitty";
          var func147 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func147.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 92
              lineNumber = 78
              lineNumber = 92
              lineNumber = 91
              onSelf = true;
              var call149 = callmethod(this, "posY", [0]);
              var opresult151 = callmethod(call149, "+", [1], var_dy);
              onSelf = true;
              var call152 = callmethod(this, "posY:=", [1], opresult151);
              return call152
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func147.paramCounts = [
            1,
          ];
          func147.variableArities = [
            false,
          ];
          obj131.methods["moveDown"] = func147;
          func147.definitionLine = 90;
          func147.definitionModule = "kitty";
          var func153 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func153.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveLeft)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 96
              lineNumber = 78
              lineNumber = 96
              lineNumber = 95
              onSelf = true;
              var call155 = callmethod(this, "posX", [0]);
              var diff157 = callmethod(call155, "-", [1], var_dx);
              onSelf = true;
              var call158 = callmethod(this, "posX:=", [1], diff157);
              return call158
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func153.paramCounts = [
            1,
          ];
          func153.variableArities = [
            false,
          ];
          obj131.methods["moveLeft"] = func153;
          func153.definitionLine = 94;
          func153.definitionModule = "kitty";
          var func159 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func159.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveRight)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 100
              lineNumber = 78
              lineNumber = 100
              lineNumber = 99
              onSelf = true;
              var call161 = callmethod(this, "posX", [0]);
              var opresult163 = callmethod(call161, "+", [1], var_dx);
              onSelf = true;
              var call164 = callmethod(this, "posX:=", [1], opresult163);
              return call164
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func159.paramCounts = [
            1,
          ];
          func159.variableArities = [
            false,
          ];
          obj131.methods["moveRight"] = func159;
          func159.definitionLine = 98;
          func159.definitionModule = "kitty";
          var func165 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func165.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 103
              var call166 = callmethod(var_ctx,"save", [0]);
              lineNumber = 104
              onSelf = true;
              var call167 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call168 = callmethod(this, "posY", [0]);
              var call169 = callmethod(var_ctx,"translate", [2], call167, call168);
              lineNumber = 105
              onSelf = true;
              var call170 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call171 = callmethod(this, "image", [0]);
              var call172 = callmethod(call171,"draw", [4], var_ctx, var_dx, var_dy, call170);
              lineNumber = 106
              var call173 = callmethod(var_ctx,"restore", [0]);
              return call173
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func165.paramCounts = [
            3,
          ];
          func165.variableArities = [
            false,
          ];
          obj131.methods["draw"] = func165;
          func165.definitionLine = 102;
          func165.definitionModule = "kitty";
          var func174 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func174.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 110
              lineNumber = 106
              lineNumber = 110
              var call175 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call176 = callmethod(call175, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call177 = callmethod(call176, "Image", [3], var_image__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call178 = callmethod(this, "image:=", [1], call177);
              return call178
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
          obj131.methods["setImage"] = func174;
          func174.definitionLine = 109;
          func174.definitionModule = "kitty";
          var func179 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func179.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 115
              lineNumber = 110
              lineNumber = 114
              onSelf = true;
              var call180 = callmethod(this, "action:=", [1], var_action__39__);
              return call180
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func179.paramCounts = [
            1,
          ];
          func179.variableArities = [
            false,
          ];
          obj131.methods["setAction"] = func179;
          func179.definitionLine = 113;
          func179.definitionModule = "kitty";
          var func181 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func181.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 119
              lineNumber = 110
              lineNumber = 118
              onSelf = true;
              var call182 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 120
              lineNumber = 110
              lineNumber = 119
              onSelf = true;
              var call183 = callmethod(this, "posY:=", [1], var_y);
              return call183
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func181.paramCounts = [
            2,
          ];
          func181.variableArities = [
            false,
          ];
          obj131.methods["setLocation"] = func181;
          func181.definitionLine = 117;
          func181.definitionModule = "kitty";
          var func184 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func184.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 124
              lineNumber = 123
              onSelf = true;
              var call185 = callmethod(this, "posX", [0]);
              return call185
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func184.paramCounts = [
            0,
          ];
          func184.variableArities = [
            false,
          ];
          obj131.methods["getX"] = func184;
          func184.definitionLine = 122;
          func184.definitionModule = "kitty";
          var func186 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func186.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 128
              lineNumber = 127
              onSelf = true;
              var call187 = callmethod(this, "posY", [0]);
              return call187
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func186.paramCounts = [
            0,
          ];
          func186.variableArities = [
            false,
          ];
          obj131.methods["getY"] = func186;
          func186.definitionLine = 126;
          func186.definitionModule = "kitty";
          var func188 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func188.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 132
              lineNumber = 131
              onSelf = true;
              var call189 = callmethod(this, "rotation", [0]);
              return call189
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func188.paramCounts = [
            0,
          ];
          func188.variableArities = [
            false,
          ];
          obj131.methods["getRotation"] = func188;
          func188.definitionLine = 130;
          func188.definitionModule = "kitty";
          sourceObject = obj131;
          lineNumber = 51
          obj131.data["posX"] = var_x__39__;
          var reader_kitty_posX_190 = function() {
            return this.data["posX"];
          }
          obj131.methods["posX"] = reader_kitty_posX_190;
          obj131.data["posX"] = var_x__39__;
          var writer_kitty_posX_190 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj131.methods["posX:="] = writer_kitty_posX_190;
          reader_kitty_posX_190.confidential = true;
          writer_kitty_posX_190.confidential = true;
          lineNumber = 52;
          moduleName = "kitty";
          lineNumber = 51
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj131.mutable = true;
          sourceObject = obj131;
          lineNumber = 52
          obj131.data["posY"] = var_y__39__;
          var reader_kitty_posY_191 = function() {
            return this.data["posY"];
          }
          obj131.methods["posY"] = reader_kitty_posY_191;
          obj131.data["posY"] = var_y__39__;
          var writer_kitty_posY_191 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj131.methods["posY:="] = writer_kitty_posY_191;
          reader_kitty_posY_191.confidential = true;
          writer_kitty_posY_191.confidential = true;
          lineNumber = 53;
          moduleName = "kitty";
          lineNumber = 52
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj131.mutable = true;
          sourceObject = obj131;
          lineNumber = 53
          obj131.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_192 = function() {
            return this.data["rotation"];
          }
          obj131.methods["rotation"] = reader_kitty_rotation_192;
          obj131.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_192 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj131.methods["rotation:="] = writer_kitty_rotation_192;
          reader_kitty_rotation_192.confidential = true;
          writer_kitty_rotation_192.confidential = true;
          lineNumber = 55;
          moduleName = "kitty";
          lineNumber = 53
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj131.mutable = true;
          sourceObject = obj131;
          lineNumber = 55
          var obj193 = Grace_allocObject();
          obj193.definitionModule = "kitty";
          obj193.definitionLine = 55;
          obj193.outer = this;
          var reader_kitty_outer_194 = function() {
            return this.outer;
          }
          obj193.methods["outer"] = reader_kitty_outer_194;
          function obj_init_193() {
            var origSuperDepth = superDepth;
            superDepth = obj193;
            obj193.annotations = [];
            var func195 = function(argcv) {
              var curarg = 1;
              if (argcv[0] !=  func195.paramCounts[0])
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
            func195.paramCounts = [
              0,
            ];
            func195.variableArities = [
              false,
            ];
            obj193.methods["update"] = func195;
            func195.definitionLine = 56;
            func195.definitionModule = "kitty";
            sourceObject = obj193;
            superDepth = origSuperDepth;
          }
          obj_init_193.apply(obj193, []);
          obj131.data["action"] = obj193;
          var reader_kitty_action_196 = function() {
            return this.data["action"];
          }
          obj131.methods["action"] = reader_kitty_action_196;
          obj131.data["action"] = obj193;
          var writer_kitty_action_196 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj131.methods["action:="] = writer_kitty_action_196;
          reader_kitty_action_196.confidential = true;
          writer_kitty_action_196.confidential = true;
          lineNumber = 55;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], obj193)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj131.mutable = true;
          sourceObject = obj131;
          obj131.data["image"] = undefined;
          var reader_kitty_image_197 = function() {
            return this.data["image"];
          }
          obj131.methods["image"] = reader_kitty_image_197;
          obj131.data["image"] = undefined;
          var writer_kitty_image_197 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj131.methods["image:="] = writer_kitty_image_197;
          reader_kitty_image_197.confidential = true;
          writer_kitty_image_197.confidential = true;
          obj131.mutable = true;
          sourceObject = obj131;
          lineNumber = 63
          onSelf = true;
          var call198 = callmethod(this, "awake", [0]);
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
    func130.definitionLine = 47;
    func130.definitionModule = "kitty";
    var func199 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj200 = Grace_allocObject();
        obj200.definitionModule = "kitty";
        obj200.definitionLine = 47;
        var inho200 = inheritingObject;
        while (inho200.superobj) inho200 = inho200.superobj;
        inho200.superobj = obj200;
        obj200.data = inheritingObject.data;
        obj200.outer = this;
        var reader_kitty_outer_201 = function() {
          return this.outer;
        }
        obj200.methods["outer"] = reader_kitty_outer_201;
        function obj_init_200() {
          var origSuperDepth = superDepth;
          superDepth = obj200;
          obj200.annotations = [];
          var func202 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func202.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 68
              var string203 = new GraceString("realyee.png");
              onSelf = true;
              var call204 = callmethod(this, "setImage", [1], string203);
              return call204
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func202.paramCounts = [
            0,
          ];
          func202.variableArities = [
            false,
          ];
          obj200.methods["awake"] = func202;
          func202.definitionLine = 66;
          func202.definitionModule = "kitty";
          var func205 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func205.paramCounts[0])
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
          func205.paramCounts = [
            0,
          ];
          func205.variableArities = [
            false,
          ];
          obj200.methods["start"] = func205;
          func205.definitionLine = 72;
          func205.definitionModule = "kitty";
          var func206 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func206.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 78
              onSelf = true;
              var call207 = callmethod(this, "action", [0]);
              var call208 = callmethod(call207,"update", [0]);
              return call208
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func206.paramCounts = [
            0,
          ];
          func206.variableArities = [
            false,
          ];
          obj200.methods["update"] = func206;
          func206.definitionLine = 77;
          func206.definitionModule = "kitty";
          var func209 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func209.paramCounts[0])
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
          func209.paramCounts = [
            0,
          ];
          func209.variableArities = [
            false,
          ];
          obj200.methods["onDestroy"] = func209;
          func209.definitionLine = 82;
          func209.definitionModule = "kitty";
          var func210 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func210.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveUp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 88
              lineNumber = 78
              lineNumber = 88
              lineNumber = 87
              onSelf = true;
              var call212 = callmethod(this, "posY", [0]);
              var diff214 = callmethod(call212, "-", [1], var_dy);
              onSelf = true;
              var call215 = callmethod(this, "posY:=", [1], diff214);
              return call215
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func210.paramCounts = [
            1,
          ];
          func210.variableArities = [
            false,
          ];
          obj200.methods["moveUp"] = func210;
          func210.definitionLine = 86;
          func210.definitionModule = "kitty";
          var func216 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func216.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 92
              lineNumber = 78
              lineNumber = 92
              lineNumber = 91
              onSelf = true;
              var call218 = callmethod(this, "posY", [0]);
              var opresult220 = callmethod(call218, "+", [1], var_dy);
              onSelf = true;
              var call221 = callmethod(this, "posY:=", [1], opresult220);
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
          obj200.methods["moveDown"] = func216;
          func216.definitionLine = 90;
          func216.definitionModule = "kitty";
          var func222 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func222.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveLeft)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 96
              lineNumber = 78
              lineNumber = 96
              lineNumber = 95
              onSelf = true;
              var call224 = callmethod(this, "posX", [0]);
              var diff226 = callmethod(call224, "-", [1], var_dx);
              onSelf = true;
              var call227 = callmethod(this, "posX:=", [1], diff226);
              return call227
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func222.paramCounts = [
            1,
          ];
          func222.variableArities = [
            false,
          ];
          obj200.methods["moveLeft"] = func222;
          func222.definitionLine = 94;
          func222.definitionModule = "kitty";
          var func228 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func228.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveRight)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 100
              lineNumber = 78
              lineNumber = 100
              lineNumber = 99
              onSelf = true;
              var call230 = callmethod(this, "posX", [0]);
              var opresult232 = callmethod(call230, "+", [1], var_dx);
              onSelf = true;
              var call233 = callmethod(this, "posX:=", [1], opresult232);
              return call233
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func228.paramCounts = [
            1,
          ];
          func228.variableArities = [
            false,
          ];
          obj200.methods["moveRight"] = func228;
          func228.definitionLine = 98;
          func228.definitionModule = "kitty";
          var func234 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func234.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 103
              var call235 = callmethod(var_ctx,"save", [0]);
              lineNumber = 104
              onSelf = true;
              var call236 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call237 = callmethod(this, "posY", [0]);
              var call238 = callmethod(var_ctx,"translate", [2], call236, call237);
              lineNumber = 105
              onSelf = true;
              var call239 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call240 = callmethod(this, "image", [0]);
              var call241 = callmethod(call240,"draw", [4], var_ctx, var_dx, var_dy, call239);
              lineNumber = 106
              var call242 = callmethod(var_ctx,"restore", [0]);
              return call242
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func234.paramCounts = [
            3,
          ];
          func234.variableArities = [
            false,
          ];
          obj200.methods["draw"] = func234;
          func234.definitionLine = 102;
          func234.definitionModule = "kitty";
          var func243 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func243.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 110
              lineNumber = 106
              lineNumber = 110
              var call244 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call245 = callmethod(call244, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call246 = callmethod(call245, "Image", [3], var_image__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call247 = callmethod(this, "image:=", [1], call246);
              return call247
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func243.paramCounts = [
            1,
          ];
          func243.variableArities = [
            false,
          ];
          obj200.methods["setImage"] = func243;
          func243.definitionLine = 109;
          func243.definitionModule = "kitty";
          var func248 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func248.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 115
              lineNumber = 110
              lineNumber = 114
              onSelf = true;
              var call249 = callmethod(this, "action:=", [1], var_action__39__);
              return call249
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func248.paramCounts = [
            1,
          ];
          func248.variableArities = [
            false,
          ];
          obj200.methods["setAction"] = func248;
          func248.definitionLine = 113;
          func248.definitionModule = "kitty";
          var func250 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func250.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 119
              lineNumber = 110
              lineNumber = 118
              onSelf = true;
              var call251 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 120
              lineNumber = 110
              lineNumber = 119
              onSelf = true;
              var call252 = callmethod(this, "posY:=", [1], var_y);
              return call252
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func250.paramCounts = [
            2,
          ];
          func250.variableArities = [
            false,
          ];
          obj200.methods["setLocation"] = func250;
          func250.definitionLine = 117;
          func250.definitionModule = "kitty";
          var func253 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func253.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 124
              lineNumber = 123
              onSelf = true;
              var call254 = callmethod(this, "posX", [0]);
              return call254
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func253.paramCounts = [
            0,
          ];
          func253.variableArities = [
            false,
          ];
          obj200.methods["getX"] = func253;
          func253.definitionLine = 122;
          func253.definitionModule = "kitty";
          var func255 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func255.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 128
              lineNumber = 127
              onSelf = true;
              var call256 = callmethod(this, "posY", [0]);
              return call256
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func255.paramCounts = [
            0,
          ];
          func255.variableArities = [
            false,
          ];
          obj200.methods["getY"] = func255;
          func255.definitionLine = 126;
          func255.definitionModule = "kitty";
          var func257 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func257.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 132
              lineNumber = 131
              onSelf = true;
              var call258 = callmethod(this, "rotation", [0]);
              return call258
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func257.paramCounts = [
            0,
          ];
          func257.variableArities = [
            false,
          ];
          obj200.methods["getRotation"] = func257;
          func257.definitionLine = 130;
          func257.definitionModule = "kitty";
          sourceObject = obj200;
          lineNumber = 51
          obj200.data["posX"] = var_x__39__;
          var reader_kitty_posX_259 = function() {
            return this.data["posX"];
          }
          obj200.methods["posX"] = reader_kitty_posX_259;
          obj200.data["posX"] = var_x__39__;
          var writer_kitty_posX_259 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj200.methods["posX:="] = writer_kitty_posX_259;
          reader_kitty_posX_259.confidential = true;
          writer_kitty_posX_259.confidential = true;
          lineNumber = 52;
          moduleName = "kitty";
          lineNumber = 51
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj200.mutable = true;
          sourceObject = obj200;
          lineNumber = 52
          obj200.data["posY"] = var_y__39__;
          var reader_kitty_posY_260 = function() {
            return this.data["posY"];
          }
          obj200.methods["posY"] = reader_kitty_posY_260;
          obj200.data["posY"] = var_y__39__;
          var writer_kitty_posY_260 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj200.methods["posY:="] = writer_kitty_posY_260;
          reader_kitty_posY_260.confidential = true;
          writer_kitty_posY_260.confidential = true;
          lineNumber = 53;
          moduleName = "kitty";
          lineNumber = 52
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj200.mutable = true;
          sourceObject = obj200;
          lineNumber = 53
          obj200.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_261 = function() {
            return this.data["rotation"];
          }
          obj200.methods["rotation"] = reader_kitty_rotation_261;
          obj200.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_261 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj200.methods["rotation:="] = writer_kitty_rotation_261;
          reader_kitty_rotation_261.confidential = true;
          writer_kitty_rotation_261.confidential = true;
          lineNumber = 55;
          moduleName = "kitty";
          lineNumber = 53
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj200.mutable = true;
          sourceObject = obj200;
          lineNumber = 55
          var obj262 = Grace_allocObject();
          obj262.definitionModule = "kitty";
          obj262.definitionLine = 55;
          obj262.outer = this;
          var reader_kitty_outer_263 = function() {
            return this.outer;
          }
          obj262.methods["outer"] = reader_kitty_outer_263;
          function obj_init_262() {
            var origSuperDepth = superDepth;
            superDepth = obj262;
            obj262.annotations = [];
            var func264 = function(argcv) {
              var curarg = 1;
              if (argcv[0] !=  func264.paramCounts[0])
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
            func264.paramCounts = [
              0,
            ];
            func264.variableArities = [
              false,
            ];
            obj262.methods["update"] = func264;
            func264.definitionLine = 56;
            func264.definitionModule = "kitty";
            sourceObject = obj262;
            superDepth = origSuperDepth;
          }
          obj_init_262.apply(obj262, []);
          obj200.data["action"] = obj262;
          var reader_kitty_action_265 = function() {
            return this.data["action"];
          }
          obj200.methods["action"] = reader_kitty_action_265;
          obj200.data["action"] = obj262;
          var writer_kitty_action_265 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj200.methods["action:="] = writer_kitty_action_265;
          reader_kitty_action_265.confidential = true;
          writer_kitty_action_265.confidential = true;
          lineNumber = 55;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], obj262)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj200.mutable = true;
          sourceObject = obj200;
          obj200.data["image"] = undefined;
          var reader_kitty_image_266 = function() {
            return this.data["image"];
          }
          obj200.methods["image"] = reader_kitty_image_266;
          obj200.data["image"] = undefined;
          var writer_kitty_image_266 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj200.methods["image:="] = writer_kitty_image_266;
          reader_kitty_image_266.confidential = true;
          writer_kitty_image_266.confidential = true;
          obj200.mutable = true;
          sourceObject = obj200;
          lineNumber = 63
          onSelf = true;
          var call267 = callmethod(this, "awake", [0]);
          sourceObject = obj200;
          sourceObject = obj200;
          sourceObject = obj200;
          sourceObject = obj200;
          sourceObject = obj200;
          sourceObject = obj200;
          sourceObject = obj200;
          sourceObject = obj200;
          sourceObject = obj200;
          sourceObject = obj200;
          sourceObject = obj200;
          sourceObject = obj200;
          sourceObject = obj200;
          sourceObject = obj200;
          sourceObject = obj200;
          superDepth = origSuperDepth;
        }
        obj_init_200.apply(inheritingObject, []);
        return obj200
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj128.methods["new()object"] = func199;
    var func268 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 47
        var string269 = new GraceString("class KittyEntity");
        return string269
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func268.paramCounts = [
    ];
    func268.variableArities = [
    ];
    obj128.methods["asDebugString"] = func268;
    func268.definitionLine = 47;
    func268.definitionModule = "kitty";
    sourceObject = obj128;
    sourceObject = obj128;
    superDepth = origSuperDepth;
  }
  obj_init_128.apply(obj128, []);
  var var_KittyEntity = obj128;
  lineNumber = 137
  lineNumber = 144
  var func270 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func270.paramCounts[0])
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
  func270.paramCounts = [
    0,
  ];
  func270.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func270;
  func270.definitionLine = 144;
  func270.definitionModule = "kitty";
  var obj271 = Grace_allocObject();
  obj271.definitionModule = "kitty";
  obj271.definitionLine = 144;
  obj271.outer = this;
  var reader_kitty_outer_272 = function() {
    return this.outer;
  }
  obj271.methods["outer"] = reader_kitty_outer_272;
  function obj_init_271() {
    var origSuperDepth = superDepth;
    superDepth = obj271;
    obj271.annotations = [];
    var func273 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func273.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj274 = Grace_allocObject();
        obj274.definitionModule = "kitty";
        obj274.definitionLine = 144;
        obj274.outer = this;
        var reader_kitty_outer_275 = function() {
          return this.outer;
        }
        obj274.methods["outer"] = reader_kitty_outer_275;
        function obj_init_274() {
          var origSuperDepth = superDepth;
          superDepth = obj274;
          obj274.annotations = [];
          var func276 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func276.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 180
              var if277 = var_done;
              lineNumber = 176
              onSelf = true;
              var call278 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call278)) {
                lineNumber = 178
                lineNumber = 177
                var bool279 = new GraceBoolean(false)
                return bool279
              }
              lineNumber = 181
              lineNumber = 144
              lineNumber = 180
              var call280 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call281 = callmethod(this, "document:=", [1], call280);
              lineNumber = 181
              lineNumber = 180
              lineNumber = 181
              var string282 = new GraceString("standard-canvas");
              onSelf = true;
              var call283 = callmethod(this, "document", [0]);
              var call284 = callmethod(call283,"getElementById", [1], string282);
              onSelf = true;
              var call285 = callmethod(this, "canvas:=", [1], call284);
              lineNumber = 183
              lineNumber = 180
              lineNumber = 182
              onSelf = true;
              var call286 = callmethod(this, "canvas", [0]);
              var call287 = callmethod(call286,"width", [0]);
              onSelf = true;
              var call288 = callmethod(this, "canvasWidth:=", [1], call287);
              lineNumber = 186
              lineNumber = 182
              lineNumber = 183
              onSelf = true;
              var call289 = callmethod(this, "canvas", [0]);
              var call290 = callmethod(call289,"height", [0]);
              onSelf = true;
              var call291 = callmethod(this, "canvasHeight:=", [1], call290);
              lineNumber = 198
              var block292 = Grace_allocObject();
              block292.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block292.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block292.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block292.methods["match"] = GraceBlock_match;
              block292.methods["prefix?"] = GraceBlock_lift;
              block292.receiver = this;
              block292.className = 'block<kitty:198>';
              block292.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 189
                lineNumber = 188
                onSelf = true;
                var call293 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call295 = callmethod(this, "canvas", [0]);
                var call296 = callmethod(call295,"offsetWidth", [0]);
                onSelf = true;
                var call298 = callmethod(this, "canvas", [0]);
                var call299 = callmethod(call298,"offsetLeft", [0]);
                var call301 = callmethod(var_ev,"clientX", [0]);
                var diff303 = callmethod(call301, "-", [1], call299);
                var quotient305 = callmethod(diff303, "/", [1], call296);
                var prod307 = callmethod(quotient305, "*", [1], call293);
                var var_x = prod307;
                lineNumber = 189;
                moduleName = "kitty";
                lineNumber = 188
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 193
                lineNumber = 189
                onSelf = true;
                var call308 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call310 = callmethod(this, "canvas", [0]);
                var call311 = callmethod(call310,"offsetHeight", [0]);
                onSelf = true;
                var call313 = callmethod(this, "canvas", [0]);
                var call314 = callmethod(call313,"offsetTop", [0]);
                var call316 = callmethod(var_ev,"clientY", [0]);
                var diff318 = callmethod(call316, "-", [1], call314);
                var quotient320 = callmethod(diff318, "/", [1], call311);
                var prod322 = callmethod(quotient320, "*", [1], call308);
                var var_y = prod322;
                lineNumber = 193;
                moduleName = "kitty";
                lineNumber = 189
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 197
                var if323 = var_done;
                lineNumber = 193
                var opresult326 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call329 = callmethod(this, "canvasWidth", [0]);
                var diff331 = callmethod(call329, "-", [1], new GraceNum(20));
                var opresult334 = callmethod(var_x, ">", [1], diff331);
                var opresult336 = callmethod(opresult334, "&&", [1], opresult326);
                if (Grace_isTrue(opresult336)) {
                  lineNumber = 194
                  var call337 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 195
                  onSelf = true;
                  var call338 = callmethod(this, "stop", [0]);
                  if323 = call338;
                }
                return if323;
              };
              var_mouseDownListener = block292;
              lineNumber = 198
              var string339 = new GraceString("mousedown");
              onSelf = true;
              var call340 = callmethod(this, "canvas", [0]);
              var call341 = callmethod(call340,"addEventListener", [2], string339, var_mouseDownListener);
              lineNumber = 208
              var block342 = Grace_allocObject();
              block342.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block342.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block342.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block342.methods["match"] = GraceBlock_match;
              block342.methods["prefix?"] = GraceBlock_lift;
              block342.receiver = this;
              block342.className = 'block<kitty:208>';
              block342.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 206
                var if343 = var_done;
                lineNumber = 203
                var call345 = callmethod(var_ev,"keyCode", [0]);
                var opresult347 = callmethod(call345, "==", [1], new GraceNum(81));
                if (Grace_isTrue(opresult347)) {
                  lineNumber = 204
                  onSelf = true;
                  var call348 = callmethod(this, "stop", [0]);
                  if343 = call348;
                }
                lineNumber = 207
                lineNumber = 203
                lineNumber = 206
                var call349 = callmethod(var_ev,"keyCode", [0]);
                onSelf = true;
                var call350 = callmethod(this, "currentKeyDown:=", [1], call349);
                return call350;
              };
              var_keyDownListener = block342;
              lineNumber = 208
              var string351 = new GraceString("keydown");
              onSelf = true;
              var call352 = callmethod(this, "document", [0]);
              var call353 = callmethod(call352,"addEventListener", [2], string351, var_keyDownListener);
              lineNumber = 214
              var block354 = Grace_allocObject();
              block354.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block354.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block354.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block354.methods["match"] = GraceBlock_match;
              block354.methods["prefix?"] = GraceBlock_lift;
              block354.receiver = this;
              block354.className = 'block<kitty:214>';
              block354.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 213
                lineNumber = 206
                lineNumber = 213
                lineNumber = 212
                var call355 = callmethod(new GraceNum(1),"prefix-", [0]);
                onSelf = true;
                var call356 = callmethod(this, "currentKeyDown:=", [1], call355);
                return call356;
              };
              var_keyUpListener = block354;
              lineNumber = 214
              var string357 = new GraceString("keyup");
              onSelf = true;
              var call358 = callmethod(this, "document", [0]);
              var call359 = callmethod(call358,"addEventListener", [2], string357, var_keyUpListener);
              lineNumber = 216
              lineNumber = 206
              lineNumber = 216
              var string360 = new GraceString("canvas");
              var call361 = callmethod(var_dom,"document", [0]);
              var call362 = callmethod(call361,"createElement", [1], string360);
              onSelf = true;
              var call363 = callmethod(this, "backingCanvas:=", [1], call362);
              lineNumber = 218
              lineNumber = 216
              lineNumber = 217
              onSelf = true;
              var call364 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call365 = callmethod(this, "backingCanvas", [0]);
              var call366 = callmethod(call365,"height:=", [1], call364);
              lineNumber = 219
              lineNumber = 216
              lineNumber = 218
              onSelf = true;
              var call367 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call368 = callmethod(this, "backingCanvas", [0]);
              var call369 = callmethod(call368,"width:=", [1], call367);
              lineNumber = 219
              lineNumber = 216
              lineNumber = 219
              var string370 = new GraceString("2d");
              onSelf = true;
              var call371 = callmethod(this, "backingCanvas", [0]);
              var call372 = callmethod(call371,"getContext", [1], string370);
              onSelf = true;
              var call373 = callmethod(this, "backingContext:=", [1], call372);
              lineNumber = 220
              lineNumber = 216
              lineNumber = 220
              var string374 = new GraceString("2d");
              onSelf = true;
              var call375 = callmethod(this, "canvas", [0]);
              var call376 = callmethod(call375,"getContext", [1], string374);
              onSelf = true;
              var call377 = callmethod(this, "mctx:=", [1], call376);
              lineNumber = 223
              var string378 = new GraceString("doggo.jpg");
              onSelf = true;
              var call379 = callmethod(this, "setBackground", [1], string378);
              lineNumber = 231
              lineNumber = 216
              lineNumber = 225
              var bool380 = new GraceBoolean(true)
              onSelf = true;
              var call381 = callmethod(this, "isInit:=", [1], bool380);
              return call381
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func276.paramCounts = [
            0,
          ];
          func276.variableArities = [
            false,
          ];
          obj274.methods["init"] = func276;
          func276.definitionLine = 172;
          func276.definitionModule = "kitty";
          var func382 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func382.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 237
              lineNumber = 216
              lineNumber = 236
              var bool383 = new GraceBoolean(true)
              onSelf = true;
              var call384 = callmethod(this, "isRunning:=", [1], bool383);
              lineNumber = 237
              var block385 = Grace_allocObject();
              block385.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block385.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block385.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block385.methods["match"] = GraceBlock_match;
              block385.methods["prefix?"] = GraceBlock_lift;
              block385.receiver = this;
              block385.className = 'block<kitty:237>';
              block385.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call386 = callmethod(this, "isRunning", [0]);
                return call386;
              };
              lineNumber = 241
              var block387 = Grace_allocObject();
              block387.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block387.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block387.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block387.methods["match"] = GraceBlock_match;
              block387.methods["prefix?"] = GraceBlock_lift;
              block387.receiver = this;
              block387.className = 'block<kitty:241>';
              block387.real = function(
              ) {
                sourceObject = this;
                lineNumber = 238
                onSelf = true;
                var call388 = callmethod(this, "update", [0]);
                return call388;
              };
              lineNumber = 237
              var call389 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block385, new GraceNum(10), block387);
              return call389
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func382.paramCounts = [
            0,
          ];
          func382.variableArities = [
            false,
          ];
          obj274.methods["start"] = func382;
          func382.definitionLine = 234;
          func382.definitionModule = "kitty";
          var func390 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func390.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 250
              lineNumber = 216
              lineNumber = 249
              onSelf = true;
              var call391 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call392 = callmethod(this, "mctx", [0]);
              var call393 = callmethod(call392,"fillStyle:=", [1], call391);
              lineNumber = 250
              onSelf = true;
              var call394 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call395 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call396 = callmethod(this, "mctx", [0]);
              var call397 = callmethod(call396,"fillRect", [4], new GraceNum(0), new GraceNum(0), call394, call395);
              lineNumber = 251
              onSelf = true;
              var call398 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call399 = callmethod(this, "mctx", [0]);
              var call400 = callmethod(call399,"drawImage", [3], call398, new GraceNum(0), new GraceNum(0));
              lineNumber = 252
              onSelf = true;
              var call401 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call403 = callmethod(this, "canvasWidth", [0]);
              var quotient405 = callmethod(call403, "/", [1], new GraceNum(2));
              onSelf = true;
              var call407 = callmethod(this, "canvasHeight", [0]);
              var quotient409 = callmethod(call407, "/", [1], new GraceNum(2));
              onSelf = true;
              var call410 = callmethod(this, "background", [0]);
              var call411 = callmethod(call410,"draw", [4], call401, quotient405, quotient409, new GraceNum(0));
              lineNumber = 255
              onSelf = true;
              var call412 = callmethod(this, "entities", [0]);
              lineNumber = 261
              var block413 = Grace_allocObject();
              block413.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block413.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block413.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block413.methods["match"] = GraceBlock_match;
              block413.methods["prefix?"] = GraceBlock_lift;
              block413.receiver = this;
              block413.className = 'block<kitty:261>';
              block413.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 256
                var call414 = callmethod(var_entity,"update", [0]);
                lineNumber = 257
                onSelf = true;
                var call415 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call417 = callmethod(this, "canvasWidth", [0]);
                var quotient419 = callmethod(call417, "/", [1], new GraceNum(2));
                onSelf = true;
                var call421 = callmethod(this, "canvasHeight", [0]);
                var quotient423 = callmethod(call421, "/", [1], new GraceNum(2));
                var call424 = callmethod(var_entity,"draw", [3], call415, quotient419, quotient423);
                return call424;
              };
              var call425 = callmethod(Grace_prelude,"for()do", [1, 1], call412, block413);
              return call425
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func390.paramCounts = [
            0,
          ];
          func390.variableArities = [
            false,
          ];
          obj274.methods["update"] = func390;
          func390.definitionLine = 244;
          func390.definitionModule = "kitty";
          var func426 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func426.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 264
              var string427 = new GraceString("WORLD STOPPING...");
              var call428 = Grace_print(string427);
              lineNumber = 266
              lineNumber = 256
              lineNumber = 265
              var bool429 = new GraceBoolean(false)
              onSelf = true;
              var call430 = callmethod(this, "isRunning:=", [1], bool429);
              lineNumber = 266
              var string431 = new GraceString("mousedown");
              onSelf = true;
              var call432 = callmethod(this, "canvas", [0]);
              var call433 = callmethod(call432,"removeEventListener", [2], string431, var_mouseDownListener);
              lineNumber = 267
              var string434 = new GraceString("keydown");
              onSelf = true;
              var call435 = callmethod(this, "document", [0]);
              var call436 = callmethod(call435,"removeEventListener", [2], string434, var_keyDownListener);
              lineNumber = 268
              var string437 = new GraceString("keyup");
              onSelf = true;
              var call438 = callmethod(this, "document", [0]);
              var call439 = callmethod(call438,"removeEventListener", [2], string437, var_keyUpListener);
              return call439
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func426.paramCounts = [
            0,
          ];
          func426.variableArities = [
            false,
          ];
          obj274.methods["stop"] = func426;
          func426.definitionLine = 263;
          func426.definitionModule = "kitty";
          var func440 = function(argcv) {
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func440.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isKeyDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 273
              lineNumber = 272
              onSelf = true;
              var call441 = callmethod(this, "currentKeyDown", [0]);
              var opresult444 = callmethod(var_key, "==", [1], call441);
              return opresult444
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func440.paramCounts = [
            1,
          ];
          func440.variableArities = [
            false,
          ];
          obj274.methods["isKeyDown"] = func440;
          func440.definitionLine = 271;
          func440.definitionModule = "kitty";
          var func445 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func445.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 276
              lineNumber = 256
              lineNumber = 276
              onSelf = true;
              var call446 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call447 = callmethod(this, "canvasHeight", [0]);
              var call448 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call449 = callmethod(call448, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call450 = callmethod(call449, "Image", [3], var_background__39__, call446, call447);
              onSelf = true;
              var call451 = callmethod(this, "background:=", [1], call450);
              return call451
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func445.paramCounts = [
            1,
          ];
          func445.variableArities = [
            false,
          ];
          obj274.methods["setBackground"] = func445;
          func445.definitionLine = 275;
          func445.definitionModule = "kitty";
          var func452 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func452.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 280
              onSelf = true;
              var call453 = callmethod(this, "entities", [0]);
              var call454 = callmethod(call453,"push", [1], var_e);
              return call454
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func452.paramTypes = [];
          func452.paramTypes.push([]);
          func452.paramCounts = [
            1,
          ];
          func452.variableArities = [
            false,
          ];
          obj274.methods["addEntity"] = func452;
          func452.definitionLine = 279;
          func452.definitionModule = "kitty";
          sourceObject = obj274;
          obj274.data["background"] = undefined;
          var reader_kitty_background_455 = function() {
            return this.data["background"];
          }
          obj274.methods["background"] = reader_kitty_background_455;
          obj274.data["background"] = undefined;
          var writer_kitty_background_455 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj274.methods["background:="] = writer_kitty_background_455;
          reader_kitty_background_455.confidential = true;
          writer_kitty_background_455.confidential = true;
          obj274.mutable = true;
          sourceObject = obj274;
          lineNumber = 149
          var string456 = new GraceString("black");
          obj274.data["backgroundColour"] = string456;
          var reader_kitty_backgroundColour_457 = function() {
            return this.data["backgroundColour"];
          }
          obj274.methods["backgroundColour"] = reader_kitty_backgroundColour_457;
          obj274.data["backgroundColour"] = string456;
          var writer_kitty_backgroundColour_457 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj274.methods["backgroundColour:="] = writer_kitty_backgroundColour_457;
          reader_kitty_backgroundColour_457.confidential = true;
          writer_kitty_backgroundColour_457.confidential = true;
          lineNumber = 151;
          moduleName = "kitty";
          lineNumber = 149
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string456)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj274.mutable = true;
          sourceObject = obj274;
          obj274.data["document"] = undefined;
          var reader_kitty_document_458 = function() {
            return this.data["document"];
          }
          obj274.methods["document"] = reader_kitty_document_458;
          obj274.data["document"] = undefined;
          var writer_kitty_document_458 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj274.methods["document:="] = writer_kitty_document_458;
          reader_kitty_document_458.confidential = true;
          writer_kitty_document_458.confidential = true;
          obj274.mutable = true;
          sourceObject = obj274;
          obj274.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_459 = function() {
            return this.data["backingCanvas"];
          }
          obj274.methods["backingCanvas"] = reader_kitty_backingCanvas_459;
          obj274.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_459 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj274.methods["backingCanvas:="] = writer_kitty_backingCanvas_459;
          reader_kitty_backingCanvas_459.confidential = true;
          writer_kitty_backingCanvas_459.confidential = true;
          obj274.mutable = true;
          sourceObject = obj274;
          obj274.data["backingContext"] = undefined;
          var reader_kitty_backingContext_460 = function() {
            return this.data["backingContext"];
          }
          obj274.methods["backingContext"] = reader_kitty_backingContext_460;
          obj274.data["backingContext"] = undefined;
          var writer_kitty_backingContext_460 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj274.methods["backingContext:="] = writer_kitty_backingContext_460;
          reader_kitty_backingContext_460.confidential = true;
          writer_kitty_backingContext_460.confidential = true;
          obj274.mutable = true;
          sourceObject = obj274;
          obj274.data["canvas"] = undefined;
          var reader_kitty_canvas_461 = function() {
            return this.data["canvas"];
          }
          obj274.methods["canvas"] = reader_kitty_canvas_461;
          obj274.data["canvas"] = undefined;
          var writer_kitty_canvas_461 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj274.methods["canvas:="] = writer_kitty_canvas_461;
          reader_kitty_canvas_461.confidential = true;
          writer_kitty_canvas_461.confidential = true;
          obj274.mutable = true;
          sourceObject = obj274;
          obj274.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_462 = function() {
            return this.data["canvasWidth"];
          }
          obj274.methods["canvasWidth"] = reader_kitty_canvasWidth_462;
          obj274.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_462 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj274.methods["canvasWidth:="] = writer_kitty_canvasWidth_462;
          reader_kitty_canvasWidth_462.confidential = true;
          writer_kitty_canvasWidth_462.confidential = true;
          obj274.mutable = true;
          sourceObject = obj274;
          obj274.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_463 = function() {
            return this.data["canvasHeight"];
          }
          obj274.methods["canvasHeight"] = reader_kitty_canvasHeight_463;
          obj274.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_463 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj274.methods["canvasHeight:="] = writer_kitty_canvasHeight_463;
          reader_kitty_canvasHeight_463.confidential = true;
          writer_kitty_canvasHeight_463.confidential = true;
          obj274.mutable = true;
          sourceObject = obj274;
          lineNumber = 160
          var call464 = callmethod(var_collections,"list", [0]);
          var call465 = callmethod(call464,"new", [0]);
          obj274.data["entities"] = call465;
          var reader_kitty_entities_466 = function() {
            return this.data["entities"];
          }
          obj274.methods["entities"] = reader_kitty_entities_466;
          obj274.data["entities"] = call465;
          var writer_kitty_entities_466 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj274.methods["entities:="] = writer_kitty_entities_466;
          reader_kitty_entities_466.confidential = true;
          writer_kitty_entities_466.confidential = true;
          lineNumber = 162;
          moduleName = "kitty";
          lineNumber = 160
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call465)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj274.mutable = true;
          sourceObject = obj274;
          lineNumber = 162
          var bool467 = new GraceBoolean(false)
          obj274.data["isInit"] = bool467;
          var reader_kitty_isInit_468 = function() {
            return this.data["isInit"];
          }
          obj274.methods["isInit"] = reader_kitty_isInit_468;
          obj274.data["isInit"] = bool467;
          var writer_kitty_isInit_468 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj274.methods["isInit:="] = writer_kitty_isInit_468;
          reader_kitty_isInit_468.confidential = true;
          writer_kitty_isInit_468.confidential = true;
          lineNumber = 163;
          moduleName = "kitty";
          lineNumber = 162
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool467)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj274.mutable = true;
          sourceObject = obj274;
          lineNumber = 163
          var bool469 = new GraceBoolean(false)
          obj274.data["isRunning"] = bool469;
          var reader_kitty_isRunning_470 = function() {
            return this.data["isRunning"];
          }
          obj274.methods["isRunning"] = reader_kitty_isRunning_470;
          obj274.data["isRunning"] = bool469;
          var writer_kitty_isRunning_470 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj274.methods["isRunning:="] = writer_kitty_isRunning_470;
          reader_kitty_isRunning_470.confidential = true;
          writer_kitty_isRunning_470.confidential = true;
          lineNumber = 165;
          moduleName = "kitty";
          lineNumber = 163
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool469)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj274.mutable = true;
          sourceObject = obj274;
          obj274.data["mctx"] = undefined;
          var reader_kitty_mctx_471 = function() {
            return this.data["mctx"];
          }
          obj274.methods["mctx"] = reader_kitty_mctx_471;
          obj274.data["mctx"] = undefined;
          var writer_kitty_mctx_471 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj274.methods["mctx:="] = writer_kitty_mctx_471;
          reader_kitty_mctx_471.confidential = true;
          writer_kitty_mctx_471.confidential = true;
          obj274.mutable = true;
          sourceObject = obj274;
          lineNumber = 169
          lineNumber = 167
          var call472 = callmethod(new GraceNum(1),"prefix-", [0]);
          obj274.data["currentKeyDown"] = call472;
          var reader_kitty_currentKeyDown_473 = function() {
            return this.data["currentKeyDown"];
          }
          obj274.methods["currentKeyDown"] = reader_kitty_currentKeyDown_473;
          obj274.data["currentKeyDown"] = call472;
          var writer_kitty_currentKeyDown_473 = function(argcv, o) {
            this.data["currentKeyDown"] = o;
          }
          obj274.methods["currentKeyDown:="] = writer_kitty_currentKeyDown_473;
          reader_kitty_currentKeyDown_473.confidential = true;
          writer_kitty_currentKeyDown_473.confidential = true;
          lineNumber = 169;
          moduleName = "kitty";
          lineNumber = 167
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call472)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'currentKeyDown' to be of type Unknown"))
          obj274.mutable = true;
          sourceObject = obj274;
          lineNumber = 169
          onSelf = true;
          var call474 = callmethod(this, "init", [0]);
          sourceObject = obj274;
          sourceObject = obj274;
          sourceObject = obj274;
          sourceObject = obj274;
          sourceObject = obj274;
          sourceObject = obj274;
          sourceObject = obj274;
          superDepth = origSuperDepth;
        }
        obj_init_274.apply(obj274, []);
        return obj274
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func273.paramCounts = [
      0,
    ];
    func273.variableArities = [
      false,
    ];
    obj271.methods["new"] = func273;
    func273.definitionLine = 144;
    func273.definitionModule = "kitty";
    var func475 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj476 = Grace_allocObject();
        obj476.definitionModule = "kitty";
        obj476.definitionLine = 144;
        var inho476 = inheritingObject;
        while (inho476.superobj) inho476 = inho476.superobj;
        inho476.superobj = obj476;
        obj476.data = inheritingObject.data;
        obj476.outer = this;
        var reader_kitty_outer_477 = function() {
          return this.outer;
        }
        obj476.methods["outer"] = reader_kitty_outer_477;
        function obj_init_476() {
          var origSuperDepth = superDepth;
          superDepth = obj476;
          obj476.annotations = [];
          var func478 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func478.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 180
              var if479 = var_done;
              lineNumber = 176
              onSelf = true;
              var call480 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call480)) {
                lineNumber = 178
                lineNumber = 177
                var bool481 = new GraceBoolean(false)
                return bool481
              }
              lineNumber = 181
              lineNumber = 160
              lineNumber = 180
              var call482 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call483 = callmethod(this, "document:=", [1], call482);
              lineNumber = 181
              lineNumber = 180
              lineNumber = 181
              var string484 = new GraceString("standard-canvas");
              onSelf = true;
              var call485 = callmethod(this, "document", [0]);
              var call486 = callmethod(call485,"getElementById", [1], string484);
              onSelf = true;
              var call487 = callmethod(this, "canvas:=", [1], call486);
              lineNumber = 183
              lineNumber = 180
              lineNumber = 182
              onSelf = true;
              var call488 = callmethod(this, "canvas", [0]);
              var call489 = callmethod(call488,"width", [0]);
              onSelf = true;
              var call490 = callmethod(this, "canvasWidth:=", [1], call489);
              lineNumber = 186
              lineNumber = 182
              lineNumber = 183
              onSelf = true;
              var call491 = callmethod(this, "canvas", [0]);
              var call492 = callmethod(call491,"height", [0]);
              onSelf = true;
              var call493 = callmethod(this, "canvasHeight:=", [1], call492);
              lineNumber = 198
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
              block494.className = 'block<kitty:198>';
              block494.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 189
                lineNumber = 188
                onSelf = true;
                var call495 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call497 = callmethod(this, "canvas", [0]);
                var call498 = callmethod(call497,"offsetWidth", [0]);
                onSelf = true;
                var call500 = callmethod(this, "canvas", [0]);
                var call501 = callmethod(call500,"offsetLeft", [0]);
                var call503 = callmethod(var_ev,"clientX", [0]);
                var diff505 = callmethod(call503, "-", [1], call501);
                var quotient507 = callmethod(diff505, "/", [1], call498);
                var prod509 = callmethod(quotient507, "*", [1], call495);
                var var_x = prod509;
                lineNumber = 189;
                moduleName = "kitty";
                lineNumber = 188
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 193
                lineNumber = 189
                onSelf = true;
                var call510 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call512 = callmethod(this, "canvas", [0]);
                var call513 = callmethod(call512,"offsetHeight", [0]);
                onSelf = true;
                var call515 = callmethod(this, "canvas", [0]);
                var call516 = callmethod(call515,"offsetTop", [0]);
                var call518 = callmethod(var_ev,"clientY", [0]);
                var diff520 = callmethod(call518, "-", [1], call516);
                var quotient522 = callmethod(diff520, "/", [1], call513);
                var prod524 = callmethod(quotient522, "*", [1], call510);
                var var_y = prod524;
                lineNumber = 193;
                moduleName = "kitty";
                lineNumber = 189
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 197
                var if525 = var_done;
                lineNumber = 193
                var opresult528 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call531 = callmethod(this, "canvasWidth", [0]);
                var diff533 = callmethod(call531, "-", [1], new GraceNum(20));
                var opresult536 = callmethod(var_x, ">", [1], diff533);
                var opresult538 = callmethod(opresult536, "&&", [1], opresult528);
                if (Grace_isTrue(opresult538)) {
                  lineNumber = 194
                  var call539 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 195
                  onSelf = true;
                  var call540 = callmethod(this, "stop", [0]);
                  if525 = call540;
                }
                return if525;
              };
              var_mouseDownListener = block494;
              lineNumber = 198
              var string541 = new GraceString("mousedown");
              onSelf = true;
              var call542 = callmethod(this, "canvas", [0]);
              var call543 = callmethod(call542,"addEventListener", [2], string541, var_mouseDownListener);
              lineNumber = 208
              var block544 = Grace_allocObject();
              block544.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block544.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block544.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block544.methods["match"] = GraceBlock_match;
              block544.methods["prefix?"] = GraceBlock_lift;
              block544.receiver = this;
              block544.className = 'block<kitty:208>';
              block544.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 206
                var if545 = var_done;
                lineNumber = 203
                var call547 = callmethod(var_ev,"keyCode", [0]);
                var opresult549 = callmethod(call547, "==", [1], new GraceNum(81));
                if (Grace_isTrue(opresult549)) {
                  lineNumber = 204
                  onSelf = true;
                  var call550 = callmethod(this, "stop", [0]);
                  if545 = call550;
                }
                lineNumber = 207
                lineNumber = 203
                lineNumber = 206
                var call551 = callmethod(var_ev,"keyCode", [0]);
                onSelf = true;
                var call552 = callmethod(this, "currentKeyDown:=", [1], call551);
                return call552;
              };
              var_keyDownListener = block544;
              lineNumber = 208
              var string553 = new GraceString("keydown");
              onSelf = true;
              var call554 = callmethod(this, "document", [0]);
              var call555 = callmethod(call554,"addEventListener", [2], string553, var_keyDownListener);
              lineNumber = 214
              var block556 = Grace_allocObject();
              block556.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block556.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block556.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block556.methods["match"] = GraceBlock_match;
              block556.methods["prefix?"] = GraceBlock_lift;
              block556.receiver = this;
              block556.className = 'block<kitty:214>';
              block556.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 213
                lineNumber = 206
                lineNumber = 213
                lineNumber = 212
                var call557 = callmethod(new GraceNum(1),"prefix-", [0]);
                onSelf = true;
                var call558 = callmethod(this, "currentKeyDown:=", [1], call557);
                return call558;
              };
              var_keyUpListener = block556;
              lineNumber = 214
              var string559 = new GraceString("keyup");
              onSelf = true;
              var call560 = callmethod(this, "document", [0]);
              var call561 = callmethod(call560,"addEventListener", [2], string559, var_keyUpListener);
              lineNumber = 216
              lineNumber = 206
              lineNumber = 216
              var string562 = new GraceString("canvas");
              var call563 = callmethod(var_dom,"document", [0]);
              var call564 = callmethod(call563,"createElement", [1], string562);
              onSelf = true;
              var call565 = callmethod(this, "backingCanvas:=", [1], call564);
              lineNumber = 218
              lineNumber = 216
              lineNumber = 217
              onSelf = true;
              var call566 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call567 = callmethod(this, "backingCanvas", [0]);
              var call568 = callmethod(call567,"height:=", [1], call566);
              lineNumber = 219
              lineNumber = 216
              lineNumber = 218
              onSelf = true;
              var call569 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call570 = callmethod(this, "backingCanvas", [0]);
              var call571 = callmethod(call570,"width:=", [1], call569);
              lineNumber = 219
              lineNumber = 216
              lineNumber = 219
              var string572 = new GraceString("2d");
              onSelf = true;
              var call573 = callmethod(this, "backingCanvas", [0]);
              var call574 = callmethod(call573,"getContext", [1], string572);
              onSelf = true;
              var call575 = callmethod(this, "backingContext:=", [1], call574);
              lineNumber = 220
              lineNumber = 216
              lineNumber = 220
              var string576 = new GraceString("2d");
              onSelf = true;
              var call577 = callmethod(this, "canvas", [0]);
              var call578 = callmethod(call577,"getContext", [1], string576);
              onSelf = true;
              var call579 = callmethod(this, "mctx:=", [1], call578);
              lineNumber = 223
              var string580 = new GraceString("doggo.jpg");
              onSelf = true;
              var call581 = callmethod(this, "setBackground", [1], string580);
              lineNumber = 231
              lineNumber = 216
              lineNumber = 225
              var bool582 = new GraceBoolean(true)
              onSelf = true;
              var call583 = callmethod(this, "isInit:=", [1], bool582);
              return call583
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func478.paramCounts = [
            0,
          ];
          func478.variableArities = [
            false,
          ];
          obj476.methods["init"] = func478;
          func478.definitionLine = 172;
          func478.definitionModule = "kitty";
          var func584 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func584.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 237
              lineNumber = 216
              lineNumber = 236
              var bool585 = new GraceBoolean(true)
              onSelf = true;
              var call586 = callmethod(this, "isRunning:=", [1], bool585);
              lineNumber = 237
              var block587 = Grace_allocObject();
              block587.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block587.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block587.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block587.methods["match"] = GraceBlock_match;
              block587.methods["prefix?"] = GraceBlock_lift;
              block587.receiver = this;
              block587.className = 'block<kitty:237>';
              block587.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call588 = callmethod(this, "isRunning", [0]);
                return call588;
              };
              lineNumber = 241
              var block589 = Grace_allocObject();
              block589.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block589.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block589.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block589.methods["match"] = GraceBlock_match;
              block589.methods["prefix?"] = GraceBlock_lift;
              block589.receiver = this;
              block589.className = 'block<kitty:241>';
              block589.real = function(
              ) {
                sourceObject = this;
                lineNumber = 238
                onSelf = true;
                var call590 = callmethod(this, "update", [0]);
                return call590;
              };
              lineNumber = 237
              var call591 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block587, new GraceNum(10), block589);
              return call591
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func584.paramCounts = [
            0,
          ];
          func584.variableArities = [
            false,
          ];
          obj476.methods["start"] = func584;
          func584.definitionLine = 234;
          func584.definitionModule = "kitty";
          var func592 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func592.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 250
              lineNumber = 216
              lineNumber = 249
              onSelf = true;
              var call593 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call594 = callmethod(this, "mctx", [0]);
              var call595 = callmethod(call594,"fillStyle:=", [1], call593);
              lineNumber = 250
              onSelf = true;
              var call596 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call597 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call598 = callmethod(this, "mctx", [0]);
              var call599 = callmethod(call598,"fillRect", [4], new GraceNum(0), new GraceNum(0), call596, call597);
              lineNumber = 251
              onSelf = true;
              var call600 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call601 = callmethod(this, "mctx", [0]);
              var call602 = callmethod(call601,"drawImage", [3], call600, new GraceNum(0), new GraceNum(0));
              lineNumber = 252
              onSelf = true;
              var call603 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call605 = callmethod(this, "canvasWidth", [0]);
              var quotient607 = callmethod(call605, "/", [1], new GraceNum(2));
              onSelf = true;
              var call609 = callmethod(this, "canvasHeight", [0]);
              var quotient611 = callmethod(call609, "/", [1], new GraceNum(2));
              onSelf = true;
              var call612 = callmethod(this, "background", [0]);
              var call613 = callmethod(call612,"draw", [4], call603, quotient607, quotient611, new GraceNum(0));
              lineNumber = 255
              onSelf = true;
              var call614 = callmethod(this, "entities", [0]);
              lineNumber = 261
              var block615 = Grace_allocObject();
              block615.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block615.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block615.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block615.methods["match"] = GraceBlock_match;
              block615.methods["prefix?"] = GraceBlock_lift;
              block615.receiver = this;
              block615.className = 'block<kitty:261>';
              block615.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 256
                var call616 = callmethod(var_entity,"update", [0]);
                lineNumber = 257
                onSelf = true;
                var call617 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call619 = callmethod(this, "canvasWidth", [0]);
                var quotient621 = callmethod(call619, "/", [1], new GraceNum(2));
                onSelf = true;
                var call623 = callmethod(this, "canvasHeight", [0]);
                var quotient625 = callmethod(call623, "/", [1], new GraceNum(2));
                var call626 = callmethod(var_entity,"draw", [3], call617, quotient621, quotient625);
                return call626;
              };
              var call627 = callmethod(Grace_prelude,"for()do", [1, 1], call614, block615);
              return call627
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func592.paramCounts = [
            0,
          ];
          func592.variableArities = [
            false,
          ];
          obj476.methods["update"] = func592;
          func592.definitionLine = 244;
          func592.definitionModule = "kitty";
          var func628 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func628.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 264
              var string629 = new GraceString("WORLD STOPPING...");
              var call630 = Grace_print(string629);
              lineNumber = 266
              lineNumber = 256
              lineNumber = 265
              var bool631 = new GraceBoolean(false)
              onSelf = true;
              var call632 = callmethod(this, "isRunning:=", [1], bool631);
              lineNumber = 266
              var string633 = new GraceString("mousedown");
              onSelf = true;
              var call634 = callmethod(this, "canvas", [0]);
              var call635 = callmethod(call634,"removeEventListener", [2], string633, var_mouseDownListener);
              lineNumber = 267
              var string636 = new GraceString("keydown");
              onSelf = true;
              var call637 = callmethod(this, "document", [0]);
              var call638 = callmethod(call637,"removeEventListener", [2], string636, var_keyDownListener);
              lineNumber = 268
              var string639 = new GraceString("keyup");
              onSelf = true;
              var call640 = callmethod(this, "document", [0]);
              var call641 = callmethod(call640,"removeEventListener", [2], string639, var_keyUpListener);
              return call641
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func628.paramCounts = [
            0,
          ];
          func628.variableArities = [
            false,
          ];
          obj476.methods["stop"] = func628;
          func628.definitionLine = 263;
          func628.definitionModule = "kitty";
          var func642 = function(argcv) {
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func642.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isKeyDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 273
              lineNumber = 272
              onSelf = true;
              var call643 = callmethod(this, "currentKeyDown", [0]);
              var opresult646 = callmethod(var_key, "==", [1], call643);
              return opresult646
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func642.paramCounts = [
            1,
          ];
          func642.variableArities = [
            false,
          ];
          obj476.methods["isKeyDown"] = func642;
          func642.definitionLine = 271;
          func642.definitionModule = "kitty";
          var func647 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func647.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 276
              lineNumber = 256
              lineNumber = 276
              onSelf = true;
              var call648 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call649 = callmethod(this, "canvasHeight", [0]);
              var call650 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call651 = callmethod(call650, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call652 = callmethod(call651, "Image", [3], var_background__39__, call648, call649);
              onSelf = true;
              var call653 = callmethod(this, "background:=", [1], call652);
              return call653
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func647.paramCounts = [
            1,
          ];
          func647.variableArities = [
            false,
          ];
          obj476.methods["setBackground"] = func647;
          func647.definitionLine = 275;
          func647.definitionModule = "kitty";
          var func654 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func654.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 280
              onSelf = true;
              var call655 = callmethod(this, "entities", [0]);
              var call656 = callmethod(call655,"push", [1], var_e);
              return call656
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func654.paramTypes = [];
          func654.paramTypes.push([]);
          func654.paramCounts = [
            1,
          ];
          func654.variableArities = [
            false,
          ];
          obj476.methods["addEntity"] = func654;
          func654.definitionLine = 279;
          func654.definitionModule = "kitty";
          sourceObject = obj476;
          obj476.data["background"] = undefined;
          var reader_kitty_background_657 = function() {
            return this.data["background"];
          }
          obj476.methods["background"] = reader_kitty_background_657;
          obj476.data["background"] = undefined;
          var writer_kitty_background_657 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj476.methods["background:="] = writer_kitty_background_657;
          reader_kitty_background_657.confidential = true;
          writer_kitty_background_657.confidential = true;
          obj476.mutable = true;
          sourceObject = obj476;
          lineNumber = 149
          var string658 = new GraceString("black");
          obj476.data["backgroundColour"] = string658;
          var reader_kitty_backgroundColour_659 = function() {
            return this.data["backgroundColour"];
          }
          obj476.methods["backgroundColour"] = reader_kitty_backgroundColour_659;
          obj476.data["backgroundColour"] = string658;
          var writer_kitty_backgroundColour_659 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj476.methods["backgroundColour:="] = writer_kitty_backgroundColour_659;
          reader_kitty_backgroundColour_659.confidential = true;
          writer_kitty_backgroundColour_659.confidential = true;
          lineNumber = 151;
          moduleName = "kitty";
          lineNumber = 149
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string658)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj476.mutable = true;
          sourceObject = obj476;
          obj476.data["document"] = undefined;
          var reader_kitty_document_660 = function() {
            return this.data["document"];
          }
          obj476.methods["document"] = reader_kitty_document_660;
          obj476.data["document"] = undefined;
          var writer_kitty_document_660 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj476.methods["document:="] = writer_kitty_document_660;
          reader_kitty_document_660.confidential = true;
          writer_kitty_document_660.confidential = true;
          obj476.mutable = true;
          sourceObject = obj476;
          obj476.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_661 = function() {
            return this.data["backingCanvas"];
          }
          obj476.methods["backingCanvas"] = reader_kitty_backingCanvas_661;
          obj476.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_661 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj476.methods["backingCanvas:="] = writer_kitty_backingCanvas_661;
          reader_kitty_backingCanvas_661.confidential = true;
          writer_kitty_backingCanvas_661.confidential = true;
          obj476.mutable = true;
          sourceObject = obj476;
          obj476.data["backingContext"] = undefined;
          var reader_kitty_backingContext_662 = function() {
            return this.data["backingContext"];
          }
          obj476.methods["backingContext"] = reader_kitty_backingContext_662;
          obj476.data["backingContext"] = undefined;
          var writer_kitty_backingContext_662 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj476.methods["backingContext:="] = writer_kitty_backingContext_662;
          reader_kitty_backingContext_662.confidential = true;
          writer_kitty_backingContext_662.confidential = true;
          obj476.mutable = true;
          sourceObject = obj476;
          obj476.data["canvas"] = undefined;
          var reader_kitty_canvas_663 = function() {
            return this.data["canvas"];
          }
          obj476.methods["canvas"] = reader_kitty_canvas_663;
          obj476.data["canvas"] = undefined;
          var writer_kitty_canvas_663 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj476.methods["canvas:="] = writer_kitty_canvas_663;
          reader_kitty_canvas_663.confidential = true;
          writer_kitty_canvas_663.confidential = true;
          obj476.mutable = true;
          sourceObject = obj476;
          obj476.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_664 = function() {
            return this.data["canvasWidth"];
          }
          obj476.methods["canvasWidth"] = reader_kitty_canvasWidth_664;
          obj476.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_664 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj476.methods["canvasWidth:="] = writer_kitty_canvasWidth_664;
          reader_kitty_canvasWidth_664.confidential = true;
          writer_kitty_canvasWidth_664.confidential = true;
          obj476.mutable = true;
          sourceObject = obj476;
          obj476.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_665 = function() {
            return this.data["canvasHeight"];
          }
          obj476.methods["canvasHeight"] = reader_kitty_canvasHeight_665;
          obj476.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_665 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj476.methods["canvasHeight:="] = writer_kitty_canvasHeight_665;
          reader_kitty_canvasHeight_665.confidential = true;
          writer_kitty_canvasHeight_665.confidential = true;
          obj476.mutable = true;
          sourceObject = obj476;
          lineNumber = 160
          var call666 = callmethod(var_collections,"list", [0]);
          var call667 = callmethod(call666,"new", [0]);
          obj476.data["entities"] = call667;
          var reader_kitty_entities_668 = function() {
            return this.data["entities"];
          }
          obj476.methods["entities"] = reader_kitty_entities_668;
          obj476.data["entities"] = call667;
          var writer_kitty_entities_668 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj476.methods["entities:="] = writer_kitty_entities_668;
          reader_kitty_entities_668.confidential = true;
          writer_kitty_entities_668.confidential = true;
          lineNumber = 162;
          moduleName = "kitty";
          lineNumber = 160
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call667)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj476.mutable = true;
          sourceObject = obj476;
          lineNumber = 162
          var bool669 = new GraceBoolean(false)
          obj476.data["isInit"] = bool669;
          var reader_kitty_isInit_670 = function() {
            return this.data["isInit"];
          }
          obj476.methods["isInit"] = reader_kitty_isInit_670;
          obj476.data["isInit"] = bool669;
          var writer_kitty_isInit_670 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj476.methods["isInit:="] = writer_kitty_isInit_670;
          reader_kitty_isInit_670.confidential = true;
          writer_kitty_isInit_670.confidential = true;
          lineNumber = 163;
          moduleName = "kitty";
          lineNumber = 162
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool669)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj476.mutable = true;
          sourceObject = obj476;
          lineNumber = 163
          var bool671 = new GraceBoolean(false)
          obj476.data["isRunning"] = bool671;
          var reader_kitty_isRunning_672 = function() {
            return this.data["isRunning"];
          }
          obj476.methods["isRunning"] = reader_kitty_isRunning_672;
          obj476.data["isRunning"] = bool671;
          var writer_kitty_isRunning_672 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj476.methods["isRunning:="] = writer_kitty_isRunning_672;
          reader_kitty_isRunning_672.confidential = true;
          writer_kitty_isRunning_672.confidential = true;
          lineNumber = 165;
          moduleName = "kitty";
          lineNumber = 163
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool671)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj476.mutable = true;
          sourceObject = obj476;
          obj476.data["mctx"] = undefined;
          var reader_kitty_mctx_673 = function() {
            return this.data["mctx"];
          }
          obj476.methods["mctx"] = reader_kitty_mctx_673;
          obj476.data["mctx"] = undefined;
          var writer_kitty_mctx_673 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj476.methods["mctx:="] = writer_kitty_mctx_673;
          reader_kitty_mctx_673.confidential = true;
          writer_kitty_mctx_673.confidential = true;
          obj476.mutable = true;
          sourceObject = obj476;
          lineNumber = 169
          lineNumber = 167
          var call674 = callmethod(new GraceNum(1),"prefix-", [0]);
          obj476.data["currentKeyDown"] = call674;
          var reader_kitty_currentKeyDown_675 = function() {
            return this.data["currentKeyDown"];
          }
          obj476.methods["currentKeyDown"] = reader_kitty_currentKeyDown_675;
          obj476.data["currentKeyDown"] = call674;
          var writer_kitty_currentKeyDown_675 = function(argcv, o) {
            this.data["currentKeyDown"] = o;
          }
          obj476.methods["currentKeyDown:="] = writer_kitty_currentKeyDown_675;
          reader_kitty_currentKeyDown_675.confidential = true;
          writer_kitty_currentKeyDown_675.confidential = true;
          lineNumber = 169;
          moduleName = "kitty";
          lineNumber = 167
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call674)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'currentKeyDown' to be of type Unknown"))
          obj476.mutable = true;
          sourceObject = obj476;
          lineNumber = 169
          onSelf = true;
          var call676 = callmethod(this, "init", [0]);
          sourceObject = obj476;
          sourceObject = obj476;
          sourceObject = obj476;
          sourceObject = obj476;
          sourceObject = obj476;
          sourceObject = obj476;
          sourceObject = obj476;
          superDepth = origSuperDepth;
        }
        obj_init_476.apply(inheritingObject, []);
        return obj476
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj271.methods["new()object"] = func475;
    var func677 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 144
        var string678 = new GraceString("class KittyWorld");
        return string678
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func677.paramCounts = [
    ];
    func677.variableArities = [
    ];
    obj271.methods["asDebugString"] = func677;
    func677.definitionLine = 144;
    func677.definitionModule = "kitty";
    sourceObject = obj271;
    sourceObject = obj271;
    superDepth = origSuperDepth;
  }
  obj_init_271.apply(obj271, []);
  var var_KittyWorld = obj271;
  lineNumber = 286
  lineNumber = 295
  lineNumber = 310
  lineNumber = 315
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
'dom',
'StandardPrelude',
];
if (gctCache)
  gctCache['kitty'] = "constructors-of:KittyImage:\n new\nmethods-of:KittyWorld.new:\n backingCanvas:=\n backgroundColour:=\n entities\n backingCanvas\n canvasHeight:=\n isKeyDown\n canvasHeight\n currentKeyDown:=\n canvas\n backingContext:=\n background\n stop\n isInit:=\n canvasWidth\n document:=\n init\n mctx\n document\n update\n start\n canvas:=\n backgroundColour\n canvasWidth:=\n background:=\n isRunning\n currentKeyDown\n backingContext\n setBackground\n addEntity\n isInit\n mctx:=\n isRunning:=\n entities:=\nconstructors-of:KittyEntity:\n new\nfresh-methods:\n Image\n Entity\n World\nfresh:World:\n backingCanvas:=\n backingContext:=\n entities\n backgroundColour:=\n canvasHeight:=\n init\n canvasHeight\n currentKeyDown:=\n canvas\n backingCanvas\n background\n stop\n isInit:=\n mctx\n document:=\n isRunning\n canvasWidth\n document\n update\n start\n canvas:=\n isRunning:=\n canvasWidth:=\n background:=\n isKeyDown\n currentKeyDown\n backgroundColour\n setBackground\n addEntity\n isInit\n mctx:=\n backingContext\n entities:=\npath:\n kitty\nclasses:\n KittyImage\n KittyEntity\n KittyWorld\nfresh:Entity:\n moveLeft\n update\n setLocation\n moveDown\n rotation\n start\n action:=\n getX\n getY\n image:=\n moveUp\n action\n posX:=\n posY:=\n image\n rotation:=\n awake\n posX\n posY\n draw\n setImage\n getRotation\n onDestroy\n moveRight\n setAction\nconfidential:\nconstructors-of:KittyWorld:\n new\nfresh:Image:\n width:=\n imgTag\n height\n width\n draw\n height:=\nmodules:\n StandardPrelude\n mgcollections\nmethods-of:KittyEntity.new:\n moveLeft\n update\n setLocation\n setImage\n getRotation\n start\n action:=\n getX\n getY\n image:=\n moveUp\n action\n posX:=\n posY:=\n image\n rotation:=\n awake\n posX\n posY\n draw\n moveDown\n rotation\n onDestroy\n moveRight\n setAction\npublic:\n m_world\n m_world:=\n worldSet\n worldSet:=\n keyDownListener\n keyDownListener:=\n keyUpListener\n keyUpListener:=\n mouseDownListener\n mouseDownListener:=\n KittyImage\n Image\n KittyEntity\n Entity\n KittyWorld\n World\n start\n setWorld\n atModuleEnd\nmethods-of:KittyImage.new:\n width:=\n imgTag\n height\n height:=\n draw\n width\n";
if (originalSourceLines) {
  originalSourceLines["kitty"] = [
    "import \"mgcollections\" as collections",
    "import \"dom\" as dom",
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
    "            if (ev.keyCode == 81) then {",
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
