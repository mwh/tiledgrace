function gracecode_kitty () {
  this.definitionModule = "kitty";
  this.definitionLine = 0;
  lineNumber = 53
  var func0 = function(argcv) {
    var curarg = 1;
    var var_url__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func0.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Image)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 54
      var obj1 = Grace_allocObject();
      obj1.definitionModule = "kitty";
      obj1.definitionLine = 54;
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
        lineNumber = 55
        var call3 = callmethod(var_KittyImage,"new()object", [1, 1], var_url__39__, this);
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
    1,
  ];
  func0.variableArities = [
    false,
  ];
  this.methods["Image"] = func0;
  func0.definitionLine = 53;
  func0.definitionModule = "kitty";
  var func4 = function(argcv) {
    var curarg = 1;
    var var_url__39__ = arguments[curarg];
    curarg++;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj5 = Grace_allocObject();
      obj5.definitionModule = "kitty";
      obj5.definitionLine = 54;
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
        var call7 = callmethod(var_KittyImage,"new()object", [1, 1], var_url__39__, this);
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
  lineNumber = 120
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
      lineNumber = 121
      var obj9 = Grace_allocObject();
      obj9.definitionModule = "kitty";
      obj9.definitionLine = 121;
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
        lineNumber = 122
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
  func8.definitionLine = 120;
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
      obj13.definitionLine = 121;
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
  lineNumber = 215
  var func16 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func16.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (World)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 216
      var obj17 = Grace_allocObject();
      obj17.definitionModule = "kitty";
      obj17.definitionLine = 216;
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
        lineNumber = 217
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
  func16.definitionLine = 215;
  func16.definitionModule = "kitty";
  var func20 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj21 = Grace_allocObject();
      obj21.definitionModule = "kitty";
      obj21.definitionLine = 216;
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
  lineNumber = 224
  var func24 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func24.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 226
      var string25 = new GraceString("CHECKING...");
      var call26 = Grace_print(string25);
      lineNumber = 233
      var if27 = var_done;
      lineNumber = 228
      var call28 = callmethod(var_worldSet,"prefix!", [0]);
      if (Grace_isTrue(call28)) {
        lineNumber = 229
        var string29 = new GraceString("NO WORLD!!");
        var call30 = Grace_print(string29);
        lineNumber = 231
        return var_done
      }
      lineNumber = 233
      var string31 = new GraceString("STARTING...");
      var call32 = Grace_print(string31);
      lineNumber = 236
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
  func24.definitionLine = 224;
  func24.definitionModule = "kitty";
  lineNumber = 240
  var func34 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func34.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 241
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
  func34.definitionLine = 240;
  func34.definitionModule = "kitty";
  lineNumber = 244
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
      lineNumber = 246
      lineNumber = 245
      var_m__95__world = var_world__39__;
      lineNumber = 247
      lineNumber = 246
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
  func37.definitionLine = 244;
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
  lineNumber = 236
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
  func40.definitionLine = 236;
  func40.definitionModule = "kitty";
  lineNumber = 236
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
  func41.definitionLine = 236;
  func41.definitionModule = "kitty";
  lineNumber = 13
  lineNumber = 8
  var bool42 = new GraceBoolean(false)
  var var_worldSet = bool42;
  lineNumber = 236
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
  func43.definitionLine = 236;
  func43.definitionModule = "kitty";
  lineNumber = 236
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
  func44.definitionLine = 236;
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
          obj49.methods["draw"] = func51;
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
          sourceObject = obj49;
          lineNumber = 15
          var string191 = new GraceString("...");
          var string194 = new GraceString("CREATING NEW IMAGE: ");
          var opresult196 = callmethod(string194, "++", [1], var_url__39__);
          var opresult198 = callmethod(opresult196, "++", [1], string191);
          var call199 = Grace_print(opresult198);
          sourceObject = obj49;
          lineNumber = 16
          var string200 = new GraceString("img");
          var call201 = callmethod(var_dom,"document", [0]);
          var call202 = callmethod(call201,"createElement", [1], string200);
          obj49.data["imgTag"] = call202;
          var reader_kitty_imgTag_203 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_203.def = true;
          reader_kitty_imgTag_203.confidential = true;
          obj49.methods["imgTag"] = reader_kitty_imgTag_203;
          lineNumber = 16;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call202)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj49;
          lineNumber = 19
          lineNumber = 16
          lineNumber = 17
          onSelf = true;
          var call204 = callmethod(this, "imgTag", [0]);
          var call205 = callmethod(call204,"src:=", [1], var_url__39__);
          sourceObject = obj49;
          lineNumber = 19
          obj49.data["height"] = new GraceNum(64);
          var reader_kitty_height_206 = function() {
            return this.data["height"];
          }
          obj49.methods["height"] = reader_kitty_height_206;
          obj49.data["height"] = new GraceNum(64);
          var writer_kitty_height_206 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj49.methods["height:="] = writer_kitty_height_206;
          reader_kitty_height_206.confidential = true;
          writer_kitty_height_206.confidential = true;
          lineNumber = 20;
          moduleName = "kitty";
          lineNumber = 19
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(64))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj49.mutable = true;
          sourceObject = obj49;
          lineNumber = 20
          obj49.data["width"] = new GraceNum(64);
          var reader_kitty_width_207 = function() {
            return this.data["width"];
          }
          obj49.methods["width"] = reader_kitty_width_207;
          obj49.data["width"] = new GraceNum(64);
          var writer_kitty_width_207 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj49.methods["width:="] = writer_kitty_width_207;
          reader_kitty_width_207.confidential = true;
          writer_kitty_width_207.confidential = true;
          lineNumber = 22;
          moduleName = "kitty";
          lineNumber = 20
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(64))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj49.mutable = true;
          sourceObject = obj49;
          sourceObject = obj49;
          sourceObject = obj49;
          sourceObject = obj49;
          lineNumber = 50
          var string208 = new GraceString("");
          var string211 = new GraceString("CREATED NEW IMAGE: ");
          var opresult213 = callmethod(string211, "++", [1], var_url__39__);
          var opresult215 = callmethod(opresult213, "++", [1], string208);
          var call216 = Grace_print(opresult215);
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
      1,
    ];
    func48.variableArities = [
      false,
    ];
    obj46.methods["new"] = func48;
    func48.definitionLine = 13;
    func48.definitionModule = "kitty";
    var func217 = function(argcv) {
      var curarg = 1;
      var var_url__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj218 = Grace_allocObject();
        obj218.definitionModule = "kitty";
        obj218.definitionLine = 13;
        var inho218 = inheritingObject;
        while (inho218.superobj) inho218 = inho218.superobj;
        inho218.superobj = obj218;
        obj218.data = inheritingObject.data;
        obj218.outer = this;
        var reader_kitty_outer_219 = function() {
          return this.outer;
        }
        obj218.methods["outer"] = reader_kitty_outer_219;
        function obj_init_218() {
          var origSuperDepth = superDepth;
          superDepth = obj218;
          obj218.annotations = [];
          var func220 = function(argcv) {
            var curarg = 1;
            var var_ctx__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func220.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 23
              var string221 = new GraceString(")...");
              onSelf = true;
              var call223 = callmethod(this, "height", [0]);
              var string225 = new GraceString(", ");
              onSelf = true;
              var call227 = callmethod(this, "width", [0]);
              var string229 = new GraceString(" (");
              onSelf = true;
              var call231 = callmethod(this, "imgTag", [0]);
              var call232 = callmethod(call231,"src", [0]);
              var string234 = new GraceString("DRAWING IMAGE: ");
              var opresult236 = callmethod(string234, "++", [1], call232);
              var opresult238 = callmethod(opresult236, "++", [1], string229);
              var opresult240 = callmethod(opresult238, "++", [1], call227);
              var opresult242 = callmethod(opresult240, "++", [1], string225);
              var opresult244 = callmethod(opresult242, "++", [1], call223);
              var opresult246 = callmethod(opresult244, "++", [1], string221);
              var call247 = Grace_print(opresult246);
              lineNumber = 24
              var call248 = callmethod(var_ctx__39__,"save", [0]);
              lineNumber = 25
              var call249 = callmethod(var_ctx__39__,"translate", [2], new GraceNum(0), new GraceNum(0));
              lineNumber = 26
              var opresult254 = callmethod(new GraceNum(180), "+", [1], new GraceNum(180));
              var call255 = callmethod(opresult254,"prefix-", [0]);
              var quotient257 = callmethod(call255, "/", [1], new GraceNum(180));
              var prod259 = callmethod(quotient257, "*", [1], new GraceNum(3.1415));
              var call260 = callmethod(var_ctx__39__,"rotate", [1], prod259);
              lineNumber = 27
              onSelf = true;
              var call261 = callmethod(this, "imgTag", [0]);
              onSelf = true;
              var call263 = callmethod(this, "width", [0]);
              var call264 = callmethod(call263,"prefix-", [0]);
              var quotient266 = callmethod(call264, "/", [1], new GraceNum(2));
              onSelf = true;
              var call268 = callmethod(this, "height", [0]);
              var call269 = callmethod(call268,"prefix-", [0]);
              var quotient271 = callmethod(call269, "/", [1], new GraceNum(2));
              onSelf = true;
              var call272 = callmethod(this, "width", [0]);
              onSelf = true;
              var call273 = callmethod(this, "height", [0]);
              var call274 = callmethod(var_ctx__39__,"drawImage", [5], call261, quotient266, quotient271, call272, call273);
              lineNumber = 28
              var call275 = callmethod(var_ctx__39__,"restore", [0]);
              lineNumber = 29
              var string276 = new GraceString(" DRAWN");
              onSelf = true;
              var call278 = callmethod(this, "imgTag", [0]);
              var call279 = callmethod(call278,"src", [0]);
              var string281 = new GraceString("IMAGE: ");
              var opresult283 = callmethod(string281, "++", [1], call279);
              var opresult285 = callmethod(opresult283, "++", [1], string276);
              var call286 = Grace_print(opresult285);
              return call286
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func220.paramCounts = [
            1,
          ];
          func220.variableArities = [
            false,
          ];
          obj218.methods["draw"] = func220;
          func220.definitionLine = 22;
          func220.definitionModule = "kitty";
          var func287 = function(argcv) {
            var curarg = 1;
            var var_ctx__39__ = arguments[curarg];
            curarg++;
            var var_width__39__ = arguments[curarg];
            curarg++;
            var var_height__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func287.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawWithSize)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 33
              var string288 = new GraceString(")...");
              var string291 = new GraceString(", ");
              var string294 = new GraceString(" (");
              onSelf = true;
              var call296 = callmethod(this, "imgTag", [0]);
              var call297 = callmethod(call296,"src", [0]);
              var string299 = new GraceString("DRAWING IMAGE: ");
              var opresult301 = callmethod(string299, "++", [1], call297);
              var opresult303 = callmethod(opresult301, "++", [1], string294);
              var opresult305 = callmethod(opresult303, "++", [1], var_width__39__);
              var opresult307 = callmethod(opresult305, "++", [1], string291);
              var opresult309 = callmethod(opresult307, "++", [1], var_height__39__);
              var opresult311 = callmethod(opresult309, "++", [1], string288);
              var call312 = Grace_print(opresult311);
              lineNumber = 39
              onSelf = true;
              var call313 = callmethod(this, "imgTag", [0]);
              onSelf = true;
              var call314 = callmethod(this, "imgTag", [0]);
              var call315 = callmethod(call314,"width", [0]);
              onSelf = true;
              var call316 = callmethod(this, "imgTag", [0]);
              var call317 = callmethod(call316,"height", [0]);
              var call318 = callmethod(var_ctx__39__,"drawImage", [9], call313, new GraceNum(0), new GraceNum(0), call315, call317, new GraceNum(0), new GraceNum(0), var_width__39__, var_height__39__);
              lineNumber = 40
              var call319 = callmethod(var_ctx__39__,"restore", [0]);
              lineNumber = 41
              var string320 = new GraceString(" DRAWN");
              onSelf = true;
              var call322 = callmethod(this, "imgTag", [0]);
              var call323 = callmethod(call322,"src", [0]);
              var string325 = new GraceString("IMAGE: ");
              var opresult327 = callmethod(string325, "++", [1], call323);
              var opresult329 = callmethod(opresult327, "++", [1], string320);
              var call330 = Grace_print(opresult329);
              return call330
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func287.paramCounts = [
            3,
          ];
          func287.variableArities = [
            false,
          ];
          obj218.methods["drawWithSize"] = func287;
          func287.definitionLine = 32;
          func287.definitionModule = "kitty";
          var func331 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func331.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 45
              var string332 = new GraceString(" (500, 500)...");
              onSelf = true;
              var call334 = callmethod(this, "imgTag", [0]);
              var call335 = callmethod(call334,"src", [0]);
              var string337 = new GraceString("DRAWING BACKGROUND: ");
              var opresult339 = callmethod(string337, "++", [1], call335);
              var opresult341 = callmethod(opresult339, "++", [1], string332);
              var call342 = Grace_print(opresult341);
              lineNumber = 46
              onSelf = true;
              var call343 = callmethod(this, "imgTag", [0]);
              onSelf = true;
              var call344 = callmethod(this, "imgTag", [0]);
              var call345 = callmethod(call344,"width", [0]);
              onSelf = true;
              var call346 = callmethod(this, "imgTag", [0]);
              var call347 = callmethod(call346,"height", [0]);
              var call348 = callmethod(var_ctx,"drawImage", [9], call343, new GraceNum(0), new GraceNum(0), call345, call347, new GraceNum(0), new GraceNum(0), new GraceNum(500), new GraceNum(500));
              lineNumber = 47
              var string349 = new GraceString(" DRAWN");
              onSelf = true;
              var call351 = callmethod(this, "imgTag", [0]);
              var call352 = callmethod(call351,"src", [0]);
              var string354 = new GraceString("BACKGROUND: ");
              var opresult356 = callmethod(string354, "++", [1], call352);
              var opresult358 = callmethod(opresult356, "++", [1], string349);
              var call359 = Grace_print(opresult358);
              return call359
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
          obj218.methods["drawBackground"] = func331;
          func331.definitionLine = 44;
          func331.definitionModule = "kitty";
          sourceObject = obj218;
          lineNumber = 15
          var string360 = new GraceString("...");
          var string363 = new GraceString("CREATING NEW IMAGE: ");
          var opresult365 = callmethod(string363, "++", [1], var_url__39__);
          var opresult367 = callmethod(opresult365, "++", [1], string360);
          var call368 = Grace_print(opresult367);
          sourceObject = obj218;
          lineNumber = 16
          var string369 = new GraceString("img");
          var call370 = callmethod(var_dom,"document", [0]);
          var call371 = callmethod(call370,"createElement", [1], string369);
          obj218.data["imgTag"] = call371;
          var reader_kitty_imgTag_372 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_372.def = true;
          reader_kitty_imgTag_372.confidential = true;
          obj218.methods["imgTag"] = reader_kitty_imgTag_372;
          lineNumber = 16;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call371)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj218;
          lineNumber = 19
          lineNumber = 16
          lineNumber = 17
          onSelf = true;
          var call373 = callmethod(this, "imgTag", [0]);
          var call374 = callmethod(call373,"src:=", [1], var_url__39__);
          sourceObject = obj218;
          lineNumber = 19
          obj218.data["height"] = new GraceNum(64);
          var reader_kitty_height_375 = function() {
            return this.data["height"];
          }
          obj218.methods["height"] = reader_kitty_height_375;
          obj218.data["height"] = new GraceNum(64);
          var writer_kitty_height_375 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj218.methods["height:="] = writer_kitty_height_375;
          reader_kitty_height_375.confidential = true;
          writer_kitty_height_375.confidential = true;
          lineNumber = 20;
          moduleName = "kitty";
          lineNumber = 19
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(64))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj218.mutable = true;
          sourceObject = obj218;
          lineNumber = 20
          obj218.data["width"] = new GraceNum(64);
          var reader_kitty_width_376 = function() {
            return this.data["width"];
          }
          obj218.methods["width"] = reader_kitty_width_376;
          obj218.data["width"] = new GraceNum(64);
          var writer_kitty_width_376 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj218.methods["width:="] = writer_kitty_width_376;
          reader_kitty_width_376.confidential = true;
          writer_kitty_width_376.confidential = true;
          lineNumber = 22;
          moduleName = "kitty";
          lineNumber = 20
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(64))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj218.mutable = true;
          sourceObject = obj218;
          sourceObject = obj218;
          sourceObject = obj218;
          sourceObject = obj218;
          lineNumber = 50
          var string377 = new GraceString("");
          var string380 = new GraceString("CREATED NEW IMAGE: ");
          var opresult382 = callmethod(string380, "++", [1], var_url__39__);
          var opresult384 = callmethod(opresult382, "++", [1], string377);
          var call385 = Grace_print(opresult384);
          superDepth = origSuperDepth;
        }
        obj_init_218.apply(inheritingObject, []);
        return obj218
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj46.methods["new()object"] = func217;
    var func386 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 13
        var string387 = new GraceString("class KittyImage");
        return string387
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func386.paramCounts = [
    ];
    func386.variableArities = [
    ];
    obj46.methods["asDebugString"] = func386;
    func386.definitionLine = 13;
    func386.definitionModule = "kitty";
    sourceObject = obj46;
    sourceObject = obj46;
    superDepth = origSuperDepth;
  }
  obj_init_46.apply(obj46, []);
  var var_KittyImage = obj46;
  lineNumber = 53
  lineNumber = 60
  var func388 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func388.paramCounts[0])
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
  func388.paramCounts = [
    0,
  ];
  func388.variableArities = [
    false,
  ];
  this.methods["KittyEntity"] = func388;
  func388.definitionLine = 60;
  func388.definitionModule = "kitty";
  var obj389 = Grace_allocObject();
  obj389.definitionModule = "kitty";
  obj389.definitionLine = 60;
  obj389.outer = this;
  var reader_kitty_outer_390 = function() {
    return this.outer;
  }
  obj389.methods["outer"] = reader_kitty_outer_390;
  function obj_init_389() {
    var origSuperDepth = superDepth;
    superDepth = obj389;
    obj389.annotations = [];
    var func391 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func391.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj392 = Grace_allocObject();
        obj392.definitionModule = "kitty";
        obj392.definitionLine = 60;
        obj392.outer = this;
        var reader_kitty_outer_393 = function() {
          return this.outer;
        }
        obj392.methods["outer"] = reader_kitty_outer_393;
        function obj_init_392() {
          var origSuperDepth = superDepth;
          superDepth = obj392;
          obj392.annotations = [];
          var func394 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func394.paramCounts[0])
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
          func394.paramCounts = [
            0,
          ];
          func394.variableArities = [
            false,
          ];
          obj392.methods["awake"] = func394;
          func394.definitionLine = 73;
          func394.definitionModule = "kitty";
          var func395 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func395.paramCounts[0])
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
          func395.paramCounts = [
            0,
          ];
          func395.variableArities = [
            false,
          ];
          obj392.methods["start"] = func395;
          func395.definitionLine = 78;
          func395.definitionModule = "kitty";
          var func396 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func396.paramCounts[0])
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
          func396.paramCounts = [
            0,
          ];
          func396.variableArities = [
            false,
          ];
          obj392.methods["update"] = func396;
          func396.definitionLine = 83;
          func396.definitionModule = "kitty";
          var func397 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func397.paramCounts[0])
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
          func397.paramCounts = [
            0,
          ];
          func397.variableArities = [
            false,
          ];
          obj392.methods["onDestroy"] = func397;
          func397.definitionLine = 88;
          func397.definitionModule = "kitty";
          var func398 = function(argcv) {
            var curarg = 1;
            var var_ctx__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func398.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 93
              onSelf = true;
              var call399 = callmethod(this, "image", [0]);
              var call400 = callmethod(call399,"draw", [1], var_ctx__39__);
              return call400
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func398.paramCounts = [
            1,
          ];
          func398.variableArities = [
            false,
          ];
          obj392.methods["draw"] = func398;
          func398.definitionLine = 92;
          func398.definitionModule = "kitty";
          var func401 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func401.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 98
              lineNumber = 60
              lineNumber = 97
              onSelf = true;
              var call402 = callmethod(this, "image:=", [1], var_image__39__);
              return call402
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func401.paramTypes = [];
          func401.paramTypes.push([]);
          func401.paramCounts = [
            1,
          ];
          func401.variableArities = [
            false,
          ];
          obj392.methods["setImage"] = func401;
          func401.definitionLine = 96;
          func401.definitionModule = "kitty";
          var func403 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func403.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 102
              lineNumber = 60
              lineNumber = 101
              onSelf = true;
              var call404 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 103
              lineNumber = 60
              lineNumber = 102
              onSelf = true;
              var call405 = callmethod(this, "posY:=", [1], var_y);
              return call405
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func403.paramCounts = [
            2,
          ];
          func403.variableArities = [
            false,
          ];
          obj392.methods["setLocation"] = func403;
          func403.definitionLine = 100;
          func403.definitionModule = "kitty";
          var func406 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func406.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 107
              lineNumber = 106
              onSelf = true;
              var call407 = callmethod(this, "posX", [0]);
              return call407
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func406.paramCounts = [
            0,
          ];
          func406.variableArities = [
            false,
          ];
          obj392.methods["getX"] = func406;
          func406.definitionLine = 105;
          func406.definitionModule = "kitty";
          var func408 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func408.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 111
              lineNumber = 110
              onSelf = true;
              var call409 = callmethod(this, "posY", [0]);
              return call409
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
          obj392.methods["getY"] = func408;
          func408.definitionLine = 109;
          func408.definitionModule = "kitty";
          var func410 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func410.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 115
              lineNumber = 114
              onSelf = true;
              var call411 = callmethod(this, "rotation", [0]);
              return call411
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func410.paramCounts = [
            0,
          ];
          func410.variableArities = [
            false,
          ];
          obj392.methods["getRotation"] = func410;
          func410.definitionLine = 113;
          func410.definitionModule = "kitty";
          sourceObject = obj392;
          lineNumber = 62
          var string412 = new GraceString(")...");
          var string415 = new GraceString(", ");
          var string418 = new GraceString("CREATING ENTITY AT (");
          var opresult420 = callmethod(string418, "++", [1], var_x__39__);
          var opresult422 = callmethod(opresult420, "++", [1], string415);
          var opresult424 = callmethod(opresult422, "++", [1], var_y__39__);
          var opresult426 = callmethod(opresult424, "++", [1], string412);
          var call427 = Grace_print(opresult426);
          sourceObject = obj392;
          lineNumber = 64
          obj392.data["posX"] = var_x__39__;
          var reader_kitty_posX_428 = function() {
            return this.data["posX"];
          }
          obj392.methods["posX"] = reader_kitty_posX_428;
          obj392.data["posX"] = var_x__39__;
          var writer_kitty_posX_428 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj392.methods["posX:="] = writer_kitty_posX_428;
          reader_kitty_posX_428.confidential = true;
          writer_kitty_posX_428.confidential = true;
          lineNumber = 65;
          moduleName = "kitty";
          lineNumber = 64
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj392.mutable = true;
          sourceObject = obj392;
          lineNumber = 65
          obj392.data["posY"] = var_y__39__;
          var reader_kitty_posY_429 = function() {
            return this.data["posY"];
          }
          obj392.methods["posY"] = reader_kitty_posY_429;
          obj392.data["posY"] = var_y__39__;
          var writer_kitty_posY_429 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj392.methods["posY:="] = writer_kitty_posY_429;
          reader_kitty_posY_429.confidential = true;
          writer_kitty_posY_429.confidential = true;
          lineNumber = 66;
          moduleName = "kitty";
          lineNumber = 65
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj392.mutable = true;
          sourceObject = obj392;
          lineNumber = 66
          obj392.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_430 = function() {
            return this.data["rotation"];
          }
          obj392.methods["rotation"] = reader_kitty_rotation_430;
          obj392.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_430 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj392.methods["rotation:="] = writer_kitty_rotation_430;
          reader_kitty_rotation_430.confidential = true;
          writer_kitty_rotation_430.confidential = true;
          lineNumber = 68;
          moduleName = "kitty";
          lineNumber = 66
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj392.mutable = true;
          sourceObject = obj392;
          obj392.data["image"] = undefined;
          var reader_kitty_image_431 = function() {
            return this.data["image"];
          }
          obj392.methods["image"] = reader_kitty_image_431;
          obj392.data["image"] = undefined;
          var writer_kitty_image_431 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj392.methods["image:="] = writer_kitty_image_431;
          reader_kitty_image_431.confidential = true;
          writer_kitty_image_431.confidential = true;
          obj392.mutable = true;
          sourceObject = obj392;
          lineNumber = 70
          onSelf = true;
          var call432 = callmethod(this, "awake", [0]);
          sourceObject = obj392;
          sourceObject = obj392;
          sourceObject = obj392;
          sourceObject = obj392;
          sourceObject = obj392;
          sourceObject = obj392;
          sourceObject = obj392;
          sourceObject = obj392;
          sourceObject = obj392;
          sourceObject = obj392;
          sourceObject = obj392;
          lineNumber = 117
          var string433 = new GraceString("ENTITY CREATED");
          var call434 = Grace_print(string433);
          superDepth = origSuperDepth;
        }
        obj_init_392.apply(obj392, []);
        return obj392
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func391.paramCounts = [
      2,
    ];
    func391.variableArities = [
      false,
    ];
    obj389.methods["new"] = func391;
    func391.definitionLine = 60;
    func391.definitionModule = "kitty";
    var func435 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj436 = Grace_allocObject();
        obj436.definitionModule = "kitty";
        obj436.definitionLine = 60;
        var inho436 = inheritingObject;
        while (inho436.superobj) inho436 = inho436.superobj;
        inho436.superobj = obj436;
        obj436.data = inheritingObject.data;
        obj436.outer = this;
        var reader_kitty_outer_437 = function() {
          return this.outer;
        }
        obj436.methods["outer"] = reader_kitty_outer_437;
        function obj_init_436() {
          var origSuperDepth = superDepth;
          superDepth = obj436;
          obj436.annotations = [];
          var func438 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func438.paramCounts[0])
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
          func438.paramCounts = [
            0,
          ];
          func438.variableArities = [
            false,
          ];
          obj436.methods["awake"] = func438;
          func438.definitionLine = 73;
          func438.definitionModule = "kitty";
          var func439 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func439.paramCounts[0])
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
          func439.paramCounts = [
            0,
          ];
          func439.variableArities = [
            false,
          ];
          obj436.methods["start"] = func439;
          func439.definitionLine = 78;
          func439.definitionModule = "kitty";
          var func440 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func440.paramCounts[0])
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
          func440.paramCounts = [
            0,
          ];
          func440.variableArities = [
            false,
          ];
          obj436.methods["update"] = func440;
          func440.definitionLine = 83;
          func440.definitionModule = "kitty";
          var func441 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func441.paramCounts[0])
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
          func441.paramCounts = [
            0,
          ];
          func441.variableArities = [
            false,
          ];
          obj436.methods["onDestroy"] = func441;
          func441.definitionLine = 88;
          func441.definitionModule = "kitty";
          var func442 = function(argcv) {
            var curarg = 1;
            var var_ctx__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func442.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 93
              onSelf = true;
              var call443 = callmethod(this, "image", [0]);
              var call444 = callmethod(call443,"draw", [1], var_ctx__39__);
              return call444
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func442.paramCounts = [
            1,
          ];
          func442.variableArities = [
            false,
          ];
          obj436.methods["draw"] = func442;
          func442.definitionLine = 92;
          func442.definitionModule = "kitty";
          var func445 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func445.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 98
              lineNumber = 60
              lineNumber = 97
              onSelf = true;
              var call446 = callmethod(this, "image:=", [1], var_image__39__);
              return call446
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func445.paramTypes = [];
          func445.paramTypes.push([]);
          func445.paramCounts = [
            1,
          ];
          func445.variableArities = [
            false,
          ];
          obj436.methods["setImage"] = func445;
          func445.definitionLine = 96;
          func445.definitionModule = "kitty";
          var func447 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func447.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 102
              lineNumber = 60
              lineNumber = 101
              onSelf = true;
              var call448 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 103
              lineNumber = 60
              lineNumber = 102
              onSelf = true;
              var call449 = callmethod(this, "posY:=", [1], var_y);
              return call449
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func447.paramCounts = [
            2,
          ];
          func447.variableArities = [
            false,
          ];
          obj436.methods["setLocation"] = func447;
          func447.definitionLine = 100;
          func447.definitionModule = "kitty";
          var func450 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func450.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 107
              lineNumber = 106
              onSelf = true;
              var call451 = callmethod(this, "posX", [0]);
              return call451
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func450.paramCounts = [
            0,
          ];
          func450.variableArities = [
            false,
          ];
          obj436.methods["getX"] = func450;
          func450.definitionLine = 105;
          func450.definitionModule = "kitty";
          var func452 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func452.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 111
              lineNumber = 110
              onSelf = true;
              var call453 = callmethod(this, "posY", [0]);
              return call453
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func452.paramCounts = [
            0,
          ];
          func452.variableArities = [
            false,
          ];
          obj436.methods["getY"] = func452;
          func452.definitionLine = 109;
          func452.definitionModule = "kitty";
          var func454 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func454.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 115
              lineNumber = 114
              onSelf = true;
              var call455 = callmethod(this, "rotation", [0]);
              return call455
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func454.paramCounts = [
            0,
          ];
          func454.variableArities = [
            false,
          ];
          obj436.methods["getRotation"] = func454;
          func454.definitionLine = 113;
          func454.definitionModule = "kitty";
          sourceObject = obj436;
          lineNumber = 62
          var string456 = new GraceString(")...");
          var string459 = new GraceString(", ");
          var string462 = new GraceString("CREATING ENTITY AT (");
          var opresult464 = callmethod(string462, "++", [1], var_x__39__);
          var opresult466 = callmethod(opresult464, "++", [1], string459);
          var opresult468 = callmethod(opresult466, "++", [1], var_y__39__);
          var opresult470 = callmethod(opresult468, "++", [1], string456);
          var call471 = Grace_print(opresult470);
          sourceObject = obj436;
          lineNumber = 64
          obj436.data["posX"] = var_x__39__;
          var reader_kitty_posX_472 = function() {
            return this.data["posX"];
          }
          obj436.methods["posX"] = reader_kitty_posX_472;
          obj436.data["posX"] = var_x__39__;
          var writer_kitty_posX_472 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj436.methods["posX:="] = writer_kitty_posX_472;
          reader_kitty_posX_472.confidential = true;
          writer_kitty_posX_472.confidential = true;
          lineNumber = 65;
          moduleName = "kitty";
          lineNumber = 64
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj436.mutable = true;
          sourceObject = obj436;
          lineNumber = 65
          obj436.data["posY"] = var_y__39__;
          var reader_kitty_posY_473 = function() {
            return this.data["posY"];
          }
          obj436.methods["posY"] = reader_kitty_posY_473;
          obj436.data["posY"] = var_y__39__;
          var writer_kitty_posY_473 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj436.methods["posY:="] = writer_kitty_posY_473;
          reader_kitty_posY_473.confidential = true;
          writer_kitty_posY_473.confidential = true;
          lineNumber = 66;
          moduleName = "kitty";
          lineNumber = 65
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj436.mutable = true;
          sourceObject = obj436;
          lineNumber = 66
          obj436.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_474 = function() {
            return this.data["rotation"];
          }
          obj436.methods["rotation"] = reader_kitty_rotation_474;
          obj436.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_474 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj436.methods["rotation:="] = writer_kitty_rotation_474;
          reader_kitty_rotation_474.confidential = true;
          writer_kitty_rotation_474.confidential = true;
          lineNumber = 68;
          moduleName = "kitty";
          lineNumber = 66
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj436.mutable = true;
          sourceObject = obj436;
          obj436.data["image"] = undefined;
          var reader_kitty_image_475 = function() {
            return this.data["image"];
          }
          obj436.methods["image"] = reader_kitty_image_475;
          obj436.data["image"] = undefined;
          var writer_kitty_image_475 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj436.methods["image:="] = writer_kitty_image_475;
          reader_kitty_image_475.confidential = true;
          writer_kitty_image_475.confidential = true;
          obj436.mutable = true;
          sourceObject = obj436;
          lineNumber = 70
          onSelf = true;
          var call476 = callmethod(this, "awake", [0]);
          sourceObject = obj436;
          sourceObject = obj436;
          sourceObject = obj436;
          sourceObject = obj436;
          sourceObject = obj436;
          sourceObject = obj436;
          sourceObject = obj436;
          sourceObject = obj436;
          sourceObject = obj436;
          sourceObject = obj436;
          sourceObject = obj436;
          lineNumber = 117
          var string477 = new GraceString("ENTITY CREATED");
          var call478 = Grace_print(string477);
          superDepth = origSuperDepth;
        }
        obj_init_436.apply(inheritingObject, []);
        return obj436
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj389.methods["new()object"] = func435;
    var func479 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 60
        var string480 = new GraceString("class KittyEntity");
        return string480
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func479.paramCounts = [
    ];
    func479.variableArities = [
    ];
    obj389.methods["asDebugString"] = func479;
    func479.definitionLine = 60;
    func479.definitionModule = "kitty";
    sourceObject = obj389;
    sourceObject = obj389;
    superDepth = origSuperDepth;
  }
  obj_init_389.apply(obj389, []);
  var var_KittyEntity = obj389;
  lineNumber = 120
  lineNumber = 127
  var func481 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func481.paramCounts[0])
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
  func481.paramCounts = [
    0,
  ];
  func481.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func481;
  func481.definitionLine = 127;
  func481.definitionModule = "kitty";
  var obj482 = Grace_allocObject();
  obj482.definitionModule = "kitty";
  obj482.definitionLine = 127;
  obj482.outer = this;
  var reader_kitty_outer_483 = function() {
    return this.outer;
  }
  obj482.methods["outer"] = reader_kitty_outer_483;
  function obj_init_482() {
    var origSuperDepth = superDepth;
    superDepth = obj482;
    obj482.annotations = [];
    var func484 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func484.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj485 = Grace_allocObject();
        obj485.definitionModule = "kitty";
        obj485.definitionLine = 127;
        obj485.outer = this;
        var reader_kitty_outer_486 = function() {
          return this.outer;
        }
        obj485.methods["outer"] = reader_kitty_outer_486;
        function obj_init_485() {
          var origSuperDepth = superDepth;
          superDepth = obj485;
          obj485.annotations = [];
          var func487 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func487.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 154
              var string488 = new GraceString("INITIALIZING WORLD...");
              var call489 = Grace_print(string488);
              lineNumber = 160
              var if490 = var_done;
              lineNumber = 156
              onSelf = true;
              var call491 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call491)) {
                lineNumber = 158
                lineNumber = 157
                var bool492 = new GraceBoolean(false)
                return bool492
              }
              lineNumber = 161
              lineNumber = 127
              lineNumber = 160
              var call493 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call494 = callmethod(this, "document:=", [1], call493);
              lineNumber = 161
              lineNumber = 160
              lineNumber = 161
              var string495 = new GraceString("standard-canvas");
              onSelf = true;
              var call496 = callmethod(this, "document", [0]);
              var call497 = callmethod(call496,"getElementById", [1], string495);
              onSelf = true;
              var call498 = callmethod(this, "canvas:=", [1], call497);
              lineNumber = 163
              lineNumber = 160
              lineNumber = 162
              onSelf = true;
              var call499 = callmethod(this, "canvas", [0]);
              var call500 = callmethod(call499,"width", [0]);
              onSelf = true;
              var call501 = callmethod(this, "canvasWidth:=", [1], call500);
              lineNumber = 165
              lineNumber = 162
              lineNumber = 163
              onSelf = true;
              var call502 = callmethod(this, "canvas", [0]);
              var call503 = callmethod(call502,"height", [0]);
              onSelf = true;
              var call504 = callmethod(this, "canvasHeight:=", [1], call503);
              lineNumber = 166
              lineNumber = 163
              lineNumber = 165
              var bool505 = new GraceBoolean(true)
              onSelf = true;
              var call506 = callmethod(this, "isInit:=", [1], bool505);
              lineNumber = 166
              var string507 = new GraceString("INITIALIZATION FINISHED");
              var call508 = Grace_print(string507);
              lineNumber = 167
              onSelf = true;
              var call509 = callmethod(this, "start", [0]);
              return call509
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func487.paramCounts = [
            0,
          ];
          func487.variableArities = [
            false,
          ];
          obj485.methods["init"] = func487;
          func487.definitionLine = 152;
          func487.definitionModule = "kitty";
          var func510 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func510.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 172
              var string511 = new GraceString("STARTING WORLD...");
              var call512 = Grace_print(string511);
              lineNumber = 173
              lineNumber = 163
              lineNumber = 173
              var string513 = new GraceString("canvas");
              var call514 = callmethod(var_dom,"document", [0]);
              var call515 = callmethod(call514,"createElement", [1], string513);
              onSelf = true;
              var call516 = callmethod(this, "backingCanvas:=", [1], call515);
              lineNumber = 175
              lineNumber = 173
              lineNumber = 174
              onSelf = true;
              var call517 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call518 = callmethod(this, "backingCanvas", [0]);
              var call519 = callmethod(call518,"height:=", [1], call517);
              lineNumber = 176
              lineNumber = 173
              lineNumber = 175
              onSelf = true;
              var call520 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call521 = callmethod(this, "backingCanvas", [0]);
              var call522 = callmethod(call521,"width:=", [1], call520);
              lineNumber = 176
              lineNumber = 173
              lineNumber = 176
              var string523 = new GraceString("2d");
              onSelf = true;
              var call524 = callmethod(this, "backingCanvas", [0]);
              var call525 = callmethod(call524,"getContext", [1], string523);
              onSelf = true;
              var call526 = callmethod(this, "backingContext:=", [1], call525);
              lineNumber = 177
              lineNumber = 173
              lineNumber = 177
              var string527 = new GraceString("2d");
              onSelf = true;
              var call528 = callmethod(this, "canvas", [0]);
              var call529 = callmethod(call528,"getContext", [1], string527);
              onSelf = true;
              var call530 = callmethod(this, "mctx:=", [1], call529);
              lineNumber = 178
              var string531 = new GraceString("WORLD STARTED");
              var call532 = Grace_print(string531);
              return call532
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func510.paramCounts = [
            0,
          ];
          func510.variableArities = [
            false,
          ];
          obj485.methods["start"] = func510;
          func510.definitionLine = 171;
          func510.definitionModule = "kitty";
          var func533 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func533.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 183
              var string534 = new GraceString("UPDATING WORLD...");
              var call535 = Grace_print(string534);
              lineNumber = 191
              onSelf = true;
              var call536 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call537 = callmethod(this, "background", [0]);
              var call538 = callmethod(call537,"drawBackground", [1], call536);
              lineNumber = 198
              var string539 = new GraceString("WORLD UPDATED");
              var call540 = Grace_print(string539);
              return call540
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func533.paramCounts = [
            0,
          ];
          func533.variableArities = [
            false,
          ];
          obj485.methods["update"] = func533;
          func533.definitionLine = 182;
          func533.definitionModule = "kitty";
          var func541 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func541.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 206
              lineNumber = 173
              lineNumber = 205
              onSelf = true;
              var call542 = callmethod(this, "background:=", [1], var_background__39__);
              return call542
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func541.paramCounts = [
            1,
          ];
          func541.variableArities = [
            false,
          ];
          obj485.methods["setBackground"] = func541;
          func541.definitionLine = 204;
          func541.definitionModule = "kitty";
          var func543 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func543.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 209
              onSelf = true;
              var call544 = callmethod(this, "entities", [0]);
              var call545 = callmethod(call544,"push", [1], var_e);
              return call545
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func543.paramTypes = [];
          func543.paramTypes.push([]);
          func543.paramCounts = [
            1,
          ];
          func543.variableArities = [
            false,
          ];
          obj485.methods["addEntity"] = func543;
          func543.definitionLine = 208;
          func543.definitionModule = "kitty";
          sourceObject = obj485;
          lineNumber = 129
          var string546 = new GraceString("CREATING NEW WORLD...");
          var call547 = Grace_print(string546);
          sourceObject = obj485;
          obj485.data["background"] = undefined;
          var reader_kitty_background_548 = function() {
            return this.data["background"];
          }
          obj485.methods["background"] = reader_kitty_background_548;
          obj485.data["background"] = undefined;
          var writer_kitty_background_548 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj485.methods["background:="] = writer_kitty_background_548;
          reader_kitty_background_548.confidential = true;
          writer_kitty_background_548.confidential = true;
          obj485.mutable = true;
          sourceObject = obj485;
          lineNumber = 132
          var string549 = new GraceString("black");
          obj485.data["backgroundColour"] = string549;
          var reader_kitty_backgroundColour_550 = function() {
            return this.data["backgroundColour"];
          }
          obj485.methods["backgroundColour"] = reader_kitty_backgroundColour_550;
          obj485.data["backgroundColour"] = string549;
          var writer_kitty_backgroundColour_550 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj485.methods["backgroundColour:="] = writer_kitty_backgroundColour_550;
          reader_kitty_backgroundColour_550.confidential = true;
          writer_kitty_backgroundColour_550.confidential = true;
          lineNumber = 134;
          moduleName = "kitty";
          lineNumber = 132
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string549)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj485.mutable = true;
          sourceObject = obj485;
          obj485.data["document"] = undefined;
          var reader_kitty_document_551 = function() {
            return this.data["document"];
          }
          obj485.methods["document"] = reader_kitty_document_551;
          obj485.data["document"] = undefined;
          var writer_kitty_document_551 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj485.methods["document:="] = writer_kitty_document_551;
          reader_kitty_document_551.confidential = true;
          writer_kitty_document_551.confidential = true;
          obj485.mutable = true;
          sourceObject = obj485;
          obj485.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_552 = function() {
            return this.data["backingCanvas"];
          }
          obj485.methods["backingCanvas"] = reader_kitty_backingCanvas_552;
          obj485.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_552 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj485.methods["backingCanvas:="] = writer_kitty_backingCanvas_552;
          reader_kitty_backingCanvas_552.confidential = true;
          writer_kitty_backingCanvas_552.confidential = true;
          obj485.mutable = true;
          sourceObject = obj485;
          obj485.data["backingContext"] = undefined;
          var reader_kitty_backingContext_553 = function() {
            return this.data["backingContext"];
          }
          obj485.methods["backingContext"] = reader_kitty_backingContext_553;
          obj485.data["backingContext"] = undefined;
          var writer_kitty_backingContext_553 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj485.methods["backingContext:="] = writer_kitty_backingContext_553;
          reader_kitty_backingContext_553.confidential = true;
          writer_kitty_backingContext_553.confidential = true;
          obj485.mutable = true;
          sourceObject = obj485;
          obj485.data["canvas"] = undefined;
          var reader_kitty_canvas_554 = function() {
            return this.data["canvas"];
          }
          obj485.methods["canvas"] = reader_kitty_canvas_554;
          obj485.data["canvas"] = undefined;
          var writer_kitty_canvas_554 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj485.methods["canvas:="] = writer_kitty_canvas_554;
          reader_kitty_canvas_554.confidential = true;
          writer_kitty_canvas_554.confidential = true;
          obj485.mutable = true;
          sourceObject = obj485;
          obj485.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_555 = function() {
            return this.data["canvasWidth"];
          }
          obj485.methods["canvasWidth"] = reader_kitty_canvasWidth_555;
          obj485.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_555 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj485.methods["canvasWidth:="] = writer_kitty_canvasWidth_555;
          reader_kitty_canvasWidth_555.confidential = true;
          writer_kitty_canvasWidth_555.confidential = true;
          obj485.mutable = true;
          sourceObject = obj485;
          obj485.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_556 = function() {
            return this.data["canvasHeight"];
          }
          obj485.methods["canvasHeight"] = reader_kitty_canvasHeight_556;
          obj485.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_556 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj485.methods["canvasHeight:="] = writer_kitty_canvasHeight_556;
          reader_kitty_canvasHeight_556.confidential = true;
          writer_kitty_canvasHeight_556.confidential = true;
          obj485.mutable = true;
          sourceObject = obj485;
          lineNumber = 143
          var call557 = callmethod(var_collections,"list", [0]);
          var call558 = callmethod(call557,"new", [0]);
          obj485.data["entities"] = call558;
          var reader_kitty_entities_559 = function() {
            return this.data["entities"];
          }
          obj485.methods["entities"] = reader_kitty_entities_559;
          obj485.data["entities"] = call558;
          var writer_kitty_entities_559 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj485.methods["entities:="] = writer_kitty_entities_559;
          reader_kitty_entities_559.confidential = true;
          writer_kitty_entities_559.confidential = true;
          lineNumber = 145;
          moduleName = "kitty";
          lineNumber = 143
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call558)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj485.mutable = true;
          sourceObject = obj485;
          lineNumber = 145
          var bool560 = new GraceBoolean(false)
          obj485.data["isInit"] = bool560;
          var reader_kitty_isInit_561 = function() {
            return this.data["isInit"];
          }
          obj485.methods["isInit"] = reader_kitty_isInit_561;
          obj485.data["isInit"] = bool560;
          var writer_kitty_isInit_561 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj485.methods["isInit:="] = writer_kitty_isInit_561;
          reader_kitty_isInit_561.confidential = true;
          writer_kitty_isInit_561.confidential = true;
          lineNumber = 147;
          moduleName = "kitty";
          lineNumber = 145
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool560)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj485.mutable = true;
          sourceObject = obj485;
          obj485.data["mctx"] = undefined;
          var reader_kitty_mctx_562 = function() {
            return this.data["mctx"];
          }
          obj485.methods["mctx"] = reader_kitty_mctx_562;
          obj485.data["mctx"] = undefined;
          var writer_kitty_mctx_562 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj485.methods["mctx:="] = writer_kitty_mctx_562;
          reader_kitty_mctx_562.confidential = true;
          writer_kitty_mctx_562.confidential = true;
          obj485.mutable = true;
          sourceObject = obj485;
          lineNumber = 149
          onSelf = true;
          var call563 = callmethod(this, "init", [0]);
          sourceObject = obj485;
          sourceObject = obj485;
          sourceObject = obj485;
          sourceObject = obj485;
          sourceObject = obj485;
          sourceObject = obj485;
          lineNumber = 212
          var string564 = new GraceString("WORLD CREATED");
          var call565 = Grace_print(string564);
          superDepth = origSuperDepth;
        }
        obj_init_485.apply(obj485, []);
        return obj485
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func484.paramCounts = [
      0,
    ];
    func484.variableArities = [
      false,
    ];
    obj482.methods["new"] = func484;
    func484.definitionLine = 127;
    func484.definitionModule = "kitty";
    var func566 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj567 = Grace_allocObject();
        obj567.definitionModule = "kitty";
        obj567.definitionLine = 127;
        var inho567 = inheritingObject;
        while (inho567.superobj) inho567 = inho567.superobj;
        inho567.superobj = obj567;
        obj567.data = inheritingObject.data;
        obj567.outer = this;
        var reader_kitty_outer_568 = function() {
          return this.outer;
        }
        obj567.methods["outer"] = reader_kitty_outer_568;
        function obj_init_567() {
          var origSuperDepth = superDepth;
          superDepth = obj567;
          obj567.annotations = [];
          var func569 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func569.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 154
              var string570 = new GraceString("INITIALIZING WORLD...");
              var call571 = Grace_print(string570);
              lineNumber = 160
              var if572 = var_done;
              lineNumber = 156
              onSelf = true;
              var call573 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call573)) {
                lineNumber = 158
                lineNumber = 157
                var bool574 = new GraceBoolean(false)
                return bool574
              }
              lineNumber = 161
              lineNumber = 143
              lineNumber = 160
              var call575 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call576 = callmethod(this, "document:=", [1], call575);
              lineNumber = 161
              lineNumber = 160
              lineNumber = 161
              var string577 = new GraceString("standard-canvas");
              onSelf = true;
              var call578 = callmethod(this, "document", [0]);
              var call579 = callmethod(call578,"getElementById", [1], string577);
              onSelf = true;
              var call580 = callmethod(this, "canvas:=", [1], call579);
              lineNumber = 163
              lineNumber = 160
              lineNumber = 162
              onSelf = true;
              var call581 = callmethod(this, "canvas", [0]);
              var call582 = callmethod(call581,"width", [0]);
              onSelf = true;
              var call583 = callmethod(this, "canvasWidth:=", [1], call582);
              lineNumber = 165
              lineNumber = 162
              lineNumber = 163
              onSelf = true;
              var call584 = callmethod(this, "canvas", [0]);
              var call585 = callmethod(call584,"height", [0]);
              onSelf = true;
              var call586 = callmethod(this, "canvasHeight:=", [1], call585);
              lineNumber = 166
              lineNumber = 163
              lineNumber = 165
              var bool587 = new GraceBoolean(true)
              onSelf = true;
              var call588 = callmethod(this, "isInit:=", [1], bool587);
              lineNumber = 166
              var string589 = new GraceString("INITIALIZATION FINISHED");
              var call590 = Grace_print(string589);
              lineNumber = 167
              onSelf = true;
              var call591 = callmethod(this, "start", [0]);
              return call591
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func569.paramCounts = [
            0,
          ];
          func569.variableArities = [
            false,
          ];
          obj567.methods["init"] = func569;
          func569.definitionLine = 152;
          func569.definitionModule = "kitty";
          var func592 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func592.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 172
              var string593 = new GraceString("STARTING WORLD...");
              var call594 = Grace_print(string593);
              lineNumber = 173
              lineNumber = 163
              lineNumber = 173
              var string595 = new GraceString("canvas");
              var call596 = callmethod(var_dom,"document", [0]);
              var call597 = callmethod(call596,"createElement", [1], string595);
              onSelf = true;
              var call598 = callmethod(this, "backingCanvas:=", [1], call597);
              lineNumber = 175
              lineNumber = 173
              lineNumber = 174
              onSelf = true;
              var call599 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call600 = callmethod(this, "backingCanvas", [0]);
              var call601 = callmethod(call600,"height:=", [1], call599);
              lineNumber = 176
              lineNumber = 173
              lineNumber = 175
              onSelf = true;
              var call602 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call603 = callmethod(this, "backingCanvas", [0]);
              var call604 = callmethod(call603,"width:=", [1], call602);
              lineNumber = 176
              lineNumber = 173
              lineNumber = 176
              var string605 = new GraceString("2d");
              onSelf = true;
              var call606 = callmethod(this, "backingCanvas", [0]);
              var call607 = callmethod(call606,"getContext", [1], string605);
              onSelf = true;
              var call608 = callmethod(this, "backingContext:=", [1], call607);
              lineNumber = 177
              lineNumber = 173
              lineNumber = 177
              var string609 = new GraceString("2d");
              onSelf = true;
              var call610 = callmethod(this, "canvas", [0]);
              var call611 = callmethod(call610,"getContext", [1], string609);
              onSelf = true;
              var call612 = callmethod(this, "mctx:=", [1], call611);
              lineNumber = 178
              var string613 = new GraceString("WORLD STARTED");
              var call614 = Grace_print(string613);
              return call614
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
          obj567.methods["start"] = func592;
          func592.definitionLine = 171;
          func592.definitionModule = "kitty";
          var func615 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func615.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 183
              var string616 = new GraceString("UPDATING WORLD...");
              var call617 = Grace_print(string616);
              lineNumber = 191
              onSelf = true;
              var call618 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call619 = callmethod(this, "background", [0]);
              var call620 = callmethod(call619,"drawBackground", [1], call618);
              lineNumber = 198
              var string621 = new GraceString("WORLD UPDATED");
              var call622 = Grace_print(string621);
              return call622
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func615.paramCounts = [
            0,
          ];
          func615.variableArities = [
            false,
          ];
          obj567.methods["update"] = func615;
          func615.definitionLine = 182;
          func615.definitionModule = "kitty";
          var func623 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func623.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 206
              lineNumber = 173
              lineNumber = 205
              onSelf = true;
              var call624 = callmethod(this, "background:=", [1], var_background__39__);
              return call624
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func623.paramCounts = [
            1,
          ];
          func623.variableArities = [
            false,
          ];
          obj567.methods["setBackground"] = func623;
          func623.definitionLine = 204;
          func623.definitionModule = "kitty";
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
              lineNumber = 209
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
          obj567.methods["addEntity"] = func625;
          func625.definitionLine = 208;
          func625.definitionModule = "kitty";
          sourceObject = obj567;
          lineNumber = 129
          var string628 = new GraceString("CREATING NEW WORLD...");
          var call629 = Grace_print(string628);
          sourceObject = obj567;
          obj567.data["background"] = undefined;
          var reader_kitty_background_630 = function() {
            return this.data["background"];
          }
          obj567.methods["background"] = reader_kitty_background_630;
          obj567.data["background"] = undefined;
          var writer_kitty_background_630 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj567.methods["background:="] = writer_kitty_background_630;
          reader_kitty_background_630.confidential = true;
          writer_kitty_background_630.confidential = true;
          obj567.mutable = true;
          sourceObject = obj567;
          lineNumber = 132
          var string631 = new GraceString("black");
          obj567.data["backgroundColour"] = string631;
          var reader_kitty_backgroundColour_632 = function() {
            return this.data["backgroundColour"];
          }
          obj567.methods["backgroundColour"] = reader_kitty_backgroundColour_632;
          obj567.data["backgroundColour"] = string631;
          var writer_kitty_backgroundColour_632 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj567.methods["backgroundColour:="] = writer_kitty_backgroundColour_632;
          reader_kitty_backgroundColour_632.confidential = true;
          writer_kitty_backgroundColour_632.confidential = true;
          lineNumber = 134;
          moduleName = "kitty";
          lineNumber = 132
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string631)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj567.mutable = true;
          sourceObject = obj567;
          obj567.data["document"] = undefined;
          var reader_kitty_document_633 = function() {
            return this.data["document"];
          }
          obj567.methods["document"] = reader_kitty_document_633;
          obj567.data["document"] = undefined;
          var writer_kitty_document_633 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj567.methods["document:="] = writer_kitty_document_633;
          reader_kitty_document_633.confidential = true;
          writer_kitty_document_633.confidential = true;
          obj567.mutable = true;
          sourceObject = obj567;
          obj567.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_634 = function() {
            return this.data["backingCanvas"];
          }
          obj567.methods["backingCanvas"] = reader_kitty_backingCanvas_634;
          obj567.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_634 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj567.methods["backingCanvas:="] = writer_kitty_backingCanvas_634;
          reader_kitty_backingCanvas_634.confidential = true;
          writer_kitty_backingCanvas_634.confidential = true;
          obj567.mutable = true;
          sourceObject = obj567;
          obj567.data["backingContext"] = undefined;
          var reader_kitty_backingContext_635 = function() {
            return this.data["backingContext"];
          }
          obj567.methods["backingContext"] = reader_kitty_backingContext_635;
          obj567.data["backingContext"] = undefined;
          var writer_kitty_backingContext_635 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj567.methods["backingContext:="] = writer_kitty_backingContext_635;
          reader_kitty_backingContext_635.confidential = true;
          writer_kitty_backingContext_635.confidential = true;
          obj567.mutable = true;
          sourceObject = obj567;
          obj567.data["canvas"] = undefined;
          var reader_kitty_canvas_636 = function() {
            return this.data["canvas"];
          }
          obj567.methods["canvas"] = reader_kitty_canvas_636;
          obj567.data["canvas"] = undefined;
          var writer_kitty_canvas_636 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj567.methods["canvas:="] = writer_kitty_canvas_636;
          reader_kitty_canvas_636.confidential = true;
          writer_kitty_canvas_636.confidential = true;
          obj567.mutable = true;
          sourceObject = obj567;
          obj567.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_637 = function() {
            return this.data["canvasWidth"];
          }
          obj567.methods["canvasWidth"] = reader_kitty_canvasWidth_637;
          obj567.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_637 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj567.methods["canvasWidth:="] = writer_kitty_canvasWidth_637;
          reader_kitty_canvasWidth_637.confidential = true;
          writer_kitty_canvasWidth_637.confidential = true;
          obj567.mutable = true;
          sourceObject = obj567;
          obj567.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_638 = function() {
            return this.data["canvasHeight"];
          }
          obj567.methods["canvasHeight"] = reader_kitty_canvasHeight_638;
          obj567.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_638 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj567.methods["canvasHeight:="] = writer_kitty_canvasHeight_638;
          reader_kitty_canvasHeight_638.confidential = true;
          writer_kitty_canvasHeight_638.confidential = true;
          obj567.mutable = true;
          sourceObject = obj567;
          lineNumber = 143
          var call639 = callmethod(var_collections,"list", [0]);
          var call640 = callmethod(call639,"new", [0]);
          obj567.data["entities"] = call640;
          var reader_kitty_entities_641 = function() {
            return this.data["entities"];
          }
          obj567.methods["entities"] = reader_kitty_entities_641;
          obj567.data["entities"] = call640;
          var writer_kitty_entities_641 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj567.methods["entities:="] = writer_kitty_entities_641;
          reader_kitty_entities_641.confidential = true;
          writer_kitty_entities_641.confidential = true;
          lineNumber = 145;
          moduleName = "kitty";
          lineNumber = 143
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call640)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj567.mutable = true;
          sourceObject = obj567;
          lineNumber = 145
          var bool642 = new GraceBoolean(false)
          obj567.data["isInit"] = bool642;
          var reader_kitty_isInit_643 = function() {
            return this.data["isInit"];
          }
          obj567.methods["isInit"] = reader_kitty_isInit_643;
          obj567.data["isInit"] = bool642;
          var writer_kitty_isInit_643 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj567.methods["isInit:="] = writer_kitty_isInit_643;
          reader_kitty_isInit_643.confidential = true;
          writer_kitty_isInit_643.confidential = true;
          lineNumber = 147;
          moduleName = "kitty";
          lineNumber = 145
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool642)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj567.mutable = true;
          sourceObject = obj567;
          obj567.data["mctx"] = undefined;
          var reader_kitty_mctx_644 = function() {
            return this.data["mctx"];
          }
          obj567.methods["mctx"] = reader_kitty_mctx_644;
          obj567.data["mctx"] = undefined;
          var writer_kitty_mctx_644 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj567.methods["mctx:="] = writer_kitty_mctx_644;
          reader_kitty_mctx_644.confidential = true;
          writer_kitty_mctx_644.confidential = true;
          obj567.mutable = true;
          sourceObject = obj567;
          lineNumber = 149
          onSelf = true;
          var call645 = callmethod(this, "init", [0]);
          sourceObject = obj567;
          sourceObject = obj567;
          sourceObject = obj567;
          sourceObject = obj567;
          sourceObject = obj567;
          sourceObject = obj567;
          lineNumber = 212
          var string646 = new GraceString("WORLD CREATED");
          var call647 = Grace_print(string646);
          superDepth = origSuperDepth;
        }
        obj_init_567.apply(inheritingObject, []);
        return obj567
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj482.methods["new()object"] = func566;
    var func648 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 127
        var string649 = new GraceString("class KittyWorld");
        return string649
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func648.paramCounts = [
    ];
    func648.variableArities = [
    ];
    obj482.methods["asDebugString"] = func648;
    func648.definitionLine = 127;
    func648.definitionModule = "kitty";
    sourceObject = obj482;
    sourceObject = obj482;
    superDepth = origSuperDepth;
  }
  obj_init_482.apply(obj482, []);
  var var_KittyWorld = obj482;
  lineNumber = 215
  lineNumber = 224
  lineNumber = 240
  lineNumber = 244
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
'dom',
'StandardPrelude',
];
if (gctCache)
  gctCache['kitty'] = "modules:\n StandardPrelude\n mgcollections\nmethods-of:KittyEntity.new:\n update\n setLocation\n onDestroy\n start\n getX\n getY\n image:=\n posX:=\n posY:=\n image\n getRotation\n rotation:=\n awake\n posX\n posY\n draw\n setImage\n rotation\nconstructors-of:KittyImage:\n new\npublic:\n m_world\n m_world:=\n worldSet\n worldSet:=\n KittyImage\n Image\n KittyEntity\n Entity\n KittyWorld\n World\n start\n stop\n setWorld\nmethods-of:KittyImage.new:\n width:=\n height\n draw\n drawBackground\n imgTag\n drawWithSize\n height:=\n width\nfresh:World:\n document:=\n backgroundColour:=\n backingContext:=\n canvasWidth\n document\n backingCanvas:=\n update\n entities\n init\n entities:=\n backingCanvas\n canvasHeight:=\n start\n backingContext\n canvas:=\n backgroundColour\n canvasHeight\n background:=\n canvas\n background\n isInit\n addEntity\n isInit:=\n setBackground\n canvasWidth:=\n mctx\n mctx:=\nmethods-of:KittyWorld.new:\n document:=\n backingContext:=\n backingCanvas\n canvasWidth\n document\n backingCanvas:=\n update\n entities\n init\n entities:=\n backgroundColour:=\n canvasHeight:=\n start\n backingContext\n canvas:=\n backgroundColour\n canvasHeight\n background:=\n canvas\n background\n mctx\n addEntity\n isInit:=\n setBackground\n mctx:=\n isInit\n canvasWidth:=\nconstructors-of:KittyEntity:\n new\npath:\n kitty\nclasses:\n KittyImage\n KittyEntity\n KittyWorld\nfresh:Entity:\n update\n setLocation\n rotation:=\n start\n getX\n getY\n image:=\n posX:=\n posY:=\n image\n rotation\n onDestroy\n awake\n posX\n posY\n draw\n setImage\n getRotation\nconfidential:\nconstructors-of:KittyWorld:\n new\nfresh:Image:\n width:=\n imgTag\n draw\n drawBackground\n height\n width\n height:=\n drawWithSize\nfresh-methods:\n Image\n Entity\n World\n";
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
    "class KittyImage.new(url') {",
    "    ",
    "    print \"CREATING NEW IMAGE: {url'}...\"",
    "    def imgTag = dom.document.createElement(\"img\")",
    "    imgTag.src := url'",
    "",
    "    var height := 64",
    "    var width := 64",
    "",
    "    method draw(ctx') {",
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
    "    print \"CREATED NEW IMAGE: {url'}\"",
    "}",
    "",
    "method Image(url') {",
    "    object {",
    "        inherits KittyImage.new(url')",
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
    "        // mctx.fillStyle := backgroundColour",
    "        // mctx.fillRect(0, 0, canvasWidth, canvasHeight)",
    "        // mctx.drawImage(backingCanvas, 0, 0)",
    "        // background.drawWithSize(mctx, canvasWidth, canvasHeight)",
    "        // background.draw(mctx)",
    "        background.drawBackground(mctx)",
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
    "        background := background'",
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
