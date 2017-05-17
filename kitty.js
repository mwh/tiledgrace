function gracecode_kitty () {
  this.definitionModule = "kitty";
  this.definitionLine = 0;
  lineNumber = 39
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
      lineNumber = 40
      var obj1 = Grace_allocObject();
      obj1.definitionModule = "kitty";
      obj1.definitionLine = 40;
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
        lineNumber = 41
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
  func0.definitionLine = 39;
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
      obj5.definitionLine = 40;
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
  lineNumber = 135
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
      lineNumber = 136
      var obj9 = Grace_allocObject();
      obj9.definitionModule = "kitty";
      obj9.definitionLine = 136;
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
        lineNumber = 137
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
  func8.definitionLine = 135;
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
      obj13.definitionLine = 136;
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
  lineNumber = 276
  var func16 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func16.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (World)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 277
      var obj17 = Grace_allocObject();
      obj17.definitionModule = "kitty";
      obj17.definitionLine = 277;
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
        lineNumber = 278
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
  func16.definitionLine = 276;
  func16.definitionModule = "kitty";
  var func20 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj21 = Grace_allocObject();
      obj21.definitionModule = "kitty";
      obj21.definitionLine = 277;
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
  lineNumber = 287
  var func24 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func24.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 289
      var string25 = new GraceString("CHECKING...");
      var call26 = Grace_print(string25);
      lineNumber = 296
      var if27 = var_done;
      lineNumber = 291
      var call28 = callmethod(var_worldSet,"prefix!", [0]);
      if (Grace_isTrue(call28)) {
        lineNumber = 292
        var string29 = new GraceString("NO WORLD!!");
        var call30 = Grace_print(string29);
        lineNumber = 294
        return var_done
      }
      lineNumber = 296
      var string31 = new GraceString("STARTING...");
      var call32 = Grace_print(string31);
      lineNumber = 299
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
  func24.definitionLine = 287;
  func24.definitionModule = "kitty";
  lineNumber = 303
  var func34 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func34.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 304
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
  func34.definitionLine = 303;
  func34.definitionModule = "kitty";
  lineNumber = 307
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
      lineNumber = 309
      lineNumber = 308
      var_m__95__world = var_world__39__;
      lineNumber = 310
      lineNumber = 309
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
  func37.definitionLine = 307;
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
  lineNumber = 299
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
  func40.definitionLine = 299;
  func40.definitionModule = "kitty";
  lineNumber = 299
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
  func41.definitionLine = 299;
  func41.definitionModule = "kitty";
  lineNumber = 11
  lineNumber = 8
  var bool42 = new GraceBoolean(false)
  var var_worldSet = bool42;
  lineNumber = 299
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
  func43.definitionLine = 299;
  func43.definitionModule = "kitty";
  lineNumber = 299
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
  func44.definitionLine = 299;
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
  var var_keyDownListener;
  lineNumber = 299
  var func45 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func45.paramCounts[0])
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
  func45.paramCounts = [
    0,
  ];
  func45.variableArities = [
    false,
  ];
  this.methods["keyDownListener"] = func45;
  func45.definitionLine = 299;
  func45.definitionModule = "kitty";
  lineNumber = 299
  var func46 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func46.paramCounts[0])
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
  func46.paramCounts = [
    1,
  ];
  func46.variableArities = [
    false,
  ];
  this.methods["keyDownListener:="] = func46;
  func46.definitionLine = 299;
  func46.definitionModule = "kitty";
  lineNumber = 17
  var var_mouseDownListener;
  lineNumber = 299
  var func47 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func47.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseDownListener)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 12
      return var_mouseDownListener
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
  this.methods["mouseDownListener"] = func47;
  func47.definitionLine = 299;
  func47.definitionModule = "kitty";
  lineNumber = 299
  var func48 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func48.paramCounts[0])
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
  func48.paramCounts = [
    1,
  ];
  func48.variableArities = [
    false,
  ];
  this.methods["mouseDownListener:="] = func48;
  func48.definitionLine = 299;
  func48.definitionModule = "kitty";
  lineNumber = 17
  var func49 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func49.paramCounts[0])
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
  func49.paramCounts = [
    0,
  ];
  func49.variableArities = [
    false,
  ];
  this.methods["KittyImage"] = func49;
  func49.definitionLine = 17;
  func49.definitionModule = "kitty";
  var obj50 = Grace_allocObject();
  obj50.definitionModule = "kitty";
  obj50.definitionLine = 17;
  obj50.outer = this;
  var reader_kitty_outer_51 = function() {
    return this.outer;
  }
  obj50.methods["outer"] = reader_kitty_outer_51;
  function obj_init_50() {
    var origSuperDepth = superDepth;
    superDepth = obj50;
    obj50.annotations = [];
    var func52 = function(argcv) {
      var curarg = 1;
      var var_url__39__ = arguments[curarg];
      curarg++;
      var var_height__39__ = arguments[curarg];
      curarg++;
      var var_width__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func52.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj53 = Grace_allocObject();
        obj53.definitionModule = "kitty";
        obj53.definitionLine = 17;
        obj53.outer = this;
        var reader_kitty_outer_54 = function() {
          return this.outer;
        }
        obj53.methods["outer"] = reader_kitty_outer_54;
        function obj_init_53() {
          var origSuperDepth = superDepth;
          superDepth = obj53;
          obj53.annotations = [];
          var func55 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            var var_rot = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func55.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 27
              var string56 = new GraceString(")...");
              onSelf = true;
              var call58 = callmethod(this, "height", [0]);
              var string60 = new GraceString(", ");
              onSelf = true;
              var call62 = callmethod(this, "width", [0]);
              var string64 = new GraceString(" (");
              onSelf = true;
              var call66 = callmethod(this, "imgTag", [0]);
              var call67 = callmethod(call66,"src", [0]);
              var string69 = new GraceString("DRAWING IMAGE: ");
              var opresult71 = callmethod(string69, "++", [1], call67);
              var opresult73 = callmethod(opresult71, "++", [1], string64);
              var opresult75 = callmethod(opresult73, "++", [1], call62);
              var opresult77 = callmethod(opresult75, "++", [1], string60);
              var opresult79 = callmethod(opresult77, "++", [1], call58);
              var opresult81 = callmethod(opresult79, "++", [1], string56);
              var call82 = Grace_print(opresult81);
              lineNumber = 28
              var call83 = callmethod(var_ctx,"save", [0]);
              lineNumber = 29
              var call84 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 30
              var prod88 = callmethod(var_rot, "*", [1], new GraceNum(180));
              var quotient90 = callmethod(prod88, "/", [1], new GraceNum(3.14));
              var call91 = callmethod(var_ctx,"rotate", [1], quotient90);
              lineNumber = 31
              onSelf = true;
              var call92 = callmethod(this, "imgTag", [0]);
              onSelf = true;
              var call94 = callmethod(this, "width", [0]);
              var call95 = callmethod(call94,"prefix-", [0]);
              var quotient97 = callmethod(call95, "/", [1], new GraceNum(2));
              onSelf = true;
              var call99 = callmethod(this, "height", [0]);
              var call100 = callmethod(call99,"prefix-", [0]);
              var quotient102 = callmethod(call100, "/", [1], new GraceNum(2));
              onSelf = true;
              var call103 = callmethod(this, "width", [0]);
              onSelf = true;
              var call104 = callmethod(this, "height", [0]);
              var call105 = callmethod(var_ctx,"drawImage", [5], call92, quotient97, quotient102, call103, call104);
              lineNumber = 32
              var call106 = callmethod(var_ctx,"restore", [0]);
              lineNumber = 33
              var string107 = new GraceString(" DRAWN");
              onSelf = true;
              var call109 = callmethod(this, "imgTag", [0]);
              var call110 = callmethod(call109,"src", [0]);
              var string112 = new GraceString("IMAGE: ");
              var opresult114 = callmethod(string112, "++", [1], call110);
              var opresult116 = callmethod(opresult114, "++", [1], string107);
              var call117 = Grace_print(opresult116);
              return call117
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func55.paramCounts = [
            4,
          ];
          func55.variableArities = [
            false,
          ];
          obj53.methods["draw"] = func55;
          func55.definitionLine = 26;
          func55.definitionModule = "kitty";
          sourceObject = obj53;
          lineNumber = 19
          var string118 = new GraceString("...");
          var string121 = new GraceString("CREATING NEW IMAGE: ");
          var opresult123 = callmethod(string121, "++", [1], var_url__39__);
          var opresult125 = callmethod(opresult123, "++", [1], string118);
          var call126 = Grace_print(opresult125);
          sourceObject = obj53;
          lineNumber = 20
          var string127 = new GraceString("img");
          var call128 = callmethod(var_dom,"document", [0]);
          var call129 = callmethod(call128,"createElement", [1], string127);
          obj53.data["imgTag"] = call129;
          var reader_kitty_imgTag_130 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_130.def = true;
          reader_kitty_imgTag_130.confidential = true;
          obj53.methods["imgTag"] = reader_kitty_imgTag_130;
          lineNumber = 20;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call129)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj53;
          lineNumber = 23
          lineNumber = 20
          lineNumber = 21
          onSelf = true;
          var call131 = callmethod(this, "imgTag", [0]);
          var call132 = callmethod(call131,"src:=", [1], var_url__39__);
          sourceObject = obj53;
          lineNumber = 23
          obj53.data["height"] = var_height__39__;
          var reader_kitty_height_133 = function() {
            return this.data["height"];
          }
          obj53.methods["height"] = reader_kitty_height_133;
          obj53.data["height"] = var_height__39__;
          var writer_kitty_height_133 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj53.methods["height:="] = writer_kitty_height_133;
          reader_kitty_height_133.confidential = true;
          writer_kitty_height_133.confidential = true;
          lineNumber = 24;
          moduleName = "kitty";
          lineNumber = 23
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj53.mutable = true;
          sourceObject = obj53;
          lineNumber = 24
          obj53.data["width"] = var_width__39__;
          var reader_kitty_width_134 = function() {
            return this.data["width"];
          }
          obj53.methods["width"] = reader_kitty_width_134;
          obj53.data["width"] = var_width__39__;
          var writer_kitty_width_134 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj53.methods["width:="] = writer_kitty_width_134;
          reader_kitty_width_134.confidential = true;
          writer_kitty_width_134.confidential = true;
          lineNumber = 26;
          moduleName = "kitty";
          lineNumber = 24
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj53.mutable = true;
          sourceObject = obj53;
          sourceObject = obj53;
          lineNumber = 36
          var string135 = new GraceString("");
          var string138 = new GraceString("CREATED NEW IMAGE: ");
          var opresult140 = callmethod(string138, "++", [1], var_url__39__);
          var opresult142 = callmethod(opresult140, "++", [1], string135);
          var call143 = Grace_print(opresult142);
          superDepth = origSuperDepth;
        }
        obj_init_53.apply(obj53, []);
        return obj53
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func52.paramCounts = [
      3,
    ];
    func52.variableArities = [
      false,
    ];
    obj50.methods["new"] = func52;
    func52.definitionLine = 17;
    func52.definitionModule = "kitty";
    var func144 = function(argcv) {
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
        var obj145 = Grace_allocObject();
        obj145.definitionModule = "kitty";
        obj145.definitionLine = 17;
        var inho145 = inheritingObject;
        while (inho145.superobj) inho145 = inho145.superobj;
        inho145.superobj = obj145;
        obj145.data = inheritingObject.data;
        obj145.outer = this;
        var reader_kitty_outer_146 = function() {
          return this.outer;
        }
        obj145.methods["outer"] = reader_kitty_outer_146;
        function obj_init_145() {
          var origSuperDepth = superDepth;
          superDepth = obj145;
          obj145.annotations = [];
          var func147 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            var var_rot = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func147.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 27
              var string148 = new GraceString(")...");
              onSelf = true;
              var call150 = callmethod(this, "height", [0]);
              var string152 = new GraceString(", ");
              onSelf = true;
              var call154 = callmethod(this, "width", [0]);
              var string156 = new GraceString(" (");
              onSelf = true;
              var call158 = callmethod(this, "imgTag", [0]);
              var call159 = callmethod(call158,"src", [0]);
              var string161 = new GraceString("DRAWING IMAGE: ");
              var opresult163 = callmethod(string161, "++", [1], call159);
              var opresult165 = callmethod(opresult163, "++", [1], string156);
              var opresult167 = callmethod(opresult165, "++", [1], call154);
              var opresult169 = callmethod(opresult167, "++", [1], string152);
              var opresult171 = callmethod(opresult169, "++", [1], call150);
              var opresult173 = callmethod(opresult171, "++", [1], string148);
              var call174 = Grace_print(opresult173);
              lineNumber = 28
              var call175 = callmethod(var_ctx,"save", [0]);
              lineNumber = 29
              var call176 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 30
              var prod180 = callmethod(var_rot, "*", [1], new GraceNum(180));
              var quotient182 = callmethod(prod180, "/", [1], new GraceNum(3.14));
              var call183 = callmethod(var_ctx,"rotate", [1], quotient182);
              lineNumber = 31
              onSelf = true;
              var call184 = callmethod(this, "imgTag", [0]);
              onSelf = true;
              var call186 = callmethod(this, "width", [0]);
              var call187 = callmethod(call186,"prefix-", [0]);
              var quotient189 = callmethod(call187, "/", [1], new GraceNum(2));
              onSelf = true;
              var call191 = callmethod(this, "height", [0]);
              var call192 = callmethod(call191,"prefix-", [0]);
              var quotient194 = callmethod(call192, "/", [1], new GraceNum(2));
              onSelf = true;
              var call195 = callmethod(this, "width", [0]);
              onSelf = true;
              var call196 = callmethod(this, "height", [0]);
              var call197 = callmethod(var_ctx,"drawImage", [5], call184, quotient189, quotient194, call195, call196);
              lineNumber = 32
              var call198 = callmethod(var_ctx,"restore", [0]);
              lineNumber = 33
              var string199 = new GraceString(" DRAWN");
              onSelf = true;
              var call201 = callmethod(this, "imgTag", [0]);
              var call202 = callmethod(call201,"src", [0]);
              var string204 = new GraceString("IMAGE: ");
              var opresult206 = callmethod(string204, "++", [1], call202);
              var opresult208 = callmethod(opresult206, "++", [1], string199);
              var call209 = Grace_print(opresult208);
              return call209
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func147.paramCounts = [
            4,
          ];
          func147.variableArities = [
            false,
          ];
          obj145.methods["draw"] = func147;
          func147.definitionLine = 26;
          func147.definitionModule = "kitty";
          sourceObject = obj145;
          lineNumber = 19
          var string210 = new GraceString("...");
          var string213 = new GraceString("CREATING NEW IMAGE: ");
          var opresult215 = callmethod(string213, "++", [1], var_url__39__);
          var opresult217 = callmethod(opresult215, "++", [1], string210);
          var call218 = Grace_print(opresult217);
          sourceObject = obj145;
          lineNumber = 20
          var string219 = new GraceString("img");
          var call220 = callmethod(var_dom,"document", [0]);
          var call221 = callmethod(call220,"createElement", [1], string219);
          obj145.data["imgTag"] = call221;
          var reader_kitty_imgTag_222 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_222.def = true;
          reader_kitty_imgTag_222.confidential = true;
          obj145.methods["imgTag"] = reader_kitty_imgTag_222;
          lineNumber = 20;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call221)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj145;
          lineNumber = 23
          lineNumber = 20
          lineNumber = 21
          onSelf = true;
          var call223 = callmethod(this, "imgTag", [0]);
          var call224 = callmethod(call223,"src:=", [1], var_url__39__);
          sourceObject = obj145;
          lineNumber = 23
          obj145.data["height"] = var_height__39__;
          var reader_kitty_height_225 = function() {
            return this.data["height"];
          }
          obj145.methods["height"] = reader_kitty_height_225;
          obj145.data["height"] = var_height__39__;
          var writer_kitty_height_225 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj145.methods["height:="] = writer_kitty_height_225;
          reader_kitty_height_225.confidential = true;
          writer_kitty_height_225.confidential = true;
          lineNumber = 24;
          moduleName = "kitty";
          lineNumber = 23
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj145.mutable = true;
          sourceObject = obj145;
          lineNumber = 24
          obj145.data["width"] = var_width__39__;
          var reader_kitty_width_226 = function() {
            return this.data["width"];
          }
          obj145.methods["width"] = reader_kitty_width_226;
          obj145.data["width"] = var_width__39__;
          var writer_kitty_width_226 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj145.methods["width:="] = writer_kitty_width_226;
          reader_kitty_width_226.confidential = true;
          writer_kitty_width_226.confidential = true;
          lineNumber = 26;
          moduleName = "kitty";
          lineNumber = 24
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj145.mutable = true;
          sourceObject = obj145;
          sourceObject = obj145;
          lineNumber = 36
          var string227 = new GraceString("");
          var string230 = new GraceString("CREATED NEW IMAGE: ");
          var opresult232 = callmethod(string230, "++", [1], var_url__39__);
          var opresult234 = callmethod(opresult232, "++", [1], string227);
          var call235 = Grace_print(opresult234);
          superDepth = origSuperDepth;
        }
        obj_init_145.apply(inheritingObject, []);
        return obj145
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj50.methods["new()object"] = func144;
    var func236 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 17
        var string237 = new GraceString("class KittyImage");
        return string237
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func236.paramCounts = [
    ];
    func236.variableArities = [
    ];
    obj50.methods["asDebugString"] = func236;
    func236.definitionLine = 17;
    func236.definitionModule = "kitty";
    sourceObject = obj50;
    sourceObject = obj50;
    superDepth = origSuperDepth;
  }
  obj_init_50.apply(obj50, []);
  var var_KittyImage = obj50;
  lineNumber = 39
  lineNumber = 46
  var func238 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func238.paramCounts[0])
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
  func238.paramCounts = [
    0,
  ];
  func238.variableArities = [
    false,
  ];
  this.methods["KittyEntity"] = func238;
  func238.definitionLine = 46;
  func238.definitionModule = "kitty";
  var obj239 = Grace_allocObject();
  obj239.definitionModule = "kitty";
  obj239.definitionLine = 46;
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
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func241.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj242 = Grace_allocObject();
        obj242.definitionModule = "kitty";
        obj242.definitionLine = 46;
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
          obj242.methods["awake"] = func244;
          func244.definitionLine = 65;
          func244.definitionModule = "kitty";
          var func245 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func245.paramCounts[0])
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
          func245.paramCounts = [
            0,
          ];
          func245.variableArities = [
            false,
          ];
          obj242.methods["start"] = func245;
          func245.definitionLine = 70;
          func245.definitionModule = "kitty";
          var func246 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func246.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 76
              onSelf = true;
              var call247 = callmethod(this, "action", [0]);
              var call248 = callmethod(call247,"update", [0]);
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
            0,
          ];
          func246.variableArities = [
            false,
          ];
          obj242.methods["update"] = func246;
          func246.definitionLine = 75;
          func246.definitionModule = "kitty";
          var func249 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func249.paramCounts[0])
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
          func249.paramCounts = [
            0,
          ];
          func249.variableArities = [
            false,
          ];
          obj242.methods["onDestroy"] = func249;
          func249.definitionLine = 80;
          func249.definitionModule = "kitty";
          var func250 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func250.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveUp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 86
              lineNumber = 76
              lineNumber = 86
              lineNumber = 85
              onSelf = true;
              var call252 = callmethod(this, "posY", [0]);
              var diff254 = callmethod(call252, "-", [1], var_dy);
              onSelf = true;
              var call255 = callmethod(this, "posY:=", [1], diff254);
              return call255
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func250.paramCounts = [
            1,
          ];
          func250.variableArities = [
            false,
          ];
          obj242.methods["moveUp"] = func250;
          func250.definitionLine = 84;
          func250.definitionModule = "kitty";
          var func256 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func256.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 90
              lineNumber = 76
              lineNumber = 90
              lineNumber = 89
              onSelf = true;
              var call258 = callmethod(this, "posY", [0]);
              var opresult260 = callmethod(call258, "+", [1], var_dy);
              onSelf = true;
              var call261 = callmethod(this, "posY:=", [1], opresult260);
              return call261
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func256.paramCounts = [
            1,
          ];
          func256.variableArities = [
            false,
          ];
          obj242.methods["moveDown"] = func256;
          func256.definitionLine = 88;
          func256.definitionModule = "kitty";
          var func262 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func262.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveLeft)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 94
              lineNumber = 76
              lineNumber = 94
              lineNumber = 93
              onSelf = true;
              var call264 = callmethod(this, "posX", [0]);
              var diff266 = callmethod(call264, "-", [1], var_dx);
              onSelf = true;
              var call267 = callmethod(this, "posX:=", [1], diff266);
              return call267
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func262.paramCounts = [
            1,
          ];
          func262.variableArities = [
            false,
          ];
          obj242.methods["moveLeft"] = func262;
          func262.definitionLine = 92;
          func262.definitionModule = "kitty";
          var func268 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func268.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveRight)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 98
              lineNumber = 76
              lineNumber = 98
              lineNumber = 97
              onSelf = true;
              var call270 = callmethod(this, "posX", [0]);
              var opresult272 = callmethod(call270, "+", [1], var_dx);
              onSelf = true;
              var call273 = callmethod(this, "posX:=", [1], opresult272);
              return call273
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func268.paramCounts = [
            1,
          ];
          func268.variableArities = [
            false,
          ];
          obj242.methods["moveRight"] = func268;
          func268.definitionLine = 96;
          func268.definitionModule = "kitty";
          var func274 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func274.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 101
              var call275 = callmethod(var_ctx,"save", [0]);
              lineNumber = 102
              onSelf = true;
              var call276 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call277 = callmethod(this, "posY", [0]);
              var call278 = callmethod(var_ctx,"translate", [2], call276, call277);
              lineNumber = 103
              onSelf = true;
              var call279 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call280 = callmethod(this, "image", [0]);
              var call281 = callmethod(call280,"draw", [4], var_ctx, var_dx, var_dy, call279);
              lineNumber = 104
              var call282 = callmethod(var_ctx,"restore", [0]);
              return call282
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func274.paramCounts = [
            3,
          ];
          func274.variableArities = [
            false,
          ];
          obj242.methods["draw"] = func274;
          func274.definitionLine = 100;
          func274.definitionModule = "kitty";
          var func283 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func283.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 108
              lineNumber = 104
              lineNumber = 108
              var call284 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call285 = callmethod(call284, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call286 = callmethod(call285, "Image", [3], var_image__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call287 = callmethod(this, "image:=", [1], call286);
              return call287
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func283.paramCounts = [
            1,
          ];
          func283.variableArities = [
            false,
          ];
          obj242.methods["setImage"] = func283;
          func283.definitionLine = 107;
          func283.definitionModule = "kitty";
          var func288 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func288.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 113
              lineNumber = 108
              lineNumber = 112
              onSelf = true;
              var call289 = callmethod(this, "action:=", [1], var_action__39__);
              return call289
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
          obj242.methods["setAction"] = func288;
          func288.definitionLine = 111;
          func288.definitionModule = "kitty";
          var func290 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func290.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 117
              lineNumber = 108
              lineNumber = 116
              onSelf = true;
              var call291 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 118
              lineNumber = 108
              lineNumber = 117
              onSelf = true;
              var call292 = callmethod(this, "posY:=", [1], var_y);
              return call292
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func290.paramCounts = [
            2,
          ];
          func290.variableArities = [
            false,
          ];
          obj242.methods["setLocation"] = func290;
          func290.definitionLine = 115;
          func290.definitionModule = "kitty";
          var func293 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func293.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 122
              lineNumber = 121
              onSelf = true;
              var call294 = callmethod(this, "posX", [0]);
              return call294
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func293.paramCounts = [
            0,
          ];
          func293.variableArities = [
            false,
          ];
          obj242.methods["getX"] = func293;
          func293.definitionLine = 120;
          func293.definitionModule = "kitty";
          var func295 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func295.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 126
              lineNumber = 125
              onSelf = true;
              var call296 = callmethod(this, "posY", [0]);
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
          obj242.methods["getY"] = func295;
          func295.definitionLine = 124;
          func295.definitionModule = "kitty";
          var func297 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func297.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 130
              lineNumber = 129
              onSelf = true;
              var call298 = callmethod(this, "rotation", [0]);
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
          obj242.methods["getRotation"] = func297;
          func297.definitionLine = 128;
          func297.definitionModule = "kitty";
          sourceObject = obj242;
          lineNumber = 48
          var string299 = new GraceString(")...");
          var string302 = new GraceString(", ");
          var string305 = new GraceString("CREATING ENTITY AT (");
          var opresult307 = callmethod(string305, "++", [1], var_x__39__);
          var opresult309 = callmethod(opresult307, "++", [1], string302);
          var opresult311 = callmethod(opresult309, "++", [1], var_y__39__);
          var opresult313 = callmethod(opresult311, "++", [1], string299);
          var call314 = Grace_print(opresult313);
          sourceObject = obj242;
          lineNumber = 50
          obj242.data["posX"] = var_x__39__;
          var reader_kitty_posX_315 = function() {
            return this.data["posX"];
          }
          obj242.methods["posX"] = reader_kitty_posX_315;
          obj242.data["posX"] = var_x__39__;
          var writer_kitty_posX_315 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj242.methods["posX:="] = writer_kitty_posX_315;
          reader_kitty_posX_315.confidential = true;
          writer_kitty_posX_315.confidential = true;
          lineNumber = 51;
          moduleName = "kitty";
          lineNumber = 50
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj242.mutable = true;
          sourceObject = obj242;
          lineNumber = 51
          obj242.data["posY"] = var_y__39__;
          var reader_kitty_posY_316 = function() {
            return this.data["posY"];
          }
          obj242.methods["posY"] = reader_kitty_posY_316;
          obj242.data["posY"] = var_y__39__;
          var writer_kitty_posY_316 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj242.methods["posY:="] = writer_kitty_posY_316;
          reader_kitty_posY_316.confidential = true;
          writer_kitty_posY_316.confidential = true;
          lineNumber = 52;
          moduleName = "kitty";
          lineNumber = 51
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj242.mutable = true;
          sourceObject = obj242;
          lineNumber = 52
          obj242.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_317 = function() {
            return this.data["rotation"];
          }
          obj242.methods["rotation"] = reader_kitty_rotation_317;
          obj242.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_317 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj242.methods["rotation:="] = writer_kitty_rotation_317;
          reader_kitty_rotation_317.confidential = true;
          writer_kitty_rotation_317.confidential = true;
          lineNumber = 54;
          moduleName = "kitty";
          lineNumber = 52
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj242.mutable = true;
          sourceObject = obj242;
          lineNumber = 54
          var obj318 = Grace_allocObject();
          obj318.definitionModule = "kitty";
          obj318.definitionLine = 54;
          obj318.outer = this;
          var reader_kitty_outer_319 = function() {
            return this.outer;
          }
          obj318.methods["outer"] = reader_kitty_outer_319;
          function obj_init_318() {
            var origSuperDepth = superDepth;
            superDepth = obj318;
            obj318.annotations = [];
            var func320 = function(argcv) {
              var curarg = 1;
              if (argcv[0] !=  func320.paramCounts[0])
                callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
              var returnTarget = invocationCount;
              invocationCount++;
              moduleName = "kitty";
              try {
                lineNumber = 56
                var string321 = new GraceString("UPDATING ENTITY...");
                var call322 = Grace_print(string321);
                return call322
              } catch(e) {
                if ((e.exctype == 'return') && (e.target == returnTarget)) {
                  return e.returnvalue;
                } else {
                  throw e;
                }
              }
            }
            func320.paramCounts = [
              0,
            ];
            func320.variableArities = [
              false,
            ];
            obj318.methods["update"] = func320;
            func320.definitionLine = 55;
            func320.definitionModule = "kitty";
            sourceObject = obj318;
            superDepth = origSuperDepth;
          }
          obj_init_318.apply(obj318, []);
          obj242.data["action"] = obj318;
          var reader_kitty_action_323 = function() {
            return this.data["action"];
          }
          obj242.methods["action"] = reader_kitty_action_323;
          obj242.data["action"] = obj318;
          var writer_kitty_action_323 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj242.methods["action:="] = writer_kitty_action_323;
          reader_kitty_action_323.confidential = true;
          writer_kitty_action_323.confidential = true;
          lineNumber = 54;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], obj318)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj242.mutable = true;
          sourceObject = obj242;
          obj242.data["image"] = undefined;
          var reader_kitty_image_324 = function() {
            return this.data["image"];
          }
          obj242.methods["image"] = reader_kitty_image_324;
          obj242.data["image"] = undefined;
          var writer_kitty_image_324 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj242.methods["image:="] = writer_kitty_image_324;
          reader_kitty_image_324.confidential = true;
          writer_kitty_image_324.confidential = true;
          obj242.mutable = true;
          sourceObject = obj242;
          lineNumber = 62
          onSelf = true;
          var call325 = callmethod(this, "awake", [0]);
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
          lineNumber = 132
          var string326 = new GraceString("ENTITY CREATED");
          var call327 = Grace_print(string326);
          superDepth = origSuperDepth;
        }
        obj_init_242.apply(obj242, []);
        return obj242
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func241.paramCounts = [
      2,
    ];
    func241.variableArities = [
      false,
    ];
    obj239.methods["new"] = func241;
    func241.definitionLine = 46;
    func241.definitionModule = "kitty";
    var func328 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj329 = Grace_allocObject();
        obj329.definitionModule = "kitty";
        obj329.definitionLine = 46;
        var inho329 = inheritingObject;
        while (inho329.superobj) inho329 = inho329.superobj;
        inho329.superobj = obj329;
        obj329.data = inheritingObject.data;
        obj329.outer = this;
        var reader_kitty_outer_330 = function() {
          return this.outer;
        }
        obj329.methods["outer"] = reader_kitty_outer_330;
        function obj_init_329() {
          var origSuperDepth = superDepth;
          superDepth = obj329;
          obj329.annotations = [];
          var func331 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func331.paramCounts[0])
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
          func331.paramCounts = [
            0,
          ];
          func331.variableArities = [
            false,
          ];
          obj329.methods["awake"] = func331;
          func331.definitionLine = 65;
          func331.definitionModule = "kitty";
          var func332 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func332.paramCounts[0])
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
          func332.paramCounts = [
            0,
          ];
          func332.variableArities = [
            false,
          ];
          obj329.methods["start"] = func332;
          func332.definitionLine = 70;
          func332.definitionModule = "kitty";
          var func333 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func333.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 76
              onSelf = true;
              var call334 = callmethod(this, "action", [0]);
              var call335 = callmethod(call334,"update", [0]);
              return call335
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
          obj329.methods["update"] = func333;
          func333.definitionLine = 75;
          func333.definitionModule = "kitty";
          var func336 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func336.paramCounts[0])
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
          func336.paramCounts = [
            0,
          ];
          func336.variableArities = [
            false,
          ];
          obj329.methods["onDestroy"] = func336;
          func336.definitionLine = 80;
          func336.definitionModule = "kitty";
          var func337 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func337.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveUp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 86
              lineNumber = 76
              lineNumber = 86
              lineNumber = 85
              onSelf = true;
              var call339 = callmethod(this, "posY", [0]);
              var diff341 = callmethod(call339, "-", [1], var_dy);
              onSelf = true;
              var call342 = callmethod(this, "posY:=", [1], diff341);
              return call342
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func337.paramCounts = [
            1,
          ];
          func337.variableArities = [
            false,
          ];
          obj329.methods["moveUp"] = func337;
          func337.definitionLine = 84;
          func337.definitionModule = "kitty";
          var func343 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func343.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 90
              lineNumber = 76
              lineNumber = 90
              lineNumber = 89
              onSelf = true;
              var call345 = callmethod(this, "posY", [0]);
              var opresult347 = callmethod(call345, "+", [1], var_dy);
              onSelf = true;
              var call348 = callmethod(this, "posY:=", [1], opresult347);
              return call348
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func343.paramCounts = [
            1,
          ];
          func343.variableArities = [
            false,
          ];
          obj329.methods["moveDown"] = func343;
          func343.definitionLine = 88;
          func343.definitionModule = "kitty";
          var func349 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func349.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveLeft)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 94
              lineNumber = 76
              lineNumber = 94
              lineNumber = 93
              onSelf = true;
              var call351 = callmethod(this, "posX", [0]);
              var diff353 = callmethod(call351, "-", [1], var_dx);
              onSelf = true;
              var call354 = callmethod(this, "posX:=", [1], diff353);
              return call354
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func349.paramCounts = [
            1,
          ];
          func349.variableArities = [
            false,
          ];
          obj329.methods["moveLeft"] = func349;
          func349.definitionLine = 92;
          func349.definitionModule = "kitty";
          var func355 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func355.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveRight)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 98
              lineNumber = 76
              lineNumber = 98
              lineNumber = 97
              onSelf = true;
              var call357 = callmethod(this, "posX", [0]);
              var opresult359 = callmethod(call357, "+", [1], var_dx);
              onSelf = true;
              var call360 = callmethod(this, "posX:=", [1], opresult359);
              return call360
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func355.paramCounts = [
            1,
          ];
          func355.variableArities = [
            false,
          ];
          obj329.methods["moveRight"] = func355;
          func355.definitionLine = 96;
          func355.definitionModule = "kitty";
          var func361 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func361.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 101
              var call362 = callmethod(var_ctx,"save", [0]);
              lineNumber = 102
              onSelf = true;
              var call363 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call364 = callmethod(this, "posY", [0]);
              var call365 = callmethod(var_ctx,"translate", [2], call363, call364);
              lineNumber = 103
              onSelf = true;
              var call366 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call367 = callmethod(this, "image", [0]);
              var call368 = callmethod(call367,"draw", [4], var_ctx, var_dx, var_dy, call366);
              lineNumber = 104
              var call369 = callmethod(var_ctx,"restore", [0]);
              return call369
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func361.paramCounts = [
            3,
          ];
          func361.variableArities = [
            false,
          ];
          obj329.methods["draw"] = func361;
          func361.definitionLine = 100;
          func361.definitionModule = "kitty";
          var func370 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func370.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 108
              lineNumber = 104
              lineNumber = 108
              var call371 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call372 = callmethod(call371, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call373 = callmethod(call372, "Image", [3], var_image__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call374 = callmethod(this, "image:=", [1], call373);
              return call374
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func370.paramCounts = [
            1,
          ];
          func370.variableArities = [
            false,
          ];
          obj329.methods["setImage"] = func370;
          func370.definitionLine = 107;
          func370.definitionModule = "kitty";
          var func375 = function(argcv) {
            var curarg = 1;
            var var_action__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func375.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setAction)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 113
              lineNumber = 108
              lineNumber = 112
              onSelf = true;
              var call376 = callmethod(this, "action:=", [1], var_action__39__);
              return call376
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func375.paramCounts = [
            1,
          ];
          func375.variableArities = [
            false,
          ];
          obj329.methods["setAction"] = func375;
          func375.definitionLine = 111;
          func375.definitionModule = "kitty";
          var func377 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func377.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 117
              lineNumber = 108
              lineNumber = 116
              onSelf = true;
              var call378 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 118
              lineNumber = 108
              lineNumber = 117
              onSelf = true;
              var call379 = callmethod(this, "posY:=", [1], var_y);
              return call379
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func377.paramCounts = [
            2,
          ];
          func377.variableArities = [
            false,
          ];
          obj329.methods["setLocation"] = func377;
          func377.definitionLine = 115;
          func377.definitionModule = "kitty";
          var func380 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func380.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 122
              lineNumber = 121
              onSelf = true;
              var call381 = callmethod(this, "posX", [0]);
              return call381
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func380.paramCounts = [
            0,
          ];
          func380.variableArities = [
            false,
          ];
          obj329.methods["getX"] = func380;
          func380.definitionLine = 120;
          func380.definitionModule = "kitty";
          var func382 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func382.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 126
              lineNumber = 125
              onSelf = true;
              var call383 = callmethod(this, "posY", [0]);
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
          obj329.methods["getY"] = func382;
          func382.definitionLine = 124;
          func382.definitionModule = "kitty";
          var func384 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func384.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 130
              lineNumber = 129
              onSelf = true;
              var call385 = callmethod(this, "rotation", [0]);
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
          obj329.methods["getRotation"] = func384;
          func384.definitionLine = 128;
          func384.definitionModule = "kitty";
          sourceObject = obj329;
          lineNumber = 48
          var string386 = new GraceString(")...");
          var string389 = new GraceString(", ");
          var string392 = new GraceString("CREATING ENTITY AT (");
          var opresult394 = callmethod(string392, "++", [1], var_x__39__);
          var opresult396 = callmethod(opresult394, "++", [1], string389);
          var opresult398 = callmethod(opresult396, "++", [1], var_y__39__);
          var opresult400 = callmethod(opresult398, "++", [1], string386);
          var call401 = Grace_print(opresult400);
          sourceObject = obj329;
          lineNumber = 50
          obj329.data["posX"] = var_x__39__;
          var reader_kitty_posX_402 = function() {
            return this.data["posX"];
          }
          obj329.methods["posX"] = reader_kitty_posX_402;
          obj329.data["posX"] = var_x__39__;
          var writer_kitty_posX_402 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj329.methods["posX:="] = writer_kitty_posX_402;
          reader_kitty_posX_402.confidential = true;
          writer_kitty_posX_402.confidential = true;
          lineNumber = 51;
          moduleName = "kitty";
          lineNumber = 50
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj329.mutable = true;
          sourceObject = obj329;
          lineNumber = 51
          obj329.data["posY"] = var_y__39__;
          var reader_kitty_posY_403 = function() {
            return this.data["posY"];
          }
          obj329.methods["posY"] = reader_kitty_posY_403;
          obj329.data["posY"] = var_y__39__;
          var writer_kitty_posY_403 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj329.methods["posY:="] = writer_kitty_posY_403;
          reader_kitty_posY_403.confidential = true;
          writer_kitty_posY_403.confidential = true;
          lineNumber = 52;
          moduleName = "kitty";
          lineNumber = 51
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj329.mutable = true;
          sourceObject = obj329;
          lineNumber = 52
          obj329.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_404 = function() {
            return this.data["rotation"];
          }
          obj329.methods["rotation"] = reader_kitty_rotation_404;
          obj329.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_404 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj329.methods["rotation:="] = writer_kitty_rotation_404;
          reader_kitty_rotation_404.confidential = true;
          writer_kitty_rotation_404.confidential = true;
          lineNumber = 54;
          moduleName = "kitty";
          lineNumber = 52
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj329.mutable = true;
          sourceObject = obj329;
          lineNumber = 54
          var obj405 = Grace_allocObject();
          obj405.definitionModule = "kitty";
          obj405.definitionLine = 54;
          obj405.outer = this;
          var reader_kitty_outer_406 = function() {
            return this.outer;
          }
          obj405.methods["outer"] = reader_kitty_outer_406;
          function obj_init_405() {
            var origSuperDepth = superDepth;
            superDepth = obj405;
            obj405.annotations = [];
            var func407 = function(argcv) {
              var curarg = 1;
              if (argcv[0] !=  func407.paramCounts[0])
                callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
              var returnTarget = invocationCount;
              invocationCount++;
              moduleName = "kitty";
              try {
                lineNumber = 56
                var string408 = new GraceString("UPDATING ENTITY...");
                var call409 = Grace_print(string408);
                return call409
              } catch(e) {
                if ((e.exctype == 'return') && (e.target == returnTarget)) {
                  return e.returnvalue;
                } else {
                  throw e;
                }
              }
            }
            func407.paramCounts = [
              0,
            ];
            func407.variableArities = [
              false,
            ];
            obj405.methods["update"] = func407;
            func407.definitionLine = 55;
            func407.definitionModule = "kitty";
            sourceObject = obj405;
            superDepth = origSuperDepth;
          }
          obj_init_405.apply(obj405, []);
          obj329.data["action"] = obj405;
          var reader_kitty_action_410 = function() {
            return this.data["action"];
          }
          obj329.methods["action"] = reader_kitty_action_410;
          obj329.data["action"] = obj405;
          var writer_kitty_action_410 = function(argcv, o) {
            this.data["action"] = o;
          }
          obj329.methods["action:="] = writer_kitty_action_410;
          reader_kitty_action_410.confidential = true;
          writer_kitty_action_410.confidential = true;
          lineNumber = 54;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], obj405)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'action' to be of type Unknown"))
          obj329.mutable = true;
          sourceObject = obj329;
          obj329.data["image"] = undefined;
          var reader_kitty_image_411 = function() {
            return this.data["image"];
          }
          obj329.methods["image"] = reader_kitty_image_411;
          obj329.data["image"] = undefined;
          var writer_kitty_image_411 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj329.methods["image:="] = writer_kitty_image_411;
          reader_kitty_image_411.confidential = true;
          writer_kitty_image_411.confidential = true;
          obj329.mutable = true;
          sourceObject = obj329;
          lineNumber = 62
          onSelf = true;
          var call412 = callmethod(this, "awake", [0]);
          sourceObject = obj329;
          sourceObject = obj329;
          sourceObject = obj329;
          sourceObject = obj329;
          sourceObject = obj329;
          sourceObject = obj329;
          sourceObject = obj329;
          sourceObject = obj329;
          sourceObject = obj329;
          sourceObject = obj329;
          sourceObject = obj329;
          sourceObject = obj329;
          sourceObject = obj329;
          sourceObject = obj329;
          sourceObject = obj329;
          sourceObject = obj329;
          lineNumber = 132
          var string413 = new GraceString("ENTITY CREATED");
          var call414 = Grace_print(string413);
          superDepth = origSuperDepth;
        }
        obj_init_329.apply(inheritingObject, []);
        return obj329
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj239.methods["new()object"] = func328;
    var func415 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 46
        var string416 = new GraceString("class KittyEntity");
        return string416
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func415.paramCounts = [
    ];
    func415.variableArities = [
    ];
    obj239.methods["asDebugString"] = func415;
    func415.definitionLine = 46;
    func415.definitionModule = "kitty";
    sourceObject = obj239;
    sourceObject = obj239;
    superDepth = origSuperDepth;
  }
  obj_init_239.apply(obj239, []);
  var var_KittyEntity = obj239;
  lineNumber = 135
  lineNumber = 142
  var func417 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func417.paramCounts[0])
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
  func417.paramCounts = [
    0,
  ];
  func417.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func417;
  func417.definitionLine = 142;
  func417.definitionModule = "kitty";
  var obj418 = Grace_allocObject();
  obj418.definitionModule = "kitty";
  obj418.definitionLine = 142;
  obj418.outer = this;
  var reader_kitty_outer_419 = function() {
    return this.outer;
  }
  obj418.methods["outer"] = reader_kitty_outer_419;
  function obj_init_418() {
    var origSuperDepth = superDepth;
    superDepth = obj418;
    obj418.annotations = [];
    var func420 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func420.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj421 = Grace_allocObject();
        obj421.definitionModule = "kitty";
        obj421.definitionLine = 142;
        obj421.outer = this;
        var reader_kitty_outer_422 = function() {
          return this.outer;
        }
        obj421.methods["outer"] = reader_kitty_outer_422;
        function obj_init_421() {
          var origSuperDepth = superDepth;
          superDepth = obj421;
          obj421.annotations = [];
          var func423 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func423.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 170
              var string424 = new GraceString("INITIALIZING WORLD...");
              var call425 = Grace_print(string424);
              lineNumber = 176
              var if426 = var_done;
              lineNumber = 172
              onSelf = true;
              var call427 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call427)) {
                lineNumber = 174
                lineNumber = 173
                var bool428 = new GraceBoolean(false)
                return bool428
              }
              lineNumber = 177
              lineNumber = 142
              lineNumber = 176
              var call429 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call430 = callmethod(this, "document:=", [1], call429);
              lineNumber = 177
              lineNumber = 176
              lineNumber = 177
              var string431 = new GraceString("standard-canvas");
              onSelf = true;
              var call432 = callmethod(this, "document", [0]);
              var call433 = callmethod(call432,"getElementById", [1], string431);
              onSelf = true;
              var call434 = callmethod(this, "canvas:=", [1], call433);
              lineNumber = 179
              lineNumber = 176
              lineNumber = 178
              onSelf = true;
              var call435 = callmethod(this, "canvas", [0]);
              var call436 = callmethod(call435,"width", [0]);
              onSelf = true;
              var call437 = callmethod(this, "canvasWidth:=", [1], call436);
              lineNumber = 182
              lineNumber = 178
              lineNumber = 179
              onSelf = true;
              var call438 = callmethod(this, "canvas", [0]);
              var call439 = callmethod(call438,"height", [0]);
              onSelf = true;
              var call440 = callmethod(this, "canvasHeight:=", [1], call439);
              lineNumber = 194
              var block441 = Grace_allocObject();
              block441.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block441.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block441.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block441.methods["match"] = GraceBlock_match;
              block441.methods["prefix?"] = GraceBlock_lift;
              block441.receiver = this;
              block441.className = 'block<kitty:194>';
              block441.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 185
                lineNumber = 184
                onSelf = true;
                var call442 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call444 = callmethod(this, "canvas", [0]);
                var call445 = callmethod(call444,"offsetWidth", [0]);
                onSelf = true;
                var call447 = callmethod(this, "canvas", [0]);
                var call448 = callmethod(call447,"offsetLeft", [0]);
                var call450 = callmethod(var_ev,"clientX", [0]);
                var diff452 = callmethod(call450, "-", [1], call448);
                var quotient454 = callmethod(diff452, "/", [1], call445);
                var prod456 = callmethod(quotient454, "*", [1], call442);
                var var_x = prod456;
                lineNumber = 185;
                moduleName = "kitty";
                lineNumber = 184
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 187
                lineNumber = 185
                onSelf = true;
                var call457 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call459 = callmethod(this, "canvas", [0]);
                var call460 = callmethod(call459,"offsetHeight", [0]);
                onSelf = true;
                var call462 = callmethod(this, "canvas", [0]);
                var call463 = callmethod(call462,"offsetTop", [0]);
                var call465 = callmethod(var_ev,"clientY", [0]);
                var diff467 = callmethod(call465, "-", [1], call463);
                var quotient469 = callmethod(diff467, "/", [1], call460);
                var prod471 = callmethod(quotient469, "*", [1], call457);
                var var_y = prod471;
                lineNumber = 187;
                moduleName = "kitty";
                lineNumber = 185
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 187
                var string472 = new GraceString("MOUSEDOWN");
                var call473 = Grace_print(string472);
                lineNumber = 193
                var if474 = var_done;
                lineNumber = 189
                var opresult477 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call480 = callmethod(this, "canvasWidth", [0]);
                var diff482 = callmethod(call480, "-", [1], new GraceNum(20));
                var opresult485 = callmethod(var_x, ">", [1], diff482);
                var opresult487 = callmethod(opresult485, "&&", [1], opresult477);
                if (Grace_isTrue(opresult487)) {
                  lineNumber = 190
                  var call488 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 191
                  onSelf = true;
                  var call489 = callmethod(this, "stop", [0]);
                  if474 = call489;
                }
                return if474;
              };
              var_mouseDownListener = block441;
              lineNumber = 194
              var string490 = new GraceString("mousedown");
              onSelf = true;
              var call491 = callmethod(this, "canvas", [0]);
              var call492 = callmethod(call491,"addEventListener", [2], string490, var_mouseDownListener);
              lineNumber = 214
              var block493 = Grace_allocObject();
              block493.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block493.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block493.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block493.methods["match"] = GraceBlock_match;
              block493.methods["prefix?"] = GraceBlock_lift;
              block493.receiver = this;
              block493.className = 'block<kitty:214>';
              block493.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 198
                var string494 = new GraceString("WORLD");
                var call495 = Grace_print(string494);
                lineNumber = 203
                var if496 = var_done;
                lineNumber = 199
                var call498 = callmethod(var_ev,"keyCode", [0]);
                var opresult500 = callmethod(call498, "==", [1], new GraceNum(81));
                if (Grace_isTrue(opresult500)) {
                  lineNumber = 200
                  onSelf = true;
                  var call501 = callmethod(this, "stop", [0]);
                  if496 = call501;
                }
                lineNumber = 206
                lineNumber = 203
                var call502 = callmethod(var_ev,"keyCode", [0]);
                var var_key = call502;
                lineNumber = 206;
                moduleName = "kitty";
                lineNumber = 203
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_key)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of var 'key' to be of type Unknown"))
                lineNumber = 206
                onSelf = true;
                var call503 = callmethod(this, "entities", [0]);
                lineNumber = 213
                var block504 = Grace_allocObject();
                block504.methods["apply"] = function() {
                  var args = Array.prototype.slice.call(arguments, 1);
                  return this.real.apply(this.receiver, args);
                }
                block504.methods["applyIndirectly"] = function(argcv, a) {
                  return this.real.apply(this.receiver, a._value);
                }
                block504.methods["outer"] = function() {
                  return callmethod(this.receiver, 'outer', [0]);
                }
                block504.methods["match"] = GraceBlock_match;
                block504.methods["prefix?"] = GraceBlock_lift;
                block504.receiver = this;
                block504.className = 'block<kitty:213>';
                block504.real = function(
                  var_entity
                ) {
                  sourceObject = this;
                  lineNumber = 212
                  lineNumber = 207
                  var cases505 = [];
                  lineNumber = 209
                  var block506 = Grace_allocObject();
                  block506.methods["apply"] = function() {
                    var args = Array.prototype.slice.call(arguments, 1);
                    return this.real.apply(this.receiver, args);
                  }
                  block506.methods["applyIndirectly"] = function(argcv, a) {
                    return this.real.apply(this.receiver, a._value);
                  }
                  block506.methods["outer"] = function() {
                    return callmethod(this.receiver, 'outer', [0]);
                  }
                  lineNumber = 208
                  block506.pattern = new GraceNum(87);
                  block506.methods["match"] = GraceBlock_match;
                  block506.methods["prefix?"] = GraceBlock_lift;
                  block506.receiver = this;
                  block506.className = 'block<kitty:209>';
                  block506.real = function(
                  ) {
                    sourceObject = this;
                    var call507 = callmethod(var_entity,"moveUp", [1], new GraceNum(1));
                    return call507;
                  };
                  cases505.push(block506);
                  lineNumber = 210
                  var block508 = Grace_allocObject();
                  block508.methods["apply"] = function() {
                    var args = Array.prototype.slice.call(arguments, 1);
                    return this.real.apply(this.receiver, args);
                  }
                  block508.methods["applyIndirectly"] = function(argcv, a) {
                    return this.real.apply(this.receiver, a._value);
                  }
                  block508.methods["outer"] = function() {
                    return callmethod(this.receiver, 'outer', [0]);
                  }
                  lineNumber = 209
                  block508.pattern = new GraceNum(83);
                  block508.methods["match"] = GraceBlock_match;
                  block508.methods["prefix?"] = GraceBlock_lift;
                  block508.receiver = this;
                  block508.className = 'block<kitty:210>';
                  block508.real = function(
                  ) {
                    sourceObject = this;
                    var call509 = callmethod(var_entity,"moveDown", [1], new GraceNum(1));
                    return call509;
                  };
                  cases505.push(block508);
                  lineNumber = 211
                  var block510 = Grace_allocObject();
                  block510.methods["apply"] = function() {
                    var args = Array.prototype.slice.call(arguments, 1);
                    return this.real.apply(this.receiver, args);
                  }
                  block510.methods["applyIndirectly"] = function(argcv, a) {
                    return this.real.apply(this.receiver, a._value);
                  }
                  block510.methods["outer"] = function() {
                    return callmethod(this.receiver, 'outer', [0]);
                  }
                  lineNumber = 210
                  block510.pattern = new GraceNum(65);
                  block510.methods["match"] = GraceBlock_match;
                  block510.methods["prefix?"] = GraceBlock_lift;
                  block510.receiver = this;
                  block510.className = 'block<kitty:211>';
                  block510.real = function(
                  ) {
                    sourceObject = this;
                    var call511 = callmethod(var_entity,"moveLeft", [1], new GraceNum(1));
                    return call511;
                  };
                  cases505.push(block510);
                  lineNumber = 212
                  var block512 = Grace_allocObject();
                  block512.methods["apply"] = function() {
                    var args = Array.prototype.slice.call(arguments, 1);
                    return this.real.apply(this.receiver, args);
                  }
                  block512.methods["applyIndirectly"] = function(argcv, a) {
                    return this.real.apply(this.receiver, a._value);
                  }
                  block512.methods["outer"] = function() {
                    return callmethod(this.receiver, 'outer', [0]);
                  }
                  lineNumber = 211
                  block512.pattern = new GraceNum(68);
                  block512.methods["match"] = GraceBlock_match;
                  block512.methods["prefix?"] = GraceBlock_lift;
                  block512.receiver = this;
                  block512.className = 'block<kitty:212>';
                  block512.real = function(
                  ) {
                    sourceObject = this;
                    var call513 = callmethod(var_entity,"moveRight", [1], new GraceNum(1));
                    return call513;
                  };
                  cases505.push(block512);
                  var matchres505 = matchCase(var_key,cases505,false);
                  return matchres505;
                };
                var call514 = callmethod(Grace_prelude,"for()do", [1, 1], call503, block504);
                return call514;
              };
              var_keyDownListener = block493;
              lineNumber = 214
              var string515 = new GraceString("keydown");
              onSelf = true;
              var call516 = callmethod(this, "document", [0]);
              var call517 = callmethod(call516,"addEventListener", [2], string515, var_keyDownListener);
              lineNumber = 216
              lineNumber = 203
              lineNumber = 216
              var string518 = new GraceString("canvas");
              var call519 = callmethod(var_dom,"document", [0]);
              var call520 = callmethod(call519,"createElement", [1], string518);
              onSelf = true;
              var call521 = callmethod(this, "backingCanvas:=", [1], call520);
              lineNumber = 218
              lineNumber = 216
              lineNumber = 217
              onSelf = true;
              var call522 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call523 = callmethod(this, "backingCanvas", [0]);
              var call524 = callmethod(call523,"height:=", [1], call522);
              lineNumber = 219
              lineNumber = 216
              lineNumber = 218
              onSelf = true;
              var call525 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call526 = callmethod(this, "backingCanvas", [0]);
              var call527 = callmethod(call526,"width:=", [1], call525);
              lineNumber = 219
              lineNumber = 216
              lineNumber = 219
              var string528 = new GraceString("2d");
              onSelf = true;
              var call529 = callmethod(this, "backingCanvas", [0]);
              var call530 = callmethod(call529,"getContext", [1], string528);
              onSelf = true;
              var call531 = callmethod(this, "backingContext:=", [1], call530);
              lineNumber = 220
              lineNumber = 216
              lineNumber = 220
              var string532 = new GraceString("2d");
              onSelf = true;
              var call533 = callmethod(this, "canvas", [0]);
              var call534 = callmethod(call533,"getContext", [1], string532);
              onSelf = true;
              var call535 = callmethod(this, "mctx:=", [1], call534);
              lineNumber = 223
              lineNumber = 216
              lineNumber = 222
              var bool536 = new GraceBoolean(true)
              onSelf = true;
              var call537 = callmethod(this, "isInit:=", [1], bool536);
              lineNumber = 223
              var string538 = new GraceString("INITIALIZATION FINISHED");
              var call539 = Grace_print(string538);
              return call539
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func423.paramCounts = [
            0,
          ];
          func423.variableArities = [
            false,
          ];
          obj421.methods["init"] = func423;
          func423.definitionLine = 168;
          func423.definitionModule = "kitty";
          var func540 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func540.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 232
              var string541 = new GraceString("WORLD STARTED");
              var call542 = Grace_print(string541);
              lineNumber = 234
              lineNumber = 216
              lineNumber = 233
              var bool543 = new GraceBoolean(true)
              onSelf = true;
              var call544 = callmethod(this, "isRunning:=", [1], bool543);
              lineNumber = 234
              var block545 = Grace_allocObject();
              block545.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block545.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block545.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block545.methods["match"] = GraceBlock_match;
              block545.methods["prefix?"] = GraceBlock_lift;
              block545.receiver = this;
              block545.className = 'block<kitty:234>';
              block545.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call546 = callmethod(this, "isRunning", [0]);
                return call546;
              };
              lineNumber = 237
              var block547 = Grace_allocObject();
              block547.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block547.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block547.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block547.methods["match"] = GraceBlock_match;
              block547.methods["prefix?"] = GraceBlock_lift;
              block547.receiver = this;
              block547.className = 'block<kitty:237>';
              block547.real = function(
              ) {
                sourceObject = this;
                lineNumber = 235
                onSelf = true;
                var call548 = callmethod(this, "update", [0]);
                return call548;
              };
              lineNumber = 234
              var call549 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block545, new GraceNum(10), block547);
              lineNumber = 237
              var string550 = new GraceString("WORLD STOPPED");
              var call551 = Grace_print(string550);
              return call551
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func540.paramCounts = [
            0,
          ];
          func540.variableArities = [
            false,
          ];
          obj421.methods["start"] = func540;
          func540.definitionLine = 231;
          func540.definitionModule = "kitty";
          var func552 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func552.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 243
              var string553 = new GraceString("UPDATING WORLD...");
              var call554 = Grace_print(string553);
              lineNumber = 247
              lineNumber = 216
              lineNumber = 246
              onSelf = true;
              var call555 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call556 = callmethod(this, "mctx", [0]);
              var call557 = callmethod(call556,"fillStyle:=", [1], call555);
              lineNumber = 247
              onSelf = true;
              var call558 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call559 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call560 = callmethod(this, "mctx", [0]);
              var call561 = callmethod(call560,"fillRect", [4], new GraceNum(0), new GraceNum(0), call558, call559);
              lineNumber = 248
              onSelf = true;
              var call562 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call563 = callmethod(this, "mctx", [0]);
              var call564 = callmethod(call563,"drawImage", [3], call562, new GraceNum(0), new GraceNum(0));
              lineNumber = 249
              onSelf = true;
              var call565 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call567 = callmethod(this, "canvasWidth", [0]);
              var quotient569 = callmethod(call567, "/", [1], new GraceNum(2));
              onSelf = true;
              var call571 = callmethod(this, "canvasHeight", [0]);
              var quotient573 = callmethod(call571, "/", [1], new GraceNum(2));
              onSelf = true;
              var call574 = callmethod(this, "background", [0]);
              var call575 = callmethod(call574,"draw", [4], call565, quotient569, quotient573, new GraceNum(0));
              lineNumber = 252
              onSelf = true;
              var call576 = callmethod(this, "entities", [0]);
              lineNumber = 257
              var block577 = Grace_allocObject();
              block577.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block577.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block577.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block577.methods["match"] = GraceBlock_match;
              block577.methods["prefix?"] = GraceBlock_lift;
              block577.receiver = this;
              block577.className = 'block<kitty:257>';
              block577.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 253
                var call578 = callmethod(var_entity,"doUpdate", [0]);
                lineNumber = 254
                onSelf = true;
                var call579 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call581 = callmethod(this, "canvasWidth", [0]);
                var quotient583 = callmethod(call581, "/", [1], new GraceNum(2));
                onSelf = true;
                var call585 = callmethod(this, "canvasHeight", [0]);
                var quotient587 = callmethod(call585, "/", [1], new GraceNum(2));
                var call588 = callmethod(var_entity,"draw", [3], call579, quotient583, quotient587);
                return call588;
              };
              var call589 = callmethod(Grace_prelude,"for()do", [1, 1], call576, block577);
              lineNumber = 257
              var string590 = new GraceString("WORLD UPDATED");
              var call591 = Grace_print(string590);
              return call591
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func552.paramCounts = [
            0,
          ];
          func552.variableArities = [
            false,
          ];
          obj421.methods["update"] = func552;
          func552.definitionLine = 241;
          func552.definitionModule = "kitty";
          var func592 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func592.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 261
              var string593 = new GraceString("WORLD STOPPING...");
              var call594 = Grace_print(string593);
              lineNumber = 263
              lineNumber = 253
              lineNumber = 262
              var bool595 = new GraceBoolean(false)
              onSelf = true;
              var call596 = callmethod(this, "isRunning:=", [1], bool595);
              return call596
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
          obj421.methods["stop"] = func592;
          func592.definitionLine = 260;
          func592.definitionModule = "kitty";
          var func597 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func597.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 266
              lineNumber = 253
              lineNumber = 266
              onSelf = true;
              var call598 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call599 = callmethod(this, "canvasHeight", [0]);
              var call600 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call601 = callmethod(call600, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call602 = callmethod(call601, "Image", [3], var_background__39__, call598, call599);
              onSelf = true;
              var call603 = callmethod(this, "background:=", [1], call602);
              return call603
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func597.paramCounts = [
            1,
          ];
          func597.variableArities = [
            false,
          ];
          obj421.methods["setBackground"] = func597;
          func597.definitionLine = 265;
          func597.definitionModule = "kitty";
          var func604 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func604.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 270
              onSelf = true;
              var call605 = callmethod(this, "entities", [0]);
              var call606 = callmethod(call605,"push", [1], var_e);
              return call606
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func604.paramTypes = [];
          func604.paramTypes.push([]);
          func604.paramCounts = [
            1,
          ];
          func604.variableArities = [
            false,
          ];
          obj421.methods["addEntity"] = func604;
          func604.definitionLine = 269;
          func604.definitionModule = "kitty";
          sourceObject = obj421;
          lineNumber = 144
          var string607 = new GraceString("CREATING NEW WORLD...");
          var call608 = Grace_print(string607);
          sourceObject = obj421;
          obj421.data["background"] = undefined;
          var reader_kitty_background_609 = function() {
            return this.data["background"];
          }
          obj421.methods["background"] = reader_kitty_background_609;
          obj421.data["background"] = undefined;
          var writer_kitty_background_609 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj421.methods["background:="] = writer_kitty_background_609;
          reader_kitty_background_609.confidential = true;
          writer_kitty_background_609.confidential = true;
          obj421.mutable = true;
          sourceObject = obj421;
          lineNumber = 147
          var string610 = new GraceString("black");
          obj421.data["backgroundColour"] = string610;
          var reader_kitty_backgroundColour_611 = function() {
            return this.data["backgroundColour"];
          }
          obj421.methods["backgroundColour"] = reader_kitty_backgroundColour_611;
          obj421.data["backgroundColour"] = string610;
          var writer_kitty_backgroundColour_611 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj421.methods["backgroundColour:="] = writer_kitty_backgroundColour_611;
          reader_kitty_backgroundColour_611.confidential = true;
          writer_kitty_backgroundColour_611.confidential = true;
          lineNumber = 149;
          moduleName = "kitty";
          lineNumber = 147
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string610)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj421.mutable = true;
          sourceObject = obj421;
          obj421.data["document"] = undefined;
          var reader_kitty_document_612 = function() {
            return this.data["document"];
          }
          obj421.methods["document"] = reader_kitty_document_612;
          obj421.data["document"] = undefined;
          var writer_kitty_document_612 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj421.methods["document:="] = writer_kitty_document_612;
          reader_kitty_document_612.confidential = true;
          writer_kitty_document_612.confidential = true;
          obj421.mutable = true;
          sourceObject = obj421;
          obj421.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_613 = function() {
            return this.data["backingCanvas"];
          }
          obj421.methods["backingCanvas"] = reader_kitty_backingCanvas_613;
          obj421.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_613 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj421.methods["backingCanvas:="] = writer_kitty_backingCanvas_613;
          reader_kitty_backingCanvas_613.confidential = true;
          writer_kitty_backingCanvas_613.confidential = true;
          obj421.mutable = true;
          sourceObject = obj421;
          obj421.data["backingContext"] = undefined;
          var reader_kitty_backingContext_614 = function() {
            return this.data["backingContext"];
          }
          obj421.methods["backingContext"] = reader_kitty_backingContext_614;
          obj421.data["backingContext"] = undefined;
          var writer_kitty_backingContext_614 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj421.methods["backingContext:="] = writer_kitty_backingContext_614;
          reader_kitty_backingContext_614.confidential = true;
          writer_kitty_backingContext_614.confidential = true;
          obj421.mutable = true;
          sourceObject = obj421;
          obj421.data["canvas"] = undefined;
          var reader_kitty_canvas_615 = function() {
            return this.data["canvas"];
          }
          obj421.methods["canvas"] = reader_kitty_canvas_615;
          obj421.data["canvas"] = undefined;
          var writer_kitty_canvas_615 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj421.methods["canvas:="] = writer_kitty_canvas_615;
          reader_kitty_canvas_615.confidential = true;
          writer_kitty_canvas_615.confidential = true;
          obj421.mutable = true;
          sourceObject = obj421;
          obj421.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_616 = function() {
            return this.data["canvasWidth"];
          }
          obj421.methods["canvasWidth"] = reader_kitty_canvasWidth_616;
          obj421.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_616 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj421.methods["canvasWidth:="] = writer_kitty_canvasWidth_616;
          reader_kitty_canvasWidth_616.confidential = true;
          writer_kitty_canvasWidth_616.confidential = true;
          obj421.mutable = true;
          sourceObject = obj421;
          obj421.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_617 = function() {
            return this.data["canvasHeight"];
          }
          obj421.methods["canvasHeight"] = reader_kitty_canvasHeight_617;
          obj421.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_617 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj421.methods["canvasHeight:="] = writer_kitty_canvasHeight_617;
          reader_kitty_canvasHeight_617.confidential = true;
          writer_kitty_canvasHeight_617.confidential = true;
          obj421.mutable = true;
          sourceObject = obj421;
          lineNumber = 158
          var call618 = callmethod(var_collections,"list", [0]);
          var call619 = callmethod(call618,"new", [0]);
          obj421.data["entities"] = call619;
          var reader_kitty_entities_620 = function() {
            return this.data["entities"];
          }
          obj421.methods["entities"] = reader_kitty_entities_620;
          obj421.data["entities"] = call619;
          var writer_kitty_entities_620 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj421.methods["entities:="] = writer_kitty_entities_620;
          reader_kitty_entities_620.confidential = true;
          writer_kitty_entities_620.confidential = true;
          lineNumber = 160;
          moduleName = "kitty";
          lineNumber = 158
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call619)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj421.mutable = true;
          sourceObject = obj421;
          lineNumber = 160
          var bool621 = new GraceBoolean(false)
          obj421.data["isInit"] = bool621;
          var reader_kitty_isInit_622 = function() {
            return this.data["isInit"];
          }
          obj421.methods["isInit"] = reader_kitty_isInit_622;
          obj421.data["isInit"] = bool621;
          var writer_kitty_isInit_622 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj421.methods["isInit:="] = writer_kitty_isInit_622;
          reader_kitty_isInit_622.confidential = true;
          writer_kitty_isInit_622.confidential = true;
          lineNumber = 161;
          moduleName = "kitty";
          lineNumber = 160
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool621)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj421.mutable = true;
          sourceObject = obj421;
          lineNumber = 161
          var bool623 = new GraceBoolean(false)
          obj421.data["isRunning"] = bool623;
          var reader_kitty_isRunning_624 = function() {
            return this.data["isRunning"];
          }
          obj421.methods["isRunning"] = reader_kitty_isRunning_624;
          obj421.data["isRunning"] = bool623;
          var writer_kitty_isRunning_624 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj421.methods["isRunning:="] = writer_kitty_isRunning_624;
          reader_kitty_isRunning_624.confidential = true;
          writer_kitty_isRunning_624.confidential = true;
          lineNumber = 163;
          moduleName = "kitty";
          lineNumber = 161
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool623)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj421.mutable = true;
          sourceObject = obj421;
          obj421.data["mctx"] = undefined;
          var reader_kitty_mctx_625 = function() {
            return this.data["mctx"];
          }
          obj421.methods["mctx"] = reader_kitty_mctx_625;
          obj421.data["mctx"] = undefined;
          var writer_kitty_mctx_625 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj421.methods["mctx:="] = writer_kitty_mctx_625;
          reader_kitty_mctx_625.confidential = true;
          writer_kitty_mctx_625.confidential = true;
          obj421.mutable = true;
          sourceObject = obj421;
          lineNumber = 165
          onSelf = true;
          var call626 = callmethod(this, "init", [0]);
          sourceObject = obj421;
          sourceObject = obj421;
          sourceObject = obj421;
          sourceObject = obj421;
          sourceObject = obj421;
          sourceObject = obj421;
          sourceObject = obj421;
          lineNumber = 273
          var string627 = new GraceString("WORLD CREATED");
          var call628 = Grace_print(string627);
          superDepth = origSuperDepth;
        }
        obj_init_421.apply(obj421, []);
        return obj421
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func420.paramCounts = [
      0,
    ];
    func420.variableArities = [
      false,
    ];
    obj418.methods["new"] = func420;
    func420.definitionLine = 142;
    func420.definitionModule = "kitty";
    var func629 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj630 = Grace_allocObject();
        obj630.definitionModule = "kitty";
        obj630.definitionLine = 142;
        var inho630 = inheritingObject;
        while (inho630.superobj) inho630 = inho630.superobj;
        inho630.superobj = obj630;
        obj630.data = inheritingObject.data;
        obj630.outer = this;
        var reader_kitty_outer_631 = function() {
          return this.outer;
        }
        obj630.methods["outer"] = reader_kitty_outer_631;
        function obj_init_630() {
          var origSuperDepth = superDepth;
          superDepth = obj630;
          obj630.annotations = [];
          var func632 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func632.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 170
              var string633 = new GraceString("INITIALIZING WORLD...");
              var call634 = Grace_print(string633);
              lineNumber = 176
              var if635 = var_done;
              lineNumber = 172
              onSelf = true;
              var call636 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call636)) {
                lineNumber = 174
                lineNumber = 173
                var bool637 = new GraceBoolean(false)
                return bool637
              }
              lineNumber = 177
              lineNumber = 158
              lineNumber = 176
              var call638 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call639 = callmethod(this, "document:=", [1], call638);
              lineNumber = 177
              lineNumber = 176
              lineNumber = 177
              var string640 = new GraceString("standard-canvas");
              onSelf = true;
              var call641 = callmethod(this, "document", [0]);
              var call642 = callmethod(call641,"getElementById", [1], string640);
              onSelf = true;
              var call643 = callmethod(this, "canvas:=", [1], call642);
              lineNumber = 179
              lineNumber = 176
              lineNumber = 178
              onSelf = true;
              var call644 = callmethod(this, "canvas", [0]);
              var call645 = callmethod(call644,"width", [0]);
              onSelf = true;
              var call646 = callmethod(this, "canvasWidth:=", [1], call645);
              lineNumber = 182
              lineNumber = 178
              lineNumber = 179
              onSelf = true;
              var call647 = callmethod(this, "canvas", [0]);
              var call648 = callmethod(call647,"height", [0]);
              onSelf = true;
              var call649 = callmethod(this, "canvasHeight:=", [1], call648);
              lineNumber = 194
              var block650 = Grace_allocObject();
              block650.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block650.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block650.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block650.methods["match"] = GraceBlock_match;
              block650.methods["prefix?"] = GraceBlock_lift;
              block650.receiver = this;
              block650.className = 'block<kitty:194>';
              block650.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 185
                lineNumber = 184
                onSelf = true;
                var call651 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call653 = callmethod(this, "canvas", [0]);
                var call654 = callmethod(call653,"offsetWidth", [0]);
                onSelf = true;
                var call656 = callmethod(this, "canvas", [0]);
                var call657 = callmethod(call656,"offsetLeft", [0]);
                var call659 = callmethod(var_ev,"clientX", [0]);
                var diff661 = callmethod(call659, "-", [1], call657);
                var quotient663 = callmethod(diff661, "/", [1], call654);
                var prod665 = callmethod(quotient663, "*", [1], call651);
                var var_x = prod665;
                lineNumber = 185;
                moduleName = "kitty";
                lineNumber = 184
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 187
                lineNumber = 185
                onSelf = true;
                var call666 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call668 = callmethod(this, "canvas", [0]);
                var call669 = callmethod(call668,"offsetHeight", [0]);
                onSelf = true;
                var call671 = callmethod(this, "canvas", [0]);
                var call672 = callmethod(call671,"offsetTop", [0]);
                var call674 = callmethod(var_ev,"clientY", [0]);
                var diff676 = callmethod(call674, "-", [1], call672);
                var quotient678 = callmethod(diff676, "/", [1], call669);
                var prod680 = callmethod(quotient678, "*", [1], call666);
                var var_y = prod680;
                lineNumber = 187;
                moduleName = "kitty";
                lineNumber = 185
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 187
                var string681 = new GraceString("MOUSEDOWN");
                var call682 = Grace_print(string681);
                lineNumber = 193
                var if683 = var_done;
                lineNumber = 189
                var opresult686 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call689 = callmethod(this, "canvasWidth", [0]);
                var diff691 = callmethod(call689, "-", [1], new GraceNum(20));
                var opresult694 = callmethod(var_x, ">", [1], diff691);
                var opresult696 = callmethod(opresult694, "&&", [1], opresult686);
                if (Grace_isTrue(opresult696)) {
                  lineNumber = 190
                  var call697 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 191
                  onSelf = true;
                  var call698 = callmethod(this, "stop", [0]);
                  if683 = call698;
                }
                return if683;
              };
              var_mouseDownListener = block650;
              lineNumber = 194
              var string699 = new GraceString("mousedown");
              onSelf = true;
              var call700 = callmethod(this, "canvas", [0]);
              var call701 = callmethod(call700,"addEventListener", [2], string699, var_mouseDownListener);
              lineNumber = 214
              var block702 = Grace_allocObject();
              block702.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block702.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block702.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block702.methods["match"] = GraceBlock_match;
              block702.methods["prefix?"] = GraceBlock_lift;
              block702.receiver = this;
              block702.className = 'block<kitty:214>';
              block702.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 198
                var string703 = new GraceString("WORLD");
                var call704 = Grace_print(string703);
                lineNumber = 203
                var if705 = var_done;
                lineNumber = 199
                var call707 = callmethod(var_ev,"keyCode", [0]);
                var opresult709 = callmethod(call707, "==", [1], new GraceNum(81));
                if (Grace_isTrue(opresult709)) {
                  lineNumber = 200
                  onSelf = true;
                  var call710 = callmethod(this, "stop", [0]);
                  if705 = call710;
                }
                lineNumber = 206
                lineNumber = 203
                var call711 = callmethod(var_ev,"keyCode", [0]);
                var var_key = call711;
                lineNumber = 206;
                moduleName = "kitty";
                lineNumber = 203
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_key)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of var 'key' to be of type Unknown"))
                lineNumber = 206
                onSelf = true;
                var call712 = callmethod(this, "entities", [0]);
                lineNumber = 213
                var block713 = Grace_allocObject();
                block713.methods["apply"] = function() {
                  var args = Array.prototype.slice.call(arguments, 1);
                  return this.real.apply(this.receiver, args);
                }
                block713.methods["applyIndirectly"] = function(argcv, a) {
                  return this.real.apply(this.receiver, a._value);
                }
                block713.methods["outer"] = function() {
                  return callmethod(this.receiver, 'outer', [0]);
                }
                block713.methods["match"] = GraceBlock_match;
                block713.methods["prefix?"] = GraceBlock_lift;
                block713.receiver = this;
                block713.className = 'block<kitty:213>';
                block713.real = function(
                  var_entity
                ) {
                  sourceObject = this;
                  lineNumber = 212
                  lineNumber = 207
                  var cases714 = [];
                  lineNumber = 209
                  var block715 = Grace_allocObject();
                  block715.methods["apply"] = function() {
                    var args = Array.prototype.slice.call(arguments, 1);
                    return this.real.apply(this.receiver, args);
                  }
                  block715.methods["applyIndirectly"] = function(argcv, a) {
                    return this.real.apply(this.receiver, a._value);
                  }
                  block715.methods["outer"] = function() {
                    return callmethod(this.receiver, 'outer', [0]);
                  }
                  lineNumber = 208
                  block715.pattern = new GraceNum(87);
                  block715.methods["match"] = GraceBlock_match;
                  block715.methods["prefix?"] = GraceBlock_lift;
                  block715.receiver = this;
                  block715.className = 'block<kitty:209>';
                  block715.real = function(
                  ) {
                    sourceObject = this;
                    var call716 = callmethod(var_entity,"moveUp", [1], new GraceNum(1));
                    return call716;
                  };
                  cases714.push(block715);
                  lineNumber = 210
                  var block717 = Grace_allocObject();
                  block717.methods["apply"] = function() {
                    var args = Array.prototype.slice.call(arguments, 1);
                    return this.real.apply(this.receiver, args);
                  }
                  block717.methods["applyIndirectly"] = function(argcv, a) {
                    return this.real.apply(this.receiver, a._value);
                  }
                  block717.methods["outer"] = function() {
                    return callmethod(this.receiver, 'outer', [0]);
                  }
                  lineNumber = 209
                  block717.pattern = new GraceNum(83);
                  block717.methods["match"] = GraceBlock_match;
                  block717.methods["prefix?"] = GraceBlock_lift;
                  block717.receiver = this;
                  block717.className = 'block<kitty:210>';
                  block717.real = function(
                  ) {
                    sourceObject = this;
                    var call718 = callmethod(var_entity,"moveDown", [1], new GraceNum(1));
                    return call718;
                  };
                  cases714.push(block717);
                  lineNumber = 211
                  var block719 = Grace_allocObject();
                  block719.methods["apply"] = function() {
                    var args = Array.prototype.slice.call(arguments, 1);
                    return this.real.apply(this.receiver, args);
                  }
                  block719.methods["applyIndirectly"] = function(argcv, a) {
                    return this.real.apply(this.receiver, a._value);
                  }
                  block719.methods["outer"] = function() {
                    return callmethod(this.receiver, 'outer', [0]);
                  }
                  lineNumber = 210
                  block719.pattern = new GraceNum(65);
                  block719.methods["match"] = GraceBlock_match;
                  block719.methods["prefix?"] = GraceBlock_lift;
                  block719.receiver = this;
                  block719.className = 'block<kitty:211>';
                  block719.real = function(
                  ) {
                    sourceObject = this;
                    var call720 = callmethod(var_entity,"moveLeft", [1], new GraceNum(1));
                    return call720;
                  };
                  cases714.push(block719);
                  lineNumber = 212
                  var block721 = Grace_allocObject();
                  block721.methods["apply"] = function() {
                    var args = Array.prototype.slice.call(arguments, 1);
                    return this.real.apply(this.receiver, args);
                  }
                  block721.methods["applyIndirectly"] = function(argcv, a) {
                    return this.real.apply(this.receiver, a._value);
                  }
                  block721.methods["outer"] = function() {
                    return callmethod(this.receiver, 'outer', [0]);
                  }
                  lineNumber = 211
                  block721.pattern = new GraceNum(68);
                  block721.methods["match"] = GraceBlock_match;
                  block721.methods["prefix?"] = GraceBlock_lift;
                  block721.receiver = this;
                  block721.className = 'block<kitty:212>';
                  block721.real = function(
                  ) {
                    sourceObject = this;
                    var call722 = callmethod(var_entity,"moveRight", [1], new GraceNum(1));
                    return call722;
                  };
                  cases714.push(block721);
                  var matchres714 = matchCase(var_key,cases714,false);
                  return matchres714;
                };
                var call723 = callmethod(Grace_prelude,"for()do", [1, 1], call712, block713);
                return call723;
              };
              var_keyDownListener = block702;
              lineNumber = 214
              var string724 = new GraceString("keydown");
              onSelf = true;
              var call725 = callmethod(this, "document", [0]);
              var call726 = callmethod(call725,"addEventListener", [2], string724, var_keyDownListener);
              lineNumber = 216
              lineNumber = 203
              lineNumber = 216
              var string727 = new GraceString("canvas");
              var call728 = callmethod(var_dom,"document", [0]);
              var call729 = callmethod(call728,"createElement", [1], string727);
              onSelf = true;
              var call730 = callmethod(this, "backingCanvas:=", [1], call729);
              lineNumber = 218
              lineNumber = 216
              lineNumber = 217
              onSelf = true;
              var call731 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call732 = callmethod(this, "backingCanvas", [0]);
              var call733 = callmethod(call732,"height:=", [1], call731);
              lineNumber = 219
              lineNumber = 216
              lineNumber = 218
              onSelf = true;
              var call734 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call735 = callmethod(this, "backingCanvas", [0]);
              var call736 = callmethod(call735,"width:=", [1], call734);
              lineNumber = 219
              lineNumber = 216
              lineNumber = 219
              var string737 = new GraceString("2d");
              onSelf = true;
              var call738 = callmethod(this, "backingCanvas", [0]);
              var call739 = callmethod(call738,"getContext", [1], string737);
              onSelf = true;
              var call740 = callmethod(this, "backingContext:=", [1], call739);
              lineNumber = 220
              lineNumber = 216
              lineNumber = 220
              var string741 = new GraceString("2d");
              onSelf = true;
              var call742 = callmethod(this, "canvas", [0]);
              var call743 = callmethod(call742,"getContext", [1], string741);
              onSelf = true;
              var call744 = callmethod(this, "mctx:=", [1], call743);
              lineNumber = 223
              lineNumber = 216
              lineNumber = 222
              var bool745 = new GraceBoolean(true)
              onSelf = true;
              var call746 = callmethod(this, "isInit:=", [1], bool745);
              lineNumber = 223
              var string747 = new GraceString("INITIALIZATION FINISHED");
              var call748 = Grace_print(string747);
              return call748
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func632.paramCounts = [
            0,
          ];
          func632.variableArities = [
            false,
          ];
          obj630.methods["init"] = func632;
          func632.definitionLine = 168;
          func632.definitionModule = "kitty";
          var func749 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func749.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 232
              var string750 = new GraceString("WORLD STARTED");
              var call751 = Grace_print(string750);
              lineNumber = 234
              lineNumber = 216
              lineNumber = 233
              var bool752 = new GraceBoolean(true)
              onSelf = true;
              var call753 = callmethod(this, "isRunning:=", [1], bool752);
              lineNumber = 234
              var block754 = Grace_allocObject();
              block754.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block754.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block754.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block754.methods["match"] = GraceBlock_match;
              block754.methods["prefix?"] = GraceBlock_lift;
              block754.receiver = this;
              block754.className = 'block<kitty:234>';
              block754.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call755 = callmethod(this, "isRunning", [0]);
                return call755;
              };
              lineNumber = 237
              var block756 = Grace_allocObject();
              block756.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block756.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block756.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block756.methods["match"] = GraceBlock_match;
              block756.methods["prefix?"] = GraceBlock_lift;
              block756.receiver = this;
              block756.className = 'block<kitty:237>';
              block756.real = function(
              ) {
                sourceObject = this;
                lineNumber = 235
                onSelf = true;
                var call757 = callmethod(this, "update", [0]);
                return call757;
              };
              lineNumber = 234
              var call758 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block754, new GraceNum(10), block756);
              lineNumber = 237
              var string759 = new GraceString("WORLD STOPPED");
              var call760 = Grace_print(string759);
              return call760
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func749.paramCounts = [
            0,
          ];
          func749.variableArities = [
            false,
          ];
          obj630.methods["start"] = func749;
          func749.definitionLine = 231;
          func749.definitionModule = "kitty";
          var func761 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func761.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 243
              var string762 = new GraceString("UPDATING WORLD...");
              var call763 = Grace_print(string762);
              lineNumber = 247
              lineNumber = 216
              lineNumber = 246
              onSelf = true;
              var call764 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call765 = callmethod(this, "mctx", [0]);
              var call766 = callmethod(call765,"fillStyle:=", [1], call764);
              lineNumber = 247
              onSelf = true;
              var call767 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call768 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call769 = callmethod(this, "mctx", [0]);
              var call770 = callmethod(call769,"fillRect", [4], new GraceNum(0), new GraceNum(0), call767, call768);
              lineNumber = 248
              onSelf = true;
              var call771 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call772 = callmethod(this, "mctx", [0]);
              var call773 = callmethod(call772,"drawImage", [3], call771, new GraceNum(0), new GraceNum(0));
              lineNumber = 249
              onSelf = true;
              var call774 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call776 = callmethod(this, "canvasWidth", [0]);
              var quotient778 = callmethod(call776, "/", [1], new GraceNum(2));
              onSelf = true;
              var call780 = callmethod(this, "canvasHeight", [0]);
              var quotient782 = callmethod(call780, "/", [1], new GraceNum(2));
              onSelf = true;
              var call783 = callmethod(this, "background", [0]);
              var call784 = callmethod(call783,"draw", [4], call774, quotient778, quotient782, new GraceNum(0));
              lineNumber = 252
              onSelf = true;
              var call785 = callmethod(this, "entities", [0]);
              lineNumber = 257
              var block786 = Grace_allocObject();
              block786.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block786.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block786.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block786.methods["match"] = GraceBlock_match;
              block786.methods["prefix?"] = GraceBlock_lift;
              block786.receiver = this;
              block786.className = 'block<kitty:257>';
              block786.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 253
                var call787 = callmethod(var_entity,"doUpdate", [0]);
                lineNumber = 254
                onSelf = true;
                var call788 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call790 = callmethod(this, "canvasWidth", [0]);
                var quotient792 = callmethod(call790, "/", [1], new GraceNum(2));
                onSelf = true;
                var call794 = callmethod(this, "canvasHeight", [0]);
                var quotient796 = callmethod(call794, "/", [1], new GraceNum(2));
                var call797 = callmethod(var_entity,"draw", [3], call788, quotient792, quotient796);
                return call797;
              };
              var call798 = callmethod(Grace_prelude,"for()do", [1, 1], call785, block786);
              lineNumber = 257
              var string799 = new GraceString("WORLD UPDATED");
              var call800 = Grace_print(string799);
              return call800
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func761.paramCounts = [
            0,
          ];
          func761.variableArities = [
            false,
          ];
          obj630.methods["update"] = func761;
          func761.definitionLine = 241;
          func761.definitionModule = "kitty";
          var func801 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func801.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 261
              var string802 = new GraceString("WORLD STOPPING...");
              var call803 = Grace_print(string802);
              lineNumber = 263
              lineNumber = 253
              lineNumber = 262
              var bool804 = new GraceBoolean(false)
              onSelf = true;
              var call805 = callmethod(this, "isRunning:=", [1], bool804);
              return call805
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func801.paramCounts = [
            0,
          ];
          func801.variableArities = [
            false,
          ];
          obj630.methods["stop"] = func801;
          func801.definitionLine = 260;
          func801.definitionModule = "kitty";
          var func806 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func806.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 266
              lineNumber = 253
              lineNumber = 266
              onSelf = true;
              var call807 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call808 = callmethod(this, "canvasHeight", [0]);
              var call809 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call810 = callmethod(call809, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call811 = callmethod(call810, "Image", [3], var_background__39__, call807, call808);
              onSelf = true;
              var call812 = callmethod(this, "background:=", [1], call811);
              return call812
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func806.paramCounts = [
            1,
          ];
          func806.variableArities = [
            false,
          ];
          obj630.methods["setBackground"] = func806;
          func806.definitionLine = 265;
          func806.definitionModule = "kitty";
          var func813 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func813.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 270
              onSelf = true;
              var call814 = callmethod(this, "entities", [0]);
              var call815 = callmethod(call814,"push", [1], var_e);
              return call815
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func813.paramTypes = [];
          func813.paramTypes.push([]);
          func813.paramCounts = [
            1,
          ];
          func813.variableArities = [
            false,
          ];
          obj630.methods["addEntity"] = func813;
          func813.definitionLine = 269;
          func813.definitionModule = "kitty";
          sourceObject = obj630;
          lineNumber = 144
          var string816 = new GraceString("CREATING NEW WORLD...");
          var call817 = Grace_print(string816);
          sourceObject = obj630;
          obj630.data["background"] = undefined;
          var reader_kitty_background_818 = function() {
            return this.data["background"];
          }
          obj630.methods["background"] = reader_kitty_background_818;
          obj630.data["background"] = undefined;
          var writer_kitty_background_818 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj630.methods["background:="] = writer_kitty_background_818;
          reader_kitty_background_818.confidential = true;
          writer_kitty_background_818.confidential = true;
          obj630.mutable = true;
          sourceObject = obj630;
          lineNumber = 147
          var string819 = new GraceString("black");
          obj630.data["backgroundColour"] = string819;
          var reader_kitty_backgroundColour_820 = function() {
            return this.data["backgroundColour"];
          }
          obj630.methods["backgroundColour"] = reader_kitty_backgroundColour_820;
          obj630.data["backgroundColour"] = string819;
          var writer_kitty_backgroundColour_820 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj630.methods["backgroundColour:="] = writer_kitty_backgroundColour_820;
          reader_kitty_backgroundColour_820.confidential = true;
          writer_kitty_backgroundColour_820.confidential = true;
          lineNumber = 149;
          moduleName = "kitty";
          lineNumber = 147
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string819)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj630.mutable = true;
          sourceObject = obj630;
          obj630.data["document"] = undefined;
          var reader_kitty_document_821 = function() {
            return this.data["document"];
          }
          obj630.methods["document"] = reader_kitty_document_821;
          obj630.data["document"] = undefined;
          var writer_kitty_document_821 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj630.methods["document:="] = writer_kitty_document_821;
          reader_kitty_document_821.confidential = true;
          writer_kitty_document_821.confidential = true;
          obj630.mutable = true;
          sourceObject = obj630;
          obj630.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_822 = function() {
            return this.data["backingCanvas"];
          }
          obj630.methods["backingCanvas"] = reader_kitty_backingCanvas_822;
          obj630.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_822 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj630.methods["backingCanvas:="] = writer_kitty_backingCanvas_822;
          reader_kitty_backingCanvas_822.confidential = true;
          writer_kitty_backingCanvas_822.confidential = true;
          obj630.mutable = true;
          sourceObject = obj630;
          obj630.data["backingContext"] = undefined;
          var reader_kitty_backingContext_823 = function() {
            return this.data["backingContext"];
          }
          obj630.methods["backingContext"] = reader_kitty_backingContext_823;
          obj630.data["backingContext"] = undefined;
          var writer_kitty_backingContext_823 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj630.methods["backingContext:="] = writer_kitty_backingContext_823;
          reader_kitty_backingContext_823.confidential = true;
          writer_kitty_backingContext_823.confidential = true;
          obj630.mutable = true;
          sourceObject = obj630;
          obj630.data["canvas"] = undefined;
          var reader_kitty_canvas_824 = function() {
            return this.data["canvas"];
          }
          obj630.methods["canvas"] = reader_kitty_canvas_824;
          obj630.data["canvas"] = undefined;
          var writer_kitty_canvas_824 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj630.methods["canvas:="] = writer_kitty_canvas_824;
          reader_kitty_canvas_824.confidential = true;
          writer_kitty_canvas_824.confidential = true;
          obj630.mutable = true;
          sourceObject = obj630;
          obj630.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_825 = function() {
            return this.data["canvasWidth"];
          }
          obj630.methods["canvasWidth"] = reader_kitty_canvasWidth_825;
          obj630.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_825 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj630.methods["canvasWidth:="] = writer_kitty_canvasWidth_825;
          reader_kitty_canvasWidth_825.confidential = true;
          writer_kitty_canvasWidth_825.confidential = true;
          obj630.mutable = true;
          sourceObject = obj630;
          obj630.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_826 = function() {
            return this.data["canvasHeight"];
          }
          obj630.methods["canvasHeight"] = reader_kitty_canvasHeight_826;
          obj630.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_826 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj630.methods["canvasHeight:="] = writer_kitty_canvasHeight_826;
          reader_kitty_canvasHeight_826.confidential = true;
          writer_kitty_canvasHeight_826.confidential = true;
          obj630.mutable = true;
          sourceObject = obj630;
          lineNumber = 158
          var call827 = callmethod(var_collections,"list", [0]);
          var call828 = callmethod(call827,"new", [0]);
          obj630.data["entities"] = call828;
          var reader_kitty_entities_829 = function() {
            return this.data["entities"];
          }
          obj630.methods["entities"] = reader_kitty_entities_829;
          obj630.data["entities"] = call828;
          var writer_kitty_entities_829 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj630.methods["entities:="] = writer_kitty_entities_829;
          reader_kitty_entities_829.confidential = true;
          writer_kitty_entities_829.confidential = true;
          lineNumber = 160;
          moduleName = "kitty";
          lineNumber = 158
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call828)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj630.mutable = true;
          sourceObject = obj630;
          lineNumber = 160
          var bool830 = new GraceBoolean(false)
          obj630.data["isInit"] = bool830;
          var reader_kitty_isInit_831 = function() {
            return this.data["isInit"];
          }
          obj630.methods["isInit"] = reader_kitty_isInit_831;
          obj630.data["isInit"] = bool830;
          var writer_kitty_isInit_831 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj630.methods["isInit:="] = writer_kitty_isInit_831;
          reader_kitty_isInit_831.confidential = true;
          writer_kitty_isInit_831.confidential = true;
          lineNumber = 161;
          moduleName = "kitty";
          lineNumber = 160
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool830)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj630.mutable = true;
          sourceObject = obj630;
          lineNumber = 161
          var bool832 = new GraceBoolean(false)
          obj630.data["isRunning"] = bool832;
          var reader_kitty_isRunning_833 = function() {
            return this.data["isRunning"];
          }
          obj630.methods["isRunning"] = reader_kitty_isRunning_833;
          obj630.data["isRunning"] = bool832;
          var writer_kitty_isRunning_833 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj630.methods["isRunning:="] = writer_kitty_isRunning_833;
          reader_kitty_isRunning_833.confidential = true;
          writer_kitty_isRunning_833.confidential = true;
          lineNumber = 163;
          moduleName = "kitty";
          lineNumber = 161
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool832)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj630.mutable = true;
          sourceObject = obj630;
          obj630.data["mctx"] = undefined;
          var reader_kitty_mctx_834 = function() {
            return this.data["mctx"];
          }
          obj630.methods["mctx"] = reader_kitty_mctx_834;
          obj630.data["mctx"] = undefined;
          var writer_kitty_mctx_834 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj630.methods["mctx:="] = writer_kitty_mctx_834;
          reader_kitty_mctx_834.confidential = true;
          writer_kitty_mctx_834.confidential = true;
          obj630.mutable = true;
          sourceObject = obj630;
          lineNumber = 165
          onSelf = true;
          var call835 = callmethod(this, "init", [0]);
          sourceObject = obj630;
          sourceObject = obj630;
          sourceObject = obj630;
          sourceObject = obj630;
          sourceObject = obj630;
          sourceObject = obj630;
          sourceObject = obj630;
          lineNumber = 273
          var string836 = new GraceString("WORLD CREATED");
          var call837 = Grace_print(string836);
          superDepth = origSuperDepth;
        }
        obj_init_630.apply(inheritingObject, []);
        return obj630
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj418.methods["new()object"] = func629;
    var func838 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 142
        var string839 = new GraceString("class KittyWorld");
        return string839
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func838.paramCounts = [
    ];
    func838.variableArities = [
    ];
    obj418.methods["asDebugString"] = func838;
    func838.definitionLine = 142;
    func838.definitionModule = "kitty";
    sourceObject = obj418;
    sourceObject = obj418;
    superDepth = origSuperDepth;
  }
  obj_init_418.apply(obj418, []);
  var var_KittyWorld = obj418;
  lineNumber = 276
  lineNumber = 287
  lineNumber = 303
  lineNumber = 307
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
'dom',
'StandardPrelude',
];
if (gctCache)
  gctCache['kitty'] = "path:\n kitty\nclasses:\n KittyImage\n KittyEntity\n KittyWorld\nfresh:Entity:\n awake\n posX\n posY\n draw\n moveDown\n rotation\n setAction\n moveRight\n setImage\n getRotation\n moveLeft\n update\n setLocation\n start\n action:=\n getX\n getY\n image:=\n moveUp\n action\n posX:=\n posY:=\n image\n onDestroy\n rotation:=\nconfidential:\nconstructors-of:KittyWorld:\n new\nfresh:Image:\n imgTag\n height\n draw\n height:=\n width\n width:=\nconstructors-of:KittyImage:\n new\nmodules:\n StandardPrelude\n mgcollections\nmethods-of:KittyEntity.new:\n awake\n posX\n posY\n draw\n moveDown\n rotation\n setAction\n moveRight\n setImage\n getRotation\n moveLeft\n update\n setLocation\n start\n action:=\n getX\n getY\n image:=\n moveUp\n action\n posX:=\n posY:=\n image\n rotation:=\n onDestroy\nfresh:World:\n setBackground\n isRunning:=\n isInit\n mctx:=\n document:=\n backgroundColour\n canvasWidth\n document\n backingCanvas:=\n update\n entities\n canvasWidth:=\n backgroundColour:=\n canvasHeight:=\n start\n entities:=\n backingCanvas\n canvas:=\n backingContext\n canvasHeight\n background:=\n init\n backingContext:=\n canvas\n isRunning\n background\n stop\n mctx\n addEntity\n isInit:=\nfresh-methods:\n Image\n Entity\n World\npublic:\n m_world\n m_world:=\n worldSet\n worldSet:=\n keyDownListener\n keyDownListener:=\n mouseDownListener\n mouseDownListener:=\n KittyImage\n Image\n KittyEntity\n Entity\n KittyWorld\n World\n start\n stop\n setWorld\nmethods-of:KittyImage.new:\n imgTag\n height\n draw\n height:=\n width\n width:=\nmethods-of:KittyWorld.new:\n setBackground\n backingContext\n isInit\n canvasWidth:=\n document:=\n isRunning:=\n canvasWidth\n document\n backingCanvas:=\n update\n entities\n mctx:=\n backgroundColour:=\n canvasHeight:=\n start\n mctx\n backingCanvas\n canvas:=\n backgroundColour\n canvasHeight\n background:=\n init\n addEntity\n canvas\n isRunning\n background\n stop\n entities:=\n isInit:=\n backingContext:=\nconstructors-of:KittyEntity:\n new\n";
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
    "        // Key Listener",
    "        keyDownListener := { ev->",
    "            print \"WORLD\"",
    "            if (ev.keyCode == 81) then {",
    "                stop",
    "            }",
    "",
    "            var key := ev.keyCode",
    "",
    "            // Feed key event to entities",
    "            for (entities) do { entity->",
    "                match (key) ",
    "                    case { 87 -> entity.moveUp(1)}",
    "                    case { 83 -> entity.moveDown(1)}",
    "                    case { 65 -> entity.moveLeft(1)}",
    "                    case { 68 -> entity.moveRight(1)}",
    "            }",
    "        }",
    "        document.addEventListener(\"keydown\", keyDownListener)",
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
    "            entity.doUpdate",
    "            entity.draw(mctx, canvasWidth / 2, canvasHeight / 2)",
    "        }",
    "",
    "        print \"WORLD UPDATED\"",
    "    }",
    "",
    "    method stop {",
    "        print \"WORLD STOPPING...\"",
    "        isRunning := false",
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
