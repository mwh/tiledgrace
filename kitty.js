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
              lineNumber = 28
              var string57 = new GraceString(")...");
              onSelf = true;
              var call59 = callmethod(this, "height", [0]);
              var string61 = new GraceString(", ");
              onSelf = true;
              var call63 = callmethod(this, "width", [0]);
              var string65 = new GraceString(" (");
              onSelf = true;
              var call67 = callmethod(this, "imgTag", [0]);
              var call68 = callmethod(call67,"src", [0]);
              var string70 = new GraceString("DRAWING IMAGE: ");
              var opresult72 = callmethod(string70, "++", [1], call68);
              var opresult74 = callmethod(opresult72, "++", [1], string65);
              var opresult76 = callmethod(opresult74, "++", [1], call63);
              var opresult78 = callmethod(opresult76, "++", [1], string61);
              var opresult80 = callmethod(opresult78, "++", [1], call59);
              var opresult82 = callmethod(opresult80, "++", [1], string57);
              var call83 = Grace_print(opresult82);
              lineNumber = 29
              var call84 = callmethod(var_ctx,"save", [0]);
              lineNumber = 30
              var call85 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 31
              var prod89 = callmethod(var_rot, "*", [1], new GraceNum(180));
              var quotient91 = callmethod(prod89, "/", [1], new GraceNum(3.14));
              var call92 = callmethod(var_ctx,"rotate", [1], quotient91);
              lineNumber = 32
              onSelf = true;
              var call93 = callmethod(this, "imgTag", [0]);
              onSelf = true;
              var call95 = callmethod(this, "width", [0]);
              var call96 = callmethod(call95,"prefix-", [0]);
              var quotient98 = callmethod(call96, "/", [1], new GraceNum(2));
              onSelf = true;
              var call100 = callmethod(this, "height", [0]);
              var call101 = callmethod(call100,"prefix-", [0]);
              var quotient103 = callmethod(call101, "/", [1], new GraceNum(2));
              onSelf = true;
              var call104 = callmethod(this, "width", [0]);
              onSelf = true;
              var call105 = callmethod(this, "height", [0]);
              var call106 = callmethod(var_ctx,"drawImage", [5], call93, quotient98, quotient103, call104, call105);
              lineNumber = 33
              var call107 = callmethod(var_ctx,"restore", [0]);
              lineNumber = 34
              var string108 = new GraceString(" DRAWN");
              onSelf = true;
              var call110 = callmethod(this, "imgTag", [0]);
              var call111 = callmethod(call110,"src", [0]);
              var string113 = new GraceString("IMAGE: ");
              var opresult115 = callmethod(string113, "++", [1], call111);
              var opresult117 = callmethod(opresult115, "++", [1], string108);
              var call118 = Grace_print(opresult117);
              return call118
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
          lineNumber = 20
          var string119 = new GraceString("...");
          var string122 = new GraceString("CREATING NEW IMAGE: ");
          var opresult124 = callmethod(string122, "++", [1], var_url__39__);
          var opresult126 = callmethod(opresult124, "++", [1], string119);
          var call127 = Grace_print(opresult126);
          sourceObject = obj54;
          lineNumber = 21
          var string128 = new GraceString("img");
          var call129 = callmethod(var_dom,"document", [0]);
          var call130 = callmethod(call129,"createElement", [1], string128);
          obj54.data["imgTag"] = call130;
          var reader_kitty_imgTag_131 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_131.def = true;
          reader_kitty_imgTag_131.confidential = true;
          obj54.methods["imgTag"] = reader_kitty_imgTag_131;
          lineNumber = 21;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call130)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj54;
          lineNumber = 24
          lineNumber = 21
          lineNumber = 22
          onSelf = true;
          var call132 = callmethod(this, "imgTag", [0]);
          var call133 = callmethod(call132,"src:=", [1], var_url__39__);
          sourceObject = obj54;
          lineNumber = 24
          obj54.data["height"] = var_height__39__;
          var reader_kitty_height_134 = function() {
            return this.data["height"];
          }
          obj54.methods["height"] = reader_kitty_height_134;
          obj54.data["height"] = var_height__39__;
          var writer_kitty_height_134 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj54.methods["height:="] = writer_kitty_height_134;
          reader_kitty_height_134.confidential = true;
          writer_kitty_height_134.confidential = true;
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
          var reader_kitty_width_135 = function() {
            return this.data["width"];
          }
          obj54.methods["width"] = reader_kitty_width_135;
          obj54.data["width"] = var_width__39__;
          var writer_kitty_width_135 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj54.methods["width:="] = writer_kitty_width_135;
          reader_kitty_width_135.confidential = true;
          writer_kitty_width_135.confidential = true;
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
          sourceObject = obj54;
          lineNumber = 37
          var string136 = new GraceString("");
          var string139 = new GraceString("CREATED NEW IMAGE: ");
          var opresult141 = callmethod(string139, "++", [1], var_url__39__);
          var opresult143 = callmethod(opresult141, "++", [1], string136);
          var call144 = Grace_print(opresult143);
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
    var func145 = function(argcv) {
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
        var obj146 = Grace_allocObject();
        obj146.definitionModule = "kitty";
        obj146.definitionLine = 18;
        var inho146 = inheritingObject;
        while (inho146.superobj) inho146 = inho146.superobj;
        inho146.superobj = obj146;
        obj146.data = inheritingObject.data;
        obj146.outer = this;
        var reader_kitty_outer_147 = function() {
          return this.outer;
        }
        obj146.methods["outer"] = reader_kitty_outer_147;
        function obj_init_146() {
          var origSuperDepth = superDepth;
          superDepth = obj146;
          obj146.annotations = [];
          var func148 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            var var_rot = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func148.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 28
              var string149 = new GraceString(")...");
              onSelf = true;
              var call151 = callmethod(this, "height", [0]);
              var string153 = new GraceString(", ");
              onSelf = true;
              var call155 = callmethod(this, "width", [0]);
              var string157 = new GraceString(" (");
              onSelf = true;
              var call159 = callmethod(this, "imgTag", [0]);
              var call160 = callmethod(call159,"src", [0]);
              var string162 = new GraceString("DRAWING IMAGE: ");
              var opresult164 = callmethod(string162, "++", [1], call160);
              var opresult166 = callmethod(opresult164, "++", [1], string157);
              var opresult168 = callmethod(opresult166, "++", [1], call155);
              var opresult170 = callmethod(opresult168, "++", [1], string153);
              var opresult172 = callmethod(opresult170, "++", [1], call151);
              var opresult174 = callmethod(opresult172, "++", [1], string149);
              var call175 = Grace_print(opresult174);
              lineNumber = 29
              var call176 = callmethod(var_ctx,"save", [0]);
              lineNumber = 30
              var call177 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 31
              var prod181 = callmethod(var_rot, "*", [1], new GraceNum(180));
              var quotient183 = callmethod(prod181, "/", [1], new GraceNum(3.14));
              var call184 = callmethod(var_ctx,"rotate", [1], quotient183);
              lineNumber = 32
              onSelf = true;
              var call185 = callmethod(this, "imgTag", [0]);
              onSelf = true;
              var call187 = callmethod(this, "width", [0]);
              var call188 = callmethod(call187,"prefix-", [0]);
              var quotient190 = callmethod(call188, "/", [1], new GraceNum(2));
              onSelf = true;
              var call192 = callmethod(this, "height", [0]);
              var call193 = callmethod(call192,"prefix-", [0]);
              var quotient195 = callmethod(call193, "/", [1], new GraceNum(2));
              onSelf = true;
              var call196 = callmethod(this, "width", [0]);
              onSelf = true;
              var call197 = callmethod(this, "height", [0]);
              var call198 = callmethod(var_ctx,"drawImage", [5], call185, quotient190, quotient195, call196, call197);
              lineNumber = 33
              var call199 = callmethod(var_ctx,"restore", [0]);
              lineNumber = 34
              var string200 = new GraceString(" DRAWN");
              onSelf = true;
              var call202 = callmethod(this, "imgTag", [0]);
              var call203 = callmethod(call202,"src", [0]);
              var string205 = new GraceString("IMAGE: ");
              var opresult207 = callmethod(string205, "++", [1], call203);
              var opresult209 = callmethod(opresult207, "++", [1], string200);
              var call210 = Grace_print(opresult209);
              return call210
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func148.paramCounts = [
            4,
          ];
          func148.variableArities = [
            false,
          ];
          obj146.methods["draw"] = func148;
          func148.definitionLine = 27;
          func148.definitionModule = "kitty";
          sourceObject = obj146;
          lineNumber = 20
          var string211 = new GraceString("...");
          var string214 = new GraceString("CREATING NEW IMAGE: ");
          var opresult216 = callmethod(string214, "++", [1], var_url__39__);
          var opresult218 = callmethod(opresult216, "++", [1], string211);
          var call219 = Grace_print(opresult218);
          sourceObject = obj146;
          lineNumber = 21
          var string220 = new GraceString("img");
          var call221 = callmethod(var_dom,"document", [0]);
          var call222 = callmethod(call221,"createElement", [1], string220);
          obj146.data["imgTag"] = call222;
          var reader_kitty_imgTag_223 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_223.def = true;
          reader_kitty_imgTag_223.confidential = true;
          obj146.methods["imgTag"] = reader_kitty_imgTag_223;
          lineNumber = 21;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call222)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj146;
          lineNumber = 24
          lineNumber = 21
          lineNumber = 22
          onSelf = true;
          var call224 = callmethod(this, "imgTag", [0]);
          var call225 = callmethod(call224,"src:=", [1], var_url__39__);
          sourceObject = obj146;
          lineNumber = 24
          obj146.data["height"] = var_height__39__;
          var reader_kitty_height_226 = function() {
            return this.data["height"];
          }
          obj146.methods["height"] = reader_kitty_height_226;
          obj146.data["height"] = var_height__39__;
          var writer_kitty_height_226 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj146.methods["height:="] = writer_kitty_height_226;
          reader_kitty_height_226.confidential = true;
          writer_kitty_height_226.confidential = true;
          lineNumber = 25;
          moduleName = "kitty";
          lineNumber = 24
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj146.mutable = true;
          sourceObject = obj146;
          lineNumber = 25
          obj146.data["width"] = var_width__39__;
          var reader_kitty_width_227 = function() {
            return this.data["width"];
          }
          obj146.methods["width"] = reader_kitty_width_227;
          obj146.data["width"] = var_width__39__;
          var writer_kitty_width_227 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj146.methods["width:="] = writer_kitty_width_227;
          reader_kitty_width_227.confidential = true;
          writer_kitty_width_227.confidential = true;
          lineNumber = 27;
          moduleName = "kitty";
          lineNumber = 25
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj146.mutable = true;
          sourceObject = obj146;
          sourceObject = obj146;
          lineNumber = 37
          var string228 = new GraceString("");
          var string231 = new GraceString("CREATED NEW IMAGE: ");
          var opresult233 = callmethod(string231, "++", [1], var_url__39__);
          var opresult235 = callmethod(opresult233, "++", [1], string228);
          var call236 = Grace_print(opresult235);
          superDepth = origSuperDepth;
        }
        obj_init_146.apply(inheritingObject, []);
        return obj146
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj51.methods["new()object"] = func145;
    var func237 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 18
        var string238 = new GraceString("class KittyImage");
        return string238
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func237.paramCounts = [
    ];
    func237.variableArities = [
    ];
    obj51.methods["asDebugString"] = func237;
    func237.definitionLine = 18;
    func237.definitionModule = "kitty";
    sourceObject = obj51;
    sourceObject = obj51;
    superDepth = origSuperDepth;
  }
  obj_init_51.apply(obj51, []);
  var var_KittyImage = obj51;
  lineNumber = 40
  lineNumber = 47
  var func239 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func239.paramCounts[0])
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
  func239.paramCounts = [
    0,
  ];
  func239.variableArities = [
    false,
  ];
  this.methods["KittyEntity"] = func239;
  func239.definitionLine = 47;
  func239.definitionModule = "kitty";
  var obj240 = Grace_allocObject();
  obj240.definitionModule = "kitty";
  obj240.definitionLine = 47;
  obj240.outer = this;
  var reader_kitty_outer_241 = function() {
    return this.outer;
  }
  obj240.methods["outer"] = reader_kitty_outer_241;
  function obj_init_240() {
    var origSuperDepth = superDepth;
    superDepth = obj240;
    obj240.annotations = [];
    var func242 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func242.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj243 = Grace_allocObject();
        obj243.definitionModule = "kitty";
        obj243.definitionLine = 47;
        obj243.outer = this;
        var reader_kitty_outer_244 = function() {
          return this.outer;
        }
        obj243.methods["outer"] = reader_kitty_outer_244;
        function obj_init_243() {
          var origSuperDepth = superDepth;
          superDepth = obj243;
          obj243.annotations = [];
          var func245 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func245.paramCounts[0])
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
          func245.paramCounts = [
            0,
          ];
          func245.variableArities = [
            false,
          ];
          obj243.methods["awake"] = func245;
          func245.definitionLine = 66;
          func245.definitionModule = "kitty";
          var func246 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func246.paramCounts[0])
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
          func246.paramCounts = [
            0,
          ];
          func246.variableArities = [
            false,
          ];
          obj243.methods["start"] = func246;
          func246.definitionLine = 71;
          func246.definitionModule = "kitty";
          var func247 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func247.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 77
              onSelf = true;
              var call248 = callmethod(this, "action", [0]);
              var call249 = callmethod(call248,"update", [0]);
              return call249
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
          obj243.methods["update"] = func247;
          func247.definitionLine = 76;
          func247.definitionModule = "kitty";
          var func250 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func250.paramCounts[0])
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
          func250.paramCounts = [
            0,
          ];
          func250.variableArities = [
            false,
          ];
          obj243.methods["onDestroy"] = func250;
          func250.definitionLine = 81;
          func250.definitionModule = "kitty";
          var func251 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func251.paramCounts[0])
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
              var call253 = callmethod(this, "posY", [0]);
              var diff255 = callmethod(call253, "-", [1], var_dy);
              onSelf = true;
              var call256 = callmethod(this, "posY:=", [1], diff255);
              return call256
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func251.paramCounts = [
            1,
          ];
          func251.variableArities = [
            false,
          ];
          obj243.methods["moveUp"] = func251;
          func251.definitionLine = 85;
          func251.definitionModule = "kitty";
          var func257 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func257.paramCounts[0])
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
              var call259 = callmethod(this, "posY", [0]);
              var opresult261 = callmethod(call259, "+", [1], var_dy);
              onSelf = true;
              var call262 = callmethod(this, "posY:=", [1], opresult261);
              return call262
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func257.paramCounts = [
            1,
          ];
          func257.variableArities = [
            false,
          ];
          obj243.methods["moveDown"] = func257;
          func257.definitionLine = 89;
          func257.definitionModule = "kitty";
          var func263 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func263.paramCounts[0])
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
              var call265 = callmethod(this, "posX", [0]);
              var diff267 = callmethod(call265, "-", [1], var_dx);
              onSelf = true;
              var call268 = callmethod(this, "posX:=", [1], diff267);
              return call268
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func263.paramCounts = [
            1,
          ];
          func263.variableArities = [
            false,
          ];
          obj243.methods["moveLeft"] = func263;
          func263.definitionLine = 93;
          func263.definitionModule = "kitty";
          var func269 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func269.paramCounts[0])
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
              var call271 = callmethod(this, "posX", [0]);
              var opresult273 = callmethod(call271, "+", [1], var_dx);
              onSelf = true;
              var call274 = callmethod(this, "posX:=", [1], opresult273);
              return call274
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func269.paramCounts = [
            1,
          ];
          func269.variableArities = [
            false,
          ];
          obj243.methods["moveRight"] = func269;
          func269.definitionLine = 97;
          func269.definitionModule = "kitty";
          var func275 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func275.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 102
              var call276 = callmethod(var_ctx,"save", [0]);
              lineNumber = 103
              onSelf = true;
              var call277 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call278 = callmethod(this, "posY", [0]);
              var call279 = callmethod(var_ctx,"translate", [2], call277, call278);
              lineNumber = 104
              onSelf = true;
              var call280 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call281 = callmethod(this, "image", [0]);
              var call282 = callmethod(call281,"draw", [4], var_ctx, var_dx, var_dy, call280);
              lineNumber = 105
              var call283 = callmethod(var_ctx,"restore", [0]);
              return call283
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func275.paramCounts = [
            3,
          ];
          func275.variableArities = [
            false,
          ];
          obj243.methods["draw"] = func275;
          func275.definitionLine = 101;
          func275.definitionModule = "kitty";
          var func284 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func284.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 109
              lineNumber = 105
              lineNumber = 109
              var call285 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call286 = callmethod(call285, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call287 = callmethod(call286, "Image", [3], var_image__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call288 = callmethod(this, "image:=", [1], call287);
              return call288
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func284.paramCounts = [
            1,
          ];
          func284.variableArities = [
            false,
          ];
          obj243.methods["setImage"] = func284;
          func284.definitionLine = 108;
          func284.definitionModule = "kitty";
          var func289 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func289.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 114
              lineNumber = 109
              lineNumber = 113
              onSelf = true;
              var call290 = callmethod(this, "action:=", [1], var_action__39__);
              return call290
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func289.paramCounts = [
            1,
          ];
          func289.variableArities = [
            false,
          ];
          obj243.methods["setAction"] = func289;
          func289.definitionLine = 112;
          func289.definitionModule = "kitty";
          var func291 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func291.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 118
              lineNumber = 109
              lineNumber = 117
              onSelf = true;
              var call292 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 119
              lineNumber = 109
              lineNumber = 118
              onSelf = true;
              var call293 = callmethod(this, "posY:=", [1], var_y);
              return call293
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func291.paramCounts = [
            2,
          ];
          func291.variableArities = [
            false,
          ];
          obj243.methods["setLocation"] = func291;
          func291.definitionLine = 116;
          func291.definitionModule = "kitty";
          var func294 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func294.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 123
              lineNumber = 122
              onSelf = true;
              var call295 = callmethod(this, "posX", [0]);
              return call295
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func294.paramCounts = [
            0,
          ];
          func294.variableArities = [
            false,
          ];
          obj243.methods["getX"] = func294;
          func294.definitionLine = 121;
          func294.definitionModule = "kitty";
          var func296 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func296.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 127
              lineNumber = 126
              onSelf = true;
              var call297 = callmethod(this, "posY", [0]);
              return call297
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func296.paramCounts = [
            0,
          ];
          func296.variableArities = [
            false,
          ];
          obj243.methods["getY"] = func296;
          func296.definitionLine = 125;
          func296.definitionModule = "kitty";
          var func298 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func298.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 131
              lineNumber = 130
              onSelf = true;
              var call299 = callmethod(this, "rotation", [0]);
              return call299
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func298.paramCounts = [
            0,
          ];
          func298.variableArities = [
            false,
          ];
          obj243.methods["getRotation"] = func298;
          func298.definitionLine = 129;
          func298.definitionModule = "kitty";
          sourceObject = obj243;
          lineNumber = 49
          var string300 = new GraceString(")...");
          var string303 = new GraceString(", ");
          var string306 = new GraceString("CREATING ENTITY AT (");
          var opresult308 = callmethod(string306, "++", [1], var_x__39__);
          var opresult310 = callmethod(opresult308, "++", [1], string303);
          var opresult312 = callmethod(opresult310, "++", [1], var_y__39__);
          var opresult314 = callmethod(opresult312, "++", [1], string300);
          var call315 = Grace_print(opresult314);
          sourceObject = obj243;
          lineNumber = 51
          obj243.data["posX"] = var_x__39__;
          var reader_kitty_posX_316 = function() {
            return this.data["posX"];
          }
          obj243.methods["posX"] = reader_kitty_posX_316;
          obj243.data["posX"] = var_x__39__;
          var writer_kitty_posX_316 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj243.methods["posX:="] = writer_kitty_posX_316;
          reader_kitty_posX_316.confidential = true;
          writer_kitty_posX_316.confidential = true;
          lineNumber = 52;
          moduleName = "kitty";
          lineNumber = 51
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj243.mutable = true;
          sourceObject = obj243;
          lineNumber = 52
          obj243.data["posY"] = var_y__39__;
          var reader_kitty_posY_317 = function() {
            return this.data["posY"];
          }
          obj243.methods["posY"] = reader_kitty_posY_317;
          obj243.data["posY"] = var_y__39__;
          var writer_kitty_posY_317 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj243.methods["posY:="] = writer_kitty_posY_317;
          reader_kitty_posY_317.confidential = true;
          writer_kitty_posY_317.confidential = true;
          lineNumber = 53;
          moduleName = "kitty";
          lineNumber = 52
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj243.mutable = true;
          sourceObject = obj243;
          lineNumber = 53
          obj243.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_318 = function() {
            return this.data["rotation"];
          }
          obj243.methods["rotation"] = reader_kitty_rotation_318;
          obj243.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_318 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj243.methods["rotation:="] = writer_kitty_rotation_318;
          reader_kitty_rotation_318.confidential = true;
          writer_kitty_rotation_318.confidential = true;
          lineNumber = 55;
          moduleName = "kitty";
          lineNumber = 53
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj243.mutable = true;
          sourceObject = obj243;
          lineNumber = 55
          var obj319 = Grace_allocObject();
          obj319.definitionModule = "kitty";
          obj319.definitionLine = 55;
          obj319.outer = this;
          var reader_kitty_outer_320 = function() {
            return this.outer;
          }
          obj319.methods["outer"] = reader_kitty_outer_320;
          function obj_init_319() {
            var origSuperDepth = superDepth;
            superDepth = obj319;
            obj319.annotations = [];
            var func321 = function(argcv) {
              var curarg = 1;
              if (argcv[0] !=  func321.paramCounts[0])
                callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
              var returnTarget = invocationCount;
              invocationCount++;
              moduleName = "kitty";
              try {
                lineNumber = 57
                var string322 = new GraceString("UPDATING ENTITY...");
                var call323 = Grace_print(string322);
                return call323
              } catch(e) {
                if ((e.exctype == 'return') && (e.target == returnTarget)) {
                  return e.returnvalue;
                } else {
                  throw e;
                }
              }
            }
            func321.paramCounts = [
              0,
            ];
            func321.variableArities = [
              false,
            ];
            obj319.methods["update"] = func321;
            func321.definitionLine = 56;
            func321.definitionModule = "kitty";
            sourceObject = obj319;
            superDepth = origSuperDepth;
          }
          obj_init_319.apply(obj319, []);
          obj243.data["action"] = obj319;
          var reader_kitty_action_324 = function() {
            return this.data["action"];
          }
          obj243.methods["action"] = reader_kitty_action_324;
          obj243.data["action"] = obj319;
          var writer_kitty_action_324 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj243.methods["action:="] = writer_kitty_action_324;
          reader_kitty_action_324.confidential = true;
          writer_kitty_action_324.confidential = true;
          lineNumber = 55;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], obj319)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj243.mutable = true;
          sourceObject = obj243;
          obj243.data["image"] = undefined;
          var reader_kitty_image_325 = function() {
            return this.data["image"];
          }
          obj243.methods["image"] = reader_kitty_image_325;
          obj243.data["image"] = undefined;
          var writer_kitty_image_325 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj243.methods["image:="] = writer_kitty_image_325;
          reader_kitty_image_325.confidential = true;
          writer_kitty_image_325.confidential = true;
          obj243.mutable = true;
          sourceObject = obj243;
          lineNumber = 63
          onSelf = true;
          var call326 = callmethod(this, "awake", [0]);
          sourceObject = obj243;
          sourceObject = obj243;
          sourceObject = obj243;
          sourceObject = obj243;
          sourceObject = obj243;
          sourceObject = obj243;
          sourceObject = obj243;
          sourceObject = obj243;
          sourceObject = obj243;
          sourceObject = obj243;
          sourceObject = obj243;
          sourceObject = obj243;
          sourceObject = obj243;
          sourceObject = obj243;
          sourceObject = obj243;
          sourceObject = obj243;
          lineNumber = 133
          var string327 = new GraceString("ENTITY CREATED");
          var call328 = Grace_print(string327);
          superDepth = origSuperDepth;
        }
        obj_init_243.apply(obj243, []);
        return obj243
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func242.paramCounts = [
      2,
    ];
    func242.variableArities = [
      false,
    ];
    obj240.methods["new"] = func242;
    func242.definitionLine = 47;
    func242.definitionModule = "kitty";
    var func329 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj330 = Grace_allocObject();
        obj330.definitionModule = "kitty";
        obj330.definitionLine = 47;
        var inho330 = inheritingObject;
        while (inho330.superobj) inho330 = inho330.superobj;
        inho330.superobj = obj330;
        obj330.data = inheritingObject.data;
        obj330.outer = this;
        var reader_kitty_outer_331 = function() {
          return this.outer;
        }
        obj330.methods["outer"] = reader_kitty_outer_331;
        function obj_init_330() {
          var origSuperDepth = superDepth;
          superDepth = obj330;
          obj330.annotations = [];
          var func332 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func332.paramCounts[0])
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
          func332.paramCounts = [
            0,
          ];
          func332.variableArities = [
            false,
          ];
          obj330.methods["awake"] = func332;
          func332.definitionLine = 66;
          func332.definitionModule = "kitty";
          var func333 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func333.paramCounts[0])
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
          func333.paramCounts = [
            0,
          ];
          func333.variableArities = [
            false,
          ];
          obj330.methods["start"] = func333;
          func333.definitionLine = 71;
          func333.definitionModule = "kitty";
          var func334 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func334.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 77
              onSelf = true;
              var call335 = callmethod(this, "action", [0]);
              var call336 = callmethod(call335,"update", [0]);
              return call336
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
          obj330.methods["update"] = func334;
          func334.definitionLine = 76;
          func334.definitionModule = "kitty";
          var func337 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func337.paramCounts[0])
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
          func337.paramCounts = [
            0,
          ];
          func337.variableArities = [
            false,
          ];
          obj330.methods["onDestroy"] = func337;
          func337.definitionLine = 81;
          func337.definitionModule = "kitty";
          var func338 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func338.paramCounts[0])
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
              var call340 = callmethod(this, "posY", [0]);
              var diff342 = callmethod(call340, "-", [1], var_dy);
              onSelf = true;
              var call343 = callmethod(this, "posY:=", [1], diff342);
              return call343
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func338.paramCounts = [
            1,
          ];
          func338.variableArities = [
            false,
          ];
          obj330.methods["moveUp"] = func338;
          func338.definitionLine = 85;
          func338.definitionModule = "kitty";
          var func344 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func344.paramCounts[0])
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
              var call346 = callmethod(this, "posY", [0]);
              var opresult348 = callmethod(call346, "+", [1], var_dy);
              onSelf = true;
              var call349 = callmethod(this, "posY:=", [1], opresult348);
              return call349
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func344.paramCounts = [
            1,
          ];
          func344.variableArities = [
            false,
          ];
          obj330.methods["moveDown"] = func344;
          func344.definitionLine = 89;
          func344.definitionModule = "kitty";
          var func350 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func350.paramCounts[0])
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
              var call352 = callmethod(this, "posX", [0]);
              var diff354 = callmethod(call352, "-", [1], var_dx);
              onSelf = true;
              var call355 = callmethod(this, "posX:=", [1], diff354);
              return call355
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func350.paramCounts = [
            1,
          ];
          func350.variableArities = [
            false,
          ];
          obj330.methods["moveLeft"] = func350;
          func350.definitionLine = 93;
          func350.definitionModule = "kitty";
          var func356 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func356.paramCounts[0])
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
              var call358 = callmethod(this, "posX", [0]);
              var opresult360 = callmethod(call358, "+", [1], var_dx);
              onSelf = true;
              var call361 = callmethod(this, "posX:=", [1], opresult360);
              return call361
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func356.paramCounts = [
            1,
          ];
          func356.variableArities = [
            false,
          ];
          obj330.methods["moveRight"] = func356;
          func356.definitionLine = 97;
          func356.definitionModule = "kitty";
          var func362 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func362.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 102
              var call363 = callmethod(var_ctx,"save", [0]);
              lineNumber = 103
              onSelf = true;
              var call364 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call365 = callmethod(this, "posY", [0]);
              var call366 = callmethod(var_ctx,"translate", [2], call364, call365);
              lineNumber = 104
              onSelf = true;
              var call367 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call368 = callmethod(this, "image", [0]);
              var call369 = callmethod(call368,"draw", [4], var_ctx, var_dx, var_dy, call367);
              lineNumber = 105
              var call370 = callmethod(var_ctx,"restore", [0]);
              return call370
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func362.paramCounts = [
            3,
          ];
          func362.variableArities = [
            false,
          ];
          obj330.methods["draw"] = func362;
          func362.definitionLine = 101;
          func362.definitionModule = "kitty";
          var func371 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func371.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 109
              lineNumber = 105
              lineNumber = 109
              var call372 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call373 = callmethod(call372, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call374 = callmethod(call373, "Image", [3], var_image__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call375 = callmethod(this, "image:=", [1], call374);
              return call375
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func371.paramCounts = [
            1,
          ];
          func371.variableArities = [
            false,
          ];
          obj330.methods["setImage"] = func371;
          func371.definitionLine = 108;
          func371.definitionModule = "kitty";
          var func376 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func376.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 114
              lineNumber = 109
              lineNumber = 113
              onSelf = true;
              var call377 = callmethod(this, "action:=", [1], var_action__39__);
              return call377
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func376.paramCounts = [
            1,
          ];
          func376.variableArities = [
            false,
          ];
          obj330.methods["setAction"] = func376;
          func376.definitionLine = 112;
          func376.definitionModule = "kitty";
          var func378 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func378.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 118
              lineNumber = 109
              lineNumber = 117
              onSelf = true;
              var call379 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 119
              lineNumber = 109
              lineNumber = 118
              onSelf = true;
              var call380 = callmethod(this, "posY:=", [1], var_y);
              return call380
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func378.paramCounts = [
            2,
          ];
          func378.variableArities = [
            false,
          ];
          obj330.methods["setLocation"] = func378;
          func378.definitionLine = 116;
          func378.definitionModule = "kitty";
          var func381 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func381.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 123
              lineNumber = 122
              onSelf = true;
              var call382 = callmethod(this, "posX", [0]);
              return call382
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
          obj330.methods["getX"] = func381;
          func381.definitionLine = 121;
          func381.definitionModule = "kitty";
          var func383 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func383.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 127
              lineNumber = 126
              onSelf = true;
              var call384 = callmethod(this, "posY", [0]);
              return call384
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func383.paramCounts = [
            0,
          ];
          func383.variableArities = [
            false,
          ];
          obj330.methods["getY"] = func383;
          func383.definitionLine = 125;
          func383.definitionModule = "kitty";
          var func385 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func385.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 131
              lineNumber = 130
              onSelf = true;
              var call386 = callmethod(this, "rotation", [0]);
              return call386
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func385.paramCounts = [
            0,
          ];
          func385.variableArities = [
            false,
          ];
          obj330.methods["getRotation"] = func385;
          func385.definitionLine = 129;
          func385.definitionModule = "kitty";
          sourceObject = obj330;
          lineNumber = 49
          var string387 = new GraceString(")...");
          var string390 = new GraceString(", ");
          var string393 = new GraceString("CREATING ENTITY AT (");
          var opresult395 = callmethod(string393, "++", [1], var_x__39__);
          var opresult397 = callmethod(opresult395, "++", [1], string390);
          var opresult399 = callmethod(opresult397, "++", [1], var_y__39__);
          var opresult401 = callmethod(opresult399, "++", [1], string387);
          var call402 = Grace_print(opresult401);
          sourceObject = obj330;
          lineNumber = 51
          obj330.data["posX"] = var_x__39__;
          var reader_kitty_posX_403 = function() {
            return this.data["posX"];
          }
          obj330.methods["posX"] = reader_kitty_posX_403;
          obj330.data["posX"] = var_x__39__;
          var writer_kitty_posX_403 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj330.methods["posX:="] = writer_kitty_posX_403;
          reader_kitty_posX_403.confidential = true;
          writer_kitty_posX_403.confidential = true;
          lineNumber = 52;
          moduleName = "kitty";
          lineNumber = 51
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj330.mutable = true;
          sourceObject = obj330;
          lineNumber = 52
          obj330.data["posY"] = var_y__39__;
          var reader_kitty_posY_404 = function() {
            return this.data["posY"];
          }
          obj330.methods["posY"] = reader_kitty_posY_404;
          obj330.data["posY"] = var_y__39__;
          var writer_kitty_posY_404 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj330.methods["posY:="] = writer_kitty_posY_404;
          reader_kitty_posY_404.confidential = true;
          writer_kitty_posY_404.confidential = true;
          lineNumber = 53;
          moduleName = "kitty";
          lineNumber = 52
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj330.mutable = true;
          sourceObject = obj330;
          lineNumber = 53
          obj330.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_405 = function() {
            return this.data["rotation"];
          }
          obj330.methods["rotation"] = reader_kitty_rotation_405;
          obj330.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_405 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj330.methods["rotation:="] = writer_kitty_rotation_405;
          reader_kitty_rotation_405.confidential = true;
          writer_kitty_rotation_405.confidential = true;
          lineNumber = 55;
          moduleName = "kitty";
          lineNumber = 53
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj330.mutable = true;
          sourceObject = obj330;
          lineNumber = 55
          var obj406 = Grace_allocObject();
          obj406.definitionModule = "kitty";
          obj406.definitionLine = 55;
          obj406.outer = this;
          var reader_kitty_outer_407 = function() {
            return this.outer;
          }
          obj406.methods["outer"] = reader_kitty_outer_407;
          function obj_init_406() {
            var origSuperDepth = superDepth;
            superDepth = obj406;
            obj406.annotations = [];
            var func408 = function(argcv) {
              var curarg = 1;
              if (argcv[0] !=  func408.paramCounts[0])
                callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
              var returnTarget = invocationCount;
              invocationCount++;
              moduleName = "kitty";
              try {
                lineNumber = 57
                var string409 = new GraceString("UPDATING ENTITY...");
                var call410 = Grace_print(string409);
                return call410
              } catch(e) {
                if ((e.exctype == 'return') && (e.target == returnTarget)) {
                  return e.returnvalue;
                } else {
                  throw e;
                }
              }
            }
            func408.paramCounts = [
              0,
            ];
            func408.variableArities = [
              false,
            ];
            obj406.methods["update"] = func408;
            func408.definitionLine = 56;
            func408.definitionModule = "kitty";
            sourceObject = obj406;
            superDepth = origSuperDepth;
          }
          obj_init_406.apply(obj406, []);
          obj330.data["action"] = obj406;
          var reader_kitty_action_411 = function() {
            return this.data["action"];
          }
          obj330.methods["action"] = reader_kitty_action_411;
          obj330.data["action"] = obj406;
          var writer_kitty_action_411 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj330.methods["action:="] = writer_kitty_action_411;
          reader_kitty_action_411.confidential = true;
          writer_kitty_action_411.confidential = true;
          lineNumber = 55;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], obj406)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj330.mutable = true;
          sourceObject = obj330;
          obj330.data["image"] = undefined;
          var reader_kitty_image_412 = function() {
            return this.data["image"];
          }
          obj330.methods["image"] = reader_kitty_image_412;
          obj330.data["image"] = undefined;
          var writer_kitty_image_412 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj330.methods["image:="] = writer_kitty_image_412;
          reader_kitty_image_412.confidential = true;
          writer_kitty_image_412.confidential = true;
          obj330.mutable = true;
          sourceObject = obj330;
          lineNumber = 63
          onSelf = true;
          var call413 = callmethod(this, "awake", [0]);
          sourceObject = obj330;
          sourceObject = obj330;
          sourceObject = obj330;
          sourceObject = obj330;
          sourceObject = obj330;
          sourceObject = obj330;
          sourceObject = obj330;
          sourceObject = obj330;
          sourceObject = obj330;
          sourceObject = obj330;
          sourceObject = obj330;
          sourceObject = obj330;
          sourceObject = obj330;
          sourceObject = obj330;
          sourceObject = obj330;
          sourceObject = obj330;
          lineNumber = 133
          var string414 = new GraceString("ENTITY CREATED");
          var call415 = Grace_print(string414);
          superDepth = origSuperDepth;
        }
        obj_init_330.apply(inheritingObject, []);
        return obj330
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj240.methods["new()object"] = func329;
    var func416 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 47
        var string417 = new GraceString("class KittyEntity");
        return string417
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func416.paramCounts = [
    ];
    func416.variableArities = [
    ];
    obj240.methods["asDebugString"] = func416;
    func416.definitionLine = 47;
    func416.definitionModule = "kitty";
    sourceObject = obj240;
    sourceObject = obj240;
    superDepth = origSuperDepth;
  }
  obj_init_240.apply(obj240, []);
  var var_KittyEntity = obj240;
  lineNumber = 136
  lineNumber = 143
  var func418 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func418.paramCounts[0])
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
  func418.paramCounts = [
    0,
  ];
  func418.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func418;
  func418.definitionLine = 143;
  func418.definitionModule = "kitty";
  var obj419 = Grace_allocObject();
  obj419.definitionModule = "kitty";
  obj419.definitionLine = 143;
  obj419.outer = this;
  var reader_kitty_outer_420 = function() {
    return this.outer;
  }
  obj419.methods["outer"] = reader_kitty_outer_420;
  function obj_init_419() {
    var origSuperDepth = superDepth;
    superDepth = obj419;
    obj419.annotations = [];
    var func421 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func421.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj422 = Grace_allocObject();
        obj422.definitionModule = "kitty";
        obj422.definitionLine = 143;
        obj422.outer = this;
        var reader_kitty_outer_423 = function() {
          return this.outer;
        }
        obj422.methods["outer"] = reader_kitty_outer_423;
        function obj_init_422() {
          var origSuperDepth = superDepth;
          superDepth = obj422;
          obj422.annotations = [];
          var func424 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func424.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 173
              var string425 = new GraceString("INITIALIZING WORLD...");
              var call426 = Grace_print(string425);
              lineNumber = 179
              var if427 = var_done;
              lineNumber = 175
              onSelf = true;
              var call428 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call428)) {
                lineNumber = 177
                lineNumber = 176
                var bool429 = new GraceBoolean(false)
                return bool429
              }
              lineNumber = 180
              lineNumber = 143
              lineNumber = 179
              var call430 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call431 = callmethod(this, "document:=", [1], call430);
              lineNumber = 180
              lineNumber = 179
              lineNumber = 180
              var string432 = new GraceString("standard-canvas");
              onSelf = true;
              var call433 = callmethod(this, "document", [0]);
              var call434 = callmethod(call433,"getElementById", [1], string432);
              onSelf = true;
              var call435 = callmethod(this, "canvas:=", [1], call434);
              lineNumber = 182
              lineNumber = 179
              lineNumber = 181
              onSelf = true;
              var call436 = callmethod(this, "canvas", [0]);
              var call437 = callmethod(call436,"width", [0]);
              onSelf = true;
              var call438 = callmethod(this, "canvasWidth:=", [1], call437);
              lineNumber = 185
              lineNumber = 181
              lineNumber = 182
              onSelf = true;
              var call439 = callmethod(this, "canvas", [0]);
              var call440 = callmethod(call439,"height", [0]);
              onSelf = true;
              var call441 = callmethod(this, "canvasHeight:=", [1], call440);
              lineNumber = 197
              var block442 = Grace_allocObject();
              block442.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block442.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block442.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block442.methods["match"] = GraceBlock_match;
              block442.methods["prefix?"] = GraceBlock_lift;
              block442.receiver = this;
              block442.className = 'block<kitty:197>';
              block442.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 188
                lineNumber = 187
                onSelf = true;
                var call443 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call445 = callmethod(this, "canvas", [0]);
                var call446 = callmethod(call445,"offsetWidth", [0]);
                onSelf = true;
                var call448 = callmethod(this, "canvas", [0]);
                var call449 = callmethod(call448,"offsetLeft", [0]);
                var call451 = callmethod(var_ev,"clientX", [0]);
                var diff453 = callmethod(call451, "-", [1], call449);
                var quotient455 = callmethod(diff453, "/", [1], call446);
                var prod457 = callmethod(quotient455, "*", [1], call443);
                var var_x = prod457;
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
                var call458 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call460 = callmethod(this, "canvas", [0]);
                var call461 = callmethod(call460,"offsetHeight", [0]);
                onSelf = true;
                var call463 = callmethod(this, "canvas", [0]);
                var call464 = callmethod(call463,"offsetTop", [0]);
                var call466 = callmethod(var_ev,"clientY", [0]);
                var diff468 = callmethod(call466, "-", [1], call464);
                var quotient470 = callmethod(diff468, "/", [1], call461);
                var prod472 = callmethod(quotient470, "*", [1], call458);
                var var_y = prod472;
                lineNumber = 190;
                moduleName = "kitty";
                lineNumber = 188
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 190
                var string473 = new GraceString("MOUSEDOWN");
                var call474 = Grace_print(string473);
                lineNumber = 196
                var if475 = var_done;
                lineNumber = 192
                var opresult478 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call481 = callmethod(this, "canvasWidth", [0]);
                var diff483 = callmethod(call481, "-", [1], new GraceNum(20));
                var opresult486 = callmethod(var_x, ">", [1], diff483);
                var opresult488 = callmethod(opresult486, "&&", [1], opresult478);
                if (Grace_isTrue(opresult488)) {
                  lineNumber = 193
                  var call489 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 194
                  onSelf = true;
                  var call490 = callmethod(this, "stop", [0]);
                  if475 = call490;
                }
                return if475;
              };
              var_mouseDownListener = block442;
              lineNumber = 197
              var string491 = new GraceString("mousedown");
              onSelf = true;
              var call492 = callmethod(this, "canvas", [0]);
              var call493 = callmethod(call492,"addEventListener", [2], string491, var_mouseDownListener);
              lineNumber = 207
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
              block494.className = 'block<kitty:207>';
              block494.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 201
                var string495 = new GraceString("");
                var call497 = callmethod(var_ev,"keyCode", [0]);
                var string499 = new GraceString("KEYDOWN: ");
                var opresult501 = callmethod(string499, "++", [1], call497);
                var opresult503 = callmethod(opresult501, "++", [1], string495);
                var call504 = Grace_print(opresult503);
                lineNumber = 205
                var if505 = var_done;
                lineNumber = 202
                var call507 = callmethod(var_ev,"keyCode", [0]);
                var opresult509 = callmethod(call507, "==", [1], new GraceNum(81));
                if (Grace_isTrue(opresult509)) {
                  lineNumber = 203
                  onSelf = true;
                  var call510 = callmethod(this, "stop", [0]);
                  if505 = call510;
                }
                lineNumber = 206
                lineNumber = 202
                lineNumber = 205
                var call511 = callmethod(var_ev,"keyCode", [0]);
                onSelf = true;
                var call512 = callmethod(this, "currentKeyDown:=", [1], call511);
                return call512;
              };
              var_keyDownListener = block494;
              lineNumber = 207
              var string513 = new GraceString("keydown");
              onSelf = true;
              var call514 = callmethod(this, "document", [0]);
              var call515 = callmethod(call514,"addEventListener", [2], string513, var_keyDownListener);
              lineNumber = 213
              var block516 = Grace_allocObject();
              block516.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block516.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block516.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block516.methods["match"] = GraceBlock_match;
              block516.methods["prefix?"] = GraceBlock_lift;
              block516.receiver = this;
              block516.className = 'block<kitty:213>';
              block516.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 210
                var string517 = new GraceString("KEYUP");
                var call518 = Grace_print(string517);
                lineNumber = 212
                lineNumber = 205
                lineNumber = 212
                lineNumber = 211
                var call519 = callmethod(new GraceNum(1),"prefix-", [0]);
                onSelf = true;
                var call520 = callmethod(this, "currentKeyDown:=", [1], call519);
                return call520;
              };
              var_keyUpListener = block516;
              lineNumber = 213
              var string521 = new GraceString("keyup");
              onSelf = true;
              var call522 = callmethod(this, "document", [0]);
              var call523 = callmethod(call522,"addEventListener", [2], string521, var_keyUpListener);
              lineNumber = 215
              lineNumber = 205
              lineNumber = 215
              var string524 = new GraceString("canvas");
              var call525 = callmethod(var_dom,"document", [0]);
              var call526 = callmethod(call525,"createElement", [1], string524);
              onSelf = true;
              var call527 = callmethod(this, "backingCanvas:=", [1], call526);
              lineNumber = 217
              lineNumber = 215
              lineNumber = 216
              onSelf = true;
              var call528 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call529 = callmethod(this, "backingCanvas", [0]);
              var call530 = callmethod(call529,"height:=", [1], call528);
              lineNumber = 218
              lineNumber = 215
              lineNumber = 217
              onSelf = true;
              var call531 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call532 = callmethod(this, "backingCanvas", [0]);
              var call533 = callmethod(call532,"width:=", [1], call531);
              lineNumber = 218
              lineNumber = 215
              lineNumber = 218
              var string534 = new GraceString("2d");
              onSelf = true;
              var call535 = callmethod(this, "backingCanvas", [0]);
              var call536 = callmethod(call535,"getContext", [1], string534);
              onSelf = true;
              var call537 = callmethod(this, "backingContext:=", [1], call536);
              lineNumber = 219
              lineNumber = 215
              lineNumber = 219
              var string538 = new GraceString("2d");
              onSelf = true;
              var call539 = callmethod(this, "canvas", [0]);
              var call540 = callmethod(call539,"getContext", [1], string538);
              onSelf = true;
              var call541 = callmethod(this, "mctx:=", [1], call540);
              lineNumber = 222
              lineNumber = 215
              lineNumber = 221
              var bool542 = new GraceBoolean(true)
              onSelf = true;
              var call543 = callmethod(this, "isInit:=", [1], bool542);
              lineNumber = 222
              var string544 = new GraceString("INITIALIZATION FINISHED");
              var call545 = Grace_print(string544);
              return call545
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func424.paramCounts = [
            0,
          ];
          func424.variableArities = [
            false,
          ];
          obj422.methods["init"] = func424;
          func424.definitionLine = 171;
          func424.definitionModule = "kitty";
          var func546 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func546.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 231
              var string547 = new GraceString("WORLD STARTED");
              var call548 = Grace_print(string547);
              lineNumber = 233
              lineNumber = 215
              lineNumber = 232
              var bool549 = new GraceBoolean(true)
              onSelf = true;
              var call550 = callmethod(this, "isRunning:=", [1], bool549);
              lineNumber = 233
              var block551 = Grace_allocObject();
              block551.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block551.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block551.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block551.methods["match"] = GraceBlock_match;
              block551.methods["prefix?"] = GraceBlock_lift;
              block551.receiver = this;
              block551.className = 'block<kitty:233>';
              block551.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call552 = callmethod(this, "isRunning", [0]);
                return call552;
              };
              lineNumber = 236
              var block553 = Grace_allocObject();
              block553.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block553.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block553.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block553.methods["match"] = GraceBlock_match;
              block553.methods["prefix?"] = GraceBlock_lift;
              block553.receiver = this;
              block553.className = 'block<kitty:236>';
              block553.real = function(
              ) {
                sourceObject = this;
                lineNumber = 234
                onSelf = true;
                var call554 = callmethod(this, "update", [0]);
                return call554;
              };
              lineNumber = 233
              var call555 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block551, new GraceNum(10), block553);
              lineNumber = 236
              var string556 = new GraceString("WORLD STOPPED");
              var call557 = Grace_print(string556);
              return call557
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func546.paramCounts = [
            0,
          ];
          func546.variableArities = [
            false,
          ];
          obj422.methods["start"] = func546;
          func546.definitionLine = 230;
          func546.definitionModule = "kitty";
          var func558 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func558.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 242
              var string559 = new GraceString("UPDATING WORLD...");
              var call560 = Grace_print(string559);
              lineNumber = 246
              lineNumber = 215
              lineNumber = 245
              onSelf = true;
              var call561 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call562 = callmethod(this, "mctx", [0]);
              var call563 = callmethod(call562,"fillStyle:=", [1], call561);
              lineNumber = 246
              onSelf = true;
              var call564 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call565 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call566 = callmethod(this, "mctx", [0]);
              var call567 = callmethod(call566,"fillRect", [4], new GraceNum(0), new GraceNum(0), call564, call565);
              lineNumber = 247
              onSelf = true;
              var call568 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call569 = callmethod(this, "mctx", [0]);
              var call570 = callmethod(call569,"drawImage", [3], call568, new GraceNum(0), new GraceNum(0));
              lineNumber = 248
              onSelf = true;
              var call571 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call573 = callmethod(this, "canvasWidth", [0]);
              var quotient575 = callmethod(call573, "/", [1], new GraceNum(2));
              onSelf = true;
              var call577 = callmethod(this, "canvasHeight", [0]);
              var quotient579 = callmethod(call577, "/", [1], new GraceNum(2));
              onSelf = true;
              var call580 = callmethod(this, "background", [0]);
              var call581 = callmethod(call580,"draw", [4], call571, quotient575, quotient579, new GraceNum(0));
              lineNumber = 251
              onSelf = true;
              var call582 = callmethod(this, "entities", [0]);
              lineNumber = 256
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
              block583.className = 'block<kitty:256>';
              block583.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 252
                var call584 = callmethod(var_entity,"update", [0]);
                lineNumber = 253
                onSelf = true;
                var call585 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call587 = callmethod(this, "canvasWidth", [0]);
                var quotient589 = callmethod(call587, "/", [1], new GraceNum(2));
                onSelf = true;
                var call591 = callmethod(this, "canvasHeight", [0]);
                var quotient593 = callmethod(call591, "/", [1], new GraceNum(2));
                var call594 = callmethod(var_entity,"draw", [3], call585, quotient589, quotient593);
                return call594;
              };
              var call595 = callmethod(Grace_prelude,"for()do", [1, 1], call582, block583);
              lineNumber = 256
              var string596 = new GraceString("WORLD UPDATED");
              var call597 = Grace_print(string596);
              return call597
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func558.paramCounts = [
            0,
          ];
          func558.variableArities = [
            false,
          ];
          obj422.methods["update"] = func558;
          func558.definitionLine = 240;
          func558.definitionModule = "kitty";
          var func598 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func598.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 260
              var string599 = new GraceString("WORLD STOPPING...");
              var call600 = Grace_print(string599);
              lineNumber = 262
              lineNumber = 252
              lineNumber = 261
              var bool601 = new GraceBoolean(false)
              onSelf = true;
              var call602 = callmethod(this, "isRunning:=", [1], bool601);
              lineNumber = 262
              var string603 = new GraceString("mousedown");
              onSelf = true;
              var call604 = callmethod(this, "canvas", [0]);
              var call605 = callmethod(call604,"removeEventListener", [2], string603, var_mouseDownListener);
              lineNumber = 263
              var string606 = new GraceString("keydown");
              onSelf = true;
              var call607 = callmethod(this, "document", [0]);
              var call608 = callmethod(call607,"removeEventListener", [2], string606, var_keyDownListener);
              lineNumber = 264
              var string609 = new GraceString("keyup");
              onSelf = true;
              var call610 = callmethod(this, "document", [0]);
              var call611 = callmethod(call610,"removeEventListener", [2], string609, var_keyUpListener);
              return call611
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func598.paramCounts = [
            0,
          ];
          func598.variableArities = [
            false,
          ];
          obj422.methods["stop"] = func598;
          func598.definitionLine = 259;
          func598.definitionModule = "kitty";
          var func612 = function(argcv) {
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func612.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isKeyDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 269
              lineNumber = 268
              onSelf = true;
              var call613 = callmethod(this, "currentKeyDown", [0]);
              var opresult616 = callmethod(var_key, "==", [1], call613);
              return opresult616
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func612.paramCounts = [
            1,
          ];
          func612.variableArities = [
            false,
          ];
          obj422.methods["isKeyDown"] = func612;
          func612.definitionLine = 267;
          func612.definitionModule = "kitty";
          var func617 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func617.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 272
              lineNumber = 252
              lineNumber = 272
              onSelf = true;
              var call618 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call619 = callmethod(this, "canvasHeight", [0]);
              var call620 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call621 = callmethod(call620, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call622 = callmethod(call621, "Image", [3], var_background__39__, call618, call619);
              onSelf = true;
              var call623 = callmethod(this, "background:=", [1], call622);
              return call623
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func617.paramCounts = [
            1,
          ];
          func617.variableArities = [
            false,
          ];
          obj422.methods["setBackground"] = func617;
          func617.definitionLine = 271;
          func617.definitionModule = "kitty";
          var func624 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func624.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 276
              onSelf = true;
              var call625 = callmethod(this, "entities", [0]);
              var call626 = callmethod(call625,"push", [1], var_e);
              return call626
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func624.paramTypes = [];
          func624.paramTypes.push([]);
          func624.paramCounts = [
            1,
          ];
          func624.variableArities = [
            false,
          ];
          obj422.methods["addEntity"] = func624;
          func624.definitionLine = 275;
          func624.definitionModule = "kitty";
          sourceObject = obj422;
          lineNumber = 145
          var string627 = new GraceString("CREATING NEW WORLD...");
          var call628 = Grace_print(string627);
          sourceObject = obj422;
          obj422.data["background"] = undefined;
          var reader_kitty_background_629 = function() {
            return this.data["background"];
          }
          obj422.methods["background"] = reader_kitty_background_629;
          obj422.data["background"] = undefined;
          var writer_kitty_background_629 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj422.methods["background:="] = writer_kitty_background_629;
          reader_kitty_background_629.confidential = true;
          writer_kitty_background_629.confidential = true;
          obj422.mutable = true;
          sourceObject = obj422;
          lineNumber = 148
          var string630 = new GraceString("black");
          obj422.data["backgroundColour"] = string630;
          var reader_kitty_backgroundColour_631 = function() {
            return this.data["backgroundColour"];
          }
          obj422.methods["backgroundColour"] = reader_kitty_backgroundColour_631;
          obj422.data["backgroundColour"] = string630;
          var writer_kitty_backgroundColour_631 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj422.methods["backgroundColour:="] = writer_kitty_backgroundColour_631;
          reader_kitty_backgroundColour_631.confidential = true;
          writer_kitty_backgroundColour_631.confidential = true;
          lineNumber = 150;
          moduleName = "kitty";
          lineNumber = 148
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string630)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj422.mutable = true;
          sourceObject = obj422;
          obj422.data["document"] = undefined;
          var reader_kitty_document_632 = function() {
            return this.data["document"];
          }
          obj422.methods["document"] = reader_kitty_document_632;
          obj422.data["document"] = undefined;
          var writer_kitty_document_632 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj422.methods["document:="] = writer_kitty_document_632;
          reader_kitty_document_632.confidential = true;
          writer_kitty_document_632.confidential = true;
          obj422.mutable = true;
          sourceObject = obj422;
          obj422.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_633 = function() {
            return this.data["backingCanvas"];
          }
          obj422.methods["backingCanvas"] = reader_kitty_backingCanvas_633;
          obj422.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_633 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj422.methods["backingCanvas:="] = writer_kitty_backingCanvas_633;
          reader_kitty_backingCanvas_633.confidential = true;
          writer_kitty_backingCanvas_633.confidential = true;
          obj422.mutable = true;
          sourceObject = obj422;
          obj422.data["backingContext"] = undefined;
          var reader_kitty_backingContext_634 = function() {
            return this.data["backingContext"];
          }
          obj422.methods["backingContext"] = reader_kitty_backingContext_634;
          obj422.data["backingContext"] = undefined;
          var writer_kitty_backingContext_634 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj422.methods["backingContext:="] = writer_kitty_backingContext_634;
          reader_kitty_backingContext_634.confidential = true;
          writer_kitty_backingContext_634.confidential = true;
          obj422.mutable = true;
          sourceObject = obj422;
          obj422.data["canvas"] = undefined;
          var reader_kitty_canvas_635 = function() {
            return this.data["canvas"];
          }
          obj422.methods["canvas"] = reader_kitty_canvas_635;
          obj422.data["canvas"] = undefined;
          var writer_kitty_canvas_635 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj422.methods["canvas:="] = writer_kitty_canvas_635;
          reader_kitty_canvas_635.confidential = true;
          writer_kitty_canvas_635.confidential = true;
          obj422.mutable = true;
          sourceObject = obj422;
          obj422.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_636 = function() {
            return this.data["canvasWidth"];
          }
          obj422.methods["canvasWidth"] = reader_kitty_canvasWidth_636;
          obj422.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_636 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj422.methods["canvasWidth:="] = writer_kitty_canvasWidth_636;
          reader_kitty_canvasWidth_636.confidential = true;
          writer_kitty_canvasWidth_636.confidential = true;
          obj422.mutable = true;
          sourceObject = obj422;
          obj422.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_637 = function() {
            return this.data["canvasHeight"];
          }
          obj422.methods["canvasHeight"] = reader_kitty_canvasHeight_637;
          obj422.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_637 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj422.methods["canvasHeight:="] = writer_kitty_canvasHeight_637;
          reader_kitty_canvasHeight_637.confidential = true;
          writer_kitty_canvasHeight_637.confidential = true;
          obj422.mutable = true;
          sourceObject = obj422;
          lineNumber = 159
          var call638 = callmethod(var_collections,"list", [0]);
          var call639 = callmethod(call638,"new", [0]);
          obj422.data["entities"] = call639;
          var reader_kitty_entities_640 = function() {
            return this.data["entities"];
          }
          obj422.methods["entities"] = reader_kitty_entities_640;
          obj422.data["entities"] = call639;
          var writer_kitty_entities_640 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj422.methods["entities:="] = writer_kitty_entities_640;
          reader_kitty_entities_640.confidential = true;
          writer_kitty_entities_640.confidential = true;
          lineNumber = 161;
          moduleName = "kitty";
          lineNumber = 159
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call639)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj422.mutable = true;
          sourceObject = obj422;
          lineNumber = 161
          var bool641 = new GraceBoolean(false)
          obj422.data["isInit"] = bool641;
          var reader_kitty_isInit_642 = function() {
            return this.data["isInit"];
          }
          obj422.methods["isInit"] = reader_kitty_isInit_642;
          obj422.data["isInit"] = bool641;
          var writer_kitty_isInit_642 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj422.methods["isInit:="] = writer_kitty_isInit_642;
          reader_kitty_isInit_642.confidential = true;
          writer_kitty_isInit_642.confidential = true;
          lineNumber = 162;
          moduleName = "kitty";
          lineNumber = 161
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool641)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj422.mutable = true;
          sourceObject = obj422;
          lineNumber = 162
          var bool643 = new GraceBoolean(false)
          obj422.data["isRunning"] = bool643;
          var reader_kitty_isRunning_644 = function() {
            return this.data["isRunning"];
          }
          obj422.methods["isRunning"] = reader_kitty_isRunning_644;
          obj422.data["isRunning"] = bool643;
          var writer_kitty_isRunning_644 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj422.methods["isRunning:="] = writer_kitty_isRunning_644;
          reader_kitty_isRunning_644.confidential = true;
          writer_kitty_isRunning_644.confidential = true;
          lineNumber = 164;
          moduleName = "kitty";
          lineNumber = 162
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool643)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj422.mutable = true;
          sourceObject = obj422;
          obj422.data["mctx"] = undefined;
          var reader_kitty_mctx_645 = function() {
            return this.data["mctx"];
          }
          obj422.methods["mctx"] = reader_kitty_mctx_645;
          obj422.data["mctx"] = undefined;
          var writer_kitty_mctx_645 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj422.methods["mctx:="] = writer_kitty_mctx_645;
          reader_kitty_mctx_645.confidential = true;
          writer_kitty_mctx_645.confidential = true;
          obj422.mutable = true;
          sourceObject = obj422;
          lineNumber = 168
          lineNumber = 166
          var call646 = callmethod(new GraceNum(1),"prefix-", [0]);
          obj422.data["currentKeyDown"] = call646;
          var reader_kitty_currentKeyDown_647 = function() {
            return this.data["currentKeyDown"];
          }
          obj422.methods["currentKeyDown"] = reader_kitty_currentKeyDown_647;
          obj422.data["currentKeyDown"] = call646;
          var writer_kitty_currentKeyDown_647 = function(argcv, o) {
            this.data["currentKeyDown"] = o;
          }
          obj422.methods["currentKeyDown:="] = writer_kitty_currentKeyDown_647;
          reader_kitty_currentKeyDown_647.confidential = true;
          writer_kitty_currentKeyDown_647.confidential = true;
          lineNumber = 168;
          moduleName = "kitty";
          lineNumber = 166
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call646)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'currentKeyDown' to be of type Unknown"))
          obj422.mutable = true;
          sourceObject = obj422;
          lineNumber = 168
          onSelf = true;
          var call648 = callmethod(this, "init", [0]);
          sourceObject = obj422;
          sourceObject = obj422;
          sourceObject = obj422;
          sourceObject = obj422;
          sourceObject = obj422;
          sourceObject = obj422;
          sourceObject = obj422;
          sourceObject = obj422;
          lineNumber = 279
          var string649 = new GraceString("WORLD CREATED");
          var call650 = Grace_print(string649);
          superDepth = origSuperDepth;
        }
        obj_init_422.apply(obj422, []);
        return obj422
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func421.paramCounts = [
      0,
    ];
    func421.variableArities = [
      false,
    ];
    obj419.methods["new"] = func421;
    func421.definitionLine = 143;
    func421.definitionModule = "kitty";
    var func651 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj652 = Grace_allocObject();
        obj652.definitionModule = "kitty";
        obj652.definitionLine = 143;
        var inho652 = inheritingObject;
        while (inho652.superobj) inho652 = inho652.superobj;
        inho652.superobj = obj652;
        obj652.data = inheritingObject.data;
        obj652.outer = this;
        var reader_kitty_outer_653 = function() {
          return this.outer;
        }
        obj652.methods["outer"] = reader_kitty_outer_653;
        function obj_init_652() {
          var origSuperDepth = superDepth;
          superDepth = obj652;
          obj652.annotations = [];
          var func654 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func654.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 173
              var string655 = new GraceString("INITIALIZING WORLD...");
              var call656 = Grace_print(string655);
              lineNumber = 179
              var if657 = var_done;
              lineNumber = 175
              onSelf = true;
              var call658 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call658)) {
                lineNumber = 177
                lineNumber = 176
                var bool659 = new GraceBoolean(false)
                return bool659
              }
              lineNumber = 180
              lineNumber = 159
              lineNumber = 179
              var call660 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call661 = callmethod(this, "document:=", [1], call660);
              lineNumber = 180
              lineNumber = 179
              lineNumber = 180
              var string662 = new GraceString("standard-canvas");
              onSelf = true;
              var call663 = callmethod(this, "document", [0]);
              var call664 = callmethod(call663,"getElementById", [1], string662);
              onSelf = true;
              var call665 = callmethod(this, "canvas:=", [1], call664);
              lineNumber = 182
              lineNumber = 179
              lineNumber = 181
              onSelf = true;
              var call666 = callmethod(this, "canvas", [0]);
              var call667 = callmethod(call666,"width", [0]);
              onSelf = true;
              var call668 = callmethod(this, "canvasWidth:=", [1], call667);
              lineNumber = 185
              lineNumber = 181
              lineNumber = 182
              onSelf = true;
              var call669 = callmethod(this, "canvas", [0]);
              var call670 = callmethod(call669,"height", [0]);
              onSelf = true;
              var call671 = callmethod(this, "canvasHeight:=", [1], call670);
              lineNumber = 197
              var block672 = Grace_allocObject();
              block672.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block672.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block672.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block672.methods["match"] = GraceBlock_match;
              block672.methods["prefix?"] = GraceBlock_lift;
              block672.receiver = this;
              block672.className = 'block<kitty:197>';
              block672.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 188
                lineNumber = 187
                onSelf = true;
                var call673 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call675 = callmethod(this, "canvas", [0]);
                var call676 = callmethod(call675,"offsetWidth", [0]);
                onSelf = true;
                var call678 = callmethod(this, "canvas", [0]);
                var call679 = callmethod(call678,"offsetLeft", [0]);
                var call681 = callmethod(var_ev,"clientX", [0]);
                var diff683 = callmethod(call681, "-", [1], call679);
                var quotient685 = callmethod(diff683, "/", [1], call676);
                var prod687 = callmethod(quotient685, "*", [1], call673);
                var var_x = prod687;
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
                var call688 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call690 = callmethod(this, "canvas", [0]);
                var call691 = callmethod(call690,"offsetHeight", [0]);
                onSelf = true;
                var call693 = callmethod(this, "canvas", [0]);
                var call694 = callmethod(call693,"offsetTop", [0]);
                var call696 = callmethod(var_ev,"clientY", [0]);
                var diff698 = callmethod(call696, "-", [1], call694);
                var quotient700 = callmethod(diff698, "/", [1], call691);
                var prod702 = callmethod(quotient700, "*", [1], call688);
                var var_y = prod702;
                lineNumber = 190;
                moduleName = "kitty";
                lineNumber = 188
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 190
                var string703 = new GraceString("MOUSEDOWN");
                var call704 = Grace_print(string703);
                lineNumber = 196
                var if705 = var_done;
                lineNumber = 192
                var opresult708 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call711 = callmethod(this, "canvasWidth", [0]);
                var diff713 = callmethod(call711, "-", [1], new GraceNum(20));
                var opresult716 = callmethod(var_x, ">", [1], diff713);
                var opresult718 = callmethod(opresult716, "&&", [1], opresult708);
                if (Grace_isTrue(opresult718)) {
                  lineNumber = 193
                  var call719 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 194
                  onSelf = true;
                  var call720 = callmethod(this, "stop", [0]);
                  if705 = call720;
                }
                return if705;
              };
              var_mouseDownListener = block672;
              lineNumber = 197
              var string721 = new GraceString("mousedown");
              onSelf = true;
              var call722 = callmethod(this, "canvas", [0]);
              var call723 = callmethod(call722,"addEventListener", [2], string721, var_mouseDownListener);
              lineNumber = 207
              var block724 = Grace_allocObject();
              block724.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block724.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block724.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block724.methods["match"] = GraceBlock_match;
              block724.methods["prefix?"] = GraceBlock_lift;
              block724.receiver = this;
              block724.className = 'block<kitty:207>';
              block724.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 201
                var string725 = new GraceString("");
                var call727 = callmethod(var_ev,"keyCode", [0]);
                var string729 = new GraceString("KEYDOWN: ");
                var opresult731 = callmethod(string729, "++", [1], call727);
                var opresult733 = callmethod(opresult731, "++", [1], string725);
                var call734 = Grace_print(opresult733);
                lineNumber = 205
                var if735 = var_done;
                lineNumber = 202
                var call737 = callmethod(var_ev,"keyCode", [0]);
                var opresult739 = callmethod(call737, "==", [1], new GraceNum(81));
                if (Grace_isTrue(opresult739)) {
                  lineNumber = 203
                  onSelf = true;
                  var call740 = callmethod(this, "stop", [0]);
                  if735 = call740;
                }
                lineNumber = 206
                lineNumber = 202
                lineNumber = 205
                var call741 = callmethod(var_ev,"keyCode", [0]);
                onSelf = true;
                var call742 = callmethod(this, "currentKeyDown:=", [1], call741);
                return call742;
              };
              var_keyDownListener = block724;
              lineNumber = 207
              var string743 = new GraceString("keydown");
              onSelf = true;
              var call744 = callmethod(this, "document", [0]);
              var call745 = callmethod(call744,"addEventListener", [2], string743, var_keyDownListener);
              lineNumber = 213
              var block746 = Grace_allocObject();
              block746.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block746.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block746.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block746.methods["match"] = GraceBlock_match;
              block746.methods["prefix?"] = GraceBlock_lift;
              block746.receiver = this;
              block746.className = 'block<kitty:213>';
              block746.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 210
                var string747 = new GraceString("KEYUP");
                var call748 = Grace_print(string747);
                lineNumber = 212
                lineNumber = 205
                lineNumber = 212
                lineNumber = 211
                var call749 = callmethod(new GraceNum(1),"prefix-", [0]);
                onSelf = true;
                var call750 = callmethod(this, "currentKeyDown:=", [1], call749);
                return call750;
              };
              var_keyUpListener = block746;
              lineNumber = 213
              var string751 = new GraceString("keyup");
              onSelf = true;
              var call752 = callmethod(this, "document", [0]);
              var call753 = callmethod(call752,"addEventListener", [2], string751, var_keyUpListener);
              lineNumber = 215
              lineNumber = 205
              lineNumber = 215
              var string754 = new GraceString("canvas");
              var call755 = callmethod(var_dom,"document", [0]);
              var call756 = callmethod(call755,"createElement", [1], string754);
              onSelf = true;
              var call757 = callmethod(this, "backingCanvas:=", [1], call756);
              lineNumber = 217
              lineNumber = 215
              lineNumber = 216
              onSelf = true;
              var call758 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call759 = callmethod(this, "backingCanvas", [0]);
              var call760 = callmethod(call759,"height:=", [1], call758);
              lineNumber = 218
              lineNumber = 215
              lineNumber = 217
              onSelf = true;
              var call761 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call762 = callmethod(this, "backingCanvas", [0]);
              var call763 = callmethod(call762,"width:=", [1], call761);
              lineNumber = 218
              lineNumber = 215
              lineNumber = 218
              var string764 = new GraceString("2d");
              onSelf = true;
              var call765 = callmethod(this, "backingCanvas", [0]);
              var call766 = callmethod(call765,"getContext", [1], string764);
              onSelf = true;
              var call767 = callmethod(this, "backingContext:=", [1], call766);
              lineNumber = 219
              lineNumber = 215
              lineNumber = 219
              var string768 = new GraceString("2d");
              onSelf = true;
              var call769 = callmethod(this, "canvas", [0]);
              var call770 = callmethod(call769,"getContext", [1], string768);
              onSelf = true;
              var call771 = callmethod(this, "mctx:=", [1], call770);
              lineNumber = 222
              lineNumber = 215
              lineNumber = 221
              var bool772 = new GraceBoolean(true)
              onSelf = true;
              var call773 = callmethod(this, "isInit:=", [1], bool772);
              lineNumber = 222
              var string774 = new GraceString("INITIALIZATION FINISHED");
              var call775 = Grace_print(string774);
              return call775
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func654.paramCounts = [
            0,
          ];
          func654.variableArities = [
            false,
          ];
          obj652.methods["init"] = func654;
          func654.definitionLine = 171;
          func654.definitionModule = "kitty";
          var func776 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func776.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 231
              var string777 = new GraceString("WORLD STARTED");
              var call778 = Grace_print(string777);
              lineNumber = 233
              lineNumber = 215
              lineNumber = 232
              var bool779 = new GraceBoolean(true)
              onSelf = true;
              var call780 = callmethod(this, "isRunning:=", [1], bool779);
              lineNumber = 233
              var block781 = Grace_allocObject();
              block781.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block781.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block781.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block781.methods["match"] = GraceBlock_match;
              block781.methods["prefix?"] = GraceBlock_lift;
              block781.receiver = this;
              block781.className = 'block<kitty:233>';
              block781.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call782 = callmethod(this, "isRunning", [0]);
                return call782;
              };
              lineNumber = 236
              var block783 = Grace_allocObject();
              block783.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block783.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block783.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block783.methods["match"] = GraceBlock_match;
              block783.methods["prefix?"] = GraceBlock_lift;
              block783.receiver = this;
              block783.className = 'block<kitty:236>';
              block783.real = function(
              ) {
                sourceObject = this;
                lineNumber = 234
                onSelf = true;
                var call784 = callmethod(this, "update", [0]);
                return call784;
              };
              lineNumber = 233
              var call785 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block781, new GraceNum(10), block783);
              lineNumber = 236
              var string786 = new GraceString("WORLD STOPPED");
              var call787 = Grace_print(string786);
              return call787
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func776.paramCounts = [
            0,
          ];
          func776.variableArities = [
            false,
          ];
          obj652.methods["start"] = func776;
          func776.definitionLine = 230;
          func776.definitionModule = "kitty";
          var func788 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func788.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 242
              var string789 = new GraceString("UPDATING WORLD...");
              var call790 = Grace_print(string789);
              lineNumber = 246
              lineNumber = 215
              lineNumber = 245
              onSelf = true;
              var call791 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call792 = callmethod(this, "mctx", [0]);
              var call793 = callmethod(call792,"fillStyle:=", [1], call791);
              lineNumber = 246
              onSelf = true;
              var call794 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call795 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call796 = callmethod(this, "mctx", [0]);
              var call797 = callmethod(call796,"fillRect", [4], new GraceNum(0), new GraceNum(0), call794, call795);
              lineNumber = 247
              onSelf = true;
              var call798 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call799 = callmethod(this, "mctx", [0]);
              var call800 = callmethod(call799,"drawImage", [3], call798, new GraceNum(0), new GraceNum(0));
              lineNumber = 248
              onSelf = true;
              var call801 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call803 = callmethod(this, "canvasWidth", [0]);
              var quotient805 = callmethod(call803, "/", [1], new GraceNum(2));
              onSelf = true;
              var call807 = callmethod(this, "canvasHeight", [0]);
              var quotient809 = callmethod(call807, "/", [1], new GraceNum(2));
              onSelf = true;
              var call810 = callmethod(this, "background", [0]);
              var call811 = callmethod(call810,"draw", [4], call801, quotient805, quotient809, new GraceNum(0));
              lineNumber = 251
              onSelf = true;
              var call812 = callmethod(this, "entities", [0]);
              lineNumber = 256
              var block813 = Grace_allocObject();
              block813.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block813.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block813.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block813.methods["match"] = GraceBlock_match;
              block813.methods["prefix?"] = GraceBlock_lift;
              block813.receiver = this;
              block813.className = 'block<kitty:256>';
              block813.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 252
                var call814 = callmethod(var_entity,"update", [0]);
                lineNumber = 253
                onSelf = true;
                var call815 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call817 = callmethod(this, "canvasWidth", [0]);
                var quotient819 = callmethod(call817, "/", [1], new GraceNum(2));
                onSelf = true;
                var call821 = callmethod(this, "canvasHeight", [0]);
                var quotient823 = callmethod(call821, "/", [1], new GraceNum(2));
                var call824 = callmethod(var_entity,"draw", [3], call815, quotient819, quotient823);
                return call824;
              };
              var call825 = callmethod(Grace_prelude,"for()do", [1, 1], call812, block813);
              lineNumber = 256
              var string826 = new GraceString("WORLD UPDATED");
              var call827 = Grace_print(string826);
              return call827
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func788.paramCounts = [
            0,
          ];
          func788.variableArities = [
            false,
          ];
          obj652.methods["update"] = func788;
          func788.definitionLine = 240;
          func788.definitionModule = "kitty";
          var func828 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func828.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 260
              var string829 = new GraceString("WORLD STOPPING...");
              var call830 = Grace_print(string829);
              lineNumber = 262
              lineNumber = 252
              lineNumber = 261
              var bool831 = new GraceBoolean(false)
              onSelf = true;
              var call832 = callmethod(this, "isRunning:=", [1], bool831);
              lineNumber = 262
              var string833 = new GraceString("mousedown");
              onSelf = true;
              var call834 = callmethod(this, "canvas", [0]);
              var call835 = callmethod(call834,"removeEventListener", [2], string833, var_mouseDownListener);
              lineNumber = 263
              var string836 = new GraceString("keydown");
              onSelf = true;
              var call837 = callmethod(this, "document", [0]);
              var call838 = callmethod(call837,"removeEventListener", [2], string836, var_keyDownListener);
              lineNumber = 264
              var string839 = new GraceString("keyup");
              onSelf = true;
              var call840 = callmethod(this, "document", [0]);
              var call841 = callmethod(call840,"removeEventListener", [2], string839, var_keyUpListener);
              return call841
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func828.paramCounts = [
            0,
          ];
          func828.variableArities = [
            false,
          ];
          obj652.methods["stop"] = func828;
          func828.definitionLine = 259;
          func828.definitionModule = "kitty";
          var func842 = function(argcv) {
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func842.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isKeyDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 269
              lineNumber = 268
              onSelf = true;
              var call843 = callmethod(this, "currentKeyDown", [0]);
              var opresult846 = callmethod(var_key, "==", [1], call843);
              return opresult846
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func842.paramCounts = [
            1,
          ];
          func842.variableArities = [
            false,
          ];
          obj652.methods["isKeyDown"] = func842;
          func842.definitionLine = 267;
          func842.definitionModule = "kitty";
          var func847 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func847.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 272
              lineNumber = 252
              lineNumber = 272
              onSelf = true;
              var call848 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call849 = callmethod(this, "canvasHeight", [0]);
              var call850 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call851 = callmethod(call850, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call852 = callmethod(call851, "Image", [3], var_background__39__, call848, call849);
              onSelf = true;
              var call853 = callmethod(this, "background:=", [1], call852);
              return call853
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func847.paramCounts = [
            1,
          ];
          func847.variableArities = [
            false,
          ];
          obj652.methods["setBackground"] = func847;
          func847.definitionLine = 271;
          func847.definitionModule = "kitty";
          var func854 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func854.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 276
              onSelf = true;
              var call855 = callmethod(this, "entities", [0]);
              var call856 = callmethod(call855,"push", [1], var_e);
              return call856
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func854.paramTypes = [];
          func854.paramTypes.push([]);
          func854.paramCounts = [
            1,
          ];
          func854.variableArities = [
            false,
          ];
          obj652.methods["addEntity"] = func854;
          func854.definitionLine = 275;
          func854.definitionModule = "kitty";
          sourceObject = obj652;
          lineNumber = 145
          var string857 = new GraceString("CREATING NEW WORLD...");
          var call858 = Grace_print(string857);
          sourceObject = obj652;
          obj652.data["background"] = undefined;
          var reader_kitty_background_859 = function() {
            return this.data["background"];
          }
          obj652.methods["background"] = reader_kitty_background_859;
          obj652.data["background"] = undefined;
          var writer_kitty_background_859 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj652.methods["background:="] = writer_kitty_background_859;
          reader_kitty_background_859.confidential = true;
          writer_kitty_background_859.confidential = true;
          obj652.mutable = true;
          sourceObject = obj652;
          lineNumber = 148
          var string860 = new GraceString("black");
          obj652.data["backgroundColour"] = string860;
          var reader_kitty_backgroundColour_861 = function() {
            return this.data["backgroundColour"];
          }
          obj652.methods["backgroundColour"] = reader_kitty_backgroundColour_861;
          obj652.data["backgroundColour"] = string860;
          var writer_kitty_backgroundColour_861 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj652.methods["backgroundColour:="] = writer_kitty_backgroundColour_861;
          reader_kitty_backgroundColour_861.confidential = true;
          writer_kitty_backgroundColour_861.confidential = true;
          lineNumber = 150;
          moduleName = "kitty";
          lineNumber = 148
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string860)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj652.mutable = true;
          sourceObject = obj652;
          obj652.data["document"] = undefined;
          var reader_kitty_document_862 = function() {
            return this.data["document"];
          }
          obj652.methods["document"] = reader_kitty_document_862;
          obj652.data["document"] = undefined;
          var writer_kitty_document_862 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj652.methods["document:="] = writer_kitty_document_862;
          reader_kitty_document_862.confidential = true;
          writer_kitty_document_862.confidential = true;
          obj652.mutable = true;
          sourceObject = obj652;
          obj652.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_863 = function() {
            return this.data["backingCanvas"];
          }
          obj652.methods["backingCanvas"] = reader_kitty_backingCanvas_863;
          obj652.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_863 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj652.methods["backingCanvas:="] = writer_kitty_backingCanvas_863;
          reader_kitty_backingCanvas_863.confidential = true;
          writer_kitty_backingCanvas_863.confidential = true;
          obj652.mutable = true;
          sourceObject = obj652;
          obj652.data["backingContext"] = undefined;
          var reader_kitty_backingContext_864 = function() {
            return this.data["backingContext"];
          }
          obj652.methods["backingContext"] = reader_kitty_backingContext_864;
          obj652.data["backingContext"] = undefined;
          var writer_kitty_backingContext_864 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj652.methods["backingContext:="] = writer_kitty_backingContext_864;
          reader_kitty_backingContext_864.confidential = true;
          writer_kitty_backingContext_864.confidential = true;
          obj652.mutable = true;
          sourceObject = obj652;
          obj652.data["canvas"] = undefined;
          var reader_kitty_canvas_865 = function() {
            return this.data["canvas"];
          }
          obj652.methods["canvas"] = reader_kitty_canvas_865;
          obj652.data["canvas"] = undefined;
          var writer_kitty_canvas_865 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj652.methods["canvas:="] = writer_kitty_canvas_865;
          reader_kitty_canvas_865.confidential = true;
          writer_kitty_canvas_865.confidential = true;
          obj652.mutable = true;
          sourceObject = obj652;
          obj652.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_866 = function() {
            return this.data["canvasWidth"];
          }
          obj652.methods["canvasWidth"] = reader_kitty_canvasWidth_866;
          obj652.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_866 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj652.methods["canvasWidth:="] = writer_kitty_canvasWidth_866;
          reader_kitty_canvasWidth_866.confidential = true;
          writer_kitty_canvasWidth_866.confidential = true;
          obj652.mutable = true;
          sourceObject = obj652;
          obj652.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_867 = function() {
            return this.data["canvasHeight"];
          }
          obj652.methods["canvasHeight"] = reader_kitty_canvasHeight_867;
          obj652.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_867 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj652.methods["canvasHeight:="] = writer_kitty_canvasHeight_867;
          reader_kitty_canvasHeight_867.confidential = true;
          writer_kitty_canvasHeight_867.confidential = true;
          obj652.mutable = true;
          sourceObject = obj652;
          lineNumber = 159
          var call868 = callmethod(var_collections,"list", [0]);
          var call869 = callmethod(call868,"new", [0]);
          obj652.data["entities"] = call869;
          var reader_kitty_entities_870 = function() {
            return this.data["entities"];
          }
          obj652.methods["entities"] = reader_kitty_entities_870;
          obj652.data["entities"] = call869;
          var writer_kitty_entities_870 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj652.methods["entities:="] = writer_kitty_entities_870;
          reader_kitty_entities_870.confidential = true;
          writer_kitty_entities_870.confidential = true;
          lineNumber = 161;
          moduleName = "kitty";
          lineNumber = 159
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call869)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj652.mutable = true;
          sourceObject = obj652;
          lineNumber = 161
          var bool871 = new GraceBoolean(false)
          obj652.data["isInit"] = bool871;
          var reader_kitty_isInit_872 = function() {
            return this.data["isInit"];
          }
          obj652.methods["isInit"] = reader_kitty_isInit_872;
          obj652.data["isInit"] = bool871;
          var writer_kitty_isInit_872 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj652.methods["isInit:="] = writer_kitty_isInit_872;
          reader_kitty_isInit_872.confidential = true;
          writer_kitty_isInit_872.confidential = true;
          lineNumber = 162;
          moduleName = "kitty";
          lineNumber = 161
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool871)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj652.mutable = true;
          sourceObject = obj652;
          lineNumber = 162
          var bool873 = new GraceBoolean(false)
          obj652.data["isRunning"] = bool873;
          var reader_kitty_isRunning_874 = function() {
            return this.data["isRunning"];
          }
          obj652.methods["isRunning"] = reader_kitty_isRunning_874;
          obj652.data["isRunning"] = bool873;
          var writer_kitty_isRunning_874 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj652.methods["isRunning:="] = writer_kitty_isRunning_874;
          reader_kitty_isRunning_874.confidential = true;
          writer_kitty_isRunning_874.confidential = true;
          lineNumber = 164;
          moduleName = "kitty";
          lineNumber = 162
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool873)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj652.mutable = true;
          sourceObject = obj652;
          obj652.data["mctx"] = undefined;
          var reader_kitty_mctx_875 = function() {
            return this.data["mctx"];
          }
          obj652.methods["mctx"] = reader_kitty_mctx_875;
          obj652.data["mctx"] = undefined;
          var writer_kitty_mctx_875 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj652.methods["mctx:="] = writer_kitty_mctx_875;
          reader_kitty_mctx_875.confidential = true;
          writer_kitty_mctx_875.confidential = true;
          obj652.mutable = true;
          sourceObject = obj652;
          lineNumber = 168
          lineNumber = 166
          var call876 = callmethod(new GraceNum(1),"prefix-", [0]);
          obj652.data["currentKeyDown"] = call876;
          var reader_kitty_currentKeyDown_877 = function() {
            return this.data["currentKeyDown"];
          }
          obj652.methods["currentKeyDown"] = reader_kitty_currentKeyDown_877;
          obj652.data["currentKeyDown"] = call876;
          var writer_kitty_currentKeyDown_877 = function(argcv, o) {
            this.data["currentKeyDown"] = o;
          }
          obj652.methods["currentKeyDown:="] = writer_kitty_currentKeyDown_877;
          reader_kitty_currentKeyDown_877.confidential = true;
          writer_kitty_currentKeyDown_877.confidential = true;
          lineNumber = 168;
          moduleName = "kitty";
          lineNumber = 166
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call876)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'currentKeyDown' to be of type Unknown"))
          obj652.mutable = true;
          sourceObject = obj652;
          lineNumber = 168
          onSelf = true;
          var call878 = callmethod(this, "init", [0]);
          sourceObject = obj652;
          sourceObject = obj652;
          sourceObject = obj652;
          sourceObject = obj652;
          sourceObject = obj652;
          sourceObject = obj652;
          sourceObject = obj652;
          sourceObject = obj652;
          lineNumber = 279
          var string879 = new GraceString("WORLD CREATED");
          var call880 = Grace_print(string879);
          superDepth = origSuperDepth;
        }
        obj_init_652.apply(inheritingObject, []);
        return obj652
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj419.methods["new()object"] = func651;
    var func881 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 143
        var string882 = new GraceString("class KittyWorld");
        return string882
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func881.paramCounts = [
    ];
    func881.variableArities = [
    ];
    obj419.methods["asDebugString"] = func881;
    func881.definitionLine = 143;
    func881.definitionModule = "kitty";
    sourceObject = obj419;
    sourceObject = obj419;
    superDepth = origSuperDepth;
  }
  obj_init_419.apply(obj419, []);
  var var_KittyWorld = obj419;
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
  gctCache['kitty'] = "path:\n kitty\nclasses:\n KittyImage\n KittyEntity\n KittyWorld\nfresh:Entity:\n awake\n posX\n posY\n draw\n moveDown\n rotation\n setAction\n moveRight\n setImage\n getRotation\n moveLeft\n update\n setLocation\n start\n action:=\n getX\n getY\n image:=\n moveUp\n action\n posX:=\n posY:=\n image\n onDestroy\n rotation:=\nconfidential:\nconstructors-of:KittyWorld:\n new\nfresh:Image:\n imgTag\n height\n draw\n height:=\n width\n width:=\nconstructors-of:KittyImage:\n new\nmodules:\n StandardPrelude\n mgcollections\nmethods-of:KittyEntity.new:\n awake\n posX\n posY\n draw\n moveDown\n rotation\n setAction\n moveRight\n setImage\n getRotation\n moveLeft\n update\n setLocation\n start\n action:=\n getX\n getY\n image:=\n moveUp\n action\n posX:=\n posY:=\n image\n rotation:=\n onDestroy\nfresh:World:\n isRunning:=\n isInit\n mctx:=\n canvasWidth\n entities\n isKeyDown\n backgroundColour:=\n canvasHeight:=\n start\n init\n canvasHeight\n currentKeyDown:=\n canvas\n isRunning\n background\n entities:=\n stop\n isInit:=\n setBackground\n backingContext\n canvasWidth:=\n document:=\n mctx\n document\n backingCanvas:=\n update\n backingCanvas\n backingContext:=\n canvas:=\n backgroundColour\n background:=\n currentKeyDown\n addEntity\nfresh-methods:\n Image\n Entity\n World\npublic:\n m_world\n m_world:=\n worldSet\n worldSet:=\n keyDownListener\n keyDownListener:=\n keyUpListener\n keyUpListener:=\n mouseDownListener\n mouseDownListener:=\n KittyImage\n Image\n KittyEntity\n Entity\n KittyWorld\n World\n start\n setWorld\n atModuleEnd\nmethods-of:KittyImage.new:\n imgTag\n height\n draw\n height:=\n width\n width:=\nmethods-of:KittyWorld.new:\n init\n isInit\n mctx:=\n canvasWidth\n entities\n isRunning\n backgroundColour:=\n canvasHeight:=\n start\n isRunning:=\n canvasHeight\n currentKeyDown:=\n canvas\n isKeyDown\n background\n entities:=\n stop\n isInit:=\n setBackground\n backgroundColour\n canvasWidth:=\n document:=\n mctx\n document\n backingCanvas:=\n update\n backingCanvas\n backingContext:=\n canvas:=\n backingContext\n background:=\n currentKeyDown\n addEntity\nconstructors-of:KittyEntity:\n new\n";
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
    "    print \"CREATING NEW IMAGE: {url'}...\"",
    "    def imgTag = dom.document.createElement(\"img\")",
    "    imgTag.src := url'",
    "",
    "    var height := height'",
    "    var width := width'",
    "",
    "    method draw(ctx, dx, dy, rot) {",
    "        print \"DRAWING IMAGE: {imgTag.src} ({width}, {height})...\"",
    "        ctx.save",
    "        ctx.translate(dx, dy)",
    "        ctx.rotate(rot *  180 / 3.14)",
    "        ctx.drawImage(imgTag, -width / 2, -height / 2, width, height)",
    "        ctx.restore",
    "        print \"IMAGE: {imgTag.src} DRAWN\"",
    "    }",
    "",
    "    print \"CREATED NEW IMAGE: {url'}\"",
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
    "    print \"CREATING ENTITY AT ({x'}, {y'})...\"",
    "",
    "    var posX := x'",
    "    var posY := y'",
    "    var rotation := 0",
    "",
    "    var action := object {",
    "        method update {",
    "            print \"UPDATING ENTITY...\"",
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
    "    print \"ENTITY CREATED\"",
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
    "    print \"CREATING NEW WORLD...\"",
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
    "        print \"INITIALIZING WORLD...\"",
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
    "            print \"KEYDOWN: {ev.keyCode}\"",
    "            if (ev.keyCode == 81) then {",
    "                stop",
    "            }",
    "            currentKeyDown := ev.keyCode",
    "        }",
    "        document.addEventListener(\"keydown\", keyDownListener)",
    "",
    "        keyUpListener := { ev->",
    "            print \"KEYUP\"",
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
    "        print \"INITIALIZATION FINISHED\"",
    "",
    "        // Start the game",
    "        // print \"STARTING WORLD...\"",
    "        // start",
    "    }",
    "",
    "    // Called on game start",
    "    method start {",
    "        print \"WORLD STARTED\"",
    "        isRunning := true",
    "        dom.while { isRunning } waiting 10 do {",
    "            update",
    "        }",
    "        print \"WORLD STOPPED\"        ",
    "    }",
    "",
    "    // Updates the game world",
    "    method update {",
    "",
    "        print \"UPDATING WORLD...\"",
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
    "        print \"WORLD UPDATED\"",
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
    "    print \"WORLD CREATED\"",
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
