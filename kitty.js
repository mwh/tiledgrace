function gracecode_kitty () {
  this.definitionModule = "kitty";
  this.definitionLine = 0;
  lineNumber = 6
  var func0 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func0.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 7
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
  func0.definitionLine = 6;
  func0.definitionModule = "kitty";
  lineNumber = 10
  var func3 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func3.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 11
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
  func3.definitionLine = 10;
  func3.definitionModule = "kitty";
  lineNumber = 14
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
      lineNumber = 16
      lineNumber = 15
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
  func6.definitionLine = 14;
  func6.definitionModule = "kitty";
  lineNumber = 65
  var func7 = function(argcv) {
    var curarg = 1;
    var var_x__39__ = arguments[curarg];
    curarg++;
    var var_y__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func7.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Entity)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 66
      var obj8 = Grace_allocObject();
      obj8.definitionModule = "kitty";
      obj8.definitionLine = 66;
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
        lineNumber = 67
        var call10 = callmethod(var_KittyEntity,"new()object", [2, 1], var_x__39__, var_y__39__, this);
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
    2,
  ];
  func7.variableArities = [
    false,
  ];
  this.methods["Entity"] = func7;
  func7.definitionLine = 65;
  func7.definitionModule = "kitty";
  var func11 = function(argcv) {
    var curarg = 1;
    var var_x__39__ = arguments[curarg];
    curarg++;
    var var_y__39__ = arguments[curarg];
    curarg++;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj12 = Grace_allocObject();
      obj12.definitionModule = "kitty";
      obj12.definitionLine = 66;
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
        var call14 = callmethod(var_KittyEntity,"new()object", [2, 1], var_x__39__, var_y__39__, this);
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
  this.methods["Entity()object"] = func11;
  lineNumber = 85
  var func15 = function(argcv) {
    var curarg = 1;
    var var_x__39__ = arguments[curarg];
    curarg++;
    var var_y__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func15.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (World)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 86
      var obj16 = Grace_allocObject();
      obj16.definitionModule = "kitty";
      obj16.definitionLine = 86;
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
        lineNumber = 87
        var call18 = callmethod(var_KittyWorld,"new()object", [2, 1], var_x__39__, var_y__39__, this);
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
  this.methods["World"] = func15;
  func15.definitionLine = 85;
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
      obj20.definitionLine = 86;
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
        var call22 = callmethod(var_KittyWorld,"new()object", [2, 1], var_x__39__, var_y__39__, this);
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
  this.methods["World()object"] = func19;
  lineNumber = 1
  // Import of mgcollections
  if (typeof gracecode_mgcollections == 'undefined')
    throw new GraceExceptionPacket(RuntimeErrorObject, 
      new GraceString('could not find module collections'));
  var var_collections = do_import("mgcollections", gracecode_mgcollections);
  lineNumber = 6
  var var_m__95__world;
  lineNumber = 1
  var func23 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func23.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (m_world)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 4
      return var_m__95__world
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
  this.methods["m_world"] = func23;
  func23.definitionLine = 1;
  func23.definitionModule = "kitty";
  lineNumber = 1
  var func24 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func24.paramCounts[0])
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
  func24.paramCounts = [
    1,
  ];
  func24.variableArities = [
    false,
  ];
  this.methods["m_world:="] = func24;
  func24.definitionLine = 1;
  func24.definitionModule = "kitty";
  lineNumber = 6
  lineNumber = 10
  lineNumber = 14
  lineNumber = 18
  var func25 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func25.paramCounts[0])
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
  func25.paramCounts = [
    0,
  ];
  func25.variableArities = [
    false,
  ];
  this.methods["KittyEntity"] = func25;
  func25.definitionLine = 18;
  func25.definitionModule = "kitty";
  var obj26 = Grace_allocObject();
  obj26.definitionModule = "kitty";
  obj26.definitionLine = 18;
  obj26.outer = this;
  var reader_kitty_outer_27 = function() {
    return this.outer;
  }
  obj26.methods["outer"] = reader_kitty_outer_27;
  function obj_init_26() {
    var origSuperDepth = superDepth;
    superDepth = obj26;
    obj26.annotations = [];
    var func28 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func28.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj29 = Grace_allocObject();
        obj29.definitionModule = "kitty";
        obj29.definitionLine = 18;
        obj29.outer = this;
        var reader_kitty_outer_30 = function() {
          return this.outer;
        }
        obj29.methods["outer"] = reader_kitty_outer_30;
        function obj_init_29() {
          var origSuperDepth = superDepth;
          superDepth = obj29;
          obj29.annotations = [];
          var func31 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func31.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 29
              var string32 = new GraceString("awake");
              var call33 = Grace_print(string32);
              return call33
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func31.paramCounts = [
            0,
          ];
          func31.variableArities = [
            false,
          ];
          obj29.methods["awake"] = func31;
          func31.definitionLine = 28;
          func31.definitionModule = "kitty";
          var func34 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func34.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 34
              var string35 = new GraceString("start");
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
          obj29.methods["start"] = func34;
          func34.definitionLine = 33;
          func34.definitionModule = "kitty";
          var func37 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func37.paramCounts[0])
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
          func37.paramCounts = [
            0,
          ];
          func37.variableArities = [
            false,
          ];
          obj29.methods["update"] = func37;
          func37.definitionLine = 38;
          func37.definitionModule = "kitty";
          var func38 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func38.paramCounts[0])
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
          func38.paramCounts = [
            0,
          ];
          func38.variableArities = [
            false,
          ];
          obj29.methods["onDestroy"] = func38;
          func38.definitionLine = 43;
          func38.definitionModule = "kitty";
          var func39 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func39.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 49
              lineNumber = 18
              lineNumber = 48
              onSelf = true;
              var call40 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 50
              lineNumber = 18
              lineNumber = 49
              onSelf = true;
              var call41 = callmethod(this, "posY:=", [1], var_y);
              return call41
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func39.paramCounts = [
            2,
          ];
          func39.variableArities = [
            false,
          ];
          obj29.methods["setLocation"] = func39;
          func39.definitionLine = 47;
          func39.definitionModule = "kitty";
          var func42 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func42.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 54
              lineNumber = 53
              onSelf = true;
              var call43 = callmethod(this, "posX", [0]);
              return call43
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func42.paramCounts = [
            0,
          ];
          func42.variableArities = [
            false,
          ];
          obj29.methods["getX"] = func42;
          func42.definitionLine = 52;
          func42.definitionModule = "kitty";
          var func44 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func44.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 58
              lineNumber = 57
              onSelf = true;
              var call45 = callmethod(this, "posY", [0]);
              return call45
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func44.paramCounts = [
            0,
          ];
          func44.variableArities = [
            false,
          ];
          obj29.methods["getY"] = func44;
          func44.definitionLine = 56;
          func44.definitionModule = "kitty";
          var func46 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func46.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 62
              lineNumber = 61
              onSelf = true;
              var call47 = callmethod(this, "rotation", [0]);
              return call47
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func46.paramCounts = [
            0,
          ];
          func46.variableArities = [
            false,
          ];
          obj29.methods["getRotation"] = func46;
          func46.definitionLine = 60;
          func46.definitionModule = "kitty";
          sourceObject = obj29;
          lineNumber = 21
          onSelf = true;
          var call48 = callmethod(this, "awake", [0]);
          sourceObject = obj29;
          lineNumber = 23
          obj29.data["posX"] = var_x__39__;
          var reader_kitty_posX_49 = function() {
            return this.data["posX"];
          }
          obj29.methods["posX"] = reader_kitty_posX_49;
          obj29.data["posX"] = var_x__39__;
          var writer_kitty_posX_49 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj29.methods["posX:="] = writer_kitty_posX_49;
          reader_kitty_posX_49.confidential = true;
          writer_kitty_posX_49.confidential = true;
          lineNumber = 24;
          moduleName = "kitty";
          lineNumber = 23
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj29.mutable = true;
          sourceObject = obj29;
          lineNumber = 24
          obj29.data["posY"] = var_y__39__;
          var reader_kitty_posY_50 = function() {
            return this.data["posY"];
          }
          obj29.methods["posY"] = reader_kitty_posY_50;
          obj29.data["posY"] = var_y__39__;
          var writer_kitty_posY_50 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj29.methods["posY:="] = writer_kitty_posY_50;
          reader_kitty_posY_50.confidential = true;
          writer_kitty_posY_50.confidential = true;
          lineNumber = 25;
          moduleName = "kitty";
          lineNumber = 24
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj29.mutable = true;
          sourceObject = obj29;
          lineNumber = 25
          obj29.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_51 = function() {
            return this.data["rotation"];
          }
          obj29.methods["rotation"] = reader_kitty_rotation_51;
          obj29.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_51 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj29.methods["rotation:="] = writer_kitty_rotation_51;
          reader_kitty_rotation_51.confidential = true;
          writer_kitty_rotation_51.confidential = true;
          lineNumber = 28;
          moduleName = "kitty";
          lineNumber = 25
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj29.mutable = true;
          sourceObject = obj29;
          sourceObject = obj29;
          sourceObject = obj29;
          sourceObject = obj29;
          sourceObject = obj29;
          sourceObject = obj29;
          sourceObject = obj29;
          sourceObject = obj29;
          superDepth = origSuperDepth;
        }
        obj_init_29.apply(obj29, []);
        return obj29
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func28.paramCounts = [
      2,
    ];
    func28.variableArities = [
      false,
    ];
    obj26.methods["new"] = func28;
    func28.definitionLine = 18;
    func28.definitionModule = "kitty";
    var func52 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj53 = Grace_allocObject();
        obj53.definitionModule = "kitty";
        obj53.definitionLine = 18;
        var inho53 = inheritingObject;
        while (inho53.superobj) inho53 = inho53.superobj;
        inho53.superobj = obj53;
        obj53.data = inheritingObject.data;
        obj53.outer = this;
        var reader_kitty_outer_54 = function() {
          return this.outer;
        }
        obj53.methods["outer"] = reader_kitty_outer_54;
        function obj_init_53() {
          var origSuperDepth = superDepth;
          superDepth = obj53;
          obj53.annotations = [];
          var func55 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func55.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (awake)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 29
              var string56 = new GraceString("awake");
              var call57 = Grace_print(string56);
              return call57
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func55.paramCounts = [
            0,
          ];
          func55.variableArities = [
            false,
          ];
          obj53.methods["awake"] = func55;
          func55.definitionLine = 28;
          func55.definitionModule = "kitty";
          var func58 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func58.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 34
              var string59 = new GraceString("start");
              var call60 = Grace_print(string59);
              return call60
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func58.paramCounts = [
            0,
          ];
          func58.variableArities = [
            false,
          ];
          obj53.methods["start"] = func58;
          func58.definitionLine = 33;
          func58.definitionModule = "kitty";
          var func61 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func61.paramCounts[0])
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
          func61.paramCounts = [
            0,
          ];
          func61.variableArities = [
            false,
          ];
          obj53.methods["update"] = func61;
          func61.definitionLine = 38;
          func61.definitionModule = "kitty";
          var func62 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func62.paramCounts[0])
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
          func62.paramCounts = [
            0,
          ];
          func62.variableArities = [
            false,
          ];
          obj53.methods["onDestroy"] = func62;
          func62.definitionLine = 43;
          func62.definitionModule = "kitty";
          var func63 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func63.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 49
              lineNumber = 18
              lineNumber = 48
              onSelf = true;
              var call64 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 50
              lineNumber = 18
              lineNumber = 49
              onSelf = true;
              var call65 = callmethod(this, "posY:=", [1], var_y);
              return call65
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func63.paramCounts = [
            2,
          ];
          func63.variableArities = [
            false,
          ];
          obj53.methods["setLocation"] = func63;
          func63.definitionLine = 47;
          func63.definitionModule = "kitty";
          var func66 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func66.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 54
              lineNumber = 53
              onSelf = true;
              var call67 = callmethod(this, "posX", [0]);
              return call67
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func66.paramCounts = [
            0,
          ];
          func66.variableArities = [
            false,
          ];
          obj53.methods["getX"] = func66;
          func66.definitionLine = 52;
          func66.definitionModule = "kitty";
          var func68 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func68.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 58
              lineNumber = 57
              onSelf = true;
              var call69 = callmethod(this, "posY", [0]);
              return call69
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func68.paramCounts = [
            0,
          ];
          func68.variableArities = [
            false,
          ];
          obj53.methods["getY"] = func68;
          func68.definitionLine = 56;
          func68.definitionModule = "kitty";
          var func70 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func70.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 62
              lineNumber = 61
              onSelf = true;
              var call71 = callmethod(this, "rotation", [0]);
              return call71
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func70.paramCounts = [
            0,
          ];
          func70.variableArities = [
            false,
          ];
          obj53.methods["getRotation"] = func70;
          func70.definitionLine = 60;
          func70.definitionModule = "kitty";
          sourceObject = obj53;
          lineNumber = 21
          onSelf = true;
          var call72 = callmethod(this, "awake", [0]);
          sourceObject = obj53;
          lineNumber = 23
          obj53.data["posX"] = var_x__39__;
          var reader_kitty_posX_73 = function() {
            return this.data["posX"];
          }
          obj53.methods["posX"] = reader_kitty_posX_73;
          obj53.data["posX"] = var_x__39__;
          var writer_kitty_posX_73 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj53.methods["posX:="] = writer_kitty_posX_73;
          reader_kitty_posX_73.confidential = true;
          writer_kitty_posX_73.confidential = true;
          lineNumber = 24;
          moduleName = "kitty";
          lineNumber = 23
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj53.mutable = true;
          sourceObject = obj53;
          lineNumber = 24
          obj53.data["posY"] = var_y__39__;
          var reader_kitty_posY_74 = function() {
            return this.data["posY"];
          }
          obj53.methods["posY"] = reader_kitty_posY_74;
          obj53.data["posY"] = var_y__39__;
          var writer_kitty_posY_74 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj53.methods["posY:="] = writer_kitty_posY_74;
          reader_kitty_posY_74.confidential = true;
          writer_kitty_posY_74.confidential = true;
          lineNumber = 25;
          moduleName = "kitty";
          lineNumber = 24
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj53.mutable = true;
          sourceObject = obj53;
          lineNumber = 25
          obj53.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_75 = function() {
            return this.data["rotation"];
          }
          obj53.methods["rotation"] = reader_kitty_rotation_75;
          obj53.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_75 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj53.methods["rotation:="] = writer_kitty_rotation_75;
          reader_kitty_rotation_75.confidential = true;
          writer_kitty_rotation_75.confidential = true;
          lineNumber = 28;
          moduleName = "kitty";
          lineNumber = 25
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj53.mutable = true;
          sourceObject = obj53;
          sourceObject = obj53;
          sourceObject = obj53;
          sourceObject = obj53;
          sourceObject = obj53;
          sourceObject = obj53;
          sourceObject = obj53;
          sourceObject = obj53;
          superDepth = origSuperDepth;
        }
        obj_init_53.apply(inheritingObject, []);
        return obj53
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj26.methods["new()object"] = func52;
    var func76 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 18
        var string77 = new GraceString("class KittyEntity");
        return string77
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func76.paramCounts = [
    ];
    func76.variableArities = [
    ];
    obj26.methods["asDebugString"] = func76;
    func76.definitionLine = 18;
    func76.definitionModule = "kitty";
    sourceObject = obj26;
    sourceObject = obj26;
    superDepth = origSuperDepth;
  }
  obj_init_26.apply(obj26, []);
  var var_KittyEntity = obj26;
  lineNumber = 65
  lineNumber = 71
  var func78 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func78.paramCounts[0])
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
  func78.paramCounts = [
    0,
  ];
  func78.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func78;
  func78.definitionLine = 71;
  func78.definitionModule = "kitty";
  var obj79 = Grace_allocObject();
  obj79.definitionModule = "kitty";
  obj79.definitionLine = 71;
  obj79.outer = this;
  var reader_kitty_outer_80 = function() {
    return this.outer;
  }
  obj79.methods["outer"] = reader_kitty_outer_80;
  function obj_init_79() {
    var origSuperDepth = superDepth;
    superDepth = obj79;
    obj79.annotations = [];
    var func81 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func81.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj82 = Grace_allocObject();
        obj82.definitionModule = "kitty";
        obj82.definitionLine = 71;
        obj82.outer = this;
        var reader_kitty_outer_83 = function() {
          return this.outer;
        }
        obj82.methods["outer"] = reader_kitty_outer_83;
        function obj_init_82() {
          var origSuperDepth = superDepth;
          superDepth = obj82;
          obj82.annotations = [];
          var func84 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func84.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 80
              onSelf = true;
              var call85 = callmethod(this, "entities", [0]);
              var call86 = callmethod(call85,"add", [1], var_e);
              return call86
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func84.paramTypes = [];
          func84.paramTypes.push([]);
          func84.paramCounts = [
            1,
          ];
          func84.variableArities = [
            false,
          ];
          obj82.methods["addEntity"] = func84;
          func84.definitionLine = 79;
          func84.definitionModule = "kitty";
          sourceObject = obj82;
          obj82.data["canvas"] = undefined;
          var reader_kitty_canvas_87 = function() {
            return this.data["canvas"];
          }
          obj82.methods["canvas"] = reader_kitty_canvas_87;
          obj82.data["canvas"] = undefined;
          var writer_kitty_canvas_87 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj82.methods["canvas:="] = writer_kitty_canvas_87;
          reader_kitty_canvas_87.confidential = true;
          writer_kitty_canvas_87.confidential = true;
          obj82.mutable = true;
          sourceObject = obj82;
          lineNumber = 74
          obj82.data["canvasWidth"] = var_x__39__;
          var reader_kitty_canvasWidth_88 = function() {
            return this.data["canvasWidth"];
          }
          obj82.methods["canvasWidth"] = reader_kitty_canvasWidth_88;
          obj82.data["canvasWidth"] = var_x__39__;
          var writer_kitty_canvasWidth_88 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj82.methods["canvasWidth:="] = writer_kitty_canvasWidth_88;
          reader_kitty_canvasWidth_88.confidential = true;
          writer_kitty_canvasWidth_88.confidential = true;
          lineNumber = 75;
          moduleName = "kitty";
          lineNumber = 74
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'canvasWidth' to be of type Unknown"))
          obj82.mutable = true;
          sourceObject = obj82;
          lineNumber = 75
          obj82.data["canvasHeight"] = var_y__39__;
          var reader_kitty_canvasHeight_89 = function() {
            return this.data["canvasHeight"];
          }
          obj82.methods["canvasHeight"] = reader_kitty_canvasHeight_89;
          obj82.data["canvasHeight"] = var_y__39__;
          var writer_kitty_canvasHeight_89 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj82.methods["canvasHeight:="] = writer_kitty_canvasHeight_89;
          reader_kitty_canvasHeight_89.confidential = true;
          writer_kitty_canvasHeight_89.confidential = true;
          lineNumber = 77;
          moduleName = "kitty";
          lineNumber = 75
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'canvasHeight' to be of type Unknown"))
          obj82.mutable = true;
          sourceObject = obj82;
          lineNumber = 77
          var call90 = callmethod(var_collections,"list", [0]);
          var call91 = callmethod(call90,"new", [0]);
          obj82.data["entities"] = call91;
          var reader_kitty_entities_92 = function() {
            return this.data["entities"];
          }
          obj82.methods["entities"] = reader_kitty_entities_92;
          obj82.data["entities"] = call91;
          var writer_kitty_entities_92 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj82.methods["entities:="] = writer_kitty_entities_92;
          reader_kitty_entities_92.confidential = true;
          writer_kitty_entities_92.confidential = true;
          lineNumber = 79;
          moduleName = "kitty";
          lineNumber = 77
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call91)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj82.mutable = true;
          sourceObject = obj82;
          superDepth = origSuperDepth;
        }
        obj_init_82.apply(obj82, []);
        return obj82
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func81.paramCounts = [
      2,
    ];
    func81.variableArities = [
      false,
    ];
    obj79.methods["new"] = func81;
    func81.definitionLine = 71;
    func81.definitionModule = "kitty";
    var func93 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj94 = Grace_allocObject();
        obj94.definitionModule = "kitty";
        obj94.definitionLine = 71;
        var inho94 = inheritingObject;
        while (inho94.superobj) inho94 = inho94.superobj;
        inho94.superobj = obj94;
        obj94.data = inheritingObject.data;
        obj94.outer = this;
        var reader_kitty_outer_95 = function() {
          return this.outer;
        }
        obj94.methods["outer"] = reader_kitty_outer_95;
        function obj_init_94() {
          var origSuperDepth = superDepth;
          superDepth = obj94;
          obj94.annotations = [];
          var func96 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func96.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 80
              onSelf = true;
              var call97 = callmethod(this, "entities", [0]);
              var call98 = callmethod(call97,"add", [1], var_e);
              return call98
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func96.paramTypes = [];
          func96.paramTypes.push([]);
          func96.paramCounts = [
            1,
          ];
          func96.variableArities = [
            false,
          ];
          obj94.methods["addEntity"] = func96;
          func96.definitionLine = 79;
          func96.definitionModule = "kitty";
          sourceObject = obj94;
          obj94.data["canvas"] = undefined;
          var reader_kitty_canvas_99 = function() {
            return this.data["canvas"];
          }
          obj94.methods["canvas"] = reader_kitty_canvas_99;
          obj94.data["canvas"] = undefined;
          var writer_kitty_canvas_99 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj94.methods["canvas:="] = writer_kitty_canvas_99;
          reader_kitty_canvas_99.confidential = true;
          writer_kitty_canvas_99.confidential = true;
          obj94.mutable = true;
          sourceObject = obj94;
          lineNumber = 74
          obj94.data["canvasWidth"] = var_x__39__;
          var reader_kitty_canvasWidth_100 = function() {
            return this.data["canvasWidth"];
          }
          obj94.methods["canvasWidth"] = reader_kitty_canvasWidth_100;
          obj94.data["canvasWidth"] = var_x__39__;
          var writer_kitty_canvasWidth_100 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj94.methods["canvasWidth:="] = writer_kitty_canvasWidth_100;
          reader_kitty_canvasWidth_100.confidential = true;
          writer_kitty_canvasWidth_100.confidential = true;
          lineNumber = 75;
          moduleName = "kitty";
          lineNumber = 74
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'canvasWidth' to be of type Unknown"))
          obj94.mutable = true;
          sourceObject = obj94;
          lineNumber = 75
          obj94.data["canvasHeight"] = var_y__39__;
          var reader_kitty_canvasHeight_101 = function() {
            return this.data["canvasHeight"];
          }
          obj94.methods["canvasHeight"] = reader_kitty_canvasHeight_101;
          obj94.data["canvasHeight"] = var_y__39__;
          var writer_kitty_canvasHeight_101 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj94.methods["canvasHeight:="] = writer_kitty_canvasHeight_101;
          reader_kitty_canvasHeight_101.confidential = true;
          writer_kitty_canvasHeight_101.confidential = true;
          lineNumber = 77;
          moduleName = "kitty";
          lineNumber = 75
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'canvasHeight' to be of type Unknown"))
          obj94.mutable = true;
          sourceObject = obj94;
          lineNumber = 77
          var call102 = callmethod(var_collections,"list", [0]);
          var call103 = callmethod(call102,"new", [0]);
          obj94.data["entities"] = call103;
          var reader_kitty_entities_104 = function() {
            return this.data["entities"];
          }
          obj94.methods["entities"] = reader_kitty_entities_104;
          obj94.data["entities"] = call103;
          var writer_kitty_entities_104 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj94.methods["entities:="] = writer_kitty_entities_104;
          reader_kitty_entities_104.confidential = true;
          writer_kitty_entities_104.confidential = true;
          lineNumber = 79;
          moduleName = "kitty";
          lineNumber = 77
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call103)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj94.mutable = true;
          sourceObject = obj94;
          superDepth = origSuperDepth;
        }
        obj_init_94.apply(inheritingObject, []);
        return obj94
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj79.methods["new()object"] = func93;
    var func105 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 71
        var string106 = new GraceString("class KittyWorld");
        return string106
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func105.paramCounts = [
    ];
    func105.variableArities = [
    ];
    obj79.methods["asDebugString"] = func105;
    func105.definitionLine = 71;
    func105.definitionModule = "kitty";
    sourceObject = obj79;
    sourceObject = obj79;
    superDepth = origSuperDepth;
  }
  obj_init_79.apply(obj79, []);
  var var_KittyWorld = obj79;
  lineNumber = 85
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
];
if (gctCache)
  gctCache['kitty'] = "modules:\n mgcollections\nmethods-of:KittyEntity.new:\n getX\n getY\n getRotation\n posX:=\n posY:=\n update\n setLocation\n rotation:=\n awake\n posX\n posY\n onDestroy\n start\n rotation\npublic:\n m_world\n m_world:=\n start\n stop\n setWorld\n KittyEntity\n Entity\n KittyWorld\n World\nfresh-methods:\n Entity\n World\nmethods-of:KittyWorld.new:\n canvasHeight\n entities:=\n canvas\n entities\n addEntity\n canvasWidth\n canvasHeight:=\n canvasWidth:=\n canvas:=\nfresh:World:\n canvasHeight\n canvas\n canvasWidth\n entities\n addEntity\n entities:=\n canvasHeight:=\n canvasWidth:=\n canvas:=\nconstructors-of:KittyEntity:\n new\npath:\n kitty\nclasses:\n KittyEntity\n KittyWorld\nfresh:Entity:\n getX\n getY\n rotation\n posX:=\n posY:=\n update\n setLocation\n rotation:=\n awake\n posX\n posY\n onDestroy\n start\n getRotation\nconfidential:\nconstructors-of:KittyWorld:\n new\n";
if (originalSourceLines) {
  originalSourceLines["kitty"] = [
    "import \"mgcollections\" as collections",
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
    "class KittyWorld.new(x', y') {",
    "",
    "    var canvas",
    "    var canvasWidth := x'",
    "    var canvasHeight := y' ",
    "",
    "    var entities := collections.list.new",
    "",
    "    method addEntity(e: Entity) {",
    "        return entities.add(e)",
    "    }",
    "",
    "}",
    "",
    "method World(x', y') {",
    "    object {",
    "        inherits KittyWorld.new(x', y')",
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
