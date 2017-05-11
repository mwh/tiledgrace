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
  lineNumber = 105
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
      lineNumber = 106
      var obj16 = Grace_allocObject();
      obj16.definitionModule = "kitty";
      obj16.definitionLine = 106;
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
        lineNumber = 107
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
  func15.definitionLine = 105;
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
      obj20.definitionLine = 106;
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
  lineNumber = 194
  var func23 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func23.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (World)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 195
      var obj24 = Grace_allocObject();
      obj24.definitionModule = "kitty";
      obj24.definitionLine = 195;
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
        lineNumber = 196
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
  func23.definitionLine = 194;
  func23.definitionModule = "kitty";
  var func27 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj28 = Grace_allocObject();
      obj28.definitionModule = "kitty";
      obj28.definitionLine = 195;
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
              lineNumber = 61
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
          func205.definitionLine = 60;
          func205.definitionModule = "kitty";
          var func208 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func208.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 66
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
          func208.definitionLine = 65;
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
          func211.definitionLine = 70;
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
          func212.definitionLine = 75;
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
              lineNumber = 80
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
          obj203.methods["draw"] = func213;
          func213.definitionLine = 79;
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
              lineNumber = 85
              lineNumber = 49
              lineNumber = 84
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
          obj203.methods["setImage"] = func216;
          func216.definitionLine = 83;
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
              lineNumber = 89
              lineNumber = 49
              lineNumber = 88
              onSelf = true;
              var call219 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 90
              lineNumber = 49
              lineNumber = 89
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
          obj203.methods["setLocation"] = func218;
          func218.definitionLine = 87;
          func218.definitionModule = "kitty";
          var func221 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func221.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 94
              lineNumber = 93
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
          obj203.methods["getX"] = func221;
          func221.definitionLine = 92;
          func221.definitionModule = "kitty";
          var func223 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func223.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 98
              lineNumber = 97
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
          obj203.methods["getY"] = func223;
          func223.definitionLine = 96;
          func223.definitionModule = "kitty";
          var func225 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func225.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 102
              lineNumber = 101
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
          obj203.methods["getRotation"] = func225;
          func225.definitionLine = 100;
          func225.definitionModule = "kitty";
          sourceObject = obj203;
          lineNumber = 51
          obj203.data["posX"] = var_x__39__;
          var reader_kitty_posX_227 = function() {
            return this.data["posX"];
          }
          obj203.methods["posX"] = reader_kitty_posX_227;
          obj203.data["posX"] = var_x__39__;
          var writer_kitty_posX_227 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj203.methods["posX:="] = writer_kitty_posX_227;
          reader_kitty_posX_227.confidential = true;
          writer_kitty_posX_227.confidential = true;
          lineNumber = 52;
          moduleName = "kitty";
          lineNumber = 51
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj203.mutable = true;
          sourceObject = obj203;
          lineNumber = 52
          obj203.data["posY"] = var_y__39__;
          var reader_kitty_posY_228 = function() {
            return this.data["posY"];
          }
          obj203.methods["posY"] = reader_kitty_posY_228;
          obj203.data["posY"] = var_y__39__;
          var writer_kitty_posY_228 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj203.methods["posY:="] = writer_kitty_posY_228;
          reader_kitty_posY_228.confidential = true;
          writer_kitty_posY_228.confidential = true;
          lineNumber = 53;
          moduleName = "kitty";
          lineNumber = 52
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj203.mutable = true;
          sourceObject = obj203;
          lineNumber = 53
          obj203.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_229 = function() {
            return this.data["rotation"];
          }
          obj203.methods["rotation"] = reader_kitty_rotation_229;
          obj203.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_229 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj203.methods["rotation:="] = writer_kitty_rotation_229;
          reader_kitty_rotation_229.confidential = true;
          writer_kitty_rotation_229.confidential = true;
          lineNumber = 55;
          moduleName = "kitty";
          lineNumber = 53
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj203.mutable = true;
          sourceObject = obj203;
          obj203.data["image"] = undefined;
          var reader_kitty_image_230 = function() {
            return this.data["image"];
          }
          obj203.methods["image"] = reader_kitty_image_230;
          obj203.data["image"] = undefined;
          var writer_kitty_image_230 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj203.methods["image:="] = writer_kitty_image_230;
          reader_kitty_image_230.confidential = true;
          writer_kitty_image_230.confidential = true;
          obj203.mutable = true;
          sourceObject = obj203;
          lineNumber = 57
          onSelf = true;
          var call231 = callmethod(this, "awake", [0]);
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
    var func232 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj233 = Grace_allocObject();
        obj233.definitionModule = "kitty";
        obj233.definitionLine = 49;
        var inho233 = inheritingObject;
        while (inho233.superobj) inho233 = inho233.superobj;
        inho233.superobj = obj233;
        obj233.data = inheritingObject.data;
        obj233.outer = this;
        var reader_kitty_outer_234 = function() {
          return this.outer;
        }
        obj233.methods["outer"] = reader_kitty_outer_234;
        function obj_init_233() {
          var origSuperDepth = superDepth;
          superDepth = obj233;
          obj233.annotations = [];
          var func235 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func235.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 61
              var string236 = new GraceString("awake");
              var call237 = Grace_print(string236);
              return call237
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
          obj233.methods["awake"] = func235;
          func235.definitionLine = 60;
          func235.definitionModule = "kitty";
          var func238 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func238.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 66
              var string239 = new GraceString("start");
              var call240 = Grace_print(string239);
              return call240
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func238.paramCounts = [
            0,
          ];
          func238.variableArities = [
            false,
          ];
          obj233.methods["start"] = func238;
          func238.definitionLine = 65;
          func238.definitionModule = "kitty";
          var func241 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func241.paramCounts[0])
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
          func241.paramCounts = [
            0,
          ];
          func241.variableArities = [
            false,
          ];
          obj233.methods["update"] = func241;
          func241.definitionLine = 70;
          func241.definitionModule = "kitty";
          var func242 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func242.paramCounts[0])
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
          func242.paramCounts = [
            0,
          ];
          func242.variableArities = [
            false,
          ];
          obj233.methods["onDestroy"] = func242;
          func242.definitionLine = 75;
          func242.definitionModule = "kitty";
          var func243 = function(argcv) {
            var curarg = 1;
            var var_ctx__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func243.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 80
              onSelf = true;
              var call244 = callmethod(this, "image", [0]);
              var call245 = callmethod(call244,"draw", [1], var_ctx__39__);
              return call245
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func243.paramCounts = [
            1,
          ];
          func243.variableArities = [
            false,
          ];
          obj233.methods["draw"] = func243;
          func243.definitionLine = 79;
          func243.definitionModule = "kitty";
          var func246 = function(argcv) {
            var curarg = 1;
            var var_image__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func246.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setImage)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 85
              lineNumber = 49
              lineNumber = 84
              onSelf = true;
              var call247 = callmethod(this, "image:=", [1], var_image__39__);
              return call247
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func246.paramTypes = [];
          func246.paramTypes.push([]);
          func246.paramCounts = [
            1,
          ];
          func246.variableArities = [
            false,
          ];
          obj233.methods["setImage"] = func246;
          func246.definitionLine = 83;
          func246.definitionModule = "kitty";
          var func248 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func248.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 89
              lineNumber = 49
              lineNumber = 88
              onSelf = true;
              var call249 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 90
              lineNumber = 49
              lineNumber = 89
              onSelf = true;
              var call250 = callmethod(this, "posY:=", [1], var_y);
              return call250
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func248.paramCounts = [
            2,
          ];
          func248.variableArities = [
            false,
          ];
          obj233.methods["setLocation"] = func248;
          func248.definitionLine = 87;
          func248.definitionModule = "kitty";
          var func251 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func251.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 94
              lineNumber = 93
              onSelf = true;
              var call252 = callmethod(this, "posX", [0]);
              return call252
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
          obj233.methods["getX"] = func251;
          func251.definitionLine = 92;
          func251.definitionModule = "kitty";
          var func253 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func253.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 98
              lineNumber = 97
              onSelf = true;
              var call254 = callmethod(this, "posY", [0]);
              return call254
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
          obj233.methods["getY"] = func253;
          func253.definitionLine = 96;
          func253.definitionModule = "kitty";
          var func255 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func255.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 102
              lineNumber = 101
              onSelf = true;
              var call256 = callmethod(this, "rotation", [0]);
              return call256
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
          obj233.methods["getRotation"] = func255;
          func255.definitionLine = 100;
          func255.definitionModule = "kitty";
          sourceObject = obj233;
          lineNumber = 51
          obj233.data["posX"] = var_x__39__;
          var reader_kitty_posX_257 = function() {
            return this.data["posX"];
          }
          obj233.methods["posX"] = reader_kitty_posX_257;
          obj233.data["posX"] = var_x__39__;
          var writer_kitty_posX_257 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj233.methods["posX:="] = writer_kitty_posX_257;
          reader_kitty_posX_257.confidential = true;
          writer_kitty_posX_257.confidential = true;
          lineNumber = 52;
          moduleName = "kitty";
          lineNumber = 51
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj233.mutable = true;
          sourceObject = obj233;
          lineNumber = 52
          obj233.data["posY"] = var_y__39__;
          var reader_kitty_posY_258 = function() {
            return this.data["posY"];
          }
          obj233.methods["posY"] = reader_kitty_posY_258;
          obj233.data["posY"] = var_y__39__;
          var writer_kitty_posY_258 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj233.methods["posY:="] = writer_kitty_posY_258;
          reader_kitty_posY_258.confidential = true;
          writer_kitty_posY_258.confidential = true;
          lineNumber = 53;
          moduleName = "kitty";
          lineNumber = 52
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj233.mutable = true;
          sourceObject = obj233;
          lineNumber = 53
          obj233.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_259 = function() {
            return this.data["rotation"];
          }
          obj233.methods["rotation"] = reader_kitty_rotation_259;
          obj233.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_259 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj233.methods["rotation:="] = writer_kitty_rotation_259;
          reader_kitty_rotation_259.confidential = true;
          writer_kitty_rotation_259.confidential = true;
          lineNumber = 55;
          moduleName = "kitty";
          lineNumber = 53
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj233.mutable = true;
          sourceObject = obj233;
          obj233.data["image"] = undefined;
          var reader_kitty_image_260 = function() {
            return this.data["image"];
          }
          obj233.methods["image"] = reader_kitty_image_260;
          obj233.data["image"] = undefined;
          var writer_kitty_image_260 = function(argcv, o) {
            this.data["image"] = o;
          }
          obj233.methods["image:="] = writer_kitty_image_260;
          reader_kitty_image_260.confidential = true;
          writer_kitty_image_260.confidential = true;
          obj233.mutable = true;
          sourceObject = obj233;
          lineNumber = 57
          onSelf = true;
          var call261 = callmethod(this, "awake", [0]);
          sourceObject = obj233;
          sourceObject = obj233;
          sourceObject = obj233;
          sourceObject = obj233;
          sourceObject = obj233;
          sourceObject = obj233;
          sourceObject = obj233;
          sourceObject = obj233;
          sourceObject = obj233;
          sourceObject = obj233;
          superDepth = origSuperDepth;
        }
        obj_init_233.apply(inheritingObject, []);
        return obj233
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj200.methods["new()object"] = func232;
    var func262 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 49
        var string263 = new GraceString("class KittyEntity");
        return string263
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func262.paramCounts = [
    ];
    func262.variableArities = [
    ];
    obj200.methods["asDebugString"] = func262;
    func262.definitionLine = 49;
    func262.definitionModule = "kitty";
    sourceObject = obj200;
    sourceObject = obj200;
    superDepth = origSuperDepth;
  }
  obj_init_200.apply(obj200, []);
  var var_KittyEntity = obj200;
  lineNumber = 105
  lineNumber = 111
  var func264 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func264.paramCounts[0])
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
  func264.paramCounts = [
    0,
  ];
  func264.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func264;
  func264.definitionLine = 111;
  func264.definitionModule = "kitty";
  var obj265 = Grace_allocObject();
  obj265.definitionModule = "kitty";
  obj265.definitionLine = 111;
  obj265.outer = this;
  var reader_kitty_outer_266 = function() {
    return this.outer;
  }
  obj265.methods["outer"] = reader_kitty_outer_266;
  function obj_init_265() {
    var origSuperDepth = superDepth;
    superDepth = obj265;
    obj265.annotations = [];
    var func267 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func267.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj268 = Grace_allocObject();
        obj268.definitionModule = "kitty";
        obj268.definitionLine = 111;
        obj268.outer = this;
        var reader_kitty_outer_269 = function() {
          return this.outer;
        }
        obj268.methods["outer"] = reader_kitty_outer_269;
        function obj_init_268() {
          var origSuperDepth = superDepth;
          superDepth = obj268;
          obj268.annotations = [];
          var func270 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func270.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 138
              var string271 = new GraceString("INITIALIZING WORLD...");
              var call272 = Grace_print(string271);
              lineNumber = 144
              var if273 = var_done;
              lineNumber = 140
              onSelf = true;
              var call274 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call274)) {
                lineNumber = 142
                lineNumber = 141
                var bool275 = new GraceBoolean(false)
                return bool275
              }
              lineNumber = 145
              lineNumber = 111
              lineNumber = 144
              var call276 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call277 = callmethod(this, "document:=", [1], call276);
              lineNumber = 145
              lineNumber = 144
              lineNumber = 145
              var string278 = new GraceString("standard-canvas");
              onSelf = true;
              var call279 = callmethod(this, "document", [0]);
              var call280 = callmethod(call279,"getElementById", [1], string278);
              onSelf = true;
              var call281 = callmethod(this, "canvas:=", [1], call280);
              lineNumber = 147
              lineNumber = 144
              lineNumber = 146
              onSelf = true;
              var call282 = callmethod(this, "canvas", [0]);
              var call283 = callmethod(call282,"width", [0]);
              onSelf = true;
              var call284 = callmethod(this, "canvasWidth:=", [1], call283);
              lineNumber = 149
              lineNumber = 146
              lineNumber = 147
              onSelf = true;
              var call285 = callmethod(this, "canvas", [0]);
              var call286 = callmethod(call285,"height", [0]);
              onSelf = true;
              var call287 = callmethod(this, "canvasHeight:=", [1], call286);
              lineNumber = 150
              lineNumber = 147
              lineNumber = 149
              var bool288 = new GraceBoolean(true)
              onSelf = true;
              var call289 = callmethod(this, "isInit:=", [1], bool288);
              lineNumber = 150
              var string290 = new GraceString("INITIALIZATION FINISHED");
              var call291 = Grace_print(string290);
              return call291
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func270.paramCounts = [
            0,
          ];
          func270.variableArities = [
            false,
          ];
          obj268.methods["init"] = func270;
          func270.definitionLine = 136;
          func270.definitionModule = "kitty";
          var func292 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func292.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 154
              var string293 = new GraceString("STARTING WORLD...");
              var call294 = Grace_print(string293);
              lineNumber = 155
              lineNumber = 147
              lineNumber = 155
              var string295 = new GraceString("canvas");
              var call296 = callmethod(var_dom,"document", [0]);
              var call297 = callmethod(call296,"createElement", [1], string295);
              onSelf = true;
              var call298 = callmethod(this, "backingCanvas:=", [1], call297);
              lineNumber = 157
              lineNumber = 155
              lineNumber = 156
              onSelf = true;
              var call299 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call300 = callmethod(this, "backingCanvas", [0]);
              var call301 = callmethod(call300,"height:=", [1], call299);
              lineNumber = 158
              lineNumber = 155
              lineNumber = 157
              onSelf = true;
              var call302 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call303 = callmethod(this, "backingCanvas", [0]);
              var call304 = callmethod(call303,"width:=", [1], call302);
              lineNumber = 158
              lineNumber = 155
              lineNumber = 158
              var string305 = new GraceString("2d");
              onSelf = true;
              var call306 = callmethod(this, "backingCanvas", [0]);
              var call307 = callmethod(call306,"getContext", [1], string305);
              onSelf = true;
              var call308 = callmethod(this, "backingContext:=", [1], call307);
              lineNumber = 159
              lineNumber = 155
              lineNumber = 159
              var string309 = new GraceString("2d");
              onSelf = true;
              var call310 = callmethod(this, "canvas", [0]);
              var call311 = callmethod(call310,"getContext", [1], string309);
              onSelf = true;
              var call312 = callmethod(this, "mctx:=", [1], call311);
              lineNumber = 160
              var string313 = new GraceString("WORLD STARTED");
              var call314 = Grace_print(string313);
              return call314
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
          obj268.methods["start"] = func292;
          func292.definitionLine = 153;
          func292.definitionModule = "kitty";
          var func315 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func315.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 164
              var string316 = new GraceString("UPDATING WORLD...");
              var call317 = Grace_print(string316);
              lineNumber = 168
              lineNumber = 155
              lineNumber = 167
              onSelf = true;
              var call318 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call319 = callmethod(this, "mctx", [0]);
              var call320 = callmethod(call319,"fillStyle:=", [1], call318);
              lineNumber = 168
              onSelf = true;
              var call321 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call322 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call323 = callmethod(this, "mctx", [0]);
              var call324 = callmethod(call323,"fillRect", [4], new GraceNum(0), new GraceNum(0), call321, call322);
              lineNumber = 169
              onSelf = true;
              var call325 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call326 = callmethod(this, "mctx", [0]);
              var call327 = callmethod(call326,"drawImage", [3], call325, new GraceNum(0), new GraceNum(0));
              lineNumber = 170
              onSelf = true;
              var call328 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call329 = callmethod(this, "background", [0]);
              var call330 = callmethod(call329,"draw", [1], call328);
              lineNumber = 173
              onSelf = true;
              var call331 = callmethod(this, "entities", [0]);
              lineNumber = 177
              var block332 = Grace_allocObject();
              block332.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block332.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block332.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block332.methods["match"] = GraceBlock_match;
              block332.methods["prefix?"] = GraceBlock_lift;
              block332.receiver = this;
              block332.className = 'block<kitty:177>';
              block332.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 174
                onSelf = true;
                var call333 = callmethod(this, "mctx", [0]);
                var call334 = callmethod(var_entity,"draw", [1], call333);
                return call334;
              };
              var call335 = callmethod(Grace_prelude,"for()do", [1, 1], call331, block332);
              lineNumber = 177
              var string336 = new GraceString("WORLD UPDATED");
              var call337 = Grace_print(string336);
              return call337
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func315.paramCounts = [
            0,
          ];
          func315.variableArities = [
            false,
          ];
          obj268.methods["update"] = func315;
          func315.definitionLine = 163;
          func315.definitionModule = "kitty";
          var func338 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func338.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 185
              lineNumber = 155
              lineNumber = 184
              onSelf = true;
              var call339 = callmethod(this, "background:=", [1], var_background__39__);
              return call339
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func338.paramCounts = [
            1,
          ];
          func338.variableArities = [
            false,
          ];
          obj268.methods["setBackground"] = func338;
          func338.definitionLine = 183;
          func338.definitionModule = "kitty";
          var func340 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func340.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 188
              onSelf = true;
              var call341 = callmethod(this, "entities", [0]);
              var call342 = callmethod(call341,"add", [1], var_e);
              return call342
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func340.paramTypes = [];
          func340.paramTypes.push([]);
          func340.paramCounts = [
            1,
          ];
          func340.variableArities = [
            false,
          ];
          obj268.methods["addEntity"] = func340;
          func340.definitionLine = 187;
          func340.definitionModule = "kitty";
          sourceObject = obj268;
          lineNumber = 113
          var string343 = new GraceString("CREATING NEW WORLD...");
          var call344 = Grace_print(string343);
          sourceObject = obj268;
          obj268.data["background"] = undefined;
          var reader_kitty_background_345 = function() {
            return this.data["background"];
          }
          obj268.methods["background"] = reader_kitty_background_345;
          obj268.data["background"] = undefined;
          var writer_kitty_background_345 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj268.methods["background:="] = writer_kitty_background_345;
          reader_kitty_background_345.confidential = true;
          writer_kitty_background_345.confidential = true;
          obj268.mutable = true;
          sourceObject = obj268;
          lineNumber = 116
          var string346 = new GraceString("black");
          obj268.data["backgroundColour"] = string346;
          var reader_kitty_backgroundColour_347 = function() {
            return this.data["backgroundColour"];
          }
          obj268.methods["backgroundColour"] = reader_kitty_backgroundColour_347;
          obj268.data["backgroundColour"] = string346;
          var writer_kitty_backgroundColour_347 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj268.methods["backgroundColour:="] = writer_kitty_backgroundColour_347;
          reader_kitty_backgroundColour_347.confidential = true;
          writer_kitty_backgroundColour_347.confidential = true;
          lineNumber = 118;
          moduleName = "kitty";
          lineNumber = 116
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string346)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj268.mutable = true;
          sourceObject = obj268;
          obj268.data["document"] = undefined;
          var reader_kitty_document_348 = function() {
            return this.data["document"];
          }
          obj268.methods["document"] = reader_kitty_document_348;
          obj268.data["document"] = undefined;
          var writer_kitty_document_348 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj268.methods["document:="] = writer_kitty_document_348;
          reader_kitty_document_348.confidential = true;
          writer_kitty_document_348.confidential = true;
          obj268.mutable = true;
          sourceObject = obj268;
          obj268.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_349 = function() {
            return this.data["backingCanvas"];
          }
          obj268.methods["backingCanvas"] = reader_kitty_backingCanvas_349;
          obj268.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_349 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj268.methods["backingCanvas:="] = writer_kitty_backingCanvas_349;
          reader_kitty_backingCanvas_349.confidential = true;
          writer_kitty_backingCanvas_349.confidential = true;
          obj268.mutable = true;
          sourceObject = obj268;
          obj268.data["backingContext"] = undefined;
          var reader_kitty_backingContext_350 = function() {
            return this.data["backingContext"];
          }
          obj268.methods["backingContext"] = reader_kitty_backingContext_350;
          obj268.data["backingContext"] = undefined;
          var writer_kitty_backingContext_350 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj268.methods["backingContext:="] = writer_kitty_backingContext_350;
          reader_kitty_backingContext_350.confidential = true;
          writer_kitty_backingContext_350.confidential = true;
          obj268.mutable = true;
          sourceObject = obj268;
          obj268.data["canvas"] = undefined;
          var reader_kitty_canvas_351 = function() {
            return this.data["canvas"];
          }
          obj268.methods["canvas"] = reader_kitty_canvas_351;
          obj268.data["canvas"] = undefined;
          var writer_kitty_canvas_351 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj268.methods["canvas:="] = writer_kitty_canvas_351;
          reader_kitty_canvas_351.confidential = true;
          writer_kitty_canvas_351.confidential = true;
          obj268.mutable = true;
          sourceObject = obj268;
          obj268.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_352 = function() {
            return this.data["canvasWidth"];
          }
          obj268.methods["canvasWidth"] = reader_kitty_canvasWidth_352;
          obj268.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_352 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj268.methods["canvasWidth:="] = writer_kitty_canvasWidth_352;
          reader_kitty_canvasWidth_352.confidential = true;
          writer_kitty_canvasWidth_352.confidential = true;
          obj268.mutable = true;
          sourceObject = obj268;
          obj268.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_353 = function() {
            return this.data["canvasHeight"];
          }
          obj268.methods["canvasHeight"] = reader_kitty_canvasHeight_353;
          obj268.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_353 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj268.methods["canvasHeight:="] = writer_kitty_canvasHeight_353;
          reader_kitty_canvasHeight_353.confidential = true;
          writer_kitty_canvasHeight_353.confidential = true;
          obj268.mutable = true;
          sourceObject = obj268;
          lineNumber = 127
          var call354 = callmethod(var_collections,"list", [0]);
          var call355 = callmethod(call354,"new", [0]);
          obj268.data["entities"] = call355;
          var reader_kitty_entities_356 = function() {
            return this.data["entities"];
          }
          obj268.methods["entities"] = reader_kitty_entities_356;
          obj268.data["entities"] = call355;
          var writer_kitty_entities_356 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj268.methods["entities:="] = writer_kitty_entities_356;
          reader_kitty_entities_356.confidential = true;
          writer_kitty_entities_356.confidential = true;
          lineNumber = 129;
          moduleName = "kitty";
          lineNumber = 127
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call355)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj268.mutable = true;
          sourceObject = obj268;
          lineNumber = 129
          var bool357 = new GraceBoolean(false)
          obj268.data["isInit"] = bool357;
          var reader_kitty_isInit_358 = function() {
            return this.data["isInit"];
          }
          obj268.methods["isInit"] = reader_kitty_isInit_358;
          obj268.data["isInit"] = bool357;
          var writer_kitty_isInit_358 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj268.methods["isInit:="] = writer_kitty_isInit_358;
          reader_kitty_isInit_358.confidential = true;
          writer_kitty_isInit_358.confidential = true;
          lineNumber = 131;
          moduleName = "kitty";
          lineNumber = 129
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool357)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj268.mutable = true;
          sourceObject = obj268;
          obj268.data["mctx"] = undefined;
          var reader_kitty_mctx_359 = function() {
            return this.data["mctx"];
          }
          obj268.methods["mctx"] = reader_kitty_mctx_359;
          obj268.data["mctx"] = undefined;
          var writer_kitty_mctx_359 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj268.methods["mctx:="] = writer_kitty_mctx_359;
          reader_kitty_mctx_359.confidential = true;
          writer_kitty_mctx_359.confidential = true;
          obj268.mutable = true;
          sourceObject = obj268;
          lineNumber = 133
          onSelf = true;
          var call360 = callmethod(this, "init", [0]);
          sourceObject = obj268;
          sourceObject = obj268;
          sourceObject = obj268;
          sourceObject = obj268;
          sourceObject = obj268;
          sourceObject = obj268;
          lineNumber = 191
          var string361 = new GraceString("WORLD CREATED");
          var call362 = Grace_print(string361);
          superDepth = origSuperDepth;
        }
        obj_init_268.apply(obj268, []);
        return obj268
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
    obj265.methods["new"] = func267;
    func267.definitionLine = 111;
    func267.definitionModule = "kitty";
    var func363 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj364 = Grace_allocObject();
        obj364.definitionModule = "kitty";
        obj364.definitionLine = 111;
        var inho364 = inheritingObject;
        while (inho364.superobj) inho364 = inho364.superobj;
        inho364.superobj = obj364;
        obj364.data = inheritingObject.data;
        obj364.outer = this;
        var reader_kitty_outer_365 = function() {
          return this.outer;
        }
        obj364.methods["outer"] = reader_kitty_outer_365;
        function obj_init_364() {
          var origSuperDepth = superDepth;
          superDepth = obj364;
          obj364.annotations = [];
          var func366 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func366.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 138
              var string367 = new GraceString("INITIALIZING WORLD...");
              var call368 = Grace_print(string367);
              lineNumber = 144
              var if369 = var_done;
              lineNumber = 140
              onSelf = true;
              var call370 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call370)) {
                lineNumber = 142
                lineNumber = 141
                var bool371 = new GraceBoolean(false)
                return bool371
              }
              lineNumber = 145
              lineNumber = 127
              lineNumber = 144
              var call372 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call373 = callmethod(this, "document:=", [1], call372);
              lineNumber = 145
              lineNumber = 144
              lineNumber = 145
              var string374 = new GraceString("standard-canvas");
              onSelf = true;
              var call375 = callmethod(this, "document", [0]);
              var call376 = callmethod(call375,"getElementById", [1], string374);
              onSelf = true;
              var call377 = callmethod(this, "canvas:=", [1], call376);
              lineNumber = 147
              lineNumber = 144
              lineNumber = 146
              onSelf = true;
              var call378 = callmethod(this, "canvas", [0]);
              var call379 = callmethod(call378,"width", [0]);
              onSelf = true;
              var call380 = callmethod(this, "canvasWidth:=", [1], call379);
              lineNumber = 149
              lineNumber = 146
              lineNumber = 147
              onSelf = true;
              var call381 = callmethod(this, "canvas", [0]);
              var call382 = callmethod(call381,"height", [0]);
              onSelf = true;
              var call383 = callmethod(this, "canvasHeight:=", [1], call382);
              lineNumber = 150
              lineNumber = 147
              lineNumber = 149
              var bool384 = new GraceBoolean(true)
              onSelf = true;
              var call385 = callmethod(this, "isInit:=", [1], bool384);
              lineNumber = 150
              var string386 = new GraceString("INITIALIZATION FINISHED");
              var call387 = Grace_print(string386);
              return call387
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func366.paramCounts = [
            0,
          ];
          func366.variableArities = [
            false,
          ];
          obj364.methods["init"] = func366;
          func366.definitionLine = 136;
          func366.definitionModule = "kitty";
          var func388 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func388.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 154
              var string389 = new GraceString("STARTING WORLD...");
              var call390 = Grace_print(string389);
              lineNumber = 155
              lineNumber = 147
              lineNumber = 155
              var string391 = new GraceString("canvas");
              var call392 = callmethod(var_dom,"document", [0]);
              var call393 = callmethod(call392,"createElement", [1], string391);
              onSelf = true;
              var call394 = callmethod(this, "backingCanvas:=", [1], call393);
              lineNumber = 157
              lineNumber = 155
              lineNumber = 156
              onSelf = true;
              var call395 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call396 = callmethod(this, "backingCanvas", [0]);
              var call397 = callmethod(call396,"height:=", [1], call395);
              lineNumber = 158
              lineNumber = 155
              lineNumber = 157
              onSelf = true;
              var call398 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call399 = callmethod(this, "backingCanvas", [0]);
              var call400 = callmethod(call399,"width:=", [1], call398);
              lineNumber = 158
              lineNumber = 155
              lineNumber = 158
              var string401 = new GraceString("2d");
              onSelf = true;
              var call402 = callmethod(this, "backingCanvas", [0]);
              var call403 = callmethod(call402,"getContext", [1], string401);
              onSelf = true;
              var call404 = callmethod(this, "backingContext:=", [1], call403);
              lineNumber = 159
              lineNumber = 155
              lineNumber = 159
              var string405 = new GraceString("2d");
              onSelf = true;
              var call406 = callmethod(this, "canvas", [0]);
              var call407 = callmethod(call406,"getContext", [1], string405);
              onSelf = true;
              var call408 = callmethod(this, "mctx:=", [1], call407);
              lineNumber = 160
              var string409 = new GraceString("WORLD STARTED");
              var call410 = Grace_print(string409);
              return call410
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
          obj364.methods["start"] = func388;
          func388.definitionLine = 153;
          func388.definitionModule = "kitty";
          var func411 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func411.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 164
              var string412 = new GraceString("UPDATING WORLD...");
              var call413 = Grace_print(string412);
              lineNumber = 168
              lineNumber = 155
              lineNumber = 167
              onSelf = true;
              var call414 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call415 = callmethod(this, "mctx", [0]);
              var call416 = callmethod(call415,"fillStyle:=", [1], call414);
              lineNumber = 168
              onSelf = true;
              var call417 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call418 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call419 = callmethod(this, "mctx", [0]);
              var call420 = callmethod(call419,"fillRect", [4], new GraceNum(0), new GraceNum(0), call417, call418);
              lineNumber = 169
              onSelf = true;
              var call421 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call422 = callmethod(this, "mctx", [0]);
              var call423 = callmethod(call422,"drawImage", [3], call421, new GraceNum(0), new GraceNum(0));
              lineNumber = 170
              onSelf = true;
              var call424 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call425 = callmethod(this, "background", [0]);
              var call426 = callmethod(call425,"draw", [1], call424);
              lineNumber = 173
              onSelf = true;
              var call427 = callmethod(this, "entities", [0]);
              lineNumber = 177
              var block428 = Grace_allocObject();
              block428.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block428.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block428.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block428.methods["match"] = GraceBlock_match;
              block428.methods["prefix?"] = GraceBlock_lift;
              block428.receiver = this;
              block428.className = 'block<kitty:177>';
              block428.real = function(
                var_entity
              ) {
                sourceObject = this;
                lineNumber = 174
                onSelf = true;
                var call429 = callmethod(this, "mctx", [0]);
                var call430 = callmethod(var_entity,"draw", [1], call429);
                return call430;
              };
              var call431 = callmethod(Grace_prelude,"for()do", [1, 1], call427, block428);
              lineNumber = 177
              var string432 = new GraceString("WORLD UPDATED");
              var call433 = Grace_print(string432);
              return call433
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func411.paramCounts = [
            0,
          ];
          func411.variableArities = [
            false,
          ];
          obj364.methods["update"] = func411;
          func411.definitionLine = 163;
          func411.definitionModule = "kitty";
          var func434 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func434.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 185
              lineNumber = 155
              lineNumber = 184
              onSelf = true;
              var call435 = callmethod(this, "background:=", [1], var_background__39__);
              return call435
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func434.paramCounts = [
            1,
          ];
          func434.variableArities = [
            false,
          ];
          obj364.methods["setBackground"] = func434;
          func434.definitionLine = 183;
          func434.definitionModule = "kitty";
          var func436 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func436.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 188
              onSelf = true;
              var call437 = callmethod(this, "entities", [0]);
              var call438 = callmethod(call437,"add", [1], var_e);
              return call438
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func436.paramTypes = [];
          func436.paramTypes.push([]);
          func436.paramCounts = [
            1,
          ];
          func436.variableArities = [
            false,
          ];
          obj364.methods["addEntity"] = func436;
          func436.definitionLine = 187;
          func436.definitionModule = "kitty";
          sourceObject = obj364;
          lineNumber = 113
          var string439 = new GraceString("CREATING NEW WORLD...");
          var call440 = Grace_print(string439);
          sourceObject = obj364;
          obj364.data["background"] = undefined;
          var reader_kitty_background_441 = function() {
            return this.data["background"];
          }
          obj364.methods["background"] = reader_kitty_background_441;
          obj364.data["background"] = undefined;
          var writer_kitty_background_441 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj364.methods["background:="] = writer_kitty_background_441;
          reader_kitty_background_441.confidential = true;
          writer_kitty_background_441.confidential = true;
          obj364.mutable = true;
          sourceObject = obj364;
          lineNumber = 116
          var string442 = new GraceString("black");
          obj364.data["backgroundColour"] = string442;
          var reader_kitty_backgroundColour_443 = function() {
            return this.data["backgroundColour"];
          }
          obj364.methods["backgroundColour"] = reader_kitty_backgroundColour_443;
          obj364.data["backgroundColour"] = string442;
          var writer_kitty_backgroundColour_443 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj364.methods["backgroundColour:="] = writer_kitty_backgroundColour_443;
          reader_kitty_backgroundColour_443.confidential = true;
          writer_kitty_backgroundColour_443.confidential = true;
          lineNumber = 118;
          moduleName = "kitty";
          lineNumber = 116
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string442)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj364.mutable = true;
          sourceObject = obj364;
          obj364.data["document"] = undefined;
          var reader_kitty_document_444 = function() {
            return this.data["document"];
          }
          obj364.methods["document"] = reader_kitty_document_444;
          obj364.data["document"] = undefined;
          var writer_kitty_document_444 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj364.methods["document:="] = writer_kitty_document_444;
          reader_kitty_document_444.confidential = true;
          writer_kitty_document_444.confidential = true;
          obj364.mutable = true;
          sourceObject = obj364;
          obj364.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_445 = function() {
            return this.data["backingCanvas"];
          }
          obj364.methods["backingCanvas"] = reader_kitty_backingCanvas_445;
          obj364.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_445 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj364.methods["backingCanvas:="] = writer_kitty_backingCanvas_445;
          reader_kitty_backingCanvas_445.confidential = true;
          writer_kitty_backingCanvas_445.confidential = true;
          obj364.mutable = true;
          sourceObject = obj364;
          obj364.data["backingContext"] = undefined;
          var reader_kitty_backingContext_446 = function() {
            return this.data["backingContext"];
          }
          obj364.methods["backingContext"] = reader_kitty_backingContext_446;
          obj364.data["backingContext"] = undefined;
          var writer_kitty_backingContext_446 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj364.methods["backingContext:="] = writer_kitty_backingContext_446;
          reader_kitty_backingContext_446.confidential = true;
          writer_kitty_backingContext_446.confidential = true;
          obj364.mutable = true;
          sourceObject = obj364;
          obj364.data["canvas"] = undefined;
          var reader_kitty_canvas_447 = function() {
            return this.data["canvas"];
          }
          obj364.methods["canvas"] = reader_kitty_canvas_447;
          obj364.data["canvas"] = undefined;
          var writer_kitty_canvas_447 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj364.methods["canvas:="] = writer_kitty_canvas_447;
          reader_kitty_canvas_447.confidential = true;
          writer_kitty_canvas_447.confidential = true;
          obj364.mutable = true;
          sourceObject = obj364;
          obj364.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_448 = function() {
            return this.data["canvasWidth"];
          }
          obj364.methods["canvasWidth"] = reader_kitty_canvasWidth_448;
          obj364.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_448 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj364.methods["canvasWidth:="] = writer_kitty_canvasWidth_448;
          reader_kitty_canvasWidth_448.confidential = true;
          writer_kitty_canvasWidth_448.confidential = true;
          obj364.mutable = true;
          sourceObject = obj364;
          obj364.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_449 = function() {
            return this.data["canvasHeight"];
          }
          obj364.methods["canvasHeight"] = reader_kitty_canvasHeight_449;
          obj364.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_449 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj364.methods["canvasHeight:="] = writer_kitty_canvasHeight_449;
          reader_kitty_canvasHeight_449.confidential = true;
          writer_kitty_canvasHeight_449.confidential = true;
          obj364.mutable = true;
          sourceObject = obj364;
          lineNumber = 127
          var call450 = callmethod(var_collections,"list", [0]);
          var call451 = callmethod(call450,"new", [0]);
          obj364.data["entities"] = call451;
          var reader_kitty_entities_452 = function() {
            return this.data["entities"];
          }
          obj364.methods["entities"] = reader_kitty_entities_452;
          obj364.data["entities"] = call451;
          var writer_kitty_entities_452 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj364.methods["entities:="] = writer_kitty_entities_452;
          reader_kitty_entities_452.confidential = true;
          writer_kitty_entities_452.confidential = true;
          lineNumber = 129;
          moduleName = "kitty";
          lineNumber = 127
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call451)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj364.mutable = true;
          sourceObject = obj364;
          lineNumber = 129
          var bool453 = new GraceBoolean(false)
          obj364.data["isInit"] = bool453;
          var reader_kitty_isInit_454 = function() {
            return this.data["isInit"];
          }
          obj364.methods["isInit"] = reader_kitty_isInit_454;
          obj364.data["isInit"] = bool453;
          var writer_kitty_isInit_454 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj364.methods["isInit:="] = writer_kitty_isInit_454;
          reader_kitty_isInit_454.confidential = true;
          writer_kitty_isInit_454.confidential = true;
          lineNumber = 131;
          moduleName = "kitty";
          lineNumber = 129
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool453)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj364.mutable = true;
          sourceObject = obj364;
          obj364.data["mctx"] = undefined;
          var reader_kitty_mctx_455 = function() {
            return this.data["mctx"];
          }
          obj364.methods["mctx"] = reader_kitty_mctx_455;
          obj364.data["mctx"] = undefined;
          var writer_kitty_mctx_455 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj364.methods["mctx:="] = writer_kitty_mctx_455;
          reader_kitty_mctx_455.confidential = true;
          writer_kitty_mctx_455.confidential = true;
          obj364.mutable = true;
          sourceObject = obj364;
          lineNumber = 133
          onSelf = true;
          var call456 = callmethod(this, "init", [0]);
          sourceObject = obj364;
          sourceObject = obj364;
          sourceObject = obj364;
          sourceObject = obj364;
          sourceObject = obj364;
          sourceObject = obj364;
          lineNumber = 191
          var string457 = new GraceString("WORLD CREATED");
          var call458 = Grace_print(string457);
          superDepth = origSuperDepth;
        }
        obj_init_364.apply(inheritingObject, []);
        return obj364
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj265.methods["new()object"] = func363;
    var func459 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 111
        var string460 = new GraceString("class KittyWorld");
        return string460
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func459.paramCounts = [
    ];
    func459.variableArities = [
    ];
    obj265.methods["asDebugString"] = func459;
    func459.definitionLine = 111;
    func459.definitionModule = "kitty";
    sourceObject = obj265;
    sourceObject = obj265;
    superDepth = origSuperDepth;
  }
  obj_init_265.apply(obj265, []);
  var var_KittyWorld = obj265;
  lineNumber = 194
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
'dom',
'StandardPrelude',
];
if (gctCache)
  gctCache['kitty'] = "methods-of:KittyWorld.new:\n backingCanvas:=\n setBackground\n canvasWidth\n backingCanvas\n start\n isInit\n mctx\n isInit:=\n document:=\n canvasWidth:=\n backgroundColour\n entities:=\n document\n update\n entities\n addEntity\n backgroundColour:=\n canvasHeight:=\n init\n canvas:=\n backingContext\n canvasHeight\n background:=\n mctx:=\n canvas\n background\n backingContext:=\npath:\n kitty\nconstructors-of:KittyEntity:\n new\nfresh-methods:\n Image\n Entity\n World\nconstructors-of:KittyImage:\n new\nclasses:\n KittyImage\n KittyEntity\n KittyWorld\nfresh:Entity:\n posX:=\n posY:=\n setLocation\n rotation:=\n posX\n posY\n draw\n setImage\n rotation\n image:=\n image\n onDestroy\n update\n awake\n getRotation\n getX\n getY\n start\nconfidential:\nfresh:World:\n backingCanvas:=\n canvasHeight:=\n isInit:=\n backingCanvas\n start\n isInit\n mctx\n canvas\n document:=\n canvas:=\n init\n entities:=\n document\n update\n entities\n addEntity\n backgroundColour:=\n setBackground\n backingContext\n canvasWidth:=\n backgroundColour\n canvasHeight\n background:=\n mctx:=\n canvasWidth\n backingContext:=\n background\nconstructors-of:KittyWorld:\n new\nfresh:Image:\n width:=\n imgTag\n height\n draw\n width\n height:=\nmodules:\n StandardPrelude\n mgcollections\nmethods-of:KittyEntity.new:\n posX:=\n posY:=\n setLocation\n rotation:=\n posX\n posY\n draw\n setImage\n rotation\n image:=\n image\n onDestroy\n update\n awake\n getRotation\n getX\n getY\n start\npublic:\n m_world\n m_world:=\n start\n stop\n setWorld\n KittyImage\n Image\n KittyEntity\n Entity\n KittyWorld\n World\nmethods-of:KittyImage.new:\n width:=\n imgTag\n height\n draw\n height:=\n width\n";
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
