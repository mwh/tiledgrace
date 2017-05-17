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
  lineNumber = 293
  var func24 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func24.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 295
      var string25 = new GraceString("CHECKING...");
      var call26 = Grace_print(string25);
      lineNumber = 302
      var if27 = var_done;
      lineNumber = 297
      var call28 = callmethod(var_worldSet,"prefix!", [0]);
      if (Grace_isTrue(call28)) {
        lineNumber = 298
        var string29 = new GraceString("NO WORLD!!");
        var call30 = Grace_print(string29);
        lineNumber = 300
        return var_done
      }
      lineNumber = 302
      var string31 = new GraceString("STARTING...");
      var call32 = Grace_print(string31);
      lineNumber = 305
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
  func24.definitionLine = 293;
  func24.definitionModule = "kitty";
  lineNumber = 309
  var func34 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func34.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 310
      var string35 = new GraceString("STOPPING...");
      var call36 = Grace_print(string35);
      return call36
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func34.paramCounts = [
    0,
  ];
  func34.variableArities = [
    false,
  ];
  this.methods["stop"] = func34;
  func34.definitionLine = 309;
  func34.definitionModule = "kitty";
  lineNumber = 313
  var func37 = function(argcv) {
    var curarg = 1;
    var var_world__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func37.paramCounts[0])
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
      var bool38 = new GraceBoolean(true)
      var_worldSet = bool38;
      return bool38
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func37.paramTypes = [];
  func37.paramTypes.push([]);
  func37.paramCounts = [
    1,
  ];
  func37.variableArities = [
    false,
  ];
  this.methods["setWorld"] = func37;
  func37.definitionLine = 313;
  func37.definitionModule = "kitty";
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
  var call39 = callmethod(var_sp,"methods()object", [0, 1], this);
  this.superobj = call39;
  this.data = call39.data;
  this._value = call39._value;
  lineNumber = 7
  lineNumber = 8
  var var_m__95__world;
  lineNumber = 305
  var func40 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func40.paramCounts[0])
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
  func40.paramCounts = [
    0,
  ];
  func40.variableArities = [
    false,
  ];
  this.methods["m_world"] = func40;
  func40.definitionLine = 305;
  func40.definitionModule = "kitty";
  lineNumber = 305
  var func41 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func41.paramCounts[0])
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
  func41.paramCounts = [
    1,
  ];
  func41.variableArities = [
    false,
  ];
  this.methods["m_world:="] = func41;
  func41.definitionLine = 305;
  func41.definitionModule = "kitty";
  lineNumber = 11
  lineNumber = 8
  var bool42 = new GraceBoolean(false)
  var var_worldSet = bool42;
  lineNumber = 305
  var func43 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func43.paramCounts[0])
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
  func43.paramCounts = [
    0,
  ];
  func43.variableArities = [
    false,
  ];
  this.methods["worldSet"] = func43;
  func43.definitionLine = 305;
  func43.definitionModule = "kitty";
  lineNumber = 305
  var func44 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func44.paramCounts[0])
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
  func44.paramCounts = [
    1,
  ];
  func44.variableArities = [
    false,
  ];
  this.methods["worldSet:="] = func44;
  func44.definitionLine = 305;
  func44.definitionModule = "kitty";
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
  var var_keyPressListener;
  lineNumber = 305
  var func45 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func45.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (keyPressListener)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 11
      return var_keyPressListener
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func45.paramCounts = [
    0,
  ];
  func45.variableArities = [
    false,
  ];
  this.methods["keyPressListener"] = func45;
  func45.definitionLine = 305;
  func45.definitionModule = "kitty";
  lineNumber = 305
  var func46 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func46.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (keyPressListener:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      var_keyPressListener = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func46.paramCounts = [
    1,
  ];
  func46.variableArities = [
    false,
  ];
  this.methods["keyPressListener:="] = func46;
  func46.definitionLine = 305;
  func46.definitionModule = "kitty";
  lineNumber = 13
  var var_keyUpListener;
  lineNumber = 305
  var func47 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func47.paramCounts[0])
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
  func47.paramCounts = [
    0,
  ];
  func47.variableArities = [
    false,
  ];
  this.methods["keyUpListener"] = func47;
  func47.definitionLine = 305;
  func47.definitionModule = "kitty";
  lineNumber = 305
  var func48 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func48.paramCounts[0])
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
  func48.paramCounts = [
    1,
  ];
  func48.variableArities = [
    false,
  ];
  this.methods["keyUpListener:="] = func48;
  func48.definitionLine = 305;
  func48.definitionModule = "kitty";
  lineNumber = 18
  var var_mouseDownListener;
  lineNumber = 305
  var func49 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func49.paramCounts[0])
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
  func49.paramCounts = [
    0,
  ];
  func49.variableArities = [
    false,
  ];
  this.methods["mouseDownListener"] = func49;
  func49.definitionLine = 305;
  func49.definitionModule = "kitty";
  lineNumber = 305
  var func50 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func50.paramCounts[0])
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
  func50.paramCounts = [
    1,
  ];
  func50.variableArities = [
    false,
  ];
  this.methods["mouseDownListener:="] = func50;
  func50.definitionLine = 305;
  func50.definitionModule = "kitty";
  lineNumber = 18
  var func51 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func51.paramCounts[0])
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
  func51.paramCounts = [
    0,
  ];
  func51.variableArities = [
    false,
  ];
  this.methods["KittyImage"] = func51;
  func51.definitionLine = 18;
  func51.definitionModule = "kitty";
  var obj52 = Grace_allocObject();
  obj52.definitionModule = "kitty";
  obj52.definitionLine = 18;
  obj52.outer = this;
  var reader_kitty_outer_53 = function() {
    return this.outer;
  }
  obj52.methods["outer"] = reader_kitty_outer_53;
  function obj_init_52() {
    var origSuperDepth = superDepth;
    superDepth = obj52;
    obj52.annotations = [];
    var func54 = function(argcv) {
      var curarg = 1;
      var var_url__39__ = arguments[curarg];
      curarg++;
      var var_height__39__ = arguments[curarg];
      curarg++;
      var var_width__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func54.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj55 = Grace_allocObject();
        obj55.definitionModule = "kitty";
        obj55.definitionLine = 18;
        obj55.outer = this;
        var reader_kitty_outer_56 = function() {
          return this.outer;
        }
        obj55.methods["outer"] = reader_kitty_outer_56;
        function obj_init_55() {
          var origSuperDepth = superDepth;
          superDepth = obj55;
          obj55.annotations = [];
          var func57 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            var var_rot = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func57.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 28
              var string58 = new GraceString(")...");
              onSelf = true;
              var call60 = callmethod(this, "height", [0]);
              var string62 = new GraceString(", ");
              onSelf = true;
              var call64 = callmethod(this, "width", [0]);
              var string66 = new GraceString(" (");
              onSelf = true;
              var call68 = callmethod(this, "imgTag", [0]);
              var call69 = callmethod(call68,"src", [0]);
              var string71 = new GraceString("DRAWING IMAGE: ");
              var opresult73 = callmethod(string71, "++", [1], call69);
              var opresult75 = callmethod(opresult73, "++", [1], string66);
              var opresult77 = callmethod(opresult75, "++", [1], call64);
              var opresult79 = callmethod(opresult77, "++", [1], string62);
              var opresult81 = callmethod(opresult79, "++", [1], call60);
              var opresult83 = callmethod(opresult81, "++", [1], string58);
              var call84 = Grace_print(opresult83);
              lineNumber = 29
              var call85 = callmethod(var_ctx,"save", [0]);
              lineNumber = 30
              var call86 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 31
              var prod90 = callmethod(var_rot, "*", [1], new GraceNum(180));
              var quotient92 = callmethod(prod90, "/", [1], new GraceNum(3.14));
              var call93 = callmethod(var_ctx,"rotate", [1], quotient92);
              lineNumber = 32
              onSelf = true;
              var call94 = callmethod(this, "imgTag", [0]);
              onSelf = true;
              var call96 = callmethod(this, "width", [0]);
              var call97 = callmethod(call96,"prefix-", [0]);
              var quotient99 = callmethod(call97, "/", [1], new GraceNum(2));
              onSelf = true;
              var call101 = callmethod(this, "height", [0]);
              var call102 = callmethod(call101,"prefix-", [0]);
              var quotient104 = callmethod(call102, "/", [1], new GraceNum(2));
              onSelf = true;
              var call105 = callmethod(this, "width", [0]);
              onSelf = true;
              var call106 = callmethod(this, "height", [0]);
              var call107 = callmethod(var_ctx,"drawImage", [5], call94, quotient99, quotient104, call105, call106);
              lineNumber = 33
              var call108 = callmethod(var_ctx,"restore", [0]);
              lineNumber = 34
              var string109 = new GraceString(" DRAWN");
              onSelf = true;
              var call111 = callmethod(this, "imgTag", [0]);
              var call112 = callmethod(call111,"src", [0]);
              var string114 = new GraceString("IMAGE: ");
              var opresult116 = callmethod(string114, "++", [1], call112);
              var opresult118 = callmethod(opresult116, "++", [1], string109);
              var call119 = Grace_print(opresult118);
              return call119
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func57.paramCounts = [
            4,
          ];
          func57.variableArities = [
            false,
          ];
          obj55.methods["draw"] = func57;
          func57.definitionLine = 27;
          func57.definitionModule = "kitty";
          sourceObject = obj55;
          lineNumber = 20
          var string120 = new GraceString("...");
          var string123 = new GraceString("CREATING NEW IMAGE: ");
          var opresult125 = callmethod(string123, "++", [1], var_url__39__);
          var opresult127 = callmethod(opresult125, "++", [1], string120);
          var call128 = Grace_print(opresult127);
          sourceObject = obj55;
          lineNumber = 21
          var string129 = new GraceString("img");
          var call130 = callmethod(var_dom,"document", [0]);
          var call131 = callmethod(call130,"createElement", [1], string129);
          obj55.data["imgTag"] = call131;
          var reader_kitty_imgTag_132 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_132.def = true;
          reader_kitty_imgTag_132.confidential = true;
          obj55.methods["imgTag"] = reader_kitty_imgTag_132;
          lineNumber = 21;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call131)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj55;
          lineNumber = 24
          lineNumber = 21
          lineNumber = 22
          onSelf = true;
          var call133 = callmethod(this, "imgTag", [0]);
          var call134 = callmethod(call133,"src:=", [1], var_url__39__);
          sourceObject = obj55;
          lineNumber = 24
          obj55.data["height"] = var_height__39__;
          var reader_kitty_height_135 = function() {
            return this.data["height"];
          }
          obj55.methods["height"] = reader_kitty_height_135;
          obj55.data["height"] = var_height__39__;
          var writer_kitty_height_135 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj55.methods["height:="] = writer_kitty_height_135;
          reader_kitty_height_135.confidential = true;
          writer_kitty_height_135.confidential = true;
          lineNumber = 25;
          moduleName = "kitty";
          lineNumber = 24
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj55.mutable = true;
          sourceObject = obj55;
          lineNumber = 25
          obj55.data["width"] = var_width__39__;
          var reader_kitty_width_136 = function() {
            return this.data["width"];
          }
          obj55.methods["width"] = reader_kitty_width_136;
          obj55.data["width"] = var_width__39__;
          var writer_kitty_width_136 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj55.methods["width:="] = writer_kitty_width_136;
          reader_kitty_width_136.confidential = true;
          writer_kitty_width_136.confidential = true;
          lineNumber = 27;
          moduleName = "kitty";
          lineNumber = 25
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj55.mutable = true;
          sourceObject = obj55;
          sourceObject = obj55;
          lineNumber = 37
          var string137 = new GraceString("");
          var string140 = new GraceString("CREATED NEW IMAGE: ");
          var opresult142 = callmethod(string140, "++", [1], var_url__39__);
          var opresult144 = callmethod(opresult142, "++", [1], string137);
          var call145 = Grace_print(opresult144);
          superDepth = origSuperDepth;
        }
        obj_init_55.apply(obj55, []);
        return obj55
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func54.paramCounts = [
      3,
    ];
    func54.variableArities = [
      false,
    ];
    obj52.methods["new"] = func54;
    func54.definitionLine = 18;
    func54.definitionModule = "kitty";
    var func146 = function(argcv) {
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
        var obj147 = Grace_allocObject();
        obj147.definitionModule = "kitty";
        obj147.definitionLine = 18;
        var inho147 = inheritingObject;
        while (inho147.superobj) inho147 = inho147.superobj;
        inho147.superobj = obj147;
        obj147.data = inheritingObject.data;
        obj147.outer = this;
        var reader_kitty_outer_148 = function() {
          return this.outer;
        }
        obj147.methods["outer"] = reader_kitty_outer_148;
        function obj_init_147() {
          var origSuperDepth = superDepth;
          superDepth = obj147;
          obj147.annotations = [];
          var func149 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            var var_rot = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func149.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 28
              var string150 = new GraceString(")...");
              onSelf = true;
              var call152 = callmethod(this, "height", [0]);
              var string154 = new GraceString(", ");
              onSelf = true;
              var call156 = callmethod(this, "width", [0]);
              var string158 = new GraceString(" (");
              onSelf = true;
              var call160 = callmethod(this, "imgTag", [0]);
              var call161 = callmethod(call160,"src", [0]);
              var string163 = new GraceString("DRAWING IMAGE: ");
              var opresult165 = callmethod(string163, "++", [1], call161);
              var opresult167 = callmethod(opresult165, "++", [1], string158);
              var opresult169 = callmethod(opresult167, "++", [1], call156);
              var opresult171 = callmethod(opresult169, "++", [1], string154);
              var opresult173 = callmethod(opresult171, "++", [1], call152);
              var opresult175 = callmethod(opresult173, "++", [1], string150);
              var call176 = Grace_print(opresult175);
              lineNumber = 29
              var call177 = callmethod(var_ctx,"save", [0]);
              lineNumber = 30
              var call178 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 31
              var prod182 = callmethod(var_rot, "*", [1], new GraceNum(180));
              var quotient184 = callmethod(prod182, "/", [1], new GraceNum(3.14));
              var call185 = callmethod(var_ctx,"rotate", [1], quotient184);
              lineNumber = 32
              onSelf = true;
              var call186 = callmethod(this, "imgTag", [0]);
              onSelf = true;
              var call188 = callmethod(this, "width", [0]);
              var call189 = callmethod(call188,"prefix-", [0]);
              var quotient191 = callmethod(call189, "/", [1], new GraceNum(2));
              onSelf = true;
              var call193 = callmethod(this, "height", [0]);
              var call194 = callmethod(call193,"prefix-", [0]);
              var quotient196 = callmethod(call194, "/", [1], new GraceNum(2));
              onSelf = true;
              var call197 = callmethod(this, "width", [0]);
              onSelf = true;
              var call198 = callmethod(this, "height", [0]);
              var call199 = callmethod(var_ctx,"drawImage", [5], call186, quotient191, quotient196, call197, call198);
              lineNumber = 33
              var call200 = callmethod(var_ctx,"restore", [0]);
              lineNumber = 34
              var string201 = new GraceString(" DRAWN");
              onSelf = true;
              var call203 = callmethod(this, "imgTag", [0]);
              var call204 = callmethod(call203,"src", [0]);
              var string206 = new GraceString("IMAGE: ");
              var opresult208 = callmethod(string206, "++", [1], call204);
              var opresult210 = callmethod(opresult208, "++", [1], string201);
              var call211 = Grace_print(opresult210);
              return call211
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func149.paramCounts = [
            4,
          ];
          func149.variableArities = [
            false,
          ];
          obj147.methods["draw"] = func149;
          func149.definitionLine = 27;
          func149.definitionModule = "kitty";
          sourceObject = obj147;
          lineNumber = 20
          var string212 = new GraceString("...");
          var string215 = new GraceString("CREATING NEW IMAGE: ");
          var opresult217 = callmethod(string215, "++", [1], var_url__39__);
          var opresult219 = callmethod(opresult217, "++", [1], string212);
          var call220 = Grace_print(opresult219);
          sourceObject = obj147;
          lineNumber = 21
          var string221 = new GraceString("img");
          var call222 = callmethod(var_dom,"document", [0]);
          var call223 = callmethod(call222,"createElement", [1], string221);
          obj147.data["imgTag"] = call223;
          var reader_kitty_imgTag_224 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_224.def = true;
          reader_kitty_imgTag_224.confidential = true;
          obj147.methods["imgTag"] = reader_kitty_imgTag_224;
          lineNumber = 21;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call223)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj147;
          lineNumber = 24
          lineNumber = 21
          lineNumber = 22
          onSelf = true;
          var call225 = callmethod(this, "imgTag", [0]);
          var call226 = callmethod(call225,"src:=", [1], var_url__39__);
          sourceObject = obj147;
          lineNumber = 24
          obj147.data["height"] = var_height__39__;
          var reader_kitty_height_227 = function() {
            return this.data["height"];
          }
          obj147.methods["height"] = reader_kitty_height_227;
          obj147.data["height"] = var_height__39__;
          var writer_kitty_height_227 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj147.methods["height:="] = writer_kitty_height_227;
          reader_kitty_height_227.confidential = true;
          writer_kitty_height_227.confidential = true;
          lineNumber = 25;
          moduleName = "kitty";
          lineNumber = 24
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj147.mutable = true;
          sourceObject = obj147;
          lineNumber = 25
          obj147.data["width"] = var_width__39__;
          var reader_kitty_width_228 = function() {
            return this.data["width"];
          }
          obj147.methods["width"] = reader_kitty_width_228;
          obj147.data["width"] = var_width__39__;
          var writer_kitty_width_228 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj147.methods["width:="] = writer_kitty_width_228;
          reader_kitty_width_228.confidential = true;
          writer_kitty_width_228.confidential = true;
          lineNumber = 27;
          moduleName = "kitty";
          lineNumber = 25
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj147.mutable = true;
          sourceObject = obj147;
          sourceObject = obj147;
          lineNumber = 37
          var string229 = new GraceString("");
          var string232 = new GraceString("CREATED NEW IMAGE: ");
          var opresult234 = callmethod(string232, "++", [1], var_url__39__);
          var opresult236 = callmethod(opresult234, "++", [1], string229);
          var call237 = Grace_print(opresult236);
          superDepth = origSuperDepth;
        }
        obj_init_147.apply(inheritingObject, []);
        return obj147
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj52.methods["new()object"] = func146;
    var func238 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 18
        var string239 = new GraceString("class KittyImage");
        return string239
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func238.paramCounts = [
    ];
    func238.variableArities = [
    ];
    obj52.methods["asDebugString"] = func238;
    func238.definitionLine = 18;
    func238.definitionModule = "kitty";
    sourceObject = obj52;
    sourceObject = obj52;
    superDepth = origSuperDepth;
  }
  obj_init_52.apply(obj52, []);
  var var_KittyImage = obj52;
  lineNumber = 40
  lineNumber = 47
  var func240 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func240.paramCounts[0])
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
  func240.paramCounts = [
    0,
  ];
  func240.variableArities = [
    false,
  ];
  this.methods["KittyEntity"] = func240;
  func240.definitionLine = 47;
  func240.definitionModule = "kitty";
  var obj241 = Grace_allocObject();
  obj241.definitionModule = "kitty";
  obj241.definitionLine = 47;
  obj241.outer = this;
  var reader_kitty_outer_242 = function() {
    return this.outer;
  }
  obj241.methods["outer"] = reader_kitty_outer_242;
  function obj_init_241() {
    var origSuperDepth = superDepth;
    superDepth = obj241;
    obj241.annotations = [];
    var func243 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func243.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj244 = Grace_allocObject();
        obj244.definitionModule = "kitty";
        obj244.definitionLine = 47;
        obj244.outer = this;
        var reader_kitty_outer_245 = function() {
          return this.outer;
        }
        obj244.methods["outer"] = reader_kitty_outer_245;
        function obj_init_244() {
          var origSuperDepth = superDepth;
          superDepth = obj244;
          obj244.annotations = [];
          var func246 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func246.paramCounts[0])
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
          func246.paramCounts = [
            0,
          ];
          func246.variableArities = [
            false,
          ];
          obj244.methods["awake"] = func246;
          func246.definitionLine = 66;
          func246.definitionModule = "kitty";
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
          obj244.methods["start"] = func247;
          func247.definitionLine = 71;
          func247.definitionModule = "kitty";
          var func248 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func248.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 77
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
          obj244.methods["update"] = func248;
          func248.definitionLine = 76;
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
          obj244.methods["onDestroy"] = func251;
          func251.definitionLine = 81;
          func251.definitionModule = "kitty";
          var func252 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func252.paramCounts[0])
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
              var call254 = callmethod(this, "posY", [0]);
              var diff256 = callmethod(call254, "-", [1], var_dy);
              onSelf = true;
              var call257 = callmethod(this, "posY:=", [1], diff256);
              return call257
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
          obj244.methods["moveUp"] = func252;
          func252.definitionLine = 85;
          func252.definitionModule = "kitty";
          var func258 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func258.paramCounts[0])
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
              var call260 = callmethod(this, "posY", [0]);
              var opresult262 = callmethod(call260, "+", [1], var_dy);
              onSelf = true;
              var call263 = callmethod(this, "posY:=", [1], opresult262);
              return call263
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func258.paramCounts = [
            1,
          ];
          func258.variableArities = [
            false,
          ];
          obj244.methods["moveDown"] = func258;
          func258.definitionLine = 89;
          func258.definitionModule = "kitty";
          var func264 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func264.paramCounts[0])
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
              var call266 = callmethod(this, "posX", [0]);
              var diff268 = callmethod(call266, "-", [1], var_dx);
              onSelf = true;
              var call269 = callmethod(this, "posX:=", [1], diff268);
              return call269
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func264.paramCounts = [
            1,
          ];
          func264.variableArities = [
            false,
          ];
          obj244.methods["moveLeft"] = func264;
          func264.definitionLine = 93;
          func264.definitionModule = "kitty";
          var func270 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func270.paramCounts[0])
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
              var call272 = callmethod(this, "posX", [0]);
              var opresult274 = callmethod(call272, "+", [1], var_dx);
              onSelf = true;
              var call275 = callmethod(this, "posX:=", [1], opresult274);
              return call275
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func270.paramCounts = [
            1,
          ];
          func270.variableArities = [
            false,
          ];
          obj244.methods["moveRight"] = func270;
          func270.definitionLine = 97;
          func270.definitionModule = "kitty";
          var func276 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func276.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 102
              var call277 = callmethod(var_ctx,"save", [0]);
              lineNumber = 103
              onSelf = true;
              var call278 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call279 = callmethod(this, "posY", [0]);
              var call280 = callmethod(var_ctx,"translate", [2], call278, call279);
              lineNumber = 104
              onSelf = true;
              var call281 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call282 = callmethod(this, "image", [0]);
              var call283 = callmethod(call282,"draw", [4], var_ctx, var_dx, var_dy, call281);
              lineNumber = 105
              var call284 = callmethod(var_ctx,"restore", [0]);
              return call284
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func276.paramCounts = [
            3,
          ];
          func276.variableArities = [
            false,
          ];
          obj244.methods["draw"] = func276;
          func276.definitionLine = 101;
          func276.definitionModule = "kitty";
          var func285 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func285.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 109
              lineNumber = 105
              lineNumber = 109
              var call286 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call287 = callmethod(call286, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call288 = callmethod(call287, "Image", [3], var_image__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call289 = callmethod(this, "image:=", [1], call288);
              return call289
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
          obj244.methods["setImage"] = func285;
          func285.definitionLine = 108;
          func285.definitionModule = "kitty";
          var func290 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func290.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 114
              lineNumber = 109
              lineNumber = 113
              onSelf = true;
              var call291 = callmethod(this, "action:=", [1], var_action__39__);
              return call291
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func290.paramCounts = [
            1,
          ];
          func290.variableArities = [
            false,
          ];
          obj244.methods["setAction"] = func290;
          func290.definitionLine = 112;
          func290.definitionModule = "kitty";
          var func292 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func292.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 118
              lineNumber = 109
              lineNumber = 117
              onSelf = true;
              var call293 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 119
              lineNumber = 109
              lineNumber = 118
              onSelf = true;
              var call294 = callmethod(this, "posY:=", [1], var_y);
              return call294
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func292.paramCounts = [
            2,
          ];
          func292.variableArities = [
            false,
          ];
          obj244.methods["setLocation"] = func292;
          func292.definitionLine = 116;
          func292.definitionModule = "kitty";
          var func295 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func295.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 123
              lineNumber = 122
              onSelf = true;
              var call296 = callmethod(this, "posX", [0]);
              return call296
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func295.paramCounts = [
            0,
          ];
          func295.variableArities = [
            false,
          ];
          obj244.methods["getX"] = func295;
          func295.definitionLine = 121;
          func295.definitionModule = "kitty";
          var func297 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func297.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 127
              lineNumber = 126
              onSelf = true;
              var call298 = callmethod(this, "posY", [0]);
              return call298
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func297.paramCounts = [
            0,
          ];
          func297.variableArities = [
            false,
          ];
          obj244.methods["getY"] = func297;
          func297.definitionLine = 125;
          func297.definitionModule = "kitty";
          var func299 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func299.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 131
              lineNumber = 130
              onSelf = true;
              var call300 = callmethod(this, "rotation", [0]);
              return call300
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func299.paramCounts = [
            0,
          ];
          func299.variableArities = [
            false,
          ];
          obj244.methods["getRotation"] = func299;
          func299.definitionLine = 129;
          func299.definitionModule = "kitty";
          sourceObject = obj244;
          lineNumber = 49
          var string301 = new GraceString(")...");
          var string304 = new GraceString(", ");
          var string307 = new GraceString("CREATING ENTITY AT (");
          var opresult309 = callmethod(string307, "++", [1], var_x__39__);
          var opresult311 = callmethod(opresult309, "++", [1], string304);
          var opresult313 = callmethod(opresult311, "++", [1], var_y__39__);
          var opresult315 = callmethod(opresult313, "++", [1], string301);
          var call316 = Grace_print(opresult315);
          sourceObject = obj244;
          lineNumber = 51
          obj244.data["posX"] = var_x__39__;
          var reader_kitty_posX_317 = function() {
            return this.data["posX"];
          }
          obj244.methods["posX"] = reader_kitty_posX_317;
          obj244.data["posX"] = var_x__39__;
          var writer_kitty_posX_317 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj244.methods["posX:="] = writer_kitty_posX_317;
          reader_kitty_posX_317.confidential = true;
          writer_kitty_posX_317.confidential = true;
          lineNumber = 52;
          moduleName = "kitty";
          lineNumber = 51
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj244.mutable = true;
          sourceObject = obj244;
          lineNumber = 52
          obj244.data["posY"] = var_y__39__;
          var reader_kitty_posY_318 = function() {
            return this.data["posY"];
          }
          obj244.methods["posY"] = reader_kitty_posY_318;
          obj244.data["posY"] = var_y__39__;
          var writer_kitty_posY_318 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj244.methods["posY:="] = writer_kitty_posY_318;
          reader_kitty_posY_318.confidential = true;
          writer_kitty_posY_318.confidential = true;
          lineNumber = 53;
          moduleName = "kitty";
          lineNumber = 52
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj244.mutable = true;
          sourceObject = obj244;
          lineNumber = 53
          obj244.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_319 = function() {
            return this.data["rotation"];
          }
          obj244.methods["rotation"] = reader_kitty_rotation_319;
          obj244.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_319 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj244.methods["rotation:="] = writer_kitty_rotation_319;
          reader_kitty_rotation_319.confidential = true;
          writer_kitty_rotation_319.confidential = true;
          lineNumber = 55;
          moduleName = "kitty";
          lineNumber = 53
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj244.mutable = true;
          sourceObject = obj244;
          lineNumber = 55
          var obj320 = Grace_allocObject();
          obj320.definitionModule = "kitty";
          obj320.definitionLine = 55;
          obj320.outer = this;
          var reader_kitty_outer_321 = function() {
            return this.outer;
          }
          obj320.methods["outer"] = reader_kitty_outer_321;
          function obj_init_320() {
            var origSuperDepth = superDepth;
            superDepth = obj320;
            obj320.annotations = [];
            var func322 = function(argcv) {
              var curarg = 1;
              if (argcv[0] !=  func322.paramCounts[0])
                callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
              var returnTarget = invocationCount;
              invocationCount++;
              moduleName = "kitty";
              try {
                lineNumber = 57
                var string323 = new GraceString("UPDATING ENTITY...");
                var call324 = Grace_print(string323);
                return call324
              } catch(e) {
                if ((e.exctype == 'return') && (e.target == returnTarget)) {
                  return e.returnvalue;
                } else {
                  throw e;
                }
              }
            }
            func322.paramCounts = [
              0,
            ];
            func322.variableArities = [
              false,
            ];
            obj320.methods["update"] = func322;
            func322.definitionLine = 56;
            func322.definitionModule = "kitty";
            sourceObject = obj320;
            superDepth = origSuperDepth;
          }
          obj_init_320.apply(obj320, []);
          obj244.data["action"] = obj320;
          var reader_kitty_action_325 = function() {
            return this.data["action"];
          }
          obj244.methods["action"] = reader_kitty_action_325;
          obj244.data["action"] = obj320;
          var writer_kitty_action_325 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj244.methods["action:="] = writer_kitty_action_325;
          reader_kitty_action_325.confidential = true;
          writer_kitty_action_325.confidential = true;
          lineNumber = 55;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], obj320)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj244.mutable = true;
          sourceObject = obj244;
          obj244.data["image"] = undefined;
          var reader_kitty_image_326 = function() {
            return this.data["image"];
          }
          obj244.methods["image"] = reader_kitty_image_326;
          obj244.data["image"] = undefined;
          var writer_kitty_image_326 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj244.methods["image:="] = writer_kitty_image_326;
          reader_kitty_image_326.confidential = true;
          writer_kitty_image_326.confidential = true;
          obj244.mutable = true;
          sourceObject = obj244;
          lineNumber = 63
          onSelf = true;
          var call327 = callmethod(this, "awake", [0]);
          sourceObject = obj244;
          sourceObject = obj244;
          sourceObject = obj244;
          sourceObject = obj244;
          sourceObject = obj244;
          sourceObject = obj244;
          sourceObject = obj244;
          sourceObject = obj244;
          sourceObject = obj244;
          sourceObject = obj244;
          sourceObject = obj244;
          sourceObject = obj244;
          sourceObject = obj244;
          sourceObject = obj244;
          sourceObject = obj244;
          sourceObject = obj244;
          lineNumber = 133
          var string328 = new GraceString("ENTITY CREATED");
          var call329 = Grace_print(string328);
          superDepth = origSuperDepth;
        }
        obj_init_244.apply(obj244, []);
        return obj244
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func243.paramCounts = [
      2,
    ];
    func243.variableArities = [
      false,
    ];
    obj241.methods["new"] = func243;
    func243.definitionLine = 47;
    func243.definitionModule = "kitty";
    var func330 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj331 = Grace_allocObject();
        obj331.definitionModule = "kitty";
        obj331.definitionLine = 47;
        var inho331 = inheritingObject;
        while (inho331.superobj) inho331 = inho331.superobj;
        inho331.superobj = obj331;
        obj331.data = inheritingObject.data;
        obj331.outer = this;
        var reader_kitty_outer_332 = function() {
          return this.outer;
        }
        obj331.methods["outer"] = reader_kitty_outer_332;
        function obj_init_331() {
          var origSuperDepth = superDepth;
          superDepth = obj331;
          obj331.annotations = [];
          var func333 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func333.paramCounts[0])
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
          func333.paramCounts = [
            0,
          ];
          func333.variableArities = [
            false,
          ];
          obj331.methods["awake"] = func333;
          func333.definitionLine = 66;
          func333.definitionModule = "kitty";
          var func334 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func334.paramCounts[0])
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
          func334.paramCounts = [
            0,
          ];
          func334.variableArities = [
            false,
          ];
          obj331.methods["start"] = func334;
          func334.definitionLine = 71;
          func334.definitionModule = "kitty";
          var func335 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func335.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 77
              onSelf = true;
              var call336 = callmethod(this, "action", [0]);
              var call337 = callmethod(call336,"update", [0]);
              return call337
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
          obj331.methods["update"] = func335;
          func335.definitionLine = 76;
          func335.definitionModule = "kitty";
          var func338 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func338.paramCounts[0])
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
          func338.paramCounts = [
            0,
          ];
          func338.variableArities = [
            false,
          ];
          obj331.methods["onDestroy"] = func338;
          func338.definitionLine = 81;
          func338.definitionModule = "kitty";
          var func339 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func339.paramCounts[0])
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
              var call341 = callmethod(this, "posY", [0]);
              var diff343 = callmethod(call341, "-", [1], var_dy);
              onSelf = true;
              var call344 = callmethod(this, "posY:=", [1], diff343);
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
          obj331.methods["moveUp"] = func339;
          func339.definitionLine = 85;
          func339.definitionModule = "kitty";
          var func345 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func345.paramCounts[0])
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
              var call347 = callmethod(this, "posY", [0]);
              var opresult349 = callmethod(call347, "+", [1], var_dy);
              onSelf = true;
              var call350 = callmethod(this, "posY:=", [1], opresult349);
              return call350
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func345.paramCounts = [
            1,
          ];
          func345.variableArities = [
            false,
          ];
          obj331.methods["moveDown"] = func345;
          func345.definitionLine = 89;
          func345.definitionModule = "kitty";
          var func351 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func351.paramCounts[0])
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
              var call353 = callmethod(this, "posX", [0]);
              var diff355 = callmethod(call353, "-", [1], var_dx);
              onSelf = true;
              var call356 = callmethod(this, "posX:=", [1], diff355);
              return call356
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func351.paramCounts = [
            1,
          ];
          func351.variableArities = [
            false,
          ];
          obj331.methods["moveLeft"] = func351;
          func351.definitionLine = 93;
          func351.definitionModule = "kitty";
          var func357 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func357.paramCounts[0])
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
              var call359 = callmethod(this, "posX", [0]);
              var opresult361 = callmethod(call359, "+", [1], var_dx);
              onSelf = true;
              var call362 = callmethod(this, "posX:=", [1], opresult361);
              return call362
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func357.paramCounts = [
            1,
          ];
          func357.variableArities = [
            false,
          ];
          obj331.methods["moveRight"] = func357;
          func357.definitionLine = 97;
          func357.definitionModule = "kitty";
          var func363 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func363.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 102
              var call364 = callmethod(var_ctx,"save", [0]);
              lineNumber = 103
              onSelf = true;
              var call365 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call366 = callmethod(this, "posY", [0]);
              var call367 = callmethod(var_ctx,"translate", [2], call365, call366);
              lineNumber = 104
              onSelf = true;
              var call368 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call369 = callmethod(this, "image", [0]);
              var call370 = callmethod(call369,"draw", [4], var_ctx, var_dx, var_dy, call368);
              lineNumber = 105
              var call371 = callmethod(var_ctx,"restore", [0]);
              return call371
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func363.paramCounts = [
            3,
          ];
          func363.variableArities = [
            false,
          ];
          obj331.methods["draw"] = func363;
          func363.definitionLine = 101;
          func363.definitionModule = "kitty";
          var func372 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func372.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 109
              lineNumber = 105
              lineNumber = 109
              var call373 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call374 = callmethod(call373, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call375 = callmethod(call374, "Image", [3], var_image__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call376 = callmethod(this, "image:=", [1], call375);
              return call376
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func372.paramCounts = [
            1,
          ];
          func372.variableArities = [
            false,
          ];
          obj331.methods["setImage"] = func372;
          func372.definitionLine = 108;
          func372.definitionModule = "kitty";
          var func377 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func377.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 114
              lineNumber = 109
              lineNumber = 113
              onSelf = true;
              var call378 = callmethod(this, "action:=", [1], var_action__39__);
              return call378
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func377.paramCounts = [
            1,
          ];
          func377.variableArities = [
            false,
          ];
          obj331.methods["setAction"] = func377;
          func377.definitionLine = 112;
          func377.definitionModule = "kitty";
          var func379 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func379.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 118
              lineNumber = 109
              lineNumber = 117
              onSelf = true;
              var call380 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 119
              lineNumber = 109
              lineNumber = 118
              onSelf = true;
              var call381 = callmethod(this, "posY:=", [1], var_y);
              return call381
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func379.paramCounts = [
            2,
          ];
          func379.variableArities = [
            false,
          ];
          obj331.methods["setLocation"] = func379;
          func379.definitionLine = 116;
          func379.definitionModule = "kitty";
          var func382 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func382.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 123
              lineNumber = 122
              onSelf = true;
              var call383 = callmethod(this, "posX", [0]);
              return call383
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
          obj331.methods["getX"] = func382;
          func382.definitionLine = 121;
          func382.definitionModule = "kitty";
          var func384 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func384.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 127
              lineNumber = 126
              onSelf = true;
              var call385 = callmethod(this, "posY", [0]);
              return call385
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
          obj331.methods["getY"] = func384;
          func384.definitionLine = 125;
          func384.definitionModule = "kitty";
          var func386 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func386.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 131
              lineNumber = 130
              onSelf = true;
              var call387 = callmethod(this, "rotation", [0]);
              return call387
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
          obj331.methods["getRotation"] = func386;
          func386.definitionLine = 129;
          func386.definitionModule = "kitty";
          sourceObject = obj331;
          lineNumber = 49
          var string388 = new GraceString(")...");
          var string391 = new GraceString(", ");
          var string394 = new GraceString("CREATING ENTITY AT (");
          var opresult396 = callmethod(string394, "++", [1], var_x__39__);
          var opresult398 = callmethod(opresult396, "++", [1], string391);
          var opresult400 = callmethod(opresult398, "++", [1], var_y__39__);
          var opresult402 = callmethod(opresult400, "++", [1], string388);
          var call403 = Grace_print(opresult402);
          sourceObject = obj331;
          lineNumber = 51
          obj331.data["posX"] = var_x__39__;
          var reader_kitty_posX_404 = function() {
            return this.data["posX"];
          }
          obj331.methods["posX"] = reader_kitty_posX_404;
          obj331.data["posX"] = var_x__39__;
          var writer_kitty_posX_404 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj331.methods["posX:="] = writer_kitty_posX_404;
          reader_kitty_posX_404.confidential = true;
          writer_kitty_posX_404.confidential = true;
          lineNumber = 52;
          moduleName = "kitty";
          lineNumber = 51
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj331.mutable = true;
          sourceObject = obj331;
          lineNumber = 52
          obj331.data["posY"] = var_y__39__;
          var reader_kitty_posY_405 = function() {
            return this.data["posY"];
          }
          obj331.methods["posY"] = reader_kitty_posY_405;
          obj331.data["posY"] = var_y__39__;
          var writer_kitty_posY_405 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj331.methods["posY:="] = writer_kitty_posY_405;
          reader_kitty_posY_405.confidential = true;
          writer_kitty_posY_405.confidential = true;
          lineNumber = 53;
          moduleName = "kitty";
          lineNumber = 52
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj331.mutable = true;
          sourceObject = obj331;
          lineNumber = 53
          obj331.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_406 = function() {
            return this.data["rotation"];
          }
          obj331.methods["rotation"] = reader_kitty_rotation_406;
          obj331.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_406 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj331.methods["rotation:="] = writer_kitty_rotation_406;
          reader_kitty_rotation_406.confidential = true;
          writer_kitty_rotation_406.confidential = true;
          lineNumber = 55;
          moduleName = "kitty";
          lineNumber = 53
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj331.mutable = true;
          sourceObject = obj331;
          lineNumber = 55
          var obj407 = Grace_allocObject();
          obj407.definitionModule = "kitty";
          obj407.definitionLine = 55;
          obj407.outer = this;
          var reader_kitty_outer_408 = function() {
            return this.outer;
          }
          obj407.methods["outer"] = reader_kitty_outer_408;
          function obj_init_407() {
            var origSuperDepth = superDepth;
            superDepth = obj407;
            obj407.annotations = [];
            var func409 = function(argcv) {
              var curarg = 1;
              if (argcv[0] !=  func409.paramCounts[0])
                callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
              var returnTarget = invocationCount;
              invocationCount++;
              moduleName = "kitty";
              try {
                lineNumber = 57
                var string410 = new GraceString("UPDATING ENTITY...");
                var call411 = Grace_print(string410);
                return call411
              } catch(e) {
                if ((e.exctype == 'return') && (e.target == returnTarget)) {
                  return e.returnvalue;
                } else {
                  throw e;
                }
              }
            }
            func409.paramCounts = [
              0,
            ];
            func409.variableArities = [
              false,
            ];
            obj407.methods["update"] = func409;
            func409.definitionLine = 56;
            func409.definitionModule = "kitty";
            sourceObject = obj407;
            superDepth = origSuperDepth;
          }
          obj_init_407.apply(obj407, []);
          obj331.data["action"] = obj407;
          var reader_kitty_action_412 = function() {
            return this.data["action"];
          }
          obj331.methods["action"] = reader_kitty_action_412;
          obj331.data["action"] = obj407;
          var writer_kitty_action_412 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj331.methods["action:="] = writer_kitty_action_412;
          reader_kitty_action_412.confidential = true;
          writer_kitty_action_412.confidential = true;
          lineNumber = 55;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], obj407)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj331.mutable = true;
          sourceObject = obj331;
          obj331.data["image"] = undefined;
          var reader_kitty_image_413 = function() {
            return this.data["image"];
          }
          obj331.methods["image"] = reader_kitty_image_413;
          obj331.data["image"] = undefined;
          var writer_kitty_image_413 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj331.methods["image:="] = writer_kitty_image_413;
          reader_kitty_image_413.confidential = true;
          writer_kitty_image_413.confidential = true;
          obj331.mutable = true;
          sourceObject = obj331;
          lineNumber = 63
          onSelf = true;
          var call414 = callmethod(this, "awake", [0]);
          sourceObject = obj331;
          sourceObject = obj331;
          sourceObject = obj331;
          sourceObject = obj331;
          sourceObject = obj331;
          sourceObject = obj331;
          sourceObject = obj331;
          sourceObject = obj331;
          sourceObject = obj331;
          sourceObject = obj331;
          sourceObject = obj331;
          sourceObject = obj331;
          sourceObject = obj331;
          sourceObject = obj331;
          sourceObject = obj331;
          sourceObject = obj331;
          lineNumber = 133
          var string415 = new GraceString("ENTITY CREATED");
          var call416 = Grace_print(string415);
          superDepth = origSuperDepth;
        }
        obj_init_331.apply(inheritingObject, []);
        return obj331
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj241.methods["new()object"] = func330;
    var func417 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 47
        var string418 = new GraceString("class KittyEntity");
        return string418
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func417.paramCounts = [
    ];
    func417.variableArities = [
    ];
    obj241.methods["asDebugString"] = func417;
    func417.definitionLine = 47;
    func417.definitionModule = "kitty";
    sourceObject = obj241;
    sourceObject = obj241;
    superDepth = origSuperDepth;
  }
  obj_init_241.apply(obj241, []);
  var var_KittyEntity = obj241;
  lineNumber = 136
  lineNumber = 143
  var func419 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func419.paramCounts[0])
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
  func419.paramCounts = [
    0,
  ];
  func419.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func419;
  func419.definitionLine = 143;
  func419.definitionModule = "kitty";
  var obj420 = Grace_allocObject();
  obj420.definitionModule = "kitty";
  obj420.definitionLine = 143;
  obj420.outer = this;
  var reader_kitty_outer_421 = function() {
    return this.outer;
  }
  obj420.methods["outer"] = reader_kitty_outer_421;
  function obj_init_420() {
    var origSuperDepth = superDepth;
    superDepth = obj420;
    obj420.annotations = [];
    var func422 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func422.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj423 = Grace_allocObject();
        obj423.definitionModule = "kitty";
        obj423.definitionLine = 143;
        obj423.outer = this;
        var reader_kitty_outer_424 = function() {
          return this.outer;
        }
        obj423.methods["outer"] = reader_kitty_outer_424;
        function obj_init_423() {
          var origSuperDepth = superDepth;
          superDepth = obj423;
          obj423.annotations = [];
          var func425 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func425.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 173
              var string426 = new GraceString("INITIALIZING WORLD...");
              var call427 = Grace_print(string426);
              lineNumber = 179
              var if428 = var_done;
              lineNumber = 175
              onSelf = true;
              var call429 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call429)) {
                lineNumber = 177
                lineNumber = 176
                var bool430 = new GraceBoolean(false)
                return bool430
              }
              lineNumber = 180
              lineNumber = 143
              lineNumber = 179
              var call431 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call432 = callmethod(this, "document:=", [1], call431);
              lineNumber = 180
              lineNumber = 179
              lineNumber = 180
              var string433 = new GraceString("standard-canvas");
              onSelf = true;
              var call434 = callmethod(this, "document", [0]);
              var call435 = callmethod(call434,"getElementById", [1], string433);
              onSelf = true;
              var call436 = callmethod(this, "canvas:=", [1], call435);
              lineNumber = 182
              lineNumber = 179
              lineNumber = 181
              onSelf = true;
              var call437 = callmethod(this, "canvas", [0]);
              var call438 = callmethod(call437,"width", [0]);
              onSelf = true;
              var call439 = callmethod(this, "canvasWidth:=", [1], call438);
              lineNumber = 185
              lineNumber = 181
              lineNumber = 182
              onSelf = true;
              var call440 = callmethod(this, "canvas", [0]);
              var call441 = callmethod(call440,"height", [0]);
              onSelf = true;
              var call442 = callmethod(this, "canvasHeight:=", [1], call441);
              lineNumber = 197
              var block443 = Grace_allocObject();
              block443.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block443.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block443.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block443.methods["match"] = GraceBlock_match;
              block443.methods["prefix?"] = GraceBlock_lift;
              block443.receiver = this;
              block443.className = 'block<kitty:197>';
              block443.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 188
                lineNumber = 187
                onSelf = true;
                var call444 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call446 = callmethod(this, "canvas", [0]);
                var call447 = callmethod(call446,"offsetWidth", [0]);
                onSelf = true;
                var call449 = callmethod(this, "canvas", [0]);
                var call450 = callmethod(call449,"offsetLeft", [0]);
                var call452 = callmethod(var_ev,"clientX", [0]);
                var diff454 = callmethod(call452, "-", [1], call450);
                var quotient456 = callmethod(diff454, "/", [1], call447);
                var prod458 = callmethod(quotient456, "*", [1], call444);
                var var_x = prod458;
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
                var call459 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call461 = callmethod(this, "canvas", [0]);
                var call462 = callmethod(call461,"offsetHeight", [0]);
                onSelf = true;
                var call464 = callmethod(this, "canvas", [0]);
                var call465 = callmethod(call464,"offsetTop", [0]);
                var call467 = callmethod(var_ev,"clientY", [0]);
                var diff469 = callmethod(call467, "-", [1], call465);
                var quotient471 = callmethod(diff469, "/", [1], call462);
                var prod473 = callmethod(quotient471, "*", [1], call459);
                var var_y = prod473;
                lineNumber = 190;
                moduleName = "kitty";
                lineNumber = 188
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 190
                var string474 = new GraceString("MOUSEDOWN");
                var call475 = Grace_print(string474);
                lineNumber = 196
                var if476 = var_done;
                lineNumber = 192
                var opresult479 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call482 = callmethod(this, "canvasWidth", [0]);
                var diff484 = callmethod(call482, "-", [1], new GraceNum(20));
                var opresult487 = callmethod(var_x, ">", [1], diff484);
                var opresult489 = callmethod(opresult487, "&&", [1], opresult479);
                if (Grace_isTrue(opresult489)) {
                  lineNumber = 193
                  var call490 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 194
                  onSelf = true;
                  var call491 = callmethod(this, "stop", [0]);
                  if476 = call491;
                }
                return if476;
              };
              var_mouseDownListener = block443;
              lineNumber = 197
              var string492 = new GraceString("mousedown");
              onSelf = true;
              var call493 = callmethod(this, "canvas", [0]);
              var call494 = callmethod(call493,"addEventListener", [2], string492, var_mouseDownListener);
              lineNumber = 207
              var block495 = Grace_allocObject();
              block495.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block495.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block495.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block495.methods["match"] = GraceBlock_match;
              block495.methods["prefix?"] = GraceBlock_lift;
              block495.receiver = this;
              block495.className = 'block<kitty:207>';
              block495.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 201
                var string496 = new GraceString("");
                var call498 = callmethod(var_ev,"keyCode", [0]);
                var string500 = new GraceString("KEYDOWN: ");
                var opresult502 = callmethod(string500, "++", [1], call498);
                var opresult504 = callmethod(opresult502, "++", [1], string496);
                var call505 = Grace_print(opresult504);
                lineNumber = 205
                var if506 = var_done;
                lineNumber = 202
                var call508 = callmethod(var_ev,"keyCode", [0]);
                var opresult510 = callmethod(call508, "==", [1], new GraceNum(81));
                if (Grace_isTrue(opresult510)) {
                  lineNumber = 203
                  onSelf = true;
                  var call511 = callmethod(this, "stop", [0]);
                  if506 = call511;
                }
                lineNumber = 206
                lineNumber = 202
                lineNumber = 205
                var call512 = callmethod(var_ev,"keyCode", [0]);
                onSelf = true;
                var call513 = callmethod(this, "currentKeyDown:=", [1], call512);
                return call513;
              };
              var_keyPressListener = block495;
              lineNumber = 207
              var string514 = new GraceString("keypress");
              onSelf = true;
              var call515 = callmethod(this, "document", [0]);
              var call516 = callmethod(call515,"addEventListener", [2], string514, var_keyPressListener);
              lineNumber = 213
              var block517 = Grace_allocObject();
              block517.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block517.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block517.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block517.methods["match"] = GraceBlock_match;
              block517.methods["prefix?"] = GraceBlock_lift;
              block517.receiver = this;
              block517.className = 'block<kitty:213>';
              block517.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 210
                var string518 = new GraceString("KEYUP");
                var call519 = Grace_print(string518);
                lineNumber = 212
                lineNumber = 205
                lineNumber = 212
                lineNumber = 211
                var call520 = callmethod(new GraceNum(1),"prefix-", [0]);
                onSelf = true;
                var call521 = callmethod(this, "currentKeyDown:=", [1], call520);
                return call521;
              };
              var_keyUpListener = block517;
              lineNumber = 213
              var string522 = new GraceString("keyup");
              onSelf = true;
              var call523 = callmethod(this, "document", [0]);
              var call524 = callmethod(call523,"addEventListener", [2], string522, var_keyUpListener);
              lineNumber = 215
              lineNumber = 205
              lineNumber = 215
              var string525 = new GraceString("canvas");
              var call526 = callmethod(var_dom,"document", [0]);
              var call527 = callmethod(call526,"createElement", [1], string525);
              onSelf = true;
              var call528 = callmethod(this, "backingCanvas:=", [1], call527);
              lineNumber = 217
              lineNumber = 215
              lineNumber = 216
              onSelf = true;
              var call529 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call530 = callmethod(this, "backingCanvas", [0]);
              var call531 = callmethod(call530,"height:=", [1], call529);
              lineNumber = 218
              lineNumber = 215
              lineNumber = 217
              onSelf = true;
              var call532 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call533 = callmethod(this, "backingCanvas", [0]);
              var call534 = callmethod(call533,"width:=", [1], call532);
              lineNumber = 218
              lineNumber = 215
              lineNumber = 218
              var string535 = new GraceString("2d");
              onSelf = true;
              var call536 = callmethod(this, "backingCanvas", [0]);
              var call537 = callmethod(call536,"getContext", [1], string535);
              onSelf = true;
              var call538 = callmethod(this, "backingContext:=", [1], call537);
              lineNumber = 219
              lineNumber = 215
              lineNumber = 219
              var string539 = new GraceString("2d");
              onSelf = true;
              var call540 = callmethod(this, "canvas", [0]);
              var call541 = callmethod(call540,"getContext", [1], string539);
              onSelf = true;
              var call542 = callmethod(this, "mctx:=", [1], call541);
              lineNumber = 222
              lineNumber = 215
              lineNumber = 221
              var bool543 = new GraceBoolean(true)
              onSelf = true;
              var call544 = callmethod(this, "isInit:=", [1], bool543);
              lineNumber = 222
              var string545 = new GraceString("INITIALIZATION FINISHED");
              var call546 = Grace_print(string545);
              return call546
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func425.paramCounts = [
            0,
          ];
          func425.variableArities = [
            false,
          ];
          obj423.methods["init"] = func425;
          func425.definitionLine = 171;
          func425.definitionModule = "kitty";
          var func547 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func547.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 231
              var string548 = new GraceString("WORLD STARTED");
              var call549 = Grace_print(string548);
              lineNumber = 233
              lineNumber = 215
              lineNumber = 232
              var bool550 = new GraceBoolean(true)
              onSelf = true;
              var call551 = callmethod(this, "isRunning:=", [1], bool550);
              lineNumber = 233
              var block552 = Grace_allocObject();
              block552.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block552.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block552.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block552.methods["match"] = GraceBlock_match;
              block552.methods["prefix?"] = GraceBlock_lift;
              block552.receiver = this;
              block552.className = 'block<kitty:233>';
              block552.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call553 = callmethod(this, "isRunning", [0]);
                return call553;
              };
              lineNumber = 236
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
              block554.className = 'block<kitty:236>';
              block554.real = function(
              ) {
                sourceObject = this;
                lineNumber = 234
                onSelf = true;
                var call555 = callmethod(this, "update", [0]);
                return call555;
              };
              lineNumber = 233
              var call556 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block552, new GraceNum(10), block554);
              lineNumber = 236
              var string557 = new GraceString("WORLD STOPPED");
              var call558 = Grace_print(string557);
              return call558
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func547.paramCounts = [
            0,
          ];
          func547.variableArities = [
            false,
          ];
          obj423.methods["start"] = func547;
          func547.definitionLine = 230;
          func547.definitionModule = "kitty";
          var func559 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func559.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 242
              var string560 = new GraceString("UPDATING WORLD...");
              var call561 = Grace_print(string560);
              lineNumber = 246
              lineNumber = 215
              lineNumber = 245
              onSelf = true;
              var call562 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call563 = callmethod(this, "mctx", [0]);
              var call564 = callmethod(call563,"fillStyle:=", [1], call562);
              lineNumber = 246
              onSelf = true;
              var call565 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call566 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call567 = callmethod(this, "mctx", [0]);
              var call568 = callmethod(call567,"fillRect", [4], new GraceNum(0), new GraceNum(0), call565, call566);
              lineNumber = 247
              onSelf = true;
              var call569 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call570 = callmethod(this, "mctx", [0]);
              var call571 = callmethod(call570,"drawImage", [3], call569, new GraceNum(0), new GraceNum(0));
              lineNumber = 248
              onSelf = true;
              var call572 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call574 = callmethod(this, "canvasWidth", [0]);
              var quotient576 = callmethod(call574, "/", [1], new GraceNum(2));
              onSelf = true;
              var call578 = callmethod(this, "canvasHeight", [0]);
              var quotient580 = callmethod(call578, "/", [1], new GraceNum(2));
              onSelf = true;
              var call581 = callmethod(this, "background", [0]);
              var call582 = callmethod(call581,"draw", [4], call572, quotient576, quotient580, new GraceNum(0));
              lineNumber = 251
              onSelf = true;
              var call583 = callmethod(this, "entities", [0]);
              lineNumber = 256
              var block584 = Grace_allocObject();
              block584.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block584.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block584.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block584.methods["match"] = GraceBlock_match;
              block584.methods["prefix?"] = GraceBlock_lift;
              block584.receiver = this;
              block584.className = 'block<kitty:256>';
              block584.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 252
                var call585 = callmethod(var_entity,"update", [0]);
                lineNumber = 253
                onSelf = true;
                var call586 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call588 = callmethod(this, "canvasWidth", [0]);
                var quotient590 = callmethod(call588, "/", [1], new GraceNum(2));
                onSelf = true;
                var call592 = callmethod(this, "canvasHeight", [0]);
                var quotient594 = callmethod(call592, "/", [1], new GraceNum(2));
                var call595 = callmethod(var_entity,"draw", [3], call586, quotient590, quotient594);
                return call595;
              };
              var call596 = callmethod(Grace_prelude,"for()do", [1, 1], call583, block584);
              lineNumber = 256
              var string597 = new GraceString("WORLD UPDATED");
              var call598 = Grace_print(string597);
              return call598
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
          obj423.methods["update"] = func559;
          func559.definitionLine = 240;
          func559.definitionModule = "kitty";
          var func599 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func599.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 260
              var string600 = new GraceString("WORLD STOPPING...");
              var call601 = Grace_print(string600);
              lineNumber = 262
              lineNumber = 252
              lineNumber = 261
              var bool602 = new GraceBoolean(false)
              onSelf = true;
              var call603 = callmethod(this, "isRunning:=", [1], bool602);
              lineNumber = 262
              var string604 = new GraceString("mousedown");
              onSelf = true;
              var call605 = callmethod(this, "canvas", [0]);
              var call606 = callmethod(call605,"removeEventListener", [2], string604, var_mouseDownListener);
              lineNumber = 263
              var string607 = new GraceString("keypress");
              onSelf = true;
              var call608 = callmethod(this, "document", [0]);
              var call609 = callmethod(call608,"removeEventListener", [2], string607, var_keyPressListener);
              lineNumber = 264
              var string610 = new GraceString("keyup");
              onSelf = true;
              var call611 = callmethod(this, "document", [0]);
              var call612 = callmethod(call611,"removeEventListener", [2], string610, var_keyUpListener);
              return call612
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func599.paramCounts = [
            0,
          ];
          func599.variableArities = [
            false,
          ];
          obj423.methods["stop"] = func599;
          func599.definitionLine = 259;
          func599.definitionModule = "kitty";
          var func613 = function(argcv) {
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func613.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isKeyDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 269
              lineNumber = 268
              onSelf = true;
              var call614 = callmethod(this, "currentKeyDown", [0]);
              var opresult617 = callmethod(var_key, "==", [1], call614);
              return opresult617
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func613.paramCounts = [
            1,
          ];
          func613.variableArities = [
            false,
          ];
          obj423.methods["isKeyDown"] = func613;
          func613.definitionLine = 267;
          func613.definitionModule = "kitty";
          var func618 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func618.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 272
              lineNumber = 252
              lineNumber = 272
              onSelf = true;
              var call619 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call620 = callmethod(this, "canvasHeight", [0]);
              var call621 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call622 = callmethod(call621, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call623 = callmethod(call622, "Image", [3], var_background__39__, call619, call620);
              onSelf = true;
              var call624 = callmethod(this, "background:=", [1], call623);
              return call624
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func618.paramCounts = [
            1,
          ];
          func618.variableArities = [
            false,
          ];
          obj423.methods["setBackground"] = func618;
          func618.definitionLine = 271;
          func618.definitionModule = "kitty";
          var func625 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func625.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 276
              onSelf = true;
              var call626 = callmethod(this, "entities", [0]);
              var call627 = callmethod(call626,"push", [1], var_e);
              return call627
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func625.paramTypes = [];
          func625.paramTypes.push([]);
          func625.paramCounts = [
            1,
          ];
          func625.variableArities = [
            false,
          ];
          obj423.methods["addEntity"] = func625;
          func625.definitionLine = 275;
          func625.definitionModule = "kitty";
          sourceObject = obj423;
          lineNumber = 145
          var string628 = new GraceString("CREATING NEW WORLD...");
          var call629 = Grace_print(string628);
          sourceObject = obj423;
          obj423.data["background"] = undefined;
          var reader_kitty_background_630 = function() {
            return this.data["background"];
          }
          obj423.methods["background"] = reader_kitty_background_630;
          obj423.data["background"] = undefined;
          var writer_kitty_background_630 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj423.methods["background:="] = writer_kitty_background_630;
          reader_kitty_background_630.confidential = true;
          writer_kitty_background_630.confidential = true;
          obj423.mutable = true;
          sourceObject = obj423;
          lineNumber = 148
          var string631 = new GraceString("black");
          obj423.data["backgroundColour"] = string631;
          var reader_kitty_backgroundColour_632 = function() {
            return this.data["backgroundColour"];
          }
          obj423.methods["backgroundColour"] = reader_kitty_backgroundColour_632;
          obj423.data["backgroundColour"] = string631;
          var writer_kitty_backgroundColour_632 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj423.methods["backgroundColour:="] = writer_kitty_backgroundColour_632;
          reader_kitty_backgroundColour_632.confidential = true;
          writer_kitty_backgroundColour_632.confidential = true;
          lineNumber = 150;
          moduleName = "kitty";
          lineNumber = 148
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string631)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj423.mutable = true;
          sourceObject = obj423;
          obj423.data["document"] = undefined;
          var reader_kitty_document_633 = function() {
            return this.data["document"];
          }
          obj423.methods["document"] = reader_kitty_document_633;
          obj423.data["document"] = undefined;
          var writer_kitty_document_633 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj423.methods["document:="] = writer_kitty_document_633;
          reader_kitty_document_633.confidential = true;
          writer_kitty_document_633.confidential = true;
          obj423.mutable = true;
          sourceObject = obj423;
          obj423.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_634 = function() {
            return this.data["backingCanvas"];
          }
          obj423.methods["backingCanvas"] = reader_kitty_backingCanvas_634;
          obj423.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_634 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj423.methods["backingCanvas:="] = writer_kitty_backingCanvas_634;
          reader_kitty_backingCanvas_634.confidential = true;
          writer_kitty_backingCanvas_634.confidential = true;
          obj423.mutable = true;
          sourceObject = obj423;
          obj423.data["backingContext"] = undefined;
          var reader_kitty_backingContext_635 = function() {
            return this.data["backingContext"];
          }
          obj423.methods["backingContext"] = reader_kitty_backingContext_635;
          obj423.data["backingContext"] = undefined;
          var writer_kitty_backingContext_635 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj423.methods["backingContext:="] = writer_kitty_backingContext_635;
          reader_kitty_backingContext_635.confidential = true;
          writer_kitty_backingContext_635.confidential = true;
          obj423.mutable = true;
          sourceObject = obj423;
          obj423.data["canvas"] = undefined;
          var reader_kitty_canvas_636 = function() {
            return this.data["canvas"];
          }
          obj423.methods["canvas"] = reader_kitty_canvas_636;
          obj423.data["canvas"] = undefined;
          var writer_kitty_canvas_636 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj423.methods["canvas:="] = writer_kitty_canvas_636;
          reader_kitty_canvas_636.confidential = true;
          writer_kitty_canvas_636.confidential = true;
          obj423.mutable = true;
          sourceObject = obj423;
          obj423.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_637 = function() {
            return this.data["canvasWidth"];
          }
          obj423.methods["canvasWidth"] = reader_kitty_canvasWidth_637;
          obj423.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_637 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj423.methods["canvasWidth:="] = writer_kitty_canvasWidth_637;
          reader_kitty_canvasWidth_637.confidential = true;
          writer_kitty_canvasWidth_637.confidential = true;
          obj423.mutable = true;
          sourceObject = obj423;
          obj423.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_638 = function() {
            return this.data["canvasHeight"];
          }
          obj423.methods["canvasHeight"] = reader_kitty_canvasHeight_638;
          obj423.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_638 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj423.methods["canvasHeight:="] = writer_kitty_canvasHeight_638;
          reader_kitty_canvasHeight_638.confidential = true;
          writer_kitty_canvasHeight_638.confidential = true;
          obj423.mutable = true;
          sourceObject = obj423;
          lineNumber = 159
          var call639 = callmethod(var_collections,"list", [0]);
          var call640 = callmethod(call639,"new", [0]);
          obj423.data["entities"] = call640;
          var reader_kitty_entities_641 = function() {
            return this.data["entities"];
          }
          obj423.methods["entities"] = reader_kitty_entities_641;
          obj423.data["entities"] = call640;
          var writer_kitty_entities_641 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj423.methods["entities:="] = writer_kitty_entities_641;
          reader_kitty_entities_641.confidential = true;
          writer_kitty_entities_641.confidential = true;
          lineNumber = 161;
          moduleName = "kitty";
          lineNumber = 159
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call640)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj423.mutable = true;
          sourceObject = obj423;
          lineNumber = 161
          var bool642 = new GraceBoolean(false)
          obj423.data["isInit"] = bool642;
          var reader_kitty_isInit_643 = function() {
            return this.data["isInit"];
          }
          obj423.methods["isInit"] = reader_kitty_isInit_643;
          obj423.data["isInit"] = bool642;
          var writer_kitty_isInit_643 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj423.methods["isInit:="] = writer_kitty_isInit_643;
          reader_kitty_isInit_643.confidential = true;
          writer_kitty_isInit_643.confidential = true;
          lineNumber = 162;
          moduleName = "kitty";
          lineNumber = 161
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool642)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj423.mutable = true;
          sourceObject = obj423;
          lineNumber = 162
          var bool644 = new GraceBoolean(false)
          obj423.data["isRunning"] = bool644;
          var reader_kitty_isRunning_645 = function() {
            return this.data["isRunning"];
          }
          obj423.methods["isRunning"] = reader_kitty_isRunning_645;
          obj423.data["isRunning"] = bool644;
          var writer_kitty_isRunning_645 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj423.methods["isRunning:="] = writer_kitty_isRunning_645;
          reader_kitty_isRunning_645.confidential = true;
          writer_kitty_isRunning_645.confidential = true;
          lineNumber = 164;
          moduleName = "kitty";
          lineNumber = 162
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool644)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj423.mutable = true;
          sourceObject = obj423;
          obj423.data["mctx"] = undefined;
          var reader_kitty_mctx_646 = function() {
            return this.data["mctx"];
          }
          obj423.methods["mctx"] = reader_kitty_mctx_646;
          obj423.data["mctx"] = undefined;
          var writer_kitty_mctx_646 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj423.methods["mctx:="] = writer_kitty_mctx_646;
          reader_kitty_mctx_646.confidential = true;
          writer_kitty_mctx_646.confidential = true;
          obj423.mutable = true;
          sourceObject = obj423;
          lineNumber = 168
          lineNumber = 166
          var call647 = callmethod(new GraceNum(1),"prefix-", [0]);
          obj423.data["currentKeyDown"] = call647;
          var reader_kitty_currentKeyDown_648 = function() {
            return this.data["currentKeyDown"];
          }
          obj423.methods["currentKeyDown"] = reader_kitty_currentKeyDown_648;
          obj423.data["currentKeyDown"] = call647;
          var writer_kitty_currentKeyDown_648 = function(argcv, o) {
            this.data["currentKeyDown"] = o;
          }
          obj423.methods["currentKeyDown:="] = writer_kitty_currentKeyDown_648;
          reader_kitty_currentKeyDown_648.confidential = true;
          writer_kitty_currentKeyDown_648.confidential = true;
          lineNumber = 168;
          moduleName = "kitty";
          lineNumber = 166
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call647)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'currentKeyDown' to be of type Unknown"))
          obj423.mutable = true;
          sourceObject = obj423;
          lineNumber = 168
          onSelf = true;
          var call649 = callmethod(this, "init", [0]);
          sourceObject = obj423;
          sourceObject = obj423;
          sourceObject = obj423;
          sourceObject = obj423;
          sourceObject = obj423;
          sourceObject = obj423;
          sourceObject = obj423;
          sourceObject = obj423;
          lineNumber = 279
          var string650 = new GraceString("WORLD CREATED");
          var call651 = Grace_print(string650);
          superDepth = origSuperDepth;
        }
        obj_init_423.apply(obj423, []);
        return obj423
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
    obj420.methods["new"] = func422;
    func422.definitionLine = 143;
    func422.definitionModule = "kitty";
    var func652 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj653 = Grace_allocObject();
        obj653.definitionModule = "kitty";
        obj653.definitionLine = 143;
        var inho653 = inheritingObject;
        while (inho653.superobj) inho653 = inho653.superobj;
        inho653.superobj = obj653;
        obj653.data = inheritingObject.data;
        obj653.outer = this;
        var reader_kitty_outer_654 = function() {
          return this.outer;
        }
        obj653.methods["outer"] = reader_kitty_outer_654;
        function obj_init_653() {
          var origSuperDepth = superDepth;
          superDepth = obj653;
          obj653.annotations = [];
          var func655 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func655.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 173
              var string656 = new GraceString("INITIALIZING WORLD...");
              var call657 = Grace_print(string656);
              lineNumber = 179
              var if658 = var_done;
              lineNumber = 175
              onSelf = true;
              var call659 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call659)) {
                lineNumber = 177
                lineNumber = 176
                var bool660 = new GraceBoolean(false)
                return bool660
              }
              lineNumber = 180
              lineNumber = 159
              lineNumber = 179
              var call661 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call662 = callmethod(this, "document:=", [1], call661);
              lineNumber = 180
              lineNumber = 179
              lineNumber = 180
              var string663 = new GraceString("standard-canvas");
              onSelf = true;
              var call664 = callmethod(this, "document", [0]);
              var call665 = callmethod(call664,"getElementById", [1], string663);
              onSelf = true;
              var call666 = callmethod(this, "canvas:=", [1], call665);
              lineNumber = 182
              lineNumber = 179
              lineNumber = 181
              onSelf = true;
              var call667 = callmethod(this, "canvas", [0]);
              var call668 = callmethod(call667,"width", [0]);
              onSelf = true;
              var call669 = callmethod(this, "canvasWidth:=", [1], call668);
              lineNumber = 185
              lineNumber = 181
              lineNumber = 182
              onSelf = true;
              var call670 = callmethod(this, "canvas", [0]);
              var call671 = callmethod(call670,"height", [0]);
              onSelf = true;
              var call672 = callmethod(this, "canvasHeight:=", [1], call671);
              lineNumber = 197
              var block673 = Grace_allocObject();
              block673.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block673.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block673.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block673.methods["match"] = GraceBlock_match;
              block673.methods["prefix?"] = GraceBlock_lift;
              block673.receiver = this;
              block673.className = 'block<kitty:197>';
              block673.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 188
                lineNumber = 187
                onSelf = true;
                var call674 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call676 = callmethod(this, "canvas", [0]);
                var call677 = callmethod(call676,"offsetWidth", [0]);
                onSelf = true;
                var call679 = callmethod(this, "canvas", [0]);
                var call680 = callmethod(call679,"offsetLeft", [0]);
                var call682 = callmethod(var_ev,"clientX", [0]);
                var diff684 = callmethod(call682, "-", [1], call680);
                var quotient686 = callmethod(diff684, "/", [1], call677);
                var prod688 = callmethod(quotient686, "*", [1], call674);
                var var_x = prod688;
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
                var call689 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call691 = callmethod(this, "canvas", [0]);
                var call692 = callmethod(call691,"offsetHeight", [0]);
                onSelf = true;
                var call694 = callmethod(this, "canvas", [0]);
                var call695 = callmethod(call694,"offsetTop", [0]);
                var call697 = callmethod(var_ev,"clientY", [0]);
                var diff699 = callmethod(call697, "-", [1], call695);
                var quotient701 = callmethod(diff699, "/", [1], call692);
                var prod703 = callmethod(quotient701, "*", [1], call689);
                var var_y = prod703;
                lineNumber = 190;
                moduleName = "kitty";
                lineNumber = 188
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 190
                var string704 = new GraceString("MOUSEDOWN");
                var call705 = Grace_print(string704);
                lineNumber = 196
                var if706 = var_done;
                lineNumber = 192
                var opresult709 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call712 = callmethod(this, "canvasWidth", [0]);
                var diff714 = callmethod(call712, "-", [1], new GraceNum(20));
                var opresult717 = callmethod(var_x, ">", [1], diff714);
                var opresult719 = callmethod(opresult717, "&&", [1], opresult709);
                if (Grace_isTrue(opresult719)) {
                  lineNumber = 193
                  var call720 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 194
                  onSelf = true;
                  var call721 = callmethod(this, "stop", [0]);
                  if706 = call721;
                }
                return if706;
              };
              var_mouseDownListener = block673;
              lineNumber = 197
              var string722 = new GraceString("mousedown");
              onSelf = true;
              var call723 = callmethod(this, "canvas", [0]);
              var call724 = callmethod(call723,"addEventListener", [2], string722, var_mouseDownListener);
              lineNumber = 207
              var block725 = Grace_allocObject();
              block725.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block725.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block725.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block725.methods["match"] = GraceBlock_match;
              block725.methods["prefix?"] = GraceBlock_lift;
              block725.receiver = this;
              block725.className = 'block<kitty:207>';
              block725.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 201
                var string726 = new GraceString("");
                var call728 = callmethod(var_ev,"keyCode", [0]);
                var string730 = new GraceString("KEYDOWN: ");
                var opresult732 = callmethod(string730, "++", [1], call728);
                var opresult734 = callmethod(opresult732, "++", [1], string726);
                var call735 = Grace_print(opresult734);
                lineNumber = 205
                var if736 = var_done;
                lineNumber = 202
                var call738 = callmethod(var_ev,"keyCode", [0]);
                var opresult740 = callmethod(call738, "==", [1], new GraceNum(81));
                if (Grace_isTrue(opresult740)) {
                  lineNumber = 203
                  onSelf = true;
                  var call741 = callmethod(this, "stop", [0]);
                  if736 = call741;
                }
                lineNumber = 206
                lineNumber = 202
                lineNumber = 205
                var call742 = callmethod(var_ev,"keyCode", [0]);
                onSelf = true;
                var call743 = callmethod(this, "currentKeyDown:=", [1], call742);
                return call743;
              };
              var_keyPressListener = block725;
              lineNumber = 207
              var string744 = new GraceString("keypress");
              onSelf = true;
              var call745 = callmethod(this, "document", [0]);
              var call746 = callmethod(call745,"addEventListener", [2], string744, var_keyPressListener);
              lineNumber = 213
              var block747 = Grace_allocObject();
              block747.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block747.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block747.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block747.methods["match"] = GraceBlock_match;
              block747.methods["prefix?"] = GraceBlock_lift;
              block747.receiver = this;
              block747.className = 'block<kitty:213>';
              block747.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 210
                var string748 = new GraceString("KEYUP");
                var call749 = Grace_print(string748);
                lineNumber = 212
                lineNumber = 205
                lineNumber = 212
                lineNumber = 211
                var call750 = callmethod(new GraceNum(1),"prefix-", [0]);
                onSelf = true;
                var call751 = callmethod(this, "currentKeyDown:=", [1], call750);
                return call751;
              };
              var_keyUpListener = block747;
              lineNumber = 213
              var string752 = new GraceString("keyup");
              onSelf = true;
              var call753 = callmethod(this, "document", [0]);
              var call754 = callmethod(call753,"addEventListener", [2], string752, var_keyUpListener);
              lineNumber = 215
              lineNumber = 205
              lineNumber = 215
              var string755 = new GraceString("canvas");
              var call756 = callmethod(var_dom,"document", [0]);
              var call757 = callmethod(call756,"createElement", [1], string755);
              onSelf = true;
              var call758 = callmethod(this, "backingCanvas:=", [1], call757);
              lineNumber = 217
              lineNumber = 215
              lineNumber = 216
              onSelf = true;
              var call759 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call760 = callmethod(this, "backingCanvas", [0]);
              var call761 = callmethod(call760,"height:=", [1], call759);
              lineNumber = 218
              lineNumber = 215
              lineNumber = 217
              onSelf = true;
              var call762 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call763 = callmethod(this, "backingCanvas", [0]);
              var call764 = callmethod(call763,"width:=", [1], call762);
              lineNumber = 218
              lineNumber = 215
              lineNumber = 218
              var string765 = new GraceString("2d");
              onSelf = true;
              var call766 = callmethod(this, "backingCanvas", [0]);
              var call767 = callmethod(call766,"getContext", [1], string765);
              onSelf = true;
              var call768 = callmethod(this, "backingContext:=", [1], call767);
              lineNumber = 219
              lineNumber = 215
              lineNumber = 219
              var string769 = new GraceString("2d");
              onSelf = true;
              var call770 = callmethod(this, "canvas", [0]);
              var call771 = callmethod(call770,"getContext", [1], string769);
              onSelf = true;
              var call772 = callmethod(this, "mctx:=", [1], call771);
              lineNumber = 222
              lineNumber = 215
              lineNumber = 221
              var bool773 = new GraceBoolean(true)
              onSelf = true;
              var call774 = callmethod(this, "isInit:=", [1], bool773);
              lineNumber = 222
              var string775 = new GraceString("INITIALIZATION FINISHED");
              var call776 = Grace_print(string775);
              return call776
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func655.paramCounts = [
            0,
          ];
          func655.variableArities = [
            false,
          ];
          obj653.methods["init"] = func655;
          func655.definitionLine = 171;
          func655.definitionModule = "kitty";
          var func777 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func777.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 231
              var string778 = new GraceString("WORLD STARTED");
              var call779 = Grace_print(string778);
              lineNumber = 233
              lineNumber = 215
              lineNumber = 232
              var bool780 = new GraceBoolean(true)
              onSelf = true;
              var call781 = callmethod(this, "isRunning:=", [1], bool780);
              lineNumber = 233
              var block782 = Grace_allocObject();
              block782.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block782.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block782.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block782.methods["match"] = GraceBlock_match;
              block782.methods["prefix?"] = GraceBlock_lift;
              block782.receiver = this;
              block782.className = 'block<kitty:233>';
              block782.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call783 = callmethod(this, "isRunning", [0]);
                return call783;
              };
              lineNumber = 236
              var block784 = Grace_allocObject();
              block784.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block784.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block784.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block784.methods["match"] = GraceBlock_match;
              block784.methods["prefix?"] = GraceBlock_lift;
              block784.receiver = this;
              block784.className = 'block<kitty:236>';
              block784.real = function(
              ) {
                sourceObject = this;
                lineNumber = 234
                onSelf = true;
                var call785 = callmethod(this, "update", [0]);
                return call785;
              };
              lineNumber = 233
              var call786 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block782, new GraceNum(10), block784);
              lineNumber = 236
              var string787 = new GraceString("WORLD STOPPED");
              var call788 = Grace_print(string787);
              return call788
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func777.paramCounts = [
            0,
          ];
          func777.variableArities = [
            false,
          ];
          obj653.methods["start"] = func777;
          func777.definitionLine = 230;
          func777.definitionModule = "kitty";
          var func789 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func789.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 242
              var string790 = new GraceString("UPDATING WORLD...");
              var call791 = Grace_print(string790);
              lineNumber = 246
              lineNumber = 215
              lineNumber = 245
              onSelf = true;
              var call792 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call793 = callmethod(this, "mctx", [0]);
              var call794 = callmethod(call793,"fillStyle:=", [1], call792);
              lineNumber = 246
              onSelf = true;
              var call795 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call796 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call797 = callmethod(this, "mctx", [0]);
              var call798 = callmethod(call797,"fillRect", [4], new GraceNum(0), new GraceNum(0), call795, call796);
              lineNumber = 247
              onSelf = true;
              var call799 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call800 = callmethod(this, "mctx", [0]);
              var call801 = callmethod(call800,"drawImage", [3], call799, new GraceNum(0), new GraceNum(0));
              lineNumber = 248
              onSelf = true;
              var call802 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call804 = callmethod(this, "canvasWidth", [0]);
              var quotient806 = callmethod(call804, "/", [1], new GraceNum(2));
              onSelf = true;
              var call808 = callmethod(this, "canvasHeight", [0]);
              var quotient810 = callmethod(call808, "/", [1], new GraceNum(2));
              onSelf = true;
              var call811 = callmethod(this, "background", [0]);
              var call812 = callmethod(call811,"draw", [4], call802, quotient806, quotient810, new GraceNum(0));
              lineNumber = 251
              onSelf = true;
              var call813 = callmethod(this, "entities", [0]);
              lineNumber = 256
              var block814 = Grace_allocObject();
              block814.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block814.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block814.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block814.methods["match"] = GraceBlock_match;
              block814.methods["prefix?"] = GraceBlock_lift;
              block814.receiver = this;
              block814.className = 'block<kitty:256>';
              block814.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 252
                var call815 = callmethod(var_entity,"update", [0]);
                lineNumber = 253
                onSelf = true;
                var call816 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call818 = callmethod(this, "canvasWidth", [0]);
                var quotient820 = callmethod(call818, "/", [1], new GraceNum(2));
                onSelf = true;
                var call822 = callmethod(this, "canvasHeight", [0]);
                var quotient824 = callmethod(call822, "/", [1], new GraceNum(2));
                var call825 = callmethod(var_entity,"draw", [3], call816, quotient820, quotient824);
                return call825;
              };
              var call826 = callmethod(Grace_prelude,"for()do", [1, 1], call813, block814);
              lineNumber = 256
              var string827 = new GraceString("WORLD UPDATED");
              var call828 = Grace_print(string827);
              return call828
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func789.paramCounts = [
            0,
          ];
          func789.variableArities = [
            false,
          ];
          obj653.methods["update"] = func789;
          func789.definitionLine = 240;
          func789.definitionModule = "kitty";
          var func829 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func829.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 260
              var string830 = new GraceString("WORLD STOPPING...");
              var call831 = Grace_print(string830);
              lineNumber = 262
              lineNumber = 252
              lineNumber = 261
              var bool832 = new GraceBoolean(false)
              onSelf = true;
              var call833 = callmethod(this, "isRunning:=", [1], bool832);
              lineNumber = 262
              var string834 = new GraceString("mousedown");
              onSelf = true;
              var call835 = callmethod(this, "canvas", [0]);
              var call836 = callmethod(call835,"removeEventListener", [2], string834, var_mouseDownListener);
              lineNumber = 263
              var string837 = new GraceString("keypress");
              onSelf = true;
              var call838 = callmethod(this, "document", [0]);
              var call839 = callmethod(call838,"removeEventListener", [2], string837, var_keyPressListener);
              lineNumber = 264
              var string840 = new GraceString("keyup");
              onSelf = true;
              var call841 = callmethod(this, "document", [0]);
              var call842 = callmethod(call841,"removeEventListener", [2], string840, var_keyUpListener);
              return call842
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func829.paramCounts = [
            0,
          ];
          func829.variableArities = [
            false,
          ];
          obj653.methods["stop"] = func829;
          func829.definitionLine = 259;
          func829.definitionModule = "kitty";
          var func843 = function(argcv) {
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func843.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isKeyDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 269
              lineNumber = 268
              onSelf = true;
              var call844 = callmethod(this, "currentKeyDown", [0]);
              var opresult847 = callmethod(var_key, "==", [1], call844);
              return opresult847
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func843.paramCounts = [
            1,
          ];
          func843.variableArities = [
            false,
          ];
          obj653.methods["isKeyDown"] = func843;
          func843.definitionLine = 267;
          func843.definitionModule = "kitty";
          var func848 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func848.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 272
              lineNumber = 252
              lineNumber = 272
              onSelf = true;
              var call849 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call850 = callmethod(this, "canvasHeight", [0]);
              var call851 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call852 = callmethod(call851, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call853 = callmethod(call852, "Image", [3], var_background__39__, call849, call850);
              onSelf = true;
              var call854 = callmethod(this, "background:=", [1], call853);
              return call854
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func848.paramCounts = [
            1,
          ];
          func848.variableArities = [
            false,
          ];
          obj653.methods["setBackground"] = func848;
          func848.definitionLine = 271;
          func848.definitionModule = "kitty";
          var func855 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func855.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 276
              onSelf = true;
              var call856 = callmethod(this, "entities", [0]);
              var call857 = callmethod(call856,"push", [1], var_e);
              return call857
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func855.paramTypes = [];
          func855.paramTypes.push([]);
          func855.paramCounts = [
            1,
          ];
          func855.variableArities = [
            false,
          ];
          obj653.methods["addEntity"] = func855;
          func855.definitionLine = 275;
          func855.definitionModule = "kitty";
          sourceObject = obj653;
          lineNumber = 145
          var string858 = new GraceString("CREATING NEW WORLD...");
          var call859 = Grace_print(string858);
          sourceObject = obj653;
          obj653.data["background"] = undefined;
          var reader_kitty_background_860 = function() {
            return this.data["background"];
          }
          obj653.methods["background"] = reader_kitty_background_860;
          obj653.data["background"] = undefined;
          var writer_kitty_background_860 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj653.methods["background:="] = writer_kitty_background_860;
          reader_kitty_background_860.confidential = true;
          writer_kitty_background_860.confidential = true;
          obj653.mutable = true;
          sourceObject = obj653;
          lineNumber = 148
          var string861 = new GraceString("black");
          obj653.data["backgroundColour"] = string861;
          var reader_kitty_backgroundColour_862 = function() {
            return this.data["backgroundColour"];
          }
          obj653.methods["backgroundColour"] = reader_kitty_backgroundColour_862;
          obj653.data["backgroundColour"] = string861;
          var writer_kitty_backgroundColour_862 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj653.methods["backgroundColour:="] = writer_kitty_backgroundColour_862;
          reader_kitty_backgroundColour_862.confidential = true;
          writer_kitty_backgroundColour_862.confidential = true;
          lineNumber = 150;
          moduleName = "kitty";
          lineNumber = 148
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string861)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj653.mutable = true;
          sourceObject = obj653;
          obj653.data["document"] = undefined;
          var reader_kitty_document_863 = function() {
            return this.data["document"];
          }
          obj653.methods["document"] = reader_kitty_document_863;
          obj653.data["document"] = undefined;
          var writer_kitty_document_863 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj653.methods["document:="] = writer_kitty_document_863;
          reader_kitty_document_863.confidential = true;
          writer_kitty_document_863.confidential = true;
          obj653.mutable = true;
          sourceObject = obj653;
          obj653.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_864 = function() {
            return this.data["backingCanvas"];
          }
          obj653.methods["backingCanvas"] = reader_kitty_backingCanvas_864;
          obj653.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_864 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj653.methods["backingCanvas:="] = writer_kitty_backingCanvas_864;
          reader_kitty_backingCanvas_864.confidential = true;
          writer_kitty_backingCanvas_864.confidential = true;
          obj653.mutable = true;
          sourceObject = obj653;
          obj653.data["backingContext"] = undefined;
          var reader_kitty_backingContext_865 = function() {
            return this.data["backingContext"];
          }
          obj653.methods["backingContext"] = reader_kitty_backingContext_865;
          obj653.data["backingContext"] = undefined;
          var writer_kitty_backingContext_865 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj653.methods["backingContext:="] = writer_kitty_backingContext_865;
          reader_kitty_backingContext_865.confidential = true;
          writer_kitty_backingContext_865.confidential = true;
          obj653.mutable = true;
          sourceObject = obj653;
          obj653.data["canvas"] = undefined;
          var reader_kitty_canvas_866 = function() {
            return this.data["canvas"];
          }
          obj653.methods["canvas"] = reader_kitty_canvas_866;
          obj653.data["canvas"] = undefined;
          var writer_kitty_canvas_866 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj653.methods["canvas:="] = writer_kitty_canvas_866;
          reader_kitty_canvas_866.confidential = true;
          writer_kitty_canvas_866.confidential = true;
          obj653.mutable = true;
          sourceObject = obj653;
          obj653.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_867 = function() {
            return this.data["canvasWidth"];
          }
          obj653.methods["canvasWidth"] = reader_kitty_canvasWidth_867;
          obj653.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_867 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj653.methods["canvasWidth:="] = writer_kitty_canvasWidth_867;
          reader_kitty_canvasWidth_867.confidential = true;
          writer_kitty_canvasWidth_867.confidential = true;
          obj653.mutable = true;
          sourceObject = obj653;
          obj653.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_868 = function() {
            return this.data["canvasHeight"];
          }
          obj653.methods["canvasHeight"] = reader_kitty_canvasHeight_868;
          obj653.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_868 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj653.methods["canvasHeight:="] = writer_kitty_canvasHeight_868;
          reader_kitty_canvasHeight_868.confidential = true;
          writer_kitty_canvasHeight_868.confidential = true;
          obj653.mutable = true;
          sourceObject = obj653;
          lineNumber = 159
          var call869 = callmethod(var_collections,"list", [0]);
          var call870 = callmethod(call869,"new", [0]);
          obj653.data["entities"] = call870;
          var reader_kitty_entities_871 = function() {
            return this.data["entities"];
          }
          obj653.methods["entities"] = reader_kitty_entities_871;
          obj653.data["entities"] = call870;
          var writer_kitty_entities_871 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj653.methods["entities:="] = writer_kitty_entities_871;
          reader_kitty_entities_871.confidential = true;
          writer_kitty_entities_871.confidential = true;
          lineNumber = 161;
          moduleName = "kitty";
          lineNumber = 159
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call870)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj653.mutable = true;
          sourceObject = obj653;
          lineNumber = 161
          var bool872 = new GraceBoolean(false)
          obj653.data["isInit"] = bool872;
          var reader_kitty_isInit_873 = function() {
            return this.data["isInit"];
          }
          obj653.methods["isInit"] = reader_kitty_isInit_873;
          obj653.data["isInit"] = bool872;
          var writer_kitty_isInit_873 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj653.methods["isInit:="] = writer_kitty_isInit_873;
          reader_kitty_isInit_873.confidential = true;
          writer_kitty_isInit_873.confidential = true;
          lineNumber = 162;
          moduleName = "kitty";
          lineNumber = 161
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool872)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj653.mutable = true;
          sourceObject = obj653;
          lineNumber = 162
          var bool874 = new GraceBoolean(false)
          obj653.data["isRunning"] = bool874;
          var reader_kitty_isRunning_875 = function() {
            return this.data["isRunning"];
          }
          obj653.methods["isRunning"] = reader_kitty_isRunning_875;
          obj653.data["isRunning"] = bool874;
          var writer_kitty_isRunning_875 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj653.methods["isRunning:="] = writer_kitty_isRunning_875;
          reader_kitty_isRunning_875.confidential = true;
          writer_kitty_isRunning_875.confidential = true;
          lineNumber = 164;
          moduleName = "kitty";
          lineNumber = 162
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool874)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj653.mutable = true;
          sourceObject = obj653;
          obj653.data["mctx"] = undefined;
          var reader_kitty_mctx_876 = function() {
            return this.data["mctx"];
          }
          obj653.methods["mctx"] = reader_kitty_mctx_876;
          obj653.data["mctx"] = undefined;
          var writer_kitty_mctx_876 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj653.methods["mctx:="] = writer_kitty_mctx_876;
          reader_kitty_mctx_876.confidential = true;
          writer_kitty_mctx_876.confidential = true;
          obj653.mutable = true;
          sourceObject = obj653;
          lineNumber = 168
          lineNumber = 166
          var call877 = callmethod(new GraceNum(1),"prefix-", [0]);
          obj653.data["currentKeyDown"] = call877;
          var reader_kitty_currentKeyDown_878 = function() {
            return this.data["currentKeyDown"];
          }
          obj653.methods["currentKeyDown"] = reader_kitty_currentKeyDown_878;
          obj653.data["currentKeyDown"] = call877;
          var writer_kitty_currentKeyDown_878 = function(argcv, o) {
            this.data["currentKeyDown"] = o;
          }
          obj653.methods["currentKeyDown:="] = writer_kitty_currentKeyDown_878;
          reader_kitty_currentKeyDown_878.confidential = true;
          writer_kitty_currentKeyDown_878.confidential = true;
          lineNumber = 168;
          moduleName = "kitty";
          lineNumber = 166
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call877)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'currentKeyDown' to be of type Unknown"))
          obj653.mutable = true;
          sourceObject = obj653;
          lineNumber = 168
          onSelf = true;
          var call879 = callmethod(this, "init", [0]);
          sourceObject = obj653;
          sourceObject = obj653;
          sourceObject = obj653;
          sourceObject = obj653;
          sourceObject = obj653;
          sourceObject = obj653;
          sourceObject = obj653;
          sourceObject = obj653;
          lineNumber = 279
          var string880 = new GraceString("WORLD CREATED");
          var call881 = Grace_print(string880);
          superDepth = origSuperDepth;
        }
        obj_init_653.apply(inheritingObject, []);
        return obj653
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj420.methods["new()object"] = func652;
    var func882 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 143
        var string883 = new GraceString("class KittyWorld");
        return string883
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func882.paramCounts = [
    ];
    func882.variableArities = [
    ];
    obj420.methods["asDebugString"] = func882;
    func882.definitionLine = 143;
    func882.definitionModule = "kitty";
    sourceObject = obj420;
    sourceObject = obj420;
    superDepth = origSuperDepth;
  }
  obj_init_420.apply(obj420, []);
  var var_KittyWorld = obj420;
  lineNumber = 282
  lineNumber = 293
  lineNumber = 309
  lineNumber = 313
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
'dom',
'StandardPrelude',
];
if (gctCache)
  gctCache['kitty'] = "path:\n kitty\nclasses:\n KittyImage\n KittyEntity\n KittyWorld\nfresh:Entity:\n awake\n posX\n posY\n draw\n moveDown\n rotation\n setAction\n moveRight\n setImage\n getRotation\n moveLeft\n update\n setLocation\n start\n action:=\n getX\n getY\n image:=\n moveUp\n action\n posX:=\n posY:=\n image\n onDestroy\n rotation:=\nconfidential:\nconstructors-of:KittyWorld:\n new\nfresh:Image:\n imgTag\n height\n draw\n height:=\n width\n width:=\nconstructors-of:KittyImage:\n new\nmodules:\n StandardPrelude\n mgcollections\nmethods-of:KittyEntity.new:\n awake\n posX\n posY\n draw\n moveDown\n rotation\n setAction\n moveRight\n setImage\n getRotation\n moveLeft\n update\n setLocation\n start\n action:=\n getX\n getY\n image:=\n moveUp\n action\n posX:=\n posY:=\n image\n rotation:=\n onDestroy\nfresh:World:\n setBackground\n backingContext\n canvasWidth:=\n document:=\n mctx\n document\n backingCanvas:=\n update\n backingCanvas\n backgroundColour:=\n canvas:=\n backgroundColour\n background:=\n currentKeyDown\n addEntity\n isRunning:=\n isInit\n mctx:=\n entities:=\n entities\n isRunning\n backingContext:=\n canvasHeight:=\n start\n init\n canvasHeight\n currentKeyDown:=\n canvas\n isKeyDown\n background\n canvasWidth\n stop\n isInit:=\nfresh-methods:\n Image\n Entity\n World\npublic:\n m_world\n m_world:=\n worldSet\n worldSet:=\n keyPressListener\n keyPressListener:=\n keyUpListener\n keyUpListener:=\n mouseDownListener\n mouseDownListener:=\n KittyImage\n Image\n KittyEntity\n Entity\n KittyWorld\n World\n start\n stop\n setWorld\nmethods-of:KittyImage.new:\n imgTag\n height\n draw\n height:=\n width\n width:=\nmethods-of:KittyWorld.new:\n setBackground\n backgroundColour\n canvasWidth:=\n document:=\n mctx\n document\n backingCanvas:=\n update\n backingCanvas\n backingContext:=\n canvas:=\n backingContext\n background:=\n currentKeyDown\n addEntity\n init\n isInit\n mctx:=\n canvasWidth\n entities\n isRunning\n backgroundColour:=\n canvasHeight:=\n start\n isRunning:=\n canvasHeight\n currentKeyDown:=\n canvas\n isKeyDown\n background\n entities:=\n stop\n isInit:=\nconstructors-of:KittyEntity:\n new\n";
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
    "var keyPressListener",
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
    "        keyPressListener := { ev->",
    "            print \"KEYDOWN: {ev.keyCode}\"",
    "            if (ev.keyCode == 81) then {",
    "                stop",
    "            }",
    "            currentKeyDown := ev.keyCode",
    "        }",
    "        document.addEventListener(\"keypress\", keyPressListener)",
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
    "        document.removeEventListener(\"keypress\", keyPressListener)",
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
    "// XXX: No longer used",
    "// TODO: Remove this",
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
    "// XXX: Not sure how to call this",
    "method stop {",
    "    print \"STOPPING...\"",
    "}",
    "",
    "method setWorld(world': KittyWorld) {",
    "    m_world := world'",
    "    worldSet := true",
    "}",
    "",
    "// TEST SECTION //",
    "",
    "// def foo = World.new(100, 100)",
    "// def bar = Entity.new(10, 10)",
    "// foo.addEntity(bar)",
  ];
}
