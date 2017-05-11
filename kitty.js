function gracecode_kitty () {
  this.definitionModule = "kitty";
  this.definitionLine = 0;
  lineNumber = 45
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
      lineNumber = 46
      var obj1 = Grace_allocObject();
      obj1.definitionModule = "kitty";
      obj1.definitionLine = 46;
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
        lineNumber = 47
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
  func0.definitionLine = 45;
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
      obj5.definitionLine = 46;
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
  lineNumber = 112
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
      lineNumber = 113
      var obj9 = Grace_allocObject();
      obj9.definitionModule = "kitty";
      obj9.definitionLine = 113;
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
        lineNumber = 114
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
  func8.definitionLine = 112;
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
      obj13.definitionLine = 113;
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
  lineNumber = 205
  var func16 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func16.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (World)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 206
      var obj17 = Grace_allocObject();
      obj17.definitionModule = "kitty";
      obj17.definitionLine = 206;
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
        lineNumber = 207
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
  func16.definitionLine = 205;
  func16.definitionModule = "kitty";
  var func20 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj21 = Grace_allocObject();
      obj21.definitionModule = "kitty";
      obj21.definitionLine = 206;
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
  lineNumber = 214
  var func24 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func24.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 216
      var string25 = new GraceString("CHECKING...");
      var call26 = Grace_print(string25);
      lineNumber = 223
      var if27 = var_done;
      lineNumber = 218
      var call28 = callmethod(var_worldSet,"prefix!", [0]);
      if (Grace_isTrue(call28)) {
        lineNumber = 219
        var string29 = new GraceString("NO WORLD!!");
        var call30 = Grace_print(string29);
        lineNumber = 221
        return var_done
      }
      lineNumber = 223
      var string31 = new GraceString("STARTING...");
      var call32 = Grace_print(string31);
      lineNumber = 226
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
  func24.definitionLine = 214;
  func24.definitionModule = "kitty";
  lineNumber = 230
  var func34 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func34.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 231
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
  func34.definitionLine = 230;
  func34.definitionModule = "kitty";
  lineNumber = 234
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
      lineNumber = 236
      lineNumber = 235
      var_m__95__world = var_world__39__;
      lineNumber = 237
      lineNumber = 236
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
  func37.definitionLine = 234;
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
  lineNumber = 226
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
  func40.definitionLine = 226;
  func40.definitionModule = "kitty";
  lineNumber = 226
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
  func41.definitionLine = 226;
  func41.definitionModule = "kitty";
  lineNumber = 13
  lineNumber = 8
  var bool42 = new GraceBoolean(false)
  var var_worldSet = bool42;
  lineNumber = 226
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
  func43.definitionLine = 226;
  func43.definitionModule = "kitty";
  lineNumber = 226
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
  func44.definitionLine = 226;
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
              lineNumber = 37
              onSelf = true;
              var call144 = callmethod(this, "imgTag", [0]);
              var call146 = callmethod(var_width__39__,"prefix-", [0]);
              var quotient148 = callmethod(call146, "/", [1], new GraceNum(2));
              var call150 = callmethod(var_height__39__,"prefix-", [0]);
              var quotient152 = callmethod(call150, "/", [1], new GraceNum(2));
              var call153 = callmethod(var_ctx__39__,"drawImage", [5], call144, quotient148, quotient152, var_width__39__, var_height__39__);
              lineNumber = 38
              var call154 = callmethod(var_ctx__39__,"restore", [0]);
              lineNumber = 39
              var string155 = new GraceString(" DRAWN");
              onSelf = true;
              var call157 = callmethod(this, "imgTag", [0]);
              var call158 = callmethod(call157,"src", [0]);
              var string160 = new GraceString("IMAGE: ");
              var opresult162 = callmethod(string160, "++", [1], call158);
              var opresult164 = callmethod(opresult162, "++", [1], string155);
              var call165 = Grace_print(opresult164);
              return call165
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
          sourceObject = obj49;
          lineNumber = 15
          var string166 = new GraceString("...");
          var string169 = new GraceString("CREATING NEW IMAGE: ");
          var opresult171 = callmethod(string169, "++", [1], var_url__39__);
          var opresult173 = callmethod(opresult171, "++", [1], string166);
          var call174 = Grace_print(opresult173);
          sourceObject = obj49;
          lineNumber = 16
          var string175 = new GraceString("img");
          var call176 = callmethod(var_dom,"document", [0]);
          var call177 = callmethod(call176,"createElement", [1], string175);
          obj49.data["imgTag"] = call177;
          var reader_kitty_imgTag_178 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_178.def = true;
          reader_kitty_imgTag_178.confidential = true;
          obj49.methods["imgTag"] = reader_kitty_imgTag_178;
          lineNumber = 16;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call177)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj49;
          lineNumber = 19
          lineNumber = 16
          lineNumber = 17
          onSelf = true;
          var call179 = callmethod(this, "imgTag", [0]);
          var call180 = callmethod(call179,"src:=", [1], var_url__39__);
          sourceObject = obj49;
          lineNumber = 19
          obj49.data["height"] = new GraceNum(64);
          var reader_kitty_height_181 = function() {
            return this.data["height"];
          }
          obj49.methods["height"] = reader_kitty_height_181;
          obj49.data["height"] = new GraceNum(64);
          var writer_kitty_height_181 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj49.methods["height:="] = writer_kitty_height_181;
          reader_kitty_height_181.confidential = true;
          writer_kitty_height_181.confidential = true;
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
          var reader_kitty_width_182 = function() {
            return this.data["width"];
          }
          obj49.methods["width"] = reader_kitty_width_182;
          obj49.data["width"] = new GraceNum(64);
          var writer_kitty_width_182 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj49.methods["width:="] = writer_kitty_width_182;
          reader_kitty_width_182.confidential = true;
          writer_kitty_width_182.confidential = true;
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
          lineNumber = 42
          var string183 = new GraceString("");
          var string186 = new GraceString("CREATED NEW IMAGE: ");
          var opresult188 = callmethod(string186, "++", [1], var_url__39__);
          var opresult190 = callmethod(opresult188, "++", [1], string183);
          var call191 = Grace_print(opresult190);
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
    var func192 = function(argcv) {
      var curarg = 1;
      var var_url__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj193 = Grace_allocObject();
        obj193.definitionModule = "kitty";
        obj193.definitionLine = 13;
        var inho193 = inheritingObject;
        while (inho193.superobj) inho193 = inho193.superobj;
        inho193.superobj = obj193;
        obj193.data = inheritingObject.data;
        obj193.outer = this;
        var reader_kitty_outer_194 = function() {
          return this.outer;
        }
        obj193.methods["outer"] = reader_kitty_outer_194;
        function obj_init_193() {
          var origSuperDepth = superDepth;
          superDepth = obj193;
          obj193.annotations = [];
          var func195 = function(argcv) {
            var curarg = 1;
            var var_ctx__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func195.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 23
              var string196 = new GraceString(")...");
              onSelf = true;
              var call198 = callmethod(this, "height", [0]);
              var string200 = new GraceString(", ");
              onSelf = true;
              var call202 = callmethod(this, "width", [0]);
              var string204 = new GraceString(" (");
              onSelf = true;
              var call206 = callmethod(this, "imgTag", [0]);
              var call207 = callmethod(call206,"src", [0]);
              var string209 = new GraceString("DRAWING IMAGE: ");
              var opresult211 = callmethod(string209, "++", [1], call207);
              var opresult213 = callmethod(opresult211, "++", [1], string204);
              var opresult215 = callmethod(opresult213, "++", [1], call202);
              var opresult217 = callmethod(opresult215, "++", [1], string200);
              var opresult219 = callmethod(opresult217, "++", [1], call198);
              var opresult221 = callmethod(opresult219, "++", [1], string196);
              var call222 = Grace_print(opresult221);
              lineNumber = 24
              var call223 = callmethod(var_ctx__39__,"save", [0]);
              lineNumber = 25
              var call224 = callmethod(var_ctx__39__,"translate", [2], new GraceNum(0), new GraceNum(0));
              lineNumber = 26
              var opresult229 = callmethod(new GraceNum(180), "+", [1], new GraceNum(180));
              var call230 = callmethod(opresult229,"prefix-", [0]);
              var quotient232 = callmethod(call230, "/", [1], new GraceNum(180));
              var prod234 = callmethod(quotient232, "*", [1], new GraceNum(3.1415));
              var call235 = callmethod(var_ctx__39__,"rotate", [1], prod234);
              lineNumber = 27
              onSelf = true;
              var call236 = callmethod(this, "imgTag", [0]);
              onSelf = true;
              var call238 = callmethod(this, "width", [0]);
              var call239 = callmethod(call238,"prefix-", [0]);
              var quotient241 = callmethod(call239, "/", [1], new GraceNum(2));
              onSelf = true;
              var call243 = callmethod(this, "height", [0]);
              var call244 = callmethod(call243,"prefix-", [0]);
              var quotient246 = callmethod(call244, "/", [1], new GraceNum(2));
              onSelf = true;
              var call247 = callmethod(this, "width", [0]);
              onSelf = true;
              var call248 = callmethod(this, "height", [0]);
              var call249 = callmethod(var_ctx__39__,"drawImage", [5], call236, quotient241, quotient246, call247, call248);
              lineNumber = 28
              var call250 = callmethod(var_ctx__39__,"restore", [0]);
              lineNumber = 29
              var string251 = new GraceString(" DRAWN");
              onSelf = true;
              var call253 = callmethod(this, "imgTag", [0]);
              var call254 = callmethod(call253,"src", [0]);
              var string256 = new GraceString("IMAGE: ");
              var opresult258 = callmethod(string256, "++", [1], call254);
              var opresult260 = callmethod(opresult258, "++", [1], string251);
              var call261 = Grace_print(opresult260);
              return call261
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func195.paramCounts = [
            1,
          ];
          func195.variableArities = [
            false,
          ];
          obj193.methods["draw"] = func195;
          func195.definitionLine = 22;
          func195.definitionModule = "kitty";
          var func262 = function(argcv) {
            var curarg = 1;
            var var_ctx__39__ = arguments[curarg];
            curarg++;
            var var_width__39__ = arguments[curarg];
            curarg++;
            var var_height__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func262.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawWithSize)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 33
              var string263 = new GraceString(")...");
              var string266 = new GraceString(", ");
              var string269 = new GraceString(" (");
              onSelf = true;
              var call271 = callmethod(this, "imgTag", [0]);
              var call272 = callmethod(call271,"src", [0]);
              var string274 = new GraceString("DRAWING IMAGE: ");
              var opresult276 = callmethod(string274, "++", [1], call272);
              var opresult278 = callmethod(opresult276, "++", [1], string269);
              var opresult280 = callmethod(opresult278, "++", [1], var_width__39__);
              var opresult282 = callmethod(opresult280, "++", [1], string266);
              var opresult284 = callmethod(opresult282, "++", [1], var_height__39__);
              var opresult286 = callmethod(opresult284, "++", [1], string263);
              var call287 = Grace_print(opresult286);
              lineNumber = 37
              onSelf = true;
              var call288 = callmethod(this, "imgTag", [0]);
              var call290 = callmethod(var_width__39__,"prefix-", [0]);
              var quotient292 = callmethod(call290, "/", [1], new GraceNum(2));
              var call294 = callmethod(var_height__39__,"prefix-", [0]);
              var quotient296 = callmethod(call294, "/", [1], new GraceNum(2));
              var call297 = callmethod(var_ctx__39__,"drawImage", [5], call288, quotient292, quotient296, var_width__39__, var_height__39__);
              lineNumber = 38
              var call298 = callmethod(var_ctx__39__,"restore", [0]);
              lineNumber = 39
              var string299 = new GraceString(" DRAWN");
              onSelf = true;
              var call301 = callmethod(this, "imgTag", [0]);
              var call302 = callmethod(call301,"src", [0]);
              var string304 = new GraceString("IMAGE: ");
              var opresult306 = callmethod(string304, "++", [1], call302);
              var opresult308 = callmethod(opresult306, "++", [1], string299);
              var call309 = Grace_print(opresult308);
              return call309
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func262.paramCounts = [
            3,
          ];
          func262.variableArities = [
            false,
          ];
          obj193.methods["drawWithSize"] = func262;
          func262.definitionLine = 32;
          func262.definitionModule = "kitty";
          sourceObject = obj193;
          lineNumber = 15
          var string310 = new GraceString("...");
          var string313 = new GraceString("CREATING NEW IMAGE: ");
          var opresult315 = callmethod(string313, "++", [1], var_url__39__);
          var opresult317 = callmethod(opresult315, "++", [1], string310);
          var call318 = Grace_print(opresult317);
          sourceObject = obj193;
          lineNumber = 16
          var string319 = new GraceString("img");
          var call320 = callmethod(var_dom,"document", [0]);
          var call321 = callmethod(call320,"createElement", [1], string319);
          obj193.data["imgTag"] = call321;
          var reader_kitty_imgTag_322 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_322.def = true;
          reader_kitty_imgTag_322.confidential = true;
          obj193.methods["imgTag"] = reader_kitty_imgTag_322;
          lineNumber = 16;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call321)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj193;
          lineNumber = 19
          lineNumber = 16
          lineNumber = 17
          onSelf = true;
          var call323 = callmethod(this, "imgTag", [0]);
          var call324 = callmethod(call323,"src:=", [1], var_url__39__);
          sourceObject = obj193;
          lineNumber = 19
          obj193.data["height"] = new GraceNum(64);
          var reader_kitty_height_325 = function() {
            return this.data["height"];
          }
          obj193.methods["height"] = reader_kitty_height_325;
          obj193.data["height"] = new GraceNum(64);
          var writer_kitty_height_325 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj193.methods["height:="] = writer_kitty_height_325;
          reader_kitty_height_325.confidential = true;
          writer_kitty_height_325.confidential = true;
          lineNumber = 20;
          moduleName = "kitty";
          lineNumber = 19
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(64))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj193.mutable = true;
          sourceObject = obj193;
          lineNumber = 20
          obj193.data["width"] = new GraceNum(64);
          var reader_kitty_width_326 = function() {
            return this.data["width"];
          }
          obj193.methods["width"] = reader_kitty_width_326;
          obj193.data["width"] = new GraceNum(64);
          var writer_kitty_width_326 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj193.methods["width:="] = writer_kitty_width_326;
          reader_kitty_width_326.confidential = true;
          writer_kitty_width_326.confidential = true;
          lineNumber = 22;
          moduleName = "kitty";
          lineNumber = 20
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(64))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj193.mutable = true;
          sourceObject = obj193;
          sourceObject = obj193;
          sourceObject = obj193;
          lineNumber = 42
          var string327 = new GraceString("");
          var string330 = new GraceString("CREATED NEW IMAGE: ");
          var opresult332 = callmethod(string330, "++", [1], var_url__39__);
          var opresult334 = callmethod(opresult332, "++", [1], string327);
          var call335 = Grace_print(opresult334);
          superDepth = origSuperDepth;
        }
        obj_init_193.apply(inheritingObject, []);
        return obj193
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj46.methods["new()object"] = func192;
    var func336 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 13
        var string337 = new GraceString("class KittyImage");
        return string337
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func336.paramCounts = [
    ];
    func336.variableArities = [
    ];
    obj46.methods["asDebugString"] = func336;
    func336.definitionLine = 13;
    func336.definitionModule = "kitty";
    sourceObject = obj46;
    sourceObject = obj46;
    superDepth = origSuperDepth;
  }
  obj_init_46.apply(obj46, []);
  var var_KittyImage = obj46;
  lineNumber = 45
  lineNumber = 52
  var func338 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func338.paramCounts[0])
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
  func338.paramCounts = [
    0,
  ];
  func338.variableArities = [
    false,
  ];
  this.methods["KittyEntity"] = func338;
  func338.definitionLine = 52;
  func338.definitionModule = "kitty";
  var obj339 = Grace_allocObject();
  obj339.definitionModule = "kitty";
  obj339.definitionLine = 52;
  obj339.outer = this;
  var reader_kitty_outer_340 = function() {
    return this.outer;
  }
  obj339.methods["outer"] = reader_kitty_outer_340;
  function obj_init_339() {
    var origSuperDepth = superDepth;
    superDepth = obj339;
    obj339.annotations = [];
    var func341 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func341.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj342 = Grace_allocObject();
        obj342.definitionModule = "kitty";
        obj342.definitionLine = 52;
        obj342.outer = this;
        var reader_kitty_outer_343 = function() {
          return this.outer;
        }
        obj342.methods["outer"] = reader_kitty_outer_343;
        function obj_init_342() {
          var origSuperDepth = superDepth;
          superDepth = obj342;
          obj342.annotations = [];
          var func344 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func344.paramCounts[0])
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
          func344.paramCounts = [
            0,
          ];
          func344.variableArities = [
            false,
          ];
          obj342.methods["awake"] = func344;
          func344.definitionLine = 65;
          func344.definitionModule = "kitty";
          var func345 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func345.paramCounts[0])
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
          func345.paramCounts = [
            0,
          ];
          func345.variableArities = [
            false,
          ];
          obj342.methods["start"] = func345;
          func345.definitionLine = 70;
          func345.definitionModule = "kitty";
          var func346 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func346.paramCounts[0])
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
          func346.paramCounts = [
            0,
          ];
          func346.variableArities = [
            false,
          ];
          obj342.methods["update"] = func346;
          func346.definitionLine = 75;
          func346.definitionModule = "kitty";
          var func347 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func347.paramCounts[0])
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
          func347.paramCounts = [
            0,
          ];
          func347.variableArities = [
            false,
          ];
          obj342.methods["onDestroy"] = func347;
          func347.definitionLine = 80;
          func347.definitionModule = "kitty";
          var func348 = function(argcv) {
            var curarg = 1;
            var var_ctx__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func348.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 85
              onSelf = true;
              var call349 = callmethod(this, "image", [0]);
              var call350 = callmethod(call349,"draw", [1], var_ctx__39__);
              return call350
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func348.paramCounts = [
            1,
          ];
          func348.variableArities = [
            false,
          ];
          obj342.methods["draw"] = func348;
          func348.definitionLine = 84;
          func348.definitionModule = "kitty";
          var func351 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func351.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 90
              lineNumber = 52
              lineNumber = 89
              onSelf = true;
              var call352 = callmethod(this, "image:=", [1], var_image__39__);
              return call352
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func351.paramTypes = [];
          func351.paramTypes.push([]);
          func351.paramCounts = [
            1,
          ];
          func351.variableArities = [
            false,
          ];
          obj342.methods["setImage"] = func351;
          func351.definitionLine = 88;
          func351.definitionModule = "kitty";
          var func353 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func353.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 94
              lineNumber = 52
              lineNumber = 93
              onSelf = true;
              var call354 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 95
              lineNumber = 52
              lineNumber = 94
              onSelf = true;
              var call355 = callmethod(this, "posY:=", [1], var_y);
              return call355
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func353.paramCounts = [
            2,
          ];
          func353.variableArities = [
            false,
          ];
          obj342.methods["setLocation"] = func353;
          func353.definitionLine = 92;
          func353.definitionModule = "kitty";
          var func356 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func356.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 99
              lineNumber = 98
              onSelf = true;
              var call357 = callmethod(this, "posX", [0]);
              return call357
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func356.paramCounts = [
            0,
          ];
          func356.variableArities = [
            false,
          ];
          obj342.methods["getX"] = func356;
          func356.definitionLine = 97;
          func356.definitionModule = "kitty";
          var func358 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func358.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 103
              lineNumber = 102
              onSelf = true;
              var call359 = callmethod(this, "posY", [0]);
              return call359
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func358.paramCounts = [
            0,
          ];
          func358.variableArities = [
            false,
          ];
          obj342.methods["getY"] = func358;
          func358.definitionLine = 101;
          func358.definitionModule = "kitty";
          var func360 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func360.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 107
              lineNumber = 106
              onSelf = true;
              var call361 = callmethod(this, "rotation", [0]);
              return call361
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func360.paramCounts = [
            0,
          ];
          func360.variableArities = [
            false,
          ];
          obj342.methods["getRotation"] = func360;
          func360.definitionLine = 105;
          func360.definitionModule = "kitty";
          sourceObject = obj342;
          lineNumber = 54
          var string362 = new GraceString(")...");
          var string365 = new GraceString(", ");
          var string368 = new GraceString("CREATING ENTITY AT (");
          var opresult370 = callmethod(string368, "++", [1], var_x__39__);
          var opresult372 = callmethod(opresult370, "++", [1], string365);
          var opresult374 = callmethod(opresult372, "++", [1], var_y__39__);
          var opresult376 = callmethod(opresult374, "++", [1], string362);
          var call377 = Grace_print(opresult376);
          sourceObject = obj342;
          lineNumber = 56
          obj342.data["posX"] = var_x__39__;
          var reader_kitty_posX_378 = function() {
            return this.data["posX"];
          }
          obj342.methods["posX"] = reader_kitty_posX_378;
          obj342.data["posX"] = var_x__39__;
          var writer_kitty_posX_378 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj342.methods["posX:="] = writer_kitty_posX_378;
          reader_kitty_posX_378.confidential = true;
          writer_kitty_posX_378.confidential = true;
          lineNumber = 57;
          moduleName = "kitty";
          lineNumber = 56
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj342.mutable = true;
          sourceObject = obj342;
          lineNumber = 57
          obj342.data["posY"] = var_y__39__;
          var reader_kitty_posY_379 = function() {
            return this.data["posY"];
          }
          obj342.methods["posY"] = reader_kitty_posY_379;
          obj342.data["posY"] = var_y__39__;
          var writer_kitty_posY_379 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj342.methods["posY:="] = writer_kitty_posY_379;
          reader_kitty_posY_379.confidential = true;
          writer_kitty_posY_379.confidential = true;
          lineNumber = 58;
          moduleName = "kitty";
          lineNumber = 57
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj342.mutable = true;
          sourceObject = obj342;
          lineNumber = 58
          obj342.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_380 = function() {
            return this.data["rotation"];
          }
          obj342.methods["rotation"] = reader_kitty_rotation_380;
          obj342.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_380 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj342.methods["rotation:="] = writer_kitty_rotation_380;
          reader_kitty_rotation_380.confidential = true;
          writer_kitty_rotation_380.confidential = true;
          lineNumber = 60;
          moduleName = "kitty";
          lineNumber = 58
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj342.mutable = true;
          sourceObject = obj342;
          obj342.data["image"] = undefined;
          var reader_kitty_image_381 = function() {
            return this.data["image"];
          }
          obj342.methods["image"] = reader_kitty_image_381;
          obj342.data["image"] = undefined;
          var writer_kitty_image_381 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj342.methods["image:="] = writer_kitty_image_381;
          reader_kitty_image_381.confidential = true;
          writer_kitty_image_381.confidential = true;
          obj342.mutable = true;
          sourceObject = obj342;
          lineNumber = 62
          onSelf = true;
          var call382 = callmethod(this, "awake", [0]);
          sourceObject = obj342;
          sourceObject = obj342;
          sourceObject = obj342;
          sourceObject = obj342;
          sourceObject = obj342;
          sourceObject = obj342;
          sourceObject = obj342;
          sourceObject = obj342;
          sourceObject = obj342;
          sourceObject = obj342;
          sourceObject = obj342;
          lineNumber = 109
          var string383 = new GraceString("ENTITY CREATED");
          var call384 = Grace_print(string383);
          superDepth = origSuperDepth;
        }
        obj_init_342.apply(obj342, []);
        return obj342
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func341.paramCounts = [
      2,
    ];
    func341.variableArities = [
      false,
    ];
    obj339.methods["new"] = func341;
    func341.definitionLine = 52;
    func341.definitionModule = "kitty";
    var func385 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj386 = Grace_allocObject();
        obj386.definitionModule = "kitty";
        obj386.definitionLine = 52;
        var inho386 = inheritingObject;
        while (inho386.superobj) inho386 = inho386.superobj;
        inho386.superobj = obj386;
        obj386.data = inheritingObject.data;
        obj386.outer = this;
        var reader_kitty_outer_387 = function() {
          return this.outer;
        }
        obj386.methods["outer"] = reader_kitty_outer_387;
        function obj_init_386() {
          var origSuperDepth = superDepth;
          superDepth = obj386;
          obj386.annotations = [];
          var func388 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func388.paramCounts[0])
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
          func388.paramCounts = [
            0,
          ];
          func388.variableArities = [
            false,
          ];
          obj386.methods["awake"] = func388;
          func388.definitionLine = 65;
          func388.definitionModule = "kitty";
          var func389 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func389.paramCounts[0])
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
          func389.paramCounts = [
            0,
          ];
          func389.variableArities = [
            false,
          ];
          obj386.methods["start"] = func389;
          func389.definitionLine = 70;
          func389.definitionModule = "kitty";
          var func390 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func390.paramCounts[0])
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
          func390.paramCounts = [
            0,
          ];
          func390.variableArities = [
            false,
          ];
          obj386.methods["update"] = func390;
          func390.definitionLine = 75;
          func390.definitionModule = "kitty";
          var func391 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func391.paramCounts[0])
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
          func391.paramCounts = [
            0,
          ];
          func391.variableArities = [
            false,
          ];
          obj386.methods["onDestroy"] = func391;
          func391.definitionLine = 80;
          func391.definitionModule = "kitty";
          var func392 = function(argcv) {
            var curarg = 1;
            var var_ctx__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func392.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 85
              onSelf = true;
              var call393 = callmethod(this, "image", [0]);
              var call394 = callmethod(call393,"draw", [1], var_ctx__39__);
              return call394
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func392.paramCounts = [
            1,
          ];
          func392.variableArities = [
            false,
          ];
          obj386.methods["draw"] = func392;
          func392.definitionLine = 84;
          func392.definitionModule = "kitty";
          var func395 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func395.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 90
              lineNumber = 52
              lineNumber = 89
              onSelf = true;
              var call396 = callmethod(this, "image:=", [1], var_image__39__);
              return call396
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func395.paramTypes = [];
          func395.paramTypes.push([]);
          func395.paramCounts = [
            1,
          ];
          func395.variableArities = [
            false,
          ];
          obj386.methods["setImage"] = func395;
          func395.definitionLine = 88;
          func395.definitionModule = "kitty";
          var func397 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func397.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 94
              lineNumber = 52
              lineNumber = 93
              onSelf = true;
              var call398 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 95
              lineNumber = 52
              lineNumber = 94
              onSelf = true;
              var call399 = callmethod(this, "posY:=", [1], var_y);
              return call399
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func397.paramCounts = [
            2,
          ];
          func397.variableArities = [
            false,
          ];
          obj386.methods["setLocation"] = func397;
          func397.definitionLine = 92;
          func397.definitionModule = "kitty";
          var func400 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func400.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 99
              lineNumber = 98
              onSelf = true;
              var call401 = callmethod(this, "posX", [0]);
              return call401
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
          obj386.methods["getX"] = func400;
          func400.definitionLine = 97;
          func400.definitionModule = "kitty";
          var func402 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func402.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 103
              lineNumber = 102
              onSelf = true;
              var call403 = callmethod(this, "posY", [0]);
              return call403
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func402.paramCounts = [
            0,
          ];
          func402.variableArities = [
            false,
          ];
          obj386.methods["getY"] = func402;
          func402.definitionLine = 101;
          func402.definitionModule = "kitty";
          var func404 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func404.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 107
              lineNumber = 106
              onSelf = true;
              var call405 = callmethod(this, "rotation", [0]);
              return call405
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func404.paramCounts = [
            0,
          ];
          func404.variableArities = [
            false,
          ];
          obj386.methods["getRotation"] = func404;
          func404.definitionLine = 105;
          func404.definitionModule = "kitty";
          sourceObject = obj386;
          lineNumber = 54
          var string406 = new GraceString(")...");
          var string409 = new GraceString(", ");
          var string412 = new GraceString("CREATING ENTITY AT (");
          var opresult414 = callmethod(string412, "++", [1], var_x__39__);
          var opresult416 = callmethod(opresult414, "++", [1], string409);
          var opresult418 = callmethod(opresult416, "++", [1], var_y__39__);
          var opresult420 = callmethod(opresult418, "++", [1], string406);
          var call421 = Grace_print(opresult420);
          sourceObject = obj386;
          lineNumber = 56
          obj386.data["posX"] = var_x__39__;
          var reader_kitty_posX_422 = function() {
            return this.data["posX"];
          }
          obj386.methods["posX"] = reader_kitty_posX_422;
          obj386.data["posX"] = var_x__39__;
          var writer_kitty_posX_422 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj386.methods["posX:="] = writer_kitty_posX_422;
          reader_kitty_posX_422.confidential = true;
          writer_kitty_posX_422.confidential = true;
          lineNumber = 57;
          moduleName = "kitty";
          lineNumber = 56
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj386.mutable = true;
          sourceObject = obj386;
          lineNumber = 57
          obj386.data["posY"] = var_y__39__;
          var reader_kitty_posY_423 = function() {
            return this.data["posY"];
          }
          obj386.methods["posY"] = reader_kitty_posY_423;
          obj386.data["posY"] = var_y__39__;
          var writer_kitty_posY_423 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj386.methods["posY:="] = writer_kitty_posY_423;
          reader_kitty_posY_423.confidential = true;
          writer_kitty_posY_423.confidential = true;
          lineNumber = 58;
          moduleName = "kitty";
          lineNumber = 57
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj386.mutable = true;
          sourceObject = obj386;
          lineNumber = 58
          obj386.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_424 = function() {
            return this.data["rotation"];
          }
          obj386.methods["rotation"] = reader_kitty_rotation_424;
          obj386.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_424 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj386.methods["rotation:="] = writer_kitty_rotation_424;
          reader_kitty_rotation_424.confidential = true;
          writer_kitty_rotation_424.confidential = true;
          lineNumber = 60;
          moduleName = "kitty";
          lineNumber = 58
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj386.mutable = true;
          sourceObject = obj386;
          obj386.data["image"] = undefined;
          var reader_kitty_image_425 = function() {
            return this.data["image"];
          }
          obj386.methods["image"] = reader_kitty_image_425;
          obj386.data["image"] = undefined;
          var writer_kitty_image_425 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj386.methods["image:="] = writer_kitty_image_425;
          reader_kitty_image_425.confidential = true;
          writer_kitty_image_425.confidential = true;
          obj386.mutable = true;
          sourceObject = obj386;
          lineNumber = 62
          onSelf = true;
          var call426 = callmethod(this, "awake", [0]);
          sourceObject = obj386;
          sourceObject = obj386;
          sourceObject = obj386;
          sourceObject = obj386;
          sourceObject = obj386;
          sourceObject = obj386;
          sourceObject = obj386;
          sourceObject = obj386;
          sourceObject = obj386;
          sourceObject = obj386;
          sourceObject = obj386;
          lineNumber = 109
          var string427 = new GraceString("ENTITY CREATED");
          var call428 = Grace_print(string427);
          superDepth = origSuperDepth;
        }
        obj_init_386.apply(inheritingObject, []);
        return obj386
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj339.methods["new()object"] = func385;
    var func429 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 52
        var string430 = new GraceString("class KittyEntity");
        return string430
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func429.paramCounts = [
    ];
    func429.variableArities = [
    ];
    obj339.methods["asDebugString"] = func429;
    func429.definitionLine = 52;
    func429.definitionModule = "kitty";
    sourceObject = obj339;
    sourceObject = obj339;
    superDepth = origSuperDepth;
  }
  obj_init_339.apply(obj339, []);
  var var_KittyEntity = obj339;
  lineNumber = 112
  lineNumber = 119
  var func431 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func431.paramCounts[0])
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
  func431.paramCounts = [
    0,
  ];
  func431.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func431;
  func431.definitionLine = 119;
  func431.definitionModule = "kitty";
  var obj432 = Grace_allocObject();
  obj432.definitionModule = "kitty";
  obj432.definitionLine = 119;
  obj432.outer = this;
  var reader_kitty_outer_433 = function() {
    return this.outer;
  }
  obj432.methods["outer"] = reader_kitty_outer_433;
  function obj_init_432() {
    var origSuperDepth = superDepth;
    superDepth = obj432;
    obj432.annotations = [];
    var func434 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func434.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj435 = Grace_allocObject();
        obj435.definitionModule = "kitty";
        obj435.definitionLine = 119;
        obj435.outer = this;
        var reader_kitty_outer_436 = function() {
          return this.outer;
        }
        obj435.methods["outer"] = reader_kitty_outer_436;
        function obj_init_435() {
          var origSuperDepth = superDepth;
          superDepth = obj435;
          obj435.annotations = [];
          var func437 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func437.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 146
              var string438 = new GraceString("INITIALIZING WORLD...");
              var call439 = Grace_print(string438);
              lineNumber = 152
              var if440 = var_done;
              lineNumber = 148
              onSelf = true;
              var call441 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call441)) {
                lineNumber = 150
                lineNumber = 149
                var bool442 = new GraceBoolean(false)
                return bool442
              }
              lineNumber = 153
              lineNumber = 119
              lineNumber = 152
              var call443 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call444 = callmethod(this, "document:=", [1], call443);
              lineNumber = 153
              lineNumber = 152
              lineNumber = 153
              var string445 = new GraceString("standard-canvas");
              onSelf = true;
              var call446 = callmethod(this, "document", [0]);
              var call447 = callmethod(call446,"getElementById", [1], string445);
              onSelf = true;
              var call448 = callmethod(this, "canvas:=", [1], call447);
              lineNumber = 155
              lineNumber = 152
              lineNumber = 154
              onSelf = true;
              var call449 = callmethod(this, "canvas", [0]);
              var call450 = callmethod(call449,"width", [0]);
              onSelf = true;
              var call451 = callmethod(this, "canvasWidth:=", [1], call450);
              lineNumber = 157
              lineNumber = 154
              lineNumber = 155
              onSelf = true;
              var call452 = callmethod(this, "canvas", [0]);
              var call453 = callmethod(call452,"height", [0]);
              onSelf = true;
              var call454 = callmethod(this, "canvasHeight:=", [1], call453);
              lineNumber = 158
              lineNumber = 155
              lineNumber = 157
              var bool455 = new GraceBoolean(true)
              onSelf = true;
              var call456 = callmethod(this, "isInit:=", [1], bool455);
              lineNumber = 158
              var string457 = new GraceString("INITIALIZATION FINISHED");
              var call458 = Grace_print(string457);
              lineNumber = 159
              onSelf = true;
              var call459 = callmethod(this, "start", [0]);
              return call459
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
          obj435.methods["init"] = func437;
          func437.definitionLine = 144;
          func437.definitionModule = "kitty";
          var func460 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func460.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 164
              var string461 = new GraceString("STARTING WORLD...");
              var call462 = Grace_print(string461);
              lineNumber = 165
              lineNumber = 155
              lineNumber = 165
              var string463 = new GraceString("canvas");
              var call464 = callmethod(var_dom,"document", [0]);
              var call465 = callmethod(call464,"createElement", [1], string463);
              onSelf = true;
              var call466 = callmethod(this, "backingCanvas:=", [1], call465);
              lineNumber = 167
              lineNumber = 165
              lineNumber = 166
              onSelf = true;
              var call467 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call468 = callmethod(this, "backingCanvas", [0]);
              var call469 = callmethod(call468,"height:=", [1], call467);
              lineNumber = 168
              lineNumber = 165
              lineNumber = 167
              onSelf = true;
              var call470 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call471 = callmethod(this, "backingCanvas", [0]);
              var call472 = callmethod(call471,"width:=", [1], call470);
              lineNumber = 168
              lineNumber = 165
              lineNumber = 168
              var string473 = new GraceString("2d");
              onSelf = true;
              var call474 = callmethod(this, "backingCanvas", [0]);
              var call475 = callmethod(call474,"getContext", [1], string473);
              onSelf = true;
              var call476 = callmethod(this, "backingContext:=", [1], call475);
              lineNumber = 169
              lineNumber = 165
              lineNumber = 169
              var string477 = new GraceString("2d");
              onSelf = true;
              var call478 = callmethod(this, "canvas", [0]);
              var call479 = callmethod(call478,"getContext", [1], string477);
              onSelf = true;
              var call480 = callmethod(this, "mctx:=", [1], call479);
              lineNumber = 170
              var string481 = new GraceString("WORLD STARTED");
              var call482 = Grace_print(string481);
              return call482
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func460.paramCounts = [
            0,
          ];
          func460.variableArities = [
            false,
          ];
          obj435.methods["start"] = func460;
          func460.definitionLine = 163;
          func460.definitionModule = "kitty";
          var func483 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func483.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 175
              var string484 = new GraceString("UPDATING WORLD...");
              var call485 = Grace_print(string484);
              lineNumber = 179
              lineNumber = 165
              lineNumber = 178
              onSelf = true;
              var call486 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call487 = callmethod(this, "mctx", [0]);
              var call488 = callmethod(call487,"fillStyle:=", [1], call486);
              lineNumber = 179
              onSelf = true;
              var call489 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call490 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call491 = callmethod(this, "mctx", [0]);
              var call492 = callmethod(call491,"fillRect", [4], new GraceNum(0), new GraceNum(0), call489, call490);
              lineNumber = 180
              onSelf = true;
              var call493 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call494 = callmethod(this, "mctx", [0]);
              var call495 = callmethod(call494,"drawImage", [3], call493, new GraceNum(0), new GraceNum(0));
              lineNumber = 181
              onSelf = true;
              var call496 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call497 = callmethod(this, "background", [0]);
              var call498 = callmethod(call497,"drawWithSize", [3], call496, new GraceNum(150), new GraceNum(150));
              lineNumber = 184
              onSelf = true;
              var call499 = callmethod(this, "entities", [0]);
              lineNumber = 188
              var block500 = Grace_allocObject();
              block500.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block500.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block500.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block500.methods["match"] = GraceBlock_match;
              block500.methods["prefix?"] = GraceBlock_lift;
              block500.receiver = this;
              block500.className = 'block<kitty:188>';
              block500.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 185
                onSelf = true;
                var call501 = callmethod(this, "mctx", [0]);
                var call502 = callmethod(var_entity,"draw", [1], call501);
                return call502;
              };
              var call503 = callmethod(Grace_prelude,"for()do", [1, 1], call499, block500);
              lineNumber = 188
              var string504 = new GraceString("WORLD UPDATED");
              var call505 = Grace_print(string504);
              return call505
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func483.paramCounts = [
            0,
          ];
          func483.variableArities = [
            false,
          ];
          obj435.methods["update"] = func483;
          func483.definitionLine = 174;
          func483.definitionModule = "kitty";
          var func506 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func506.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 196
              lineNumber = 165
              lineNumber = 195
              onSelf = true;
              var call507 = callmethod(this, "background:=", [1], var_background__39__);
              return call507
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func506.paramCounts = [
            1,
          ];
          func506.variableArities = [
            false,
          ];
          obj435.methods["setBackground"] = func506;
          func506.definitionLine = 194;
          func506.definitionModule = "kitty";
          var func508 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func508.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 199
              onSelf = true;
              var call509 = callmethod(this, "entities", [0]);
              var call510 = callmethod(call509,"push", [1], var_e);
              return call510
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func508.paramTypes = [];
          func508.paramTypes.push([]);
          func508.paramCounts = [
            1,
          ];
          func508.variableArities = [
            false,
          ];
          obj435.methods["addEntity"] = func508;
          func508.definitionLine = 198;
          func508.definitionModule = "kitty";
          sourceObject = obj435;
          lineNumber = 121
          var string511 = new GraceString("CREATING NEW WORLD...");
          var call512 = Grace_print(string511);
          sourceObject = obj435;
          obj435.data["background"] = undefined;
          var reader_kitty_background_513 = function() {
            return this.data["background"];
          }
          obj435.methods["background"] = reader_kitty_background_513;
          obj435.data["background"] = undefined;
          var writer_kitty_background_513 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj435.methods["background:="] = writer_kitty_background_513;
          reader_kitty_background_513.confidential = true;
          writer_kitty_background_513.confidential = true;
          obj435.mutable = true;
          sourceObject = obj435;
          lineNumber = 124
          var string514 = new GraceString("black");
          obj435.data["backgroundColour"] = string514;
          var reader_kitty_backgroundColour_515 = function() {
            return this.data["backgroundColour"];
          }
          obj435.methods["backgroundColour"] = reader_kitty_backgroundColour_515;
          obj435.data["backgroundColour"] = string514;
          var writer_kitty_backgroundColour_515 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj435.methods["backgroundColour:="] = writer_kitty_backgroundColour_515;
          reader_kitty_backgroundColour_515.confidential = true;
          writer_kitty_backgroundColour_515.confidential = true;
          lineNumber = 126;
          moduleName = "kitty";
          lineNumber = 124
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string514)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj435.mutable = true;
          sourceObject = obj435;
          obj435.data["document"] = undefined;
          var reader_kitty_document_516 = function() {
            return this.data["document"];
          }
          obj435.methods["document"] = reader_kitty_document_516;
          obj435.data["document"] = undefined;
          var writer_kitty_document_516 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj435.methods["document:="] = writer_kitty_document_516;
          reader_kitty_document_516.confidential = true;
          writer_kitty_document_516.confidential = true;
          obj435.mutable = true;
          sourceObject = obj435;
          obj435.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_517 = function() {
            return this.data["backingCanvas"];
          }
          obj435.methods["backingCanvas"] = reader_kitty_backingCanvas_517;
          obj435.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_517 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj435.methods["backingCanvas:="] = writer_kitty_backingCanvas_517;
          reader_kitty_backingCanvas_517.confidential = true;
          writer_kitty_backingCanvas_517.confidential = true;
          obj435.mutable = true;
          sourceObject = obj435;
          obj435.data["backingContext"] = undefined;
          var reader_kitty_backingContext_518 = function() {
            return this.data["backingContext"];
          }
          obj435.methods["backingContext"] = reader_kitty_backingContext_518;
          obj435.data["backingContext"] = undefined;
          var writer_kitty_backingContext_518 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj435.methods["backingContext:="] = writer_kitty_backingContext_518;
          reader_kitty_backingContext_518.confidential = true;
          writer_kitty_backingContext_518.confidential = true;
          obj435.mutable = true;
          sourceObject = obj435;
          obj435.data["canvas"] = undefined;
          var reader_kitty_canvas_519 = function() {
            return this.data["canvas"];
          }
          obj435.methods["canvas"] = reader_kitty_canvas_519;
          obj435.data["canvas"] = undefined;
          var writer_kitty_canvas_519 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj435.methods["canvas:="] = writer_kitty_canvas_519;
          reader_kitty_canvas_519.confidential = true;
          writer_kitty_canvas_519.confidential = true;
          obj435.mutable = true;
          sourceObject = obj435;
          obj435.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_520 = function() {
            return this.data["canvasWidth"];
          }
          obj435.methods["canvasWidth"] = reader_kitty_canvasWidth_520;
          obj435.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_520 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj435.methods["canvasWidth:="] = writer_kitty_canvasWidth_520;
          reader_kitty_canvasWidth_520.confidential = true;
          writer_kitty_canvasWidth_520.confidential = true;
          obj435.mutable = true;
          sourceObject = obj435;
          obj435.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_521 = function() {
            return this.data["canvasHeight"];
          }
          obj435.methods["canvasHeight"] = reader_kitty_canvasHeight_521;
          obj435.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_521 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj435.methods["canvasHeight:="] = writer_kitty_canvasHeight_521;
          reader_kitty_canvasHeight_521.confidential = true;
          writer_kitty_canvasHeight_521.confidential = true;
          obj435.mutable = true;
          sourceObject = obj435;
          lineNumber = 135
          var call522 = callmethod(var_collections,"list", [0]);
          var call523 = callmethod(call522,"new", [0]);
          obj435.data["entities"] = call523;
          var reader_kitty_entities_524 = function() {
            return this.data["entities"];
          }
          obj435.methods["entities"] = reader_kitty_entities_524;
          obj435.data["entities"] = call523;
          var writer_kitty_entities_524 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj435.methods["entities:="] = writer_kitty_entities_524;
          reader_kitty_entities_524.confidential = true;
          writer_kitty_entities_524.confidential = true;
          lineNumber = 137;
          moduleName = "kitty";
          lineNumber = 135
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call523)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj435.mutable = true;
          sourceObject = obj435;
          lineNumber = 137
          var bool525 = new GraceBoolean(false)
          obj435.data["isInit"] = bool525;
          var reader_kitty_isInit_526 = function() {
            return this.data["isInit"];
          }
          obj435.methods["isInit"] = reader_kitty_isInit_526;
          obj435.data["isInit"] = bool525;
          var writer_kitty_isInit_526 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj435.methods["isInit:="] = writer_kitty_isInit_526;
          reader_kitty_isInit_526.confidential = true;
          writer_kitty_isInit_526.confidential = true;
          lineNumber = 139;
          moduleName = "kitty";
          lineNumber = 137
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool525)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj435.mutable = true;
          sourceObject = obj435;
          obj435.data["mctx"] = undefined;
          var reader_kitty_mctx_527 = function() {
            return this.data["mctx"];
          }
          obj435.methods["mctx"] = reader_kitty_mctx_527;
          obj435.data["mctx"] = undefined;
          var writer_kitty_mctx_527 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj435.methods["mctx:="] = writer_kitty_mctx_527;
          reader_kitty_mctx_527.confidential = true;
          writer_kitty_mctx_527.confidential = true;
          obj435.mutable = true;
          sourceObject = obj435;
          lineNumber = 141
          onSelf = true;
          var call528 = callmethod(this, "init", [0]);
          sourceObject = obj435;
          sourceObject = obj435;
          sourceObject = obj435;
          sourceObject = obj435;
          sourceObject = obj435;
          sourceObject = obj435;
          lineNumber = 202
          var string529 = new GraceString("WORLD CREATED");
          var call530 = Grace_print(string529);
          superDepth = origSuperDepth;
        }
        obj_init_435.apply(obj435, []);
        return obj435
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func434.paramCounts = [
      0,
    ];
    func434.variableArities = [
      false,
    ];
    obj432.methods["new"] = func434;
    func434.definitionLine = 119;
    func434.definitionModule = "kitty";
    var func531 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj532 = Grace_allocObject();
        obj532.definitionModule = "kitty";
        obj532.definitionLine = 119;
        var inho532 = inheritingObject;
        while (inho532.superobj) inho532 = inho532.superobj;
        inho532.superobj = obj532;
        obj532.data = inheritingObject.data;
        obj532.outer = this;
        var reader_kitty_outer_533 = function() {
          return this.outer;
        }
        obj532.methods["outer"] = reader_kitty_outer_533;
        function obj_init_532() {
          var origSuperDepth = superDepth;
          superDepth = obj532;
          obj532.annotations = [];
          var func534 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func534.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 146
              var string535 = new GraceString("INITIALIZING WORLD...");
              var call536 = Grace_print(string535);
              lineNumber = 152
              var if537 = var_done;
              lineNumber = 148
              onSelf = true;
              var call538 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call538)) {
                lineNumber = 150
                lineNumber = 149
                var bool539 = new GraceBoolean(false)
                return bool539
              }
              lineNumber = 153
              lineNumber = 135
              lineNumber = 152
              var call540 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call541 = callmethod(this, "document:=", [1], call540);
              lineNumber = 153
              lineNumber = 152
              lineNumber = 153
              var string542 = new GraceString("standard-canvas");
              onSelf = true;
              var call543 = callmethod(this, "document", [0]);
              var call544 = callmethod(call543,"getElementById", [1], string542);
              onSelf = true;
              var call545 = callmethod(this, "canvas:=", [1], call544);
              lineNumber = 155
              lineNumber = 152
              lineNumber = 154
              onSelf = true;
              var call546 = callmethod(this, "canvas", [0]);
              var call547 = callmethod(call546,"width", [0]);
              onSelf = true;
              var call548 = callmethod(this, "canvasWidth:=", [1], call547);
              lineNumber = 157
              lineNumber = 154
              lineNumber = 155
              onSelf = true;
              var call549 = callmethod(this, "canvas", [0]);
              var call550 = callmethod(call549,"height", [0]);
              onSelf = true;
              var call551 = callmethod(this, "canvasHeight:=", [1], call550);
              lineNumber = 158
              lineNumber = 155
              lineNumber = 157
              var bool552 = new GraceBoolean(true)
              onSelf = true;
              var call553 = callmethod(this, "isInit:=", [1], bool552);
              lineNumber = 158
              var string554 = new GraceString("INITIALIZATION FINISHED");
              var call555 = Grace_print(string554);
              lineNumber = 159
              onSelf = true;
              var call556 = callmethod(this, "start", [0]);
              return call556
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
          obj532.methods["init"] = func534;
          func534.definitionLine = 144;
          func534.definitionModule = "kitty";
          var func557 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func557.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 164
              var string558 = new GraceString("STARTING WORLD...");
              var call559 = Grace_print(string558);
              lineNumber = 165
              lineNumber = 155
              lineNumber = 165
              var string560 = new GraceString("canvas");
              var call561 = callmethod(var_dom,"document", [0]);
              var call562 = callmethod(call561,"createElement", [1], string560);
              onSelf = true;
              var call563 = callmethod(this, "backingCanvas:=", [1], call562);
              lineNumber = 167
              lineNumber = 165
              lineNumber = 166
              onSelf = true;
              var call564 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call565 = callmethod(this, "backingCanvas", [0]);
              var call566 = callmethod(call565,"height:=", [1], call564);
              lineNumber = 168
              lineNumber = 165
              lineNumber = 167
              onSelf = true;
              var call567 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call568 = callmethod(this, "backingCanvas", [0]);
              var call569 = callmethod(call568,"width:=", [1], call567);
              lineNumber = 168
              lineNumber = 165
              lineNumber = 168
              var string570 = new GraceString("2d");
              onSelf = true;
              var call571 = callmethod(this, "backingCanvas", [0]);
              var call572 = callmethod(call571,"getContext", [1], string570);
              onSelf = true;
              var call573 = callmethod(this, "backingContext:=", [1], call572);
              lineNumber = 169
              lineNumber = 165
              lineNumber = 169
              var string574 = new GraceString("2d");
              onSelf = true;
              var call575 = callmethod(this, "canvas", [0]);
              var call576 = callmethod(call575,"getContext", [1], string574);
              onSelf = true;
              var call577 = callmethod(this, "mctx:=", [1], call576);
              lineNumber = 170
              var string578 = new GraceString("WORLD STARTED");
              var call579 = Grace_print(string578);
              return call579
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func557.paramCounts = [
            0,
          ];
          func557.variableArities = [
            false,
          ];
          obj532.methods["start"] = func557;
          func557.definitionLine = 163;
          func557.definitionModule = "kitty";
          var func580 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func580.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 175
              var string581 = new GraceString("UPDATING WORLD...");
              var call582 = Grace_print(string581);
              lineNumber = 179
              lineNumber = 165
              lineNumber = 178
              onSelf = true;
              var call583 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call584 = callmethod(this, "mctx", [0]);
              var call585 = callmethod(call584,"fillStyle:=", [1], call583);
              lineNumber = 179
              onSelf = true;
              var call586 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call587 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call588 = callmethod(this, "mctx", [0]);
              var call589 = callmethod(call588,"fillRect", [4], new GraceNum(0), new GraceNum(0), call586, call587);
              lineNumber = 180
              onSelf = true;
              var call590 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call591 = callmethod(this, "mctx", [0]);
              var call592 = callmethod(call591,"drawImage", [3], call590, new GraceNum(0), new GraceNum(0));
              lineNumber = 181
              onSelf = true;
              var call593 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call594 = callmethod(this, "background", [0]);
              var call595 = callmethod(call594,"drawWithSize", [3], call593, new GraceNum(150), new GraceNum(150));
              lineNumber = 184
              onSelf = true;
              var call596 = callmethod(this, "entities", [0]);
              lineNumber = 188
              var block597 = Grace_allocObject();
              block597.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block597.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block597.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block597.methods["match"] = GraceBlock_match;
              block597.methods["prefix?"] = GraceBlock_lift;
              block597.receiver = this;
              block597.className = 'block<kitty:188>';
              block597.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 185
                onSelf = true;
                var call598 = callmethod(this, "mctx", [0]);
                var call599 = callmethod(var_entity,"draw", [1], call598);
                return call599;
              };
              var call600 = callmethod(Grace_prelude,"for()do", [1, 1], call596, block597);
              lineNumber = 188
              var string601 = new GraceString("WORLD UPDATED");
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
          func580.paramCounts = [
            0,
          ];
          func580.variableArities = [
            false,
          ];
          obj532.methods["update"] = func580;
          func580.definitionLine = 174;
          func580.definitionModule = "kitty";
          var func603 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func603.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 196
              lineNumber = 165
              lineNumber = 195
              onSelf = true;
              var call604 = callmethod(this, "background:=", [1], var_background__39__);
              return call604
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func603.paramCounts = [
            1,
          ];
          func603.variableArities = [
            false,
          ];
          obj532.methods["setBackground"] = func603;
          func603.definitionLine = 194;
          func603.definitionModule = "kitty";
          var func605 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func605.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 199
              onSelf = true;
              var call606 = callmethod(this, "entities", [0]);
              var call607 = callmethod(call606,"push", [1], var_e);
              return call607
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func605.paramTypes = [];
          func605.paramTypes.push([]);
          func605.paramCounts = [
            1,
          ];
          func605.variableArities = [
            false,
          ];
          obj532.methods["addEntity"] = func605;
          func605.definitionLine = 198;
          func605.definitionModule = "kitty";
          sourceObject = obj532;
          lineNumber = 121
          var string608 = new GraceString("CREATING NEW WORLD...");
          var call609 = Grace_print(string608);
          sourceObject = obj532;
          obj532.data["background"] = undefined;
          var reader_kitty_background_610 = function() {
            return this.data["background"];
          }
          obj532.methods["background"] = reader_kitty_background_610;
          obj532.data["background"] = undefined;
          var writer_kitty_background_610 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj532.methods["background:="] = writer_kitty_background_610;
          reader_kitty_background_610.confidential = true;
          writer_kitty_background_610.confidential = true;
          obj532.mutable = true;
          sourceObject = obj532;
          lineNumber = 124
          var string611 = new GraceString("black");
          obj532.data["backgroundColour"] = string611;
          var reader_kitty_backgroundColour_612 = function() {
            return this.data["backgroundColour"];
          }
          obj532.methods["backgroundColour"] = reader_kitty_backgroundColour_612;
          obj532.data["backgroundColour"] = string611;
          var writer_kitty_backgroundColour_612 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj532.methods["backgroundColour:="] = writer_kitty_backgroundColour_612;
          reader_kitty_backgroundColour_612.confidential = true;
          writer_kitty_backgroundColour_612.confidential = true;
          lineNumber = 126;
          moduleName = "kitty";
          lineNumber = 124
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string611)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj532.mutable = true;
          sourceObject = obj532;
          obj532.data["document"] = undefined;
          var reader_kitty_document_613 = function() {
            return this.data["document"];
          }
          obj532.methods["document"] = reader_kitty_document_613;
          obj532.data["document"] = undefined;
          var writer_kitty_document_613 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj532.methods["document:="] = writer_kitty_document_613;
          reader_kitty_document_613.confidential = true;
          writer_kitty_document_613.confidential = true;
          obj532.mutable = true;
          sourceObject = obj532;
          obj532.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_614 = function() {
            return this.data["backingCanvas"];
          }
          obj532.methods["backingCanvas"] = reader_kitty_backingCanvas_614;
          obj532.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_614 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj532.methods["backingCanvas:="] = writer_kitty_backingCanvas_614;
          reader_kitty_backingCanvas_614.confidential = true;
          writer_kitty_backingCanvas_614.confidential = true;
          obj532.mutable = true;
          sourceObject = obj532;
          obj532.data["backingContext"] = undefined;
          var reader_kitty_backingContext_615 = function() {
            return this.data["backingContext"];
          }
          obj532.methods["backingContext"] = reader_kitty_backingContext_615;
          obj532.data["backingContext"] = undefined;
          var writer_kitty_backingContext_615 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj532.methods["backingContext:="] = writer_kitty_backingContext_615;
          reader_kitty_backingContext_615.confidential = true;
          writer_kitty_backingContext_615.confidential = true;
          obj532.mutable = true;
          sourceObject = obj532;
          obj532.data["canvas"] = undefined;
          var reader_kitty_canvas_616 = function() {
            return this.data["canvas"];
          }
          obj532.methods["canvas"] = reader_kitty_canvas_616;
          obj532.data["canvas"] = undefined;
          var writer_kitty_canvas_616 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj532.methods["canvas:="] = writer_kitty_canvas_616;
          reader_kitty_canvas_616.confidential = true;
          writer_kitty_canvas_616.confidential = true;
          obj532.mutable = true;
          sourceObject = obj532;
          obj532.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_617 = function() {
            return this.data["canvasWidth"];
          }
          obj532.methods["canvasWidth"] = reader_kitty_canvasWidth_617;
          obj532.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_617 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj532.methods["canvasWidth:="] = writer_kitty_canvasWidth_617;
          reader_kitty_canvasWidth_617.confidential = true;
          writer_kitty_canvasWidth_617.confidential = true;
          obj532.mutable = true;
          sourceObject = obj532;
          obj532.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_618 = function() {
            return this.data["canvasHeight"];
          }
          obj532.methods["canvasHeight"] = reader_kitty_canvasHeight_618;
          obj532.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_618 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj532.methods["canvasHeight:="] = writer_kitty_canvasHeight_618;
          reader_kitty_canvasHeight_618.confidential = true;
          writer_kitty_canvasHeight_618.confidential = true;
          obj532.mutable = true;
          sourceObject = obj532;
          lineNumber = 135
          var call619 = callmethod(var_collections,"list", [0]);
          var call620 = callmethod(call619,"new", [0]);
          obj532.data["entities"] = call620;
          var reader_kitty_entities_621 = function() {
            return this.data["entities"];
          }
          obj532.methods["entities"] = reader_kitty_entities_621;
          obj532.data["entities"] = call620;
          var writer_kitty_entities_621 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj532.methods["entities:="] = writer_kitty_entities_621;
          reader_kitty_entities_621.confidential = true;
          writer_kitty_entities_621.confidential = true;
          lineNumber = 137;
          moduleName = "kitty";
          lineNumber = 135
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call620)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj532.mutable = true;
          sourceObject = obj532;
          lineNumber = 137
          var bool622 = new GraceBoolean(false)
          obj532.data["isInit"] = bool622;
          var reader_kitty_isInit_623 = function() {
            return this.data["isInit"];
          }
          obj532.methods["isInit"] = reader_kitty_isInit_623;
          obj532.data["isInit"] = bool622;
          var writer_kitty_isInit_623 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj532.methods["isInit:="] = writer_kitty_isInit_623;
          reader_kitty_isInit_623.confidential = true;
          writer_kitty_isInit_623.confidential = true;
          lineNumber = 139;
          moduleName = "kitty";
          lineNumber = 137
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool622)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj532.mutable = true;
          sourceObject = obj532;
          obj532.data["mctx"] = undefined;
          var reader_kitty_mctx_624 = function() {
            return this.data["mctx"];
          }
          obj532.methods["mctx"] = reader_kitty_mctx_624;
          obj532.data["mctx"] = undefined;
          var writer_kitty_mctx_624 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj532.methods["mctx:="] = writer_kitty_mctx_624;
          reader_kitty_mctx_624.confidential = true;
          writer_kitty_mctx_624.confidential = true;
          obj532.mutable = true;
          sourceObject = obj532;
          lineNumber = 141
          onSelf = true;
          var call625 = callmethod(this, "init", [0]);
          sourceObject = obj532;
          sourceObject = obj532;
          sourceObject = obj532;
          sourceObject = obj532;
          sourceObject = obj532;
          sourceObject = obj532;
          lineNumber = 202
          var string626 = new GraceString("WORLD CREATED");
          var call627 = Grace_print(string626);
          superDepth = origSuperDepth;
        }
        obj_init_532.apply(inheritingObject, []);
        return obj532
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj432.methods["new()object"] = func531;
    var func628 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 119
        var string629 = new GraceString("class KittyWorld");
        return string629
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func628.paramCounts = [
    ];
    func628.variableArities = [
    ];
    obj432.methods["asDebugString"] = func628;
    func628.definitionLine = 119;
    func628.definitionModule = "kitty";
    sourceObject = obj432;
    sourceObject = obj432;
    superDepth = origSuperDepth;
  }
  obj_init_432.apply(obj432, []);
  var var_KittyWorld = obj432;
  lineNumber = 205
  lineNumber = 214
  lineNumber = 230
  lineNumber = 234
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
'dom',
'StandardPrelude',
];
if (gctCache)
  gctCache['kitty'] = "path:\n kitty\nclasses:\n KittyImage\n KittyEntity\n KittyWorld\nfresh:Entity:\n awake\n getRotation\n getX\n getY\n posX:=\n posY:=\n setLocation\n rotation:=\n posX\n posY\n start\n setImage\n rotation\n image\n draw\n image:=\n update\n onDestroy\nconfidential:\nconstructors-of:KittyWorld:\n new\nfresh:Image:\n imgTag\n height\n draw\n height:=\n width\n drawWithSize\n width:=\nconstructors-of:KittyImage:\n new\nmodules:\n StandardPrelude\n mgcollections\nmethods-of:KittyEntity.new:\n awake\n getRotation\n getX\n getY\n posX:=\n posY:=\n setLocation\n rotation:=\n posX\n posY\n start\n setImage\n rotation\n image\n draw\n image:=\n update\n onDestroy\nfresh-methods:\n Image\n Entity\n World\npublic:\n m_world\n m_world:=\n worldSet\n worldSet:=\n KittyImage\n Image\n KittyEntity\n Entity\n KittyWorld\n World\n start\n stop\n setWorld\nmethods-of:KittyImage.new:\n imgTag\n height\n draw\n height:=\n width\n drawWithSize\n width:=\nmethods-of:KittyWorld.new:\n backgroundColour:=\n canvasHeight:=\n backingContext:=\n canvasWidth:=\n backgroundColour\n canvasHeight\n background:=\n canvas\n background\n backingCanvas:=\n mctx\n setBackground\n isInit:=\n canvas:=\n backingCanvas\n isInit\n start\n backingContext\n mctx:=\n init\n document:=\n update\n entities:=\n document\n canvasWidth\n entities\n addEntity\nfresh:World:\n backgroundColour:=\n canvasHeight:=\n backingContext:=\n canvasWidth:=\n backgroundColour\n canvasHeight\n background:=\n canvas\n background\n backingCanvas:=\n entities:=\n setBackground\n isInit:=\n canvas:=\n backingCanvas\n init\n start\n isInit\n mctx:=\n document:=\n canvasWidth\n mctx\n backingContext\n update\n entities\n addEntity\n document\nconstructors-of:KittyEntity:\n new\n";
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
    "        ctx'.drawImage(imgTag, -width' / 2, -height' / 2, width', height')",
    "        ctx'.restore",
    "        print \"IMAGE: {imgTag.src} DRAWN\"",
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
    "        mctx.fillStyle := backgroundColour",
    "        mctx.fillRect(0, 0, canvasWidth, canvasHeight)",
    "        mctx.drawImage(backingCanvas, 0, 0)",
    "        background.drawWithSize(mctx, 150, 150)",
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
