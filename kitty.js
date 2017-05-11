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
  lineNumber = 204
  var func16 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func16.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (World)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 205
      var obj17 = Grace_allocObject();
      obj17.definitionModule = "kitty";
      obj17.definitionLine = 205;
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
        lineNumber = 206
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
  func16.definitionLine = 204;
  func16.definitionModule = "kitty";
  var func20 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj21 = Grace_allocObject();
      obj21.definitionModule = "kitty";
      obj21.definitionLine = 205;
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
  lineNumber = 213
  var func24 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func24.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 215
      var string25 = new GraceString("CHECKING...");
      var call26 = Grace_print(string25);
      lineNumber = 222
      var if27 = var_done;
      lineNumber = 217
      var call28 = callmethod(var_worldSet,"prefix!", [0]);
      if (Grace_isTrue(call28)) {
        lineNumber = 218
        var string29 = new GraceString("NO WORLD!!");
        var call30 = Grace_print(string29);
        lineNumber = 220
        return var_done
      }
      lineNumber = 222
      var string31 = new GraceString("STARTING...");
      var call32 = Grace_print(string31);
      lineNumber = 225
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
  func24.definitionLine = 213;
  func24.definitionModule = "kitty";
  lineNumber = 229
  var func34 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func34.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 230
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
  func34.definitionLine = 229;
  func34.definitionModule = "kitty";
  lineNumber = 233
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
      lineNumber = 235
      lineNumber = 234
      var_m__95__world = var_world__39__;
      lineNumber = 236
      lineNumber = 235
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
  func37.definitionLine = 233;
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
  lineNumber = 225
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
  func40.definitionLine = 225;
  func40.definitionModule = "kitty";
  lineNumber = 225
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
  func41.definitionLine = 225;
  func41.definitionModule = "kitty";
  lineNumber = 13
  lineNumber = 8
  var bool42 = new GraceBoolean(false)
  var var_worldSet = bool42;
  lineNumber = 225
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
  func43.definitionLine = 225;
  func43.definitionModule = "kitty";
  lineNumber = 225
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
  func44.definitionLine = 225;
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
              lineNumber = 34
              var call144 = callmethod(var_ctx__39__,"save", [0]);
              lineNumber = 35
              var call145 = callmethod(var_ctx__39__,"translate", [2], new GraceNum(0), new GraceNum(0));
              lineNumber = 36
              var opresult150 = callmethod(new GraceNum(180), "+", [1], new GraceNum(180));
              var call151 = callmethod(opresult150,"prefix-", [0]);
              var quotient153 = callmethod(call151, "/", [1], new GraceNum(180));
              var prod155 = callmethod(quotient153, "*", [1], new GraceNum(3.1415));
              var call156 = callmethod(var_ctx__39__,"rotate", [1], prod155);
              lineNumber = 37
              onSelf = true;
              var call157 = callmethod(this, "imgTag", [0]);
              var call159 = callmethod(var_width__39__,"prefix-", [0]);
              var quotient161 = callmethod(call159, "/", [1], new GraceNum(2));
              var call163 = callmethod(var_height__39__,"prefix-", [0]);
              var quotient165 = callmethod(call163, "/", [1], new GraceNum(2));
              var call166 = callmethod(var_ctx__39__,"drawImage", [5], call157, quotient161, quotient165, var_width__39__, var_height__39__);
              lineNumber = 38
              var call167 = callmethod(var_ctx__39__,"restore", [0]);
              lineNumber = 39
              var string168 = new GraceString(" DRAWN");
              onSelf = true;
              var call170 = callmethod(this, "imgTag", [0]);
              var call171 = callmethod(call170,"src", [0]);
              var string173 = new GraceString("IMAGE: ");
              var opresult175 = callmethod(string173, "++", [1], call171);
              var opresult177 = callmethod(opresult175, "++", [1], string168);
              var call178 = Grace_print(opresult177);
              return call178
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
          var string179 = new GraceString("...");
          var string182 = new GraceString("CREATING NEW IMAGE: ");
          var opresult184 = callmethod(string182, "++", [1], var_url__39__);
          var opresult186 = callmethod(opresult184, "++", [1], string179);
          var call187 = Grace_print(opresult186);
          sourceObject = obj49;
          lineNumber = 16
          var string188 = new GraceString("img");
          var call189 = callmethod(var_dom,"document", [0]);
          var call190 = callmethod(call189,"createElement", [1], string188);
          obj49.data["imgTag"] = call190;
          var reader_kitty_imgTag_191 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_191.def = true;
          reader_kitty_imgTag_191.confidential = true;
          obj49.methods["imgTag"] = reader_kitty_imgTag_191;
          lineNumber = 16;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call190)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj49;
          lineNumber = 19
          lineNumber = 16
          lineNumber = 17
          onSelf = true;
          var call192 = callmethod(this, "imgTag", [0]);
          var call193 = callmethod(call192,"src:=", [1], var_url__39__);
          sourceObject = obj49;
          lineNumber = 19
          obj49.data["height"] = new GraceNum(64);
          var reader_kitty_height_194 = function() {
            return this.data["height"];
          }
          obj49.methods["height"] = reader_kitty_height_194;
          obj49.data["height"] = new GraceNum(64);
          var writer_kitty_height_194 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj49.methods["height:="] = writer_kitty_height_194;
          reader_kitty_height_194.confidential = true;
          writer_kitty_height_194.confidential = true;
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
          var reader_kitty_width_195 = function() {
            return this.data["width"];
          }
          obj49.methods["width"] = reader_kitty_width_195;
          obj49.data["width"] = new GraceNum(64);
          var writer_kitty_width_195 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj49.methods["width:="] = writer_kitty_width_195;
          reader_kitty_width_195.confidential = true;
          writer_kitty_width_195.confidential = true;
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
          var string196 = new GraceString("");
          var string199 = new GraceString("CREATED NEW IMAGE: ");
          var opresult201 = callmethod(string199, "++", [1], var_url__39__);
          var opresult203 = callmethod(opresult201, "++", [1], string196);
          var call204 = Grace_print(opresult203);
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
    var func205 = function(argcv) {
      var curarg = 1;
      var var_url__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj206 = Grace_allocObject();
        obj206.definitionModule = "kitty";
        obj206.definitionLine = 13;
        var inho206 = inheritingObject;
        while (inho206.superobj) inho206 = inho206.superobj;
        inho206.superobj = obj206;
        obj206.data = inheritingObject.data;
        obj206.outer = this;
        var reader_kitty_outer_207 = function() {
          return this.outer;
        }
        obj206.methods["outer"] = reader_kitty_outer_207;
        function obj_init_206() {
          var origSuperDepth = superDepth;
          superDepth = obj206;
          obj206.annotations = [];
          var func208 = function(argcv) {
            var curarg = 1;
            var var_ctx__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func208.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 23
              var string209 = new GraceString(")...");
              onSelf = true;
              var call211 = callmethod(this, "height", [0]);
              var string213 = new GraceString(", ");
              onSelf = true;
              var call215 = callmethod(this, "width", [0]);
              var string217 = new GraceString(" (");
              onSelf = true;
              var call219 = callmethod(this, "imgTag", [0]);
              var call220 = callmethod(call219,"src", [0]);
              var string222 = new GraceString("DRAWING IMAGE: ");
              var opresult224 = callmethod(string222, "++", [1], call220);
              var opresult226 = callmethod(opresult224, "++", [1], string217);
              var opresult228 = callmethod(opresult226, "++", [1], call215);
              var opresult230 = callmethod(opresult228, "++", [1], string213);
              var opresult232 = callmethod(opresult230, "++", [1], call211);
              var opresult234 = callmethod(opresult232, "++", [1], string209);
              var call235 = Grace_print(opresult234);
              lineNumber = 24
              var call236 = callmethod(var_ctx__39__,"save", [0]);
              lineNumber = 25
              var call237 = callmethod(var_ctx__39__,"translate", [2], new GraceNum(0), new GraceNum(0));
              lineNumber = 26
              var opresult242 = callmethod(new GraceNum(180), "+", [1], new GraceNum(180));
              var call243 = callmethod(opresult242,"prefix-", [0]);
              var quotient245 = callmethod(call243, "/", [1], new GraceNum(180));
              var prod247 = callmethod(quotient245, "*", [1], new GraceNum(3.1415));
              var call248 = callmethod(var_ctx__39__,"rotate", [1], prod247);
              lineNumber = 27
              onSelf = true;
              var call249 = callmethod(this, "imgTag", [0]);
              onSelf = true;
              var call251 = callmethod(this, "width", [0]);
              var call252 = callmethod(call251,"prefix-", [0]);
              var quotient254 = callmethod(call252, "/", [1], new GraceNum(2));
              onSelf = true;
              var call256 = callmethod(this, "height", [0]);
              var call257 = callmethod(call256,"prefix-", [0]);
              var quotient259 = callmethod(call257, "/", [1], new GraceNum(2));
              onSelf = true;
              var call260 = callmethod(this, "width", [0]);
              onSelf = true;
              var call261 = callmethod(this, "height", [0]);
              var call262 = callmethod(var_ctx__39__,"drawImage", [5], call249, quotient254, quotient259, call260, call261);
              lineNumber = 28
              var call263 = callmethod(var_ctx__39__,"restore", [0]);
              lineNumber = 29
              var string264 = new GraceString(" DRAWN");
              onSelf = true;
              var call266 = callmethod(this, "imgTag", [0]);
              var call267 = callmethod(call266,"src", [0]);
              var string269 = new GraceString("IMAGE: ");
              var opresult271 = callmethod(string269, "++", [1], call267);
              var opresult273 = callmethod(opresult271, "++", [1], string264);
              var call274 = Grace_print(opresult273);
              return call274
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func208.paramCounts = [
            1,
          ];
          func208.variableArities = [
            false,
          ];
          obj206.methods["draw"] = func208;
          func208.definitionLine = 22;
          func208.definitionModule = "kitty";
          var func275 = function(argcv) {
            var curarg = 1;
            var var_ctx__39__ = arguments[curarg];
            curarg++;
            var var_width__39__ = arguments[curarg];
            curarg++;
            var var_height__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func275.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawWithSize)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 33
              var string276 = new GraceString(")...");
              var string279 = new GraceString(", ");
              var string282 = new GraceString(" (");
              onSelf = true;
              var call284 = callmethod(this, "imgTag", [0]);
              var call285 = callmethod(call284,"src", [0]);
              var string287 = new GraceString("DRAWING IMAGE: ");
              var opresult289 = callmethod(string287, "++", [1], call285);
              var opresult291 = callmethod(opresult289, "++", [1], string282);
              var opresult293 = callmethod(opresult291, "++", [1], var_width__39__);
              var opresult295 = callmethod(opresult293, "++", [1], string279);
              var opresult297 = callmethod(opresult295, "++", [1], var_height__39__);
              var opresult299 = callmethod(opresult297, "++", [1], string276);
              var call300 = Grace_print(opresult299);
              lineNumber = 34
              var call301 = callmethod(var_ctx__39__,"save", [0]);
              lineNumber = 35
              var call302 = callmethod(var_ctx__39__,"translate", [2], new GraceNum(0), new GraceNum(0));
              lineNumber = 36
              var opresult307 = callmethod(new GraceNum(180), "+", [1], new GraceNum(180));
              var call308 = callmethod(opresult307,"prefix-", [0]);
              var quotient310 = callmethod(call308, "/", [1], new GraceNum(180));
              var prod312 = callmethod(quotient310, "*", [1], new GraceNum(3.1415));
              var call313 = callmethod(var_ctx__39__,"rotate", [1], prod312);
              lineNumber = 37
              onSelf = true;
              var call314 = callmethod(this, "imgTag", [0]);
              var call316 = callmethod(var_width__39__,"prefix-", [0]);
              var quotient318 = callmethod(call316, "/", [1], new GraceNum(2));
              var call320 = callmethod(var_height__39__,"prefix-", [0]);
              var quotient322 = callmethod(call320, "/", [1], new GraceNum(2));
              var call323 = callmethod(var_ctx__39__,"drawImage", [5], call314, quotient318, quotient322, var_width__39__, var_height__39__);
              lineNumber = 38
              var call324 = callmethod(var_ctx__39__,"restore", [0]);
              lineNumber = 39
              var string325 = new GraceString(" DRAWN");
              onSelf = true;
              var call327 = callmethod(this, "imgTag", [0]);
              var call328 = callmethod(call327,"src", [0]);
              var string330 = new GraceString("IMAGE: ");
              var opresult332 = callmethod(string330, "++", [1], call328);
              var opresult334 = callmethod(opresult332, "++", [1], string325);
              var call335 = Grace_print(opresult334);
              return call335
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func275.paramCounts = [
            3,
          ];
          func275.variableArities = [
            false,
          ];
          obj206.methods["drawWithSize"] = func275;
          func275.definitionLine = 32;
          func275.definitionModule = "kitty";
          sourceObject = obj206;
          lineNumber = 15
          var string336 = new GraceString("...");
          var string339 = new GraceString("CREATING NEW IMAGE: ");
          var opresult341 = callmethod(string339, "++", [1], var_url__39__);
          var opresult343 = callmethod(opresult341, "++", [1], string336);
          var call344 = Grace_print(opresult343);
          sourceObject = obj206;
          lineNumber = 16
          var string345 = new GraceString("img");
          var call346 = callmethod(var_dom,"document", [0]);
          var call347 = callmethod(call346,"createElement", [1], string345);
          obj206.data["imgTag"] = call347;
          var reader_kitty_imgTag_348 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_348.def = true;
          reader_kitty_imgTag_348.confidential = true;
          obj206.methods["imgTag"] = reader_kitty_imgTag_348;
          lineNumber = 16;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call347)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj206;
          lineNumber = 19
          lineNumber = 16
          lineNumber = 17
          onSelf = true;
          var call349 = callmethod(this, "imgTag", [0]);
          var call350 = callmethod(call349,"src:=", [1], var_url__39__);
          sourceObject = obj206;
          lineNumber = 19
          obj206.data["height"] = new GraceNum(64);
          var reader_kitty_height_351 = function() {
            return this.data["height"];
          }
          obj206.methods["height"] = reader_kitty_height_351;
          obj206.data["height"] = new GraceNum(64);
          var writer_kitty_height_351 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj206.methods["height:="] = writer_kitty_height_351;
          reader_kitty_height_351.confidential = true;
          writer_kitty_height_351.confidential = true;
          lineNumber = 20;
          moduleName = "kitty";
          lineNumber = 19
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(64))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj206.mutable = true;
          sourceObject = obj206;
          lineNumber = 20
          obj206.data["width"] = new GraceNum(64);
          var reader_kitty_width_352 = function() {
            return this.data["width"];
          }
          obj206.methods["width"] = reader_kitty_width_352;
          obj206.data["width"] = new GraceNum(64);
          var writer_kitty_width_352 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj206.methods["width:="] = writer_kitty_width_352;
          reader_kitty_width_352.confidential = true;
          writer_kitty_width_352.confidential = true;
          lineNumber = 22;
          moduleName = "kitty";
          lineNumber = 20
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(64))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj206.mutable = true;
          sourceObject = obj206;
          sourceObject = obj206;
          sourceObject = obj206;
          lineNumber = 42
          var string353 = new GraceString("");
          var string356 = new GraceString("CREATED NEW IMAGE: ");
          var opresult358 = callmethod(string356, "++", [1], var_url__39__);
          var opresult360 = callmethod(opresult358, "++", [1], string353);
          var call361 = Grace_print(opresult360);
          superDepth = origSuperDepth;
        }
        obj_init_206.apply(inheritingObject, []);
        return obj206
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj46.methods["new()object"] = func205;
    var func362 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 13
        var string363 = new GraceString("class KittyImage");
        return string363
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func362.paramCounts = [
    ];
    func362.variableArities = [
    ];
    obj46.methods["asDebugString"] = func362;
    func362.definitionLine = 13;
    func362.definitionModule = "kitty";
    sourceObject = obj46;
    sourceObject = obj46;
    superDepth = origSuperDepth;
  }
  obj_init_46.apply(obj46, []);
  var var_KittyImage = obj46;
  lineNumber = 45
  lineNumber = 52
  var func364 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func364.paramCounts[0])
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
  func364.paramCounts = [
    0,
  ];
  func364.variableArities = [
    false,
  ];
  this.methods["KittyEntity"] = func364;
  func364.definitionLine = 52;
  func364.definitionModule = "kitty";
  var obj365 = Grace_allocObject();
  obj365.definitionModule = "kitty";
  obj365.definitionLine = 52;
  obj365.outer = this;
  var reader_kitty_outer_366 = function() {
    return this.outer;
  }
  obj365.methods["outer"] = reader_kitty_outer_366;
  function obj_init_365() {
    var origSuperDepth = superDepth;
    superDepth = obj365;
    obj365.annotations = [];
    var func367 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func367.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj368 = Grace_allocObject();
        obj368.definitionModule = "kitty";
        obj368.definitionLine = 52;
        obj368.outer = this;
        var reader_kitty_outer_369 = function() {
          return this.outer;
        }
        obj368.methods["outer"] = reader_kitty_outer_369;
        function obj_init_368() {
          var origSuperDepth = superDepth;
          superDepth = obj368;
          obj368.annotations = [];
          var func370 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func370.paramCounts[0])
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
          func370.paramCounts = [
            0,
          ];
          func370.variableArities = [
            false,
          ];
          obj368.methods["awake"] = func370;
          func370.definitionLine = 65;
          func370.definitionModule = "kitty";
          var func371 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func371.paramCounts[0])
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
          func371.paramCounts = [
            0,
          ];
          func371.variableArities = [
            false,
          ];
          obj368.methods["start"] = func371;
          func371.definitionLine = 70;
          func371.definitionModule = "kitty";
          var func372 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func372.paramCounts[0])
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
          func372.paramCounts = [
            0,
          ];
          func372.variableArities = [
            false,
          ];
          obj368.methods["update"] = func372;
          func372.definitionLine = 75;
          func372.definitionModule = "kitty";
          var func373 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func373.paramCounts[0])
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
          func373.paramCounts = [
            0,
          ];
          func373.variableArities = [
            false,
          ];
          obj368.methods["onDestroy"] = func373;
          func373.definitionLine = 80;
          func373.definitionModule = "kitty";
          var func374 = function(argcv) {
            var curarg = 1;
            var var_ctx__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func374.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 85
              onSelf = true;
              var call375 = callmethod(this, "image", [0]);
              var call376 = callmethod(call375,"draw", [1], var_ctx__39__);
              return call376
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func374.paramCounts = [
            1,
          ];
          func374.variableArities = [
            false,
          ];
          obj368.methods["draw"] = func374;
          func374.definitionLine = 84;
          func374.definitionModule = "kitty";
          var func377 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func377.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 90
              lineNumber = 52
              lineNumber = 89
              onSelf = true;
              var call378 = callmethod(this, "image:=", [1], var_image__39__);
              return call378
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func377.paramTypes = [];
          func377.paramTypes.push([]);
          func377.paramCounts = [
            1,
          ];
          func377.variableArities = [
            false,
          ];
          obj368.methods["setImage"] = func377;
          func377.definitionLine = 88;
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
              lineNumber = 94
              lineNumber = 52
              lineNumber = 93
              onSelf = true;
              var call380 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 95
              lineNumber = 52
              lineNumber = 94
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
          obj368.methods["setLocation"] = func379;
          func379.definitionLine = 92;
          func379.definitionModule = "kitty";
          var func382 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func382.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 99
              lineNumber = 98
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
          obj368.methods["getX"] = func382;
          func382.definitionLine = 97;
          func382.definitionModule = "kitty";
          var func384 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func384.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 103
              lineNumber = 102
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
          obj368.methods["getY"] = func384;
          func384.definitionLine = 101;
          func384.definitionModule = "kitty";
          var func386 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func386.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 107
              lineNumber = 106
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
          obj368.methods["getRotation"] = func386;
          func386.definitionLine = 105;
          func386.definitionModule = "kitty";
          sourceObject = obj368;
          lineNumber = 54
          var string388 = new GraceString(")...");
          var string391 = new GraceString(", ");
          var string394 = new GraceString("CREATING ENTITY AT (");
          var opresult396 = callmethod(string394, "++", [1], var_x__39__);
          var opresult398 = callmethod(opresult396, "++", [1], string391);
          var opresult400 = callmethod(opresult398, "++", [1], var_y__39__);
          var opresult402 = callmethod(opresult400, "++", [1], string388);
          var call403 = Grace_print(opresult402);
          sourceObject = obj368;
          lineNumber = 56
          obj368.data["posX"] = var_x__39__;
          var reader_kitty_posX_404 = function() {
            return this.data["posX"];
          }
          obj368.methods["posX"] = reader_kitty_posX_404;
          obj368.data["posX"] = var_x__39__;
          var writer_kitty_posX_404 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj368.methods["posX:="] = writer_kitty_posX_404;
          reader_kitty_posX_404.confidential = true;
          writer_kitty_posX_404.confidential = true;
          lineNumber = 57;
          moduleName = "kitty";
          lineNumber = 56
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj368.mutable = true;
          sourceObject = obj368;
          lineNumber = 57
          obj368.data["posY"] = var_y__39__;
          var reader_kitty_posY_405 = function() {
            return this.data["posY"];
          }
          obj368.methods["posY"] = reader_kitty_posY_405;
          obj368.data["posY"] = var_y__39__;
          var writer_kitty_posY_405 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj368.methods["posY:="] = writer_kitty_posY_405;
          reader_kitty_posY_405.confidential = true;
          writer_kitty_posY_405.confidential = true;
          lineNumber = 58;
          moduleName = "kitty";
          lineNumber = 57
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj368.mutable = true;
          sourceObject = obj368;
          lineNumber = 58
          obj368.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_406 = function() {
            return this.data["rotation"];
          }
          obj368.methods["rotation"] = reader_kitty_rotation_406;
          obj368.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_406 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj368.methods["rotation:="] = writer_kitty_rotation_406;
          reader_kitty_rotation_406.confidential = true;
          writer_kitty_rotation_406.confidential = true;
          lineNumber = 60;
          moduleName = "kitty";
          lineNumber = 58
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj368.mutable = true;
          sourceObject = obj368;
          obj368.data["image"] = undefined;
          var reader_kitty_image_407 = function() {
            return this.data["image"];
          }
          obj368.methods["image"] = reader_kitty_image_407;
          obj368.data["image"] = undefined;
          var writer_kitty_image_407 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj368.methods["image:="] = writer_kitty_image_407;
          reader_kitty_image_407.confidential = true;
          writer_kitty_image_407.confidential = true;
          obj368.mutable = true;
          sourceObject = obj368;
          lineNumber = 62
          onSelf = true;
          var call408 = callmethod(this, "awake", [0]);
          sourceObject = obj368;
          sourceObject = obj368;
          sourceObject = obj368;
          sourceObject = obj368;
          sourceObject = obj368;
          sourceObject = obj368;
          sourceObject = obj368;
          sourceObject = obj368;
          sourceObject = obj368;
          sourceObject = obj368;
          sourceObject = obj368;
          lineNumber = 109
          var string409 = new GraceString("ENTITY CREATED");
          var call410 = Grace_print(string409);
          superDepth = origSuperDepth;
        }
        obj_init_368.apply(obj368, []);
        return obj368
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func367.paramCounts = [
      2,
    ];
    func367.variableArities = [
      false,
    ];
    obj365.methods["new"] = func367;
    func367.definitionLine = 52;
    func367.definitionModule = "kitty";
    var func411 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj412 = Grace_allocObject();
        obj412.definitionModule = "kitty";
        obj412.definitionLine = 52;
        var inho412 = inheritingObject;
        while (inho412.superobj) inho412 = inho412.superobj;
        inho412.superobj = obj412;
        obj412.data = inheritingObject.data;
        obj412.outer = this;
        var reader_kitty_outer_413 = function() {
          return this.outer;
        }
        obj412.methods["outer"] = reader_kitty_outer_413;
        function obj_init_412() {
          var origSuperDepth = superDepth;
          superDepth = obj412;
          obj412.annotations = [];
          var func414 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func414.paramCounts[0])
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
          func414.paramCounts = [
            0,
          ];
          func414.variableArities = [
            false,
          ];
          obj412.methods["awake"] = func414;
          func414.definitionLine = 65;
          func414.definitionModule = "kitty";
          var func415 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func415.paramCounts[0])
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
          func415.paramCounts = [
            0,
          ];
          func415.variableArities = [
            false,
          ];
          obj412.methods["start"] = func415;
          func415.definitionLine = 70;
          func415.definitionModule = "kitty";
          var func416 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func416.paramCounts[0])
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
          func416.paramCounts = [
            0,
          ];
          func416.variableArities = [
            false,
          ];
          obj412.methods["update"] = func416;
          func416.definitionLine = 75;
          func416.definitionModule = "kitty";
          var func417 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func417.paramCounts[0])
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
          func417.paramCounts = [
            0,
          ];
          func417.variableArities = [
            false,
          ];
          obj412.methods["onDestroy"] = func417;
          func417.definitionLine = 80;
          func417.definitionModule = "kitty";
          var func418 = function(argcv) {
            var curarg = 1;
            var var_ctx__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func418.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 85
              onSelf = true;
              var call419 = callmethod(this, "image", [0]);
              var call420 = callmethod(call419,"draw", [1], var_ctx__39__);
              return call420
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func418.paramCounts = [
            1,
          ];
          func418.variableArities = [
            false,
          ];
          obj412.methods["draw"] = func418;
          func418.definitionLine = 84;
          func418.definitionModule = "kitty";
          var func421 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func421.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 90
              lineNumber = 52
              lineNumber = 89
              onSelf = true;
              var call422 = callmethod(this, "image:=", [1], var_image__39__);
              return call422
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func421.paramTypes = [];
          func421.paramTypes.push([]);
          func421.paramCounts = [
            1,
          ];
          func421.variableArities = [
            false,
          ];
          obj412.methods["setImage"] = func421;
          func421.definitionLine = 88;
          func421.definitionModule = "kitty";
          var func423 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func423.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 94
              lineNumber = 52
              lineNumber = 93
              onSelf = true;
              var call424 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 95
              lineNumber = 52
              lineNumber = 94
              onSelf = true;
              var call425 = callmethod(this, "posY:=", [1], var_y);
              return call425
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func423.paramCounts = [
            2,
          ];
          func423.variableArities = [
            false,
          ];
          obj412.methods["setLocation"] = func423;
          func423.definitionLine = 92;
          func423.definitionModule = "kitty";
          var func426 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func426.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 99
              lineNumber = 98
              onSelf = true;
              var call427 = callmethod(this, "posX", [0]);
              return call427
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func426.paramCounts = [
            0,
          ];
          func426.variableArities = [
            false,
          ];
          obj412.methods["getX"] = func426;
          func426.definitionLine = 97;
          func426.definitionModule = "kitty";
          var func428 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func428.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 103
              lineNumber = 102
              onSelf = true;
              var call429 = callmethod(this, "posY", [0]);
              return call429
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func428.paramCounts = [
            0,
          ];
          func428.variableArities = [
            false,
          ];
          obj412.methods["getY"] = func428;
          func428.definitionLine = 101;
          func428.definitionModule = "kitty";
          var func430 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func430.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 107
              lineNumber = 106
              onSelf = true;
              var call431 = callmethod(this, "rotation", [0]);
              return call431
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func430.paramCounts = [
            0,
          ];
          func430.variableArities = [
            false,
          ];
          obj412.methods["getRotation"] = func430;
          func430.definitionLine = 105;
          func430.definitionModule = "kitty";
          sourceObject = obj412;
          lineNumber = 54
          var string432 = new GraceString(")...");
          var string435 = new GraceString(", ");
          var string438 = new GraceString("CREATING ENTITY AT (");
          var opresult440 = callmethod(string438, "++", [1], var_x__39__);
          var opresult442 = callmethod(opresult440, "++", [1], string435);
          var opresult444 = callmethod(opresult442, "++", [1], var_y__39__);
          var opresult446 = callmethod(opresult444, "++", [1], string432);
          var call447 = Grace_print(opresult446);
          sourceObject = obj412;
          lineNumber = 56
          obj412.data["posX"] = var_x__39__;
          var reader_kitty_posX_448 = function() {
            return this.data["posX"];
          }
          obj412.methods["posX"] = reader_kitty_posX_448;
          obj412.data["posX"] = var_x__39__;
          var writer_kitty_posX_448 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj412.methods["posX:="] = writer_kitty_posX_448;
          reader_kitty_posX_448.confidential = true;
          writer_kitty_posX_448.confidential = true;
          lineNumber = 57;
          moduleName = "kitty";
          lineNumber = 56
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj412.mutable = true;
          sourceObject = obj412;
          lineNumber = 57
          obj412.data["posY"] = var_y__39__;
          var reader_kitty_posY_449 = function() {
            return this.data["posY"];
          }
          obj412.methods["posY"] = reader_kitty_posY_449;
          obj412.data["posY"] = var_y__39__;
          var writer_kitty_posY_449 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj412.methods["posY:="] = writer_kitty_posY_449;
          reader_kitty_posY_449.confidential = true;
          writer_kitty_posY_449.confidential = true;
          lineNumber = 58;
          moduleName = "kitty";
          lineNumber = 57
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj412.mutable = true;
          sourceObject = obj412;
          lineNumber = 58
          obj412.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_450 = function() {
            return this.data["rotation"];
          }
          obj412.methods["rotation"] = reader_kitty_rotation_450;
          obj412.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_450 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj412.methods["rotation:="] = writer_kitty_rotation_450;
          reader_kitty_rotation_450.confidential = true;
          writer_kitty_rotation_450.confidential = true;
          lineNumber = 60;
          moduleName = "kitty";
          lineNumber = 58
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj412.mutable = true;
          sourceObject = obj412;
          obj412.data["image"] = undefined;
          var reader_kitty_image_451 = function() {
            return this.data["image"];
          }
          obj412.methods["image"] = reader_kitty_image_451;
          obj412.data["image"] = undefined;
          var writer_kitty_image_451 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj412.methods["image:="] = writer_kitty_image_451;
          reader_kitty_image_451.confidential = true;
          writer_kitty_image_451.confidential = true;
          obj412.mutable = true;
          sourceObject = obj412;
          lineNumber = 62
          onSelf = true;
          var call452 = callmethod(this, "awake", [0]);
          sourceObject = obj412;
          sourceObject = obj412;
          sourceObject = obj412;
          sourceObject = obj412;
          sourceObject = obj412;
          sourceObject = obj412;
          sourceObject = obj412;
          sourceObject = obj412;
          sourceObject = obj412;
          sourceObject = obj412;
          sourceObject = obj412;
          lineNumber = 109
          var string453 = new GraceString("ENTITY CREATED");
          var call454 = Grace_print(string453);
          superDepth = origSuperDepth;
        }
        obj_init_412.apply(inheritingObject, []);
        return obj412
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj365.methods["new()object"] = func411;
    var func455 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 52
        var string456 = new GraceString("class KittyEntity");
        return string456
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func455.paramCounts = [
    ];
    func455.variableArities = [
    ];
    obj365.methods["asDebugString"] = func455;
    func455.definitionLine = 52;
    func455.definitionModule = "kitty";
    sourceObject = obj365;
    sourceObject = obj365;
    superDepth = origSuperDepth;
  }
  obj_init_365.apply(obj365, []);
  var var_KittyEntity = obj365;
  lineNumber = 112
  lineNumber = 119
  var func457 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func457.paramCounts[0])
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
  func457.paramCounts = [
    0,
  ];
  func457.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func457;
  func457.definitionLine = 119;
  func457.definitionModule = "kitty";
  var obj458 = Grace_allocObject();
  obj458.definitionModule = "kitty";
  obj458.definitionLine = 119;
  obj458.outer = this;
  var reader_kitty_outer_459 = function() {
    return this.outer;
  }
  obj458.methods["outer"] = reader_kitty_outer_459;
  function obj_init_458() {
    var origSuperDepth = superDepth;
    superDepth = obj458;
    obj458.annotations = [];
    var func460 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func460.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj461 = Grace_allocObject();
        obj461.definitionModule = "kitty";
        obj461.definitionLine = 119;
        obj461.outer = this;
        var reader_kitty_outer_462 = function() {
          return this.outer;
        }
        obj461.methods["outer"] = reader_kitty_outer_462;
        function obj_init_461() {
          var origSuperDepth = superDepth;
          superDepth = obj461;
          obj461.annotations = [];
          var func463 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func463.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 146
              var string464 = new GraceString("INITIALIZING WORLD...");
              var call465 = Grace_print(string464);
              lineNumber = 152
              var if466 = var_done;
              lineNumber = 148
              onSelf = true;
              var call467 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call467)) {
                lineNumber = 150
                lineNumber = 149
                var bool468 = new GraceBoolean(false)
                return bool468
              }
              lineNumber = 153
              lineNumber = 119
              lineNumber = 152
              var call469 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call470 = callmethod(this, "document:=", [1], call469);
              lineNumber = 153
              lineNumber = 152
              lineNumber = 153
              var string471 = new GraceString("standard-canvas");
              onSelf = true;
              var call472 = callmethod(this, "document", [0]);
              var call473 = callmethod(call472,"getElementById", [1], string471);
              onSelf = true;
              var call474 = callmethod(this, "canvas:=", [1], call473);
              lineNumber = 155
              lineNumber = 152
              lineNumber = 154
              onSelf = true;
              var call475 = callmethod(this, "canvas", [0]);
              var call476 = callmethod(call475,"width", [0]);
              onSelf = true;
              var call477 = callmethod(this, "canvasWidth:=", [1], call476);
              lineNumber = 157
              lineNumber = 154
              lineNumber = 155
              onSelf = true;
              var call478 = callmethod(this, "canvas", [0]);
              var call479 = callmethod(call478,"height", [0]);
              onSelf = true;
              var call480 = callmethod(this, "canvasHeight:=", [1], call479);
              lineNumber = 158
              lineNumber = 155
              lineNumber = 157
              var bool481 = new GraceBoolean(true)
              onSelf = true;
              var call482 = callmethod(this, "isInit:=", [1], bool481);
              lineNumber = 158
              var string483 = new GraceString("INITIALIZATION FINISHED");
              var call484 = Grace_print(string483);
              return call484
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func463.paramCounts = [
            0,
          ];
          func463.variableArities = [
            false,
          ];
          obj461.methods["init"] = func463;
          func463.definitionLine = 144;
          func463.definitionModule = "kitty";
          var func485 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func485.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 163
              var string486 = new GraceString("STARTING WORLD...");
              var call487 = Grace_print(string486);
              lineNumber = 164
              lineNumber = 155
              lineNumber = 164
              var string488 = new GraceString("canvas");
              var call489 = callmethod(var_dom,"document", [0]);
              var call490 = callmethod(call489,"createElement", [1], string488);
              onSelf = true;
              var call491 = callmethod(this, "backingCanvas:=", [1], call490);
              lineNumber = 166
              lineNumber = 164
              lineNumber = 165
              onSelf = true;
              var call492 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call493 = callmethod(this, "backingCanvas", [0]);
              var call494 = callmethod(call493,"height:=", [1], call492);
              lineNumber = 167
              lineNumber = 164
              lineNumber = 166
              onSelf = true;
              var call495 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call496 = callmethod(this, "backingCanvas", [0]);
              var call497 = callmethod(call496,"width:=", [1], call495);
              lineNumber = 167
              lineNumber = 164
              lineNumber = 167
              var string498 = new GraceString("2d");
              onSelf = true;
              var call499 = callmethod(this, "backingCanvas", [0]);
              var call500 = callmethod(call499,"getContext", [1], string498);
              onSelf = true;
              var call501 = callmethod(this, "backingContext:=", [1], call500);
              lineNumber = 168
              lineNumber = 164
              lineNumber = 168
              var string502 = new GraceString("2d");
              onSelf = true;
              var call503 = callmethod(this, "canvas", [0]);
              var call504 = callmethod(call503,"getContext", [1], string502);
              onSelf = true;
              var call505 = callmethod(this, "mctx:=", [1], call504);
              lineNumber = 169
              var string506 = new GraceString("WORLD STARTED");
              var call507 = Grace_print(string506);
              return call507
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func485.paramCounts = [
            0,
          ];
          func485.variableArities = [
            false,
          ];
          obj461.methods["start"] = func485;
          func485.definitionLine = 162;
          func485.definitionModule = "kitty";
          var func508 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func508.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 174
              var string509 = new GraceString("UPDATING WORLD...");
              var call510 = Grace_print(string509);
              lineNumber = 178
              lineNumber = 164
              lineNumber = 177
              onSelf = true;
              var call511 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call512 = callmethod(this, "mctx", [0]);
              var call513 = callmethod(call512,"fillStyle:=", [1], call511);
              lineNumber = 178
              onSelf = true;
              var call514 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call515 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call516 = callmethod(this, "mctx", [0]);
              var call517 = callmethod(call516,"fillRect", [4], new GraceNum(0), new GraceNum(0), call514, call515);
              lineNumber = 179
              onSelf = true;
              var call518 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call519 = callmethod(this, "mctx", [0]);
              var call520 = callmethod(call519,"drawImage", [3], call518, new GraceNum(0), new GraceNum(0));
              lineNumber = 180
              onSelf = true;
              var call521 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call522 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call523 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call524 = callmethod(this, "background", [0]);
              var call525 = callmethod(call524,"drawWithSize", [3], call521, call522, call523);
              lineNumber = 183
              onSelf = true;
              var call526 = callmethod(this, "entities", [0]);
              lineNumber = 187
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
              block527.className = 'block<kitty:187>';
              block527.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 184
                onSelf = true;
                var call528 = callmethod(this, "mctx", [0]);
                var call529 = callmethod(var_entity,"draw", [1], call528);
                return call529;
              };
              var call530 = callmethod(Grace_prelude,"for()do", [1, 1], call526, block527);
              lineNumber = 187
              var string531 = new GraceString("WORLD UPDATED");
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
          func508.paramCounts = [
            0,
          ];
          func508.variableArities = [
            false,
          ];
          obj461.methods["update"] = func508;
          func508.definitionLine = 173;
          func508.definitionModule = "kitty";
          var func533 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func533.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 195
              lineNumber = 164
              lineNumber = 194
              onSelf = true;
              var call534 = callmethod(this, "background:=", [1], var_background__39__);
              return call534
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func533.paramCounts = [
            1,
          ];
          func533.variableArities = [
            false,
          ];
          obj461.methods["setBackground"] = func533;
          func533.definitionLine = 193;
          func533.definitionModule = "kitty";
          var func535 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func535.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 198
              onSelf = true;
              var call536 = callmethod(this, "entities", [0]);
              var call537 = callmethod(call536,"push", [1], var_e);
              return call537
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func535.paramTypes = [];
          func535.paramTypes.push([]);
          func535.paramCounts = [
            1,
          ];
          func535.variableArities = [
            false,
          ];
          obj461.methods["addEntity"] = func535;
          func535.definitionLine = 197;
          func535.definitionModule = "kitty";
          sourceObject = obj461;
          lineNumber = 121
          var string538 = new GraceString("CREATING NEW WORLD...");
          var call539 = Grace_print(string538);
          sourceObject = obj461;
          obj461.data["background"] = undefined;
          var reader_kitty_background_540 = function() {
            return this.data["background"];
          }
          obj461.methods["background"] = reader_kitty_background_540;
          obj461.data["background"] = undefined;
          var writer_kitty_background_540 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj461.methods["background:="] = writer_kitty_background_540;
          reader_kitty_background_540.confidential = true;
          writer_kitty_background_540.confidential = true;
          obj461.mutable = true;
          sourceObject = obj461;
          lineNumber = 124
          var string541 = new GraceString("black");
          obj461.data["backgroundColour"] = string541;
          var reader_kitty_backgroundColour_542 = function() {
            return this.data["backgroundColour"];
          }
          obj461.methods["backgroundColour"] = reader_kitty_backgroundColour_542;
          obj461.data["backgroundColour"] = string541;
          var writer_kitty_backgroundColour_542 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj461.methods["backgroundColour:="] = writer_kitty_backgroundColour_542;
          reader_kitty_backgroundColour_542.confidential = true;
          writer_kitty_backgroundColour_542.confidential = true;
          lineNumber = 126;
          moduleName = "kitty";
          lineNumber = 124
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string541)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj461.mutable = true;
          sourceObject = obj461;
          obj461.data["document"] = undefined;
          var reader_kitty_document_543 = function() {
            return this.data["document"];
          }
          obj461.methods["document"] = reader_kitty_document_543;
          obj461.data["document"] = undefined;
          var writer_kitty_document_543 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj461.methods["document:="] = writer_kitty_document_543;
          reader_kitty_document_543.confidential = true;
          writer_kitty_document_543.confidential = true;
          obj461.mutable = true;
          sourceObject = obj461;
          obj461.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_544 = function() {
            return this.data["backingCanvas"];
          }
          obj461.methods["backingCanvas"] = reader_kitty_backingCanvas_544;
          obj461.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_544 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj461.methods["backingCanvas:="] = writer_kitty_backingCanvas_544;
          reader_kitty_backingCanvas_544.confidential = true;
          writer_kitty_backingCanvas_544.confidential = true;
          obj461.mutable = true;
          sourceObject = obj461;
          obj461.data["backingContext"] = undefined;
          var reader_kitty_backingContext_545 = function() {
            return this.data["backingContext"];
          }
          obj461.methods["backingContext"] = reader_kitty_backingContext_545;
          obj461.data["backingContext"] = undefined;
          var writer_kitty_backingContext_545 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj461.methods["backingContext:="] = writer_kitty_backingContext_545;
          reader_kitty_backingContext_545.confidential = true;
          writer_kitty_backingContext_545.confidential = true;
          obj461.mutable = true;
          sourceObject = obj461;
          obj461.data["canvas"] = undefined;
          var reader_kitty_canvas_546 = function() {
            return this.data["canvas"];
          }
          obj461.methods["canvas"] = reader_kitty_canvas_546;
          obj461.data["canvas"] = undefined;
          var writer_kitty_canvas_546 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj461.methods["canvas:="] = writer_kitty_canvas_546;
          reader_kitty_canvas_546.confidential = true;
          writer_kitty_canvas_546.confidential = true;
          obj461.mutable = true;
          sourceObject = obj461;
          obj461.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_547 = function() {
            return this.data["canvasWidth"];
          }
          obj461.methods["canvasWidth"] = reader_kitty_canvasWidth_547;
          obj461.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_547 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj461.methods["canvasWidth:="] = writer_kitty_canvasWidth_547;
          reader_kitty_canvasWidth_547.confidential = true;
          writer_kitty_canvasWidth_547.confidential = true;
          obj461.mutable = true;
          sourceObject = obj461;
          obj461.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_548 = function() {
            return this.data["canvasHeight"];
          }
          obj461.methods["canvasHeight"] = reader_kitty_canvasHeight_548;
          obj461.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_548 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj461.methods["canvasHeight:="] = writer_kitty_canvasHeight_548;
          reader_kitty_canvasHeight_548.confidential = true;
          writer_kitty_canvasHeight_548.confidential = true;
          obj461.mutable = true;
          sourceObject = obj461;
          lineNumber = 135
          var call549 = callmethod(var_collections,"list", [0]);
          var call550 = callmethod(call549,"new", [0]);
          obj461.data["entities"] = call550;
          var reader_kitty_entities_551 = function() {
            return this.data["entities"];
          }
          obj461.methods["entities"] = reader_kitty_entities_551;
          obj461.data["entities"] = call550;
          var writer_kitty_entities_551 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj461.methods["entities:="] = writer_kitty_entities_551;
          reader_kitty_entities_551.confidential = true;
          writer_kitty_entities_551.confidential = true;
          lineNumber = 137;
          moduleName = "kitty";
          lineNumber = 135
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call550)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj461.mutable = true;
          sourceObject = obj461;
          lineNumber = 137
          var bool552 = new GraceBoolean(false)
          obj461.data["isInit"] = bool552;
          var reader_kitty_isInit_553 = function() {
            return this.data["isInit"];
          }
          obj461.methods["isInit"] = reader_kitty_isInit_553;
          obj461.data["isInit"] = bool552;
          var writer_kitty_isInit_553 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj461.methods["isInit:="] = writer_kitty_isInit_553;
          reader_kitty_isInit_553.confidential = true;
          writer_kitty_isInit_553.confidential = true;
          lineNumber = 139;
          moduleName = "kitty";
          lineNumber = 137
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool552)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj461.mutable = true;
          sourceObject = obj461;
          obj461.data["mctx"] = undefined;
          var reader_kitty_mctx_554 = function() {
            return this.data["mctx"];
          }
          obj461.methods["mctx"] = reader_kitty_mctx_554;
          obj461.data["mctx"] = undefined;
          var writer_kitty_mctx_554 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj461.methods["mctx:="] = writer_kitty_mctx_554;
          reader_kitty_mctx_554.confidential = true;
          writer_kitty_mctx_554.confidential = true;
          obj461.mutable = true;
          sourceObject = obj461;
          lineNumber = 141
          onSelf = true;
          var call555 = callmethod(this, "init", [0]);
          sourceObject = obj461;
          sourceObject = obj461;
          sourceObject = obj461;
          sourceObject = obj461;
          sourceObject = obj461;
          sourceObject = obj461;
          lineNumber = 201
          var string556 = new GraceString("WORLD CREATED");
          var call557 = Grace_print(string556);
          superDepth = origSuperDepth;
        }
        obj_init_461.apply(obj461, []);
        return obj461
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
    obj458.methods["new"] = func460;
    func460.definitionLine = 119;
    func460.definitionModule = "kitty";
    var func558 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj559 = Grace_allocObject();
        obj559.definitionModule = "kitty";
        obj559.definitionLine = 119;
        var inho559 = inheritingObject;
        while (inho559.superobj) inho559 = inho559.superobj;
        inho559.superobj = obj559;
        obj559.data = inheritingObject.data;
        obj559.outer = this;
        var reader_kitty_outer_560 = function() {
          return this.outer;
        }
        obj559.methods["outer"] = reader_kitty_outer_560;
        function obj_init_559() {
          var origSuperDepth = superDepth;
          superDepth = obj559;
          obj559.annotations = [];
          var func561 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func561.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 146
              var string562 = new GraceString("INITIALIZING WORLD...");
              var call563 = Grace_print(string562);
              lineNumber = 152
              var if564 = var_done;
              lineNumber = 148
              onSelf = true;
              var call565 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call565)) {
                lineNumber = 150
                lineNumber = 149
                var bool566 = new GraceBoolean(false)
                return bool566
              }
              lineNumber = 153
              lineNumber = 135
              lineNumber = 152
              var call567 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call568 = callmethod(this, "document:=", [1], call567);
              lineNumber = 153
              lineNumber = 152
              lineNumber = 153
              var string569 = new GraceString("standard-canvas");
              onSelf = true;
              var call570 = callmethod(this, "document", [0]);
              var call571 = callmethod(call570,"getElementById", [1], string569);
              onSelf = true;
              var call572 = callmethod(this, "canvas:=", [1], call571);
              lineNumber = 155
              lineNumber = 152
              lineNumber = 154
              onSelf = true;
              var call573 = callmethod(this, "canvas", [0]);
              var call574 = callmethod(call573,"width", [0]);
              onSelf = true;
              var call575 = callmethod(this, "canvasWidth:=", [1], call574);
              lineNumber = 157
              lineNumber = 154
              lineNumber = 155
              onSelf = true;
              var call576 = callmethod(this, "canvas", [0]);
              var call577 = callmethod(call576,"height", [0]);
              onSelf = true;
              var call578 = callmethod(this, "canvasHeight:=", [1], call577);
              lineNumber = 158
              lineNumber = 155
              lineNumber = 157
              var bool579 = new GraceBoolean(true)
              onSelf = true;
              var call580 = callmethod(this, "isInit:=", [1], bool579);
              lineNumber = 158
              var string581 = new GraceString("INITIALIZATION FINISHED");
              var call582 = Grace_print(string581);
              return call582
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func561.paramCounts = [
            0,
          ];
          func561.variableArities = [
            false,
          ];
          obj559.methods["init"] = func561;
          func561.definitionLine = 144;
          func561.definitionModule = "kitty";
          var func583 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func583.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 163
              var string584 = new GraceString("STARTING WORLD...");
              var call585 = Grace_print(string584);
              lineNumber = 164
              lineNumber = 155
              lineNumber = 164
              var string586 = new GraceString("canvas");
              var call587 = callmethod(var_dom,"document", [0]);
              var call588 = callmethod(call587,"createElement", [1], string586);
              onSelf = true;
              var call589 = callmethod(this, "backingCanvas:=", [1], call588);
              lineNumber = 166
              lineNumber = 164
              lineNumber = 165
              onSelf = true;
              var call590 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call591 = callmethod(this, "backingCanvas", [0]);
              var call592 = callmethod(call591,"height:=", [1], call590);
              lineNumber = 167
              lineNumber = 164
              lineNumber = 166
              onSelf = true;
              var call593 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call594 = callmethod(this, "backingCanvas", [0]);
              var call595 = callmethod(call594,"width:=", [1], call593);
              lineNumber = 167
              lineNumber = 164
              lineNumber = 167
              var string596 = new GraceString("2d");
              onSelf = true;
              var call597 = callmethod(this, "backingCanvas", [0]);
              var call598 = callmethod(call597,"getContext", [1], string596);
              onSelf = true;
              var call599 = callmethod(this, "backingContext:=", [1], call598);
              lineNumber = 168
              lineNumber = 164
              lineNumber = 168
              var string600 = new GraceString("2d");
              onSelf = true;
              var call601 = callmethod(this, "canvas", [0]);
              var call602 = callmethod(call601,"getContext", [1], string600);
              onSelf = true;
              var call603 = callmethod(this, "mctx:=", [1], call602);
              lineNumber = 169
              var string604 = new GraceString("WORLD STARTED");
              var call605 = Grace_print(string604);
              return call605
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func583.paramCounts = [
            0,
          ];
          func583.variableArities = [
            false,
          ];
          obj559.methods["start"] = func583;
          func583.definitionLine = 162;
          func583.definitionModule = "kitty";
          var func606 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func606.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 174
              var string607 = new GraceString("UPDATING WORLD...");
              var call608 = Grace_print(string607);
              lineNumber = 178
              lineNumber = 164
              lineNumber = 177
              onSelf = true;
              var call609 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call610 = callmethod(this, "mctx", [0]);
              var call611 = callmethod(call610,"fillStyle:=", [1], call609);
              lineNumber = 178
              onSelf = true;
              var call612 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call613 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call614 = callmethod(this, "mctx", [0]);
              var call615 = callmethod(call614,"fillRect", [4], new GraceNum(0), new GraceNum(0), call612, call613);
              lineNumber = 179
              onSelf = true;
              var call616 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call617 = callmethod(this, "mctx", [0]);
              var call618 = callmethod(call617,"drawImage", [3], call616, new GraceNum(0), new GraceNum(0));
              lineNumber = 180
              onSelf = true;
              var call619 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call620 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call621 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call622 = callmethod(this, "background", [0]);
              var call623 = callmethod(call622,"drawWithSize", [3], call619, call620, call621);
              lineNumber = 183
              onSelf = true;
              var call624 = callmethod(this, "entities", [0]);
              lineNumber = 187
              var block625 = Grace_allocObject();
              block625.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block625.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block625.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block625.methods["match"] = GraceBlock_match;
              block625.methods["prefix?"] = GraceBlock_lift;
              block625.receiver = this;
              block625.className = 'block<kitty:187>';
              block625.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 184
                onSelf = true;
                var call626 = callmethod(this, "mctx", [0]);
                var call627 = callmethod(var_entity,"draw", [1], call626);
                return call627;
              };
              var call628 = callmethod(Grace_prelude,"for()do", [1, 1], call624, block625);
              lineNumber = 187
              var string629 = new GraceString("WORLD UPDATED");
              var call630 = Grace_print(string629);
              return call630
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func606.paramCounts = [
            0,
          ];
          func606.variableArities = [
            false,
          ];
          obj559.methods["update"] = func606;
          func606.definitionLine = 173;
          func606.definitionModule = "kitty";
          var func631 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func631.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 195
              lineNumber = 164
              lineNumber = 194
              onSelf = true;
              var call632 = callmethod(this, "background:=", [1], var_background__39__);
              return call632
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func631.paramCounts = [
            1,
          ];
          func631.variableArities = [
            false,
          ];
          obj559.methods["setBackground"] = func631;
          func631.definitionLine = 193;
          func631.definitionModule = "kitty";
          var func633 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func633.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 198
              onSelf = true;
              var call634 = callmethod(this, "entities", [0]);
              var call635 = callmethod(call634,"push", [1], var_e);
              return call635
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func633.paramTypes = [];
          func633.paramTypes.push([]);
          func633.paramCounts = [
            1,
          ];
          func633.variableArities = [
            false,
          ];
          obj559.methods["addEntity"] = func633;
          func633.definitionLine = 197;
          func633.definitionModule = "kitty";
          sourceObject = obj559;
          lineNumber = 121
          var string636 = new GraceString("CREATING NEW WORLD...");
          var call637 = Grace_print(string636);
          sourceObject = obj559;
          obj559.data["background"] = undefined;
          var reader_kitty_background_638 = function() {
            return this.data["background"];
          }
          obj559.methods["background"] = reader_kitty_background_638;
          obj559.data["background"] = undefined;
          var writer_kitty_background_638 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj559.methods["background:="] = writer_kitty_background_638;
          reader_kitty_background_638.confidential = true;
          writer_kitty_background_638.confidential = true;
          obj559.mutable = true;
          sourceObject = obj559;
          lineNumber = 124
          var string639 = new GraceString("black");
          obj559.data["backgroundColour"] = string639;
          var reader_kitty_backgroundColour_640 = function() {
            return this.data["backgroundColour"];
          }
          obj559.methods["backgroundColour"] = reader_kitty_backgroundColour_640;
          obj559.data["backgroundColour"] = string639;
          var writer_kitty_backgroundColour_640 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj559.methods["backgroundColour:="] = writer_kitty_backgroundColour_640;
          reader_kitty_backgroundColour_640.confidential = true;
          writer_kitty_backgroundColour_640.confidential = true;
          lineNumber = 126;
          moduleName = "kitty";
          lineNumber = 124
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string639)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj559.mutable = true;
          sourceObject = obj559;
          obj559.data["document"] = undefined;
          var reader_kitty_document_641 = function() {
            return this.data["document"];
          }
          obj559.methods["document"] = reader_kitty_document_641;
          obj559.data["document"] = undefined;
          var writer_kitty_document_641 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj559.methods["document:="] = writer_kitty_document_641;
          reader_kitty_document_641.confidential = true;
          writer_kitty_document_641.confidential = true;
          obj559.mutable = true;
          sourceObject = obj559;
          obj559.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_642 = function() {
            return this.data["backingCanvas"];
          }
          obj559.methods["backingCanvas"] = reader_kitty_backingCanvas_642;
          obj559.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_642 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj559.methods["backingCanvas:="] = writer_kitty_backingCanvas_642;
          reader_kitty_backingCanvas_642.confidential = true;
          writer_kitty_backingCanvas_642.confidential = true;
          obj559.mutable = true;
          sourceObject = obj559;
          obj559.data["backingContext"] = undefined;
          var reader_kitty_backingContext_643 = function() {
            return this.data["backingContext"];
          }
          obj559.methods["backingContext"] = reader_kitty_backingContext_643;
          obj559.data["backingContext"] = undefined;
          var writer_kitty_backingContext_643 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj559.methods["backingContext:="] = writer_kitty_backingContext_643;
          reader_kitty_backingContext_643.confidential = true;
          writer_kitty_backingContext_643.confidential = true;
          obj559.mutable = true;
          sourceObject = obj559;
          obj559.data["canvas"] = undefined;
          var reader_kitty_canvas_644 = function() {
            return this.data["canvas"];
          }
          obj559.methods["canvas"] = reader_kitty_canvas_644;
          obj559.data["canvas"] = undefined;
          var writer_kitty_canvas_644 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj559.methods["canvas:="] = writer_kitty_canvas_644;
          reader_kitty_canvas_644.confidential = true;
          writer_kitty_canvas_644.confidential = true;
          obj559.mutable = true;
          sourceObject = obj559;
          obj559.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_645 = function() {
            return this.data["canvasWidth"];
          }
          obj559.methods["canvasWidth"] = reader_kitty_canvasWidth_645;
          obj559.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_645 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj559.methods["canvasWidth:="] = writer_kitty_canvasWidth_645;
          reader_kitty_canvasWidth_645.confidential = true;
          writer_kitty_canvasWidth_645.confidential = true;
          obj559.mutable = true;
          sourceObject = obj559;
          obj559.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_646 = function() {
            return this.data["canvasHeight"];
          }
          obj559.methods["canvasHeight"] = reader_kitty_canvasHeight_646;
          obj559.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_646 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj559.methods["canvasHeight:="] = writer_kitty_canvasHeight_646;
          reader_kitty_canvasHeight_646.confidential = true;
          writer_kitty_canvasHeight_646.confidential = true;
          obj559.mutable = true;
          sourceObject = obj559;
          lineNumber = 135
          var call647 = callmethod(var_collections,"list", [0]);
          var call648 = callmethod(call647,"new", [0]);
          obj559.data["entities"] = call648;
          var reader_kitty_entities_649 = function() {
            return this.data["entities"];
          }
          obj559.methods["entities"] = reader_kitty_entities_649;
          obj559.data["entities"] = call648;
          var writer_kitty_entities_649 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj559.methods["entities:="] = writer_kitty_entities_649;
          reader_kitty_entities_649.confidential = true;
          writer_kitty_entities_649.confidential = true;
          lineNumber = 137;
          moduleName = "kitty";
          lineNumber = 135
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call648)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj559.mutable = true;
          sourceObject = obj559;
          lineNumber = 137
          var bool650 = new GraceBoolean(false)
          obj559.data["isInit"] = bool650;
          var reader_kitty_isInit_651 = function() {
            return this.data["isInit"];
          }
          obj559.methods["isInit"] = reader_kitty_isInit_651;
          obj559.data["isInit"] = bool650;
          var writer_kitty_isInit_651 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj559.methods["isInit:="] = writer_kitty_isInit_651;
          reader_kitty_isInit_651.confidential = true;
          writer_kitty_isInit_651.confidential = true;
          lineNumber = 139;
          moduleName = "kitty";
          lineNumber = 137
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool650)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj559.mutable = true;
          sourceObject = obj559;
          obj559.data["mctx"] = undefined;
          var reader_kitty_mctx_652 = function() {
            return this.data["mctx"];
          }
          obj559.methods["mctx"] = reader_kitty_mctx_652;
          obj559.data["mctx"] = undefined;
          var writer_kitty_mctx_652 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj559.methods["mctx:="] = writer_kitty_mctx_652;
          reader_kitty_mctx_652.confidential = true;
          writer_kitty_mctx_652.confidential = true;
          obj559.mutable = true;
          sourceObject = obj559;
          lineNumber = 141
          onSelf = true;
          var call653 = callmethod(this, "init", [0]);
          sourceObject = obj559;
          sourceObject = obj559;
          sourceObject = obj559;
          sourceObject = obj559;
          sourceObject = obj559;
          sourceObject = obj559;
          lineNumber = 201
          var string654 = new GraceString("WORLD CREATED");
          var call655 = Grace_print(string654);
          superDepth = origSuperDepth;
        }
        obj_init_559.apply(inheritingObject, []);
        return obj559
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj458.methods["new()object"] = func558;
    var func656 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 119
        var string657 = new GraceString("class KittyWorld");
        return string657
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func656.paramCounts = [
    ];
    func656.variableArities = [
    ];
    obj458.methods["asDebugString"] = func656;
    func656.definitionLine = 119;
    func656.definitionModule = "kitty";
    sourceObject = obj458;
    sourceObject = obj458;
    superDepth = origSuperDepth;
  }
  obj_init_458.apply(obj458, []);
  var var_KittyWorld = obj458;
  lineNumber = 204
  lineNumber = 213
  lineNumber = 229
  lineNumber = 233
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
'dom',
'StandardPrelude',
];
if (gctCache)
  gctCache['kitty'] = "classes:\n KittyImage\n KittyEntity\n KittyWorld\nfresh:Entity:\n draw\n setImage\n rotation\n rotation:=\n getRotation\n update\n setLocation\n start\n getX\n getY\n image:=\n posX:=\n posY:=\n image\n onDestroy\n awake\n posX\n posY\nconfidential:\nconstructors-of:KittyWorld:\n new\nfresh:World:\n isInit\n mctx:=\n entities:=\n document:=\n backingCanvas\n mctx\n canvasWidth:=\n document\n backingCanvas:=\n update\n entities\n backingContext:=\n backgroundColour\n backgroundColour:=\n canvasHeight:=\n start\n canvas:=\n init\n canvasHeight\n background:=\n canvasWidth\n canvas\n background\n backingContext\n addEntity\n isInit:=\n setBackground\nfresh-methods:\n Image\n Entity\n World\nmodules:\n StandardPrelude\n mgcollections\nmethods-of:KittyEntity.new:\n draw\n setImage\n rotation\n rotation:=\n getRotation\n update\n setLocation\n start\n getX\n getY\n image:=\n posX:=\n posY:=\n image\n onDestroy\n awake\n posX\n posY\npublic:\n m_world\n m_world:=\n worldSet\n worldSet:=\n KittyImage\n Image\n KittyEntity\n Entity\n KittyWorld\n World\n start\n stop\n setWorld\nmethods-of:KittyImage.new:\n draw\n imgTag\n drawWithSize\n height:=\n width\n width:=\n height\nfresh:Image:\n draw\n height:=\n height\n drawWithSize\n width\n width:=\n imgTag\nmethods-of:KittyWorld.new:\n isInit\n canvasWidth:=\n mctx\n document:=\n backingCanvas\n canvasWidth\n mctx:=\n document\n backingCanvas:=\n update\n entities\n backingContext:=\n init\n backgroundColour:=\n canvasHeight:=\n start\n canvas:=\n backingContext\n canvasHeight\n background:=\n entities:=\n canvas\n background\n backgroundColour\n addEntity\n isInit:=\n setBackground\nconstructors-of:KittyEntity:\n new\nconstructors-of:KittyImage:\n new\npath:\n kitty\n";
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
    "        ctx'.save",
    "        ctx'.translate(0, 0)",
    "        ctx'.rotate(-(180 + 180) / 180 * 3.1415)",
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
    "        background.drawWithSize(mctx, canvasWidth, canvasHeight)",
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
