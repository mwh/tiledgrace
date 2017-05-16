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
  lineNumber = 125
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
      lineNumber = 126
      var obj9 = Grace_allocObject();
      obj9.definitionModule = "kitty";
      obj9.definitionLine = 126;
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
        lineNumber = 127
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
  func8.definitionLine = 125;
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
      obj13.definitionLine = 126;
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
  lineNumber = 266
  var func16 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func16.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (World)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 267
      var obj17 = Grace_allocObject();
      obj17.definitionModule = "kitty";
      obj17.definitionLine = 267;
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
        lineNumber = 268
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
  func16.definitionLine = 266;
  func16.definitionModule = "kitty";
  var func20 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj21 = Grace_allocObject();
      obj21.definitionModule = "kitty";
      obj21.definitionLine = 267;
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
  lineNumber = 277
  var func24 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func24.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 279
      var string25 = new GraceString("CHECKING...");
      var call26 = Grace_print(string25);
      lineNumber = 286
      var if27 = var_done;
      lineNumber = 281
      var call28 = callmethod(var_worldSet,"prefix!", [0]);
      if (Grace_isTrue(call28)) {
        lineNumber = 282
        var string29 = new GraceString("NO WORLD!!");
        var call30 = Grace_print(string29);
        lineNumber = 284
        return var_done
      }
      lineNumber = 286
      var string31 = new GraceString("STARTING...");
      var call32 = Grace_print(string31);
      lineNumber = 289
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
  func24.definitionLine = 277;
  func24.definitionModule = "kitty";
  lineNumber = 293
  var func34 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func34.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 294
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
  func34.definitionLine = 293;
  func34.definitionModule = "kitty";
  lineNumber = 297
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
      lineNumber = 299
      lineNumber = 298
      var_m__95__world = var_world__39__;
      lineNumber = 300
      lineNumber = 299
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
  func37.definitionLine = 297;
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
  lineNumber = 289
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
  func40.definitionLine = 289;
  func40.definitionModule = "kitty";
  lineNumber = 289
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
  func41.definitionLine = 289;
  func41.definitionModule = "kitty";
  lineNumber = 11
  lineNumber = 8
  var bool42 = new GraceBoolean(false)
  var var_worldSet = bool42;
  lineNumber = 289
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
  func43.definitionLine = 289;
  func43.definitionModule = "kitty";
  lineNumber = 289
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
  func44.definitionLine = 289;
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
  lineNumber = 289
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
  func45.definitionLine = 289;
  func45.definitionModule = "kitty";
  lineNumber = 289
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
  func46.definitionLine = 289;
  func46.definitionModule = "kitty";
  lineNumber = 17
  var var_mouseDownListener;
  lineNumber = 289
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
  func47.definitionLine = 289;
  func47.definitionModule = "kitty";
  lineNumber = 289
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
  func48.definitionLine = 289;
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
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func248.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveUp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 80
              lineNumber = 46
              lineNumber = 80
              lineNumber = 79
              onSelf = true;
              var call250 = callmethod(this, "posY", [0]);
              var diff252 = callmethod(call250, "-", [1], var_dy);
              onSelf = true;
              var call253 = callmethod(this, "posY:=", [1], diff252);
              return call253
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
          obj242.methods["moveUp"] = func248;
          func248.definitionLine = 78;
          func248.definitionModule = "kitty";
          var func254 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func254.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 84
              lineNumber = 46
              lineNumber = 84
              lineNumber = 83
              onSelf = true;
              var call256 = callmethod(this, "posY", [0]);
              var opresult258 = callmethod(call256, "+", [1], var_dy);
              onSelf = true;
              var call259 = callmethod(this, "posY:=", [1], opresult258);
              return call259
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func254.paramCounts = [
            1,
          ];
          func254.variableArities = [
            false,
          ];
          obj242.methods["moveDown"] = func254;
          func254.definitionLine = 82;
          func254.definitionModule = "kitty";
          var func260 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func260.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveLeft)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 88
              lineNumber = 46
              lineNumber = 88
              lineNumber = 87
              onSelf = true;
              var call262 = callmethod(this, "posX", [0]);
              var diff264 = callmethod(call262, "-", [1], var_dx);
              onSelf = true;
              var call265 = callmethod(this, "posX:=", [1], diff264);
              return call265
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func260.paramCounts = [
            1,
          ];
          func260.variableArities = [
            false,
          ];
          obj242.methods["moveLeft"] = func260;
          func260.definitionLine = 86;
          func260.definitionModule = "kitty";
          var func266 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func266.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveRight)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 92
              lineNumber = 46
              lineNumber = 92
              lineNumber = 91
              onSelf = true;
              var call268 = callmethod(this, "posX", [0]);
              var opresult270 = callmethod(call268, "+", [1], var_dx);
              onSelf = true;
              var call271 = callmethod(this, "posX:=", [1], opresult270);
              return call271
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func266.paramCounts = [
            1,
          ];
          func266.variableArities = [
            false,
          ];
          obj242.methods["moveRight"] = func266;
          func266.definitionLine = 90;
          func266.definitionModule = "kitty";
          var func272 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func272.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 95
              var call273 = callmethod(var_ctx,"save", [0]);
              lineNumber = 96
              onSelf = true;
              var call274 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call275 = callmethod(this, "posY", [0]);
              var call276 = callmethod(var_ctx,"translate", [2], call274, call275);
              lineNumber = 97
              onSelf = true;
              var call277 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call278 = callmethod(this, "image", [0]);
              var call279 = callmethod(call278,"draw", [4], var_ctx, var_dx, var_dy, call277);
              lineNumber = 98
              var call280 = callmethod(var_ctx,"restore", [0]);
              return call280
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func272.paramCounts = [
            3,
          ];
          func272.variableArities = [
            false,
          ];
          obj242.methods["draw"] = func272;
          func272.definitionLine = 94;
          func272.definitionModule = "kitty";
          var func281 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func281.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 102
              lineNumber = 98
              lineNumber = 102
              var call282 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call283 = callmethod(call282, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call284 = callmethod(call283, "Image", [3], var_image__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call285 = callmethod(this, "image:=", [1], call284);
              return call285
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func281.paramCounts = [
            1,
          ];
          func281.variableArities = [
            false,
          ];
          obj242.methods["setImage"] = func281;
          func281.definitionLine = 101;
          func281.definitionModule = "kitty";
          var func286 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func286.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 107
              lineNumber = 102
              lineNumber = 106
              onSelf = true;
              var call287 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 108
              lineNumber = 102
              lineNumber = 107
              onSelf = true;
              var call288 = callmethod(this, "posY:=", [1], var_y);
              return call288
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func286.paramCounts = [
            2,
          ];
          func286.variableArities = [
            false,
          ];
          obj242.methods["setLocation"] = func286;
          func286.definitionLine = 105;
          func286.definitionModule = "kitty";
          var func289 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func289.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 112
              lineNumber = 111
              onSelf = true;
              var call290 = callmethod(this, "posX", [0]);
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
            0,
          ];
          func289.variableArities = [
            false,
          ];
          obj242.methods["getX"] = func289;
          func289.definitionLine = 110;
          func289.definitionModule = "kitty";
          var func291 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func291.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 116
              lineNumber = 115
              onSelf = true;
              var call292 = callmethod(this, "posY", [0]);
              return call292
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func291.paramCounts = [
            0,
          ];
          func291.variableArities = [
            false,
          ];
          obj242.methods["getY"] = func291;
          func291.definitionLine = 114;
          func291.definitionModule = "kitty";
          var func293 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func293.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 120
              lineNumber = 119
              onSelf = true;
              var call294 = callmethod(this, "rotation", [0]);
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
          obj242.methods["getRotation"] = func293;
          func293.definitionLine = 118;
          func293.definitionModule = "kitty";
          sourceObject = obj242;
          lineNumber = 48
          var string295 = new GraceString(")...");
          var string298 = new GraceString(", ");
          var string301 = new GraceString("CREATING ENTITY AT (");
          var opresult303 = callmethod(string301, "++", [1], var_x__39__);
          var opresult305 = callmethod(opresult303, "++", [1], string298);
          var opresult307 = callmethod(opresult305, "++", [1], var_y__39__);
          var opresult309 = callmethod(opresult307, "++", [1], string295);
          var call310 = Grace_print(opresult309);
          sourceObject = obj242;
          lineNumber = 50
          obj242.data["posX"] = var_x__39__;
          var reader_kitty_posX_311 = function() {
            return this.data["posX"];
          }
          obj242.methods["posX"] = reader_kitty_posX_311;
          obj242.data["posX"] = var_x__39__;
          var writer_kitty_posX_311 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj242.methods["posX:="] = writer_kitty_posX_311;
          reader_kitty_posX_311.confidential = true;
          writer_kitty_posX_311.confidential = true;
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
          var reader_kitty_posY_312 = function() {
            return this.data["posY"];
          }
          obj242.methods["posY"] = reader_kitty_posY_312;
          obj242.data["posY"] = var_y__39__;
          var writer_kitty_posY_312 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj242.methods["posY:="] = writer_kitty_posY_312;
          reader_kitty_posY_312.confidential = true;
          writer_kitty_posY_312.confidential = true;
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
          var reader_kitty_rotation_313 = function() {
            return this.data["rotation"];
          }
          obj242.methods["rotation"] = reader_kitty_rotation_313;
          obj242.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_313 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj242.methods["rotation:="] = writer_kitty_rotation_313;
          reader_kitty_rotation_313.confidential = true;
          writer_kitty_rotation_313.confidential = true;
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
          var reader_kitty_image_314 = function() {
            return this.data["image"];
          }
          obj242.methods["image"] = reader_kitty_image_314;
          obj242.data["image"] = undefined;
          var writer_kitty_image_314 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj242.methods["image:="] = writer_kitty_image_314;
          reader_kitty_image_314.confidential = true;
          writer_kitty_image_314.confidential = true;
          obj242.mutable = true;
          sourceObject = obj242;
          lineNumber = 56
          onSelf = true;
          var call315 = callmethod(this, "awake", [0]);
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
          lineNumber = 122
          var string316 = new GraceString("ENTITY CREATED");
          var call317 = Grace_print(string316);
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
    var func318 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj319 = Grace_allocObject();
        obj319.definitionModule = "kitty";
        obj319.definitionLine = 46;
        var inho319 = inheritingObject;
        while (inho319.superobj) inho319 = inho319.superobj;
        inho319.superobj = obj319;
        obj319.data = inheritingObject.data;
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
          func321.paramCounts = [
            0,
          ];
          func321.variableArities = [
            false,
          ];
          obj319.methods["awake"] = func321;
          func321.definitionLine = 59;
          func321.definitionModule = "kitty";
          var func322 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func322.paramCounts[0])
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
          func322.paramCounts = [
            0,
          ];
          func322.variableArities = [
            false,
          ];
          obj319.methods["start"] = func322;
          func322.definitionLine = 64;
          func322.definitionModule = "kitty";
          var func323 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func323.paramCounts[0])
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
          func323.paramCounts = [
            0,
          ];
          func323.variableArities = [
            false,
          ];
          obj319.methods["update"] = func323;
          func323.definitionLine = 69;
          func323.definitionModule = "kitty";
          var func324 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func324.paramCounts[0])
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
          func324.paramCounts = [
            0,
          ];
          func324.variableArities = [
            false,
          ];
          obj319.methods["onDestroy"] = func324;
          func324.definitionLine = 74;
          func324.definitionModule = "kitty";
          var func325 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func325.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveUp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 80
              lineNumber = 102
              lineNumber = 80
              lineNumber = 79
              onSelf = true;
              var call327 = callmethod(this, "posY", [0]);
              var diff329 = callmethod(call327, "-", [1], var_dy);
              onSelf = true;
              var call330 = callmethod(this, "posY:=", [1], diff329);
              return call330
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func325.paramCounts = [
            1,
          ];
          func325.variableArities = [
            false,
          ];
          obj319.methods["moveUp"] = func325;
          func325.definitionLine = 78;
          func325.definitionModule = "kitty";
          var func331 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func331.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 84
              lineNumber = 102
              lineNumber = 84
              lineNumber = 83
              onSelf = true;
              var call333 = callmethod(this, "posY", [0]);
              var opresult335 = callmethod(call333, "+", [1], var_dy);
              onSelf = true;
              var call336 = callmethod(this, "posY:=", [1], opresult335);
              return call336
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func331.paramCounts = [
            1,
          ];
          func331.variableArities = [
            false,
          ];
          obj319.methods["moveDown"] = func331;
          func331.definitionLine = 82;
          func331.definitionModule = "kitty";
          var func337 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func337.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveLeft)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 88
              lineNumber = 102
              lineNumber = 88
              lineNumber = 87
              onSelf = true;
              var call339 = callmethod(this, "posX", [0]);
              var diff341 = callmethod(call339, "-", [1], var_dx);
              onSelf = true;
              var call342 = callmethod(this, "posX:=", [1], diff341);
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
          obj319.methods["moveLeft"] = func337;
          func337.definitionLine = 86;
          func337.definitionModule = "kitty";
          var func343 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func343.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveRight)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 92
              lineNumber = 102
              lineNumber = 92
              lineNumber = 91
              onSelf = true;
              var call345 = callmethod(this, "posX", [0]);
              var opresult347 = callmethod(call345, "+", [1], var_dx);
              onSelf = true;
              var call348 = callmethod(this, "posX:=", [1], opresult347);
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
          obj319.methods["moveRight"] = func343;
          func343.definitionLine = 90;
          func343.definitionModule = "kitty";
          var func349 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func349.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 95
              var call350 = callmethod(var_ctx,"save", [0]);
              lineNumber = 96
              onSelf = true;
              var call351 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call352 = callmethod(this, "posY", [0]);
              var call353 = callmethod(var_ctx,"translate", [2], call351, call352);
              lineNumber = 97
              onSelf = true;
              var call354 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call355 = callmethod(this, "image", [0]);
              var call356 = callmethod(call355,"draw", [4], var_ctx, var_dx, var_dy, call354);
              lineNumber = 98
              var call357 = callmethod(var_ctx,"restore", [0]);
              return call357
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func349.paramCounts = [
            3,
          ];
          func349.variableArities = [
            false,
          ];
          obj319.methods["draw"] = func349;
          func349.definitionLine = 94;
          func349.definitionModule = "kitty";
          var func358 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func358.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 102
              lineNumber = 98
              lineNumber = 102
              var call359 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call360 = callmethod(call359, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call361 = callmethod(call360, "Image", [3], var_image__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call362 = callmethod(this, "image:=", [1], call361);
              return call362
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func358.paramCounts = [
            1,
          ];
          func358.variableArities = [
            false,
          ];
          obj319.methods["setImage"] = func358;
          func358.definitionLine = 101;
          func358.definitionModule = "kitty";
          var func363 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func363.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 107
              lineNumber = 102
              lineNumber = 106
              onSelf = true;
              var call364 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 108
              lineNumber = 102
              lineNumber = 107
              onSelf = true;
              var call365 = callmethod(this, "posY:=", [1], var_y);
              return call365
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func363.paramCounts = [
            2,
          ];
          func363.variableArities = [
            false,
          ];
          obj319.methods["setLocation"] = func363;
          func363.definitionLine = 105;
          func363.definitionModule = "kitty";
          var func366 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func366.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 112
              lineNumber = 111
              onSelf = true;
              var call367 = callmethod(this, "posX", [0]);
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
          obj319.methods["getX"] = func366;
          func366.definitionLine = 110;
          func366.definitionModule = "kitty";
          var func368 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func368.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 116
              lineNumber = 115
              onSelf = true;
              var call369 = callmethod(this, "posY", [0]);
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
          obj319.methods["getY"] = func368;
          func368.definitionLine = 114;
          func368.definitionModule = "kitty";
          var func370 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func370.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 120
              lineNumber = 119
              onSelf = true;
              var call371 = callmethod(this, "rotation", [0]);
              return call371
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func370.paramCounts = [
            0,
          ];
          func370.variableArities = [
            false,
          ];
          obj319.methods["getRotation"] = func370;
          func370.definitionLine = 118;
          func370.definitionModule = "kitty";
          sourceObject = obj319;
          lineNumber = 48
          var string372 = new GraceString(")...");
          var string375 = new GraceString(", ");
          var string378 = new GraceString("CREATING ENTITY AT (");
          var opresult380 = callmethod(string378, "++", [1], var_x__39__);
          var opresult382 = callmethod(opresult380, "++", [1], string375);
          var opresult384 = callmethod(opresult382, "++", [1], var_y__39__);
          var opresult386 = callmethod(opresult384, "++", [1], string372);
          var call387 = Grace_print(opresult386);
          sourceObject = obj319;
          lineNumber = 50
          obj319.data["posX"] = var_x__39__;
          var reader_kitty_posX_388 = function() {
            return this.data["posX"];
          }
          obj319.methods["posX"] = reader_kitty_posX_388;
          obj319.data["posX"] = var_x__39__;
          var writer_kitty_posX_388 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj319.methods["posX:="] = writer_kitty_posX_388;
          reader_kitty_posX_388.confidential = true;
          writer_kitty_posX_388.confidential = true;
          lineNumber = 51;
          moduleName = "kitty";
          lineNumber = 50
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj319.mutable = true;
          sourceObject = obj319;
          lineNumber = 51
          obj319.data["posY"] = var_y__39__;
          var reader_kitty_posY_389 = function() {
            return this.data["posY"];
          }
          obj319.methods["posY"] = reader_kitty_posY_389;
          obj319.data["posY"] = var_y__39__;
          var writer_kitty_posY_389 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj319.methods["posY:="] = writer_kitty_posY_389;
          reader_kitty_posY_389.confidential = true;
          writer_kitty_posY_389.confidential = true;
          lineNumber = 52;
          moduleName = "kitty";
          lineNumber = 51
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj319.mutable = true;
          sourceObject = obj319;
          lineNumber = 52
          obj319.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_390 = function() {
            return this.data["rotation"];
          }
          obj319.methods["rotation"] = reader_kitty_rotation_390;
          obj319.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_390 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj319.methods["rotation:="] = writer_kitty_rotation_390;
          reader_kitty_rotation_390.confidential = true;
          writer_kitty_rotation_390.confidential = true;
          lineNumber = 54;
          moduleName = "kitty";
          lineNumber = 52
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj319.mutable = true;
          sourceObject = obj319;
          obj319.data["image"] = undefined;
          var reader_kitty_image_391 = function() {
            return this.data["image"];
          }
          obj319.methods["image"] = reader_kitty_image_391;
          obj319.data["image"] = undefined;
          var writer_kitty_image_391 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj319.methods["image:="] = writer_kitty_image_391;
          reader_kitty_image_391.confidential = true;
          writer_kitty_image_391.confidential = true;
          obj319.mutable = true;
          sourceObject = obj319;
          lineNumber = 56
          onSelf = true;
          var call392 = callmethod(this, "awake", [0]);
          sourceObject = obj319;
          sourceObject = obj319;
          sourceObject = obj319;
          sourceObject = obj319;
          sourceObject = obj319;
          sourceObject = obj319;
          sourceObject = obj319;
          sourceObject = obj319;
          sourceObject = obj319;
          sourceObject = obj319;
          sourceObject = obj319;
          sourceObject = obj319;
          sourceObject = obj319;
          sourceObject = obj319;
          sourceObject = obj319;
          lineNumber = 122
          var string393 = new GraceString("ENTITY CREATED");
          var call394 = Grace_print(string393);
          superDepth = origSuperDepth;
        }
        obj_init_319.apply(inheritingObject, []);
        return obj319
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj239.methods["new()object"] = func318;
    var func395 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 46
        var string396 = new GraceString("class KittyEntity");
        return string396
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func395.paramCounts = [
    ];
    func395.variableArities = [
    ];
    obj239.methods["asDebugString"] = func395;
    func395.definitionLine = 46;
    func395.definitionModule = "kitty";
    sourceObject = obj239;
    sourceObject = obj239;
    superDepth = origSuperDepth;
  }
  obj_init_239.apply(obj239, []);
  var var_KittyEntity = obj239;
  lineNumber = 125
  lineNumber = 132
  var func397 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func397.paramCounts[0])
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
  func397.paramCounts = [
    0,
  ];
  func397.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func397;
  func397.definitionLine = 132;
  func397.definitionModule = "kitty";
  var obj398 = Grace_allocObject();
  obj398.definitionModule = "kitty";
  obj398.definitionLine = 132;
  obj398.outer = this;
  var reader_kitty_outer_399 = function() {
    return this.outer;
  }
  obj398.methods["outer"] = reader_kitty_outer_399;
  function obj_init_398() {
    var origSuperDepth = superDepth;
    superDepth = obj398;
    obj398.annotations = [];
    var func400 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func400.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj401 = Grace_allocObject();
        obj401.definitionModule = "kitty";
        obj401.definitionLine = 132;
        obj401.outer = this;
        var reader_kitty_outer_402 = function() {
          return this.outer;
        }
        obj401.methods["outer"] = reader_kitty_outer_402;
        function obj_init_401() {
          var origSuperDepth = superDepth;
          superDepth = obj401;
          obj401.annotations = [];
          var func403 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func403.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 160
              var string404 = new GraceString("INITIALIZING WORLD...");
              var call405 = Grace_print(string404);
              lineNumber = 166
              var if406 = var_done;
              lineNumber = 162
              onSelf = true;
              var call407 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call407)) {
                lineNumber = 164
                lineNumber = 163
                var bool408 = new GraceBoolean(false)
                return bool408
              }
              lineNumber = 167
              lineNumber = 132
              lineNumber = 166
              var call409 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call410 = callmethod(this, "document:=", [1], call409);
              lineNumber = 167
              lineNumber = 166
              lineNumber = 167
              var string411 = new GraceString("standard-canvas");
              onSelf = true;
              var call412 = callmethod(this, "document", [0]);
              var call413 = callmethod(call412,"getElementById", [1], string411);
              onSelf = true;
              var call414 = callmethod(this, "canvas:=", [1], call413);
              lineNumber = 169
              lineNumber = 166
              lineNumber = 168
              onSelf = true;
              var call415 = callmethod(this, "canvas", [0]);
              var call416 = callmethod(call415,"width", [0]);
              onSelf = true;
              var call417 = callmethod(this, "canvasWidth:=", [1], call416);
              lineNumber = 172
              lineNumber = 168
              lineNumber = 169
              onSelf = true;
              var call418 = callmethod(this, "canvas", [0]);
              var call419 = callmethod(call418,"height", [0]);
              onSelf = true;
              var call420 = callmethod(this, "canvasHeight:=", [1], call419);
              lineNumber = 184
              var block421 = Grace_allocObject();
              block421.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block421.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block421.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block421.methods["match"] = GraceBlock_match;
              block421.methods["prefix?"] = GraceBlock_lift;
              block421.receiver = this;
              block421.className = 'block<kitty:184>';
              block421.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 175
                lineNumber = 174
                onSelf = true;
                var call422 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call424 = callmethod(this, "canvas", [0]);
                var call425 = callmethod(call424,"offsetWidth", [0]);
                onSelf = true;
                var call427 = callmethod(this, "canvas", [0]);
                var call428 = callmethod(call427,"offsetLeft", [0]);
                var call430 = callmethod(var_ev,"clientX", [0]);
                var diff432 = callmethod(call430, "-", [1], call428);
                var quotient434 = callmethod(diff432, "/", [1], call425);
                var prod436 = callmethod(quotient434, "*", [1], call422);
                var var_x = prod436;
                lineNumber = 175;
                moduleName = "kitty";
                lineNumber = 174
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 177
                lineNumber = 175
                onSelf = true;
                var call437 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call439 = callmethod(this, "canvas", [0]);
                var call440 = callmethod(call439,"offsetHeight", [0]);
                onSelf = true;
                var call442 = callmethod(this, "canvas", [0]);
                var call443 = callmethod(call442,"offsetTop", [0]);
                var call445 = callmethod(var_ev,"clientY", [0]);
                var diff447 = callmethod(call445, "-", [1], call443);
                var quotient449 = callmethod(diff447, "/", [1], call440);
                var prod451 = callmethod(quotient449, "*", [1], call437);
                var var_y = prod451;
                lineNumber = 177;
                moduleName = "kitty";
                lineNumber = 175
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 177
                var string452 = new GraceString("MOUSEDOWN");
                var call453 = Grace_print(string452);
                lineNumber = 183
                var if454 = var_done;
                lineNumber = 179
                var opresult457 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call460 = callmethod(this, "canvasWidth", [0]);
                var diff462 = callmethod(call460, "-", [1], new GraceNum(20));
                var opresult465 = callmethod(var_x, ">", [1], diff462);
                var opresult467 = callmethod(opresult465, "&&", [1], opresult457);
                if (Grace_isTrue(opresult467)) {
                  lineNumber = 180
                  var call468 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 181
                  onSelf = true;
                  var call469 = callmethod(this, "stop", [0]);
                  if454 = call469;
                }
                return if454;
              };
              var_mouseDownListener = block421;
              lineNumber = 184
              var string470 = new GraceString("mousedown");
              onSelf = true;
              var call471 = callmethod(this, "canvas", [0]);
              var call472 = callmethod(call471,"addEventListener", [2], string470, var_mouseDownListener);
              lineNumber = 204
              var block473 = Grace_allocObject();
              block473.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block473.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block473.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block473.methods["match"] = GraceBlock_match;
              block473.methods["prefix?"] = GraceBlock_lift;
              block473.receiver = this;
              block473.className = 'block<kitty:204>';
              block473.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 188
                var string474 = new GraceString("WORLD");
                var call475 = Grace_print(string474);
                lineNumber = 193
                var if476 = var_done;
                lineNumber = 189
                var call478 = callmethod(var_ev,"keyCode", [0]);
                var opresult480 = callmethod(call478, "==", [1], new GraceNum(81));
                if (Grace_isTrue(opresult480)) {
                  lineNumber = 190
                  onSelf = true;
                  var call481 = callmethod(this, "stop", [0]);
                  if476 = call481;
                }
                lineNumber = 196
                lineNumber = 193
                var call482 = callmethod(var_ev,"keyCode", [0]);
                var var_key = call482;
                lineNumber = 196;
                moduleName = "kitty";
                lineNumber = 193
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_key)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of var 'key' to be of type Unknown"))
                lineNumber = 196
                onSelf = true;
                var call483 = callmethod(this, "entities", [0]);
                lineNumber = 203
                var block484 = Grace_allocObject();
                block484.methods["apply"] = function() {
                  var args = Array.prototype.slice.call(arguments, 1);
                  return this.real.apply(this.receiver, args);
                }
                block484.methods["applyIndirectly"] = function(argcv, a) {
                  return this.real.apply(this.receiver, a._value);
                }
                block484.methods["outer"] = function() {
                  return callmethod(this.receiver, 'outer', [0]);
                }
                block484.methods["match"] = GraceBlock_match;
                block484.methods["prefix?"] = GraceBlock_lift;
                block484.receiver = this;
                block484.className = 'block<kitty:203>';
                block484.real = function(
                  var_entity
                ) {
                  sourceObject = this;
                  lineNumber = 202
                  lineNumber = 197
                  var cases485 = [];
                  lineNumber = 199
                  var block486 = Grace_allocObject();
                  block486.methods["apply"] = function() {
                    var args = Array.prototype.slice.call(arguments, 1);
                    return this.real.apply(this.receiver, args);
                  }
                  block486.methods["applyIndirectly"] = function(argcv, a) {
                    return this.real.apply(this.receiver, a._value);
                  }
                  block486.methods["outer"] = function() {
                    return callmethod(this.receiver, 'outer', [0]);
                  }
                  lineNumber = 198
                  block486.pattern = new GraceNum(87);
                  block486.methods["match"] = GraceBlock_match;
                  block486.methods["prefix?"] = GraceBlock_lift;
                  block486.receiver = this;
                  block486.className = 'block<kitty:199>';
                  block486.real = function(
                  ) {
                    sourceObject = this;
                    var call487 = callmethod(var_entity,"moveUp", [1], new GraceNum(1));
                    return call487;
                  };
                  cases485.push(block486);
                  lineNumber = 200
                  var block488 = Grace_allocObject();
                  block488.methods["apply"] = function() {
                    var args = Array.prototype.slice.call(arguments, 1);
                    return this.real.apply(this.receiver, args);
                  }
                  block488.methods["applyIndirectly"] = function(argcv, a) {
                    return this.real.apply(this.receiver, a._value);
                  }
                  block488.methods["outer"] = function() {
                    return callmethod(this.receiver, 'outer', [0]);
                  }
                  lineNumber = 199
                  block488.pattern = new GraceNum(83);
                  block488.methods["match"] = GraceBlock_match;
                  block488.methods["prefix?"] = GraceBlock_lift;
                  block488.receiver = this;
                  block488.className = 'block<kitty:200>';
                  block488.real = function(
                  ) {
                    sourceObject = this;
                    var call489 = callmethod(var_entity,"moveDown", [1], new GraceNum(1));
                    return call489;
                  };
                  cases485.push(block488);
                  lineNumber = 201
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
                  lineNumber = 200
                  block490.pattern = new GraceNum(65);
                  block490.methods["match"] = GraceBlock_match;
                  block490.methods["prefix?"] = GraceBlock_lift;
                  block490.receiver = this;
                  block490.className = 'block<kitty:201>';
                  block490.real = function(
                  ) {
                    sourceObject = this;
                    var call491 = callmethod(var_entity,"moveLeft", [1], new GraceNum(1));
                    return call491;
                  };
                  cases485.push(block490);
                  lineNumber = 202
                  var block492 = Grace_allocObject();
                  block492.methods["apply"] = function() {
                    var args = Array.prototype.slice.call(arguments, 1);
                    return this.real.apply(this.receiver, args);
                  }
                  block492.methods["applyIndirectly"] = function(argcv, a) {
                    return this.real.apply(this.receiver, a._value);
                  }
                  block492.methods["outer"] = function() {
                    return callmethod(this.receiver, 'outer', [0]);
                  }
                  lineNumber = 201
                  block492.pattern = new GraceNum(68);
                  block492.methods["match"] = GraceBlock_match;
                  block492.methods["prefix?"] = GraceBlock_lift;
                  block492.receiver = this;
                  block492.className = 'block<kitty:202>';
                  block492.real = function(
                  ) {
                    sourceObject = this;
                    var call493 = callmethod(var_entity,"moveRight", [1], new GraceNum(1));
                    return call493;
                  };
                  cases485.push(block492);
                  var matchres485 = matchCase(var_key,cases485,false);
                  return matchres485;
                };
                var call494 = callmethod(Grace_prelude,"for()do", [1, 1], call483, block484);
                return call494;
              };
              var_keyDownListener = block473;
              lineNumber = 204
              var string495 = new GraceString("keydown");
              onSelf = true;
              var call496 = callmethod(this, "document", [0]);
              var call497 = callmethod(call496,"addEventListener", [2], string495, var_keyDownListener);
              lineNumber = 206
              lineNumber = 193
              lineNumber = 206
              var string498 = new GraceString("canvas");
              var call499 = callmethod(var_dom,"document", [0]);
              var call500 = callmethod(call499,"createElement", [1], string498);
              onSelf = true;
              var call501 = callmethod(this, "backingCanvas:=", [1], call500);
              lineNumber = 208
              lineNumber = 206
              lineNumber = 207
              onSelf = true;
              var call502 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call503 = callmethod(this, "backingCanvas", [0]);
              var call504 = callmethod(call503,"height:=", [1], call502);
              lineNumber = 209
              lineNumber = 206
              lineNumber = 208
              onSelf = true;
              var call505 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call506 = callmethod(this, "backingCanvas", [0]);
              var call507 = callmethod(call506,"width:=", [1], call505);
              lineNumber = 209
              lineNumber = 206
              lineNumber = 209
              var string508 = new GraceString("2d");
              onSelf = true;
              var call509 = callmethod(this, "backingCanvas", [0]);
              var call510 = callmethod(call509,"getContext", [1], string508);
              onSelf = true;
              var call511 = callmethod(this, "backingContext:=", [1], call510);
              lineNumber = 210
              lineNumber = 206
              lineNumber = 210
              var string512 = new GraceString("2d");
              onSelf = true;
              var call513 = callmethod(this, "canvas", [0]);
              var call514 = callmethod(call513,"getContext", [1], string512);
              onSelf = true;
              var call515 = callmethod(this, "mctx:=", [1], call514);
              lineNumber = 213
              lineNumber = 206
              lineNumber = 212
              var bool516 = new GraceBoolean(true)
              onSelf = true;
              var call517 = callmethod(this, "isInit:=", [1], bool516);
              lineNumber = 213
              var string518 = new GraceString("INITIALIZATION FINISHED");
              var call519 = Grace_print(string518);
              return call519
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func403.paramCounts = [
            0,
          ];
          func403.variableArities = [
            false,
          ];
          obj401.methods["init"] = func403;
          func403.definitionLine = 158;
          func403.definitionModule = "kitty";
          var func520 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func520.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 222
              var string521 = new GraceString("WORLD STARTED");
              var call522 = Grace_print(string521);
              lineNumber = 224
              lineNumber = 206
              lineNumber = 223
              var bool523 = new GraceBoolean(true)
              onSelf = true;
              var call524 = callmethod(this, "isRunning:=", [1], bool523);
              lineNumber = 224
              var block525 = Grace_allocObject();
              block525.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block525.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block525.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block525.methods["match"] = GraceBlock_match;
              block525.methods["prefix?"] = GraceBlock_lift;
              block525.receiver = this;
              block525.className = 'block<kitty:224>';
              block525.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call526 = callmethod(this, "isRunning", [0]);
                return call526;
              };
              lineNumber = 227
              var block527 = Grace_allocObject();
              block527.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block527.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block527.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block527.methods["match"] = GraceBlock_match;
              block527.methods["prefix?"] = GraceBlock_lift;
              block527.receiver = this;
              block527.className = 'block<kitty:227>';
              block527.real = function(
              ) {
                sourceObject = this;
                lineNumber = 225
                onSelf = true;
                var call528 = callmethod(this, "update", [0]);
                return call528;
              };
              lineNumber = 224
              var call529 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block525, new GraceNum(10), block527);
              lineNumber = 227
              var string530 = new GraceString("WORLD STOPPED");
              var call531 = Grace_print(string530);
              return call531
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func520.paramCounts = [
            0,
          ];
          func520.variableArities = [
            false,
          ];
          obj401.methods["start"] = func520;
          func520.definitionLine = 221;
          func520.definitionModule = "kitty";
          var func532 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func532.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 233
              var string533 = new GraceString("UPDATING WORLD...");
              var call534 = Grace_print(string533);
              lineNumber = 237
              lineNumber = 206
              lineNumber = 236
              onSelf = true;
              var call535 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call536 = callmethod(this, "mctx", [0]);
              var call537 = callmethod(call536,"fillStyle:=", [1], call535);
              lineNumber = 237
              onSelf = true;
              var call538 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call539 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call540 = callmethod(this, "mctx", [0]);
              var call541 = callmethod(call540,"fillRect", [4], new GraceNum(0), new GraceNum(0), call538, call539);
              lineNumber = 238
              onSelf = true;
              var call542 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call543 = callmethod(this, "mctx", [0]);
              var call544 = callmethod(call543,"drawImage", [3], call542, new GraceNum(0), new GraceNum(0));
              lineNumber = 239
              onSelf = true;
              var call545 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call547 = callmethod(this, "canvasWidth", [0]);
              var quotient549 = callmethod(call547, "/", [1], new GraceNum(2));
              onSelf = true;
              var call551 = callmethod(this, "canvasHeight", [0]);
              var quotient553 = callmethod(call551, "/", [1], new GraceNum(2));
              onSelf = true;
              var call554 = callmethod(this, "background", [0]);
              var call555 = callmethod(call554,"draw", [4], call545, quotient549, quotient553, new GraceNum(0));
              lineNumber = 242
              onSelf = true;
              var call556 = callmethod(this, "entities", [0]);
              lineNumber = 247
              var block557 = Grace_allocObject();
              block557.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block557.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block557.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block557.methods["match"] = GraceBlock_match;
              block557.methods["prefix?"] = GraceBlock_lift;
              block557.receiver = this;
              block557.className = 'block<kitty:247>';
              block557.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 243
                var call558 = callmethod(var_entity,"update", [0]);
                lineNumber = 244
                onSelf = true;
                var call559 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call561 = callmethod(this, "canvasWidth", [0]);
                var quotient563 = callmethod(call561, "/", [1], new GraceNum(2));
                onSelf = true;
                var call565 = callmethod(this, "canvasHeight", [0]);
                var quotient567 = callmethod(call565, "/", [1], new GraceNum(2));
                var call568 = callmethod(var_entity,"draw", [3], call559, quotient563, quotient567);
                return call568;
              };
              var call569 = callmethod(Grace_prelude,"for()do", [1, 1], call556, block557);
              lineNumber = 247
              var string570 = new GraceString("WORLD UPDATED");
              var call571 = Grace_print(string570);
              return call571
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func532.paramCounts = [
            0,
          ];
          func532.variableArities = [
            false,
          ];
          obj401.methods["update"] = func532;
          func532.definitionLine = 231;
          func532.definitionModule = "kitty";
          var func572 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func572.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 251
              var string573 = new GraceString("WORLD STOPPING...");
              var call574 = Grace_print(string573);
              lineNumber = 253
              lineNumber = 243
              lineNumber = 252
              var bool575 = new GraceBoolean(false)
              onSelf = true;
              var call576 = callmethod(this, "isRunning:=", [1], bool575);
              return call576
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func572.paramCounts = [
            0,
          ];
          func572.variableArities = [
            false,
          ];
          obj401.methods["stop"] = func572;
          func572.definitionLine = 250;
          func572.definitionModule = "kitty";
          var func577 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func577.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 256
              lineNumber = 243
              lineNumber = 256
              onSelf = true;
              var call578 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call579 = callmethod(this, "canvasHeight", [0]);
              var call580 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call581 = callmethod(call580, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call582 = callmethod(call581, "Image", [3], var_background__39__, call578, call579);
              onSelf = true;
              var call583 = callmethod(this, "background:=", [1], call582);
              return call583
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func577.paramCounts = [
            1,
          ];
          func577.variableArities = [
            false,
          ];
          obj401.methods["setBackground"] = func577;
          func577.definitionLine = 255;
          func577.definitionModule = "kitty";
          var func584 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func584.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 260
              onSelf = true;
              var call585 = callmethod(this, "entities", [0]);
              var call586 = callmethod(call585,"push", [1], var_e);
              return call586
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func584.paramTypes = [];
          func584.paramTypes.push([]);
          func584.paramCounts = [
            1,
          ];
          func584.variableArities = [
            false,
          ];
          obj401.methods["addEntity"] = func584;
          func584.definitionLine = 259;
          func584.definitionModule = "kitty";
          sourceObject = obj401;
          lineNumber = 134
          var string587 = new GraceString("CREATING NEW WORLD...");
          var call588 = Grace_print(string587);
          sourceObject = obj401;
          obj401.data["background"] = undefined;
          var reader_kitty_background_589 = function() {
            return this.data["background"];
          }
          obj401.methods["background"] = reader_kitty_background_589;
          obj401.data["background"] = undefined;
          var writer_kitty_background_589 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj401.methods["background:="] = writer_kitty_background_589;
          reader_kitty_background_589.confidential = true;
          writer_kitty_background_589.confidential = true;
          obj401.mutable = true;
          sourceObject = obj401;
          lineNumber = 137
          var string590 = new GraceString("black");
          obj401.data["backgroundColour"] = string590;
          var reader_kitty_backgroundColour_591 = function() {
            return this.data["backgroundColour"];
          }
          obj401.methods["backgroundColour"] = reader_kitty_backgroundColour_591;
          obj401.data["backgroundColour"] = string590;
          var writer_kitty_backgroundColour_591 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj401.methods["backgroundColour:="] = writer_kitty_backgroundColour_591;
          reader_kitty_backgroundColour_591.confidential = true;
          writer_kitty_backgroundColour_591.confidential = true;
          lineNumber = 139;
          moduleName = "kitty";
          lineNumber = 137
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string590)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj401.mutable = true;
          sourceObject = obj401;
          obj401.data["document"] = undefined;
          var reader_kitty_document_592 = function() {
            return this.data["document"];
          }
          obj401.methods["document"] = reader_kitty_document_592;
          obj401.data["document"] = undefined;
          var writer_kitty_document_592 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj401.methods["document:="] = writer_kitty_document_592;
          reader_kitty_document_592.confidential = true;
          writer_kitty_document_592.confidential = true;
          obj401.mutable = true;
          sourceObject = obj401;
          obj401.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_593 = function() {
            return this.data["backingCanvas"];
          }
          obj401.methods["backingCanvas"] = reader_kitty_backingCanvas_593;
          obj401.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_593 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj401.methods["backingCanvas:="] = writer_kitty_backingCanvas_593;
          reader_kitty_backingCanvas_593.confidential = true;
          writer_kitty_backingCanvas_593.confidential = true;
          obj401.mutable = true;
          sourceObject = obj401;
          obj401.data["backingContext"] = undefined;
          var reader_kitty_backingContext_594 = function() {
            return this.data["backingContext"];
          }
          obj401.methods["backingContext"] = reader_kitty_backingContext_594;
          obj401.data["backingContext"] = undefined;
          var writer_kitty_backingContext_594 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj401.methods["backingContext:="] = writer_kitty_backingContext_594;
          reader_kitty_backingContext_594.confidential = true;
          writer_kitty_backingContext_594.confidential = true;
          obj401.mutable = true;
          sourceObject = obj401;
          obj401.data["canvas"] = undefined;
          var reader_kitty_canvas_595 = function() {
            return this.data["canvas"];
          }
          obj401.methods["canvas"] = reader_kitty_canvas_595;
          obj401.data["canvas"] = undefined;
          var writer_kitty_canvas_595 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj401.methods["canvas:="] = writer_kitty_canvas_595;
          reader_kitty_canvas_595.confidential = true;
          writer_kitty_canvas_595.confidential = true;
          obj401.mutable = true;
          sourceObject = obj401;
          obj401.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_596 = function() {
            return this.data["canvasWidth"];
          }
          obj401.methods["canvasWidth"] = reader_kitty_canvasWidth_596;
          obj401.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_596 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj401.methods["canvasWidth:="] = writer_kitty_canvasWidth_596;
          reader_kitty_canvasWidth_596.confidential = true;
          writer_kitty_canvasWidth_596.confidential = true;
          obj401.mutable = true;
          sourceObject = obj401;
          obj401.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_597 = function() {
            return this.data["canvasHeight"];
          }
          obj401.methods["canvasHeight"] = reader_kitty_canvasHeight_597;
          obj401.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_597 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj401.methods["canvasHeight:="] = writer_kitty_canvasHeight_597;
          reader_kitty_canvasHeight_597.confidential = true;
          writer_kitty_canvasHeight_597.confidential = true;
          obj401.mutable = true;
          sourceObject = obj401;
          lineNumber = 148
          var call598 = callmethod(var_collections,"list", [0]);
          var call599 = callmethod(call598,"new", [0]);
          obj401.data["entities"] = call599;
          var reader_kitty_entities_600 = function() {
            return this.data["entities"];
          }
          obj401.methods["entities"] = reader_kitty_entities_600;
          obj401.data["entities"] = call599;
          var writer_kitty_entities_600 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj401.methods["entities:="] = writer_kitty_entities_600;
          reader_kitty_entities_600.confidential = true;
          writer_kitty_entities_600.confidential = true;
          lineNumber = 150;
          moduleName = "kitty";
          lineNumber = 148
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call599)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj401.mutable = true;
          sourceObject = obj401;
          lineNumber = 150
          var bool601 = new GraceBoolean(false)
          obj401.data["isInit"] = bool601;
          var reader_kitty_isInit_602 = function() {
            return this.data["isInit"];
          }
          obj401.methods["isInit"] = reader_kitty_isInit_602;
          obj401.data["isInit"] = bool601;
          var writer_kitty_isInit_602 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj401.methods["isInit:="] = writer_kitty_isInit_602;
          reader_kitty_isInit_602.confidential = true;
          writer_kitty_isInit_602.confidential = true;
          lineNumber = 151;
          moduleName = "kitty";
          lineNumber = 150
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool601)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj401.mutable = true;
          sourceObject = obj401;
          lineNumber = 151
          var bool603 = new GraceBoolean(false)
          obj401.data["isRunning"] = bool603;
          var reader_kitty_isRunning_604 = function() {
            return this.data["isRunning"];
          }
          obj401.methods["isRunning"] = reader_kitty_isRunning_604;
          obj401.data["isRunning"] = bool603;
          var writer_kitty_isRunning_604 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj401.methods["isRunning:="] = writer_kitty_isRunning_604;
          reader_kitty_isRunning_604.confidential = true;
          writer_kitty_isRunning_604.confidential = true;
          lineNumber = 153;
          moduleName = "kitty";
          lineNumber = 151
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool603)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj401.mutable = true;
          sourceObject = obj401;
          obj401.data["mctx"] = undefined;
          var reader_kitty_mctx_605 = function() {
            return this.data["mctx"];
          }
          obj401.methods["mctx"] = reader_kitty_mctx_605;
          obj401.data["mctx"] = undefined;
          var writer_kitty_mctx_605 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj401.methods["mctx:="] = writer_kitty_mctx_605;
          reader_kitty_mctx_605.confidential = true;
          writer_kitty_mctx_605.confidential = true;
          obj401.mutable = true;
          sourceObject = obj401;
          lineNumber = 155
          onSelf = true;
          var call606 = callmethod(this, "init", [0]);
          sourceObject = obj401;
          sourceObject = obj401;
          sourceObject = obj401;
          sourceObject = obj401;
          sourceObject = obj401;
          sourceObject = obj401;
          sourceObject = obj401;
          lineNumber = 263
          var string607 = new GraceString("WORLD CREATED");
          var call608 = Grace_print(string607);
          superDepth = origSuperDepth;
        }
        obj_init_401.apply(obj401, []);
        return obj401
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func400.paramCounts = [
      0,
    ];
    func400.variableArities = [
      false,
    ];
    obj398.methods["new"] = func400;
    func400.definitionLine = 132;
    func400.definitionModule = "kitty";
    var func609 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj610 = Grace_allocObject();
        obj610.definitionModule = "kitty";
        obj610.definitionLine = 132;
        var inho610 = inheritingObject;
        while (inho610.superobj) inho610 = inho610.superobj;
        inho610.superobj = obj610;
        obj610.data = inheritingObject.data;
        obj610.outer = this;
        var reader_kitty_outer_611 = function() {
          return this.outer;
        }
        obj610.methods["outer"] = reader_kitty_outer_611;
        function obj_init_610() {
          var origSuperDepth = superDepth;
          superDepth = obj610;
          obj610.annotations = [];
          var func612 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func612.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 160
              var string613 = new GraceString("INITIALIZING WORLD...");
              var call614 = Grace_print(string613);
              lineNumber = 166
              var if615 = var_done;
              lineNumber = 162
              onSelf = true;
              var call616 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call616)) {
                lineNumber = 164
                lineNumber = 163
                var bool617 = new GraceBoolean(false)
                return bool617
              }
              lineNumber = 167
              lineNumber = 148
              lineNumber = 166
              var call618 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call619 = callmethod(this, "document:=", [1], call618);
              lineNumber = 167
              lineNumber = 166
              lineNumber = 167
              var string620 = new GraceString("standard-canvas");
              onSelf = true;
              var call621 = callmethod(this, "document", [0]);
              var call622 = callmethod(call621,"getElementById", [1], string620);
              onSelf = true;
              var call623 = callmethod(this, "canvas:=", [1], call622);
              lineNumber = 169
              lineNumber = 166
              lineNumber = 168
              onSelf = true;
              var call624 = callmethod(this, "canvas", [0]);
              var call625 = callmethod(call624,"width", [0]);
              onSelf = true;
              var call626 = callmethod(this, "canvasWidth:=", [1], call625);
              lineNumber = 172
              lineNumber = 168
              lineNumber = 169
              onSelf = true;
              var call627 = callmethod(this, "canvas", [0]);
              var call628 = callmethod(call627,"height", [0]);
              onSelf = true;
              var call629 = callmethod(this, "canvasHeight:=", [1], call628);
              lineNumber = 184
              var block630 = Grace_allocObject();
              block630.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block630.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block630.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block630.methods["match"] = GraceBlock_match;
              block630.methods["prefix?"] = GraceBlock_lift;
              block630.receiver = this;
              block630.className = 'block<kitty:184>';
              block630.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 175
                lineNumber = 174
                onSelf = true;
                var call631 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call633 = callmethod(this, "canvas", [0]);
                var call634 = callmethod(call633,"offsetWidth", [0]);
                onSelf = true;
                var call636 = callmethod(this, "canvas", [0]);
                var call637 = callmethod(call636,"offsetLeft", [0]);
                var call639 = callmethod(var_ev,"clientX", [0]);
                var diff641 = callmethod(call639, "-", [1], call637);
                var quotient643 = callmethod(diff641, "/", [1], call634);
                var prod645 = callmethod(quotient643, "*", [1], call631);
                var var_x = prod645;
                lineNumber = 175;
                moduleName = "kitty";
                lineNumber = 174
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 177
                lineNumber = 175
                onSelf = true;
                var call646 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call648 = callmethod(this, "canvas", [0]);
                var call649 = callmethod(call648,"offsetHeight", [0]);
                onSelf = true;
                var call651 = callmethod(this, "canvas", [0]);
                var call652 = callmethod(call651,"offsetTop", [0]);
                var call654 = callmethod(var_ev,"clientY", [0]);
                var diff656 = callmethod(call654, "-", [1], call652);
                var quotient658 = callmethod(diff656, "/", [1], call649);
                var prod660 = callmethod(quotient658, "*", [1], call646);
                var var_y = prod660;
                lineNumber = 177;
                moduleName = "kitty";
                lineNumber = 175
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 177
                var string661 = new GraceString("MOUSEDOWN");
                var call662 = Grace_print(string661);
                lineNumber = 183
                var if663 = var_done;
                lineNumber = 179
                var opresult666 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call669 = callmethod(this, "canvasWidth", [0]);
                var diff671 = callmethod(call669, "-", [1], new GraceNum(20));
                var opresult674 = callmethod(var_x, ">", [1], diff671);
                var opresult676 = callmethod(opresult674, "&&", [1], opresult666);
                if (Grace_isTrue(opresult676)) {
                  lineNumber = 180
                  var call677 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 181
                  onSelf = true;
                  var call678 = callmethod(this, "stop", [0]);
                  if663 = call678;
                }
                return if663;
              };
              var_mouseDownListener = block630;
              lineNumber = 184
              var string679 = new GraceString("mousedown");
              onSelf = true;
              var call680 = callmethod(this, "canvas", [0]);
              var call681 = callmethod(call680,"addEventListener", [2], string679, var_mouseDownListener);
              lineNumber = 204
              var block682 = Grace_allocObject();
              block682.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block682.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block682.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block682.methods["match"] = GraceBlock_match;
              block682.methods["prefix?"] = GraceBlock_lift;
              block682.receiver = this;
              block682.className = 'block<kitty:204>';
              block682.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 188
                var string683 = new GraceString("WORLD");
                var call684 = Grace_print(string683);
                lineNumber = 193
                var if685 = var_done;
                lineNumber = 189
                var call687 = callmethod(var_ev,"keyCode", [0]);
                var opresult689 = callmethod(call687, "==", [1], new GraceNum(81));
                if (Grace_isTrue(opresult689)) {
                  lineNumber = 190
                  onSelf = true;
                  var call690 = callmethod(this, "stop", [0]);
                  if685 = call690;
                }
                lineNumber = 196
                lineNumber = 193
                var call691 = callmethod(var_ev,"keyCode", [0]);
                var var_key = call691;
                lineNumber = 196;
                moduleName = "kitty";
                lineNumber = 193
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_key)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of var 'key' to be of type Unknown"))
                lineNumber = 196
                onSelf = true;
                var call692 = callmethod(this, "entities", [0]);
                lineNumber = 203
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
                block693.className = 'block<kitty:203>';
                block693.real = function(
                  var_entity
                ) {
                  sourceObject = this;
                  lineNumber = 202
                  lineNumber = 197
                  var cases694 = [];
                  lineNumber = 199
                  var block695 = Grace_allocObject();
                  block695.methods["apply"] = function() {
                    var args = Array.prototype.slice.call(arguments, 1);
                    return this.real.apply(this.receiver, args);
                  }
                  block695.methods["applyIndirectly"] = function(argcv, a) {
                    return this.real.apply(this.receiver, a._value);
                  }
                  block695.methods["outer"] = function() {
                    return callmethod(this.receiver, 'outer', [0]);
                  }
                  lineNumber = 198
                  block695.pattern = new GraceNum(87);
                  block695.methods["match"] = GraceBlock_match;
                  block695.methods["prefix?"] = GraceBlock_lift;
                  block695.receiver = this;
                  block695.className = 'block<kitty:199>';
                  block695.real = function(
                  ) {
                    sourceObject = this;
                    var call696 = callmethod(var_entity,"moveUp", [1], new GraceNum(1));
                    return call696;
                  };
                  cases694.push(block695);
                  lineNumber = 200
                  var block697 = Grace_allocObject();
                  block697.methods["apply"] = function() {
                    var args = Array.prototype.slice.call(arguments, 1);
                    return this.real.apply(this.receiver, args);
                  }
                  block697.methods["applyIndirectly"] = function(argcv, a) {
                    return this.real.apply(this.receiver, a._value);
                  }
                  block697.methods["outer"] = function() {
                    return callmethod(this.receiver, 'outer', [0]);
                  }
                  lineNumber = 199
                  block697.pattern = new GraceNum(83);
                  block697.methods["match"] = GraceBlock_match;
                  block697.methods["prefix?"] = GraceBlock_lift;
                  block697.receiver = this;
                  block697.className = 'block<kitty:200>';
                  block697.real = function(
                  ) {
                    sourceObject = this;
                    var call698 = callmethod(var_entity,"moveDown", [1], new GraceNum(1));
                    return call698;
                  };
                  cases694.push(block697);
                  lineNumber = 201
                  var block699 = Grace_allocObject();
                  block699.methods["apply"] = function() {
                    var args = Array.prototype.slice.call(arguments, 1);
                    return this.real.apply(this.receiver, args);
                  }
                  block699.methods["applyIndirectly"] = function(argcv, a) {
                    return this.real.apply(this.receiver, a._value);
                  }
                  block699.methods["outer"] = function() {
                    return callmethod(this.receiver, 'outer', [0]);
                  }
                  lineNumber = 200
                  block699.pattern = new GraceNum(65);
                  block699.methods["match"] = GraceBlock_match;
                  block699.methods["prefix?"] = GraceBlock_lift;
                  block699.receiver = this;
                  block699.className = 'block<kitty:201>';
                  block699.real = function(
                  ) {
                    sourceObject = this;
                    var call700 = callmethod(var_entity,"moveLeft", [1], new GraceNum(1));
                    return call700;
                  };
                  cases694.push(block699);
                  lineNumber = 202
                  var block701 = Grace_allocObject();
                  block701.methods["apply"] = function() {
                    var args = Array.prototype.slice.call(arguments, 1);
                    return this.real.apply(this.receiver, args);
                  }
                  block701.methods["applyIndirectly"] = function(argcv, a) {
                    return this.real.apply(this.receiver, a._value);
                  }
                  block701.methods["outer"] = function() {
                    return callmethod(this.receiver, 'outer', [0]);
                  }
                  lineNumber = 201
                  block701.pattern = new GraceNum(68);
                  block701.methods["match"] = GraceBlock_match;
                  block701.methods["prefix?"] = GraceBlock_lift;
                  block701.receiver = this;
                  block701.className = 'block<kitty:202>';
                  block701.real = function(
                  ) {
                    sourceObject = this;
                    var call702 = callmethod(var_entity,"moveRight", [1], new GraceNum(1));
                    return call702;
                  };
                  cases694.push(block701);
                  var matchres694 = matchCase(var_key,cases694,false);
                  return matchres694;
                };
                var call703 = callmethod(Grace_prelude,"for()do", [1, 1], call692, block693);
                return call703;
              };
              var_keyDownListener = block682;
              lineNumber = 204
              var string704 = new GraceString("keydown");
              onSelf = true;
              var call705 = callmethod(this, "document", [0]);
              var call706 = callmethod(call705,"addEventListener", [2], string704, var_keyDownListener);
              lineNumber = 206
              lineNumber = 193
              lineNumber = 206
              var string707 = new GraceString("canvas");
              var call708 = callmethod(var_dom,"document", [0]);
              var call709 = callmethod(call708,"createElement", [1], string707);
              onSelf = true;
              var call710 = callmethod(this, "backingCanvas:=", [1], call709);
              lineNumber = 208
              lineNumber = 206
              lineNumber = 207
              onSelf = true;
              var call711 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call712 = callmethod(this, "backingCanvas", [0]);
              var call713 = callmethod(call712,"height:=", [1], call711);
              lineNumber = 209
              lineNumber = 206
              lineNumber = 208
              onSelf = true;
              var call714 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call715 = callmethod(this, "backingCanvas", [0]);
              var call716 = callmethod(call715,"width:=", [1], call714);
              lineNumber = 209
              lineNumber = 206
              lineNumber = 209
              var string717 = new GraceString("2d");
              onSelf = true;
              var call718 = callmethod(this, "backingCanvas", [0]);
              var call719 = callmethod(call718,"getContext", [1], string717);
              onSelf = true;
              var call720 = callmethod(this, "backingContext:=", [1], call719);
              lineNumber = 210
              lineNumber = 206
              lineNumber = 210
              var string721 = new GraceString("2d");
              onSelf = true;
              var call722 = callmethod(this, "canvas", [0]);
              var call723 = callmethod(call722,"getContext", [1], string721);
              onSelf = true;
              var call724 = callmethod(this, "mctx:=", [1], call723);
              lineNumber = 213
              lineNumber = 206
              lineNumber = 212
              var bool725 = new GraceBoolean(true)
              onSelf = true;
              var call726 = callmethod(this, "isInit:=", [1], bool725);
              lineNumber = 213
              var string727 = new GraceString("INITIALIZATION FINISHED");
              var call728 = Grace_print(string727);
              return call728
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func612.paramCounts = [
            0,
          ];
          func612.variableArities = [
            false,
          ];
          obj610.methods["init"] = func612;
          func612.definitionLine = 158;
          func612.definitionModule = "kitty";
          var func729 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func729.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 222
              var string730 = new GraceString("WORLD STARTED");
              var call731 = Grace_print(string730);
              lineNumber = 224
              lineNumber = 206
              lineNumber = 223
              var bool732 = new GraceBoolean(true)
              onSelf = true;
              var call733 = callmethod(this, "isRunning:=", [1], bool732);
              lineNumber = 224
              var block734 = Grace_allocObject();
              block734.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block734.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block734.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block734.methods["match"] = GraceBlock_match;
              block734.methods["prefix?"] = GraceBlock_lift;
              block734.receiver = this;
              block734.className = 'block<kitty:224>';
              block734.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call735 = callmethod(this, "isRunning", [0]);
                return call735;
              };
              lineNumber = 227
              var block736 = Grace_allocObject();
              block736.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block736.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block736.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block736.methods["match"] = GraceBlock_match;
              block736.methods["prefix?"] = GraceBlock_lift;
              block736.receiver = this;
              block736.className = 'block<kitty:227>';
              block736.real = function(
              ) {
                sourceObject = this;
                lineNumber = 225
                onSelf = true;
                var call737 = callmethod(this, "update", [0]);
                return call737;
              };
              lineNumber = 224
              var call738 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block734, new GraceNum(10), block736);
              lineNumber = 227
              var string739 = new GraceString("WORLD STOPPED");
              var call740 = Grace_print(string739);
              return call740
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func729.paramCounts = [
            0,
          ];
          func729.variableArities = [
            false,
          ];
          obj610.methods["start"] = func729;
          func729.definitionLine = 221;
          func729.definitionModule = "kitty";
          var func741 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func741.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 233
              var string742 = new GraceString("UPDATING WORLD...");
              var call743 = Grace_print(string742);
              lineNumber = 237
              lineNumber = 206
              lineNumber = 236
              onSelf = true;
              var call744 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call745 = callmethod(this, "mctx", [0]);
              var call746 = callmethod(call745,"fillStyle:=", [1], call744);
              lineNumber = 237
              onSelf = true;
              var call747 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call748 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call749 = callmethod(this, "mctx", [0]);
              var call750 = callmethod(call749,"fillRect", [4], new GraceNum(0), new GraceNum(0), call747, call748);
              lineNumber = 238
              onSelf = true;
              var call751 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call752 = callmethod(this, "mctx", [0]);
              var call753 = callmethod(call752,"drawImage", [3], call751, new GraceNum(0), new GraceNum(0));
              lineNumber = 239
              onSelf = true;
              var call754 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call756 = callmethod(this, "canvasWidth", [0]);
              var quotient758 = callmethod(call756, "/", [1], new GraceNum(2));
              onSelf = true;
              var call760 = callmethod(this, "canvasHeight", [0]);
              var quotient762 = callmethod(call760, "/", [1], new GraceNum(2));
              onSelf = true;
              var call763 = callmethod(this, "background", [0]);
              var call764 = callmethod(call763,"draw", [4], call754, quotient758, quotient762, new GraceNum(0));
              lineNumber = 242
              onSelf = true;
              var call765 = callmethod(this, "entities", [0]);
              lineNumber = 247
              var block766 = Grace_allocObject();
              block766.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block766.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block766.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block766.methods["match"] = GraceBlock_match;
              block766.methods["prefix?"] = GraceBlock_lift;
              block766.receiver = this;
              block766.className = 'block<kitty:247>';
              block766.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 243
                var call767 = callmethod(var_entity,"update", [0]);
                lineNumber = 244
                onSelf = true;
                var call768 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call770 = callmethod(this, "canvasWidth", [0]);
                var quotient772 = callmethod(call770, "/", [1], new GraceNum(2));
                onSelf = true;
                var call774 = callmethod(this, "canvasHeight", [0]);
                var quotient776 = callmethod(call774, "/", [1], new GraceNum(2));
                var call777 = callmethod(var_entity,"draw", [3], call768, quotient772, quotient776);
                return call777;
              };
              var call778 = callmethod(Grace_prelude,"for()do", [1, 1], call765, block766);
              lineNumber = 247
              var string779 = new GraceString("WORLD UPDATED");
              var call780 = Grace_print(string779);
              return call780
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func741.paramCounts = [
            0,
          ];
          func741.variableArities = [
            false,
          ];
          obj610.methods["update"] = func741;
          func741.definitionLine = 231;
          func741.definitionModule = "kitty";
          var func781 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func781.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 251
              var string782 = new GraceString("WORLD STOPPING...");
              var call783 = Grace_print(string782);
              lineNumber = 253
              lineNumber = 243
              lineNumber = 252
              var bool784 = new GraceBoolean(false)
              onSelf = true;
              var call785 = callmethod(this, "isRunning:=", [1], bool784);
              return call785
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func781.paramCounts = [
            0,
          ];
          func781.variableArities = [
            false,
          ];
          obj610.methods["stop"] = func781;
          func781.definitionLine = 250;
          func781.definitionModule = "kitty";
          var func786 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func786.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 256
              lineNumber = 243
              lineNumber = 256
              onSelf = true;
              var call787 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call788 = callmethod(this, "canvasHeight", [0]);
              var call789 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call790 = callmethod(call789, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call791 = callmethod(call790, "Image", [3], var_background__39__, call787, call788);
              onSelf = true;
              var call792 = callmethod(this, "background:=", [1], call791);
              return call792
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func786.paramCounts = [
            1,
          ];
          func786.variableArities = [
            false,
          ];
          obj610.methods["setBackground"] = func786;
          func786.definitionLine = 255;
          func786.definitionModule = "kitty";
          var func793 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func793.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 260
              onSelf = true;
              var call794 = callmethod(this, "entities", [0]);
              var call795 = callmethod(call794,"push", [1], var_e);
              return call795
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func793.paramTypes = [];
          func793.paramTypes.push([]);
          func793.paramCounts = [
            1,
          ];
          func793.variableArities = [
            false,
          ];
          obj610.methods["addEntity"] = func793;
          func793.definitionLine = 259;
          func793.definitionModule = "kitty";
          sourceObject = obj610;
          lineNumber = 134
          var string796 = new GraceString("CREATING NEW WORLD...");
          var call797 = Grace_print(string796);
          sourceObject = obj610;
          obj610.data["background"] = undefined;
          var reader_kitty_background_798 = function() {
            return this.data["background"];
          }
          obj610.methods["background"] = reader_kitty_background_798;
          obj610.data["background"] = undefined;
          var writer_kitty_background_798 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj610.methods["background:="] = writer_kitty_background_798;
          reader_kitty_background_798.confidential = true;
          writer_kitty_background_798.confidential = true;
          obj610.mutable = true;
          sourceObject = obj610;
          lineNumber = 137
          var string799 = new GraceString("black");
          obj610.data["backgroundColour"] = string799;
          var reader_kitty_backgroundColour_800 = function() {
            return this.data["backgroundColour"];
          }
          obj610.methods["backgroundColour"] = reader_kitty_backgroundColour_800;
          obj610.data["backgroundColour"] = string799;
          var writer_kitty_backgroundColour_800 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj610.methods["backgroundColour:="] = writer_kitty_backgroundColour_800;
          reader_kitty_backgroundColour_800.confidential = true;
          writer_kitty_backgroundColour_800.confidential = true;
          lineNumber = 139;
          moduleName = "kitty";
          lineNumber = 137
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string799)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj610.mutable = true;
          sourceObject = obj610;
          obj610.data["document"] = undefined;
          var reader_kitty_document_801 = function() {
            return this.data["document"];
          }
          obj610.methods["document"] = reader_kitty_document_801;
          obj610.data["document"] = undefined;
          var writer_kitty_document_801 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj610.methods["document:="] = writer_kitty_document_801;
          reader_kitty_document_801.confidential = true;
          writer_kitty_document_801.confidential = true;
          obj610.mutable = true;
          sourceObject = obj610;
          obj610.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_802 = function() {
            return this.data["backingCanvas"];
          }
          obj610.methods["backingCanvas"] = reader_kitty_backingCanvas_802;
          obj610.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_802 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj610.methods["backingCanvas:="] = writer_kitty_backingCanvas_802;
          reader_kitty_backingCanvas_802.confidential = true;
          writer_kitty_backingCanvas_802.confidential = true;
          obj610.mutable = true;
          sourceObject = obj610;
          obj610.data["backingContext"] = undefined;
          var reader_kitty_backingContext_803 = function() {
            return this.data["backingContext"];
          }
          obj610.methods["backingContext"] = reader_kitty_backingContext_803;
          obj610.data["backingContext"] = undefined;
          var writer_kitty_backingContext_803 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj610.methods["backingContext:="] = writer_kitty_backingContext_803;
          reader_kitty_backingContext_803.confidential = true;
          writer_kitty_backingContext_803.confidential = true;
          obj610.mutable = true;
          sourceObject = obj610;
          obj610.data["canvas"] = undefined;
          var reader_kitty_canvas_804 = function() {
            return this.data["canvas"];
          }
          obj610.methods["canvas"] = reader_kitty_canvas_804;
          obj610.data["canvas"] = undefined;
          var writer_kitty_canvas_804 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj610.methods["canvas:="] = writer_kitty_canvas_804;
          reader_kitty_canvas_804.confidential = true;
          writer_kitty_canvas_804.confidential = true;
          obj610.mutable = true;
          sourceObject = obj610;
          obj610.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_805 = function() {
            return this.data["canvasWidth"];
          }
          obj610.methods["canvasWidth"] = reader_kitty_canvasWidth_805;
          obj610.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_805 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj610.methods["canvasWidth:="] = writer_kitty_canvasWidth_805;
          reader_kitty_canvasWidth_805.confidential = true;
          writer_kitty_canvasWidth_805.confidential = true;
          obj610.mutable = true;
          sourceObject = obj610;
          obj610.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_806 = function() {
            return this.data["canvasHeight"];
          }
          obj610.methods["canvasHeight"] = reader_kitty_canvasHeight_806;
          obj610.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_806 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj610.methods["canvasHeight:="] = writer_kitty_canvasHeight_806;
          reader_kitty_canvasHeight_806.confidential = true;
          writer_kitty_canvasHeight_806.confidential = true;
          obj610.mutable = true;
          sourceObject = obj610;
          lineNumber = 148
          var call807 = callmethod(var_collections,"list", [0]);
          var call808 = callmethod(call807,"new", [0]);
          obj610.data["entities"] = call808;
          var reader_kitty_entities_809 = function() {
            return this.data["entities"];
          }
          obj610.methods["entities"] = reader_kitty_entities_809;
          obj610.data["entities"] = call808;
          var writer_kitty_entities_809 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj610.methods["entities:="] = writer_kitty_entities_809;
          reader_kitty_entities_809.confidential = true;
          writer_kitty_entities_809.confidential = true;
          lineNumber = 150;
          moduleName = "kitty";
          lineNumber = 148
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call808)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj610.mutable = true;
          sourceObject = obj610;
          lineNumber = 150
          var bool810 = new GraceBoolean(false)
          obj610.data["isInit"] = bool810;
          var reader_kitty_isInit_811 = function() {
            return this.data["isInit"];
          }
          obj610.methods["isInit"] = reader_kitty_isInit_811;
          obj610.data["isInit"] = bool810;
          var writer_kitty_isInit_811 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj610.methods["isInit:="] = writer_kitty_isInit_811;
          reader_kitty_isInit_811.confidential = true;
          writer_kitty_isInit_811.confidential = true;
          lineNumber = 151;
          moduleName = "kitty";
          lineNumber = 150
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool810)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj610.mutable = true;
          sourceObject = obj610;
          lineNumber = 151
          var bool812 = new GraceBoolean(false)
          obj610.data["isRunning"] = bool812;
          var reader_kitty_isRunning_813 = function() {
            return this.data["isRunning"];
          }
          obj610.methods["isRunning"] = reader_kitty_isRunning_813;
          obj610.data["isRunning"] = bool812;
          var writer_kitty_isRunning_813 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj610.methods["isRunning:="] = writer_kitty_isRunning_813;
          reader_kitty_isRunning_813.confidential = true;
          writer_kitty_isRunning_813.confidential = true;
          lineNumber = 153;
          moduleName = "kitty";
          lineNumber = 151
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool812)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj610.mutable = true;
          sourceObject = obj610;
          obj610.data["mctx"] = undefined;
          var reader_kitty_mctx_814 = function() {
            return this.data["mctx"];
          }
          obj610.methods["mctx"] = reader_kitty_mctx_814;
          obj610.data["mctx"] = undefined;
          var writer_kitty_mctx_814 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj610.methods["mctx:="] = writer_kitty_mctx_814;
          reader_kitty_mctx_814.confidential = true;
          writer_kitty_mctx_814.confidential = true;
          obj610.mutable = true;
          sourceObject = obj610;
          lineNumber = 155
          onSelf = true;
          var call815 = callmethod(this, "init", [0]);
          sourceObject = obj610;
          sourceObject = obj610;
          sourceObject = obj610;
          sourceObject = obj610;
          sourceObject = obj610;
          sourceObject = obj610;
          sourceObject = obj610;
          lineNumber = 263
          var string816 = new GraceString("WORLD CREATED");
          var call817 = Grace_print(string816);
          superDepth = origSuperDepth;
        }
        obj_init_610.apply(inheritingObject, []);
        return obj610
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj398.methods["new()object"] = func609;
    var func818 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 132
        var string819 = new GraceString("class KittyWorld");
        return string819
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func818.paramCounts = [
    ];
    func818.variableArities = [
    ];
    obj398.methods["asDebugString"] = func818;
    func818.definitionLine = 132;
    func818.definitionModule = "kitty";
    sourceObject = obj398;
    sourceObject = obj398;
    superDepth = origSuperDepth;
  }
  obj_init_398.apply(obj398, []);
  var var_KittyWorld = obj398;
  lineNumber = 266
  lineNumber = 277
  lineNumber = 293
  lineNumber = 297
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
'dom',
'StandardPrelude',
];
if (gctCache)
  gctCache['kitty'] = "modules:\n StandardPrelude\n mgcollections\nconstructors-of:KittyImage:\n new\nfresh-methods:\n Image\n Entity\n World\npublic:\n m_world\n m_world:=\n worldSet\n worldSet:=\n keyDownListener\n keyDownListener:=\n mouseDownListener\n mouseDownListener:=\n KittyImage\n Image\n KittyEntity\n Entity\n KittyWorld\n World\n start\n stop\n setWorld\nmethods-of:KittyImage.new:\n width:=\n imgTag\n draw\n height\n height:=\n width\nmethods-of:KittyEntity.new:\n getX\n getY\n image\n start\n setImage\n posX:=\n posY:=\n setLocation\n rotation:=\n posX\n posY\n draw\n moveDown\n rotation\n image:=\n moveLeft\n update\n onDestroy\n moveUp\n awake\n getRotation\n moveRight\nmethods-of:KittyWorld.new:\n background:=\n canvas\n background\n backingCanvas:=\n stop\n canvasWidth\n backingCanvas\n start\n isRunning:=\n isInit\n mctx:=\n backingContext:=\n document:=\n canvasHeight:=\n setBackground\n entities:=\n isRunning\n document\n init\n update\n entities\n addEntity\n mctx\n isInit:=\n backgroundColour:=\n canvasWidth:=\n backingContext\n canvas:=\n backgroundColour\n canvasHeight\nconstructors-of:KittyEntity:\n new\npath:\n kitty\nclasses:\n KittyImage\n KittyEntity\n KittyWorld\nfresh:Entity:\n getX\n getY\n image\n start\n setImage\n posX:=\n posY:=\n setLocation\n rotation:=\n posX\n posY\n draw\n moveDown\n rotation\n image:=\n moveLeft\n update\n onDestroy\n moveUp\n awake\n getRotation\n moveRight\nconfidential:\nconstructors-of:KittyWorld:\n new\nfresh:Image:\n width:=\n imgTag\n draw\n height\n height:=\n width\nfresh:World:\n background:=\n canvasWidth\n background\n backingCanvas:=\n stop\n canvas\n backingCanvas\n start\n backgroundColour:=\n isInit\n mctx:=\n isRunning:=\n document:=\n canvasHeight:=\n canvas:=\n entities:=\n isRunning\n document\n backgroundColour\n update\n entities\n addEntity\n mctx\n isInit:=\n backingContext:=\n setBackground\n backingContext\n canvasWidth:=\n init\n canvasHeight\n";
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
    "    ",
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
