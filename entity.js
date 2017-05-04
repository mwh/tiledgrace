function gracecode_$DOT$$library$entity () {
  this.definitionModule = "./library/entity";
  this.definitionLine = 0;
  lineNumber = 3
  var func0 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func0.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Entity)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "./library/entity";
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
  func0.paramCounts = [
    0,
  ];
  func0.variableArities = [
    false,
  ];
  this.methods["Entity"] = func0;
  func0.definitionLine = 3;
  func0.definitionModule = "./library/entity";
  var obj1 = Grace_allocObject();
  obj1.definitionModule = "./library/entity";
  obj1.definitionLine = 3;
  obj1.outer = this;
  var reader_./library/entity_outer_2 = function() {
    return this.outer;
  }
  obj1.methods["outer"] = reader_./library/entity_outer_2;
  function obj_init_1() {
    var origSuperDepth = superDepth;
    superDepth = obj1;
    obj1.annotations = [];
    var func3 = function(argcv) {
      var curarg = 1;
      var var_x = arguments[curarg];
      curarg++;
      var var_y = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func3.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "./library/entity";
      try {
        var obj4 = Grace_allocObject();
        obj4.definitionModule = "./library/entity";
        obj4.definitionLine = 3;
        obj4.outer = this;
        var reader_./library/entity_outer_5 = function() {
          return this.outer;
        }
        obj4.methods["outer"] = reader_./library/entity_outer_5;
        function obj_init_4() {
          var origSuperDepth = superDepth;
          superDepth = obj4;
          obj4.annotations = [];
          var func6 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func6.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "./library/entity";
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
          func6.paramCounts = [
            0,
          ];
          func6.variableArities = [
            false,
          ];
          obj4.methods["update"] = func6;
          func6.definitionLine = 11;
          func6.definitionModule = "./library/entity";
          var func7 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func7.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "./library/entity";
            try {
              lineNumber = 17
              lineNumber = 3
              lineNumber = 16
              onSelf = true;
              var call8 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 18
              lineNumber = 3
              lineNumber = 17
              onSelf = true;
              var call9 = callmethod(this, "posY:=", [1], var_y);
              return call9
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
          obj4.methods["setLocation"] = func7;
          func7.definitionLine = 15;
          func7.definitionModule = "./library/entity";
          var func10 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func10.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "./library/entity";
            try {
              lineNumber = 22
              lineNumber = 21
              onSelf = true;
              var call11 = callmethod(this, "posX", [0]);
              return call11
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func10.paramCounts = [
            0,
          ];
          func10.variableArities = [
            false,
          ];
          obj4.methods["getX"] = func10;
          func10.definitionLine = 20;
          func10.definitionModule = "./library/entity";
          var func12 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func12.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "./library/entity";
            try {
              lineNumber = 26
              lineNumber = 25
              onSelf = true;
              var call13 = callmethod(this, "posY", [0]);
              return call13
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
          obj4.methods["getY"] = func12;
          func12.definitionLine = 24;
          func12.definitionModule = "./library/entity";
          var func14 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func14.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "./library/entity";
            try {
              lineNumber = 30
              lineNumber = 29
              onSelf = true;
              var call15 = callmethod(this, "rotation", [0]);
              return call15
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
          obj4.methods["getRotation"] = func14;
          func14.definitionLine = 28;
          func14.definitionModule = "./library/entity";
          sourceObject = obj4;
          lineNumber = 7
          obj4.data["posX"] = var_x;
          var reader_./library/entity_posX_16 = function() {
            return this.data["posX"];
          }
          obj4.methods["posX"] = reader_./library/entity_posX_16;
          obj4.data["posX"] = var_x;
          var writer_./library/entity_posX_16 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj4.methods["posX:="] = writer_./library/entity_posX_16;
          reader_./library/entity_posX_16.confidential = true;
          writer_./library/entity_posX_16.confidential = true;
          lineNumber = 8;
          moduleName = "./library/entity";
          lineNumber = 7
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj4.mutable = true;
          sourceObject = obj4;
          lineNumber = 8
          obj4.data["posY"] = var_y;
          var reader_./library/entity_posY_17 = function() {
            return this.data["posY"];
          }
          obj4.methods["posY"] = reader_./library/entity_posY_17;
          obj4.data["posY"] = var_y;
          var writer_./library/entity_posY_17 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj4.methods["posY:="] = writer_./library/entity_posY_17;
          reader_./library/entity_posY_17.confidential = true;
          writer_./library/entity_posY_17.confidential = true;
          lineNumber = 9;
          moduleName = "./library/entity";
          lineNumber = 8
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj4.mutable = true;
          sourceObject = obj4;
          lineNumber = 9
          obj4.data["rotation"] = new GraceNum(0);
          var reader_./library/entity_rotation_18 = function() {
            return this.data["rotation"];
          }
          obj4.methods["rotation"] = reader_./library/entity_rotation_18;
          obj4.data["rotation"] = new GraceNum(0);
          var writer_./library/entity_rotation_18 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj4.methods["rotation:="] = writer_./library/entity_rotation_18;
          reader_./library/entity_rotation_18.confidential = true;
          writer_./library/entity_rotation_18.confidential = true;
          lineNumber = 11;
          moduleName = "./library/entity";
          lineNumber = 9
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj4.mutable = true;
          sourceObject = obj4;
          sourceObject = obj4;
          sourceObject = obj4;
          sourceObject = obj4;
          sourceObject = obj4;
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
    obj1.methods["new"] = func3;
    func3.definitionLine = 3;
    func3.definitionModule = "./library/entity";
    var func19 = function(argcv) {
      var curarg = 1;
      var var_x = arguments[curarg];
      curarg++;
      var var_y = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj20 = Grace_allocObject();
        obj20.definitionModule = "./library/entity";
        obj20.definitionLine = 3;
        var inho20 = inheritingObject;
        while (inho20.superobj) inho20 = inho20.superobj;
        inho20.superobj = obj20;
        obj20.data = inheritingObject.data;
        obj20.outer = this;
        var reader_./library/entity_outer_21 = function() {
          return this.outer;
        }
        obj20.methods["outer"] = reader_./library/entity_outer_21;
        function obj_init_20() {
          var origSuperDepth = superDepth;
          superDepth = obj20;
          obj20.annotations = [];
          var func22 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func22.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (update)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "./library/entity";
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
          func22.paramCounts = [
            0,
          ];
          func22.variableArities = [
            false,
          ];
          obj20.methods["update"] = func22;
          func22.definitionLine = 11;
          func22.definitionModule = "./library/entity";
          var func23 = function(argcv) {
            var curarg = 1;
            var var_x = arguments[curarg];
            curarg++;
            var var_y = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func23.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (setLocation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "./library/entity";
            try {
              lineNumber = 17
              lineNumber = 3
              lineNumber = 16
              onSelf = true;
              var call24 = callmethod(this, "posX:=", [1], var_x);
              lineNumber = 18
              lineNumber = 3
              lineNumber = 17
              onSelf = true;
              var call25 = callmethod(this, "posY:=", [1], var_y);
              return call25
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func23.paramCounts = [
            2,
          ];
          func23.variableArities = [
            false,
          ];
          obj20.methods["setLocation"] = func23;
          func23.definitionLine = 15;
          func23.definitionModule = "./library/entity";
          var func26 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func26.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getX)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "./library/entity";
            try {
              lineNumber = 22
              lineNumber = 21
              onSelf = true;
              var call27 = callmethod(this, "posX", [0]);
              return call27
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func26.paramCounts = [
            0,
          ];
          func26.variableArities = [
            false,
          ];
          obj20.methods["getX"] = func26;
          func26.definitionLine = 20;
          func26.definitionModule = "./library/entity";
          var func28 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func28.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getY)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "./library/entity";
            try {
              lineNumber = 26
              lineNumber = 25
              onSelf = true;
              var call29 = callmethod(this, "posY", [0]);
              return call29
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
          obj20.methods["getY"] = func28;
          func28.definitionLine = 24;
          func28.definitionModule = "./library/entity";
          var func30 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func30.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (getRotation)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "./library/entity";
            try {
              lineNumber = 30
              lineNumber = 29
              onSelf = true;
              var call31 = callmethod(this, "rotation", [0]);
              return call31
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
          obj20.methods["getRotation"] = func30;
          func30.definitionLine = 28;
          func30.definitionModule = "./library/entity";
          sourceObject = obj20;
          lineNumber = 7
          obj20.data["posX"] = var_x;
          var reader_./library/entity_posX_32 = function() {
            return this.data["posX"];
          }
          obj20.methods["posX"] = reader_./library/entity_posX_32;
          obj20.data["posX"] = var_x;
          var writer_./library/entity_posX_32 = function(argcv, o) {
            this.data["posX"] = o;
          }
          obj20.methods["posX:="] = writer_./library/entity_posX_32;
          reader_./library/entity_posX_32.confidential = true;
          writer_./library/entity_posX_32.confidential = true;
          lineNumber = 8;
          moduleName = "./library/entity";
          lineNumber = 7
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posX' to be of type Unknown"))
          obj20.mutable = true;
          sourceObject = obj20;
          lineNumber = 8
          obj20.data["posY"] = var_y;
          var reader_./library/entity_posY_33 = function() {
            return this.data["posY"];
          }
          obj20.methods["posY"] = reader_./library/entity_posY_33;
          obj20.data["posY"] = var_y;
          var writer_./library/entity_posY_33 = function(argcv, o) {
            this.data["posY"] = o;
          }
          obj20.methods["posY:="] = writer_./library/entity_posY_33;
          reader_./library/entity_posY_33.confidential = true;
          writer_./library/entity_posY_33.confidential = true;
          lineNumber = 9;
          moduleName = "./library/entity";
          lineNumber = 8
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'posY' to be of type Unknown"))
          obj20.mutable = true;
          sourceObject = obj20;
          lineNumber = 9
          obj20.data["rotation"] = new GraceNum(0);
          var reader_./library/entity_rotation_34 = function() {
            return this.data["rotation"];
          }
          obj20.methods["rotation"] = reader_./library/entity_rotation_34;
          obj20.data["rotation"] = new GraceNum(0);
          var writer_./library/entity_rotation_34 = function(argcv, o) {
            this.data["rotation"] = o;
          }
          obj20.methods["rotation:="] = writer_./library/entity_rotation_34;
          reader_./library/entity_rotation_34.confidential = true;
          writer_./library/entity_rotation_34.confidential = true;
          lineNumber = 11;
          moduleName = "./library/entity";
          lineNumber = 9
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(0))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'rotation' to be of type Unknown"))
          obj20.mutable = true;
          sourceObject = obj20;
          sourceObject = obj20;
          sourceObject = obj20;
          sourceObject = obj20;
          sourceObject = obj20;
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
    obj1.methods["new()object"] = func19;
    var func35 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "./library/entity";
      try {
        lineNumber = 3
        var string36 = new GraceString("class Entity");
        return string36
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func35.paramCounts = [
    ];
    func35.variableArities = [
    ];
    obj1.methods["asDebugString"] = func35;
    func35.definitionLine = 3;
    func35.definitionModule = "./library/entity";
    sourceObject = obj1;
    sourceObject = obj1;
    superDepth = origSuperDepth;
  }
  obj_init_1.apply(obj1, []);
  var var_Entity = obj1;
  return this;
}
gracecode_$DOT$$library$entity.imports = [
];
if (gctCache)
  gctCache['./library/entity'] = "constructors-of:Entity:\n new\nmethods-of:Entity.new:\n getX\n getY\n posX:=\n posY:=\n update\n setLocation\n rotation:=\n posX\n posY\n getRotation\n rotation\nmodules:\nfresh-methods:\npath:\n ./library/entity\nclasses:\n Entity\npublic:\n Entity\nconfidential:\n";
if (originalSourceLines) {
  originalSourceLines["./library/entity"] = [
    "// dialect \"sniff\"",
    "",
    "class Entity.new(x, y) {",
    "    ",
    "    // inherits image",
    "",
    "    var posX := x",
    "    var posY := y",
    "    var rotation := 0",
    "",
    "    method update {",
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
  ];
}
