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
      return var_done
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
  var func1 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
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
  func1.paramCounts = [
    0,
  ];
  func1.variableArities = [
    false,
  ];
  this.methods["stop"] = func1;
  func1.definitionLine = 10;
  func1.definitionModule = "kitty";
  lineNumber = 14
  var func2 = function(argcv) {
    var curarg = 1;
    var var_world__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func2.paramCounts[0])
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
  func2.paramCounts = [
    1,
  ];
  func2.variableArities = [
    false,
  ];
  this.methods["setWorld"] = func2;
  func2.definitionLine = 14;
  func2.definitionModule = "kitty";
  lineNumber = 65
  var func3 = function(argcv) {
    var curarg = 1;
    var var_x__39__ = arguments[curarg];
    curarg++;
    var var_y__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func3.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Entity)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 66
      var obj4 = Grace_allocObject();
      obj4.definitionModule = "kitty";
      obj4.definitionLine = 66;
      obj4.outer = this;
      var reader_kitty_outer_5 = function() {
        return this.outer;
      }
      obj4.methods["outer"] = reader_kitty_outer_5;
      function obj_init_4() {
        var origSuperDepth = superDepth;
        superDepth = obj4;
        obj4.annotations = [];
        sourceObject = obj4;
        lineNumber = 67
        var call6 = callmethod(var_KittyEntity,"new()object", [2, 1], var_x__39__, var_y__39__, this);
        obj4.superobj = call6;
        obj4._value = call6._value;
        superDepth = origSuperDepth;
      }
      obj_init_4.apply(obj4, []);
      return obj4
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func3.paramCounts = [
    2,
  ];
  func3.variableArities = [
    false,
  ];
  this.methods["Entity"] = func3;
  func3.definitionLine = 65;
  func3.definitionModule = "kitty";
  var func7 = function(argcv) {
    var curarg = 1;
    var var_x__39__ = arguments[curarg];
    curarg++;
    var var_y__39__ = arguments[curarg];
    curarg++;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj8 = Grace_allocObject();
      obj8.definitionModule = "kitty";
      obj8.definitionLine = 66;
      var inho8 = inheritingObject;
      while (inho8.superobj) inho8 = inho8.superobj;
      inho8.superobj = obj8;
      obj8.data = inheritingObject.data;
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
        var call10 = callmethod(var_KittyEntity,"new()object", [2, 1], var_x__39__, var_y__39__, this);
        obj8.superobj = call10;
        obj8._value = call10._value;
        superDepth = origSuperDepth;
      }
      obj_init_8.apply(inheritingObject, []);
      return obj8
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  this.methods["Entity()object"] = func7;
  lineNumber = 85
  var func11 = function(argcv) {
    var curarg = 1;
    var var_x__39__ = arguments[curarg];
    curarg++;
    var var_y__39__ = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func11.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (World)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 86
      var obj12 = Grace_allocObject();
      obj12.definitionModule = "kitty";
      obj12.definitionLine = 86;
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
        lineNumber = 87
        var call14 = callmethod(var_KittyWorld,"new()object", [2, 1], var_x__39__, var_y__39__, this);
        obj12.superobj = call14;
        obj12._value = call14._value;
        superDepth = origSuperDepth;
      }
      obj_init_12.apply(obj12, []);
      return obj12
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func11.paramCounts = [
    2,
  ];
  func11.variableArities = [
    false,
  ];
  this.methods["World"] = func11;
  func11.definitionLine = 85;
  func11.definitionModule = "kitty";
  var func15 = function(argcv) {
    var curarg = 1;
    var var_x__39__ = arguments[curarg];
    curarg++;
    var var_y__39__ = arguments[curarg];
    curarg++;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj16 = Grace_allocObject();
      obj16.definitionModule = "kitty";
      obj16.definitionLine = 86;
      var inho16 = inheritingObject;
      while (inho16.superobj) inho16 = inho16.superobj;
      inho16.superobj = obj16;
      obj16.data = inheritingObject.data;
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
        var call18 = callmethod(var_KittyWorld,"new()object", [2, 1], var_x__39__, var_y__39__, this);
        obj16.superobj = call18;
        obj16._value = call18._value;
        superDepth = origSuperDepth;
      }
      obj_init_16.apply(inheritingObject, []);
      return obj16
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  this.methods["World()object"] = func15;
  lineNumber = 1
  // Import of mgcollections
  if (typeof gracecode_mgcollections == 'undefined')
    throw new GraceExceptionPacket(RuntimeErrorObject, 
      new GraceString('could not find module collections'));
  var var_collections = do_import("mgcollections", gracecode_mgcollections);
  lineNumber = 6
  var var_m__95__world;
  lineNumber = 1
  var func19 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func19.paramCounts[0])
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
  func19.paramCounts = [
    0,
  ];
  func19.variableArities = [
    false,
  ];
  this.methods["m_world"] = func19;
  func19.definitionLine = 1;
  func19.definitionModule = "kitty";
  lineNumber = 1
  var func20 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func20.paramCounts[0])
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
  func20.paramCounts = [
    1,
  ];
  func20.variableArities = [
    false,
  ];
  this.methods["m_world:="] = func20;
  func20.definitionLine = 1;
  func20.definitionModule = "kitty";
  lineNumber = 6
  lineNumber = 10
  lineNumber = 14
  lineNumber = 18
  var func21 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func21.paramCounts[0])
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
  func21.paramCounts = [
    0,
  ];
  func21.variableArities = [
    false,
  ];
  this.methods["KittyEntity"] = func21;
  func21.definitionLine = 18;
  func21.definitionModule = "kitty";
  var obj22 = Grace_allocObject();
  obj22.definitionModule = "kitty";
  obj22.definitionLine = 18;
  obj22.outer = this;
  var reader_kitty_outer_23 = function() {
    return this.outer;
  }
  obj22.methods["outer"] = reader_kitty_outer_23;
  function obj_init_22() {
    var origSuperDepth = superDepth;
    superDepth = obj22;
    obj22.annotations = [];
    var func24 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func24.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj25 = Grace_allocObject();
        obj25.definitionModule = "kitty";
        obj25.definitionLine = 18;
        obj25.outer = this;
        var reader_kitty_outer_26 = function() {
          return this.outer;
        }
        obj25.methods["outer"] = reader_kitty_outer_26;
        function obj_init_25() {
          var origSuperDepth = superDepth;
          superDepth = obj25;
          obj25.annotations = [];
          var func27 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func27.paramCounts[0])
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
          func27.paramCounts = [
            0,
          ];
          func27.variableArities = [
            false,
          ];
          obj25.methods["awake"] = func27;
          func27.definitionLine = 28;
          func27.definitionModule = "kitty";
          var func28 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func28.paramCounts[0])
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
          func28.paramCounts = [
            0,
          ];
          func28.variableArities = [
            false,
          ];
          obj25.methods["start"] = func28;
          func28.definitionLine = 33;
          func28.definitionModule = "kitty";
          var func29 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func29.paramCounts[0])
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
          func29.paramCounts = [
            0,
          ];
          func29.variableArities = [
            false,
          ];
          obj25.methods["update"] = func29;
          func29.definitionLine = 38;
          func29.definitionModule = "kitty";
          var func30 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func30.paramCounts[0])
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
          func30.paramCounts = [
            0,
          ];
          func30.variableArities = [
            false,
          ];
          obj25.methods["onDestroy"] = func30;
          func30.definitionLine = 43;
          func30.definitionModule = "kitty";
          var func31 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func31.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 49
              lineNumber = 18
              lineNumber = 48
              onSelf = true;
              var call32 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 50
              lineNumber = 18
              lineNumber = 49
              onSelf = true;
              var call33 = callmethod(this, "posY:=", [1], var_y);
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
            2,
          ];
          func31.variableArities = [
            false,
          ];
          obj25.methods["setLocation"] = func31;
          func31.definitionLine = 47;
          func31.definitionModule = "kitty";
          var func34 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func34.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 54
              lineNumber = 53
              onSelf = true;
              var call35 = callmethod(this, "posX", [0]);
              return call35
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
          obj25.methods["getX"] = func34;
          func34.definitionLine = 52;
          func34.definitionModule = "kitty";
          var func36 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func36.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 58
              lineNumber = 57
              onSelf = true;
              var call37 = callmethod(this, "posY", [0]);
              return call37
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
          obj25.methods["getY"] = func36;
          func36.definitionLine = 56;
          func36.definitionModule = "kitty";
          var func38 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func38.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 62
              lineNumber = 61
              onSelf = true;
              var call39 = callmethod(this, "rotation", [0]);
              return call39
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
          obj25.methods["getRotation"] = func38;
          func38.definitionLine = 60;
          func38.definitionModule = "kitty";
          sourceObject = obj25;
          lineNumber = 21
          onSelf = true;
          var call40 = callmethod(this, "awake", [0]);
          sourceObject = obj25;
          lineNumber = 23
          obj25.data["posX"] = var_x__39__;
          var reader_kitty_posX_41 = function() {
            return this.data["posX"];
          }
          obj25.methods["posX"] = reader_kitty_posX_41;
          obj25.data["posX"] = var_x__39__;
          var writer_kitty_posX_41 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj25.methods["posX:="] = writer_kitty_posX_41;
          reader_kitty_posX_41.confidential = true;
          writer_kitty_posX_41.confidential = true;
          lineNumber = 24;
          moduleName = "kitty";
          lineNumber = 23
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj25.mutable = true;
          sourceObject = obj25;
          lineNumber = 24
          obj25.data["posY"] = var_y__39__;
          var reader_kitty_posY_42 = function() {
            return this.data["posY"];
          }
          obj25.methods["posY"] = reader_kitty_posY_42;
          obj25.data["posY"] = var_y__39__;
          var writer_kitty_posY_42 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj25.methods["posY:="] = writer_kitty_posY_42;
          reader_kitty_posY_42.confidential = true;
          writer_kitty_posY_42.confidential = true;
          lineNumber = 25;
          moduleName = "kitty";
          lineNumber = 24
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj25.mutable = true;
          sourceObject = obj25;
          lineNumber = 25
          obj25.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_43 = function() {
            return this.data["rotation"];
          }
          obj25.methods["rotation"] = reader_kitty_rotation_43;
          obj25.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_43 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj25.methods["rotation:="] = writer_kitty_rotation_43;
          reader_kitty_rotation_43.confidential = true;
          writer_kitty_rotation_43.confidential = true;
          lineNumber = 28;
          moduleName = "kitty";
          lineNumber = 25
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj25.mutable = true;
          sourceObject = obj25;
          sourceObject = obj25;
          sourceObject = obj25;
          sourceObject = obj25;
          sourceObject = obj25;
          sourceObject = obj25;
          sourceObject = obj25;
          sourceObject = obj25;
          superDepth = origSuperDepth;
        }
        obj_init_25.apply(obj25, []);
        return obj25
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func24.paramCounts = [
      2,
    ];
    func24.variableArities = [
      false,
    ];
    obj22.methods["new"] = func24;
    func24.definitionLine = 18;
    func24.definitionModule = "kitty";
    var func44 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj45 = Grace_allocObject();
        obj45.definitionModule = "kitty";
        obj45.definitionLine = 18;
        var inho45 = inheritingObject;
        while (inho45.superobj) inho45 = inho45.superobj;
        inho45.superobj = obj45;
        obj45.data = inheritingObject.data;
        obj45.outer = this;
        var reader_kitty_outer_46 = function() {
          return this.outer;
        }
        obj45.methods["outer"] = reader_kitty_outer_46;
        function obj_init_45() {
          var origSuperDepth = superDepth;
          superDepth = obj45;
          obj45.annotations = [];
          var func47 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func47.paramCounts[0])
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
          func47.paramCounts = [
            0,
          ];
          func47.variableArities = [
            false,
          ];
          obj45.methods["awake"] = func47;
          func47.definitionLine = 28;
          func47.definitionModule = "kitty";
          var func48 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func48.paramCounts[0])
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
          func48.paramCounts = [
            0,
          ];
          func48.variableArities = [
            false,
          ];
          obj45.methods["start"] = func48;
          func48.definitionLine = 33;
          func48.definitionModule = "kitty";
          var func49 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func49.paramCounts[0])
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
          func49.paramCounts = [
            0,
          ];
          func49.variableArities = [
            false,
          ];
          obj45.methods["update"] = func49;
          func49.definitionLine = 38;
          func49.definitionModule = "kitty";
          var func50 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func50.paramCounts[0])
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
          func50.paramCounts = [
            0,
          ];
          func50.variableArities = [
            false,
          ];
          obj45.methods["onDestroy"] = func50;
          func50.definitionLine = 43;
          func50.definitionModule = "kitty";
          var func51 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func51.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 49
              lineNumber = 18
              lineNumber = 48
              onSelf = true;
              var call52 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 50
              lineNumber = 18
              lineNumber = 49
              onSelf = true;
              var call53 = callmethod(this, "posY:=", [1], var_y);
              return call53
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func51.paramCounts = [
            2,
          ];
          func51.variableArities = [
            false,
          ];
          obj45.methods["setLocation"] = func51;
          func51.definitionLine = 47;
          func51.definitionModule = "kitty";
          var func54 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func54.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 54
              lineNumber = 53
              onSelf = true;
              var call55 = callmethod(this, "posX", [0]);
              return call55
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func54.paramCounts = [
            0,
          ];
          func54.variableArities = [
            false,
          ];
          obj45.methods["getX"] = func54;
          func54.definitionLine = 52;
          func54.definitionModule = "kitty";
          var func56 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func56.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 58
              lineNumber = 57
              onSelf = true;
              var call57 = callmethod(this, "posY", [0]);
              return call57
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func56.paramCounts = [
            0,
          ];
          func56.variableArities = [
            false,
          ];
          obj45.methods["getY"] = func56;
          func56.definitionLine = 56;
          func56.definitionModule = "kitty";
          var func58 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func58.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 62
              lineNumber = 61
              onSelf = true;
              var call59 = callmethod(this, "rotation", [0]);
              return call59
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
          obj45.methods["getRotation"] = func58;
          func58.definitionLine = 60;
          func58.definitionModule = "kitty";
          sourceObject = obj45;
          lineNumber = 21
          onSelf = true;
          var call60 = callmethod(this, "awake", [0]);
          sourceObject = obj45;
          lineNumber = 23
          obj45.data["posX"] = var_x__39__;
          var reader_kitty_posX_61 = function() {
            return this.data["posX"];
          }
          obj45.methods["posX"] = reader_kitty_posX_61;
          obj45.data["posX"] = var_x__39__;
          var writer_kitty_posX_61 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj45.methods["posX:="] = writer_kitty_posX_61;
          reader_kitty_posX_61.confidential = true;
          writer_kitty_posX_61.confidential = true;
          lineNumber = 24;
          moduleName = "kitty";
          lineNumber = 23
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj45.mutable = true;
          sourceObject = obj45;
          lineNumber = 24
          obj45.data["posY"] = var_y__39__;
          var reader_kitty_posY_62 = function() {
            return this.data["posY"];
          }
          obj45.methods["posY"] = reader_kitty_posY_62;
          obj45.data["posY"] = var_y__39__;
          var writer_kitty_posY_62 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj45.methods["posY:="] = writer_kitty_posY_62;
          reader_kitty_posY_62.confidential = true;
          writer_kitty_posY_62.confidential = true;
          lineNumber = 25;
          moduleName = "kitty";
          lineNumber = 24
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj45.mutable = true;
          sourceObject = obj45;
          lineNumber = 25
          obj45.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_63 = function() {
            return this.data["rotation"];
          }
          obj45.methods["rotation"] = reader_kitty_rotation_63;
          obj45.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_63 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj45.methods["rotation:="] = writer_kitty_rotation_63;
          reader_kitty_rotation_63.confidential = true;
          writer_kitty_rotation_63.confidential = true;
          lineNumber = 28;
          moduleName = "kitty";
          lineNumber = 25
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj45.mutable = true;
          sourceObject = obj45;
          sourceObject = obj45;
          sourceObject = obj45;
          sourceObject = obj45;
          sourceObject = obj45;
          sourceObject = obj45;
          sourceObject = obj45;
          sourceObject = obj45;
          superDepth = origSuperDepth;
        }
        obj_init_45.apply(inheritingObject, []);
        return obj45
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj22.methods["new()object"] = func44;
    var func64 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 18
        var string65 = new GraceString("class KittyEntity");
        return string65
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func64.paramCounts = [
    ];
    func64.variableArities = [
    ];
    obj22.methods["asDebugString"] = func64;
    func64.definitionLine = 18;
    func64.definitionModule = "kitty";
    sourceObject = obj22;
    sourceObject = obj22;
    superDepth = origSuperDepth;
  }
  obj_init_22.apply(obj22, []);
  var var_KittyEntity = obj22;
  lineNumber = 65
  lineNumber = 71
  var func66 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func66.paramCounts[0])
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
  func66.paramCounts = [
    0,
  ];
  func66.variableArities = [
    false,
  ];
  this.methods["KittyWorld"] = func66;
  func66.definitionLine = 71;
  func66.definitionModule = "kitty";
  var obj67 = Grace_allocObject();
  obj67.definitionModule = "kitty";
  obj67.definitionLine = 71;
  obj67.outer = this;
  var reader_kitty_outer_68 = function() {
    return this.outer;
  }
  obj67.methods["outer"] = reader_kitty_outer_68;
  function obj_init_67() {
    var origSuperDepth = superDepth;
    superDepth = obj67;
    obj67.annotations = [];
    var func69 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func69.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj70 = Grace_allocObject();
        obj70.definitionModule = "kitty";
        obj70.definitionLine = 71;
        obj70.outer = this;
        var reader_kitty_outer_71 = function() {
          return this.outer;
        }
        obj70.methods["outer"] = reader_kitty_outer_71;
        function obj_init_70() {
          var origSuperDepth = superDepth;
          superDepth = obj70;
          obj70.annotations = [];
          var func72 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func72.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 80
              onSelf = true;
              var call73 = callmethod(this, "entities", [0]);
              var call74 = callmethod(call73,"add", [1], var_e);
              return call74
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func72.paramTypes = [];
          func72.paramTypes.push([]);
          func72.paramCounts = [
            1,
          ];
          func72.variableArities = [
            false,
          ];
          obj70.methods["addEntity"] = func72;
          func72.definitionLine = 79;
          func72.definitionModule = "kitty";
          sourceObject = obj70;
          obj70.data["canvas"] = undefined;
          var reader_kitty_canvas_75 = function() {
            return this.data["canvas"];
          }
          obj70.methods["canvas"] = reader_kitty_canvas_75;
          obj70.data["canvas"] = undefined;
          var writer_kitty_canvas_75 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj70.methods["canvas:="] = writer_kitty_canvas_75;
          reader_kitty_canvas_75.confidential = true;
          writer_kitty_canvas_75.confidential = true;
          obj70.mutable = true;
          sourceObject = obj70;
          lineNumber = 74
          obj70.data["canvasWidth"] = var_x__39__;
          var reader_kitty_canvasWidth_76 = function() {
            return this.data["canvasWidth"];
          }
          obj70.methods["canvasWidth"] = reader_kitty_canvasWidth_76;
          obj70.data["canvasWidth"] = var_x__39__;
          var writer_kitty_canvasWidth_76 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj70.methods["canvasWidth:="] = writer_kitty_canvasWidth_76;
          reader_kitty_canvasWidth_76.confidential = true;
          writer_kitty_canvasWidth_76.confidential = true;
          lineNumber = 75;
          moduleName = "kitty";
          lineNumber = 74
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'canvasWidth' to be of type Unknown"))
          obj70.mutable = true;
          sourceObject = obj70;
          lineNumber = 75
          obj70.data["canvasHeight"] = var_y__39__;
          var reader_kitty_canvasHeight_77 = function() {
            return this.data["canvasHeight"];
          }
          obj70.methods["canvasHeight"] = reader_kitty_canvasHeight_77;
          obj70.data["canvasHeight"] = var_y__39__;
          var writer_kitty_canvasHeight_77 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj70.methods["canvasHeight:="] = writer_kitty_canvasHeight_77;
          reader_kitty_canvasHeight_77.confidential = true;
          writer_kitty_canvasHeight_77.confidential = true;
          lineNumber = 77;
          moduleName = "kitty";
          lineNumber = 75
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'canvasHeight' to be of type Unknown"))
          obj70.mutable = true;
          sourceObject = obj70;
          lineNumber = 77
          var call78 = callmethod(var_collections,"list", [0]);
          var call79 = callmethod(call78,"new", [0]);
          obj70.data["entities"] = call79;
          var reader_kitty_entities_80 = function() {
            return this.data["entities"];
          }
          obj70.methods["entities"] = reader_kitty_entities_80;
          obj70.data["entities"] = call79;
          var writer_kitty_entities_80 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj70.methods["entities:="] = writer_kitty_entities_80;
          reader_kitty_entities_80.confidential = true;
          writer_kitty_entities_80.confidential = true;
          lineNumber = 79;
          moduleName = "kitty";
          lineNumber = 77
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call79)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj70.mutable = true;
          sourceObject = obj70;
          superDepth = origSuperDepth;
        }
        obj_init_70.apply(obj70, []);
        return obj70
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func69.paramCounts = [
      2,
    ];
    func69.variableArities = [
      false,
    ];
    obj67.methods["new"] = func69;
    func69.definitionLine = 71;
    func69.definitionModule = "kitty";
    var func81 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj82 = Grace_allocObject();
        obj82.definitionModule = "kitty";
        obj82.definitionLine = 71;
        var inho82 = inheritingObject;
        while (inho82.superobj) inho82 = inho82.superobj;
        inho82.superobj = obj82;
        obj82.data = inheritingObject.data;
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
        obj_init_82.apply(inheritingObject, []);
        return obj82
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj67.methods["new()object"] = func81;
    var func93 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 71
        var string94 = new GraceString("class KittyWorld");
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
    obj67.methods["asDebugString"] = func93;
    func93.definitionLine = 71;
    func93.definitionModule = "kitty";
    sourceObject = obj67;
    sourceObject = obj67;
    superDepth = origSuperDepth;
  }
  obj_init_67.apply(obj67, []);
  var var_KittyWorld = obj67;
  lineNumber = 85
  return this;
}
gracecode_kitty.imports = [
'mgcollections',
];
if (gctCache)
  gctCache['kitty'] = "public:\n m_world\n m_world:=\n start\n stop\n setWorld\n KittyEntity\n Entity\n KittyWorld\n World\nmethods-of:KittyWorld.new:\n canvas\n canvasWidth\n entities:=\n canvasWidth:=\n entities\n addEntity\n canvasHeight:=\n canvas:=\n canvasHeight\nconstructors-of:KittyEntity:\n new\npath:\n kitty\nclasses:\n KittyEntity\n KittyWorld\nfresh:Entity:\n onDestroy\n posX:=\n posY:=\n update\n setLocation\n rotation:=\n awake\n posX\n posY\n start\n rotation\n getY\n getX\n getRotation\nconfidential:\nconstructors-of:KittyWorld:\n new\nfresh-methods:\n Entity\n World\nfresh:World:\n canvas\n canvasWidth\n entities:=\n canvasWidth:=\n entities\n addEntity\n canvasHeight:=\n canvas:=\n canvasHeight\nmodules:\n mgcollections\nmethods-of:KittyEntity.new:\n onDestroy\n posX:=\n posY:=\n update\n setLocation\n rotation:=\n awake\n posX\n posY\n start\n rotation\n getRotation\n getX\n getY\n";
if (originalSourceLines) {
  originalSourceLines["kitty"] = [
    "import \"mgcollections\" as collections",
    "",
    "// Main class for game library",
    "var m_world",
    "",
    "method start {",
    "",
    "}",
    "",
    "method stop {",
    "",
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
    "",
    "    }",
    "",
    "    // Called on game start",
    "    method start {",
    "",
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
