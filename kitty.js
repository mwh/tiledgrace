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
  lineNumber = 130
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
      lineNumber = 131
      var obj9 = Grace_allocObject();
      obj9.definitionModule = "kitty";
      obj9.definitionLine = 131;
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
        lineNumber = 132
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
  func8.definitionLine = 130;
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
      obj13.definitionLine = 131;
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
            var var_ctx__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func524.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 103
              onSelf = true;
              var call525 = callmethod(this, "image", [0]);
              var call526 = callmethod(call525,"draw", [1], var_ctx__39__);
              return call526
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
          var func527 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func527.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 108
              lineNumber = 70
              lineNumber = 107
              onSelf = true;
              var call528 = callmethod(this, "image:=", [1], var_image__39__);
              return call528
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func527.paramTypes = [];
          func527.paramTypes.push([]);
          func527.paramCounts = [
            1,
          ];
          func527.variableArities = [
            false,
          ];
          obj518.methods["setImage"] = func527;
          func527.definitionLine = 106;
          func527.definitionModule = "kitty";
          var func529 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func529.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 112
              lineNumber = 70
              lineNumber = 111
              onSelf = true;
              var call530 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 113
              lineNumber = 70
              lineNumber = 112
              onSelf = true;
              var call531 = callmethod(this, "posY:=", [1], var_y);
              return call531
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func529.paramCounts = [
            2,
          ];
          func529.variableArities = [
            false,
          ];
          obj518.methods["setLocation"] = func529;
          func529.definitionLine = 110;
          func529.definitionModule = "kitty";
          var func532 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func532.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 117
              lineNumber = 116
              onSelf = true;
              var call533 = callmethod(this, "posX", [0]);
              return call533
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
          obj518.methods["getX"] = func532;
          func532.definitionLine = 115;
          func532.definitionModule = "kitty";
          var func534 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func534.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 121
              lineNumber = 120
              onSelf = true;
              var call535 = callmethod(this, "posY", [0]);
              return call535
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func534.paramCounts = [
            0,
          ];
          func534.variableArities = [
            false,
          ];
          obj518.methods["getY"] = func534;
          func534.definitionLine = 119;
          func534.definitionModule = "kitty";
          var func536 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func536.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 125
              lineNumber = 124
              onSelf = true;
              var call537 = callmethod(this, "rotation", [0]);
              return call537
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func536.paramCounts = [
            0,
          ];
          func536.variableArities = [
            false,
          ];
          obj518.methods["getRotation"] = func536;
          func536.definitionLine = 123;
          func536.definitionModule = "kitty";
          sourceObject = obj518;
          lineNumber = 72
          var string538 = new GraceString(")...");
          var string541 = new GraceString(", ");
          var string544 = new GraceString("CREATING ENTITY AT (");
          var opresult546 = callmethod(string544, "++", [1], var_x__39__);
          var opresult548 = callmethod(opresult546, "++", [1], string541);
          var opresult550 = callmethod(opresult548, "++", [1], var_y__39__);
          var opresult552 = callmethod(opresult550, "++", [1], string538);
          var call553 = Grace_print(opresult552);
          sourceObject = obj518;
          lineNumber = 74
          obj518.data["posX"] = var_x__39__;
          var reader_kitty_posX_554 = function() {
            return this.data["posX"];
          }
          obj518.methods["posX"] = reader_kitty_posX_554;
          obj518.data["posX"] = var_x__39__;
          var writer_kitty_posX_554 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj518.methods["posX:="] = writer_kitty_posX_554;
          reader_kitty_posX_554.confidential = true;
          writer_kitty_posX_554.confidential = true;
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
          var reader_kitty_posY_555 = function() {
            return this.data["posY"];
          }
          obj518.methods["posY"] = reader_kitty_posY_555;
          obj518.data["posY"] = var_y__39__;
          var writer_kitty_posY_555 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj518.methods["posY:="] = writer_kitty_posY_555;
          reader_kitty_posY_555.confidential = true;
          writer_kitty_posY_555.confidential = true;
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
          var reader_kitty_rotation_556 = function() {
            return this.data["rotation"];
          }
          obj518.methods["rotation"] = reader_kitty_rotation_556;
          obj518.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_556 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj518.methods["rotation:="] = writer_kitty_rotation_556;
          reader_kitty_rotation_556.confidential = true;
          writer_kitty_rotation_556.confidential = true;
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
          var reader_kitty_image_557 = function() {
            return this.data["image"];
          }
          obj518.methods["image"] = reader_kitty_image_557;
          obj518.data["image"] = undefined;
          var writer_kitty_image_557 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj518.methods["image:="] = writer_kitty_image_557;
          reader_kitty_image_557.confidential = true;
          writer_kitty_image_557.confidential = true;
          obj518.mutable = true;
          sourceObject = obj518;
          lineNumber = 80
          onSelf = true;
          var call558 = callmethod(this, "awake", [0]);
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
          lineNumber = 127
          var string559 = new GraceString("ENTITY CREATED");
          var call560 = Grace_print(string559);
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
    var func561 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj562 = Grace_allocObject();
        obj562.definitionModule = "kitty";
        obj562.definitionLine = 70;
        var inho562 = inheritingObject;
        while (inho562.superobj) inho562 = inho562.superobj;
        inho562.superobj = obj562;
        obj562.data = inheritingObject.data;
        obj562.outer = this;
        var reader_kitty_outer_563 = function() {
          return this.outer;
        }
        obj562.methods["outer"] = reader_kitty_outer_563;
        function obj_init_562() {
          var origSuperDepth = superDepth;
          superDepth = obj562;
          obj562.annotations = [];
          var func564 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func564.paramCounts[0])
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
          func564.paramCounts = [
            0,
          ];
          func564.variableArities = [
            false,
          ];
          obj562.methods["awake"] = func564;
          func564.definitionLine = 83;
          func564.definitionModule = "kitty";
          var func565 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func565.paramCounts[0])
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
          func565.paramCounts = [
            0,
          ];
          func565.variableArities = [
            false,
          ];
          obj562.methods["start"] = func565;
          func565.definitionLine = 88;
          func565.definitionModule = "kitty";
          var func566 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func566.paramCounts[0])
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
          func566.paramCounts = [
            0,
          ];
          func566.variableArities = [
            false,
          ];
          obj562.methods["update"] = func566;
          func566.definitionLine = 93;
          func566.definitionModule = "kitty";
          var func567 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func567.paramCounts[0])
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
          func567.paramCounts = [
            0,
          ];
          func567.variableArities = [
            false,
          ];
          obj562.methods["onDestroy"] = func567;
          func567.definitionLine = 98;
          func567.definitionModule = "kitty";
          var func568 = function(argcv) {
            var curarg = 1;
            var var_ctx__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func568.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 103
              onSelf = true;
              var call569 = callmethod(this, "image", [0]);
              var call570 = callmethod(call569,"draw", [1], var_ctx__39__);
              return call570
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func568.paramCounts = [
            1,
          ];
          func568.variableArities = [
            false,
          ];
          obj562.methods["draw"] = func568;
          func568.definitionLine = 102;
          func568.definitionModule = "kitty";
          var func571 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func571.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 108
              lineNumber = 70
              lineNumber = 107
              onSelf = true;
              var call572 = callmethod(this, "image:=", [1], var_image__39__);
              return call572
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func571.paramTypes = [];
          func571.paramTypes.push([]);
          func571.paramCounts = [
            1,
          ];
          func571.variableArities = [
            false,
          ];
          obj562.methods["setImage"] = func571;
          func571.definitionLine = 106;
          func571.definitionModule = "kitty";
          var func573 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func573.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 112
              lineNumber = 70
              lineNumber = 111
              onSelf = true;
              var call574 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 113
              lineNumber = 70
              lineNumber = 112
              onSelf = true;
              var call575 = callmethod(this, "posY:=", [1], var_y);
              return call575
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func573.paramCounts = [
            2,
          ];
          func573.variableArities = [
            false,
          ];
          obj562.methods["setLocation"] = func573;
          func573.definitionLine = 110;
          func573.definitionModule = "kitty";
          var func576 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func576.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 117
              lineNumber = 116
              onSelf = true;
              var call577 = callmethod(this, "posX", [0]);
              return call577
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func576.paramCounts = [
            0,
          ];
          func576.variableArities = [
            false,
          ];
          obj562.methods["getX"] = func576;
          func576.definitionLine = 115;
          func576.definitionModule = "kitty";
          var func578 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func578.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 121
              lineNumber = 120
              onSelf = true;
              var call579 = callmethod(this, "posY", [0]);
              return call579
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func578.paramCounts = [
            0,
          ];
          func578.variableArities = [
            false,
          ];
          obj562.methods["getY"] = func578;
          func578.definitionLine = 119;
          func578.definitionModule = "kitty";
          var func580 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func580.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 125
              lineNumber = 124
              onSelf = true;
              var call581 = callmethod(this, "rotation", [0]);
              return call581
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
          obj562.methods["getRotation"] = func580;
          func580.definitionLine = 123;
          func580.definitionModule = "kitty";
          sourceObject = obj562;
          lineNumber = 72
          var string582 = new GraceString(")...");
          var string585 = new GraceString(", ");
          var string588 = new GraceString("CREATING ENTITY AT (");
          var opresult590 = callmethod(string588, "++", [1], var_x__39__);
          var opresult592 = callmethod(opresult590, "++", [1], string585);
          var opresult594 = callmethod(opresult592, "++", [1], var_y__39__);
          var opresult596 = callmethod(opresult594, "++", [1], string582);
          var call597 = Grace_print(opresult596);
          sourceObject = obj562;
          lineNumber = 74
          obj562.data["posX"] = var_x__39__;
          var reader_kitty_posX_598 = function() {
            return this.data["posX"];
          }
          obj562.methods["posX"] = reader_kitty_posX_598;
          obj562.data["posX"] = var_x__39__;
          var writer_kitty_posX_598 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj562.methods["posX:="] = writer_kitty_posX_598;
          reader_kitty_posX_598.confidential = true;
          writer_kitty_posX_598.confidential = true;
          lineNumber = 75;
          moduleName = "kitty";
          lineNumber = 74
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj562.mutable = true;
          sourceObject = obj562;
          lineNumber = 75
          obj562.data["posY"] = var_y__39__;
          var reader_kitty_posY_599 = function() {
            return this.data["posY"];
          }
          obj562.methods["posY"] = reader_kitty_posY_599;
          obj562.data["posY"] = var_y__39__;
          var writer_kitty_posY_599 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj562.methods["posY:="] = writer_kitty_posY_599;
          reader_kitty_posY_599.confidential = true;
          writer_kitty_posY_599.confidential = true;
          lineNumber = 76;
          moduleName = "kitty";
          lineNumber = 75
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj562.mutable = true;
          sourceObject = obj562;
          lineNumber = 76
          obj562.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_600 = function() {
            return this.data["rotation"];
          }
          obj562.methods["rotation"] = reader_kitty_rotation_600;
          obj562.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_600 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj562.methods["rotation:="] = writer_kitty_rotation_600;
          reader_kitty_rotation_600.confidential = true;
          writer_kitty_rotation_600.confidential = true;
          lineNumber = 78;
          moduleName = "kitty";
          lineNumber = 76
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj562.mutable = true;
          sourceObject = obj562;
          obj562.data["image"] = undefined;
          var reader_kitty_image_601 = function() {
            return this.data["image"];
          }
          obj562.methods["image"] = reader_kitty_image_601;
          obj562.data["image"] = undefined;
          var writer_kitty_image_601 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj562.methods["image:="] = writer_kitty_image_601;
          reader_kitty_image_601.confidential = true;
          writer_kitty_image_601.confidential = true;
          obj562.mutable = true;
          sourceObject = obj562;
          lineNumber = 80
          onSelf = true;
          var call602 = callmethod(this, "awake", [0]);
          sourceObject = obj562;
          sourceObject = obj562;
          sourceObject = obj562;
          sourceObject = obj562;
          sourceObject = obj562;
          sourceObject = obj562;
          sourceObject = obj562;
          sourceObject = obj562;
          sourceObject = obj562;
          sourceObject = obj562;
          sourceObject = obj562;
          lineNumber = 127
          var string603 = new GraceString("ENTITY CREATED");
          var call604 = Grace_print(string603);
          superDepth = origSuperDepth;
        }
        obj_init_562.apply(inheritingObject, []);
        return obj562
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj515.methods["new()object"] = func561;
    var func605 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 70
        var string606 = new GraceString("class KittyEntity");
        return string606
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func605.paramCounts = [
    ];
    func605.variableArities = [
    ];
    obj515.methods["asDebugString"] = func605;
    func605.definitionLine = 70;
    func605.definitionModule = "kitty";
    sourceObject = obj515;
    sourceObject = obj515;
    superDepth = origSuperDepth;
  }
  obj_init_515.apply(obj515, []);
  var var_KittyEntity = obj515;
  lineNumber = 130
  lineNumber = 137
  var func607 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func607.paramCounts[0])
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
  func607.paramCounts = [
    0,
  ];
  func607.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func607;
  func607.definitionLine = 137;
  func607.definitionModule = "kitty";
  var obj608 = Grace_allocObject();
  obj608.definitionModule = "kitty";
  obj608.definitionLine = 137;
  obj608.outer = this;
  var reader_kitty_outer_609 = function() {
    return this.outer;
  }
  obj608.methods["outer"] = reader_kitty_outer_609;
  function obj_init_608() {
    var origSuperDepth = superDepth;
    superDepth = obj608;
    obj608.annotations = [];
    var func610 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func610.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj611 = Grace_allocObject();
        obj611.definitionModule = "kitty";
        obj611.definitionLine = 137;
        obj611.outer = this;
        var reader_kitty_outer_612 = function() {
          return this.outer;
        }
        obj611.methods["outer"] = reader_kitty_outer_612;
        function obj_init_611() {
          var origSuperDepth = superDepth;
          superDepth = obj611;
          obj611.annotations = [];
          var func613 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func613.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 164
              var string614 = new GraceString("INITIALIZING WORLD...");
              var call615 = Grace_print(string614);
              lineNumber = 170
              var if616 = var_done;
              lineNumber = 166
              onSelf = true;
              var call617 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call617)) {
                lineNumber = 168
                lineNumber = 167
                var bool618 = new GraceBoolean(false)
                return bool618
              }
              lineNumber = 171
              lineNumber = 137
              lineNumber = 170
              var call619 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call620 = callmethod(this, "document:=", [1], call619);
              lineNumber = 171
              lineNumber = 170
              lineNumber = 171
              var string621 = new GraceString("standard-canvas");
              onSelf = true;
              var call622 = callmethod(this, "document", [0]);
              var call623 = callmethod(call622,"getElementById", [1], string621);
              onSelf = true;
              var call624 = callmethod(this, "canvas:=", [1], call623);
              lineNumber = 173
              lineNumber = 170
              lineNumber = 172
              onSelf = true;
              var call625 = callmethod(this, "canvas", [0]);
              var call626 = callmethod(call625,"width", [0]);
              onSelf = true;
              var call627 = callmethod(this, "canvasWidth:=", [1], call626);
              lineNumber = 175
              lineNumber = 172
              lineNumber = 173
              onSelf = true;
              var call628 = callmethod(this, "canvas", [0]);
              var call629 = callmethod(call628,"height", [0]);
              onSelf = true;
              var call630 = callmethod(this, "canvasHeight:=", [1], call629);
              lineNumber = 176
              lineNumber = 173
              lineNumber = 175
              var bool631 = new GraceBoolean(true)
              onSelf = true;
              var call632 = callmethod(this, "isInit:=", [1], bool631);
              lineNumber = 176
              var string633 = new GraceString("INITIALIZATION FINISHED");
              var call634 = Grace_print(string633);
              lineNumber = 177
              onSelf = true;
              var call635 = callmethod(this, "start", [0]);
              return call635
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
          obj611.methods["init"] = func613;
          func613.definitionLine = 162;
          func613.definitionModule = "kitty";
          var func636 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func636.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 182
              var string637 = new GraceString("STARTING WORLD...");
              var call638 = Grace_print(string637);
              lineNumber = 183
              lineNumber = 173
              lineNumber = 183
              var string639 = new GraceString("canvas");
              var call640 = callmethod(var_dom,"document", [0]);
              var call641 = callmethod(call640,"createElement", [1], string639);
              onSelf = true;
              var call642 = callmethod(this, "backingCanvas:=", [1], call641);
              lineNumber = 185
              lineNumber = 183
              lineNumber = 184
              onSelf = true;
              var call643 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call644 = callmethod(this, "backingCanvas", [0]);
              var call645 = callmethod(call644,"height:=", [1], call643);
              lineNumber = 186
              lineNumber = 183
              lineNumber = 185
              onSelf = true;
              var call646 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call647 = callmethod(this, "backingCanvas", [0]);
              var call648 = callmethod(call647,"width:=", [1], call646);
              lineNumber = 186
              lineNumber = 183
              lineNumber = 186
              var string649 = new GraceString("2d");
              onSelf = true;
              var call650 = callmethod(this, "backingCanvas", [0]);
              var call651 = callmethod(call650,"getContext", [1], string649);
              onSelf = true;
              var call652 = callmethod(this, "backingContext:=", [1], call651);
              lineNumber = 187
              lineNumber = 183
              lineNumber = 187
              var string653 = new GraceString("2d");
              onSelf = true;
              var call654 = callmethod(this, "canvas", [0]);
              var call655 = callmethod(call654,"getContext", [1], string653);
              onSelf = true;
              var call656 = callmethod(this, "mctx:=", [1], call655);
              lineNumber = 188
              var string657 = new GraceString("WORLD STARTED");
              var call658 = Grace_print(string657);
              return call658
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func636.paramCounts = [
            0,
          ];
          func636.variableArities = [
            false,
          ];
          obj611.methods["start"] = func636;
          func636.definitionLine = 181;
          func636.definitionModule = "kitty";
          var func659 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func659.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 193
              var string660 = new GraceString("UPDATING WORLD...");
              var call661 = Grace_print(string660);
              lineNumber = 197
              lineNumber = 183
              lineNumber = 196
              onSelf = true;
              var call662 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call663 = callmethod(this, "mctx", [0]);
              var call664 = callmethod(call663,"fillStyle:=", [1], call662);
              lineNumber = 197
              onSelf = true;
              var call665 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call666 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call667 = callmethod(this, "mctx", [0]);
              var call668 = callmethod(call667,"fillRect", [4], new GraceNum(0), new GraceNum(0), call665, call666);
              lineNumber = 198
              onSelf = true;
              var call669 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call670 = callmethod(this, "mctx", [0]);
              var call671 = callmethod(call670,"drawImage", [3], call669, new GraceNum(0), new GraceNum(0));
              lineNumber = 202
              onSelf = true;
              var call672 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call674 = callmethod(this, "canvasWidth", [0]);
              var quotient676 = callmethod(call674, "/", [1], new GraceNum(2));
              onSelf = true;
              var call678 = callmethod(this, "canvasHeight", [0]);
              var quotient680 = callmethod(call678, "/", [1], new GraceNum(2));
              onSelf = true;
              var call681 = callmethod(this, "background", [0]);
              var call682 = callmethod(call681,"draw", [4], call672, quotient676, quotient680, new GraceNum(0));
              lineNumber = 209
              var string683 = new GraceString("WORLD UPDATED");
              var call684 = Grace_print(string683);
              return call684
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func659.paramCounts = [
            0,
          ];
          func659.variableArities = [
            false,
          ];
          obj611.methods["update"] = func659;
          func659.definitionLine = 192;
          func659.definitionModule = "kitty";
          var func685 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func685.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 216
              lineNumber = 183
              lineNumber = 216
              onSelf = true;
              var call686 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call687 = callmethod(this, "canvasHeight", [0]);
              var call688 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call689 = callmethod(call688, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call690 = callmethod(call689, "Image", [3], var_background__39__, call686, call687);
              onSelf = true;
              var call691 = callmethod(this, "background:=", [1], call690);
              return call691
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func685.paramCounts = [
            1,
          ];
          func685.variableArities = [
            false,
          ];
          obj611.methods["setBackground"] = func685;
          func685.definitionLine = 215;
          func685.definitionModule = "kitty";
          var func692 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func692.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 220
              onSelf = true;
              var call693 = callmethod(this, "entities", [0]);
              var call694 = callmethod(call693,"push", [1], var_e);
              return call694
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func692.paramTypes = [];
          func692.paramTypes.push([]);
          func692.paramCounts = [
            1,
          ];
          func692.variableArities = [
            false,
          ];
          obj611.methods["addEntity"] = func692;
          func692.definitionLine = 219;
          func692.definitionModule = "kitty";
          sourceObject = obj611;
          lineNumber = 139
          var string695 = new GraceString("CREATING NEW WORLD...");
          var call696 = Grace_print(string695);
          sourceObject = obj611;
          obj611.data["background"] = undefined;
          var reader_kitty_background_697 = function() {
            return this.data["background"];
          }
          obj611.methods["background"] = reader_kitty_background_697;
          obj611.data["background"] = undefined;
          var writer_kitty_background_697 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj611.methods["background:="] = writer_kitty_background_697;
          reader_kitty_background_697.confidential = true;
          writer_kitty_background_697.confidential = true;
          obj611.mutable = true;
          sourceObject = obj611;
          lineNumber = 142
          var string698 = new GraceString("black");
          obj611.data["backgroundColour"] = string698;
          var reader_kitty_backgroundColour_699 = function() {
            return this.data["backgroundColour"];
          }
          obj611.methods["backgroundColour"] = reader_kitty_backgroundColour_699;
          obj611.data["backgroundColour"] = string698;
          var writer_kitty_backgroundColour_699 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj611.methods["backgroundColour:="] = writer_kitty_backgroundColour_699;
          reader_kitty_backgroundColour_699.confidential = true;
          writer_kitty_backgroundColour_699.confidential = true;
          lineNumber = 144;
          moduleName = "kitty";
          lineNumber = 142
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string698)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj611.mutable = true;
          sourceObject = obj611;
          obj611.data["document"] = undefined;
          var reader_kitty_document_700 = function() {
            return this.data["document"];
          }
          obj611.methods["document"] = reader_kitty_document_700;
          obj611.data["document"] = undefined;
          var writer_kitty_document_700 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj611.methods["document:="] = writer_kitty_document_700;
          reader_kitty_document_700.confidential = true;
          writer_kitty_document_700.confidential = true;
          obj611.mutable = true;
          sourceObject = obj611;
          obj611.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_701 = function() {
            return this.data["backingCanvas"];
          }
          obj611.methods["backingCanvas"] = reader_kitty_backingCanvas_701;
          obj611.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_701 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj611.methods["backingCanvas:="] = writer_kitty_backingCanvas_701;
          reader_kitty_backingCanvas_701.confidential = true;
          writer_kitty_backingCanvas_701.confidential = true;
          obj611.mutable = true;
          sourceObject = obj611;
          obj611.data["backingContext"] = undefined;
          var reader_kitty_backingContext_702 = function() {
            return this.data["backingContext"];
          }
          obj611.methods["backingContext"] = reader_kitty_backingContext_702;
          obj611.data["backingContext"] = undefined;
          var writer_kitty_backingContext_702 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj611.methods["backingContext:="] = writer_kitty_backingContext_702;
          reader_kitty_backingContext_702.confidential = true;
          writer_kitty_backingContext_702.confidential = true;
          obj611.mutable = true;
          sourceObject = obj611;
          obj611.data["canvas"] = undefined;
          var reader_kitty_canvas_703 = function() {
            return this.data["canvas"];
          }
          obj611.methods["canvas"] = reader_kitty_canvas_703;
          obj611.data["canvas"] = undefined;
          var writer_kitty_canvas_703 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj611.methods["canvas:="] = writer_kitty_canvas_703;
          reader_kitty_canvas_703.confidential = true;
          writer_kitty_canvas_703.confidential = true;
          obj611.mutable = true;
          sourceObject = obj611;
          obj611.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_704 = function() {
            return this.data["canvasWidth"];
          }
          obj611.methods["canvasWidth"] = reader_kitty_canvasWidth_704;
          obj611.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_704 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj611.methods["canvasWidth:="] = writer_kitty_canvasWidth_704;
          reader_kitty_canvasWidth_704.confidential = true;
          writer_kitty_canvasWidth_704.confidential = true;
          obj611.mutable = true;
          sourceObject = obj611;
          obj611.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_705 = function() {
            return this.data["canvasHeight"];
          }
          obj611.methods["canvasHeight"] = reader_kitty_canvasHeight_705;
          obj611.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_705 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj611.methods["canvasHeight:="] = writer_kitty_canvasHeight_705;
          reader_kitty_canvasHeight_705.confidential = true;
          writer_kitty_canvasHeight_705.confidential = true;
          obj611.mutable = true;
          sourceObject = obj611;
          lineNumber = 153
          var call706 = callmethod(var_collections,"list", [0]);
          var call707 = callmethod(call706,"new", [0]);
          obj611.data["entities"] = call707;
          var reader_kitty_entities_708 = function() {
            return this.data["entities"];
          }
          obj611.methods["entities"] = reader_kitty_entities_708;
          obj611.data["entities"] = call707;
          var writer_kitty_entities_708 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj611.methods["entities:="] = writer_kitty_entities_708;
          reader_kitty_entities_708.confidential = true;
          writer_kitty_entities_708.confidential = true;
          lineNumber = 155;
          moduleName = "kitty";
          lineNumber = 153
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call707)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj611.mutable = true;
          sourceObject = obj611;
          lineNumber = 155
          var bool709 = new GraceBoolean(false)
          obj611.data["isInit"] = bool709;
          var reader_kitty_isInit_710 = function() {
            return this.data["isInit"];
          }
          obj611.methods["isInit"] = reader_kitty_isInit_710;
          obj611.data["isInit"] = bool709;
          var writer_kitty_isInit_710 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj611.methods["isInit:="] = writer_kitty_isInit_710;
          reader_kitty_isInit_710.confidential = true;
          writer_kitty_isInit_710.confidential = true;
          lineNumber = 157;
          moduleName = "kitty";
          lineNumber = 155
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool709)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj611.mutable = true;
          sourceObject = obj611;
          obj611.data["mctx"] = undefined;
          var reader_kitty_mctx_711 = function() {
            return this.data["mctx"];
          }
          obj611.methods["mctx"] = reader_kitty_mctx_711;
          obj611.data["mctx"] = undefined;
          var writer_kitty_mctx_711 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj611.methods["mctx:="] = writer_kitty_mctx_711;
          reader_kitty_mctx_711.confidential = true;
          writer_kitty_mctx_711.confidential = true;
          obj611.mutable = true;
          sourceObject = obj611;
          lineNumber = 159
          onSelf = true;
          var call712 = callmethod(this, "init", [0]);
          sourceObject = obj611;
          sourceObject = obj611;
          sourceObject = obj611;
          sourceObject = obj611;
          sourceObject = obj611;
          sourceObject = obj611;
          lineNumber = 223
          var string713 = new GraceString("WORLD CREATED");
          var call714 = Grace_print(string713);
          superDepth = origSuperDepth;
        }
        obj_init_611.apply(obj611, []);
        return obj611
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func610.paramCounts = [
      0,
    ];
    func610.variableArities = [
      false,
    ];
    obj608.methods["new"] = func610;
    func610.definitionLine = 137;
    func610.definitionModule = "kitty";
    var func715 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj716 = Grace_allocObject();
        obj716.definitionModule = "kitty";
        obj716.definitionLine = 137;
        var inho716 = inheritingObject;
        while (inho716.superobj) inho716 = inho716.superobj;
        inho716.superobj = obj716;
        obj716.data = inheritingObject.data;
        obj716.outer = this;
        var reader_kitty_outer_717 = function() {
          return this.outer;
        }
        obj716.methods["outer"] = reader_kitty_outer_717;
        function obj_init_716() {
          var origSuperDepth = superDepth;
          superDepth = obj716;
          obj716.annotations = [];
          var func718 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func718.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 164
              var string719 = new GraceString("INITIALIZING WORLD...");
              var call720 = Grace_print(string719);
              lineNumber = 170
              var if721 = var_done;
              lineNumber = 166
              onSelf = true;
              var call722 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call722)) {
                lineNumber = 168
                lineNumber = 167
                var bool723 = new GraceBoolean(false)
                return bool723
              }
              lineNumber = 171
              lineNumber = 153
              lineNumber = 170
              var call724 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call725 = callmethod(this, "document:=", [1], call724);
              lineNumber = 171
              lineNumber = 170
              lineNumber = 171
              var string726 = new GraceString("standard-canvas");
              onSelf = true;
              var call727 = callmethod(this, "document", [0]);
              var call728 = callmethod(call727,"getElementById", [1], string726);
              onSelf = true;
              var call729 = callmethod(this, "canvas:=", [1], call728);
              lineNumber = 173
              lineNumber = 170
              lineNumber = 172
              onSelf = true;
              var call730 = callmethod(this, "canvas", [0]);
              var call731 = callmethod(call730,"width", [0]);
              onSelf = true;
              var call732 = callmethod(this, "canvasWidth:=", [1], call731);
              lineNumber = 175
              lineNumber = 172
              lineNumber = 173
              onSelf = true;
              var call733 = callmethod(this, "canvas", [0]);
              var call734 = callmethod(call733,"height", [0]);
              onSelf = true;
              var call735 = callmethod(this, "canvasHeight:=", [1], call734);
              lineNumber = 176
              lineNumber = 173
              lineNumber = 175
              var bool736 = new GraceBoolean(true)
              onSelf = true;
              var call737 = callmethod(this, "isInit:=", [1], bool736);
              lineNumber = 176
              var string738 = new GraceString("INITIALIZATION FINISHED");
              var call739 = Grace_print(string738);
              lineNumber = 177
              onSelf = true;
              var call740 = callmethod(this, "start", [0]);
              return call740
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func718.paramCounts = [
            0,
          ];
          func718.variableArities = [
            false,
          ];
          obj716.methods["init"] = func718;
          func718.definitionLine = 162;
          func718.definitionModule = "kitty";
          var func741 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func741.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 182
              var string742 = new GraceString("STARTING WORLD...");
              var call743 = Grace_print(string742);
              lineNumber = 183
              lineNumber = 173
              lineNumber = 183
              var string744 = new GraceString("canvas");
              var call745 = callmethod(var_dom,"document", [0]);
              var call746 = callmethod(call745,"createElement", [1], string744);
              onSelf = true;
              var call747 = callmethod(this, "backingCanvas:=", [1], call746);
              lineNumber = 185
              lineNumber = 183
              lineNumber = 184
              onSelf = true;
              var call748 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call749 = callmethod(this, "backingCanvas", [0]);
              var call750 = callmethod(call749,"height:=", [1], call748);
              lineNumber = 186
              lineNumber = 183
              lineNumber = 185
              onSelf = true;
              var call751 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call752 = callmethod(this, "backingCanvas", [0]);
              var call753 = callmethod(call752,"width:=", [1], call751);
              lineNumber = 186
              lineNumber = 183
              lineNumber = 186
              var string754 = new GraceString("2d");
              onSelf = true;
              var call755 = callmethod(this, "backingCanvas", [0]);
              var call756 = callmethod(call755,"getContext", [1], string754);
              onSelf = true;
              var call757 = callmethod(this, "backingContext:=", [1], call756);
              lineNumber = 187
              lineNumber = 183
              lineNumber = 187
              var string758 = new GraceString("2d");
              onSelf = true;
              var call759 = callmethod(this, "canvas", [0]);
              var call760 = callmethod(call759,"getContext", [1], string758);
              onSelf = true;
              var call761 = callmethod(this, "mctx:=", [1], call760);
              lineNumber = 188
              var string762 = new GraceString("WORLD STARTED");
              var call763 = Grace_print(string762);
              return call763
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
          obj716.methods["start"] = func741;
          func741.definitionLine = 181;
          func741.definitionModule = "kitty";
          var func764 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func764.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 193
              var string765 = new GraceString("UPDATING WORLD...");
              var call766 = Grace_print(string765);
              lineNumber = 197
              lineNumber = 183
              lineNumber = 196
              onSelf = true;
              var call767 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call768 = callmethod(this, "mctx", [0]);
              var call769 = callmethod(call768,"fillStyle:=", [1], call767);
              lineNumber = 197
              onSelf = true;
              var call770 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call771 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call772 = callmethod(this, "mctx", [0]);
              var call773 = callmethod(call772,"fillRect", [4], new GraceNum(0), new GraceNum(0), call770, call771);
              lineNumber = 198
              onSelf = true;
              var call774 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call775 = callmethod(this, "mctx", [0]);
              var call776 = callmethod(call775,"drawImage", [3], call774, new GraceNum(0), new GraceNum(0));
              lineNumber = 202
              onSelf = true;
              var call777 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call779 = callmethod(this, "canvasWidth", [0]);
              var quotient781 = callmethod(call779, "/", [1], new GraceNum(2));
              onSelf = true;
              var call783 = callmethod(this, "canvasHeight", [0]);
              var quotient785 = callmethod(call783, "/", [1], new GraceNum(2));
              onSelf = true;
              var call786 = callmethod(this, "background", [0]);
              var call787 = callmethod(call786,"draw", [4], call777, quotient781, quotient785, new GraceNum(0));
              lineNumber = 209
              var string788 = new GraceString("WORLD UPDATED");
              var call789 = Grace_print(string788);
              return call789
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func764.paramCounts = [
            0,
          ];
          func764.variableArities = [
            false,
          ];
          obj716.methods["update"] = func764;
          func764.definitionLine = 192;
          func764.definitionModule = "kitty";
          var func790 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func790.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 216
              lineNumber = 183
              lineNumber = 216
              onSelf = true;
              var call791 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call792 = callmethod(this, "canvasHeight", [0]);
              var call793 = callmethod(superDepth, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call794 = callmethod(call793, "outer", [0]);
              onOuter = true;
              onSelf = true;
              var call795 = callmethod(call794, "Image", [3], var_background__39__, call791, call792);
              onSelf = true;
              var call796 = callmethod(this, "background:=", [1], call795);
              return call796
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func790.paramCounts = [
            1,
          ];
          func790.variableArities = [
            false,
          ];
          obj716.methods["setBackground"] = func790;
          func790.definitionLine = 215;
          func790.definitionModule = "kitty";
          var func797 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func797.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 220
              onSelf = true;
              var call798 = callmethod(this, "entities", [0]);
              var call799 = callmethod(call798,"push", [1], var_e);
              return call799
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func797.paramTypes = [];
          func797.paramTypes.push([]);
          func797.paramCounts = [
            1,
          ];
          func797.variableArities = [
            false,
          ];
          obj716.methods["addEntity"] = func797;
          func797.definitionLine = 219;
          func797.definitionModule = "kitty";
          sourceObject = obj716;
          lineNumber = 139
          var string800 = new GraceString("CREATING NEW WORLD...");
          var call801 = Grace_print(string800);
          sourceObject = obj716;
          obj716.data["background"] = undefined;
          var reader_kitty_background_802 = function() {
            return this.data["background"];
          }
          obj716.methods["background"] = reader_kitty_background_802;
          obj716.data["background"] = undefined;
          var writer_kitty_background_802 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj716.methods["background:="] = writer_kitty_background_802;
          reader_kitty_background_802.confidential = true;
          writer_kitty_background_802.confidential = true;
          obj716.mutable = true;
          sourceObject = obj716;
          lineNumber = 142
          var string803 = new GraceString("black");
          obj716.data["backgroundColour"] = string803;
          var reader_kitty_backgroundColour_804 = function() {
            return this.data["backgroundColour"];
          }
          obj716.methods["backgroundColour"] = reader_kitty_backgroundColour_804;
          obj716.data["backgroundColour"] = string803;
          var writer_kitty_backgroundColour_804 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj716.methods["backgroundColour:="] = writer_kitty_backgroundColour_804;
          reader_kitty_backgroundColour_804.confidential = true;
          writer_kitty_backgroundColour_804.confidential = true;
          lineNumber = 144;
          moduleName = "kitty";
          lineNumber = 142
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string803)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj716.mutable = true;
          sourceObject = obj716;
          obj716.data["document"] = undefined;
          var reader_kitty_document_805 = function() {
            return this.data["document"];
          }
          obj716.methods["document"] = reader_kitty_document_805;
          obj716.data["document"] = undefined;
          var writer_kitty_document_805 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj716.methods["document:="] = writer_kitty_document_805;
          reader_kitty_document_805.confidential = true;
          writer_kitty_document_805.confidential = true;
          obj716.mutable = true;
          sourceObject = obj716;
          obj716.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_806 = function() {
            return this.data["backingCanvas"];
          }
          obj716.methods["backingCanvas"] = reader_kitty_backingCanvas_806;
          obj716.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_806 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj716.methods["backingCanvas:="] = writer_kitty_backingCanvas_806;
          reader_kitty_backingCanvas_806.confidential = true;
          writer_kitty_backingCanvas_806.confidential = true;
          obj716.mutable = true;
          sourceObject = obj716;
          obj716.data["backingContext"] = undefined;
          var reader_kitty_backingContext_807 = function() {
            return this.data["backingContext"];
          }
          obj716.methods["backingContext"] = reader_kitty_backingContext_807;
          obj716.data["backingContext"] = undefined;
          var writer_kitty_backingContext_807 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj716.methods["backingContext:="] = writer_kitty_backingContext_807;
          reader_kitty_backingContext_807.confidential = true;
          writer_kitty_backingContext_807.confidential = true;
          obj716.mutable = true;
          sourceObject = obj716;
          obj716.data["canvas"] = undefined;
          var reader_kitty_canvas_808 = function() {
            return this.data["canvas"];
          }
          obj716.methods["canvas"] = reader_kitty_canvas_808;
          obj716.data["canvas"] = undefined;
          var writer_kitty_canvas_808 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj716.methods["canvas:="] = writer_kitty_canvas_808;
          reader_kitty_canvas_808.confidential = true;
          writer_kitty_canvas_808.confidential = true;
          obj716.mutable = true;
          sourceObject = obj716;
          obj716.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_809 = function() {
            return this.data["canvasWidth"];
          }
          obj716.methods["canvasWidth"] = reader_kitty_canvasWidth_809;
          obj716.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_809 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj716.methods["canvasWidth:="] = writer_kitty_canvasWidth_809;
          reader_kitty_canvasWidth_809.confidential = true;
          writer_kitty_canvasWidth_809.confidential = true;
          obj716.mutable = true;
          sourceObject = obj716;
          obj716.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_810 = function() {
            return this.data["canvasHeight"];
          }
          obj716.methods["canvasHeight"] = reader_kitty_canvasHeight_810;
          obj716.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_810 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj716.methods["canvasHeight:="] = writer_kitty_canvasHeight_810;
          reader_kitty_canvasHeight_810.confidential = true;
          writer_kitty_canvasHeight_810.confidential = true;
          obj716.mutable = true;
          sourceObject = obj716;
          lineNumber = 153
          var call811 = callmethod(var_collections,"list", [0]);
          var call812 = callmethod(call811,"new", [0]);
          obj716.data["entities"] = call812;
          var reader_kitty_entities_813 = function() {
            return this.data["entities"];
          }
          obj716.methods["entities"] = reader_kitty_entities_813;
          obj716.data["entities"] = call812;
          var writer_kitty_entities_813 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj716.methods["entities:="] = writer_kitty_entities_813;
          reader_kitty_entities_813.confidential = true;
          writer_kitty_entities_813.confidential = true;
          lineNumber = 155;
          moduleName = "kitty";
          lineNumber = 153
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call812)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj716.mutable = true;
          sourceObject = obj716;
          lineNumber = 155
          var bool814 = new GraceBoolean(false)
          obj716.data["isInit"] = bool814;
          var reader_kitty_isInit_815 = function() {
            return this.data["isInit"];
          }
          obj716.methods["isInit"] = reader_kitty_isInit_815;
          obj716.data["isInit"] = bool814;
          var writer_kitty_isInit_815 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj716.methods["isInit:="] = writer_kitty_isInit_815;
          reader_kitty_isInit_815.confidential = true;
          writer_kitty_isInit_815.confidential = true;
          lineNumber = 157;
          moduleName = "kitty";
          lineNumber = 155
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool814)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj716.mutable = true;
          sourceObject = obj716;
          obj716.data["mctx"] = undefined;
          var reader_kitty_mctx_816 = function() {
            return this.data["mctx"];
          }
          obj716.methods["mctx"] = reader_kitty_mctx_816;
          obj716.data["mctx"] = undefined;
          var writer_kitty_mctx_816 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj716.methods["mctx:="] = writer_kitty_mctx_816;
          reader_kitty_mctx_816.confidential = true;
          writer_kitty_mctx_816.confidential = true;
          obj716.mutable = true;
          sourceObject = obj716;
          lineNumber = 159
          onSelf = true;
          var call817 = callmethod(this, "init", [0]);
          sourceObject = obj716;
          sourceObject = obj716;
          sourceObject = obj716;
          sourceObject = obj716;
          sourceObject = obj716;
          sourceObject = obj716;
          lineNumber = 223
          var string818 = new GraceString("WORLD CREATED");
          var call819 = Grace_print(string818);
          superDepth = origSuperDepth;
        }
        obj_init_716.apply(inheritingObject, []);
        return obj716
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj608.methods["new()object"] = func715;
    var func820 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 137
        var string821 = new GraceString("class KittyWorld");
        return string821
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func820.paramCounts = [
    ];
    func820.variableArities = [
    ];
    obj608.methods["asDebugString"] = func820;
    func820.definitionLine = 137;
    func820.definitionModule = "kitty";
    sourceObject = obj608;
    sourceObject = obj608;
    superDepth = origSuperDepth;
  }
  obj_init_608.apply(obj608, []);
  var var_KittyWorld = obj608;
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
  gctCache['kitty'] = "path:\n kitty\nconstructors-of:KittyImage:\n new\nfresh:Entity:\n getRotation\n getX\n getY\n posX:=\n posY:=\n setLocation\n rotation:=\n posX\n posY\n start\n setImage\n rotation\n draw\n update\n image:=\n image\n onDestroy\n awake\nconfidential:\nclasses:\n KittyImage\n KittyEntity\n KittyWorld\nconstructors-of:KittyWorld:\n new\nfresh:Image:\n drawOld\n drawBackground\n height:=\n draw\n imgTag\n width:=\n height\n width\n drawWithSize\nmodules:\n StandardPrelude\n mgcollections\nmethods-of:KittyEntity.new:\n getRotation\n getX\n getY\n posX:=\n posY:=\n setLocation\n rotation:=\n posX\n posY\n start\n setImage\n rotation\n draw\n image\n image:=\n update\n onDestroy\n awake\nfresh-methods:\n Image\n Entity\n World\npublic:\n m_world\n m_world:=\n worldSet\n worldSet:=\n KittyImage\n Image\n KittyEntity\n Entity\n KittyWorld\n World\n start\n stop\n setWorld\nmethods-of:KittyImage.new:\n drawOld\n drawBackground\n height:=\n draw\n imgTag\n width:=\n height\n width\n drawWithSize\nmethods-of:KittyWorld.new:\n init\n canvas:=\n backingContext\n canvasHeight\n background:=\n mctx\n canvasWidth\n background\n backingCanvas:=\n backgroundColour\n setBackground\n isInit:=\n backingCanvas\n start\n isInit\n mctx:=\n document:=\n canvas\n entities:=\n document\n update\n entities\n addEntity\n canvasWidth:=\n backgroundColour:=\n backingContext:=\n canvasHeight:=\nfresh:World:\n backingContext\n canvas:=\n backgroundColour\n canvasHeight\n background:=\n entities:=\n canvasWidth\n background\n backingCanvas:=\n init\n canvasHeight:=\n isInit:=\n backingCanvas\n start\n isInit\n mctx:=\n document:=\n canvas\n mctx\n document\n update\n entities\n addEntity\n canvasWidth:=\n backingContext:=\n backgroundColour:=\n setBackground\nconstructors-of:KittyEntity:\n new\n";
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
    "    method draw(ctx') {",
    "        image.draw(ctx')",
    "    }",
    "",
    "    method setImage(image': KittyImage) {",
    "        image := image'",
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
    "        // background.drawWithSize(mctx, canvasWidth, canvasHeight)",
    "        // background.draw(mctx)",
    "        // background.drawBackground(mctx)",
    "        background.draw(mctx, canvasWidth / 2, canvasHeight / 2, 0)",
    "",
    "        // Draw the entities",
    "        // for (entities) do {",
    "        //     entity->entity.draw(mctx)",
    "        // }",
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
