function gracecode_kitty () {
  this.definitionModule = "kitty";
  this.definitionLine = 0;
  lineNumber = 35
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
  func0.definitionLine = 35;
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
  lineNumber = 102
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
      lineNumber = 103
      var obj9 = Grace_allocObject();
      obj9.definitionModule = "kitty";
      obj9.definitionLine = 103;
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
        lineNumber = 104
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
  func8.definitionLine = 102;
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
      obj13.definitionLine = 103;
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
  lineNumber = 194
  var func16 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func16.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (World)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 195
      var obj17 = Grace_allocObject();
      obj17.definitionModule = "kitty";
      obj17.definitionLine = 195;
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
        lineNumber = 196
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
  func16.definitionLine = 194;
  func16.definitionModule = "kitty";
  var func20 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj21 = Grace_allocObject();
      obj21.definitionModule = "kitty";
      obj21.definitionLine = 195;
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
  lineNumber = 203
  var func24 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func24.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 205
      var string25 = new GraceString("CHECKING...");
      var call26 = Grace_print(string25);
      lineNumber = 212
      var if27 = var_done;
      lineNumber = 207
      var call28 = callmethod(var_worldSet,"prefix!", [0]);
      if (Grace_isTrue(call28)) {
        lineNumber = 208
        var string29 = new GraceString("NO WORLD!!");
        var call30 = Grace_print(string29);
        lineNumber = 210
        return var_done
      }
      lineNumber = 212
      var string31 = new GraceString("STARTING...");
      var call32 = Grace_print(string31);
      lineNumber = 215
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
  func24.definitionLine = 203;
  func24.definitionModule = "kitty";
  lineNumber = 219
  var func34 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func34.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 220
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
  func34.definitionLine = 219;
  func34.definitionModule = "kitty";
  lineNumber = 223
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
      lineNumber = 225
      lineNumber = 224
      var_m__95__world = var_world__39__;
      lineNumber = 226
      lineNumber = 225
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
  func37.definitionLine = 223;
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
  lineNumber = 215
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
  func40.definitionLine = 215;
  func40.definitionModule = "kitty";
  lineNumber = 215
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
  func41.definitionLine = 215;
  func41.definitionModule = "kitty";
  lineNumber = 13
  lineNumber = 8
  var bool42 = new GraceBoolean(false)
  var var_worldSet = bool42;
  lineNumber = 215
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
  func43.definitionLine = 215;
  func43.definitionModule = "kitty";
  lineNumber = 215
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
  func44.definitionLine = 215;
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
              var string52 = new GraceString("...");
              onSelf = true;
              var call54 = callmethod(this, "imgTag", [0]);
              var call55 = callmethod(call54,"src", [0]);
              var string57 = new GraceString("DRAWING IMAGE: ");
              var opresult59 = callmethod(string57, "++", [1], call55);
              var opresult61 = callmethod(opresult59, "++", [1], string52);
              var call62 = Grace_print(opresult61);
              lineNumber = 24
              var call63 = callmethod(var_ctx__39__,"save", [0]);
              lineNumber = 25
              var call64 = callmethod(var_ctx__39__,"translate", [2], new GraceNum(0), new GraceNum(0));
              lineNumber = 26
              var opresult69 = callmethod(new GraceNum(180), "+", [1], new GraceNum(180));
              var call70 = callmethod(opresult69,"prefix-", [0]);
              var quotient72 = callmethod(call70, "/", [1], new GraceNum(180));
              var prod74 = callmethod(quotient72, "*", [1], new GraceNum(3.1415));
              var call75 = callmethod(var_ctx__39__,"rotate", [1], prod74);
              lineNumber = 27
              onSelf = true;
              var call76 = callmethod(this, "imgTag", [0]);
              onSelf = true;
              var call78 = callmethod(this, "width", [0]);
              var call79 = callmethod(call78,"prefix-", [0]);
              var quotient81 = callmethod(call79, "/", [1], new GraceNum(2));
              onSelf = true;
              var call83 = callmethod(this, "height", [0]);
              var call84 = callmethod(call83,"prefix-", [0]);
              var quotient86 = callmethod(call84, "/", [1], new GraceNum(2));
              onSelf = true;
              var call87 = callmethod(this, "width", [0]);
              onSelf = true;
              var call88 = callmethod(this, "height", [0]);
              var call89 = callmethod(var_ctx__39__,"drawImage", [5], call76, quotient81, quotient86, call87, call88);
              lineNumber = 28
              var call90 = callmethod(var_ctx__39__,"restore", [0]);
              lineNumber = 29
              var string91 = new GraceString(" DRAWN");
              onSelf = true;
              var call93 = callmethod(this, "imgTag", [0]);
              var call94 = callmethod(call93,"src", [0]);
              var string96 = new GraceString("IMAGE: ");
              var opresult98 = callmethod(string96, "++", [1], call94);
              var opresult100 = callmethod(opresult98, "++", [1], string91);
              var call101 = Grace_print(opresult100);
              return call101
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
          sourceObject = obj49;
          lineNumber = 15
          var string102 = new GraceString("...");
          var string105 = new GraceString("CREATING NEW IMAGE: ");
          var opresult107 = callmethod(string105, "++", [1], var_url__39__);
          var opresult109 = callmethod(opresult107, "++", [1], string102);
          var call110 = Grace_print(opresult109);
          sourceObject = obj49;
          lineNumber = 16
          var string111 = new GraceString("img");
          var call112 = callmethod(var_dom,"document", [0]);
          var call113 = callmethod(call112,"createElement", [1], string111);
          obj49.data["imgTag"] = call113;
          var reader_kitty_imgTag_114 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_114.def = true;
          reader_kitty_imgTag_114.confidential = true;
          obj49.methods["imgTag"] = reader_kitty_imgTag_114;
          lineNumber = 16;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call113)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj49;
          lineNumber = 19
          lineNumber = 16
          lineNumber = 17
          onSelf = true;
          var call115 = callmethod(this, "imgTag", [0]);
          var call116 = callmethod(call115,"src:=", [1], var_url__39__);
          sourceObject = obj49;
          lineNumber = 19
          obj49.data["height"] = new GraceNum(64);
          var reader_kitty_height_117 = function() {
            return this.data["height"];
          }
          obj49.methods["height"] = reader_kitty_height_117;
          obj49.data["height"] = new GraceNum(64);
          var writer_kitty_height_117 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj49.methods["height:="] = writer_kitty_height_117;
          reader_kitty_height_117.confidential = true;
          writer_kitty_height_117.confidential = true;
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
          var reader_kitty_width_118 = function() {
            return this.data["width"];
          }
          obj49.methods["width"] = reader_kitty_width_118;
          obj49.data["width"] = new GraceNum(64);
          var writer_kitty_width_118 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj49.methods["width:="] = writer_kitty_width_118;
          reader_kitty_width_118.confidential = true;
          writer_kitty_width_118.confidential = true;
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
          lineNumber = 32
          var string119 = new GraceString("");
          var string122 = new GraceString("CREATED NEW IMAGE: ");
          var opresult124 = callmethod(string122, "++", [1], var_url__39__);
          var opresult126 = callmethod(opresult124, "++", [1], string119);
          var call127 = Grace_print(opresult126);
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
    var func128 = function(argcv) {
      var curarg = 1;
      var var_url__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj129 = Grace_allocObject();
        obj129.definitionModule = "kitty";
        obj129.definitionLine = 13;
        var inho129 = inheritingObject;
        while (inho129.superobj) inho129 = inho129.superobj;
        inho129.superobj = obj129;
        obj129.data = inheritingObject.data;
        obj129.outer = this;
        var reader_kitty_outer_130 = function() {
          return this.outer;
        }
        obj129.methods["outer"] = reader_kitty_outer_130;
        function obj_init_129() {
          var origSuperDepth = superDepth;
          superDepth = obj129;
          obj129.annotations = [];
          var func131 = function(argcv) {
            var curarg = 1;
            var var_ctx__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func131.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 23
              var string132 = new GraceString("...");
              onSelf = true;
              var call134 = callmethod(this, "imgTag", [0]);
              var call135 = callmethod(call134,"src", [0]);
              var string137 = new GraceString("DRAWING IMAGE: ");
              var opresult139 = callmethod(string137, "++", [1], call135);
              var opresult141 = callmethod(opresult139, "++", [1], string132);
              var call142 = Grace_print(opresult141);
              lineNumber = 24
              var call143 = callmethod(var_ctx__39__,"save", [0]);
              lineNumber = 25
              var call144 = callmethod(var_ctx__39__,"translate", [2], new GraceNum(0), new GraceNum(0));
              lineNumber = 26
              var opresult149 = callmethod(new GraceNum(180), "+", [1], new GraceNum(180));
              var call150 = callmethod(opresult149,"prefix-", [0]);
              var quotient152 = callmethod(call150, "/", [1], new GraceNum(180));
              var prod154 = callmethod(quotient152, "*", [1], new GraceNum(3.1415));
              var call155 = callmethod(var_ctx__39__,"rotate", [1], prod154);
              lineNumber = 27
              onSelf = true;
              var call156 = callmethod(this, "imgTag", [0]);
              onSelf = true;
              var call158 = callmethod(this, "width", [0]);
              var call159 = callmethod(call158,"prefix-", [0]);
              var quotient161 = callmethod(call159, "/", [1], new GraceNum(2));
              onSelf = true;
              var call163 = callmethod(this, "height", [0]);
              var call164 = callmethod(call163,"prefix-", [0]);
              var quotient166 = callmethod(call164, "/", [1], new GraceNum(2));
              onSelf = true;
              var call167 = callmethod(this, "width", [0]);
              onSelf = true;
              var call168 = callmethod(this, "height", [0]);
              var call169 = callmethod(var_ctx__39__,"drawImage", [5], call156, quotient161, quotient166, call167, call168);
              lineNumber = 28
              var call170 = callmethod(var_ctx__39__,"restore", [0]);
              lineNumber = 29
              var string171 = new GraceString(" DRAWN");
              onSelf = true;
              var call173 = callmethod(this, "imgTag", [0]);
              var call174 = callmethod(call173,"src", [0]);
              var string176 = new GraceString("IMAGE: ");
              var opresult178 = callmethod(string176, "++", [1], call174);
              var opresult180 = callmethod(opresult178, "++", [1], string171);
              var call181 = Grace_print(opresult180);
              return call181
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func131.paramCounts = [
            1,
          ];
          func131.variableArities = [
            false,
          ];
          obj129.methods["draw"] = func131;
          func131.definitionLine = 22;
          func131.definitionModule = "kitty";
          sourceObject = obj129;
          lineNumber = 15
          var string182 = new GraceString("...");
          var string185 = new GraceString("CREATING NEW IMAGE: ");
          var opresult187 = callmethod(string185, "++", [1], var_url__39__);
          var opresult189 = callmethod(opresult187, "++", [1], string182);
          var call190 = Grace_print(opresult189);
          sourceObject = obj129;
          lineNumber = 16
          var string191 = new GraceString("img");
          var call192 = callmethod(var_dom,"document", [0]);
          var call193 = callmethod(call192,"createElement", [1], string191);
          obj129.data["imgTag"] = call193;
          var reader_kitty_imgTag_194 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_194.def = true;
          reader_kitty_imgTag_194.confidential = true;
          obj129.methods["imgTag"] = reader_kitty_imgTag_194;
          lineNumber = 16;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call193)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj129;
          lineNumber = 19
          lineNumber = 16
          lineNumber = 17
          onSelf = true;
          var call195 = callmethod(this, "imgTag", [0]);
          var call196 = callmethod(call195,"src:=", [1], var_url__39__);
          sourceObject = obj129;
          lineNumber = 19
          obj129.data["height"] = new GraceNum(64);
          var reader_kitty_height_197 = function() {
            return this.data["height"];
          }
          obj129.methods["height"] = reader_kitty_height_197;
          obj129.data["height"] = new GraceNum(64);
          var writer_kitty_height_197 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj129.methods["height:="] = writer_kitty_height_197;
          reader_kitty_height_197.confidential = true;
          writer_kitty_height_197.confidential = true;
          lineNumber = 20;
          moduleName = "kitty";
          lineNumber = 19
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(64))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj129.mutable = true;
          sourceObject = obj129;
          lineNumber = 20
          obj129.data["width"] = new GraceNum(64);
          var reader_kitty_width_198 = function() {
            return this.data["width"];
          }
          obj129.methods["width"] = reader_kitty_width_198;
          obj129.data["width"] = new GraceNum(64);
          var writer_kitty_width_198 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj129.methods["width:="] = writer_kitty_width_198;
          reader_kitty_width_198.confidential = true;
          writer_kitty_width_198.confidential = true;
          lineNumber = 22;
          moduleName = "kitty";
          lineNumber = 20
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(64))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj129.mutable = true;
          sourceObject = obj129;
          sourceObject = obj129;
          lineNumber = 32
          var string199 = new GraceString("");
          var string202 = new GraceString("CREATED NEW IMAGE: ");
          var opresult204 = callmethod(string202, "++", [1], var_url__39__);
          var opresult206 = callmethod(opresult204, "++", [1], string199);
          var call207 = Grace_print(opresult206);
          superDepth = origSuperDepth;
        }
        obj_init_129.apply(inheritingObject, []);
        return obj129
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj46.methods["new()object"] = func128;
    var func208 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 13
        var string209 = new GraceString("class KittyImage");
        return string209
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func208.paramCounts = [
    ];
    func208.variableArities = [
    ];
    obj46.methods["asDebugString"] = func208;
    func208.definitionLine = 13;
    func208.definitionModule = "kitty";
    sourceObject = obj46;
    sourceObject = obj46;
    superDepth = origSuperDepth;
  }
  obj_init_46.apply(obj46, []);
  var var_KittyImage = obj46;
  lineNumber = 35
  lineNumber = 42
  var func210 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func210.paramCounts[0])
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
  func210.paramCounts = [
    0,
  ];
  func210.variableArities = [
    false,
  ];
  this.methods["KittyEntity"] = func210;
  func210.definitionLine = 42;
  func210.definitionModule = "kitty";
  var obj211 = Grace_allocObject();
  obj211.definitionModule = "kitty";
  obj211.definitionLine = 42;
  obj211.outer = this;
  var reader_kitty_outer_212 = function() {
    return this.outer;
  }
  obj211.methods["outer"] = reader_kitty_outer_212;
  function obj_init_211() {
    var origSuperDepth = superDepth;
    superDepth = obj211;
    obj211.annotations = [];
    var func213 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func213.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj214 = Grace_allocObject();
        obj214.definitionModule = "kitty";
        obj214.definitionLine = 42;
        obj214.outer = this;
        var reader_kitty_outer_215 = function() {
          return this.outer;
        }
        obj214.methods["outer"] = reader_kitty_outer_215;
        function obj_init_214() {
          var origSuperDepth = superDepth;
          superDepth = obj214;
          obj214.annotations = [];
          var func216 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func216.paramCounts[0])
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
          func216.paramCounts = [
            0,
          ];
          func216.variableArities = [
            false,
          ];
          obj214.methods["awake"] = func216;
          func216.definitionLine = 55;
          func216.definitionModule = "kitty";
          var func217 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func217.paramCounts[0])
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
          func217.paramCounts = [
            0,
          ];
          func217.variableArities = [
            false,
          ];
          obj214.methods["start"] = func217;
          func217.definitionLine = 60;
          func217.definitionModule = "kitty";
          var func218 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func218.paramCounts[0])
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
          func218.paramCounts = [
            0,
          ];
          func218.variableArities = [
            false,
          ];
          obj214.methods["update"] = func218;
          func218.definitionLine = 65;
          func218.definitionModule = "kitty";
          var func219 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func219.paramCounts[0])
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
          func219.paramCounts = [
            0,
          ];
          func219.variableArities = [
            false,
          ];
          obj214.methods["onDestroy"] = func219;
          func219.definitionLine = 70;
          func219.definitionModule = "kitty";
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
              lineNumber = 75
              onSelf = true;
              var call221 = callmethod(this, "image", [0]);
              var call222 = callmethod(call221,"draw", [1], var_ctx__39__);
              return call222
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
          obj214.methods["draw"] = func220;
          func220.definitionLine = 74;
          func220.definitionModule = "kitty";
          var func223 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func223.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 80
              lineNumber = 42
              lineNumber = 79
              onSelf = true;
              var call224 = callmethod(this, "image:=", [1], var_image__39__);
              return call224
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func223.paramTypes = [];
          func223.paramTypes.push([]);
          func223.paramCounts = [
            1,
          ];
          func223.variableArities = [
            false,
          ];
          obj214.methods["setImage"] = func223;
          func223.definitionLine = 78;
          func223.definitionModule = "kitty";
          var func225 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func225.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 84
              lineNumber = 42
              lineNumber = 83
              onSelf = true;
              var call226 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 85
              lineNumber = 42
              lineNumber = 84
              onSelf = true;
              var call227 = callmethod(this, "posY:=", [1], var_y);
              return call227
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func225.paramCounts = [
            2,
          ];
          func225.variableArities = [
            false,
          ];
          obj214.methods["setLocation"] = func225;
          func225.definitionLine = 82;
          func225.definitionModule = "kitty";
          var func228 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func228.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 89
              lineNumber = 88
              onSelf = true;
              var call229 = callmethod(this, "posX", [0]);
              return call229
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func228.paramCounts = [
            0,
          ];
          func228.variableArities = [
            false,
          ];
          obj214.methods["getX"] = func228;
          func228.definitionLine = 87;
          func228.definitionModule = "kitty";
          var func230 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func230.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 93
              lineNumber = 92
              onSelf = true;
              var call231 = callmethod(this, "posY", [0]);
              return call231
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func230.paramCounts = [
            0,
          ];
          func230.variableArities = [
            false,
          ];
          obj214.methods["getY"] = func230;
          func230.definitionLine = 91;
          func230.definitionModule = "kitty";
          var func232 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func232.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 97
              lineNumber = 96
              onSelf = true;
              var call233 = callmethod(this, "rotation", [0]);
              return call233
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func232.paramCounts = [
            0,
          ];
          func232.variableArities = [
            false,
          ];
          obj214.methods["getRotation"] = func232;
          func232.definitionLine = 95;
          func232.definitionModule = "kitty";
          sourceObject = obj214;
          lineNumber = 44
          var string234 = new GraceString(")...");
          var string237 = new GraceString(", ");
          var string240 = new GraceString("CREATING ENTITY AT (");
          var opresult242 = callmethod(string240, "++", [1], var_x__39__);
          var opresult244 = callmethod(opresult242, "++", [1], string237);
          var opresult246 = callmethod(opresult244, "++", [1], var_y__39__);
          var opresult248 = callmethod(opresult246, "++", [1], string234);
          var call249 = Grace_print(opresult248);
          sourceObject = obj214;
          lineNumber = 46
          obj214.data["posX"] = var_x__39__;
          var reader_kitty_posX_250 = function() {
            return this.data["posX"];
          }
          obj214.methods["posX"] = reader_kitty_posX_250;
          obj214.data["posX"] = var_x__39__;
          var writer_kitty_posX_250 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj214.methods["posX:="] = writer_kitty_posX_250;
          reader_kitty_posX_250.confidential = true;
          writer_kitty_posX_250.confidential = true;
          lineNumber = 47;
          moduleName = "kitty";
          lineNumber = 46
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj214.mutable = true;
          sourceObject = obj214;
          lineNumber = 47
          obj214.data["posY"] = var_y__39__;
          var reader_kitty_posY_251 = function() {
            return this.data["posY"];
          }
          obj214.methods["posY"] = reader_kitty_posY_251;
          obj214.data["posY"] = var_y__39__;
          var writer_kitty_posY_251 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj214.methods["posY:="] = writer_kitty_posY_251;
          reader_kitty_posY_251.confidential = true;
          writer_kitty_posY_251.confidential = true;
          lineNumber = 48;
          moduleName = "kitty";
          lineNumber = 47
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj214.mutable = true;
          sourceObject = obj214;
          lineNumber = 48
          obj214.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_252 = function() {
            return this.data["rotation"];
          }
          obj214.methods["rotation"] = reader_kitty_rotation_252;
          obj214.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_252 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj214.methods["rotation:="] = writer_kitty_rotation_252;
          reader_kitty_rotation_252.confidential = true;
          writer_kitty_rotation_252.confidential = true;
          lineNumber = 50;
          moduleName = "kitty";
          lineNumber = 48
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj214.mutable = true;
          sourceObject = obj214;
          obj214.data["image"] = undefined;
          var reader_kitty_image_253 = function() {
            return this.data["image"];
          }
          obj214.methods["image"] = reader_kitty_image_253;
          obj214.data["image"] = undefined;
          var writer_kitty_image_253 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj214.methods["image:="] = writer_kitty_image_253;
          reader_kitty_image_253.confidential = true;
          writer_kitty_image_253.confidential = true;
          obj214.mutable = true;
          sourceObject = obj214;
          lineNumber = 52
          onSelf = true;
          var call254 = callmethod(this, "awake", [0]);
          sourceObject = obj214;
          sourceObject = obj214;
          sourceObject = obj214;
          sourceObject = obj214;
          sourceObject = obj214;
          sourceObject = obj214;
          sourceObject = obj214;
          sourceObject = obj214;
          sourceObject = obj214;
          sourceObject = obj214;
          sourceObject = obj214;
          lineNumber = 99
          var string255 = new GraceString("ENTITY CREATED");
          var call256 = Grace_print(string255);
          superDepth = origSuperDepth;
        }
        obj_init_214.apply(obj214, []);
        return obj214
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func213.paramCounts = [
      2,
    ];
    func213.variableArities = [
      false,
    ];
    obj211.methods["new"] = func213;
    func213.definitionLine = 42;
    func213.definitionModule = "kitty";
    var func257 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj258 = Grace_allocObject();
        obj258.definitionModule = "kitty";
        obj258.definitionLine = 42;
        var inho258 = inheritingObject;
        while (inho258.superobj) inho258 = inho258.superobj;
        inho258.superobj = obj258;
        obj258.data = inheritingObject.data;
        obj258.outer = this;
        var reader_kitty_outer_259 = function() {
          return this.outer;
        }
        obj258.methods["outer"] = reader_kitty_outer_259;
        function obj_init_258() {
          var origSuperDepth = superDepth;
          superDepth = obj258;
          obj258.annotations = [];
          var func260 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func260.paramCounts[0])
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
          func260.paramCounts = [
            0,
          ];
          func260.variableArities = [
            false,
          ];
          obj258.methods["awake"] = func260;
          func260.definitionLine = 55;
          func260.definitionModule = "kitty";
          var func261 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func261.paramCounts[0])
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
          func261.paramCounts = [
            0,
          ];
          func261.variableArities = [
            false,
          ];
          obj258.methods["start"] = func261;
          func261.definitionLine = 60;
          func261.definitionModule = "kitty";
          var func262 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func262.paramCounts[0])
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
          func262.paramCounts = [
            0,
          ];
          func262.variableArities = [
            false,
          ];
          obj258.methods["update"] = func262;
          func262.definitionLine = 65;
          func262.definitionModule = "kitty";
          var func263 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func263.paramCounts[0])
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
          func263.paramCounts = [
            0,
          ];
          func263.variableArities = [
            false,
          ];
          obj258.methods["onDestroy"] = func263;
          func263.definitionLine = 70;
          func263.definitionModule = "kitty";
          var func264 = function(argcv) {
            var curarg = 1;
            var var_ctx__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func264.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 75
              onSelf = true;
              var call265 = callmethod(this, "image", [0]);
              var call266 = callmethod(call265,"draw", [1], var_ctx__39__);
              return call266
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func264.paramCounts = [
            1,
          ];
          func264.variableArities = [
            false,
          ];
          obj258.methods["draw"] = func264;
          func264.definitionLine = 74;
          func264.definitionModule = "kitty";
          var func267 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func267.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 80
              lineNumber = 42
              lineNumber = 79
              onSelf = true;
              var call268 = callmethod(this, "image:=", [1], var_image__39__);
              return call268
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func267.paramTypes = [];
          func267.paramTypes.push([]);
          func267.paramCounts = [
            1,
          ];
          func267.variableArities = [
            false,
          ];
          obj258.methods["setImage"] = func267;
          func267.definitionLine = 78;
          func267.definitionModule = "kitty";
          var func269 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func269.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 84
              lineNumber = 42
              lineNumber = 83
              onSelf = true;
              var call270 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 85
              lineNumber = 42
              lineNumber = 84
              onSelf = true;
              var call271 = callmethod(this, "posY:=", [1], var_y);
              return call271
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func269.paramCounts = [
            2,
          ];
          func269.variableArities = [
            false,
          ];
          obj258.methods["setLocation"] = func269;
          func269.definitionLine = 82;
          func269.definitionModule = "kitty";
          var func272 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func272.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 89
              lineNumber = 88
              onSelf = true;
              var call273 = callmethod(this, "posX", [0]);
              return call273
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func272.paramCounts = [
            0,
          ];
          func272.variableArities = [
            false,
          ];
          obj258.methods["getX"] = func272;
          func272.definitionLine = 87;
          func272.definitionModule = "kitty";
          var func274 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func274.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 93
              lineNumber = 92
              onSelf = true;
              var call275 = callmethod(this, "posY", [0]);
              return call275
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func274.paramCounts = [
            0,
          ];
          func274.variableArities = [
            false,
          ];
          obj258.methods["getY"] = func274;
          func274.definitionLine = 91;
          func274.definitionModule = "kitty";
          var func276 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func276.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 97
              lineNumber = 96
              onSelf = true;
              var call277 = callmethod(this, "rotation", [0]);
              return call277
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func276.paramCounts = [
            0,
          ];
          func276.variableArities = [
            false,
          ];
          obj258.methods["getRotation"] = func276;
          func276.definitionLine = 95;
          func276.definitionModule = "kitty";
          sourceObject = obj258;
          lineNumber = 44
          var string278 = new GraceString(")...");
          var string281 = new GraceString(", ");
          var string284 = new GraceString("CREATING ENTITY AT (");
          var opresult286 = callmethod(string284, "++", [1], var_x__39__);
          var opresult288 = callmethod(opresult286, "++", [1], string281);
          var opresult290 = callmethod(opresult288, "++", [1], var_y__39__);
          var opresult292 = callmethod(opresult290, "++", [1], string278);
          var call293 = Grace_print(opresult292);
          sourceObject = obj258;
          lineNumber = 46
          obj258.data["posX"] = var_x__39__;
          var reader_kitty_posX_294 = function() {
            return this.data["posX"];
          }
          obj258.methods["posX"] = reader_kitty_posX_294;
          obj258.data["posX"] = var_x__39__;
          var writer_kitty_posX_294 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj258.methods["posX:="] = writer_kitty_posX_294;
          reader_kitty_posX_294.confidential = true;
          writer_kitty_posX_294.confidential = true;
          lineNumber = 47;
          moduleName = "kitty";
          lineNumber = 46
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj258.mutable = true;
          sourceObject = obj258;
          lineNumber = 47
          obj258.data["posY"] = var_y__39__;
          var reader_kitty_posY_295 = function() {
            return this.data["posY"];
          }
          obj258.methods["posY"] = reader_kitty_posY_295;
          obj258.data["posY"] = var_y__39__;
          var writer_kitty_posY_295 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj258.methods["posY:="] = writer_kitty_posY_295;
          reader_kitty_posY_295.confidential = true;
          writer_kitty_posY_295.confidential = true;
          lineNumber = 48;
          moduleName = "kitty";
          lineNumber = 47
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj258.mutable = true;
          sourceObject = obj258;
          lineNumber = 48
          obj258.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_296 = function() {
            return this.data["rotation"];
          }
          obj258.methods["rotation"] = reader_kitty_rotation_296;
          obj258.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_296 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj258.methods["rotation:="] = writer_kitty_rotation_296;
          reader_kitty_rotation_296.confidential = true;
          writer_kitty_rotation_296.confidential = true;
          lineNumber = 50;
          moduleName = "kitty";
          lineNumber = 48
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj258.mutable = true;
          sourceObject = obj258;
          obj258.data["image"] = undefined;
          var reader_kitty_image_297 = function() {
            return this.data["image"];
          }
          obj258.methods["image"] = reader_kitty_image_297;
          obj258.data["image"] = undefined;
          var writer_kitty_image_297 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj258.methods["image:="] = writer_kitty_image_297;
          reader_kitty_image_297.confidential = true;
          writer_kitty_image_297.confidential = true;
          obj258.mutable = true;
          sourceObject = obj258;
          lineNumber = 52
          onSelf = true;
          var call298 = callmethod(this, "awake", [0]);
          sourceObject = obj258;
          sourceObject = obj258;
          sourceObject = obj258;
          sourceObject = obj258;
          sourceObject = obj258;
          sourceObject = obj258;
          sourceObject = obj258;
          sourceObject = obj258;
          sourceObject = obj258;
          sourceObject = obj258;
          sourceObject = obj258;
          lineNumber = 99
          var string299 = new GraceString("ENTITY CREATED");
          var call300 = Grace_print(string299);
          superDepth = origSuperDepth;
        }
        obj_init_258.apply(inheritingObject, []);
        return obj258
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj211.methods["new()object"] = func257;
    var func301 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 42
        var string302 = new GraceString("class KittyEntity");
        return string302
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func301.paramCounts = [
    ];
    func301.variableArities = [
    ];
    obj211.methods["asDebugString"] = func301;
    func301.definitionLine = 42;
    func301.definitionModule = "kitty";
    sourceObject = obj211;
    sourceObject = obj211;
    superDepth = origSuperDepth;
  }
  obj_init_211.apply(obj211, []);
  var var_KittyEntity = obj211;
  lineNumber = 102
  lineNumber = 109
  var func303 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func303.paramCounts[0])
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
  func303.paramCounts = [
    0,
  ];
  func303.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func303;
  func303.definitionLine = 109;
  func303.definitionModule = "kitty";
  var obj304 = Grace_allocObject();
  obj304.definitionModule = "kitty";
  obj304.definitionLine = 109;
  obj304.outer = this;
  var reader_kitty_outer_305 = function() {
    return this.outer;
  }
  obj304.methods["outer"] = reader_kitty_outer_305;
  function obj_init_304() {
    var origSuperDepth = superDepth;
    superDepth = obj304;
    obj304.annotations = [];
    var func306 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func306.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj307 = Grace_allocObject();
        obj307.definitionModule = "kitty";
        obj307.definitionLine = 109;
        obj307.outer = this;
        var reader_kitty_outer_308 = function() {
          return this.outer;
        }
        obj307.methods["outer"] = reader_kitty_outer_308;
        function obj_init_307() {
          var origSuperDepth = superDepth;
          superDepth = obj307;
          obj307.annotations = [];
          var func309 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func309.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 136
              var string310 = new GraceString("INITIALIZING WORLD...");
              var call311 = Grace_print(string310);
              lineNumber = 142
              var if312 = var_done;
              lineNumber = 138
              onSelf = true;
              var call313 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call313)) {
                lineNumber = 140
                lineNumber = 139
                var bool314 = new GraceBoolean(false)
                return bool314
              }
              lineNumber = 143
              lineNumber = 109
              lineNumber = 142
              var call315 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call316 = callmethod(this, "document:=", [1], call315);
              lineNumber = 143
              lineNumber = 142
              lineNumber = 143
              var string317 = new GraceString("standard-canvas");
              onSelf = true;
              var call318 = callmethod(this, "document", [0]);
              var call319 = callmethod(call318,"getElementById", [1], string317);
              onSelf = true;
              var call320 = callmethod(this, "canvas:=", [1], call319);
              lineNumber = 145
              lineNumber = 142
              lineNumber = 144
              onSelf = true;
              var call321 = callmethod(this, "canvas", [0]);
              var call322 = callmethod(call321,"width", [0]);
              onSelf = true;
              var call323 = callmethod(this, "canvasWidth:=", [1], call322);
              lineNumber = 147
              lineNumber = 144
              lineNumber = 145
              onSelf = true;
              var call324 = callmethod(this, "canvas", [0]);
              var call325 = callmethod(call324,"height", [0]);
              onSelf = true;
              var call326 = callmethod(this, "canvasHeight:=", [1], call325);
              lineNumber = 148
              lineNumber = 145
              lineNumber = 147
              var bool327 = new GraceBoolean(true)
              onSelf = true;
              var call328 = callmethod(this, "isInit:=", [1], bool327);
              lineNumber = 148
              var string329 = new GraceString("INITIALIZATION FINISHED");
              var call330 = Grace_print(string329);
              return call330
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func309.paramCounts = [
            0,
          ];
          func309.variableArities = [
            false,
          ];
          obj307.methods["init"] = func309;
          func309.definitionLine = 134;
          func309.definitionModule = "kitty";
          var func331 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func331.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 153
              var string332 = new GraceString("STARTING WORLD...");
              var call333 = Grace_print(string332);
              lineNumber = 154
              lineNumber = 145
              lineNumber = 154
              var string334 = new GraceString("canvas");
              var call335 = callmethod(var_dom,"document", [0]);
              var call336 = callmethod(call335,"createElement", [1], string334);
              onSelf = true;
              var call337 = callmethod(this, "backingCanvas:=", [1], call336);
              lineNumber = 156
              lineNumber = 154
              lineNumber = 155
              onSelf = true;
              var call338 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call339 = callmethod(this, "backingCanvas", [0]);
              var call340 = callmethod(call339,"height:=", [1], call338);
              lineNumber = 157
              lineNumber = 154
              lineNumber = 156
              onSelf = true;
              var call341 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call342 = callmethod(this, "backingCanvas", [0]);
              var call343 = callmethod(call342,"width:=", [1], call341);
              lineNumber = 157
              lineNumber = 154
              lineNumber = 157
              var string344 = new GraceString("2d");
              onSelf = true;
              var call345 = callmethod(this, "backingCanvas", [0]);
              var call346 = callmethod(call345,"getContext", [1], string344);
              onSelf = true;
              var call347 = callmethod(this, "backingContext:=", [1], call346);
              lineNumber = 158
              lineNumber = 154
              lineNumber = 158
              var string348 = new GraceString("2d");
              onSelf = true;
              var call349 = callmethod(this, "canvas", [0]);
              var call350 = callmethod(call349,"getContext", [1], string348);
              onSelf = true;
              var call351 = callmethod(this, "mctx:=", [1], call350);
              lineNumber = 159
              var string352 = new GraceString("WORLD STARTED");
              var call353 = Grace_print(string352);
              return call353
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
          obj307.methods["start"] = func331;
          func331.definitionLine = 152;
          func331.definitionModule = "kitty";
          var func354 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func354.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 164
              var string355 = new GraceString("UPDATING WORLD...");
              var call356 = Grace_print(string355);
              lineNumber = 168
              lineNumber = 154
              lineNumber = 167
              onSelf = true;
              var call357 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call358 = callmethod(this, "mctx", [0]);
              var call359 = callmethod(call358,"fillStyle:=", [1], call357);
              lineNumber = 168
              onSelf = true;
              var call360 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call361 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call362 = callmethod(this, "mctx", [0]);
              var call363 = callmethod(call362,"fillRect", [4], new GraceNum(0), new GraceNum(0), call360, call361);
              lineNumber = 169
              onSelf = true;
              var call364 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call365 = callmethod(this, "mctx", [0]);
              var call366 = callmethod(call365,"drawImage", [3], call364, new GraceNum(0), new GraceNum(0));
              lineNumber = 170
              onSelf = true;
              var call367 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call368 = callmethod(this, "background", [0]);
              var call369 = callmethod(call368,"draw", [1], call367);
              lineNumber = 173
              onSelf = true;
              var call370 = callmethod(this, "entities", [0]);
              lineNumber = 177
              var block371 = Grace_allocObject();
              block371.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block371.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block371.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block371.methods["match"] = GraceBlock_match;
              block371.methods["prefix?"] = GraceBlock_lift;
              block371.receiver = this;
              block371.className = 'block<kitty:177>';
              block371.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 174
                onSelf = true;
                var call372 = callmethod(this, "mctx", [0]);
                var call373 = callmethod(var_entity,"draw", [1], call372);
                return call373;
              };
              var call374 = callmethod(Grace_prelude,"for()do", [1, 1], call370, block371);
              lineNumber = 177
              var string375 = new GraceString("WORLD UPDATED");
              var call376 = Grace_print(string375);
              return call376
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func354.paramCounts = [
            0,
          ];
          func354.variableArities = [
            false,
          ];
          obj307.methods["update"] = func354;
          func354.definitionLine = 163;
          func354.definitionModule = "kitty";
          var func377 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func377.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 185
              lineNumber = 154
              lineNumber = 184
              onSelf = true;
              var call378 = callmethod(this, "background:=", [1], var_background__39__);
              return call378
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func377.paramCounts = [
            1,
          ];
          func377.variableArities = [
            false,
          ];
          obj307.methods["setBackground"] = func377;
          func377.definitionLine = 183;
          func377.definitionModule = "kitty";
          var func379 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func379.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 188
              onSelf = true;
              var call380 = callmethod(this, "entities", [0]);
              var call381 = callmethod(call380,"push", [1], var_e);
              return call381
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func379.paramTypes = [];
          func379.paramTypes.push([]);
          func379.paramCounts = [
            1,
          ];
          func379.variableArities = [
            false,
          ];
          obj307.methods["addEntity"] = func379;
          func379.definitionLine = 187;
          func379.definitionModule = "kitty";
          sourceObject = obj307;
          lineNumber = 111
          var string382 = new GraceString("CREATING NEW WORLD...");
          var call383 = Grace_print(string382);
          sourceObject = obj307;
          obj307.data["background"] = undefined;
          var reader_kitty_background_384 = function() {
            return this.data["background"];
          }
          obj307.methods["background"] = reader_kitty_background_384;
          obj307.data["background"] = undefined;
          var writer_kitty_background_384 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj307.methods["background:="] = writer_kitty_background_384;
          reader_kitty_background_384.confidential = true;
          writer_kitty_background_384.confidential = true;
          obj307.mutable = true;
          sourceObject = obj307;
          lineNumber = 114
          var string385 = new GraceString("black");
          obj307.data["backgroundColour"] = string385;
          var reader_kitty_backgroundColour_386 = function() {
            return this.data["backgroundColour"];
          }
          obj307.methods["backgroundColour"] = reader_kitty_backgroundColour_386;
          obj307.data["backgroundColour"] = string385;
          var writer_kitty_backgroundColour_386 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj307.methods["backgroundColour:="] = writer_kitty_backgroundColour_386;
          reader_kitty_backgroundColour_386.confidential = true;
          writer_kitty_backgroundColour_386.confidential = true;
          lineNumber = 116;
          moduleName = "kitty";
          lineNumber = 114
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string385)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj307.mutable = true;
          sourceObject = obj307;
          obj307.data["document"] = undefined;
          var reader_kitty_document_387 = function() {
            return this.data["document"];
          }
          obj307.methods["document"] = reader_kitty_document_387;
          obj307.data["document"] = undefined;
          var writer_kitty_document_387 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj307.methods["document:="] = writer_kitty_document_387;
          reader_kitty_document_387.confidential = true;
          writer_kitty_document_387.confidential = true;
          obj307.mutable = true;
          sourceObject = obj307;
          obj307.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_388 = function() {
            return this.data["backingCanvas"];
          }
          obj307.methods["backingCanvas"] = reader_kitty_backingCanvas_388;
          obj307.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_388 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj307.methods["backingCanvas:="] = writer_kitty_backingCanvas_388;
          reader_kitty_backingCanvas_388.confidential = true;
          writer_kitty_backingCanvas_388.confidential = true;
          obj307.mutable = true;
          sourceObject = obj307;
          obj307.data["backingContext"] = undefined;
          var reader_kitty_backingContext_389 = function() {
            return this.data["backingContext"];
          }
          obj307.methods["backingContext"] = reader_kitty_backingContext_389;
          obj307.data["backingContext"] = undefined;
          var writer_kitty_backingContext_389 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj307.methods["backingContext:="] = writer_kitty_backingContext_389;
          reader_kitty_backingContext_389.confidential = true;
          writer_kitty_backingContext_389.confidential = true;
          obj307.mutable = true;
          sourceObject = obj307;
          obj307.data["canvas"] = undefined;
          var reader_kitty_canvas_390 = function() {
            return this.data["canvas"];
          }
          obj307.methods["canvas"] = reader_kitty_canvas_390;
          obj307.data["canvas"] = undefined;
          var writer_kitty_canvas_390 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj307.methods["canvas:="] = writer_kitty_canvas_390;
          reader_kitty_canvas_390.confidential = true;
          writer_kitty_canvas_390.confidential = true;
          obj307.mutable = true;
          sourceObject = obj307;
          obj307.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_391 = function() {
            return this.data["canvasWidth"];
          }
          obj307.methods["canvasWidth"] = reader_kitty_canvasWidth_391;
          obj307.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_391 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj307.methods["canvasWidth:="] = writer_kitty_canvasWidth_391;
          reader_kitty_canvasWidth_391.confidential = true;
          writer_kitty_canvasWidth_391.confidential = true;
          obj307.mutable = true;
          sourceObject = obj307;
          obj307.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_392 = function() {
            return this.data["canvasHeight"];
          }
          obj307.methods["canvasHeight"] = reader_kitty_canvasHeight_392;
          obj307.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_392 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj307.methods["canvasHeight:="] = writer_kitty_canvasHeight_392;
          reader_kitty_canvasHeight_392.confidential = true;
          writer_kitty_canvasHeight_392.confidential = true;
          obj307.mutable = true;
          sourceObject = obj307;
          lineNumber = 125
          var call393 = callmethod(var_collections,"list", [0]);
          var call394 = callmethod(call393,"new", [0]);
          obj307.data["entities"] = call394;
          var reader_kitty_entities_395 = function() {
            return this.data["entities"];
          }
          obj307.methods["entities"] = reader_kitty_entities_395;
          obj307.data["entities"] = call394;
          var writer_kitty_entities_395 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj307.methods["entities:="] = writer_kitty_entities_395;
          reader_kitty_entities_395.confidential = true;
          writer_kitty_entities_395.confidential = true;
          lineNumber = 127;
          moduleName = "kitty";
          lineNumber = 125
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call394)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj307.mutable = true;
          sourceObject = obj307;
          lineNumber = 127
          var bool396 = new GraceBoolean(false)
          obj307.data["isInit"] = bool396;
          var reader_kitty_isInit_397 = function() {
            return this.data["isInit"];
          }
          obj307.methods["isInit"] = reader_kitty_isInit_397;
          obj307.data["isInit"] = bool396;
          var writer_kitty_isInit_397 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj307.methods["isInit:="] = writer_kitty_isInit_397;
          reader_kitty_isInit_397.confidential = true;
          writer_kitty_isInit_397.confidential = true;
          lineNumber = 129;
          moduleName = "kitty";
          lineNumber = 127
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool396)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj307.mutable = true;
          sourceObject = obj307;
          obj307.data["mctx"] = undefined;
          var reader_kitty_mctx_398 = function() {
            return this.data["mctx"];
          }
          obj307.methods["mctx"] = reader_kitty_mctx_398;
          obj307.data["mctx"] = undefined;
          var writer_kitty_mctx_398 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj307.methods["mctx:="] = writer_kitty_mctx_398;
          reader_kitty_mctx_398.confidential = true;
          writer_kitty_mctx_398.confidential = true;
          obj307.mutable = true;
          sourceObject = obj307;
          lineNumber = 131
          onSelf = true;
          var call399 = callmethod(this, "init", [0]);
          sourceObject = obj307;
          sourceObject = obj307;
          sourceObject = obj307;
          sourceObject = obj307;
          sourceObject = obj307;
          sourceObject = obj307;
          lineNumber = 191
          var string400 = new GraceString("WORLD CREATED");
          var call401 = Grace_print(string400);
          superDepth = origSuperDepth;
        }
        obj_init_307.apply(obj307, []);
        return obj307
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func306.paramCounts = [
      0,
    ];
    func306.variableArities = [
      false,
    ];
    obj304.methods["new"] = func306;
    func306.definitionLine = 109;
    func306.definitionModule = "kitty";
    var func402 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj403 = Grace_allocObject();
        obj403.definitionModule = "kitty";
        obj403.definitionLine = 109;
        var inho403 = inheritingObject;
        while (inho403.superobj) inho403 = inho403.superobj;
        inho403.superobj = obj403;
        obj403.data = inheritingObject.data;
        obj403.outer = this;
        var reader_kitty_outer_404 = function() {
          return this.outer;
        }
        obj403.methods["outer"] = reader_kitty_outer_404;
        function obj_init_403() {
          var origSuperDepth = superDepth;
          superDepth = obj403;
          obj403.annotations = [];
          var func405 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func405.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 136
              var string406 = new GraceString("INITIALIZING WORLD...");
              var call407 = Grace_print(string406);
              lineNumber = 142
              var if408 = var_done;
              lineNumber = 138
              onSelf = true;
              var call409 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call409)) {
                lineNumber = 140
                lineNumber = 139
                var bool410 = new GraceBoolean(false)
                return bool410
              }
              lineNumber = 143
              lineNumber = 125
              lineNumber = 142
              var call411 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call412 = callmethod(this, "document:=", [1], call411);
              lineNumber = 143
              lineNumber = 142
              lineNumber = 143
              var string413 = new GraceString("standard-canvas");
              onSelf = true;
              var call414 = callmethod(this, "document", [0]);
              var call415 = callmethod(call414,"getElementById", [1], string413);
              onSelf = true;
              var call416 = callmethod(this, "canvas:=", [1], call415);
              lineNumber = 145
              lineNumber = 142
              lineNumber = 144
              onSelf = true;
              var call417 = callmethod(this, "canvas", [0]);
              var call418 = callmethod(call417,"width", [0]);
              onSelf = true;
              var call419 = callmethod(this, "canvasWidth:=", [1], call418);
              lineNumber = 147
              lineNumber = 144
              lineNumber = 145
              onSelf = true;
              var call420 = callmethod(this, "canvas", [0]);
              var call421 = callmethod(call420,"height", [0]);
              onSelf = true;
              var call422 = callmethod(this, "canvasHeight:=", [1], call421);
              lineNumber = 148
              lineNumber = 145
              lineNumber = 147
              var bool423 = new GraceBoolean(true)
              onSelf = true;
              var call424 = callmethod(this, "isInit:=", [1], bool423);
              lineNumber = 148
              var string425 = new GraceString("INITIALIZATION FINISHED");
              var call426 = Grace_print(string425);
              return call426
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func405.paramCounts = [
            0,
          ];
          func405.variableArities = [
            false,
          ];
          obj403.methods["init"] = func405;
          func405.definitionLine = 134;
          func405.definitionModule = "kitty";
          var func427 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func427.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 153
              var string428 = new GraceString("STARTING WORLD...");
              var call429 = Grace_print(string428);
              lineNumber = 154
              lineNumber = 145
              lineNumber = 154
              var string430 = new GraceString("canvas");
              var call431 = callmethod(var_dom,"document", [0]);
              var call432 = callmethod(call431,"createElement", [1], string430);
              onSelf = true;
              var call433 = callmethod(this, "backingCanvas:=", [1], call432);
              lineNumber = 156
              lineNumber = 154
              lineNumber = 155
              onSelf = true;
              var call434 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call435 = callmethod(this, "backingCanvas", [0]);
              var call436 = callmethod(call435,"height:=", [1], call434);
              lineNumber = 157
              lineNumber = 154
              lineNumber = 156
              onSelf = true;
              var call437 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call438 = callmethod(this, "backingCanvas", [0]);
              var call439 = callmethod(call438,"width:=", [1], call437);
              lineNumber = 157
              lineNumber = 154
              lineNumber = 157
              var string440 = new GraceString("2d");
              onSelf = true;
              var call441 = callmethod(this, "backingCanvas", [0]);
              var call442 = callmethod(call441,"getContext", [1], string440);
              onSelf = true;
              var call443 = callmethod(this, "backingContext:=", [1], call442);
              lineNumber = 158
              lineNumber = 154
              lineNumber = 158
              var string444 = new GraceString("2d");
              onSelf = true;
              var call445 = callmethod(this, "canvas", [0]);
              var call446 = callmethod(call445,"getContext", [1], string444);
              onSelf = true;
              var call447 = callmethod(this, "mctx:=", [1], call446);
              lineNumber = 159
              var string448 = new GraceString("WORLD STARTED");
              var call449 = Grace_print(string448);
              return call449
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func427.paramCounts = [
            0,
          ];
          func427.variableArities = [
            false,
          ];
          obj403.methods["start"] = func427;
          func427.definitionLine = 152;
          func427.definitionModule = "kitty";
          var func450 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func450.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 164
              var string451 = new GraceString("UPDATING WORLD...");
              var call452 = Grace_print(string451);
              lineNumber = 168
              lineNumber = 154
              lineNumber = 167
              onSelf = true;
              var call453 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call454 = callmethod(this, "mctx", [0]);
              var call455 = callmethod(call454,"fillStyle:=", [1], call453);
              lineNumber = 168
              onSelf = true;
              var call456 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call457 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call458 = callmethod(this, "mctx", [0]);
              var call459 = callmethod(call458,"fillRect", [4], new GraceNum(0), new GraceNum(0), call456, call457);
              lineNumber = 169
              onSelf = true;
              var call460 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call461 = callmethod(this, "mctx", [0]);
              var call462 = callmethod(call461,"drawImage", [3], call460, new GraceNum(0), new GraceNum(0));
              lineNumber = 170
              onSelf = true;
              var call463 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call464 = callmethod(this, "background", [0]);
              var call465 = callmethod(call464,"draw", [1], call463);
              lineNumber = 173
              onSelf = true;
              var call466 = callmethod(this, "entities", [0]);
              lineNumber = 177
              var block467 = Grace_allocObject();
              block467.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block467.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block467.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block467.methods["match"] = GraceBlock_match;
              block467.methods["prefix?"] = GraceBlock_lift;
              block467.receiver = this;
              block467.className = 'block<kitty:177>';
              block467.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 174
                onSelf = true;
                var call468 = callmethod(this, "mctx", [0]);
                var call469 = callmethod(var_entity,"draw", [1], call468);
                return call469;
              };
              var call470 = callmethod(Grace_prelude,"for()do", [1, 1], call466, block467);
              lineNumber = 177
              var string471 = new GraceString("WORLD UPDATED");
              var call472 = Grace_print(string471);
              return call472
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
          obj403.methods["update"] = func450;
          func450.definitionLine = 163;
          func450.definitionModule = "kitty";
          var func473 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func473.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 185
              lineNumber = 154
              lineNumber = 184
              onSelf = true;
              var call474 = callmethod(this, "background:=", [1], var_background__39__);
              return call474
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func473.paramCounts = [
            1,
          ];
          func473.variableArities = [
            false,
          ];
          obj403.methods["setBackground"] = func473;
          func473.definitionLine = 183;
          func473.definitionModule = "kitty";
          var func475 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func475.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 188
              onSelf = true;
              var call476 = callmethod(this, "entities", [0]);
              var call477 = callmethod(call476,"push", [1], var_e);
              return call477
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func475.paramTypes = [];
          func475.paramTypes.push([]);
          func475.paramCounts = [
            1,
          ];
          func475.variableArities = [
            false,
          ];
          obj403.methods["addEntity"] = func475;
          func475.definitionLine = 187;
          func475.definitionModule = "kitty";
          sourceObject = obj403;
          lineNumber = 111
          var string478 = new GraceString("CREATING NEW WORLD...");
          var call479 = Grace_print(string478);
          sourceObject = obj403;
          obj403.data["background"] = undefined;
          var reader_kitty_background_480 = function() {
            return this.data["background"];
          }
          obj403.methods["background"] = reader_kitty_background_480;
          obj403.data["background"] = undefined;
          var writer_kitty_background_480 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj403.methods["background:="] = writer_kitty_background_480;
          reader_kitty_background_480.confidential = true;
          writer_kitty_background_480.confidential = true;
          obj403.mutable = true;
          sourceObject = obj403;
          lineNumber = 114
          var string481 = new GraceString("black");
          obj403.data["backgroundColour"] = string481;
          var reader_kitty_backgroundColour_482 = function() {
            return this.data["backgroundColour"];
          }
          obj403.methods["backgroundColour"] = reader_kitty_backgroundColour_482;
          obj403.data["backgroundColour"] = string481;
          var writer_kitty_backgroundColour_482 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj403.methods["backgroundColour:="] = writer_kitty_backgroundColour_482;
          reader_kitty_backgroundColour_482.confidential = true;
          writer_kitty_backgroundColour_482.confidential = true;
          lineNumber = 116;
          moduleName = "kitty";
          lineNumber = 114
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string481)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj403.mutable = true;
          sourceObject = obj403;
          obj403.data["document"] = undefined;
          var reader_kitty_document_483 = function() {
            return this.data["document"];
          }
          obj403.methods["document"] = reader_kitty_document_483;
          obj403.data["document"] = undefined;
          var writer_kitty_document_483 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj403.methods["document:="] = writer_kitty_document_483;
          reader_kitty_document_483.confidential = true;
          writer_kitty_document_483.confidential = true;
          obj403.mutable = true;
          sourceObject = obj403;
          obj403.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_484 = function() {
            return this.data["backingCanvas"];
          }
          obj403.methods["backingCanvas"] = reader_kitty_backingCanvas_484;
          obj403.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_484 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj403.methods["backingCanvas:="] = writer_kitty_backingCanvas_484;
          reader_kitty_backingCanvas_484.confidential = true;
          writer_kitty_backingCanvas_484.confidential = true;
          obj403.mutable = true;
          sourceObject = obj403;
          obj403.data["backingContext"] = undefined;
          var reader_kitty_backingContext_485 = function() {
            return this.data["backingContext"];
          }
          obj403.methods["backingContext"] = reader_kitty_backingContext_485;
          obj403.data["backingContext"] = undefined;
          var writer_kitty_backingContext_485 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj403.methods["backingContext:="] = writer_kitty_backingContext_485;
          reader_kitty_backingContext_485.confidential = true;
          writer_kitty_backingContext_485.confidential = true;
          obj403.mutable = true;
          sourceObject = obj403;
          obj403.data["canvas"] = undefined;
          var reader_kitty_canvas_486 = function() {
            return this.data["canvas"];
          }
          obj403.methods["canvas"] = reader_kitty_canvas_486;
          obj403.data["canvas"] = undefined;
          var writer_kitty_canvas_486 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj403.methods["canvas:="] = writer_kitty_canvas_486;
          reader_kitty_canvas_486.confidential = true;
          writer_kitty_canvas_486.confidential = true;
          obj403.mutable = true;
          sourceObject = obj403;
          obj403.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_487 = function() {
            return this.data["canvasWidth"];
          }
          obj403.methods["canvasWidth"] = reader_kitty_canvasWidth_487;
          obj403.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_487 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj403.methods["canvasWidth:="] = writer_kitty_canvasWidth_487;
          reader_kitty_canvasWidth_487.confidential = true;
          writer_kitty_canvasWidth_487.confidential = true;
          obj403.mutable = true;
          sourceObject = obj403;
          obj403.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_488 = function() {
            return this.data["canvasHeight"];
          }
          obj403.methods["canvasHeight"] = reader_kitty_canvasHeight_488;
          obj403.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_488 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj403.methods["canvasHeight:="] = writer_kitty_canvasHeight_488;
          reader_kitty_canvasHeight_488.confidential = true;
          writer_kitty_canvasHeight_488.confidential = true;
          obj403.mutable = true;
          sourceObject = obj403;
          lineNumber = 125
          var call489 = callmethod(var_collections,"list", [0]);
          var call490 = callmethod(call489,"new", [0]);
          obj403.data["entities"] = call490;
          var reader_kitty_entities_491 = function() {
            return this.data["entities"];
          }
          obj403.methods["entities"] = reader_kitty_entities_491;
          obj403.data["entities"] = call490;
          var writer_kitty_entities_491 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj403.methods["entities:="] = writer_kitty_entities_491;
          reader_kitty_entities_491.confidential = true;
          writer_kitty_entities_491.confidential = true;
          lineNumber = 127;
          moduleName = "kitty";
          lineNumber = 125
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call490)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj403.mutable = true;
          sourceObject = obj403;
          lineNumber = 127
          var bool492 = new GraceBoolean(false)
          obj403.data["isInit"] = bool492;
          var reader_kitty_isInit_493 = function() {
            return this.data["isInit"];
          }
          obj403.methods["isInit"] = reader_kitty_isInit_493;
          obj403.data["isInit"] = bool492;
          var writer_kitty_isInit_493 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj403.methods["isInit:="] = writer_kitty_isInit_493;
          reader_kitty_isInit_493.confidential = true;
          writer_kitty_isInit_493.confidential = true;
          lineNumber = 129;
          moduleName = "kitty";
          lineNumber = 127
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool492)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj403.mutable = true;
          sourceObject = obj403;
          obj403.data["mctx"] = undefined;
          var reader_kitty_mctx_494 = function() {
            return this.data["mctx"];
          }
          obj403.methods["mctx"] = reader_kitty_mctx_494;
          obj403.data["mctx"] = undefined;
          var writer_kitty_mctx_494 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj403.methods["mctx:="] = writer_kitty_mctx_494;
          reader_kitty_mctx_494.confidential = true;
          writer_kitty_mctx_494.confidential = true;
          obj403.mutable = true;
          sourceObject = obj403;
          lineNumber = 131
          onSelf = true;
          var call495 = callmethod(this, "init", [0]);
          sourceObject = obj403;
          sourceObject = obj403;
          sourceObject = obj403;
          sourceObject = obj403;
          sourceObject = obj403;
          sourceObject = obj403;
          lineNumber = 191
          var string496 = new GraceString("WORLD CREATED");
          var call497 = Grace_print(string496);
          superDepth = origSuperDepth;
        }
        obj_init_403.apply(inheritingObject, []);
        return obj403
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj304.methods["new()object"] = func402;
    var func498 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 109
        var string499 = new GraceString("class KittyWorld");
        return string499
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func498.paramCounts = [
    ];
    func498.variableArities = [
    ];
    obj304.methods["asDebugString"] = func498;
    func498.definitionLine = 109;
    func498.definitionModule = "kitty";
    sourceObject = obj304;
    sourceObject = obj304;
    superDepth = origSuperDepth;
  }
  obj_init_304.apply(obj304, []);
  var var_KittyWorld = obj304;
  lineNumber = 194
  lineNumber = 203
  lineNumber = 219
  lineNumber = 223
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
'dom',
'StandardPrelude',
];
if (gctCache)
  gctCache['kitty'] = "constructors-of:KittyImage:\n new\nclasses:\n KittyImage\n KittyEntity\n KittyWorld\nfresh:Entity:\n start\n onDestroy\n getX\n getY\n image:=\n posX:=\n posY:=\n image\n rotation:=\n awake\n posX\n posY\n draw\n setImage\n rotation\n getRotation\n update\n setLocation\nconfidential:\nconstructors-of:KittyWorld:\n new\npath:\n kitty\nfresh:Image:\n height:=\n draw\n width\n width:=\n height\n imgTag\nfresh-methods:\n Image\n Entity\n World\nmodules:\n StandardPrelude\n mgcollections\nmethods-of:KittyEntity.new:\n start\n rotation:=\n getX\n getY\n image:=\n posX:=\n posY:=\n image\n onDestroy\n awake\n posX\n posY\n draw\n setImage\n rotation\n getRotation\n update\n setLocation\nfresh:World:\n backgroundColour:=\n canvasHeight:=\n backingCanvas\n start\n canvasWidth\n canvas:=\n backgroundColour\n canvasHeight\n backingContext:=\n canvas\n background\n mctx\n addEntity\n isInit:=\n init\n backingContext\n setBackground\n isInit\n background:=\n canvasWidth:=\n document:=\n entities:=\n document\n backingCanvas:=\n update\n entities\n mctx:=\npublic:\n m_world\n m_world:=\n worldSet\n worldSet:=\n KittyImage\n Image\n KittyEntity\n Entity\n KittyWorld\n World\n start\n stop\n setWorld\nmethods-of:KittyImage.new:\n height:=\n draw\n width\n width:=\n imgTag\n height\nmethods-of:KittyWorld.new:\n backgroundColour:=\n canvasHeight:=\n backingCanvas\n update\n mctx\n canvas:=\n backgroundColour\n canvasHeight\n backingContext:=\n canvas\n background\n entities:=\n addEntity\n isInit:=\n init\n backingContext\n setBackground\n isInit\n background:=\n canvasWidth:=\n document:=\n canvasWidth\n document\n backingCanvas:=\n start\n entities\n mctx:=\nconstructors-of:KittyEntity:\n new\n";
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
    "        print \"DRAWING IMAGE: {imgTag.src}...\"",
    "        ctx'.save",
    "        ctx'.translate(0, 0)",
    "        ctx'.rotate(-(180 + 180) / 180 * 3.1415)",
    "        ctx'.drawImage(imgTag, -width / 2, -height / 2, width, height)",
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
    "        background.draw(mctx)",
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
