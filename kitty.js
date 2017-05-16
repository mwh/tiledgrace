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
  lineNumber = 109
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
      lineNumber = 110
      var obj9 = Grace_allocObject();
      obj9.definitionModule = "kitty";
      obj9.definitionLine = 110;
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
        lineNumber = 111
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
  func8.definitionLine = 109;
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
      obj13.definitionLine = 110;
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
  lineNumber = 227
  var func16 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func16.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (World)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 228
      var obj17 = Grace_allocObject();
      obj17.definitionModule = "kitty";
      obj17.definitionLine = 228;
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
        lineNumber = 229
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
  func16.definitionLine = 227;
  func16.definitionModule = "kitty";
  var func20 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj21 = Grace_allocObject();
      obj21.definitionModule = "kitty";
      obj21.definitionLine = 228;
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
  lineNumber = 238
  var func24 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func24.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 240
      var string25 = new GraceString("CHECKING...");
      var call26 = Grace_print(string25);
      lineNumber = 247
      var if27 = var_done;
      lineNumber = 242
      var call28 = callmethod(var_worldSet,"prefix!", [0]);
      if (Grace_isTrue(call28)) {
        lineNumber = 243
        var string29 = new GraceString("NO WORLD!!");
        var call30 = Grace_print(string29);
        lineNumber = 245
        return var_done
      }
      lineNumber = 247
      var string31 = new GraceString("STARTING...");
      var call32 = Grace_print(string31);
      lineNumber = 250
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
  func24.definitionLine = 238;
  func24.definitionModule = "kitty";
  lineNumber = 254
  var func34 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func34.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 255
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
  func34.definitionLine = 254;
  func34.definitionModule = "kitty";
  lineNumber = 258
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
      lineNumber = 260
      lineNumber = 259
      var_m__95__world = var_world__39__;
      lineNumber = 261
      lineNumber = 260
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
  func37.definitionLine = 258;
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
  lineNumber = 250
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
  func40.definitionLine = 250;
  func40.definitionModule = "kitty";
  lineNumber = 250
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
  func41.definitionLine = 250;
  func41.definitionModule = "kitty";
  lineNumber = 11
  lineNumber = 8
  var bool42 = new GraceBoolean(false)
  var var_worldSet = bool42;
  lineNumber = 250
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
  func43.definitionLine = 250;
  func43.definitionModule = "kitty";
  lineNumber = 250
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
  func44.definitionLine = 250;
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
  lineNumber = 250
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
  func45.definitionLine = 250;
  func45.definitionModule = "kitty";
  lineNumber = 250
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
  func46.definitionLine = 250;
  func46.definitionModule = "kitty";
  lineNumber = 17
  var var_mouseDownListener;
  lineNumber = 250
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
  func47.definitionLine = 250;
  func47.definitionModule = "kitty";
  lineNumber = 250
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
  func48.definitionLine = 250;
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
          func244.definitionLine = 59;
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
          func245.definitionLine = 64;
          func245.definitionModule = "kitty";
          var func246 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func246.paramCounts[0])
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
          func246.paramCounts = [
            0,
          ];
          func246.variableArities = [
            false,
          ];
          obj242.methods["update"] = func246;
          func246.definitionLine = 69;
          func246.definitionModule = "kitty";
          var func247 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func247.paramCounts[0])
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
          func247.paramCounts = [
            0,
          ];
          func247.variableArities = [
            false,
          ];
          obj242.methods["onDestroy"] = func247;
          func247.definitionLine = 74;
          func247.definitionModule = "kitty";
          var func248 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func248.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 79
              var call249 = callmethod(var_ctx,"save", [0]);
              lineNumber = 80
              onSelf = true;
              var call250 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call251 = callmethod(this, "posY", [0]);
              var call252 = callmethod(var_ctx,"translate", [2], call250, call251);
              lineNumber = 81
              onSelf = true;
              var call253 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call254 = callmethod(this, "image", [0]);
              var call255 = callmethod(call254,"draw", [4], var_ctx, var_dx, var_dy, call253);
              lineNumber = 82
              var call256 = callmethod(var_ctx,"restore", [0]);
              return call256
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func248.paramCounts = [
            3,
          ];
          func248.variableArities = [
            false,
          ];
          obj242.methods["draw"] = func248;
          func248.definitionLine = 78;
          func248.definitionModule = "kitty";
          var func257 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func257.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 86
              lineNumber = 82
              lineNumber = 86
              var call258 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call259 = callmethod(call258, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call260 = callmethod(call259, "Image", [3], var_image__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call261 = callmethod(this, "image:=", [1], call260);
              return call261
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
          obj242.methods["setImage"] = func257;
          func257.definitionLine = 85;
          func257.definitionModule = "kitty";
          var func262 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func262.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 91
              lineNumber = 86
              lineNumber = 90
              onSelf = true;
              var call263 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 92
              lineNumber = 86
              lineNumber = 91
              onSelf = true;
              var call264 = callmethod(this, "posY:=", [1], var_y);
              return call264
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func262.paramCounts = [
            2,
          ];
          func262.variableArities = [
            false,
          ];
          obj242.methods["setLocation"] = func262;
          func262.definitionLine = 89;
          func262.definitionModule = "kitty";
          var func265 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func265.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 96
              lineNumber = 95
              onSelf = true;
              var call266 = callmethod(this, "posX", [0]);
              return call266
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func265.paramCounts = [
            0,
          ];
          func265.variableArities = [
            false,
          ];
          obj242.methods["getX"] = func265;
          func265.definitionLine = 94;
          func265.definitionModule = "kitty";
          var func267 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func267.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 100
              lineNumber = 99
              onSelf = true;
              var call268 = callmethod(this, "posY", [0]);
              return call268
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func267.paramCounts = [
            0,
          ];
          func267.variableArities = [
            false,
          ];
          obj242.methods["getY"] = func267;
          func267.definitionLine = 98;
          func267.definitionModule = "kitty";
          var func269 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func269.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 104
              lineNumber = 103
              onSelf = true;
              var call270 = callmethod(this, "rotation", [0]);
              return call270
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
          obj242.methods["getRotation"] = func269;
          func269.definitionLine = 102;
          func269.definitionModule = "kitty";
          sourceObject = obj242;
          lineNumber = 48
          var string271 = new GraceString(")...");
          var string274 = new GraceString(", ");
          var string277 = new GraceString("CREATING ENTITY AT (");
          var opresult279 = callmethod(string277, "++", [1], var_x__39__);
          var opresult281 = callmethod(opresult279, "++", [1], string274);
          var opresult283 = callmethod(opresult281, "++", [1], var_y__39__);
          var opresult285 = callmethod(opresult283, "++", [1], string271);
          var call286 = Grace_print(opresult285);
          sourceObject = obj242;
          lineNumber = 50
          obj242.data["posX"] = var_x__39__;
          var reader_kitty_posX_287 = function() {
            return this.data["posX"];
          }
          obj242.methods["posX"] = reader_kitty_posX_287;
          obj242.data["posX"] = var_x__39__;
          var writer_kitty_posX_287 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj242.methods["posX:="] = writer_kitty_posX_287;
          reader_kitty_posX_287.confidential = true;
          writer_kitty_posX_287.confidential = true;
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
          var reader_kitty_posY_288 = function() {
            return this.data["posY"];
          }
          obj242.methods["posY"] = reader_kitty_posY_288;
          obj242.data["posY"] = var_y__39__;
          var writer_kitty_posY_288 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj242.methods["posY:="] = writer_kitty_posY_288;
          reader_kitty_posY_288.confidential = true;
          writer_kitty_posY_288.confidential = true;
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
          var reader_kitty_rotation_289 = function() {
            return this.data["rotation"];
          }
          obj242.methods["rotation"] = reader_kitty_rotation_289;
          obj242.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_289 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj242.methods["rotation:="] = writer_kitty_rotation_289;
          reader_kitty_rotation_289.confidential = true;
          writer_kitty_rotation_289.confidential = true;
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
          obj242.data["image"] = undefined;
          var reader_kitty_image_290 = function() {
            return this.data["image"];
          }
          obj242.methods["image"] = reader_kitty_image_290;
          obj242.data["image"] = undefined;
          var writer_kitty_image_290 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj242.methods["image:="] = writer_kitty_image_290;
          reader_kitty_image_290.confidential = true;
          writer_kitty_image_290.confidential = true;
          obj242.mutable = true;
          sourceObject = obj242;
          lineNumber = 56
          onSelf = true;
          var call291 = callmethod(this, "awake", [0]);
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
          lineNumber = 106
          var string292 = new GraceString("ENTITY CREATED");
          var call293 = Grace_print(string292);
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
    var func294 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj295 = Grace_allocObject();
        obj295.definitionModule = "kitty";
        obj295.definitionLine = 46;
        var inho295 = inheritingObject;
        while (inho295.superobj) inho295 = inho295.superobj;
        inho295.superobj = obj295;
        obj295.data = inheritingObject.data;
        obj295.outer = this;
        var reader_kitty_outer_296 = function() {
          return this.outer;
        }
        obj295.methods["outer"] = reader_kitty_outer_296;
        function obj_init_295() {
          var origSuperDepth = superDepth;
          superDepth = obj295;
          obj295.annotations = [];
          var func297 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func297.paramCounts[0])
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
          func297.paramCounts = [
            0,
          ];
          func297.variableArities = [
            false,
          ];
          obj295.methods["awake"] = func297;
          func297.definitionLine = 59;
          func297.definitionModule = "kitty";
          var func298 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func298.paramCounts[0])
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
          func298.paramCounts = [
            0,
          ];
          func298.variableArities = [
            false,
          ];
          obj295.methods["start"] = func298;
          func298.definitionLine = 64;
          func298.definitionModule = "kitty";
          var func299 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func299.paramCounts[0])
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
          func299.paramCounts = [
            0,
          ];
          func299.variableArities = [
            false,
          ];
          obj295.methods["update"] = func299;
          func299.definitionLine = 69;
          func299.definitionModule = "kitty";
          var func300 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func300.paramCounts[0])
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
          func300.paramCounts = [
            0,
          ];
          func300.variableArities = [
            false,
          ];
          obj295.methods["onDestroy"] = func300;
          func300.definitionLine = 74;
          func300.definitionModule = "kitty";
          var func301 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func301.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 79
              var call302 = callmethod(var_ctx,"save", [0]);
              lineNumber = 80
              onSelf = true;
              var call303 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call304 = callmethod(this, "posY", [0]);
              var call305 = callmethod(var_ctx,"translate", [2], call303, call304);
              lineNumber = 81
              onSelf = true;
              var call306 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call307 = callmethod(this, "image", [0]);
              var call308 = callmethod(call307,"draw", [4], var_ctx, var_dx, var_dy, call306);
              lineNumber = 82
              var call309 = callmethod(var_ctx,"restore", [0]);
              return call309
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func301.paramCounts = [
            3,
          ];
          func301.variableArities = [
            false,
          ];
          obj295.methods["draw"] = func301;
          func301.definitionLine = 78;
          func301.definitionModule = "kitty";
          var func310 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func310.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 86
              lineNumber = 82
              lineNumber = 86
              var call311 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call312 = callmethod(call311, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call313 = callmethod(call312, "Image", [3], var_image__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call314 = callmethod(this, "image:=", [1], call313);
              return call314
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func310.paramCounts = [
            1,
          ];
          func310.variableArities = [
            false,
          ];
          obj295.methods["setImage"] = func310;
          func310.definitionLine = 85;
          func310.definitionModule = "kitty";
          var func315 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func315.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 91
              lineNumber = 86
              lineNumber = 90
              onSelf = true;
              var call316 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 92
              lineNumber = 86
              lineNumber = 91
              onSelf = true;
              var call317 = callmethod(this, "posY:=", [1], var_y);
              return call317
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func315.paramCounts = [
            2,
          ];
          func315.variableArities = [
            false,
          ];
          obj295.methods["setLocation"] = func315;
          func315.definitionLine = 89;
          func315.definitionModule = "kitty";
          var func318 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func318.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 96
              lineNumber = 95
              onSelf = true;
              var call319 = callmethod(this, "posX", [0]);
              return call319
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func318.paramCounts = [
            0,
          ];
          func318.variableArities = [
            false,
          ];
          obj295.methods["getX"] = func318;
          func318.definitionLine = 94;
          func318.definitionModule = "kitty";
          var func320 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func320.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 100
              lineNumber = 99
              onSelf = true;
              var call321 = callmethod(this, "posY", [0]);
              return call321
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
          obj295.methods["getY"] = func320;
          func320.definitionLine = 98;
          func320.definitionModule = "kitty";
          var func322 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func322.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 104
              lineNumber = 103
              onSelf = true;
              var call323 = callmethod(this, "rotation", [0]);
              return call323
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
          obj295.methods["getRotation"] = func322;
          func322.definitionLine = 102;
          func322.definitionModule = "kitty";
          sourceObject = obj295;
          lineNumber = 48
          var string324 = new GraceString(")...");
          var string327 = new GraceString(", ");
          var string330 = new GraceString("CREATING ENTITY AT (");
          var opresult332 = callmethod(string330, "++", [1], var_x__39__);
          var opresult334 = callmethod(opresult332, "++", [1], string327);
          var opresult336 = callmethod(opresult334, "++", [1], var_y__39__);
          var opresult338 = callmethod(opresult336, "++", [1], string324);
          var call339 = Grace_print(opresult338);
          sourceObject = obj295;
          lineNumber = 50
          obj295.data["posX"] = var_x__39__;
          var reader_kitty_posX_340 = function() {
            return this.data["posX"];
          }
          obj295.methods["posX"] = reader_kitty_posX_340;
          obj295.data["posX"] = var_x__39__;
          var writer_kitty_posX_340 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj295.methods["posX:="] = writer_kitty_posX_340;
          reader_kitty_posX_340.confidential = true;
          writer_kitty_posX_340.confidential = true;
          lineNumber = 51;
          moduleName = "kitty";
          lineNumber = 50
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj295.mutable = true;
          sourceObject = obj295;
          lineNumber = 51
          obj295.data["posY"] = var_y__39__;
          var reader_kitty_posY_341 = function() {
            return this.data["posY"];
          }
          obj295.methods["posY"] = reader_kitty_posY_341;
          obj295.data["posY"] = var_y__39__;
          var writer_kitty_posY_341 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj295.methods["posY:="] = writer_kitty_posY_341;
          reader_kitty_posY_341.confidential = true;
          writer_kitty_posY_341.confidential = true;
          lineNumber = 52;
          moduleName = "kitty";
          lineNumber = 51
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj295.mutable = true;
          sourceObject = obj295;
          lineNumber = 52
          obj295.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_342 = function() {
            return this.data["rotation"];
          }
          obj295.methods["rotation"] = reader_kitty_rotation_342;
          obj295.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_342 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj295.methods["rotation:="] = writer_kitty_rotation_342;
          reader_kitty_rotation_342.confidential = true;
          writer_kitty_rotation_342.confidential = true;
          lineNumber = 54;
          moduleName = "kitty";
          lineNumber = 52
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj295.mutable = true;
          sourceObject = obj295;
          obj295.data["image"] = undefined;
          var reader_kitty_image_343 = function() {
            return this.data["image"];
          }
          obj295.methods["image"] = reader_kitty_image_343;
          obj295.data["image"] = undefined;
          var writer_kitty_image_343 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj295.methods["image:="] = writer_kitty_image_343;
          reader_kitty_image_343.confidential = true;
          writer_kitty_image_343.confidential = true;
          obj295.mutable = true;
          sourceObject = obj295;
          lineNumber = 56
          onSelf = true;
          var call344 = callmethod(this, "awake", [0]);
          sourceObject = obj295;
          sourceObject = obj295;
          sourceObject = obj295;
          sourceObject = obj295;
          sourceObject = obj295;
          sourceObject = obj295;
          sourceObject = obj295;
          sourceObject = obj295;
          sourceObject = obj295;
          sourceObject = obj295;
          sourceObject = obj295;
          lineNumber = 106
          var string345 = new GraceString("ENTITY CREATED");
          var call346 = Grace_print(string345);
          superDepth = origSuperDepth;
        }
        obj_init_295.apply(inheritingObject, []);
        return obj295
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj239.methods["new()object"] = func294;
    var func347 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 46
        var string348 = new GraceString("class KittyEntity");
        return string348
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func347.paramCounts = [
    ];
    func347.variableArities = [
    ];
    obj239.methods["asDebugString"] = func347;
    func347.definitionLine = 46;
    func347.definitionModule = "kitty";
    sourceObject = obj239;
    sourceObject = obj239;
    superDepth = origSuperDepth;
  }
  obj_init_239.apply(obj239, []);
  var var_KittyEntity = obj239;
  lineNumber = 109
  lineNumber = 116
  var func349 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func349.paramCounts[0])
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
  func349.paramCounts = [
    0,
  ];
  func349.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func349;
  func349.definitionLine = 116;
  func349.definitionModule = "kitty";
  var obj350 = Grace_allocObject();
  obj350.definitionModule = "kitty";
  obj350.definitionLine = 116;
  obj350.outer = this;
  var reader_kitty_outer_351 = function() {
    return this.outer;
  }
  obj350.methods["outer"] = reader_kitty_outer_351;
  function obj_init_350() {
    var origSuperDepth = superDepth;
    superDepth = obj350;
    obj350.annotations = [];
    var func352 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func352.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj353 = Grace_allocObject();
        obj353.definitionModule = "kitty";
        obj353.definitionLine = 116;
        obj353.outer = this;
        var reader_kitty_outer_354 = function() {
          return this.outer;
        }
        obj353.methods["outer"] = reader_kitty_outer_354;
        function obj_init_353() {
          var origSuperDepth = superDepth;
          superDepth = obj353;
          obj353.annotations = [];
          var func355 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func355.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 144
              var string356 = new GraceString("INITIALIZING WORLD...");
              var call357 = Grace_print(string356);
              lineNumber = 150
              var if358 = var_done;
              lineNumber = 146
              onSelf = true;
              var call359 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call359)) {
                lineNumber = 148
                lineNumber = 147
                var bool360 = new GraceBoolean(false)
                return bool360
              }
              lineNumber = 151
              lineNumber = 116
              lineNumber = 150
              var call361 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call362 = callmethod(this, "document:=", [1], call361);
              lineNumber = 151
              lineNumber = 150
              lineNumber = 151
              var string363 = new GraceString("standard-canvas");
              onSelf = true;
              var call364 = callmethod(this, "document", [0]);
              var call365 = callmethod(call364,"getElementById", [1], string363);
              onSelf = true;
              var call366 = callmethod(this, "canvas:=", [1], call365);
              lineNumber = 153
              lineNumber = 150
              lineNumber = 152
              onSelf = true;
              var call367 = callmethod(this, "canvas", [0]);
              var call368 = callmethod(call367,"width", [0]);
              onSelf = true;
              var call369 = callmethod(this, "canvasWidth:=", [1], call368);
              lineNumber = 156
              lineNumber = 152
              lineNumber = 153
              onSelf = true;
              var call370 = callmethod(this, "canvas", [0]);
              var call371 = callmethod(call370,"height", [0]);
              onSelf = true;
              var call372 = callmethod(this, "canvasHeight:=", [1], call371);
              lineNumber = 166
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
              block373.className = 'block<kitty:166>';
              block373.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 159
                lineNumber = 158
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
                lineNumber = 159;
                moduleName = "kitty";
                lineNumber = 158
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 161
                lineNumber = 159
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
                lineNumber = 161;
                moduleName = "kitty";
                lineNumber = 159
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 161
                var string404 = new GraceString("MOUSEDOWN");
                var call405 = Grace_print(string404);
                return call405;
              };
              var_mouseDownListener = block373;
              lineNumber = 166
              var string406 = new GraceString("mousedown");
              onSelf = true;
              var call407 = callmethod(this, "canvas", [0]);
              var call408 = callmethod(call407,"addEventListener", [2], string406, var_mouseDownListener);
              lineNumber = 172
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
              block409.className = 'block<kitty:172>';
              block409.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 170
                var string410 = new GraceString("KEYDOWN");
                var call411 = Grace_print(string410);
                return call411;
              };
              var_keyDownListener = block409;
              lineNumber = 172
              var string412 = new GraceString("keydown");
              onSelf = true;
              var call413 = callmethod(this, "document", [0]);
              var call414 = callmethod(call413,"addEventListener", [2], string412, var_keyDownListener);
              lineNumber = 174
              lineNumber = 159
              lineNumber = 174
              var string415 = new GraceString("canvas");
              var call416 = callmethod(var_dom,"document", [0]);
              var call417 = callmethod(call416,"createElement", [1], string415);
              onSelf = true;
              var call418 = callmethod(this, "backingCanvas:=", [1], call417);
              lineNumber = 176
              lineNumber = 174
              lineNumber = 175
              onSelf = true;
              var call419 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call420 = callmethod(this, "backingCanvas", [0]);
              var call421 = callmethod(call420,"height:=", [1], call419);
              lineNumber = 177
              lineNumber = 174
              lineNumber = 176
              onSelf = true;
              var call422 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call423 = callmethod(this, "backingCanvas", [0]);
              var call424 = callmethod(call423,"width:=", [1], call422);
              lineNumber = 177
              lineNumber = 174
              lineNumber = 177
              var string425 = new GraceString("2d");
              onSelf = true;
              var call426 = callmethod(this, "backingCanvas", [0]);
              var call427 = callmethod(call426,"getContext", [1], string425);
              onSelf = true;
              var call428 = callmethod(this, "backingContext:=", [1], call427);
              lineNumber = 178
              lineNumber = 174
              lineNumber = 178
              var string429 = new GraceString("2d");
              onSelf = true;
              var call430 = callmethod(this, "canvas", [0]);
              var call431 = callmethod(call430,"getContext", [1], string429);
              onSelf = true;
              var call432 = callmethod(this, "mctx:=", [1], call431);
              lineNumber = 181
              lineNumber = 174
              lineNumber = 180
              var bool433 = new GraceBoolean(true)
              onSelf = true;
              var call434 = callmethod(this, "isInit:=", [1], bool433);
              lineNumber = 181
              var string435 = new GraceString("INITIALIZATION FINISHED");
              var call436 = Grace_print(string435);
              return call436
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func355.paramCounts = [
            0,
          ];
          func355.variableArities = [
            false,
          ];
          obj353.methods["init"] = func355;
          func355.definitionLine = 142;
          func355.definitionModule = "kitty";
          var func437 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func437.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 191
              var string438 = new GraceString("WORLD STARTED");
              var call439 = Grace_print(string438);
              lineNumber = 193
              lineNumber = 174
              lineNumber = 192
              var bool440 = new GraceBoolean(true)
              onSelf = true;
              var call441 = callmethod(this, "isRunning:=", [1], bool440);
              lineNumber = 193
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
              block442.className = 'block<kitty:193>';
              block442.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call443 = callmethod(this, "isRunning", [0]);
                return call443;
              };
              lineNumber = 196
              var block444 = Grace_allocObject();
              block444.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block444.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block444.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block444.methods["match"] = GraceBlock_match;
              block444.methods["prefix?"] = GraceBlock_lift;
              block444.receiver = this;
              block444.className = 'block<kitty:196>';
              block444.real = function(
              ) {
                sourceObject = this;
                lineNumber = 194
                onSelf = true;
                var call445 = callmethod(this, "update", [0]);
                return call445;
              };
              lineNumber = 193
              var call446 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block442, new GraceNum(10), block444);
              return call446
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func437.paramCounts = [
            0,
          ];
          func437.variableArities = [
            false,
          ];
          obj353.methods["start"] = func437;
          func437.definitionLine = 189;
          func437.definitionModule = "kitty";
          var func447 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func447.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 200
              var string448 = new GraceString("UPDATING WORLD...");
              var call449 = Grace_print(string448);
              lineNumber = 204
              lineNumber = 174
              lineNumber = 203
              onSelf = true;
              var call450 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call451 = callmethod(this, "mctx", [0]);
              var call452 = callmethod(call451,"fillStyle:=", [1], call450);
              lineNumber = 204
              onSelf = true;
              var call453 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call454 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call455 = callmethod(this, "mctx", [0]);
              var call456 = callmethod(call455,"fillRect", [4], new GraceNum(0), new GraceNum(0), call453, call454);
              lineNumber = 205
              onSelf = true;
              var call457 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call458 = callmethod(this, "mctx", [0]);
              var call459 = callmethod(call458,"drawImage", [3], call457, new GraceNum(0), new GraceNum(0));
              lineNumber = 206
              onSelf = true;
              var call460 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call462 = callmethod(this, "canvasWidth", [0]);
              var quotient464 = callmethod(call462, "/", [1], new GraceNum(2));
              onSelf = true;
              var call466 = callmethod(this, "canvasHeight", [0]);
              var quotient468 = callmethod(call466, "/", [1], new GraceNum(2));
              onSelf = true;
              var call469 = callmethod(this, "background", [0]);
              var call470 = callmethod(call469,"draw", [4], call460, quotient464, quotient468, new GraceNum(0));
              lineNumber = 209
              onSelf = true;
              var call471 = callmethod(this, "entities", [0]);
              lineNumber = 213
              var block472 = Grace_allocObject();
              block472.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block472.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block472.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block472.methods["match"] = GraceBlock_match;
              block472.methods["prefix?"] = GraceBlock_lift;
              block472.receiver = this;
              block472.className = 'block<kitty:213>';
              block472.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 210
                onSelf = true;
                var call473 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call475 = callmethod(this, "canvasWidth", [0]);
                var quotient477 = callmethod(call475, "/", [1], new GraceNum(2));
                onSelf = true;
                var call479 = callmethod(this, "canvasHeight", [0]);
                var quotient481 = callmethod(call479, "/", [1], new GraceNum(2));
                var call482 = callmethod(var_entity,"draw", [3], call473, quotient477, quotient481);
                return call482;
              };
              var call483 = callmethod(Grace_prelude,"for()do", [1, 1], call471, block472);
              lineNumber = 213
              var string484 = new GraceString("WORLD UPDATED");
              var call485 = Grace_print(string484);
              return call485
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func447.paramCounts = [
            0,
          ];
          func447.variableArities = [
            false,
          ];
          obj353.methods["update"] = func447;
          func447.definitionLine = 199;
          func447.definitionModule = "kitty";
          var func486 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func486.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 217
              lineNumber = 174
              lineNumber = 217
              onSelf = true;
              var call487 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call488 = callmethod(this, "canvasHeight", [0]);
              var call489 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call490 = callmethod(call489, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call491 = callmethod(call490, "Image", [3], var_background__39__, call487, call488);
              onSelf = true;
              var call492 = callmethod(this, "background:=", [1], call491);
              return call492
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func486.paramCounts = [
            1,
          ];
          func486.variableArities = [
            false,
          ];
          obj353.methods["setBackground"] = func486;
          func486.definitionLine = 216;
          func486.definitionModule = "kitty";
          var func493 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func493.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 221
              onSelf = true;
              var call494 = callmethod(this, "entities", [0]);
              var call495 = callmethod(call494,"push", [1], var_e);
              return call495
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func493.paramTypes = [];
          func493.paramTypes.push([]);
          func493.paramCounts = [
            1,
          ];
          func493.variableArities = [
            false,
          ];
          obj353.methods["addEntity"] = func493;
          func493.definitionLine = 220;
          func493.definitionModule = "kitty";
          sourceObject = obj353;
          lineNumber = 118
          var string496 = new GraceString("CREATING NEW WORLD...");
          var call497 = Grace_print(string496);
          sourceObject = obj353;
          obj353.data["background"] = undefined;
          var reader_kitty_background_498 = function() {
            return this.data["background"];
          }
          obj353.methods["background"] = reader_kitty_background_498;
          obj353.data["background"] = undefined;
          var writer_kitty_background_498 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj353.methods["background:="] = writer_kitty_background_498;
          reader_kitty_background_498.confidential = true;
          writer_kitty_background_498.confidential = true;
          obj353.mutable = true;
          sourceObject = obj353;
          lineNumber = 121
          var string499 = new GraceString("black");
          obj353.data["backgroundColour"] = string499;
          var reader_kitty_backgroundColour_500 = function() {
            return this.data["backgroundColour"];
          }
          obj353.methods["backgroundColour"] = reader_kitty_backgroundColour_500;
          obj353.data["backgroundColour"] = string499;
          var writer_kitty_backgroundColour_500 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj353.methods["backgroundColour:="] = writer_kitty_backgroundColour_500;
          reader_kitty_backgroundColour_500.confidential = true;
          writer_kitty_backgroundColour_500.confidential = true;
          lineNumber = 123;
          moduleName = "kitty";
          lineNumber = 121
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string499)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj353.mutable = true;
          sourceObject = obj353;
          obj353.data["document"] = undefined;
          var reader_kitty_document_501 = function() {
            return this.data["document"];
          }
          obj353.methods["document"] = reader_kitty_document_501;
          obj353.data["document"] = undefined;
          var writer_kitty_document_501 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj353.methods["document:="] = writer_kitty_document_501;
          reader_kitty_document_501.confidential = true;
          writer_kitty_document_501.confidential = true;
          obj353.mutable = true;
          sourceObject = obj353;
          obj353.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_502 = function() {
            return this.data["backingCanvas"];
          }
          obj353.methods["backingCanvas"] = reader_kitty_backingCanvas_502;
          obj353.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_502 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj353.methods["backingCanvas:="] = writer_kitty_backingCanvas_502;
          reader_kitty_backingCanvas_502.confidential = true;
          writer_kitty_backingCanvas_502.confidential = true;
          obj353.mutable = true;
          sourceObject = obj353;
          obj353.data["backingContext"] = undefined;
          var reader_kitty_backingContext_503 = function() {
            return this.data["backingContext"];
          }
          obj353.methods["backingContext"] = reader_kitty_backingContext_503;
          obj353.data["backingContext"] = undefined;
          var writer_kitty_backingContext_503 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj353.methods["backingContext:="] = writer_kitty_backingContext_503;
          reader_kitty_backingContext_503.confidential = true;
          writer_kitty_backingContext_503.confidential = true;
          obj353.mutable = true;
          sourceObject = obj353;
          obj353.data["canvas"] = undefined;
          var reader_kitty_canvas_504 = function() {
            return this.data["canvas"];
          }
          obj353.methods["canvas"] = reader_kitty_canvas_504;
          obj353.data["canvas"] = undefined;
          var writer_kitty_canvas_504 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj353.methods["canvas:="] = writer_kitty_canvas_504;
          reader_kitty_canvas_504.confidential = true;
          writer_kitty_canvas_504.confidential = true;
          obj353.mutable = true;
          sourceObject = obj353;
          obj353.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_505 = function() {
            return this.data["canvasWidth"];
          }
          obj353.methods["canvasWidth"] = reader_kitty_canvasWidth_505;
          obj353.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_505 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj353.methods["canvasWidth:="] = writer_kitty_canvasWidth_505;
          reader_kitty_canvasWidth_505.confidential = true;
          writer_kitty_canvasWidth_505.confidential = true;
          obj353.mutable = true;
          sourceObject = obj353;
          obj353.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_506 = function() {
            return this.data["canvasHeight"];
          }
          obj353.methods["canvasHeight"] = reader_kitty_canvasHeight_506;
          obj353.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_506 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj353.methods["canvasHeight:="] = writer_kitty_canvasHeight_506;
          reader_kitty_canvasHeight_506.confidential = true;
          writer_kitty_canvasHeight_506.confidential = true;
          obj353.mutable = true;
          sourceObject = obj353;
          lineNumber = 132
          var call507 = callmethod(var_collections,"list", [0]);
          var call508 = callmethod(call507,"new", [0]);
          obj353.data["entities"] = call508;
          var reader_kitty_entities_509 = function() {
            return this.data["entities"];
          }
          obj353.methods["entities"] = reader_kitty_entities_509;
          obj353.data["entities"] = call508;
          var writer_kitty_entities_509 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj353.methods["entities:="] = writer_kitty_entities_509;
          reader_kitty_entities_509.confidential = true;
          writer_kitty_entities_509.confidential = true;
          lineNumber = 134;
          moduleName = "kitty";
          lineNumber = 132
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call508)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj353.mutable = true;
          sourceObject = obj353;
          lineNumber = 134
          var bool510 = new GraceBoolean(false)
          obj353.data["isInit"] = bool510;
          var reader_kitty_isInit_511 = function() {
            return this.data["isInit"];
          }
          obj353.methods["isInit"] = reader_kitty_isInit_511;
          obj353.data["isInit"] = bool510;
          var writer_kitty_isInit_511 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj353.methods["isInit:="] = writer_kitty_isInit_511;
          reader_kitty_isInit_511.confidential = true;
          writer_kitty_isInit_511.confidential = true;
          lineNumber = 135;
          moduleName = "kitty";
          lineNumber = 134
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool510)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj353.mutable = true;
          sourceObject = obj353;
          lineNumber = 135
          var bool512 = new GraceBoolean(false)
          obj353.data["isRunning"] = bool512;
          var reader_kitty_isRunning_513 = function() {
            return this.data["isRunning"];
          }
          obj353.methods["isRunning"] = reader_kitty_isRunning_513;
          obj353.data["isRunning"] = bool512;
          var writer_kitty_isRunning_513 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj353.methods["isRunning:="] = writer_kitty_isRunning_513;
          reader_kitty_isRunning_513.confidential = true;
          writer_kitty_isRunning_513.confidential = true;
          lineNumber = 137;
          moduleName = "kitty";
          lineNumber = 135
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool512)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj353.mutable = true;
          sourceObject = obj353;
          obj353.data["mctx"] = undefined;
          var reader_kitty_mctx_514 = function() {
            return this.data["mctx"];
          }
          obj353.methods["mctx"] = reader_kitty_mctx_514;
          obj353.data["mctx"] = undefined;
          var writer_kitty_mctx_514 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj353.methods["mctx:="] = writer_kitty_mctx_514;
          reader_kitty_mctx_514.confidential = true;
          writer_kitty_mctx_514.confidential = true;
          obj353.mutable = true;
          sourceObject = obj353;
          lineNumber = 139
          onSelf = true;
          var call515 = callmethod(this, "init", [0]);
          sourceObject = obj353;
          sourceObject = obj353;
          sourceObject = obj353;
          sourceObject = obj353;
          sourceObject = obj353;
          sourceObject = obj353;
          lineNumber = 224
          var string516 = new GraceString("WORLD CREATED");
          var call517 = Grace_print(string516);
          superDepth = origSuperDepth;
        }
        obj_init_353.apply(obj353, []);
        return obj353
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func352.paramCounts = [
      0,
    ];
    func352.variableArities = [
      false,
    ];
    obj350.methods["new"] = func352;
    func352.definitionLine = 116;
    func352.definitionModule = "kitty";
    var func518 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj519 = Grace_allocObject();
        obj519.definitionModule = "kitty";
        obj519.definitionLine = 116;
        var inho519 = inheritingObject;
        while (inho519.superobj) inho519 = inho519.superobj;
        inho519.superobj = obj519;
        obj519.data = inheritingObject.data;
        obj519.outer = this;
        var reader_kitty_outer_520 = function() {
          return this.outer;
        }
        obj519.methods["outer"] = reader_kitty_outer_520;
        function obj_init_519() {
          var origSuperDepth = superDepth;
          superDepth = obj519;
          obj519.annotations = [];
          var func521 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func521.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 144
              var string522 = new GraceString("INITIALIZING WORLD...");
              var call523 = Grace_print(string522);
              lineNumber = 150
              var if524 = var_done;
              lineNumber = 146
              onSelf = true;
              var call525 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call525)) {
                lineNumber = 148
                lineNumber = 147
                var bool526 = new GraceBoolean(false)
                return bool526
              }
              lineNumber = 151
              lineNumber = 132
              lineNumber = 150
              var call527 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call528 = callmethod(this, "document:=", [1], call527);
              lineNumber = 151
              lineNumber = 150
              lineNumber = 151
              var string529 = new GraceString("standard-canvas");
              onSelf = true;
              var call530 = callmethod(this, "document", [0]);
              var call531 = callmethod(call530,"getElementById", [1], string529);
              onSelf = true;
              var call532 = callmethod(this, "canvas:=", [1], call531);
              lineNumber = 153
              lineNumber = 150
              lineNumber = 152
              onSelf = true;
              var call533 = callmethod(this, "canvas", [0]);
              var call534 = callmethod(call533,"width", [0]);
              onSelf = true;
              var call535 = callmethod(this, "canvasWidth:=", [1], call534);
              lineNumber = 156
              lineNumber = 152
              lineNumber = 153
              onSelf = true;
              var call536 = callmethod(this, "canvas", [0]);
              var call537 = callmethod(call536,"height", [0]);
              onSelf = true;
              var call538 = callmethod(this, "canvasHeight:=", [1], call537);
              lineNumber = 166
              var block539 = Grace_allocObject();
              block539.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block539.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block539.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block539.methods["match"] = GraceBlock_match;
              block539.methods["prefix?"] = GraceBlock_lift;
              block539.receiver = this;
              block539.className = 'block<kitty:166>';
              block539.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 159
                lineNumber = 158
                onSelf = true;
                var call540 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call542 = callmethod(this, "canvas", [0]);
                var call543 = callmethod(call542,"offsetWidth", [0]);
                onSelf = true;
                var call545 = callmethod(this, "canvas", [0]);
                var call546 = callmethod(call545,"offsetLeft", [0]);
                var call548 = callmethod(var_ev,"clientX", [0]);
                var diff550 = callmethod(call548, "-", [1], call546);
                var quotient552 = callmethod(diff550, "/", [1], call543);
                var prod554 = callmethod(quotient552, "*", [1], call540);
                var var_x = prod554;
                lineNumber = 159;
                moduleName = "kitty";
                lineNumber = 158
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 161
                lineNumber = 159
                onSelf = true;
                var call555 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call557 = callmethod(this, "canvas", [0]);
                var call558 = callmethod(call557,"offsetHeight", [0]);
                onSelf = true;
                var call560 = callmethod(this, "canvas", [0]);
                var call561 = callmethod(call560,"offsetTop", [0]);
                var call563 = callmethod(var_ev,"clientY", [0]);
                var diff565 = callmethod(call563, "-", [1], call561);
                var quotient567 = callmethod(diff565, "/", [1], call558);
                var prod569 = callmethod(quotient567, "*", [1], call555);
                var var_y = prod569;
                lineNumber = 161;
                moduleName = "kitty";
                lineNumber = 159
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 161
                var string570 = new GraceString("MOUSEDOWN");
                var call571 = Grace_print(string570);
                return call571;
              };
              var_mouseDownListener = block539;
              lineNumber = 166
              var string572 = new GraceString("mousedown");
              onSelf = true;
              var call573 = callmethod(this, "canvas", [0]);
              var call574 = callmethod(call573,"addEventListener", [2], string572, var_mouseDownListener);
              lineNumber = 172
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
              block575.className = 'block<kitty:172>';
              block575.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 170
                var string576 = new GraceString("KEYDOWN");
                var call577 = Grace_print(string576);
                return call577;
              };
              var_keyDownListener = block575;
              lineNumber = 172
              var string578 = new GraceString("keydown");
              onSelf = true;
              var call579 = callmethod(this, "document", [0]);
              var call580 = callmethod(call579,"addEventListener", [2], string578, var_keyDownListener);
              lineNumber = 174
              lineNumber = 159
              lineNumber = 174
              var string581 = new GraceString("canvas");
              var call582 = callmethod(var_dom,"document", [0]);
              var call583 = callmethod(call582,"createElement", [1], string581);
              onSelf = true;
              var call584 = callmethod(this, "backingCanvas:=", [1], call583);
              lineNumber = 176
              lineNumber = 174
              lineNumber = 175
              onSelf = true;
              var call585 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call586 = callmethod(this, "backingCanvas", [0]);
              var call587 = callmethod(call586,"height:=", [1], call585);
              lineNumber = 177
              lineNumber = 174
              lineNumber = 176
              onSelf = true;
              var call588 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call589 = callmethod(this, "backingCanvas", [0]);
              var call590 = callmethod(call589,"width:=", [1], call588);
              lineNumber = 177
              lineNumber = 174
              lineNumber = 177
              var string591 = new GraceString("2d");
              onSelf = true;
              var call592 = callmethod(this, "backingCanvas", [0]);
              var call593 = callmethod(call592,"getContext", [1], string591);
              onSelf = true;
              var call594 = callmethod(this, "backingContext:=", [1], call593);
              lineNumber = 178
              lineNumber = 174
              lineNumber = 178
              var string595 = new GraceString("2d");
              onSelf = true;
              var call596 = callmethod(this, "canvas", [0]);
              var call597 = callmethod(call596,"getContext", [1], string595);
              onSelf = true;
              var call598 = callmethod(this, "mctx:=", [1], call597);
              lineNumber = 181
              lineNumber = 174
              lineNumber = 180
              var bool599 = new GraceBoolean(true)
              onSelf = true;
              var call600 = callmethod(this, "isInit:=", [1], bool599);
              lineNumber = 181
              var string601 = new GraceString("INITIALIZATION FINISHED");
              var call602 = Grace_print(string601);
              return call602
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func521.paramCounts = [
            0,
          ];
          func521.variableArities = [
            false,
          ];
          obj519.methods["init"] = func521;
          func521.definitionLine = 142;
          func521.definitionModule = "kitty";
          var func603 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func603.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 191
              var string604 = new GraceString("WORLD STARTED");
              var call605 = Grace_print(string604);
              lineNumber = 193
              lineNumber = 174
              lineNumber = 192
              var bool606 = new GraceBoolean(true)
              onSelf = true;
              var call607 = callmethod(this, "isRunning:=", [1], bool606);
              lineNumber = 193
              var block608 = Grace_allocObject();
              block608.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block608.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block608.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block608.methods["match"] = GraceBlock_match;
              block608.methods["prefix?"] = GraceBlock_lift;
              block608.receiver = this;
              block608.className = 'block<kitty:193>';
              block608.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call609 = callmethod(this, "isRunning", [0]);
                return call609;
              };
              lineNumber = 196
              var block610 = Grace_allocObject();
              block610.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block610.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block610.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block610.methods["match"] = GraceBlock_match;
              block610.methods["prefix?"] = GraceBlock_lift;
              block610.receiver = this;
              block610.className = 'block<kitty:196>';
              block610.real = function(
              ) {
                sourceObject = this;
                lineNumber = 194
                onSelf = true;
                var call611 = callmethod(this, "update", [0]);
                return call611;
              };
              lineNumber = 193
              var call612 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block608, new GraceNum(10), block610);
              return call612
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func603.paramCounts = [
            0,
          ];
          func603.variableArities = [
            false,
          ];
          obj519.methods["start"] = func603;
          func603.definitionLine = 189;
          func603.definitionModule = "kitty";
          var func613 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func613.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 200
              var string614 = new GraceString("UPDATING WORLD...");
              var call615 = Grace_print(string614);
              lineNumber = 204
              lineNumber = 174
              lineNumber = 203
              onSelf = true;
              var call616 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call617 = callmethod(this, "mctx", [0]);
              var call618 = callmethod(call617,"fillStyle:=", [1], call616);
              lineNumber = 204
              onSelf = true;
              var call619 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call620 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call621 = callmethod(this, "mctx", [0]);
              var call622 = callmethod(call621,"fillRect", [4], new GraceNum(0), new GraceNum(0), call619, call620);
              lineNumber = 205
              onSelf = true;
              var call623 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call624 = callmethod(this, "mctx", [0]);
              var call625 = callmethod(call624,"drawImage", [3], call623, new GraceNum(0), new GraceNum(0));
              lineNumber = 206
              onSelf = true;
              var call626 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call628 = callmethod(this, "canvasWidth", [0]);
              var quotient630 = callmethod(call628, "/", [1], new GraceNum(2));
              onSelf = true;
              var call632 = callmethod(this, "canvasHeight", [0]);
              var quotient634 = callmethod(call632, "/", [1], new GraceNum(2));
              onSelf = true;
              var call635 = callmethod(this, "background", [0]);
              var call636 = callmethod(call635,"draw", [4], call626, quotient630, quotient634, new GraceNum(0));
              lineNumber = 209
              onSelf = true;
              var call637 = callmethod(this, "entities", [0]);
              lineNumber = 213
              var block638 = Grace_allocObject();
              block638.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block638.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block638.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block638.methods["match"] = GraceBlock_match;
              block638.methods["prefix?"] = GraceBlock_lift;
              block638.receiver = this;
              block638.className = 'block<kitty:213>';
              block638.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 210
                onSelf = true;
                var call639 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call641 = callmethod(this, "canvasWidth", [0]);
                var quotient643 = callmethod(call641, "/", [1], new GraceNum(2));
                onSelf = true;
                var call645 = callmethod(this, "canvasHeight", [0]);
                var quotient647 = callmethod(call645, "/", [1], new GraceNum(2));
                var call648 = callmethod(var_entity,"draw", [3], call639, quotient643, quotient647);
                return call648;
              };
              var call649 = callmethod(Grace_prelude,"for()do", [1, 1], call637, block638);
              lineNumber = 213
              var string650 = new GraceString("WORLD UPDATED");
              var call651 = Grace_print(string650);
              return call651
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func613.paramCounts = [
            0,
          ];
          func613.variableArities = [
            false,
          ];
          obj519.methods["update"] = func613;
          func613.definitionLine = 199;
          func613.definitionModule = "kitty";
          var func652 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func652.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 217
              lineNumber = 174
              lineNumber = 217
              onSelf = true;
              var call653 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call654 = callmethod(this, "canvasHeight", [0]);
              var call655 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call656 = callmethod(call655, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call657 = callmethod(call656, "Image", [3], var_background__39__, call653, call654);
              onSelf = true;
              var call658 = callmethod(this, "background:=", [1], call657);
              return call658
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func652.paramCounts = [
            1,
          ];
          func652.variableArities = [
            false,
          ];
          obj519.methods["setBackground"] = func652;
          func652.definitionLine = 216;
          func652.definitionModule = "kitty";
          var func659 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func659.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 221
              onSelf = true;
              var call660 = callmethod(this, "entities", [0]);
              var call661 = callmethod(call660,"push", [1], var_e);
              return call661
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func659.paramTypes = [];
          func659.paramTypes.push([]);
          func659.paramCounts = [
            1,
          ];
          func659.variableArities = [
            false,
          ];
          obj519.methods["addEntity"] = func659;
          func659.definitionLine = 220;
          func659.definitionModule = "kitty";
          sourceObject = obj519;
          lineNumber = 118
          var string662 = new GraceString("CREATING NEW WORLD...");
          var call663 = Grace_print(string662);
          sourceObject = obj519;
          obj519.data["background"] = undefined;
          var reader_kitty_background_664 = function() {
            return this.data["background"];
          }
          obj519.methods["background"] = reader_kitty_background_664;
          obj519.data["background"] = undefined;
          var writer_kitty_background_664 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj519.methods["background:="] = writer_kitty_background_664;
          reader_kitty_background_664.confidential = true;
          writer_kitty_background_664.confidential = true;
          obj519.mutable = true;
          sourceObject = obj519;
          lineNumber = 121
          var string665 = new GraceString("black");
          obj519.data["backgroundColour"] = string665;
          var reader_kitty_backgroundColour_666 = function() {
            return this.data["backgroundColour"];
          }
          obj519.methods["backgroundColour"] = reader_kitty_backgroundColour_666;
          obj519.data["backgroundColour"] = string665;
          var writer_kitty_backgroundColour_666 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj519.methods["backgroundColour:="] = writer_kitty_backgroundColour_666;
          reader_kitty_backgroundColour_666.confidential = true;
          writer_kitty_backgroundColour_666.confidential = true;
          lineNumber = 123;
          moduleName = "kitty";
          lineNumber = 121
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string665)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj519.mutable = true;
          sourceObject = obj519;
          obj519.data["document"] = undefined;
          var reader_kitty_document_667 = function() {
            return this.data["document"];
          }
          obj519.methods["document"] = reader_kitty_document_667;
          obj519.data["document"] = undefined;
          var writer_kitty_document_667 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj519.methods["document:="] = writer_kitty_document_667;
          reader_kitty_document_667.confidential = true;
          writer_kitty_document_667.confidential = true;
          obj519.mutable = true;
          sourceObject = obj519;
          obj519.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_668 = function() {
            return this.data["backingCanvas"];
          }
          obj519.methods["backingCanvas"] = reader_kitty_backingCanvas_668;
          obj519.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_668 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj519.methods["backingCanvas:="] = writer_kitty_backingCanvas_668;
          reader_kitty_backingCanvas_668.confidential = true;
          writer_kitty_backingCanvas_668.confidential = true;
          obj519.mutable = true;
          sourceObject = obj519;
          obj519.data["backingContext"] = undefined;
          var reader_kitty_backingContext_669 = function() {
            return this.data["backingContext"];
          }
          obj519.methods["backingContext"] = reader_kitty_backingContext_669;
          obj519.data["backingContext"] = undefined;
          var writer_kitty_backingContext_669 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj519.methods["backingContext:="] = writer_kitty_backingContext_669;
          reader_kitty_backingContext_669.confidential = true;
          writer_kitty_backingContext_669.confidential = true;
          obj519.mutable = true;
          sourceObject = obj519;
          obj519.data["canvas"] = undefined;
          var reader_kitty_canvas_670 = function() {
            return this.data["canvas"];
          }
          obj519.methods["canvas"] = reader_kitty_canvas_670;
          obj519.data["canvas"] = undefined;
          var writer_kitty_canvas_670 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj519.methods["canvas:="] = writer_kitty_canvas_670;
          reader_kitty_canvas_670.confidential = true;
          writer_kitty_canvas_670.confidential = true;
          obj519.mutable = true;
          sourceObject = obj519;
          obj519.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_671 = function() {
            return this.data["canvasWidth"];
          }
          obj519.methods["canvasWidth"] = reader_kitty_canvasWidth_671;
          obj519.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_671 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj519.methods["canvasWidth:="] = writer_kitty_canvasWidth_671;
          reader_kitty_canvasWidth_671.confidential = true;
          writer_kitty_canvasWidth_671.confidential = true;
          obj519.mutable = true;
          sourceObject = obj519;
          obj519.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_672 = function() {
            return this.data["canvasHeight"];
          }
          obj519.methods["canvasHeight"] = reader_kitty_canvasHeight_672;
          obj519.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_672 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj519.methods["canvasHeight:="] = writer_kitty_canvasHeight_672;
          reader_kitty_canvasHeight_672.confidential = true;
          writer_kitty_canvasHeight_672.confidential = true;
          obj519.mutable = true;
          sourceObject = obj519;
          lineNumber = 132
          var call673 = callmethod(var_collections,"list", [0]);
          var call674 = callmethod(call673,"new", [0]);
          obj519.data["entities"] = call674;
          var reader_kitty_entities_675 = function() {
            return this.data["entities"];
          }
          obj519.methods["entities"] = reader_kitty_entities_675;
          obj519.data["entities"] = call674;
          var writer_kitty_entities_675 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj519.methods["entities:="] = writer_kitty_entities_675;
          reader_kitty_entities_675.confidential = true;
          writer_kitty_entities_675.confidential = true;
          lineNumber = 134;
          moduleName = "kitty";
          lineNumber = 132
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call674)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj519.mutable = true;
          sourceObject = obj519;
          lineNumber = 134
          var bool676 = new GraceBoolean(false)
          obj519.data["isInit"] = bool676;
          var reader_kitty_isInit_677 = function() {
            return this.data["isInit"];
          }
          obj519.methods["isInit"] = reader_kitty_isInit_677;
          obj519.data["isInit"] = bool676;
          var writer_kitty_isInit_677 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj519.methods["isInit:="] = writer_kitty_isInit_677;
          reader_kitty_isInit_677.confidential = true;
          writer_kitty_isInit_677.confidential = true;
          lineNumber = 135;
          moduleName = "kitty";
          lineNumber = 134
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool676)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj519.mutable = true;
          sourceObject = obj519;
          lineNumber = 135
          var bool678 = new GraceBoolean(false)
          obj519.data["isRunning"] = bool678;
          var reader_kitty_isRunning_679 = function() {
            return this.data["isRunning"];
          }
          obj519.methods["isRunning"] = reader_kitty_isRunning_679;
          obj519.data["isRunning"] = bool678;
          var writer_kitty_isRunning_679 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj519.methods["isRunning:="] = writer_kitty_isRunning_679;
          reader_kitty_isRunning_679.confidential = true;
          writer_kitty_isRunning_679.confidential = true;
          lineNumber = 137;
          moduleName = "kitty";
          lineNumber = 135
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool678)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj519.mutable = true;
          sourceObject = obj519;
          obj519.data["mctx"] = undefined;
          var reader_kitty_mctx_680 = function() {
            return this.data["mctx"];
          }
          obj519.methods["mctx"] = reader_kitty_mctx_680;
          obj519.data["mctx"] = undefined;
          var writer_kitty_mctx_680 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj519.methods["mctx:="] = writer_kitty_mctx_680;
          reader_kitty_mctx_680.confidential = true;
          writer_kitty_mctx_680.confidential = true;
          obj519.mutable = true;
          sourceObject = obj519;
          lineNumber = 139
          onSelf = true;
          var call681 = callmethod(this, "init", [0]);
          sourceObject = obj519;
          sourceObject = obj519;
          sourceObject = obj519;
          sourceObject = obj519;
          sourceObject = obj519;
          sourceObject = obj519;
          lineNumber = 224
          var string682 = new GraceString("WORLD CREATED");
          var call683 = Grace_print(string682);
          superDepth = origSuperDepth;
        }
        obj_init_519.apply(inheritingObject, []);
        return obj519
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj350.methods["new()object"] = func518;
    var func684 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 116
        var string685 = new GraceString("class KittyWorld");
        return string685
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func684.paramCounts = [
    ];
    func684.variableArities = [
    ];
    obj350.methods["asDebugString"] = func684;
    func684.definitionLine = 116;
    func684.definitionModule = "kitty";
    sourceObject = obj350;
    sourceObject = obj350;
    superDepth = origSuperDepth;
  }
  obj_init_350.apply(obj350, []);
  var var_KittyWorld = obj350;
  lineNumber = 227
  lineNumber = 238
  lineNumber = 254
  lineNumber = 258
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
'dom',
'StandardPrelude',
];
if (gctCache)
  gctCache['kitty'] = "constructors-of:KittyImage:\n new\nmodules:\n StandardPrelude\n mgcollections\nmethods-of:KittyEntity.new:\n getX\n getY\n image:=\n posX:=\n posY:=\n image\n onDestroy\n awake\n posX\n posY\n draw\n setImage\n rotation\n getRotation\n update\n setLocation\n rotation:=\n start\nfresh:World:\n canvas\n isRunning\n background\n entities\n addEntity\n isInit:=\n mctx:=\n setBackground\n isInit\n entities:=\n backgroundColour:=\n canvasWidth:=\n document:=\n backingContext\n backgroundColour\n mctx\n document\n backingCanvas:=\n update\n canvasWidth\n backingContext:=\n backingCanvas\n canvasHeight:=\n isRunning:=\n start\n canvas:=\n init\n canvasHeight\n background:=\nfresh-methods:\n Image\n Entity\n World\npublic:\n m_world\n m_world:=\n worldSet\n worldSet:=\n keyDownListener\n keyDownListener:=\n mouseDownListener\n mouseDownListener:=\n KittyImage\n Image\n KittyEntity\n Entity\n KittyWorld\n World\n start\n stop\n setWorld\nmethods-of:KittyImage.new:\n imgTag\n height\n draw\n height:=\n width\n width:=\nmethods-of:KittyWorld.new:\n canvas\n isRunning\n background\n mctx\n addEntity\n backingCanvas\n mctx:=\n setBackground\n isInit\n entities:=\n backgroundColour:=\n canvasWidth:=\n document:=\n isRunning:=\n init\n canvasWidth\n document\n backingCanvas:=\n update\n entities\n isInit:=\n backingContext:=\n canvasHeight:=\n backingContext\n start\n canvas:=\n backgroundColour\n canvasHeight\n background:=\nconstructors-of:KittyEntity:\n new\npath:\n kitty\nclasses:\n KittyImage\n KittyEntity\n KittyWorld\nfresh:Entity:\n getX\n getY\n image:=\n posX:=\n posY:=\n image\n rotation:=\n awake\n posX\n posY\n draw\n setImage\n rotation\n getRotation\n update\n setLocation\n onDestroy\n start\nconfidential:\nconstructors-of:KittyWorld:\n new\nfresh:Image:\n imgTag\n height\n draw\n height:=\n width\n width:=\n";
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
    "        ",
    "    }",
    "",
    "    // Called on class destructor",
    "    method onDestroy {",
    "",
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
    "            // if ((x > (canvasWidth - 20)) && (y < 20)) then {",
    "            //     ev.preventDefault",
    "            //     stop",
    "        }",
    "        canvas.addEventListener(\"mousedown\", mouseDownListener)",
    "",
    "        // Key Listener",
    "        keyDownListener := { ev->",
    "            print \"KEYDOWN\"",
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
    "",
    "        print \"WORLD STARTED\"",
    "        isRunning := true",
    "        dom.while { isRunning } waiting 10 do {",
    "            update",
    "        }        ",
    "    }",
    "",
    "    // Updates the game world",
    "    method update {",
    "        print \"UPDATING WORLD...\"",
    "",
    "        // Draw the background",
    "        mctx.fillStyle := backgroundColour",
    "        mctx.fillRect(0, 0, canvasWidth, canvasHeight)",
    "        mctx.drawImage(backingCanvas, 0, 0)",
    "        background.draw(mctx, canvasWidth / 2, canvasHeight / 2, 0)",
    "",
    "        // Draw the entities",
    "        for (entities) do {",
    "            entity->entity.draw(mctx, canvasWidth / 2, canvasHeight / 2)",
    "        }",
    "",
    "        print \"WORLD UPDATED\"",
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
