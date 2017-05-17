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
  lineNumber = 274
  var func16 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func16.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (World)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 275
      var obj17 = Grace_allocObject();
      obj17.definitionModule = "kitty";
      obj17.definitionLine = 275;
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
        lineNumber = 276
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
  func16.definitionLine = 274;
  func16.definitionModule = "kitty";
  var func20 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj21 = Grace_allocObject();
      obj21.definitionModule = "kitty";
      obj21.definitionLine = 275;
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
  lineNumber = 285
  var func24 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func24.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 287
      var string25 = new GraceString("CHECKING...");
      var call26 = Grace_print(string25);
      lineNumber = 294
      var if27 = var_done;
      lineNumber = 289
      var call28 = callmethod(var_worldSet,"prefix!", [0]);
      if (Grace_isTrue(call28)) {
        lineNumber = 290
        var string29 = new GraceString("NO WORLD!!");
        var call30 = Grace_print(string29);
        lineNumber = 292
        return var_done
      }
      lineNumber = 294
      var string31 = new GraceString("STARTING...");
      var call32 = Grace_print(string31);
      lineNumber = 297
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
  func24.definitionLine = 285;
  func24.definitionModule = "kitty";
  lineNumber = 301
  var func34 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func34.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 302
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
  func34.definitionLine = 301;
  func34.definitionModule = "kitty";
  lineNumber = 305
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
      lineNumber = 307
      lineNumber = 306
      var_m__95__world = var_world__39__;
      lineNumber = 308
      lineNumber = 307
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
  func37.definitionLine = 305;
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
  lineNumber = 297
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
  func40.definitionLine = 297;
  func40.definitionModule = "kitty";
  lineNumber = 297
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
  func41.definitionLine = 297;
  func41.definitionModule = "kitty";
  lineNumber = 11
  lineNumber = 8
  var bool42 = new GraceBoolean(false)
  var var_worldSet = bool42;
  lineNumber = 297
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
  func43.definitionLine = 297;
  func43.definitionModule = "kitty";
  lineNumber = 297
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
  func44.definitionLine = 297;
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
  lineNumber = 297
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
  func45.definitionLine = 297;
  func45.definitionModule = "kitty";
  lineNumber = 297
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
  func46.definitionLine = 297;
  func46.definitionModule = "kitty";
  lineNumber = 17
  var var_mouseDownListener;
  lineNumber = 297
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
  func47.definitionLine = 297;
  func47.definitionModule = "kitty";
  lineNumber = 297
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
  func48.definitionLine = 297;
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
              lineNumber = 172
              var string424 = new GraceString("INITIALIZING WORLD...");
              var call425 = Grace_print(string424);
              lineNumber = 178
              var if426 = var_done;
              lineNumber = 174
              onSelf = true;
              var call427 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call427)) {
                lineNumber = 176
                lineNumber = 175
                var bool428 = new GraceBoolean(false)
                return bool428
              }
              lineNumber = 179
              lineNumber = 142
              lineNumber = 178
              var call429 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call430 = callmethod(this, "document:=", [1], call429);
              lineNumber = 179
              lineNumber = 178
              lineNumber = 179
              var string431 = new GraceString("standard-canvas");
              onSelf = true;
              var call432 = callmethod(this, "document", [0]);
              var call433 = callmethod(call432,"getElementById", [1], string431);
              onSelf = true;
              var call434 = callmethod(this, "canvas:=", [1], call433);
              lineNumber = 181
              lineNumber = 178
              lineNumber = 180
              onSelf = true;
              var call435 = callmethod(this, "canvas", [0]);
              var call436 = callmethod(call435,"width", [0]);
              onSelf = true;
              var call437 = callmethod(this, "canvasWidth:=", [1], call436);
              lineNumber = 184
              lineNumber = 180
              lineNumber = 181
              onSelf = true;
              var call438 = callmethod(this, "canvas", [0]);
              var call439 = callmethod(call438,"height", [0]);
              onSelf = true;
              var call440 = callmethod(this, "canvasHeight:=", [1], call439);
              lineNumber = 196
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
              block441.className = 'block<kitty:196>';
              block441.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 187
                lineNumber = 186
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
                lineNumber = 187;
                moduleName = "kitty";
                lineNumber = 186
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 189
                lineNumber = 187
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
                lineNumber = 189;
                moduleName = "kitty";
                lineNumber = 187
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 189
                var string472 = new GraceString("MOUSEDOWN");
                var call473 = Grace_print(string472);
                lineNumber = 195
                var if474 = var_done;
                lineNumber = 191
                var opresult477 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call480 = callmethod(this, "canvasWidth", [0]);
                var diff482 = callmethod(call480, "-", [1], new GraceNum(20));
                var opresult485 = callmethod(var_x, ">", [1], diff482);
                var opresult487 = callmethod(opresult485, "&&", [1], opresult477);
                if (Grace_isTrue(opresult487)) {
                  lineNumber = 192
                  var call488 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 193
                  onSelf = true;
                  var call489 = callmethod(this, "stop", [0]);
                  if474 = call489;
                }
                return if474;
              };
              var_mouseDownListener = block441;
              lineNumber = 196
              var string490 = new GraceString("mousedown");
              onSelf = true;
              var call491 = callmethod(this, "canvas", [0]);
              var call492 = callmethod(call491,"addEventListener", [2], string490, var_mouseDownListener);
              lineNumber = 206
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
              block493.className = 'block<kitty:206>';
              block493.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 200
                var string494 = new GraceString("");
                var call496 = callmethod(var_ev,"keyCode", [0]);
                var string498 = new GraceString("KEYDOWN: ");
                var opresult500 = callmethod(string498, "++", [1], call496);
                var opresult502 = callmethod(opresult500, "++", [1], string494);
                var call503 = Grace_print(opresult502);
                lineNumber = 204
                var if504 = var_done;
                lineNumber = 201
                var call506 = callmethod(var_ev,"keyCode", [0]);
                var opresult508 = callmethod(call506, "==", [1], new GraceNum(81));
                if (Grace_isTrue(opresult508)) {
                  lineNumber = 202
                  onSelf = true;
                  var call509 = callmethod(this, "stop", [0]);
                  if504 = call509;
                }
                lineNumber = 205
                lineNumber = 201
                lineNumber = 204
                var call510 = callmethod(var_ev,"keyCode", [0]);
                onSelf = true;
                var call511 = callmethod(this, "currentKeyDown:=", [1], call510);
                return call511;
              };
              var_keyDownListener = block493;
              lineNumber = 206
              var string512 = new GraceString("keydown");
              onSelf = true;
              var call513 = callmethod(this, "document", [0]);
              var call514 = callmethod(call513,"addEventListener", [2], string512, var_keyDownListener);
              lineNumber = 208
              lineNumber = 204
              lineNumber = 208
              var string515 = new GraceString("canvas");
              var call516 = callmethod(var_dom,"document", [0]);
              var call517 = callmethod(call516,"createElement", [1], string515);
              onSelf = true;
              var call518 = callmethod(this, "backingCanvas:=", [1], call517);
              lineNumber = 210
              lineNumber = 208
              lineNumber = 209
              onSelf = true;
              var call519 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call520 = callmethod(this, "backingCanvas", [0]);
              var call521 = callmethod(call520,"height:=", [1], call519);
              lineNumber = 211
              lineNumber = 208
              lineNumber = 210
              onSelf = true;
              var call522 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call523 = callmethod(this, "backingCanvas", [0]);
              var call524 = callmethod(call523,"width:=", [1], call522);
              lineNumber = 211
              lineNumber = 208
              lineNumber = 211
              var string525 = new GraceString("2d");
              onSelf = true;
              var call526 = callmethod(this, "backingCanvas", [0]);
              var call527 = callmethod(call526,"getContext", [1], string525);
              onSelf = true;
              var call528 = callmethod(this, "backingContext:=", [1], call527);
              lineNumber = 212
              lineNumber = 208
              lineNumber = 212
              var string529 = new GraceString("2d");
              onSelf = true;
              var call530 = callmethod(this, "canvas", [0]);
              var call531 = callmethod(call530,"getContext", [1], string529);
              onSelf = true;
              var call532 = callmethod(this, "mctx:=", [1], call531);
              lineNumber = 215
              lineNumber = 208
              lineNumber = 214
              var bool533 = new GraceBoolean(true)
              onSelf = true;
              var call534 = callmethod(this, "isInit:=", [1], bool533);
              lineNumber = 215
              var string535 = new GraceString("INITIALIZATION FINISHED");
              var call536 = Grace_print(string535);
              return call536
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
          func423.definitionLine = 170;
          func423.definitionModule = "kitty";
          var func537 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func537.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 224
              var string538 = new GraceString("WORLD STARTED");
              var call539 = Grace_print(string538);
              lineNumber = 226
              lineNumber = 208
              lineNumber = 225
              var bool540 = new GraceBoolean(true)
              onSelf = true;
              var call541 = callmethod(this, "isRunning:=", [1], bool540);
              lineNumber = 226
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
              block542.className = 'block<kitty:226>';
              block542.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call543 = callmethod(this, "isRunning", [0]);
                return call543;
              };
              lineNumber = 229
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
              block544.className = 'block<kitty:229>';
              block544.real = function(
              ) {
                sourceObject = this;
                lineNumber = 227
                onSelf = true;
                var call545 = callmethod(this, "update", [0]);
                return call545;
              };
              lineNumber = 226
              var call546 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block542, new GraceNum(10), block544);
              lineNumber = 229
              var string547 = new GraceString("WORLD STOPPED");
              var call548 = Grace_print(string547);
              return call548
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
          obj421.methods["start"] = func537;
          func537.definitionLine = 223;
          func537.definitionModule = "kitty";
          var func549 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func549.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 235
              var string550 = new GraceString("UPDATING WORLD...");
              var call551 = Grace_print(string550);
              lineNumber = 239
              lineNumber = 208
              lineNumber = 238
              onSelf = true;
              var call552 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call553 = callmethod(this, "mctx", [0]);
              var call554 = callmethod(call553,"fillStyle:=", [1], call552);
              lineNumber = 239
              onSelf = true;
              var call555 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call556 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call557 = callmethod(this, "mctx", [0]);
              var call558 = callmethod(call557,"fillRect", [4], new GraceNum(0), new GraceNum(0), call555, call556);
              lineNumber = 240
              onSelf = true;
              var call559 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call560 = callmethod(this, "mctx", [0]);
              var call561 = callmethod(call560,"drawImage", [3], call559, new GraceNum(0), new GraceNum(0));
              lineNumber = 241
              onSelf = true;
              var call562 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call564 = callmethod(this, "canvasWidth", [0]);
              var quotient566 = callmethod(call564, "/", [1], new GraceNum(2));
              onSelf = true;
              var call568 = callmethod(this, "canvasHeight", [0]);
              var quotient570 = callmethod(call568, "/", [1], new GraceNum(2));
              onSelf = true;
              var call571 = callmethod(this, "background", [0]);
              var call572 = callmethod(call571,"draw", [4], call562, quotient566, quotient570, new GraceNum(0));
              lineNumber = 244
              onSelf = true;
              var call573 = callmethod(this, "entities", [0]);
              lineNumber = 249
              var block574 = Grace_allocObject();
              block574.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block574.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block574.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block574.methods["match"] = GraceBlock_match;
              block574.methods["prefix?"] = GraceBlock_lift;
              block574.receiver = this;
              block574.className = 'block<kitty:249>';
              block574.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 245
                var call575 = callmethod(var_entity,"update", [0]);
                lineNumber = 246
                onSelf = true;
                var call576 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call578 = callmethod(this, "canvasWidth", [0]);
                var quotient580 = callmethod(call578, "/", [1], new GraceNum(2));
                onSelf = true;
                var call582 = callmethod(this, "canvasHeight", [0]);
                var quotient584 = callmethod(call582, "/", [1], new GraceNum(2));
                var call585 = callmethod(var_entity,"draw", [3], call576, quotient580, quotient584);
                return call585;
              };
              var call586 = callmethod(Grace_prelude,"for()do", [1, 1], call573, block574);
              lineNumber = 249
              var string587 = new GraceString("WORLD UPDATED");
              var call588 = Grace_print(string587);
              return call588
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func549.paramCounts = [
            0,
          ];
          func549.variableArities = [
            false,
          ];
          obj421.methods["update"] = func549;
          func549.definitionLine = 233;
          func549.definitionModule = "kitty";
          var func589 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func589.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 253
              var string590 = new GraceString("WORLD STOPPING...");
              var call591 = Grace_print(string590);
              lineNumber = 255
              lineNumber = 245
              lineNumber = 254
              var bool592 = new GraceBoolean(false)
              onSelf = true;
              var call593 = callmethod(this, "isRunning:=", [1], bool592);
              lineNumber = 255
              var string594 = new GraceString("mousedown");
              onSelf = true;
              var call595 = callmethod(this, "canvas", [0]);
              var call596 = callmethod(call595,"removeEventListener", [2], string594, var_mouseDownListener);
              lineNumber = 256
              var string597 = new GraceString("keydown");
              onSelf = true;
              var call598 = callmethod(this, "document", [0]);
              var call599 = callmethod(call598,"removeEventListener", [2], string597, var_keyDownListener);
              return call599
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
          obj421.methods["stop"] = func589;
          func589.definitionLine = 252;
          func589.definitionModule = "kitty";
          var func600 = function(argcv) {
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func600.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isKeyDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 261
              lineNumber = 260
              onSelf = true;
              var call601 = callmethod(this, "currentKeyDown", [0]);
              var opresult604 = callmethod(var_key, "==", [1], call601);
              return opresult604
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func600.paramCounts = [
            1,
          ];
          func600.variableArities = [
            false,
          ];
          obj421.methods["isKeyDown"] = func600;
          func600.definitionLine = 259;
          func600.definitionModule = "kitty";
          var func605 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func605.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 264
              lineNumber = 245
              lineNumber = 264
              onSelf = true;
              var call606 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call607 = callmethod(this, "canvasHeight", [0]);
              var call608 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call609 = callmethod(call608, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call610 = callmethod(call609, "Image", [3], var_background__39__, call606, call607);
              onSelf = true;
              var call611 = callmethod(this, "background:=", [1], call610);
              return call611
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func605.paramCounts = [
            1,
          ];
          func605.variableArities = [
            false,
          ];
          obj421.methods["setBackground"] = func605;
          func605.definitionLine = 263;
          func605.definitionModule = "kitty";
          var func612 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func612.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 268
              onSelf = true;
              var call613 = callmethod(this, "entities", [0]);
              var call614 = callmethod(call613,"push", [1], var_e);
              return call614
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func612.paramTypes = [];
          func612.paramTypes.push([]);
          func612.paramCounts = [
            1,
          ];
          func612.variableArities = [
            false,
          ];
          obj421.methods["addEntity"] = func612;
          func612.definitionLine = 267;
          func612.definitionModule = "kitty";
          sourceObject = obj421;
          lineNumber = 144
          var string615 = new GraceString("CREATING NEW WORLD...");
          var call616 = Grace_print(string615);
          sourceObject = obj421;
          obj421.data["background"] = undefined;
          var reader_kitty_background_617 = function() {
            return this.data["background"];
          }
          obj421.methods["background"] = reader_kitty_background_617;
          obj421.data["background"] = undefined;
          var writer_kitty_background_617 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj421.methods["background:="] = writer_kitty_background_617;
          reader_kitty_background_617.confidential = true;
          writer_kitty_background_617.confidential = true;
          obj421.mutable = true;
          sourceObject = obj421;
          lineNumber = 147
          var string618 = new GraceString("black");
          obj421.data["backgroundColour"] = string618;
          var reader_kitty_backgroundColour_619 = function() {
            return this.data["backgroundColour"];
          }
          obj421.methods["backgroundColour"] = reader_kitty_backgroundColour_619;
          obj421.data["backgroundColour"] = string618;
          var writer_kitty_backgroundColour_619 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj421.methods["backgroundColour:="] = writer_kitty_backgroundColour_619;
          reader_kitty_backgroundColour_619.confidential = true;
          writer_kitty_backgroundColour_619.confidential = true;
          lineNumber = 149;
          moduleName = "kitty";
          lineNumber = 147
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string618)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj421.mutable = true;
          sourceObject = obj421;
          obj421.data["document"] = undefined;
          var reader_kitty_document_620 = function() {
            return this.data["document"];
          }
          obj421.methods["document"] = reader_kitty_document_620;
          obj421.data["document"] = undefined;
          var writer_kitty_document_620 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj421.methods["document:="] = writer_kitty_document_620;
          reader_kitty_document_620.confidential = true;
          writer_kitty_document_620.confidential = true;
          obj421.mutable = true;
          sourceObject = obj421;
          obj421.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_621 = function() {
            return this.data["backingCanvas"];
          }
          obj421.methods["backingCanvas"] = reader_kitty_backingCanvas_621;
          obj421.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_621 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj421.methods["backingCanvas:="] = writer_kitty_backingCanvas_621;
          reader_kitty_backingCanvas_621.confidential = true;
          writer_kitty_backingCanvas_621.confidential = true;
          obj421.mutable = true;
          sourceObject = obj421;
          obj421.data["backingContext"] = undefined;
          var reader_kitty_backingContext_622 = function() {
            return this.data["backingContext"];
          }
          obj421.methods["backingContext"] = reader_kitty_backingContext_622;
          obj421.data["backingContext"] = undefined;
          var writer_kitty_backingContext_622 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj421.methods["backingContext:="] = writer_kitty_backingContext_622;
          reader_kitty_backingContext_622.confidential = true;
          writer_kitty_backingContext_622.confidential = true;
          obj421.mutable = true;
          sourceObject = obj421;
          obj421.data["canvas"] = undefined;
          var reader_kitty_canvas_623 = function() {
            return this.data["canvas"];
          }
          obj421.methods["canvas"] = reader_kitty_canvas_623;
          obj421.data["canvas"] = undefined;
          var writer_kitty_canvas_623 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj421.methods["canvas:="] = writer_kitty_canvas_623;
          reader_kitty_canvas_623.confidential = true;
          writer_kitty_canvas_623.confidential = true;
          obj421.mutable = true;
          sourceObject = obj421;
          obj421.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_624 = function() {
            return this.data["canvasWidth"];
          }
          obj421.methods["canvasWidth"] = reader_kitty_canvasWidth_624;
          obj421.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_624 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj421.methods["canvasWidth:="] = writer_kitty_canvasWidth_624;
          reader_kitty_canvasWidth_624.confidential = true;
          writer_kitty_canvasWidth_624.confidential = true;
          obj421.mutable = true;
          sourceObject = obj421;
          obj421.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_625 = function() {
            return this.data["canvasHeight"];
          }
          obj421.methods["canvasHeight"] = reader_kitty_canvasHeight_625;
          obj421.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_625 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj421.methods["canvasHeight:="] = writer_kitty_canvasHeight_625;
          reader_kitty_canvasHeight_625.confidential = true;
          writer_kitty_canvasHeight_625.confidential = true;
          obj421.mutable = true;
          sourceObject = obj421;
          lineNumber = 158
          var call626 = callmethod(var_collections,"list", [0]);
          var call627 = callmethod(call626,"new", [0]);
          obj421.data["entities"] = call627;
          var reader_kitty_entities_628 = function() {
            return this.data["entities"];
          }
          obj421.methods["entities"] = reader_kitty_entities_628;
          obj421.data["entities"] = call627;
          var writer_kitty_entities_628 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj421.methods["entities:="] = writer_kitty_entities_628;
          reader_kitty_entities_628.confidential = true;
          writer_kitty_entities_628.confidential = true;
          lineNumber = 160;
          moduleName = "kitty";
          lineNumber = 158
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call627)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj421.mutable = true;
          sourceObject = obj421;
          lineNumber = 160
          var bool629 = new GraceBoolean(false)
          obj421.data["isInit"] = bool629;
          var reader_kitty_isInit_630 = function() {
            return this.data["isInit"];
          }
          obj421.methods["isInit"] = reader_kitty_isInit_630;
          obj421.data["isInit"] = bool629;
          var writer_kitty_isInit_630 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj421.methods["isInit:="] = writer_kitty_isInit_630;
          reader_kitty_isInit_630.confidential = true;
          writer_kitty_isInit_630.confidential = true;
          lineNumber = 161;
          moduleName = "kitty";
          lineNumber = 160
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool629)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj421.mutable = true;
          sourceObject = obj421;
          lineNumber = 161
          var bool631 = new GraceBoolean(false)
          obj421.data["isRunning"] = bool631;
          var reader_kitty_isRunning_632 = function() {
            return this.data["isRunning"];
          }
          obj421.methods["isRunning"] = reader_kitty_isRunning_632;
          obj421.data["isRunning"] = bool631;
          var writer_kitty_isRunning_632 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj421.methods["isRunning:="] = writer_kitty_isRunning_632;
          reader_kitty_isRunning_632.confidential = true;
          writer_kitty_isRunning_632.confidential = true;
          lineNumber = 163;
          moduleName = "kitty";
          lineNumber = 161
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool631)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj421.mutable = true;
          sourceObject = obj421;
          obj421.data["mctx"] = undefined;
          var reader_kitty_mctx_633 = function() {
            return this.data["mctx"];
          }
          obj421.methods["mctx"] = reader_kitty_mctx_633;
          obj421.data["mctx"] = undefined;
          var writer_kitty_mctx_633 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj421.methods["mctx:="] = writer_kitty_mctx_633;
          reader_kitty_mctx_633.confidential = true;
          writer_kitty_mctx_633.confidential = true;
          obj421.mutable = true;
          sourceObject = obj421;
          lineNumber = 167
          lineNumber = 165
          var call634 = callmethod(new GraceNum(1),"prefix-", [0]);
          obj421.data["currentKeyDown"] = call634;
          var reader_kitty_currentKeyDown_635 = function() {
            return this.data["currentKeyDown"];
          }
          obj421.methods["currentKeyDown"] = reader_kitty_currentKeyDown_635;
          obj421.data["currentKeyDown"] = call634;
          var writer_kitty_currentKeyDown_635 = function(argcv, o) {
            this.data["currentKeyDown"] = o;
          }
          obj421.methods["currentKeyDown:="] = writer_kitty_currentKeyDown_635;
          reader_kitty_currentKeyDown_635.confidential = true;
          writer_kitty_currentKeyDown_635.confidential = true;
          lineNumber = 167;
          moduleName = "kitty";
          lineNumber = 165
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call634)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'currentKeyDown' to be of type Unknown"))
          obj421.mutable = true;
          sourceObject = obj421;
          lineNumber = 167
          onSelf = true;
          var call636 = callmethod(this, "init", [0]);
          sourceObject = obj421;
          sourceObject = obj421;
          sourceObject = obj421;
          sourceObject = obj421;
          sourceObject = obj421;
          sourceObject = obj421;
          sourceObject = obj421;
          sourceObject = obj421;
          lineNumber = 271
          var string637 = new GraceString("WORLD CREATED");
          var call638 = Grace_print(string637);
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
    var func639 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj640 = Grace_allocObject();
        obj640.definitionModule = "kitty";
        obj640.definitionLine = 142;
        var inho640 = inheritingObject;
        while (inho640.superobj) inho640 = inho640.superobj;
        inho640.superobj = obj640;
        obj640.data = inheritingObject.data;
        obj640.outer = this;
        var reader_kitty_outer_641 = function() {
          return this.outer;
        }
        obj640.methods["outer"] = reader_kitty_outer_641;
        function obj_init_640() {
          var origSuperDepth = superDepth;
          superDepth = obj640;
          obj640.annotations = [];
          var func642 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func642.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 172
              var string643 = new GraceString("INITIALIZING WORLD...");
              var call644 = Grace_print(string643);
              lineNumber = 178
              var if645 = var_done;
              lineNumber = 174
              onSelf = true;
              var call646 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call646)) {
                lineNumber = 176
                lineNumber = 175
                var bool647 = new GraceBoolean(false)
                return bool647
              }
              lineNumber = 179
              lineNumber = 158
              lineNumber = 178
              var call648 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call649 = callmethod(this, "document:=", [1], call648);
              lineNumber = 179
              lineNumber = 178
              lineNumber = 179
              var string650 = new GraceString("standard-canvas");
              onSelf = true;
              var call651 = callmethod(this, "document", [0]);
              var call652 = callmethod(call651,"getElementById", [1], string650);
              onSelf = true;
              var call653 = callmethod(this, "canvas:=", [1], call652);
              lineNumber = 181
              lineNumber = 178
              lineNumber = 180
              onSelf = true;
              var call654 = callmethod(this, "canvas", [0]);
              var call655 = callmethod(call654,"width", [0]);
              onSelf = true;
              var call656 = callmethod(this, "canvasWidth:=", [1], call655);
              lineNumber = 184
              lineNumber = 180
              lineNumber = 181
              onSelf = true;
              var call657 = callmethod(this, "canvas", [0]);
              var call658 = callmethod(call657,"height", [0]);
              onSelf = true;
              var call659 = callmethod(this, "canvasHeight:=", [1], call658);
              lineNumber = 196
              var block660 = Grace_allocObject();
              block660.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block660.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block660.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block660.methods["match"] = GraceBlock_match;
              block660.methods["prefix?"] = GraceBlock_lift;
              block660.receiver = this;
              block660.className = 'block<kitty:196>';
              block660.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 187
                lineNumber = 186
                onSelf = true;
                var call661 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call663 = callmethod(this, "canvas", [0]);
                var call664 = callmethod(call663,"offsetWidth", [0]);
                onSelf = true;
                var call666 = callmethod(this, "canvas", [0]);
                var call667 = callmethod(call666,"offsetLeft", [0]);
                var call669 = callmethod(var_ev,"clientX", [0]);
                var diff671 = callmethod(call669, "-", [1], call667);
                var quotient673 = callmethod(diff671, "/", [1], call664);
                var prod675 = callmethod(quotient673, "*", [1], call661);
                var var_x = prod675;
                lineNumber = 187;
                moduleName = "kitty";
                lineNumber = 186
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_x)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'x' to be of type Unknown"))
                lineNumber = 189
                lineNumber = 187
                onSelf = true;
                var call676 = callmethod(this, "canvasHeight", [0]);
                onSelf = true;
                var call678 = callmethod(this, "canvas", [0]);
                var call679 = callmethod(call678,"offsetHeight", [0]);
                onSelf = true;
                var call681 = callmethod(this, "canvas", [0]);
                var call682 = callmethod(call681,"offsetTop", [0]);
                var call684 = callmethod(var_ev,"clientY", [0]);
                var diff686 = callmethod(call684, "-", [1], call682);
                var quotient688 = callmethod(diff686, "/", [1], call679);
                var prod690 = callmethod(quotient688, "*", [1], call676);
                var var_y = prod690;
                lineNumber = 189;
                moduleName = "kitty";
                lineNumber = 187
                if (!Grace_isTrue(callmethod(var_Unknown, "match",
                  [1], var_y)))
                    throw new GraceExceptionPacket(TypeErrorObject,
                          new GraceString("expected "
                          + "initial value of def 'y' to be of type Unknown"))
                lineNumber = 189
                var string691 = new GraceString("MOUSEDOWN");
                var call692 = Grace_print(string691);
                lineNumber = 195
                var if693 = var_done;
                lineNumber = 191
                var opresult696 = callmethod(var_y, "<", [1], new GraceNum(20));
                onSelf = true;
                var call699 = callmethod(this, "canvasWidth", [0]);
                var diff701 = callmethod(call699, "-", [1], new GraceNum(20));
                var opresult704 = callmethod(var_x, ">", [1], diff701);
                var opresult706 = callmethod(opresult704, "&&", [1], opresult696);
                if (Grace_isTrue(opresult706)) {
                  lineNumber = 192
                  var call707 = callmethod(var_ev,"preventDefault", [0]);
                  lineNumber = 193
                  onSelf = true;
                  var call708 = callmethod(this, "stop", [0]);
                  if693 = call708;
                }
                return if693;
              };
              var_mouseDownListener = block660;
              lineNumber = 196
              var string709 = new GraceString("mousedown");
              onSelf = true;
              var call710 = callmethod(this, "canvas", [0]);
              var call711 = callmethod(call710,"addEventListener", [2], string709, var_mouseDownListener);
              lineNumber = 206
              var block712 = Grace_allocObject();
              block712.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block712.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block712.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block712.methods["match"] = GraceBlock_match;
              block712.methods["prefix?"] = GraceBlock_lift;
              block712.receiver = this;
              block712.className = 'block<kitty:206>';
              block712.real = function(
                var_ev
              ) {
                sourceObject = this;
                lineNumber = 200
                var string713 = new GraceString("");
                var call715 = callmethod(var_ev,"keyCode", [0]);
                var string717 = new GraceString("KEYDOWN: ");
                var opresult719 = callmethod(string717, "++", [1], call715);
                var opresult721 = callmethod(opresult719, "++", [1], string713);
                var call722 = Grace_print(opresult721);
                lineNumber = 204
                var if723 = var_done;
                lineNumber = 201
                var call725 = callmethod(var_ev,"keyCode", [0]);
                var opresult727 = callmethod(call725, "==", [1], new GraceNum(81));
                if (Grace_isTrue(opresult727)) {
                  lineNumber = 202
                  onSelf = true;
                  var call728 = callmethod(this, "stop", [0]);
                  if723 = call728;
                }
                lineNumber = 205
                lineNumber = 201
                lineNumber = 204
                var call729 = callmethod(var_ev,"keyCode", [0]);
                onSelf = true;
                var call730 = callmethod(this, "currentKeyDown:=", [1], call729);
                return call730;
              };
              var_keyDownListener = block712;
              lineNumber = 206
              var string731 = new GraceString("keydown");
              onSelf = true;
              var call732 = callmethod(this, "document", [0]);
              var call733 = callmethod(call732,"addEventListener", [2], string731, var_keyDownListener);
              lineNumber = 208
              lineNumber = 204
              lineNumber = 208
              var string734 = new GraceString("canvas");
              var call735 = callmethod(var_dom,"document", [0]);
              var call736 = callmethod(call735,"createElement", [1], string734);
              onSelf = true;
              var call737 = callmethod(this, "backingCanvas:=", [1], call736);
              lineNumber = 210
              lineNumber = 208
              lineNumber = 209
              onSelf = true;
              var call738 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call739 = callmethod(this, "backingCanvas", [0]);
              var call740 = callmethod(call739,"height:=", [1], call738);
              lineNumber = 211
              lineNumber = 208
              lineNumber = 210
              onSelf = true;
              var call741 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call742 = callmethod(this, "backingCanvas", [0]);
              var call743 = callmethod(call742,"width:=", [1], call741);
              lineNumber = 211
              lineNumber = 208
              lineNumber = 211
              var string744 = new GraceString("2d");
              onSelf = true;
              var call745 = callmethod(this, "backingCanvas", [0]);
              var call746 = callmethod(call745,"getContext", [1], string744);
              onSelf = true;
              var call747 = callmethod(this, "backingContext:=", [1], call746);
              lineNumber = 212
              lineNumber = 208
              lineNumber = 212
              var string748 = new GraceString("2d");
              onSelf = true;
              var call749 = callmethod(this, "canvas", [0]);
              var call750 = callmethod(call749,"getContext", [1], string748);
              onSelf = true;
              var call751 = callmethod(this, "mctx:=", [1], call750);
              lineNumber = 215
              lineNumber = 208
              lineNumber = 214
              var bool752 = new GraceBoolean(true)
              onSelf = true;
              var call753 = callmethod(this, "isInit:=", [1], bool752);
              lineNumber = 215
              var string754 = new GraceString("INITIALIZATION FINISHED");
              var call755 = Grace_print(string754);
              return call755
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func642.paramCounts = [
            0,
          ];
          func642.variableArities = [
            false,
          ];
          obj640.methods["init"] = func642;
          func642.definitionLine = 170;
          func642.definitionModule = "kitty";
          var func756 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func756.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 224
              var string757 = new GraceString("WORLD STARTED");
              var call758 = Grace_print(string757);
              lineNumber = 226
              lineNumber = 208
              lineNumber = 225
              var bool759 = new GraceBoolean(true)
              onSelf = true;
              var call760 = callmethod(this, "isRunning:=", [1], bool759);
              lineNumber = 226
              var block761 = Grace_allocObject();
              block761.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block761.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block761.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block761.methods["match"] = GraceBlock_match;
              block761.methods["prefix?"] = GraceBlock_lift;
              block761.receiver = this;
              block761.className = 'block<kitty:226>';
              block761.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call762 = callmethod(this, "isRunning", [0]);
                return call762;
              };
              lineNumber = 229
              var block763 = Grace_allocObject();
              block763.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block763.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block763.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block763.methods["match"] = GraceBlock_match;
              block763.methods["prefix?"] = GraceBlock_lift;
              block763.receiver = this;
              block763.className = 'block<kitty:229>';
              block763.real = function(
              ) {
                sourceObject = this;
                lineNumber = 227
                onSelf = true;
                var call764 = callmethod(this, "update", [0]);
                return call764;
              };
              lineNumber = 226
              var call765 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block761, new GraceNum(10), block763);
              lineNumber = 229
              var string766 = new GraceString("WORLD STOPPED");
              var call767 = Grace_print(string766);
              return call767
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func756.paramCounts = [
            0,
          ];
          func756.variableArities = [
            false,
          ];
          obj640.methods["start"] = func756;
          func756.definitionLine = 223;
          func756.definitionModule = "kitty";
          var func768 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func768.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 235
              var string769 = new GraceString("UPDATING WORLD...");
              var call770 = Grace_print(string769);
              lineNumber = 239
              lineNumber = 208
              lineNumber = 238
              onSelf = true;
              var call771 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call772 = callmethod(this, "mctx", [0]);
              var call773 = callmethod(call772,"fillStyle:=", [1], call771);
              lineNumber = 239
              onSelf = true;
              var call774 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call775 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call776 = callmethod(this, "mctx", [0]);
              var call777 = callmethod(call776,"fillRect", [4], new GraceNum(0), new GraceNum(0), call774, call775);
              lineNumber = 240
              onSelf = true;
              var call778 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call779 = callmethod(this, "mctx", [0]);
              var call780 = callmethod(call779,"drawImage", [3], call778, new GraceNum(0), new GraceNum(0));
              lineNumber = 241
              onSelf = true;
              var call781 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call783 = callmethod(this, "canvasWidth", [0]);
              var quotient785 = callmethod(call783, "/", [1], new GraceNum(2));
              onSelf = true;
              var call787 = callmethod(this, "canvasHeight", [0]);
              var quotient789 = callmethod(call787, "/", [1], new GraceNum(2));
              onSelf = true;
              var call790 = callmethod(this, "background", [0]);
              var call791 = callmethod(call790,"draw", [4], call781, quotient785, quotient789, new GraceNum(0));
              lineNumber = 244
              onSelf = true;
              var call792 = callmethod(this, "entities", [0]);
              lineNumber = 249
              var block793 = Grace_allocObject();
              block793.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block793.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block793.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block793.methods["match"] = GraceBlock_match;
              block793.methods["prefix?"] = GraceBlock_lift;
              block793.receiver = this;
              block793.className = 'block<kitty:249>';
              block793.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 245
                var call794 = callmethod(var_entity,"update", [0]);
                lineNumber = 246
                onSelf = true;
                var call795 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call797 = callmethod(this, "canvasWidth", [0]);
                var quotient799 = callmethod(call797, "/", [1], new GraceNum(2));
                onSelf = true;
                var call801 = callmethod(this, "canvasHeight", [0]);
                var quotient803 = callmethod(call801, "/", [1], new GraceNum(2));
                var call804 = callmethod(var_entity,"draw", [3], call795, quotient799, quotient803);
                return call804;
              };
              var call805 = callmethod(Grace_prelude,"for()do", [1, 1], call792, block793);
              lineNumber = 249
              var string806 = new GraceString("WORLD UPDATED");
              var call807 = Grace_print(string806);
              return call807
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func768.paramCounts = [
            0,
          ];
          func768.variableArities = [
            false,
          ];
          obj640.methods["update"] = func768;
          func768.definitionLine = 233;
          func768.definitionModule = "kitty";
          var func808 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func808.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 253
              var string809 = new GraceString("WORLD STOPPING...");
              var call810 = Grace_print(string809);
              lineNumber = 255
              lineNumber = 245
              lineNumber = 254
              var bool811 = new GraceBoolean(false)
              onSelf = true;
              var call812 = callmethod(this, "isRunning:=", [1], bool811);
              lineNumber = 255
              var string813 = new GraceString("mousedown");
              onSelf = true;
              var call814 = callmethod(this, "canvas", [0]);
              var call815 = callmethod(call814,"removeEventListener", [2], string813, var_mouseDownListener);
              lineNumber = 256
              var string816 = new GraceString("keydown");
              onSelf = true;
              var call817 = callmethod(this, "document", [0]);
              var call818 = callmethod(call817,"removeEventListener", [2], string816, var_keyDownListener);
              return call818
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func808.paramCounts = [
            0,
          ];
          func808.variableArities = [
            false,
          ];
          obj640.methods["stop"] = func808;
          func808.definitionLine = 252;
          func808.definitionModule = "kitty";
          var func819 = function(argcv) {
            var curarg = 1;
            var var_key = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func819.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isKeyDown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 261
              lineNumber = 260
              onSelf = true;
              var call820 = callmethod(this, "currentKeyDown", [0]);
              var opresult823 = callmethod(var_key, "==", [1], call820);
              return opresult823
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func819.paramCounts = [
            1,
          ];
          func819.variableArities = [
            false,
          ];
          obj640.methods["isKeyDown"] = func819;
          func819.definitionLine = 259;
          func819.definitionModule = "kitty";
          var func824 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func824.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 264
              lineNumber = 245
              lineNumber = 264
              onSelf = true;
              var call825 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call826 = callmethod(this, "canvasHeight", [0]);
              var call827 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call828 = callmethod(call827, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call829 = callmethod(call828, "Image", [3], var_background__39__, call825, call826);
              onSelf = true;
              var call830 = callmethod(this, "background:=", [1], call829);
              return call830
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func824.paramCounts = [
            1,
          ];
          func824.variableArities = [
            false,
          ];
          obj640.methods["setBackground"] = func824;
          func824.definitionLine = 263;
          func824.definitionModule = "kitty";
          var func831 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func831.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 268
              onSelf = true;
              var call832 = callmethod(this, "entities", [0]);
              var call833 = callmethod(call832,"push", [1], var_e);
              return call833
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func831.paramTypes = [];
          func831.paramTypes.push([]);
          func831.paramCounts = [
            1,
          ];
          func831.variableArities = [
            false,
          ];
          obj640.methods["addEntity"] = func831;
          func831.definitionLine = 267;
          func831.definitionModule = "kitty";
          sourceObject = obj640;
          lineNumber = 144
          var string834 = new GraceString("CREATING NEW WORLD...");
          var call835 = Grace_print(string834);
          sourceObject = obj640;
          obj640.data["background"] = undefined;
          var reader_kitty_background_836 = function() {
            return this.data["background"];
          }
          obj640.methods["background"] = reader_kitty_background_836;
          obj640.data["background"] = undefined;
          var writer_kitty_background_836 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj640.methods["background:="] = writer_kitty_background_836;
          reader_kitty_background_836.confidential = true;
          writer_kitty_background_836.confidential = true;
          obj640.mutable = true;
          sourceObject = obj640;
          lineNumber = 147
          var string837 = new GraceString("black");
          obj640.data["backgroundColour"] = string837;
          var reader_kitty_backgroundColour_838 = function() {
            return this.data["backgroundColour"];
          }
          obj640.methods["backgroundColour"] = reader_kitty_backgroundColour_838;
          obj640.data["backgroundColour"] = string837;
          var writer_kitty_backgroundColour_838 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj640.methods["backgroundColour:="] = writer_kitty_backgroundColour_838;
          reader_kitty_backgroundColour_838.confidential = true;
          writer_kitty_backgroundColour_838.confidential = true;
          lineNumber = 149;
          moduleName = "kitty";
          lineNumber = 147
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string837)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj640.mutable = true;
          sourceObject = obj640;
          obj640.data["document"] = undefined;
          var reader_kitty_document_839 = function() {
            return this.data["document"];
          }
          obj640.methods["document"] = reader_kitty_document_839;
          obj640.data["document"] = undefined;
          var writer_kitty_document_839 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj640.methods["document:="] = writer_kitty_document_839;
          reader_kitty_document_839.confidential = true;
          writer_kitty_document_839.confidential = true;
          obj640.mutable = true;
          sourceObject = obj640;
          obj640.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_840 = function() {
            return this.data["backingCanvas"];
          }
          obj640.methods["backingCanvas"] = reader_kitty_backingCanvas_840;
          obj640.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_840 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj640.methods["backingCanvas:="] = writer_kitty_backingCanvas_840;
          reader_kitty_backingCanvas_840.confidential = true;
          writer_kitty_backingCanvas_840.confidential = true;
          obj640.mutable = true;
          sourceObject = obj640;
          obj640.data["backingContext"] = undefined;
          var reader_kitty_backingContext_841 = function() {
            return this.data["backingContext"];
          }
          obj640.methods["backingContext"] = reader_kitty_backingContext_841;
          obj640.data["backingContext"] = undefined;
          var writer_kitty_backingContext_841 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj640.methods["backingContext:="] = writer_kitty_backingContext_841;
          reader_kitty_backingContext_841.confidential = true;
          writer_kitty_backingContext_841.confidential = true;
          obj640.mutable = true;
          sourceObject = obj640;
          obj640.data["canvas"] = undefined;
          var reader_kitty_canvas_842 = function() {
            return this.data["canvas"];
          }
          obj640.methods["canvas"] = reader_kitty_canvas_842;
          obj640.data["canvas"] = undefined;
          var writer_kitty_canvas_842 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj640.methods["canvas:="] = writer_kitty_canvas_842;
          reader_kitty_canvas_842.confidential = true;
          writer_kitty_canvas_842.confidential = true;
          obj640.mutable = true;
          sourceObject = obj640;
          obj640.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_843 = function() {
            return this.data["canvasWidth"];
          }
          obj640.methods["canvasWidth"] = reader_kitty_canvasWidth_843;
          obj640.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_843 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj640.methods["canvasWidth:="] = writer_kitty_canvasWidth_843;
          reader_kitty_canvasWidth_843.confidential = true;
          writer_kitty_canvasWidth_843.confidential = true;
          obj640.mutable = true;
          sourceObject = obj640;
          obj640.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_844 = function() {
            return this.data["canvasHeight"];
          }
          obj640.methods["canvasHeight"] = reader_kitty_canvasHeight_844;
          obj640.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_844 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj640.methods["canvasHeight:="] = writer_kitty_canvasHeight_844;
          reader_kitty_canvasHeight_844.confidential = true;
          writer_kitty_canvasHeight_844.confidential = true;
          obj640.mutable = true;
          sourceObject = obj640;
          lineNumber = 158
          var call845 = callmethod(var_collections,"list", [0]);
          var call846 = callmethod(call845,"new", [0]);
          obj640.data["entities"] = call846;
          var reader_kitty_entities_847 = function() {
            return this.data["entities"];
          }
          obj640.methods["entities"] = reader_kitty_entities_847;
          obj640.data["entities"] = call846;
          var writer_kitty_entities_847 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj640.methods["entities:="] = writer_kitty_entities_847;
          reader_kitty_entities_847.confidential = true;
          writer_kitty_entities_847.confidential = true;
          lineNumber = 160;
          moduleName = "kitty";
          lineNumber = 158
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call846)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj640.mutable = true;
          sourceObject = obj640;
          lineNumber = 160
          var bool848 = new GraceBoolean(false)
          obj640.data["isInit"] = bool848;
          var reader_kitty_isInit_849 = function() {
            return this.data["isInit"];
          }
          obj640.methods["isInit"] = reader_kitty_isInit_849;
          obj640.data["isInit"] = bool848;
          var writer_kitty_isInit_849 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj640.methods["isInit:="] = writer_kitty_isInit_849;
          reader_kitty_isInit_849.confidential = true;
          writer_kitty_isInit_849.confidential = true;
          lineNumber = 161;
          moduleName = "kitty";
          lineNumber = 160
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool848)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj640.mutable = true;
          sourceObject = obj640;
          lineNumber = 161
          var bool850 = new GraceBoolean(false)
          obj640.data["isRunning"] = bool850;
          var reader_kitty_isRunning_851 = function() {
            return this.data["isRunning"];
          }
          obj640.methods["isRunning"] = reader_kitty_isRunning_851;
          obj640.data["isRunning"] = bool850;
          var writer_kitty_isRunning_851 = function(argcv, o) {
            this.data["isRunning"] = o;
          }
          obj640.methods["isRunning:="] = writer_kitty_isRunning_851;
          reader_kitty_isRunning_851.confidential = true;
          writer_kitty_isRunning_851.confidential = true;
          lineNumber = 163;
          moduleName = "kitty";
          lineNumber = 161
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool850)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isRunning' to be of type Unknown"))
          obj640.mutable = true;
          sourceObject = obj640;
          obj640.data["mctx"] = undefined;
          var reader_kitty_mctx_852 = function() {
            return this.data["mctx"];
          }
          obj640.methods["mctx"] = reader_kitty_mctx_852;
          obj640.data["mctx"] = undefined;
          var writer_kitty_mctx_852 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj640.methods["mctx:="] = writer_kitty_mctx_852;
          reader_kitty_mctx_852.confidential = true;
          writer_kitty_mctx_852.confidential = true;
          obj640.mutable = true;
          sourceObject = obj640;
          lineNumber = 167
          lineNumber = 165
          var call853 = callmethod(new GraceNum(1),"prefix-", [0]);
          obj640.data["currentKeyDown"] = call853;
          var reader_kitty_currentKeyDown_854 = function() {
            return this.data["currentKeyDown"];
          }
          obj640.methods["currentKeyDown"] = reader_kitty_currentKeyDown_854;
          obj640.data["currentKeyDown"] = call853;
          var writer_kitty_currentKeyDown_854 = function(argcv, o) {
            this.data["currentKeyDown"] = o;
          }
          obj640.methods["currentKeyDown:="] = writer_kitty_currentKeyDown_854;
          reader_kitty_currentKeyDown_854.confidential = true;
          writer_kitty_currentKeyDown_854.confidential = true;
          lineNumber = 167;
          moduleName = "kitty";
          lineNumber = 165
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call853)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'currentKeyDown' to be of type Unknown"))
          obj640.mutable = true;
          sourceObject = obj640;
          lineNumber = 167
          onSelf = true;
          var call855 = callmethod(this, "init", [0]);
          sourceObject = obj640;
          sourceObject = obj640;
          sourceObject = obj640;
          sourceObject = obj640;
          sourceObject = obj640;
          sourceObject = obj640;
          sourceObject = obj640;
          sourceObject = obj640;
          lineNumber = 271
          var string856 = new GraceString("WORLD CREATED");
          var call857 = Grace_print(string856);
          superDepth = origSuperDepth;
        }
        obj_init_640.apply(inheritingObject, []);
        return obj640
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj418.methods["new()object"] = func639;
    var func858 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 142
        var string859 = new GraceString("class KittyWorld");
        return string859
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func858.paramCounts = [
    ];
    func858.variableArities = [
    ];
    obj418.methods["asDebugString"] = func858;
    func858.definitionLine = 142;
    func858.definitionModule = "kitty";
    sourceObject = obj418;
    sourceObject = obj418;
    superDepth = origSuperDepth;
  }
  obj_init_418.apply(obj418, []);
  var var_KittyWorld = obj418;
  lineNumber = 274
  lineNumber = 285
  lineNumber = 301
  lineNumber = 305
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
'dom',
'StandardPrelude',
];
if (gctCache)
  gctCache['kitty'] = "classes:\n KittyImage\n KittyEntity\n KittyWorld\nfresh:Entity:\n draw\n moveDown\n rotation\n setImage\n onDestroy\n getRotation\n moveLeft\n update\n moveRight\n setLocation\n start\n posX\n action:=\n getX\n getY\n image:=\n moveUp\n action\n posX:=\n posY:=\n image\n rotation:=\n awake\n setAction\n posY\nconfidential:\nconstructors-of:KittyWorld:\n new\nfresh:World:\n isInit\n canvasWidth:=\n backgroundColour:=\n entities:=\n mctx:=\n backingCanvas:=\n entities\n backgroundColour\n backingContext:=\n canvasHeight:=\n init\n canvasHeight\n addEntity\n currentKeyDown:=\n canvas\n background\n backingContext\n stop\n isInit:=\n isRunning\n document:=\n canvasWidth\n document\n update\n backingCanvas\n start\n canvas:=\n isRunning:=\n background:=\n mctx\n isKeyDown\n currentKeyDown\n setBackground\nfresh-methods:\n Image\n Entity\n World\nmodules:\n StandardPrelude\n mgcollections\nmethods-of:KittyEntity.new:\n draw\n moveDown\n rotation\n setImage\n rotation:=\n moveRight\n moveLeft\n update\n getRotation\n setLocation\n start\n setAction\n action:=\n getX\n getY\n image:=\n moveUp\n action\n posX:=\n posY:=\n image\n onDestroy\n awake\n posX\n posY\npublic:\n m_world\n m_world:=\n worldSet\n worldSet:=\n keyDownListener\n keyDownListener:=\n mouseDownListener\n mouseDownListener:=\n KittyImage\n Image\n KittyEntity\n Entity\n KittyWorld\n World\n start\n stop\n setWorld\nmethods-of:KittyImage.new:\n draw\n imgTag\n height:=\n width\n width:=\n height\nfresh:Image:\n draw\n height:=\n height\n width\n width:=\n imgTag\nmethods-of:KittyWorld.new:\n isInit\n canvasWidth:=\n backgroundColour:=\n entities:=\n mctx:=\n backingCanvas:=\n entities\n backgroundColour\n backingCanvas\n canvasHeight:=\n init\n canvasHeight\n addEntity\n currentKeyDown:=\n canvas\n background\n backingContext\n stop\n isInit:=\n isRunning\n document:=\n mctx\n document\n update\n backingContext:=\n start\n canvas:=\n isRunning:=\n background:=\n canvasWidth\n isKeyDown\n currentKeyDown\n setBackground\nconstructors-of:KittyEntity:\n new\nconstructors-of:KittyImage:\n new\npath:\n kitty\n";
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
    "        // Key Listener",
    "        keyDownListener := { ev->",
    "            print \"KEYDOWN: {ev.keyCode}\"",
    "            if (ev.keyCode == 81) then {",
    "                stop",
    "            }",
    "            currentKeyDown := ev.keyCode",
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
    "        canvas.removeEventListener(\"mousedown\", mouseDownListener)",
    "        document.removeEventListener(\"keydown\", keyDownListener)",
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
