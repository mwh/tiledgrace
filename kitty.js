function gracecode_kitty () {
  this.definitionModule = "kitty";
  this.definitionLine = 0;
  lineNumber = 10
  var func0 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func0.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 11
      var string1 = new GraceString("STARTING...");
      var call2 = Grace_print(string1);
      return call2
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func0.paramCounts = [
    0,
  ];
  func0.variableArities = [
    false,
  ];
  this.methods["start"] = func0;
  func0.definitionLine = 10;
  func0.definitionModule = "kitty";
  lineNumber = 14
  var func3 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func3.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 15
      var string4 = new GraceString("STOPPING...");
      var call5 = Grace_print(string4);
      return call5
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func3.paramCounts = [
    0,
  ];
  func3.variableArities = [
    false,
  ];
  this.methods["stop"] = func3;
  func3.definitionLine = 14;
  func3.definitionModule = "kitty";
  lineNumber = 18
  var func6 = function(argcv) {
    var curarg = 1;
    var var_world__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func6.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setWorld)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 20
      lineNumber = 19
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
  func6.paramCounts = [
    1,
  ];
  func6.variableArities = [
    false,
  ];
  this.methods["setWorld"] = func6;
  func6.definitionLine = 18;
  func6.definitionModule = "kitty";
  lineNumber = 44
  var func7 = function(argcv) {
    var curarg = 1;
    var var_url__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func7.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Image)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 45
      var obj8 = Grace_allocObject();
      obj8.definitionModule = "kitty";
      obj8.definitionLine = 45;
      obj8.outer = this;
      var reader_kitty_outer_9 = function() {
        return this.outer;
      }
      obj8.methods["outer"] = reader_kitty_outer_9;
      function obj_init_8() {
        var origSuperDepth = superDepth;
        superDepth = obj8;
        obj8.annotations = [];
        sourceObject = obj8;
        lineNumber = 46
        var call10 = callmethod(var_KittyImage,"new()object", [1, 1], var_url__39__, this);
        obj8.superobj = call10;
        obj8._value = call10._value;
        superDepth = origSuperDepth;
      }
      obj_init_8.apply(obj8, []);
      return obj8
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func7.paramCounts = [
    1,
  ];
  func7.variableArities = [
    false,
  ];
  this.methods["Image"] = func7;
  func7.definitionLine = 44;
  func7.definitionModule = "kitty";
  var func11 = function(argcv) {
    var curarg = 1;
    var var_url__39__ = arguments[curarg];
    curarg++;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj12 = Grace_allocObject();
      obj12.definitionModule = "kitty";
      obj12.definitionLine = 45;
      var inho12 = inheritingObject;
      while (inho12.superobj) inho12 = inho12.superobj;
      inho12.superobj = obj12;
      obj12.data = inheritingObject.data;
      obj12.outer = this;
      var reader_kitty_outer_13 = function() {
        return this.outer;
      }
      obj12.methods["outer"] = reader_kitty_outer_13;
      function obj_init_12() {
        var origSuperDepth = superDepth;
        superDepth = obj12;
        obj12.annotations = [];
        sourceObject = obj12;
        var call14 = callmethod(var_KittyImage,"new()object", [1, 1], var_url__39__, this);
        obj12.superobj = call14;
        obj12._value = call14._value;
        superDepth = origSuperDepth;
      }
      obj_init_12.apply(inheritingObject, []);
      return obj12
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  this.methods["Image()object"] = func11;
  lineNumber = 96
  var func15 = function(argcv) {
    var curarg = 1;
    var var_x__39__ = arguments[curarg];
    curarg++;
    var var_y__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func15.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Entity)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 97
      var obj16 = Grace_allocObject();
      obj16.definitionModule = "kitty";
      obj16.definitionLine = 97;
      obj16.outer = this;
      var reader_kitty_outer_17 = function() {
        return this.outer;
      }
      obj16.methods["outer"] = reader_kitty_outer_17;
      function obj_init_16() {
        var origSuperDepth = superDepth;
        superDepth = obj16;
        obj16.annotations = [];
        sourceObject = obj16;
        lineNumber = 98
        var call18 = callmethod(var_KittyEntity,"new()object", [2, 1], var_x__39__, var_y__39__, this);
        obj16.superobj = call18;
        obj16._value = call18._value;
        superDepth = origSuperDepth;
      }
      obj_init_16.apply(obj16, []);
      return obj16
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func15.paramCounts = [
    2,
  ];
  func15.variableArities = [
    false,
  ];
  this.methods["Entity"] = func15;
  func15.definitionLine = 96;
  func15.definitionModule = "kitty";
  var func19 = function(argcv) {
    var curarg = 1;
    var var_x__39__ = arguments[curarg];
    curarg++;
    var var_y__39__ = arguments[curarg];
    curarg++;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj20 = Grace_allocObject();
      obj20.definitionModule = "kitty";
      obj20.definitionLine = 97;
      var inho20 = inheritingObject;
      while (inho20.superobj) inho20 = inho20.superobj;
      inho20.superobj = obj20;
      obj20.data = inheritingObject.data;
      obj20.outer = this;
      var reader_kitty_outer_21 = function() {
        return this.outer;
      }
      obj20.methods["outer"] = reader_kitty_outer_21;
      function obj_init_20() {
        var origSuperDepth = superDepth;
        superDepth = obj20;
        obj20.annotations = [];
        sourceObject = obj20;
        var call22 = callmethod(var_KittyEntity,"new()object", [2, 1], var_x__39__, var_y__39__, this);
        obj20.superobj = call22;
        obj20._value = call22._value;
        superDepth = origSuperDepth;
      }
      obj_init_20.apply(inheritingObject, []);
      return obj20
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  this.methods["Entity()object"] = func19;
  lineNumber = 175
  var func23 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func23.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (World)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 176
      var obj24 = Grace_allocObject();
      obj24.definitionModule = "kitty";
      obj24.definitionLine = 176;
      obj24.outer = this;
      var reader_kitty_outer_25 = function() {
        return this.outer;
      }
      obj24.methods["outer"] = reader_kitty_outer_25;
      function obj_init_24() {
        var origSuperDepth = superDepth;
        superDepth = obj24;
        obj24.annotations = [];
        sourceObject = obj24;
        lineNumber = 177
        var call26 = callmethod(var_KittyWorld,"new()object", [0, 1], this);
        obj24.superobj = call26;
        obj24._value = call26._value;
        superDepth = origSuperDepth;
      }
      obj_init_24.apply(obj24, []);
      return obj24
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func23.paramCounts = [
    0,
  ];
  func23.variableArities = [
    false,
  ];
  this.methods["World"] = func23;
  func23.definitionLine = 175;
  func23.definitionModule = "kitty";
  var func27 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj28 = Grace_allocObject();
      obj28.definitionModule = "kitty";
      obj28.definitionLine = 176;
      var inho28 = inheritingObject;
      while (inho28.superobj) inho28 = inho28.superobj;
      inho28.superobj = obj28;
      obj28.data = inheritingObject.data;
      obj28.outer = this;
      var reader_kitty_outer_29 = function() {
        return this.outer;
      }
      obj28.methods["outer"] = reader_kitty_outer_29;
      function obj_init_28() {
        var origSuperDepth = superDepth;
        superDepth = obj28;
        obj28.annotations = [];
        sourceObject = obj28;
        var call30 = callmethod(var_KittyWorld,"new()object", [0, 1], this);
        obj28.superobj = call30;
        obj28._value = call30._value;
        superDepth = origSuperDepth;
      }
      obj_init_28.apply(inheritingObject, []);
      return obj28
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  this.methods["World()object"] = func27;
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
  lineNumber = 4
  // Import of StandardPrelude
  if (typeof gracecode_StandardPrelude == 'undefined')
    throw new GraceExceptionPacket(RuntimeErrorObject, 
      new GraceString('could not find module sp'));
  var var_sp = do_import("StandardPrelude", gracecode_StandardPrelude);
  lineNumber = 5
  var call31 = callmethod(var_sp,"new()object", [0, 1], this);
  this.superobj = call31;
  this.data = call31.data;
  this._value = call31._value;
  lineNumber = 8
  lineNumber = 10
  var var_m__95__world;
  lineNumber = 1
  var func32 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func32.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (m_world)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 8
      return var_m__95__world
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func32.paramCounts = [
    0,
  ];
  func32.variableArities = [
    false,
  ];
  this.methods["m_world"] = func32;
  func32.definitionLine = 1;
  func32.definitionModule = "kitty";
  lineNumber = 1
  var func33 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func33.paramCounts[0])
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
  func33.paramCounts = [
    1,
  ];
  func33.variableArities = [
    false,
  ];
  this.methods["m_world:="] = func33;
  func33.definitionLine = 1;
  func33.definitionModule = "kitty";
  lineNumber = 10
  lineNumber = 14
  lineNumber = 18
  lineNumber = 22
  var func34 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func34.paramCounts[0])
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
  func34.paramCounts = [
    0,
  ];
  func34.variableArities = [
    false,
  ];
  this.methods["KittyImage"] = func34;
  func34.definitionLine = 22;
  func34.definitionModule = "kitty";
  var obj35 = Grace_allocObject();
  obj35.definitionModule = "kitty";
  obj35.definitionLine = 22;
  obj35.outer = this;
  var reader_kitty_outer_36 = function() {
    return this.outer;
  }
  obj35.methods["outer"] = reader_kitty_outer_36;
  function obj_init_35() {
    var origSuperDepth = superDepth;
    superDepth = obj35;
    obj35.annotations = [];
    var func37 = function(argcv) {
      var curarg = 1;
      var var_url__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func37.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj38 = Grace_allocObject();
        obj38.definitionModule = "kitty";
        obj38.definitionLine = 22;
        obj38.outer = this;
        var reader_kitty_outer_39 = function() {
          return this.outer;
        }
        obj38.methods["outer"] = reader_kitty_outer_39;
        function obj_init_38() {
          var origSuperDepth = superDepth;
          superDepth = obj38;
          obj38.annotations = [];
          var func40 = function(argcv) {
            var curarg = 1;
            var var_ctx__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func40.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 32
              var string41 = new GraceString("...");
              onSelf = true;
              var call43 = callmethod(this, "imgTag", [0]);
              var call44 = callmethod(call43,"src", [0]);
              var string46 = new GraceString("DRAWING IMAGE: ");
              var opresult48 = callmethod(string46, "++", [1], call44);
              var opresult50 = callmethod(opresult48, "++", [1], string41);
              var call51 = Grace_print(opresult50);
              lineNumber = 33
              var call52 = callmethod(var_ctx__39__,"save", [0]);
              lineNumber = 34
              var call53 = callmethod(var_ctx__39__,"translate", [2], new GraceNum(0), new GraceNum(0));
              lineNumber = 35
              var opresult58 = callmethod(new GraceNum(180), "+", [1], new GraceNum(180));
              var call59 = callmethod(opresult58,"prefix-", [0]);
              var quotient61 = callmethod(call59, "/", [1], new GraceNum(180));
              var prod63 = callmethod(quotient61, "*", [1], new GraceNum(3.1415));
              var call64 = callmethod(var_ctx__39__,"rotate", [1], prod63);
              lineNumber = 36
              onSelf = true;
              var call65 = callmethod(this, "imgTag", [0]);
              onSelf = true;
              var call67 = callmethod(this, "width", [0]);
              var call68 = callmethod(call67,"prefix-", [0]);
              var quotient70 = callmethod(call68, "/", [1], new GraceNum(2));
              onSelf = true;
              var call72 = callmethod(this, "height", [0]);
              var call73 = callmethod(call72,"prefix-", [0]);
              var quotient75 = callmethod(call73, "/", [1], new GraceNum(2));
              onSelf = true;
              var call76 = callmethod(this, "width", [0]);
              onSelf = true;
              var call77 = callmethod(this, "height", [0]);
              var call78 = callmethod(var_ctx__39__,"drawImage", [5], call65, quotient70, quotient75, call76, call77);
              lineNumber = 37
              var call79 = callmethod(var_ctx__39__,"restore", [0]);
              lineNumber = 38
              var string80 = new GraceString(" DRAWN");
              onSelf = true;
              var call82 = callmethod(this, "imgTag", [0]);
              var call83 = callmethod(call82,"src", [0]);
              var string85 = new GraceString("IMAGE: ");
              var opresult87 = callmethod(string85, "++", [1], call83);
              var opresult89 = callmethod(opresult87, "++", [1], string80);
              var call90 = Grace_print(opresult89);
              return call90
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func40.paramCounts = [
            1,
          ];
          func40.variableArities = [
            false,
          ];
          obj38.methods["draw"] = func40;
          func40.definitionLine = 31;
          func40.definitionModule = "kitty";
          sourceObject = obj38;
          lineNumber = 24
          var string91 = new GraceString("...");
          var string94 = new GraceString("CREATING NEW IMAGE: ");
          var opresult96 = callmethod(string94, "++", [1], var_url__39__);
          var opresult98 = callmethod(opresult96, "++", [1], string91);
          var call99 = Grace_print(opresult98);
          sourceObject = obj38;
          lineNumber = 25
          var string100 = new GraceString("img");
          var call101 = callmethod(var_dom,"document", [0]);
          var call102 = callmethod(call101,"createElement", [1], string100);
          obj38.data["imgTag"] = call102;
          var reader_kitty_imgTag_103 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_103.def = true;
          reader_kitty_imgTag_103.confidential = true;
          obj38.methods["imgTag"] = reader_kitty_imgTag_103;
          lineNumber = 25;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call102)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj38;
          lineNumber = 28
          lineNumber = 25
          lineNumber = 26
          onSelf = true;
          var call104 = callmethod(this, "imgTag", [0]);
          var call105 = callmethod(call104,"src:=", [1], var_url__39__);
          sourceObject = obj38;
          lineNumber = 28
          obj38.data["height"] = new GraceNum(64);
          var reader_kitty_height_106 = function() {
            return this.data["height"];
          }
          obj38.methods["height"] = reader_kitty_height_106;
          obj38.data["height"] = new GraceNum(64);
          var writer_kitty_height_106 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj38.methods["height:="] = writer_kitty_height_106;
          reader_kitty_height_106.confidential = true;
          writer_kitty_height_106.confidential = true;
          lineNumber = 29;
          moduleName = "kitty";
          lineNumber = 28
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(64))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj38.mutable = true;
          sourceObject = obj38;
          lineNumber = 29
          obj38.data["width"] = new GraceNum(64);
          var reader_kitty_width_107 = function() {
            return this.data["width"];
          }
          obj38.methods["width"] = reader_kitty_width_107;
          obj38.data["width"] = new GraceNum(64);
          var writer_kitty_width_107 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj38.methods["width:="] = writer_kitty_width_107;
          reader_kitty_width_107.confidential = true;
          writer_kitty_width_107.confidential = true;
          lineNumber = 31;
          moduleName = "kitty";
          lineNumber = 29
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(64))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj38.mutable = true;
          sourceObject = obj38;
          sourceObject = obj38;
          lineNumber = 41
          var string108 = new GraceString("");
          var string111 = new GraceString("CREATED NEW IMAGE: ");
          var opresult113 = callmethod(string111, "++", [1], var_url__39__);
          var opresult115 = callmethod(opresult113, "++", [1], string108);
          var call116 = Grace_print(opresult115);
          superDepth = origSuperDepth;
        }
        obj_init_38.apply(obj38, []);
        return obj38
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
    obj35.methods["new"] = func37;
    func37.definitionLine = 22;
    func37.definitionModule = "kitty";
    var func117 = function(argcv) {
      var curarg = 1;
      var var_url__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj118 = Grace_allocObject();
        obj118.definitionModule = "kitty";
        obj118.definitionLine = 22;
        var inho118 = inheritingObject;
        while (inho118.superobj) inho118 = inho118.superobj;
        inho118.superobj = obj118;
        obj118.data = inheritingObject.data;
        obj118.outer = this;
        var reader_kitty_outer_119 = function() {
          return this.outer;
        }
        obj118.methods["outer"] = reader_kitty_outer_119;
        function obj_init_118() {
          var origSuperDepth = superDepth;
          superDepth = obj118;
          obj118.annotations = [];
          var func120 = function(argcv) {
            var curarg = 1;
            var var_ctx__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func120.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 32
              var string121 = new GraceString("...");
              onSelf = true;
              var call123 = callmethod(this, "imgTag", [0]);
              var call124 = callmethod(call123,"src", [0]);
              var string126 = new GraceString("DRAWING IMAGE: ");
              var opresult128 = callmethod(string126, "++", [1], call124);
              var opresult130 = callmethod(opresult128, "++", [1], string121);
              var call131 = Grace_print(opresult130);
              lineNumber = 33
              var call132 = callmethod(var_ctx__39__,"save", [0]);
              lineNumber = 34
              var call133 = callmethod(var_ctx__39__,"translate", [2], new GraceNum(0), new GraceNum(0));
              lineNumber = 35
              var opresult138 = callmethod(new GraceNum(180), "+", [1], new GraceNum(180));
              var call139 = callmethod(opresult138,"prefix-", [0]);
              var quotient141 = callmethod(call139, "/", [1], new GraceNum(180));
              var prod143 = callmethod(quotient141, "*", [1], new GraceNum(3.1415));
              var call144 = callmethod(var_ctx__39__,"rotate", [1], prod143);
              lineNumber = 36
              onSelf = true;
              var call145 = callmethod(this, "imgTag", [0]);
              onSelf = true;
              var call147 = callmethod(this, "width", [0]);
              var call148 = callmethod(call147,"prefix-", [0]);
              var quotient150 = callmethod(call148, "/", [1], new GraceNum(2));
              onSelf = true;
              var call152 = callmethod(this, "height", [0]);
              var call153 = callmethod(call152,"prefix-", [0]);
              var quotient155 = callmethod(call153, "/", [1], new GraceNum(2));
              onSelf = true;
              var call156 = callmethod(this, "width", [0]);
              onSelf = true;
              var call157 = callmethod(this, "height", [0]);
              var call158 = callmethod(var_ctx__39__,"drawImage", [5], call145, quotient150, quotient155, call156, call157);
              lineNumber = 37
              var call159 = callmethod(var_ctx__39__,"restore", [0]);
              lineNumber = 38
              var string160 = new GraceString(" DRAWN");
              onSelf = true;
              var call162 = callmethod(this, "imgTag", [0]);
              var call163 = callmethod(call162,"src", [0]);
              var string165 = new GraceString("IMAGE: ");
              var opresult167 = callmethod(string165, "++", [1], call163);
              var opresult169 = callmethod(opresult167, "++", [1], string160);
              var call170 = Grace_print(opresult169);
              return call170
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func120.paramCounts = [
            1,
          ];
          func120.variableArities = [
            false,
          ];
          obj118.methods["draw"] = func120;
          func120.definitionLine = 31;
          func120.definitionModule = "kitty";
          sourceObject = obj118;
          lineNumber = 24
          var string171 = new GraceString("...");
          var string174 = new GraceString("CREATING NEW IMAGE: ");
          var opresult176 = callmethod(string174, "++", [1], var_url__39__);
          var opresult178 = callmethod(opresult176, "++", [1], string171);
          var call179 = Grace_print(opresult178);
          sourceObject = obj118;
          lineNumber = 25
          var string180 = new GraceString("img");
          var call181 = callmethod(var_dom,"document", [0]);
          var call182 = callmethod(call181,"createElement", [1], string180);
          obj118.data["imgTag"] = call182;
          var reader_kitty_imgTag_183 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_183.def = true;
          reader_kitty_imgTag_183.confidential = true;
          obj118.methods["imgTag"] = reader_kitty_imgTag_183;
          lineNumber = 25;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call182)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj118;
          lineNumber = 28
          lineNumber = 25
          lineNumber = 26
          onSelf = true;
          var call184 = callmethod(this, "imgTag", [0]);
          var call185 = callmethod(call184,"src:=", [1], var_url__39__);
          sourceObject = obj118;
          lineNumber = 28
          obj118.data["height"] = new GraceNum(64);
          var reader_kitty_height_186 = function() {
            return this.data["height"];
          }
          obj118.methods["height"] = reader_kitty_height_186;
          obj118.data["height"] = new GraceNum(64);
          var writer_kitty_height_186 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj118.methods["height:="] = writer_kitty_height_186;
          reader_kitty_height_186.confidential = true;
          writer_kitty_height_186.confidential = true;
          lineNumber = 29;
          moduleName = "kitty";
          lineNumber = 28
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(64))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj118.mutable = true;
          sourceObject = obj118;
          lineNumber = 29
          obj118.data["width"] = new GraceNum(64);
          var reader_kitty_width_187 = function() {
            return this.data["width"];
          }
          obj118.methods["width"] = reader_kitty_width_187;
          obj118.data["width"] = new GraceNum(64);
          var writer_kitty_width_187 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj118.methods["width:="] = writer_kitty_width_187;
          reader_kitty_width_187.confidential = true;
          writer_kitty_width_187.confidential = true;
          lineNumber = 31;
          moduleName = "kitty";
          lineNumber = 29
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(64))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj118.mutable = true;
          sourceObject = obj118;
          sourceObject = obj118;
          lineNumber = 41
          var string188 = new GraceString("");
          var string191 = new GraceString("CREATED NEW IMAGE: ");
          var opresult193 = callmethod(string191, "++", [1], var_url__39__);
          var opresult195 = callmethod(opresult193, "++", [1], string188);
          var call196 = Grace_print(opresult195);
          superDepth = origSuperDepth;
        }
        obj_init_118.apply(inheritingObject, []);
        return obj118
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj35.methods["new()object"] = func117;
    var func197 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 22
        var string198 = new GraceString("class KittyImage");
        return string198
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func197.paramCounts = [
    ];
    func197.variableArities = [
    ];
    obj35.methods["asDebugString"] = func197;
    func197.definitionLine = 22;
    func197.definitionModule = "kitty";
    sourceObject = obj35;
    sourceObject = obj35;
    superDepth = origSuperDepth;
  }
  obj_init_35.apply(obj35, []);
  var var_KittyImage = obj35;
  lineNumber = 44
  lineNumber = 50
  var func199 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func199.paramCounts[0])
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
  func199.paramCounts = [
    0,
  ];
  func199.variableArities = [
    false,
  ];
  this.methods["KittyEntity"] = func199;
  func199.definitionLine = 50;
  func199.definitionModule = "kitty";
  var obj200 = Grace_allocObject();
  obj200.definitionModule = "kitty";
  obj200.definitionLine = 50;
  obj200.outer = this;
  var reader_kitty_outer_201 = function() {
    return this.outer;
  }
  obj200.methods["outer"] = reader_kitty_outer_201;
  function obj_init_200() {
    var origSuperDepth = superDepth;
    superDepth = obj200;
    obj200.annotations = [];
    var func202 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func202.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj203 = Grace_allocObject();
        obj203.definitionModule = "kitty";
        obj203.definitionLine = 50;
        obj203.outer = this;
        var reader_kitty_outer_204 = function() {
          return this.outer;
        }
        obj203.methods["outer"] = reader_kitty_outer_204;
        function obj_init_203() {
          var origSuperDepth = superDepth;
          superDepth = obj203;
          obj203.annotations = [];
          var func205 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func205.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 60
              var string206 = new GraceString("awake");
              var call207 = Grace_print(string206);
              return call207
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func205.paramCounts = [
            0,
          ];
          func205.variableArities = [
            false,
          ];
          obj203.methods["awake"] = func205;
          func205.definitionLine = 59;
          func205.definitionModule = "kitty";
          var func208 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func208.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 65
              var string209 = new GraceString("start");
              var call210 = Grace_print(string209);
              return call210
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func208.paramCounts = [
            0,
          ];
          func208.variableArities = [
            false,
          ];
          obj203.methods["start"] = func208;
          func208.definitionLine = 64;
          func208.definitionModule = "kitty";
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
          obj203.methods["update"] = func211;
          func211.definitionLine = 69;
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
          obj203.methods["onDestroy"] = func212;
          func212.definitionLine = 74;
          func212.definitionModule = "kitty";
          var func213 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func213.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 80
              lineNumber = 50
              lineNumber = 79
              onSelf = true;
              var call214 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 81
              lineNumber = 50
              lineNumber = 80
              onSelf = true;
              var call215 = callmethod(this, "posY:=", [1], var_y);
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
            2,
          ];
          func213.variableArities = [
            false,
          ];
          obj203.methods["setLocation"] = func213;
          func213.definitionLine = 78;
          func213.definitionModule = "kitty";
          var func216 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func216.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 85
              lineNumber = 84
              onSelf = true;
              var call217 = callmethod(this, "posX", [0]);
              return call217
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
          obj203.methods["getX"] = func216;
          func216.definitionLine = 83;
          func216.definitionModule = "kitty";
          var func218 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func218.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 89
              lineNumber = 88
              onSelf = true;
              var call219 = callmethod(this, "posY", [0]);
              return call219
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
          obj203.methods["getY"] = func218;
          func218.definitionLine = 87;
          func218.definitionModule = "kitty";
          var func220 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func220.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 93
              lineNumber = 92
              onSelf = true;
              var call221 = callmethod(this, "rotation", [0]);
              return call221
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func220.paramCounts = [
            0,
          ];
          func220.variableArities = [
            false,
          ];
          obj203.methods["getRotation"] = func220;
          func220.definitionLine = 91;
          func220.definitionModule = "kitty";
          sourceObject = obj203;
          lineNumber = 52
          onSelf = true;
          var call222 = callmethod(this, "awake", [0]);
          sourceObject = obj203;
          lineNumber = 54
          obj203.data["posX"] = var_x__39__;
          var reader_kitty_posX_223 = function() {
            return this.data["posX"];
          }
          obj203.methods["posX"] = reader_kitty_posX_223;
          obj203.data["posX"] = var_x__39__;
          var writer_kitty_posX_223 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj203.methods["posX:="] = writer_kitty_posX_223;
          reader_kitty_posX_223.confidential = true;
          writer_kitty_posX_223.confidential = true;
          lineNumber = 55;
          moduleName = "kitty";
          lineNumber = 54
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj203.mutable = true;
          sourceObject = obj203;
          lineNumber = 55
          obj203.data["posY"] = var_y__39__;
          var reader_kitty_posY_224 = function() {
            return this.data["posY"];
          }
          obj203.methods["posY"] = reader_kitty_posY_224;
          obj203.data["posY"] = var_y__39__;
          var writer_kitty_posY_224 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj203.methods["posY:="] = writer_kitty_posY_224;
          reader_kitty_posY_224.confidential = true;
          writer_kitty_posY_224.confidential = true;
          lineNumber = 56;
          moduleName = "kitty";
          lineNumber = 55
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj203.mutable = true;
          sourceObject = obj203;
          lineNumber = 56
          obj203.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_225 = function() {
            return this.data["rotation"];
          }
          obj203.methods["rotation"] = reader_kitty_rotation_225;
          obj203.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_225 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj203.methods["rotation:="] = writer_kitty_rotation_225;
          reader_kitty_rotation_225.confidential = true;
          writer_kitty_rotation_225.confidential = true;
          lineNumber = 59;
          moduleName = "kitty";
          lineNumber = 56
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj203.mutable = true;
          sourceObject = obj203;
          sourceObject = obj203;
          sourceObject = obj203;
          sourceObject = obj203;
          sourceObject = obj203;
          sourceObject = obj203;
          sourceObject = obj203;
          sourceObject = obj203;
          superDepth = origSuperDepth;
        }
        obj_init_203.apply(obj203, []);
        return obj203
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func202.paramCounts = [
      2,
    ];
    func202.variableArities = [
      false,
    ];
    obj200.methods["new"] = func202;
    func202.definitionLine = 50;
    func202.definitionModule = "kitty";
    var func226 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj227 = Grace_allocObject();
        obj227.definitionModule = "kitty";
        obj227.definitionLine = 50;
        var inho227 = inheritingObject;
        while (inho227.superobj) inho227 = inho227.superobj;
        inho227.superobj = obj227;
        obj227.data = inheritingObject.data;
        obj227.outer = this;
        var reader_kitty_outer_228 = function() {
          return this.outer;
        }
        obj227.methods["outer"] = reader_kitty_outer_228;
        function obj_init_227() {
          var origSuperDepth = superDepth;
          superDepth = obj227;
          obj227.annotations = [];
          var func229 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func229.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 60
              var string230 = new GraceString("awake");
              var call231 = Grace_print(string230);
              return call231
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func229.paramCounts = [
            0,
          ];
          func229.variableArities = [
            false,
          ];
          obj227.methods["awake"] = func229;
          func229.definitionLine = 59;
          func229.definitionModule = "kitty";
          var func232 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func232.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 65
              var string233 = new GraceString("start");
              var call234 = Grace_print(string233);
              return call234
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
          obj227.methods["start"] = func232;
          func232.definitionLine = 64;
          func232.definitionModule = "kitty";
          var func235 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func235.paramCounts[0])
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
          func235.paramCounts = [
            0,
          ];
          func235.variableArities = [
            false,
          ];
          obj227.methods["update"] = func235;
          func235.definitionLine = 69;
          func235.definitionModule = "kitty";
          var func236 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func236.paramCounts[0])
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
          func236.paramCounts = [
            0,
          ];
          func236.variableArities = [
            false,
          ];
          obj227.methods["onDestroy"] = func236;
          func236.definitionLine = 74;
          func236.definitionModule = "kitty";
          var func237 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func237.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 80
              lineNumber = 50
              lineNumber = 79
              onSelf = true;
              var call238 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 81
              lineNumber = 50
              lineNumber = 80
              onSelf = true;
              var call239 = callmethod(this, "posY:=", [1], var_y);
              return call239
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
          obj227.methods["setLocation"] = func237;
          func237.definitionLine = 78;
          func237.definitionModule = "kitty";
          var func240 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func240.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 85
              lineNumber = 84
              onSelf = true;
              var call241 = callmethod(this, "posX", [0]);
              return call241
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
          obj227.methods["getX"] = func240;
          func240.definitionLine = 83;
          func240.definitionModule = "kitty";
          var func242 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func242.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 89
              lineNumber = 88
              onSelf = true;
              var call243 = callmethod(this, "posY", [0]);
              return call243
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
          obj227.methods["getY"] = func242;
          func242.definitionLine = 87;
          func242.definitionModule = "kitty";
          var func244 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func244.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 93
              lineNumber = 92
              onSelf = true;
              var call245 = callmethod(this, "rotation", [0]);
              return call245
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
          obj227.methods["getRotation"] = func244;
          func244.definitionLine = 91;
          func244.definitionModule = "kitty";
          sourceObject = obj227;
          lineNumber = 52
          onSelf = true;
          var call246 = callmethod(this, "awake", [0]);
          sourceObject = obj227;
          lineNumber = 54
          obj227.data["posX"] = var_x__39__;
          var reader_kitty_posX_247 = function() {
            return this.data["posX"];
          }
          obj227.methods["posX"] = reader_kitty_posX_247;
          obj227.data["posX"] = var_x__39__;
          var writer_kitty_posX_247 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj227.methods["posX:="] = writer_kitty_posX_247;
          reader_kitty_posX_247.confidential = true;
          writer_kitty_posX_247.confidential = true;
          lineNumber = 55;
          moduleName = "kitty";
          lineNumber = 54
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj227.mutable = true;
          sourceObject = obj227;
          lineNumber = 55
          obj227.data["posY"] = var_y__39__;
          var reader_kitty_posY_248 = function() {
            return this.data["posY"];
          }
          obj227.methods["posY"] = reader_kitty_posY_248;
          obj227.data["posY"] = var_y__39__;
          var writer_kitty_posY_248 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj227.methods["posY:="] = writer_kitty_posY_248;
          reader_kitty_posY_248.confidential = true;
          writer_kitty_posY_248.confidential = true;
          lineNumber = 56;
          moduleName = "kitty";
          lineNumber = 55
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj227.mutable = true;
          sourceObject = obj227;
          lineNumber = 56
          obj227.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_249 = function() {
            return this.data["rotation"];
          }
          obj227.methods["rotation"] = reader_kitty_rotation_249;
          obj227.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_249 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj227.methods["rotation:="] = writer_kitty_rotation_249;
          reader_kitty_rotation_249.confidential = true;
          writer_kitty_rotation_249.confidential = true;
          lineNumber = 59;
          moduleName = "kitty";
          lineNumber = 56
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj227.mutable = true;
          sourceObject = obj227;
          sourceObject = obj227;
          sourceObject = obj227;
          sourceObject = obj227;
          sourceObject = obj227;
          sourceObject = obj227;
          sourceObject = obj227;
          sourceObject = obj227;
          superDepth = origSuperDepth;
        }
        obj_init_227.apply(inheritingObject, []);
        return obj227
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj200.methods["new()object"] = func226;
    var func250 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 50
        var string251 = new GraceString("class KittyEntity");
        return string251
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func250.paramCounts = [
    ];
    func250.variableArities = [
    ];
    obj200.methods["asDebugString"] = func250;
    func250.definitionLine = 50;
    func250.definitionModule = "kitty";
    sourceObject = obj200;
    sourceObject = obj200;
    superDepth = origSuperDepth;
  }
  obj_init_200.apply(obj200, []);
  var var_KittyEntity = obj200;
  lineNumber = 96
  lineNumber = 102
  var func252 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func252.paramCounts[0])
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
  func252.paramCounts = [
    0,
  ];
  func252.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func252;
  func252.definitionLine = 102;
  func252.definitionModule = "kitty";
  var obj253 = Grace_allocObject();
  obj253.definitionModule = "kitty";
  obj253.definitionLine = 102;
  obj253.outer = this;
  var reader_kitty_outer_254 = function() {
    return this.outer;
  }
  obj253.methods["outer"] = reader_kitty_outer_254;
  function obj_init_253() {
    var origSuperDepth = superDepth;
    superDepth = obj253;
    obj253.annotations = [];
    var func255 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func255.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj256 = Grace_allocObject();
        obj256.definitionModule = "kitty";
        obj256.definitionLine = 102;
        obj256.outer = this;
        var reader_kitty_outer_257 = function() {
          return this.outer;
        }
        obj256.methods["outer"] = reader_kitty_outer_257;
        function obj_init_256() {
          var origSuperDepth = superDepth;
          superDepth = obj256;
          obj256.annotations = [];
          var func258 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func258.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 129
              var string259 = new GraceString("INITIALIZING WORLD...");
              var call260 = Grace_print(string259);
              lineNumber = 135
              var if261 = var_done;
              lineNumber = 131
              onSelf = true;
              var call262 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call262)) {
                lineNumber = 133
                return var_done
              }
              lineNumber = 136
              lineNumber = 102
              lineNumber = 135
              var call263 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call264 = callmethod(this, "document:=", [1], call263);
              lineNumber = 136
              lineNumber = 135
              lineNumber = 136
              var string265 = new GraceString("standard-canvas");
              onSelf = true;
              var call266 = callmethod(this, "document", [0]);
              var call267 = callmethod(call266,"getElementById", [1], string265);
              onSelf = true;
              var call268 = callmethod(this, "canvas:=", [1], call267);
              lineNumber = 138
              lineNumber = 135
              lineNumber = 137
              onSelf = true;
              var call269 = callmethod(this, "canvas", [0]);
              var call270 = callmethod(call269,"width", [0]);
              onSelf = true;
              var call271 = callmethod(this, "canvasWidth:=", [1], call270);
              lineNumber = 140
              lineNumber = 137
              lineNumber = 138
              onSelf = true;
              var call272 = callmethod(this, "canvas", [0]);
              var call273 = callmethod(call272,"height", [0]);
              onSelf = true;
              var call274 = callmethod(this, "canvasHeight:=", [1], call273);
              lineNumber = 141
              lineNumber = 138
              lineNumber = 140
              var bool275 = new GraceBoolean(true)
              onSelf = true;
              var call276 = callmethod(this, "isInit:=", [1], bool275);
              lineNumber = 141
              var string277 = new GraceString("INITIALIZATION FINISHED");
              var call278 = Grace_print(string277);
              return call278
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func258.paramCounts = [
            0,
          ];
          func258.variableArities = [
            false,
          ];
          obj256.methods["init"] = func258;
          func258.definitionLine = 127;
          func258.definitionModule = "kitty";
          var func279 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func279.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 145
              lineNumber = 138
              lineNumber = 145
              var string280 = new GraceString("canvas");
              var call281 = callmethod(var_dom,"document", [0]);
              var call282 = callmethod(call281,"createElement", [1], string280);
              onSelf = true;
              var call283 = callmethod(this, "backingCanvas:=", [1], call282);
              lineNumber = 147
              lineNumber = 145
              lineNumber = 146
              onSelf = true;
              var call284 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call285 = callmethod(this, "backingCanvas", [0]);
              var call286 = callmethod(call285,"height:=", [1], call284);
              lineNumber = 148
              lineNumber = 145
              lineNumber = 147
              onSelf = true;
              var call287 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call288 = callmethod(this, "backingCanvas", [0]);
              var call289 = callmethod(call288,"width:=", [1], call287);
              lineNumber = 148
              lineNumber = 145
              lineNumber = 148
              var string290 = new GraceString("2d");
              onSelf = true;
              var call291 = callmethod(this, "backingCanvas", [0]);
              var call292 = callmethod(call291,"getContext", [1], string290);
              onSelf = true;
              var call293 = callmethod(this, "backingContext:=", [1], call292);
              lineNumber = 149
              lineNumber = 145
              lineNumber = 149
              var string294 = new GraceString("2d");
              onSelf = true;
              var call295 = callmethod(this, "canvas", [0]);
              var call296 = callmethod(call295,"getCanvas", [0]);
              var call297 = callmethod(call296,"getContext", [1], string294);
              onSelf = true;
              var call298 = callmethod(this, "mctx:=", [1], call297);
              return call298
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func279.paramCounts = [
            0,
          ];
          func279.variableArities = [
            false,
          ];
          obj256.methods["start"] = func279;
          func279.definitionLine = 144;
          func279.definitionModule = "kitty";
          var func299 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func299.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 153
              var string300 = new GraceString("UPDATING WORLD...");
              var call301 = Grace_print(string300);
              lineNumber = 155
              lineNumber = 149
              lineNumber = 154
              onSelf = true;
              var call302 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call303 = callmethod(this, "mctx", [0]);
              var call304 = callmethod(call303,"fillStyle:=", [1], call302);
              lineNumber = 155
              onSelf = true;
              var call305 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call306 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call307 = callmethod(this, "mctx", [0]);
              var call308 = callmethod(call307,"fillRect", [4], new GraceNum(0), new GraceNum(0), call305, call306);
              lineNumber = 158
              var string309 = new GraceString("WORLD UPDATED");
              var call310 = Grace_print(string309);
              return call310
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
          obj256.methods["update"] = func299;
          func299.definitionLine = 152;
          func299.definitionModule = "kitty";
          var func311 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func311.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 166
              lineNumber = 149
              lineNumber = 165
              onSelf = true;
              var call312 = callmethod(this, "background:=", [1], var_background__39__);
              return call312
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func311.paramCounts = [
            1,
          ];
          func311.variableArities = [
            false,
          ];
          obj256.methods["setBackground"] = func311;
          func311.definitionLine = 164;
          func311.definitionModule = "kitty";
          var func313 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func313.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 169
              onSelf = true;
              var call314 = callmethod(this, "entities", [0]);
              var call315 = callmethod(call314,"add", [1], var_e);
              return call315
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func313.paramTypes = [];
          func313.paramTypes.push([]);
          func313.paramCounts = [
            1,
          ];
          func313.variableArities = [
            false,
          ];
          obj256.methods["addEntity"] = func313;
          func313.definitionLine = 168;
          func313.definitionModule = "kitty";
          sourceObject = obj256;
          lineNumber = 104
          var string316 = new GraceString("CREATING NEW WORLD...");
          var call317 = Grace_print(string316);
          sourceObject = obj256;
          obj256.data["background"] = undefined;
          var reader_kitty_background_318 = function() {
            return this.data["background"];
          }
          obj256.methods["background"] = reader_kitty_background_318;
          obj256.data["background"] = undefined;
          var writer_kitty_background_318 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj256.methods["background:="] = writer_kitty_background_318;
          reader_kitty_background_318.confidential = true;
          writer_kitty_background_318.confidential = true;
          obj256.mutable = true;
          sourceObject = obj256;
          lineNumber = 107
          var string319 = new GraceString("black");
          obj256.data["backgroundColour"] = string319;
          var reader_kitty_backgroundColour_320 = function() {
            return this.data["backgroundColour"];
          }
          obj256.methods["backgroundColour"] = reader_kitty_backgroundColour_320;
          obj256.data["backgroundColour"] = string319;
          var writer_kitty_backgroundColour_320 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj256.methods["backgroundColour:="] = writer_kitty_backgroundColour_320;
          reader_kitty_backgroundColour_320.confidential = true;
          writer_kitty_backgroundColour_320.confidential = true;
          lineNumber = 109;
          moduleName = "kitty";
          lineNumber = 107
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string319)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj256.mutable = true;
          sourceObject = obj256;
          obj256.data["document"] = undefined;
          var reader_kitty_document_321 = function() {
            return this.data["document"];
          }
          obj256.methods["document"] = reader_kitty_document_321;
          obj256.data["document"] = undefined;
          var writer_kitty_document_321 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj256.methods["document:="] = writer_kitty_document_321;
          reader_kitty_document_321.confidential = true;
          writer_kitty_document_321.confidential = true;
          obj256.mutable = true;
          sourceObject = obj256;
          obj256.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_322 = function() {
            return this.data["backingCanvas"];
          }
          obj256.methods["backingCanvas"] = reader_kitty_backingCanvas_322;
          obj256.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_322 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj256.methods["backingCanvas:="] = writer_kitty_backingCanvas_322;
          reader_kitty_backingCanvas_322.confidential = true;
          writer_kitty_backingCanvas_322.confidential = true;
          obj256.mutable = true;
          sourceObject = obj256;
          obj256.data["backingContext"] = undefined;
          var reader_kitty_backingContext_323 = function() {
            return this.data["backingContext"];
          }
          obj256.methods["backingContext"] = reader_kitty_backingContext_323;
          obj256.data["backingContext"] = undefined;
          var writer_kitty_backingContext_323 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj256.methods["backingContext:="] = writer_kitty_backingContext_323;
          reader_kitty_backingContext_323.confidential = true;
          writer_kitty_backingContext_323.confidential = true;
          obj256.mutable = true;
          sourceObject = obj256;
          obj256.data["canvas"] = undefined;
          var reader_kitty_canvas_324 = function() {
            return this.data["canvas"];
          }
          obj256.methods["canvas"] = reader_kitty_canvas_324;
          obj256.data["canvas"] = undefined;
          var writer_kitty_canvas_324 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj256.methods["canvas:="] = writer_kitty_canvas_324;
          reader_kitty_canvas_324.confidential = true;
          writer_kitty_canvas_324.confidential = true;
          obj256.mutable = true;
          sourceObject = obj256;
          obj256.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_325 = function() {
            return this.data["canvasWidth"];
          }
          obj256.methods["canvasWidth"] = reader_kitty_canvasWidth_325;
          obj256.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_325 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj256.methods["canvasWidth:="] = writer_kitty_canvasWidth_325;
          reader_kitty_canvasWidth_325.confidential = true;
          writer_kitty_canvasWidth_325.confidential = true;
          obj256.mutable = true;
          sourceObject = obj256;
          obj256.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_326 = function() {
            return this.data["canvasHeight"];
          }
          obj256.methods["canvasHeight"] = reader_kitty_canvasHeight_326;
          obj256.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_326 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj256.methods["canvasHeight:="] = writer_kitty_canvasHeight_326;
          reader_kitty_canvasHeight_326.confidential = true;
          writer_kitty_canvasHeight_326.confidential = true;
          obj256.mutable = true;
          sourceObject = obj256;
          lineNumber = 118
          var call327 = callmethod(var_collections,"list", [0]);
          var call328 = callmethod(call327,"new", [0]);
          obj256.data["entities"] = call328;
          var reader_kitty_entities_329 = function() {
            return this.data["entities"];
          }
          obj256.methods["entities"] = reader_kitty_entities_329;
          obj256.data["entities"] = call328;
          var writer_kitty_entities_329 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj256.methods["entities:="] = writer_kitty_entities_329;
          reader_kitty_entities_329.confidential = true;
          writer_kitty_entities_329.confidential = true;
          lineNumber = 120;
          moduleName = "kitty";
          lineNumber = 118
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call328)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj256.mutable = true;
          sourceObject = obj256;
          lineNumber = 120
          var bool330 = new GraceBoolean(false)
          obj256.data["isInit"] = bool330;
          var reader_kitty_isInit_331 = function() {
            return this.data["isInit"];
          }
          obj256.methods["isInit"] = reader_kitty_isInit_331;
          obj256.data["isInit"] = bool330;
          var writer_kitty_isInit_331 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj256.methods["isInit:="] = writer_kitty_isInit_331;
          reader_kitty_isInit_331.confidential = true;
          writer_kitty_isInit_331.confidential = true;
          lineNumber = 122;
          moduleName = "kitty";
          lineNumber = 120
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool330)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj256.mutable = true;
          sourceObject = obj256;
          obj256.data["mctx"] = undefined;
          var reader_kitty_mctx_332 = function() {
            return this.data["mctx"];
          }
          obj256.methods["mctx"] = reader_kitty_mctx_332;
          obj256.data["mctx"] = undefined;
          var writer_kitty_mctx_332 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj256.methods["mctx:="] = writer_kitty_mctx_332;
          reader_kitty_mctx_332.confidential = true;
          writer_kitty_mctx_332.confidential = true;
          obj256.mutable = true;
          sourceObject = obj256;
          lineNumber = 124
          onSelf = true;
          var call333 = callmethod(this, "init", [0]);
          sourceObject = obj256;
          sourceObject = obj256;
          sourceObject = obj256;
          sourceObject = obj256;
          sourceObject = obj256;
          sourceObject = obj256;
          lineNumber = 172
          var string334 = new GraceString("WORLD CREATED");
          var call335 = Grace_print(string334);
          superDepth = origSuperDepth;
        }
        obj_init_256.apply(obj256, []);
        return obj256
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
    obj253.methods["new"] = func255;
    func255.definitionLine = 102;
    func255.definitionModule = "kitty";
    var func336 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj337 = Grace_allocObject();
        obj337.definitionModule = "kitty";
        obj337.definitionLine = 102;
        var inho337 = inheritingObject;
        while (inho337.superobj) inho337 = inho337.superobj;
        inho337.superobj = obj337;
        obj337.data = inheritingObject.data;
        obj337.outer = this;
        var reader_kitty_outer_338 = function() {
          return this.outer;
        }
        obj337.methods["outer"] = reader_kitty_outer_338;
        function obj_init_337() {
          var origSuperDepth = superDepth;
          superDepth = obj337;
          obj337.annotations = [];
          var func339 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func339.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 129
              var string340 = new GraceString("INITIALIZING WORLD...");
              var call341 = Grace_print(string340);
              lineNumber = 135
              var if342 = var_done;
              lineNumber = 131
              onSelf = true;
              var call343 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call343)) {
                lineNumber = 133
                return var_done
              }
              lineNumber = 136
              lineNumber = 118
              lineNumber = 135
              var call344 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call345 = callmethod(this, "document:=", [1], call344);
              lineNumber = 136
              lineNumber = 135
              lineNumber = 136
              var string346 = new GraceString("standard-canvas");
              onSelf = true;
              var call347 = callmethod(this, "document", [0]);
              var call348 = callmethod(call347,"getElementById", [1], string346);
              onSelf = true;
              var call349 = callmethod(this, "canvas:=", [1], call348);
              lineNumber = 138
              lineNumber = 135
              lineNumber = 137
              onSelf = true;
              var call350 = callmethod(this, "canvas", [0]);
              var call351 = callmethod(call350,"width", [0]);
              onSelf = true;
              var call352 = callmethod(this, "canvasWidth:=", [1], call351);
              lineNumber = 140
              lineNumber = 137
              lineNumber = 138
              onSelf = true;
              var call353 = callmethod(this, "canvas", [0]);
              var call354 = callmethod(call353,"height", [0]);
              onSelf = true;
              var call355 = callmethod(this, "canvasHeight:=", [1], call354);
              lineNumber = 141
              lineNumber = 138
              lineNumber = 140
              var bool356 = new GraceBoolean(true)
              onSelf = true;
              var call357 = callmethod(this, "isInit:=", [1], bool356);
              lineNumber = 141
              var string358 = new GraceString("INITIALIZATION FINISHED");
              var call359 = Grace_print(string358);
              return call359
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func339.paramCounts = [
            0,
          ];
          func339.variableArities = [
            false,
          ];
          obj337.methods["init"] = func339;
          func339.definitionLine = 127;
          func339.definitionModule = "kitty";
          var func360 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func360.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 145
              lineNumber = 138
              lineNumber = 145
              var string361 = new GraceString("canvas");
              var call362 = callmethod(var_dom,"document", [0]);
              var call363 = callmethod(call362,"createElement", [1], string361);
              onSelf = true;
              var call364 = callmethod(this, "backingCanvas:=", [1], call363);
              lineNumber = 147
              lineNumber = 145
              lineNumber = 146
              onSelf = true;
              var call365 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call366 = callmethod(this, "backingCanvas", [0]);
              var call367 = callmethod(call366,"height:=", [1], call365);
              lineNumber = 148
              lineNumber = 145
              lineNumber = 147
              onSelf = true;
              var call368 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call369 = callmethod(this, "backingCanvas", [0]);
              var call370 = callmethod(call369,"width:=", [1], call368);
              lineNumber = 148
              lineNumber = 145
              lineNumber = 148
              var string371 = new GraceString("2d");
              onSelf = true;
              var call372 = callmethod(this, "backingCanvas", [0]);
              var call373 = callmethod(call372,"getContext", [1], string371);
              onSelf = true;
              var call374 = callmethod(this, "backingContext:=", [1], call373);
              lineNumber = 149
              lineNumber = 145
              lineNumber = 149
              var string375 = new GraceString("2d");
              onSelf = true;
              var call376 = callmethod(this, "canvas", [0]);
              var call377 = callmethod(call376,"getCanvas", [0]);
              var call378 = callmethod(call377,"getContext", [1], string375);
              onSelf = true;
              var call379 = callmethod(this, "mctx:=", [1], call378);
              return call379
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
          obj337.methods["start"] = func360;
          func360.definitionLine = 144;
          func360.definitionModule = "kitty";
          var func380 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func380.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 153
              var string381 = new GraceString("UPDATING WORLD...");
              var call382 = Grace_print(string381);
              lineNumber = 155
              lineNumber = 149
              lineNumber = 154
              onSelf = true;
              var call383 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call384 = callmethod(this, "mctx", [0]);
              var call385 = callmethod(call384,"fillStyle:=", [1], call383);
              lineNumber = 155
              onSelf = true;
              var call386 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call387 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call388 = callmethod(this, "mctx", [0]);
              var call389 = callmethod(call388,"fillRect", [4], new GraceNum(0), new GraceNum(0), call386, call387);
              lineNumber = 158
              var string390 = new GraceString("WORLD UPDATED");
              var call391 = Grace_print(string390);
              return call391
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
          obj337.methods["update"] = func380;
          func380.definitionLine = 152;
          func380.definitionModule = "kitty";
          var func392 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func392.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 166
              lineNumber = 149
              lineNumber = 165
              onSelf = true;
              var call393 = callmethod(this, "background:=", [1], var_background__39__);
              return call393
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
          obj337.methods["setBackground"] = func392;
          func392.definitionLine = 164;
          func392.definitionModule = "kitty";
          var func394 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func394.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 169
              onSelf = true;
              var call395 = callmethod(this, "entities", [0]);
              var call396 = callmethod(call395,"add", [1], var_e);
              return call396
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func394.paramTypes = [];
          func394.paramTypes.push([]);
          func394.paramCounts = [
            1,
          ];
          func394.variableArities = [
            false,
          ];
          obj337.methods["addEntity"] = func394;
          func394.definitionLine = 168;
          func394.definitionModule = "kitty";
          sourceObject = obj337;
          lineNumber = 104
          var string397 = new GraceString("CREATING NEW WORLD...");
          var call398 = Grace_print(string397);
          sourceObject = obj337;
          obj337.data["background"] = undefined;
          var reader_kitty_background_399 = function() {
            return this.data["background"];
          }
          obj337.methods["background"] = reader_kitty_background_399;
          obj337.data["background"] = undefined;
          var writer_kitty_background_399 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj337.methods["background:="] = writer_kitty_background_399;
          reader_kitty_background_399.confidential = true;
          writer_kitty_background_399.confidential = true;
          obj337.mutable = true;
          sourceObject = obj337;
          lineNumber = 107
          var string400 = new GraceString("black");
          obj337.data["backgroundColour"] = string400;
          var reader_kitty_backgroundColour_401 = function() {
            return this.data["backgroundColour"];
          }
          obj337.methods["backgroundColour"] = reader_kitty_backgroundColour_401;
          obj337.data["backgroundColour"] = string400;
          var writer_kitty_backgroundColour_401 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj337.methods["backgroundColour:="] = writer_kitty_backgroundColour_401;
          reader_kitty_backgroundColour_401.confidential = true;
          writer_kitty_backgroundColour_401.confidential = true;
          lineNumber = 109;
          moduleName = "kitty";
          lineNumber = 107
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string400)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj337.mutable = true;
          sourceObject = obj337;
          obj337.data["document"] = undefined;
          var reader_kitty_document_402 = function() {
            return this.data["document"];
          }
          obj337.methods["document"] = reader_kitty_document_402;
          obj337.data["document"] = undefined;
          var writer_kitty_document_402 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj337.methods["document:="] = writer_kitty_document_402;
          reader_kitty_document_402.confidential = true;
          writer_kitty_document_402.confidential = true;
          obj337.mutable = true;
          sourceObject = obj337;
          obj337.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_403 = function() {
            return this.data["backingCanvas"];
          }
          obj337.methods["backingCanvas"] = reader_kitty_backingCanvas_403;
          obj337.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_403 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj337.methods["backingCanvas:="] = writer_kitty_backingCanvas_403;
          reader_kitty_backingCanvas_403.confidential = true;
          writer_kitty_backingCanvas_403.confidential = true;
          obj337.mutable = true;
          sourceObject = obj337;
          obj337.data["backingContext"] = undefined;
          var reader_kitty_backingContext_404 = function() {
            return this.data["backingContext"];
          }
          obj337.methods["backingContext"] = reader_kitty_backingContext_404;
          obj337.data["backingContext"] = undefined;
          var writer_kitty_backingContext_404 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj337.methods["backingContext:="] = writer_kitty_backingContext_404;
          reader_kitty_backingContext_404.confidential = true;
          writer_kitty_backingContext_404.confidential = true;
          obj337.mutable = true;
          sourceObject = obj337;
          obj337.data["canvas"] = undefined;
          var reader_kitty_canvas_405 = function() {
            return this.data["canvas"];
          }
          obj337.methods["canvas"] = reader_kitty_canvas_405;
          obj337.data["canvas"] = undefined;
          var writer_kitty_canvas_405 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj337.methods["canvas:="] = writer_kitty_canvas_405;
          reader_kitty_canvas_405.confidential = true;
          writer_kitty_canvas_405.confidential = true;
          obj337.mutable = true;
          sourceObject = obj337;
          obj337.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_406 = function() {
            return this.data["canvasWidth"];
          }
          obj337.methods["canvasWidth"] = reader_kitty_canvasWidth_406;
          obj337.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_406 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj337.methods["canvasWidth:="] = writer_kitty_canvasWidth_406;
          reader_kitty_canvasWidth_406.confidential = true;
          writer_kitty_canvasWidth_406.confidential = true;
          obj337.mutable = true;
          sourceObject = obj337;
          obj337.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_407 = function() {
            return this.data["canvasHeight"];
          }
          obj337.methods["canvasHeight"] = reader_kitty_canvasHeight_407;
          obj337.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_407 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj337.methods["canvasHeight:="] = writer_kitty_canvasHeight_407;
          reader_kitty_canvasHeight_407.confidential = true;
          writer_kitty_canvasHeight_407.confidential = true;
          obj337.mutable = true;
          sourceObject = obj337;
          lineNumber = 118
          var call408 = callmethod(var_collections,"list", [0]);
          var call409 = callmethod(call408,"new", [0]);
          obj337.data["entities"] = call409;
          var reader_kitty_entities_410 = function() {
            return this.data["entities"];
          }
          obj337.methods["entities"] = reader_kitty_entities_410;
          obj337.data["entities"] = call409;
          var writer_kitty_entities_410 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj337.methods["entities:="] = writer_kitty_entities_410;
          reader_kitty_entities_410.confidential = true;
          writer_kitty_entities_410.confidential = true;
          lineNumber = 120;
          moduleName = "kitty";
          lineNumber = 118
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call409)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj337.mutable = true;
          sourceObject = obj337;
          lineNumber = 120
          var bool411 = new GraceBoolean(false)
          obj337.data["isInit"] = bool411;
          var reader_kitty_isInit_412 = function() {
            return this.data["isInit"];
          }
          obj337.methods["isInit"] = reader_kitty_isInit_412;
          obj337.data["isInit"] = bool411;
          var writer_kitty_isInit_412 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj337.methods["isInit:="] = writer_kitty_isInit_412;
          reader_kitty_isInit_412.confidential = true;
          writer_kitty_isInit_412.confidential = true;
          lineNumber = 122;
          moduleName = "kitty";
          lineNumber = 120
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool411)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj337.mutable = true;
          sourceObject = obj337;
          obj337.data["mctx"] = undefined;
          var reader_kitty_mctx_413 = function() {
            return this.data["mctx"];
          }
          obj337.methods["mctx"] = reader_kitty_mctx_413;
          obj337.data["mctx"] = undefined;
          var writer_kitty_mctx_413 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj337.methods["mctx:="] = writer_kitty_mctx_413;
          reader_kitty_mctx_413.confidential = true;
          writer_kitty_mctx_413.confidential = true;
          obj337.mutable = true;
          sourceObject = obj337;
          lineNumber = 124
          onSelf = true;
          var call414 = callmethod(this, "init", [0]);
          sourceObject = obj337;
          sourceObject = obj337;
          sourceObject = obj337;
          sourceObject = obj337;
          sourceObject = obj337;
          sourceObject = obj337;
          lineNumber = 172
          var string415 = new GraceString("WORLD CREATED");
          var call416 = Grace_print(string415);
          superDepth = origSuperDepth;
        }
        obj_init_337.apply(inheritingObject, []);
        return obj337
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj253.methods["new()object"] = func336;
    var func417 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 102
        var string418 = new GraceString("class KittyWorld");
        return string418
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func417.paramCounts = [
    ];
    func417.variableArities = [
    ];
    obj253.methods["asDebugString"] = func417;
    func417.definitionLine = 102;
    func417.definitionModule = "kitty";
    sourceObject = obj253;
    sourceObject = obj253;
    superDepth = origSuperDepth;
  }
  obj_init_253.apply(obj253, []);
  var var_KittyWorld = obj253;
  lineNumber = 175
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
'dom',
'StandardPrelude',
];
if (gctCache)
  gctCache['kitty'] = "path:\n kitty\nconstructors-of:KittyImage:\n new\nfresh:Entity:\n start\n getRotation\n rotation\n getX\n getY\n rotation:=\n posX:=\n posY:=\n update\n setLocation\n onDestroy\n awake\n posX\n posY\nconfidential:\nclasses:\n KittyImage\n KittyEntity\n KittyWorld\nconstructors-of:KittyWorld:\n new\nfresh:Image:\n draw\n height:=\n imgTag\n width\n height\n width:=\nmodules:\n StandardPrelude\n mgcollections\nmethods-of:KittyEntity.new:\n start\n rotation\n getRotation\n getX\n getY\n onDestroy\n posX:=\n posY:=\n update\n setLocation\n rotation:=\n awake\n posX\n posY\nfresh-methods:\n Image\n Entity\n World\npublic:\n m_world\n m_world:=\n start\n stop\n setWorld\n KittyImage\n Image\n KittyEntity\n Entity\n KittyWorld\n World\nmethods-of:KittyImage.new:\n draw\n width\n height\n height:=\n imgTag\n width:=\nmethods-of:KittyWorld.new:\n init\n canvas:=\n backingContext\n canvasHeight\n background:=\n mctx\n canvasWidth\n background\n backingCanvas:=\n backgroundColour\n setBackground\n isInit:=\n backingCanvas\n start\n isInit\n mctx:=\n document:=\n canvas\n entities:=\n document\n update\n entities\n addEntity\n canvasWidth:=\n backgroundColour:=\n backingContext:=\n canvasHeight:=\nfresh:World:\n backingContext\n canvas:=\n backgroundColour\n canvasHeight\n background:=\n entities:=\n canvasWidth\n background\n backingCanvas:=\n init\n canvasHeight:=\n isInit:=\n backingCanvas\n start\n isInit\n mctx:=\n document:=\n canvas\n mctx\n document\n update\n entities\n addEntity\n canvasWidth:=\n backingContext:=\n backgroundColour:=\n setBackground\nconstructors-of:KittyEntity:\n new\n";
