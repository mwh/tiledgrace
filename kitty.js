function gracecode_kitty () {
  this.definitionModule = "kitty";
  this.definitionLine = 0;
  lineNumber = 9
  var func0 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func0.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 10
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
  func0.definitionLine = 9;
  func0.definitionModule = "kitty";
  lineNumber = 13
  var func3 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func3.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 14
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
  func3.definitionLine = 13;
  func3.definitionModule = "kitty";
  lineNumber = 17
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
      lineNumber = 19
      lineNumber = 18
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
  func6.definitionLine = 17;
  func6.definitionModule = "kitty";
  lineNumber = 43
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
      lineNumber = 44
      var obj8 = Grace_allocObject();
      obj8.definitionModule = "kitty";
      obj8.definitionLine = 44;
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
        lineNumber = 45
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
  func7.definitionLine = 43;
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
      obj12.definitionLine = 44;
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
  lineNumber = 109
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
      lineNumber = 110
      var obj16 = Grace_allocObject();
      obj16.definitionModule = "kitty";
      obj16.definitionLine = 110;
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
        lineNumber = 111
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
  func15.definitionLine = 109;
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
      obj20.definitionLine = 110;
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
  lineNumber = 198
  var func23 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func23.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (World)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 199
      var obj24 = Grace_allocObject();
      obj24.definitionModule = "kitty";
      obj24.definitionLine = 199;
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
        lineNumber = 200
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
  func23.definitionLine = 198;
  func23.definitionModule = "kitty";
  var func27 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj28 = Grace_allocObject();
      obj28.definitionModule = "kitty";
      obj28.definitionLine = 199;
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
  lineNumber = 3
  // Import of StandardPrelude
  if (typeof gracecode_StandardPrelude == 'undefined')
    throw new GraceExceptionPacket(RuntimeErrorObject, 
      new GraceString('could not find module sp'));
  var var_sp = do_import("StandardPrelude", gracecode_StandardPrelude);
  lineNumber = 4
  var call31 = callmethod(var_sp,"methods()object", [0, 1], this);
  this.superobj = call31;
  this.data = call31.data;
  this._value = call31._value;
  lineNumber = 7
  lineNumber = 9
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
  lineNumber = 9
  lineNumber = 13
  lineNumber = 17
  lineNumber = 21
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
  func34.definitionLine = 21;
  func34.definitionModule = "kitty";
  var obj35 = Grace_allocObject();
  obj35.definitionModule = "kitty";
  obj35.definitionLine = 21;
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
        obj38.definitionLine = 21;
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
              lineNumber = 31
              var string41 = new GraceString("...");
              onSelf = true;
              var call43 = callmethod(this, "imgTag", [0]);
              var call44 = callmethod(call43,"src", [0]);
              var string46 = new GraceString("DRAWING IMAGE: ");
              var opresult48 = callmethod(string46, "++", [1], call44);
              var opresult50 = callmethod(opresult48, "++", [1], string41);
              var call51 = Grace_print(opresult50);
              lineNumber = 32
              var call52 = callmethod(var_ctx__39__,"save", [0]);
              lineNumber = 33
              var call53 = callmethod(var_ctx__39__,"translate", [2], new GraceNum(0), new GraceNum(0));
              lineNumber = 34
              var opresult58 = callmethod(new GraceNum(180), "+", [1], new GraceNum(180));
              var call59 = callmethod(opresult58,"prefix-", [0]);
              var quotient61 = callmethod(call59, "/", [1], new GraceNum(180));
              var prod63 = callmethod(quotient61, "*", [1], new GraceNum(3.1415));
              var call64 = callmethod(var_ctx__39__,"rotate", [1], prod63);
              lineNumber = 35
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
              lineNumber = 36
              var call79 = callmethod(var_ctx__39__,"restore", [0]);
              lineNumber = 37
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
          func40.definitionLine = 30;
          func40.definitionModule = "kitty";
          sourceObject = obj38;
          lineNumber = 23
          var string91 = new GraceString("...");
          var string94 = new GraceString("CREATING NEW IMAGE: ");
          var opresult96 = callmethod(string94, "++", [1], var_url__39__);
          var opresult98 = callmethod(opresult96, "++", [1], string91);
          var call99 = Grace_print(opresult98);
          sourceObject = obj38;
          lineNumber = 24
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
          lineNumber = 24;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call102)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj38;
          lineNumber = 27
          lineNumber = 24
          lineNumber = 25
          onSelf = true;
          var call104 = callmethod(this, "imgTag", [0]);
          var call105 = callmethod(call104,"src:=", [1], var_url__39__);
          sourceObject = obj38;
          lineNumber = 27
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
          lineNumber = 28;
          moduleName = "kitty";
          lineNumber = 27
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(64))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj38.mutable = true;
          sourceObject = obj38;
          lineNumber = 28
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
          lineNumber = 30;
          moduleName = "kitty";
          lineNumber = 28
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(64))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj38.mutable = true;
          sourceObject = obj38;
          sourceObject = obj38;
          lineNumber = 40
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
    func37.definitionLine = 21;
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
        obj118.definitionLine = 21;
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
              lineNumber = 31
              var string121 = new GraceString("...");
              onSelf = true;
              var call123 = callmethod(this, "imgTag", [0]);
              var call124 = callmethod(call123,"src", [0]);
              var string126 = new GraceString("DRAWING IMAGE: ");
              var opresult128 = callmethod(string126, "++", [1], call124);
              var opresult130 = callmethod(opresult128, "++", [1], string121);
              var call131 = Grace_print(opresult130);
              lineNumber = 32
              var call132 = callmethod(var_ctx__39__,"save", [0]);
              lineNumber = 33
              var call133 = callmethod(var_ctx__39__,"translate", [2], new GraceNum(0), new GraceNum(0));
              lineNumber = 34
              var opresult138 = callmethod(new GraceNum(180), "+", [1], new GraceNum(180));
              var call139 = callmethod(opresult138,"prefix-", [0]);
              var quotient141 = callmethod(call139, "/", [1], new GraceNum(180));
              var prod143 = callmethod(quotient141, "*", [1], new GraceNum(3.1415));
              var call144 = callmethod(var_ctx__39__,"rotate", [1], prod143);
              lineNumber = 35
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
              lineNumber = 36
              var call159 = callmethod(var_ctx__39__,"restore", [0]);
              lineNumber = 37
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
          func120.definitionLine = 30;
          func120.definitionModule = "kitty";
          sourceObject = obj118;
          lineNumber = 23
          var string171 = new GraceString("...");
          var string174 = new GraceString("CREATING NEW IMAGE: ");
          var opresult176 = callmethod(string174, "++", [1], var_url__39__);
          var opresult178 = callmethod(opresult176, "++", [1], string171);
          var call179 = Grace_print(opresult178);
          sourceObject = obj118;
          lineNumber = 24
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
          lineNumber = 24;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call182)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj118;
          lineNumber = 27
          lineNumber = 24
          lineNumber = 25
          onSelf = true;
          var call184 = callmethod(this, "imgTag", [0]);
          var call185 = callmethod(call184,"src:=", [1], var_url__39__);
          sourceObject = obj118;
          lineNumber = 27
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
          lineNumber = 28;
          moduleName = "kitty";
          lineNumber = 27
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(64))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj118.mutable = true;
          sourceObject = obj118;
          lineNumber = 28
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
          lineNumber = 30;
          moduleName = "kitty";
          lineNumber = 28
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(64))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj118.mutable = true;
          sourceObject = obj118;
          sourceObject = obj118;
          lineNumber = 40
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
        lineNumber = 21
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
    func197.definitionLine = 21;
    func197.definitionModule = "kitty";
    sourceObject = obj35;
    sourceObject = obj35;
    superDepth = origSuperDepth;
  }
  obj_init_35.apply(obj35, []);
  var var_KittyImage = obj35;
  lineNumber = 43
  lineNumber = 49
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
  func199.definitionLine = 49;
  func199.definitionModule = "kitty";
  var obj200 = Grace_allocObject();
  obj200.definitionModule = "kitty";
  obj200.definitionLine = 49;
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
        obj203.definitionLine = 49;
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
              return var_done
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
          func205.definitionLine = 62;
          func205.definitionModule = "kitty";
          var func206 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func206.paramCounts[0])
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
          func206.paramCounts = [
            0,
          ];
          func206.variableArities = [
            false,
          ];
          obj203.methods["start"] = func206;
          func206.definitionLine = 67;
          func206.definitionModule = "kitty";
          var func207 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func207.paramCounts[0])
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
          func207.paramCounts = [
            0,
          ];
          func207.variableArities = [
            false,
          ];
          obj203.methods["update"] = func207;
          func207.definitionLine = 72;
          func207.definitionModule = "kitty";
          var func208 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func208.paramCounts[0])
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
          func208.paramCounts = [
            0,
          ];
          func208.variableArities = [
            false,
          ];
          obj203.methods["onDestroy"] = func208;
          func208.definitionLine = 77;
          func208.definitionModule = "kitty";
          var func209 = function(argcv) {
            var curarg = 1;
            var var_ctx__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func209.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 82
              onSelf = true;
              var call210 = callmethod(this, "image", [0]);
              var call211 = callmethod(call210,"draw", [1], var_ctx__39__);
              return call211
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func209.paramCounts = [
            1,
          ];
          func209.variableArities = [
            false,
          ];
          obj203.methods["draw"] = func209;
          func209.definitionLine = 81;
          func209.definitionModule = "kitty";
          var func212 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func212.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 87
              lineNumber = 49
              lineNumber = 86
              onSelf = true;
              var call213 = callmethod(this, "image:=", [1], var_image__39__);
              return call213
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func212.paramTypes = [];
          func212.paramTypes.push([]);
          func212.paramCounts = [
            1,
          ];
          func212.variableArities = [
            false,
          ];
          obj203.methods["setImage"] = func212;
          func212.definitionLine = 85;
          func212.definitionModule = "kitty";
          var func214 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func214.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 91
              lineNumber = 49
              lineNumber = 90
              onSelf = true;
              var call215 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 92
              lineNumber = 49
              lineNumber = 91
              onSelf = true;
              var call216 = callmethod(this, "posY:=", [1], var_y);
              return call216
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func214.paramCounts = [
            2,
          ];
          func214.variableArities = [
            false,
          ];
          obj203.methods["setLocation"] = func214;
          func214.definitionLine = 89;
          func214.definitionModule = "kitty";
          var func217 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func217.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 96
              lineNumber = 95
              onSelf = true;
              var call218 = callmethod(this, "posX", [0]);
              return call218
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
          obj203.methods["getX"] = func217;
          func217.definitionLine = 94;
          func217.definitionModule = "kitty";
          var func219 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func219.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 100
              lineNumber = 99
              onSelf = true;
              var call220 = callmethod(this, "posY", [0]);
              return call220
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
          obj203.methods["getY"] = func219;
          func219.definitionLine = 98;
          func219.definitionModule = "kitty";
          var func221 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func221.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 104
              lineNumber = 103
              onSelf = true;
              var call222 = callmethod(this, "rotation", [0]);
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
          obj203.methods["getRotation"] = func221;
          func221.definitionLine = 102;
          func221.definitionModule = "kitty";
          sourceObject = obj203;
          lineNumber = 51
          var string223 = new GraceString(")...");
          var string226 = new GraceString(", ");
          var string229 = new GraceString("CREATING ENTITY AT (");
          var opresult231 = callmethod(string229, "++", [1], var_x__39__);
          var opresult233 = callmethod(opresult231, "++", [1], string226);
          var opresult235 = callmethod(opresult233, "++", [1], var_y__39__);
          var opresult237 = callmethod(opresult235, "++", [1], string223);
          var call238 = Grace_print(opresult237);
          sourceObject = obj203;
          lineNumber = 53
          obj203.data["posX"] = var_x__39__;
          var reader_kitty_posX_239 = function() {
            return this.data["posX"];
          }
          obj203.methods["posX"] = reader_kitty_posX_239;
          obj203.data["posX"] = var_x__39__;
          var writer_kitty_posX_239 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj203.methods["posX:="] = writer_kitty_posX_239;
          reader_kitty_posX_239.confidential = true;
          writer_kitty_posX_239.confidential = true;
          lineNumber = 54;
          moduleName = "kitty";
          lineNumber = 53
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj203.mutable = true;
          sourceObject = obj203;
          lineNumber = 54
          obj203.data["posY"] = var_y__39__;
          var reader_kitty_posY_240 = function() {
            return this.data["posY"];
          }
          obj203.methods["posY"] = reader_kitty_posY_240;
          obj203.data["posY"] = var_y__39__;
          var writer_kitty_posY_240 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj203.methods["posY:="] = writer_kitty_posY_240;
          reader_kitty_posY_240.confidential = true;
          writer_kitty_posY_240.confidential = true;
          lineNumber = 55;
          moduleName = "kitty";
          lineNumber = 54
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj203.mutable = true;
          sourceObject = obj203;
          lineNumber = 55
          obj203.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_241 = function() {
            return this.data["rotation"];
          }
          obj203.methods["rotation"] = reader_kitty_rotation_241;
          obj203.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_241 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj203.methods["rotation:="] = writer_kitty_rotation_241;
          reader_kitty_rotation_241.confidential = true;
          writer_kitty_rotation_241.confidential = true;
          lineNumber = 57;
          moduleName = "kitty";
          lineNumber = 55
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj203.mutable = true;
          sourceObject = obj203;
          obj203.data["image"] = undefined;
          var reader_kitty_image_242 = function() {
            return this.data["image"];
          }
          obj203.methods["image"] = reader_kitty_image_242;
          obj203.data["image"] = undefined;
          var writer_kitty_image_242 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj203.methods["image:="] = writer_kitty_image_242;
          reader_kitty_image_242.confidential = true;
          writer_kitty_image_242.confidential = true;
          obj203.mutable = true;
          sourceObject = obj203;
          lineNumber = 59
          onSelf = true;
          var call243 = callmethod(this, "awake", [0]);
          sourceObject = obj203;
          sourceObject = obj203;
          sourceObject = obj203;
          sourceObject = obj203;
          sourceObject = obj203;
          sourceObject = obj203;
          sourceObject = obj203;
          sourceObject = obj203;
          sourceObject = obj203;
          sourceObject = obj203;
          sourceObject = obj203;
          lineNumber = 106
          var string244 = new GraceString("ENTITY CREATED");
          var call245 = Grace_print(string244);
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
    func202.definitionLine = 49;
    func202.definitionModule = "kitty";
    var func246 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj247 = Grace_allocObject();
        obj247.definitionModule = "kitty";
        obj247.definitionLine = 49;
        var inho247 = inheritingObject;
        while (inho247.superobj) inho247 = inho247.superobj;
        inho247.superobj = obj247;
        obj247.data = inheritingObject.data;
        obj247.outer = this;
        var reader_kitty_outer_248 = function() {
          return this.outer;
        }
        obj247.methods["outer"] = reader_kitty_outer_248;
        function obj_init_247() {
          var origSuperDepth = superDepth;
          superDepth = obj247;
          obj247.annotations = [];
          var func249 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func249.paramCounts[0])
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
          func249.paramCounts = [
            0,
          ];
          func249.variableArities = [
            false,
          ];
          obj247.methods["awake"] = func249;
          func249.definitionLine = 62;
          func249.definitionModule = "kitty";
          var func250 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func250.paramCounts[0])
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
          func250.paramCounts = [
            0,
          ];
          func250.variableArities = [
            false,
          ];
          obj247.methods["start"] = func250;
          func250.definitionLine = 67;
          func250.definitionModule = "kitty";
          var func251 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func251.paramCounts[0])
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
          func251.paramCounts = [
            0,
          ];
          func251.variableArities = [
            false,
          ];
          obj247.methods["update"] = func251;
          func251.definitionLine = 72;
          func251.definitionModule = "kitty";
          var func252 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func252.paramCounts[0])
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
          func252.paramCounts = [
            0,
          ];
          func252.variableArities = [
            false,
          ];
          obj247.methods["onDestroy"] = func252;
          func252.definitionLine = 77;
          func252.definitionModule = "kitty";
          var func253 = function(argcv) {
            var curarg = 1;
            var var_ctx__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func253.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 82
              onSelf = true;
              var call254 = callmethod(this, "image", [0]);
              var call255 = callmethod(call254,"draw", [1], var_ctx__39__);
              return call255
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
          obj247.methods["draw"] = func253;
          func253.definitionLine = 81;
          func253.definitionModule = "kitty";
          var func256 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func256.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 87
              lineNumber = 49
              lineNumber = 86
              onSelf = true;
              var call257 = callmethod(this, "image:=", [1], var_image__39__);
              return call257
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func256.paramTypes = [];
          func256.paramTypes.push([]);
          func256.paramCounts = [
            1,
          ];
          func256.variableArities = [
            false,
          ];
          obj247.methods["setImage"] = func256;
          func256.definitionLine = 85;
          func256.definitionModule = "kitty";
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
              lineNumber = 91
              lineNumber = 49
              lineNumber = 90
              onSelf = true;
              var call259 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 92
              lineNumber = 49
              lineNumber = 91
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
          obj247.methods["setLocation"] = func258;
          func258.definitionLine = 89;
          func258.definitionModule = "kitty";
          var func261 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func261.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 96
              lineNumber = 95
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
          obj247.methods["getX"] = func261;
          func261.definitionLine = 94;
          func261.definitionModule = "kitty";
          var func263 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func263.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 100
              lineNumber = 99
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
          obj247.methods["getY"] = func263;
          func263.definitionLine = 98;
          func263.definitionModule = "kitty";
          var func265 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func265.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 104
              lineNumber = 103
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
          obj247.methods["getRotation"] = func265;
          func265.definitionLine = 102;
          func265.definitionModule = "kitty";
          sourceObject = obj247;
          lineNumber = 51
          var string267 = new GraceString(")...");
          var string270 = new GraceString(", ");
          var string273 = new GraceString("CREATING ENTITY AT (");
          var opresult275 = callmethod(string273, "++", [1], var_x__39__);
          var opresult277 = callmethod(opresult275, "++", [1], string270);
          var opresult279 = callmethod(opresult277, "++", [1], var_y__39__);
          var opresult281 = callmethod(opresult279, "++", [1], string267);
          var call282 = Grace_print(opresult281);
          sourceObject = obj247;
          lineNumber = 53
          obj247.data["posX"] = var_x__39__;
          var reader_kitty_posX_283 = function() {
            return this.data["posX"];
          }
          obj247.methods["posX"] = reader_kitty_posX_283;
          obj247.data["posX"] = var_x__39__;
          var writer_kitty_posX_283 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj247.methods["posX:="] = writer_kitty_posX_283;
          reader_kitty_posX_283.confidential = true;
          writer_kitty_posX_283.confidential = true;
          lineNumber = 54;
          moduleName = "kitty";
          lineNumber = 53
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj247.mutable = true;
          sourceObject = obj247;
          lineNumber = 54
          obj247.data["posY"] = var_y__39__;
          var reader_kitty_posY_284 = function() {
            return this.data["posY"];
          }
          obj247.methods["posY"] = reader_kitty_posY_284;
          obj247.data["posY"] = var_y__39__;
          var writer_kitty_posY_284 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj247.methods["posY:="] = writer_kitty_posY_284;
          reader_kitty_posY_284.confidential = true;
          writer_kitty_posY_284.confidential = true;
          lineNumber = 55;
          moduleName = "kitty";
          lineNumber = 54
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj247.mutable = true;
          sourceObject = obj247;
          lineNumber = 55
          obj247.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_285 = function() {
            return this.data["rotation"];
          }
          obj247.methods["rotation"] = reader_kitty_rotation_285;
          obj247.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_285 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj247.methods["rotation:="] = writer_kitty_rotation_285;
          reader_kitty_rotation_285.confidential = true;
          writer_kitty_rotation_285.confidential = true;
          lineNumber = 57;
          moduleName = "kitty";
          lineNumber = 55
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj247.mutable = true;
          sourceObject = obj247;
          obj247.data["image"] = undefined;
          var reader_kitty_image_286 = function() {
            return this.data["image"];
          }
          obj247.methods["image"] = reader_kitty_image_286;
          obj247.data["image"] = undefined;
          var writer_kitty_image_286 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj247.methods["image:="] = writer_kitty_image_286;
          reader_kitty_image_286.confidential = true;
          writer_kitty_image_286.confidential = true;
          obj247.mutable = true;
          sourceObject = obj247;
          lineNumber = 59
          onSelf = true;
          var call287 = callmethod(this, "awake", [0]);
          sourceObject = obj247;
          sourceObject = obj247;
          sourceObject = obj247;
          sourceObject = obj247;
          sourceObject = obj247;
          sourceObject = obj247;
          sourceObject = obj247;
          sourceObject = obj247;
          sourceObject = obj247;
          sourceObject = obj247;
          sourceObject = obj247;
          lineNumber = 106
          var string288 = new GraceString("ENTITY CREATED");
          var call289 = Grace_print(string288);
          superDepth = origSuperDepth;
        }
        obj_init_247.apply(inheritingObject, []);
        return obj247
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj200.methods["new()object"] = func246;
    var func290 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 49
        var string291 = new GraceString("class KittyEntity");
        return string291
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func290.paramCounts = [
    ];
    func290.variableArities = [
    ];
    obj200.methods["asDebugString"] = func290;
    func290.definitionLine = 49;
    func290.definitionModule = "kitty";
    sourceObject = obj200;
    sourceObject = obj200;
    superDepth = origSuperDepth;
  }
  obj_init_200.apply(obj200, []);
  var var_KittyEntity = obj200;
  lineNumber = 109
  lineNumber = 115
  var func292 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func292.paramCounts[0])
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
  func292.paramCounts = [
    0,
  ];
  func292.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func292;
  func292.definitionLine = 115;
  func292.definitionModule = "kitty";
  var obj293 = Grace_allocObject();
  obj293.definitionModule = "kitty";
  obj293.definitionLine = 115;
  obj293.outer = this;
  var reader_kitty_outer_294 = function() {
    return this.outer;
  }
  obj293.methods["outer"] = reader_kitty_outer_294;
  function obj_init_293() {
    var origSuperDepth = superDepth;
    superDepth = obj293;
    obj293.annotations = [];
    var func295 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func295.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj296 = Grace_allocObject();
        obj296.definitionModule = "kitty";
        obj296.definitionLine = 115;
        obj296.outer = this;
        var reader_kitty_outer_297 = function() {
          return this.outer;
        }
        obj296.methods["outer"] = reader_kitty_outer_297;
        function obj_init_296() {
          var origSuperDepth = superDepth;
          superDepth = obj296;
          obj296.annotations = [];
          var func298 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func298.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 142
              var string299 = new GraceString("INITIALIZING WORLD...");
              var call300 = Grace_print(string299);
              lineNumber = 148
              var if301 = var_done;
              lineNumber = 144
              onSelf = true;
              var call302 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call302)) {
                lineNumber = 146
                lineNumber = 145
                var bool303 = new GraceBoolean(false)
                return bool303
              }
              lineNumber = 149
              lineNumber = 115
              lineNumber = 148
              var call304 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call305 = callmethod(this, "document:=", [1], call304);
              lineNumber = 149
              lineNumber = 148
              lineNumber = 149
              var string306 = new GraceString("standard-canvas");
              onSelf = true;
              var call307 = callmethod(this, "document", [0]);
              var call308 = callmethod(call307,"getElementById", [1], string306);
              onSelf = true;
              var call309 = callmethod(this, "canvas:=", [1], call308);
              lineNumber = 151
              lineNumber = 148
              lineNumber = 150
              onSelf = true;
              var call310 = callmethod(this, "canvas", [0]);
              var call311 = callmethod(call310,"width", [0]);
              onSelf = true;
              var call312 = callmethod(this, "canvasWidth:=", [1], call311);
              lineNumber = 153
              lineNumber = 150
              lineNumber = 151
              onSelf = true;
              var call313 = callmethod(this, "canvas", [0]);
              var call314 = callmethod(call313,"height", [0]);
              onSelf = true;
              var call315 = callmethod(this, "canvasHeight:=", [1], call314);
              lineNumber = 154
              lineNumber = 151
              lineNumber = 153
              var bool316 = new GraceBoolean(true)
              onSelf = true;
              var call317 = callmethod(this, "isInit:=", [1], bool316);
              lineNumber = 154
              var string318 = new GraceString("INITIALIZATION FINISHED");
              var call319 = Grace_print(string318);
              return call319
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func298.paramCounts = [
            0,
          ];
          func298.variableArities = [
            false,
          ];
          obj296.methods["init"] = func298;
          func298.definitionLine = 140;
          func298.definitionModule = "kitty";
          var func320 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func320.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 158
              var string321 = new GraceString("STARTING WORLD...");
              var call322 = Grace_print(string321);
              lineNumber = 159
              lineNumber = 151
              lineNumber = 159
              var string323 = new GraceString("canvas");
              var call324 = callmethod(var_dom,"document", [0]);
              var call325 = callmethod(call324,"createElement", [1], string323);
              onSelf = true;
              var call326 = callmethod(this, "backingCanvas:=", [1], call325);
              lineNumber = 161
              lineNumber = 159
              lineNumber = 160
              onSelf = true;
              var call327 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call328 = callmethod(this, "backingCanvas", [0]);
              var call329 = callmethod(call328,"height:=", [1], call327);
              lineNumber = 162
              lineNumber = 159
              lineNumber = 161
              onSelf = true;
              var call330 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call331 = callmethod(this, "backingCanvas", [0]);
              var call332 = callmethod(call331,"width:=", [1], call330);
              lineNumber = 162
              lineNumber = 159
              lineNumber = 162
              var string333 = new GraceString("2d");
              onSelf = true;
              var call334 = callmethod(this, "backingCanvas", [0]);
              var call335 = callmethod(call334,"getContext", [1], string333);
              onSelf = true;
              var call336 = callmethod(this, "backingContext:=", [1], call335);
              lineNumber = 163
              lineNumber = 159
              lineNumber = 163
              var string337 = new GraceString("2d");
              onSelf = true;
              var call338 = callmethod(this, "canvas", [0]);
              var call339 = callmethod(call338,"getContext", [1], string337);
              onSelf = true;
              var call340 = callmethod(this, "mctx:=", [1], call339);
              lineNumber = 164
              var string341 = new GraceString("WORLD STARTED");
              var call342 = Grace_print(string341);
              return call342
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
          obj296.methods["start"] = func320;
          func320.definitionLine = 157;
          func320.definitionModule = "kitty";
          var func343 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func343.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 168
              var string344 = new GraceString("UPDATING WORLD...");
              var call345 = Grace_print(string344);
              lineNumber = 172
              lineNumber = 159
              lineNumber = 171
              onSelf = true;
              var call346 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call347 = callmethod(this, "mctx", [0]);
              var call348 = callmethod(call347,"fillStyle:=", [1], call346);
              lineNumber = 172
              onSelf = true;
              var call349 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call350 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call351 = callmethod(this, "mctx", [0]);
              var call352 = callmethod(call351,"fillRect", [4], new GraceNum(0), new GraceNum(0), call349, call350);
              lineNumber = 173
              onSelf = true;
              var call353 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call354 = callmethod(this, "mctx", [0]);
              var call355 = callmethod(call354,"drawImage", [3], call353, new GraceNum(0), new GraceNum(0));
              lineNumber = 174
              onSelf = true;
              var call356 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call357 = callmethod(this, "background", [0]);
              var call358 = callmethod(call357,"draw", [1], call356);
              lineNumber = 177
              onSelf = true;
              var call359 = callmethod(this, "entities", [0]);
              lineNumber = 181
              var block360 = Grace_allocObject();
              block360.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block360.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block360.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block360.methods["match"] = GraceBlock_match;
              block360.methods["prefix?"] = GraceBlock_lift;
              block360.receiver = this;
              block360.className = 'block<kitty:181>';
              block360.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 178
                onSelf = true;
                var call361 = callmethod(this, "mctx", [0]);
                var call362 = callmethod(var_entity,"draw", [1], call361);
                return call362;
              };
              var call363 = callmethod(Grace_prelude,"for()do", [1, 1], call359, block360);
              lineNumber = 181
              var string364 = new GraceString("WORLD UPDATED");
              var call365 = Grace_print(string364);
              return call365
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func343.paramCounts = [
            0,
          ];
          func343.variableArities = [
            false,
          ];
          obj296.methods["update"] = func343;
          func343.definitionLine = 167;
          func343.definitionModule = "kitty";
          var func366 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func366.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 189
              lineNumber = 159
              lineNumber = 188
              onSelf = true;
              var call367 = callmethod(this, "background:=", [1], var_background__39__);
              return call367
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func366.paramCounts = [
            1,
          ];
          func366.variableArities = [
            false,
          ];
          obj296.methods["setBackground"] = func366;
          func366.definitionLine = 187;
          func366.definitionModule = "kitty";
          var func368 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func368.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 192
              onSelf = true;
              var call369 = callmethod(this, "entities", [0]);
              var call370 = callmethod(call369,"push", [1], var_e);
              return call370
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func368.paramTypes = [];
          func368.paramTypes.push([]);
          func368.paramCounts = [
            1,
          ];
          func368.variableArities = [
            false,
          ];
          obj296.methods["addEntity"] = func368;
          func368.definitionLine = 191;
          func368.definitionModule = "kitty";
          sourceObject = obj296;
          lineNumber = 117
          var string371 = new GraceString("CREATING NEW WORLD...");
          var call372 = Grace_print(string371);
          sourceObject = obj296;
          obj296.data["background"] = undefined;
          var reader_kitty_background_373 = function() {
            return this.data["background"];
          }
          obj296.methods["background"] = reader_kitty_background_373;
          obj296.data["background"] = undefined;
          var writer_kitty_background_373 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj296.methods["background:="] = writer_kitty_background_373;
          reader_kitty_background_373.confidential = true;
          writer_kitty_background_373.confidential = true;
          obj296.mutable = true;
          sourceObject = obj296;
          lineNumber = 120
          var string374 = new GraceString("black");
          obj296.data["backgroundColour"] = string374;
          var reader_kitty_backgroundColour_375 = function() {
            return this.data["backgroundColour"];
          }
          obj296.methods["backgroundColour"] = reader_kitty_backgroundColour_375;
          obj296.data["backgroundColour"] = string374;
          var writer_kitty_backgroundColour_375 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj296.methods["backgroundColour:="] = writer_kitty_backgroundColour_375;
          reader_kitty_backgroundColour_375.confidential = true;
          writer_kitty_backgroundColour_375.confidential = true;
          lineNumber = 122;
          moduleName = "kitty";
          lineNumber = 120
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string374)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj296.mutable = true;
          sourceObject = obj296;
          obj296.data["document"] = undefined;
          var reader_kitty_document_376 = function() {
            return this.data["document"];
          }
          obj296.methods["document"] = reader_kitty_document_376;
          obj296.data["document"] = undefined;
          var writer_kitty_document_376 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj296.methods["document:="] = writer_kitty_document_376;
          reader_kitty_document_376.confidential = true;
          writer_kitty_document_376.confidential = true;
          obj296.mutable = true;
          sourceObject = obj296;
          obj296.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_377 = function() {
            return this.data["backingCanvas"];
          }
          obj296.methods["backingCanvas"] = reader_kitty_backingCanvas_377;
          obj296.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_377 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj296.methods["backingCanvas:="] = writer_kitty_backingCanvas_377;
          reader_kitty_backingCanvas_377.confidential = true;
          writer_kitty_backingCanvas_377.confidential = true;
          obj296.mutable = true;
          sourceObject = obj296;
          obj296.data["backingContext"] = undefined;
          var reader_kitty_backingContext_378 = function() {
            return this.data["backingContext"];
          }
          obj296.methods["backingContext"] = reader_kitty_backingContext_378;
          obj296.data["backingContext"] = undefined;
          var writer_kitty_backingContext_378 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj296.methods["backingContext:="] = writer_kitty_backingContext_378;
          reader_kitty_backingContext_378.confidential = true;
          writer_kitty_backingContext_378.confidential = true;
          obj296.mutable = true;
          sourceObject = obj296;
          obj296.data["canvas"] = undefined;
          var reader_kitty_canvas_379 = function() {
            return this.data["canvas"];
          }
          obj296.methods["canvas"] = reader_kitty_canvas_379;
          obj296.data["canvas"] = undefined;
          var writer_kitty_canvas_379 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj296.methods["canvas:="] = writer_kitty_canvas_379;
          reader_kitty_canvas_379.confidential = true;
          writer_kitty_canvas_379.confidential = true;
          obj296.mutable = true;
          sourceObject = obj296;
          obj296.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_380 = function() {
            return this.data["canvasWidth"];
          }
          obj296.methods["canvasWidth"] = reader_kitty_canvasWidth_380;
          obj296.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_380 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj296.methods["canvasWidth:="] = writer_kitty_canvasWidth_380;
          reader_kitty_canvasWidth_380.confidential = true;
          writer_kitty_canvasWidth_380.confidential = true;
          obj296.mutable = true;
          sourceObject = obj296;
          obj296.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_381 = function() {
            return this.data["canvasHeight"];
          }
          obj296.methods["canvasHeight"] = reader_kitty_canvasHeight_381;
          obj296.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_381 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj296.methods["canvasHeight:="] = writer_kitty_canvasHeight_381;
          reader_kitty_canvasHeight_381.confidential = true;
          writer_kitty_canvasHeight_381.confidential = true;
          obj296.mutable = true;
          sourceObject = obj296;
          lineNumber = 131
          var call382 = callmethod(var_collections,"list", [0]);
          var call383 = callmethod(call382,"new", [0]);
          obj296.data["entities"] = call383;
          var reader_kitty_entities_384 = function() {
            return this.data["entities"];
          }
          obj296.methods["entities"] = reader_kitty_entities_384;
          obj296.data["entities"] = call383;
          var writer_kitty_entities_384 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj296.methods["entities:="] = writer_kitty_entities_384;
          reader_kitty_entities_384.confidential = true;
          writer_kitty_entities_384.confidential = true;
          lineNumber = 133;
          moduleName = "kitty";
          lineNumber = 131
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call383)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj296.mutable = true;
          sourceObject = obj296;
          lineNumber = 133
          var bool385 = new GraceBoolean(false)
          obj296.data["isInit"] = bool385;
          var reader_kitty_isInit_386 = function() {
            return this.data["isInit"];
          }
          obj296.methods["isInit"] = reader_kitty_isInit_386;
          obj296.data["isInit"] = bool385;
          var writer_kitty_isInit_386 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj296.methods["isInit:="] = writer_kitty_isInit_386;
          reader_kitty_isInit_386.confidential = true;
          writer_kitty_isInit_386.confidential = true;
          lineNumber = 135;
          moduleName = "kitty";
          lineNumber = 133
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool385)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj296.mutable = true;
          sourceObject = obj296;
          obj296.data["mctx"] = undefined;
          var reader_kitty_mctx_387 = function() {
            return this.data["mctx"];
          }
          obj296.methods["mctx"] = reader_kitty_mctx_387;
          obj296.data["mctx"] = undefined;
          var writer_kitty_mctx_387 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj296.methods["mctx:="] = writer_kitty_mctx_387;
          reader_kitty_mctx_387.confidential = true;
          writer_kitty_mctx_387.confidential = true;
          obj296.mutable = true;
          sourceObject = obj296;
          lineNumber = 137
          onSelf = true;
          var call388 = callmethod(this, "init", [0]);
          sourceObject = obj296;
          sourceObject = obj296;
          sourceObject = obj296;
          sourceObject = obj296;
          sourceObject = obj296;
          sourceObject = obj296;
          lineNumber = 195
          var string389 = new GraceString("WORLD CREATED");
          var call390 = Grace_print(string389);
          superDepth = origSuperDepth;
        }
        obj_init_296.apply(obj296, []);
        return obj296
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
    obj293.methods["new"] = func295;
    func295.definitionLine = 115;
    func295.definitionModule = "kitty";
    var func391 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj392 = Grace_allocObject();
        obj392.definitionModule = "kitty";
        obj392.definitionLine = 115;
        var inho392 = inheritingObject;
        while (inho392.superobj) inho392 = inho392.superobj;
        inho392.superobj = obj392;
        obj392.data = inheritingObject.data;
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
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 142
              var string395 = new GraceString("INITIALIZING WORLD...");
              var call396 = Grace_print(string395);
              lineNumber = 148
              var if397 = var_done;
              lineNumber = 144
              onSelf = true;
              var call398 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call398)) {
                lineNumber = 146
                lineNumber = 145
                var bool399 = new GraceBoolean(false)
                return bool399
              }
              lineNumber = 149
              lineNumber = 131
              lineNumber = 148
              var call400 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call401 = callmethod(this, "document:=", [1], call400);
              lineNumber = 149
              lineNumber = 148
              lineNumber = 149
              var string402 = new GraceString("standard-canvas");
              onSelf = true;
              var call403 = callmethod(this, "document", [0]);
              var call404 = callmethod(call403,"getElementById", [1], string402);
              onSelf = true;
              var call405 = callmethod(this, "canvas:=", [1], call404);
              lineNumber = 151
              lineNumber = 148
              lineNumber = 150
              onSelf = true;
              var call406 = callmethod(this, "canvas", [0]);
              var call407 = callmethod(call406,"width", [0]);
              onSelf = true;
              var call408 = callmethod(this, "canvasWidth:=", [1], call407);
              lineNumber = 153
              lineNumber = 150
              lineNumber = 151
              onSelf = true;
              var call409 = callmethod(this, "canvas", [0]);
              var call410 = callmethod(call409,"height", [0]);
              onSelf = true;
              var call411 = callmethod(this, "canvasHeight:=", [1], call410);
              lineNumber = 154
              lineNumber = 151
              lineNumber = 153
              var bool412 = new GraceBoolean(true)
              onSelf = true;
              var call413 = callmethod(this, "isInit:=", [1], bool412);
              lineNumber = 154
              var string414 = new GraceString("INITIALIZATION FINISHED");
              var call415 = Grace_print(string414);
              return call415
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
          obj392.methods["init"] = func394;
          func394.definitionLine = 140;
          func394.definitionModule = "kitty";
          var func416 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func416.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 158
              var string417 = new GraceString("STARTING WORLD...");
              var call418 = Grace_print(string417);
              lineNumber = 159
              lineNumber = 151
              lineNumber = 159
              var string419 = new GraceString("canvas");
              var call420 = callmethod(var_dom,"document", [0]);
              var call421 = callmethod(call420,"createElement", [1], string419);
              onSelf = true;
              var call422 = callmethod(this, "backingCanvas:=", [1], call421);
              lineNumber = 161
              lineNumber = 159
              lineNumber = 160
              onSelf = true;
              var call423 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call424 = callmethod(this, "backingCanvas", [0]);
              var call425 = callmethod(call424,"height:=", [1], call423);
              lineNumber = 162
              lineNumber = 159
              lineNumber = 161
              onSelf = true;
              var call426 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call427 = callmethod(this, "backingCanvas", [0]);
              var call428 = callmethod(call427,"width:=", [1], call426);
              lineNumber = 162
              lineNumber = 159
              lineNumber = 162
              var string429 = new GraceString("2d");
              onSelf = true;
              var call430 = callmethod(this, "backingCanvas", [0]);
              var call431 = callmethod(call430,"getContext", [1], string429);
              onSelf = true;
              var call432 = callmethod(this, "backingContext:=", [1], call431);
              lineNumber = 163
              lineNumber = 159
              lineNumber = 163
              var string433 = new GraceString("2d");
              onSelf = true;
              var call434 = callmethod(this, "canvas", [0]);
              var call435 = callmethod(call434,"getContext", [1], string433);
              onSelf = true;
              var call436 = callmethod(this, "mctx:=", [1], call435);
              lineNumber = 164
              var string437 = new GraceString("WORLD STARTED");
              var call438 = Grace_print(string437);
              return call438
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
          obj392.methods["start"] = func416;
          func416.definitionLine = 157;
          func416.definitionModule = "kitty";
          var func439 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func439.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 168
              var string440 = new GraceString("UPDATING WORLD...");
              var call441 = Grace_print(string440);
              lineNumber = 172
              lineNumber = 159
              lineNumber = 171
              onSelf = true;
              var call442 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call443 = callmethod(this, "mctx", [0]);
              var call444 = callmethod(call443,"fillStyle:=", [1], call442);
              lineNumber = 172
              onSelf = true;
              var call445 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call446 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call447 = callmethod(this, "mctx", [0]);
              var call448 = callmethod(call447,"fillRect", [4], new GraceNum(0), new GraceNum(0), call445, call446);
              lineNumber = 173
              onSelf = true;
              var call449 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call450 = callmethod(this, "mctx", [0]);
              var call451 = callmethod(call450,"drawImage", [3], call449, new GraceNum(0), new GraceNum(0));
              lineNumber = 174
              onSelf = true;
              var call452 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call453 = callmethod(this, "background", [0]);
              var call454 = callmethod(call453,"draw", [1], call452);
              lineNumber = 177
              onSelf = true;
              var call455 = callmethod(this, "entities", [0]);
              lineNumber = 181
              var block456 = Grace_allocObject();
              block456.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block456.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block456.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block456.methods["match"] = GraceBlock_match;
              block456.methods["prefix?"] = GraceBlock_lift;
              block456.receiver = this;
              block456.className = 'block<kitty:181>';
              block456.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 178
                onSelf = true;
                var call457 = callmethod(this, "mctx", [0]);
                var call458 = callmethod(var_entity,"draw", [1], call457);
                return call458;
              };
              var call459 = callmethod(Grace_prelude,"for()do", [1, 1], call455, block456);
              lineNumber = 181
              var string460 = new GraceString("WORLD UPDATED");
              var call461 = Grace_print(string460);
              return call461
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
          obj392.methods["update"] = func439;
          func439.definitionLine = 167;
          func439.definitionModule = "kitty";
          var func462 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func462.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 189
              lineNumber = 159
              lineNumber = 188
              onSelf = true;
              var call463 = callmethod(this, "background:=", [1], var_background__39__);
              return call463
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func462.paramCounts = [
            1,
          ];
          func462.variableArities = [
            false,
          ];
          obj392.methods["setBackground"] = func462;
          func462.definitionLine = 187;
          func462.definitionModule = "kitty";
          var func464 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func464.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 192
              onSelf = true;
              var call465 = callmethod(this, "entities", [0]);
              var call466 = callmethod(call465,"push", [1], var_e);
              return call466
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func464.paramTypes = [];
          func464.paramTypes.push([]);
          func464.paramCounts = [
            1,
          ];
          func464.variableArities = [
            false,
          ];
          obj392.methods["addEntity"] = func464;
          func464.definitionLine = 191;
          func464.definitionModule = "kitty";
          sourceObject = obj392;
          lineNumber = 117
          var string467 = new GraceString("CREATING NEW WORLD...");
          var call468 = Grace_print(string467);
          sourceObject = obj392;
          obj392.data["background"] = undefined;
          var reader_kitty_background_469 = function() {
            return this.data["background"];
          }
          obj392.methods["background"] = reader_kitty_background_469;
          obj392.data["background"] = undefined;
          var writer_kitty_background_469 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj392.methods["background:="] = writer_kitty_background_469;
          reader_kitty_background_469.confidential = true;
          writer_kitty_background_469.confidential = true;
          obj392.mutable = true;
          sourceObject = obj392;
          lineNumber = 120
          var string470 = new GraceString("black");
          obj392.data["backgroundColour"] = string470;
          var reader_kitty_backgroundColour_471 = function() {
            return this.data["backgroundColour"];
          }
          obj392.methods["backgroundColour"] = reader_kitty_backgroundColour_471;
          obj392.data["backgroundColour"] = string470;
          var writer_kitty_backgroundColour_471 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj392.methods["backgroundColour:="] = writer_kitty_backgroundColour_471;
          reader_kitty_backgroundColour_471.confidential = true;
          writer_kitty_backgroundColour_471.confidential = true;
          lineNumber = 122;
          moduleName = "kitty";
          lineNumber = 120
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string470)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj392.mutable = true;
          sourceObject = obj392;
          obj392.data["document"] = undefined;
          var reader_kitty_document_472 = function() {
            return this.data["document"];
          }
          obj392.methods["document"] = reader_kitty_document_472;
          obj392.data["document"] = undefined;
          var writer_kitty_document_472 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj392.methods["document:="] = writer_kitty_document_472;
          reader_kitty_document_472.confidential = true;
          writer_kitty_document_472.confidential = true;
          obj392.mutable = true;
          sourceObject = obj392;
          obj392.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_473 = function() {
            return this.data["backingCanvas"];
          }
          obj392.methods["backingCanvas"] = reader_kitty_backingCanvas_473;
          obj392.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_473 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj392.methods["backingCanvas:="] = writer_kitty_backingCanvas_473;
          reader_kitty_backingCanvas_473.confidential = true;
          writer_kitty_backingCanvas_473.confidential = true;
          obj392.mutable = true;
          sourceObject = obj392;
          obj392.data["backingContext"] = undefined;
          var reader_kitty_backingContext_474 = function() {
            return this.data["backingContext"];
          }
          obj392.methods["backingContext"] = reader_kitty_backingContext_474;
          obj392.data["backingContext"] = undefined;
          var writer_kitty_backingContext_474 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj392.methods["backingContext:="] = writer_kitty_backingContext_474;
          reader_kitty_backingContext_474.confidential = true;
          writer_kitty_backingContext_474.confidential = true;
          obj392.mutable = true;
          sourceObject = obj392;
          obj392.data["canvas"] = undefined;
          var reader_kitty_canvas_475 = function() {
            return this.data["canvas"];
          }
          obj392.methods["canvas"] = reader_kitty_canvas_475;
          obj392.data["canvas"] = undefined;
          var writer_kitty_canvas_475 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj392.methods["canvas:="] = writer_kitty_canvas_475;
          reader_kitty_canvas_475.confidential = true;
          writer_kitty_canvas_475.confidential = true;
          obj392.mutable = true;
          sourceObject = obj392;
          obj392.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_476 = function() {
            return this.data["canvasWidth"];
          }
          obj392.methods["canvasWidth"] = reader_kitty_canvasWidth_476;
          obj392.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_476 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj392.methods["canvasWidth:="] = writer_kitty_canvasWidth_476;
          reader_kitty_canvasWidth_476.confidential = true;
          writer_kitty_canvasWidth_476.confidential = true;
          obj392.mutable = true;
          sourceObject = obj392;
          obj392.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_477 = function() {
            return this.data["canvasHeight"];
          }
          obj392.methods["canvasHeight"] = reader_kitty_canvasHeight_477;
          obj392.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_477 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj392.methods["canvasHeight:="] = writer_kitty_canvasHeight_477;
          reader_kitty_canvasHeight_477.confidential = true;
          writer_kitty_canvasHeight_477.confidential = true;
          obj392.mutable = true;
          sourceObject = obj392;
          lineNumber = 131
          var call478 = callmethod(var_collections,"list", [0]);
          var call479 = callmethod(call478,"new", [0]);
          obj392.data["entities"] = call479;
          var reader_kitty_entities_480 = function() {
            return this.data["entities"];
          }
          obj392.methods["entities"] = reader_kitty_entities_480;
          obj392.data["entities"] = call479;
          var writer_kitty_entities_480 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj392.methods["entities:="] = writer_kitty_entities_480;
          reader_kitty_entities_480.confidential = true;
          writer_kitty_entities_480.confidential = true;
          lineNumber = 133;
          moduleName = "kitty";
          lineNumber = 131
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call479)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj392.mutable = true;
          sourceObject = obj392;
          lineNumber = 133
          var bool481 = new GraceBoolean(false)
          obj392.data["isInit"] = bool481;
          var reader_kitty_isInit_482 = function() {
            return this.data["isInit"];
          }
          obj392.methods["isInit"] = reader_kitty_isInit_482;
          obj392.data["isInit"] = bool481;
          var writer_kitty_isInit_482 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj392.methods["isInit:="] = writer_kitty_isInit_482;
          reader_kitty_isInit_482.confidential = true;
          writer_kitty_isInit_482.confidential = true;
          lineNumber = 135;
          moduleName = "kitty";
          lineNumber = 133
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool481)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj392.mutable = true;
          sourceObject = obj392;
          obj392.data["mctx"] = undefined;
          var reader_kitty_mctx_483 = function() {
            return this.data["mctx"];
          }
          obj392.methods["mctx"] = reader_kitty_mctx_483;
          obj392.data["mctx"] = undefined;
          var writer_kitty_mctx_483 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj392.methods["mctx:="] = writer_kitty_mctx_483;
          reader_kitty_mctx_483.confidential = true;
          writer_kitty_mctx_483.confidential = true;
          obj392.mutable = true;
          sourceObject = obj392;
          lineNumber = 137
          onSelf = true;
          var call484 = callmethod(this, "init", [0]);
          sourceObject = obj392;
          sourceObject = obj392;
          sourceObject = obj392;
          sourceObject = obj392;
          sourceObject = obj392;
          sourceObject = obj392;
          lineNumber = 195
          var string485 = new GraceString("WORLD CREATED");
          var call486 = Grace_print(string485);
          superDepth = origSuperDepth;
        }
        obj_init_392.apply(inheritingObject, []);
        return obj392
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj293.methods["new()object"] = func391;
    var func487 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 115
        var string488 = new GraceString("class KittyWorld");
        return string488
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func487.paramCounts = [
    ];
    func487.variableArities = [
    ];
    obj293.methods["asDebugString"] = func487;
    func487.definitionLine = 115;
    func487.definitionModule = "kitty";
    sourceObject = obj293;
    sourceObject = obj293;
    superDepth = origSuperDepth;
  }
  obj_init_293.apply(obj293, []);
  var var_KittyWorld = obj293;
  lineNumber = 198
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
'dom',
'StandardPrelude',
];
if (gctCache)
  gctCache['kitty'] = "modules:\n StandardPrelude\n mgcollections\nmethods-of:KittyEntity.new:\n image:=\n image\n onDestroy\n awake\n getRotation\n update\n getX\n getY\n start\n posX:=\n posY:=\n setLocation\n rotation:=\n posX\n posY\n draw\n setImage\n rotation\nfresh-methods:\n Image\n Entity\n World\npublic:\n m_world\n m_world:=\n start\n stop\n setWorld\n KittyImage\n Image\n KittyEntity\n Entity\n KittyWorld\n World\nmethods-of:KittyImage.new:\n imgTag\n height\n draw\n height:=\n width\n width:=\nmethods-of:KittyWorld.new:\n entities:=\n document\n mctx\n entities\n addEntity\n canvas:=\n backgroundColour:=\n canvasHeight:=\n canvasWidth:=\n backgroundColour\n canvasHeight\n init\n background:=\n update\n canvas\n backingContext\n background\n backingCanvas:=\n canvasWidth\n isInit:=\n setBackground\n backingCanvas\n isInit\n start\n backingContext:=\n mctx:=\n document:=\nfresh:World:\n mctx\n document\n entities:=\n entities\n addEntity\n canvasWidth:=\n backingContext:=\n backgroundColour:=\n canvasHeight:=\n canvas:=\n init\n canvasHeight\n background:=\n update\n canvas\n backingContext\n background\n backingCanvas:=\n canvasWidth\n isInit:=\n mctx:=\n backingCanvas\n isInit\n start\n backgroundColour\n setBackground\n document:=\nconstructors-of:KittyEntity:\n new\npath:\n kitty\nclasses:\n KittyImage\n KittyEntity\n KittyWorld\nfresh:Entity:\n image:=\n image\n onDestroy\n awake\n getRotation\n getX\n update\n getY\n start\n posX:=\n posY:=\n setLocation\n rotation:=\n posX\n posY\n draw\n setImage\n rotation\nconfidential:\nconstructors-of:KittyWorld:\n new\nfresh:Image:\n imgTag\n height\n draw\n height:=\n width\n width:=\nconstructors-of:KittyImage:\n new\n";
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
    "// TEST SECTION //",
    "",
    "// def foo = World.new(100, 100)",
    "// def bar = Entity.new(10, 10)",
    "// foo.addEntity(bar)",
  ];
}
