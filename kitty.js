function gracecode_kitty () {
  this.definitionModule = "kitty";
  this.definitionLine = 0;
  lineNumber = 4
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
  func0.definitionLine = 4;
  func0.definitionModule = "kitty";
  lineNumber = 8
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
  func1.definitionLine = 8;
  func1.definitionModule = "kitty";
  lineNumber = 12
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
      lineNumber = 14
      lineNumber = 13
      var_world = var_world__39__;
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
  func2.definitionLine = 12;
  func2.definitionModule = "kitty";
  lineNumber = 4
  var var_world;
  lineNumber = 1
  var func3 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func3.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (world)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      lineNumber = 2
      return var_world
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
  this.methods["world"] = func3;
  func3.definitionLine = 1;
  func3.definitionModule = "kitty";
  lineNumber = 1
  var func4 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func4.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (world:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      var_world = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func4.paramCounts = [
    1,
  ];
  func4.variableArities = [
    false,
  ];
  this.methods["world:="] = func4;
  func4.definitionLine = 1;
  func4.definitionModule = "kitty";
  lineNumber = 4
  lineNumber = 8
  lineNumber = 12
  lineNumber = 16
  var func5 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func5.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Entity)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      return var_Entity
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func5.paramCounts = [
    0,
  ];
  func5.variableArities = [
    false,
  ];
  this.methods["Entity"] = func5;
  func5.definitionLine = 16;
  func5.definitionModule = "kitty";
  var obj6 = Grace_allocObject();
  obj6.definitionModule = "kitty";
  obj6.definitionLine = 16;
  obj6.outer = this;
  var reader_kitty_outer_7 = function() {
    return this.outer;
  }
  obj6.methods["outer"] = reader_kitty_outer_7;
  function obj_init_6() {
    var origSuperDepth = superDepth;
    superDepth = obj6;
    obj6.annotations = [];
    var func8 = function(argcv) {
      var curarg = 1;
      var var_x = arguments[curarg];
      curarg++;
      var var_y = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func8.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj9 = Grace_allocObject();
        obj9.definitionModule = "kitty";
        obj9.definitionLine = 16;
        obj9.outer = this;
        var reader_kitty_outer_10 = function() {
          return this.outer;
        }
        obj9.methods["outer"] = reader_kitty_outer_10;
        function obj_init_9() {
          var origSuperDepth = superDepth;
          superDepth = obj9;
          obj9.annotations = [];
          var func11 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func11.paramCounts[0])
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
          func11.paramCounts = [
            0,
          ];
          func11.variableArities = [
            false,
          ];
          obj9.methods["awake"] = func11;
          func11.definitionLine = 26;
          func11.definitionModule = "kitty";
          var func12 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func12.paramCounts[0])
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
          func12.paramCounts = [
            0,
          ];
          func12.variableArities = [
            false,
          ];
          obj9.methods["start"] = func12;
          func12.definitionLine = 31;
          func12.definitionModule = "kitty";
          var func13 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func13.paramCounts[0])
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
          func13.paramCounts = [
            0,
          ];
          func13.variableArities = [
            false,
          ];
          obj9.methods["update"] = func13;
          func13.definitionLine = 36;
          func13.definitionModule = "kitty";
          var func14 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func14.paramCounts[0])
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
          func14.paramCounts = [
            0,
          ];
          func14.variableArities = [
            false,
          ];
          obj9.methods["onDestroy"] = func14;
          func14.definitionLine = 41;
          func14.definitionModule = "kitty";
          var func15 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func15.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 47
              lineNumber = 16
              lineNumber = 46
              onSelf = true;
              var call16 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 48
              lineNumber = 16
              lineNumber = 47
              onSelf = true;
              var call17 = callmethod(this, "posY:=", [1], var_y);
              return call17
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
          obj9.methods["setLocation"] = func15;
          func15.definitionLine = 45;
          func15.definitionModule = "kitty";
          var func18 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func18.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 52
              lineNumber = 51
              onSelf = true;
              var call19 = callmethod(this, "posX", [0]);
              return call19
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func18.paramCounts = [
            0,
          ];
          func18.variableArities = [
            false,
          ];
          obj9.methods["getX"] = func18;
          func18.definitionLine = 50;
          func18.definitionModule = "kitty";
          var func20 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func20.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 56
              lineNumber = 55
              onSelf = true;
              var call21 = callmethod(this, "posY", [0]);
              return call21
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func20.paramCounts = [
            0,
          ];
          func20.variableArities = [
            false,
          ];
          obj9.methods["getY"] = func20;
          func20.definitionLine = 54;
          func20.definitionModule = "kitty";
          var func22 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func22.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 60
              lineNumber = 59
              onSelf = true;
              var call23 = callmethod(this, "rotation", [0]);
              return call23
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func22.paramCounts = [
            0,
          ];
          func22.variableArities = [
            false,
          ];
          obj9.methods["getRotation"] = func22;
          func22.definitionLine = 58;
          func22.definitionModule = "kitty";
          sourceObject = obj9;
          lineNumber = 19
          onSelf = true;
          var call24 = callmethod(this, "awake", [0]);
          sourceObject = obj9;
          lineNumber = 21
          obj9.data["posX"] = var_x;
          var reader_kitty_posX_25 = function() {
            return this.data["posX"];
          }
          obj9.methods["posX"] = reader_kitty_posX_25;
          obj9.data["posX"] = var_x;
          var writer_kitty_posX_25 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj9.methods["posX:="] = writer_kitty_posX_25;
          reader_kitty_posX_25.confidential = true;
          writer_kitty_posX_25.confidential = true;
          lineNumber = 22;
          moduleName = "kitty";
          lineNumber = 21
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj9.mutable = true;
          sourceObject = obj9;
          lineNumber = 22
          obj9.data["posY"] = var_y;
          var reader_kitty_posY_26 = function() {
            return this.data["posY"];
          }
          obj9.methods["posY"] = reader_kitty_posY_26;
          obj9.data["posY"] = var_y;
          var writer_kitty_posY_26 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj9.methods["posY:="] = writer_kitty_posY_26;
          reader_kitty_posY_26.confidential = true;
          writer_kitty_posY_26.confidential = true;
          lineNumber = 23;
          moduleName = "kitty";
          lineNumber = 22
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj9.mutable = true;
          sourceObject = obj9;
          lineNumber = 23
          obj9.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_27 = function() {
            return this.data["rotation"];
          }
          obj9.methods["rotation"] = reader_kitty_rotation_27;
          obj9.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_27 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj9.methods["rotation:="] = writer_kitty_rotation_27;
          reader_kitty_rotation_27.confidential = true;
          writer_kitty_rotation_27.confidential = true;
          lineNumber = 26;
          moduleName = "kitty";
          lineNumber = 23
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj9.mutable = true;
          sourceObject = obj9;
          sourceObject = obj9;
          sourceObject = obj9;
          sourceObject = obj9;
          sourceObject = obj9;
          sourceObject = obj9;
          sourceObject = obj9;
          sourceObject = obj9;
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
    obj6.methods["new"] = func8;
    func8.definitionLine = 16;
    func8.definitionModule = "kitty";
    var func28 = function(argcv) {
      var curarg = 1;
      var var_x = arguments[curarg];
      curarg++;
      var var_y = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj29 = Grace_allocObject();
        obj29.definitionModule = "kitty";
        obj29.definitionLine = 16;
        var inho29 = inheritingObject;
        while (inho29.superobj) inho29 = inho29.superobj;
        inho29.superobj = obj29;
        obj29.data = inheritingObject.data;
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
              return var_done
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
          func31.definitionLine = 26;
          func31.definitionModule = "kitty";
          var func32 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func32.paramCounts[0])
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
          func32.paramCounts = [
            0,
          ];
          func32.variableArities = [
            false,
          ];
          obj29.methods["start"] = func32;
          func32.definitionLine = 31;
          func32.definitionModule = "kitty";
          var func33 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func33.paramCounts[0])
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
          func33.paramCounts = [
            0,
          ];
          func33.variableArities = [
            false,
          ];
          obj29.methods["update"] = func33;
          func33.definitionLine = 36;
          func33.definitionModule = "kitty";
          var func34 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func34.paramCounts[0])
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
          func34.paramCounts = [
            0,
          ];
          func34.variableArities = [
            false,
          ];
          obj29.methods["onDestroy"] = func34;
          func34.definitionLine = 41;
          func34.definitionModule = "kitty";
          var func35 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func35.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 47
              lineNumber = 16
              lineNumber = 46
              onSelf = true;
              var call36 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 48
              lineNumber = 16
              lineNumber = 47
              onSelf = true;
              var call37 = callmethod(this, "posY:=", [1], var_y);
              return call37
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func35.paramCounts = [
            2,
          ];
          func35.variableArities = [
            false,
          ];
          obj29.methods["setLocation"] = func35;
          func35.definitionLine = 45;
          func35.definitionModule = "kitty";
          var func38 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func38.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 52
              lineNumber = 51
              onSelf = true;
              var call39 = callmethod(this, "posX", [0]);
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
          obj29.methods["getX"] = func38;
          func38.definitionLine = 50;
          func38.definitionModule = "kitty";
          var func40 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func40.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 56
              lineNumber = 55
              onSelf = true;
              var call41 = callmethod(this, "posY", [0]);
              return call41
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
          obj29.methods["getY"] = func40;
          func40.definitionLine = 54;
          func40.definitionModule = "kitty";
          var func42 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func42.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "kitty";
            try {
              lineNumber = 60
              lineNumber = 59
              onSelf = true;
              var call43 = callmethod(this, "rotation", [0]);
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
          obj29.methods["getRotation"] = func42;
          func42.definitionLine = 58;
          func42.definitionModule = "kitty";
          sourceObject = obj29;
          lineNumber = 19
          onSelf = true;
          var call44 = callmethod(this, "awake", [0]);
          sourceObject = obj29;
          lineNumber = 21
          obj29.data["posX"] = var_x;
          var reader_kitty_posX_45 = function() {
            return this.data["posX"];
          }
          obj29.methods["posX"] = reader_kitty_posX_45;
          obj29.data["posX"] = var_x;
          var writer_kitty_posX_45 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj29.methods["posX:="] = writer_kitty_posX_45;
          reader_kitty_posX_45.confidential = true;
          writer_kitty_posX_45.confidential = true;
          lineNumber = 22;
          moduleName = "kitty";
          lineNumber = 21
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj29.mutable = true;
          sourceObject = obj29;
          lineNumber = 22
          obj29.data["posY"] = var_y;
          var reader_kitty_posY_46 = function() {
            return this.data["posY"];
          }
          obj29.methods["posY"] = reader_kitty_posY_46;
          obj29.data["posY"] = var_y;
          var writer_kitty_posY_46 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj29.methods["posY:="] = writer_kitty_posY_46;
          reader_kitty_posY_46.confidential = true;
          writer_kitty_posY_46.confidential = true;
          lineNumber = 23;
          moduleName = "kitty";
          lineNumber = 22
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj29.mutable = true;
          sourceObject = obj29;
          lineNumber = 23
          obj29.data["rotation"] = new GraceNum(0);
          var reader_kitty_rotation_47 = function() {
            return this.data["rotation"];
          }
          obj29.methods["rotation"] = reader_kitty_rotation_47;
          obj29.data["rotation"] = new GraceNum(0);
          var writer_kitty_rotation_47 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj29.methods["rotation:="] = writer_kitty_rotation_47;
          reader_kitty_rotation_47.confidential = true;
          writer_kitty_rotation_47.confidential = true;
          lineNumber = 26;
          moduleName = "kitty";
          lineNumber = 23
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
        obj_init_29.apply(inheritingObject, []);
        return obj29
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj6.methods["new()object"] = func28;
    var func48 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 16
        var string49 = new GraceString("class Entity");
        return string49
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func48.paramCounts = [
    ];
    func48.variableArities = [
    ];
    obj6.methods["asDebugString"] = func48;
    func48.definitionLine = 16;
    func48.definitionModule = "kitty";
    sourceObject = obj6;
    sourceObject = obj6;
    superDepth = origSuperDepth;
  }
  obj_init_6.apply(obj6, []);
  var var_Entity = obj6;
  lineNumber = 63
  var func50 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func50.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (World)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "kitty";
    try {
      return var_World
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
  this.methods["World"] = func50;
  func50.definitionLine = 63;
  func50.definitionModule = "kitty";
  var obj51 = Grace_allocObject();
  obj51.definitionModule = "kitty";
  obj51.definitionLine = 63;
  obj51.outer = this;
  var reader_kitty_outer_52 = function() {
    return this.outer;
  }
  obj51.methods["outer"] = reader_kitty_outer_52;
  function obj_init_51() {
    var origSuperDepth = superDepth;
    superDepth = obj51;
    obj51.annotations = [];
    var func53 = function(argcv) {
      var curarg = 1;
      var var_x = arguments[curarg];
      curarg++;
      var var_y = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func53.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        var obj54 = Grace_allocObject();
        obj54.definitionModule = "kitty";
        obj54.definitionLine = 63;
        obj54.outer = this;
        var reader_kitty_outer_55 = function() {
          return this.outer;
        }
        obj54.methods["outer"] = reader_kitty_outer_55;
        function obj_init_54() {
          var origSuperDepth = superDepth;
          superDepth = obj54;
          obj54.annotations = [];
          sourceObject = obj54;
          obj54.data["canvas"] = undefined;
          var reader_kitty_canvas_56 = function() {
            return this.data["canvas"];
          }
          obj54.methods["canvas"] = reader_kitty_canvas_56;
          obj54.data["canvas"] = undefined;
          var writer_kitty_canvas_56 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj54.methods["canvas:="] = writer_kitty_canvas_56;
          reader_kitty_canvas_56.confidential = true;
          writer_kitty_canvas_56.confidential = true;
          obj54.mutable = true;
          sourceObject = obj54;
          lineNumber = 66
          obj54.data["canvasWidth"] = var_x;
          var reader_kitty_canvasWidth_57 = function() {
            return this.data["canvasWidth"];
          }
          obj54.methods["canvasWidth"] = reader_kitty_canvasWidth_57;
          obj54.data["canvasWidth"] = var_x;
          var writer_kitty_canvasWidth_57 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj54.methods["canvasWidth:="] = writer_kitty_canvasWidth_57;
          reader_kitty_canvasWidth_57.confidential = true;
          writer_kitty_canvasWidth_57.confidential = true;
          lineNumber = 67;
          moduleName = "kitty";
          lineNumber = 66
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'canvasWidth' to be of type Unknown"))
          obj54.mutable = true;
          sourceObject = obj54;
          lineNumber = 67
          obj54.data["canvasHeight"] = var_y;
          var reader_kitty_canvasHeight_58 = function() {
            return this.data["canvasHeight"];
          }
          obj54.methods["canvasHeight"] = reader_kitty_canvasHeight_58;
          obj54.data["canvasHeight"] = var_y;
          var writer_kitty_canvasHeight_58 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj54.methods["canvasHeight:="] = writer_kitty_canvasHeight_58;
          reader_kitty_canvasHeight_58.confidential = true;
          writer_kitty_canvasHeight_58.confidential = true;
          lineNumber = 74;
          moduleName = "kitty";
          lineNumber = 67
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'canvasHeight' to be of type Unknown"))
          obj54.mutable = true;
          superDepth = origSuperDepth;
        }
        obj_init_54.apply(obj54, []);
        return obj54
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func53.paramCounts = [
      2,
    ];
    func53.variableArities = [
      false,
    ];
    obj51.methods["new"] = func53;
    func53.definitionLine = 63;
    func53.definitionModule = "kitty";
    var func59 = function(argcv) {
      var curarg = 1;
      var var_x = arguments[curarg];
      curarg++;
      var var_y = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj60 = Grace_allocObject();
        obj60.definitionModule = "kitty";
        obj60.definitionLine = 63;
        var inho60 = inheritingObject;
        while (inho60.superobj) inho60 = inho60.superobj;
        inho60.superobj = obj60;
        obj60.data = inheritingObject.data;
        obj60.outer = this;
        var reader_kitty_outer_61 = function() {
          return this.outer;
        }
        obj60.methods["outer"] = reader_kitty_outer_61;
        function obj_init_60() {
          var origSuperDepth = superDepth;
          superDepth = obj60;
          obj60.annotations = [];
          sourceObject = obj60;
          obj60.data["canvas"] = undefined;
          var reader_kitty_canvas_62 = function() {
            return this.data["canvas"];
          }
          obj60.methods["canvas"] = reader_kitty_canvas_62;
          obj60.data["canvas"] = undefined;
          var writer_kitty_canvas_62 = function(argcv, o) {
            this.data["canvas"] = o;
          }
          obj60.methods["canvas:="] = writer_kitty_canvas_62;
          reader_kitty_canvas_62.confidential = true;
          writer_kitty_canvas_62.confidential = true;
          obj60.mutable = true;
          sourceObject = obj60;
          lineNumber = 66
          obj60.data["canvasWidth"] = var_x;
          var reader_kitty_canvasWidth_63 = function() {
            return this.data["canvasWidth"];
          }
          obj60.methods["canvasWidth"] = reader_kitty_canvasWidth_63;
          obj60.data["canvasWidth"] = var_x;
          var writer_kitty_canvasWidth_63 = function(argcv, o) {
            this.data["canvasWidth"] = o;
          }
          obj60.methods["canvasWidth:="] = writer_kitty_canvasWidth_63;
          reader_kitty_canvasWidth_63.confidential = true;
          writer_kitty_canvasWidth_63.confidential = true;
          lineNumber = 67;
          moduleName = "kitty";
          lineNumber = 66
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'canvasWidth' to be of type Unknown"))
          obj60.mutable = true;
          sourceObject = obj60;
          lineNumber = 67
          obj60.data["canvasHeight"] = var_y;
          var reader_kitty_canvasHeight_64 = function() {
            return this.data["canvasHeight"];
          }
          obj60.methods["canvasHeight"] = reader_kitty_canvasHeight_64;
          obj60.data["canvasHeight"] = var_y;
          var writer_kitty_canvasHeight_64 = function(argcv, o) {
            this.data["canvasHeight"] = o;
          }
          obj60.methods["canvasHeight:="] = writer_kitty_canvasHeight_64;
          reader_kitty_canvasHeight_64.confidential = true;
          writer_kitty_canvasHeight_64.confidential = true;
          lineNumber = 74;
          moduleName = "kitty";
          lineNumber = 67
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'canvasHeight' to be of type Unknown"))
          obj60.mutable = true;
          superDepth = origSuperDepth;
        }
        obj_init_60.apply(inheritingObject, []);
        return obj60
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj51.methods["new()object"] = func59;
    var func65 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "kitty";
      try {
        lineNumber = 63
        var string66 = new GraceString("class World");
        return string66
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func65.paramCounts = [
    ];
    func65.variableArities = [
    ];
    obj51.methods["asDebugString"] = func65;
    func65.definitionLine = 63;
    func65.definitionModule = "kitty";
    sourceObject = obj51;
    sourceObject = obj51;
    superDepth = origSuperDepth;
  }
  obj_init_51.apply(obj51, []);
  var var_World = obj51;
  return this;
}
gracecode_kitty.imports = [
];
if (gctCache)
  gctCache['kitty'] = "modules:\nfresh-methods:\nconstructors-of:World:\n new\npublic:\n world\n world:=\n start\n stop\n setWorld\n Entity\n World\nmethods-of:Entity.new:\n getY\n getRotation\n posX:=\n posY:=\n update\n onDestroy\n setLocation\n rotation:=\n awake\n posX\n posY\n start\n rotation\n getX\nconfidential:\npath:\n kitty\nclasses:\n Entity\n World\nmethods-of:World.new:\n canvas\n canvas:=\n canvasHeight:=\n canvasHeight\n canvasWidth\n canvasWidth:=\nconstructors-of:Entity:\n new\n";
if (originalSourceLines) {
  originalSourceLines["kitty"] = [
    "// Main class for game library",
    "var world",
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
    "    world := world'",
    "}",
    "",
    "class Entity.new(x, y) {",
    "    ",
    "    // inherits image",
    "    awake",
    "",
    "    var posX := x",
    "    var posY := y",
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
    "class World.new(x, y) {",
    "",
    "    var canvas",
    "    var canvasWidth := x",
    "    var canvasHeight := y ",
    "",
    "    // var entities := List",
    "",
    "    // method addEntity(e: Entity) {",
    "    //     return entities.add(e)",
    "    // }",
    "}",
    "",
    "// TEST SECTION //",
    "",
    "// def foo = World.new(100, 100)",
    "// def bar = Entity.new(10, 10)",
    "// foo.addEntity(bar)",
  ];
}
