function gracecode_kitty () {
  this.definitionModule = "kitty";
  this.definitionLine = 0;
  lineNumber = 35
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
      lineNumber = 36
      var obj1 = Grace_allocObject();
      obj1.definitionModule = "kitty";
      obj1.definitionLine = 36;
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
        lineNumber = 37
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
  func0.definitionLine = 35;
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
      obj5.definitionLine = 36;
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
  lineNumber = 105
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
      lineNumber = 106
      var obj9 = Grace_allocObject();
      obj9.definitionModule = "kitty";
      obj9.definitionLine = 106;
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
        lineNumber = 107
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
  func8.definitionLine = 105;
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
      obj13.definitionLine = 106;
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
  lineNumber = 197
  var func16 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func16.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (World)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 198
      var obj17 = Grace_allocObject();
      obj17.definitionModule = "kitty";
      obj17.definitionLine = 198;
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
        lineNumber = 199
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
  func16.definitionLine = 197;
  func16.definitionModule = "kitty";
  var func20 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj21 = Grace_allocObject();
      obj21.definitionModule = "kitty";
      obj21.definitionLine = 198;
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
  lineNumber = 208
  var func24 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func24.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 210
      var string25 = new GraceString("CHECKING...");
      var call26 = Grace_print(string25);
      lineNumber = 217
      var if27 = var_done;
      lineNumber = 212
      var call28 = callmethod(var_worldSet,"prefix!", [0]);
      if (Grace_isTrue(call28)) {
        lineNumber = 213
        var string29 = new GraceString("NO WORLD!!");
        var call30 = Grace_print(string29);
        lineNumber = 215
        return var_done
      }
      lineNumber = 217
      var string31 = new GraceString("STARTING...");
      var call32 = Grace_print(string31);
      lineNumber = 220
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
  func24.definitionLine = 208;
  func24.definitionModule = "kitty";
  lineNumber = 224
  var func34 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func34.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 225
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
  func34.definitionLine = 224;
  func34.definitionModule = "kitty";
  lineNumber = 228
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
      lineNumber = 230
      lineNumber = 229
      var_m__95__world = var_world__39__;
      lineNumber = 231
      lineNumber = 230
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
  func37.definitionLine = 228;
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
  lineNumber = 220
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
  func40.definitionLine = 220;
  func40.definitionModule = "kitty";
  lineNumber = 220
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
  func41.definitionLine = 220;
  func41.definitionModule = "kitty";
  lineNumber = 13
  lineNumber = 8
  var bool42 = new GraceBoolean(false)
  var var_worldSet = bool42;
  lineNumber = 220
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
  func43.definitionLine = 220;
  func43.definitionModule = "kitty";
  lineNumber = 220
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
  func44.definitionLine = 220;
  func44.definitionModule = "kitty";
  lineNumber = 13;
  moduleName = "kitty";
  lineNumber = 8
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_worldSet)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'worldSet' to be of type Unknown"))
  lineNumber = 13
  var func45 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func45.paramCounts[0])
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
  func45.paramCounts = [
    0,
  ];
  func45.variableArities = [
    false,
  ];
  this.methods["KittyImage"] = func45;
  func45.definitionLine = 13;
  func45.definitionModule = "kitty";
  var obj46 = Grace_allocObject();
  obj46.definitionModule = "kitty";
  obj46.definitionLine = 13;
  obj46.outer = this;
  var reader_kitty_outer_47 = function() {
    return this.outer;
  }
  obj46.methods["outer"] = reader_kitty_outer_47;
  function obj_init_46() {
    var origSuperDepth = superDepth;
    superDepth = obj46;
    obj46.annotations = [];
    var func48 = function(argcv) {
      var curarg = 1;
      var var_url__39__ = arguments[curarg];
      curarg++;
      var var_height__39__ = arguments[curarg];
      curarg++;
      var var_width__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func48.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj49 = Grace_allocObject();
        obj49.definitionModule = "kitty";
        obj49.definitionLine = 13;
        obj49.outer = this;
        var reader_kitty_outer_50 = function() {
          return this.outer;
        }
        obj49.methods["outer"] = reader_kitty_outer_50;
        function obj_init_49() {
          var origSuperDepth = superDepth;
          superDepth = obj49;
          obj49.annotations = [];
          var func51 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            var var_rot = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func51.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 23
              var string52 = new GraceString(")...");
              onSelf = true;
              var call54 = callmethod(this, "height", [0]);
              var string56 = new GraceString(", ");
              onSelf = true;
              var call58 = callmethod(this, "width", [0]);
              var string60 = new GraceString(" (");
              onSelf = true;
              var call62 = callmethod(this, "imgTag", [0]);
              var call63 = callmethod(call62,"src", [0]);
              var string65 = new GraceString("DRAWING IMAGE: ");
              var opresult67 = callmethod(string65, "++", [1], call63);
              var opresult69 = callmethod(opresult67, "++", [1], string60);
              var opresult71 = callmethod(opresult69, "++", [1], call58);
              var opresult73 = callmethod(opresult71, "++", [1], string56);
              var opresult75 = callmethod(opresult73, "++", [1], call54);
              var opresult77 = callmethod(opresult75, "++", [1], string52);
              var call78 = Grace_print(opresult77);
              lineNumber = 24
              var call79 = callmethod(var_ctx,"save", [0]);
              lineNumber = 25
              var call80 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 26
              var prod84 = callmethod(var_rot, "*", [1], new GraceNum(180));
              var quotient86 = callmethod(prod84, "/", [1], new GraceNum(3.14));
              var call87 = callmethod(var_ctx,"rotate", [1], quotient86);
              lineNumber = 27
              onSelf = true;
              var call88 = callmethod(this, "imgTag", [0]);
              onSelf = true;
              var call90 = callmethod(this, "width", [0]);
              var call91 = callmethod(call90,"prefix-", [0]);
              var quotient93 = callmethod(call91, "/", [1], new GraceNum(2));
              onSelf = true;
              var call95 = callmethod(this, "height", [0]);
              var call96 = callmethod(call95,"prefix-", [0]);
              var quotient98 = callmethod(call96, "/", [1], new GraceNum(2));
              onSelf = true;
              var call99 = callmethod(this, "width", [0]);
              onSelf = true;
              var call100 = callmethod(this, "height", [0]);
              var call101 = callmethod(var_ctx,"drawImage", [5], call88, quotient93, quotient98, call99, call100);
              lineNumber = 28
              var call102 = callmethod(var_ctx,"restore", [0]);
              lineNumber = 29
              var string103 = new GraceString(" DRAWN");
              onSelf = true;
              var call105 = callmethod(this, "imgTag", [0]);
              var call106 = callmethod(call105,"src", [0]);
              var string108 = new GraceString("IMAGE: ");
              var opresult110 = callmethod(string108, "++", [1], call106);
              var opresult112 = callmethod(opresult110, "++", [1], string103);
              var call113 = Grace_print(opresult112);
              return call113
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func51.paramCounts = [
            4,
          ];
          func51.variableArities = [
            false,
          ];
          obj49.methods["draw"] = func51;
          func51.definitionLine = 22;
          func51.definitionModule = "kitty";
          sourceObject = obj49;
          lineNumber = 15
          var string114 = new GraceString("...");
          var string117 = new GraceString("CREATING NEW IMAGE: ");
          var opresult119 = callmethod(string117, "++", [1], var_url__39__);
          var opresult121 = callmethod(opresult119, "++", [1], string114);
          var call122 = Grace_print(opresult121);
          sourceObject = obj49;
          lineNumber = 16
          var string123 = new GraceString("img");
          var call124 = callmethod(var_dom,"document", [0]);
          var call125 = callmethod(call124,"createElement", [1], string123);
          obj49.data["imgTag"] = call125;
          var reader_kitty_imgTag_126 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_126.def = true;
          reader_kitty_imgTag_126.confidential = true;
          obj49.methods["imgTag"] = reader_kitty_imgTag_126;
          lineNumber = 16;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call125)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj49;
          lineNumber = 19
          lineNumber = 16
          lineNumber = 17
          onSelf = true;
          var call127 = callmethod(this, "imgTag", [0]);
          var call128 = callmethod(call127,"src:=", [1], var_url__39__);
          sourceObject = obj49;
          lineNumber = 19
          obj49.data["height"] = var_height__39__;
          var reader_kitty_height_129 = function() {
            return this.data["height"];
          }
          obj49.methods["height"] = reader_kitty_height_129;
          obj49.data["height"] = var_height__39__;
          var writer_kitty_height_129 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj49.methods["height:="] = writer_kitty_height_129;
          reader_kitty_height_129.confidential = true;
          writer_kitty_height_129.confidential = true;
          lineNumber = 20;
          moduleName = "kitty";
          lineNumber = 19
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj49.mutable = true;
          sourceObject = obj49;
          lineNumber = 20
          obj49.data["width"] = var_width__39__;
          var reader_kitty_width_130 = function() {
            return this.data["width"];
          }
          obj49.methods["width"] = reader_kitty_width_130;
          obj49.data["width"] = var_width__39__;
          var writer_kitty_width_130 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj49.methods["width:="] = writer_kitty_width_130;
          reader_kitty_width_130.confidential = true;
          writer_kitty_width_130.confidential = true;
          lineNumber = 22;
          moduleName = "kitty";
          lineNumber = 20
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj49.mutable = true;
          sourceObject = obj49;
          sourceObject = obj49;
          lineNumber = 32
          var string131 = new GraceString("");
          var string134 = new GraceString("CREATED NEW IMAGE: ");
          var opresult136 = callmethod(string134, "++", [1], var_url__39__);
          var opresult138 = callmethod(opresult136, "++", [1], string131);
          var call139 = Grace_print(opresult138);
          superDepth = origSuperDepth;
        }
        obj_init_49.apply(obj49, []);
        return obj49
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func48.paramCounts = [
      3,
    ];
    func48.variableArities = [
      false,
    ];
    obj46.methods["new"] = func48;
    func48.definitionLine = 13;
    func48.definitionModule = "kitty";
    var func140 = function(argcv) {
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
        var obj141 = Grace_allocObject();
        obj141.definitionModule = "kitty";
        obj141.definitionLine = 13;
        var inho141 = inheritingObject;
        while (inho141.superobj) inho141 = inho141.superobj;
        inho141.superobj = obj141;
        obj141.data = inheritingObject.data;
        obj141.outer = this;
        var reader_kitty_outer_142 = function() {
          return this.outer;
        }
        obj141.methods["outer"] = reader_kitty_outer_142;
        function obj_init_141() {
          var origSuperDepth = superDepth;
          superDepth = obj141;
          obj141.annotations = [];
          var func143 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            var var_rot = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func143.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 23
              var string144 = new GraceString(")...");
              onSelf = true;
              var call146 = callmethod(this, "height", [0]);
              var string148 = new GraceString(", ");
              onSelf = true;
              var call150 = callmethod(this, "width", [0]);
              var string152 = new GraceString(" (");
              onSelf = true;
              var call154 = callmethod(this, "imgTag", [0]);
              var call155 = callmethod(call154,"src", [0]);
              var string157 = new GraceString("DRAWING IMAGE: ");
              var opresult159 = callmethod(string157, "++", [1], call155);
              var opresult161 = callmethod(opresult159, "++", [1], string152);
              var opresult163 = callmethod(opresult161, "++", [1], call150);
              var opresult165 = callmethod(opresult163, "++", [1], string148);
              var opresult167 = callmethod(opresult165, "++", [1], call146);
              var opresult169 = callmethod(opresult167, "++", [1], string144);
              var call170 = Grace_print(opresult169);
              lineNumber = 24
              var call171 = callmethod(var_ctx,"save", [0]);
              lineNumber = 25
              var call172 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 26
              var prod176 = callmethod(var_rot, "*", [1], new GraceNum(180));
              var quotient178 = callmethod(prod176, "/", [1], new GraceNum(3.14));
              var call179 = callmethod(var_ctx,"rotate", [1], quotient178);
              lineNumber = 27
              onSelf = true;
              var call180 = callmethod(this, "imgTag", [0]);
              onSelf = true;
              var call182 = callmethod(this, "width", [0]);
              var call183 = callmethod(call182,"prefix-", [0]);
              var quotient185 = callmethod(call183, "/", [1], new GraceNum(2));
              onSelf = true;
              var call187 = callmethod(this, "height", [0]);
              var call188 = callmethod(call187,"prefix-", [0]);
              var quotient190 = callmethod(call188, "/", [1], new GraceNum(2));
              onSelf = true;
              var call191 = callmethod(this, "width", [0]);
              onSelf = true;
              var call192 = callmethod(this, "height", [0]);
              var call193 = callmethod(var_ctx,"drawImage", [5], call180, quotient185, quotient190, call191, call192);
              lineNumber = 28
              var call194 = callmethod(var_ctx,"restore", [0]);
              lineNumber = 29
              var string195 = new GraceString(" DRAWN");
              onSelf = true;
              var call197 = callmethod(this, "imgTag", [0]);
              var call198 = callmethod(call197,"src", [0]);
              var string200 = new GraceString("IMAGE: ");
              var opresult202 = callmethod(string200, "++", [1], call198);
              var opresult204 = callmethod(opresult202, "++", [1], string195);
              var call205 = Grace_print(opresult204);
              return call205
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func143.paramCounts = [
            4,
          ];
          func143.variableArities = [
            false,
          ];
          obj141.methods["draw"] = func143;
          func143.definitionLine = 22;
          func143.definitionModule = "kitty";
          sourceObject = obj141;
          lineNumber = 15
          var string206 = new GraceString("...");
          var string209 = new GraceString("CREATING NEW IMAGE: ");
          var opresult211 = callmethod(string209, "++", [1], var_url__39__);
          var opresult213 = callmethod(opresult211, "++", [1], string206);
          var call214 = Grace_print(opresult213);
          sourceObject = obj141;
          lineNumber = 16
          var string215 = new GraceString("img");
          var call216 = callmethod(var_dom,"document", [0]);
          var call217 = callmethod(call216,"createElement", [1], string215);
          obj141.data["imgTag"] = call217;
          var reader_kitty_imgTag_218 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_218.def = true;
          reader_kitty_imgTag_218.confidential = true;
          obj141.methods["imgTag"] = reader_kitty_imgTag_218;
          lineNumber = 16;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call217)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj141;
          lineNumber = 19
          lineNumber = 16
          lineNumber = 17
          onSelf = true;
          var call219 = callmethod(this, "imgTag", [0]);
          var call220 = callmethod(call219,"src:=", [1], var_url__39__);
          sourceObject = obj141;
          lineNumber = 19
          obj141.data["height"] = var_height__39__;
          var reader_kitty_height_221 = function() {
            return this.data["height"];
          }
          obj141.methods["height"] = reader_kitty_height_221;
          obj141.data["height"] = var_height__39__;
          var writer_kitty_height_221 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj141.methods["height:="] = writer_kitty_height_221;
          reader_kitty_height_221.confidential = true;
          writer_kitty_height_221.confidential = true;
          lineNumber = 20;
          moduleName = "kitty";
          lineNumber = 19
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj141.mutable = true;
          sourceObject = obj141;
          lineNumber = 20
          obj141.data["width"] = var_width__39__;
          var reader_kitty_width_222 = function() {
            return this.data["width"];
          }
          obj141.methods["width"] = reader_kitty_width_222;
          obj141.data["width"] = var_width__39__;
          var writer_kitty_width_222 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj141.methods["width:="] = writer_kitty_width_222;
          reader_kitty_width_222.confidential = true;
          writer_kitty_width_222.confidential = true;
          lineNumber = 22;
          moduleName = "kitty";
          lineNumber = 20
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj141.mutable = true;
          sourceObject = obj141;
          sourceObject = obj141;
          lineNumber = 32
          var string223 = new GraceString("");
          var string226 = new GraceString("CREATED NEW IMAGE: ");
          var opresult228 = callmethod(string226, "++", [1], var_url__39__);
          var opresult230 = callmethod(opresult228, "++", [1], string223);
          var call231 = Grace_print(opresult230);
          superDepth = origSuperDepth;
        }
        obj_init_141.apply(inheritingObject, []);
        return obj141
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj46.methods["new()object"] = func140;
    var func232 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 13
        var string233 = new GraceString("class KittyImage");
        return string233
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func232.paramCounts = [
    ];
    func232.variableArities = [
    ];
    obj46.methods["asDebugString"] = func232;
    func232.definitionLine = 13;
    func232.definitionModule = "kitty";
    sourceObject = obj46;
    sourceObject = obj46;
    superDepth = origSuperDepth;
  }
  obj_init_46.apply(obj46, []);
  var var_KittyImage = obj46;
  lineNumber = 35
  lineNumber = 42
  var func234 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func234.paramCounts[0])
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
  func234.paramCounts = [
    0,
  ];
  func234.variableArities = [
    false,
  ];
  this.methods["KittyEntity"] = func234;
  func234.definitionLine = 42;
  func234.definitionModule = "kitty";
  var obj235 = Grace_allocObject();
  obj235.definitionModule = "kitty";
  obj235.definitionLine = 42;
  obj235.outer = this;
  var reader_kitty_outer_236 = function() {
    return this.outer;
  }
  obj235.methods["outer"] = reader_kitty_outer_236;
  function obj_init_235() {
    var origSuperDepth = superDepth;
    superDepth = obj235;
    obj235.annotations = [];
    var func237 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func237.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj238 = Grace_allocObject();
        obj238.definitionModule = "kitty";
        obj238.definitionLine = 42;
        obj238.outer = this;
        var reader_kitty_outer_239 = function() {
          return this.outer;
        }
        obj238.methods["outer"] = reader_kitty_outer_239;
        function obj_init_238() {
          var origSuperDepth = superDepth;
          superDepth = obj238;
          obj238.annotations = [];
          var func240 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func240.paramCounts[0])
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
          func240.paramCounts = [
            0,
          ];
          func240.variableArities = [
            false,
          ];
          obj238.methods["awake"] = func240;
          func240.definitionLine = 55;
          func240.definitionModule = "kitty";
          var func241 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func241.paramCounts[0])
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
          func241.paramCounts = [
            0,
          ];
          func241.variableArities = [
            false,
          ];
          obj238.methods["start"] = func241;
          func241.definitionLine = 60;
          func241.definitionModule = "kitty";
          var func242 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func242.paramCounts[0])
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
          func242.paramCounts = [
            0,
          ];
          func242.variableArities = [
            false,
          ];
          obj238.methods["update"] = func242;
          func242.definitionLine = 65;
          func242.definitionModule = "kitty";
          var func243 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func243.paramCounts[0])
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
          func243.paramCounts = [
            0,
          ];
          func243.variableArities = [
            false,
          ];
          obj238.methods["onDestroy"] = func243;
          func243.definitionLine = 70;
          func243.definitionModule = "kitty";
          var func244 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func244.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 75
              var call245 = callmethod(var_ctx,"save", [0]);
              lineNumber = 76
              onSelf = true;
              var call246 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call247 = callmethod(this, "posY", [0]);
              var call248 = callmethod(var_ctx,"translate", [2], call246, call247);
              lineNumber = 77
              onSelf = true;
              var call249 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call250 = callmethod(this, "image", [0]);
              var call251 = callmethod(call250,"draw", [4], var_ctx, var_dx, var_dy, call249);
              lineNumber = 78
              var call252 = callmethod(var_ctx,"restore", [0]);
              return call252
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func244.paramCounts = [
            3,
          ];
          func244.variableArities = [
            false,
          ];
          obj238.methods["draw"] = func244;
          func244.definitionLine = 74;
          func244.definitionModule = "kitty";
          var func253 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func253.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 82
              lineNumber = 78
              lineNumber = 82
              var call254 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call255 = callmethod(call254, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call256 = callmethod(call255, "Image", [3], var_image__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call257 = callmethod(this, "image:=", [1], call256);
              return call257
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func253.paramCounts = [
            1,
          ];
          func253.variableArities = [
            false,
          ];
          obj238.methods["setImage"] = func253;
          func253.definitionLine = 81;
          func253.definitionModule = "kitty";
          var func258 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func258.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 87
              lineNumber = 82
              lineNumber = 86
              onSelf = true;
              var call259 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 88
              lineNumber = 82
              lineNumber = 87
              onSelf = true;
              var call260 = callmethod(this, "posY:=", [1], var_y);
              return call260
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func258.paramCounts = [
            2,
          ];
          func258.variableArities = [
            false,
          ];
          obj238.methods["setLocation"] = func258;
          func258.definitionLine = 85;
          func258.definitionModule = "kitty";
          var func261 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func261.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 92
              lineNumber = 91
              onSelf = true;
              var call262 = callmethod(this, "posX", [0]);
              return call262
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func261.paramCounts = [
            0,
          ];
          func261.variableArities = [
            false,
          ];
          obj238.methods["getX"] = func261;
          func261.definitionLine = 90;
          func261.definitionModule = "kitty";
          var func263 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func263.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 96
              lineNumber = 95
              onSelf = true;
              var call264 = callmethod(this, "posY", [0]);
              return call264
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
          obj238.methods["getY"] = func263;
          func263.definitionLine = 94;
          func263.definitionModule = "kitty";
          var func265 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func265.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 100
              lineNumber = 99
              onSelf = true;
              var call266 = callmethod(this, "rotation", [0]);
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
          obj238.methods["getRotation"] = func265;
          func265.definitionLine = 98;
          func265.definitionModule = "kitty";
          sourceObject = obj238;
          lineNumber = 44
          var string267 = new GraceString(")...");
          var string270 = new GraceString(", ");
          var string273 = new GraceString("CREATING ENTITY AT (");
          var opresult275 = callmethod(string273, "++", [1], var_x__39__);
          var opresult277 = callmethod(opresult275, "++", [1], string270);
          var opresult279 = callmethod(opresult277, "++", [1], var_y__39__);
          var opresult281 = callmethod(opresult279, "++", [1], string267);
          var call282 = Grace_print(opresult281);
          sourceObject = obj238;
          lineNumber = 46
          obj238.data["posX"] = var_x__39__;
          var reader_kitty_posX_283 = function() {
            return this.data["posX"];
          }
          obj238.methods["posX"] = reader_kitty_posX_283;
          obj238.data["posX"] = var_x__39__;
          var writer_kitty_posX_283 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj238.methods["posX:="] = writer_kitty_posX_283;
          reader_kitty_posX_283.confidential = true;
          writer_kitty_posX_283.confidential = true;
          lineNumber = 47;
          moduleName = "kitty";
          lineNumber = 46
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj238.mutable = true;
          sourceObject = obj238;
          lineNumber = 47
          obj238.data["posY"] = var_y__39__;
          var reader_kitty_posY_284 = function() {
            return this.data["posY"];
          }
          obj238.methods["posY"] = reader_kitty_posY_284;
          obj238.data["posY"] = var_y__39__;
          var writer_kitty_posY_284 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj238.methods["posY:="] = writer_kitty_posY_284;
          reader_kitty_posY_284.confidential = true;
          writer_kitty_posY_284.confidential = true;
          lineNumber = 48;
          moduleName = "kitty";
          lineNumber = 47
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj238.mutable = true;
          sourceObject = obj238;
          lineNumber = 48
          obj238.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_285 = function() {
            return this.data["rotation"];
          }
          obj238.methods["rotation"] = reader_kitty_rotation_285;
          obj238.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_285 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj238.methods["rotation:="] = writer_kitty_rotation_285;
          reader_kitty_rotation_285.confidential = true;
          writer_kitty_rotation_285.confidential = true;
          lineNumber = 50;
          moduleName = "kitty";
          lineNumber = 48
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj238.mutable = true;
          sourceObject = obj238;
          obj238.data["image"] = undefined;
          var reader_kitty_image_286 = function() {
            return this.data["image"];
          }
          obj238.methods["image"] = reader_kitty_image_286;
          obj238.data["image"] = undefined;
          var writer_kitty_image_286 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj238.methods["image:="] = writer_kitty_image_286;
          reader_kitty_image_286.confidential = true;
          writer_kitty_image_286.confidential = true;
          obj238.mutable = true;
          sourceObject = obj238;
          lineNumber = 52
          onSelf = true;
          var call287 = callmethod(this, "awake", [0]);
          sourceObject = obj238;
          sourceObject = obj238;
          sourceObject = obj238;
          sourceObject = obj238;
          sourceObject = obj238;
          sourceObject = obj238;
          sourceObject = obj238;
          sourceObject = obj238;
          sourceObject = obj238;
          sourceObject = obj238;
          sourceObject = obj238;
          lineNumber = 102
          var string288 = new GraceString("ENTITY CREATED");
          var call289 = Grace_print(string288);
          superDepth = origSuperDepth;
        }
        obj_init_238.apply(obj238, []);
        return obj238
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func237.paramCounts = [
      2,
    ];
    func237.variableArities = [
      false,
    ];
    obj235.methods["new"] = func237;
    func237.definitionLine = 42;
    func237.definitionModule = "kitty";
    var func290 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj291 = Grace_allocObject();
        obj291.definitionModule = "kitty";
        obj291.definitionLine = 42;
        var inho291 = inheritingObject;
        while (inho291.superobj) inho291 = inho291.superobj;
        inho291.superobj = obj291;
        obj291.data = inheritingObject.data;
        obj291.outer = this;
        var reader_kitty_outer_292 = function() {
          return this.outer;
        }
        obj291.methods["outer"] = reader_kitty_outer_292;
        function obj_init_291() {
          var origSuperDepth = superDepth;
          superDepth = obj291;
          obj291.annotations = [];
          var func293 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func293.paramCounts[0])
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
          func293.paramCounts = [
            0,
          ];
          func293.variableArities = [
            false,
          ];
          obj291.methods["awake"] = func293;
          func293.definitionLine = 55;
          func293.definitionModule = "kitty";
          var func294 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func294.paramCounts[0])
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
          func294.paramCounts = [
            0,
          ];
          func294.variableArities = [
            false,
          ];
          obj291.methods["start"] = func294;
          func294.definitionLine = 60;
          func294.definitionModule = "kitty";
          var func295 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func295.paramCounts[0])
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
          func295.paramCounts = [
            0,
          ];
          func295.variableArities = [
            false,
          ];
          obj291.methods["update"] = func295;
          func295.definitionLine = 65;
          func295.definitionModule = "kitty";
          var func296 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func296.paramCounts[0])
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
          func296.paramCounts = [
            0,
          ];
          func296.variableArities = [
            false,
          ];
          obj291.methods["onDestroy"] = func296;
          func296.definitionLine = 70;
          func296.definitionModule = "kitty";
          var func297 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func297.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 75
              var call298 = callmethod(var_ctx,"save", [0]);
              lineNumber = 76
              onSelf = true;
              var call299 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call300 = callmethod(this, "posY", [0]);
              var call301 = callmethod(var_ctx,"translate", [2], call299, call300);
              lineNumber = 77
              onSelf = true;
              var call302 = callmethod(this, "rotation", [0]);
              onSelf = true;
              var call303 = callmethod(this, "image", [0]);
              var call304 = callmethod(call303,"draw", [4], var_ctx, var_dx, var_dy, call302);
              lineNumber = 78
              var call305 = callmethod(var_ctx,"restore", [0]);
              return call305
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func297.paramCounts = [
            3,
          ];
          func297.variableArities = [
            false,
          ];
          obj291.methods["draw"] = func297;
          func297.definitionLine = 74;
          func297.definitionModule = "kitty";
          var func306 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func306.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 82
              lineNumber = 78
              lineNumber = 82
              var call307 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call308 = callmethod(call307, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call309 = callmethod(call308, "Image", [3], var_image__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call310 = callmethod(this, "image:=", [1], call309);
              return call310
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
          obj291.methods["setImage"] = func306;
          func306.definitionLine = 81;
          func306.definitionModule = "kitty";
          var func311 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func311.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 87
              lineNumber = 82
              lineNumber = 86
              onSelf = true;
              var call312 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 88
              lineNumber = 82
              lineNumber = 87
              onSelf = true;
              var call313 = callmethod(this, "posY:=", [1], var_y);
              return call313
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func311.paramCounts = [
            2,
          ];
          func311.variableArities = [
            false,
          ];
          obj291.methods["setLocation"] = func311;
          func311.definitionLine = 85;
          func311.definitionModule = "kitty";
          var func314 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func314.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 92
              lineNumber = 91
              onSelf = true;
              var call315 = callmethod(this, "posX", [0]);
              return call315
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func314.paramCounts = [
            0,
          ];
          func314.variableArities = [
            false,
          ];
          obj291.methods["getX"] = func314;
          func314.definitionLine = 90;
          func314.definitionModule = "kitty";
          var func316 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func316.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 96
              lineNumber = 95
              onSelf = true;
              var call317 = callmethod(this, "posY", [0]);
              return call317
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func316.paramCounts = [
            0,
          ];
          func316.variableArities = [
            false,
          ];
          obj291.methods["getY"] = func316;
          func316.definitionLine = 94;
          func316.definitionModule = "kitty";
          var func318 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func318.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 100
              lineNumber = 99
              onSelf = true;
              var call319 = callmethod(this, "rotation", [0]);
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
          obj291.methods["getRotation"] = func318;
          func318.definitionLine = 98;
          func318.definitionModule = "kitty";
          sourceObject = obj291;
          lineNumber = 44
          var string320 = new GraceString(")...");
          var string323 = new GraceString(", ");
          var string326 = new GraceString("CREATING ENTITY AT (");
          var opresult328 = callmethod(string326, "++", [1], var_x__39__);
          var opresult330 = callmethod(opresult328, "++", [1], string323);
          var opresult332 = callmethod(opresult330, "++", [1], var_y__39__);
          var opresult334 = callmethod(opresult332, "++", [1], string320);
          var call335 = Grace_print(opresult334);
          sourceObject = obj291;
          lineNumber = 46
          obj291.data["posX"] = var_x__39__;
          var reader_kitty_posX_336 = function() {
            return this.data["posX"];
          }
          obj291.methods["posX"] = reader_kitty_posX_336;
          obj291.data["posX"] = var_x__39__;
          var writer_kitty_posX_336 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj291.methods["posX:="] = writer_kitty_posX_336;
          reader_kitty_posX_336.confidential = true;
          writer_kitty_posX_336.confidential = true;
          lineNumber = 47;
          moduleName = "kitty";
          lineNumber = 46
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj291.mutable = true;
          sourceObject = obj291;
          lineNumber = 47
          obj291.data["posY"] = var_y__39__;
          var reader_kitty_posY_337 = function() {
            return this.data["posY"];
          }
          obj291.methods["posY"] = reader_kitty_posY_337;
          obj291.data["posY"] = var_y__39__;
          var writer_kitty_posY_337 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj291.methods["posY:="] = writer_kitty_posY_337;
          reader_kitty_posY_337.confidential = true;
          writer_kitty_posY_337.confidential = true;
          lineNumber = 48;
          moduleName = "kitty";
          lineNumber = 47
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj291.mutable = true;
          sourceObject = obj291;
          lineNumber = 48
          obj291.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_338 = function() {
            return this.data["rotation"];
          }
          obj291.methods["rotation"] = reader_kitty_rotation_338;
          obj291.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_338 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj291.methods["rotation:="] = writer_kitty_rotation_338;
          reader_kitty_rotation_338.confidential = true;
          writer_kitty_rotation_338.confidential = true;
          lineNumber = 50;
          moduleName = "kitty";
          lineNumber = 48
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj291.mutable = true;
          sourceObject = obj291;
          obj291.data["image"] = undefined;
          var reader_kitty_image_339 = function() {
            return this.data["image"];
          }
          obj291.methods["image"] = reader_kitty_image_339;
          obj291.data["image"] = undefined;
          var writer_kitty_image_339 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj291.methods["image:="] = writer_kitty_image_339;
          reader_kitty_image_339.confidential = true;
          writer_kitty_image_339.confidential = true;
          obj291.mutable = true;
          sourceObject = obj291;
          lineNumber = 52
          onSelf = true;
          var call340 = callmethod(this, "awake", [0]);
          sourceObject = obj291;
          sourceObject = obj291;
          sourceObject = obj291;
          sourceObject = obj291;
          sourceObject = obj291;
          sourceObject = obj291;
          sourceObject = obj291;
          sourceObject = obj291;
          sourceObject = obj291;
          sourceObject = obj291;
          sourceObject = obj291;
          lineNumber = 102
          var string341 = new GraceString("ENTITY CREATED");
          var call342 = Grace_print(string341);
          superDepth = origSuperDepth;
        }
        obj_init_291.apply(inheritingObject, []);
        return obj291
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj235.methods["new()object"] = func290;
    var func343 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 42
        var string344 = new GraceString("class KittyEntity");
        return string344
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func343.paramCounts = [
    ];
    func343.variableArities = [
    ];
    obj235.methods["asDebugString"] = func343;
    func343.definitionLine = 42;
    func343.definitionModule = "kitty";
    sourceObject = obj235;
    sourceObject = obj235;
    superDepth = origSuperDepth;
  }
  obj_init_235.apply(obj235, []);
  var var_KittyEntity = obj235;
  lineNumber = 105
  lineNumber = 112
  var func345 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func345.paramCounts[0])
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
  func345.paramCounts = [
    0,
  ];
  func345.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func345;
  func345.definitionLine = 112;
  func345.definitionModule = "kitty";
  var obj346 = Grace_allocObject();
  obj346.definitionModule = "kitty";
  obj346.definitionLine = 112;
  obj346.outer = this;
  var reader_kitty_outer_347 = function() {
    return this.outer;
  }
  obj346.methods["outer"] = reader_kitty_outer_347;
  function obj_init_346() {
    var origSuperDepth = superDepth;
    superDepth = obj346;
    obj346.annotations = [];
    var func348 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func348.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj349 = Grace_allocObject();
        obj349.definitionModule = "kitty";
        obj349.definitionLine = 112;
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
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 139
              var string352 = new GraceString("INITIALIZING WORLD...");
              var call353 = Grace_print(string352);
              lineNumber = 145
              var if354 = var_done;
              lineNumber = 141
              onSelf = true;
              var call355 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call355)) {
                lineNumber = 143
                lineNumber = 142
                var bool356 = new GraceBoolean(false)
                return bool356
              }
              lineNumber = 146
              lineNumber = 112
              lineNumber = 145
              var call357 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call358 = callmethod(this, "document:=", [1], call357);
              lineNumber = 146
              lineNumber = 145
              lineNumber = 146
              var string359 = new GraceString("standard-canvas");
              onSelf = true;
              var call360 = callmethod(this, "document", [0]);
              var call361 = callmethod(call360,"getElementById", [1], string359);
              onSelf = true;
              var call362 = callmethod(this, "canvas:=", [1], call361);
              lineNumber = 148
              lineNumber = 145
              lineNumber = 147
              onSelf = true;
              var call363 = callmethod(this, "canvas", [0]);
              var call364 = callmethod(call363,"width", [0]);
              onSelf = true;
              var call365 = callmethod(this, "canvasWidth:=", [1], call364);
              lineNumber = 150
              lineNumber = 147
              lineNumber = 148
              onSelf = true;
              var call366 = callmethod(this, "canvas", [0]);
              var call367 = callmethod(call366,"height", [0]);
              onSelf = true;
              var call368 = callmethod(this, "canvasHeight:=", [1], call367);
              lineNumber = 151
              lineNumber = 148
              lineNumber = 150
              var bool369 = new GraceBoolean(true)
              onSelf = true;
              var call370 = callmethod(this, "isInit:=", [1], bool369);
              lineNumber = 151
              var string371 = new GraceString("INITIALIZATION FINISHED");
              var call372 = Grace_print(string371);
              lineNumber = 154
              onSelf = true;
              var call373 = callmethod(this, "start", [0]);
              return call373
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
          obj349.methods["init"] = func351;
          func351.definitionLine = 137;
          func351.definitionModule = "kitty";
          var func374 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func374.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 159
              var string375 = new GraceString("STARTING WORLD...");
              var call376 = Grace_print(string375);
              lineNumber = 160
              lineNumber = 148
              lineNumber = 160
              var string377 = new GraceString("canvas");
              var call378 = callmethod(var_dom,"document", [0]);
              var call379 = callmethod(call378,"createElement", [1], string377);
              onSelf = true;
              var call380 = callmethod(this, "backingCanvas:=", [1], call379);
              lineNumber = 162
              lineNumber = 160
              lineNumber = 161
              onSelf = true;
              var call381 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call382 = callmethod(this, "backingCanvas", [0]);
              var call383 = callmethod(call382,"height:=", [1], call381);
              lineNumber = 163
              lineNumber = 160
              lineNumber = 162
              onSelf = true;
              var call384 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call385 = callmethod(this, "backingCanvas", [0]);
              var call386 = callmethod(call385,"width:=", [1], call384);
              lineNumber = 163
              lineNumber = 160
              lineNumber = 163
              var string387 = new GraceString("2d");
              onSelf = true;
              var call388 = callmethod(this, "backingCanvas", [0]);
              var call389 = callmethod(call388,"getContext", [1], string387);
              onSelf = true;
              var call390 = callmethod(this, "backingContext:=", [1], call389);
              lineNumber = 164
              lineNumber = 160
              lineNumber = 164
              var string391 = new GraceString("2d");
              onSelf = true;
              var call392 = callmethod(this, "canvas", [0]);
              var call393 = callmethod(call392,"getContext", [1], string391);
              onSelf = true;
              var call394 = callmethod(this, "mctx:=", [1], call393);
              lineNumber = 165
              var string395 = new GraceString("WORLD STARTED");
              var call396 = Grace_print(string395);
              return call396
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func374.paramCounts = [
            0,
          ];
          func374.variableArities = [
            false,
          ];
          obj349.methods["start"] = func374;
          func374.definitionLine = 158;
          func374.definitionModule = "kitty";
          var func397 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func397.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 170
              var string398 = new GraceString("UPDATING WORLD...");
              var call399 = Grace_print(string398);
              lineNumber = 174
              lineNumber = 160
              lineNumber = 173
              onSelf = true;
              var call400 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call401 = callmethod(this, "mctx", [0]);
              var call402 = callmethod(call401,"fillStyle:=", [1], call400);
              lineNumber = 174
              onSelf = true;
              var call403 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call404 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call405 = callmethod(this, "mctx", [0]);
              var call406 = callmethod(call405,"fillRect", [4], new GraceNum(0), new GraceNum(0), call403, call404);
              lineNumber = 175
              onSelf = true;
              var call407 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call408 = callmethod(this, "mctx", [0]);
              var call409 = callmethod(call408,"drawImage", [3], call407, new GraceNum(0), new GraceNum(0));
              lineNumber = 176
              onSelf = true;
              var call410 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call412 = callmethod(this, "canvasWidth", [0]);
              var quotient414 = callmethod(call412, "/", [1], new GraceNum(2));
              onSelf = true;
              var call416 = callmethod(this, "canvasHeight", [0]);
              var quotient418 = callmethod(call416, "/", [1], new GraceNum(2));
              onSelf = true;
              var call419 = callmethod(this, "background", [0]);
              var call420 = callmethod(call419,"draw", [4], call410, quotient414, quotient418, new GraceNum(0));
              lineNumber = 179
              onSelf = true;
              var call421 = callmethod(this, "entities", [0]);
              lineNumber = 183
              var block422 = Grace_allocObject();
              block422.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block422.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block422.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block422.methods["match"] = GraceBlock_match;
              block422.methods["prefix?"] = GraceBlock_lift;
              block422.receiver = this;
              block422.className = 'block<kitty:183>';
              block422.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 180
                onSelf = true;
                var call423 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call425 = callmethod(this, "canvasWidth", [0]);
                var quotient427 = callmethod(call425, "/", [1], new GraceNum(2));
                onSelf = true;
                var call429 = callmethod(this, "canvasHeight", [0]);
                var quotient431 = callmethod(call429, "/", [1], new GraceNum(2));
                var call432 = callmethod(var_entity,"draw", [3], call423, quotient427, quotient431);
                return call432;
              };
              var call433 = callmethod(Grace_prelude,"for()do", [1, 1], call421, block422);
              lineNumber = 183
              var string434 = new GraceString("WORLD UPDATED");
              var call435 = Grace_print(string434);
              return call435
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
          obj349.methods["update"] = func397;
          func397.definitionLine = 169;
          func397.definitionModule = "kitty";
          var func436 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func436.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 187
              lineNumber = 160
              lineNumber = 187
              onSelf = true;
              var call437 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call438 = callmethod(this, "canvasHeight", [0]);
              var call439 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call440 = callmethod(call439, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call441 = callmethod(call440, "Image", [3], var_background__39__, call437, call438);
              onSelf = true;
              var call442 = callmethod(this, "background:=", [1], call441);
              return call442
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
          obj349.methods["setBackground"] = func436;
          func436.definitionLine = 186;
          func436.definitionModule = "kitty";
          var func443 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func443.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 191
              onSelf = true;
              var call444 = callmethod(this, "entities", [0]);
              var call445 = callmethod(call444,"push", [1], var_e);
              return call445
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func443.paramTypes = [];
          func443.paramTypes.push([]);
          func443.paramCounts = [
            1,
          ];
          func443.variableArities = [
            false,
          ];
          obj349.methods["addEntity"] = func443;
          func443.definitionLine = 190;
          func443.definitionModule = "kitty";
          sourceObject = obj349;
          lineNumber = 114
          var string446 = new GraceString("CREATING NEW WORLD...");
          var call447 = Grace_print(string446);
          sourceObject = obj349;
          obj349.data["background"] = undefined;
          var reader_kitty_background_448 = function() {
            return this.data["background"];
          }
          obj349.methods["background"] = reader_kitty_background_448;
          obj349.data["background"] = undefined;
          var writer_kitty_background_448 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj349.methods["background:="] = writer_kitty_background_448;
          reader_kitty_background_448.confidential = true;
          writer_kitty_background_448.confidential = true;
          obj349.mutable = true;
          sourceObject = obj349;
          lineNumber = 117
          var string449 = new GraceString("black");
          obj349.data["backgroundColour"] = string449;
          var reader_kitty_backgroundColour_450 = function() {
            return this.data["backgroundColour"];
          }
          obj349.methods["backgroundColour"] = reader_kitty_backgroundColour_450;
          obj349.data["backgroundColour"] = string449;
          var writer_kitty_backgroundColour_450 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj349.methods["backgroundColour:="] = writer_kitty_backgroundColour_450;
          reader_kitty_backgroundColour_450.confidential = true;
          writer_kitty_backgroundColour_450.confidential = true;
          lineNumber = 119;
          moduleName = "kitty";
          lineNumber = 117
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string449)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj349.mutable = true;
          sourceObject = obj349;
          obj349.data["document"] = undefined;
          var reader_kitty_document_451 = function() {
            return this.data["document"];
          }
          obj349.methods["document"] = reader_kitty_document_451;
          obj349.data["document"] = undefined;
          var writer_kitty_document_451 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj349.methods["document:="] = writer_kitty_document_451;
          reader_kitty_document_451.confidential = true;
          writer_kitty_document_451.confidential = true;
          obj349.mutable = true;
          sourceObject = obj349;
          obj349.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_452 = function() {
            return this.data["backingCanvas"];
          }
          obj349.methods["backingCanvas"] = reader_kitty_backingCanvas_452;
          obj349.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_452 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj349.methods["backingCanvas:="] = writer_kitty_backingCanvas_452;
          reader_kitty_backingCanvas_452.confidential = true;
          writer_kitty_backingCanvas_452.confidential = true;
          obj349.mutable = true;
          sourceObject = obj349;
          obj349.data["backingContext"] = undefined;
          var reader_kitty_backingContext_453 = function() {
            return this.data["backingContext"];
          }
          obj349.methods["backingContext"] = reader_kitty_backingContext_453;
          obj349.data["backingContext"] = undefined;
          var writer_kitty_backingContext_453 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj349.methods["backingContext:="] = writer_kitty_backingContext_453;
          reader_kitty_backingContext_453.confidential = true;
          writer_kitty_backingContext_453.confidential = true;
          obj349.mutable = true;
          sourceObject = obj349;
          obj349.data["canvas"] = undefined;
          var reader_kitty_canvas_454 = function() {
            return this.data["canvas"];
          }
          obj349.methods["canvas"] = reader_kitty_canvas_454;
          obj349.data["canvas"] = undefined;
          var writer_kitty_canvas_454 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj349.methods["canvas:="] = writer_kitty_canvas_454;
          reader_kitty_canvas_454.confidential = true;
          writer_kitty_canvas_454.confidential = true;
          obj349.mutable = true;
          sourceObject = obj349;
          obj349.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_455 = function() {
            return this.data["canvasWidth"];
          }
          obj349.methods["canvasWidth"] = reader_kitty_canvasWidth_455;
          obj349.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_455 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj349.methods["canvasWidth:="] = writer_kitty_canvasWidth_455;
          reader_kitty_canvasWidth_455.confidential = true;
          writer_kitty_canvasWidth_455.confidential = true;
          obj349.mutable = true;
          sourceObject = obj349;
          obj349.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_456 = function() {
            return this.data["canvasHeight"];
          }
          obj349.methods["canvasHeight"] = reader_kitty_canvasHeight_456;
          obj349.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_456 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj349.methods["canvasHeight:="] = writer_kitty_canvasHeight_456;
          reader_kitty_canvasHeight_456.confidential = true;
          writer_kitty_canvasHeight_456.confidential = true;
          obj349.mutable = true;
          sourceObject = obj349;
          lineNumber = 128
          var call457 = callmethod(var_collections,"list", [0]);
          var call458 = callmethod(call457,"new", [0]);
          obj349.data["entities"] = call458;
          var reader_kitty_entities_459 = function() {
            return this.data["entities"];
          }
          obj349.methods["entities"] = reader_kitty_entities_459;
          obj349.data["entities"] = call458;
          var writer_kitty_entities_459 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj349.methods["entities:="] = writer_kitty_entities_459;
          reader_kitty_entities_459.confidential = true;
          writer_kitty_entities_459.confidential = true;
          lineNumber = 130;
          moduleName = "kitty";
          lineNumber = 128
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call458)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj349.mutable = true;
          sourceObject = obj349;
          lineNumber = 130
          var bool460 = new GraceBoolean(false)
          obj349.data["isInit"] = bool460;
          var reader_kitty_isInit_461 = function() {
            return this.data["isInit"];
          }
          obj349.methods["isInit"] = reader_kitty_isInit_461;
          obj349.data["isInit"] = bool460;
          var writer_kitty_isInit_461 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj349.methods["isInit:="] = writer_kitty_isInit_461;
          reader_kitty_isInit_461.confidential = true;
          writer_kitty_isInit_461.confidential = true;
          lineNumber = 132;
          moduleName = "kitty";
          lineNumber = 130
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool460)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj349.mutable = true;
          sourceObject = obj349;
          obj349.data["mctx"] = undefined;
          var reader_kitty_mctx_462 = function() {
            return this.data["mctx"];
          }
          obj349.methods["mctx"] = reader_kitty_mctx_462;
          obj349.data["mctx"] = undefined;
          var writer_kitty_mctx_462 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj349.methods["mctx:="] = writer_kitty_mctx_462;
          reader_kitty_mctx_462.confidential = true;
          writer_kitty_mctx_462.confidential = true;
          obj349.mutable = true;
          sourceObject = obj349;
          lineNumber = 134
          onSelf = true;
          var call463 = callmethod(this, "init", [0]);
          sourceObject = obj349;
          sourceObject = obj349;
          sourceObject = obj349;
          sourceObject = obj349;
          sourceObject = obj349;
          sourceObject = obj349;
          lineNumber = 194
          var string464 = new GraceString("WORLD CREATED");
          var call465 = Grace_print(string464);
          superDepth = origSuperDepth;
        }
        obj_init_349.apply(obj349, []);
        return obj349
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
    obj346.methods["new"] = func348;
    func348.definitionLine = 112;
    func348.definitionModule = "kitty";
    var func466 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj467 = Grace_allocObject();
        obj467.definitionModule = "kitty";
        obj467.definitionLine = 112;
        var inho467 = inheritingObject;
        while (inho467.superobj) inho467 = inho467.superobj;
        inho467.superobj = obj467;
        obj467.data = inheritingObject.data;
        obj467.outer = this;
        var reader_kitty_outer_468 = function() {
          return this.outer;
        }
        obj467.methods["outer"] = reader_kitty_outer_468;
        function obj_init_467() {
          var origSuperDepth = superDepth;
          superDepth = obj467;
          obj467.annotations = [];
          var func469 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func469.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 139
              var string470 = new GraceString("INITIALIZING WORLD...");
              var call471 = Grace_print(string470);
              lineNumber = 145
              var if472 = var_done;
              lineNumber = 141
              onSelf = true;
              var call473 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call473)) {
                lineNumber = 143
                lineNumber = 142
                var bool474 = new GraceBoolean(false)
                return bool474
              }
              lineNumber = 146
              lineNumber = 128
              lineNumber = 145
              var call475 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call476 = callmethod(this, "document:=", [1], call475);
              lineNumber = 146
              lineNumber = 145
              lineNumber = 146
              var string477 = new GraceString("standard-canvas");
              onSelf = true;
              var call478 = callmethod(this, "document", [0]);
              var call479 = callmethod(call478,"getElementById", [1], string477);
              onSelf = true;
              var call480 = callmethod(this, "canvas:=", [1], call479);
              lineNumber = 148
              lineNumber = 145
              lineNumber = 147
              onSelf = true;
              var call481 = callmethod(this, "canvas", [0]);
              var call482 = callmethod(call481,"width", [0]);
              onSelf = true;
              var call483 = callmethod(this, "canvasWidth:=", [1], call482);
              lineNumber = 150
              lineNumber = 147
              lineNumber = 148
              onSelf = true;
              var call484 = callmethod(this, "canvas", [0]);
              var call485 = callmethod(call484,"height", [0]);
              onSelf = true;
              var call486 = callmethod(this, "canvasHeight:=", [1], call485);
              lineNumber = 151
              lineNumber = 148
              lineNumber = 150
              var bool487 = new GraceBoolean(true)
              onSelf = true;
              var call488 = callmethod(this, "isInit:=", [1], bool487);
              lineNumber = 151
              var string489 = new GraceString("INITIALIZATION FINISHED");
              var call490 = Grace_print(string489);
              lineNumber = 154
              onSelf = true;
              var call491 = callmethod(this, "start", [0]);
              return call491
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func469.paramCounts = [
            0,
          ];
          func469.variableArities = [
            false,
          ];
          obj467.methods["init"] = func469;
          func469.definitionLine = 137;
          func469.definitionModule = "kitty";
          var func492 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func492.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 159
              var string493 = new GraceString("STARTING WORLD...");
              var call494 = Grace_print(string493);
              lineNumber = 160
              lineNumber = 148
              lineNumber = 160
              var string495 = new GraceString("canvas");
              var call496 = callmethod(var_dom,"document", [0]);
              var call497 = callmethod(call496,"createElement", [1], string495);
              onSelf = true;
              var call498 = callmethod(this, "backingCanvas:=", [1], call497);
              lineNumber = 162
              lineNumber = 160
              lineNumber = 161
              onSelf = true;
              var call499 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call500 = callmethod(this, "backingCanvas", [0]);
              var call501 = callmethod(call500,"height:=", [1], call499);
              lineNumber = 163
              lineNumber = 160
              lineNumber = 162
              onSelf = true;
              var call502 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call503 = callmethod(this, "backingCanvas", [0]);
              var call504 = callmethod(call503,"width:=", [1], call502);
              lineNumber = 163
              lineNumber = 160
              lineNumber = 163
              var string505 = new GraceString("2d");
              onSelf = true;
              var call506 = callmethod(this, "backingCanvas", [0]);
              var call507 = callmethod(call506,"getContext", [1], string505);
              onSelf = true;
              var call508 = callmethod(this, "backingContext:=", [1], call507);
              lineNumber = 164
              lineNumber = 160
              lineNumber = 164
              var string509 = new GraceString("2d");
              onSelf = true;
              var call510 = callmethod(this, "canvas", [0]);
              var call511 = callmethod(call510,"getContext", [1], string509);
              onSelf = true;
              var call512 = callmethod(this, "mctx:=", [1], call511);
              lineNumber = 165
              var string513 = new GraceString("WORLD STARTED");
              var call514 = Grace_print(string513);
              return call514
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func492.paramCounts = [
            0,
          ];
          func492.variableArities = [
            false,
          ];
          obj467.methods["start"] = func492;
          func492.definitionLine = 158;
          func492.definitionModule = "kitty";
          var func515 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func515.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 170
              var string516 = new GraceString("UPDATING WORLD...");
              var call517 = Grace_print(string516);
              lineNumber = 174
              lineNumber = 160
              lineNumber = 173
              onSelf = true;
              var call518 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call519 = callmethod(this, "mctx", [0]);
              var call520 = callmethod(call519,"fillStyle:=", [1], call518);
              lineNumber = 174
              onSelf = true;
              var call521 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call522 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call523 = callmethod(this, "mctx", [0]);
              var call524 = callmethod(call523,"fillRect", [4], new GraceNum(0), new GraceNum(0), call521, call522);
              lineNumber = 175
              onSelf = true;
              var call525 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call526 = callmethod(this, "mctx", [0]);
              var call527 = callmethod(call526,"drawImage", [3], call525, new GraceNum(0), new GraceNum(0));
              lineNumber = 176
              onSelf = true;
              var call528 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call530 = callmethod(this, "canvasWidth", [0]);
              var quotient532 = callmethod(call530, "/", [1], new GraceNum(2));
              onSelf = true;
              var call534 = callmethod(this, "canvasHeight", [0]);
              var quotient536 = callmethod(call534, "/", [1], new GraceNum(2));
              onSelf = true;
              var call537 = callmethod(this, "background", [0]);
              var call538 = callmethod(call537,"draw", [4], call528, quotient532, quotient536, new GraceNum(0));
              lineNumber = 179
              onSelf = true;
              var call539 = callmethod(this, "entities", [0]);
              lineNumber = 183
              var block540 = Grace_allocObject();
              block540.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block540.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block540.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block540.methods["match"] = GraceBlock_match;
              block540.methods["prefix?"] = GraceBlock_lift;
              block540.receiver = this;
              block540.className = 'block<kitty:183>';
              block540.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 180
                onSelf = true;
                var call541 = callmethod(this, "mctx", [0]);
                onSelf = true;
                var call543 = callmethod(this, "canvasWidth", [0]);
                var quotient545 = callmethod(call543, "/", [1], new GraceNum(2));
                onSelf = true;
                var call547 = callmethod(this, "canvasHeight", [0]);
                var quotient549 = callmethod(call547, "/", [1], new GraceNum(2));
                var call550 = callmethod(var_entity,"draw", [3], call541, quotient545, quotient549);
                return call550;
              };
              var call551 = callmethod(Grace_prelude,"for()do", [1, 1], call539, block540);
              lineNumber = 183
              var string552 = new GraceString("WORLD UPDATED");
              var call553 = Grace_print(string552);
              return call553
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func515.paramCounts = [
            0,
          ];
          func515.variableArities = [
            false,
          ];
          obj467.methods["update"] = func515;
          func515.definitionLine = 169;
          func515.definitionModule = "kitty";
          var func554 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func554.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 187
              lineNumber = 160
              lineNumber = 187
              onSelf = true;
              var call555 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call556 = callmethod(this, "canvasHeight", [0]);
              var call557 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call558 = callmethod(call557, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call559 = callmethod(call558, "Image", [3], var_background__39__, call555, call556);
              onSelf = true;
              var call560 = callmethod(this, "background:=", [1], call559);
              return call560
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func554.paramCounts = [
            1,
          ];
          func554.variableArities = [
            false,
          ];
          obj467.methods["setBackground"] = func554;
          func554.definitionLine = 186;
          func554.definitionModule = "kitty";
          var func561 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func561.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 191
              onSelf = true;
              var call562 = callmethod(this, "entities", [0]);
              var call563 = callmethod(call562,"push", [1], var_e);
              return call563
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func561.paramTypes = [];
          func561.paramTypes.push([]);
          func561.paramCounts = [
            1,
          ];
          func561.variableArities = [
            false,
          ];
          obj467.methods["addEntity"] = func561;
          func561.definitionLine = 190;
          func561.definitionModule = "kitty";
          sourceObject = obj467;
          lineNumber = 114
          var string564 = new GraceString("CREATING NEW WORLD...");
          var call565 = Grace_print(string564);
          sourceObject = obj467;
          obj467.data["background"] = undefined;
          var reader_kitty_background_566 = function() {
            return this.data["background"];
          }
          obj467.methods["background"] = reader_kitty_background_566;
          obj467.data["background"] = undefined;
          var writer_kitty_background_566 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj467.methods["background:="] = writer_kitty_background_566;
          reader_kitty_background_566.confidential = true;
          writer_kitty_background_566.confidential = true;
          obj467.mutable = true;
          sourceObject = obj467;
          lineNumber = 117
          var string567 = new GraceString("black");
          obj467.data["backgroundColour"] = string567;
          var reader_kitty_backgroundColour_568 = function() {
            return this.data["backgroundColour"];
          }
          obj467.methods["backgroundColour"] = reader_kitty_backgroundColour_568;
          obj467.data["backgroundColour"] = string567;
          var writer_kitty_backgroundColour_568 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj467.methods["backgroundColour:="] = writer_kitty_backgroundColour_568;
          reader_kitty_backgroundColour_568.confidential = true;
          writer_kitty_backgroundColour_568.confidential = true;
          lineNumber = 119;
          moduleName = "kitty";
          lineNumber = 117
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string567)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj467.mutable = true;
          sourceObject = obj467;
          obj467.data["document"] = undefined;
          var reader_kitty_document_569 = function() {
            return this.data["document"];
          }
          obj467.methods["document"] = reader_kitty_document_569;
          obj467.data["document"] = undefined;
          var writer_kitty_document_569 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj467.methods["document:="] = writer_kitty_document_569;
          reader_kitty_document_569.confidential = true;
          writer_kitty_document_569.confidential = true;
          obj467.mutable = true;
          sourceObject = obj467;
          obj467.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_570 = function() {
            return this.data["backingCanvas"];
          }
          obj467.methods["backingCanvas"] = reader_kitty_backingCanvas_570;
          obj467.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_570 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj467.methods["backingCanvas:="] = writer_kitty_backingCanvas_570;
          reader_kitty_backingCanvas_570.confidential = true;
          writer_kitty_backingCanvas_570.confidential = true;
          obj467.mutable = true;
          sourceObject = obj467;
          obj467.data["backingContext"] = undefined;
          var reader_kitty_backingContext_571 = function() {
            return this.data["backingContext"];
          }
          obj467.methods["backingContext"] = reader_kitty_backingContext_571;
          obj467.data["backingContext"] = undefined;
          var writer_kitty_backingContext_571 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj467.methods["backingContext:="] = writer_kitty_backingContext_571;
          reader_kitty_backingContext_571.confidential = true;
          writer_kitty_backingContext_571.confidential = true;
          obj467.mutable = true;
          sourceObject = obj467;
          obj467.data["canvas"] = undefined;
          var reader_kitty_canvas_572 = function() {
            return this.data["canvas"];
          }
          obj467.methods["canvas"] = reader_kitty_canvas_572;
          obj467.data["canvas"] = undefined;
          var writer_kitty_canvas_572 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj467.methods["canvas:="] = writer_kitty_canvas_572;
          reader_kitty_canvas_572.confidential = true;
          writer_kitty_canvas_572.confidential = true;
          obj467.mutable = true;
          sourceObject = obj467;
          obj467.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_573 = function() {
            return this.data["canvasWidth"];
          }
          obj467.methods["canvasWidth"] = reader_kitty_canvasWidth_573;
          obj467.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_573 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj467.methods["canvasWidth:="] = writer_kitty_canvasWidth_573;
          reader_kitty_canvasWidth_573.confidential = true;
          writer_kitty_canvasWidth_573.confidential = true;
          obj467.mutable = true;
          sourceObject = obj467;
          obj467.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_574 = function() {
            return this.data["canvasHeight"];
          }
          obj467.methods["canvasHeight"] = reader_kitty_canvasHeight_574;
          obj467.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_574 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj467.methods["canvasHeight:="] = writer_kitty_canvasHeight_574;
          reader_kitty_canvasHeight_574.confidential = true;
          writer_kitty_canvasHeight_574.confidential = true;
          obj467.mutable = true;
          sourceObject = obj467;
          lineNumber = 128
          var call575 = callmethod(var_collections,"list", [0]);
          var call576 = callmethod(call575,"new", [0]);
          obj467.data["entities"] = call576;
          var reader_kitty_entities_577 = function() {
            return this.data["entities"];
          }
          obj467.methods["entities"] = reader_kitty_entities_577;
          obj467.data["entities"] = call576;
          var writer_kitty_entities_577 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj467.methods["entities:="] = writer_kitty_entities_577;
          reader_kitty_entities_577.confidential = true;
          writer_kitty_entities_577.confidential = true;
          lineNumber = 130;
          moduleName = "kitty";
          lineNumber = 128
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call576)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj467.mutable = true;
          sourceObject = obj467;
          lineNumber = 130
          var bool578 = new GraceBoolean(false)
          obj467.data["isInit"] = bool578;
          var reader_kitty_isInit_579 = function() {
            return this.data["isInit"];
          }
          obj467.methods["isInit"] = reader_kitty_isInit_579;
          obj467.data["isInit"] = bool578;
          var writer_kitty_isInit_579 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj467.methods["isInit:="] = writer_kitty_isInit_579;
          reader_kitty_isInit_579.confidential = true;
          writer_kitty_isInit_579.confidential = true;
          lineNumber = 132;
          moduleName = "kitty";
          lineNumber = 130
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool578)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj467.mutable = true;
          sourceObject = obj467;
          obj467.data["mctx"] = undefined;
          var reader_kitty_mctx_580 = function() {
            return this.data["mctx"];
          }
          obj467.methods["mctx"] = reader_kitty_mctx_580;
          obj467.data["mctx"] = undefined;
          var writer_kitty_mctx_580 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj467.methods["mctx:="] = writer_kitty_mctx_580;
          reader_kitty_mctx_580.confidential = true;
          writer_kitty_mctx_580.confidential = true;
          obj467.mutable = true;
          sourceObject = obj467;
          lineNumber = 134
          onSelf = true;
          var call581 = callmethod(this, "init", [0]);
          sourceObject = obj467;
          sourceObject = obj467;
          sourceObject = obj467;
          sourceObject = obj467;
          sourceObject = obj467;
          sourceObject = obj467;
          lineNumber = 194
          var string582 = new GraceString("WORLD CREATED");
          var call583 = Grace_print(string582);
          superDepth = origSuperDepth;
        }
        obj_init_467.apply(inheritingObject, []);
        return obj467
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj346.methods["new()object"] = func466;
    var func584 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 112
        var string585 = new GraceString("class KittyWorld");
        return string585
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func584.paramCounts = [
    ];
    func584.variableArities = [
    ];
    obj346.methods["asDebugString"] = func584;
    func584.definitionLine = 112;
    func584.definitionModule = "kitty";
    sourceObject = obj346;
    sourceObject = obj346;
    superDepth = origSuperDepth;
  }
  obj_init_346.apply(obj346, []);
  var var_KittyWorld = obj346;
  lineNumber = 197
  lineNumber = 208
  lineNumber = 224
  lineNumber = 228
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
'dom',
'StandardPrelude',
];
if (gctCache)
  gctCache['kitty'] = "methods-of:KittyEntity.new:\n onDestroy\n update\n setLocation\n start\n getX\n getY\n image:=\n getRotation\n posX:=\n posY:=\n image\n rotation:=\n awake\n posX\n posY\n draw\n setImage\n rotation\nfresh:World:\n canvasWidth\n document\n entities:=\n backingCanvas:=\n update\n entities\n backgroundColour\n canvasWidth:=\n backgroundColour:=\n canvasHeight:=\n start\n mctx\n backingCanvas\n canvas:=\n backingContext\n canvasHeight\n background:=\n canvas\n background\n addEntity\n isInit:=\n init\n setBackground\n backingContext:=\n isInit\n mctx:=\n document:=\npublic:\n m_world\n m_world:=\n worldSet\n worldSet:=\n KittyImage\n Image\n KittyEntity\n Entity\n KittyWorld\n World\n start\n stop\n setWorld\nmethods-of:KittyImage.new:\n height:=\n draw\n width\n width:=\n imgTag\n height\nmethods-of:KittyWorld.new:\n canvasWidth\n document\n entities:=\n backingCanvas:=\n update\n entities\n backgroundColour\n addEntity\n backgroundColour:=\n canvasHeight:=\n start\n mctx\n background:=\n canvas:=\n backingContext\n canvasHeight\n backingContext:=\n canvas\n background\n mctx:=\n isInit:=\n init\n setBackground\n backingCanvas\n isInit\n canvasWidth:=\n document:=\nconstructors-of:KittyEntity:\n new\nconstructors-of:KittyImage:\n new\nclasses:\n KittyImage\n KittyEntity\n KittyWorld\nfresh:Entity:\n rotation:=\n update\n setLocation\n start\n getX\n getY\n image:=\n rotation\n posX:=\n posY:=\n image\n onDestroy\n awake\n posX\n posY\n draw\n setImage\n getRotation\nconfidential:\nconstructors-of:KittyWorld:\n new\npath:\n kitty\nfresh:Image:\n height:=\n draw\n width\n width:=\n height\n imgTag\nfresh-methods:\n Image\n Entity\n World\nmodules:\n StandardPrelude\n mgcollections\n";
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
    "        isInit := true",
    "        print \"INITIALIZATION FINISHED\"",
    "",
    "        // Start the game",
    "        start",
    "    }",
    "",
    "    // Called on game start",
    "    method start {",
    "        print \"STARTING WORLD...\"",
    "        backingCanvas := dom.document.createElement(\"canvas\")",
    "        backingCanvas.height := canvasHeight",
    "        backingCanvas.width := canvasWidth",
    "        backingContext := backingCanvas.getContext(\"2d\")",
    "        mctx := canvas.getContext(\"2d\")",
    "        print \"WORLD STARTED\"",
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