if (originalSourceLines) {
  originalSourceLines["kitty"] = [
    "import \"mgcollections\" as collections",
    "import \"dom\" as dom",
    "",
    "import \"StandardPrelude\" as sp",
    "inherits sp.new",
    "",
    "// Main class for game library",
    "var m_world",
    "",
    "method start {",
    "    print \"STARTING...\"",
    "}",
    "",
    "method stop {",
    "    print \"STOPPING...\"",
    "}",
    "",
    "method setWorld(world') {",
    "    m_world := world'",
    "}",
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
    "    awake",
    "",
    "    var posX := x'",
    "    var posY := y'",
    "    var rotation := 0",
    "",
    "    // Called on creation",
    "    method awake {",
    "        print \"awake\"",
    "    }",
    "",
    "    // Called on game start",
    "    method start {",
    "        print \"start\"",
    "    }",
    "",
    "    // Called by main game class",
    "    method update {",
    "",
    "    }",
    "",
    "    // Called on class destructor",
    "    method onDestroy {",
    "",
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
    "            return",
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
    "    method start {",
    "        backingCanvas := dom.document.createElement(\"canvas\")",
    "        backingCanvas.height := canvasHeight",
    "        backingCanvas.width := canvasWidth",
    "        backingContext := backingCanvas.getContext(\"2d\")",
    "        mctx := canvas.getCanvas.getContext(\"2d\")",
    "    }",
    "",
    "    method update {",
    "        print \"UPDATING WORLD...\"",
    "        mctx.fillStyle := backgroundColour",
    "        mctx.fillRect(0, 0, canvasWidth, canvasHeight)",
    "        // mctx.drawImage(backingCanvas, 0, 0)",
    "        // background.draw(mctx)",
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
    "    method addEntity(e: Entity) {",
    "        return entities.add(e)",
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
    "// TEST SECTION //",
    "",
    "// def foo = World.new(100, 100)",
    "// def bar = Entity.new(10, 10)",
    "// foo.addEntity(bar)",
  ];
}
