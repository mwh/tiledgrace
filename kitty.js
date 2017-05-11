function gracecode_kitty () {
  this.definitionModule = "kitty";
  this.definitionLine = 0;
  lineNumber = 31
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
      lineNumber = 32
      var obj1 = Grace_allocObject();
      obj1.definitionModule = "kitty";
      obj1.definitionLine = 32;
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
        lineNumber = 33
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
  func0.definitionLine = 31;
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
      obj5.definitionLine = 32;
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
  lineNumber = 97
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
      lineNumber = 98
      var obj9 = Grace_allocObject();
      obj9.definitionModule = "kitty";
      obj9.definitionLine = 98;
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
        lineNumber = 99
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
  func8.definitionLine = 97;
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
      obj13.definitionLine = 98;
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
  lineNumber = 188
  var func16 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func16.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (World)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 189
      var obj17 = Grace_allocObject();
      obj17.definitionModule = "kitty";
      obj17.definitionLine = 189;
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
        lineNumber = 190
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
  func16.definitionLine = 188;
  func16.definitionModule = "kitty";
  var func20 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj21 = Grace_allocObject();
      obj21.definitionModule = "kitty";
      obj21.definitionLine = 189;
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
  lineNumber = 195
  var func24 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func24.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 196
      var string25 = new GraceString("STARTING...");
      var call26 = Grace_print(string25);
      return call26
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
  func24.definitionLine = 195;
  func24.definitionModule = "kitty";
  lineNumber = 199
  var func27 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func27.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 200
      var string28 = new GraceString("STOPPING...");
      var call29 = Grace_print(string28);
      return call29
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func27.paramCounts = [
    0,
  ];
  func27.variableArities = [
    false,
  ];
  this.methods["stop"] = func27;
  func27.definitionLine = 199;
  func27.definitionModule = "kitty";
  lineNumber = 203
  var func30 = function(argcv) {
    var curarg = 1;
    var var_world__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func30.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setWorld)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 208
      var if31 = var_done;
      lineNumber = 204
      var call32 = callmethod(var_m__95__world,"prefix!", [0]);
      if (Grace_isTrue(call32)) {
        lineNumber = 205
        var string33 = new GraceString("NO WORLD!!");
        var call34 = Grace_print(string33);
        lineNumber = 207
        return var_done
      }
      lineNumber = 209
      lineNumber = 208
      var_m__95__world = var_world__39__;
      return var_world__39__
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func30.paramTypes = [];
  func30.paramTypes.push([]);
  func30.paramCounts = [
    1,
  ];
  func30.variableArities = [
    false,
  ];
  this.methods["setWorld"] = func30;
  func30.definitionLine = 203;
  func30.definitionModule = "kitty";
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
  var call35 = callmethod(var_sp,"methods()object", [0, 1], this);
  this.superobj = call35;
  this.data = call35.data;
  this._value = call35._value;
  lineNumber = 7
  lineNumber = 9
  var var_m__95__world;
  lineNumber = 1
  var func36 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func36.paramCounts[0])
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
  func36.paramCounts = [
    0,
  ];
  func36.variableArities = [
    false,
  ];
  this.methods["m_world"] = func36;
  func36.definitionLine = 1;
  func36.definitionModule = "kitty";
  lineNumber = 1
  var func37 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func37.paramCounts[0])
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
  func37.paramCounts = [
    1,
  ];
  func37.variableArities = [
    false,
  ];
  this.methods["m_world:="] = func37;
  func37.definitionLine = 1;
  func37.definitionModule = "kitty";
  lineNumber = 9
  var func38 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func38.paramCounts[0])
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
  func38.paramCounts = [
    0,
  ];
  func38.variableArities = [
    false,
  ];
  this.methods["KittyImage"] = func38;
  func38.definitionLine = 9;
  func38.definitionModule = "kitty";
  var obj39 = Grace_allocObject();
  obj39.definitionModule = "kitty";
  obj39.definitionLine = 9;
  obj39.outer = this;
  var reader_kitty_outer_40 = function() {
    return this.outer;
  }
  obj39.methods["outer"] = reader_kitty_outer_40;
  function obj_init_39() {
    var origSuperDepth = superDepth;
    superDepth = obj39;
    obj39.annotations = [];
    var func41 = function(argcv) {
      var curarg = 1;
      var var_url__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func41.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj42 = Grace_allocObject();
        obj42.definitionModule = "kitty";
        obj42.definitionLine = 9;
        obj42.outer = this;
        var reader_kitty_outer_43 = function() {
          return this.outer;
        }
        obj42.methods["outer"] = reader_kitty_outer_43;
        function obj_init_42() {
          var origSuperDepth = superDepth;
          superDepth = obj42;
          obj42.annotations = [];
          var func44 = function(argcv) {
            var curarg = 1;
            var var_ctx__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func44.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 19
              var string45 = new GraceString("...");
              onSelf = true;
              var call47 = callmethod(this, "imgTag", [0]);
              var call48 = callmethod(call47,"src", [0]);
              var string50 = new GraceString("DRAWING IMAGE: ");
              var opresult52 = callmethod(string50, "++", [1], call48);
              var opresult54 = callmethod(opresult52, "++", [1], string45);
              var call55 = Grace_print(opresult54);
              lineNumber = 20
              var call56 = callmethod(var_ctx__39__,"save", [0]);
              lineNumber = 21
              var call57 = callmethod(var_ctx__39__,"translate", [2], new GraceNum(0), new GraceNum(0));
              lineNumber = 22
              var opresult62 = callmethod(new GraceNum(180), "+", [1], new GraceNum(180));
              var call63 = callmethod(opresult62,"prefix-", [0]);
              var quotient65 = callmethod(call63, "/", [1], new GraceNum(180));
              var prod67 = callmethod(quotient65, "*", [1], new GraceNum(3.1415));
              var call68 = callmethod(var_ctx__39__,"rotate", [1], prod67);
              lineNumber = 23
              onSelf = true;
              var call69 = callmethod(this, "imgTag", [0]);
              onSelf = true;
              var call71 = callmethod(this, "width", [0]);
              var call72 = callmethod(call71,"prefix-", [0]);
              var quotient74 = callmethod(call72, "/", [1], new GraceNum(2));
              onSelf = true;
              var call76 = callmethod(this, "height", [0]);
              var call77 = callmethod(call76,"prefix-", [0]);
              var quotient79 = callmethod(call77, "/", [1], new GraceNum(2));
              onSelf = true;
              var call80 = callmethod(this, "width", [0]);
              onSelf = true;
              var call81 = callmethod(this, "height", [0]);
              var call82 = callmethod(var_ctx__39__,"drawImage", [5], call69, quotient74, quotient79, call80, call81);
              lineNumber = 24
              var call83 = callmethod(var_ctx__39__,"restore", [0]);
              lineNumber = 25
              var string84 = new GraceString(" DRAWN");
              onSelf = true;
              var call86 = callmethod(this, "imgTag", [0]);
              var call87 = callmethod(call86,"src", [0]);
              var string89 = new GraceString("IMAGE: ");
              var opresult91 = callmethod(string89, "++", [1], call87);
              var opresult93 = callmethod(opresult91, "++", [1], string84);
              var call94 = Grace_print(opresult93);
              return call94
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
          obj42.methods["draw"] = func44;
          func44.definitionLine = 18;
          func44.definitionModule = "kitty";
          sourceObject = obj42;
          lineNumber = 11
          var string95 = new GraceString("...");
          var string98 = new GraceString("CREATING NEW IMAGE: ");
          var opresult100 = callmethod(string98, "++", [1], var_url__39__);
          var opresult102 = callmethod(opresult100, "++", [1], string95);
          var call103 = Grace_print(opresult102);
          sourceObject = obj42;
          lineNumber = 12
          var string104 = new GraceString("img");
          var call105 = callmethod(var_dom,"document", [0]);
          var call106 = callmethod(call105,"createElement", [1], string104);
          obj42.data["imgTag"] = call106;
          var reader_kitty_imgTag_107 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_107.def = true;
          reader_kitty_imgTag_107.confidential = true;
          obj42.methods["imgTag"] = reader_kitty_imgTag_107;
          lineNumber = 12;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call106)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj42;
          lineNumber = 15
          lineNumber = 12
          lineNumber = 13
          onSelf = true;
          var call108 = callmethod(this, "imgTag", [0]);
          var call109 = callmethod(call108,"src:=", [1], var_url__39__);
          sourceObject = obj42;
          lineNumber = 15
          obj42.data["height"] = new GraceNum(64);
          var reader_kitty_height_110 = function() {
            return this.data["height"];
          }
          obj42.methods["height"] = reader_kitty_height_110;
          obj42.data["height"] = new GraceNum(64);
          var writer_kitty_height_110 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj42.methods["height:="] = writer_kitty_height_110;
          reader_kitty_height_110.confidential = true;
          writer_kitty_height_110.confidential = true;
          lineNumber = 16;
          moduleName = "kitty";
          lineNumber = 15
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(64))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj42.mutable = true;
          sourceObject = obj42;
          lineNumber = 16
          obj42.data["width"] = new GraceNum(64);
          var reader_kitty_width_111 = function() {
            return this.data["width"];
          }
          obj42.methods["width"] = reader_kitty_width_111;
          obj42.data["width"] = new GraceNum(64);
          var writer_kitty_width_111 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj42.methods["width:="] = writer_kitty_width_111;
          reader_kitty_width_111.confidential = true;
          writer_kitty_width_111.confidential = true;
          lineNumber = 18;
          moduleName = "kitty";
          lineNumber = 16
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(64))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj42.mutable = true;
          sourceObject = obj42;
          sourceObject = obj42;
          lineNumber = 28
          var string112 = new GraceString("");
          var string115 = new GraceString("CREATED NEW IMAGE: ");
          var opresult117 = callmethod(string115, "++", [1], var_url__39__);
          var opresult119 = callmethod(opresult117, "++", [1], string112);
          var call120 = Grace_print(opresult119);
          superDepth = origSuperDepth;
        }
        obj_init_42.apply(obj42, []);
        return obj42
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
    obj39.methods["new"] = func41;
    func41.definitionLine = 9;
    func41.definitionModule = "kitty";
    var func121 = function(argcv) {
      var curarg = 1;
      var var_url__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj122 = Grace_allocObject();
        obj122.definitionModule = "kitty";
        obj122.definitionLine = 9;
        var inho122 = inheritingObject;
        while (inho122.superobj) inho122 = inho122.superobj;
        inho122.superobj = obj122;
        obj122.data = inheritingObject.data;
        obj122.outer = this;
        var reader_kitty_outer_123 = function() {
          return this.outer;
        }
        obj122.methods["outer"] = reader_kitty_outer_123;
        function obj_init_122() {
          var origSuperDepth = superDepth;
          superDepth = obj122;
          obj122.annotations = [];
          var func124 = function(argcv) {
            var curarg = 1;
            var var_ctx__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func124.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 19
              var string125 = new GraceString("...");
              onSelf = true;
              var call127 = callmethod(this, "imgTag", [0]);
              var call128 = callmethod(call127,"src", [0]);
              var string130 = new GraceString("DRAWING IMAGE: ");
              var opresult132 = callmethod(string130, "++", [1], call128);
              var opresult134 = callmethod(opresult132, "++", [1], string125);
              var call135 = Grace_print(opresult134);
              lineNumber = 20
              var call136 = callmethod(var_ctx__39__,"save", [0]);
              lineNumber = 21
              var call137 = callmethod(var_ctx__39__,"translate", [2], new GraceNum(0), new GraceNum(0));
              lineNumber = 22
              var opresult142 = callmethod(new GraceNum(180), "+", [1], new GraceNum(180));
              var call143 = callmethod(opresult142,"prefix-", [0]);
              var quotient145 = callmethod(call143, "/", [1], new GraceNum(180));
              var prod147 = callmethod(quotient145, "*", [1], new GraceNum(3.1415));
              var call148 = callmethod(var_ctx__39__,"rotate", [1], prod147);
              lineNumber = 23
              onSelf = true;
              var call149 = callmethod(this, "imgTag", [0]);
              onSelf = true;
              var call151 = callmethod(this, "width", [0]);
              var call152 = callmethod(call151,"prefix-", [0]);
              var quotient154 = callmethod(call152, "/", [1], new GraceNum(2));
              onSelf = true;
              var call156 = callmethod(this, "height", [0]);
              var call157 = callmethod(call156,"prefix-", [0]);
              var quotient159 = callmethod(call157, "/", [1], new GraceNum(2));
              onSelf = true;
              var call160 = callmethod(this, "width", [0]);
              onSelf = true;
              var call161 = callmethod(this, "height", [0]);
              var call162 = callmethod(var_ctx__39__,"drawImage", [5], call149, quotient154, quotient159, call160, call161);
              lineNumber = 24
              var call163 = callmethod(var_ctx__39__,"restore", [0]);
              lineNumber = 25
              var string164 = new GraceString(" DRAWN");
              onSelf = true;
              var call166 = callmethod(this, "imgTag", [0]);
              var call167 = callmethod(call166,"src", [0]);
              var string169 = new GraceString("IMAGE: ");
              var opresult171 = callmethod(string169, "++", [1], call167);
              var opresult173 = callmethod(opresult171, "++", [1], string164);
              var call174 = Grace_print(opresult173);
              return call174
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func124.paramCounts = [
            1,
          ];
          func124.variableArities = [
            false,
          ];
          obj122.methods["draw"] = func124;
          func124.definitionLine = 18;
          func124.definitionModule = "kitty";
          sourceObject = obj122;
          lineNumber = 11
          var string175 = new GraceString("...");
          var string178 = new GraceString("CREATING NEW IMAGE: ");
          var opresult180 = callmethod(string178, "++", [1], var_url__39__);
          var opresult182 = callmethod(opresult180, "++", [1], string175);
          var call183 = Grace_print(opresult182);
          sourceObject = obj122;
          lineNumber = 12
          var string184 = new GraceString("img");
          var call185 = callmethod(var_dom,"document", [0]);
          var call186 = callmethod(call185,"createElement", [1], string184);
          obj122.data["imgTag"] = call186;
          var reader_kitty_imgTag_187 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_187.def = true;
          reader_kitty_imgTag_187.confidential = true;
          obj122.methods["imgTag"] = reader_kitty_imgTag_187;
          lineNumber = 12;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call186)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj122;
          lineNumber = 15
          lineNumber = 12
          lineNumber = 13
          onSelf = true;
          var call188 = callmethod(this, "imgTag", [0]);
          var call189 = callmethod(call188,"src:=", [1], var_url__39__);
          sourceObject = obj122;
          lineNumber = 15
          obj122.data["height"] = new GraceNum(64);
          var reader_kitty_height_190 = function() {
            return this.data["height"];
          }
          obj122.methods["height"] = reader_kitty_height_190;
          obj122.data["height"] = new GraceNum(64);
          var writer_kitty_height_190 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj122.methods["height:="] = writer_kitty_height_190;
          reader_kitty_height_190.confidential = true;
          writer_kitty_height_190.confidential = true;
          lineNumber = 16;
          moduleName = "kitty";
          lineNumber = 15
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(64))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj122.mutable = true;
          sourceObject = obj122;
          lineNumber = 16
          obj122.data["width"] = new GraceNum(64);
          var reader_kitty_width_191 = function() {
            return this.data["width"];
          }
          obj122.methods["width"] = reader_kitty_width_191;
          obj122.data["width"] = new GraceNum(64);
          var writer_kitty_width_191 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj122.methods["width:="] = writer_kitty_width_191;
          reader_kitty_width_191.confidential = true;
          writer_kitty_width_191.confidential = true;
          lineNumber = 18;
          moduleName = "kitty";
          lineNumber = 16
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(64))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj122.mutable = true;
          sourceObject = obj122;
          sourceObject = obj122;
          lineNumber = 28
          var string192 = new GraceString("");
          var string195 = new GraceString("CREATED NEW IMAGE: ");
          var opresult197 = callmethod(string195, "++", [1], var_url__39__);
          var opresult199 = callmethod(opresult197, "++", [1], string192);
          var call200 = Grace_print(opresult199);
          superDepth = origSuperDepth;
        }
        obj_init_122.apply(inheritingObject, []);
        return obj122
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj39.methods["new()object"] = func121;
    var func201 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 9
        var string202 = new GraceString("class KittyImage");
        return string202
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func201.paramCounts = [
    ];
    func201.variableArities = [
    ];
    obj39.methods["asDebugString"] = func201;
    func201.definitionLine = 9;
    func201.definitionModule = "kitty";
    sourceObject = obj39;
    sourceObject = obj39;
    superDepth = origSuperDepth;
  }
  obj_init_39.apply(obj39, []);
  var var_KittyImage = obj39;
  lineNumber = 31
  lineNumber = 37
  var func203 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func203.paramCounts[0])
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
  func203.paramCounts = [
    0,
  ];
  func203.variableArities = [
    false,
  ];
  this.methods["KittyEntity"] = func203;
  func203.definitionLine = 37;
  func203.definitionModule = "kitty";
  var obj204 = Grace_allocObject();
  obj204.definitionModule = "kitty";
  obj204.definitionLine = 37;
  obj204.outer = this;
  var reader_kitty_outer_205 = function() {
    return this.outer;
  }
  obj204.methods["outer"] = reader_kitty_outer_205;
  function obj_init_204() {
    var origSuperDepth = superDepth;
    superDepth = obj204;
    obj204.annotations = [];
    var func206 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func206.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj207 = Grace_allocObject();
        obj207.definitionModule = "kitty";
        obj207.definitionLine = 37;
        obj207.outer = this;
        var reader_kitty_outer_208 = function() {
          return this.outer;
        }
        obj207.methods["outer"] = reader_kitty_outer_208;
        function obj_init_207() {
          var origSuperDepth = superDepth;
          superDepth = obj207;
          obj207.annotations = [];
          var func209 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func209.paramCounts[0])
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
          func209.paramCounts = [
            0,
          ];
          func209.variableArities = [
            false,
          ];
          obj207.methods["awake"] = func209;
          func209.definitionLine = 50;
          func209.definitionModule = "kitty";
          var func210 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func210.paramCounts[0])
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
          func210.paramCounts = [
            0,
          ];
          func210.variableArities = [
            false,
          ];
          obj207.methods["start"] = func210;
          func210.definitionLine = 55;
          func210.definitionModule = "kitty";
          var func211 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func211.paramCounts[0])
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
          func211.paramCounts = [
            0,
          ];
          func211.variableArities = [
            false,
          ];
          obj207.methods["update"] = func211;
          func211.definitionLine = 60;
          func211.definitionModule = "kitty";
          var func212 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func212.paramCounts[0])
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
          func212.paramCounts = [
            0,
          ];
          func212.variableArities = [
            false,
          ];
          obj207.methods["onDestroy"] = func212;
          func212.definitionLine = 65;
          func212.definitionModule = "kitty";
          var func213 = function(argcv) {
            var curarg = 1;
            var var_ctx__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func213.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 70
              onSelf = true;
              var call214 = callmethod(this, "image", [0]);
              var call215 = callmethod(call214,"draw", [1], var_ctx__39__);
              return call215
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func213.paramCounts = [
            1,
          ];
          func213.variableArities = [
            false,
          ];
          obj207.methods["draw"] = func213;
          func213.definitionLine = 69;
          func213.definitionModule = "kitty";
          var func216 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func216.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 75
              lineNumber = 37
              lineNumber = 74
              onSelf = true;
              var call217 = callmethod(this, "image:=", [1], var_image__39__);
              return call217
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func216.paramTypes = [];
          func216.paramTypes.push([]);
          func216.paramCounts = [
            1,
          ];
          func216.variableArities = [
            false,
          ];
          obj207.methods["setImage"] = func216;
          func216.definitionLine = 73;
          func216.definitionModule = "kitty";
          var func218 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func218.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 79
              lineNumber = 37
              lineNumber = 78
              onSelf = true;
              var call219 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 80
              lineNumber = 37
              lineNumber = 79
              onSelf = true;
              var call220 = callmethod(this, "posY:=", [1], var_y);
              return call220
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func218.paramCounts = [
            2,
          ];
          func218.variableArities = [
            false,
          ];
          obj207.methods["setLocation"] = func218;
          func218.definitionLine = 77;
          func218.definitionModule = "kitty";
          var func221 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func221.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 84
              lineNumber = 83
              onSelf = true;
              var call222 = callmethod(this, "posX", [0]);
              return call222
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func221.paramCounts = [
            0,
          ];
          func221.variableArities = [
            false,
          ];
          obj207.methods["getX"] = func221;
          func221.definitionLine = 82;
          func221.definitionModule = "kitty";
          var func223 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func223.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 88
              lineNumber = 87
              onSelf = true;
              var call224 = callmethod(this, "posY", [0]);
              return call224
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func223.paramCounts = [
            0,
          ];
          func223.variableArities = [
            false,
          ];
          obj207.methods["getY"] = func223;
          func223.definitionLine = 86;
          func223.definitionModule = "kitty";
          var func225 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func225.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 92
              lineNumber = 91
              onSelf = true;
              var call226 = callmethod(this, "rotation", [0]);
              return call226
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func225.paramCounts = [
            0,
          ];
          func225.variableArities = [
            false,
          ];
          obj207.methods["getRotation"] = func225;
          func225.definitionLine = 90;
          func225.definitionModule = "kitty";
          sourceObject = obj207;
          lineNumber = 39
          var string227 = new GraceString(")...");
          var string230 = new GraceString(", ");
          var string233 = new GraceString("CREATING ENTITY AT (");
          var opresult235 = callmethod(string233, "++", [1], var_x__39__);
          var opresult237 = callmethod(opresult235, "++", [1], string230);
          var opresult239 = callmethod(opresult237, "++", [1], var_y__39__);
          var opresult241 = callmethod(opresult239, "++", [1], string227);
          var call242 = Grace_print(opresult241);
          sourceObject = obj207;
          lineNumber = 41
          obj207.data["posX"] = var_x__39__;
          var reader_kitty_posX_243 = function() {
            return this.data["posX"];
          }
          obj207.methods["posX"] = reader_kitty_posX_243;
          obj207.data["posX"] = var_x__39__;
          var writer_kitty_posX_243 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj207.methods["posX:="] = writer_kitty_posX_243;
          reader_kitty_posX_243.confidential = true;
          writer_kitty_posX_243.confidential = true;
          lineNumber = 42;
          moduleName = "kitty";
          lineNumber = 41
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj207.mutable = true;
          sourceObject = obj207;
          lineNumber = 42
          obj207.data["posY"] = var_y__39__;
          var reader_kitty_posY_244 = function() {
            return this.data["posY"];
          }
          obj207.methods["posY"] = reader_kitty_posY_244;
          obj207.data["posY"] = var_y__39__;
          var writer_kitty_posY_244 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj207.methods["posY:="] = writer_kitty_posY_244;
          reader_kitty_posY_244.confidential = true;
          writer_kitty_posY_244.confidential = true;
          lineNumber = 43;
          moduleName = "kitty";
          lineNumber = 42
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj207.mutable = true;
          sourceObject = obj207;
          lineNumber = 43
          obj207.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_245 = function() {
            return this.data["rotation"];
          }
          obj207.methods["rotation"] = reader_kitty_rotation_245;
          obj207.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_245 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj207.methods["rotation:="] = writer_kitty_rotation_245;
          reader_kitty_rotation_245.confidential = true;
          writer_kitty_rotation_245.confidential = true;
          lineNumber = 45;
          moduleName = "kitty";
          lineNumber = 43
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj207.mutable = true;
          sourceObject = obj207;
          obj207.data["image"] = undefined;
          var reader_kitty_image_246 = function() {
            return this.data["image"];
          }
          obj207.methods["image"] = reader_kitty_image_246;
          obj207.data["image"] = undefined;
          var writer_kitty_image_246 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj207.methods["image:="] = writer_kitty_image_246;
          reader_kitty_image_246.confidential = true;
          writer_kitty_image_246.confidential = true;
          obj207.mutable = true;
          sourceObject = obj207;
          lineNumber = 47
          onSelf = true;
          var call247 = callmethod(this, "awake", [0]);
          sourceObject = obj207;
          sourceObject = obj207;
          sourceObject = obj207;
          sourceObject = obj207;
          sourceObject = obj207;
          sourceObject = obj207;
          sourceObject = obj207;
          sourceObject = obj207;
          sourceObject = obj207;
          sourceObject = obj207;
          sourceObject = obj207;
          lineNumber = 94
          var string248 = new GraceString("ENTITY CREATED");
          var call249 = Grace_print(string248);
          superDepth = origSuperDepth;
        }
        obj_init_207.apply(obj207, []);
        return obj207
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func206.paramCounts = [
      2,
    ];
    func206.variableArities = [
      false,
    ];
    obj204.methods["new"] = func206;
    func206.definitionLine = 37;
    func206.definitionModule = "kitty";
    var func250 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj251 = Grace_allocObject();
        obj251.definitionModule = "kitty";
        obj251.definitionLine = 37;
        var inho251 = inheritingObject;
        while (inho251.superobj) inho251 = inho251.superobj;
        inho251.superobj = obj251;
        obj251.data = inheritingObject.data;
        obj251.outer = this;
        var reader_kitty_outer_252 = function() {
          return this.outer;
        }
        obj251.methods["outer"] = reader_kitty_outer_252;
        function obj_init_251() {
          var origSuperDepth = superDepth;
          superDepth = obj251;
          obj251.annotations = [];
          var func253 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func253.paramCounts[0])
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
          func253.paramCounts = [
            0,
          ];
          func253.variableArities = [
            false,
          ];
          obj251.methods["awake"] = func253;
          func253.definitionLine = 50;
          func253.definitionModule = "kitty";
          var func254 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func254.paramCounts[0])
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
          func254.paramCounts = [
            0,
          ];
          func254.variableArities = [
            false,
          ];
          obj251.methods["start"] = func254;
          func254.definitionLine = 55;
          func254.definitionModule = "kitty";
          var func255 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func255.paramCounts[0])
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
          func255.paramCounts = [
            0,
          ];
          func255.variableArities = [
            false,
          ];
          obj251.methods["update"] = func255;
          func255.definitionLine = 60;
          func255.definitionModule = "kitty";
          var func256 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func256.paramCounts[0])
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
          func256.paramCounts = [
            0,
          ];
          func256.variableArities = [
            false,
          ];
          obj251.methods["onDestroy"] = func256;
          func256.definitionLine = 65;
          func256.definitionModule = "kitty";
          var func257 = function(argcv) {
            var curarg = 1;
            var var_ctx__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func257.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 70
              onSelf = true;
              var call258 = callmethod(this, "image", [0]);
              var call259 = callmethod(call258,"draw", [1], var_ctx__39__);
              return call259
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
          obj251.methods["draw"] = func257;
          func257.definitionLine = 69;
          func257.definitionModule = "kitty";
          var func260 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func260.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 75
              lineNumber = 37
              lineNumber = 74
              onSelf = true;
              var call261 = callmethod(this, "image:=", [1], var_image__39__);
              return call261
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func260.paramTypes = [];
          func260.paramTypes.push([]);
          func260.paramCounts = [
            1,
          ];
          func260.variableArities = [
            false,
          ];
          obj251.methods["setImage"] = func260;
          func260.definitionLine = 73;
          func260.definitionModule = "kitty";
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
              lineNumber = 79
              lineNumber = 37
              lineNumber = 78
              onSelf = true;
              var call263 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 80
              lineNumber = 37
              lineNumber = 79
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
          obj251.methods["setLocation"] = func262;
          func262.definitionLine = 77;
          func262.definitionModule = "kitty";
          var func265 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func265.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 84
              lineNumber = 83
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
          obj251.methods["getX"] = func265;
          func265.definitionLine = 82;
          func265.definitionModule = "kitty";
          var func267 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func267.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 88
              lineNumber = 87
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
          obj251.methods["getY"] = func267;
          func267.definitionLine = 86;
          func267.definitionModule = "kitty";
          var func269 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func269.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 92
              lineNumber = 91
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
          obj251.methods["getRotation"] = func269;
          func269.definitionLine = 90;
          func269.definitionModule = "kitty";
          sourceObject = obj251;
          lineNumber = 39
          var string271 = new GraceString(")...");
          var string274 = new GraceString(", ");
          var string277 = new GraceString("CREATING ENTITY AT (");
          var opresult279 = callmethod(string277, "++", [1], var_x__39__);
          var opresult281 = callmethod(opresult279, "++", [1], string274);
          var opresult283 = callmethod(opresult281, "++", [1], var_y__39__);
          var opresult285 = callmethod(opresult283, "++", [1], string271);
          var call286 = Grace_print(opresult285);
          sourceObject = obj251;
          lineNumber = 41
          obj251.data["posX"] = var_x__39__;
          var reader_kitty_posX_287 = function() {
            return this.data["posX"];
          }
          obj251.methods["posX"] = reader_kitty_posX_287;
          obj251.data["posX"] = var_x__39__;
          var writer_kitty_posX_287 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj251.methods["posX:="] = writer_kitty_posX_287;
          reader_kitty_posX_287.confidential = true;
          writer_kitty_posX_287.confidential = true;
          lineNumber = 42;
          moduleName = "kitty";
          lineNumber = 41
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj251.mutable = true;
          sourceObject = obj251;
          lineNumber = 42
          obj251.data["posY"] = var_y__39__;
          var reader_kitty_posY_288 = function() {
            return this.data["posY"];
          }
          obj251.methods["posY"] = reader_kitty_posY_288;
          obj251.data["posY"] = var_y__39__;
          var writer_kitty_posY_288 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj251.methods["posY:="] = writer_kitty_posY_288;
          reader_kitty_posY_288.confidential = true;
          writer_kitty_posY_288.confidential = true;
          lineNumber = 43;
          moduleName = "kitty";
          lineNumber = 42
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj251.mutable = true;
          sourceObject = obj251;
          lineNumber = 43
          obj251.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_289 = function() {
            return this.data["rotation"];
          }
          obj251.methods["rotation"] = reader_kitty_rotation_289;
          obj251.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_289 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj251.methods["rotation:="] = writer_kitty_rotation_289;
          reader_kitty_rotation_289.confidential = true;
          writer_kitty_rotation_289.confidential = true;
          lineNumber = 45;
          moduleName = "kitty";
          lineNumber = 43
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj251.mutable = true;
          sourceObject = obj251;
          obj251.data["image"] = undefined;
          var reader_kitty_image_290 = function() {
            return this.data["image"];
          }
          obj251.methods["image"] = reader_kitty_image_290;
          obj251.data["image"] = undefined;
          var writer_kitty_image_290 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj251.methods["image:="] = writer_kitty_image_290;
          reader_kitty_image_290.confidential = true;
          writer_kitty_image_290.confidential = true;
          obj251.mutable = true;
          sourceObject = obj251;
          lineNumber = 47
          onSelf = true;
          var call291 = callmethod(this, "awake", [0]);
          sourceObject = obj251;
          sourceObject = obj251;
          sourceObject = obj251;
          sourceObject = obj251;
          sourceObject = obj251;
          sourceObject = obj251;
          sourceObject = obj251;
          sourceObject = obj251;
          sourceObject = obj251;
          sourceObject = obj251;
          sourceObject = obj251;
          lineNumber = 94
          var string292 = new GraceString("ENTITY CREATED");
          var call293 = Grace_print(string292);
          superDepth = origSuperDepth;
        }
        obj_init_251.apply(inheritingObject, []);
        return obj251
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj204.methods["new()object"] = func250;
    var func294 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 37
        var string295 = new GraceString("class KittyEntity");
        return string295
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func294.paramCounts = [
    ];
    func294.variableArities = [
    ];
    obj204.methods["asDebugString"] = func294;
    func294.definitionLine = 37;
    func294.definitionModule = "kitty";
    sourceObject = obj204;
    sourceObject = obj204;
    superDepth = origSuperDepth;
  }
  obj_init_204.apply(obj204, []);
  var var_KittyEntity = obj204;
  lineNumber = 97
  lineNumber = 103
  var func296 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func296.paramCounts[0])
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
  func296.paramCounts = [
    0,
  ];
  func296.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func296;
  func296.definitionLine = 103;
  func296.definitionModule = "kitty";
  var obj297 = Grace_allocObject();
  obj297.definitionModule = "kitty";
  obj297.definitionLine = 103;
  obj297.outer = this;
  var reader_kitty_outer_298 = function() {
    return this.outer;
  }
  obj297.methods["outer"] = reader_kitty_outer_298;
  function obj_init_297() {
    var origSuperDepth = superDepth;
    superDepth = obj297;
    obj297.annotations = [];
    var func299 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func299.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj300 = Grace_allocObject();
        obj300.definitionModule = "kitty";
        obj300.definitionLine = 103;
        obj300.outer = this;
        var reader_kitty_outer_301 = function() {
          return this.outer;
        }
        obj300.methods["outer"] = reader_kitty_outer_301;
        function obj_init_300() {
          var origSuperDepth = superDepth;
          superDepth = obj300;
          obj300.annotations = [];
          var func302 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func302.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 130
              var string303 = new GraceString("INITIALIZING WORLD...");
              var call304 = Grace_print(string303);
              lineNumber = 136
              var if305 = var_done;
              lineNumber = 132
              onSelf = true;
              var call306 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call306)) {
                lineNumber = 134
                lineNumber = 133
                var bool307 = new GraceBoolean(false)
                return bool307
              }
              lineNumber = 137
              lineNumber = 103
              lineNumber = 136
              var call308 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call309 = callmethod(this, "document:=", [1], call308);
              lineNumber = 137
              lineNumber = 136
              lineNumber = 137
              var string310 = new GraceString("standard-canvas");
              onSelf = true;
              var call311 = callmethod(this, "document", [0]);
              var call312 = callmethod(call311,"getElementById", [1], string310);
              onSelf = true;
              var call313 = callmethod(this, "canvas:=", [1], call312);
              lineNumber = 139
              lineNumber = 136
              lineNumber = 138
              onSelf = true;
              var call314 = callmethod(this, "canvas", [0]);
              var call315 = callmethod(call314,"width", [0]);
              onSelf = true;
              var call316 = callmethod(this, "canvasWidth:=", [1], call315);
              lineNumber = 141
              lineNumber = 138
              lineNumber = 139
              onSelf = true;
              var call317 = callmethod(this, "canvas", [0]);
              var call318 = callmethod(call317,"height", [0]);
              onSelf = true;
              var call319 = callmethod(this, "canvasHeight:=", [1], call318);
              lineNumber = 142
              lineNumber = 139
              lineNumber = 141
              var bool320 = new GraceBoolean(true)
              onSelf = true;
              var call321 = callmethod(this, "isInit:=", [1], bool320);
              lineNumber = 142
              var string322 = new GraceString("INITIALIZATION FINISHED");
              var call323 = Grace_print(string322);
              return call323
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func302.paramCounts = [
            0,
          ];
          func302.variableArities = [
            false,
          ];
          obj300.methods["init"] = func302;
          func302.definitionLine = 128;
          func302.definitionModule = "kitty";
          var func324 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func324.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 147
              var string325 = new GraceString("STARTING WORLD...");
              var call326 = Grace_print(string325);
              lineNumber = 148
              lineNumber = 139
              lineNumber = 148
              var string327 = new GraceString("canvas");
              var call328 = callmethod(var_dom,"document", [0]);
              var call329 = callmethod(call328,"createElement", [1], string327);
              onSelf = true;
              var call330 = callmethod(this, "backingCanvas:=", [1], call329);
              lineNumber = 150
              lineNumber = 148
              lineNumber = 149
              onSelf = true;
              var call331 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call332 = callmethod(this, "backingCanvas", [0]);
              var call333 = callmethod(call332,"height:=", [1], call331);
              lineNumber = 151
              lineNumber = 148
              lineNumber = 150
              onSelf = true;
              var call334 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call335 = callmethod(this, "backingCanvas", [0]);
              var call336 = callmethod(call335,"width:=", [1], call334);
              lineNumber = 151
              lineNumber = 148
              lineNumber = 151
              var string337 = new GraceString("2d");
              onSelf = true;
              var call338 = callmethod(this, "backingCanvas", [0]);
              var call339 = callmethod(call338,"getContext", [1], string337);
              onSelf = true;
              var call340 = callmethod(this, "backingContext:=", [1], call339);
              lineNumber = 152
              lineNumber = 148
              lineNumber = 152
              var string341 = new GraceString("2d");
              onSelf = true;
              var call342 = callmethod(this, "canvas", [0]);
              var call343 = callmethod(call342,"getContext", [1], string341);
              onSelf = true;
              var call344 = callmethod(this, "mctx:=", [1], call343);
              lineNumber = 153
              var string345 = new GraceString("WORLD STARTED");
              var call346 = Grace_print(string345);
              return call346
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
          obj300.methods["start"] = func324;
          func324.definitionLine = 146;
          func324.definitionModule = "kitty";
          var func347 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func347.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 158
              var string348 = new GraceString("UPDATING WORLD...");
              var call349 = Grace_print(string348);
              lineNumber = 162
              lineNumber = 148
              lineNumber = 161
              onSelf = true;
              var call350 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call351 = callmethod(this, "mctx", [0]);
              var call352 = callmethod(call351,"fillStyle:=", [1], call350);
              lineNumber = 162
              onSelf = true;
              var call353 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call354 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call355 = callmethod(this, "mctx", [0]);
              var call356 = callmethod(call355,"fillRect", [4], new GraceNum(0), new GraceNum(0), call353, call354);
              lineNumber = 163
              onSelf = true;
              var call357 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call358 = callmethod(this, "mctx", [0]);
              var call359 = callmethod(call358,"drawImage", [3], call357, new GraceNum(0), new GraceNum(0));
              lineNumber = 164
              onSelf = true;
              var call360 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call361 = callmethod(this, "background", [0]);
              var call362 = callmethod(call361,"draw", [1], call360);
              lineNumber = 167
              onSelf = true;
              var call363 = callmethod(this, "entities", [0]);
              lineNumber = 171
              var block364 = Grace_allocObject();
              block364.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block364.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block364.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block364.methods["match"] = GraceBlock_match;
              block364.methods["prefix?"] = GraceBlock_lift;
              block364.receiver = this;
              block364.className = 'block<kitty:171>';
              block364.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 168
                onSelf = true;
                var call365 = callmethod(this, "mctx", [0]);
                var call366 = callmethod(var_entity,"draw", [1], call365);
                return call366;
              };
              var call367 = callmethod(Grace_prelude,"for()do", [1, 1], call363, block364);
              lineNumber = 171
              var string368 = new GraceString("WORLD UPDATED");
              var call369 = Grace_print(string368);
              return call369
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
          obj300.methods["update"] = func347;
          func347.definitionLine = 157;
          func347.definitionModule = "kitty";
          var func370 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func370.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 179
              lineNumber = 148
              lineNumber = 178
              onSelf = true;
              var call371 = callmethod(this, "background:=", [1], var_background__39__);
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
            1,
          ];
          func370.variableArities = [
            false,
          ];
          obj300.methods["setBackground"] = func370;
          func370.definitionLine = 177;
          func370.definitionModule = "kitty";
          var func372 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func372.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 182
              onSelf = true;
              var call373 = callmethod(this, "entities", [0]);
              var call374 = callmethod(call373,"push", [1], var_e);
              return call374
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func372.paramTypes = [];
          func372.paramTypes.push([]);
          func372.paramCounts = [
            1,
          ];
          func372.variableArities = [
            false,
          ];
          obj300.methods["addEntity"] = func372;
          func372.definitionLine = 181;
          func372.definitionModule = "kitty";
          sourceObject = obj300;
          lineNumber = 105
          var string375 = new GraceString("CREATING NEW WORLD...");
          var call376 = Grace_print(string375);
          sourceObject = obj300;
          obj300.data["background"] = undefined;
          var reader_kitty_background_377 = function() {
            return this.data["background"];
          }
          obj300.methods["background"] = reader_kitty_background_377;
          obj300.data["background"] = undefined;
          var writer_kitty_background_377 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj300.methods["background:="] = writer_kitty_background_377;
          reader_kitty_background_377.confidential = true;
          writer_kitty_background_377.confidential = true;
          obj300.mutable = true;
          sourceObject = obj300;
          lineNumber = 108
          var string378 = new GraceString("black");
          obj300.data["backgroundColour"] = string378;
          var reader_kitty_backgroundColour_379 = function() {
            return this.data["backgroundColour"];
          }
          obj300.methods["backgroundColour"] = reader_kitty_backgroundColour_379;
          obj300.data["backgroundColour"] = string378;
          var writer_kitty_backgroundColour_379 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj300.methods["backgroundColour:="] = writer_kitty_backgroundColour_379;
          reader_kitty_backgroundColour_379.confidential = true;
          writer_kitty_backgroundColour_379.confidential = true;
          lineNumber = 110;
          moduleName = "kitty";
          lineNumber = 108
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string378)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj300.mutable = true;
          sourceObject = obj300;
          obj300.data["document"] = undefined;
          var reader_kitty_document_380 = function() {
            return this.data["document"];
          }
          obj300.methods["document"] = reader_kitty_document_380;
          obj300.data["document"] = undefined;
          var writer_kitty_document_380 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj300.methods["document:="] = writer_kitty_document_380;
          reader_kitty_document_380.confidential = true;
          writer_kitty_document_380.confidential = true;
          obj300.mutable = true;
          sourceObject = obj300;
          obj300.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_381 = function() {
            return this.data["backingCanvas"];
          }
          obj300.methods["backingCanvas"] = reader_kitty_backingCanvas_381;
          obj300.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_381 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj300.methods["backingCanvas:="] = writer_kitty_backingCanvas_381;
          reader_kitty_backingCanvas_381.confidential = true;
          writer_kitty_backingCanvas_381.confidential = true;
          obj300.mutable = true;
          sourceObject = obj300;
          obj300.data["backingContext"] = undefined;
          var reader_kitty_backingContext_382 = function() {
            return this.data["backingContext"];
          }
          obj300.methods["backingContext"] = reader_kitty_backingContext_382;
          obj300.data["backingContext"] = undefined;
          var writer_kitty_backingContext_382 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj300.methods["backingContext:="] = writer_kitty_backingContext_382;
          reader_kitty_backingContext_382.confidential = true;
          writer_kitty_backingContext_382.confidential = true;
          obj300.mutable = true;
          sourceObject = obj300;
          obj300.data["canvas"] = undefined;
          var reader_kitty_canvas_383 = function() {
            return this.data["canvas"];
          }
          obj300.methods["canvas"] = reader_kitty_canvas_383;
          obj300.data["canvas"] = undefined;
          var writer_kitty_canvas_383 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj300.methods["canvas:="] = writer_kitty_canvas_383;
          reader_kitty_canvas_383.confidential = true;
          writer_kitty_canvas_383.confidential = true;
          obj300.mutable = true;
          sourceObject = obj300;
          obj300.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_384 = function() {
            return this.data["canvasWidth"];
          }
          obj300.methods["canvasWidth"] = reader_kitty_canvasWidth_384;
          obj300.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_384 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj300.methods["canvasWidth:="] = writer_kitty_canvasWidth_384;
          reader_kitty_canvasWidth_384.confidential = true;
          writer_kitty_canvasWidth_384.confidential = true;
          obj300.mutable = true;
          sourceObject = obj300;
          obj300.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_385 = function() {
            return this.data["canvasHeight"];
          }
          obj300.methods["canvasHeight"] = reader_kitty_canvasHeight_385;
          obj300.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_385 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj300.methods["canvasHeight:="] = writer_kitty_canvasHeight_385;
          reader_kitty_canvasHeight_385.confidential = true;
          writer_kitty_canvasHeight_385.confidential = true;
          obj300.mutable = true;
          sourceObject = obj300;
          lineNumber = 119
          var call386 = callmethod(var_collections,"list", [0]);
          var call387 = callmethod(call386,"new", [0]);
          obj300.data["entities"] = call387;
          var reader_kitty_entities_388 = function() {
            return this.data["entities"];
          }
          obj300.methods["entities"] = reader_kitty_entities_388;
          obj300.data["entities"] = call387;
          var writer_kitty_entities_388 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj300.methods["entities:="] = writer_kitty_entities_388;
          reader_kitty_entities_388.confidential = true;
          writer_kitty_entities_388.confidential = true;
          lineNumber = 121;
          moduleName = "kitty";
          lineNumber = 119
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call387)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj300.mutable = true;
          sourceObject = obj300;
          lineNumber = 121
          var bool389 = new GraceBoolean(false)
          obj300.data["isInit"] = bool389;
          var reader_kitty_isInit_390 = function() {
            return this.data["isInit"];
          }
          obj300.methods["isInit"] = reader_kitty_isInit_390;
          obj300.data["isInit"] = bool389;
          var writer_kitty_isInit_390 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj300.methods["isInit:="] = writer_kitty_isInit_390;
          reader_kitty_isInit_390.confidential = true;
          writer_kitty_isInit_390.confidential = true;
          lineNumber = 123;
          moduleName = "kitty";
          lineNumber = 121
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool389)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj300.mutable = true;
          sourceObject = obj300;
          obj300.data["mctx"] = undefined;
          var reader_kitty_mctx_391 = function() {
            return this.data["mctx"];
          }
          obj300.methods["mctx"] = reader_kitty_mctx_391;
          obj300.data["mctx"] = undefined;
          var writer_kitty_mctx_391 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj300.methods["mctx:="] = writer_kitty_mctx_391;
          reader_kitty_mctx_391.confidential = true;
          writer_kitty_mctx_391.confidential = true;
          obj300.mutable = true;
          sourceObject = obj300;
          lineNumber = 125
          onSelf = true;
          var call392 = callmethod(this, "init", [0]);
          sourceObject = obj300;
          sourceObject = obj300;
          sourceObject = obj300;
          sourceObject = obj300;
          sourceObject = obj300;
          sourceObject = obj300;
          lineNumber = 185
          var string393 = new GraceString("WORLD CREATED");
          var call394 = Grace_print(string393);
          superDepth = origSuperDepth;
        }
        obj_init_300.apply(obj300, []);
        return obj300
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
    obj297.methods["new"] = func299;
    func299.definitionLine = 103;
    func299.definitionModule = "kitty";
    var func395 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj396 = Grace_allocObject();
        obj396.definitionModule = "kitty";
        obj396.definitionLine = 103;
        var inho396 = inheritingObject;
        while (inho396.superobj) inho396 = inho396.superobj;
        inho396.superobj = obj396;
        obj396.data = inheritingObject.data;
        obj396.outer = this;
        var reader_kitty_outer_397 = function() {
          return this.outer;
        }
        obj396.methods["outer"] = reader_kitty_outer_397;
        function obj_init_396() {
          var origSuperDepth = superDepth;
          superDepth = obj396;
          obj396.annotations = [];
          var func398 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func398.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 130
              var string399 = new GraceString("INITIALIZING WORLD...");
              var call400 = Grace_print(string399);
              lineNumber = 136
              var if401 = var_done;
              lineNumber = 132
              onSelf = true;
              var call402 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call402)) {
                lineNumber = 134
                lineNumber = 133
                var bool403 = new GraceBoolean(false)
                return bool403
              }
              lineNumber = 137
              lineNumber = 119
              lineNumber = 136
              var call404 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call405 = callmethod(this, "document:=", [1], call404);
              lineNumber = 137
              lineNumber = 136
              lineNumber = 137
              var string406 = new GraceString("standard-canvas");
              onSelf = true;
              var call407 = callmethod(this, "document", [0]);
              var call408 = callmethod(call407,"getElementById", [1], string406);
              onSelf = true;
              var call409 = callmethod(this, "canvas:=", [1], call408);
              lineNumber = 139
              lineNumber = 136
              lineNumber = 138
              onSelf = true;
              var call410 = callmethod(this, "canvas", [0]);
              var call411 = callmethod(call410,"width", [0]);
              onSelf = true;
              var call412 = callmethod(this, "canvasWidth:=", [1], call411);
              lineNumber = 141
              lineNumber = 138
              lineNumber = 139
              onSelf = true;
              var call413 = callmethod(this, "canvas", [0]);
              var call414 = callmethod(call413,"height", [0]);
              onSelf = true;
              var call415 = callmethod(this, "canvasHeight:=", [1], call414);
              lineNumber = 142
              lineNumber = 139
              lineNumber = 141
              var bool416 = new GraceBoolean(true)
              onSelf = true;
              var call417 = callmethod(this, "isInit:=", [1], bool416);
              lineNumber = 142
              var string418 = new GraceString("INITIALIZATION FINISHED");
              var call419 = Grace_print(string418);
              return call419
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func398.paramCounts = [
            0,
          ];
          func398.variableArities = [
            false,
          ];
          obj396.methods["init"] = func398;
          func398.definitionLine = 128;
          func398.definitionModule = "kitty";
          var func420 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func420.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 147
              var string421 = new GraceString("STARTING WORLD...");
              var call422 = Grace_print(string421);
              lineNumber = 148
              lineNumber = 139
              lineNumber = 148
              var string423 = new GraceString("canvas");
              var call424 = callmethod(var_dom,"document", [0]);
              var call425 = callmethod(call424,"createElement", [1], string423);
              onSelf = true;
              var call426 = callmethod(this, "backingCanvas:=", [1], call425);
              lineNumber = 150
              lineNumber = 148
              lineNumber = 149
              onSelf = true;
              var call427 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call428 = callmethod(this, "backingCanvas", [0]);
              var call429 = callmethod(call428,"height:=", [1], call427);
              lineNumber = 151
              lineNumber = 148
              lineNumber = 150
              onSelf = true;
              var call430 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call431 = callmethod(this, "backingCanvas", [0]);
              var call432 = callmethod(call431,"width:=", [1], call430);
              lineNumber = 151
              lineNumber = 148
              lineNumber = 151
              var string433 = new GraceString("2d");
              onSelf = true;
              var call434 = callmethod(this, "backingCanvas", [0]);
              var call435 = callmethod(call434,"getContext", [1], string433);
              onSelf = true;
              var call436 = callmethod(this, "backingContext:=", [1], call435);
              lineNumber = 152
              lineNumber = 148
              lineNumber = 152
              var string437 = new GraceString("2d");
              onSelf = true;
              var call438 = callmethod(this, "canvas", [0]);
              var call439 = callmethod(call438,"getContext", [1], string437);
              onSelf = true;
              var call440 = callmethod(this, "mctx:=", [1], call439);
              lineNumber = 153
              var string441 = new GraceString("WORLD STARTED");
              var call442 = Grace_print(string441);
              return call442
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
          obj396.methods["start"] = func420;
          func420.definitionLine = 146;
          func420.definitionModule = "kitty";
          var func443 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func443.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 158
              var string444 = new GraceString("UPDATING WORLD...");
              var call445 = Grace_print(string444);
              lineNumber = 162
              lineNumber = 148
              lineNumber = 161
              onSelf = true;
              var call446 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call447 = callmethod(this, "mctx", [0]);
              var call448 = callmethod(call447,"fillStyle:=", [1], call446);
              lineNumber = 162
              onSelf = true;
              var call449 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call450 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call451 = callmethod(this, "mctx", [0]);
              var call452 = callmethod(call451,"fillRect", [4], new GraceNum(0), new GraceNum(0), call449, call450);
              lineNumber = 163
              onSelf = true;
              var call453 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call454 = callmethod(this, "mctx", [0]);
              var call455 = callmethod(call454,"drawImage", [3], call453, new GraceNum(0), new GraceNum(0));
              lineNumber = 164
              onSelf = true;
              var call456 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call457 = callmethod(this, "background", [0]);
              var call458 = callmethod(call457,"draw", [1], call456);
              lineNumber = 167
              onSelf = true;
              var call459 = callmethod(this, "entities", [0]);
              lineNumber = 171
              var block460 = Grace_allocObject();
              block460.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block460.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block460.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block460.methods["match"] = GraceBlock_match;
              block460.methods["prefix?"] = GraceBlock_lift;
              block460.receiver = this;
              block460.className = 'block<kitty:171>';
              block460.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 168
                onSelf = true;
                var call461 = callmethod(this, "mctx", [0]);
                var call462 = callmethod(var_entity,"draw", [1], call461);
                return call462;
              };
              var call463 = callmethod(Grace_prelude,"for()do", [1, 1], call459, block460);
              lineNumber = 171
              var string464 = new GraceString("WORLD UPDATED");
              var call465 = Grace_print(string464);
              return call465
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func443.paramCounts = [
            0,
          ];
          func443.variableArities = [
            false,
          ];
          obj396.methods["update"] = func443;
          func443.definitionLine = 157;
          func443.definitionModule = "kitty";
          var func466 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func466.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 179
              lineNumber = 148
              lineNumber = 178
              onSelf = true;
              var call467 = callmethod(this, "background:=", [1], var_background__39__);
              return call467
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func466.paramCounts = [
            1,
          ];
          func466.variableArities = [
            false,
          ];
          obj396.methods["setBackground"] = func466;
          func466.definitionLine = 177;
          func466.definitionModule = "kitty";
          var func468 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func468.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 182
              onSelf = true;
              var call469 = callmethod(this, "entities", [0]);
              var call470 = callmethod(call469,"push", [1], var_e);
              return call470
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func468.paramTypes = [];
          func468.paramTypes.push([]);
          func468.paramCounts = [
            1,
          ];
          func468.variableArities = [
            false,
          ];
          obj396.methods["addEntity"] = func468;
          func468.definitionLine = 181;
          func468.definitionModule = "kitty";
          sourceObject = obj396;
          lineNumber = 105
          var string471 = new GraceString("CREATING NEW WORLD...");
          var call472 = Grace_print(string471);
          sourceObject = obj396;
          obj396.data["background"] = undefined;
          var reader_kitty_background_473 = function() {
            return this.data["background"];
          }
          obj396.methods["background"] = reader_kitty_background_473;
          obj396.data["background"] = undefined;
          var writer_kitty_background_473 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj396.methods["background:="] = writer_kitty_background_473;
          reader_kitty_background_473.confidential = true;
          writer_kitty_background_473.confidential = true;
          obj396.mutable = true;
          sourceObject = obj396;
          lineNumber = 108
          var string474 = new GraceString("black");
          obj396.data["backgroundColour"] = string474;
          var reader_kitty_backgroundColour_475 = function() {
            return this.data["backgroundColour"];
          }
          obj396.methods["backgroundColour"] = reader_kitty_backgroundColour_475;
          obj396.data["backgroundColour"] = string474;
          var writer_kitty_backgroundColour_475 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj396.methods["backgroundColour:="] = writer_kitty_backgroundColour_475;
          reader_kitty_backgroundColour_475.confidential = true;
          writer_kitty_backgroundColour_475.confidential = true;
          lineNumber = 110;
          moduleName = "kitty";
          lineNumber = 108
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string474)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj396.mutable = true;
          sourceObject = obj396;
          obj396.data["document"] = undefined;
          var reader_kitty_document_476 = function() {
            return this.data["document"];
          }
          obj396.methods["document"] = reader_kitty_document_476;
          obj396.data["document"] = undefined;
          var writer_kitty_document_476 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj396.methods["document:="] = writer_kitty_document_476;
          reader_kitty_document_476.confidential = true;
          writer_kitty_document_476.confidential = true;
          obj396.mutable = true;
          sourceObject = obj396;
          obj396.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_477 = function() {
            return this.data["backingCanvas"];
          }
          obj396.methods["backingCanvas"] = reader_kitty_backingCanvas_477;
          obj396.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_477 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj396.methods["backingCanvas:="] = writer_kitty_backingCanvas_477;
          reader_kitty_backingCanvas_477.confidential = true;
          writer_kitty_backingCanvas_477.confidential = true;
          obj396.mutable = true;
          sourceObject = obj396;
          obj396.data["backingContext"] = undefined;
          var reader_kitty_backingContext_478 = function() {
            return this.data["backingContext"];
          }
          obj396.methods["backingContext"] = reader_kitty_backingContext_478;
          obj396.data["backingContext"] = undefined;
          var writer_kitty_backingContext_478 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj396.methods["backingContext:="] = writer_kitty_backingContext_478;
          reader_kitty_backingContext_478.confidential = true;
          writer_kitty_backingContext_478.confidential = true;
          obj396.mutable = true;
          sourceObject = obj396;
          obj396.data["canvas"] = undefined;
          var reader_kitty_canvas_479 = function() {
            return this.data["canvas"];
          }
          obj396.methods["canvas"] = reader_kitty_canvas_479;
          obj396.data["canvas"] = undefined;
          var writer_kitty_canvas_479 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj396.methods["canvas:="] = writer_kitty_canvas_479;
          reader_kitty_canvas_479.confidential = true;
          writer_kitty_canvas_479.confidential = true;
          obj396.mutable = true;
          sourceObject = obj396;
          obj396.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_480 = function() {
            return this.data["canvasWidth"];
          }
          obj396.methods["canvasWidth"] = reader_kitty_canvasWidth_480;
          obj396.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_480 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj396.methods["canvasWidth:="] = writer_kitty_canvasWidth_480;
          reader_kitty_canvasWidth_480.confidential = true;
          writer_kitty_canvasWidth_480.confidential = true;
          obj396.mutable = true;
          sourceObject = obj396;
          obj396.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_481 = function() {
            return this.data["canvasHeight"];
          }
          obj396.methods["canvasHeight"] = reader_kitty_canvasHeight_481;
          obj396.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_481 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj396.methods["canvasHeight:="] = writer_kitty_canvasHeight_481;
          reader_kitty_canvasHeight_481.confidential = true;
          writer_kitty_canvasHeight_481.confidential = true;
          obj396.mutable = true;
          sourceObject = obj396;
          lineNumber = 119
          var call482 = callmethod(var_collections,"list", [0]);
          var call483 = callmethod(call482,"new", [0]);
          obj396.data["entities"] = call483;
          var reader_kitty_entities_484 = function() {
            return this.data["entities"];
          }
          obj396.methods["entities"] = reader_kitty_entities_484;
          obj396.data["entities"] = call483;
          var writer_kitty_entities_484 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj396.methods["entities:="] = writer_kitty_entities_484;
          reader_kitty_entities_484.confidential = true;
          writer_kitty_entities_484.confidential = true;
          lineNumber = 121;
          moduleName = "kitty";
          lineNumber = 119
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call483)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj396.mutable = true;
          sourceObject = obj396;
          lineNumber = 121
          var bool485 = new GraceBoolean(false)
          obj396.data["isInit"] = bool485;
          var reader_kitty_isInit_486 = function() {
            return this.data["isInit"];
          }
          obj396.methods["isInit"] = reader_kitty_isInit_486;
          obj396.data["isInit"] = bool485;
          var writer_kitty_isInit_486 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj396.methods["isInit:="] = writer_kitty_isInit_486;
          reader_kitty_isInit_486.confidential = true;
          writer_kitty_isInit_486.confidential = true;
          lineNumber = 123;
          moduleName = "kitty";
          lineNumber = 121
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool485)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj396.mutable = true;
          sourceObject = obj396;
          obj396.data["mctx"] = undefined;
          var reader_kitty_mctx_487 = function() {
            return this.data["mctx"];
          }
          obj396.methods["mctx"] = reader_kitty_mctx_487;
          obj396.data["mctx"] = undefined;
          var writer_kitty_mctx_487 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj396.methods["mctx:="] = writer_kitty_mctx_487;
          reader_kitty_mctx_487.confidential = true;
          writer_kitty_mctx_487.confidential = true;
          obj396.mutable = true;
          sourceObject = obj396;
          lineNumber = 125
          onSelf = true;
          var call488 = callmethod(this, "init", [0]);
          sourceObject = obj396;
          sourceObject = obj396;
          sourceObject = obj396;
          sourceObject = obj396;
          sourceObject = obj396;
          sourceObject = obj396;
          lineNumber = 185
          var string489 = new GraceString("WORLD CREATED");
          var call490 = Grace_print(string489);
          superDepth = origSuperDepth;
        }
        obj_init_396.apply(inheritingObject, []);
        return obj396
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj297.methods["new()object"] = func395;
    var func491 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 103
        var string492 = new GraceString("class KittyWorld");
        return string492
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func491.paramCounts = [
    ];
    func491.variableArities = [
    ];
    obj297.methods["asDebugString"] = func491;
    func491.definitionLine = 103;
    func491.definitionModule = "kitty";
    sourceObject = obj297;
    sourceObject = obj297;
    superDepth = origSuperDepth;
  }
  obj_init_297.apply(obj297, []);
  var var_KittyWorld = obj297;
  lineNumber = 188
  lineNumber = 195
  lineNumber = 199
  lineNumber = 203
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
'dom',
'StandardPrelude',
];
if (gctCache)
  gctCache['kitty'] = "constructors-of:KittyEntity:\n new\npath:\n kitty\nclasses:\n KittyImage\n KittyEntity\n KittyWorld\nfresh:Entity:\n onDestroy\n awake\n getRotation\n getX\n getY\n posX:=\n posY:=\n setLocation\n rotation:=\n posX\n posY\n start\n setImage\n rotation\n image:=\n update\n draw\n image\nconfidential:\nconstructors-of:KittyWorld:\n new\nfresh:Image:\n width:=\n imgTag\n draw\n height\n height:=\n width\nfresh:World:\n canvas\n backgroundColour:=\n canvasHeight:=\n canvas:=\n backingContext:=\n canvasHeight\n background:=\n backingContext\n canvasWidth\n background\n backingCanvas:=\n isInit:=\n entities:=\n backingCanvas\n canvasWidth:=\n start\n init\n isInit\n mctx:=\n document:=\n setBackground\n mctx\n document\n backgroundColour\n update\n entities\n addEntity\nmodules:\n StandardPrelude\n mgcollections\nconstructors-of:KittyImage:\n new\nfresh-methods:\n Image\n Entity\n World\npublic:\n m_world\n m_world:=\n KittyImage\n Image\n KittyEntity\n Entity\n KittyWorld\n World\n start\n stop\n setWorld\nmethods-of:KittyImage.new:\n width:=\n imgTag\n draw\n height\n height:=\n width\nmethods-of:KittyEntity.new:\n onDestroy\n awake\n getRotation\n getX\n getY\n posX:=\n posY:=\n setLocation\n rotation:=\n posX\n posY\n start\n setImage\n rotation\n image:=\n image\n draw\n update\nmethods-of:KittyWorld.new:\n canvas\n backgroundColour:=\n canvasHeight:=\n canvas:=\n backingContext:=\n canvasHeight\n background:=\n init\n canvasWidth\n background\n backingCanvas:=\n isInit:=\n mctx\n backingCanvas\n canvasWidth:=\n start\n backgroundColour\n isInit\n mctx:=\n document:=\n setBackground\n entities:=\n document\n backingContext\n update\n entities\n addEntity\n";
if (originalSourceLines) {
  originalSourceLines["kitty"] = [
    "import \"mgcollections\" as collections",
    "import \"dom\" as dom",
    "import \"StandardPrelude\" as sp",
    "inherits sp.methods",
    "",
    "// Main class for game library",
    "var m_world",
    "",
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
    "method start {",
    "    print \"STARTING...\"",
    "}",
    "",
    "method stop {",
    "    print \"STOPPING...\"",
    "}",
    "",
    "method setWorld(world': KittyWorld) {",
    "    if (!m_world) then {",
    "        print \"NO WORLD!!\"",
    "        return ",
    "    }",
    "    m_world := world'",
    "}",
    "",
    "// TEST SECTION //",
    "",
    "// def foo = World.new(100, 100)",
    "// def bar = Entity.new(10, 10)",
    "// foo.addEntity(bar)",
  ];
}
