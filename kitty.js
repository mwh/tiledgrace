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
  lineNumber = 155
  var func23 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func23.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (World)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 156
      var obj24 = Grace_allocObject();
      obj24.definitionModule = "kitty";
      obj24.definitionLine = 156;
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
        lineNumber = 157
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
  func23.definitionLine = 155;
  func23.definitionModule = "kitty";
  var func27 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj28 = Grace_allocObject();
      obj28.definitionModule = "kitty";
      obj28.definitionLine = 156;
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
            var var_canvas__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func40.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 32
              var string41 = new GraceString("");
              onSelf = true;
              var call43 = callmethod(this, "imgTag", [0]);
              var call44 = callmethod(call43,"src", [0]);
              var string46 = new GraceString("DRAWING IMAGE: ");
              var opresult48 = callmethod(string46, "++", [1], call44);
              var opresult50 = callmethod(opresult48, "++", [1], string41);
              var call51 = Grace_print(opresult50);
              lineNumber = 33
              var call52 = callmethod(var_canvas__39__,"translate", [2], new GraceNum(0), new GraceNum(0));
              lineNumber = 34
              var call53 = callmethod(var_canvas__39__,"save", [0]);
              lineNumber = 35
              onSelf = true;
              var call54 = callmethod(this, "imgTag", [0]);
              onSelf = true;
              var call56 = callmethod(this, "width", [0]);
              var call57 = callmethod(call56,"prefix-", [0]);
              var quotient59 = callmethod(call57, "/", [1], new GraceNum(2));
              onSelf = true;
              var call61 = callmethod(this, "height", [0]);
              var call62 = callmethod(call61,"prefix-", [0]);
              var quotient64 = callmethod(call62, "/", [1], new GraceNum(2));
              onSelf = true;
              var call65 = callmethod(this, "width", [0]);
              onSelf = true;
              var call66 = callmethod(this, "height", [0]);
              var call67 = callmethod(var_canvas__39__,"drawImage", [5], call54, quotient59, quotient64, call65, call66);
              lineNumber = 36
              var call68 = callmethod(var_canvas__39__,"restore", [0]);
              lineNumber = 37
              var string69 = new GraceString(" DRAWN");
              onSelf = true;
              var call71 = callmethod(this, "imgTag", [0]);
              var call72 = callmethod(call71,"src", [0]);
              var string74 = new GraceString("IMAGE: ");
              var opresult76 = callmethod(string74, "++", [1], call72);
              var opresult78 = callmethod(opresult76, "++", [1], string69);
              var call79 = Grace_print(opresult78);
              return call79
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
          var string80 = new GraceString("");
          var string83 = new GraceString("CREATING NEW IMAGE: ");
          var opresult85 = callmethod(string83, "++", [1], var_url__39__);
          var opresult87 = callmethod(opresult85, "++", [1], string80);
          var call88 = Grace_print(opresult87);
          sourceObject = obj38;
          lineNumber = 25
          var string89 = new GraceString("img");
          var call90 = callmethod(var_dom,"document", [0]);
          var call91 = callmethod(call90,"createElement", [1], string89);
          obj38.data["imgTag"] = call91;
          var reader_kitty_imgTag_92 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_92.def = true;
          reader_kitty_imgTag_92.confidential = true;
          obj38.methods["imgTag"] = reader_kitty_imgTag_92;
          lineNumber = 25;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call91)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj38;
          lineNumber = 28
          lineNumber = 25
          lineNumber = 26
          onSelf = true;
          var call93 = callmethod(this, "imgTag", [0]);
          var call94 = callmethod(call93,"src:=", [1], var_url__39__);
          sourceObject = obj38;
          lineNumber = 28
          obj38.data["height"] = new GraceNum(64);
          var reader_kitty_height_95 = function() {
            return this.data["height"];
          }
          obj38.methods["height"] = reader_kitty_height_95;
          obj38.data["height"] = new GraceNum(64);
          var writer_kitty_height_95 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj38.methods["height:="] = writer_kitty_height_95;
          reader_kitty_height_95.confidential = true;
          writer_kitty_height_95.confidential = true;
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
          var reader_kitty_width_96 = function() {
            return this.data["width"];
          }
          obj38.methods["width"] = reader_kitty_width_96;
          obj38.data["width"] = new GraceNum(64);
          var writer_kitty_width_96 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj38.methods["width:="] = writer_kitty_width_96;
          reader_kitty_width_96.confidential = true;
          writer_kitty_width_96.confidential = true;
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
          lineNumber = 40
          var string97 = new GraceString("");
          var string100 = new GraceString("CREATED NEW IMAGE: ");
          var opresult102 = callmethod(string100, "++", [1], var_url__39__);
          var opresult104 = callmethod(opresult102, "++", [1], string97);
          var call105 = Grace_print(opresult104);
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
    var func106 = function(argcv) {
      var curarg = 1;
      var var_url__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj107 = Grace_allocObject();
        obj107.definitionModule = "kitty";
        obj107.definitionLine = 22;
        var inho107 = inheritingObject;
        while (inho107.superobj) inho107 = inho107.superobj;
        inho107.superobj = obj107;
        obj107.data = inheritingObject.data;
        obj107.outer = this;
        var reader_kitty_outer_108 = function() {
          return this.outer;
        }
        obj107.methods["outer"] = reader_kitty_outer_108;
        function obj_init_107() {
          var origSuperDepth = superDepth;
          superDepth = obj107;
          obj107.annotations = [];
          var func109 = function(argcv) {
            var curarg = 1;
            var var_canvas__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func109.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 32
              var string110 = new GraceString("");
              onSelf = true;
              var call112 = callmethod(this, "imgTag", [0]);
              var call113 = callmethod(call112,"src", [0]);
              var string115 = new GraceString("DRAWING IMAGE: ");
              var opresult117 = callmethod(string115, "++", [1], call113);
              var opresult119 = callmethod(opresult117, "++", [1], string110);
              var call120 = Grace_print(opresult119);
              lineNumber = 33
              var call121 = callmethod(var_canvas__39__,"translate", [2], new GraceNum(0), new GraceNum(0));
              lineNumber = 34
              var call122 = callmethod(var_canvas__39__,"save", [0]);
              lineNumber = 35
              onSelf = true;
              var call123 = callmethod(this, "imgTag", [0]);
              onSelf = true;
              var call125 = callmethod(this, "width", [0]);
              var call126 = callmethod(call125,"prefix-", [0]);
              var quotient128 = callmethod(call126, "/", [1], new GraceNum(2));
              onSelf = true;
              var call130 = callmethod(this, "height", [0]);
              var call131 = callmethod(call130,"prefix-", [0]);
              var quotient133 = callmethod(call131, "/", [1], new GraceNum(2));
              onSelf = true;
              var call134 = callmethod(this, "width", [0]);
              onSelf = true;
              var call135 = callmethod(this, "height", [0]);
              var call136 = callmethod(var_canvas__39__,"drawImage", [5], call123, quotient128, quotient133, call134, call135);
              lineNumber = 36
              var call137 = callmethod(var_canvas__39__,"restore", [0]);
              lineNumber = 37
              var string138 = new GraceString(" DRAWN");
              onSelf = true;
              var call140 = callmethod(this, "imgTag", [0]);
              var call141 = callmethod(call140,"src", [0]);
              var string143 = new GraceString("IMAGE: ");
              var opresult145 = callmethod(string143, "++", [1], call141);
              var opresult147 = callmethod(opresult145, "++", [1], string138);
              var call148 = Grace_print(opresult147);
              return call148
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func109.paramCounts = [
            1,
          ];
          func109.variableArities = [
            false,
          ];
          obj107.methods["draw"] = func109;
          func109.definitionLine = 31;
          func109.definitionModule = "kitty";
          sourceObject = obj107;
          lineNumber = 24
          var string149 = new GraceString("");
          var string152 = new GraceString("CREATING NEW IMAGE: ");
          var opresult154 = callmethod(string152, "++", [1], var_url__39__);
          var opresult156 = callmethod(opresult154, "++", [1], string149);
          var call157 = Grace_print(opresult156);
          sourceObject = obj107;
          lineNumber = 25
          var string158 = new GraceString("img");
          var call159 = callmethod(var_dom,"document", [0]);
          var call160 = callmethod(call159,"createElement", [1], string158);
          obj107.data["imgTag"] = call160;
          var reader_kitty_imgTag_161 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_161.def = true;
          reader_kitty_imgTag_161.confidential = true;
          obj107.methods["imgTag"] = reader_kitty_imgTag_161;
          lineNumber = 25;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call160)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj107;
          lineNumber = 28
          lineNumber = 25
          lineNumber = 26
          onSelf = true;
          var call162 = callmethod(this, "imgTag", [0]);
          var call163 = callmethod(call162,"src:=", [1], var_url__39__);
          sourceObject = obj107;
          lineNumber = 28
          obj107.data["height"] = new GraceNum(64);
          var reader_kitty_height_164 = function() {
            return this.data["height"];
          }
          obj107.methods["height"] = reader_kitty_height_164;
          obj107.data["height"] = new GraceNum(64);
          var writer_kitty_height_164 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj107.methods["height:="] = writer_kitty_height_164;
          reader_kitty_height_164.confidential = true;
          writer_kitty_height_164.confidential = true;
          lineNumber = 29;
          moduleName = "kitty";
          lineNumber = 28
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(64))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj107.mutable = true;
          sourceObject = obj107;
          lineNumber = 29
          obj107.data["width"] = new GraceNum(64);
          var reader_kitty_width_165 = function() {
            return this.data["width"];
          }
          obj107.methods["width"] = reader_kitty_width_165;
          obj107.data["width"] = new GraceNum(64);
          var writer_kitty_width_165 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj107.methods["width:="] = writer_kitty_width_165;
          reader_kitty_width_165.confidential = true;
          writer_kitty_width_165.confidential = true;
          lineNumber = 31;
          moduleName = "kitty";
          lineNumber = 29
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(64))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj107.mutable = true;
          sourceObject = obj107;
          sourceObject = obj107;
          lineNumber = 40
          var string166 = new GraceString("");
          var string169 = new GraceString("CREATED NEW IMAGE: ");
          var opresult171 = callmethod(string169, "++", [1], var_url__39__);
          var opresult173 = callmethod(opresult171, "++", [1], string166);
          var call174 = Grace_print(opresult173);
          superDepth = origSuperDepth;
        }
        obj_init_107.apply(inheritingObject, []);
        return obj107
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj35.methods["new()object"] = func106;
    var func175 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 22
        var string176 = new GraceString("class KittyImage");
        return string176
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func175.paramCounts = [
    ];
    func175.variableArities = [
    ];
    obj35.methods["asDebugString"] = func175;
    func175.definitionLine = 22;
    func175.definitionModule = "kitty";
    sourceObject = obj35;
    sourceObject = obj35;
    superDepth = origSuperDepth;
  }
  obj_init_35.apply(obj35, []);
  var var_KittyImage = obj35;
  lineNumber = 43
  lineNumber = 49
  var func177 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func177.paramCounts[0])
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
  func177.paramCounts = [
    0,
  ];
  func177.variableArities = [
    false,
  ];
  this.methods["KittyEntity"] = func177;
  func177.definitionLine = 49;
  func177.definitionModule = "kitty";
  var obj178 = Grace_allocObject();
  obj178.definitionModule = "kitty";
  obj178.definitionLine = 49;
  obj178.outer = this;
  var reader_kitty_outer_179 = function() {
    return this.outer;
  }
  obj178.methods["outer"] = reader_kitty_outer_179;
  function obj_init_178() {
    var origSuperDepth = superDepth;
    superDepth = obj178;
    obj178.annotations = [];
    var func180 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func180.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj181 = Grace_allocObject();
        obj181.definitionModule = "kitty";
        obj181.definitionLine = 49;
        obj181.outer = this;
        var reader_kitty_outer_182 = function() {
          return this.outer;
        }
        obj181.methods["outer"] = reader_kitty_outer_182;
        function obj_init_181() {
          var origSuperDepth = superDepth;
          superDepth = obj181;
          obj181.annotations = [];
          var func183 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func183.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 59
              var string184 = new GraceString("awake");
              var call185 = Grace_print(string184);
              return call185
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func183.paramCounts = [
            0,
          ];
          func183.variableArities = [
            false,
          ];
          obj181.methods["awake"] = func183;
          func183.definitionLine = 58;
          func183.definitionModule = "kitty";
          var func186 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func186.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 64
              var string187 = new GraceString("start");
              var call188 = Grace_print(string187);
              return call188
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func186.paramCounts = [
            0,
          ];
          func186.variableArities = [
            false,
          ];
          obj181.methods["start"] = func186;
          func186.definitionLine = 63;
          func186.definitionModule = "kitty";
          var func189 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func189.paramCounts[0])
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
          func189.paramCounts = [
            0,
          ];
          func189.variableArities = [
            false,
          ];
          obj181.methods["update"] = func189;
          func189.definitionLine = 68;
          func189.definitionModule = "kitty";
          var func190 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func190.paramCounts[0])
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
          func190.paramCounts = [
            0,
          ];
          func190.variableArities = [
            false,
          ];
          obj181.methods["onDestroy"] = func190;
          func190.definitionLine = 73;
          func190.definitionModule = "kitty";
          var func191 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func191.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 79
              lineNumber = 49
              lineNumber = 78
              onSelf = true;
              var call192 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 80
              lineNumber = 49
              lineNumber = 79
              onSelf = true;
              var call193 = callmethod(this, "posY:=", [1], var_y);
              return call193
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func191.paramCounts = [
            2,
          ];
          func191.variableArities = [
            false,
          ];
          obj181.methods["setLocation"] = func191;
          func191.definitionLine = 77;
          func191.definitionModule = "kitty";
          var func194 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func194.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 84
              lineNumber = 83
              onSelf = true;
              var call195 = callmethod(this, "posX", [0]);
              return call195
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func194.paramCounts = [
            0,
          ];
          func194.variableArities = [
            false,
          ];
          obj181.methods["getX"] = func194;
          func194.definitionLine = 82;
          func194.definitionModule = "kitty";
          var func196 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func196.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 88
              lineNumber = 87
              onSelf = true;
              var call197 = callmethod(this, "posY", [0]);
              return call197
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func196.paramCounts = [
            0,
          ];
          func196.variableArities = [
            false,
          ];
          obj181.methods["getY"] = func196;
          func196.definitionLine = 86;
          func196.definitionModule = "kitty";
          var func198 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func198.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 92
              lineNumber = 91
              onSelf = true;
              var call199 = callmethod(this, "rotation", [0]);
              return call199
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func198.paramCounts = [
            0,
          ];
          func198.variableArities = [
            false,
          ];
          obj181.methods["getRotation"] = func198;
          func198.definitionLine = 90;
          func198.definitionModule = "kitty";
          sourceObject = obj181;
          lineNumber = 51
          onSelf = true;
          var call200 = callmethod(this, "awake", [0]);
          sourceObject = obj181;
          lineNumber = 53
          obj181.data["posX"] = var_x__39__;
          var reader_kitty_posX_201 = function() {
            return this.data["posX"];
          }
          obj181.methods["posX"] = reader_kitty_posX_201;
          obj181.data["posX"] = var_x__39__;
          var writer_kitty_posX_201 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj181.methods["posX:="] = writer_kitty_posX_201;
          reader_kitty_posX_201.confidential = true;
          writer_kitty_posX_201.confidential = true;
          lineNumber = 54;
          moduleName = "kitty";
          lineNumber = 53
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj181.mutable = true;
          sourceObject = obj181;
          lineNumber = 54
          obj181.data["posY"] = var_y__39__;
          var reader_kitty_posY_202 = function() {
            return this.data["posY"];
          }
          obj181.methods["posY"] = reader_kitty_posY_202;
          obj181.data["posY"] = var_y__39__;
          var writer_kitty_posY_202 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj181.methods["posY:="] = writer_kitty_posY_202;
          reader_kitty_posY_202.confidential = true;
          writer_kitty_posY_202.confidential = true;
          lineNumber = 55;
          moduleName = "kitty";
          lineNumber = 54
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj181.mutable = true;
          sourceObject = obj181;
          lineNumber = 55
          obj181.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_203 = function() {
            return this.data["rotation"];
          }
          obj181.methods["rotation"] = reader_kitty_rotation_203;
          obj181.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_203 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj181.methods["rotation:="] = writer_kitty_rotation_203;
          reader_kitty_rotation_203.confidential = true;
          writer_kitty_rotation_203.confidential = true;
          lineNumber = 58;
          moduleName = "kitty";
          lineNumber = 55
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj181.mutable = true;
          sourceObject = obj181;
          sourceObject = obj181;
          sourceObject = obj181;
          sourceObject = obj181;
          sourceObject = obj181;
          sourceObject = obj181;
          sourceObject = obj181;
          sourceObject = obj181;
          superDepth = origSuperDepth;
        }
        obj_init_181.apply(obj181, []);
        return obj181
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func180.paramCounts = [
      2,
    ];
    func180.variableArities = [
      false,
    ];
    obj178.methods["new"] = func180;
    func180.definitionLine = 49;
    func180.definitionModule = "kitty";
    var func204 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj205 = Grace_allocObject();
        obj205.definitionModule = "kitty";
        obj205.definitionLine = 49;
        var inho205 = inheritingObject;
        while (inho205.superobj) inho205 = inho205.superobj;
        inho205.superobj = obj205;
        obj205.data = inheritingObject.data;
        obj205.outer = this;
        var reader_kitty_outer_206 = function() {
          return this.outer;
        }
        obj205.methods["outer"] = reader_kitty_outer_206;
        function obj_init_205() {
          var origSuperDepth = superDepth;
          superDepth = obj205;
          obj205.annotations = [];
          var func207 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func207.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 59
              var string208 = new GraceString("awake");
              var call209 = Grace_print(string208);
              return call209
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
          obj205.methods["awake"] = func207;
          func207.definitionLine = 58;
          func207.definitionModule = "kitty";
          var func210 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func210.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 64
              var string211 = new GraceString("start");
              var call212 = Grace_print(string211);
              return call212
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
          obj205.methods["start"] = func210;
          func210.definitionLine = 63;
          func210.definitionModule = "kitty";
          var func213 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func213.paramCounts[0])
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
          func213.paramCounts = [
            0,
          ];
          func213.variableArities = [
            false,
          ];
          obj205.methods["update"] = func213;
          func213.definitionLine = 68;
          func213.definitionModule = "kitty";
          var func214 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func214.paramCounts[0])
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
          func214.paramCounts = [
            0,
          ];
          func214.variableArities = [
            false,
          ];
          obj205.methods["onDestroy"] = func214;
          func214.definitionLine = 73;
          func214.definitionModule = "kitty";
          var func215 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func215.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 79
              lineNumber = 49
              lineNumber = 78
              onSelf = true;
              var call216 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 80
              lineNumber = 49
              lineNumber = 79
              onSelf = true;
              var call217 = callmethod(this, "posY:=", [1], var_y);
              return call217
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func215.paramCounts = [
            2,
          ];
          func215.variableArities = [
            false,
          ];
          obj205.methods["setLocation"] = func215;
          func215.definitionLine = 77;
          func215.definitionModule = "kitty";
          var func218 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func218.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 84
              lineNumber = 83
              onSelf = true;
              var call219 = callmethod(this, "posX", [0]);
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
          obj205.methods["getX"] = func218;
          func218.definitionLine = 82;
          func218.definitionModule = "kitty";
          var func220 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func220.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 88
              lineNumber = 87
              onSelf = true;
              var call221 = callmethod(this, "posY", [0]);
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
          obj205.methods["getY"] = func220;
          func220.definitionLine = 86;
          func220.definitionModule = "kitty";
          var func222 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func222.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 92
              lineNumber = 91
              onSelf = true;
              var call223 = callmethod(this, "rotation", [0]);
              return call223
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func222.paramCounts = [
            0,
          ];
          func222.variableArities = [
            false,
          ];
          obj205.methods["getRotation"] = func222;
          func222.definitionLine = 90;
          func222.definitionModule = "kitty";
          sourceObject = obj205;
          lineNumber = 51
          onSelf = true;
          var call224 = callmethod(this, "awake", [0]);
          sourceObject = obj205;
          lineNumber = 53
          obj205.data["posX"] = var_x__39__;
          var reader_kitty_posX_225 = function() {
            return this.data["posX"];
          }
          obj205.methods["posX"] = reader_kitty_posX_225;
          obj205.data["posX"] = var_x__39__;
          var writer_kitty_posX_225 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj205.methods["posX:="] = writer_kitty_posX_225;
          reader_kitty_posX_225.confidential = true;
          writer_kitty_posX_225.confidential = true;
          lineNumber = 54;
          moduleName = "kitty";
          lineNumber = 53
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj205.mutable = true;
          sourceObject = obj205;
          lineNumber = 54
          obj205.data["posY"] = var_y__39__;
          var reader_kitty_posY_226 = function() {
            return this.data["posY"];
          }
          obj205.methods["posY"] = reader_kitty_posY_226;
          obj205.data["posY"] = var_y__39__;
          var writer_kitty_posY_226 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj205.methods["posY:="] = writer_kitty_posY_226;
          reader_kitty_posY_226.confidential = true;
          writer_kitty_posY_226.confidential = true;
          lineNumber = 55;
          moduleName = "kitty";
          lineNumber = 54
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj205.mutable = true;
          sourceObject = obj205;
          lineNumber = 55
          obj205.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_227 = function() {
            return this.data["rotation"];
          }
          obj205.methods["rotation"] = reader_kitty_rotation_227;
          obj205.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_227 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj205.methods["rotation:="] = writer_kitty_rotation_227;
          reader_kitty_rotation_227.confidential = true;
          writer_kitty_rotation_227.confidential = true;
          lineNumber = 58;
          moduleName = "kitty";
          lineNumber = 55
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj205.mutable = true;
          sourceObject = obj205;
          sourceObject = obj205;
          sourceObject = obj205;
          sourceObject = obj205;
          sourceObject = obj205;
          sourceObject = obj205;
          sourceObject = obj205;
          sourceObject = obj205;
          superDepth = origSuperDepth;
        }
        obj_init_205.apply(inheritingObject, []);
        return obj205
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj178.methods["new()object"] = func204;
    var func228 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 49
        var string229 = new GraceString("class KittyEntity");
        return string229
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func228.paramCounts = [
    ];
    func228.variableArities = [
    ];
    obj178.methods["asDebugString"] = func228;
    func228.definitionLine = 49;
    func228.definitionModule = "kitty";
    sourceObject = obj178;
    sourceObject = obj178;
    superDepth = origSuperDepth;
  }
  obj_init_178.apply(obj178, []);
  var var_KittyEntity = obj178;
  lineNumber = 95
  lineNumber = 101
  var func230 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func230.paramCounts[0])
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
  func230.paramCounts = [
    0,
  ];
  func230.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func230;
  func230.definitionLine = 101;
  func230.definitionModule = "kitty";
  var obj231 = Grace_allocObject();
  obj231.definitionModule = "kitty";
  obj231.definitionLine = 101;
  obj231.outer = this;
  var reader_kitty_outer_232 = function() {
    return this.outer;
  }
  obj231.methods["outer"] = reader_kitty_outer_232;
  function obj_init_231() {
    var origSuperDepth = superDepth;
    superDepth = obj231;
    obj231.annotations = [];
    var func233 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func233.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj234 = Grace_allocObject();
        obj234.definitionModule = "kitty";
        obj234.definitionLine = 101;
        obj234.outer = this;
        var reader_kitty_outer_235 = function() {
          return this.outer;
        }
        obj234.methods["outer"] = reader_kitty_outer_235;
        function obj_init_234() {
          var origSuperDepth = superDepth;
          superDepth = obj234;
          obj234.annotations = [];
          var func236 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func236.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 121
              var string237 = new GraceString("INIT...");
              var call238 = Grace_print(string237);
              lineNumber = 127
              var if239 = var_done;
              lineNumber = 123
              onSelf = true;
              var call240 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call240)) {
                lineNumber = 125
                return var_done
              }
              lineNumber = 128
              lineNumber = 101
              lineNumber = 127
              var call241 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call242 = callmethod(this, "document:=", [1], call241);
              lineNumber = 128
              lineNumber = 127
              lineNumber = 128
              var string243 = new GraceString("standard-canvas");
              onSelf = true;
              var call244 = callmethod(this, "document", [0]);
              var call245 = callmethod(call244,"getElementById", [1], string243);
              onSelf = true;
              var call246 = callmethod(this, "canvas:=", [1], call245);
              lineNumber = 130
              lineNumber = 127
              lineNumber = 129
              onSelf = true;
              var call247 = callmethod(this, "canvas", [0]);
              var call248 = callmethod(call247,"width", [0]);
              onSelf = true;
              var call249 = callmethod(this, "canvasWidth:=", [1], call248);
              lineNumber = 132
              lineNumber = 129
              lineNumber = 130
              onSelf = true;
              var call250 = callmethod(this, "canvas", [0]);
              var call251 = callmethod(call250,"height", [0]);
              onSelf = true;
              var call252 = callmethod(this, "canvasHeight:=", [1], call251);
              lineNumber = 133
              lineNumber = 130
              lineNumber = 132
              var bool253 = new GraceBoolean(true)
              onSelf = true;
              var call254 = callmethod(this, "isInit:=", [1], bool253);
              lineNumber = 133
              var string255 = new GraceString("FINISHED...");
              var call256 = Grace_print(string255);
              return call256
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
          obj234.methods["init"] = func236;
          func236.definitionLine = 119;
          func236.definitionModule = "kitty";
          var func257 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func257.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 137
              var string258 = new GraceString("HERE");
              var call259 = Grace_print(string258);
              lineNumber = 138
              onSelf = true;
              var call260 = callmethod(this, "canvas", [0]);
              onSelf = true;
              var call261 = callmethod(this, "background", [0]);
              var call262 = callmethod(call261,"draw", [1], call260);
              lineNumber = 139
              var string263 = new GraceString("DONE");
              var call264 = Grace_print(string263);
              return call264
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func257.paramCounts = [
            0,
          ];
          func257.variableArities = [
            false,
          ];
          obj234.methods["update"] = func257;
          func257.definitionLine = 136;
          func257.definitionModule = "kitty";
          var func265 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func265.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 147
              lineNumber = 130
              lineNumber = 146
              onSelf = true;
              var call266 = callmethod(this, "background:=", [1], var_background__39__);
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
            1,
          ];
          func265.variableArities = [
            false,
          ];
          obj234.methods["addBackground"] = func265;
          func265.definitionLine = 145;
          func265.definitionModule = "kitty";
          var func267 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func267.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 150
              onSelf = true;
              var call268 = callmethod(this, "entities", [0]);
              var call269 = callmethod(call268,"add", [1], var_e);
              return call269
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
          obj234.methods["addEntity"] = func267;
          func267.definitionLine = 149;
          func267.definitionModule = "kitty";
          sourceObject = obj234;
          lineNumber = 103
          var string270 = new GraceString("CREATED NEW WORLD...");
          var call271 = Grace_print(string270);
          sourceObject = obj234;
          obj234.data["background"] = undefined;
          var reader_kitty_background_272 = function() {
            return this.data["background"];
          }
          obj234.methods["background"] = reader_kitty_background_272;
          obj234.data["background"] = undefined;
          var writer_kitty_background_272 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj234.methods["background:="] = writer_kitty_background_272;
          reader_kitty_background_272.confidential = true;
          writer_kitty_background_272.confidential = true;
          obj234.mutable = true;
          sourceObject = obj234;
          obj234.data["document"] = undefined;
          var reader_kitty_document_273 = function() {
            return this.data["document"];
          }
          obj234.methods["document"] = reader_kitty_document_273;
          obj234.data["document"] = undefined;
          var writer_kitty_document_273 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj234.methods["document:="] = writer_kitty_document_273;
          reader_kitty_document_273.confidential = true;
          writer_kitty_document_273.confidential = true;
          obj234.mutable = true;
          sourceObject = obj234;
          obj234.data["canvas"] = undefined;
          var reader_kitty_canvas_274 = function() {
            return this.data["canvas"];
          }
          obj234.methods["canvas"] = reader_kitty_canvas_274;
          obj234.data["canvas"] = undefined;
          var writer_kitty_canvas_274 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj234.methods["canvas:="] = writer_kitty_canvas_274;
          reader_kitty_canvas_274.confidential = true;
          writer_kitty_canvas_274.confidential = true;
          obj234.mutable = true;
          sourceObject = obj234;
          obj234.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_275 = function() {
            return this.data["canvasWidth"];
          }
          obj234.methods["canvasWidth"] = reader_kitty_canvasWidth_275;
          obj234.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_275 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj234.methods["canvasWidth:="] = writer_kitty_canvasWidth_275;
          reader_kitty_canvasWidth_275.confidential = true;
          writer_kitty_canvasWidth_275.confidential = true;
          obj234.mutable = true;
          sourceObject = obj234;
          obj234.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_276 = function() {
            return this.data["canvasHeight"];
          }
          obj234.methods["canvasHeight"] = reader_kitty_canvasHeight_276;
          obj234.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_276 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj234.methods["canvasHeight:="] = writer_kitty_canvasHeight_276;
          reader_kitty_canvasHeight_276.confidential = true;
          writer_kitty_canvasHeight_276.confidential = true;
          obj234.mutable = true;
          sourceObject = obj234;
          lineNumber = 112
          var call277 = callmethod(var_collections,"list", [0]);
          var call278 = callmethod(call277,"new", [0]);
          obj234.data["entities"] = call278;
          var reader_kitty_entities_279 = function() {
            return this.data["entities"];
          }
          obj234.methods["entities"] = reader_kitty_entities_279;
          obj234.data["entities"] = call278;
          var writer_kitty_entities_279 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj234.methods["entities:="] = writer_kitty_entities_279;
          reader_kitty_entities_279.confidential = true;
          writer_kitty_entities_279.confidential = true;
          lineNumber = 114;
          moduleName = "kitty";
          lineNumber = 112
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call278)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj234.mutable = true;
          sourceObject = obj234;
          lineNumber = 114
          var bool280 = new GraceBoolean(false)
          obj234.data["isInit"] = bool280;
          var reader_kitty_isInit_281 = function() {
            return this.data["isInit"];
          }
          obj234.methods["isInit"] = reader_kitty_isInit_281;
          obj234.data["isInit"] = bool280;
          var writer_kitty_isInit_281 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj234.methods["isInit:="] = writer_kitty_isInit_281;
          reader_kitty_isInit_281.confidential = true;
          writer_kitty_isInit_281.confidential = true;
          lineNumber = 116;
          moduleName = "kitty";
          lineNumber = 114
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool280)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj234.mutable = true;
          sourceObject = obj234;
          lineNumber = 116
          onSelf = true;
          var call282 = callmethod(this, "init", [0]);
          sourceObject = obj234;
          sourceObject = obj234;
          sourceObject = obj234;
          sourceObject = obj234;
          superDepth = origSuperDepth;
        }
        obj_init_234.apply(obj234, []);
        return obj234
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func233.paramCounts = [
      0,
    ];
    func233.variableArities = [
      false,
    ];
    obj231.methods["new"] = func233;
    func233.definitionLine = 101;
    func233.definitionModule = "kitty";
    var func283 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj284 = Grace_allocObject();
        obj284.definitionModule = "kitty";
        obj284.definitionLine = 101;
        var inho284 = inheritingObject;
        while (inho284.superobj) inho284 = inho284.superobj;
        inho284.superobj = obj284;
        obj284.data = inheritingObject.data;
        obj284.outer = this;
        var reader_kitty_outer_285 = function() {
          return this.outer;
        }
        obj284.methods["outer"] = reader_kitty_outer_285;
        function obj_init_284() {
          var origSuperDepth = superDepth;
          superDepth = obj284;
          obj284.annotations = [];
          var func286 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func286.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 121
              var string287 = new GraceString("INIT...");
              var call288 = Grace_print(string287);
              lineNumber = 127
              var if289 = var_done;
              lineNumber = 123
              onSelf = true;
              var call290 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call290)) {
                lineNumber = 125
                return var_done
              }
              lineNumber = 128
              lineNumber = 112
              lineNumber = 127
              var call291 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call292 = callmethod(this, "document:=", [1], call291);
              lineNumber = 128
              lineNumber = 127
              lineNumber = 128
              var string293 = new GraceString("standard-canvas");
              onSelf = true;
              var call294 = callmethod(this, "document", [0]);
              var call295 = callmethod(call294,"getElementById", [1], string293);
              onSelf = true;
              var call296 = callmethod(this, "canvas:=", [1], call295);
              lineNumber = 130
              lineNumber = 127
              lineNumber = 129
              onSelf = true;
              var call297 = callmethod(this, "canvas", [0]);
              var call298 = callmethod(call297,"width", [0]);
              onSelf = true;
              var call299 = callmethod(this, "canvasWidth:=", [1], call298);
              lineNumber = 132
              lineNumber = 129
              lineNumber = 130
              onSelf = true;
              var call300 = callmethod(this, "canvas", [0]);
              var call301 = callmethod(call300,"height", [0]);
              onSelf = true;
              var call302 = callmethod(this, "canvasHeight:=", [1], call301);
              lineNumber = 133
              lineNumber = 130
              lineNumber = 132
              var bool303 = new GraceBoolean(true)
              onSelf = true;
              var call304 = callmethod(this, "isInit:=", [1], bool303);
              lineNumber = 133
              var string305 = new GraceString("FINISHED...");
              var call306 = Grace_print(string305);
              return call306
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func286.paramCounts = [
            0,
          ];
          func286.variableArities = [
            false,
          ];
          obj284.methods["init"] = func286;
          func286.definitionLine = 119;
          func286.definitionModule = "kitty";
          var func307 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func307.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 137
              var string308 = new GraceString("HERE");
              var call309 = Grace_print(string308);
              lineNumber = 138
              onSelf = true;
              var call310 = callmethod(this, "canvas", [0]);
              onSelf = true;
              var call311 = callmethod(this, "background", [0]);
              var call312 = callmethod(call311,"draw", [1], call310);
              lineNumber = 139
              var string313 = new GraceString("DONE");
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
          func307.paramCounts = [
            0,
          ];
          func307.variableArities = [
            false,
          ];
          obj284.methods["update"] = func307;
          func307.definitionLine = 136;
          func307.definitionModule = "kitty";
          var func315 = function(argcv) {
            var curarg = 1;
            var var_background__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func315.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addBackground)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 147
              lineNumber = 130
              lineNumber = 146
              onSelf = true;
              var call316 = callmethod(this, "background:=", [1], var_background__39__);
              return call316
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func315.paramCounts = [
            1,
          ];
          func315.variableArities = [
            false,
          ];
          obj284.methods["addBackground"] = func315;
          func315.definitionLine = 145;
          func315.definitionModule = "kitty";
          var func317 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func317.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 150
              onSelf = true;
              var call318 = callmethod(this, "entities", [0]);
              var call319 = callmethod(call318,"add", [1], var_e);
              return call319
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func317.paramTypes = [];
          func317.paramTypes.push([]);
          func317.paramCounts = [
            1,
          ];
          func317.variableArities = [
            false,
          ];
          obj284.methods["addEntity"] = func317;
          func317.definitionLine = 149;
          func317.definitionModule = "kitty";
          sourceObject = obj284;
          lineNumber = 103
          var string320 = new GraceString("CREATED NEW WORLD...");
          var call321 = Grace_print(string320);
          sourceObject = obj284;
          obj284.data["background"] = undefined;
          var reader_kitty_background_322 = function() {
            return this.data["background"];
          }
          obj284.methods["background"] = reader_kitty_background_322;
          obj284.data["background"] = undefined;
          var writer_kitty_background_322 = function(argcv, o) {
            this.data["background"] = o;
          }
          obj284.methods["background:="] = writer_kitty_background_322;
          reader_kitty_background_322.confidential = true;
          writer_kitty_background_322.confidential = true;
          obj284.mutable = true;
          sourceObject = obj284;
          obj284.data["document"] = undefined;
          var reader_kitty_document_323 = function() {
            return this.data["document"];
          }
          obj284.methods["document"] = reader_kitty_document_323;
          obj284.data["document"] = undefined;
          var writer_kitty_document_323 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj284.methods["document:="] = writer_kitty_document_323;
          reader_kitty_document_323.confidential = true;
          writer_kitty_document_323.confidential = true;
          obj284.mutable = true;
          sourceObject = obj284;
          obj284.data["canvas"] = undefined;
          var reader_kitty_canvas_324 = function() {
            return this.data["canvas"];
          }
          obj284.methods["canvas"] = reader_kitty_canvas_324;
          obj284.data["canvas"] = undefined;
          var writer_kitty_canvas_324 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj284.methods["canvas:="] = writer_kitty_canvas_324;
          reader_kitty_canvas_324.confidential = true;
          writer_kitty_canvas_324.confidential = true;
          obj284.mutable = true;
          sourceObject = obj284;
          obj284.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_325 = function() {
            return this.data["canvasWidth"];
          }
          obj284.methods["canvasWidth"] = reader_kitty_canvasWidth_325;
          obj284.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_325 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj284.methods["canvasWidth:="] = writer_kitty_canvasWidth_325;
          reader_kitty_canvasWidth_325.confidential = true;
          writer_kitty_canvasWidth_325.confidential = true;
          obj284.mutable = true;
          sourceObject = obj284;
          obj284.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_326 = function() {
            return this.data["canvasHeight"];
          }
          obj284.methods["canvasHeight"] = reader_kitty_canvasHeight_326;
          obj284.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_326 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj284.methods["canvasHeight:="] = writer_kitty_canvasHeight_326;
          reader_kitty_canvasHeight_326.confidential = true;
          writer_kitty_canvasHeight_326.confidential = true;
          obj284.mutable = true;
          sourceObject = obj284;
          lineNumber = 112
          var call327 = callmethod(var_collections,"list", [0]);
          var call328 = callmethod(call327,"new", [0]);
          obj284.data["entities"] = call328;
          var reader_kitty_entities_329 = function() {
            return this.data["entities"];
          }
          obj284.methods["entities"] = reader_kitty_entities_329;
          obj284.data["entities"] = call328;
          var writer_kitty_entities_329 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj284.methods["entities:="] = writer_kitty_entities_329;
          reader_kitty_entities_329.confidential = true;
          writer_kitty_entities_329.confidential = true;
          lineNumber = 114;
          moduleName = "kitty";
          lineNumber = 112
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call328)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj284.mutable = true;
          sourceObject = obj284;
          lineNumber = 114
          var bool330 = new GraceBoolean(false)
          obj284.data["isInit"] = bool330;
          var reader_kitty_isInit_331 = function() {
            return this.data["isInit"];
          }
          obj284.methods["isInit"] = reader_kitty_isInit_331;
          obj284.data["isInit"] = bool330;
          var writer_kitty_isInit_331 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj284.methods["isInit:="] = writer_kitty_isInit_331;
          reader_kitty_isInit_331.confidential = true;
          writer_kitty_isInit_331.confidential = true;
          lineNumber = 116;
          moduleName = "kitty";
          lineNumber = 114
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool330)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj284.mutable = true;
          sourceObject = obj284;
          lineNumber = 116
          onSelf = true;
          var call332 = callmethod(this, "init", [0]);
          sourceObject = obj284;
          sourceObject = obj284;
          sourceObject = obj284;
          sourceObject = obj284;
          superDepth = origSuperDepth;
        }
        obj_init_284.apply(inheritingObject, []);
        return obj284
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj231.methods["new()object"] = func283;
    var func333 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 101
        var string334 = new GraceString("class KittyWorld");
        return string334
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func333.paramCounts = [
    ];
    func333.variableArities = [
    ];
    obj231.methods["asDebugString"] = func333;
    func333.definitionLine = 101;
    func333.definitionModule = "kitty";
    sourceObject = obj231;
    sourceObject = obj231;
    superDepth = origSuperDepth;
  }
  obj_init_231.apply(obj231, []);
  var var_KittyWorld = obj231;
  lineNumber = 155
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
'dom',
'StandardPrelude',
];
if (gctCache)
  gctCache['kitty'] = "fresh:Entity:\n rotation\n getRotation\n getX\n getY\n posX:=\n posY:=\n update\n posY\n setLocation\n onDestroy\n awake\n posX\n rotation:=\n start\nconfidential:\nfresh:World:\n canvas:=\n init\n canvasHeight\n background:=\n canvasWidth:=\n background\n isInit:=\n isInit\n document:=\n canvas\n entities:=\n document\n update\n entities\n addEntity\n canvasWidth\n addBackground\n canvasHeight:=\nconstructors-of:KittyWorld:\n new\nfresh:Image:\n height:=\n width\n width:=\n imgTag\n height\n draw\nmodules:\n StandardPrelude\n mgcollections\nmethods-of:KittyEntity.new:\n rotation\n getRotation\n onDestroy\n getY\n posX:=\n posY:=\n update\n getX\n setLocation\n rotation:=\n awake\n posX\n posY\n start\npublic:\n m_world\n m_world:=\n start\n stop\n setWorld\n KittyImage\n Image\n KittyEntity\n Entity\n KittyWorld\n World\nmethods-of:KittyImage.new:\n height:=\n width\n width:=\n imgTag\n draw\n height\nfresh-methods:\n Image\n Entity\n World\nmethods-of:KittyWorld.new:\n canvas:=\n init\n canvasHeight\n background:=\n canvas\n background\n isInit:=\n isInit\n document:=\n canvasWidth\n entities:=\n document\n update\n entities\n addEntity\n canvasWidth:=\n addBackground\n canvasHeight:=\nconstructors-of:KittyEntity:\n new\nconstructors-of:KittyImage:\n new\npath:\n kitty\nclasses:\n KittyImage\n KittyEntity\n KittyWorld\n";
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
    "    print \"CREATING NEW IMAGE: {url'}\"",
    "    def imgTag = dom.document.createElement(\"img\")",
    "    imgTag.src := url'",
    "",
    "    var height := 64",
    "    var width := 64",
    "",
    "    method draw(canvas') {",
    "        print \"DRAWING IMAGE: {imgTag.src}\"",
    "        canvas'.translate(0, 0)",
    "        canvas'.save",
    "        canvas'.drawImage(imgTag, -width / 2, -height / 2, width, height)",
    "        canvas'.restore",
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
    "    print \"CREATED NEW WORLD...\"",
    "    ",
    "    var background",
    "",
    "    var document",
    "    var canvas",
    "    var canvasWidth",
    "    var canvasHeight",
    "",
    "    var entities := collections.list.new",
    "",
    "    var isInit := false",
    "",
    "    init",
    "",
    "    // Called on initialization",
    "    method init {",
    "",
    "        print \"INIT...\"",
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
    "        print \"FINISHED...\"",
    "    }",
    "",
    "    method update {",
    "        print \"HERE\"",
    "        background.draw(canvas)",
    "        print \"DONE\"",
    "    }",
    "",
    "    // method addBackground(url') {",
    "    //     background := Image(url')",
    "    // }",
    "    method addBackground(background') {",
    "        background := background'",
    "    }",
    "",
    "    method addEntity(e: Entity) {",
    "        return entities.add(e)",
    "    }",
    "",
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
