function gracecode_$DOT$$library$world () {
  this.definitionModule = "./library/world";
  this.definitionLine = 0;
  lineNumber = 1
  // Import of entity
  if (typeof gracecode_entity == 'undefined')
    throw new GraceExceptionPacket(RuntimeErrorObject, 
      new GraceString('could not find module en'));
  var var_en = do_import("entity", gracecode_entity);
  lineNumber = 3
  var func0 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func0.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (World)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "./library/world";
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
  func0.paramCounts = [
    0,
  ];
  func0.variableArities = [
    false,
  ];
  this.methods["World"] = func0;
  func0.definitionLine = 3;
  func0.definitionModule = "./library/world";
  var obj1 = Grace_allocObject();
  obj1.definitionModule = "./library/world";
  obj1.definitionLine = 3;
  obj1.outer = this;
  var reader_./library/world_outer_2 = function() {
    return this.outer;
  }
  obj1.methods["outer"] = reader_./library/world_outer_2;
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
      moduleName = "./library/world";
      try {
        var obj4 = Grace_allocObject();
        obj4.definitionModule = "./library/world";
        obj4.definitionLine = 3;
        obj4.outer = this;
        var reader_./library/world_outer_5 = function() {
          return this.outer;
        }
        obj4.methods["outer"] = reader_./library/world_outer_5;
        function obj_init_4() {
          var origSuperDepth = superDepth;
          superDepth = obj4;
          obj4.annotations = [];
          var func6 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func6.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "./library/world";
            try {
              lineNumber = 11
              onSelf = true;
              var call7 = callmethod(this, "entities", [0]);
              var call8 = callmethod(call7,"add", [1], var_e);
              return call8
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
          obj4.methods["addEntity"] = func6;
          func6.definitionLine = 10;
          func6.definitionModule = "./library/world";
          sourceObject = obj4;
          lineNumber = 5
          obj4.data["sizeX"] = var_x;
          var reader_./library/world_sizeX_9 = function() {
            return this.data["sizeX"];
          }
          obj4.methods["sizeX"] = reader_./library/world_sizeX_9;
          obj4.data["sizeX"] = var_x;
          var writer_./library/world_sizeX_9 = function(argcv, o) {
            this.data["sizeX"] = o;
          }
          obj4.methods["sizeX:="] = writer_./library/world_sizeX_9;
          reader_./library/world_sizeX_9.confidential = true;
          writer_./library/world_sizeX_9.confidential = true;
          lineNumber = 6;
          moduleName = "./library/world";
          lineNumber = 5
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'sizeX' to be of type Unknown"))
          obj4.mutable = true;
          sourceObject = obj4;
          lineNumber = 6
          obj4.data["sizeY"] = var_y;
          var reader_./library/world_sizeY_10 = function() {
            return this.data["sizeY"];
          }
          obj4.methods["sizeY"] = reader_./library/world_sizeY_10;
          obj4.data["sizeY"] = var_y;
          var writer_./library/world_sizeY_10 = function(argcv, o) {
            this.data["sizeY"] = o;
          }
          obj4.methods["sizeY:="] = writer_./library/world_sizeY_10;
          reader_./library/world_sizeY_10.confidential = true;
          writer_./library/world_sizeY_10.confidential = true;
          lineNumber = 8;
          moduleName = "./library/world";
          lineNumber = 6
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'sizeY' to be of type Unknown"))
          obj4.mutable = true;
          sourceObject = obj4;
          lineNumber = 8
          obj4.data["entities"] = var_List;
          var reader_./library/world_entities_11 = function() {
            return this.data["entities"];
          }
          obj4.methods["entities"] = reader_./library/world_entities_11;
          obj4.data["entities"] = var_List;
          var writer_./library/world_entities_11 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj4.methods["entities:="] = writer_./library/world_entities_11;
          reader_./library/world_entities_11.confidential = true;
          writer_./library/world_entities_11.confidential = true;
          lineNumber = 10;
          moduleName = "./library/world";
          lineNumber = 8
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_List)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj4.mutable = true;
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
    func3.definitionModule = "./library/world";
    var func12 = function(argcv) {
      var curarg = 1;
      var var_x = arguments[curarg];
      curarg++;
      var var_y = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj13 = Grace_allocObject();
        obj13.definitionModule = "./library/world";
        obj13.definitionLine = 3;
        var inho13 = inheritingObject;
        while (inho13.superobj) inho13 = inho13.superobj;
        inho13.superobj = obj13;
        obj13.data = inheritingObject.data;
        obj13.outer = this;
        var reader_./library/world_outer_14 = function() {
          return this.outer;
        }
        obj13.methods["outer"] = reader_./library/world_outer_14;
        function obj_init_13() {
          var origSuperDepth = superDepth;
          superDepth = obj13;
          obj13.annotations = [];
          var func15 = function(argcv) {
            var curarg = 1;
            var var_e = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func15.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (addEntity)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "./library/world";
            try {
              lineNumber = 11
              onSelf = true;
              var call16 = callmethod(this, "entities", [0]);
              var call17 = callmethod(call16,"add", [1], var_e);
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
            1,
          ];
          func15.variableArities = [
            false,
          ];
          obj13.methods["addEntity"] = func15;
          func15.definitionLine = 10;
          func15.definitionModule = "./library/world";
          sourceObject = obj13;
          lineNumber = 5
          obj13.data["sizeX"] = var_x;
          var reader_./library/world_sizeX_18 = function() {
            return this.data["sizeX"];
          }
          obj13.methods["sizeX"] = reader_./library/world_sizeX_18;
          obj13.data["sizeX"] = var_x;
          var writer_./library/world_sizeX_18 = function(argcv, o) {
            this.data["sizeX"] = o;
          }
          obj13.methods["sizeX:="] = writer_./library/world_sizeX_18;
          reader_./library/world_sizeX_18.confidential = true;
          writer_./library/world_sizeX_18.confidential = true;
          lineNumber = 6;
          moduleName = "./library/world";
          lineNumber = 5
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'sizeX' to be of type Unknown"))
          obj13.mutable = true;
          sourceObject = obj13;
          lineNumber = 6
          obj13.data["sizeY"] = var_y;
          var reader_./library/world_sizeY_19 = function() {
            return this.data["sizeY"];
          }
          obj13.methods["sizeY"] = reader_./library/world_sizeY_19;
          obj13.data["sizeY"] = var_y;
          var writer_./library/world_sizeY_19 = function(argcv, o) {
            this.data["sizeY"] = o;
          }
          obj13.methods["sizeY:="] = writer_./library/world_sizeY_19;
          reader_./library/world_sizeY_19.confidential = true;
          writer_./library/world_sizeY_19.confidential = true;
          lineNumber = 8;
          moduleName = "./library/world";
          lineNumber = 6
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'sizeY' to be of type Unknown"))
          obj13.mutable = true;
          sourceObject = obj13;
          lineNumber = 8
          obj13.data["entities"] = var_List;
          var reader_./library/world_entities_20 = function() {
            return this.data["entities"];
          }
          obj13.methods["entities"] = reader_./library/world_entities_20;
          obj13.data["entities"] = var_List;
          var writer_./library/world_entities_20 = function(argcv, o) {
            this.data["entities"] = o;
          }
          obj13.methods["entities:="] = writer_./library/world_entities_20;
          reader_./library/world_entities_20.confidential = true;
          writer_./library/world_entities_20.confidential = true;
          lineNumber = 10;
          moduleName = "./library/world";
          lineNumber = 8
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_List)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'entities' to be of type Unknown"))
          obj13.mutable = true;
          sourceObject = obj13;
          superDepth = origSuperDepth;
        }
        obj_init_13.apply(inheritingObject, []);
        return obj13
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj1.methods["new()object"] = func12;
    var func21 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "./library/world";
      try {
        lineNumber = 3
        var string22 = new GraceString("class World");
        return string22
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func21.paramCounts = [
    ];
    func21.variableArities = [
    ];
    obj1.methods["asDebugString"] = func21;
    func21.definitionLine = 3;
    func21.definitionModule = "./library/world";
    sourceObject = obj1;
    sourceObject = obj1;
    superDepth = origSuperDepth;
  }
  obj_init_1.apply(obj1, []);
  var var_World = obj1;
  return this;
}
gracecode_$DOT$$library$world.imports = [
'entity',
];
if (gctCache)
  gctCache['./library/world'] = "constructors-of:World:\n new\nclasses:\n World\npublic:\n World\nconfidential:\npath:\n ./library/world\nfresh-methods:\nmethods-of:World.new:\n sizeX:=\n sizeY:=\n entities:=\n sizeX\n sizeY\n entities\n addEntity\nmodules:\n";
if (originalSourceLines) {
  originalSourceLines["./library/world"] = [
    "import \"entity\" as en",
    "",
    "class World.new(x, y) {",
    "",
    "    var sizeX := x",
    "    var sizeY := y ",
    "",
    "    var entities := List",
    "",
    "    method addEntity(e: en.Entity) {",
    "        return entities.add(e)",
    "    }",
    "",
    "}",
  ];
}
