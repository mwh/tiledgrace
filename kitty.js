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
  lineNumber = 37
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
      lineNumber = 38
      var obj8 = Grace_allocObject();
      obj8.definitionModule = "kitty";
      obj8.definitionLine = 38;
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
        lineNumber = 39
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
  func7.definitionLine = 37;
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
      obj12.definitionLine = 38;
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
  lineNumber = 90
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
      lineNumber = 91
      var obj16 = Grace_allocObject();
      obj16.definitionModule = "kitty";
      obj16.definitionLine = 91;
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
        lineNumber = 92
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
  func15.definitionLine = 90;
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
      obj20.definitionLine = 91;
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
  lineNumber = 128
  var func23 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func23.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (World)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 129
      var obj24 = Grace_allocObject();
      obj24.definitionModule = "kitty";
      obj24.definitionLine = 129;
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
        lineNumber = 130
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
  func23.definitionLine = 128;
  func23.definitionModule = "kitty";
  var func27 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj28 = Grace_allocObject();
      obj28.definitionModule = "kitty";
      obj28.definitionLine = 129;
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
              lineNumber = 31
              var call41 = callmethod(var_canvas__39__,"save", [0]);
              lineNumber = 32
              onSelf = true;
              var call42 = callmethod(this, "imgTag", [0]);
              onSelf = true;
              var call44 = callmethod(this, "width", [0]);
              var call45 = callmethod(call44,"prefix-", [0]);
              var quotient47 = callmethod(call45, "/", [1], new GraceNum(2));
              onSelf = true;
              var call49 = callmethod(this, "height", [0]);
              var call50 = callmethod(call49,"prefix-", [0]);
              var quotient52 = callmethod(call50, "/", [1], new GraceNum(2));
              onSelf = true;
              var call53 = callmethod(this, "width", [0]);
              onSelf = true;
              var call54 = callmethod(this, "height", [0]);
              var call55 = callmethod(var_canvas__39__,"drawImage", [5], call42, quotient47, quotient52, call53, call54);
              lineNumber = 33
              var call56 = callmethod(var_canvas__39__,"restore", [0]);
              return call56
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
          lineNumber = 24
          var string57 = new GraceString("img");
          var call58 = callmethod(var_dom,"document", [0]);
          var call59 = callmethod(call58,"createElement", [1], string57);
          obj38.data["imgTag"] = call59;
          var reader_kitty_imgTag_60 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_60.def = true;
          reader_kitty_imgTag_60.confidential = true;
          obj38.methods["imgTag"] = reader_kitty_imgTag_60;
          lineNumber = 24;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call59)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj38;
          lineNumber = 27
          lineNumber = 24
          lineNumber = 25
          onSelf = true;
          var call61 = callmethod(this, "imgTag", [0]);
          var call62 = callmethod(call61,"src:=", [1], var_url__39__);
          sourceObject = obj38;
          lineNumber = 27
          obj38.data["height"] = new GraceNum(64);
          var reader_kitty_height_63 = function() {
            return this.data["height"];
          }
          obj38.methods["height"] = reader_kitty_height_63;
          obj38.data["height"] = new GraceNum(64);
          var writer_kitty_height_63 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj38.methods["height:="] = writer_kitty_height_63;
          reader_kitty_height_63.confidential = true;
          writer_kitty_height_63.confidential = true;
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
          var reader_kitty_width_64 = function() {
            return this.data["width"];
          }
          obj38.methods["width"] = reader_kitty_width_64;
          obj38.data["width"] = new GraceNum(64);
          var writer_kitty_width_64 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj38.methods["width:="] = writer_kitty_width_64;
          reader_kitty_width_64.confidential = true;
          writer_kitty_width_64.confidential = true;
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
    var func65 = function(argcv) {
      var curarg = 1;
      var var_url__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj66 = Grace_allocObject();
        obj66.definitionModule = "kitty";
        obj66.definitionLine = 22;
        var inho66 = inheritingObject;
        while (inho66.superobj) inho66 = inho66.superobj;
        inho66.superobj = obj66;
        obj66.data = inheritingObject.data;
        obj66.outer = this;
        var reader_kitty_outer_67 = function() {
          return this.outer;
        }
        obj66.methods["outer"] = reader_kitty_outer_67;
        function obj_init_66() {
          var origSuperDepth = superDepth;
          superDepth = obj66;
          obj66.annotations = [];
          var func68 = function(argcv) {
            var curarg = 1;
            var var_canvas__39__ = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func68.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 31
              var call69 = callmethod(var_canvas__39__,"save", [0]);
              lineNumber = 32
              onSelf = true;
              var call70 = callmethod(this, "imgTag", [0]);
              onSelf = true;
              var call72 = callmethod(this, "width", [0]);
              var call73 = callmethod(call72,"prefix-", [0]);
              var quotient75 = callmethod(call73, "/", [1], new GraceNum(2));
              onSelf = true;
              var call77 = callmethod(this, "height", [0]);
              var call78 = callmethod(call77,"prefix-", [0]);
              var quotient80 = callmethod(call78, "/", [1], new GraceNum(2));
              onSelf = true;
              var call81 = callmethod(this, "width", [0]);
              onSelf = true;
              var call82 = callmethod(this, "height", [0]);
              var call83 = callmethod(var_canvas__39__,"drawImage", [5], call70, quotient75, quotient80, call81, call82);
              lineNumber = 33
              var call84 = callmethod(var_canvas__39__,"restore", [0]);
              return call84
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func68.paramCounts = [
            1,
          ];
          func68.variableArities = [
            false,
          ];
          obj66.methods["draw"] = func68;
          func68.definitionLine = 30;
          func68.definitionModule = "kitty";
          sourceObject = obj66;
          lineNumber = 24
          var string85 = new GraceString("img");
          var call86 = callmethod(var_dom,"document", [0]);
          var call87 = callmethod(call86,"createElement", [1], string85);
          obj66.data["imgTag"] = call87;
          var reader_kitty_imgTag_88 = function() {
            return this.data["imgTag"];
          }
          reader_kitty_imgTag_88.def = true;
          reader_kitty_imgTag_88.confidential = true;
          obj66.methods["imgTag"] = reader_kitty_imgTag_88;
          lineNumber = 24;
          moduleName = "kitty";
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call87)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'imgTag' to be of type Unknown"))
          sourceObject = obj66;
          lineNumber = 27
          lineNumber = 24
          lineNumber = 25
          onSelf = true;
          var call89 = callmethod(this, "imgTag", [0]);
          var call90 = callmethod(call89,"src:=", [1], var_url__39__);
          sourceObject = obj66;
          lineNumber = 27
          obj66.data["height"] = new GraceNum(64);
          var reader_kitty_height_91 = function() {
            return this.data["height"];
          }
          obj66.methods["height"] = reader_kitty_height_91;
          obj66.data["height"] = new GraceNum(64);
          var writer_kitty_height_91 = function(argcv, o) {
            this.data["height"] = o;
          }
          obj66.methods["height:="] = writer_kitty_height_91;
          reader_kitty_height_91.confidential = true;
          writer_kitty_height_91.confidential = true;
          lineNumber = 28;
          moduleName = "kitty";
          lineNumber = 27
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(64))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'height' to be of type Unknown"))
          obj66.mutable = true;
          sourceObject = obj66;
          lineNumber = 28
          obj66.data["width"] = new GraceNum(64);
          var reader_kitty_width_92 = function() {
            return this.data["width"];
          }
          obj66.methods["width"] = reader_kitty_width_92;
          obj66.data["width"] = new GraceNum(64);
          var writer_kitty_width_92 = function(argcv, o) {
            this.data["width"] = o;
          }
          obj66.methods["width:="] = writer_kitty_width_92;
          reader_kitty_width_92.confidential = true;
          writer_kitty_width_92.confidential = true;
          lineNumber = 30;
          moduleName = "kitty";
          lineNumber = 28
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(64))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'width' to be of type Unknown"))
          obj66.mutable = true;
          sourceObject = obj66;
          superDepth = origSuperDepth;
        }
        obj_init_66.apply(inheritingObject, []);
        return obj66
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj35.methods["new()object"] = func65;
    var func93 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 22
        var string94 = new GraceString("class KittyImage");
        return string94
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func93.paramCounts = [
    ];
    func93.variableArities = [
    ];
    obj35.methods["asDebugString"] = func93;
    func93.definitionLine = 22;
    func93.definitionModule = "kitty";
    sourceObject = obj35;
    sourceObject = obj35;
    superDepth = origSuperDepth;
  }
  obj_init_35.apply(obj35, []);
  var var_KittyImage = obj35;
  lineNumber = 37
  lineNumber = 43
  var func95 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func95.paramCounts[0])
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
  func95.paramCounts = [
    0,
  ];
  func95.variableArities = [
    false,
  ];
  this.methods["KittyEntity"] = func95;
  func95.definitionLine = 43;
  func95.definitionModule = "kitty";
  var obj96 = Grace_allocObject();
  obj96.definitionModule = "kitty";
  obj96.definitionLine = 43;
  obj96.outer = this;
  var reader_kitty_outer_97 = function() {
    return this.outer;
  }
  obj96.methods["outer"] = reader_kitty_outer_97;
  function obj_init_96() {
    var origSuperDepth = superDepth;
    superDepth = obj96;
    obj96.annotations = [];
    var func98 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func98.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj99 = Grace_allocObject();
        obj99.definitionModule = "kitty";
        obj99.definitionLine = 43;
        obj99.outer = this;
        var reader_kitty_outer_100 = function() {
          return this.outer;
        }
        obj99.methods["outer"] = reader_kitty_outer_100;
        function obj_init_99() {
          var origSuperDepth = superDepth;
          superDepth = obj99;
          obj99.annotations = [];
          var func101 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func101.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 54
              var string102 = new GraceString("awake");
              var call103 = Grace_print(string102);
              return call103
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func101.paramCounts = [
            0,
          ];
          func101.variableArities = [
            false,
          ];
          obj99.methods["awake"] = func101;
          func101.definitionLine = 53;
          func101.definitionModule = "kitty";
          var func104 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func104.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 59
              var string105 = new GraceString("start");
              var call106 = Grace_print(string105);
              return call106
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func104.paramCounts = [
            0,
          ];
          func104.variableArities = [
            false,
          ];
          obj99.methods["start"] = func104;
          func104.definitionLine = 58;
          func104.definitionModule = "kitty";
          var func107 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func107.paramCounts[0])
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
          func107.paramCounts = [
            0,
          ];
          func107.variableArities = [
            false,
          ];
          obj99.methods["update"] = func107;
          func107.definitionLine = 63;
          func107.definitionModule = "kitty";
          var func108 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func108.paramCounts[0])
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
          func108.paramCounts = [
            0,
          ];
          func108.variableArities = [
            false,
          ];
          obj99.methods["onDestroy"] = func108;
          func108.definitionLine = 68;
          func108.definitionModule = "kitty";
          var func109 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func109.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 74
              lineNumber = 43
              lineNumber = 73
              onSelf = true;
              var call110 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 75
              lineNumber = 43
              lineNumber = 74
              onSelf = true;
              var call111 = callmethod(this, "posY:=", [1], var_y);
              return call111
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func109.paramCounts = [
            2,
          ];
          func109.variableArities = [
            false,
          ];
          obj99.methods["setLocation"] = func109;
          func109.definitionLine = 72;
          func109.definitionModule = "kitty";
          var func112 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func112.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 79
              lineNumber = 78
              onSelf = true;
              var call113 = callmethod(this, "posX", [0]);
              return call113
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func112.paramCounts = [
            0,
          ];
          func112.variableArities = [
            false,
          ];
          obj99.methods["getX"] = func112;
          func112.definitionLine = 77;
          func112.definitionModule = "kitty";
          var func114 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func114.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 83
              lineNumber = 82
              onSelf = true;
              var call115 = callmethod(this, "posY", [0]);
              return call115
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func114.paramCounts = [
            0,
          ];
          func114.variableArities = [
            false,
          ];
          obj99.methods["getY"] = func114;
          func114.definitionLine = 81;
          func114.definitionModule = "kitty";
          var func116 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func116.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 87
              lineNumber = 86
              onSelf = true;
              var call117 = callmethod(this, "rotation", [0]);
              return call117
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func116.paramCounts = [
            0,
          ];
          func116.variableArities = [
            false,
          ];
          obj99.methods["getRotation"] = func116;
          func116.definitionLine = 85;
          func116.definitionModule = "kitty";
          sourceObject = obj99;
          lineNumber = 46
          onSelf = true;
          var call118 = callmethod(this, "awake", [0]);
          sourceObject = obj99;
          lineNumber = 48
          obj99.data["posX"] = var_x__39__;
          var reader_kitty_posX_119 = function() {
            return this.data["posX"];
          }
          obj99.methods["posX"] = reader_kitty_posX_119;
          obj99.data["posX"] = var_x__39__;
          var writer_kitty_posX_119 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj99.methods["posX:="] = writer_kitty_posX_119;
          reader_kitty_posX_119.confidential = true;
          writer_kitty_posX_119.confidential = true;
          lineNumber = 49;
          moduleName = "kitty";
          lineNumber = 48
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj99.mutable = true;
          sourceObject = obj99;
          lineNumber = 49
          obj99.data["posY"] = var_y__39__;
          var reader_kitty_posY_120 = function() {
            return this.data["posY"];
          }
          obj99.methods["posY"] = reader_kitty_posY_120;
          obj99.data["posY"] = var_y__39__;
          var writer_kitty_posY_120 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj99.methods["posY:="] = writer_kitty_posY_120;
          reader_kitty_posY_120.confidential = true;
          writer_kitty_posY_120.confidential = true;
          lineNumber = 50;
          moduleName = "kitty";
          lineNumber = 49
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj99.mutable = true;
          sourceObject = obj99;
          lineNumber = 50
          obj99.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_121 = function() {
            return this.data["rotation"];
          }
          obj99.methods["rotation"] = reader_kitty_rotation_121;
          obj99.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_121 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj99.methods["rotation:="] = writer_kitty_rotation_121;
          reader_kitty_rotation_121.confidential = true;
          writer_kitty_rotation_121.confidential = true;
          lineNumber = 53;
          moduleName = "kitty";
          lineNumber = 50
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj99.mutable = true;
          sourceObject = obj99;
          sourceObject = obj99;
          sourceObject = obj99;
          sourceObject = obj99;
          sourceObject = obj99;
          sourceObject = obj99;
          sourceObject = obj99;
          sourceObject = obj99;
          superDepth = origSuperDepth;
        }
        obj_init_99.apply(obj99, []);
        return obj99
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func98.paramCounts = [
      2,
    ];
    func98.variableArities = [
      false,
    ];
    obj96.methods["new"] = func98;
    func98.definitionLine = 43;
    func98.definitionModule = "kitty";
    var func122 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj123 = Grace_allocObject();
        obj123.definitionModule = "kitty";
        obj123.definitionLine = 43;
        var inho123 = inheritingObject;
        while (inho123.superobj) inho123 = inho123.superobj;
        inho123.superobj = obj123;
        obj123.data = inheritingObject.data;
        obj123.outer = this;
        var reader_kitty_outer_124 = function() {
          return this.outer;
        }
        obj123.methods["outer"] = reader_kitty_outer_124;
        function obj_init_123() {
          var origSuperDepth = superDepth;
          superDepth = obj123;
          obj123.annotations = [];
          var func125 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func125.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 54
              var string126 = new GraceString("awake");
              var call127 = Grace_print(string126);
              return call127
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func125.paramCounts = [
            0,
          ];
          func125.variableArities = [
            false,
          ];
          obj123.methods["awake"] = func125;
          func125.definitionLine = 53;
          func125.definitionModule = "kitty";
          var func128 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func128.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 59
              var string129 = new GraceString("start");
              var call130 = Grace_print(string129);
              return call130
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func128.paramCounts = [
            0,
          ];
          func128.variableArities = [
            false,
          ];
          obj123.methods["start"] = func128;
          func128.definitionLine = 58;
          func128.definitionModule = "kitty";
          var func131 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func131.paramCounts[0])
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
          func131.paramCounts = [
            0,
          ];
          func131.variableArities = [
            false,
          ];
          obj123.methods["update"] = func131;
          func131.definitionLine = 63;
          func131.definitionModule = "kitty";
          var func132 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func132.paramCounts[0])
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
          func132.paramCounts = [
            0,
          ];
          func132.variableArities = [
            false,
          ];
          obj123.methods["onDestroy"] = func132;
          func132.definitionLine = 68;
          func132.definitionModule = "kitty";
          var func133 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func133.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 74
              lineNumber = 43
              lineNumber = 73
              onSelf = true;
              var call134 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 75
              lineNumber = 43
              lineNumber = 74
              onSelf = true;
              var call135 = callmethod(this, "posY:=", [1], var_y);
              return call135
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func133.paramCounts = [
            2,
          ];
          func133.variableArities = [
            false,
          ];
          obj123.methods["setLocation"] = func133;
          func133.definitionLine = 72;
          func133.definitionModule = "kitty";
          var func136 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func136.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 79
              lineNumber = 78
              onSelf = true;
              var call137 = callmethod(this, "posX", [0]);
              return call137
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func136.paramCounts = [
            0,
          ];
          func136.variableArities = [
            false,
          ];
          obj123.methods["getX"] = func136;
          func136.definitionLine = 77;
          func136.definitionModule = "kitty";
          var func138 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func138.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 83
              lineNumber = 82
              onSelf = true;
              var call139 = callmethod(this, "posY", [0]);
              return call139
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func138.paramCounts = [
            0,
          ];
          func138.variableArities = [
            false,
          ];
          obj123.methods["getY"] = func138;
          func138.definitionLine = 81;
          func138.definitionModule = "kitty";
          var func140 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func140.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 87
              lineNumber = 86
              onSelf = true;
              var call141 = callmethod(this, "rotation", [0]);
              return call141
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func140.paramCounts = [
            0,
          ];
          func140.variableArities = [
            false,
          ];
          obj123.methods["getRotation"] = func140;
          func140.definitionLine = 85;
          func140.definitionModule = "kitty";
          sourceObject = obj123;
          lineNumber = 46
          onSelf = true;
          var call142 = callmethod(this, "awake", [0]);
          sourceObject = obj123;
          lineNumber = 48
          obj123.data["posX"] = var_x__39__;
          var reader_kitty_posX_143 = function() {
            return this.data["posX"];
          }
          obj123.methods["posX"] = reader_kitty_posX_143;
          obj123.data["posX"] = var_x__39__;
          var writer_kitty_posX_143 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj123.methods["posX:="] = writer_kitty_posX_143;
          reader_kitty_posX_143.confidential = true;
          writer_kitty_posX_143.confidential = true;
          lineNumber = 49;
          moduleName = "kitty";
          lineNumber = 48
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj123.mutable = true;
          sourceObject = obj123;
          lineNumber = 49
          obj123.data["posY"] = var_y__39__;
          var reader_kitty_posY_144 = function() {
            return this.data["posY"];
          }
          obj123.methods["posY"] = reader_kitty_posY_144;
          obj123.data["posY"] = var_y__39__;
          var writer_kitty_posY_144 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj123.methods["posY:="] = writer_kitty_posY_144;
          reader_kitty_posY_144.confidential = true;
          writer_kitty_posY_144.confidential = true;
          lineNumber = 50;
          moduleName = "kitty";
          lineNumber = 49
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj123.mutable = true;
          sourceObject = obj123;
          lineNumber = 50
          obj123.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_145 = function() {
            return this.data["rotation"];
          }
          obj123.methods["rotation"] = reader_kitty_rotation_145;
          obj123.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_145 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj123.methods["rotation:="] = writer_kitty_rotation_145;
          reader_kitty_rotation_145.confidential = true;
          writer_kitty_rotation_145.confidential = true;
          lineNumber = 53;
          moduleName = "kitty";
          lineNumber = 50
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj123.mutable = true;
          sourceObject = obj123;
          sourceObject = obj123;
          sourceObject = obj123;
          sourceObject = obj123;
          sourceObject = obj123;
          sourceObject = obj123;
          sourceObject = obj123;
          sourceObject = obj123;
          superDepth = origSuperDepth;
        }
        obj_init_123.apply(inheritingObject, []);
        return obj123
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj96.methods["new()object"] = func122;
    var func146 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 43
        var string147 = new GraceString("class KittyEntity");
        return string147
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func146.paramCounts = [
    ];
    func146.variableArities = [
    ];
    obj96.methods["asDebugString"] = func146;
    func146.definitionLine = 43;
    func146.definitionModule = "kitty";
    sourceObject = obj96;
    sourceObject = obj96;
    superDepth = origSuperDepth;
  }
  obj_init_96.apply(obj96, []);
  var var_KittyEntity = obj96;
  lineNumber = 90
  lineNumber = 96
  var func148 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func148.paramCounts[0])
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
  func148.paramCounts = [
    0,
  ];
  func148.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func148;
  func148.definitionLine = 96;
  func148.definitionModule = "kitty";
  var obj149 = Grace_allocObject();
  obj149.definitionModule = "kitty";
  obj149.definitionLine = 96;
  obj149.outer = this;
  var reader_kitty_outer_150 = function() {
    return this.outer;
  }
  obj149.methods["outer"] = reader_kitty_outer_150;
  function obj_init_149() {
    var origSuperDepth = superDepth;
    superDepth = obj149;
    obj149.annotations = [];
    var func151 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func151.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj152 = Grace_allocObject();
        obj152.definitionModule = "kitty";
        obj152.definitionLine = 96;
        obj152.outer = this;
        var reader_kitty_outer_153 = function() {
          return this.outer;
        }
        obj152.methods["outer"] = reader_kitty_outer_153;
        function obj_init_152() {
          var origSuperDepth = superDepth;
          superDepth = obj152;
          obj152.annotations = [];
          var func154 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func154.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 114
              var if155 = var_done;
              lineNumber = 110
              onSelf = true;
              var call156 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call156)) {
                lineNumber = 112
                lineNumber = 111
                var bool157 = new GraceBoolean(false)
                return bool157
              }
              lineNumber = 115
              lineNumber = 96
              lineNumber = 114
              var call158 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call159 = callmethod(this, "document:=", [1], call158);
              lineNumber = 115
              lineNumber = 114
              lineNumber = 115
              var string160 = new GraceString("standard-canvas");
              onSelf = true;
              var call161 = callmethod(this, "document", [0]);
              var call162 = callmethod(call161,"getElementById", [1], string160);
              onSelf = true;
              var call163 = callmethod(this, "canvas:=", [1], call162);
              lineNumber = 117
              lineNumber = 114
              lineNumber = 116
              onSelf = true;
              var call164 = callmethod(this, "canvas", [0]);
              var call165 = callmethod(call164,"width", [0]);
              onSelf = true;
              var call166 = callmethod(this, "canvasWidth:=", [1], call165);
              lineNumber = 119
              lineNumber = 116
              lineNumber = 117
              onSelf = true;
              var call167 = callmethod(this, "canvas", [0]);
              var call168 = callmethod(call167,"height", [0]);
              onSelf = true;
              var call169 = callmethod(this, "canvasHeight:=", [1], call168);
              lineNumber = 120
              lineNumber = 117
              lineNumber = 119
              var bool170 = new GraceBoolean(true)
              onSelf = true;
              var call171 = callmethod(this, "isInit:=", [1], bool170);
              return call171
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func154.paramCounts = [
            0,
          ];
          func154.variableArities = [
            false,
          ];
          obj152.methods["init"] = func154;
          func154.definitionLine = 108;
          func154.definitionModule = "kitty";
          var func172 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func172.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 123
              onSelf = true;
              var call173 = callmethod(this, "entities", [0]);
              var call174 = callmethod(call173,"add", [1], var_e);
              return call174
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func172.paramTypes = [];
          func172.paramTypes.push([]);
          func172.paramCounts = [
            1,
          ];
          func172.variableArities = [
            false,
          ];
          obj152.methods["addEntity"] = func172;
          func172.definitionLine = 122;
          func172.definitionModule = "kitty";
          sourceObject = obj152;
          obj152.data["document"] = undefined;
          var reader_kitty_document_175 = function() {
            return this.data["document"];
          }
          obj152.methods["document"] = reader_kitty_document_175;
          obj152.data["document"] = undefined;
          var writer_kitty_document_175 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj152.methods["document:="] = writer_kitty_document_175;
          reader_kitty_document_175.confidential = true;
          writer_kitty_document_175.confidential = true;
          obj152.mutable = true;
          sourceObject = obj152;
          obj152.data["canvas"] = undefined;
          var reader_kitty_canvas_176 = function() {
            return this.data["canvas"];
          }
          obj152.methods["canvas"] = reader_kitty_canvas_176;
          obj152.data["canvas"] = undefined;
          var writer_kitty_canvas_176 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj152.methods["canvas:="] = writer_kitty_canvas_176;
          reader_kitty_canvas_176.confidential = true;
          writer_kitty_canvas_176.confidential = true;
          obj152.mutable = true;
          sourceObject = obj152;
          obj152.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_177 = function() {
            return this.data["canvasWidth"];
          }
          obj152.methods["canvasWidth"] = reader_kitty_canvasWidth_177;
          obj152.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_177 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj152.methods["canvasWidth:="] = writer_kitty_canvasWidth_177;
          reader_kitty_canvasWidth_177.confidential = true;
          writer_kitty_canvasWidth_177.confidential = true;
          obj152.mutable = true;
          sourceObject = obj152;
          obj152.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_178 = function() {
            return this.data["canvasHeight"];
          }
          obj152.methods["canvasHeight"] = reader_kitty_canvasHeight_178;
          obj152.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_178 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj152.methods["canvasHeight:="] = writer_kitty_canvasHeight_178;
          reader_kitty_canvasHeight_178.confidential = true;
          writer_kitty_canvasHeight_178.confidential = true;
          obj152.mutable = true;
          sourceObject = obj152;
          lineNumber = 103
          var call179 = callmethod(var_collections,"list", [0]);
          var call180 = callmethod(call179,"new", [0]);
          obj152.data["entities"] = call180;
          var reader_kitty_entities_181 = function() {
            return this.data["entities"];
          }
          obj152.methods["entities"] = reader_kitty_entities_181;
          obj152.data["entities"] = call180;
          var writer_kitty_entities_181 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj152.methods["entities:="] = writer_kitty_entities_181;
          reader_kitty_entities_181.confidential = true;
          writer_kitty_entities_181.confidential = true;
          lineNumber = 105;
          moduleName = "kitty";
          lineNumber = 103
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call180)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj152.mutable = true;
          sourceObject = obj152;
          lineNumber = 105
          var bool182 = new GraceBoolean(false)
          obj152.data["isInit"] = bool182;
          var reader_kitty_isInit_183 = function() {
            return this.data["isInit"];
          }
          obj152.methods["isInit"] = reader_kitty_isInit_183;
          obj152.data["isInit"] = bool182;
          var writer_kitty_isInit_183 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj152.methods["isInit:="] = writer_kitty_isInit_183;
          reader_kitty_isInit_183.confidential = true;
          writer_kitty_isInit_183.confidential = true;
          lineNumber = 108;
          moduleName = "kitty";
          lineNumber = 105
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool182)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj152.mutable = true;
          sourceObject = obj152;
          sourceObject = obj152;
          superDepth = origSuperDepth;
        }
        obj_init_152.apply(obj152, []);
        return obj152
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func151.paramCounts = [
      0,
    ];
    func151.variableArities = [
      false,
    ];
    obj149.methods["new"] = func151;
    func151.definitionLine = 96;
    func151.definitionModule = "kitty";
    var func184 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj185 = Grace_allocObject();
        obj185.definitionModule = "kitty";
        obj185.definitionLine = 96;
        var inho185 = inheritingObject;
        while (inho185.superobj) inho185 = inho185.superobj;
        inho185.superobj = obj185;
        obj185.data = inheritingObject.data;
        obj185.outer = this;
        var reader_kitty_outer_186 = function() {
          return this.outer;
        }
        obj185.methods["outer"] = reader_kitty_outer_186;
        function obj_init_185() {
          var origSuperDepth = superDepth;
          superDepth = obj185;
          obj185.annotations = [];
          var func187 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func187.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (init)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 114
              var if188 = var_done;
              lineNumber = 110
              onSelf = true;
              var call189 = callmethod(this, "isInit", [0]);
              if (Grace_isTrue(call189)) {
                lineNumber = 112
                lineNumber = 111
                var bool190 = new GraceBoolean(false)
                return bool190
              }
              lineNumber = 115
              lineNumber = 103
              lineNumber = 114
              var call191 = callmethod(var_dom,"document", [0]);
              onSelf = true;
              var call192 = callmethod(this, "document:=", [1], call191);
              lineNumber = 115
              lineNumber = 114
              lineNumber = 115
              var string193 = new GraceString("standard-canvas");
              onSelf = true;
              var call194 = callmethod(this, "document", [0]);
              var call195 = callmethod(call194,"getElementById", [1], string193);
              onSelf = true;
              var call196 = callmethod(this, "canvas:=", [1], call195);
              lineNumber = 117
              lineNumber = 114
              lineNumber = 116
              onSelf = true;
              var call197 = callmethod(this, "canvas", [0]);
              var call198 = callmethod(call197,"width", [0]);
              onSelf = true;
              var call199 = callmethod(this, "canvasWidth:=", [1], call198);
              lineNumber = 119
              lineNumber = 116
              lineNumber = 117
              onSelf = true;
              var call200 = callmethod(this, "canvas", [0]);
              var call201 = callmethod(call200,"height", [0]);
              onSelf = true;
              var call202 = callmethod(this, "canvasHeight:=", [1], call201);
              lineNumber = 120
              lineNumber = 117
              lineNumber = 119
              var bool203 = new GraceBoolean(true)
              onSelf = true;
              var call204 = callmethod(this, "isInit:=", [1], bool203);
              return call204
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func187.paramCounts = [
            0,
          ];
          func187.variableArities = [
            false,
          ];
          obj185.methods["init"] = func187;
          func187.definitionLine = 108;
          func187.definitionModule = "kitty";
          var func205 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func205.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 123
              onSelf = true;
              var call206 = callmethod(this, "entities", [0]);
              var call207 = callmethod(call206,"add", [1], var_e);
              return call207
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func205.paramTypes = [];
          func205.paramTypes.push([]);
          func205.paramCounts = [
            1,
          ];
          func205.variableArities = [
            false,
          ];
          obj185.methods["addEntity"] = func205;
          func205.definitionLine = 122;
          func205.definitionModule = "kitty";
          sourceObject = obj185;
          obj185.data["document"] = undefined;
          var reader_kitty_document_208 = function() {
            return this.data["document"];
          }
          obj185.methods["document"] = reader_kitty_document_208;
          obj185.data["document"] = undefined;
          var writer_kitty_document_208 = function(argcv, o) {
            this.data["document"] = o;
          }
          obj185.methods["document:="] = writer_kitty_document_208;
          reader_kitty_document_208.confidential = true;
          writer_kitty_document_208.confidential = true;
          obj185.mutable = true;
          sourceObject = obj185;
          obj185.data["canvas"] = undefined;
          var reader_kitty_canvas_209 = function() {
            return this.data["canvas"];
          }
          obj185.methods["canvas"] = reader_kitty_canvas_209;
          obj185.data["canvas"] = undefined;
          var writer_kitty_canvas_209 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj185.methods["canvas:="] = writer_kitty_canvas_209;
          reader_kitty_canvas_209.confidential = true;
          writer_kitty_canvas_209.confidential = true;
          obj185.mutable = true;
          sourceObject = obj185;
          obj185.data["canvasWidth"] = undefined;
          var reader_kitty_canvasWidth_210 = function() {
            return this.data["canvasWidth"];
          }
          obj185.methods["canvasWidth"] = reader_kitty_canvasWidth_210;
          obj185.data["canvasWidth"] = undefined;
          var writer_kitty_canvasWidth_210 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj185.methods["canvasWidth:="] = writer_kitty_canvasWidth_210;
          reader_kitty_canvasWidth_210.confidential = true;
          writer_kitty_canvasWidth_210.confidential = true;
          obj185.mutable = true;
          sourceObject = obj185;
          obj185.data["canvasHeight"] = undefined;
          var reader_kitty_canvasHeight_211 = function() {
            return this.data["canvasHeight"];
          }
          obj185.methods["canvasHeight"] = reader_kitty_canvasHeight_211;
          obj185.data["canvasHeight"] = undefined;
          var writer_kitty_canvasHeight_211 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj185.methods["canvasHeight:="] = writer_kitty_canvasHeight_211;
          reader_kitty_canvasHeight_211.confidential = true;
          writer_kitty_canvasHeight_211.confidential = true;
          obj185.mutable = true;
          sourceObject = obj185;
          lineNumber = 103
          var call212 = callmethod(var_collections,"list", [0]);
          var call213 = callmethod(call212,"new", [0]);
          obj185.data["entities"] = call213;
          var reader_kitty_entities_214 = function() {
            return this.data["entities"];
          }
          obj185.methods["entities"] = reader_kitty_entities_214;
          obj185.data["entities"] = call213;
          var writer_kitty_entities_214 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj185.methods["entities:="] = writer_kitty_entities_214;
          reader_kitty_entities_214.confidential = true;
          writer_kitty_entities_214.confidential = true;
          lineNumber = 105;
          moduleName = "kitty";
          lineNumber = 103
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call213)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj185.mutable = true;
          sourceObject = obj185;
          lineNumber = 105
          var bool215 = new GraceBoolean(false)
          obj185.data["isInit"] = bool215;
          var reader_kitty_isInit_216 = function() {
            return this.data["isInit"];
          }
          obj185.methods["isInit"] = reader_kitty_isInit_216;
          obj185.data["isInit"] = bool215;
          var writer_kitty_isInit_216 = function(argcv, o) {
            this.data["isInit"] = o;
          }
          obj185.methods["isInit:="] = writer_kitty_isInit_216;
          reader_kitty_isInit_216.confidential = true;
          writer_kitty_isInit_216.confidential = true;
          lineNumber = 108;
          moduleName = "kitty";
          lineNumber = 105
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], bool215)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'isInit' to be of type Unknown"))
          obj185.mutable = true;
          sourceObject = obj185;
          sourceObject = obj185;
          superDepth = origSuperDepth;
        }
        obj_init_185.apply(inheritingObject, []);
        return obj185
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj149.methods["new()object"] = func184;
    var func217 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 96
        var string218 = new GraceString("class KittyWorld");
        return string218
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func217.paramCounts = [
    ];
    func217.variableArities = [
    ];
    obj149.methods["asDebugString"] = func217;
    func217.definitionLine = 96;
    func217.definitionModule = "kitty";
    sourceObject = obj149;
    sourceObject = obj149;
    superDepth = origSuperDepth;
  }
  obj_init_149.apply(obj149, []);
  var var_KittyWorld = obj149;
  lineNumber = 128
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
'dom',
'StandardPrelude',
];
if (gctCache)
  gctCache['kitty'] = "fresh:Entity:\n rotation\n getRotation\n getX\n getY\n posX:=\n posY:=\n update\n posY\n setLocation\n onDestroy\n awake\n posX\n rotation:=\n start\nconfidential:\nfresh:World:\n isInit\n canvas:=\n init\n canvasHeight\n document:=\n canvas\n canvasWidth\n entities:=\n document\n entities\n addEntity\n isInit:=\n canvasWidth:=\n canvasHeight:=\nconstructors-of:KittyWorld:\n new\nfresh:Image:\n height:=\n width\n width:=\n imgTag\n height\n draw\nmodules:\n StandardPrelude\n mgcollections\nmethods-of:KittyEntity.new:\n rotation\n getRotation\n onDestroy\n getY\n posX:=\n posY:=\n update\n getX\n setLocation\n rotation:=\n awake\n posX\n posY\n start\npublic:\n m_world\n m_world:=\n start\n stop\n setWorld\n KittyImage\n Image\n KittyEntity\n Entity\n KittyWorld\n World\nmethods-of:KittyImage.new:\n height:=\n width\n width:=\n imgTag\n draw\n height\nfresh-methods:\n Image\n Entity\n World\nmethods-of:KittyWorld.new:\n isInit\n canvas:=\n init\n canvasHeight\n document:=\n canvasWidth:=\n entities:=\n canvas\n document\n entities\n addEntity\n isInit:=\n canvasWidth\n canvasHeight:=\nconstructors-of:KittyEntity:\n new\nconstructors-of:KittyImage:\n new\npath:\n kitty\nclasses:\n KittyImage\n KittyEntity\n KittyWorld\n";
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
    "    def imgTag = dom.document.createElement(\"img\")",
    "    imgTag.src := url'",
    "",
    "    var height := 64",
    "    var width := 64",
    "",
    "    method draw(canvas') {",
    "        canvas'.save",
    "        canvas'.drawImage(imgTag, -width / 2, -height / 2, width, height)",
    "        canvas'.restore",
    "    }",
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
    "    // inherits image",
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
    "    var document",
    "    var canvas",
    "    var canvasWidth",
    "    var canvasHeight",
    "",
    "    var entities := collections.list.new",
    "",
    "    var isInit := false",
    "",
    "    // Called on initialization",
    "    method init {",
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
