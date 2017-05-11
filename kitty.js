function gracecode_kitty () {
  this.definitionModule = "kitty";
  this.definitionLine = 0;
  lineNumber = 63
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
      lineNumber = 64
      var obj1 = Grace_allocObject();
      obj1.definitionModule = "kitty";
      obj1.definitionLine = 64;
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
        lineNumber = 65
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
  func0.definitionLine = 63;
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
      obj5.definitionLine = 64;
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
  lineNumber = 133
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
      lineNumber = 134
      var obj9 = Grace_allocObject();
      obj9.definitionModule = "kitty";
      obj9.definitionLine = 134;
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
        lineNumber = 135
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
  func8.definitionLine = 133;
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
      obj13.definitionLine = 134;
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
  lineNumber = 226
  var func16 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func16.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (World)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 227
      var obj17 = Grace_allocObject();
      obj17.definitionModule = "kitty";
      obj17.definitionLine = 227;
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
        lineNumber = 228
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
  func16.definitionLine = 226;
  func16.definitionModule = "kitty";
  var func20 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj21 = Grace_allocObject();
      obj21.definitionModule = "kitty";
      obj21.definitionLine = 227;
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
  lineNumber = 235
  var func24 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func24.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 237
      var string25 = new GraceString("CHECKING...");
      var call26 = Grace_print(string25);
      lineNumber = 244
      var if27 = var_done;
      lineNumber = 239
      var call28 = callmethod(var_worldSet,"prefix!", [0]);
      if (Grace_isTrue(call28)) {
        lineNumber = 240
        var string29 = new GraceString("NO WORLD!!");
        var call30 = Grace_print(string29);
        lineNumber = 242
        return var_done
      }
      lineNumber = 244
      var string31 = new GraceString("STARTING...");
      var call32 = Grace_print(string31);
      lineNumber = 247
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
  func24.definitionLine = 235;
  func24.definitionModule = "kitty";
  lineNumber = 251
  var func34 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func34.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 252
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
  func34.definitionLine = 251;
  func34.definitionModule = "kitty";
  lineNumber = 255
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
      lineNumber = 257
      lineNumber = 256
      var_m__95__world = var_world__39__;
      lineNumber = 258
      lineNumber = 257
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
  func37.definitionLine = 255;
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
  lineNumber = 247
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
  func40.definitionLine = 247;
  func40.definitionModule = "kitty";
  lineNumber = 247
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
  func41.definitionLine = 247;
  func41.definitionModule = "kitty";
  lineNumber = 13
  lineNumber = 8
  var bool42 = new GraceBoolean(false)
  var var_worldSet = bool42;
  lineNumber = 247
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
  func43.definitionLine = 247;
  func43.definitionModule = "kitty";
  lineNumber = 247
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
  func44.definitionLine = 247;
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
            var var_ctx__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func51.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawOld)"));
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
              var call79 = callmethod(var_ctx__39__,"save", [0]);
              lineNumber = 25
              var call80 = callmethod(var_ctx__39__,"translate", [2], new GraceNum(0), new GraceNum(0));
              lineNumber = 26
              var opresult85 = callmethod(new GraceNum(180), "+", [1], new GraceNum(180));
              var call86 = callmethod(opresult85,"prefix-", [0]);
              var quotient88 = callmethod(call86, "/", [1], new GraceNum(180));
              var prod90 = callmethod(quotient88, "*", [1], new GraceNum(3.1415));
              var call91 = callmethod(var_ctx__39__,"rotate", [1], prod90);
              lineNumber = 27
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
              var call105 = callmethod(var_ctx__39__,"drawImage", [5], call92, quotient97, quotient102, call103, call104);
              lineNumber = 28
              var call106 = callmethod(var_ctx__39__,"restore", [0]);
              lineNumber = 29
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
          func51.paramCounts = [
            1,
          ];
          func51.variableArities = [
            false,
          ];
          obj49.methods["drawOld"] = func51;
          func51.definitionLine = 22;
          func51.definitionModule = "kitty";
          var func118 = function(argcv) {
            var curarg = 1;
            var var_ctx__39__ = arguments[curarg];
            curarg++;
            var var_width__39__ = arguments[curarg];
            curarg++;
            var var_height__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func118.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawWithSize)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 33
              var string119 = new GraceString(")...");
              var string122 = new GraceString(", ");
              var string125 = new GraceString(" (");
              onSelf = true;
              var call127 = callmethod(this, "imgTag", [0]);
              var call128 = callmethod(call127,"src", [0]);
              var string130 = new GraceString("DRAWING IMAGE: ");
              var opresult132 = callmethod(string130, "++", [1], call128);
              var opresult134 = callmethod(opresult132, "++", [1], string125);
              var opresult136 = callmethod(opresult134, "++", [1], var_width__39__);
              var opresult138 = callmethod(opresult136, "++", [1], string122);
              var opresult140 = callmethod(opresult138, "++", [1], var_height__39__);
              var opresult142 = callmethod(opresult140, "++", [1], string119);
              var call143 = Grace_print(opresult142);
              lineNumber = 39
              onSelf = true;
              var call144 = callmethod(this, "imgTag", [0]);
              onSelf = true;
              var call145 = callmethod(this, "imgTag", [0]);
              var call146 = callmethod(call145,"width", [0]);
              onSelf = true;
              var call147 = callmethod(this, "imgTag", [0]);
              var call148 = callmethod(call147,"height", [0]);
              var call149 = callmethod(var_ctx__39__,"drawImage", [9], call144, new GraceNum(0), new GraceNum(0), call146, call148, new GraceNum(0), new GraceNum(0), var_width__39__, var_height__39__);
              lineNumber = 40
              var call150 = callmethod(var_ctx__39__,"restore", [0]);
              lineNumber = 41
              var string151 = new GraceString(" DRAWN");
              onSelf = true;
              var call153 = callmethod(this, "imgTag", [0]);
              var call154 = callmethod(call153,"src", [0]);
              var string156 = new GraceString("IMAGE: ");
              var opresult158 = callmethod(string156, "++", [1], call154);
              var opresult160 = callmethod(opresult158, "++", [1], string151);
              var call161 = Grace_print(opresult160);
              return call161
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func118.paramCounts = [
            3,
          ];
          func118.variableArities = [
            false,
          ];
          obj49.methods["drawWithSize"] = func118;
          func118.definitionLine = 32;
          func118.definitionModule = "kitty";
          var func162 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func162.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 45
              var string163 = new GraceString(" (500, 500)...");
              onSelf = true;
              var call165 = callmethod(this, "imgTag", [0]);
              var call166 = callmethod(call165,"src", [0]);
              var string168 = new GraceString("DRAWING BACKGROUND: ");
              var opresult170 = callmethod(string168, "++", [1], call166);
              var opresult172 = callmethod(opresult170, "++", [1], string163);
              var call173 = Grace_print(opresult172);
              lineNumber = 46
              onSelf = true;
              var call174 = callmethod(this, "imgTag", [0]);
              onSelf = true;
              var call175 = callmethod(this, "imgTag", [0]);
              var call176 = callmethod(call175,"width", [0]);
              onSelf = true;
              var call177 = callmethod(this, "imgTag", [0]);
              var call178 = callmethod(call177,"height", [0]);
              var call179 = callmethod(var_ctx,"drawImage", [9], call174, new GraceNum(0), new GraceNum(0), call176, call178, new GraceNum(0), new GraceNum(0), new GraceNum(500), new GraceNum(500));
              lineNumber = 47
              var string180 = new GraceString(" DRAWN");
              onSelf = true;
              var call182 = callmethod(this, "imgTag", [0]);
              var call183 = callmethod(call182,"src", [0]);
              var string185 = new GraceString("BACKGROUND: ");
              var opresult187 = callmethod(string185, "++", [1], call183);
              var opresult189 = callmethod(opresult187, "++", [1], string180);
              var call190 = Grace_print(opresult189);
              return call190
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func162.paramCounts = [
            1,
          ];
          func162.variableArities = [
            false,
          ];
          obj49.methods["drawBackground"] = func162;
          func162.definitionLine = 44;
          func162.definitionModule = "kitty";
          var func191 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            var var_rot = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func191.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 51
              var string192 = new GraceString(")...");
              onSelf = true;
              var call194 = callmethod(this, "height", [0]);
              var string196 = new GraceString(", ");
              onSelf = true;
              var call198 = callmethod(this, "width", [0]);
              var string200 = new GraceString(" (");
              onSelf = true;
              var call202 = callmethod(this, "imgTag", [0]);
              var call203 = callmethod(call202,"src", [0]);
              var string205 = new GraceString("DRAWING IMAGE: ");
              var opresult207 = callmethod(string205, "++", [1], call203);
              var opresult209 = callmethod(opresult207, "++", [1], string200);
              var opresult211 = callmethod(opresult209, "++", [1], call198);
              var opresult213 = callmethod(opresult211, "++", [1], string196);
              var opresult215 = callmethod(opresult213, "++", [1], call194);
              var opresult217 = callmethod(opresult215, "++", [1], string192);
              var call218 = Grace_print(opresult217);
              lineNumber = 52
              var call219 = callmethod(var_ctx,"save", [0]);
              lineNumber = 53
              var call220 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 54
              var prod224 = callmethod(var_rot, "*", [1], new GraceNum(180));
              var quotient226 = callmethod(prod224, "/", [1], new GraceNum(3.14));
              var call227 = callmethod(var_ctx,"rotate", [1], quotient226);
              lineNumber = 55
              onSelf = true;
              var call228 = callmethod(this, "imgTag", [0]);
              onSelf = true;
              var call230 = callmethod(this, "width", [0]);
              var call231 = callmethod(call230,"prefix-", [0]);
              var quotient233 = callmethod(call231, "/", [1], new GraceNum(2));
              onSelf = true;
              var call235 = callmethod(this, "height", [0]);
              var call236 = callmethod(call235,"prefix-", [0]);
              var quotient238 = callmethod(call236, "/", [1], new GraceNum(2));
              onSelf = true;
              var call239 = callmethod(this, "width", [0]);
              onSelf = true;
              var call240 = callmethod(this, "height", [0]);
              var call241 = callmethod(var_ctx,"drawImage", [5], call228, quotient233, quotient238, call239, call240);
              lineNumber = 56
              var call242 = callmethod(var_ctx,"restore", [0]);
              lineNumber = 57
              var string243 = new GraceString(" DRAWN");
              onSelf = true;
              var call245 = callmethod(this, "imgTag", [0]);
              var call246 = callmethod(call245,"src", [0]);
              var string248 = new GraceString("IMAGE: ");
              var opresult250 = callmethod(string248, "++", [1], call246);
              var opresult252 = callmethod(opresult250, "++", [1], string243);
              var call253 = Grace_print(opresult252);
              return call253
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func191.paramCounts = [
            4,
          ];
          func191.variableArities = [
            false,
          ];
          obj49.methods["draw"] = func191;
          func191.definitionLine = 50;
          func191.definitionModule = "kitty";
          sourceObject = obj49;
          lineNumber = 15
          var string254 = new GraceString("...");
          var string257 = new GraceString("CREATING NEW IMAGE: ");
          var opresult259 = callmethod(string257, "++", [1], var_url__39__);
          var opresult261 = callmethod(opresult259, "++", [1], string254);
          var call262 = Grace_print(opresult261);
          sourceObject = obj49;
          lineNumber = 16
          var string263 = new GraceString("img");
          var call264 = callmethod(var_dom,"document", [0]);
          var call265 = callmethod(call264,"createElement", [1], string263);
          obj49.data["imgTag"] = call265;
          var reader_kitty_imgTag_266 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_266.def = true;
          reader_kitty_imgTag_266.confidential = true;
          obj49.methods["imgTag"] = reader_kitty_imgTag_266;
          lineNumber = 16;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call265)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj49;
          lineNumber = 19
          lineNumber = 16
          lineNumber = 17
          onSelf = true;
          var call267 = callmethod(this, "imgTag", [0]);
          var call268 = callmethod(call267,"src:=", [1], var_url__39__);
          sourceObject = obj49;
          lineNumber = 19
          obj49.data["height"] = var_height__39__;
          var reader_kitty_height_269 = function() {
            return this.data["height"];
          }
          obj49.methods["height"] = reader_kitty_height_269;
          obj49.data["height"] = var_height__39__;
          var writer_kitty_height_269 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj49.methods["height:="] = writer_kitty_height_269;
          reader_kitty_height_269.confidential = true;
          writer_kitty_height_269.confidential = true;
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
          var reader_kitty_width_270 = function() {
            return this.data["width"];
          }
          obj49.methods["width"] = reader_kitty_width_270;
          obj49.data["width"] = var_width__39__;
          var writer_kitty_width_270 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj49.methods["width:="] = writer_kitty_width_270;
          reader_kitty_width_270.confidential = true;
          writer_kitty_width_270.confidential = true;
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
          sourceObject = obj49;
          sourceObject = obj49;
          sourceObject = obj49;
          lineNumber = 60
          var string271 = new GraceString("");
          var string274 = new GraceString("CREATED NEW IMAGE: ");
          var opresult276 = callmethod(string274, "++", [1], var_url__39__);
          var opresult278 = callmethod(opresult276, "++", [1], string271);
          var call279 = Grace_print(opresult278);
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
    var func280 = function(argcv) {
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
        var obj281 = Grace_allocObject();
        obj281.definitionModule = "kitty";
        obj281.definitionLine = 13;
        var inho281 = inheritingObject;
        while (inho281.superobj) inho281 = inho281.superobj;
        inho281.superobj = obj281;
        obj281.data = inheritingObject.data;
        obj281.outer = this;
        var reader_kitty_outer_282 = function() {
          return this.outer;
        }
        obj281.methods["outer"] = reader_kitty_outer_282;
        function obj_init_281() {
          var origSuperDepth = superDepth;
          superDepth = obj281;
          obj281.annotations = [];
          var func283 = function(argcv) {
            var curarg = 1;
            var var_ctx__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func283.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawOld)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 23
              var string284 = new GraceString(")...");
              onSelf = true;
              var call286 = callmethod(this, "height", [0]);
              var string288 = new GraceString(", ");
              onSelf = true;
              var call290 = callmethod(this, "width", [0]);
              var string292 = new GraceString(" (");
              onSelf = true;
              var call294 = callmethod(this, "imgTag", [0]);
              var call295 = callmethod(call294,"src", [0]);
              var string297 = new GraceString("DRAWING IMAGE: ");
              var opresult299 = callmethod(string297, "++", [1], call295);
              var opresult301 = callmethod(opresult299, "++", [1], string292);
              var opresult303 = callmethod(opresult301, "++", [1], call290);
              var opresult305 = callmethod(opresult303, "++", [1], string288);
              var opresult307 = callmethod(opresult305, "++", [1], call286);
              var opresult309 = callmethod(opresult307, "++", [1], string284);
              var call310 = Grace_print(opresult309);
              lineNumber = 24
              var call311 = callmethod(var_ctx__39__,"save", [0]);
              lineNumber = 25
              var call312 = callmethod(var_ctx__39__,"translate", [2], new GraceNum(0), new GraceNum(0));
              lineNumber = 26
              var opresult317 = callmethod(new GraceNum(180), "+", [1], new GraceNum(180));
              var call318 = callmethod(opresult317,"prefix-", [0]);
              var quotient320 = callmethod(call318, "/", [1], new GraceNum(180));
              var prod322 = callmethod(quotient320, "*", [1], new GraceNum(3.1415));
              var call323 = callmethod(var_ctx__39__,"rotate", [1], prod322);
              lineNumber = 27
              onSelf = true;
              var call324 = callmethod(this, "imgTag", [0]);
              onSelf = true;
              var call326 = callmethod(this, "width", [0]);
              var call327 = callmethod(call326,"prefix-", [0]);
              var quotient329 = callmethod(call327, "/", [1], new GraceNum(2));
              onSelf = true;
              var call331 = callmethod(this, "height", [0]);
              var call332 = callmethod(call331,"prefix-", [0]);
              var quotient334 = callmethod(call332, "/", [1], new GraceNum(2));
              onSelf = true;
              var call335 = callmethod(this, "width", [0]);
              onSelf = true;
              var call336 = callmethod(this, "height", [0]);
              var call337 = callmethod(var_ctx__39__,"drawImage", [5], call324, quotient329, quotient334, call335, call336);
              lineNumber = 28
              var call338 = callmethod(var_ctx__39__,"restore", [0]);
              lineNumber = 29
              var string339 = new GraceString(" DRAWN");
              onSelf = true;
              var call341 = callmethod(this, "imgTag", [0]);
              var call342 = callmethod(call341,"src", [0]);
              var string344 = new GraceString("IMAGE: ");
              var opresult346 = callmethod(string344, "++", [1], call342);
              var opresult348 = callmethod(opresult346, "++", [1], string339);
              var call349 = Grace_print(opresult348);
              return call349
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
          obj281.methods["drawOld"] = func283;
          func283.definitionLine = 22;
          func283.definitionModule = "kitty";
          var func350 = function(argcv) {
            var curarg = 1;
            var var_ctx__39__ = arguments[curarg];
            curarg++;
            var var_width__39__ = arguments[curarg];
            curarg++;
            var var_height__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func350.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawWithSize)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 33
              var string351 = new GraceString(")...");
              var string354 = new GraceString(", ");
              var string357 = new GraceString(" (");
              onSelf = true;
              var call359 = callmethod(this, "imgTag", [0]);
              var call360 = callmethod(call359,"src", [0]);
              var string362 = new GraceString("DRAWING IMAGE: ");
              var opresult364 = callmethod(string362, "++", [1], call360);
              var opresult366 = callmethod(opresult364, "++", [1], string357);
              var opresult368 = callmethod(opresult366, "++", [1], var_width__39__);
              var opresult370 = callmethod(opresult368, "++", [1], string354);
              var opresult372 = callmethod(opresult370, "++", [1], var_height__39__);
              var opresult374 = callmethod(opresult372, "++", [1], string351);
              var call375 = Grace_print(opresult374);
              lineNumber = 39
              onSelf = true;
              var call376 = callmethod(this, "imgTag", [0]);
              onSelf = true;
              var call377 = callmethod(this, "imgTag", [0]);
              var call378 = callmethod(call377,"width", [0]);
              onSelf = true;
              var call379 = callmethod(this, "imgTag", [0]);
              var call380 = callmethod(call379,"height", [0]);
              var call381 = callmethod(var_ctx__39__,"drawImage", [9], call376, new GraceNum(0), new GraceNum(0), call378, call380, new GraceNum(0), new GraceNum(0), var_width__39__, var_height__39__);
              lineNumber = 40
              var call382 = callmethod(var_ctx__39__,"restore", [0]);
              lineNumber = 41
              var string383 = new GraceString(" DRAWN");
              onSelf = true;
              var call385 = callmethod(this, "imgTag", [0]);
              var call386 = callmethod(call385,"src", [0]);
              var string388 = new GraceString("IMAGE: ");
              var opresult390 = callmethod(string388, "++", [1], call386);
              var opresult392 = callmethod(opresult390, "++", [1], string383);
              var call393 = Grace_print(opresult392);
              return call393
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func350.paramCounts = [
            3,
          ];
          func350.variableArities = [
            false,
          ];
          obj281.methods["drawWithSize"] = func350;
          func350.definitionLine = 32;
          func350.definitionModule = "kitty";
          var func394 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func394.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 45
              var string395 = new GraceString(" (500, 500)...");
              onSelf = true;
              var call397 = callmethod(this, "imgTag", [0]);
              var call398 = callmethod(call397,"src", [0]);
              var string400 = new GraceString("DRAWING BACKGROUND: ");
              var opresult402 = callmethod(string400, "++", [1], call398);
              var opresult404 = callmethod(opresult402, "++", [1], string395);
              var call405 = Grace_print(opresult404);
              lineNumber = 46
              onSelf = true;
              var call406 = callmethod(this, "imgTag", [0]);
              onSelf = true;
              var call407 = callmethod(this, "imgTag", [0]);
              var call408 = callmethod(call407,"width", [0]);
              onSelf = true;
              var call409 = callmethod(this, "imgTag", [0]);
              var call410 = callmethod(call409,"height", [0]);
              var call411 = callmethod(var_ctx,"drawImage", [9], call406, new GraceNum(0), new GraceNum(0), call408, call410, new GraceNum(0), new GraceNum(0), new GraceNum(500), new GraceNum(500));
              lineNumber = 47
              var string412 = new GraceString(" DRAWN");
              onSelf = true;
              var call414 = callmethod(this, "imgTag", [0]);
              var call415 = callmethod(call414,"src", [0]);
              var string417 = new GraceString("BACKGROUND: ");
              var opresult419 = callmethod(string417, "++", [1], call415);
              var opresult421 = callmethod(opresult419, "++", [1], string412);
              var call422 = Grace_print(opresult421);
              return call422
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func394.paramCounts = [
            1,
          ];
          func394.variableArities = [
            false,
          ];
          obj281.methods["drawBackground"] = func394;
          func394.definitionLine = 44;
          func394.definitionModule = "kitty";
          var func423 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            var var_dx = arguments[curarg];
            curarg++;
            var var_dy = arguments[curarg];
            curarg++;
            var var_rot = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func423.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 51
              var string424 = new GraceString(")...");
              onSelf = true;
              var call426 = callmethod(this, "height", [0]);
              var string428 = new GraceString(", ");
              onSelf = true;
              var call430 = callmethod(this, "width", [0]);
              var string432 = new GraceString(" (");
              onSelf = true;
              var call434 = callmethod(this, "imgTag", [0]);
              var call435 = callmethod(call434,"src", [0]);
              var string437 = new GraceString("DRAWING IMAGE: ");
              var opresult439 = callmethod(string437, "++", [1], call435);
              var opresult441 = callmethod(opresult439, "++", [1], string432);
              var opresult443 = callmethod(opresult441, "++", [1], call430);
              var opresult445 = callmethod(opresult443, "++", [1], string428);
              var opresult447 = callmethod(opresult445, "++", [1], call426);
              var opresult449 = callmethod(opresult447, "++", [1], string424);
              var call450 = Grace_print(opresult449);
              lineNumber = 52
              var call451 = callmethod(var_ctx,"save", [0]);
              lineNumber = 53
              var call452 = callmethod(var_ctx,"translate", [2], var_dx, var_dy);
              lineNumber = 54
              var prod456 = callmethod(var_rot, "*", [1], new GraceNum(180));
              var quotient458 = callmethod(prod456, "/", [1], new GraceNum(3.14));
              var call459 = callmethod(var_ctx,"rotate", [1], quotient458);
              lineNumber = 55
              onSelf = true;
              var call460 = callmethod(this, "imgTag", [0]);
              onSelf = true;
              var call462 = callmethod(this, "width", [0]);
              var call463 = callmethod(call462,"prefix-", [0]);
              var quotient465 = callmethod(call463, "/", [1], new GraceNum(2));
              onSelf = true;
              var call467 = callmethod(this, "height", [0]);
              var call468 = callmethod(call467,"prefix-", [0]);
              var quotient470 = callmethod(call468, "/", [1], new GraceNum(2));
              onSelf = true;
              var call471 = callmethod(this, "width", [0]);
              onSelf = true;
              var call472 = callmethod(this, "height", [0]);
              var call473 = callmethod(var_ctx,"drawImage", [5], call460, quotient465, quotient470, call471, call472);
              lineNumber = 56
              var call474 = callmethod(var_ctx,"restore", [0]);
              lineNumber = 57
              var string475 = new GraceString(" DRAWN");
              onSelf = true;
              var call477 = callmethod(this, "imgTag", [0]);
              var call478 = callmethod(call477,"src", [0]);
              var string480 = new GraceString("IMAGE: ");
              var opresult482 = callmethod(string480, "++", [1], call478);
              var opresult484 = callmethod(opresult482, "++", [1], string475);
              var call485 = Grace_print(opresult484);
              return call485
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func423.paramCounts = [
            4,
          ];
          func423.variableArities = [
            false,
          ];
          obj281.methods["draw"] = func423;
          func423.definitionLine = 50;
          func423.definitionModule = "kitty";
          sourceObject = obj281;
          lineNumber = 15
          var string486 = new GraceString("...");
          var string489 = new GraceString("CREATING NEW IMAGE: ");
          var opresult491 = callmethod(string489, "++", [1], var_url__39__);
          var opresult493 = callmethod(opresult491, "++", [1], string486);
          var call494 = Grace_print(opresult493);
          sourceObject = obj281;
          lineNumber = 16
          var string495 = new GraceString("img");
          var call496 = callmethod(var_dom,"document", [0]);
          var call497 = callmethod(call496,"createElement", [1], string495);
          obj281.data["imgTag"] = call497;
          var reader_kitty_imgTag_498 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_498.def = true;
          reader_kitty_imgTag_498.confidential = true;
          obj281.methods["imgTag"] = reader_kitty_imgTag_498;
          lineNumber = 16;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call497)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj281;
          lineNumber = 19
          lineNumber = 16
          lineNumber = 17
          onSelf = true;
          var call499 = callmethod(this, "imgTag", [0]);
          var call500 = callmethod(call499,"src:=", [1], var_url__39__);
          sourceObject = obj281;
          lineNumber = 19
          obj281.data["height"] = var_height__39__;
          var reader_kitty_height_501 = function() {
            return this.data["height"];
          }
          obj281.methods["height"] = reader_kitty_height_501;
          obj281.data["height"] = var_height__39__;
          var writer_kitty_height_501 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj281.methods["height:="] = writer_kitty_height_501;
          reader_kitty_height_501.confidential = true;
          writer_kitty_height_501.confidential = true;
          lineNumber = 20;
          moduleName = "kitty";
          lineNumber = 19
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_height__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj281.mutable = true;
          sourceObject = obj281;
          lineNumber = 20
          obj281.data["width"] = var_width__39__;
          var reader_kitty_width_502 = function() {
            return this.data["width"];
          }
          obj281.methods["width"] = reader_kitty_width_502;
          obj281.data["width"] = var_width__39__;
          var writer_kitty_width_502 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj281.methods["width:="] = writer_kitty_width_502;
          reader_kitty_width_502.confidential = true;
          writer_kitty_width_502.confidential = true;
          lineNumber = 22;
          moduleName = "kitty";
          lineNumber = 20
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_width__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj281.mutable = true;
          sourceObject = obj281;
          sourceObject = obj281;
          sourceObject = obj281;
          sourceObject = obj281;
          sourceObject = obj281;
          lineNumber = 60
          var string503 = new GraceString("");
          var string506 = new GraceString("CREATED NEW IMAGE: ");
          var opresult508 = callmethod(string506, "++", [1], var_url__39__);
          var opresult510 = callmethod(opresult508, "++", [1], string503);
          var call511 = Grace_print(opresult510);
          superDepth = origSuperDepth;
        }
        obj_init_281.apply(inheritingObject, []);
        return obj281
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj46.methods["new()object"] = func280;
    var func512 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 13
        var string513 = new GraceString("class KittyImage");
        return string513
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func512.paramCounts = [
    ];
    func512.variableArities = [
    ];
    obj46.methods["asDebugString"] = func512;
    func512.definitionLine = 13;
    func512.definitionModule = "kitty";
    sourceObject = obj46;
    sourceObject = obj46;
    superDepth = origSuperDepth;
  }
  obj_init_46.apply(obj46, []);
  var var_KittyImage = obj46;
  lineNumber = 63
  lineNumber = 70
  var func514 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func514.paramCounts[0])
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
  func514.paramCounts = [
    0,
  ];
  func514.variableArities = [
    false,
  ];
  this.methods["KittyEntity"] = func514;
  func514.definitionLine = 70;
  func514.definitionModule = "kitty";
  var obj515 = Grace_allocObject();
  obj515.definitionModule = "kitty";
  obj515.definitionLine = 70;
  obj515.outer = this;
  var reader_kitty_outer_516 = function() {
    return this.outer;
  }
  obj515.methods["outer"] = reader_kitty_outer_516;
  function obj_init_515() {
    var origSuperDepth = superDepth;
    superDepth = obj515;
    obj515.annotations = [];
    var func517 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func517.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj518 = Grace_allocObject();
        obj518.definitionModule = "kitty";
        obj518.definitionLine = 70;
        obj518.outer = this;
        var reader_kitty_outer_519 = function() {
          return this.outer;
        }
        obj518.methods["outer"] = reader_kitty_outer_519;
        function obj_init_518() {
          var origSuperDepth = superDepth;
          superDepth = obj518;
          obj518.annotations = [];
          var func520 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func520.paramCounts[0])
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
          func520.paramCounts = [
            0,
          ];
          func520.variableArities = [
            false,
          ];
          obj518.methods["awake"] = func520;
          func520.definitionLine = 83;
          func520.definitionModule = "kitty";
          var func521 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func521.paramCounts[0])
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
          func521.paramCounts = [
            0,
          ];
          func521.variableArities = [
            false,
          ];
          obj518.methods["start"] = func521;
          func521.definitionLine = 88;
          func521.definitionModule = "kitty";
          var func522 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func522.paramCounts[0])
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
          func522.paramCounts = [
            0,
          ];
          func522.variableArities = [
            false,
          ];
          obj518.methods["update"] = func522;
          func522.definitionLine = 93;
          func522.definitionModule = "kitty";
          var func523 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func523.paramCounts[0])
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
          func523.paramCounts = [
            0,
          ];
          func523.variableArities = [
            false,
          ];
          obj518.methods["onDestroy"] = func523;
          func523.definitionLine = 98;
          func523.definitionModule = "kitty";
          var func524 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func524.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 103
              var call525 = callmethod(var_ctx,"save", [0]);
              lineNumber = 104
              onSelf = true;
              var call526 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call527 = callmethod(this, "posY", [0]);
              var call528 = callmethod(var_ctx,"translate", [2], call526, call527);
              lineNumber = 105
              onSelf = true;
              var call529 = callmethod(this, "image", [0]);
              var call530 = callmethod(call529,"draw", [1], var_ctx);
              lineNumber = 106
              var call531 = callmethod(var_ctx,"restore", [0]);
              return call531
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func524.paramCounts = [
            1,
          ];
          func524.variableArities = [
            false,
          ];
          obj518.methods["draw"] = func524;
          func524.definitionLine = 102;
          func524.definitionModule = "kitty";
          var func532 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func532.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 110
              lineNumber = 106
              lineNumber = 110
              var call533 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call534 = callmethod(call533, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call535 = callmethod(call534, "Image", [3], var_image__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call536 = callmethod(this, "image:=", [1], call535);
              return call536
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func532.paramCounts = [
            1,
          ];
          func532.variableArities = [
            false,
          ];
          obj518.methods["setImage"] = func532;
          func532.definitionLine = 109;
          func532.definitionModule = "kitty";
          var func537 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func537.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 115
              lineNumber = 110
              lineNumber = 114
              onSelf = true;
              var call538 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 116
              lineNumber = 110
              lineNumber = 115
              onSelf = true;
              var call539 = callmethod(this, "posY:=", [1], var_y);
              return call539
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func537.paramCounts = [
            2,
          ];
          func537.variableArities = [
            false,
          ];
          obj518.methods["setLocation"] = func537;
          func537.definitionLine = 113;
          func537.definitionModule = "kitty";
          var func540 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func540.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 120
              lineNumber = 119
              onSelf = true;
              var call541 = callmethod(this, "posX", [0]);
              return call541
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
          obj518.methods["getX"] = func540;
          func540.definitionLine = 118;
          func540.definitionModule = "kitty";
          var func542 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func542.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 124
              lineNumber = 123
              onSelf = true;
              var call543 = callmethod(this, "posY", [0]);
              return call543
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func542.paramCounts = [
            0,
          ];
          func542.variableArities = [
            false,
          ];
          obj518.methods["getY"] = func542;
          func542.definitionLine = 122;
          func542.definitionModule = "kitty";
          var func544 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func544.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 128
              lineNumber = 127
              onSelf = true;
              var call545 = callmethod(this, "rotation", [0]);
              return call545
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func544.paramCounts = [
            0,
          ];
          func544.variableArities = [
            false,
          ];
          obj518.methods["getRotation"] = func544;
          func544.definitionLine = 126;
          func544.definitionModule = "kitty";
          sourceObject = obj518;
          lineNumber = 72
          var string546 = new GraceString(")...");
          var string549 = new GraceString(", ");
          var string552 = new GraceString("CREATING ENTITY AT (");
          var opresult554 = callmethod(string552, "++", [1], var_x__39__);
          var opresult556 = callmethod(opresult554, "++", [1], string549);
          var opresult558 = callmethod(opresult556, "++", [1], var_y__39__);
          var opresult560 = callmethod(opresult558, "++", [1], string546);
          var call561 = Grace_print(opresult560);
          sourceObject = obj518;
          lineNumber = 74
          obj518.data["posX"] = var_x__39__;
          var reader_kitty_posX_562 = function() {
            return this.data["posX"];
          }
          obj518.methods["posX"] = reader_kitty_posX_562;
          obj518.data["posX"] = var_x__39__;
          var writer_kitty_posX_562 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj518.methods["posX:="] = writer_kitty_posX_562;
          reader_kitty_posX_562.confidential = true;
          writer_kitty_posX_562.confidential = true;
          lineNumber = 75;
          moduleName = "kitty";
          lineNumber = 74
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj518.mutable = true;
          sourceObject = obj518;
          lineNumber = 75
          obj518.data["posY"] = var_y__39__;
          var reader_kitty_posY_563 = function() {
            return this.data["posY"];
          }
          obj518.methods["posY"] = reader_kitty_posY_563;
          obj518.data["posY"] = var_y__39__;
          var writer_kitty_posY_563 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj518.methods["posY:="] = writer_kitty_posY_563;
          reader_kitty_posY_563.confidential = true;
          writer_kitty_posY_563.confidential = true;
          lineNumber = 76;
          moduleName = "kitty";
          lineNumber = 75
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj518.mutable = true;
          sourceObject = obj518;
          lineNumber = 76
          obj518.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_564 = function() {
            return this.data["rotation"];
          }
          obj518.methods["rotation"] = reader_kitty_rotation_564;
          obj518.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_564 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj518.methods["rotation:="] = writer_kitty_rotation_564;
          reader_kitty_rotation_564.confidential = true;
          writer_kitty_rotation_564.confidential = true;
          lineNumber = 78;
          moduleName = "kitty";
          lineNumber = 76
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj518.mutable = true;
          sourceObject = obj518;
          obj518.data["image"] = undefined;
          var reader_kitty_image_565 = function() {
            return this.data["image"];
          }
          obj518.methods["image"] = reader_kitty_image_565;
          obj518.data["image"] = undefined;
          var writer_kitty_image_565 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj518.methods["image:="] = writer_kitty_image_565;
          reader_kitty_image_565.confidential = true;
          writer_kitty_image_565.confidential = true;
          obj518.mutable = true;
          sourceObject = obj518;
          lineNumber = 80
          onSelf = true;
          var call566 = callmethod(this, "awake", [0]);
          sourceObject = obj518;
          sourceObject = obj518;
          sourceObject = obj518;
          sourceObject = obj518;
          sourceObject = obj518;
          sourceObject = obj518;
          sourceObject = obj518;
          sourceObject = obj518;
          sourceObject = obj518;
          sourceObject = obj518;
          sourceObject = obj518;
          lineNumber = 130
          var string567 = new GraceString("ENTITY CREATED");
          var call568 = Grace_print(string567);
          superDepth = origSuperDepth;
        }
        obj_init_518.apply(obj518, []);
        return obj518
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func517.paramCounts = [
      2,
    ];
    func517.variableArities = [
      false,
    ];
    obj515.methods["new"] = func517;
    func517.definitionLine = 70;
    func517.definitionModule = "kitty";
    var func569 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj570 = Grace_allocObject();
        obj570.definitionModule = "kitty";
        obj570.definitionLine = 70;
        var inho570 = inheritingObject;
        while (inho570.superobj) inho570 = inho570.superobj;
        inho570.superobj = obj570;
        obj570.data = inheritingObject.data;
        obj570.outer = this;
        var reader_kitty_outer_571 = function() {
          return this.outer;
        }
        obj570.methods["outer"] = reader_kitty_outer_571;
        function obj_init_570() {
          var origSuperDepth = superDepth;
          superDepth = obj570;
          obj570.annotations = [];
          var func572 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func572.paramCounts[0])
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
          func572.paramCounts = [
            0,
          ];
          func572.variableArities = [
            false,
          ];
          obj570.methods["awake"] = func572;
          func572.definitionLine = 83;
          func572.definitionModule = "kitty";
          var func573 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func573.paramCounts[0])
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
          func573.paramCounts = [
            0,
          ];
          func573.variableArities = [
            false,
          ];
          obj570.methods["start"] = func573;
          func573.definitionLine = 88;
          func573.definitionModule = "kitty";
          var func574 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func574.paramCounts[0])
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
          func574.paramCounts = [
            0,
          ];
          func574.variableArities = [
            false,
          ];
          obj570.methods["update"] = func574;
          func574.definitionLine = 93;
          func574.definitionModule = "kitty";
          var func575 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func575.paramCounts[0])
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
          func575.paramCounts = [
            0,
          ];
          func575.variableArities = [
            false,
          ];
          obj570.methods["onDestroy"] = func575;
          func575.definitionLine = 98;
          func575.definitionModule = "kitty";
          var func576 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func576.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 103
              var call577 = callmethod(var_ctx,"save", [0]);
              lineNumber = 104
              onSelf = true;
              var call578 = callmethod(this, "posX", [0]);
              onSelf = true;
              var call579 = callmethod(this, "posY", [0]);
              var call580 = callmethod(var_ctx,"translate", [2], call578, call579);
              lineNumber = 105
              onSelf = true;
              var call581 = callmethod(this, "image", [0]);
              var call582 = callmethod(call581,"draw", [1], var_ctx);
              lineNumber = 106
              var call583 = callmethod(var_ctx,"restore", [0]);
              return call583
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func576.paramCounts = [
            1,
          ];
          func576.variableArities = [
            false,
          ];
          obj570.methods["draw"] = func576;
          func576.definitionLine = 102;
          func576.definitionModule = "kitty";
          var func584 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func584.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 110
              lineNumber = 106
              lineNumber = 110
              var call585 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call586 = callmethod(call585, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call587 = callmethod(call586, "Image", [3], var_image__39__, new GraceNum(64), new GraceNum(64));
              onSelf = true;
              var call588 = callmethod(this, "image:=", [1], call587);
              return call588
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func584.paramCounts = [
            1,
          ];
          func584.variableArities = [
            false,
          ];
          obj570.methods["setImage"] = func584;
          func584.definitionLine = 109;
          func584.definitionModule = "kitty";
          var func589 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func589.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 115
              lineNumber = 110
              lineNumber = 114
              onSelf = true;
              var call590 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 116
              lineNumber = 110
              lineNumber = 115
              onSelf = true;
              var call591 = callmethod(this, "posY:=", [1], var_y);
              return call591
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func589.paramCounts = [
            2,
          ];
          func589.variableArities = [
            false,
          ];
          obj570.methods["setLocation"] = func589;
          func589.definitionLine = 113;
          func589.definitionModule = "kitty";
          var func592 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func592.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 120
              lineNumber = 119
              onSelf = true;
              var call593 = callmethod(this, "posX", [0]);
              return call593
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
          obj570.methods["getX"] = func592;
          func592.definitionLine = 118;
          func592.definitionModule = "kitty";
          var func594 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func594.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 124
              lineNumber = 123
              onSelf = true;
              var call595 = callmethod(this, "posY", [0]);
              return call595
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func594.paramCounts = [
            0,
          ];
          func594.variableArities = [
            false,
          ];
          obj570.methods["getY"] = func594;
          func594.definitionLine = 122;
          func594.definitionModule = "kitty";
          var func596 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func596.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 128
              lineNumber = 127
              onSelf = true;
              var call597 = callmethod(this, "rotation", [0]);
              return call597
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func596.paramCounts = [
            0,
          ];
          func596.variableArities = [
            false,
          ];
          obj570.methods["getRotation"] = func596;
          func596.definitionLine = 126;
          func596.definitionModule = "kitty";
          sourceObject = obj570;
          lineNumber = 72
          var string598 = new GraceString(")...");
          var string601 = new GraceString(", ");
          var string604 = new GraceString("CREATING ENTITY AT (");
          var opresult606 = callmethod(string604, "++", [1], var_x__39__);
          var opresult608 = callmethod(opresult606, "++", [1], string601);
          var opresult610 = callmethod(opresult608, "++", [1], var_y__39__);
          var opresult612 = callmethod(opresult610, "++", [1], string598);
          var call613 = Grace_print(opresult612);
          sourceObject = obj570;
          lineNumber = 74
          obj570.data["posX"] = var_x__39__;
          var reader_kitty_posX_614 = function() {
            return this.data["posX"];
          }
          obj570.methods["posX"] = reader_kitty_posX_614;
          obj570.data["posX"] = var_x__39__;
          var writer_kitty_posX_614 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj570.methods["posX:="] = writer_kitty_posX_614;
          reader_kitty_posX_614.confidential = true;
          writer_kitty_posX_614.confidential = true;
          lineNumber = 75;
          moduleName = "kitty";
          lineNumber = 74
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj570.mutable = true;
          sourceObject = obj570;
          lineNumber = 75
          obj570.data["posY"] = var_y__39__;
          var reader_kitty_posY_615 = function() {
            return this.data["posY"];
          }
          obj570.methods["posY"] = reader_kitty_posY_615;
          obj570.data["posY"] = var_y__39__;
          var writer_kitty_posY_615 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj570.methods["posY:="] = writer_kitty_posY_615;
          reader_kitty_posY_615.confidential = true;
          writer_kitty_posY_615.confidential = true;
          lineNumber = 76;
          moduleName = "kitty";
          lineNumber = 75
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj570.mutable = true;
          sourceObject = obj570;
          lineNumber = 76
          obj570.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_616 = function() {
            return this.data["rotation"];
          }
          obj570.methods["rotation"] = reader_kitty_rotation_616;
          obj570.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_616 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj570.methods["rotation:="] = writer_kitty_rotation_616;
          reader_kitty_rotation_616.confidential = true;
          writer_kitty_rotation_616.confidential = true;
          lineNumber = 78;
          moduleName = "kitty";
          lineNumber = 76
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj570.mutable = true;
          sourceObject = obj570;
          obj570.data["image"] = undefined;
          var reader_kitty_image_617 = function() {
            return this.data["image"];
          }
          obj570.methods["image"] = reader_kitty_image_617;
          obj570.data["image"] = undefined;
          var writer_kitty_image_617 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj570.methods["image:="] = writer_kitty_image_617;
          reader_kitty_image_617.confidential = true;
          writer_kitty_image_617.confidential = true;
          obj570.mutable = true;
          sourceObject = obj570;
          lineNumber = 80
          onSelf = true;
          var call618 = callmethod(this, "awake", [0]);
          sourceObject = obj570;
          sourceObject = obj570;
          sourceObject = obj570;
          sourceObject = obj570;
          sourceObject = obj570;
          sourceObject = obj570;
          sourceObject = obj570;
          sourceObject = obj570;
          sourceObject = obj570;
          sourceObject = obj570;
          sourceObject = obj570;
          lineNumber = 130
          var string619 = new GraceString("ENTITY CREATED");
          var call620 = Grace_print(string619);
          superDepth = origSuperDepth;
        }
        obj_init_570.apply(inheritingObject, []);
        return obj570
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj515.methods["new()object"] = func569;
    var func621 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 70
        var string622 = new GraceString("class KittyEntity");
        return string622
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func621.paramCounts = [
    ];
    func621.variableArities = [
    ];
    obj515.methods["asDebugString"] = func621;
    func621.definitionLine = 70;
    func621.definitionModule = "kitty";
    sourceObject = obj515;
    sourceObject = obj515;
    superDepth = origSuperDepth;
  }
  obj_init_515.apply(obj515, []);
  var var_KittyEntity = obj515;
  lineNumber = 133
  lineNumber = 140
  var func623 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func623.paramCounts[0])
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
  func623.paramCounts = [
    0,
  ];
  func623.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func623;
  func623.definitionLine = 140;
  func623.definitionModule = "kitty";
  var obj624 = Grace_allocObject();
  obj624.definitionModule = "kitty";
  obj624.definitionLine = 140;
  obj624.outer = this;
  var reader_kitty_outer_625 = function() {
    return this.outer;
  }
  obj624.methods["outer"] = reader_kitty_outer_625;
  function obj_init_624() {
    var origSuperDepth = superDepth;
    superDepth = obj624;
    obj624.annotations = [];
    var func626 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func626.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj627 = Grace_allocObject();
        obj627.definitionModule = "kitty";
        obj627.definitionLine = 140;
        obj627.outer = this;
        var reader_kitty_outer_628 = function() {
          return this.outer;
        }
        obj627.methods["outer"] = reader_kitty_outer_628;
        function obj_init_627() {
          var origSuperDepth = superDepth;
          superDepth = obj627;
          obj627.annotations = [];
          var func629 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func629.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 167
              var string630 = new GraceString("INITIALIZING WORLD...");
              var call631 = Grace_print(string630);
              lineNumber = 173
              var if632 = var_done;
              lineNumber = 169
              onSelf = true;
              var call633 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call633)) {
                lineNumber = 171
                lineNumber = 170
                var bool634 = new GraceBoolean(false)
                return bool634
              }
              lineNumber = 174
              lineNumber = 140
              lineNumber = 173
              var call635 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call636 = callmethod(this, "document:=", [1], call635);
              lineNumber = 174
              lineNumber = 173
              lineNumber = 174
              var string637 = new GraceString("standard-canvas");
              onSelf = true;
              var call638 = callmethod(this, "document", [0]);
              var call639 = callmethod(call638,"getElementById", [1], string637);
              onSelf = true;
              var call640 = callmethod(this, "canvas:=", [1], call639);
              lineNumber = 176
              lineNumber = 173
              lineNumber = 175
              onSelf = true;
              var call641 = callmethod(this, "canvas", [0]);
              var call642 = callmethod(call641,"width", [0]);
              onSelf = true;
              var call643 = callmethod(this, "canvasWidth:=", [1], call642);
              lineNumber = 178
              lineNumber = 175
              lineNumber = 176
              onSelf = true;
              var call644 = callmethod(this, "canvas", [0]);
              var call645 = callmethod(call644,"height", [0]);
              onSelf = true;
              var call646 = callmethod(this, "canvasHeight:=", [1], call645);
              lineNumber = 179
              lineNumber = 176
              lineNumber = 178
              var bool647 = new GraceBoolean(true)
              onSelf = true;
              var call648 = callmethod(this, "isInit:=", [1], bool647);
              lineNumber = 179
              var string649 = new GraceString("INITIALIZATION FINISHED");
              var call650 = Grace_print(string649);
              lineNumber = 180
              onSelf = true;
              var call651 = callmethod(this, "start", [0]);
              return call651
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func629.paramCounts = [
            0,
          ];
          func629.variableArities = [
            false,
          ];
          obj627.methods["init"] = func629;
          func629.definitionLine = 165;
          func629.definitionModule = "kitty";
          var func652 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func652.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 185
              var string653 = new GraceString("STARTING WORLD...");
              var call654 = Grace_print(string653);
              lineNumber = 186
              lineNumber = 176
              lineNumber = 186
              var string655 = new GraceString("canvas");
              var call656 = callmethod(var_dom,"document", [0]);
              var call657 = callmethod(call656,"createElement", [1], string655);
              onSelf = true;
              var call658 = callmethod(this, "backingCanvas:=", [1], call657);
              lineNumber = 188
              lineNumber = 186
              lineNumber = 187
              onSelf = true;
              var call659 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call660 = callmethod(this, "backingCanvas", [0]);
              var call661 = callmethod(call660,"height:=", [1], call659);
              lineNumber = 189
              lineNumber = 186
              lineNumber = 188
              onSelf = true;
              var call662 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call663 = callmethod(this, "backingCanvas", [0]);
              var call664 = callmethod(call663,"width:=", [1], call662);
              lineNumber = 189
              lineNumber = 186
              lineNumber = 189
              var string665 = new GraceString("2d");
              onSelf = true;
              var call666 = callmethod(this, "backingCanvas", [0]);
              var call667 = callmethod(call666,"getContext", [1], string665);
              onSelf = true;
              var call668 = callmethod(this, "backingContext:=", [1], call667);
              lineNumber = 190
              lineNumber = 186
              lineNumber = 190
              var string669 = new GraceString("2d");
              onSelf = true;
              var call670 = callmethod(this, "canvas", [0]);
              var call671 = callmethod(call670,"getContext", [1], string669);
              onSelf = true;
              var call672 = callmethod(this, "mctx:=", [1], call671);
              lineNumber = 191
              var string673 = new GraceString("WORLD STARTED");
              var call674 = Grace_print(string673);
              return call674
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func652.paramCounts = [
            0,
          ];
          func652.variableArities = [
            false,
          ];
          obj627.methods["start"] = func652;
          func652.definitionLine = 184;
          func652.definitionModule = "kitty";
          var func675 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func675.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 196
              var string676 = new GraceString("UPDATING WORLD...");
              var call677 = Grace_print(string676);
              lineNumber = 200
              lineNumber = 186
              lineNumber = 199
              onSelf = true;
              var call678 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call679 = callmethod(this, "mctx", [0]);
              var call680 = callmethod(call679,"fillStyle:=", [1], call678);
              lineNumber = 200
              onSelf = true;
              var call681 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call682 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call683 = callmethod(this, "mctx", [0]);
              var call684 = callmethod(call683,"fillRect", [4], new GraceNum(0), new GraceNum(0), call681, call682);
              lineNumber = 201
              onSelf = true;
              var call685 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call686 = callmethod(this, "mctx", [0]);
              var call687 = callmethod(call686,"drawImage", [3], call685, new GraceNum(0), new GraceNum(0));
              lineNumber = 202
              onSelf = true;
              var call688 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call690 = callmethod(this, "canvasWidth", [0]);
              var quotient692 = callmethod(call690, "/", [1], new GraceNum(2));
              onSelf = true;
              var call694 = callmethod(this, "canvasHeight", [0]);
              var quotient696 = callmethod(call694, "/", [1], new GraceNum(2));
              onSelf = true;
              var call697 = callmethod(this, "background", [0]);
              var call698 = callmethod(call697,"draw", [4], call688, quotient692, quotient696, new GraceNum(0));
              lineNumber = 205
              onSelf = true;
              var call699 = callmethod(this, "entities", [0]);
              lineNumber = 209
              var block700 = Grace_allocObject();
              block700.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block700.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block700.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block700.methods["match"] = GraceBlock_match;
              block700.methods["prefix?"] = GraceBlock_lift;
              block700.receiver = this;
              block700.className = 'block<kitty:209>';
              block700.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 206
                onSelf = true;
                var call701 = callmethod(this, "mctx", [0]);
                var call702 = callmethod(var_entity,"draw", [1], call701);
                return call702;
              };
              var call703 = callmethod(Grace_prelude,"for()do", [1, 1], call699, block700);
              lineNumber = 209
              var string704 = new GraceString("WORLD UPDATED");
              var call705 = Grace_print(string704);
              return call705
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func675.paramCounts = [
            0,
          ];
          func675.variableArities = [
            false,
          ];
          obj627.methods["update"] = func675;
          func675.definitionLine = 195;
          func675.definitionModule = "kitty";
          var func706 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func706.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 216
              lineNumber = 186
              lineNumber = 216
              onSelf = true;
              var call707 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call708 = callmethod(this, "canvasHeight", [0]);
              var call709 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call710 = callmethod(call709, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call711 = callmethod(call710, "Image", [3], var_background__39__, call707, call708);
              onSelf = true;
              var call712 = callmethod(this, "background:=", [1], call711);
              return call712
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func706.paramCounts = [
            1,
          ];
          func706.variableArities = [
            false,
          ];
          obj627.methods["setBackground"] = func706;
          func706.definitionLine = 215;
          func706.definitionModule = "kitty";
          var func713 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func713.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 220
              onSelf = true;
              var call714 = callmethod(this, "entities", [0]);
              var call715 = callmethod(call714,"push", [1], var_e);
              return call715
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func713.paramTypes = [];
          func713.paramTypes.push([]);
          func713.paramCounts = [
            1,
          ];
          func713.variableArities = [
            false,
          ];
          obj627.methods["addEntity"] = func713;
          func713.definitionLine = 219;
          func713.definitionModule = "kitty";
          sourceObject = obj627;
          lineNumber = 142
          var string716 = new GraceString("CREATING NEW WORLD...");
          var call717 = Grace_print(string716);
          sourceObject = obj627;
          obj627.data["background"] = undefined;
          var reader_kitty_background_718 = function() {
            return this.data["background"];
          }
          obj627.methods["background"] = reader_kitty_background_718;
          obj627.data["background"] = undefined;
          var writer_kitty_background_718 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj627.methods["background:="] = writer_kitty_background_718;
          reader_kitty_background_718.confidential = true;
          writer_kitty_background_718.confidential = true;
          obj627.mutable = true;
          sourceObject = obj627;
          lineNumber = 145
          var string719 = new GraceString("black");
          obj627.data["backgroundColour"] = string719;
          var reader_kitty_backgroundColour_720 = function() {
            return this.data["backgroundColour"];
          }
          obj627.methods["backgroundColour"] = reader_kitty_backgroundColour_720;
          obj627.data["backgroundColour"] = string719;
          var writer_kitty_backgroundColour_720 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj627.methods["backgroundColour:="] = writer_kitty_backgroundColour_720;
          reader_kitty_backgroundColour_720.confidential = true;
          writer_kitty_backgroundColour_720.confidential = true;
          lineNumber = 147;
          moduleName = "kitty";
          lineNumber = 145
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string719)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj627.mutable = true;
          sourceObject = obj627;
          obj627.data["document"] = undefined;
          var reader_kitty_document_721 = function() {
            return this.data["document"];
          }
          obj627.methods["document"] = reader_kitty_document_721;
          obj627.data["document"] = undefined;
          var writer_kitty_document_721 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj627.methods["document:="] = writer_kitty_document_721;
          reader_kitty_document_721.confidential = true;
          writer_kitty_document_721.confidential = true;
          obj627.mutable = true;
          sourceObject = obj627;
          obj627.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_722 = function() {
            return this.data["backingCanvas"];
          }
          obj627.methods["backingCanvas"] = reader_kitty_backingCanvas_722;
          obj627.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_722 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj627.methods["backingCanvas:="] = writer_kitty_backingCanvas_722;
          reader_kitty_backingCanvas_722.confidential = true;
          writer_kitty_backingCanvas_722.confidential = true;
          obj627.mutable = true;
          sourceObject = obj627;
          obj627.data["backingContext"] = undefined;
          var reader_kitty_backingContext_723 = function() {
            return this.data["backingContext"];
          }
          obj627.methods["backingContext"] = reader_kitty_backingContext_723;
          obj627.data["backingContext"] = undefined;
          var writer_kitty_backingContext_723 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj627.methods["backingContext:="] = writer_kitty_backingContext_723;
          reader_kitty_backingContext_723.confidential = true;
          writer_kitty_backingContext_723.confidential = true;
          obj627.mutable = true;
          sourceObject = obj627;
          obj627.data["canvas"] = undefined;
          var reader_kitty_canvas_724 = function() {
            return this.data["canvas"];
          }
          obj627.methods["canvas"] = reader_kitty_canvas_724;
          obj627.data["canvas"] = undefined;
          var writer_kitty_canvas_724 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj627.methods["canvas:="] = writer_kitty_canvas_724;
          reader_kitty_canvas_724.confidential = true;
          writer_kitty_canvas_724.confidential = true;
          obj627.mutable = true;
          sourceObject = obj627;
          obj627.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_725 = function() {
            return this.data["canvasWidth"];
          }
          obj627.methods["canvasWidth"] = reader_kitty_canvasWidth_725;
          obj627.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_725 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj627.methods["canvasWidth:="] = writer_kitty_canvasWidth_725;
          reader_kitty_canvasWidth_725.confidential = true;
          writer_kitty_canvasWidth_725.confidential = true;
          obj627.mutable = true;
          sourceObject = obj627;
          obj627.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_726 = function() {
            return this.data["canvasHeight"];
          }
          obj627.methods["canvasHeight"] = reader_kitty_canvasHeight_726;
          obj627.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_726 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj627.methods["canvasHeight:="] = writer_kitty_canvasHeight_726;
          reader_kitty_canvasHeight_726.confidential = true;
          writer_kitty_canvasHeight_726.confidential = true;
          obj627.mutable = true;
          sourceObject = obj627;
          lineNumber = 156
          var call727 = callmethod(var_collections,"list", [0]);
          var call728 = callmethod(call727,"new", [0]);
          obj627.data["entities"] = call728;
          var reader_kitty_entities_729 = function() {
            return this.data["entities"];
          }
          obj627.methods["entities"] = reader_kitty_entities_729;
          obj627.data["entities"] = call728;
          var writer_kitty_entities_729 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj627.methods["entities:="] = writer_kitty_entities_729;
          reader_kitty_entities_729.confidential = true;
          writer_kitty_entities_729.confidential = true;
          lineNumber = 158;
          moduleName = "kitty";
          lineNumber = 156
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call728)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj627.mutable = true;
          sourceObject = obj627;
          lineNumber = 158
          var bool730 = new GraceBoolean(false)
          obj627.data["isInit"] = bool730;
          var reader_kitty_isInit_731 = function() {
            return this.data["isInit"];
          }
          obj627.methods["isInit"] = reader_kitty_isInit_731;
          obj627.data["isInit"] = bool730;
          var writer_kitty_isInit_731 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj627.methods["isInit:="] = writer_kitty_isInit_731;
          reader_kitty_isInit_731.confidential = true;
          writer_kitty_isInit_731.confidential = true;
          lineNumber = 160;
          moduleName = "kitty";
          lineNumber = 158
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool730)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj627.mutable = true;
          sourceObject = obj627;
          obj627.data["mctx"] = undefined;
          var reader_kitty_mctx_732 = function() {
            return this.data["mctx"];
          }
          obj627.methods["mctx"] = reader_kitty_mctx_732;
          obj627.data["mctx"] = undefined;
          var writer_kitty_mctx_732 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj627.methods["mctx:="] = writer_kitty_mctx_732;
          reader_kitty_mctx_732.confidential = true;
          writer_kitty_mctx_732.confidential = true;
          obj627.mutable = true;
          sourceObject = obj627;
          lineNumber = 162
          onSelf = true;
          var call733 = callmethod(this, "init", [0]);
          sourceObject = obj627;
          sourceObject = obj627;
          sourceObject = obj627;
          sourceObject = obj627;
          sourceObject = obj627;
          sourceObject = obj627;
          lineNumber = 223
          var string734 = new GraceString("WORLD CREATED");
          var call735 = Grace_print(string734);
          superDepth = origSuperDepth;
        }
        obj_init_627.apply(obj627, []);
        return obj627
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func626.paramCounts = [
      0,
    ];
    func626.variableArities = [
      false,
    ];
    obj624.methods["new"] = func626;
    func626.definitionLine = 140;
    func626.definitionModule = "kitty";
    var func736 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj737 = Grace_allocObject();
        obj737.definitionModule = "kitty";
        obj737.definitionLine = 140;
        var inho737 = inheritingObject;
        while (inho737.superobj) inho737 = inho737.superobj;
        inho737.superobj = obj737;
        obj737.data = inheritingObject.data;
        obj737.outer = this;
        var reader_kitty_outer_738 = function() {
          return this.outer;
        }
        obj737.methods["outer"] = reader_kitty_outer_738;
        function obj_init_737() {
          var origSuperDepth = superDepth;
          superDepth = obj737;
          obj737.annotations = [];
          var func739 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func739.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 167
              var string740 = new GraceString("INITIALIZING WORLD...");
              var call741 = Grace_print(string740);
              lineNumber = 173
              var if742 = var_done;
              lineNumber = 169
              onSelf = true;
              var call743 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call743)) {
                lineNumber = 171
                lineNumber = 170
                var bool744 = new GraceBoolean(false)
                return bool744
              }
              lineNumber = 174
              lineNumber = 156
              lineNumber = 173
              var call745 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call746 = callmethod(this, "document:=", [1], call745);
              lineNumber = 174
              lineNumber = 173
              lineNumber = 174
              var string747 = new GraceString("standard-canvas");
              onSelf = true;
              var call748 = callmethod(this, "document", [0]);
              var call749 = callmethod(call748,"getElementById", [1], string747);
              onSelf = true;
              var call750 = callmethod(this, "canvas:=", [1], call749);
              lineNumber = 176
              lineNumber = 173
              lineNumber = 175
              onSelf = true;
              var call751 = callmethod(this, "canvas", [0]);
              var call752 = callmethod(call751,"width", [0]);
              onSelf = true;
              var call753 = callmethod(this, "canvasWidth:=", [1], call752);
              lineNumber = 178
              lineNumber = 175
              lineNumber = 176
              onSelf = true;
              var call754 = callmethod(this, "canvas", [0]);
              var call755 = callmethod(call754,"height", [0]);
              onSelf = true;
              var call756 = callmethod(this, "canvasHeight:=", [1], call755);
              lineNumber = 179
              lineNumber = 176
              lineNumber = 178
              var bool757 = new GraceBoolean(true)
              onSelf = true;
              var call758 = callmethod(this, "isInit:=", [1], bool757);
              lineNumber = 179
              var string759 = new GraceString("INITIALIZATION FINISHED");
              var call760 = Grace_print(string759);
              lineNumber = 180
              onSelf = true;
              var call761 = callmethod(this, "start", [0]);
              return call761
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func739.paramCounts = [
            0,
          ];
          func739.variableArities = [
            false,
          ];
          obj737.methods["init"] = func739;
          func739.definitionLine = 165;
          func739.definitionModule = "kitty";
          var func762 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func762.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 185
              var string763 = new GraceString("STARTING WORLD...");
              var call764 = Grace_print(string763);
              lineNumber = 186
              lineNumber = 176
              lineNumber = 186
              var string765 = new GraceString("canvas");
              var call766 = callmethod(var_dom,"document", [0]);
              var call767 = callmethod(call766,"createElement", [1], string765);
              onSelf = true;
              var call768 = callmethod(this, "backingCanvas:=", [1], call767);
              lineNumber = 188
              lineNumber = 186
              lineNumber = 187
              onSelf = true;
              var call769 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call770 = callmethod(this, "backingCanvas", [0]);
              var call771 = callmethod(call770,"height:=", [1], call769);
              lineNumber = 189
              lineNumber = 186
              lineNumber = 188
              onSelf = true;
              var call772 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call773 = callmethod(this, "backingCanvas", [0]);
              var call774 = callmethod(call773,"width:=", [1], call772);
              lineNumber = 189
              lineNumber = 186
              lineNumber = 189
              var string775 = new GraceString("2d");
              onSelf = true;
              var call776 = callmethod(this, "backingCanvas", [0]);
              var call777 = callmethod(call776,"getContext", [1], string775);
              onSelf = true;
              var call778 = callmethod(this, "backingContext:=", [1], call777);
              lineNumber = 190
              lineNumber = 186
              lineNumber = 190
              var string779 = new GraceString("2d");
              onSelf = true;
              var call780 = callmethod(this, "canvas", [0]);
              var call781 = callmethod(call780,"getContext", [1], string779);
              onSelf = true;
              var call782 = callmethod(this, "mctx:=", [1], call781);
              lineNumber = 191
              var string783 = new GraceString("WORLD STARTED");
              var call784 = Grace_print(string783);
              return call784
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func762.paramCounts = [
            0,
          ];
          func762.variableArities = [
            false,
          ];
          obj737.methods["start"] = func762;
          func762.definitionLine = 184;
          func762.definitionModule = "kitty";
          var func785 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func785.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 196
              var string786 = new GraceString("UPDATING WORLD...");
              var call787 = Grace_print(string786);
              lineNumber = 200
              lineNumber = 186
              lineNumber = 199
              onSelf = true;
              var call788 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call789 = callmethod(this, "mctx", [0]);
              var call790 = callmethod(call789,"fillStyle:=", [1], call788);
              lineNumber = 200
              onSelf = true;
              var call791 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call792 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call793 = callmethod(this, "mctx", [0]);
              var call794 = callmethod(call793,"fillRect", [4], new GraceNum(0), new GraceNum(0), call791, call792);
              lineNumber = 201
              onSelf = true;
              var call795 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call796 = callmethod(this, "mctx", [0]);
              var call797 = callmethod(call796,"drawImage", [3], call795, new GraceNum(0), new GraceNum(0));
              lineNumber = 202
              onSelf = true;
              var call798 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call800 = callmethod(this, "canvasWidth", [0]);
              var quotient802 = callmethod(call800, "/", [1], new GraceNum(2));
              onSelf = true;
              var call804 = callmethod(this, "canvasHeight", [0]);
              var quotient806 = callmethod(call804, "/", [1], new GraceNum(2));
              onSelf = true;
              var call807 = callmethod(this, "background", [0]);
              var call808 = callmethod(call807,"draw", [4], call798, quotient802, quotient806, new GraceNum(0));
              lineNumber = 205
              onSelf = true;
              var call809 = callmethod(this, "entities", [0]);
              lineNumber = 209
              var block810 = Grace_allocObject();
              block810.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block810.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block810.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block810.methods["match"] = GraceBlock_match;
              block810.methods["prefix?"] = GraceBlock_lift;
              block810.receiver = this;
              block810.className = 'block<kitty:209>';
              block810.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 206
                onSelf = true;
                var call811 = callmethod(this, "mctx", [0]);
                var call812 = callmethod(var_entity,"draw", [1], call811);
                return call812;
              };
              var call813 = callmethod(Grace_prelude,"for()do", [1, 1], call809, block810);
              lineNumber = 209
              var string814 = new GraceString("WORLD UPDATED");
              var call815 = Grace_print(string814);
              return call815
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func785.paramCounts = [
            0,
          ];
          func785.variableArities = [
            false,
          ];
          obj737.methods["update"] = func785;
          func785.definitionLine = 195;
          func785.definitionModule = "kitty";
          var func816 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func816.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 216
              lineNumber = 186
              lineNumber = 216
              onSelf = true;
              var call817 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call818 = callmethod(this, "canvasHeight", [0]);
              var call819 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call820 = callmethod(call819, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call821 = callmethod(call820, "Image", [3], var_background__39__, call817, call818);
              onSelf = true;
              var call822 = callmethod(this, "background:=", [1], call821);
              return call822
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func816.paramCounts = [
            1,
          ];
          func816.variableArities = [
            false,
          ];
          obj737.methods["setBackground"] = func816;
          func816.definitionLine = 215;
          func816.definitionModule = "kitty";
          var func823 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func823.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 220
              onSelf = true;
              var call824 = callmethod(this, "entities", [0]);
              var call825 = callmethod(call824,"push", [1], var_e);
              return call825
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func823.paramTypes = [];
          func823.paramTypes.push([]);
          func823.paramCounts = [
            1,
          ];
          func823.variableArities = [
            false,
          ];
          obj737.methods["addEntity"] = func823;
          func823.definitionLine = 219;
          func823.definitionModule = "kitty";
          sourceObject = obj737;
          lineNumber = 142
          var string826 = new GraceString("CREATING NEW WORLD...");
          var call827 = Grace_print(string826);
          sourceObject = obj737;
          obj737.data["background"] = undefined;
          var reader_kitty_background_828 = function() {
            return this.data["background"];
          }
          obj737.methods["background"] = reader_kitty_background_828;
          obj737.data["background"] = undefined;
          var writer_kitty_background_828 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj737.methods["background:="] = writer_kitty_background_828;
          reader_kitty_background_828.confidential = true;
          writer_kitty_background_828.confidential = true;
          obj737.mutable = true;
          sourceObject = obj737;
          lineNumber = 145
          var string829 = new GraceString("black");
          obj737.data["backgroundColour"] = string829;
          var reader_kitty_backgroundColour_830 = function() {
            return this.data["backgroundColour"];
          }
          obj737.methods["backgroundColour"] = reader_kitty_backgroundColour_830;
          obj737.data["backgroundColour"] = string829;
          var writer_kitty_backgroundColour_830 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj737.methods["backgroundColour:="] = writer_kitty_backgroundColour_830;
          reader_kitty_backgroundColour_830.confidential = true;
          writer_kitty_backgroundColour_830.confidential = true;
          lineNumber = 147;
          moduleName = "kitty";
          lineNumber = 145
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string829)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj737.mutable = true;
          sourceObject = obj737;
          obj737.data["document"] = undefined;
          var reader_kitty_document_831 = function() {
            return this.data["document"];
          }
          obj737.methods["document"] = reader_kitty_document_831;
          obj737.data["document"] = undefined;
          var writer_kitty_document_831 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj737.methods["document:="] = writer_kitty_document_831;
          reader_kitty_document_831.confidential = true;
          writer_kitty_document_831.confidential = true;
          obj737.mutable = true;
          sourceObject = obj737;
          obj737.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_832 = function() {
            return this.data["backingCanvas"];
          }
          obj737.methods["backingCanvas"] = reader_kitty_backingCanvas_832;
          obj737.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_832 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj737.methods["backingCanvas:="] = writer_kitty_backingCanvas_832;
          reader_kitty_backingCanvas_832.confidential = true;
          writer_kitty_backingCanvas_832.confidential = true;
          obj737.mutable = true;
          sourceObject = obj737;
          obj737.data["backingContext"] = undefined;
          var reader_kitty_backingContext_833 = function() {
            return this.data["backingContext"];
          }
          obj737.methods["backingContext"] = reader_kitty_backingContext_833;
          obj737.data["backingContext"] = undefined;
          var writer_kitty_backingContext_833 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj737.methods["backingContext:="] = writer_kitty_backingContext_833;
          reader_kitty_backingContext_833.confidential = true;
          writer_kitty_backingContext_833.confidential = true;
          obj737.mutable = true;
          sourceObject = obj737;
          obj737.data["canvas"] = undefined;
          var reader_kitty_canvas_834 = function() {
            return this.data["canvas"];
          }
          obj737.methods["canvas"] = reader_kitty_canvas_834;
          obj737.data["canvas"] = undefined;
          var writer_kitty_canvas_834 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj737.methods["canvas:="] = writer_kitty_canvas_834;
          reader_kitty_canvas_834.confidential = true;
          writer_kitty_canvas_834.confidential = true;
          obj737.mutable = true;
          sourceObject = obj737;
          obj737.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_835 = function() {
            return this.data["canvasWidth"];
          }
          obj737.methods["canvasWidth"] = reader_kitty_canvasWidth_835;
          obj737.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_835 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj737.methods["canvasWidth:="] = writer_kitty_canvasWidth_835;
          reader_kitty_canvasWidth_835.confidential = true;
          writer_kitty_canvasWidth_835.confidential = true;
          obj737.mutable = true;
          sourceObject = obj737;
          obj737.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_836 = function() {
            return this.data["canvasHeight"];
          }
          obj737.methods["canvasHeight"] = reader_kitty_canvasHeight_836;
          obj737.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_836 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj737.methods["canvasHeight:="] = writer_kitty_canvasHeight_836;
          reader_kitty_canvasHeight_836.confidential = true;
          writer_kitty_canvasHeight_836.confidential = true;
          obj737.mutable = true;
          sourceObject = obj737;
          lineNumber = 156
          var call837 = callmethod(var_collections,"list", [0]);
          var call838 = callmethod(call837,"new", [0]);
          obj737.data["entities"] = call838;
          var reader_kitty_entities_839 = function() {
            return this.data["entities"];
          }
          obj737.methods["entities"] = reader_kitty_entities_839;
          obj737.data["entities"] = call838;
          var writer_kitty_entities_839 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj737.methods["entities:="] = writer_kitty_entities_839;
          reader_kitty_entities_839.confidential = true;
          writer_kitty_entities_839.confidential = true;
          lineNumber = 158;
          moduleName = "kitty";
          lineNumber = 156
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call838)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj737.mutable = true;
          sourceObject = obj737;
          lineNumber = 158
          var bool840 = new GraceBoolean(false)
          obj737.data["isInit"] = bool840;
          var reader_kitty_isInit_841 = function() {
            return this.data["isInit"];
          }
          obj737.methods["isInit"] = reader_kitty_isInit_841;
          obj737.data["isInit"] = bool840;
          var writer_kitty_isInit_841 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj737.methods["isInit:="] = writer_kitty_isInit_841;
          reader_kitty_isInit_841.confidential = true;
          writer_kitty_isInit_841.confidential = true;
          lineNumber = 160;
          moduleName = "kitty";
          lineNumber = 158
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool840)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj737.mutable = true;
          sourceObject = obj737;
          obj737.data["mctx"] = undefined;
          var reader_kitty_mctx_842 = function() {
            return this.data["mctx"];
          }
          obj737.methods["mctx"] = reader_kitty_mctx_842;
          obj737.data["mctx"] = undefined;
          var writer_kitty_mctx_842 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj737.methods["mctx:="] = writer_kitty_mctx_842;
          reader_kitty_mctx_842.confidential = true;
          writer_kitty_mctx_842.confidential = true;
          obj737.mutable = true;
          sourceObject = obj737;
          lineNumber = 162
          onSelf = true;
          var call843 = callmethod(this, "init", [0]);
          sourceObject = obj737;
          sourceObject = obj737;
          sourceObject = obj737;
          sourceObject = obj737;
          sourceObject = obj737;
          sourceObject = obj737;
          lineNumber = 223
          var string844 = new GraceString("WORLD CREATED");
          var call845 = Grace_print(string844);
          superDepth = origSuperDepth;
        }
        obj_init_737.apply(inheritingObject, []);
        return obj737
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj624.methods["new()object"] = func736;
    var func846 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 140
        var string847 = new GraceString("class KittyWorld");
        return string847
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func846.paramCounts = [
    ];
    func846.variableArities = [
    ];
    obj624.methods["asDebugString"] = func846;
    func846.definitionLine = 140;
    func846.definitionModule = "kitty";
    sourceObject = obj624;
    sourceObject = obj624;
    superDepth = origSuperDepth;
  }
  obj_init_624.apply(obj624, []);
  var var_KittyWorld = obj624;
  lineNumber = 226
  lineNumber = 235
  lineNumber = 251
  lineNumber = 255
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
'dom',
'StandardPrelude',
];
if (gctCache)
  gctCache['kitty'] = "path:\n kitty\nclasses:\n KittyImage\n KittyEntity\n KittyWorld\nfresh:Entity:\n awake\n posX\n posY\n draw\n setImage\n rotation\n getRotation\n update\n setLocation\n start\n getX\n getY\n image:=\n posX:=\n posY:=\n image\n onDestroy\n rotation:=\nconfidential:\nconstructors-of:KittyWorld:\n new\nfresh:Image:\n drawOld\n drawBackground\n height:=\n width:=\n imgTag\n draw\n height\n width\n drawWithSize\nconstructors-of:KittyImage:\n new\nmodules:\n StandardPrelude\n mgcollections\nmethods-of:KittyEntity.new:\n awake\n posX\n posY\n draw\n setImage\n rotation\n getRotation\n update\n setLocation\n start\n getX\n getY\n image:=\n posX:=\n posY:=\n image\n rotation:=\n onDestroy\nfresh:World:\n setBackground\n init\n isInit\n mctx:=\n document:=\n backgroundColour\n canvasWidth\n document\n backingCanvas:=\n update\n entities\n canvasWidth:=\n backgroundColour:=\n canvasHeight:=\n start\n entities:=\n backingCanvas\n canvas:=\n backingContext\n canvasHeight\n background:=\n canvas\n background\n backingContext:=\n mctx\n addEntity\n isInit:=\nfresh-methods:\n Image\n Entity\n World\npublic:\n m_world\n m_world:=\n worldSet\n worldSet:=\n KittyImage\n Image\n KittyEntity\n Entity\n KittyWorld\n World\n start\n stop\n setWorld\nmethods-of:KittyImage.new:\n drawOld\n draw\n height:=\n width:=\n imgTag\n drawBackground\n height\n width\n drawWithSize\nmethods-of:KittyWorld.new:\n setBackground\n backingContext\n isInit\n canvasWidth:=\n document:=\n init\n canvasWidth\n document\n backingCanvas:=\n update\n entities\n mctx:=\n backgroundColour:=\n canvasHeight:=\n start\n mctx\n backingCanvas\n canvas:=\n backgroundColour\n canvasHeight\n background:=\n canvas\n background\n addEntity\n entities:=\n isInit:=\n backingContext:=\nconstructors-of:KittyEntity:\n new\n";
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
    "    method drawOld(ctx') {",
    "        print \"DRAWING IMAGE: {imgTag.src} ({width}, {height})...\"",
    "        ctx'.save",
    "        ctx'.translate(0, 0)",
    "        ctx'.rotate(-(180 + 180) / 180 * 3.1415)",
    "        ctx'.drawImage(imgTag, -width / 2, -height / 2, width, height)",
    "        ctx'.restore",
    "        print \"IMAGE: {imgTag.src} DRAWN\"",
    "    }",
    "    ",
    "    method drawWithSize(ctx', width', height') {",
    "        print \"DRAWING IMAGE: {imgTag.src} ({width'}, {height'})...\"",
    "        // ctx'.save",
    "        // ctx'.translate(0, 0)",
    "        // ctx'.rotate(-(180 + 180) / 180 * 3.1415)",
    "        // ctx.drawImage(img, 0, 0, img.width,    img.height,     // source rectangle",
    "        //            0, 0, canvas.width, canvas.height); // destination rectangle",
    "        ctx'.drawImage(imgTag, 0, 0, imgTag.width, imgTag.height, 0, 0, width', height')",
    "        ctx'.restore",
    "        print \"IMAGE: {imgTag.src} DRAWN\"",
    "    }",
    "",
    "    method drawBackground(ctx) {",
    "        print \"DRAWING BACKGROUND: {imgTag.src} (500, 500)...\"",
    "        ctx.drawImage(imgTag, 0, 0, imgTag.width, imgTag.height, 0, 0, 500, 500)",
    "        print \"BACKGROUND: {imgTag.src} DRAWN\"",
    "    }",
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
    "    method draw(ctx) {",
    "        ctx.save",
    "        ctx.translate(posX, posY)",
    "        image.draw(ctx)",
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
    "            entity->entity.draw(mctx)",
    "        }",
    "",
    "        print \"WORLD UPDATED\"",
    "    }",
    "",
    "    // method addBackground(url') {",
    "    //     background := Image(url')",
    "    // }",
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
    "method World() {",
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
