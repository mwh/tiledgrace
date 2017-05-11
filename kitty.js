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
  lineNumber = 95
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
      lineNumber = 96
      var obj16 = Grace_allocObject();
      obj16.definitionModule = "kitty";
      obj16.definitionLine = 96;
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
        lineNumber = 97
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
  func15.definitionLine = 95;
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
      obj20.definitionLine = 96;
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
  lineNumber = 176
  var func23 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func23.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (World)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 177
      var obj24 = Grace_allocObject();
      obj24.definitionModule = "kitty";
      obj24.definitionLine = 177;
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
        lineNumber = 178
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
  func23.definitionLine = 176;
  func23.definitionModule = "kitty";
  var func27 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj28 = Grace_allocObject();
      obj28.definitionModule = "kitty";
      obj28.definitionLine = 177;
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
              lineNumber = 59
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
          func205.definitionLine = 58;
          func205.definitionModule = "kitty";
          var func208 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func208.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 64
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
          func208.definitionLine = 63;
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
          func211.definitionLine = 68;
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
          func212.definitionLine = 73;
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
              lineNumber = 79
              lineNumber = 49
              lineNumber = 78
              onSelf = true;
              var call214 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 80
              lineNumber = 49
              lineNumber = 79
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
          func213.definitionLine = 77;
          func213.definitionModule = "kitty";
          var func216 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func216.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 84
              lineNumber = 83
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
          func216.definitionLine = 82;
          func216.definitionModule = "kitty";
          var func218 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func218.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 88
              lineNumber = 87
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
          func218.definitionLine = 86;
          func218.definitionModule = "kitty";
          var func220 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func220.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 92
              lineNumber = 91
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
          func220.definitionLine = 90;
          func220.definitionModule = "kitty";
          sourceObject = obj203;
          lineNumber = 51
          onSelf = true;
          var call222 = callmethod(this, "awake", [0]);
          sourceObject = obj203;
          lineNumber = 53
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
          lineNumber = 58;
          moduleName = "kitty";
          lineNumber = 55
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
    func202.definitionLine = 49;
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
        obj227.definitionLine = 49;
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
              lineNumber = 59
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
          func229.definitionLine = 58;
          func229.definitionModule = "kitty";
          var func232 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func232.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 64
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
          func232.definitionLine = 63;
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
          func235.definitionLine = 68;
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
          func236.definitionLine = 73;
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
              lineNumber = 79
              lineNumber = 49
              lineNumber = 78
              onSelf = true;
              var call238 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 80
              lineNumber = 49
              lineNumber = 79
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
          func237.definitionLine = 77;
          func237.definitionModule = "kitty";
          var func240 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func240.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 84
              lineNumber = 83
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
          func240.definitionLine = 82;
          func240.definitionModule = "kitty";
          var func242 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func242.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 88
              lineNumber = 87
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
          func242.definitionLine = 86;
          func242.definitionModule = "kitty";
          var func244 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func244.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 92
              lineNumber = 91
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
          func244.definitionLine = 90;
          func244.definitionModule = "kitty";
          sourceObject = obj227;
          lineNumber = 51
          onSelf = true;
          var call246 = callmethod(this, "awake", [0]);
          sourceObject = obj227;
          lineNumber = 53
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
          lineNumber = 54;
          moduleName = "kitty";
          lineNumber = 53
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj227.mutable = true;
          sourceObject = obj227;
          lineNumber = 54
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
          lineNumber = 55;
          moduleName = "kitty";
          lineNumber = 54
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj227.mutable = true;
          sourceObject = obj227;
          lineNumber = 55
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
          lineNumber = 58;
          moduleName = "kitty";
          lineNumber = 55
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
        lineNumber = 49
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
    func250.definitionLine = 49;
    func250.definitionModule = "kitty";
    sourceObject = obj200;
    sourceObject = obj200;
    superDepth = origSuperDepth;
  }
  obj_init_200.apply(obj200, []);
  var var_KittyEntity = obj200;
  lineNumber = 95
  lineNumber = 101
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
  func252.definitionLine = 101;
  func252.definitionModule = "kitty";
  var obj253 = Grace_allocObject();
  obj253.definitionModule = "kitty";
  obj253.definitionLine = 101;
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
        obj256.definitionLine = 101;
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
              lineNumber = 128
              var string259 = new GraceString("INITIALIZING WORLD...");
              var call260 = Grace_print(string259);
              lineNumber = 134
              var if261 = var_done;
              lineNumber = 130
              onSelf = true;
              var call262 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call262)) {
                lineNumber = 132
                lineNumber = 131
                var bool263 = new GraceBoolean(false)
                return bool263
              }
              lineNumber = 135
              lineNumber = 101
              lineNumber = 134
              var call264 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call265 = callmethod(this, "document:=", [1], call264);
              lineNumber = 135
              lineNumber = 134
              lineNumber = 135
              var string266 = new GraceString("standard-canvas");
              onSelf = true;
              var call267 = callmethod(this, "document", [0]);
              var call268 = callmethod(call267,"getElementById", [1], string266);
              onSelf = true;
              var call269 = callmethod(this, "canvas:=", [1], call268);
              lineNumber = 137
              lineNumber = 134
              lineNumber = 136
              onSelf = true;
              var call270 = callmethod(this, "canvas", [0]);
              var call271 = callmethod(call270,"width", [0]);
              onSelf = true;
              var call272 = callmethod(this, "canvasWidth:=", [1], call271);
              lineNumber = 139
              lineNumber = 136
              lineNumber = 137
              onSelf = true;
              var call273 = callmethod(this, "canvas", [0]);
              var call274 = callmethod(call273,"height", [0]);
              onSelf = true;
              var call275 = callmethod(this, "canvasHeight:=", [1], call274);
              lineNumber = 140
              lineNumber = 137
              lineNumber = 139
              var bool276 = new GraceBoolean(true)
              onSelf = true;
              var call277 = callmethod(this, "isInit:=", [1], bool276);
              lineNumber = 140
              var string278 = new GraceString("INITIALIZATION FINISHED");
              var call279 = Grace_print(string278);
              return call279
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
          func258.definitionLine = 126;
          func258.definitionModule = "kitty";
          var func280 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func280.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 144
              var string281 = new GraceString("STARTING WORLD...");
              var call282 = Grace_print(string281);
              lineNumber = 145
              lineNumber = 137
              lineNumber = 145
              var string283 = new GraceString("canvas");
              var call284 = callmethod(var_dom,"document", [0]);
              var call285 = callmethod(call284,"createElement", [1], string283);
              onSelf = true;
              var call286 = callmethod(this, "backingCanvas:=", [1], call285);
              lineNumber = 147
              lineNumber = 145
              lineNumber = 146
              onSelf = true;
              var call287 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call288 = callmethod(this, "backingCanvas", [0]);
              var call289 = callmethod(call288,"height:=", [1], call287);
              lineNumber = 148
              lineNumber = 145
              lineNumber = 147
              onSelf = true;
              var call290 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call291 = callmethod(this, "backingCanvas", [0]);
              var call292 = callmethod(call291,"width:=", [1], call290);
              lineNumber = 148
              lineNumber = 145
              lineNumber = 148
              var string293 = new GraceString("2d");
              onSelf = true;
              var call294 = callmethod(this, "backingCanvas", [0]);
              var call295 = callmethod(call294,"getContext", [1], string293);
              onSelf = true;
              var call296 = callmethod(this, "backingContext:=", [1], call295);
              lineNumber = 149
              lineNumber = 145
              lineNumber = 149
              var string297 = new GraceString("2d");
              onSelf = true;
              var call298 = callmethod(this, "canvas", [0]);
              var call299 = callmethod(call298,"getContext", [1], string297);
              onSelf = true;
              var call300 = callmethod(this, "mctx:=", [1], call299);
              lineNumber = 150
              var string301 = new GraceString("WORLD STARTED");
              var call302 = Grace_print(string301);
              return call302
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func280.paramCounts = [
            0,
          ];
          func280.variableArities = [
            false,
          ];
          obj256.methods["start"] = func280;
          func280.definitionLine = 143;
          func280.definitionModule = "kitty";
          var func303 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func303.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 154
              var string304 = new GraceString("UPDATING WORLD...");
              var call305 = Grace_print(string304);
              lineNumber = 156
              lineNumber = 145
              lineNumber = 155
              onSelf = true;
              var call306 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call307 = callmethod(this, "mctx", [0]);
              var call308 = callmethod(call307,"fillStyle:=", [1], call306);
              lineNumber = 156
              onSelf = true;
              var call309 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call310 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call311 = callmethod(this, "mctx", [0]);
              var call312 = callmethod(call311,"fillRect", [4], new GraceNum(0), new GraceNum(0), call309, call310);
              lineNumber = 157
              onSelf = true;
              var call313 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call314 = callmethod(this, "mctx", [0]);
              var call315 = callmethod(call314,"drawImage", [3], call313, new GraceNum(0), new GraceNum(0));
              lineNumber = 158
              onSelf = true;
              var call316 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call317 = callmethod(this, "background", [0]);
              var call318 = callmethod(call317,"draw", [1], call316);
              lineNumber = 159
              var string319 = new GraceString("WORLD UPDATED");
              var call320 = Grace_print(string319);
              return call320
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
          obj256.methods["update"] = func303;
          func303.definitionLine = 153;
          func303.definitionModule = "kitty";
          var func321 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func321.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 167
              lineNumber = 145
              lineNumber = 166
              onSelf = true;
              var call322 = callmethod(this, "background:=", [1], var_background__39__);
              return call322
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func321.paramCounts = [
            1,
          ];
          func321.variableArities = [
            false,
          ];
          obj256.methods["setBackground"] = func321;
          func321.definitionLine = 165;
          func321.definitionModule = "kitty";
          var func323 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func323.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 170
              onSelf = true;
              var call324 = callmethod(this, "entities", [0]);
              var call325 = callmethod(call324,"add", [1], var_e);
              return call325
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func323.paramTypes = [];
          func323.paramTypes.push([]);
          func323.paramCounts = [
            1,
          ];
          func323.variableArities = [
            false,
          ];
          obj256.methods["addEntity"] = func323;
          func323.definitionLine = 169;
          func323.definitionModule = "kitty";
          sourceObject = obj256;
          lineNumber = 103
          var string326 = new GraceString("CREATING NEW WORLD...");
          var call327 = Grace_print(string326);
          sourceObject = obj256;
          obj256.data["background"] = undefined;
          var reader_kitty_background_328 = function() {
            return this.data["background"];
          }
          obj256.methods["background"] = reader_kitty_background_328;
          obj256.data["background"] = undefined;
          var writer_kitty_background_328 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj256.methods["background:="] = writer_kitty_background_328;
          reader_kitty_background_328.confidential = true;
          writer_kitty_background_328.confidential = true;
          obj256.mutable = true;
          sourceObject = obj256;
          lineNumber = 106
          var string329 = new GraceString("black");
          obj256.data["backgroundColour"] = string329;
          var reader_kitty_backgroundColour_330 = function() {
            return this.data["backgroundColour"];
          }
          obj256.methods["backgroundColour"] = reader_kitty_backgroundColour_330;
          obj256.data["backgroundColour"] = string329;
          var writer_kitty_backgroundColour_330 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj256.methods["backgroundColour:="] = writer_kitty_backgroundColour_330;
          reader_kitty_backgroundColour_330.confidential = true;
          writer_kitty_backgroundColour_330.confidential = true;
          lineNumber = 108;
          moduleName = "kitty";
          lineNumber = 106
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string329)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj256.mutable = true;
          sourceObject = obj256;
          obj256.data["document"] = undefined;
          var reader_kitty_document_331 = function() {
            return this.data["document"];
          }
          obj256.methods["document"] = reader_kitty_document_331;
          obj256.data["document"] = undefined;
          var writer_kitty_document_331 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj256.methods["document:="] = writer_kitty_document_331;
          reader_kitty_document_331.confidential = true;
          writer_kitty_document_331.confidential = true;
          obj256.mutable = true;
          sourceObject = obj256;
          obj256.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_332 = function() {
            return this.data["backingCanvas"];
          }
          obj256.methods["backingCanvas"] = reader_kitty_backingCanvas_332;
          obj256.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_332 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj256.methods["backingCanvas:="] = writer_kitty_backingCanvas_332;
          reader_kitty_backingCanvas_332.confidential = true;
          writer_kitty_backingCanvas_332.confidential = true;
          obj256.mutable = true;
          sourceObject = obj256;
          obj256.data["backingContext"] = undefined;
          var reader_kitty_backingContext_333 = function() {
            return this.data["backingContext"];
          }
          obj256.methods["backingContext"] = reader_kitty_backingContext_333;
          obj256.data["backingContext"] = undefined;
          var writer_kitty_backingContext_333 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj256.methods["backingContext:="] = writer_kitty_backingContext_333;
          reader_kitty_backingContext_333.confidential = true;
          writer_kitty_backingContext_333.confidential = true;
          obj256.mutable = true;
          sourceObject = obj256;
          obj256.data["canvas"] = undefined;
          var reader_kitty_canvas_334 = function() {
            return this.data["canvas"];
          }
          obj256.methods["canvas"] = reader_kitty_canvas_334;
          obj256.data["canvas"] = undefined;
          var writer_kitty_canvas_334 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj256.methods["canvas:="] = writer_kitty_canvas_334;
          reader_kitty_canvas_334.confidential = true;
          writer_kitty_canvas_334.confidential = true;
          obj256.mutable = true;
          sourceObject = obj256;
          obj256.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_335 = function() {
            return this.data["canvasWidth"];
          }
          obj256.methods["canvasWidth"] = reader_kitty_canvasWidth_335;
          obj256.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_335 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj256.methods["canvasWidth:="] = writer_kitty_canvasWidth_335;
          reader_kitty_canvasWidth_335.confidential = true;
          writer_kitty_canvasWidth_335.confidential = true;
          obj256.mutable = true;
          sourceObject = obj256;
          obj256.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_336 = function() {
            return this.data["canvasHeight"];
          }
          obj256.methods["canvasHeight"] = reader_kitty_canvasHeight_336;
          obj256.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_336 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj256.methods["canvasHeight:="] = writer_kitty_canvasHeight_336;
          reader_kitty_canvasHeight_336.confidential = true;
          writer_kitty_canvasHeight_336.confidential = true;
          obj256.mutable = true;
          sourceObject = obj256;
          lineNumber = 117
          var call337 = callmethod(var_collections,"list", [0]);
          var call338 = callmethod(call337,"new", [0]);
          obj256.data["entities"] = call338;
          var reader_kitty_entities_339 = function() {
            return this.data["entities"];
          }
          obj256.methods["entities"] = reader_kitty_entities_339;
          obj256.data["entities"] = call338;
          var writer_kitty_entities_339 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj256.methods["entities:="] = writer_kitty_entities_339;
          reader_kitty_entities_339.confidential = true;
          writer_kitty_entities_339.confidential = true;
          lineNumber = 119;
          moduleName = "kitty";
          lineNumber = 117
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call338)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj256.mutable = true;
          sourceObject = obj256;
          lineNumber = 119
          var bool340 = new GraceBoolean(false)
          obj256.data["isInit"] = bool340;
          var reader_kitty_isInit_341 = function() {
            return this.data["isInit"];
          }
          obj256.methods["isInit"] = reader_kitty_isInit_341;
          obj256.data["isInit"] = bool340;
          var writer_kitty_isInit_341 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj256.methods["isInit:="] = writer_kitty_isInit_341;
          reader_kitty_isInit_341.confidential = true;
          writer_kitty_isInit_341.confidential = true;
          lineNumber = 121;
          moduleName = "kitty";
          lineNumber = 119
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool340)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj256.mutable = true;
          sourceObject = obj256;
          obj256.data["mctx"] = undefined;
          var reader_kitty_mctx_342 = function() {
            return this.data["mctx"];
          }
          obj256.methods["mctx"] = reader_kitty_mctx_342;
          obj256.data["mctx"] = undefined;
          var writer_kitty_mctx_342 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj256.methods["mctx:="] = writer_kitty_mctx_342;
          reader_kitty_mctx_342.confidential = true;
          writer_kitty_mctx_342.confidential = true;
          obj256.mutable = true;
          sourceObject = obj256;
          lineNumber = 123
          onSelf = true;
          var call343 = callmethod(this, "init", [0]);
          sourceObject = obj256;
          sourceObject = obj256;
          sourceObject = obj256;
          sourceObject = obj256;
          sourceObject = obj256;
          sourceObject = obj256;
          lineNumber = 173
          var string344 = new GraceString("WORLD CREATED");
          var call345 = Grace_print(string344);
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
    func255.definitionLine = 101;
    func255.definitionModule = "kitty";
    var func346 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj347 = Grace_allocObject();
        obj347.definitionModule = "kitty";
        obj347.definitionLine = 101;
        var inho347 = inheritingObject;
        while (inho347.superobj) inho347 = inho347.superobj;
        inho347.superobj = obj347;
        obj347.data = inheritingObject.data;
        obj347.outer = this;
        var reader_kitty_outer_348 = function() {
          return this.outer;
        }
        obj347.methods["outer"] = reader_kitty_outer_348;
        function obj_init_347() {
          var origSuperDepth = superDepth;
          superDepth = obj347;
          obj347.annotations = [];
          var func349 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func349.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 128
              var string350 = new GraceString("INITIALIZING WORLD...");
              var call351 = Grace_print(string350);
              lineNumber = 134
              var if352 = var_done;
              lineNumber = 130
              onSelf = true;
              var call353 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call353)) {
                lineNumber = 132
                lineNumber = 131
                var bool354 = new GraceBoolean(false)
                return bool354
              }
              lineNumber = 135
              lineNumber = 117
              lineNumber = 134
              var call355 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call356 = callmethod(this, "document:=", [1], call355);
              lineNumber = 135
              lineNumber = 134
              lineNumber = 135
              var string357 = new GraceString("standard-canvas");
              onSelf = true;
              var call358 = callmethod(this, "document", [0]);
              var call359 = callmethod(call358,"getElementById", [1], string357);
              onSelf = true;
              var call360 = callmethod(this, "canvas:=", [1], call359);
              lineNumber = 137
              lineNumber = 134
              lineNumber = 136
              onSelf = true;
              var call361 = callmethod(this, "canvas", [0]);
              var call362 = callmethod(call361,"width", [0]);
              onSelf = true;
              var call363 = callmethod(this, "canvasWidth:=", [1], call362);
              lineNumber = 139
              lineNumber = 136
              lineNumber = 137
              onSelf = true;
              var call364 = callmethod(this, "canvas", [0]);
              var call365 = callmethod(call364,"height", [0]);
              onSelf = true;
              var call366 = callmethod(this, "canvasHeight:=", [1], call365);
              lineNumber = 140
              lineNumber = 137
              lineNumber = 139
              var bool367 = new GraceBoolean(true)
              onSelf = true;
              var call368 = callmethod(this, "isInit:=", [1], bool367);
              lineNumber = 140
              var string369 = new GraceString("INITIALIZATION FINISHED");
              var call370 = Grace_print(string369);
              return call370
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func349.paramCounts = [
            0,
          ];
          func349.variableArities = [
            false,
          ];
          obj347.methods["init"] = func349;
          func349.definitionLine = 126;
          func349.definitionModule = "kitty";
          var func371 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func371.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 144
              var string372 = new GraceString("STARTING WORLD...");
              var call373 = Grace_print(string372);
              lineNumber = 145
              lineNumber = 137
              lineNumber = 145
              var string374 = new GraceString("canvas");
              var call375 = callmethod(var_dom,"document", [0]);
              var call376 = callmethod(call375,"createElement", [1], string374);
              onSelf = true;
              var call377 = callmethod(this, "backingCanvas:=", [1], call376);
              lineNumber = 147
              lineNumber = 145
              lineNumber = 146
              onSelf = true;
              var call378 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call379 = callmethod(this, "backingCanvas", [0]);
              var call380 = callmethod(call379,"height:=", [1], call378);
              lineNumber = 148
              lineNumber = 145
              lineNumber = 147
              onSelf = true;
              var call381 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call382 = callmethod(this, "backingCanvas", [0]);
              var call383 = callmethod(call382,"width:=", [1], call381);
              lineNumber = 148
              lineNumber = 145
              lineNumber = 148
              var string384 = new GraceString("2d");
              onSelf = true;
              var call385 = callmethod(this, "backingCanvas", [0]);
              var call386 = callmethod(call385,"getContext", [1], string384);
              onSelf = true;
              var call387 = callmethod(this, "backingContext:=", [1], call386);
              lineNumber = 149
              lineNumber = 145
              lineNumber = 149
              var string388 = new GraceString("2d");
              onSelf = true;
              var call389 = callmethod(this, "canvas", [0]);
              var call390 = callmethod(call389,"getContext", [1], string388);
              onSelf = true;
              var call391 = callmethod(this, "mctx:=", [1], call390);
              lineNumber = 150
              var string392 = new GraceString("WORLD STARTED");
              var call393 = Grace_print(string392);
              return call393
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
          obj347.methods["start"] = func371;
          func371.definitionLine = 143;
          func371.definitionModule = "kitty";
          var func394 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func394.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 154
              var string395 = new GraceString("UPDATING WORLD...");
              var call396 = Grace_print(string395);
              lineNumber = 156
              lineNumber = 145
              lineNumber = 155
              onSelf = true;
              var call397 = callmethod(this, "backgroundColour", [0]);
              onSelf = true;
              var call398 = callmethod(this, "mctx", [0]);
              var call399 = callmethod(call398,"fillStyle:=", [1], call397);
              lineNumber = 156
              onSelf = true;
              var call400 = callmethod(this, "canvasWidth", [0]);
              onSelf = true;
              var call401 = callmethod(this, "canvasHeight", [0]);
              onSelf = true;
              var call402 = callmethod(this, "mctx", [0]);
              var call403 = callmethod(call402,"fillRect", [4], new GraceNum(0), new GraceNum(0), call400, call401);
              lineNumber = 157
              onSelf = true;
              var call404 = callmethod(this, "backingCanvas", [0]);
              onSelf = true;
              var call405 = callmethod(this, "mctx", [0]);
              var call406 = callmethod(call405,"drawImage", [3], call404, new GraceNum(0), new GraceNum(0));
              lineNumber = 158
              onSelf = true;
              var call407 = callmethod(this, "mctx", [0]);
              onSelf = true;
              var call408 = callmethod(this, "background", [0]);
              var call409 = callmethod(call408,"draw", [1], call407);
              lineNumber = 159
              var string410 = new GraceString("WORLD UPDATED");
              var call411 = Grace_print(string410);
              return call411
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
          obj347.methods["update"] = func394;
          func394.definitionLine = 153;
          func394.definitionModule = "kitty";
          var func412 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func412.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 167
              lineNumber = 145
              lineNumber = 166
              onSelf = true;
              var call413 = callmethod(this, "background:=", [1], var_background__39__);
              return call413
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func412.paramCounts = [
            1,
          ];
          func412.variableArities = [
            false,
          ];
          obj347.methods["setBackground"] = func412;
          func412.definitionLine = 165;
          func412.definitionModule = "kitty";
          var func414 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func414.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 170
              onSelf = true;
              var call415 = callmethod(this, "entities", [0]);
              var call416 = callmethod(call415,"add", [1], var_e);
              return call416
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func414.paramTypes = [];
          func414.paramTypes.push([]);
          func414.paramCounts = [
            1,
          ];
          func414.variableArities = [
            false,
          ];
          obj347.methods["addEntity"] = func414;
          func414.definitionLine = 169;
          func414.definitionModule = "kitty";
          sourceObject = obj347;
          lineNumber = 103
          var string417 = new GraceString("CREATING NEW WORLD...");
          var call418 = Grace_print(string417);
          sourceObject = obj347;
          obj347.data["background"] = undefined;
          var reader_kitty_background_419 = function() {
            return this.data["background"];
          }
          obj347.methods["background"] = reader_kitty_background_419;
          obj347.data["background"] = undefined;
          var writer_kitty_background_419 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj347.methods["background:="] = writer_kitty_background_419;
          reader_kitty_background_419.confidential = true;
          writer_kitty_background_419.confidential = true;
          obj347.mutable = true;
          sourceObject = obj347;
          lineNumber = 106
          var string420 = new GraceString("black");
          obj347.data["backgroundColour"] = string420;
          var reader_kitty_backgroundColour_421 = function() {
            return this.data["backgroundColour"];
          }
          obj347.methods["backgroundColour"] = reader_kitty_backgroundColour_421;
          obj347.data["backgroundColour"] = string420;
          var writer_kitty_backgroundColour_421 = function(argcv, o) {
            this.data["backgroundColour"] = o;
          }
          obj347.methods["backgroundColour:="] = writer_kitty_backgroundColour_421;
          reader_kitty_backgroundColour_421.confidential = true;
          writer_kitty_backgroundColour_421.confidential = true;
          lineNumber = 108;
          moduleName = "kitty";
          lineNumber = 106
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], string420)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'backgroundColour' to be of type Unknown"))
          obj347.mutable = true;
          sourceObject = obj347;
          obj347.data["document"] = undefined;
          var reader_kitty_document_422 = function() {
            return this.data["document"];
          }
          obj347.methods["document"] = reader_kitty_document_422;
          obj347.data["document"] = undefined;
          var writer_kitty_document_422 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj347.methods["document:="] = writer_kitty_document_422;
          reader_kitty_document_422.confidential = true;
          writer_kitty_document_422.confidential = true;
          obj347.mutable = true;
          sourceObject = obj347;
          obj347.data["backingCanvas"] = undefined;
          var reader_kitty_backingCanvas_423 = function() {
            return this.data["backingCanvas"];
          }
          obj347.methods["backingCanvas"] = reader_kitty_backingCanvas_423;
          obj347.data["backingCanvas"] = undefined;
          var writer_kitty_backingCanvas_423 = function(argcv, o) {
            this.data["backingCanvas"] = o;
          }
          obj347.methods["backingCanvas:="] = writer_kitty_backingCanvas_423;
          reader_kitty_backingCanvas_423.confidential = true;
          writer_kitty_backingCanvas_423.confidential = true;
          obj347.mutable = true;
          sourceObject = obj347;
          obj347.data["backingContext"] = undefined;
          var reader_kitty_backingContext_424 = function() {
            return this.data["backingContext"];
          }
          obj347.methods["backingContext"] = reader_kitty_backingContext_424;
          obj347.data["backingContext"] = undefined;
          var writer_kitty_backingContext_424 = function(argcv, o) {
            this.data["backingContext"] = o;
          }
          obj347.methods["backingContext:="] = writer_kitty_backingContext_424;
          reader_kitty_backingContext_424.confidential = true;
          writer_kitty_backingContext_424.confidential = true;
          obj347.mutable = true;
          sourceObject = obj347;
          obj347.data["canvas"] = undefined;
          var reader_kitty_canvas_425 = function() {
            return this.data["canvas"];
          }
          obj347.methods["canvas"] = reader_kitty_canvas_425;
          obj347.data["canvas"] = undefined;
          var writer_kitty_canvas_425 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj347.methods["canvas:="] = writer_kitty_canvas_425;
          reader_kitty_canvas_425.confidential = true;
          writer_kitty_canvas_425.confidential = true;
          obj347.mutable = true;
          sourceObject = obj347;
          obj347.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_426 = function() {
            return this.data["canvasWidth"];
          }
          obj347.methods["canvasWidth"] = reader_kitty_canvasWidth_426;
          obj347.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_426 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj347.methods["canvasWidth:="] = writer_kitty_canvasWidth_426;
          reader_kitty_canvasWidth_426.confidential = true;
          writer_kitty_canvasWidth_426.confidential = true;
          obj347.mutable = true;
          sourceObject = obj347;
          obj347.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_427 = function() {
            return this.data["canvasHeight"];
          }
          obj347.methods["canvasHeight"] = reader_kitty_canvasHeight_427;
          obj347.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_427 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj347.methods["canvasHeight:="] = writer_kitty_canvasHeight_427;
          reader_kitty_canvasHeight_427.confidential = true;
          writer_kitty_canvasHeight_427.confidential = true;
          obj347.mutable = true;
          sourceObject = obj347;
          lineNumber = 117
          var call428 = callmethod(var_collections,"list", [0]);
          var call429 = callmethod(call428,"new", [0]);
          obj347.data["entities"] = call429;
          var reader_kitty_entities_430 = function() {
            return this.data["entities"];
          }
          obj347.methods["entities"] = reader_kitty_entities_430;
          obj347.data["entities"] = call429;
          var writer_kitty_entities_430 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj347.methods["entities:="] = writer_kitty_entities_430;
          reader_kitty_entities_430.confidential = true;
          writer_kitty_entities_430.confidential = true;
          lineNumber = 119;
          moduleName = "kitty";
          lineNumber = 117
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call429)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj347.mutable = true;
          sourceObject = obj347;
          lineNumber = 119
          var bool431 = new GraceBoolean(false)
          obj347.data["isInit"] = bool431;
          var reader_kitty_isInit_432 = function() {
            return this.data["isInit"];
          }
          obj347.methods["isInit"] = reader_kitty_isInit_432;
          obj347.data["isInit"] = bool431;
          var writer_kitty_isInit_432 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj347.methods["isInit:="] = writer_kitty_isInit_432;
          reader_kitty_isInit_432.confidential = true;
          writer_kitty_isInit_432.confidential = true;
          lineNumber = 121;
          moduleName = "kitty";
          lineNumber = 119
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool431)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj347.mutable = true;
          sourceObject = obj347;
          obj347.data["mctx"] = undefined;
          var reader_kitty_mctx_433 = function() {
            return this.data["mctx"];
          }
          obj347.methods["mctx"] = reader_kitty_mctx_433;
          obj347.data["mctx"] = undefined;
          var writer_kitty_mctx_433 = function(argcv, o) {
            this.data["mctx"] = o;
          }
          obj347.methods["mctx:="] = writer_kitty_mctx_433;
          reader_kitty_mctx_433.confidential = true;
          writer_kitty_mctx_433.confidential = true;
          obj347.mutable = true;
          sourceObject = obj347;
          lineNumber = 123
          onSelf = true;
          var call434 = callmethod(this, "init", [0]);
          sourceObject = obj347;
          sourceObject = obj347;
          sourceObject = obj347;
          sourceObject = obj347;
          sourceObject = obj347;
          sourceObject = obj347;
          lineNumber = 173
          var string435 = new GraceString("WORLD CREATED");
          var call436 = Grace_print(string435);
          superDepth = origSuperDepth;
        }
        obj_init_347.apply(inheritingObject, []);
        return obj347
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj253.methods["new()object"] = func346;
    var func437 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 101
        var string438 = new GraceString("class KittyWorld");
        return string438
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func437.paramCounts = [
    ];
    func437.variableArities = [
    ];
    obj253.methods["asDebugString"] = func437;
    func437.definitionLine = 101;
    func437.definitionModule = "kitty";
    sourceObject = obj253;
    sourceObject = obj253;
    superDepth = origSuperDepth;
  }
  obj_init_253.apply(obj253, []);
  var var_KittyWorld = obj253;
  lineNumber = 176
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
'dom',
'StandardPrelude',
];
if (gctCache)
  gctCache['kitty'] = "constructors-of:KittyEntity:\n new\npath:\n kitty\nclasses:\n KittyImage\n KittyEntity\n KittyWorld\nfresh:Entity:\n rotation:=\n awake\n posX\n posY\n start\n rotation\n onDestroy\n getX\n getY\n posX:=\n posY:=\n update\n setLocation\n getRotation\nconfidential:\nconstructors-of:KittyWorld:\n new\nfresh:Image:\n width:=\n imgTag\n draw\n height\n width\n height:=\nfresh-methods:\n Image\n Entity\n World\nmodules:\n StandardPrelude\n mgcollections\nmethods-of:KittyEntity.new:\n rotation:=\n awake\n posX\n posY\n start\n rotation\n onDestroy\n getX\n getY\n posX:=\n posY:=\n update\n getRotation\n setLocation\nconstructors-of:KittyImage:\n new\npublic:\n m_world\n m_world:=\n start\n stop\n setWorld\n KittyImage\n Image\n KittyEntity\n Entity\n KittyWorld\n World\nmethods-of:KittyImage.new:\n width:=\n height\n draw\n imgTag\n height:=\n width\nfresh:World:\n addEntity\n isInit:=\n entities:=\n setBackground\n isInit\n backingContext\n canvasWidth:=\n document:=\n backgroundColour:=\n canvasWidth\n document\n backingCanvas:=\n update\n mctx\n entities\n backgroundColour\n backingContext:=\n canvasHeight:=\n mctx:=\n canvas:=\n init\n canvasHeight\n backingCanvas\n background:=\n canvas\n start\n background\nmethods-of:KittyWorld.new:\n addEntity\n isInit:=\n entities:=\n setBackground\n isInit\n backingContext\n canvasWidth:=\n document:=\n backingContext:=\n canvasWidth\n document\n backingCanvas:=\n update\n mctx\n entities\n init\n backingCanvas\n canvasHeight:=\n mctx:=\n canvas:=\n backgroundColour\n canvasHeight\n backgroundColour:=\n background:=\n canvas\n start\n background\n";
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
    "        mctx.fillStyle := backgroundColour",
    "        mctx.fillRect(0, 0, canvasWidth, canvasHeight)",
    "        mctx.drawImage(backingCanvas, 0, 0)",
    "        background.draw(mctx)",
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
