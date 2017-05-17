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
  lineNumber = 136
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
      lineNumber = 137
      var obj9 = Grace_allocObject();
      obj9.definitionModule = "kitty";
      obj9.definitionLine = 137;
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
        lineNumber = 138
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
  func8.definitionLine = 136;
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
      obj13.definitionLine = 137;
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
  lineNumber = 282
  var func16 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func16.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (World)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 283
      var obj17 = Grace_allocObject();
      obj17.definitionModule = "kitty";
      obj17.definitionLine = 283;
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
        lineNumber = 284
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
  func16.definitionLine = 282;
  func16.definitionModule = "kitty";
  var func20 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj21 = Grace_allocObject();
      obj21.definitionModule = "kitty";
      obj21.definitionLine = 283;
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
  lineNumber = 291
  var func24 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func24.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 293
      var string25 = new GraceString("CHECKING...");
      var call26 = Grace_print(string25);
      lineNumber = 300
      var if27 = var_done;
      lineNumber = 295
      var call28 = callmethod(var_worldSet,"prefix!", [0]);
      if (Grace_isTrue(call28)) {
        lineNumber = 296
        var string29 = new GraceString("NO WORLD!!");
        var call30 = Grace_print(string29);
        lineNumber = 298
        return var_done
      }
      lineNumber = 300
      var string31 = new GraceString("STARTING...");
      var call32 = Grace_print(string31);
      lineNumber = 303
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
  func24.definitionLine = 291;
  func24.definitionModule = "kitty";
  lineNumber = 306
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
      lineNumber = 308
      lineNumber = 307
      var_m__95__world = var_world__39__;
      lineNumber = 309
      lineNumber = 308
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
  func34.definitionLine = 306;
  func34.definitionModule = "kitty";
  lineNumber = 311
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
      lineNumber = 312
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
  func36.definitionLine = 311;
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
  lineNumber = 303
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
  func39.definitionLine = 303;
  func39.definitionModule = "kitty";
  lineNumber = 303
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
  func40.definitionLine = 303;
  func40.definitionModule = "kitty";
  lineNumber = 11
  lineNumber = 8
  var bool41 = new GraceBoolean(false)
  var var_worldSet = bool41;
  lineNumber = 303
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
  func42.definitionLine = 303;
  func42.definitionModule = "kitty";
  lineNumber = 303
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
  func43.definitionLine = 303;
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
  lineNumber = 303
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
  func44.definitionLine = 303;
  func44.definitionModule = "kitty";
  lineNumber = 303
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
  func45.definitionLine = 303;
  func45.definitionModule = "kitty";
  lineNumber = 13
  var var_keyUpListener;
  lineNumber = 303
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
  func46.definitionLine = 303;
  func46.definitionModule = "kitty";
  lineNumber = 303
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
  func47.definitionLine = 303;
  func47.definitionModule = "kitty";
  lineNumber = 18
  var var_mouseDownListener;
  lineNumber = 303
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
  func48.definitionLine = 303;
  func48.definitionModule = "kitty";
  lineNumber = 303
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
  func49.definitionLine = 303;
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
              return var_done
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
          var func134 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func134.paramCounts[0])
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
          func134.paramCounts = [
            0,
          ];
          func134.variableArities = [
            false,
          ];
          obj131.methods["start"] = func134;
          func134.definitionLine = 71;
          func134.definitionModule = "kitty";
          var func135 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func135.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 77
              onSelf = true;
              var call136 = callmethod(this, "action", [0]);
              var call137 = callmethod(call136,"update", [0]);
              return call137
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func135.paramCounts = [
            0,
          ];
          func135.variableArities = [
            false,
          ];
          obj131.methods["update"] = func135;
          func135.definitionLine = 76;
          func135.definitionModule = "kitty";
          var func138 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func138.paramCounts[0])
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
          func138.paramCounts = [
            0,
          ];
          func138.variableArities = [
            false,
          ];
          obj131.methods["onDestroy"] = func138;
          func138.definitionLine = 81;
          func138.definitionModule = "kitty";
          var func139 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func139.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveUp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 87
              lineNumber = 77
              lineNumber = 87
              lineNumber = 86
              onSelf = true;
              var call141 = callmethod(this, "posY", [0]);
              var diff143 = callmethod(call141, "-", [1], var_dy);
              onSelf = true;
              var call144 = callmethod(this, "posY:=", [1], diff143);
              return call144
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func139.paramCounts = [
            1,
          ];
          func139.variableArities = [
            false,
          ];
          obj131.methods["moveUp"] = func139;
          func139.definitionLine = 85;
          func139.definitionModule = "kitty";
          var func145 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func145.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 91
              lineNumber = 77
              lineNumber = 91
              lineNumber = 90
              onSelf = true;
              var call147 = callmethod(this, "posY", [0]);
              var opresult149 = callmethod(call147, "+", [1], var_dy);
              onSelf = true;
              var call150 = callmethod(this, "posY:=", [1], opresult149);
              return call150
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func145.paramCounts = [
            1,
          ];
          func145.variableArities = [
            false,
          ];
          obj131.methods["moveDown"] = func145;
          func145.definitionLine = 89;
          func145.definitionModule = "kitty";
          var func151 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func151.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveLeft)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 95
              lineNumber = 77
              lineNumber = 95
              lineNumber = 94
              onSelf = true;
              var call153 = callmethod(this, "posX", [0]);
              var diff155 = callmethod(call153, "-", [1], var_dx);
              onSelf = true;
              var call156 = callmethod(this, "posX:=", [1], diff155);
              return call156
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func151.paramCounts = [
            1,
          ];
          func151.variableArities = [
            false,
          ];
          obj131.methods["moveLeft"] = func151;
          func151.definitionLine = 93;
          func151.definitionModule = "kitty";
          var func157 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func157.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveRight)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 99
              lineNumber = 77
              lineNumber = 99
              lineNumber = 98
              onSelf = true;
              var call159 = callmethod(this, "posX", [0]);
              var opresult161 = callmethod(call159, "+", [1], var_dx);
              onSelf = true;
              var call162 = callmethod(this, "posX:=", [1], opresult161);
              return call162
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func157.paramCounts = [
            1,
          ];
          func157.variableArities = [
            false,
          ];
          obj131.methods["moveRight"] = func157;
          func157.definitionLine = 97;
          func157.definitionModule = "kitty";
          var func163 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func163.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 102
              var call164 = callmethod(var_ctx,"save", [0]);
              lineNumber = 103
              onSelf = true;
              var call165 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call166 = callmethod(this, "posY", [0]);
              var call167 = callmethod(var_ctx,"translate", [2], call165, call166);
              lineNumber = 104
              onSelf = true;
              var call168 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call169 = callmethod(this, "image", [0]);
              var call170 = callmethod(call169,"draw", [4], var_ctx, var_dx, var_dy, call168);
              lineNumber = 105
              var call171 = callmethod(var_ctx,"restore", [0]);
              return call171
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func163.paramCounts = [
            3,
          ];
          func163.variableArities = [
            false,
          ];
          obj131.methods["draw"] = func163;
          func163.definitionLine = 101;
          func163.definitionModule = "kitty";
          var func172 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func172.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 109
              lineNumber = 105
              lineNumber = 109
              var call173 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call174 = callmethod(call173, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call175 = callmethod(call174, "Image", [3], var_image__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call176 = callmethod(this, "image:=", [1], call175);
              return call176
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func172.paramCounts = [
            1,
          ];
          func172.variableArities = [
            false,
          ];
          obj131.methods["setImage"] = func172;
          func172.definitionLine = 108;
          func172.definitionModule = "kitty";
          var func177 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func177.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 114
              lineNumber = 109
              lineNumber = 113
              onSelf = true;
              var call178 = callmethod(this, "action:=", [1], var_action__39__);
              return call178
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
          obj131.methods["setAction"] = func177;
          func177.definitionLine = 112;
          func177.definitionModule = "kitty";
          var func179 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func179.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 118
              lineNumber = 109
              lineNumber = 117
              onSelf = true;
              var call180 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 119
              lineNumber = 109
              lineNumber = 118
              onSelf = true;
              var call181 = callmethod(this, "posY:=", [1], var_y);
              return call181
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func179.paramCounts = [
            2,
          ];
          func179.variableArities = [
            false,
          ];
          obj131.methods["setLocation"] = func179;
          func179.definitionLine = 116;
          func179.definitionModule = "kitty";
          var func182 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func182.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 123
              lineNumber = 122
              onSelf = true;
              var call183 = callmethod(this, "posX", [0]);
              return call183
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func182.paramCounts = [
            0,
          ];
          func182.variableArities = [
            false,
          ];
          obj131.methods["getX"] = func182;
          func182.definitionLine = 121;
          func182.definitionModule = "kitty";
          var func184 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func184.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 127
              lineNumber = 126
              onSelf = true;
              var call185 = callmethod(this, "posY", [0]);
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
          obj131.methods["getY"] = func184;
          func184.definitionLine = 125;
          func184.definitionModule = "kitty";
          var func186 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func186.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 131
              lineNumber = 130
              onSelf = true;
              var call187 = callmethod(this, "rotation", [0]);
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
          obj131.methods["getRotation"] = func186;
          func186.definitionLine = 129;
          func186.definitionModule = "kitty";
          sourceObject = obj131;
          lineNumber = 51
          obj131.data["posX"] = var_x__39__;
          var reader_kitty_posX_188 = function() {
            return this.data["posX"];
          }
          obj131.methods["posX"] = reader_kitty_posX_188;
          obj131.data["posX"] = var_x__39__;
          var writer_kitty_posX_188 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj131.methods["posX:="] = writer_kitty_posX_188;
          reader_kitty_posX_188.confidential = true;
          writer_kitty_posX_188.confidential = true;
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
          var reader_kitty_posY_189 = function() {
            return this.data["posY"];
          }
          obj131.methods["posY"] = reader_kitty_posY_189;
          obj131.data["posY"] = var_y__39__;
          var writer_kitty_posY_189 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj131.methods["posY:="] = writer_kitty_posY_189;
          reader_kitty_posY_189.confidential = true;
          writer_kitty_posY_189.confidential = true;
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
          var reader_kitty_rotation_190 = function() {
            return this.data["rotation"];
          }
          obj131.methods["rotation"] = reader_kitty_rotation_190;
          obj131.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_190 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj131.methods["rotation:="] = writer_kitty_rotation_190;
          reader_kitty_rotation_190.confidential = true;
          writer_kitty_rotation_190.confidential = true;
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
          var obj191 = Grace_allocObject();
          obj191.definitionModule = "kitty";
          obj191.definitionLine = 55;
          obj191.outer = this;
          var reader_kitty_outer_192 = function() {
            return this.outer;
          }
          obj191.methods["outer"] = reader_kitty_outer_192;
          function obj_init_191() {
            var origSuperDepth = superDepth;
            superDepth = obj191;
            obj191.annotations = [];
            var func193 = function(argcv) {
              var curarg = 1;
              if (argcv[0] !=  func193.paramCounts[0])
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
            func193.paramCounts = [
              0,
            ];
            func193.variableArities = [
              false,
            ];
            obj191.methods["update"] = func193;
            func193.definitionLine = 56;
            func193.definitionModule = "kitty";
            sourceObject = obj191;
            superDepth = origSuperDepth;
          }
          obj_init_191.apply(obj191, []);
          obj131.data["action"] = obj191;
          var reader_kitty_action_194 = function() {
            return this.data["action"];
          }
          obj131.methods["action"] = reader_kitty_action_194;
          obj131.data["action"] = obj191;
          var writer_kitty_action_194 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj131.methods["action:="] = writer_kitty_action_194;
          reader_kitty_action_194.confidential = true;
          writer_kitty_action_194.confidential = true;
          lineNumber = 55;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], obj191)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj131.mutable = true;
          sourceObject = obj131;
          obj131.data["image"] = undefined;
          var reader_kitty_image_195 = function() {
            return this.data["image"];
          }
          obj131.methods["image"] = reader_kitty_image_195;
          obj131.data["image"] = undefined;
          var writer_kitty_image_195 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj131.methods["image:="] = writer_kitty_image_195;
          reader_kitty_image_195.confidential = true;
          writer_kitty_image_195.confidential = true;
          obj131.mutable = true;
          sourceObject = obj131;
          lineNumber = 63
          onSelf = true;
          var call196 = callmethod(this, "awake", [0]);
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
    var func197 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj198 = Grace_allocObject();
        obj198.definitionModule = "kitty";
        obj198.definitionLine = 47;
        var inho198 = inheritingObject;
        while (inho198.superobj) inho198 = inho198.superobj;
        inho198.superobj = obj198;
        obj198.data = inheritingObject.data;
        obj198.outer = this;
        var reader_kitty_outer_199 = function() {
          return this.outer;
        }
        obj198.methods["outer"] = reader_kitty_outer_199;
        function obj_init_198() {
          var origSuperDepth = superDepth;
          superDepth = obj198;
          obj198.annotations = [];
          var func200 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func200.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
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
          func200.paramCounts = [
            0,
          ];
          func200.variableArities = [
            false,
          ];
          obj198.methods["awake"] = func200;
          func200.definitionLine = 66;
          func200.definitionModule = "kitty";
          var func201 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func201.paramCounts[0])
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
          func201.paramCounts = [
            0,
          ];
          func201.variableArities = [
            false,
          ];
          obj198.methods["start"] = func201;
          func201.definitionLine = 71;
          func201.definitionModule = "kitty";
          var func202 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func202.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 77
              onSelf = true;
              var call203 = callmethod(this, "action", [0]);
              var call204 = callmethod(call203,"update", [0]);
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
          obj198.methods["update"] = func202;
          func202.definitionLine = 76;
          func202.definitionModule = "kitty";
          var func205 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func205.paramCounts[0])
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
          func205.paramCounts = [
            0,
          ];
          func205.variableArities = [
            false,
          ];
          obj198.methods["onDestroy"] = func205;
          func205.definitionLine = 81;
          func205.definitionModule = "kitty";
          var func206 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func206.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveUp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 87
              lineNumber = 77
              lineNumber = 87
              lineNumber = 86
              onSelf = true;
              var call208 = callmethod(this, "posY", [0]);
              var diff210 = callmethod(call208, "-", [1], var_dy);
              onSelf = true;
              var call211 = callmethod(this, "posY:=", [1], diff210);
              return call211
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func206.paramCounts = [
            1,
          ];
          func206.variableArities = [
            false,
          ];
          obj198.methods["moveUp"] = func206;
          func206.definitionLine = 85;
          func206.definitionModule = "kitty";
          var func212 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func212.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 91
              lineNumber = 77
              lineNumber = 91
              lineNumber = 90
              onSelf = true;
              var call214 = callmethod(this, "posY", [0]);
              var opresult216 = callmethod(call214, "+", [1], var_dy);
              onSelf = true;
              var call217 = callmethod(this, "posY:=", [1], opresult216);
              return call217
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func212.paramCounts = [
            1,
          ];
          func212.variableArities = [
            false,
          ];
          obj198.methods["moveDown"] = func212;
          func212.definitionLine = 89;
          func212.definitionModule = "kitty";
          var func218 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func218.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveLeft)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 95
              lineNumber = 77
              lineNumber = 95
              lineNumber = 94
              onSelf = true;
              var call220 = callmethod(this, "posX", [0]);
              var diff222 = callmethod(call220, "-", [1], var_dx);
              onSelf = true;
              var call223 = callmethod(this, "posX:=", [1], diff222);
              return call223
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
          obj198.methods["moveLeft"] = func218;
          func218.definitionLine = 93;
          func218.definitionModule = "kitty";
          var func224 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func224.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveRight)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 99
              lineNumber = 77
              lineNumber = 99
              lineNumber = 98
              onSelf = true;
              var call226 = callmethod(this, "posX", [0]);
              var opresult228 = callmethod(call226, "+", [1], var_dx);
              onSelf = true;
              var call229 = callmethod(this, "posX:=", [1], opresult228);
              return call229
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func224.paramCounts = [
            1,
          ];
          func224.variableArities = [
            false,
          ];
          obj198.methods["moveRight"] = func224;
          func224.definitionLine = 97;
          func224.definitionModule = "kitty";
          var func230 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func230.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 102
              var call231 = callmethod(var_ctx,"save", [0]);
              lineNumber = 103
              onSelf = true;
              var call232 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call233 = callmethod(this, "posY", [0]);
              var call234 = callmethod(var_ctx,"translate", [2], call232, call233);
              lineNumber = 104
              onSelf = true;
              var call235 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call236 = callmethod(this, "image", [0]);
              var call237 = callmethod(call236,"draw", [4], var_ctx, var_dx, var_dy, call235);
              lineNumber = 105
              var call238 = callmethod(var_ctx,"restore", [0]);
              return call238
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func230.paramCounts = [
            3,
          ];
          func230.variableArities = [
            false,
          ];
          obj198.methods["draw"] = func230;
          func230.definitionLine = 101;
          func230.definitionModule = "kitty";
          var func239 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func239.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 109
              lineNumber = 105
              lineNumber = 109
              var call240 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call241 = callmethod(call240, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call242 = callmethod(call241, "Image", [3], var_image__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call243 = callmethod(this, "image:=", [1], call242);
              return call243
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func239.paramCounts = [
            1,
          ];
          func239.variableArities = [
            false,
          ];
          obj198.methods["setImage"] = func239;
          func239.definitionLine = 108;
          func239.definitionModule = "kitty";
          var func244 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func244.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 114
              lineNumber = 109
              lineNumber = 113
              onSelf = true;
              var call245 = callmethod(this, "action:=", [1], var_action__39__);
              return call245
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func244.paramCounts = [
            1,
          ];
          func244.variableArities = [
            false,
          ];
          obj198.methods["setAction"] = func244;
          func244.definitionLine = 112;
          func244.definitionModule = "kitty";
          var func246 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func246.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 118
              lineNumber = 109
              lineNumber = 117
              onSelf = true;
              var call247 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 119
              lineNumber = 109
              lineNumber = 118
              onSelf = true;
              var call248 = callmethod(this, "posY:=", [1], var_y);
              return call248
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func246.paramCounts = [
            2,
          ];
          func246.variableArities = [
            false,
          ];
          obj198.methods["setLocation"] = func246;
          func246.definitionLine = 116;
          func246.definitionModule = "kitty";
          var func249 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func249.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 123
              lineNumber = 122
              onSelf = true;
              var call250 = callmethod(this, "posX", [0]);
              return call250
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func249.paramCounts = [
            0,
          ];
          func249.variableArities = [
            false,
          ];
          obj198.methods["getX"] = func249;
          func249.definitionLine = 121;
          func249.definitionModule = "kitty";
          var func251 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func251.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 127
              lineNumber = 126
              onSelf = true;
              var call252 = callmethod(this, "posY", [0]);
              return call252
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
          obj198.methods["getY"] = func251;
          func251.definitionLine = 125;
          func251.definitionModule = "kitty";
          var func253 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func253.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 131
              lineNumber = 130
              onSelf = true;
              var call254 = callmethod(this, "rotation", [0]);
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
          obj198.methods["getRotation"] = func253;
          func253.definitionLine = 129;
          func253.definitionModule = "kitty";
          sourceObject = obj198;
          lineNumber = 51
          obj198.data["posX"] = var_x__39__;
          var reader_kitty_posX_255 = function() {
            return this.data["posX"];
          }
          obj198.methods["posX"] = reader_kitty_posX_255;
          obj198.data["posX"] = var_x__39__;
          var writer_kitty_posX_255 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj198.methods["posX:="] = writer_kitty_posX_255;
          reader_kitty_posX_255.confidential = true;
          writer_kitty_posX_255.confidential = true;
          lineNumber = 52;
          moduleName = "kitty";
          lineNumber = 51
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj198.mutable = true;
          sourceObject = obj198;
          lineNumber = 52
          obj198.data["posY"] = var_y__39__;
          var reader_kitty_posY_256 = function() {
            return this.data["posY"];
          }
          obj198.methods["posY"] = reader_kitty_posY_256;
          obj198.data["posY"] = var_y__39__;
          var writer_kitty_posY_256 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj198.methods["posY:="] = writer_kitty_posY_256;
          reader_kitty_posY_256.confidential = true;
          writer_kitty_posY_256.confidential = true;
          lineNumber = 53;
          moduleName = "kitty";
          lineNumber = 52
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj198.mutable = true;
          sourceObject = obj198;
          lineNumber = 53
          obj198.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_257 = function() {
            return this.data["rotation"];
          }
          obj198.methods["rotation"] = reader_kitty_rotation_257;
          obj198.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_257 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj198.methods["rotation:="] = writer_kitty_rotation_257;
          reader_kitty_rotation_257.confidential = true;
          writer_kitty_rotation_257.confidential = true;
          lineNumber = 55;
          moduleName = "kitty";
          lineNumber = 53
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj198.mutable = true;
          sourceObject = obj198;
          lineNumber = 55
          var obj258 = Grace_allocObject();
          obj258.definitionModule = "kitty";
          obj258.definitionLine = 55;
          obj258.outer = this;
          var reader_kitty_outer_259 = function() {
            return this.outer;
          }
          obj258.methods["outer"] = reader_kitty_outer_259;
          function obj_init_258() {
            var origSuperDepth = superDepth;
            superDepth = obj258;
            obj258.annotations = [];
            var func260 = function(argcv) {
              var curarg = 1;
              if (argcv[0] !=  func260.paramCounts[0])
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
            func260.paramCounts = [
              0,
            ];
            func260.variableArities = [
              false,
            ];
            obj258.methods["update"] = func260;
            func260.definitionLine = 56;
            func260.definitionModule = "kitty";
            sourceObject = obj258;
            superDepth = origSuperDepth;
          }
          obj_init_258.apply(obj258, []);
          obj198.data["action"] = obj258;
          var reader_kitty_action_261 = function() {
            return this.data["action"];
          }
          obj198.methods["action"] = reader_kitty_action_261;
          obj198.data["action"] = obj258;
          var writer_kitty_action_261 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj198.methods["action:="] = writer_kitty_action_261;
          reader_kitty_action_261.confidential = true;
          writer_kitty_action_261.confidential = true;
          lineNumber = 55;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], obj258)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj198.mutable = true;
          sourceObject = obj198;
          obj198.data["image"] = undefined;
          var reader_kitty_image_262 = function() {
            return this.data["image"];
          }
          obj198.methods["image"] = reader_kitty_image_262;
          obj198.data["image"] = undefined;
          var writer_kitty_image_262 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj198.methods["image:="] = writer_kitty_image_262;
          reader_kitty_image_262.confidential = true;
          writer_kitty_image_262.confidential = true;
          obj198.mutable = true;
          sourceObject = obj198;
          lineNumber = 63
          onSelf = true;
          var call263 = callmethod(this, "awake", [0]);
          sourceObject = obj198;
          sourceObject = obj198;
          sourceObject = obj198;
          sourceObject = obj198;
          sourceObject = obj198;
          sourceObject = obj198;
          sourceObject = obj198;
          sourceObject = obj198;
          sourceObject = obj198;
          sourceObject = obj198;
          sourceObject = obj198;
          sourceObject = obj198;
          sourceObject = obj198;
          sourceObject = obj198;
          sourceObject = obj198;
          superDepth = origSuperDepth;
        }
        obj_init_198.apply(inheritingObject, []);
        return obj198
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj128.methods["new()object"] = func197;
    var func264 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 47
        var string265 = new GraceString("class KittyEntity");
        return string265
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func264.paramCounts = [
    ];
    func264.variableArities = [
    ];
    obj128.methods["asDebugString"] = func264;
    func264.definitionLine = 47;
    func264.definitionModule = "kitty";
    sourceObject = obj128;
    sourceObject = obj128;
    superDepth = origSuperDepth;
  }
  obj_init_128.apply(obj128, []);
  var var_KittyEntity = obj128;
  lineNumber = 136
  lineNumber = 143
  var func266 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func266.paramCounts[0])
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
  func266.paramCounts = [
    0,
  ];
  func266.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func266;
  func266.definitionLine = 143;
  func266.definitionModule = "kitty";
  var obj267 = Grace_allocObject();
  obj267.definitionModule = "kitty";
  obj267.definitionLine = 143;
  obj267.outer = this;
  var reader_kitty_outer_268 = function() {
    return this.outer;
  }
  obj267.methods["outer"] = reader_kitty_outer_268;
  function obj_init_267() {
    var origSuperDepth = superDepth;
    superDepth = obj267;
    obj267.annotations = [];
    var func269 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func269.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj270 = Grace_allocObject();
        obj270.definitionModule = "kitty";
        obj270.definitionLine = 143;
        obj270.outer = this;
        var reader_kitty_outer_271 = function() {
          return this.outer;
        }
        obj270.methods["outer"] = reader_kitty_outer_271;
        function obj_init_270() {
          var origSuperDepth = superDepth;
          superDepth = obj270;
          obj270.annotations = [];
          var func272 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func272.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 179
              var if273 = var_done;
              lineNumber = 175
              onSelf = true;
              var call274 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call274)) {
                lineNumber = 177
                lineNumber = 176
                var bool275 = new GraceBoolean(false)
                return bool275
              }
              lineNumber = 180
              lineNumber = 143
              lineNumber = 179
              var call276 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call277 = callmethod(this, "document:=", [1], call276);
              lineNumber = 180
              lineNumber = 179
              lineNumber = 180
              var string278 = new GraceString("standard-canvas");
              onSelf = true;
              var call279 = callmethod(this, "document", [0]);
              var call280 = callmethod(call279,"getElementById", [1], string278);
              onSelf = true;
              var call281 = callmethod(this, "canvas:=", [1], call280);
              lineNumber = 182
              lineNumber = 179
              lineNumber = 181
              onSelf = true;
              var call282 = callmethod(this, "canvas", [0]);
              var call283 = callmethod(call282,"width", [0]);
              onSelf = true;
              var call284 = callmethod(this, "canvasWidth:=", [1], call283);
              lineNumber = 185
              lineNumber = 181
              lineNumber = 182
              onSelf = true;
              var call285 = callmethod(this, "canvas", [0]);
              var call286 = callmethod(call285,"height", [0]);
              onSelf = true;
              var call287 = callmethod(this, "canvasHeight:=", [1], call286);
              lineNumber = 197
              var block288 = Grace_allocObject();
              block288.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block288.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block288.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block288.methods["match"] = GraceBlock_match;
              block288.methods["prefix?"] = GraceBlock_lift;
              block288.receiver = this;
              block288.className = 'block<kitty:197>';
              block288.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 188
                lineNumber = 187
                onSelf = true;
                var call289 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call291 = callmethod(this, "canvas", [0]);
                var call292 = callmethod(call291,"offsetWidth", [0]);
                onSelf = true;
                var call294 = callmethod(this, "canvas", [0]);
                var call295 = callmethod(call294,"offsetLeft", [0]);
                var call297 = callmethod(var_ev,"clientX", [0]);
                var diff299 = callmethod(call297, "-", [1], call295);
                var quotient301 = callmethod(diff299, "/", [1], call292);
                var prod303 = callmethod(quotient301, "*", [1], call289);
                var var_x = prod303;
                lineNumber = 188;
                moduleName = "kitty";
                lineNumber = 187
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 190
                lineNumber = 188
                onSelf = true;
                var call304 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call306 = callmethod(this, "canvas", [0]);
                var call307 = callmethod(call306,"offsetHeight", [0]);
                onSelf = true;
                var call309 = callmethod(this, "canvas", [0]);
                var call310 = callmethod(call309,"offsetTop", [0]);
                var call312 = callmethod(var_ev,"clientY", [0]);
                var diff314 = callmethod(call312, "-", [1], call310);
                var quotient316 = callmethod(diff314, "/", [1], call307);
                var prod318 = callmethod(quotient316, "*", [1], call304);
                var var_y = prod318;
                lineNumber = 190;
                moduleName = "kitty";
                lineNumber = 188
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 190
                var string319 = new GraceString("MOUSEDOWN");
                var call320 = Grace_print(string319);
                lineNumber = 196
                var if321 = var_done;
                lineNumber = 192
                var opresult324 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call327 = callmethod(this, "canvasWidth", [0]);
                var diff329 = callmethod(call327, "-", [1], new GraceNum(20));
                var opresult332 = callmethod(var_x, ">", [1], diff329);
                var opresult334 = callmethod(opresult332, "&&", [1], opresult324);
                if (Grace_isTrue(opresult334)) {
                  lineNumber = 193
                  var call335 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 194
                  onSelf = true;
                  var call336 = callmethod(this, "stop", [0]);
                  if321 = call336;
                }
                return if321;
              };
              var_mouseDownListener = block288;
              lineNumber = 197
              var string337 = new GraceString("mousedown");
              onSelf = true;
              var call338 = callmethod(this, "canvas", [0]);
              var call339 = callmethod(call338,"addEventListener", [2], string337, var_mouseDownListener);
              lineNumber = 207
              var block340 = Grace_allocObject();
              block340.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block340.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block340.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block340.methods["match"] = GraceBlock_match;
              block340.methods["prefix?"] = GraceBlock_lift;
              block340.receiver = this;
              block340.className = 'block<kitty:207>';
              block340.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 205
                var if341 = var_done;
                lineNumber = 202
                var call343 = callmethod(var_ev,"keyCode", [0]);
                var opresult345 = callmethod(call343, "==", [1], new GraceNum(81));
                if (Grace_isTrue(opresult345)) {
                  lineNumber = 203
                  onSelf = true;
                  var call346 = callmethod(this, "stop", [0]);
                  if341 = call346;
                }
                lineNumber = 206
                lineNumber = 202
                lineNumber = 205
                var call347 = callmethod(var_ev,"keyCode", [0]);
                onSelf = true;
                var call348 = callmethod(this, "currentKeyDown:=", [1], call347);
                return call348;
              };
              var_keyDownListener = block340;
              lineNumber = 207
              var string349 = new GraceString("keydown");
              onSelf = true;
              var call350 = callmethod(this, "document", [0]);
              var call351 = callmethod(call350,"addEventListener", [2], string349, var_keyDownListener);
              lineNumber = 213
              var block352 = Grace_allocObject();
              block352.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block352.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block352.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block352.methods["match"] = GraceBlock_match;
              block352.methods["prefix?"] = GraceBlock_lift;
              block352.receiver = this;
              block352.className = 'block<kitty:213>';
              block352.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 212
                lineNumber = 205
                lineNumber = 212
                lineNumber = 211
                var call353 = callmethod(new GraceNum(1),"prefix-", [0]);
                onSelf = true;
                var call354 = callmethod(this, "currentKeyDown:=", [1], call353);
                return call354;
              };
              var_keyUpListener = block352;
              lineNumber = 213
              var string355 = new GraceString("keyup");
              onSelf = true;
              var call356 = callmethod(this, "document", [0]);
              var call357 = callmethod(call356,"addEventListener", [2], string355, var_keyUpListener);
              lineNumber = 215
              lineNumber = 205
              lineNumber = 215
              var string358 = new GraceString("canvas");
              var call359 = callmethod(var_dom,"document", [0]);
              var call360 = callmethod(call359,"createElement", [1], string358);
              onSelf = true;
              var call361 = callmethod(this, "backingCanvas:=", [1], call360);
              lineNumber = 217
              lineNumber = 215
              lineNumber = 216
              onSelf = true;
              var call362 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call363 = callmethod(this, "backingCanvas", [0]);
              var call364 = callmethod(call363,"height:=", [1], call362);
              lineNumber = 218
              lineNumber = 215
              lineNumber = 217
              onSelf = true;
              var call365 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call366 = callmethod(this, "backingCanvas", [0]);
              var call367 = callmethod(call366,"width:=", [1], call365);
              lineNumber = 218
              lineNumber = 215
              lineNumber = 218
              var string368 = new GraceString("2d");
              onSelf = true;
              var call369 = callmethod(this, "backingCanvas", [0]);
              var call370 = callmethod(call369,"getContext", [1], string368);
              onSelf = true;
              var call371 = callmethod(this, "backingContext:=", [1], call370);
              lineNumber = 219
              lineNumber = 215
              lineNumber = 219
              var string372 = new GraceString("2d");
              onSelf = true;
              var call373 = callmethod(this, "canvas", [0]);
              var call374 = callmethod(call373,"getContext", [1], string372);
              onSelf = true;
              var call375 = callmethod(this, "mctx:=", [1], call374);
              lineNumber = 227
              lineNumber = 215
              lineNumber = 221
              var bool376 = new GraceBoolean(true)
              onSelf = true;
              var call377 = callmethod(this, "isInit:=", [1], bool376);
              return call377
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func272.paramCounts = [
            0,
          ];
          func272.variableArities = [
            false,
          ];
          obj270.methods["init"] = func272;
          func272.definitionLine = 171;
          func272.definitionModule = "kitty";
          var func378 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func378.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 233
              lineNumber = 215
              lineNumber = 232
              var bool379 = new GraceBoolean(true)
              onSelf = true;
              var call380 = callmethod(this, "isRunning:=", [1], bool379);
              lineNumber = 233
              var block381 = Grace_allocObject();
              block381.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block381.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block381.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block381.methods["match"] = GraceBlock_match;
              block381.methods["prefix?"] = GraceBlock_lift;
              block381.receiver = this;
              block381.className = 'block<kitty:233>';
              block381.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call382 = callmethod(this, "isRunning", [0]);
                return call382;
              };
              lineNumber = 237
              var block383 = Grace_allocObject();
              block383.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block383.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block383.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block383.methods["match"] = GraceBlock_match;
              block383.methods["prefix?"] = GraceBlock_lift;
              block383.receiver = this;
              block383.className = 'block<kitty:237>';
              block383.real = function(
              ) {
                sourceObject = this;
                lineNumber = 234
                onSelf = true;
                var call384 = callmethod(this, "update", [0]);
                return call384;
              };
              lineNumber = 233
              var call385 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block381, new GraceNum(10), block383);
              return call385
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func378.paramCounts = [
            0,
          ];
          func378.variableArities = [
            false,
          ];
          obj270.methods["start"] = func378;
          func378.definitionLine = 230;
          func378.definitionModule = "kitty";
          var func386 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func386.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 246
              lineNumber = 215
              lineNumber = 245
              onSelf = true;
              var call387 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call388 = callmethod(this, "mctx", [0]);
              var call389 = callmethod(call388,"fillStyle:=", [1], call387);
              lineNumber = 246
              onSelf = true;
              var call390 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call391 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call392 = callmethod(this, "mctx", [0]);
              var call393 = callmethod(call392,"fillRect", [4], new GraceNum(0), new GraceNum(0), call390, call391);
              lineNumber = 247
              onSelf = true;
              var call394 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call395 = callmethod(this, "mctx", [0]);
              var call396 = callmethod(call395,"drawImage", [3], call394, new GraceNum(0), new GraceNum(0));
              lineNumber = 248
              onSelf = true;
              var call397 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call399 = callmethod(this, "canvasWidth", [0]);
              var quotient401 = callmethod(call399, "/", [1], new GraceNum(2));
              onSelf = true;
              var call403 = callmethod(this, "canvasHeight", [0]);
              var quotient405 = callmethod(call403, "/", [1], new GraceNum(2));
              onSelf = true;
              var call406 = callmethod(this, "background", [0]);
              var call407 = callmethod(call406,"draw", [4], call397, quotient401, quotient405, new GraceNum(0));
              lineNumber = 251
              onSelf = true;
              var call408 = callmethod(this, "entities", [0]);
              lineNumber = 257
              var block409 = Grace_allocObject();
              block409.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block409.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block409.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block409.methods["match"] = GraceBlock_match;
              block409.methods["prefix?"] = GraceBlock_lift;
              block409.receiver = this;
              block409.className = 'block<kitty:257>';
              block409.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 252
                var call410 = callmethod(var_entity,"update", [0]);
                lineNumber = 253
                onSelf = true;
                var call411 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call413 = callmethod(this, "canvasWidth", [0]);
                var quotient415 = callmethod(call413, "/", [1], new GraceNum(2));
                onSelf = true;
                var call417 = callmethod(this, "canvasHeight", [0]);
                var quotient419 = callmethod(call417, "/", [1], new GraceNum(2));
                var call420 = callmethod(var_entity,"draw", [3], call411, quotient415, quotient419);
                return call420;
              };
              var call421 = callmethod(Grace_prelude,"for()do", [1, 1], call408, block409);
              return call421
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func386.paramCounts = [
            0,
          ];
          func386.variableArities = [
            false,
          ];
          obj270.methods["update"] = func386;
          func386.definitionLine = 240;
          func386.definitionModule = "kitty";
          var func422 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func422.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 260
              var string423 = new GraceString("WORLD STOPPING...");
              var call424 = Grace_print(string423);
              lineNumber = 262
              lineNumber = 252
              lineNumber = 261
              var bool425 = new GraceBoolean(false)
              onSelf = true;
              var call426 = callmethod(this, "isRunning:=", [1], bool425);
              lineNumber = 262
              var string427 = new GraceString("mousedown");
              onSelf = true;
              var call428 = callmethod(this, "canvas", [0]);
              var call429 = callmethod(call428,"removeEventListener", [2], string427, var_mouseDownListener);
              lineNumber = 263
              var string430 = new GraceString("keydown");
              onSelf = true;
              var call431 = callmethod(this, "document", [0]);
              var call432 = callmethod(call431,"removeEventListener", [2], string430, var_keyDownListener);
              lineNumber = 264
              var string433 = new GraceString("keyup");
              onSelf = true;
              var call434 = callmethod(this, "document", [0]);
              var call435 = callmethod(call434,"removeEventListener", [2], string433, var_keyUpListener);
              return call435
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func422.paramCounts = [
            0,
          ];
          func422.variableArities = [
            false,
          ];
          obj270.methods["stop"] = func422;
          func422.definitionLine = 259;
          func422.definitionModule = "kitty";
          var func436 = function(argcv) {
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func436.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isKeyDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 269
              lineNumber = 268
              onSelf = true;
              var call437 = callmethod(this, "currentKeyDown", [0]);
              var opresult440 = callmethod(var_key, "==", [1], call437);
              return opresult440
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func436.paramCounts = [
            1,
          ];
          func436.variableArities = [
            false,
          ];
          obj270.methods["isKeyDown"] = func436;
          func436.definitionLine = 267;
          func436.definitionModule = "kitty";
          var func441 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func441.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 272
              lineNumber = 252
              lineNumber = 272
              onSelf = true;
              var call442 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call443 = callmethod(this, "canvasHeight", [0]);
              var call444 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call445 = callmethod(call444, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call446 = callmethod(call445, "Image", [3], var_background__39__, call442, call443);
              onSelf = true;
              var call447 = callmethod(this, "background:=", [1], call446);
              return call447
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func441.paramCounts = [
            1,
          ];
          func441.variableArities = [
            false,
          ];
          obj270.methods["setBackground"] = func441;
          func441.definitionLine = 271;
          func441.definitionModule = "kitty";
          var func448 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func448.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 276
              onSelf = true;
              var call449 = callmethod(this, "entities", [0]);
              var call450 = callmethod(call449,"push", [1], var_e);
              return call450
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func448.paramTypes = [];
          func448.paramTypes.push([]);
          func448.paramCounts = [
            1,
          ];
          func448.variableArities = [
            false,
          ];
          obj270.methods["addEntity"] = func448;
          func448.definitionLine = 275;
          func448.definitionModule = "kitty";
          sourceObject = obj270;
          obj270.data["background"] = undefined;
          var reader_kitty_background_451 = function() {
            return this.data["background"];
          }
          obj270.methods["background"] = reader_kitty_background_451;
          obj270.data["background"] = undefined;
          var writer_kitty_background_451 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj270.methods["background:="] = writer_kitty_background_451;
          reader_kitty_background_451.confidential = true;
          writer_kitty_background_451.confidential = true;
          obj270.mutable = true;
          sourceObject = obj270;
          lineNumber = 148
          var string452 = new GraceString("black");
          obj270.data["backgroundColour"] = string452;
          var reader_kitty_backgroundColour_453 = function() {
            return this.data["backgroundColour"];
          }
          obj270.methods["backgroundColour"] = reader_kitty_backgroundColour_453;
          obj270.data["backgroundColour"] = string452;
          var writer_kitty_backgroundColour_453 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj270.methods["backgroundColour:="] = writer_kitty_backgroundColour_453;
          reader_kitty_backgroundColour_453.confidential = true;
          writer_kitty_backgroundColour_453.confidential = true;
          lineNumber = 150;
          moduleName = "kitty";
          lineNumber = 148
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string452)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj270.mutable = true;
          sourceObject = obj270;
          obj270.data["document"] = undefined;
          var reader_kitty_document_454 = function() {
            return this.data["document"];
          }
          obj270.methods["document"] = reader_kitty_document_454;
          obj270.data["document"] = undefined;
          var writer_kitty_document_454 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj270.methods["document:="] = writer_kitty_document_454;
          reader_kitty_document_454.confidential = true;
          writer_kitty_document_454.confidential = true;
          obj270.mutable = true;
          sourceObject = obj270;
          obj270.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_455 = function() {
            return this.data["backingCanvas"];
          }
          obj270.methods["backingCanvas"] = reader_kitty_backingCanvas_455;
          obj270.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_455 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj270.methods["backingCanvas:="] = writer_kitty_backingCanvas_455;
          reader_kitty_backingCanvas_455.confidential = true;
          writer_kitty_backingCanvas_455.confidential = true;
          obj270.mutable = true;
          sourceObject = obj270;
          obj270.data["backingContext"] = undefined;
          var reader_kitty_backingContext_456 = function() {
            return this.data["backingContext"];
          }
          obj270.methods["backingContext"] = reader_kitty_backingContext_456;
          obj270.data["backingContext"] = undefined;
          var writer_kitty_backingContext_456 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj270.methods["backingContext:="] = writer_kitty_backingContext_456;
          reader_kitty_backingContext_456.confidential = true;
          writer_kitty_backingContext_456.confidential = true;
          obj270.mutable = true;
          sourceObject = obj270;
          obj270.data["canvas"] = undefined;
          var reader_kitty_canvas_457 = function() {
            return this.data["canvas"];
          }
          obj270.methods["canvas"] = reader_kitty_canvas_457;
          obj270.data["canvas"] = undefined;
          var writer_kitty_canvas_457 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj270.methods["canvas:="] = writer_kitty_canvas_457;
          reader_kitty_canvas_457.confidential = true;
          writer_kitty_canvas_457.confidential = true;
          obj270.mutable = true;
          sourceObject = obj270;
          obj270.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_458 = function() {
            return this.data["canvasWidth"];
          }
          obj270.methods["canvasWidth"] = reader_kitty_canvasWidth_458;
          obj270.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_458 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj270.methods["canvasWidth:="] = writer_kitty_canvasWidth_458;
          reader_kitty_canvasWidth_458.confidential = true;
          writer_kitty_canvasWidth_458.confidential = true;
          obj270.mutable = true;
          sourceObject = obj270;
          obj270.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_459 = function() {
            return this.data["canvasHeight"];
          }
          obj270.methods["canvasHeight"] = reader_kitty_canvasHeight_459;
          obj270.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_459 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj270.methods["canvasHeight:="] = writer_kitty_canvasHeight_459;
          reader_kitty_canvasHeight_459.confidential = true;
          writer_kitty_canvasHeight_459.confidential = true;
          obj270.mutable = true;
          sourceObject = obj270;
          lineNumber = 159
          var call460 = callmethod(var_collections,"list", [0]);
          var call461 = callmethod(call460,"new", [0]);
          obj270.data["entities"] = call461;
          var reader_kitty_entities_462 = function() {
            return this.data["entities"];
          }
          obj270.methods["entities"] = reader_kitty_entities_462;
          obj270.data["entities"] = call461;
          var writer_kitty_entities_462 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj270.methods["entities:="] = writer_kitty_entities_462;
          reader_kitty_entities_462.confidential = true;
          writer_kitty_entities_462.confidential = true;
          lineNumber = 161;
          moduleName = "kitty";
          lineNumber = 159
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call461)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj270.mutable = true;
          sourceObject = obj270;
          lineNumber = 161
          var bool463 = new GraceBoolean(false)
          obj270.data["isInit"] = bool463;
          var reader_kitty_isInit_464 = function() {
            return this.data["isInit"];
          }
          obj270.methods["isInit"] = reader_kitty_isInit_464;
          obj270.data["isInit"] = bool463;
          var writer_kitty_isInit_464 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj270.methods["isInit:="] = writer_kitty_isInit_464;
          reader_kitty_isInit_464.confidential = true;
          writer_kitty_isInit_464.confidential = true;
          lineNumber = 162;
          moduleName = "kitty";
          lineNumber = 161
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool463)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj270.mutable = true;
          sourceObject = obj270;
          lineNumber = 162
          var bool465 = new GraceBoolean(false)
          obj270.data["isRunning"] = bool465;
          var reader_kitty_isRunning_466 = function() {
            return this.data["isRunning"];
          }
          obj270.methods["isRunning"] = reader_kitty_isRunning_466;
          obj270.data["isRunning"] = bool465;
          var writer_kitty_isRunning_466 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj270.methods["isRunning:="] = writer_kitty_isRunning_466;
          reader_kitty_isRunning_466.confidential = true;
          writer_kitty_isRunning_466.confidential = true;
          lineNumber = 164;
          moduleName = "kitty";
          lineNumber = 162
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool465)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj270.mutable = true;
          sourceObject = obj270;
          obj270.data["mctx"] = undefined;
          var reader_kitty_mctx_467 = function() {
            return this.data["mctx"];
          }
          obj270.methods["mctx"] = reader_kitty_mctx_467;
          obj270.data["mctx"] = undefined;
          var writer_kitty_mctx_467 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj270.methods["mctx:="] = writer_kitty_mctx_467;
          reader_kitty_mctx_467.confidential = true;
          writer_kitty_mctx_467.confidential = true;
          obj270.mutable = true;
          sourceObject = obj270;
          lineNumber = 168
          lineNumber = 166
          var call468 = callmethod(new GraceNum(1),"prefix-", [0]);
          obj270.data["currentKeyDown"] = call468;
          var reader_kitty_currentKeyDown_469 = function() {
            return this.data["currentKeyDown"];
          }
          obj270.methods["currentKeyDown"] = reader_kitty_currentKeyDown_469;
          obj270.data["currentKeyDown"] = call468;
          var writer_kitty_currentKeyDown_469 = function(argcv, o) {
            this.data["currentKeyDown"] = o;
          }
          obj270.methods["currentKeyDown:="] = writer_kitty_currentKeyDown_469;
          reader_kitty_currentKeyDown_469.confidential = true;
          writer_kitty_currentKeyDown_469.confidential = true;
          lineNumber = 168;
          moduleName = "kitty";
          lineNumber = 166
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call468)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'currentKeyDown' to be of type Unknown"))
          obj270.mutable = true;
          sourceObject = obj270;
          lineNumber = 168
          onSelf = true;
          var call470 = callmethod(this, "init", [0]);
          sourceObject = obj270;
          sourceObject = obj270;
          sourceObject = obj270;
          sourceObject = obj270;
          sourceObject = obj270;
          sourceObject = obj270;
          sourceObject = obj270;
          superDepth = origSuperDepth;
        }
        obj_init_270.apply(obj270, []);
        return obj270
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func269.paramCounts = [
      0,
    ];
    func269.variableArities = [
      false,
    ];
    obj267.methods["new"] = func269;
    func269.definitionLine = 143;
    func269.definitionModule = "kitty";
    var func471 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj472 = Grace_allocObject();
        obj472.definitionModule = "kitty";
        obj472.definitionLine = 143;
        var inho472 = inheritingObject;
        while (inho472.superobj) inho472 = inho472.superobj;
        inho472.superobj = obj472;
        obj472.data = inheritingObject.data;
        obj472.outer = this;
        var reader_kitty_outer_473 = function() {
          return this.outer;
        }
        obj472.methods["outer"] = reader_kitty_outer_473;
        function obj_init_472() {
          var origSuperDepth = superDepth;
          superDepth = obj472;
          obj472.annotations = [];
          var func474 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func474.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 179
              var if475 = var_done;
              lineNumber = 175
              onSelf = true;
              var call476 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call476)) {
                lineNumber = 177
                lineNumber = 176
                var bool477 = new GraceBoolean(false)
                return bool477
              }
              lineNumber = 180
              lineNumber = 159
              lineNumber = 179
              var call478 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call479 = callmethod(this, "document:=", [1], call478);
              lineNumber = 180
              lineNumber = 179
              lineNumber = 180
              var string480 = new GraceString("standard-canvas");
              onSelf = true;
              var call481 = callmethod(this, "document", [0]);
              var call482 = callmethod(call481,"getElementById", [1], string480);
              onSelf = true;
              var call483 = callmethod(this, "canvas:=", [1], call482);
              lineNumber = 182
              lineNumber = 179
              lineNumber = 181
              onSelf = true;
              var call484 = callmethod(this, "canvas", [0]);
              var call485 = callmethod(call484,"width", [0]);
              onSelf = true;
              var call486 = callmethod(this, "canvasWidth:=", [1], call485);
              lineNumber = 185
              lineNumber = 181
              lineNumber = 182
              onSelf = true;
              var call487 = callmethod(this, "canvas", [0]);
              var call488 = callmethod(call487,"height", [0]);
              onSelf = true;
              var call489 = callmethod(this, "canvasHeight:=", [1], call488);
              lineNumber = 197
              var block490 = Grace_allocObject();
              block490.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block490.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block490.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block490.methods["match"] = GraceBlock_match;
              block490.methods["prefix?"] = GraceBlock_lift;
              block490.receiver = this;
              block490.className = 'block<kitty:197>';
              block490.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 188
                lineNumber = 187
                onSelf = true;
                var call491 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call493 = callmethod(this, "canvas", [0]);
                var call494 = callmethod(call493,"offsetWidth", [0]);
                onSelf = true;
                var call496 = callmethod(this, "canvas", [0]);
                var call497 = callmethod(call496,"offsetLeft", [0]);
                var call499 = callmethod(var_ev,"clientX", [0]);
                var diff501 = callmethod(call499, "-", [1], call497);
                var quotient503 = callmethod(diff501, "/", [1], call494);
                var prod505 = callmethod(quotient503, "*", [1], call491);
                var var_x = prod505;
                lineNumber = 188;
                moduleName = "kitty";
                lineNumber = 187
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 190
                lineNumber = 188
                onSelf = true;
                var call506 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call508 = callmethod(this, "canvas", [0]);
                var call509 = callmethod(call508,"offsetHeight", [0]);
                onSelf = true;
                var call511 = callmethod(this, "canvas", [0]);
                var call512 = callmethod(call511,"offsetTop", [0]);
                var call514 = callmethod(var_ev,"clientY", [0]);
                var diff516 = callmethod(call514, "-", [1], call512);
                var quotient518 = callmethod(diff516, "/", [1], call509);
                var prod520 = callmethod(quotient518, "*", [1], call506);
                var var_y = prod520;
                lineNumber = 190;
                moduleName = "kitty";
                lineNumber = 188
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 190
                var string521 = new GraceString("MOUSEDOWN");
                var call522 = Grace_print(string521);
                lineNumber = 196
                var if523 = var_done;
                lineNumber = 192
                var opresult526 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call529 = callmethod(this, "canvasWidth", [0]);
                var diff531 = callmethod(call529, "-", [1], new GraceNum(20));
                var opresult534 = callmethod(var_x, ">", [1], diff531);
                var opresult536 = callmethod(opresult534, "&&", [1], opresult526);
                if (Grace_isTrue(opresult536)) {
                  lineNumber = 193
                  var call537 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 194
                  onSelf = true;
                  var call538 = callmethod(this, "stop", [0]);
                  if523 = call538;
                }
                return if523;
              };
              var_mouseDownListener = block490;
              lineNumber = 197
              var string539 = new GraceString("mousedown");
              onSelf = true;
              var call540 = callmethod(this, "canvas", [0]);
              var call541 = callmethod(call540,"addEventListener", [2], string539, var_mouseDownListener);
              lineNumber = 207
              var block542 = Grace_allocObject();
              block542.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block542.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block542.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block542.methods["match"] = GraceBlock_match;
              block542.methods["prefix?"] = GraceBlock_lift;
              block542.receiver = this;
              block542.className = 'block<kitty:207>';
              block542.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 205
                var if543 = var_done;
                lineNumber = 202
                var call545 = callmethod(var_ev,"keyCode", [0]);
                var opresult547 = callmethod(call545, "==", [1], new GraceNum(81));
                if (Grace_isTrue(opresult547)) {
                  lineNumber = 203
                  onSelf = true;
                  var call548 = callmethod(this, "stop", [0]);
                  if543 = call548;
                }
                lineNumber = 206
                lineNumber = 202
                lineNumber = 205
                var call549 = callmethod(var_ev,"keyCode", [0]);
                onSelf = true;
                var call550 = callmethod(this, "currentKeyDown:=", [1], call549);
                return call550;
              };
              var_keyDownListener = block542;
              lineNumber = 207
              var string551 = new GraceString("keydown");
              onSelf = true;
              var call552 = callmethod(this, "document", [0]);
              var call553 = callmethod(call552,"addEventListener", [2], string551, var_keyDownListener);
              lineNumber = 213
              var block554 = Grace_allocObject();
              block554.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block554.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block554.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block554.methods["match"] = GraceBlock_match;
              block554.methods["prefix?"] = GraceBlock_lift;
              block554.receiver = this;
              block554.className = 'block<kitty:213>';
              block554.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 212
                lineNumber = 205
                lineNumber = 212
                lineNumber = 211
                var call555 = callmethod(new GraceNum(1),"prefix-", [0]);
                onSelf = true;
                var call556 = callmethod(this, "currentKeyDown:=", [1], call555);
                return call556;
              };
              var_keyUpListener = block554;
              lineNumber = 213
              var string557 = new GraceString("keyup");
              onSelf = true;
              var call558 = callmethod(this, "document", [0]);
              var call559 = callmethod(call558,"addEventListener", [2], string557, var_keyUpListener);
              lineNumber = 215
              lineNumber = 205
              lineNumber = 215
              var string560 = new GraceString("canvas");
              var call561 = callmethod(var_dom,"document", [0]);
              var call562 = callmethod(call561,"createElement", [1], string560);
              onSelf = true;
              var call563 = callmethod(this, "backingCanvas:=", [1], call562);
              lineNumber = 217
              lineNumber = 215
              lineNumber = 216
              onSelf = true;
              var call564 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call565 = callmethod(this, "backingCanvas", [0]);
              var call566 = callmethod(call565,"height:=", [1], call564);
              lineNumber = 218
              lineNumber = 215
              lineNumber = 217
              onSelf = true;
              var call567 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call568 = callmethod(this, "backingCanvas", [0]);
              var call569 = callmethod(call568,"width:=", [1], call567);
              lineNumber = 218
              lineNumber = 215
              lineNumber = 218
              var string570 = new GraceString("2d");
              onSelf = true;
              var call571 = callmethod(this, "backingCanvas", [0]);
              var call572 = callmethod(call571,"getContext", [1], string570);
              onSelf = true;
              var call573 = callmethod(this, "backingContext:=", [1], call572);
              lineNumber = 219
              lineNumber = 215
              lineNumber = 219
              var string574 = new GraceString("2d");
              onSelf = true;
              var call575 = callmethod(this, "canvas", [0]);
              var call576 = callmethod(call575,"getContext", [1], string574);
              onSelf = true;
              var call577 = callmethod(this, "mctx:=", [1], call576);
              lineNumber = 227
              lineNumber = 215
              lineNumber = 221
              var bool578 = new GraceBoolean(true)
              onSelf = true;
              var call579 = callmethod(this, "isInit:=", [1], bool578);
              return call579
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func474.paramCounts = [
            0,
          ];
          func474.variableArities = [
            false,
          ];
          obj472.methods["init"] = func474;
          func474.definitionLine = 171;
          func474.definitionModule = "kitty";
          var func580 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func580.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 233
              lineNumber = 215
              lineNumber = 232
              var bool581 = new GraceBoolean(true)
              onSelf = true;
              var call582 = callmethod(this, "isRunning:=", [1], bool581);
              lineNumber = 233
              var block583 = Grace_allocObject();
              block583.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block583.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block583.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block583.methods["match"] = GraceBlock_match;
              block583.methods["prefix?"] = GraceBlock_lift;
              block583.receiver = this;
              block583.className = 'block<kitty:233>';
              block583.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call584 = callmethod(this, "isRunning", [0]);
                return call584;
              };
              lineNumber = 237
              var block585 = Grace_allocObject();
              block585.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block585.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block585.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block585.methods["match"] = GraceBlock_match;
              block585.methods["prefix?"] = GraceBlock_lift;
              block585.receiver = this;
              block585.className = 'block<kitty:237>';
              block585.real = function(
              ) {
                sourceObject = this;
                lineNumber = 234
                onSelf = true;
                var call586 = callmethod(this, "update", [0]);
                return call586;
              };
              lineNumber = 233
              var call587 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block583, new GraceNum(10), block585);
              return call587
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func580.paramCounts = [
            0,
          ];
          func580.variableArities = [
            false,
          ];
          obj472.methods["start"] = func580;
          func580.definitionLine = 230;
          func580.definitionModule = "kitty";
          var func588 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func588.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 246
              lineNumber = 215
              lineNumber = 245
              onSelf = true;
              var call589 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call590 = callmethod(this, "mctx", [0]);
              var call591 = callmethod(call590,"fillStyle:=", [1], call589);
              lineNumber = 246
              onSelf = true;
              var call592 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call593 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call594 = callmethod(this, "mctx", [0]);
              var call595 = callmethod(call594,"fillRect", [4], new GraceNum(0), new GraceNum(0), call592, call593);
              lineNumber = 247
              onSelf = true;
              var call596 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call597 = callmethod(this, "mctx", [0]);
              var call598 = callmethod(call597,"drawImage", [3], call596, new GraceNum(0), new GraceNum(0));
              lineNumber = 248
              onSelf = true;
              var call599 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call601 = callmethod(this, "canvasWidth", [0]);
              var quotient603 = callmethod(call601, "/", [1], new GraceNum(2));
              onSelf = true;
              var call605 = callmethod(this, "canvasHeight", [0]);
              var quotient607 = callmethod(call605, "/", [1], new GraceNum(2));
              onSelf = true;
              var call608 = callmethod(this, "background", [0]);
              var call609 = callmethod(call608,"draw", [4], call599, quotient603, quotient607, new GraceNum(0));
              lineNumber = 251
              onSelf = true;
              var call610 = callmethod(this, "entities", [0]);
              lineNumber = 257
              var block611 = Grace_allocObject();
              block611.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block611.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block611.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block611.methods["match"] = GraceBlock_match;
              block611.methods["prefix?"] = GraceBlock_lift;
              block611.receiver = this;
              block611.className = 'block<kitty:257>';
              block611.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 252
                var call612 = callmethod(var_entity,"update", [0]);
                lineNumber = 253
                onSelf = true;
                var call613 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call615 = callmethod(this, "canvasWidth", [0]);
                var quotient617 = callmethod(call615, "/", [1], new GraceNum(2));
                onSelf = true;
                var call619 = callmethod(this, "canvasHeight", [0]);
                var quotient621 = callmethod(call619, "/", [1], new GraceNum(2));
                var call622 = callmethod(var_entity,"draw", [3], call613, quotient617, quotient621);
                return call622;
              };
              var call623 = callmethod(Grace_prelude,"for()do", [1, 1], call610, block611);
              return call623
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func588.paramCounts = [
            0,
          ];
          func588.variableArities = [
            false,
          ];
          obj472.methods["update"] = func588;
          func588.definitionLine = 240;
          func588.definitionModule = "kitty";
          var func624 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func624.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 260
              var string625 = new GraceString("WORLD STOPPING...");
              var call626 = Grace_print(string625);
              lineNumber = 262
              lineNumber = 252
              lineNumber = 261
              var bool627 = new GraceBoolean(false)
              onSelf = true;
              var call628 = callmethod(this, "isRunning:=", [1], bool627);
              lineNumber = 262
              var string629 = new GraceString("mousedown");
              onSelf = true;
              var call630 = callmethod(this, "canvas", [0]);
              var call631 = callmethod(call630,"removeEventListener", [2], string629, var_mouseDownListener);
              lineNumber = 263
              var string632 = new GraceString("keydown");
              onSelf = true;
              var call633 = callmethod(this, "document", [0]);
              var call634 = callmethod(call633,"removeEventListener", [2], string632, var_keyDownListener);
              lineNumber = 264
              var string635 = new GraceString("keyup");
              onSelf = true;
              var call636 = callmethod(this, "document", [0]);
              var call637 = callmethod(call636,"removeEventListener", [2], string635, var_keyUpListener);
              return call637
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func624.paramCounts = [
            0,
          ];
          func624.variableArities = [
            false,
          ];
          obj472.methods["stop"] = func624;
          func624.definitionLine = 259;
          func624.definitionModule = "kitty";
          var func638 = function(argcv) {
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func638.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isKeyDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 269
              lineNumber = 268
              onSelf = true;
              var call639 = callmethod(this, "currentKeyDown", [0]);
              var opresult642 = callmethod(var_key, "==", [1], call639);
              return opresult642
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func638.paramCounts = [
            1,
          ];
          func638.variableArities = [
            false,
          ];
          obj472.methods["isKeyDown"] = func638;
          func638.definitionLine = 267;
          func638.definitionModule = "kitty";
          var func643 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func643.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 272
              lineNumber = 252
              lineNumber = 272
              onSelf = true;
              var call644 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call645 = callmethod(this, "canvasHeight", [0]);
              var call646 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call647 = callmethod(call646, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call648 = callmethod(call647, "Image", [3], var_background__39__, call644, call645);
              onSelf = true;
              var call649 = callmethod(this, "background:=", [1], call648);
              return call649
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func643.paramCounts = [
            1,
          ];
          func643.variableArities = [
            false,
          ];
          obj472.methods["setBackground"] = func643;
          func643.definitionLine = 271;
          func643.definitionModule = "kitty";
          var func650 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func650.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 276
              onSelf = true;
              var call651 = callmethod(this, "entities", [0]);
              var call652 = callmethod(call651,"push", [1], var_e);
              return call652
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func650.paramTypes = [];
          func650.paramTypes.push([]);
          func650.paramCounts = [
            1,
          ];
          func650.variableArities = [
            false,
          ];
          obj472.methods["addEntity"] = func650;
          func650.definitionLine = 275;
          func650.definitionModule = "kitty";
          sourceObject = obj472;
          obj472.data["background"] = undefined;
          var reader_kitty_background_653 = function() {
            return this.data["background"];
          }
          obj472.methods["background"] = reader_kitty_background_653;
          obj472.data["background"] = undefined;
          var writer_kitty_background_653 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj472.methods["background:="] = writer_kitty_background_653;
          reader_kitty_background_653.confidential = true;
          writer_kitty_background_653.confidential = true;
          obj472.mutable = true;
          sourceObject = obj472;
          lineNumber = 148
          var string654 = new GraceString("black");
          obj472.data["backgroundColour"] = string654;
          var reader_kitty_backgroundColour_655 = function() {
            return this.data["backgroundColour"];
          }
          obj472.methods["backgroundColour"] = reader_kitty_backgroundColour_655;
          obj472.data["backgroundColour"] = string654;
          var writer_kitty_backgroundColour_655 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj472.methods["backgroundColour:="] = writer_kitty_backgroundColour_655;
          reader_kitty_backgroundColour_655.confidential = true;
          writer_kitty_backgroundColour_655.confidential = true;
          lineNumber = 150;
          moduleName = "kitty";
          lineNumber = 148
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string654)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj472.mutable = true;
          sourceObject = obj472;
          obj472.data["document"] = undefined;
          var reader_kitty_document_656 = function() {
            return this.data["document"];
          }
          obj472.methods["document"] = reader_kitty_document_656;
          obj472.data["document"] = undefined;
          var writer_kitty_document_656 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj472.methods["document:="] = writer_kitty_document_656;
          reader_kitty_document_656.confidential = true;
          writer_kitty_document_656.confidential = true;
          obj472.mutable = true;
          sourceObject = obj472;
          obj472.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_657 = function() {
            return this.data["backingCanvas"];
          }
          obj472.methods["backingCanvas"] = reader_kitty_backingCanvas_657;
          obj472.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_657 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj472.methods["backingCanvas:="] = writer_kitty_backingCanvas_657;
          reader_kitty_backingCanvas_657.confidential = true;
          writer_kitty_backingCanvas_657.confidential = true;
          obj472.mutable = true;
          sourceObject = obj472;
          obj472.data["backingContext"] = undefined;
          var reader_kitty_backingContext_658 = function() {
            return this.data["backingContext"];
          }
          obj472.methods["backingContext"] = reader_kitty_backingContext_658;
          obj472.data["backingContext"] = undefined;
          var writer_kitty_backingContext_658 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj472.methods["backingContext:="] = writer_kitty_backingContext_658;
          reader_kitty_backingContext_658.confidential = true;
          writer_kitty_backingContext_658.confidential = true;
          obj472.mutable = true;
          sourceObject = obj472;
          obj472.data["canvas"] = undefined;
          var reader_kitty_canvas_659 = function() {
            return this.data["canvas"];
          }
          obj472.methods["canvas"] = reader_kitty_canvas_659;
          obj472.data["canvas"] = undefined;
          var writer_kitty_canvas_659 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj472.methods["canvas:="] = writer_kitty_canvas_659;
          reader_kitty_canvas_659.confidential = true;
          writer_kitty_canvas_659.confidential = true;
          obj472.mutable = true;
          sourceObject = obj472;
          obj472.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_660 = function() {
            return this.data["canvasWidth"];
          }
          obj472.methods["canvasWidth"] = reader_kitty_canvasWidth_660;
          obj472.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_660 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj472.methods["canvasWidth:="] = writer_kitty_canvasWidth_660;
          reader_kitty_canvasWidth_660.confidential = true;
          writer_kitty_canvasWidth_660.confidential = true;
          obj472.mutable = true;
          sourceObject = obj472;
          obj472.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_661 = function() {
            return this.data["canvasHeight"];
          }
          obj472.methods["canvasHeight"] = reader_kitty_canvasHeight_661;
          obj472.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_661 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj472.methods["canvasHeight:="] = writer_kitty_canvasHeight_661;
          reader_kitty_canvasHeight_661.confidential = true;
          writer_kitty_canvasHeight_661.confidential = true;
          obj472.mutable = true;
          sourceObject = obj472;
          lineNumber = 159
          var call662 = callmethod(var_collections,"list", [0]);
          var call663 = callmethod(call662,"new", [0]);
          obj472.data["entities"] = call663;
          var reader_kitty_entities_664 = function() {
            return this.data["entities"];
          }
          obj472.methods["entities"] = reader_kitty_entities_664;
          obj472.data["entities"] = call663;
          var writer_kitty_entities_664 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj472.methods["entities:="] = writer_kitty_entities_664;
          reader_kitty_entities_664.confidential = true;
          writer_kitty_entities_664.confidential = true;
          lineNumber = 161;
          moduleName = "kitty";
          lineNumber = 159
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call663)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj472.mutable = true;
          sourceObject = obj472;
          lineNumber = 161
          var bool665 = new GraceBoolean(false)
          obj472.data["isInit"] = bool665;
          var reader_kitty_isInit_666 = function() {
            return this.data["isInit"];
          }
          obj472.methods["isInit"] = reader_kitty_isInit_666;
          obj472.data["isInit"] = bool665;
          var writer_kitty_isInit_666 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj472.methods["isInit:="] = writer_kitty_isInit_666;
          reader_kitty_isInit_666.confidential = true;
          writer_kitty_isInit_666.confidential = true;
          lineNumber = 162;
          moduleName = "kitty";
          lineNumber = 161
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool665)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj472.mutable = true;
          sourceObject = obj472;
          lineNumber = 162
          var bool667 = new GraceBoolean(false)
          obj472.data["isRunning"] = bool667;
          var reader_kitty_isRunning_668 = function() {
            return this.data["isRunning"];
          }
          obj472.methods["isRunning"] = reader_kitty_isRunning_668;
          obj472.data["isRunning"] = bool667;
          var writer_kitty_isRunning_668 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj472.methods["isRunning:="] = writer_kitty_isRunning_668;
          reader_kitty_isRunning_668.confidential = true;
          writer_kitty_isRunning_668.confidential = true;
          lineNumber = 164;
          moduleName = "kitty";
          lineNumber = 162
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool667)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj472.mutable = true;
          sourceObject = obj472;
          obj472.data["mctx"] = undefined;
          var reader_kitty_mctx_669 = function() {
            return this.data["mctx"];
          }
          obj472.methods["mctx"] = reader_kitty_mctx_669;
          obj472.data["mctx"] = undefined;
          var writer_kitty_mctx_669 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj472.methods["mctx:="] = writer_kitty_mctx_669;
          reader_kitty_mctx_669.confidential = true;
          writer_kitty_mctx_669.confidential = true;
          obj472.mutable = true;
          sourceObject = obj472;
          lineNumber = 168
          lineNumber = 166
          var call670 = callmethod(new GraceNum(1),"prefix-", [0]);
          obj472.data["currentKeyDown"] = call670;
          var reader_kitty_currentKeyDown_671 = function() {
            return this.data["currentKeyDown"];
          }
          obj472.methods["currentKeyDown"] = reader_kitty_currentKeyDown_671;
          obj472.data["currentKeyDown"] = call670;
          var writer_kitty_currentKeyDown_671 = function(argcv, o) {
            this.data["currentKeyDown"] = o;
          }
          obj472.methods["currentKeyDown:="] = writer_kitty_currentKeyDown_671;
          reader_kitty_currentKeyDown_671.confidential = true;
          writer_kitty_currentKeyDown_671.confidential = true;
          lineNumber = 168;
          moduleName = "kitty";
          lineNumber = 166
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call670)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'currentKeyDown' to be of type Unknown"))
          obj472.mutable = true;
          sourceObject = obj472;
          lineNumber = 168
          onSelf = true;
          var call672 = callmethod(this, "init", [0]);
          sourceObject = obj472;
          sourceObject = obj472;
          sourceObject = obj472;
          sourceObject = obj472;
          sourceObject = obj472;
          sourceObject = obj472;
          sourceObject = obj472;
          superDepth = origSuperDepth;
        }
        obj_init_472.apply(inheritingObject, []);
        return obj472
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj267.methods["new()object"] = func471;
    var func673 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 143
        var string674 = new GraceString("class KittyWorld");
        return string674
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func673.paramCounts = [
    ];
    func673.variableArities = [
    ];
    obj267.methods["asDebugString"] = func673;
    func673.definitionLine = 143;
    func673.definitionModule = "kitty";
    sourceObject = obj267;
    sourceObject = obj267;
    superDepth = origSuperDepth;
  }
  obj_init_267.apply(obj267, []);
  var var_KittyWorld = obj267;
  lineNumber = 282
  lineNumber = 291
  lineNumber = 306
  lineNumber = 311
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
'dom',
'StandardPrelude',
];
if (gctCache)
  gctCache['kitty'] = "modules:\n StandardPrelude\n mgcollections\nmethods-of:KittyEntity.new:\n draw\n getY\n moveUp\n action\n posX:=\n posY:=\n setImage\n setLocation\n rotation:=\n posX\n posY\n start\n moveDown\n rotation\n image:=\n moveLeft\n image\n onDestroy\n awake\n setAction\n moveRight\n getRotation\n action:=\n getX\n update\nfresh-methods:\n Image\n Entity\n World\npublic:\n m_world\n m_world:=\n worldSet\n worldSet:=\n keyDownListener\n keyDownListener:=\n keyUpListener\n keyUpListener:=\n mouseDownListener\n mouseDownListener:=\n KittyImage\n Image\n KittyEntity\n Entity\n KittyWorld\n World\n start\n setWorld\n atModuleEnd\nmethods-of:KittyImage.new:\n imgTag\n height\n draw\n height:=\n width\n width:=\nmethods-of:KittyWorld.new:\n canvas\n background\n backingCanvas:=\n start\n init\n document:=\n isRunning\n mctx\n entities\n backingContext:=\n setBackground\n canvasWidth:=\n backingContext\n canvasHeight\n currentKeyDown:=\n canvasWidth\n isKeyDown\n currentKeyDown\n stop\n isInit:=\n backingCanvas\n isInit\n mctx:=\n isRunning:=\n entities:=\n document\n addEntity\n backgroundColour:=\n canvasHeight:=\n canvas:=\n backgroundColour\n background:=\n update\nfresh:World:\n canvas\n background\n backingCanvas:=\n start\n backingContext\n document:=\n isRunning\n entities:=\n entities\n backingContext:=\n setBackground\n canvasWidth:=\n init\n canvasHeight\n currentKeyDown:=\n canvasWidth\n isKeyDown\n currentKeyDown\n stop\n isInit:=\n backingCanvas\n isInit\n mctx:=\n isRunning:=\n mctx\n document\n addEntity\n backgroundColour:=\n canvasHeight:=\n canvas:=\n backgroundColour\n background:=\n update\nconstructors-of:KittyEntity:\n new\npath:\n kitty\nclasses:\n KittyImage\n KittyEntity\n KittyWorld\nfresh:Entity:\n getY\n draw\n moveUp\n action\n posX:=\n posY:=\n setImage\n setLocation\n rotation:=\n posX\n posY\n start\n moveDown\n rotation\n image:=\n moveLeft\n image\n onDestroy\n awake\n setAction\n action:=\n getRotation\n moveRight\n update\n getX\nconfidential:\nconstructors-of:KittyWorld:\n new\nfresh:Image:\n imgTag\n height\n draw\n height:=\n width\n width:=\nconstructors-of:KittyImage:\n new\n";
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
    "            print \"MOUSEDOWN\"",
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
