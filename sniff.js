function gracecode_sniff () {
  this.definitionModule = "sniff";
  this.definitionLine = 0;
  lineNumber = 182
  var func0 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func0.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (rectangle)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      lineNumber = 183
      var obj1 = Grace_allocObject();
      obj1.definitionModule = "sniff";
      obj1.definitionLine = 183;
      obj1.outer = this;
      var reader_sniff_outer_2 = function() {
        return this.outer;
      }
      obj1.methods["outer"] = reader_sniff_outer_2;
      function obj_init_1() {
        var origSuperDepth = superDepth;
        superDepth = obj1;
        obj1.annotations = [];
        var func3 = function(argcv) {
          var curarg = 1;
          var var_ctx = arguments[curarg];
          curarg++;
          if (argcv[0] !=  func3.paramCounts[0])
            callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
          var returnTarget = invocationCount;
          invocationCount++;
          moduleName = "sniff";
          try {
            lineNumber = 190
            lineNumber = 1
            lineNumber = 189
            onSelf = true;
            var call4 = callmethod(this, "colour", [0]);
            var call5 = callmethod(var_ctx,"fillStyle:=", [1], call4);
            lineNumber = 190
            onSelf = true;
            var call7 = callmethod(this, "width", [0]);
            var quotient9 = callmethod(call7, "/", [1], new GraceNum(2));
            onSelf = true;
            var call11 = callmethod(this, "x", [0]);
            var diff13 = callmethod(call11, "-", [1], quotient9);
            onSelf = true;
            var call15 = callmethod(this, "height", [0]);
            var quotient17 = callmethod(call15, "/", [1], new GraceNum(2));
            onSelf = true;
            var call19 = callmethod(this, "y", [0]);
            var diff21 = callmethod(call19, "-", [1], quotient17);
            onSelf = true;
            var call22 = callmethod(this, "width", [0]);
            onSelf = true;
            var call23 = callmethod(this, "height", [0]);
            var call24 = callmethod(var_ctx,"fillRect", [4], diff13, diff21, call22, call23);
            return call24
          } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
              return e.returnvalue;
            } else {
              throw e;
            }
          }
        }
        func3.paramCounts = [
          1,
        ];
        func3.variableArities = [
          false,
        ];
        obj1.methods["draw"] = func3;
        func3.definitionLine = 188;
        func3.definitionModule = "sniff";
        var func25 = function(argcv) {
          var curarg = 1;
          var var_p = arguments[curarg];
          curarg++;
          if (argcv[0] !=  func25.paramCounts[0])
            callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isPointOver)"));
          var returnTarget = invocationCount;
          invocationCount++;
          moduleName = "sniff";
          try {
            lineNumber = 196
            var if26 = var_done;
            lineNumber = 193
            onSelf = true;
            var call28 = callmethod(this, "width", [0]);
            var quotient30 = callmethod(call28, "/", [1], new GraceNum(2));
            onSelf = true;
            var call32 = callmethod(this, "x", [0]);
            var diff34 = callmethod(call32, "-", [1], quotient30);
            var call36 = callmethod(var_p,"x", [0]);
            var opresult38 = callmethod(call36, "<", [1], diff34);
            if (Grace_isTrue(opresult38)) {
              lineNumber = 195
              lineNumber = 194
              var bool39 = new GraceBoolean(false)
              return bool39
              if26 = undefined;
            }
            lineNumber = 199
            var if40 = var_done;
            lineNumber = 196
            onSelf = true;
            var call42 = callmethod(this, "width", [0]);
            var quotient44 = callmethod(call42, "/", [1], new GraceNum(2));
            onSelf = true;
            var call46 = callmethod(this, "x", [0]);
            var opresult48 = callmethod(call46, "+", [1], quotient44);
            var call50 = callmethod(var_p,"x", [0]);
            var opresult52 = callmethod(call50, ">", [1], opresult48);
            if (Grace_isTrue(opresult52)) {
              lineNumber = 198
              lineNumber = 197
              var bool53 = new GraceBoolean(false)
              return bool53
              if40 = undefined;
            }
            lineNumber = 202
            var if54 = var_done;
            lineNumber = 199
            onSelf = true;
            var call56 = callmethod(this, "height", [0]);
            var quotient58 = callmethod(call56, "/", [1], new GraceNum(2));
            onSelf = true;
            var call60 = callmethod(this, "y", [0]);
            var diff62 = callmethod(call60, "-", [1], quotient58);
            var call64 = callmethod(var_p,"y", [0]);
            var opresult66 = callmethod(call64, "<", [1], diff62);
            if (Grace_isTrue(opresult66)) {
              lineNumber = 201
              lineNumber = 200
              var bool67 = new GraceBoolean(false)
              return bool67
              if54 = undefined;
            }
            lineNumber = 205
            var if68 = var_done;
            lineNumber = 202
            onSelf = true;
            var call70 = callmethod(this, "height", [0]);
            var quotient72 = callmethod(call70, "/", [1], new GraceNum(2));
            onSelf = true;
            var call74 = callmethod(this, "y", [0]);
            var opresult76 = callmethod(call74, "+", [1], quotient72);
            var call78 = callmethod(var_p,"y", [0]);
            var opresult80 = callmethod(call78, ">", [1], opresult76);
            if (Grace_isTrue(opresult80)) {
              lineNumber = 204
              lineNumber = 203
              var bool81 = new GraceBoolean(false)
              return bool81
              if68 = undefined;
            }
            lineNumber = 206
            lineNumber = 205
            var bool82 = new GraceBoolean(true)
            return bool82
            return undefined
          } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
              return e.returnvalue;
            } else {
              throw e;
            }
          }
        }
        func25.paramCounts = [
          1,
        ];
        func25.variableArities = [
          false,
        ];
        obj1.methods["isPointOver"] = func25;
        func25.definitionLine = 192;
        func25.definitionModule = "sniff";
        var func83 = function(argcv) {
          var curarg = 1;
          if (argcv[0] !=  func83.paramCounts[0])
            callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (asString)"));
          var returnTarget = invocationCount;
          invocationCount++;
          moduleName = "sniff";
          try {
            lineNumber = 209
            lineNumber = 208
            var string84 = new GraceString("rectangle");
            return string84
            return undefined
          } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
              return e.returnvalue;
            } else {
              throw e;
            }
          }
        }
        func83.paramCounts = [
          0,
        ];
        func83.variableArities = [
          false,
        ];
        obj1.methods["asString"] = func83;
        func83.definitionLine = 207;
        func83.definitionModule = "sniff";
        sourceObject = obj1;
        lineNumber = 184
        var call85 = callmethod(var_drawable,"new()object", [0, 1], this);
        obj1.superobj = call85;
        obj1._value = call85._value;
        sourceObject = obj1;
        lineNumber = 185
        obj1.data["width"] = new GraceNum(100);
        var reader_sniff_width_86 = function() {
          return this.data["width"];
        }
        obj1.methods["width"] = reader_sniff_width_86;
        obj1.data["width"] = new GraceNum(100);
        var writer_sniff_width_86 = function(argcv, o) {
          this.data["width"] = o;
        }
        obj1.methods["width:="] = writer_sniff_width_86;
        reader_sniff_width_86.confidential = true;
        writer_sniff_width_86.confidential = true;
        lineNumber = 186;
        moduleName = "sniff";
        lineNumber = 185
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], new GraceNum(100))))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'width' to be of type Unknown"))
        obj1.mutable = true;
        sourceObject = obj1;
        lineNumber = 186
        obj1.data["height"] = new GraceNum(50);
        var reader_sniff_height_87 = function() {
          return this.data["height"];
        }
        obj1.methods["height"] = reader_sniff_height_87;
        obj1.data["height"] = new GraceNum(50);
        var writer_sniff_height_87 = function(argcv, o) {
          this.data["height"] = o;
        }
        obj1.methods["height:="] = writer_sniff_height_87;
        reader_sniff_height_87.confidential = true;
        writer_sniff_height_87.confidential = true;
        lineNumber = 187;
        moduleName = "sniff";
        lineNumber = 186
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], new GraceNum(50))))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'height' to be of type Unknown"))
        obj1.mutable = true;
        sourceObject = obj1;
        lineNumber = 187
        var string88 = new GraceString("blue");
        obj1.data["colour"] = string88;
        var reader_sniff_colour_89 = function() {
          return this.data["colour"];
        }
        obj1.methods["colour"] = reader_sniff_colour_89;
        obj1.data["colour"] = string88;
        var writer_sniff_colour_89 = function(argcv, o) {
          this.data["colour"] = o;
        }
        obj1.methods["colour:="] = writer_sniff_colour_89;
        reader_sniff_colour_89.confidential = true;
        writer_sniff_colour_89.confidential = true;
        lineNumber = 188;
        moduleName = "sniff";
        lineNumber = 187
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], string88)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'colour' to be of type Unknown"))
        obj1.mutable = true;
        sourceObject = obj1;
        sourceObject = obj1;
        sourceObject = obj1;
        superDepth = origSuperDepth;
      }
      obj_init_1.apply(obj1, []);
      return obj1
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
  this.methods["rectangle"] = func0;
  func0.definitionLine = 182;
  func0.definitionModule = "sniff";
  var func90 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj91 = Grace_allocObject();
      obj91.definitionModule = "sniff";
      obj91.definitionLine = 183;
      var inho91 = inheritingObject;
      while (inho91.superobj) inho91 = inho91.superobj;
      inho91.superobj = obj91;
      obj91.data = inheritingObject.data;
      obj91.outer = this;
      var reader_sniff_outer_92 = function() {
        return this.outer;
      }
      obj91.methods["outer"] = reader_sniff_outer_92;
      function obj_init_91() {
        var origSuperDepth = superDepth;
        superDepth = obj91;
        obj91.annotations = [];
        var func93 = function(argcv) {
          var curarg = 1;
          var var_ctx = arguments[curarg];
          curarg++;
          if (argcv[0] !=  func93.paramCounts[0])
            callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
          var returnTarget = invocationCount;
          invocationCount++;
          moduleName = "sniff";
          try {
            lineNumber = 190
            lineNumber = 202
            lineNumber = 189
            onSelf = true;
            var call94 = callmethod(this, "colour", [0]);
            var call95 = callmethod(var_ctx,"fillStyle:=", [1], call94);
            lineNumber = 190
            onSelf = true;
            var call97 = callmethod(this, "width", [0]);
            var quotient99 = callmethod(call97, "/", [1], new GraceNum(2));
            onSelf = true;
            var call101 = callmethod(this, "x", [0]);
            var diff103 = callmethod(call101, "-", [1], quotient99);
            onSelf = true;
            var call105 = callmethod(this, "height", [0]);
            var quotient107 = callmethod(call105, "/", [1], new GraceNum(2));
            onSelf = true;
            var call109 = callmethod(this, "y", [0]);
            var diff111 = callmethod(call109, "-", [1], quotient107);
            onSelf = true;
            var call112 = callmethod(this, "width", [0]);
            onSelf = true;
            var call113 = callmethod(this, "height", [0]);
            var call114 = callmethod(var_ctx,"fillRect", [4], diff103, diff111, call112, call113);
            return call114
          } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
              return e.returnvalue;
            } else {
              throw e;
            }
          }
        }
        func93.paramCounts = [
          1,
        ];
        func93.variableArities = [
          false,
        ];
        obj91.methods["draw"] = func93;
        func93.definitionLine = 188;
        func93.definitionModule = "sniff";
        var func115 = function(argcv) {
          var curarg = 1;
          var var_p = arguments[curarg];
          curarg++;
          if (argcv[0] !=  func115.paramCounts[0])
            callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isPointOver)"));
          var returnTarget = invocationCount;
          invocationCount++;
          moduleName = "sniff";
          try {
            lineNumber = 196
            var if116 = var_done;
            lineNumber = 193
            onSelf = true;
            var call118 = callmethod(this, "width", [0]);
            var quotient120 = callmethod(call118, "/", [1], new GraceNum(2));
            onSelf = true;
            var call122 = callmethod(this, "x", [0]);
            var diff124 = callmethod(call122, "-", [1], quotient120);
            var call126 = callmethod(var_p,"x", [0]);
            var opresult128 = callmethod(call126, "<", [1], diff124);
            if (Grace_isTrue(opresult128)) {
              lineNumber = 195
              lineNumber = 194
              var bool129 = new GraceBoolean(false)
              return bool129
              if116 = undefined;
            }
            lineNumber = 199
            var if130 = var_done;
            lineNumber = 196
            onSelf = true;
            var call132 = callmethod(this, "width", [0]);
            var quotient134 = callmethod(call132, "/", [1], new GraceNum(2));
            onSelf = true;
            var call136 = callmethod(this, "x", [0]);
            var opresult138 = callmethod(call136, "+", [1], quotient134);
            var call140 = callmethod(var_p,"x", [0]);
            var opresult142 = callmethod(call140, ">", [1], opresult138);
            if (Grace_isTrue(opresult142)) {
              lineNumber = 198
              lineNumber = 197
              var bool143 = new GraceBoolean(false)
              return bool143
              if130 = undefined;
            }
            lineNumber = 202
            var if144 = var_done;
            lineNumber = 199
            onSelf = true;
            var call146 = callmethod(this, "height", [0]);
            var quotient148 = callmethod(call146, "/", [1], new GraceNum(2));
            onSelf = true;
            var call150 = callmethod(this, "y", [0]);
            var diff152 = callmethod(call150, "-", [1], quotient148);
            var call154 = callmethod(var_p,"y", [0]);
            var opresult156 = callmethod(call154, "<", [1], diff152);
            if (Grace_isTrue(opresult156)) {
              lineNumber = 201
              lineNumber = 200
              var bool157 = new GraceBoolean(false)
              return bool157
              if144 = undefined;
            }
            lineNumber = 205
            var if158 = var_done;
            lineNumber = 202
            onSelf = true;
            var call160 = callmethod(this, "height", [0]);
            var quotient162 = callmethod(call160, "/", [1], new GraceNum(2));
            onSelf = true;
            var call164 = callmethod(this, "y", [0]);
            var opresult166 = callmethod(call164, "+", [1], quotient162);
            var call168 = callmethod(var_p,"y", [0]);
            var opresult170 = callmethod(call168, ">", [1], opresult166);
            if (Grace_isTrue(opresult170)) {
              lineNumber = 204
              lineNumber = 203
              var bool171 = new GraceBoolean(false)
              return bool171
              if158 = undefined;
            }
            lineNumber = 206
            lineNumber = 205
            var bool172 = new GraceBoolean(true)
            return bool172
            return undefined
          } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
              return e.returnvalue;
            } else {
              throw e;
            }
          }
        }
        func115.paramCounts = [
          1,
        ];
        func115.variableArities = [
          false,
        ];
        obj91.methods["isPointOver"] = func115;
        func115.definitionLine = 192;
        func115.definitionModule = "sniff";
        var func173 = function(argcv) {
          var curarg = 1;
          if (argcv[0] !=  func173.paramCounts[0])
            callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (asString)"));
          var returnTarget = invocationCount;
          invocationCount++;
          moduleName = "sniff";
          try {
            lineNumber = 209
            lineNumber = 208
            var string174 = new GraceString("rectangle");
            return string174
            return undefined
          } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
              return e.returnvalue;
            } else {
              throw e;
            }
          }
        }
        func173.paramCounts = [
          0,
        ];
        func173.variableArities = [
          false,
        ];
        obj91.methods["asString"] = func173;
        func173.definitionLine = 207;
        func173.definitionModule = "sniff";
        sourceObject = obj91;
        lineNumber = 184
        var call175 = callmethod(var_drawable,"new()object", [0, 1], this);
        obj91.superobj = call175;
        obj91._value = call175._value;
        sourceObject = obj91;
        lineNumber = 185
        obj91.data["width"] = new GraceNum(100);
        var reader_sniff_width_176 = function() {
          return this.data["width"];
        }
        obj91.methods["width"] = reader_sniff_width_176;
        obj91.data["width"] = new GraceNum(100);
        var writer_sniff_width_176 = function(argcv, o) {
          this.data["width"] = o;
        }
        obj91.methods["width:="] = writer_sniff_width_176;
        reader_sniff_width_176.confidential = true;
        writer_sniff_width_176.confidential = true;
        lineNumber = 186;
        moduleName = "sniff";
        lineNumber = 185
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], new GraceNum(100))))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'width' to be of type Unknown"))
        obj91.mutable = true;
        sourceObject = obj91;
        lineNumber = 186
        obj91.data["height"] = new GraceNum(50);
        var reader_sniff_height_177 = function() {
          return this.data["height"];
        }
        obj91.methods["height"] = reader_sniff_height_177;
        obj91.data["height"] = new GraceNum(50);
        var writer_sniff_height_177 = function(argcv, o) {
          this.data["height"] = o;
        }
        obj91.methods["height:="] = writer_sniff_height_177;
        reader_sniff_height_177.confidential = true;
        writer_sniff_height_177.confidential = true;
        lineNumber = 187;
        moduleName = "sniff";
        lineNumber = 186
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], new GraceNum(50))))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'height' to be of type Unknown"))
        obj91.mutable = true;
        sourceObject = obj91;
        lineNumber = 187
        var string178 = new GraceString("blue");
        obj91.data["colour"] = string178;
        var reader_sniff_colour_179 = function() {
          return this.data["colour"];
        }
        obj91.methods["colour"] = reader_sniff_colour_179;
        obj91.data["colour"] = string178;
        var writer_sniff_colour_179 = function(argcv, o) {
          this.data["colour"] = o;
        }
        obj91.methods["colour:="] = writer_sniff_colour_179;
        reader_sniff_colour_179.confidential = true;
        writer_sniff_colour_179.confidential = true;
        lineNumber = 188;
        moduleName = "sniff";
        lineNumber = 187
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], string178)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'colour' to be of type Unknown"))
        obj91.mutable = true;
        sourceObject = obj91;
        sourceObject = obj91;
        sourceObject = obj91;
        superDepth = origSuperDepth;
      }
      obj_init_91.apply(inheritingObject, []);
      return obj91
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  this.methods["rectangle()object"] = func90;
  lineNumber = 219
  var type180 = new GraceType("SniffCircle");
  var var_SniffCircle = type180;
  type180.typeMethods.push("x");
  type180.typeMethods.push("y");
  type180.typeMethods.push("radius");
  type180.typeMethods.push("colour");
  lineNumber = 202
  var func181 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func181.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (SniffCircle)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      return var_SniffCircle
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func181.paramCounts = [
    0,
  ];
  func181.variableArities = [
    false,
  ];
  this.methods["SniffCircle"] = func181;
  func181.definitionLine = 202;
  func181.definitionModule = "sniff";
  var type_SniffCircle = var_SniffCircle;
  lineNumber = 219
  var func182 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func182.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (circle)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      lineNumber = 220
      var obj183 = Grace_allocObject();
      obj183.definitionModule = "sniff";
      obj183.definitionLine = 220;
      obj183.outer = this;
      var reader_sniff_outer_184 = function() {
        return this.outer;
      }
      obj183.methods["outer"] = reader_sniff_outer_184;
      function obj_init_183() {
        var origSuperDepth = superDepth;
        superDepth = obj183;
        obj183.annotations = [];
        var func185 = function(argcv) {
          var curarg = 1;
          var var_ctx = arguments[curarg];
          curarg++;
          if (argcv[0] !=  func185.paramCounts[0])
            callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
          var returnTarget = invocationCount;
          invocationCount++;
          moduleName = "sniff";
          try {
            lineNumber = 226
            lineNumber = 202
            lineNumber = 225
            onSelf = true;
            var call186 = callmethod(this, "colour", [0]);
            var call187 = callmethod(var_ctx,"fillStyle:=", [1], call186);
            lineNumber = 226
            var call188 = callmethod(var_ctx,"beginPath", [0]);
            lineNumber = 227
            onSelf = true;
            var call189 = callmethod(this, "x", [0]);
            onSelf = true;
            var call190 = callmethod(this, "y", [0]);
            onSelf = true;
            var call191 = callmethod(this, "radius", [0]);
            var call192 = callmethod(var_ctx,"arc", [5], call189, call190, call191, new GraceNum(0), new GraceNum(6.283));
            lineNumber = 228
            var call193 = callmethod(var_ctx,"fill", [0]);
            return call193
          } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
              return e.returnvalue;
            } else {
              throw e;
            }
          }
        }
        func185.paramCounts = [
          1,
        ];
        func185.variableArities = [
          false,
        ];
        obj183.methods["draw"] = func185;
        func185.definitionLine = 224;
        func185.definitionModule = "sniff";
        var func194 = function(argcv) {
          var curarg = 1;
          var var_p = arguments[curarg];
          curarg++;
          if (argcv[0] !=  func194.paramCounts[0])
            callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isPointOver)"));
          var returnTarget = invocationCount;
          invocationCount++;
          moduleName = "sniff";
          try {
            lineNumber = 232
            lineNumber = 231
            onSelf = true;
            var call195 = callmethod(this, "x", [0]);
            var call197 = callmethod(var_p,"x", [0]);
            var diff199 = callmethod(call197, "-", [1], call195);
            var var_dx = diff199;
            lineNumber = 232;
            moduleName = "sniff";
            lineNumber = 231
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_dx)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'dx' to be of type Unknown"))
            lineNumber = 233
            lineNumber = 232
            onSelf = true;
            var call200 = callmethod(this, "y", [0]);
            var call202 = callmethod(var_p,"y", [0]);
            var diff204 = callmethod(call202, "-", [1], call200);
            var var_dy = diff204;
            lineNumber = 233;
            moduleName = "sniff";
            lineNumber = 232
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_dy)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'dy' to be of type Unknown"))
            lineNumber = 234
            lineNumber = 233
            var prod208 = callmethod(var_dy, "*", [1], var_dy);
            var prod212 = callmethod(var_dx, "*", [1], var_dx);
            var opresult214 = callmethod(prod212, "+", [1], prod208);
            var opresult216 = callmethod(opresult214, "^", [1], new GraceNum(0.5));
            var var_dist = opresult216;
            lineNumber = 234;
            moduleName = "sniff";
            lineNumber = 233
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_dist)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'dist' to be of type Unknown"))
            lineNumber = 237
            var if217 = var_done;
            lineNumber = 234
            onSelf = true;
            var call218 = callmethod(this, "radius", [0]);
            var opresult221 = callmethod(var_dist, "<=", [1], call218);
            if (Grace_isTrue(opresult221)) {
              lineNumber = 236
              lineNumber = 235
              var bool222 = new GraceBoolean(true)
              return bool222
              if217 = undefined;
            }
            lineNumber = 238
            lineNumber = 237
            var bool223 = new GraceBoolean(false)
            return bool223
            return undefined
          } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
              return e.returnvalue;
            } else {
              throw e;
            }
          }
        }
        func194.paramCounts = [
          1,
        ];
        func194.variableArities = [
          false,
        ];
        obj183.methods["isPointOver"] = func194;
        func194.definitionLine = 230;
        func194.definitionModule = "sniff";
        var func224 = function(argcv) {
          var curarg = 1;
          var var_other = arguments[curarg];
          curarg++;
          if (argcv[0] !=  func224.paramCounts[0])
            callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touching)"));
          var returnTarget = invocationCount;
          invocationCount++;
          moduleName = "sniff";
          try {
            lineNumber = 250
            var if225 = var_done;
            lineNumber = 240
            var call226 = callmethod(var_SniffCircle,"match", [1], var_other);
            if (Grace_isTrue(call226)) {
              lineNumber = 242
              lineNumber = 241
              var call228 = callmethod(var_other,"y", [0]);
              onSelf = true;
              var call230 = callmethod(this, "y", [0]);
              var diff232 = callmethod(call230, "-", [1], call228);
              var opresult234 = callmethod(diff232, "^", [1], new GraceNum(2));
              var call237 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call239 = callmethod(this, "x", [0]);
              var diff241 = callmethod(call239, "-", [1], call237);
              var opresult243 = callmethod(diff241, "^", [1], new GraceNum(2));
              var opresult245 = callmethod(opresult243, "+", [1], opresult234);
              var var_n2 = opresult245;
              lineNumber = 242;
              moduleName = "sniff";
              lineNumber = 241
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_n2)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'n2' to be of type Unknown"))
              lineNumber = 245
              var if246 = var_done;
              lineNumber = 242
              var opresult249 = callmethod(var_n2, "==", [1], new GraceNum(0));
              if (Grace_isTrue(opresult249)) {
                lineNumber = 244
                lineNumber = 243
                var bool250 = new GraceBoolean(true)
                return bool250
                if246 = undefined;
              }
              lineNumber = 248
              var if251 = var_done;
              lineNumber = 245
              onSelf = true;
              var call252 = callmethod(this, "radius", [0]);
              var call254 = callmethod(var_other,"radius", [0]);
              var opresult256 = callmethod(call254, "+", [1], call252);
              var opresult260 = callmethod(var_n2, "^", [1], new GraceNum(0.5));
              var opresult262 = callmethod(opresult260, "<", [1], opresult256);
              if (Grace_isTrue(opresult262)) {
                lineNumber = 247
                lineNumber = 246
                var bool263 = new GraceBoolean(true)
                return bool263
                if251 = undefined;
              }
              lineNumber = 249
              lineNumber = 248
              var bool264 = new GraceBoolean(false)
              return bool264
              if225 = undefined;
            }
            lineNumber = 250
            var call265 = callmethodsuper(this, "touching", [1], var_other);
            return call265
          } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
              return e.returnvalue;
            } else {
              throw e;
            }
          }
        }
        func224.paramCounts = [
          1,
        ];
        func224.variableArities = [
          false,
        ];
        obj183.methods["touching"] = func224;
        func224.definitionLine = 239;
        func224.definitionModule = "sniff";
        sourceObject = obj183;
        lineNumber = 221
        var call266 = callmethod(var_drawable,"new()object", [0, 1], this);
        obj183.superobj = call266;
        obj183._value = call266._value;
        sourceObject = obj183;
        lineNumber = 222
        obj183.data["radius"] = new GraceNum(25);
        var reader_sniff_radius_267 = function() {
          return this.data["radius"];
        }
        obj183.methods["radius"] = reader_sniff_radius_267;
        obj183.data["radius"] = new GraceNum(25);
        var writer_sniff_radius_267 = function(argcv, o) {
          this.data["radius"] = o;
        }
        obj183.methods["radius:="] = writer_sniff_radius_267;
        writer_sniff_radius_267.confidential = true;
        lineNumber = 223;
        moduleName = "sniff";
        lineNumber = 222
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], new GraceNum(25))))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'radius' to be of type Unknown"))
        obj183.mutable = true;
        sourceObject = obj183;
        lineNumber = 223
        var string268 = new GraceString("green");
        obj183.data["colour"] = string268;
        var reader_sniff_colour_269 = function() {
          return this.data["colour"];
        }
        obj183.methods["colour"] = reader_sniff_colour_269;
        obj183.data["colour"] = string268;
        var writer_sniff_colour_269 = function(argcv, o) {
          this.data["colour"] = o;
        }
        obj183.methods["colour:="] = writer_sniff_colour_269;
        writer_sniff_colour_269.confidential = true;
        lineNumber = 224;
        moduleName = "sniff";
        lineNumber = 223
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], string268)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'colour' to be of type Unknown"))
        obj183.mutable = true;
        sourceObject = obj183;
        sourceObject = obj183;
        sourceObject = obj183;
        superDepth = origSuperDepth;
      }
      obj_init_183.apply(obj183, []);
      return obj183
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func182.paramCounts = [
    0,
  ];
  func182.variableArities = [
    false,
  ];
  this.methods["circle"] = func182;
  func182.definitionLine = 219;
  func182.definitionModule = "sniff";
  var func270 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj271 = Grace_allocObject();
      obj271.definitionModule = "sniff";
      obj271.definitionLine = 220;
      var inho271 = inheritingObject;
      while (inho271.superobj) inho271 = inho271.superobj;
      inho271.superobj = obj271;
      obj271.data = inheritingObject.data;
      obj271.outer = this;
      var reader_sniff_outer_272 = function() {
        return this.outer;
      }
      obj271.methods["outer"] = reader_sniff_outer_272;
      function obj_init_271() {
        var origSuperDepth = superDepth;
        superDepth = obj271;
        obj271.annotations = [];
        var func273 = function(argcv) {
          var curarg = 1;
          var var_ctx = arguments[curarg];
          curarg++;
          if (argcv[0] !=  func273.paramCounts[0])
            callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
          var returnTarget = invocationCount;
          invocationCount++;
          moduleName = "sniff";
          try {
            lineNumber = 226
            lineNumber = 245
            lineNumber = 225
            onSelf = true;
            var call274 = callmethod(this, "colour", [0]);
            var call275 = callmethod(var_ctx,"fillStyle:=", [1], call274);
            lineNumber = 226
            var call276 = callmethod(var_ctx,"beginPath", [0]);
            lineNumber = 227
            onSelf = true;
            var call277 = callmethod(this, "x", [0]);
            onSelf = true;
            var call278 = callmethod(this, "y", [0]);
            onSelf = true;
            var call279 = callmethod(this, "radius", [0]);
            var call280 = callmethod(var_ctx,"arc", [5], call277, call278, call279, new GraceNum(0), new GraceNum(6.283));
            lineNumber = 228
            var call281 = callmethod(var_ctx,"fill", [0]);
            return call281
          } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
              return e.returnvalue;
            } else {
              throw e;
            }
          }
        }
        func273.paramCounts = [
          1,
        ];
        func273.variableArities = [
          false,
        ];
        obj271.methods["draw"] = func273;
        func273.definitionLine = 224;
        func273.definitionModule = "sniff";
        var func282 = function(argcv) {
          var curarg = 1;
          var var_p = arguments[curarg];
          curarg++;
          if (argcv[0] !=  func282.paramCounts[0])
            callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isPointOver)"));
          var returnTarget = invocationCount;
          invocationCount++;
          moduleName = "sniff";
          try {
            lineNumber = 232
            lineNumber = 231
            onSelf = true;
            var call283 = callmethod(this, "x", [0]);
            var call285 = callmethod(var_p,"x", [0]);
            var diff287 = callmethod(call285, "-", [1], call283);
            var var_dx = diff287;
            lineNumber = 232;
            moduleName = "sniff";
            lineNumber = 231
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_dx)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'dx' to be of type Unknown"))
            lineNumber = 233
            lineNumber = 232
            onSelf = true;
            var call288 = callmethod(this, "y", [0]);
            var call290 = callmethod(var_p,"y", [0]);
            var diff292 = callmethod(call290, "-", [1], call288);
            var var_dy = diff292;
            lineNumber = 233;
            moduleName = "sniff";
            lineNumber = 232
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_dy)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'dy' to be of type Unknown"))
            lineNumber = 234
            lineNumber = 233
            var prod296 = callmethod(var_dy, "*", [1], var_dy);
            var prod300 = callmethod(var_dx, "*", [1], var_dx);
            var opresult302 = callmethod(prod300, "+", [1], prod296);
            var opresult304 = callmethod(opresult302, "^", [1], new GraceNum(0.5));
            var var_dist = opresult304;
            lineNumber = 234;
            moduleName = "sniff";
            lineNumber = 233
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_dist)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'dist' to be of type Unknown"))
            lineNumber = 237
            var if305 = var_done;
            lineNumber = 234
            onSelf = true;
            var call306 = callmethod(this, "radius", [0]);
            var opresult309 = callmethod(var_dist, "<=", [1], call306);
            if (Grace_isTrue(opresult309)) {
              lineNumber = 236
              lineNumber = 235
              var bool310 = new GraceBoolean(true)
              return bool310
              if305 = undefined;
            }
            lineNumber = 238
            lineNumber = 237
            var bool311 = new GraceBoolean(false)
            return bool311
            return undefined
          } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
              return e.returnvalue;
            } else {
              throw e;
            }
          }
        }
        func282.paramCounts = [
          1,
        ];
        func282.variableArities = [
          false,
        ];
        obj271.methods["isPointOver"] = func282;
        func282.definitionLine = 230;
        func282.definitionModule = "sniff";
        var func312 = function(argcv) {
          var curarg = 1;
          var var_other = arguments[curarg];
          curarg++;
          if (argcv[0] !=  func312.paramCounts[0])
            callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touching)"));
          var returnTarget = invocationCount;
          invocationCount++;
          moduleName = "sniff";
          try {
            lineNumber = 250
            var if313 = var_done;
            lineNumber = 240
            var call314 = callmethod(var_SniffCircle,"match", [1], var_other);
            if (Grace_isTrue(call314)) {
              lineNumber = 242
              lineNumber = 241
              var call316 = callmethod(var_other,"y", [0]);
              onSelf = true;
              var call318 = callmethod(this, "y", [0]);
              var diff320 = callmethod(call318, "-", [1], call316);
              var opresult322 = callmethod(diff320, "^", [1], new GraceNum(2));
              var call325 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call327 = callmethod(this, "x", [0]);
              var diff329 = callmethod(call327, "-", [1], call325);
              var opresult331 = callmethod(diff329, "^", [1], new GraceNum(2));
              var opresult333 = callmethod(opresult331, "+", [1], opresult322);
              var var_n2 = opresult333;
              lineNumber = 242;
              moduleName = "sniff";
              lineNumber = 241
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_n2)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'n2' to be of type Unknown"))
              lineNumber = 245
              var if334 = var_done;
              lineNumber = 242
              var opresult337 = callmethod(var_n2, "==", [1], new GraceNum(0));
              if (Grace_isTrue(opresult337)) {
                lineNumber = 244
                lineNumber = 243
                var bool338 = new GraceBoolean(true)
                return bool338
                if334 = undefined;
              }
              lineNumber = 248
              var if339 = var_done;
              lineNumber = 245
              onSelf = true;
              var call340 = callmethod(this, "radius", [0]);
              var call342 = callmethod(var_other,"radius", [0]);
              var opresult344 = callmethod(call342, "+", [1], call340);
              var opresult348 = callmethod(var_n2, "^", [1], new GraceNum(0.5));
              var opresult350 = callmethod(opresult348, "<", [1], opresult344);
              if (Grace_isTrue(opresult350)) {
                lineNumber = 247
                lineNumber = 246
                var bool351 = new GraceBoolean(true)
                return bool351
                if339 = undefined;
              }
              lineNumber = 249
              lineNumber = 248
              var bool352 = new GraceBoolean(false)
              return bool352
              if313 = undefined;
            }
            lineNumber = 250
            var call353 = callmethodsuper(this, "touching", [1], var_other);
            return call353
          } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
              return e.returnvalue;
            } else {
              throw e;
            }
          }
        }
        func312.paramCounts = [
          1,
        ];
        func312.variableArities = [
          false,
        ];
        obj271.methods["touching"] = func312;
        func312.definitionLine = 239;
        func312.definitionModule = "sniff";
        sourceObject = obj271;
        lineNumber = 221
        var call354 = callmethod(var_drawable,"new()object", [0, 1], this);
        obj271.superobj = call354;
        obj271._value = call354._value;
        sourceObject = obj271;
        lineNumber = 222
        obj271.data["radius"] = new GraceNum(25);
        var reader_sniff_radius_355 = function() {
          return this.data["radius"];
        }
        obj271.methods["radius"] = reader_sniff_radius_355;
        obj271.data["radius"] = new GraceNum(25);
        var writer_sniff_radius_355 = function(argcv, o) {
          this.data["radius"] = o;
        }
        obj271.methods["radius:="] = writer_sniff_radius_355;
        writer_sniff_radius_355.confidential = true;
        lineNumber = 223;
        moduleName = "sniff";
        lineNumber = 222
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], new GraceNum(25))))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'radius' to be of type Unknown"))
        obj271.mutable = true;
        sourceObject = obj271;
        lineNumber = 223
        var string356 = new GraceString("green");
        obj271.data["colour"] = string356;
        var reader_sniff_colour_357 = function() {
          return this.data["colour"];
        }
        obj271.methods["colour"] = reader_sniff_colour_357;
        obj271.data["colour"] = string356;
        var writer_sniff_colour_357 = function(argcv, o) {
          this.data["colour"] = o;
        }
        obj271.methods["colour:="] = writer_sniff_colour_357;
        writer_sniff_colour_357.confidential = true;
        lineNumber = 224;
        moduleName = "sniff";
        lineNumber = 223
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], string356)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'colour' to be of type Unknown"))
        obj271.mutable = true;
        sourceObject = obj271;
        sourceObject = obj271;
        sourceObject = obj271;
        superDepth = origSuperDepth;
      }
      obj_init_271.apply(inheritingObject, []);
      return obj271
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  this.methods["circle()object"] = func270;
  lineNumber = 255
  var func358 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func358.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (image)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      lineNumber = 256
      var obj359 = Grace_allocObject();
      obj359.definitionModule = "sniff";
      obj359.definitionLine = 256;
      obj359.outer = this;
      var reader_sniff_outer_360 = function() {
        return this.outer;
      }
      obj359.methods["outer"] = reader_sniff_outer_360;
      function obj_init_359() {
        var origSuperDepth = superDepth;
        superDepth = obj359;
        obj359.annotations = [];
        var func361 = function(argcv) {
          var curarg = 1;
          if (argcv[0] !=  func361.paramCounts[0])
            callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (url)"));
          var returnTarget = invocationCount;
          invocationCount++;
          moduleName = "sniff";
          try {
            lineNumber = 262
            onSelf = true;
            var call362 = callmethod(this, "imgTag", [0]);
            var call363 = callmethod(call362,"src", [0]);
            return call363
          } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
              return e.returnvalue;
            } else {
              throw e;
            }
          }
        }
        func361.paramCounts = [
          0,
        ];
        func361.variableArities = [
          false,
        ];
        obj359.methods["url"] = func361;
        func361.definitionLine = 261;
        func361.definitionModule = "sniff";
        var func364 = function(argcv) {
          var curarg = 1;
          var var_s = arguments[curarg];
          curarg++;
          if (argcv[0] !=  func364.paramCounts[0])
            callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (url:=)"));
          var returnTarget = invocationCount;
          invocationCount++;
          moduleName = "sniff";
          try {
            lineNumber = 266
            lineNumber = 262
            lineNumber = 265
            onSelf = true;
            var call365 = callmethod(this, "imgTag", [0]);
            var call366 = callmethod(call365,"src:=", [1], var_s);
            return call366
          } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
              return e.returnvalue;
            } else {
              throw e;
            }
          }
        }
        func364.paramCounts = [
          1,
        ];
        func364.variableArities = [
          false,
        ];
        obj359.methods["url:="] = func364;
        func364.definitionLine = 264;
        func364.definitionModule = "sniff";
        var func367 = function(argcv) {
          var curarg = 1;
          var var_ctx = arguments[curarg];
          curarg++;
          if (argcv[0] !=  func367.paramCounts[0])
            callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
          var returnTarget = invocationCount;
          invocationCount++;
          moduleName = "sniff";
          try {
            lineNumber = 268
            var call368 = callmethod(var_ctx,"save", [0]);
            lineNumber = 269
            onSelf = true;
            var call369 = callmethod(this, "x", [0]);
            onSelf = true;
            var call370 = callmethod(this, "y", [0]);
            var call371 = callmethod(var_ctx,"translate", [2], call369, call370);
            lineNumber = 270
            onSelf = true;
            var call375 = callmethod(this, "angle", [0]);
            var opresult377 = callmethod(call375, "+", [1], new GraceNum(180));
            var call378 = callmethod(opresult377,"prefix-", [0]);
            var quotient380 = callmethod(call378, "/", [1], new GraceNum(180));
            var prod382 = callmethod(quotient380, "*", [1], new GraceNum(3.1415));
            var call383 = callmethod(var_ctx,"rotate", [1], prod382);
            lineNumber = 271
            onSelf = true;
            var call384 = callmethod(this, "imgTag", [0]);
            onSelf = true;
            var call386 = callmethod(this, "width", [0]);
            var call387 = callmethod(call386,"prefix-", [0]);
            var quotient389 = callmethod(call387, "/", [1], new GraceNum(2));
            onSelf = true;
            var call391 = callmethod(this, "height", [0]);
            var call392 = callmethod(call391,"prefix-", [0]);
            var quotient394 = callmethod(call392, "/", [1], new GraceNum(2));
            onSelf = true;
            var call395 = callmethod(this, "width", [0]);
            onSelf = true;
            var call396 = callmethod(this, "height", [0]);
            var call397 = callmethod(var_ctx,"drawImage", [5], call384, quotient389, quotient394, call395, call396);
            lineNumber = 272
            var call398 = callmethod(var_ctx,"restore", [0]);
            return call398
          } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
              return e.returnvalue;
            } else {
              throw e;
            }
          }
        }
        func367.paramCounts = [
          1,
        ];
        func367.variableArities = [
          false,
        ];
        obj359.methods["draw"] = func367;
        func367.definitionLine = 267;
        func367.definitionModule = "sniff";
        var func399 = function(argcv) {
          var curarg = 1;
          var var_p = arguments[curarg];
          curarg++;
          if (argcv[0] !=  func399.paramCounts[0])
            callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isPointOver)"));
          var returnTarget = invocationCount;
          invocationCount++;
          moduleName = "sniff";
          try {
            lineNumber = 277
            onSelf = true;
            var call403 = callmethod(this, "angle", [0]);
            var opresult405 = callmethod(call403, "+", [1], new GraceNum(180));
            var call406 = callmethod(opresult405,"prefix-", [0]);
            var quotient408 = callmethod(call406, "/", [1], new GraceNum(180));
            var prod410 = callmethod(quotient408, "*", [1], new GraceNum(3.1415));
            var call411 = callmethod(var_trig,"cos", [1], prod410);
            var var_c = call411;
            lineNumber = 277;
            moduleName = "sniff";
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_c)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'c' to be of type Unknown"))
            lineNumber = 278
            onSelf = true;
            var call415 = callmethod(this, "angle", [0]);
            var opresult417 = callmethod(call415, "+", [1], new GraceNum(180));
            var call418 = callmethod(opresult417,"prefix-", [0]);
            var quotient420 = callmethod(call418, "/", [1], new GraceNum(180));
            var prod422 = callmethod(quotient420, "*", [1], new GraceNum(3.1415));
            var call423 = callmethod(var_trig,"sin", [1], prod422);
            var var_s = call423;
            lineNumber = 278;
            moduleName = "sniff";
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_s)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 's' to be of type Unknown"))
            lineNumber = 280
            lineNumber = 279
            onSelf = true;
            var call424 = callmethod(this, "y", [0]);
            var call426 = callmethod(var_p,"y", [0]);
            var diff428 = callmethod(call426, "-", [1], call424);
            var prod431 = callmethod(var_s, "*", [1], diff428);
            onSelf = true;
            var call433 = callmethod(this, "x", [0]);
            var call435 = callmethod(var_p,"x", [0]);
            var diff437 = callmethod(call435, "-", [1], call433);
            var prod440 = callmethod(var_c, "*", [1], diff437);
            var diff442 = callmethod(prod440, "-", [1], prod431);
            var var_rotatedX = diff442;
            lineNumber = 280;
            moduleName = "sniff";
            lineNumber = 279
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_rotatedX)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'rotatedX' to be of type Unknown"))
            lineNumber = 281
            lineNumber = 280
            onSelf = true;
            var call443 = callmethod(this, "y", [0]);
            var call445 = callmethod(var_p,"y", [0]);
            var diff447 = callmethod(call445, "-", [1], call443);
            var prod450 = callmethod(var_c, "*", [1], diff447);
            onSelf = true;
            var call452 = callmethod(this, "x", [0]);
            var call454 = callmethod(var_p,"x", [0]);
            var diff456 = callmethod(call454, "-", [1], call452);
            var prod459 = callmethod(var_s, "*", [1], diff456);
            var opresult461 = callmethod(prod459, "+", [1], prod450);
            var var_rotatedY = opresult461;
            lineNumber = 281;
            moduleName = "sniff";
            lineNumber = 280
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_rotatedY)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'rotatedY' to be of type Unknown"))
            lineNumber = 284
            var if462 = var_done;
            lineNumber = 281
            onSelf = true;
            var call464 = callmethod(this, "width", [0]);
            var call465 = callmethod(call464,"prefix-", [0]);
            var quotient467 = callmethod(call465, "/", [1], new GraceNum(2));
            var opresult470 = callmethod(var_rotatedX, "<", [1], quotient467);
            if (Grace_isTrue(opresult470)) {
              lineNumber = 283
              lineNumber = 282
              var bool471 = new GraceBoolean(false)
              return bool471
              if462 = undefined;
            }
            lineNumber = 287
            var if472 = var_done;
            lineNumber = 284
            onSelf = true;
            var call474 = callmethod(this, "width", [0]);
            var quotient476 = callmethod(call474, "/", [1], new GraceNum(2));
            var opresult479 = callmethod(var_rotatedX, ">", [1], quotient476);
            if (Grace_isTrue(opresult479)) {
              lineNumber = 286
              lineNumber = 285
              var bool480 = new GraceBoolean(false)
              return bool480
              if472 = undefined;
            }
            lineNumber = 290
            var if481 = var_done;
            lineNumber = 287
            onSelf = true;
            var call483 = callmethod(this, "height", [0]);
            var call484 = callmethod(call483,"prefix-", [0]);
            var quotient486 = callmethod(call484, "/", [1], new GraceNum(2));
            var opresult489 = callmethod(var_rotatedY, "<", [1], quotient486);
            if (Grace_isTrue(opresult489)) {
              lineNumber = 289
              lineNumber = 288
              var bool490 = new GraceBoolean(false)
              return bool490
              if481 = undefined;
            }
            lineNumber = 293
            var if491 = var_done;
            lineNumber = 290
            onSelf = true;
            var call493 = callmethod(this, "height", [0]);
            var quotient495 = callmethod(call493, "/", [1], new GraceNum(2));
            var opresult498 = callmethod(var_rotatedY, ">", [1], quotient495);
            if (Grace_isTrue(opresult498)) {
              lineNumber = 292
              lineNumber = 291
              var bool499 = new GraceBoolean(false)
              return bool499
              if491 = undefined;
            }
            lineNumber = 294
            lineNumber = 293
            var bool500 = new GraceBoolean(true)
            return bool500
            return undefined
          } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
              return e.returnvalue;
            } else {
              throw e;
            }
          }
        }
        func399.paramCounts = [
          1,
        ];
        func399.variableArities = [
          false,
        ];
        obj359.methods["isPointOver"] = func399;
        func399.definitionLine = 274;
        func399.definitionModule = "sniff";
        sourceObject = obj359;
        lineNumber = 257
        var call501 = callmethod(var_drawable,"new()object", [0, 1], this);
        obj359.superobj = call501;
        obj359._value = call501._value;
        sourceObject = obj359;
        lineNumber = 258
        obj359.data["width"] = new GraceNum(64);
        var reader_sniff_width_502 = function() {
          return this.data["width"];
        }
        obj359.methods["width"] = reader_sniff_width_502;
        obj359.data["width"] = new GraceNum(64);
        var writer_sniff_width_502 = function(argcv, o) {
          this.data["width"] = o;
        }
        obj359.methods["width:="] = writer_sniff_width_502;
        reader_sniff_width_502.confidential = true;
        writer_sniff_width_502.confidential = true;
        lineNumber = 259;
        moduleName = "sniff";
        lineNumber = 258
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], new GraceNum(64))))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'width' to be of type Unknown"))
        obj359.mutable = true;
        sourceObject = obj359;
        lineNumber = 259
        obj359.data["height"] = new GraceNum(64);
        var reader_sniff_height_503 = function() {
          return this.data["height"];
        }
        obj359.methods["height"] = reader_sniff_height_503;
        obj359.data["height"] = new GraceNum(64);
        var writer_sniff_height_503 = function(argcv, o) {
          this.data["height"] = o;
        }
        obj359.methods["height:="] = writer_sniff_height_503;
        reader_sniff_height_503.confidential = true;
        writer_sniff_height_503.confidential = true;
        lineNumber = 260;
        moduleName = "sniff";
        lineNumber = 259
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], new GraceNum(64))))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'height' to be of type Unknown"))
        obj359.mutable = true;
        sourceObject = obj359;
        lineNumber = 260
        var string504 = new GraceString("img");
        var call505 = callmethod(var_dom,"document", [0]);
        var call506 = callmethod(call505,"createElement", [1], string504);
        obj359.data["imgTag"] = call506;
        var reader_sniff_imgTag_507 = function() {
          return this.data["imgTag"];
        }
        reader_sniff_imgTag_507.def = true;
        reader_sniff_imgTag_507.confidential = true;
        obj359.methods["imgTag"] = reader_sniff_imgTag_507;
        lineNumber = 260;
        moduleName = "sniff";
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], call506)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'imgTag' to be of type Unknown"))
        sourceObject = obj359;
        sourceObject = obj359;
        sourceObject = obj359;
        sourceObject = obj359;
        superDepth = origSuperDepth;
      }
      obj_init_359.apply(obj359, []);
      return obj359
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func358.paramCounts = [
    0,
  ];
  func358.variableArities = [
    false,
  ];
  this.methods["image"] = func358;
  func358.definitionLine = 255;
  func358.definitionModule = "sniff";
  var func508 = function(argcv) {
    var curarg = 1;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj509 = Grace_allocObject();
      obj509.definitionModule = "sniff";
      obj509.definitionLine = 256;
      var inho509 = inheritingObject;
      while (inho509.superobj) inho509 = inho509.superobj;
      inho509.superobj = obj509;
      obj509.data = inheritingObject.data;
      obj509.outer = this;
      var reader_sniff_outer_510 = function() {
        return this.outer;
      }
      obj509.methods["outer"] = reader_sniff_outer_510;
      function obj_init_509() {
        var origSuperDepth = superDepth;
        superDepth = obj509;
        obj509.annotations = [];
        var func511 = function(argcv) {
          var curarg = 1;
          if (argcv[0] !=  func511.paramCounts[0])
            callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (url)"));
          var returnTarget = invocationCount;
          invocationCount++;
          moduleName = "sniff";
          try {
            lineNumber = 262
            onSelf = true;
            var call512 = callmethod(this, "imgTag", [0]);
            var call513 = callmethod(call512,"src", [0]);
            return call513
          } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
              return e.returnvalue;
            } else {
              throw e;
            }
          }
        }
        func511.paramCounts = [
          0,
        ];
        func511.variableArities = [
          false,
        ];
        obj509.methods["url"] = func511;
        func511.definitionLine = 261;
        func511.definitionModule = "sniff";
        var func514 = function(argcv) {
          var curarg = 1;
          var var_s = arguments[curarg];
          curarg++;
          if (argcv[0] !=  func514.paramCounts[0])
            callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (url:=)"));
          var returnTarget = invocationCount;
          invocationCount++;
          moduleName = "sniff";
          try {
            lineNumber = 266
            lineNumber = 262
            lineNumber = 265
            onSelf = true;
            var call515 = callmethod(this, "imgTag", [0]);
            var call516 = callmethod(call515,"src:=", [1], var_s);
            return call516
          } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
              return e.returnvalue;
            } else {
              throw e;
            }
          }
        }
        func514.paramCounts = [
          1,
        ];
        func514.variableArities = [
          false,
        ];
        obj509.methods["url:="] = func514;
        func514.definitionLine = 264;
        func514.definitionModule = "sniff";
        var func517 = function(argcv) {
          var curarg = 1;
          var var_ctx = arguments[curarg];
          curarg++;
          if (argcv[0] !=  func517.paramCounts[0])
            callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
          var returnTarget = invocationCount;
          invocationCount++;
          moduleName = "sniff";
          try {
            lineNumber = 268
            var call518 = callmethod(var_ctx,"save", [0]);
            lineNumber = 269
            onSelf = true;
            var call519 = callmethod(this, "x", [0]);
            onSelf = true;
            var call520 = callmethod(this, "y", [0]);
            var call521 = callmethod(var_ctx,"translate", [2], call519, call520);
            lineNumber = 270
            onSelf = true;
            var call525 = callmethod(this, "angle", [0]);
            var opresult527 = callmethod(call525, "+", [1], new GraceNum(180));
            var call528 = callmethod(opresult527,"prefix-", [0]);
            var quotient530 = callmethod(call528, "/", [1], new GraceNum(180));
            var prod532 = callmethod(quotient530, "*", [1], new GraceNum(3.1415));
            var call533 = callmethod(var_ctx,"rotate", [1], prod532);
            lineNumber = 271
            onSelf = true;
            var call534 = callmethod(this, "imgTag", [0]);
            onSelf = true;
            var call536 = callmethod(this, "width", [0]);
            var call537 = callmethod(call536,"prefix-", [0]);
            var quotient539 = callmethod(call537, "/", [1], new GraceNum(2));
            onSelf = true;
            var call541 = callmethod(this, "height", [0]);
            var call542 = callmethod(call541,"prefix-", [0]);
            var quotient544 = callmethod(call542, "/", [1], new GraceNum(2));
            onSelf = true;
            var call545 = callmethod(this, "width", [0]);
            onSelf = true;
            var call546 = callmethod(this, "height", [0]);
            var call547 = callmethod(var_ctx,"drawImage", [5], call534, quotient539, quotient544, call545, call546);
            lineNumber = 272
            var call548 = callmethod(var_ctx,"restore", [0]);
            return call548
          } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
              return e.returnvalue;
            } else {
              throw e;
            }
          }
        }
        func517.paramCounts = [
          1,
        ];
        func517.variableArities = [
          false,
        ];
        obj509.methods["draw"] = func517;
        func517.definitionLine = 267;
        func517.definitionModule = "sniff";
        var func549 = function(argcv) {
          var curarg = 1;
          var var_p = arguments[curarg];
          curarg++;
          if (argcv[0] !=  func549.paramCounts[0])
            callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isPointOver)"));
          var returnTarget = invocationCount;
          invocationCount++;
          moduleName = "sniff";
          try {
            lineNumber = 277
            onSelf = true;
            var call553 = callmethod(this, "angle", [0]);
            var opresult555 = callmethod(call553, "+", [1], new GraceNum(180));
            var call556 = callmethod(opresult555,"prefix-", [0]);
            var quotient558 = callmethod(call556, "/", [1], new GraceNum(180));
            var prod560 = callmethod(quotient558, "*", [1], new GraceNum(3.1415));
            var call561 = callmethod(var_trig,"cos", [1], prod560);
            var var_c = call561;
            lineNumber = 277;
            moduleName = "sniff";
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_c)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'c' to be of type Unknown"))
            lineNumber = 278
            onSelf = true;
            var call565 = callmethod(this, "angle", [0]);
            var opresult567 = callmethod(call565, "+", [1], new GraceNum(180));
            var call568 = callmethod(opresult567,"prefix-", [0]);
            var quotient570 = callmethod(call568, "/", [1], new GraceNum(180));
            var prod572 = callmethod(quotient570, "*", [1], new GraceNum(3.1415));
            var call573 = callmethod(var_trig,"sin", [1], prod572);
            var var_s = call573;
            lineNumber = 278;
            moduleName = "sniff";
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_s)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 's' to be of type Unknown"))
            lineNumber = 280
            lineNumber = 279
            onSelf = true;
            var call574 = callmethod(this, "y", [0]);
            var call576 = callmethod(var_p,"y", [0]);
            var diff578 = callmethod(call576, "-", [1], call574);
            var prod581 = callmethod(var_s, "*", [1], diff578);
            onSelf = true;
            var call583 = callmethod(this, "x", [0]);
            var call585 = callmethod(var_p,"x", [0]);
            var diff587 = callmethod(call585, "-", [1], call583);
            var prod590 = callmethod(var_c, "*", [1], diff587);
            var diff592 = callmethod(prod590, "-", [1], prod581);
            var var_rotatedX = diff592;
            lineNumber = 280;
            moduleName = "sniff";
            lineNumber = 279
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_rotatedX)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'rotatedX' to be of type Unknown"))
            lineNumber = 281
            lineNumber = 280
            onSelf = true;
            var call593 = callmethod(this, "y", [0]);
            var call595 = callmethod(var_p,"y", [0]);
            var diff597 = callmethod(call595, "-", [1], call593);
            var prod600 = callmethod(var_c, "*", [1], diff597);
            onSelf = true;
            var call602 = callmethod(this, "x", [0]);
            var call604 = callmethod(var_p,"x", [0]);
            var diff606 = callmethod(call604, "-", [1], call602);
            var prod609 = callmethod(var_s, "*", [1], diff606);
            var opresult611 = callmethod(prod609, "+", [1], prod600);
            var var_rotatedY = opresult611;
            lineNumber = 281;
            moduleName = "sniff";
            lineNumber = 280
            if (!Grace_isTrue(callmethod(var_Unknown, "match",
              [1], var_rotatedY)))
                throw new GraceExceptionPacket(TypeErrorObject,
                      new GraceString("expected "
                      + "initial value of def 'rotatedY' to be of type Unknown"))
            lineNumber = 284
            var if612 = var_done;
            lineNumber = 281
            onSelf = true;
            var call614 = callmethod(this, "width", [0]);
            var call615 = callmethod(call614,"prefix-", [0]);
            var quotient617 = callmethod(call615, "/", [1], new GraceNum(2));
            var opresult620 = callmethod(var_rotatedX, "<", [1], quotient617);
            if (Grace_isTrue(opresult620)) {
              lineNumber = 283
              lineNumber = 282
              var bool621 = new GraceBoolean(false)
              return bool621
              if612 = undefined;
            }
            lineNumber = 287
            var if622 = var_done;
            lineNumber = 284
            onSelf = true;
            var call624 = callmethod(this, "width", [0]);
            var quotient626 = callmethod(call624, "/", [1], new GraceNum(2));
            var opresult629 = callmethod(var_rotatedX, ">", [1], quotient626);
            if (Grace_isTrue(opresult629)) {
              lineNumber = 286
              lineNumber = 285
              var bool630 = new GraceBoolean(false)
              return bool630
              if622 = undefined;
            }
            lineNumber = 290
            var if631 = var_done;
            lineNumber = 287
            onSelf = true;
            var call633 = callmethod(this, "height", [0]);
            var call634 = callmethod(call633,"prefix-", [0]);
            var quotient636 = callmethod(call634, "/", [1], new GraceNum(2));
            var opresult639 = callmethod(var_rotatedY, "<", [1], quotient636);
            if (Grace_isTrue(opresult639)) {
              lineNumber = 289
              lineNumber = 288
              var bool640 = new GraceBoolean(false)
              return bool640
              if631 = undefined;
            }
            lineNumber = 293
            var if641 = var_done;
            lineNumber = 290
            onSelf = true;
            var call643 = callmethod(this, "height", [0]);
            var quotient645 = callmethod(call643, "/", [1], new GraceNum(2));
            var opresult648 = callmethod(var_rotatedY, ">", [1], quotient645);
            if (Grace_isTrue(opresult648)) {
              lineNumber = 292
              lineNumber = 291
              var bool649 = new GraceBoolean(false)
              return bool649
              if641 = undefined;
            }
            lineNumber = 294
            lineNumber = 293
            var bool650 = new GraceBoolean(true)
            return bool650
            return undefined
          } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
              return e.returnvalue;
            } else {
              throw e;
            }
          }
        }
        func549.paramCounts = [
          1,
        ];
        func549.variableArities = [
          false,
        ];
        obj509.methods["isPointOver"] = func549;
        func549.definitionLine = 274;
        func549.definitionModule = "sniff";
        sourceObject = obj509;
        lineNumber = 257
        var call651 = callmethod(var_drawable,"new()object", [0, 1], this);
        obj509.superobj = call651;
        obj509._value = call651._value;
        sourceObject = obj509;
        lineNumber = 258
        obj509.data["width"] = new GraceNum(64);
        var reader_sniff_width_652 = function() {
          return this.data["width"];
        }
        obj509.methods["width"] = reader_sniff_width_652;
        obj509.data["width"] = new GraceNum(64);
        var writer_sniff_width_652 = function(argcv, o) {
          this.data["width"] = o;
        }
        obj509.methods["width:="] = writer_sniff_width_652;
        reader_sniff_width_652.confidential = true;
        writer_sniff_width_652.confidential = true;
        lineNumber = 259;
        moduleName = "sniff";
        lineNumber = 258
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], new GraceNum(64))))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'width' to be of type Unknown"))
        obj509.mutable = true;
        sourceObject = obj509;
        lineNumber = 259
        obj509.data["height"] = new GraceNum(64);
        var reader_sniff_height_653 = function() {
          return this.data["height"];
        }
        obj509.methods["height"] = reader_sniff_height_653;
        obj509.data["height"] = new GraceNum(64);
        var writer_sniff_height_653 = function(argcv, o) {
          this.data["height"] = o;
        }
        obj509.methods["height:="] = writer_sniff_height_653;
        reader_sniff_height_653.confidential = true;
        writer_sniff_height_653.confidential = true;
        lineNumber = 260;
        moduleName = "sniff";
        lineNumber = 259
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], new GraceNum(64))))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'height' to be of type Unknown"))
        obj509.mutable = true;
        sourceObject = obj509;
        lineNumber = 260
        var string654 = new GraceString("img");
        var call655 = callmethod(var_dom,"document", [0]);
        var call656 = callmethod(call655,"createElement", [1], string654);
        obj509.data["imgTag"] = call656;
        var reader_sniff_imgTag_657 = function() {
          return this.data["imgTag"];
        }
        reader_sniff_imgTag_657.def = true;
        reader_sniff_imgTag_657.confidential = true;
        obj509.methods["imgTag"] = reader_sniff_imgTag_657;
        lineNumber = 260;
        moduleName = "sniff";
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], call656)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'imgTag' to be of type Unknown"))
        sourceObject = obj509;
        sourceObject = obj509;
        sourceObject = obj509;
        sourceObject = obj509;
        superDepth = origSuperDepth;
      }
      obj_init_509.apply(inheritingObject, []);
      return obj509
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  this.methods["image()object"] = func508;
  lineNumber = 298
  var func658 = function(argcv) {
    var curarg = 1;
    var var_b = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func658.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (value)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      lineNumber = 299
      var obj659 = Grace_allocObject();
      obj659.definitionModule = "sniff";
      obj659.definitionLine = 299;
      obj659.outer = this;
      var reader_sniff_outer_660 = function() {
        return this.outer;
      }
      obj659.methods["outer"] = reader_sniff_outer_660;
      function obj_init_659() {
        var origSuperDepth = superDepth;
        superDepth = obj659;
        obj659.annotations = [];
        var func661 = function(argcv) {
          var curarg = 1;
          var var_ctx = arguments[curarg];
          curarg++;
          if (argcv[0] !=  func661.paramCounts[0])
            callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
          var returnTarget = invocationCount;
          invocationCount++;
          moduleName = "sniff";
          try {
            lineNumber = 305
            lineNumber = 260
            lineNumber = 304
            onSelf = true;
            var call662 = callmethod(this, "colour", [0]);
            var call663 = callmethod(var_ctx,"fillStyle:=", [1], call662);
            lineNumber = 306
            lineNumber = 260
            lineNumber = 305
            var string664 = new GraceString("20px sans-serif");
            var call665 = callmethod(var_ctx,"font:=", [1], string664);
            lineNumber = 311
            var if666 = var_done;
            lineNumber = 306
            var string667 = new GraceString("");
            onSelf = true;
            var call669 = callmethod(this, "label", [0]);
            var opresult671 = callmethod(call669, "!=", [1], string667);
            if (Grace_isTrue(opresult671)) {
              lineNumber = 307
              var string672 = new GraceString("");
              var call674 = callmethod(var_b,"apply", [0]);
              var string676 = new GraceString(" ");
              onSelf = true;
              var call678 = callmethod(this, "label", [0]);
              var string680 = new GraceString("");
              var opresult682 = callmethod(string680, "++", [1], call678);
              var opresult684 = callmethod(opresult682, "++", [1], string676);
              var opresult686 = callmethod(opresult684, "++", [1], call674);
              var opresult688 = callmethod(opresult686, "++", [1], string672);
              onSelf = true;
              var call689 = callmethod(this, "x", [0]);
              onSelf = true;
              var call690 = callmethod(this, "y", [0]);
              var call691 = callmethod(var_ctx,"fillText", [3], opresult688, call689, call690);
              if666 = call691;
            } else {
              lineNumber = 309
              var string692 = new GraceString("");
              var call694 = callmethod(var_b,"apply", [0]);
              var string696 = new GraceString("");
              var opresult698 = callmethod(string696, "++", [1], call694);
              var opresult700 = callmethod(opresult698, "++", [1], string692);
              onSelf = true;
              var call701 = callmethod(this, "x", [0]);
              onSelf = true;
              var call702 = callmethod(this, "y", [0]);
              var call703 = callmethod(var_ctx,"fillText", [3], opresult700, call701, call702);
              if666 = call703;
            }
            return if666
          } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
              return e.returnvalue;
            } else {
              throw e;
            }
          }
        }
        func661.paramCounts = [
          1,
        ];
        func661.variableArities = [
          false,
        ];
        obj659.methods["draw"] = func661;
        func661.definitionLine = 303;
        func661.definitionModule = "sniff";
        sourceObject = obj659;
        lineNumber = 300
        var call704 = callmethod(var_drawable,"new()object", [0, 1], this);
        obj659.superobj = call704;
        obj659._value = call704._value;
        sourceObject = obj659;
        lineNumber = 301
        var string705 = new GraceString("blue");
        obj659.data["colour"] = string705;
        var reader_sniff_colour_706 = function() {
          return this.data["colour"];
        }
        obj659.methods["colour"] = reader_sniff_colour_706;
        obj659.data["colour"] = string705;
        var writer_sniff_colour_706 = function(argcv, o) {
          this.data["colour"] = o;
        }
        obj659.methods["colour:="] = writer_sniff_colour_706;
        reader_sniff_colour_706.confidential = true;
        writer_sniff_colour_706.confidential = true;
        lineNumber = 302;
        moduleName = "sniff";
        lineNumber = 301
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], string705)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'colour' to be of type Unknown"))
        obj659.mutable = true;
        sourceObject = obj659;
        lineNumber = 302
        var string707 = new GraceString("");
        obj659.data["label"] = string707;
        var reader_sniff_label_708 = function() {
          return this.data["label"];
        }
        obj659.methods["label"] = reader_sniff_label_708;
        obj659.data["label"] = string707;
        var writer_sniff_label_708 = function(argcv, o) {
          this.data["label"] = o;
        }
        obj659.methods["label:="] = writer_sniff_label_708;
        reader_sniff_label_708.confidential = true;
        writer_sniff_label_708.confidential = true;
        lineNumber = 303;
        moduleName = "sniff";
        lineNumber = 302
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], string707)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'label' to be of type Unknown"))
        obj659.mutable = true;
        sourceObject = obj659;
        superDepth = origSuperDepth;
      }
      obj_init_659.apply(obj659, []);
      return obj659
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func658.paramCounts = [
    1,
  ];
  func658.variableArities = [
    false,
  ];
  this.methods["value"] = func658;
  func658.definitionLine = 298;
  func658.definitionModule = "sniff";
  var func709 = function(argcv) {
    var curarg = 1;
    var var_b = arguments[curarg];
    curarg++;
    var inheritingObject = arguments[curarg++];
    var returnTarget = invocationCount;
    invocationCount++;
    try {
      var obj710 = Grace_allocObject();
      obj710.definitionModule = "sniff";
      obj710.definitionLine = 299;
      var inho710 = inheritingObject;
      while (inho710.superobj) inho710 = inho710.superobj;
      inho710.superobj = obj710;
      obj710.data = inheritingObject.data;
      obj710.outer = this;
      var reader_sniff_outer_711 = function() {
        return this.outer;
      }
      obj710.methods["outer"] = reader_sniff_outer_711;
      function obj_init_710() {
        var origSuperDepth = superDepth;
        superDepth = obj710;
        obj710.annotations = [];
        var func712 = function(argcv) {
          var curarg = 1;
          var var_ctx = arguments[curarg];
          curarg++;
          if (argcv[0] !=  func712.paramCounts[0])
            callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
          var returnTarget = invocationCount;
          invocationCount++;
          moduleName = "sniff";
          try {
            lineNumber = 305
            lineNumber = 309
            lineNumber = 304
            onSelf = true;
            var call713 = callmethod(this, "colour", [0]);
            var call714 = callmethod(var_ctx,"fillStyle:=", [1], call713);
            lineNumber = 306
            lineNumber = 309
            lineNumber = 305
            var string715 = new GraceString("20px sans-serif");
            var call716 = callmethod(var_ctx,"font:=", [1], string715);
            lineNumber = 311
            var if717 = var_done;
            lineNumber = 306
            var string718 = new GraceString("");
            onSelf = true;
            var call720 = callmethod(this, "label", [0]);
            var opresult722 = callmethod(call720, "!=", [1], string718);
            if (Grace_isTrue(opresult722)) {
              lineNumber = 307
              var string723 = new GraceString("");
              var call725 = callmethod(var_b,"apply", [0]);
              var string727 = new GraceString(" ");
              onSelf = true;
              var call729 = callmethod(this, "label", [0]);
              var string731 = new GraceString("");
              var opresult733 = callmethod(string731, "++", [1], call729);
              var opresult735 = callmethod(opresult733, "++", [1], string727);
              var opresult737 = callmethod(opresult735, "++", [1], call725);
              var opresult739 = callmethod(opresult737, "++", [1], string723);
              onSelf = true;
              var call740 = callmethod(this, "x", [0]);
              onSelf = true;
              var call741 = callmethod(this, "y", [0]);
              var call742 = callmethod(var_ctx,"fillText", [3], opresult739, call740, call741);
              if717 = call742;
            } else {
              lineNumber = 309
              var string743 = new GraceString("");
              var call745 = callmethod(var_b,"apply", [0]);
              var string747 = new GraceString("");
              var opresult749 = callmethod(string747, "++", [1], call745);
              var opresult751 = callmethod(opresult749, "++", [1], string743);
              onSelf = true;
              var call752 = callmethod(this, "x", [0]);
              onSelf = true;
              var call753 = callmethod(this, "y", [0]);
              var call754 = callmethod(var_ctx,"fillText", [3], opresult751, call752, call753);
              if717 = call754;
            }
            return if717
          } catch(e) {
            if ((e.exctype == 'return') && (e.target == returnTarget)) {
              return e.returnvalue;
            } else {
              throw e;
            }
          }
        }
        func712.paramCounts = [
          1,
        ];
        func712.variableArities = [
          false,
        ];
        obj710.methods["draw"] = func712;
        func712.definitionLine = 303;
        func712.definitionModule = "sniff";
        sourceObject = obj710;
        lineNumber = 300
        var call755 = callmethod(var_drawable,"new()object", [0, 1], this);
        obj710.superobj = call755;
        obj710._value = call755._value;
        sourceObject = obj710;
        lineNumber = 301
        var string756 = new GraceString("blue");
        obj710.data["colour"] = string756;
        var reader_sniff_colour_757 = function() {
          return this.data["colour"];
        }
        obj710.methods["colour"] = reader_sniff_colour_757;
        obj710.data["colour"] = string756;
        var writer_sniff_colour_757 = function(argcv, o) {
          this.data["colour"] = o;
        }
        obj710.methods["colour:="] = writer_sniff_colour_757;
        reader_sniff_colour_757.confidential = true;
        writer_sniff_colour_757.confidential = true;
        lineNumber = 302;
        moduleName = "sniff";
        lineNumber = 301
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], string756)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'colour' to be of type Unknown"))
        obj710.mutable = true;
        sourceObject = obj710;
        lineNumber = 302
        var string758 = new GraceString("");
        obj710.data["label"] = string758;
        var reader_sniff_label_759 = function() {
          return this.data["label"];
        }
        obj710.methods["label"] = reader_sniff_label_759;
        obj710.data["label"] = string758;
        var writer_sniff_label_759 = function(argcv, o) {
          this.data["label"] = o;
        }
        obj710.methods["label:="] = writer_sniff_label_759;
        reader_sniff_label_759.confidential = true;
        writer_sniff_label_759.confidential = true;
        lineNumber = 303;
        moduleName = "sniff";
        lineNumber = 302
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], string758)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of var 'label' to be of type Unknown"))
        obj710.mutable = true;
        sourceObject = obj710;
        superDepth = origSuperDepth;
      }
      obj_init_710.apply(inheritingObject, []);
      return obj710
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  this.methods["value()object"] = func709;
  lineNumber = 328
  var func760 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func760.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (clear)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      lineNumber = 329
      var string761 = new GraceString("2d");
      var call762 = callmethod(var_backingCanvas,"getContext", [1], string761);
      var var_ctx = call762;
      lineNumber = 329;
      moduleName = "sniff";
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_ctx)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of def 'ctx' to be of type Unknown"))
      lineNumber = 331
      lineNumber = 309
      lineNumber = 330
      var call763 = callmethod(var_ctx,"fillStyle:=", [1], var_backgroundColour);
      lineNumber = 331
      var call764 = callmethod(var_ctx,"fillRect", [4], new GraceNum(0), new GraceNum(0), var_canvasWidth, var_canvasHeight);
      return call764
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func760.paramCounts = [
    0,
  ];
  func760.variableArities = [
    false,
  ];
  this.methods["clear"] = func760;
  func760.definitionLine = 328;
  func760.definitionModule = "sniff";
  lineNumber = 333
  var func765 = function(argcv) {
    var curarg = 1;
    var var_b = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func765.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (always)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      lineNumber = 334
      var call766 = callmethod(var_stepBlocks,"push", [1], var_b);
      return call766
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func765.paramCounts = [
    1,
  ];
  func765.variableArities = [
    false,
  ];
  this.methods["always"] = func765;
  func765.definitionLine = 333;
  func765.definitionModule = "sniff";
  lineNumber = 336
  var func767 = function(argcv) {
    var curarg = 1;
    var var_c = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func767.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (whenever)"));
    var var_b = arguments[curarg];
    curarg++;
    if (argcv[1] !=  func767.paramCounts[1])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (do)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      lineNumber = 337
      lineNumber = 339
      var block768 = Grace_allocObject();
      block768.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block768.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block768.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block768.methods["match"] = GraceBlock_match;
      block768.methods["prefix?"] = GraceBlock_lift;
      block768.receiver = this;
      block768.className = 'block<sniff:339>';
      block768.real = function(
      ) {
        sourceObject = this;
        var if769 = var_done;
        lineNumber = 338
        var call770 = callmethod(var_c,"apply", [0]);
        if (Grace_isTrue(call770)) {
          var call771 = callmethod(var_b,"apply", [0]);
          if769 = call771;
        }
        return if769;
      };
      lineNumber = 337
      var call772 = callmethod(var_stepBlocks,"push", [1], block768);
      return call772
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func767.paramCounts = [
    1,
    1,
  ];
  func767.variableArities = [
    false,
    false,
  ];
  this.methods["whenever()do"] = func767;
  func767.definitionLine = 336;
  func767.definitionModule = "sniff";
  lineNumber = 341
  var func773 = function(argcv) {
    var curarg = 1;
    var var_h = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func773.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (hue)"));
    var var_s = arguments[curarg];
    curarg++;
    if (argcv[1] !=  func773.paramCounts[1])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (saturation)"));
    var var_l = arguments[curarg];
    curarg++;
    if (argcv[2] !=  func773.paramCounts[2])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 3 (lightness)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      lineNumber = 343
      lineNumber = 342
      var string774 = new GraceString("%)");
      var string777 = new GraceString("%, ");
      var string780 = new GraceString(", ");
      var string783 = new GraceString("hsl(");
      var opresult785 = callmethod(string783, "++", [1], var_h);
      var opresult787 = callmethod(opresult785, "++", [1], string780);
      var opresult789 = callmethod(opresult787, "++", [1], var_s);
      var opresult791 = callmethod(opresult789, "++", [1], string777);
      var opresult793 = callmethod(opresult791, "++", [1], var_l);
      var opresult795 = callmethod(opresult793, "++", [1], string774);
      return opresult795
      return undefined
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func773.paramCounts = [
    1,
    1,
    1,
  ];
  func773.variableArities = [
    false,
    false,
    false,
  ];
  this.methods["hue()saturation()lightness"] = func773;
  func773.definitionLine = 341;
  func773.definitionModule = "sniff";
  lineNumber = 344
  var func796 = function(argcv) {
    var curarg = 1;
    var var_h = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func796.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (h)"));
    var var_s = arguments[curarg];
    curarg++;
    if (argcv[1] !=  func796.paramCounts[1])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (s)"));
    var var_l = arguments[curarg];
    curarg++;
    if (argcv[2] !=  func796.paramCounts[2])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 3 (l)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      lineNumber = 345
      onSelf = true;
      var call797 = callmethod(this, "hue()saturation()lightness", [1, 1, 1], var_h, var_s, var_l);
      return call797
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func796.paramCounts = [
    1,
    1,
    1,
  ];
  func796.variableArities = [
    false,
    false,
    false,
  ];
  this.methods["h()s()l"] = func796;
  func796.definitionLine = 344;
  func796.definitionModule = "sniff";
  lineNumber = 347
  var func798 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func798.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (initialise)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      lineNumber = 351
      var if799 = var_done;
      lineNumber = 348
      if (Grace_isTrue(var_initialised)) {
        lineNumber = 350
        lineNumber = 349
        var bool800 = new GraceBoolean(false)
        return bool800
        if799 = undefined;
      }
      lineNumber = 352
      lineNumber = 351
      var bool801 = new GraceBoolean(true)
      var_initialised = bool801;
      lineNumber = 353
      lineNumber = 352
      var call802 = callmethod(var_dom,"document", [0]);
      var_document = call802;
      lineNumber = 353
      var string803 = new GraceString("standard-canvas");
      var call804 = callmethod(var_document,"getElementById", [1], string803);
      var_canvas = call804;
      lineNumber = 355
      lineNumber = 354
      var call805 = callmethod(var_canvas,"width", [0]);
      var_canvasWidth = call805;
      lineNumber = 356
      lineNumber = 355
      var call806 = callmethod(var_canvas,"height", [0]);
      var_canvasHeight = call806;
      lineNumber = 356
      var quotient809 = callmethod(var_canvasWidth, "/", [1], new GraceNum(2));
      var quotient812 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
      var call813 = callmethod(var_point,"x()y", [1, 1], quotient809, quotient812);
      var_centre = call813;
      lineNumber = 357
      var quotient816 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
      var call817 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), quotient816);
      var_leftCentre = call817;
      lineNumber = 358
      var quotient820 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
      var call821 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, quotient820);
      var_rightCentre = call821;
      lineNumber = 362
      lineNumber = 355
      lineNumber = 359
      var call822 = callmethod(var_mouse,"position:=", [1], var_centre);
      lineNumber = 367
      var block823 = Grace_allocObject();
      block823.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block823.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block823.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block823.methods["match"] = GraceBlock_match;
      block823.methods["prefix?"] = GraceBlock_lift;
      block823.receiver = this;
      block823.className = 'block<sniff:367>';
      block823.real = function(
        var_ev
      ) {
        sourceObject = this;
        lineNumber = 364
        lineNumber = 363
        var call825 = callmethod(var_canvas,"offsetWidth", [0]);
        var call827 = callmethod(var_canvas,"offsetLeft", [0]);
        var call829 = callmethod(var_ev,"clientX", [0]);
        var diff831 = callmethod(call829, "-", [1], call827);
        var quotient833 = callmethod(diff831, "/", [1], call825);
        var prod835 = callmethod(quotient833, "*", [1], var_canvasHeight);
        var var_x = prod835;
        lineNumber = 364;
        moduleName = "sniff";
        lineNumber = 363
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_x)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'x' to be of type Unknown"))
        lineNumber = 365
        lineNumber = 364
        var call837 = callmethod(var_canvas,"offsetHeight", [0]);
        var call840 = callmethod(var_canvas,"offsetTop", [0]);
        var call842 = callmethod(var_ev,"clientY", [0]);
        var diff844 = callmethod(call842, "-", [1], call840);
        var diff846 = callmethod(diff844, "-", [1], new GraceNum(7));
        var quotient848 = callmethod(diff846, "/", [1], call837);
        var prod850 = callmethod(quotient848, "*", [1], var_canvasHeight);
        var var_y = prod850;
        lineNumber = 365;
        moduleName = "sniff";
        lineNumber = 364
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_y)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'y' to be of type Unknown"))
        lineNumber = 365
        lineNumber = 364
        lineNumber = 365
        var call851 = callmethod(var_point,"x()y", [1, 1], var_x, var_y);
        var call852 = callmethod(var_mouse,"position:=", [1], call851);
        return call852;
      };
      var_mouseMoveListener = block823;
      lineNumber = 367
      var string853 = new GraceString("mousemove");
      var call854 = callmethod(var_canvas,"addEventListener", [2], string853, var_mouseMoveListener);
      lineNumber = 383
      var block855 = Grace_allocObject();
      block855.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block855.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block855.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block855.methods["match"] = GraceBlock_match;
      block855.methods["prefix?"] = GraceBlock_lift;
      block855.receiver = this;
      block855.className = 'block<sniff:383>';
      block855.real = function(
        var_ev
      ) {
        sourceObject = this;
        lineNumber = 370
        lineNumber = 369
        var call857 = callmethod(var_canvas,"offsetWidth", [0]);
        var call859 = callmethod(var_canvas,"offsetLeft", [0]);
        var call861 = callmethod(var_ev,"clientX", [0]);
        var diff863 = callmethod(call861, "-", [1], call859);
        var quotient865 = callmethod(diff863, "/", [1], call857);
        var prod867 = callmethod(quotient865, "*", [1], var_canvasHeight);
        var var_x = prod867;
        lineNumber = 370;
        moduleName = "sniff";
        lineNumber = 369
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_x)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'x' to be of type Unknown"))
        lineNumber = 371
        lineNumber = 370
        var call869 = callmethod(var_canvas,"offsetHeight", [0]);
        var call871 = callmethod(var_canvas,"offsetTop", [0]);
        var call873 = callmethod(var_ev,"clientY", [0]);
        var diff875 = callmethod(call873, "-", [1], call871);
        var quotient877 = callmethod(diff875, "/", [1], call869);
        var prod879 = callmethod(quotient877, "*", [1], var_canvasHeight);
        var var_y = prod879;
        lineNumber = 371;
        moduleName = "sniff";
        lineNumber = 370
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_y)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'y' to be of type Unknown"))
        lineNumber = 375
        var if880 = var_done;
        lineNumber = 371
        var opresult883 = callmethod(var_y, "<", [1], new GraceNum(20));
        var diff887 = callmethod(var_canvasWidth, "-", [1], new GraceNum(20));
        var opresult890 = callmethod(var_x, ">", [1], diff887);
        var opresult892 = callmethod(opresult890, "&&", [1], opresult883);
        if (Grace_isTrue(opresult892)) {
          lineNumber = 372
          var call893 = callmethod(var_ev,"preventDefault", [0]);
          lineNumber = 373
          onSelf = true;
          var call894 = callmethod(this, "stop", [0]);
          if880 = call894;
        }
        lineNumber = 375
        var call895 = callmethod(var_point,"x()y", [1, 1], var_x, var_y);
        var var_p = call895;
        lineNumber = 375;
        moduleName = "sniff";
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_p)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'p' to be of type Unknown"))
        lineNumber = 376
        lineNumber = 382
        var block896 = Grace_allocObject();
        block896.methods["apply"] = function() {
          var args = Array.prototype.slice.call(arguments, 1);
          return this.real.apply(this.receiver, args);
        }
        block896.methods["applyIndirectly"] = function(argcv, a) {
          return this.real.apply(this.receiver, a._value);
        }
        block896.methods["outer"] = function() {
          return callmethod(this.receiver, 'outer', [0]);
        }
        block896.methods["match"] = GraceBlock_match;
        block896.methods["prefix?"] = GraceBlock_lift;
        block896.receiver = this;
        block896.className = 'block<sniff:382>';
        block896.real = function(
          var_obj
        ) {
          sourceObject = this;
          lineNumber = 381
          var if897 = var_done;
          lineNumber = 377
          var call898 = callmethod(var_obj,"isPointOver", [1], var_p);
          if (Grace_isTrue(call898)) {
            lineNumber = 378
            var call899 = callmethod(var_obj,"mousedown", [0]);
            lineNumber = 379
            var call900 = callmethod(var_ev,"preventDefault", [0]);
            if897 = call900;
          }
          return if897;
        };
        var call901 = callmethod(Grace_prelude,"for()do", [1, 1], var_registeredObjects, block896);
        return call901;
      };
      var_mouseDownListener = block855;
      lineNumber = 383
      var string902 = new GraceString("mousedown");
      var call903 = callmethod(var_canvas,"addEventListener", [2], string902, var_mouseDownListener);
      return call903
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func798.paramCounts = [
    0,
  ];
  func798.variableArities = [
    false,
  ];
  this.methods["initialise"] = func798;
  func798.definitionLine = 347;
  func798.definitionModule = "sniff";
  lineNumber = 385
  var func904 = function(argcv) {
    var curarg = 1;
    var var_col = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func904.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (background)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      lineNumber = 387
      lineNumber = 386
      var_backgroundColour = var_col;
      return var_col
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func904.paramCounts = [
    1,
  ];
  func904.variableArities = [
    false,
  ];
  this.methods["background"] = func904;
  func904.definitionLine = 385;
  func904.definitionModule = "sniff";
  lineNumber = 388
  var func905 = function(argcv) {
    var curarg = 1;
    var var_n = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func905.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (random)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      lineNumber = 389
      var call906 = callmethod(var_randomModule,"random", [0]);
      var prod909 = callmethod(var_n, "*", [1], call906);
      var call910 = callmethod(prod909,"truncate", [0]);
      return call910
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func905.paramCounts = [
    1,
  ];
  func905.variableArities = [
    false,
  ];
  this.methods["random"] = func905;
  func905.definitionLine = 388;
  func905.definitionModule = "sniff";
  lineNumber = 391
  var func911 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func911.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (randomPoint)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      lineNumber = 392
      var prod914 = callmethod(var_canvasWidth, "*", [1], new GraceNum(0.8));
      onSelf = true;
      var call915 = callmethod(this, "random", [1], prod914);
      var quotient919 = callmethod(var_canvasWidth, "/", [1], new GraceNum(10));
      var opresult921 = callmethod(quotient919, "+", [1], call915);
      lineNumber = 393
      var prod924 = callmethod(var_canvasHeight, "*", [1], new GraceNum(0.8));
      onSelf = true;
      var call925 = callmethod(this, "random", [1], prod924);
      var quotient929 = callmethod(var_canvasHeight, "/", [1], new GraceNum(10));
      var opresult931 = callmethod(quotient929, "+", [1], call925);
      lineNumber = 392
      var call932 = callmethod(var_point,"x()y", [1, 1], opresult921, opresult931);
      return call932
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func911.paramCounts = [
    0,
  ];
  func911.variableArities = [
    false,
  ];
  this.methods["randomPoint"] = func911;
  func911.definitionLine = 391;
  func911.definitionModule = "sniff";
  lineNumber = 395
  var func933 = function(argcv) {
    var curarg = 1;
    var var_url = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func933.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (playSound)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      lineNumber = 407
      var if934 = var_done;
      lineNumber = 396
      var call935 = callmethod(var_audioTags,"contains", [1], var_url);
      if (Grace_isTrue(call935)) {
        lineNumber = 397
        var call936 = callmethod(var_audioTags,"get", [1], var_url);
        var var_audio = call936;
        lineNumber = 397;
        moduleName = "sniff";
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_audio)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'audio' to be of type Unknown"))
        lineNumber = 399
        lineNumber = 389
        lineNumber = 398
        var call937 = callmethod(var_audio,"currentTime:=", [1], new GraceNum(0));
        lineNumber = 399
        var call938 = callmethod(var_audio,"play", [0]);
        if934 = call938;
      } else {
        lineNumber = 401
        var string939 = new GraceString("audio");
        var call940 = callmethod(var_dom,"document", [0]);
        var call941 = callmethod(call940,"createElement", [1], string939);
        var var_audio = call941;
        lineNumber = 401;
        moduleName = "sniff";
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_audio)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'audio' to be of type Unknown"))
        lineNumber = 402
        var call942 = callmethod(var_audioTags,"put", [2], var_url, var_audio);
        lineNumber = 404
        lineNumber = 401
        lineNumber = 403
        var call943 = callmethod(var_audio,"src:=", [1], var_url);
        lineNumber = 404
        var call944 = callmethod(var_audio,"load", [0]);
        lineNumber = 405
        var call945 = callmethod(var_audio,"play", [0]);
        if934 = call945;
      }
      return if934
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func933.paramCounts = [
    1,
  ];
  func933.variableArities = [
    false,
  ];
  this.methods["playSound"] = func933;
  func933.definitionLine = 395;
  func933.definitionModule = "sniff";
  lineNumber = 408
  var func946 = function(argcv) {
    var curarg = 1;
    var var_url = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func946.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stopSound)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      lineNumber = 413
      var if947 = var_done;
      lineNumber = 409
      var call948 = callmethod(var_audioTags,"contains", [1], var_url);
      if (Grace_isTrue(call948)) {
        lineNumber = 410
        var call949 = callmethod(var_audioTags,"get", [1], var_url);
        var var_audio = call949;
        lineNumber = 410;
        moduleName = "sniff";
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_audio)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'audio' to be of type Unknown"))
        lineNumber = 411
        var call950 = callmethod(var_audio,"pause", [0]);
        if947 = call950;
      }
      return if947
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func946.paramCounts = [
    1,
  ];
  func946.variableArities = [
    false,
  ];
  this.methods["stopSound"] = func946;
  func946.definitionLine = 408;
  func946.definitionModule = "sniff";
  lineNumber = 414
  var func951 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func951.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      lineNumber = 415
      onSelf = true;
      var call952 = callmethod(this, "initialise", [0]);
      lineNumber = 417
      lineNumber = 416
      var bool953 = new GraceBoolean(false)
      var_stopRunning = bool953;
      lineNumber = 417
      var string954 = new GraceString("canvas");
      var call955 = callmethod(var_dom,"document", [0]);
      var call956 = callmethod(call955,"createElement", [1], string954);
      var_backingCanvas = call956;
      lineNumber = 419
      lineNumber = 417
      lineNumber = 418
      var call957 = callmethod(var_backingCanvas,"height:=", [1], var_canvasHeight);
      lineNumber = 420
      lineNumber = 417
      lineNumber = 419
      var call958 = callmethod(var_backingCanvas,"width:=", [1], var_canvasWidth);
      lineNumber = 420
      var string959 = new GraceString("2d");
      var call960 = callmethod(var_backingCanvas,"getContext", [1], string959);
      var_backingContext = call960;
      lineNumber = 421
      var string961 = new GraceString("2d");
      var call962 = callmethod(var_canvas,"getContext", [1], string961);
      var var_mctx = call962;
      lineNumber = 421;
      moduleName = "sniff";
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_mctx)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of def 'mctx' to be of type Unknown"))
      lineNumber = 422
      var block963 = Grace_allocObject();
      block963.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block963.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block963.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block963.methods["match"] = GraceBlock_match;
      block963.methods["prefix?"] = GraceBlock_lift;
      block963.receiver = this;
      block963.className = 'block<sniff:422>';
      block963.real = function(
      ) {
        sourceObject = this;
        var call964 = callmethod(var_stopRunning,"prefix!", [0]);
        return call964;
      };
      lineNumber = 438
      var block965 = Grace_allocObject();
      block965.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block965.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block965.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block965.methods["match"] = GraceBlock_match;
      block965.methods["prefix?"] = GraceBlock_lift;
      block965.receiver = this;
      block965.className = 'block<sniff:438>';
      block965.real = function(
      ) {
        sourceObject = this;
        lineNumber = 423
        lineNumber = 426
        var block966 = Grace_allocObject();
        block966.methods["apply"] = function() {
          var args = Array.prototype.slice.call(arguments, 1);
          return this.real.apply(this.receiver, args);
        }
        block966.methods["applyIndirectly"] = function(argcv, a) {
          return this.real.apply(this.receiver, a._value);
        }
        block966.methods["outer"] = function() {
          return callmethod(this.receiver, 'outer', [0]);
        }
        block966.methods["match"] = GraceBlock_match;
        block966.methods["prefix?"] = GraceBlock_lift;
        block966.receiver = this;
        block966.className = 'block<sniff:426>';
        block966.real = function(
          var_obj
        ) {
          sourceObject = this;
          lineNumber = 424
          var call967 = callmethod(var_obj,"step", [0]);
          return call967;
        };
        var call968 = callmethod(Grace_prelude,"for()do", [1, 1], var_registeredObjects, block966);
        lineNumber = 426
        lineNumber = 429
        var block969 = Grace_allocObject();
        block969.methods["apply"] = function() {
          var args = Array.prototype.slice.call(arguments, 1);
          return this.real.apply(this.receiver, args);
        }
        block969.methods["applyIndirectly"] = function(argcv, a) {
          return this.real.apply(this.receiver, a._value);
        }
        block969.methods["outer"] = function() {
          return callmethod(this.receiver, 'outer', [0]);
        }
        block969.methods["match"] = GraceBlock_match;
        block969.methods["prefix?"] = GraceBlock_lift;
        block969.receiver = this;
        block969.className = 'block<sniff:429>';
        block969.real = function(
          var_step
        ) {
          sourceObject = this;
          lineNumber = 427
          var call970 = callmethod(var_step,"apply", [0]);
          return call970;
        };
        var call971 = callmethod(Grace_prelude,"for()do", [1, 1], var_stepBlocks, block969);
        lineNumber = 430
        lineNumber = 427
        lineNumber = 429
        var call972 = callmethod(var_mctx,"fillStyle:=", [1], var_backgroundColour);
        lineNumber = 430
        var call973 = callmethod(var_mctx,"fillRect", [4], new GraceNum(0), new GraceNum(0), var_canvasWidth, var_canvasHeight);
        lineNumber = 431
        var call974 = callmethod(var_mctx,"drawImage", [3], var_backingCanvas, new GraceNum(0), new GraceNum(0));
        lineNumber = 432
        lineNumber = 435
        var block975 = Grace_allocObject();
        block975.methods["apply"] = function() {
          var args = Array.prototype.slice.call(arguments, 1);
          return this.real.apply(this.receiver, args);
        }
        block975.methods["applyIndirectly"] = function(argcv, a) {
          return this.real.apply(this.receiver, a._value);
        }
        block975.methods["outer"] = function() {
          return callmethod(this.receiver, 'outer', [0]);
        }
        block975.methods["match"] = GraceBlock_match;
        block975.methods["prefix?"] = GraceBlock_lift;
        block975.receiver = this;
        block975.className = 'block<sniff:435>';
        block975.real = function(
          var_obj
        ) {
          sourceObject = this;
          lineNumber = 433
          var call976 = callmethod(var_obj,"draw", [1], var_mctx);
          return call976;
        };
        var call977 = callmethod(Grace_prelude,"for()do", [1, 1], var_registeredObjects, block975);
        lineNumber = 436
        lineNumber = 427
        lineNumber = 435
        var string978 = new GraceString("red");
        var call979 = callmethod(var_mctx,"fillStyle:=", [1], string978);
        lineNumber = 436
        var diff982 = callmethod(var_canvasWidth, "-", [1], new GraceNum(20));
        var call983 = callmethod(var_mctx,"fillRect", [4], diff982, new GraceNum(0), new GraceNum(20), new GraceNum(20));
        return call983;
      };
      lineNumber = 422
      var call984 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block963, new GraceNum(10), block965);
      return call984
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func951.paramCounts = [
    0,
  ];
  func951.variableArities = [
    false,
  ];
  this.methods["start"] = func951;
  func951.definitionLine = 414;
  func951.definitionModule = "sniff";
  lineNumber = 439
  var func985 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func985.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      lineNumber = 441
      lineNumber = 440
      var bool986 = new GraceBoolean(true)
      var_stopRunning = bool986;
      lineNumber = 441
      var string987 = new GraceString("mousedown");
      var call988 = callmethod(var_canvas,"removeEventListener", [2], string987, var_mouseDownListener);
      lineNumber = 442
      var string989 = new GraceString("mousemove");
      var call990 = callmethod(var_canvas,"removeEventListener", [2], string989, var_mouseMoveListener);
      return call990
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func985.paramCounts = [
    0,
  ];
  func985.variableArities = [
    false,
  ];
  this.methods["stop"] = func985;
  func985.definitionLine = 439;
  func985.definitionModule = "sniff";
  lineNumber = 444
  var func991 = function(argcv) {
    var curarg = 1;
    var var_module = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func991.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (atModuleEnd)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      lineNumber = 445
      onSelf = true;
      var call992 = callmethod(this, "start", [0]);
      return call992
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func991.paramCounts = [
    1,
  ];
  func991.variableArities = [
    false,
  ];
  this.methods["atModuleEnd"] = func991;
  func991.definitionLine = 444;
  func991.definitionModule = "sniff";
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
  // Import of math
  if (typeof gracecode_math == 'undefined')
    throw new GraceExceptionPacket(RuntimeErrorObject, 
      new GraceString('could not find module randomModule'));
  var var_randomModule = do_import("math", gracecode_math);
  lineNumber = 5
  // Import of StandardPrelude
  if (typeof gracecode_StandardPrelude == 'undefined')
    throw new GraceExceptionPacket(RuntimeErrorObject, 
      new GraceString('could not find module sp'));
  var var_sp = do_import("StandardPrelude", gracecode_StandardPrelude);
  lineNumber = 6
  var call993 = callmethod(var_sp,"new()object", [0, 1], this);
  this.superobj = call993;
  this.data = call993.data;
  this._value = call993._value;
  lineNumber = 8
  lineNumber = 9
  var var_document;
  lineNumber = 427
  var func994 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func994.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (document)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      lineNumber = 8
      return var_document
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func994.paramCounts = [
    0,
  ];
  func994.variableArities = [
    false,
  ];
  this.methods["document"] = func994;
  func994.definitionLine = 427;
  func994.definitionModule = "sniff";
  lineNumber = 427
  var func995 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func995.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (document:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      var_document = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func995.paramCounts = [
    1,
  ];
  func995.variableArities = [
    false,
  ];
  this.methods["document:="] = func995;
  func995.definitionLine = 427;
  func995.definitionModule = "sniff";
  lineNumber = 10
  var var_canvas;
  lineNumber = 427
  var func996 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func996.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (canvas)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      lineNumber = 9
      return var_canvas
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func996.paramCounts = [
    0,
  ];
  func996.variableArities = [
    false,
  ];
  this.methods["canvas"] = func996;
  func996.definitionLine = 427;
  func996.definitionModule = "sniff";
  lineNumber = 427
  var func997 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func997.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (canvas:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      var_canvas = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func997.paramCounts = [
    1,
  ];
  func997.variableArities = [
    false,
  ];
  this.methods["canvas:="] = func997;
  func997.definitionLine = 427;
  func997.definitionModule = "sniff";
  lineNumber = 11
  var var_backingCanvas;
  lineNumber = 427
  var func998 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func998.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (backingCanvas)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      lineNumber = 10
      return var_backingCanvas
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func998.paramCounts = [
    0,
  ];
  func998.variableArities = [
    false,
  ];
  this.methods["backingCanvas"] = func998;
  func998.definitionLine = 427;
  func998.definitionModule = "sniff";
  lineNumber = 427
  var func999 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func999.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (backingCanvas:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      var_backingCanvas = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func999.paramCounts = [
    1,
  ];
  func999.variableArities = [
    false,
  ];
  this.methods["backingCanvas:="] = func999;
  func999.definitionLine = 427;
  func999.definitionModule = "sniff";
  lineNumber = 12
  var var_backingContext;
  lineNumber = 427
  var func1000 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1000.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (backingContext)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      lineNumber = 11
      return var_backingContext
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1000.paramCounts = [
    0,
  ];
  func1000.variableArities = [
    false,
  ];
  this.methods["backingContext"] = func1000;
  func1000.definitionLine = 427;
  func1000.definitionModule = "sniff";
  lineNumber = 427
  var func1001 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1001.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (backingContext:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      var_backingContext = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1001.paramCounts = [
    1,
  ];
  func1001.variableArities = [
    false,
  ];
  this.methods["backingContext:="] = func1001;
  func1001.definitionLine = 427;
  func1001.definitionModule = "sniff";
  lineNumber = 13
  var var_mouseDownListener;
  lineNumber = 427
  var func1002 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1002.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseDownListener)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      lineNumber = 12
      return var_mouseDownListener
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1002.paramCounts = [
    0,
  ];
  func1002.variableArities = [
    false,
  ];
  this.methods["mouseDownListener"] = func1002;
  func1002.definitionLine = 427;
  func1002.definitionModule = "sniff";
  lineNumber = 427
  var func1003 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1003.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseDownListener:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      var_mouseDownListener = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1003.paramCounts = [
    1,
  ];
  func1003.variableArities = [
    false,
  ];
  this.methods["mouseDownListener:="] = func1003;
  func1003.definitionLine = 427;
  func1003.definitionModule = "sniff";
  lineNumber = 15
  var var_mouseMoveListener;
  lineNumber = 427
  var func1004 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1004.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseMoveListener)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      lineNumber = 13
      return var_mouseMoveListener
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1004.paramCounts = [
    0,
  ];
  func1004.variableArities = [
    false,
  ];
  this.methods["mouseMoveListener"] = func1004;
  func1004.definitionLine = 427;
  func1004.definitionModule = "sniff";
  lineNumber = 427
  var func1005 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1005.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouseMoveListener:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      var_mouseMoveListener = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1005.paramCounts = [
    1,
  ];
  func1005.variableArities = [
    false,
  ];
  this.methods["mouseMoveListener:="] = func1005;
  func1005.definitionLine = 427;
  func1005.definitionModule = "sniff";
  lineNumber = 15
  lineNumber = 16
  lineNumber = 15
  var call1006 = callmethod(var_dom,"window", [0]);
  var call1007 = callmethod(call1006,"Math", [0]);
  var var_trig = call1007;
  var func1008 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1008.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (trig)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      return var_trig
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1008.paramCounts = [
    0,
  ];
  func1008.variableArities = [
    false,
  ];
  this.methods["trig"] = func1008;
  func1008.definitionLine = 15;
  func1008.definitionModule = "sniff";
  lineNumber = 16;
  moduleName = "sniff";
  lineNumber = 15
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_trig)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'trig' to be of type Unknown"))
  lineNumber = 18
  lineNumber = 16
  var var_PI = new GraceNum(3.14159);
  lineNumber = 15
  var func1009 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1009.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (PI)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      lineNumber = 16
      return var_PI
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1009.paramCounts = [
    0,
  ];
  func1009.variableArities = [
    false,
  ];
  this.methods["PI"] = func1009;
  func1009.definitionLine = 15;
  func1009.definitionModule = "sniff";
  lineNumber = 18;
  moduleName = "sniff";
  lineNumber = 16
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_PI)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'PI' to be of type Unknown"))
  lineNumber = 18
  lineNumber = 19
  lineNumber = 18
  var bool1010 = new GraceBoolean(false)
  var var_stopRunning = bool1010;
  lineNumber = 15
  var func1011 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1011.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stopRunning)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      lineNumber = 18
      return var_stopRunning
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1011.paramCounts = [
    0,
  ];
  func1011.variableArities = [
    false,
  ];
  this.methods["stopRunning"] = func1011;
  func1011.definitionLine = 15;
  func1011.definitionModule = "sniff";
  lineNumber = 15
  var func1012 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1012.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stopRunning:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      var_stopRunning = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1012.paramCounts = [
    1,
  ];
  func1012.variableArities = [
    false,
  ];
  this.methods["stopRunning:="] = func1012;
  func1012.definitionLine = 15;
  func1012.definitionModule = "sniff";
  lineNumber = 19;
  moduleName = "sniff";
  lineNumber = 18
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_stopRunning)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'stopRunning' to be of type Unknown"))
  lineNumber = 20
  lineNumber = 19
  var bool1013 = new GraceBoolean(false)
  var var_initialised = bool1013;
  lineNumber = 15
  var func1014 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1014.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (initialised)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      lineNumber = 19
      return var_initialised
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1014.paramCounts = [
    0,
  ];
  func1014.variableArities = [
    false,
  ];
  this.methods["initialised"] = func1014;
  func1014.definitionLine = 15;
  func1014.definitionModule = "sniff";
  lineNumber = 15
  var func1015 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1015.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (initialised:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      var_initialised = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1015.paramCounts = [
    1,
  ];
  func1015.variableArities = [
    false,
  ];
  this.methods["initialised:="] = func1015;
  func1015.definitionLine = 15;
  func1015.definitionModule = "sniff";
  lineNumber = 20;
  moduleName = "sniff";
  lineNumber = 19
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_initialised)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'initialised' to be of type Unknown"))
  lineNumber = 21
  lineNumber = 20
  var string1016 = new GraceString("white");
  var var_backgroundColour = string1016;
  lineNumber = 15
  var func1017 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1017.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (backgroundColour)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      lineNumber = 20
      return var_backgroundColour
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1017.paramCounts = [
    0,
  ];
  func1017.variableArities = [
    false,
  ];
  this.methods["backgroundColour"] = func1017;
  func1017.definitionLine = 15;
  func1017.definitionModule = "sniff";
  lineNumber = 15
  var func1018 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1018.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (backgroundColour:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      var_backgroundColour = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1018.paramCounts = [
    1,
  ];
  func1018.variableArities = [
    false,
  ];
  this.methods["backgroundColour:="] = func1018;
  func1018.definitionLine = 15;
  func1018.definitionModule = "sniff";
  lineNumber = 21;
  moduleName = "sniff";
  lineNumber = 20
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_backgroundColour)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'backgroundColour' to be of type Unknown"))
  lineNumber = 22
  lineNumber = 21
  var call1019 = callmethod(var_collections,"list", [0]);
  var call1020 = callmethod(call1019,"new", [0]);
  var var_registeredObjects = call1020;
  var func1021 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1021.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (registeredObjects)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      return var_registeredObjects
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1021.paramCounts = [
    0,
  ];
  func1021.variableArities = [
    false,
  ];
  this.methods["registeredObjects"] = func1021;
  func1021.definitionLine = 21;
  func1021.definitionModule = "sniff";
  lineNumber = 22;
  moduleName = "sniff";
  lineNumber = 21
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_registeredObjects)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'registeredObjects' to be of type Unknown"))
  lineNumber = 23
  lineNumber = 22
  var call1022 = callmethod(var_collections,"list", [0]);
  var call1023 = callmethod(call1022,"new", [0]);
  var var_stepBlocks = call1023;
  var func1024 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1024.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stepBlocks)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      return var_stepBlocks
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1024.paramCounts = [
    0,
  ];
  func1024.variableArities = [
    false,
  ];
  this.methods["stepBlocks"] = func1024;
  func1024.definitionLine = 22;
  func1024.definitionModule = "sniff";
  lineNumber = 23;
  moduleName = "sniff";
  lineNumber = 22
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_stepBlocks)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'stepBlocks' to be of type Unknown"))
  lineNumber = 25
  lineNumber = 23
  var call1025 = callmethod(var_collections,"map", [0]);
  var call1026 = callmethod(call1025,"new", [0]);
  var var_audioTags = call1026;
  var func1027 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1027.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (audioTags)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      return var_audioTags
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1027.paramCounts = [
    0,
  ];
  func1027.variableArities = [
    false,
  ];
  this.methods["audioTags"] = func1027;
  func1027.definitionLine = 23;
  func1027.definitionModule = "sniff";
  lineNumber = 25;
  moduleName = "sniff";
  lineNumber = 23
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_audioTags)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'audioTags' to be of type Unknown"))
  lineNumber = 25
  lineNumber = 26
  var var_canvasWidth;
  lineNumber = 23
  var func1028 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1028.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (canvasWidth)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      lineNumber = 25
      return var_canvasWidth
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1028.paramCounts = [
    0,
  ];
  func1028.variableArities = [
    false,
  ];
  this.methods["canvasWidth"] = func1028;
  func1028.definitionLine = 23;
  func1028.definitionModule = "sniff";
  lineNumber = 23
  var func1029 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1029.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (canvasWidth:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      var_canvasWidth = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1029.paramCounts = [
    1,
  ];
  func1029.variableArities = [
    false,
  ];
  this.methods["canvasWidth:="] = func1029;
  func1029.definitionLine = 23;
  func1029.definitionModule = "sniff";
  lineNumber = 28
  var var_canvasHeight;
  lineNumber = 23
  var func1030 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1030.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (canvasHeight)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      lineNumber = 26
      return var_canvasHeight
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1030.paramCounts = [
    0,
  ];
  func1030.variableArities = [
    false,
  ];
  this.methods["canvasHeight"] = func1030;
  func1030.definitionLine = 23;
  func1030.definitionModule = "sniff";
  lineNumber = 23
  var func1031 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1031.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (canvasHeight:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      var_canvasHeight = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1031.paramCounts = [
    1,
  ];
  func1031.variableArities = [
    false,
  ];
  this.methods["canvasHeight:="] = func1031;
  func1031.definitionLine = 23;
  func1031.definitionModule = "sniff";
  lineNumber = 28
  lineNumber = 29
  lineNumber = 28
  var string1032 = new GraceString("left");
  var var_left = string1032;
  lineNumber = 23
  var func1033 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1033.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (left)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      lineNumber = 28
      return var_left
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1033.paramCounts = [
    0,
  ];
  func1033.variableArities = [
    false,
  ];
  this.methods["left"] = func1033;
  func1033.definitionLine = 23;
  func1033.definitionModule = "sniff";
  lineNumber = 29;
  moduleName = "sniff";
  lineNumber = 28
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_left)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'left' to be of type Unknown"))
  lineNumber = 30
  lineNumber = 29
  var string1034 = new GraceString("right");
  var var_right = string1034;
  lineNumber = 23
  var func1035 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1035.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (right)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      lineNumber = 29
      return var_right
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1035.paramCounts = [
    0,
  ];
  func1035.variableArities = [
    false,
  ];
  this.methods["right"] = func1035;
  func1035.definitionLine = 23;
  func1035.definitionModule = "sniff";
  lineNumber = 30;
  moduleName = "sniff";
  lineNumber = 29
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_right)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'right' to be of type Unknown"))
  lineNumber = 31
  lineNumber = 30
  var string1036 = new GraceString("top");
  var var_top = string1036;
  lineNumber = 23
  var func1037 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1037.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (top)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      lineNumber = 30
      return var_top
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1037.paramCounts = [
    0,
  ];
  func1037.variableArities = [
    false,
  ];
  this.methods["top"] = func1037;
  func1037.definitionLine = 23;
  func1037.definitionModule = "sniff";
  lineNumber = 31;
  moduleName = "sniff";
  lineNumber = 30
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_top)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'top' to be of type Unknown"))
  lineNumber = 33
  lineNumber = 31
  var string1038 = new GraceString("bottom");
  var var_bottom = string1038;
  lineNumber = 23
  var func1039 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1039.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bottom)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      lineNumber = 31
      return var_bottom
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1039.paramCounts = [
    0,
  ];
  func1039.variableArities = [
    false,
  ];
  this.methods["bottom"] = func1039;
  func1039.definitionLine = 23;
  func1039.definitionModule = "sniff";
  lineNumber = 33;
  moduleName = "sniff";
  lineNumber = 31
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_bottom)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'bottom' to be of type Unknown"))
  lineNumber = 33
  lineNumber = 34
  var var_centre;
  lineNumber = 23
  var func1040 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1040.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (centre)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      lineNumber = 33
      return var_centre
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1040.paramCounts = [
    0,
  ];
  func1040.variableArities = [
    false,
  ];
  this.methods["centre"] = func1040;
  func1040.definitionLine = 23;
  func1040.definitionModule = "sniff";
  lineNumber = 23
  var func1041 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1041.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (centre:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      var_centre = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1041.paramCounts = [
    1,
  ];
  func1041.variableArities = [
    false,
  ];
  this.methods["centre:="] = func1041;
  func1041.definitionLine = 23;
  func1041.definitionModule = "sniff";
  lineNumber = 35
  var var_leftCentre;
  lineNumber = 23
  var func1042 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1042.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (leftCentre)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      lineNumber = 34
      return var_leftCentre
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1042.paramCounts = [
    0,
  ];
  func1042.variableArities = [
    false,
  ];
  this.methods["leftCentre"] = func1042;
  func1042.definitionLine = 23;
  func1042.definitionModule = "sniff";
  lineNumber = 23
  var func1043 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1043.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (leftCentre:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      var_leftCentre = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1043.paramCounts = [
    1,
  ];
  func1043.variableArities = [
    false,
  ];
  this.methods["leftCentre:="] = func1043;
  func1043.definitionLine = 23;
  func1043.definitionModule = "sniff";
  lineNumber = 37
  var var_rightCentre;
  lineNumber = 23
  var func1044 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1044.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (rightCentre)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      lineNumber = 35
      return var_rightCentre
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1044.paramCounts = [
    0,
  ];
  func1044.variableArities = [
    false,
  ];
  this.methods["rightCentre"] = func1044;
  func1044.definitionLine = 23;
  func1044.definitionModule = "sniff";
  lineNumber = 23
  var func1045 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1045.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (rightCentre:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      var_rightCentre = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1045.paramCounts = [
    1,
  ];
  func1045.variableArities = [
    false,
  ];
  this.methods["rightCentre:="] = func1045;
  func1045.definitionLine = 23;
  func1045.definitionModule = "sniff";
  lineNumber = 37
  lineNumber = 38
  var var_above;
  lineNumber = 23
  var func1046 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1046.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (above)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      lineNumber = 37
      return var_above
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1046.paramCounts = [
    0,
  ];
  func1046.variableArities = [
    false,
  ];
  this.methods["above"] = func1046;
  func1046.definitionLine = 23;
  func1046.definitionModule = "sniff";
  lineNumber = 23
  var func1047 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1047.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (above:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      var_above = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1047.paramCounts = [
    1,
  ];
  func1047.variableArities = [
    false,
  ];
  this.methods["above:="] = func1047;
  func1047.definitionLine = 23;
  func1047.definitionModule = "sniff";
  lineNumber = 40
  var var___916__;
  lineNumber = 23
  var func1048 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1048.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Δ)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      lineNumber = 38
      return var___916__
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1048.paramCounts = [
    0,
  ];
  func1048.variableArities = [
    false,
  ];
  this.methods["\u0394"] = func1048;
  func1048.definitionLine = 23;
  func1048.definitionModule = "sniff";
  lineNumber = 23
  var func1049 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func1049.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (Δ:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      var___916__ = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1049.paramCounts = [
    1,
  ];
  func1049.variableArities = [
    false,
  ];
  this.methods["\u0394:="] = func1049;
  func1049.definitionLine = 23;
  func1049.definitionModule = "sniff";
  lineNumber = 40
  var func1050 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1050.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (point)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      return var_point
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1050.paramCounts = [
    0,
  ];
  func1050.variableArities = [
    false,
  ];
  this.methods["point"] = func1050;
  func1050.definitionLine = 40;
  func1050.definitionModule = "sniff";
  var obj1051 = Grace_allocObject();
  obj1051.definitionModule = "sniff";
  obj1051.definitionLine = 40;
  obj1051.outer = this;
  var reader_sniff_outer_1052 = function() {
    return this.outer;
  }
  obj1051.methods["outer"] = reader_sniff_outer_1052;
  function obj_init_1051() {
    var origSuperDepth = superDepth;
    superDepth = obj1051;
    obj1051.annotations = [];
    var func1053 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func1053.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (x)"));
      var var_y__39__ = arguments[curarg];
      curarg++;
      if (argcv[1] !=  func1053.paramCounts[1])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (y)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "sniff";
      try {
        var obj1054 = Grace_allocObject();
        obj1054.definitionModule = "sniff";
        obj1054.definitionLine = 40;
        obj1054.outer = this;
        var reader_sniff_outer_1055 = function() {
          return this.outer;
        }
        obj1054.methods["outer"] = reader_sniff_outer_1055;
        function obj_init_1054() {
          var origSuperDepth = superDepth;
          superDepth = obj1054;
          obj1054.annotations = [];
          var func1056 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1056.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (left)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "sniff";
            try {
              lineNumber = 43
              onSelf = true;
              var call1058 = callmethod(this, "x", [0]);
              var diff1060 = callmethod(call1058, "-", [1], var_dx);
              onSelf = true;
              var call1061 = callmethod(this, "y", [0]);
              var call1062 = callmethod(var_point,"x()y", [1, 1], diff1060, call1061);
              return call1062
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1056.paramCounts = [
            1,
          ];
          func1056.variableArities = [
            false,
          ];
          obj1054.methods["left"] = func1056;
          func1056.definitionLine = 43;
          func1056.definitionModule = "sniff";
          var func1063 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1063.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (right)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "sniff";
            try {
              lineNumber = 44
              onSelf = true;
              var call1065 = callmethod(this, "x", [0]);
              var opresult1067 = callmethod(call1065, "+", [1], var_dx);
              onSelf = true;
              var call1068 = callmethod(this, "y", [0]);
              var call1069 = callmethod(var_point,"x()y", [1, 1], opresult1067, call1068);
              return call1069
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1063.paramCounts = [
            1,
          ];
          func1063.variableArities = [
            false,
          ];
          obj1054.methods["right"] = func1063;
          func1063.definitionLine = 44;
          func1063.definitionModule = "sniff";
          var func1070 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1070.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (up)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "sniff";
            try {
              lineNumber = 45
              onSelf = true;
              var call1071 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1073 = callmethod(this, "y", [0]);
              var diff1075 = callmethod(call1073, "-", [1], var_dy);
              var call1076 = callmethod(var_point,"x()y", [1, 1], call1071, diff1075);
              return call1076
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1070.paramCounts = [
            1,
          ];
          func1070.variableArities = [
            false,
          ];
          obj1054.methods["up"] = func1070;
          func1070.definitionLine = 45;
          func1070.definitionModule = "sniff";
          var func1077 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1077.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (down)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "sniff";
            try {
              lineNumber = 46
              onSelf = true;
              var call1078 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1080 = callmethod(this, "y", [0]);
              var opresult1082 = callmethod(call1080, "+", [1], var_dy);
              var call1083 = callmethod(var_point,"x()y", [1, 1], call1078, opresult1082);
              return call1083
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1077.paramCounts = [
            1,
          ];
          func1077.variableArities = [
            false,
          ];
          obj1054.methods["down"] = func1077;
          func1077.definitionLine = 46;
          func1077.definitionModule = "sniff";
          sourceObject = obj1054;
          lineNumber = 41
          obj1054.data["x"] = var_x__39__;
          var reader_sniff_x_1084 = function() {
            return this.data["x"];
          }
          reader_sniff_x_1084.def = true;
          obj1054.methods["x"] = reader_sniff_x_1084;
          lineNumber = 42;
          moduleName = "sniff";
          lineNumber = 41
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'x' to be of type Unknown"))
          sourceObject = obj1054;
          lineNumber = 42
          obj1054.data["y"] = var_y__39__;
          var reader_sniff_y_1085 = function() {
            return this.data["y"];
          }
          reader_sniff_y_1085.def = true;
          obj1054.methods["y"] = reader_sniff_y_1085;
          lineNumber = 43;
          moduleName = "sniff";
          lineNumber = 42
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'y' to be of type Unknown"))
          sourceObject = obj1054;
          sourceObject = obj1054;
          sourceObject = obj1054;
          sourceObject = obj1054;
          superDepth = origSuperDepth;
        }
        obj_init_1054.apply(obj1054, []);
        return obj1054
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1053.paramCounts = [
      1,
      1,
    ];
    func1053.variableArities = [
      false,
      false,
    ];
    obj1051.methods["x()y"] = func1053;
    func1053.definitionLine = 40;
    func1053.definitionModule = "sniff";
    var func1086 = function(argcv) {
      var curarg = 1;
      var var_x__39__ = arguments[curarg];
      curarg++;
      var var_y__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj1087 = Grace_allocObject();
        obj1087.definitionModule = "sniff";
        obj1087.definitionLine = 40;
        var inho1087 = inheritingObject;
        while (inho1087.superobj) inho1087 = inho1087.superobj;
        inho1087.superobj = obj1087;
        obj1087.data = inheritingObject.data;
        obj1087.outer = this;
        var reader_sniff_outer_1088 = function() {
          return this.outer;
        }
        obj1087.methods["outer"] = reader_sniff_outer_1088;
        function obj_init_1087() {
          var origSuperDepth = superDepth;
          superDepth = obj1087;
          obj1087.annotations = [];
          var func1089 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1089.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (left)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "sniff";
            try {
              lineNumber = 43
              onSelf = true;
              var call1091 = callmethod(this, "x", [0]);
              var diff1093 = callmethod(call1091, "-", [1], var_dx);
              onSelf = true;
              var call1094 = callmethod(this, "y", [0]);
              var call1095 = callmethod(var_point,"x()y", [1, 1], diff1093, call1094);
              return call1095
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1089.paramCounts = [
            1,
          ];
          func1089.variableArities = [
            false,
          ];
          obj1087.methods["left"] = func1089;
          func1089.definitionLine = 43;
          func1089.definitionModule = "sniff";
          var func1096 = function(argcv) {
            var curarg = 1;
            var var_dx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1096.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (right)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "sniff";
            try {
              lineNumber = 44
              onSelf = true;
              var call1098 = callmethod(this, "x", [0]);
              var opresult1100 = callmethod(call1098, "+", [1], var_dx);
              onSelf = true;
              var call1101 = callmethod(this, "y", [0]);
              var call1102 = callmethod(var_point,"x()y", [1, 1], opresult1100, call1101);
              return call1102
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1096.paramCounts = [
            1,
          ];
          func1096.variableArities = [
            false,
          ];
          obj1087.methods["right"] = func1096;
          func1096.definitionLine = 44;
          func1096.definitionModule = "sniff";
          var func1103 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1103.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (up)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "sniff";
            try {
              lineNumber = 45
              onSelf = true;
              var call1104 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1106 = callmethod(this, "y", [0]);
              var diff1108 = callmethod(call1106, "-", [1], var_dy);
              var call1109 = callmethod(var_point,"x()y", [1, 1], call1104, diff1108);
              return call1109
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1103.paramCounts = [
            1,
          ];
          func1103.variableArities = [
            false,
          ];
          obj1087.methods["up"] = func1103;
          func1103.definitionLine = 45;
          func1103.definitionModule = "sniff";
          var func1110 = function(argcv) {
            var curarg = 1;
            var var_dy = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1110.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (down)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "sniff";
            try {
              lineNumber = 46
              onSelf = true;
              var call1111 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1113 = callmethod(this, "y", [0]);
              var opresult1115 = callmethod(call1113, "+", [1], var_dy);
              var call1116 = callmethod(var_point,"x()y", [1, 1], call1111, opresult1115);
              return call1116
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1110.paramCounts = [
            1,
          ];
          func1110.variableArities = [
            false,
          ];
          obj1087.methods["down"] = func1110;
          func1110.definitionLine = 46;
          func1110.definitionModule = "sniff";
          sourceObject = obj1087;
          lineNumber = 41
          obj1087.data["x"] = var_x__39__;
          var reader_sniff_x_1117 = function() {
            return this.data["x"];
          }
          reader_sniff_x_1117.def = true;
          obj1087.methods["x"] = reader_sniff_x_1117;
          lineNumber = 42;
          moduleName = "sniff";
          lineNumber = 41
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'x' to be of type Unknown"))
          sourceObject = obj1087;
          lineNumber = 42
          obj1087.data["y"] = var_y__39__;
          var reader_sniff_y_1118 = function() {
            return this.data["y"];
          }
          reader_sniff_y_1118.def = true;
          obj1087.methods["y"] = reader_sniff_y_1118;
          lineNumber = 43;
          moduleName = "sniff";
          lineNumber = 42
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'y' to be of type Unknown"))
          sourceObject = obj1087;
          sourceObject = obj1087;
          sourceObject = obj1087;
          sourceObject = obj1087;
          superDepth = origSuperDepth;
        }
        obj_init_1087.apply(inheritingObject, []);
        return obj1087
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj1051.methods["x()y()object"] = func1086;
    var func1119 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "sniff";
      try {
        lineNumber = 40
        var string1120 = new GraceString("class point");
        return string1120
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1119.paramCounts = [
    ];
    func1119.variableArities = [
    ];
    obj1051.methods["asDebugString"] = func1119;
    func1119.definitionLine = 40;
    func1119.definitionModule = "sniff";
    sourceObject = obj1051;
    sourceObject = obj1051;
    superDepth = origSuperDepth;
  }
  obj_init_1051.apply(obj1051, []);
  var var_point = obj1051;
  lineNumber = 48
  var func1121 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1121.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawable)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      return var_drawable
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1121.paramCounts = [
    0,
  ];
  func1121.variableArities = [
    false,
  ];
  this.methods["drawable"] = func1121;
  func1121.definitionLine = 48;
  func1121.definitionModule = "sniff";
  var obj1122 = Grace_allocObject();
  obj1122.definitionModule = "sniff";
  obj1122.definitionLine = 48;
  obj1122.outer = this;
  var reader_sniff_outer_1123 = function() {
    return this.outer;
  }
  obj1122.methods["outer"] = reader_sniff_outer_1123;
  function obj_init_1122() {
    var origSuperDepth = superDepth;
    superDepth = obj1122;
    obj1122.annotations = [];
    var func1124 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1124.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (new)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "sniff";
      try {
        var obj1125 = Grace_allocObject();
        obj1125.definitionModule = "sniff";
        obj1125.definitionLine = 48;
        obj1125.outer = this;
        var reader_sniff_outer_1126 = function() {
          return this.outer;
        }
        obj1125.methods["outer"] = reader_sniff_outer_1126;
        function obj_init_1125() {
          var origSuperDepth = superDepth;
          superDepth = obj1125;
          obj1125.annotations = [];
          var func1127 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1127.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (step)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "sniff";
            try {
              lineNumber = 60
              onSelf = true;
              var call1128 = callmethod(this, "alwaysBlocks", [0]);
              lineNumber = 63
              var block1129 = Grace_allocObject();
              block1129.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1129.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1129.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1129.methods["match"] = GraceBlock_match;
              block1129.methods["prefix?"] = GraceBlock_lift;
              block1129.receiver = this;
              block1129.className = 'block<sniff:63>';
              block1129.real = function(
                var_b
              ) {
                sourceObject = this;
                lineNumber = 61
                var call1130 = callmethod(var_b,"apply", [0]);
                return call1130;
              };
              var call1131 = callmethod(Grace_prelude,"for()do", [1, 1], call1128, block1129);
              lineNumber = 63
              onSelf = true;
              var call1132 = callmethod(this, "tick", [0]);
              return call1132
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1127.paramCounts = [
            0,
          ];
          func1127.variableArities = [
            false,
          ];
          obj1125.methods["step"] = func1127;
          func1127.definitionLine = 59;
          func1127.definitionModule = "sniff";
          var func1133 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1133.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "sniff";
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
          func1133.paramCounts = [
            0,
          ];
          func1133.variableArities = [
            false,
          ];
          obj1125.methods["tick"] = func1133;
          func1133.definitionLine = 65;
          func1133.definitionModule = "sniff";
          var func1134 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1134.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "sniff";
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
          func1134.paramCounts = [
            1,
          ];
          func1134.variableArities = [
            false,
          ];
          obj1125.methods["draw"] = func1134;
          func1134.definitionLine = 66;
          func1134.definitionModule = "sniff";
          var func1135 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1135.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "sniff";
            try {
              lineNumber = 69
              lineNumber = 61
              lineNumber = 68
              var call1136 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1137 = callmethod(this, "destX:=", [1], call1136);
              lineNumber = 70
              lineNumber = 68
              lineNumber = 69
              var call1138 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1139 = callmethod(this, "destY:=", [1], call1138);
              return call1139
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1135.paramCounts = [
            1,
          ];
          func1135.variableArities = [
            false,
          ];
          obj1125.methods["moveTo"] = func1135;
          func1135.definitionLine = 67;
          func1135.definitionModule = "sniff";
          var func1140 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1140.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (jumpTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "sniff";
            try {
              lineNumber = 73
              lineNumber = 69
              lineNumber = 72
              var call1141 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1142 = callmethod(this, "x:=", [1], call1141);
              lineNumber = 74
              lineNumber = 72
              lineNumber = 73
              var call1143 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1144 = callmethod(this, "y:=", [1], call1143);
              lineNumber = 75
              lineNumber = 73
              lineNumber = 74
              onSelf = true;
              var call1145 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1146 = callmethod(this, "destX:=", [1], call1145);
              lineNumber = 76
              lineNumber = 73
              lineNumber = 75
              onSelf = true;
              var call1147 = callmethod(this, "y", [0]);
              onSelf = true;
              var call1148 = callmethod(this, "destY:=", [1], call1147);
              return call1148
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1140.paramCounts = [
            1,
          ];
          func1140.variableArities = [
            false,
          ];
          obj1125.methods["jumpTo"] = func1140;
          func1140.definitionLine = 71;
          func1140.definitionModule = "sniff";
          var func1149 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1149.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isPointOver)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "sniff";
            try {
              lineNumber = 77
              var bool1150 = new GraceBoolean(false)
              return bool1150
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1149.paramCounts = [
            1,
          ];
          func1149.variableArities = [
            false,
          ];
          obj1125.methods["isPointOver"] = func1149;
          func1149.definitionLine = 77;
          func1149.definitionModule = "sniff";
          var func1151 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1151.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mousedown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "sniff";
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
          func1151.paramCounts = [
            0,
          ];
          func1151.variableArities = [
            false,
          ];
          obj1125.methods["mousedown"] = func1151;
          func1151.definitionLine = 78;
          func1151.definitionModule = "sniff";
          var func1152 = function(argcv) {
            var curarg = 1;
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1152.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (always)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "sniff";
            try {
              lineNumber = 80
              onSelf = true;
              var call1153 = callmethod(this, "alwaysBlocks", [0]);
              var call1154 = callmethod(call1153,"push", [1], var_b);
              return call1154
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1152.paramCounts = [
            1,
          ];
          func1152.variableArities = [
            false,
          ];
          obj1125.methods["always"] = func1152;
          func1152.definitionLine = 79;
          func1152.definitionModule = "sniff";
          var func1155 = function(argcv) {
            var curarg = 1;
            var var_cond = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1155.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (whenever)"));
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[1] !=  func1155.paramCounts[1])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (do)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "sniff";
            try {
              lineNumber = 83
              lineNumber = 88
              var block1156 = Grace_allocObject();
              block1156.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1156.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1156.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1156.methods["match"] = GraceBlock_match;
              block1156.methods["prefix?"] = GraceBlock_lift;
              block1156.receiver = this;
              block1156.className = 'block<sniff:88>';
              block1156.real = function(
              ) {
                sourceObject = this;
                lineNumber = 87
                var if1157 = var_done;
                lineNumber = 84
                var call1158 = callmethod(var_cond,"apply", [0]);
                if (Grace_isTrue(call1158)) {
                  lineNumber = 85
                  var call1159 = callmethod(var_b,"apply", [0]);
                  if1157 = call1159;
                }
                return if1157;
              };
              onSelf = true;
              var call1160 = callmethod(this, "always", [1], block1156);
              return call1160
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1155.paramCounts = [
            1,
            1,
          ];
          func1155.variableArities = [
            false,
            false,
          ];
          obj1125.methods["whenever()do"] = func1155;
          func1155.definitionLine = 82;
          func1155.definitionModule = "sniff";
          var func1161 = function(argcv) {
            var curarg = 1;
            var var_dist = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1161.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (forward)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "sniff";
            try {
              lineNumber = 91
              lineNumber = 90
              onSelf = true;
              var call1165 = callmethod(this, "angle", [0]);
              var quotient1167 = callmethod(call1165, "/", [1], new GraceNum(180));
              var prod1169 = callmethod(quotient1167, "*", [1], var_PI);
              var call1170 = callmethod(var_trig,"cos", [1], prod1169);
              var prod1172 = callmethod(call1170, "*", [1], var_dist);
              var var_y__39__ = prod1172;
              lineNumber = 91;
              moduleName = "sniff";
              lineNumber = 90
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_y__39__)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'y'' to be of type Unknown"))
              lineNumber = 92
              lineNumber = 91
              onSelf = true;
              var call1176 = callmethod(this, "angle", [0]);
              var quotient1178 = callmethod(call1176, "/", [1], new GraceNum(180));
              var prod1180 = callmethod(quotient1178, "*", [1], var_PI);
              var call1181 = callmethod(var_trig,"sin", [1], prod1180);
              var prod1183 = callmethod(call1181, "*", [1], var_dist);
              var var_x__39__ = prod1183;
              lineNumber = 92;
              moduleName = "sniff";
              lineNumber = 91
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_x__39__)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'x'' to be of type Unknown"))
              lineNumber = 93
              lineNumber = 85
              lineNumber = 93
              lineNumber = 92
              onSelf = true;
              var call1185 = callmethod(this, "x", [0]);
              var opresult1187 = callmethod(call1185, "+", [1], var_x__39__);
              onSelf = true;
              var call1188 = callmethod(this, "x:=", [1], opresult1187);
              lineNumber = 94
              lineNumber = 85
              lineNumber = 94
              lineNumber = 93
              onSelf = true;
              var call1190 = callmethod(this, "y", [0]);
              var opresult1192 = callmethod(call1190, "+", [1], var_y__39__);
              onSelf = true;
              var call1193 = callmethod(this, "y:=", [1], opresult1192);
              return call1193
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1161.paramCounts = [
            1,
          ];
          func1161.variableArities = [
            false,
          ];
          obj1125.methods["forward"] = func1161;
          func1161.definitionLine = 89;
          func1161.definitionModule = "sniff";
          var func1194 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1194.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (normaliseAngle)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "sniff";
            try {
              lineNumber = 96
              var block1195 = Grace_allocObject();
              block1195.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1195.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1195.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1195.methods["match"] = GraceBlock_match;
              block1195.methods["prefix?"] = GraceBlock_lift;
              block1195.receiver = this;
              block1195.className = 'block<sniff:96>';
              block1195.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1197 = callmethod(this, "angle", [0]);
                var opresult1199 = callmethod(call1197, "<", [1], new GraceNum(0));
                return opresult1199;
              };
              lineNumber = 99
              var block1200 = Grace_allocObject();
              block1200.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1200.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1200.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1200.methods["match"] = GraceBlock_match;
              block1200.methods["prefix?"] = GraceBlock_lift;
              block1200.receiver = this;
              block1200.className = 'block<sniff:99>';
              block1200.real = function(
              ) {
                sourceObject = this;
                lineNumber = 98
                lineNumber = 85
                lineNumber = 98
                lineNumber = 97
                onSelf = true;
                var call1202 = callmethod(this, "angle", [0]);
                var opresult1204 = callmethod(call1202, "+", [1], new GraceNum(360));
                onSelf = true;
                var call1205 = callmethod(this, "angle:=", [1], opresult1204);
                return call1205;
              };
              var call1206 = callmethod(Grace_prelude,"while()do", [1, 1], block1195, block1200);
              lineNumber = 99
              var block1207 = Grace_allocObject();
              block1207.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1207.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1207.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1207.methods["match"] = GraceBlock_match;
              block1207.methods["prefix?"] = GraceBlock_lift;
              block1207.receiver = this;
              block1207.className = 'block<sniff:99>';
              block1207.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1209 = callmethod(this, "angle", [0]);
                var opresult1211 = callmethod(call1209, ">", [1], new GraceNum(360));
                return opresult1211;
              };
              lineNumber = 102
              var block1212 = Grace_allocObject();
              block1212.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1212.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1212.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1212.methods["match"] = GraceBlock_match;
              block1212.methods["prefix?"] = GraceBlock_lift;
              block1212.receiver = this;
              block1212.className = 'block<sniff:102>';
              block1212.real = function(
              ) {
                sourceObject = this;
                lineNumber = 101
                lineNumber = 85
                lineNumber = 101
                lineNumber = 100
                onSelf = true;
                var call1214 = callmethod(this, "angle", [0]);
                var diff1216 = callmethod(call1214, "-", [1], new GraceNum(360));
                onSelf = true;
                var call1217 = callmethod(this, "angle:=", [1], diff1216);
                return call1217;
              };
              var call1218 = callmethod(Grace_prelude,"while()do", [1, 1], block1207, block1212);
              return call1218
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1194.paramCounts = [
            0,
          ];
          func1194.variableArities = [
            false,
          ];
          obj1125.methods["normaliseAngle"] = func1194;
          func1194.definitionLine = 95;
          func1194.definitionModule = "sniff";
          var func1219 = function(argcv) {
            var curarg = 1;
            var var_degrees = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1219.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "sniff";
            try {
              lineNumber = 105
              lineNumber = 85
              lineNumber = 105
              lineNumber = 104
              onSelf = true;
              var call1221 = callmethod(this, "angle", [0]);
              var opresult1223 = callmethod(call1221, "+", [1], var_degrees);
              onSelf = true;
              var call1224 = callmethod(this, "angle:=", [1], opresult1223);
              lineNumber = 105
              onSelf = true;
              var call1225 = callmethod(this, "normaliseAngle", [0]);
              return call1225
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1219.paramCounts = [
            1,
          ];
          func1219.variableArities = [
            false,
          ];
          obj1125.methods["turn"] = func1219;
          func1219.definitionLine = 103;
          func1219.definitionModule = "sniff";
          var func1226 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1226.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touchingEdge)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "sniff";
            try {
              lineNumber = 111
              var if1227 = var_done;
              lineNumber = 108
              onSelf = true;
              var call1228 = callmethod(this, "x", [0]);
              var call1229 = callmethod(var_point,"x()y", [1, 1], call1228, new GraceNum(0));
              onSelf = true;
              var call1230 = callmethod(this, "isPointOver", [1], call1229);
              if (Grace_isTrue(call1230)) {
                lineNumber = 110
                lineNumber = 109
                var bool1231 = new GraceBoolean(true)
                return bool1231
                if1227 = undefined;
              }
              lineNumber = 114
              var if1232 = var_done;
              lineNumber = 111
              onSelf = true;
              var call1233 = callmethod(this, "x", [0]);
              var call1234 = callmethod(var_point,"x()y", [1, 1], call1233, var_canvasHeight);
              onSelf = true;
              var call1235 = callmethod(this, "isPointOver", [1], call1234);
              if (Grace_isTrue(call1235)) {
                lineNumber = 113
                lineNumber = 112
                var bool1236 = new GraceBoolean(true)
                return bool1236
                if1232 = undefined;
              }
              lineNumber = 117
              var if1237 = var_done;
              lineNumber = 114
              onSelf = true;
              var call1238 = callmethod(this, "y", [0]);
              var call1239 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1238);
              onSelf = true;
              var call1240 = callmethod(this, "isPointOver", [1], call1239);
              if (Grace_isTrue(call1240)) {
                lineNumber = 116
                lineNumber = 115
                var bool1241 = new GraceBoolean(true)
                return bool1241
                if1237 = undefined;
              }
              lineNumber = 120
              var if1242 = var_done;
              lineNumber = 117
              onSelf = true;
              var call1243 = callmethod(this, "y", [0]);
              var call1244 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1243);
              onSelf = true;
              var call1245 = callmethod(this, "isPointOver", [1], call1244);
              if (Grace_isTrue(call1245)) {
                lineNumber = 119
                lineNumber = 118
                var bool1246 = new GraceBoolean(true)
                return bool1246
                if1242 = undefined;
              }
              lineNumber = 121
              lineNumber = 120
              var bool1247 = new GraceBoolean(false)
              return bool1247
              return undefined
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1226.paramCounts = [
            0,
          ];
          func1226.variableArities = [
            false,
          ];
          obj1125.methods["touchingEdge"] = func1226;
          func1226.definitionLine = 107;
          func1226.definitionModule = "sniff";
          var func1248 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1248.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounce)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "sniff";
            try {
              lineNumber = 124
              lineNumber = 123
              var var_dx = new GraceNum(0);
              lineNumber = 124;
              moduleName = "sniff";
              lineNumber = 123
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_dx)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'dx' to be of type Unknown"))
              lineNumber = 125
              lineNumber = 124
              var var_dy = new GraceNum(0);
              lineNumber = 125;
              moduleName = "sniff";
              lineNumber = 124
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_dy)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'dy' to be of type Unknown"))
              lineNumber = 128
              var if1249 = var_done;
              lineNumber = 125
              onSelf = true;
              var call1250 = callmethod(this, "x", [0]);
              var call1251 = callmethod(var_point,"x()y", [1, 1], call1250, new GraceNum(0));
              onSelf = true;
              var call1252 = callmethod(this, "isPointOver", [1], call1251);
              if (Grace_isTrue(call1252)) {
                lineNumber = 126
                onSelf = true;
                var call1253 = callmethod(this, "bounceFrom", [1], var_top);
                if1249 = call1253;
              }
              lineNumber = 131
              var if1254 = var_done;
              lineNumber = 128
              onSelf = true;
              var call1255 = callmethod(this, "x", [0]);
              var call1256 = callmethod(var_point,"x()y", [1, 1], call1255, var_canvasHeight);
              onSelf = true;
              var call1257 = callmethod(this, "isPointOver", [1], call1256);
              if (Grace_isTrue(call1257)) {
                lineNumber = 129
                onSelf = true;
                var call1258 = callmethod(this, "bounceFrom", [1], var_bottom);
                if1254 = call1258;
              }
              lineNumber = 134
              var if1259 = var_done;
              lineNumber = 131
              onSelf = true;
              var call1260 = callmethod(this, "y", [0]);
              var call1261 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1260);
              onSelf = true;
              var call1262 = callmethod(this, "isPointOver", [1], call1261);
              if (Grace_isTrue(call1262)) {
                lineNumber = 132
                onSelf = true;
                var call1263 = callmethod(this, "bounceFrom", [1], var_left);
                if1259 = call1263;
              }
              lineNumber = 137
              var if1264 = var_done;
              lineNumber = 134
              onSelf = true;
              var call1265 = callmethod(this, "y", [0]);
              var call1266 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1265);
              onSelf = true;
              var call1267 = callmethod(this, "isPointOver", [1], call1266);
              if (Grace_isTrue(call1267)) {
                lineNumber = 135
                onSelf = true;
                var call1268 = callmethod(this, "bounceFrom", [1], var_right);
                if1264 = call1268;
              }
              lineNumber = 137
              var block1269 = Grace_allocObject();
              block1269.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1269.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1269.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1269.methods["match"] = GraceBlock_match;
              block1269.methods["prefix?"] = GraceBlock_lift;
              block1269.receiver = this;
              block1269.className = 'block<sniff:137>';
              block1269.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1270 = callmethod(this, "touchingEdge", [0]);
                return call1270;
              };
              lineNumber = 140
              var block1271 = Grace_allocObject();
              block1271.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1271.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1271.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1271.methods["match"] = GraceBlock_match;
              block1271.methods["prefix?"] = GraceBlock_lift;
              block1271.receiver = this;
              block1271.className = 'block<sniff:140>';
              block1271.real = function(
              ) {
                sourceObject = this;
                lineNumber = 138
                onSelf = true;
                var call1272 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1272;
              };
              var call1273 = callmethod(Grace_prelude,"while()do", [1, 1], block1269, block1271);
              return call1273
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1248.paramCounts = [
            0,
          ];
          func1248.variableArities = [
            false,
          ];
          obj1125.methods["bounce"] = func1248;
          func1248.definitionLine = 122;
          func1248.definitionModule = "sniff";
          var func1274 = function(argcv) {
            var curarg = 1;
            var var_dir = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1274.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceFrom)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "sniff";
            try {
              lineNumber = 145
              var if1275 = var_done;
              lineNumber = 142
              var string1276 = new GraceString("left");
              var opresult1279 = callmethod(var_dir, "==", [1], string1276);
              if (Grace_isTrue(opresult1279)) {
                lineNumber = 144
                lineNumber = 85
                lineNumber = 144
                lineNumber = 143
                onSelf = true;
                var call1280 = callmethod(this, "angle", [0]);
                var diff1283 = callmethod(new GraceNum(360), "-", [1], call1280);
                onSelf = true;
                var call1284 = callmethod(this, "angle:=", [1], diff1283);
                if1275 = call1284;
              }
              lineNumber = 148
              var if1285 = var_done;
              lineNumber = 145
              var string1286 = new GraceString("right");
              var opresult1289 = callmethod(var_dir, "==", [1], string1286);
              if (Grace_isTrue(opresult1289)) {
                lineNumber = 147
                lineNumber = 85
                lineNumber = 147
                lineNumber = 146
                onSelf = true;
                var call1290 = callmethod(this, "angle", [0]);
                var diff1293 = callmethod(new GraceNum(360), "-", [1], call1290);
                onSelf = true;
                var call1294 = callmethod(this, "angle:=", [1], diff1293);
                if1285 = call1294;
              }
              lineNumber = 151
              var if1295 = var_done;
              lineNumber = 148
              var string1296 = new GraceString("top");
              var opresult1299 = callmethod(var_dir, "==", [1], string1296);
              if (Grace_isTrue(opresult1299)) {
                lineNumber = 150
                lineNumber = 85
                lineNumber = 150
                lineNumber = 149
                onSelf = true;
                var call1300 = callmethod(this, "angle", [0]);
                var diff1303 = callmethod(new GraceNum(180), "-", [1], call1300);
                onSelf = true;
                var call1304 = callmethod(this, "angle:=", [1], diff1303);
                if1295 = call1304;
              }
              lineNumber = 154
              var if1305 = var_done;
              lineNumber = 151
              var string1306 = new GraceString("bottom");
              var opresult1309 = callmethod(var_dir, "==", [1], string1306);
              if (Grace_isTrue(opresult1309)) {
                lineNumber = 153
                lineNumber = 85
                lineNumber = 153
                lineNumber = 152
                onSelf = true;
                var call1310 = callmethod(this, "angle", [0]);
                var diff1313 = callmethod(new GraceNum(180), "-", [1], call1310);
                onSelf = true;
                var call1314 = callmethod(this, "angle:=", [1], diff1313);
                if1305 = call1314;
              }
              lineNumber = 154
              onSelf = true;
              var call1315 = callmethod(this, "normaliseAngle", [0]);
              lineNumber = 155
              onSelf = true;
              var call1316 = callmethod(this, "forward", [1], new GraceNum(2));
              return call1316
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1274.paramCounts = [
            1,
          ];
          func1274.variableArities = [
            false,
          ];
          obj1125.methods["bounceFrom"] = func1274;
          func1274.definitionLine = 141;
          func1274.definitionModule = "sniff";
          var func1317 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1317.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceOff)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "sniff";
            try {
              lineNumber = 161
              var if1318 = var_done;
              lineNumber = 158
              var call1319 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1321 = callmethod(this, "x", [0]);
              var opresult1323 = callmethod(call1321, ">", [1], call1319);
              if (Grace_isTrue(opresult1323)) {
                lineNumber = 159
                onSelf = true;
                var call1324 = callmethod(this, "bounceFrom", [1], var_left);
                if1318 = call1324;
              }
              lineNumber = 164
              var if1325 = var_done;
              lineNumber = 161
              var call1326 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1328 = callmethod(this, "x", [0]);
              var opresult1330 = callmethod(call1328, "<", [1], call1326);
              if (Grace_isTrue(opresult1330)) {
                lineNumber = 162
                onSelf = true;
                var call1331 = callmethod(this, "bounceFrom", [1], var_right);
                if1325 = call1331;
              }
              lineNumber = 164
              var block1332 = Grace_allocObject();
              block1332.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1332.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1332.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1332.methods["match"] = GraceBlock_match;
              block1332.methods["prefix?"] = GraceBlock_lift;
              block1332.receiver = this;
              block1332.className = 'block<sniff:164>';
              block1332.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1333 = callmethod(this, "touching", [1], var_other);
                return call1333;
              };
              lineNumber = 167
              var block1334 = Grace_allocObject();
              block1334.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1334.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1334.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1334.methods["match"] = GraceBlock_match;
              block1334.methods["prefix?"] = GraceBlock_lift;
              block1334.receiver = this;
              block1334.className = 'block<sniff:167>';
              block1334.real = function(
              ) {
                sourceObject = this;
                lineNumber = 165
                onSelf = true;
                var call1335 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1335;
              };
              var call1336 = callmethod(Grace_prelude,"while()do", [1, 1], block1332, block1334);
              return call1336
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1317.paramCounts = [
            1,
          ];
          func1317.variableArities = [
            false,
          ];
          obj1125.methods["bounceOff"] = func1317;
          func1317.definitionLine = 157;
          func1317.definitionModule = "sniff";
          var func1337 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1337.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touching)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "sniff";
            try {
              lineNumber = 169
              onSelf = true;
              var call1338 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1339 = callmethod(this, "y", [0]);
              var call1340 = callmethod(var_point,"x()y", [1, 1], call1338, call1339);
              var call1341 = callmethod(var_other,"isPointOver", [1], call1340);
              return call1341
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1337.paramCounts = [
            1,
          ];
          func1337.variableArities = [
            false,
          ];
          obj1125.methods["touching"] = func1337;
          func1337.definitionLine = 168;
          func1337.definitionModule = "sniff";
          var func1342 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1342.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (face)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "sniff";
            try {
              lineNumber = 175
              var if1343 = var_done;
              lineNumber = 172
              onSelf = true;
              var call1344 = callmethod(this, "y", [0]);
              var call1346 = callmethod(var_other,"y", [0]);
              var opresult1348 = callmethod(call1346, "!=", [1], call1344);
              onSelf = true;
              var call1350 = callmethod(this, "x", [0]);
              var call1352 = callmethod(var_other,"x", [0]);
              var opresult1354 = callmethod(call1352, "!=", [1], call1350);
              var opresult1356 = callmethod(opresult1354, "||", [1], opresult1348);
              if (Grace_isTrue(opresult1356)) {
                lineNumber = 174
                lineNumber = 172
                lineNumber = 174
                lineNumber = 173
                onSelf = true;
                var call1359 = callmethod(this, "x", [0]);
                var call1361 = callmethod(var_other,"x", [0]);
                var diff1363 = callmethod(call1361, "-", [1], call1359);
                onSelf = true;
                var call1364 = callmethod(this, "y", [0]);
                var call1366 = callmethod(var_other,"y", [0]);
                var diff1368 = callmethod(call1366, "-", [1], call1364);
                var call1369 = callmethod(var_trig,"atan2", [2], diff1363, diff1368);
                var prod1371 = callmethod(call1369, "*", [1], new GraceNum(180));
                var quotient1373 = callmethod(prod1371, "/", [1], new GraceNum(3.1415));
                onSelf = true;
                var call1374 = callmethod(this, "angle:=", [1], quotient1373);
                if1343 = call1374;
              }
              lineNumber = 175
              onSelf = true;
              var call1375 = callmethod(this, "normaliseAngle", [0]);
              return call1375
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1342.paramCounts = [
            1,
          ];
          func1342.variableArities = [
            false,
          ];
          obj1125.methods["face"] = func1342;
          func1342.definitionLine = 171;
          func1342.definitionModule = "sniff";
          var func1376 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1376.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stamp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "sniff";
            try {
              lineNumber = 178
              var string1377 = new GraceString("2d");
              var call1378 = callmethod(var_backingCanvas,"getContext", [1], string1377);
              onSelf = true;
              var call1379 = callmethod(this, "draw", [1], call1378);
              return call1379
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1376.paramCounts = [
            0,
          ];
          func1376.variableArities = [
            false,
          ];
          obj1125.methods["stamp"] = func1376;
          func1376.definitionLine = 177;
          func1376.definitionModule = "sniff";
          sourceObject = obj1125;
          lineNumber = 49
          var call1380 = callmethod(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1381 = callmethod(call1380, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1382 = callmethod(call1381, "initialise", [0]);
          sourceObject = obj1125;
          lineNumber = 50
          var call1383 = callmethod(var_registeredObjects,"push", [1], this);
          sourceObject = obj1125;
          lineNumber = 52
          lineNumber = 51
          var_above = this;
          sourceObject = obj1125;
          lineNumber = 53
          lineNumber = 52
          var___916__ = this;
          sourceObject = obj1125;
          lineNumber = 53
          var call1384 = callmethod(var_collections,"list", [0]);
          var call1385 = callmethod(call1384,"new", [0]);
          obj1125.data["alwaysBlocks"] = call1385;
          var reader_sniff_alwaysBlocks_1386 = function() {
            return this.data["alwaysBlocks"];
          }
          reader_sniff_alwaysBlocks_1386.def = true;
          reader_sniff_alwaysBlocks_1386.confidential = true;
          obj1125.methods["alwaysBlocks"] = reader_sniff_alwaysBlocks_1386;
          lineNumber = 54;
          moduleName = "sniff";
          lineNumber = 53
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1385)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'alwaysBlocks' to be of type Unknown"))
          sourceObject = obj1125;
          lineNumber = 55
          lineNumber = 54
          var quotient1389 = callmethod(var_canvasWidth, "/", [1], new GraceNum(2));
          obj1125.data["x"] = quotient1389;
          var reader_sniff_x_1390 = function() {
            return this.data["x"];
          }
          obj1125.methods["x"] = reader_sniff_x_1390;
          obj1125.data["x"] = quotient1389;
          var writer_sniff_x_1390 = function(argcv, o) {
            this.data["x"] = o;
          }
          obj1125.methods["x:="] = writer_sniff_x_1390;
          writer_sniff_x_1390.confidential = true;
          lineNumber = 55;
          moduleName = "sniff";
          lineNumber = 54
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1389)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'x' to be of type Unknown"))
          obj1125.mutable = true;
          sourceObject = obj1125;
          lineNumber = 56
          lineNumber = 55
          var quotient1393 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
          obj1125.data["y"] = quotient1393;
          var reader_sniff_y_1394 = function() {
            return this.data["y"];
          }
          obj1125.methods["y"] = reader_sniff_y_1394;
          obj1125.data["y"] = quotient1393;
          var writer_sniff_y_1394 = function(argcv, o) {
            this.data["y"] = o;
          }
          obj1125.methods["y:="] = writer_sniff_y_1394;
          writer_sniff_y_1394.confidential = true;
          lineNumber = 56;
          moduleName = "sniff";
          lineNumber = 55
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1393)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'y' to be of type Unknown"))
          obj1125.mutable = true;
          sourceObject = obj1125;
          lineNumber = 56
          onSelf = true;
          var call1395 = callmethod(this, "x", [0]);
          obj1125.data["destX"] = call1395;
          var reader_sniff_destX_1396 = function() {
            return this.data["destX"];
          }
          obj1125.methods["destX"] = reader_sniff_destX_1396;
          obj1125.data["destX"] = call1395;
          var writer_sniff_destX_1396 = function(argcv, o) {
            this.data["destX"] = o;
          }
          obj1125.methods["destX:="] = writer_sniff_destX_1396;
          reader_sniff_destX_1396.confidential = true;
          writer_sniff_destX_1396.confidential = true;
          lineNumber = 57;
          moduleName = "sniff";
          lineNumber = 56
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1395)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destX' to be of type Unknown"))
          obj1125.mutable = true;
          sourceObject = obj1125;
          lineNumber = 57
          onSelf = true;
          var call1397 = callmethod(this, "y", [0]);
          obj1125.data["destY"] = call1397;
          var reader_sniff_destY_1398 = function() {
            return this.data["destY"];
          }
          obj1125.methods["destY"] = reader_sniff_destY_1398;
          obj1125.data["destY"] = call1397;
          var writer_sniff_destY_1398 = function(argcv, o) {
            this.data["destY"] = o;
          }
          obj1125.methods["destY:="] = writer_sniff_destY_1398;
          reader_sniff_destY_1398.confidential = true;
          writer_sniff_destY_1398.confidential = true;
          lineNumber = 58;
          moduleName = "sniff";
          lineNumber = 57
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1397)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destY' to be of type Unknown"))
          obj1125.mutable = true;
          sourceObject = obj1125;
          lineNumber = 58
          obj1125.data["angle"] = new GraceNum(180);
          var reader_sniff_angle_1399 = function() {
            return this.data["angle"];
          }
          obj1125.methods["angle"] = reader_sniff_angle_1399;
          obj1125.data["angle"] = new GraceNum(180);
          var writer_sniff_angle_1399 = function(argcv, o) {
            this.data["angle"] = o;
          }
          obj1125.methods["angle:="] = writer_sniff_angle_1399;
          reader_sniff_angle_1399.confidential = true;
          writer_sniff_angle_1399.confidential = true;
          lineNumber = 59;
          moduleName = "sniff";
          lineNumber = 58
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(180))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'angle' to be of type Unknown"))
          obj1125.mutable = true;
          sourceObject = obj1125;
          sourceObject = obj1125;
          sourceObject = obj1125;
          sourceObject = obj1125;
          sourceObject = obj1125;
          sourceObject = obj1125;
          sourceObject = obj1125;
          sourceObject = obj1125;
          sourceObject = obj1125;
          sourceObject = obj1125;
          sourceObject = obj1125;
          sourceObject = obj1125;
          sourceObject = obj1125;
          sourceObject = obj1125;
          sourceObject = obj1125;
          sourceObject = obj1125;
          sourceObject = obj1125;
          sourceObject = obj1125;
          sourceObject = obj1125;
          superDepth = origSuperDepth;
        }
        obj_init_1125.apply(obj1125, []);
        return obj1125
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1124.paramCounts = [
      0,
    ];
    func1124.variableArities = [
      false,
    ];
    obj1122.methods["new"] = func1124;
    func1124.definitionLine = 48;
    func1124.definitionModule = "sniff";
    var func1400 = function(argcv) {
      var curarg = 1;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj1401 = Grace_allocObject();
        obj1401.definitionModule = "sniff";
        obj1401.definitionLine = 48;
        var inho1401 = inheritingObject;
        while (inho1401.superobj) inho1401 = inho1401.superobj;
        inho1401.superobj = obj1401;
        obj1401.data = inheritingObject.data;
        obj1401.outer = this;
        var reader_sniff_outer_1402 = function() {
          return this.outer;
        }
        obj1401.methods["outer"] = reader_sniff_outer_1402;
        function obj_init_1401() {
          var origSuperDepth = superDepth;
          superDepth = obj1401;
          obj1401.annotations = [];
          var func1403 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1403.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (step)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "sniff";
            try {
              lineNumber = 60
              onSelf = true;
              var call1404 = callmethod(this, "alwaysBlocks", [0]);
              lineNumber = 63
              var block1405 = Grace_allocObject();
              block1405.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1405.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1405.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1405.methods["match"] = GraceBlock_match;
              block1405.methods["prefix?"] = GraceBlock_lift;
              block1405.receiver = this;
              block1405.className = 'block<sniff:63>';
              block1405.real = function(
                var_b
              ) {
                sourceObject = this;
                lineNumber = 61
                var call1406 = callmethod(var_b,"apply", [0]);
                return call1406;
              };
              var call1407 = callmethod(Grace_prelude,"for()do", [1, 1], call1404, block1405);
              lineNumber = 63
              onSelf = true;
              var call1408 = callmethod(this, "tick", [0]);
              return call1408
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1403.paramCounts = [
            0,
          ];
          func1403.variableArities = [
            false,
          ];
          obj1401.methods["step"] = func1403;
          func1403.definitionLine = 59;
          func1403.definitionModule = "sniff";
          var func1409 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1409.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (tick)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "sniff";
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
          func1409.paramCounts = [
            0,
          ];
          func1409.variableArities = [
            false,
          ];
          obj1401.methods["tick"] = func1409;
          func1409.definitionLine = 65;
          func1409.definitionModule = "sniff";
          var func1410 = function(argcv) {
            var curarg = 1;
            var var_ctx = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1410.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (draw)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "sniff";
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
          func1410.paramCounts = [
            1,
          ];
          func1410.variableArities = [
            false,
          ];
          obj1401.methods["draw"] = func1410;
          func1410.definitionLine = 66;
          func1410.definitionModule = "sniff";
          var func1411 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1411.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (moveTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "sniff";
            try {
              lineNumber = 69
              lineNumber = 61
              lineNumber = 68
              var call1412 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1413 = callmethod(this, "destX:=", [1], call1412);
              lineNumber = 70
              lineNumber = 68
              lineNumber = 69
              var call1414 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1415 = callmethod(this, "destY:=", [1], call1414);
              return call1415
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1411.paramCounts = [
            1,
          ];
          func1411.variableArities = [
            false,
          ];
          obj1401.methods["moveTo"] = func1411;
          func1411.definitionLine = 67;
          func1411.definitionModule = "sniff";
          var func1416 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1416.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (jumpTo)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "sniff";
            try {
              lineNumber = 73
              lineNumber = 69
              lineNumber = 72
              var call1417 = callmethod(var_p,"x", [0]);
              onSelf = true;
              var call1418 = callmethod(this, "x:=", [1], call1417);
              lineNumber = 74
              lineNumber = 72
              lineNumber = 73
              var call1419 = callmethod(var_p,"y", [0]);
              onSelf = true;
              var call1420 = callmethod(this, "y:=", [1], call1419);
              lineNumber = 75
              lineNumber = 73
              lineNumber = 74
              onSelf = true;
              var call1421 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1422 = callmethod(this, "destX:=", [1], call1421);
              lineNumber = 76
              lineNumber = 73
              lineNumber = 75
              onSelf = true;
              var call1423 = callmethod(this, "y", [0]);
              onSelf = true;
              var call1424 = callmethod(this, "destY:=", [1], call1423);
              return call1424
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1416.paramCounts = [
            1,
          ];
          func1416.variableArities = [
            false,
          ];
          obj1401.methods["jumpTo"] = func1416;
          func1416.definitionLine = 71;
          func1416.definitionModule = "sniff";
          var func1425 = function(argcv) {
            var curarg = 1;
            var var_p = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1425.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (isPointOver)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "sniff";
            try {
              lineNumber = 77
              var bool1426 = new GraceBoolean(false)
              return bool1426
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1425.paramCounts = [
            1,
          ];
          func1425.variableArities = [
            false,
          ];
          obj1401.methods["isPointOver"] = func1425;
          func1425.definitionLine = 77;
          func1425.definitionModule = "sniff";
          var func1427 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1427.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mousedown)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "sniff";
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
          func1427.paramCounts = [
            0,
          ];
          func1427.variableArities = [
            false,
          ];
          obj1401.methods["mousedown"] = func1427;
          func1427.definitionLine = 78;
          func1427.definitionModule = "sniff";
          var func1428 = function(argcv) {
            var curarg = 1;
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1428.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (always)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "sniff";
            try {
              lineNumber = 80
              onSelf = true;
              var call1429 = callmethod(this, "alwaysBlocks", [0]);
              var call1430 = callmethod(call1429,"push", [1], var_b);
              return call1430
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1428.paramCounts = [
            1,
          ];
          func1428.variableArities = [
            false,
          ];
          obj1401.methods["always"] = func1428;
          func1428.definitionLine = 79;
          func1428.definitionModule = "sniff";
          var func1431 = function(argcv) {
            var curarg = 1;
            var var_cond = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1431.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (whenever)"));
            var var_b = arguments[curarg];
            curarg++;
            if (argcv[1] !=  func1431.paramCounts[1])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (do)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "sniff";
            try {
              lineNumber = 83
              lineNumber = 88
              var block1432 = Grace_allocObject();
              block1432.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1432.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1432.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1432.methods["match"] = GraceBlock_match;
              block1432.methods["prefix?"] = GraceBlock_lift;
              block1432.receiver = this;
              block1432.className = 'block<sniff:88>';
              block1432.real = function(
              ) {
                sourceObject = this;
                lineNumber = 87
                var if1433 = var_done;
                lineNumber = 84
                var call1434 = callmethod(var_cond,"apply", [0]);
                if (Grace_isTrue(call1434)) {
                  lineNumber = 85
                  var call1435 = callmethod(var_b,"apply", [0]);
                  if1433 = call1435;
                }
                return if1433;
              };
              onSelf = true;
              var call1436 = callmethod(this, "always", [1], block1432);
              return call1436
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1431.paramCounts = [
            1,
            1,
          ];
          func1431.variableArities = [
            false,
            false,
          ];
          obj1401.methods["whenever()do"] = func1431;
          func1431.definitionLine = 82;
          func1431.definitionModule = "sniff";
          var func1437 = function(argcv) {
            var curarg = 1;
            var var_dist = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1437.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (forward)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "sniff";
            try {
              lineNumber = 91
              lineNumber = 90
              onSelf = true;
              var call1441 = callmethod(this, "angle", [0]);
              var quotient1443 = callmethod(call1441, "/", [1], new GraceNum(180));
              var prod1445 = callmethod(quotient1443, "*", [1], var_PI);
              var call1446 = callmethod(var_trig,"cos", [1], prod1445);
              var prod1448 = callmethod(call1446, "*", [1], var_dist);
              var var_y__39__ = prod1448;
              lineNumber = 91;
              moduleName = "sniff";
              lineNumber = 90
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_y__39__)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'y'' to be of type Unknown"))
              lineNumber = 92
              lineNumber = 91
              onSelf = true;
              var call1452 = callmethod(this, "angle", [0]);
              var quotient1454 = callmethod(call1452, "/", [1], new GraceNum(180));
              var prod1456 = callmethod(quotient1454, "*", [1], var_PI);
              var call1457 = callmethod(var_trig,"sin", [1], prod1456);
              var prod1459 = callmethod(call1457, "*", [1], var_dist);
              var var_x__39__ = prod1459;
              lineNumber = 92;
              moduleName = "sniff";
              lineNumber = 91
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_x__39__)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of def 'x'' to be of type Unknown"))
              lineNumber = 93
              lineNumber = 85
              lineNumber = 93
              lineNumber = 92
              onSelf = true;
              var call1461 = callmethod(this, "x", [0]);
              var opresult1463 = callmethod(call1461, "+", [1], var_x__39__);
              onSelf = true;
              var call1464 = callmethod(this, "x:=", [1], opresult1463);
              lineNumber = 94
              lineNumber = 85
              lineNumber = 94
              lineNumber = 93
              onSelf = true;
              var call1466 = callmethod(this, "y", [0]);
              var opresult1468 = callmethod(call1466, "+", [1], var_y__39__);
              onSelf = true;
              var call1469 = callmethod(this, "y:=", [1], opresult1468);
              return call1469
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1437.paramCounts = [
            1,
          ];
          func1437.variableArities = [
            false,
          ];
          obj1401.methods["forward"] = func1437;
          func1437.definitionLine = 89;
          func1437.definitionModule = "sniff";
          var func1470 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1470.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (normaliseAngle)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "sniff";
            try {
              lineNumber = 96
              var block1471 = Grace_allocObject();
              block1471.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1471.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1471.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1471.methods["match"] = GraceBlock_match;
              block1471.methods["prefix?"] = GraceBlock_lift;
              block1471.receiver = this;
              block1471.className = 'block<sniff:96>';
              block1471.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1473 = callmethod(this, "angle", [0]);
                var opresult1475 = callmethod(call1473, "<", [1], new GraceNum(0));
                return opresult1475;
              };
              lineNumber = 99
              var block1476 = Grace_allocObject();
              block1476.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1476.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1476.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1476.methods["match"] = GraceBlock_match;
              block1476.methods["prefix?"] = GraceBlock_lift;
              block1476.receiver = this;
              block1476.className = 'block<sniff:99>';
              block1476.real = function(
              ) {
                sourceObject = this;
                lineNumber = 98
                lineNumber = 85
                lineNumber = 98
                lineNumber = 97
                onSelf = true;
                var call1478 = callmethod(this, "angle", [0]);
                var opresult1480 = callmethod(call1478, "+", [1], new GraceNum(360));
                onSelf = true;
                var call1481 = callmethod(this, "angle:=", [1], opresult1480);
                return call1481;
              };
              var call1482 = callmethod(Grace_prelude,"while()do", [1, 1], block1471, block1476);
              lineNumber = 99
              var block1483 = Grace_allocObject();
              block1483.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1483.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1483.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1483.methods["match"] = GraceBlock_match;
              block1483.methods["prefix?"] = GraceBlock_lift;
              block1483.receiver = this;
              block1483.className = 'block<sniff:99>';
              block1483.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1485 = callmethod(this, "angle", [0]);
                var opresult1487 = callmethod(call1485, ">", [1], new GraceNum(360));
                return opresult1487;
              };
              lineNumber = 102
              var block1488 = Grace_allocObject();
              block1488.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1488.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1488.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1488.methods["match"] = GraceBlock_match;
              block1488.methods["prefix?"] = GraceBlock_lift;
              block1488.receiver = this;
              block1488.className = 'block<sniff:102>';
              block1488.real = function(
              ) {
                sourceObject = this;
                lineNumber = 101
                lineNumber = 85
                lineNumber = 101
                lineNumber = 100
                onSelf = true;
                var call1490 = callmethod(this, "angle", [0]);
                var diff1492 = callmethod(call1490, "-", [1], new GraceNum(360));
                onSelf = true;
                var call1493 = callmethod(this, "angle:=", [1], diff1492);
                return call1493;
              };
              var call1494 = callmethod(Grace_prelude,"while()do", [1, 1], block1483, block1488);
              return call1494
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1470.paramCounts = [
            0,
          ];
          func1470.variableArities = [
            false,
          ];
          obj1401.methods["normaliseAngle"] = func1470;
          func1470.definitionLine = 95;
          func1470.definitionModule = "sniff";
          var func1495 = function(argcv) {
            var curarg = 1;
            var var_degrees = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1495.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turn)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "sniff";
            try {
              lineNumber = 105
              lineNumber = 85
              lineNumber = 105
              lineNumber = 104
              onSelf = true;
              var call1497 = callmethod(this, "angle", [0]);
              var opresult1499 = callmethod(call1497, "+", [1], var_degrees);
              onSelf = true;
              var call1500 = callmethod(this, "angle:=", [1], opresult1499);
              lineNumber = 105
              onSelf = true;
              var call1501 = callmethod(this, "normaliseAngle", [0]);
              return call1501
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1495.paramCounts = [
            1,
          ];
          func1495.variableArities = [
            false,
          ];
          obj1401.methods["turn"] = func1495;
          func1495.definitionLine = 103;
          func1495.definitionModule = "sniff";
          var func1502 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1502.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touchingEdge)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "sniff";
            try {
              lineNumber = 111
              var if1503 = var_done;
              lineNumber = 108
              onSelf = true;
              var call1504 = callmethod(this, "x", [0]);
              var call1505 = callmethod(var_point,"x()y", [1, 1], call1504, new GraceNum(0));
              onSelf = true;
              var call1506 = callmethod(this, "isPointOver", [1], call1505);
              if (Grace_isTrue(call1506)) {
                lineNumber = 110
                lineNumber = 109
                var bool1507 = new GraceBoolean(true)
                return bool1507
                if1503 = undefined;
              }
              lineNumber = 114
              var if1508 = var_done;
              lineNumber = 111
              onSelf = true;
              var call1509 = callmethod(this, "x", [0]);
              var call1510 = callmethod(var_point,"x()y", [1, 1], call1509, var_canvasHeight);
              onSelf = true;
              var call1511 = callmethod(this, "isPointOver", [1], call1510);
              if (Grace_isTrue(call1511)) {
                lineNumber = 113
                lineNumber = 112
                var bool1512 = new GraceBoolean(true)
                return bool1512
                if1508 = undefined;
              }
              lineNumber = 117
              var if1513 = var_done;
              lineNumber = 114
              onSelf = true;
              var call1514 = callmethod(this, "y", [0]);
              var call1515 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1514);
              onSelf = true;
              var call1516 = callmethod(this, "isPointOver", [1], call1515);
              if (Grace_isTrue(call1516)) {
                lineNumber = 116
                lineNumber = 115
                var bool1517 = new GraceBoolean(true)
                return bool1517
                if1513 = undefined;
              }
              lineNumber = 120
              var if1518 = var_done;
              lineNumber = 117
              onSelf = true;
              var call1519 = callmethod(this, "y", [0]);
              var call1520 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1519);
              onSelf = true;
              var call1521 = callmethod(this, "isPointOver", [1], call1520);
              if (Grace_isTrue(call1521)) {
                lineNumber = 119
                lineNumber = 118
                var bool1522 = new GraceBoolean(true)
                return bool1522
                if1518 = undefined;
              }
              lineNumber = 121
              lineNumber = 120
              var bool1523 = new GraceBoolean(false)
              return bool1523
              return undefined
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1502.paramCounts = [
            0,
          ];
          func1502.variableArities = [
            false,
          ];
          obj1401.methods["touchingEdge"] = func1502;
          func1502.definitionLine = 107;
          func1502.definitionModule = "sniff";
          var func1524 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1524.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounce)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "sniff";
            try {
              lineNumber = 124
              lineNumber = 123
              var var_dx = new GraceNum(0);
              lineNumber = 124;
              moduleName = "sniff";
              lineNumber = 123
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_dx)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'dx' to be of type Unknown"))
              lineNumber = 125
              lineNumber = 124
              var var_dy = new GraceNum(0);
              lineNumber = 125;
              moduleName = "sniff";
              lineNumber = 124
              if (!Grace_isTrue(callmethod(var_Unknown, "match",
                [1], var_dy)))
                  throw new GraceExceptionPacket(TypeErrorObject,
                        new GraceString("expected "
                        + "initial value of var 'dy' to be of type Unknown"))
              lineNumber = 128
              var if1525 = var_done;
              lineNumber = 125
              onSelf = true;
              var call1526 = callmethod(this, "x", [0]);
              var call1527 = callmethod(var_point,"x()y", [1, 1], call1526, new GraceNum(0));
              onSelf = true;
              var call1528 = callmethod(this, "isPointOver", [1], call1527);
              if (Grace_isTrue(call1528)) {
                lineNumber = 126
                onSelf = true;
                var call1529 = callmethod(this, "bounceFrom", [1], var_top);
                if1525 = call1529;
              }
              lineNumber = 131
              var if1530 = var_done;
              lineNumber = 128
              onSelf = true;
              var call1531 = callmethod(this, "x", [0]);
              var call1532 = callmethod(var_point,"x()y", [1, 1], call1531, var_canvasHeight);
              onSelf = true;
              var call1533 = callmethod(this, "isPointOver", [1], call1532);
              if (Grace_isTrue(call1533)) {
                lineNumber = 129
                onSelf = true;
                var call1534 = callmethod(this, "bounceFrom", [1], var_bottom);
                if1530 = call1534;
              }
              lineNumber = 134
              var if1535 = var_done;
              lineNumber = 131
              onSelf = true;
              var call1536 = callmethod(this, "y", [0]);
              var call1537 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), call1536);
              onSelf = true;
              var call1538 = callmethod(this, "isPointOver", [1], call1537);
              if (Grace_isTrue(call1538)) {
                lineNumber = 132
                onSelf = true;
                var call1539 = callmethod(this, "bounceFrom", [1], var_left);
                if1535 = call1539;
              }
              lineNumber = 137
              var if1540 = var_done;
              lineNumber = 134
              onSelf = true;
              var call1541 = callmethod(this, "y", [0]);
              var call1542 = callmethod(var_point,"x()y", [1, 1], var_canvasWidth, call1541);
              onSelf = true;
              var call1543 = callmethod(this, "isPointOver", [1], call1542);
              if (Grace_isTrue(call1543)) {
                lineNumber = 135
                onSelf = true;
                var call1544 = callmethod(this, "bounceFrom", [1], var_right);
                if1540 = call1544;
              }
              lineNumber = 137
              var block1545 = Grace_allocObject();
              block1545.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1545.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1545.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1545.methods["match"] = GraceBlock_match;
              block1545.methods["prefix?"] = GraceBlock_lift;
              block1545.receiver = this;
              block1545.className = 'block<sniff:137>';
              block1545.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1546 = callmethod(this, "touchingEdge", [0]);
                return call1546;
              };
              lineNumber = 140
              var block1547 = Grace_allocObject();
              block1547.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1547.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1547.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1547.methods["match"] = GraceBlock_match;
              block1547.methods["prefix?"] = GraceBlock_lift;
              block1547.receiver = this;
              block1547.className = 'block<sniff:140>';
              block1547.real = function(
              ) {
                sourceObject = this;
                lineNumber = 138
                onSelf = true;
                var call1548 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1548;
              };
              var call1549 = callmethod(Grace_prelude,"while()do", [1, 1], block1545, block1547);
              return call1549
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1524.paramCounts = [
            0,
          ];
          func1524.variableArities = [
            false,
          ];
          obj1401.methods["bounce"] = func1524;
          func1524.definitionLine = 122;
          func1524.definitionModule = "sniff";
          var func1550 = function(argcv) {
            var curarg = 1;
            var var_dir = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1550.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceFrom)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "sniff";
            try {
              lineNumber = 145
              var if1551 = var_done;
              lineNumber = 142
              var string1552 = new GraceString("left");
              var opresult1555 = callmethod(var_dir, "==", [1], string1552);
              if (Grace_isTrue(opresult1555)) {
                lineNumber = 144
                lineNumber = 85
                lineNumber = 144
                lineNumber = 143
                onSelf = true;
                var call1556 = callmethod(this, "angle", [0]);
                var diff1559 = callmethod(new GraceNum(360), "-", [1], call1556);
                onSelf = true;
                var call1560 = callmethod(this, "angle:=", [1], diff1559);
                if1551 = call1560;
              }
              lineNumber = 148
              var if1561 = var_done;
              lineNumber = 145
              var string1562 = new GraceString("right");
              var opresult1565 = callmethod(var_dir, "==", [1], string1562);
              if (Grace_isTrue(opresult1565)) {
                lineNumber = 147
                lineNumber = 85
                lineNumber = 147
                lineNumber = 146
                onSelf = true;
                var call1566 = callmethod(this, "angle", [0]);
                var diff1569 = callmethod(new GraceNum(360), "-", [1], call1566);
                onSelf = true;
                var call1570 = callmethod(this, "angle:=", [1], diff1569);
                if1561 = call1570;
              }
              lineNumber = 151
              var if1571 = var_done;
              lineNumber = 148
              var string1572 = new GraceString("top");
              var opresult1575 = callmethod(var_dir, "==", [1], string1572);
              if (Grace_isTrue(opresult1575)) {
                lineNumber = 150
                lineNumber = 85
                lineNumber = 150
                lineNumber = 149
                onSelf = true;
                var call1576 = callmethod(this, "angle", [0]);
                var diff1579 = callmethod(new GraceNum(180), "-", [1], call1576);
                onSelf = true;
                var call1580 = callmethod(this, "angle:=", [1], diff1579);
                if1571 = call1580;
              }
              lineNumber = 154
              var if1581 = var_done;
              lineNumber = 151
              var string1582 = new GraceString("bottom");
              var opresult1585 = callmethod(var_dir, "==", [1], string1582);
              if (Grace_isTrue(opresult1585)) {
                lineNumber = 153
                lineNumber = 85
                lineNumber = 153
                lineNumber = 152
                onSelf = true;
                var call1586 = callmethod(this, "angle", [0]);
                var diff1589 = callmethod(new GraceNum(180), "-", [1], call1586);
                onSelf = true;
                var call1590 = callmethod(this, "angle:=", [1], diff1589);
                if1581 = call1590;
              }
              lineNumber = 154
              onSelf = true;
              var call1591 = callmethod(this, "normaliseAngle", [0]);
              lineNumber = 155
              onSelf = true;
              var call1592 = callmethod(this, "forward", [1], new GraceNum(2));
              return call1592
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1550.paramCounts = [
            1,
          ];
          func1550.variableArities = [
            false,
          ];
          obj1401.methods["bounceFrom"] = func1550;
          func1550.definitionLine = 141;
          func1550.definitionModule = "sniff";
          var func1593 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1593.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (bounceOff)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "sniff";
            try {
              lineNumber = 161
              var if1594 = var_done;
              lineNumber = 158
              var call1595 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1597 = callmethod(this, "x", [0]);
              var opresult1599 = callmethod(call1597, ">", [1], call1595);
              if (Grace_isTrue(opresult1599)) {
                lineNumber = 159
                onSelf = true;
                var call1600 = callmethod(this, "bounceFrom", [1], var_left);
                if1594 = call1600;
              }
              lineNumber = 164
              var if1601 = var_done;
              lineNumber = 161
              var call1602 = callmethod(var_other,"x", [0]);
              onSelf = true;
              var call1604 = callmethod(this, "x", [0]);
              var opresult1606 = callmethod(call1604, "<", [1], call1602);
              if (Grace_isTrue(opresult1606)) {
                lineNumber = 162
                onSelf = true;
                var call1607 = callmethod(this, "bounceFrom", [1], var_right);
                if1601 = call1607;
              }
              lineNumber = 164
              var block1608 = Grace_allocObject();
              block1608.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1608.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1608.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1608.methods["match"] = GraceBlock_match;
              block1608.methods["prefix?"] = GraceBlock_lift;
              block1608.receiver = this;
              block1608.className = 'block<sniff:164>';
              block1608.real = function(
              ) {
                sourceObject = this;
                onSelf = true;
                var call1609 = callmethod(this, "touching", [1], var_other);
                return call1609;
              };
              lineNumber = 167
              var block1610 = Grace_allocObject();
              block1610.methods["apply"] = function() {
                var args = Array.prototype.slice.call(arguments, 1);
                return this.real.apply(this.receiver, args);
              }
              block1610.methods["applyIndirectly"] = function(argcv, a) {
                return this.real.apply(this.receiver, a._value);
              }
              block1610.methods["outer"] = function() {
                return callmethod(this.receiver, 'outer', [0]);
              }
              block1610.methods["match"] = GraceBlock_match;
              block1610.methods["prefix?"] = GraceBlock_lift;
              block1610.receiver = this;
              block1610.className = 'block<sniff:167>';
              block1610.real = function(
              ) {
                sourceObject = this;
                lineNumber = 165
                onSelf = true;
                var call1611 = callmethod(this, "forward", [1], new GraceNum(1));
                return call1611;
              };
              var call1612 = callmethod(Grace_prelude,"while()do", [1, 1], block1608, block1610);
              return call1612
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1593.paramCounts = [
            1,
          ];
          func1593.variableArities = [
            false,
          ];
          obj1401.methods["bounceOff"] = func1593;
          func1593.definitionLine = 157;
          func1593.definitionModule = "sniff";
          var func1613 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1613.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (touching)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "sniff";
            try {
              lineNumber = 169
              onSelf = true;
              var call1614 = callmethod(this, "x", [0]);
              onSelf = true;
              var call1615 = callmethod(this, "y", [0]);
              var call1616 = callmethod(var_point,"x()y", [1, 1], call1614, call1615);
              var call1617 = callmethod(var_other,"isPointOver", [1], call1616);
              return call1617
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1613.paramCounts = [
            1,
          ];
          func1613.variableArities = [
            false,
          ];
          obj1401.methods["touching"] = func1613;
          func1613.definitionLine = 168;
          func1613.definitionModule = "sniff";
          var func1618 = function(argcv) {
            var curarg = 1;
            var var_other = arguments[curarg];
            curarg++;
            if (argcv[0] !=  func1618.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (face)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "sniff";
            try {
              lineNumber = 175
              var if1619 = var_done;
              lineNumber = 172
              onSelf = true;
              var call1620 = callmethod(this, "y", [0]);
              var call1622 = callmethod(var_other,"y", [0]);
              var opresult1624 = callmethod(call1622, "!=", [1], call1620);
              onSelf = true;
              var call1626 = callmethod(this, "x", [0]);
              var call1628 = callmethod(var_other,"x", [0]);
              var opresult1630 = callmethod(call1628, "!=", [1], call1626);
              var opresult1632 = callmethod(opresult1630, "||", [1], opresult1624);
              if (Grace_isTrue(opresult1632)) {
                lineNumber = 174
                lineNumber = 172
                lineNumber = 174
                lineNumber = 173
                onSelf = true;
                var call1635 = callmethod(this, "x", [0]);
                var call1637 = callmethod(var_other,"x", [0]);
                var diff1639 = callmethod(call1637, "-", [1], call1635);
                onSelf = true;
                var call1640 = callmethod(this, "y", [0]);
                var call1642 = callmethod(var_other,"y", [0]);
                var diff1644 = callmethod(call1642, "-", [1], call1640);
                var call1645 = callmethod(var_trig,"atan2", [2], diff1639, diff1644);
                var prod1647 = callmethod(call1645, "*", [1], new GraceNum(180));
                var quotient1649 = callmethod(prod1647, "/", [1], new GraceNum(3.1415));
                onSelf = true;
                var call1650 = callmethod(this, "angle:=", [1], quotient1649);
                if1619 = call1650;
              }
              lineNumber = 175
              onSelf = true;
              var call1651 = callmethod(this, "normaliseAngle", [0]);
              return call1651
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1618.paramCounts = [
            1,
          ];
          func1618.variableArities = [
            false,
          ];
          obj1401.methods["face"] = func1618;
          func1618.definitionLine = 171;
          func1618.definitionModule = "sniff";
          var func1652 = function(argcv) {
            var curarg = 1;
            if (argcv[0] !=  func1652.paramCounts[0])
              callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stamp)"));
            var returnTarget = invocationCount;
            invocationCount++;
            moduleName = "sniff";
            try {
              lineNumber = 178
              var string1653 = new GraceString("2d");
              var call1654 = callmethod(var_backingCanvas,"getContext", [1], string1653);
              onSelf = true;
              var call1655 = callmethod(this, "draw", [1], call1654);
              return call1655
            } catch(e) {
              if ((e.exctype == 'return') && (e.target == returnTarget)) {
                return e.returnvalue;
              } else {
                throw e;
              }
            }
          }
          func1652.paramCounts = [
            0,
          ];
          func1652.variableArities = [
            false,
          ];
          obj1401.methods["stamp"] = func1652;
          func1652.definitionLine = 177;
          func1652.definitionModule = "sniff";
          sourceObject = obj1401;
          lineNumber = 49
          var call1656 = callmethod(superDepth, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1657 = callmethod(call1656, "outer", [0]);
          onOuter = true;
          onSelf = true;
          var call1658 = callmethod(call1657, "initialise", [0]);
          sourceObject = obj1401;
          lineNumber = 50
          var call1659 = callmethod(var_registeredObjects,"push", [1], this);
          sourceObject = obj1401;
          lineNumber = 52
          lineNumber = 51
          var_above = this;
          sourceObject = obj1401;
          lineNumber = 53
          lineNumber = 52
          var___916__ = this;
          sourceObject = obj1401;
          lineNumber = 53
          var call1660 = callmethod(var_collections,"list", [0]);
          var call1661 = callmethod(call1660,"new", [0]);
          obj1401.data["alwaysBlocks"] = call1661;
          var reader_sniff_alwaysBlocks_1662 = function() {
            return this.data["alwaysBlocks"];
          }
          reader_sniff_alwaysBlocks_1662.def = true;
          reader_sniff_alwaysBlocks_1662.confidential = true;
          obj1401.methods["alwaysBlocks"] = reader_sniff_alwaysBlocks_1662;
          lineNumber = 54;
          moduleName = "sniff";
          lineNumber = 53
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1661)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'alwaysBlocks' to be of type Unknown"))
          sourceObject = obj1401;
          lineNumber = 55
          lineNumber = 54
          var quotient1665 = callmethod(var_canvasWidth, "/", [1], new GraceNum(2));
          obj1401.data["x"] = quotient1665;
          var reader_sniff_x_1666 = function() {
            return this.data["x"];
          }
          obj1401.methods["x"] = reader_sniff_x_1666;
          obj1401.data["x"] = quotient1665;
          var writer_sniff_x_1666 = function(argcv, o) {
            this.data["x"] = o;
          }
          obj1401.methods["x:="] = writer_sniff_x_1666;
          writer_sniff_x_1666.confidential = true;
          lineNumber = 55;
          moduleName = "sniff";
          lineNumber = 54
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1665)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'x' to be of type Unknown"))
          obj1401.mutable = true;
          sourceObject = obj1401;
          lineNumber = 56
          lineNumber = 55
          var quotient1669 = callmethod(var_canvasHeight, "/", [1], new GraceNum(2));
          obj1401.data["y"] = quotient1669;
          var reader_sniff_y_1670 = function() {
            return this.data["y"];
          }
          obj1401.methods["y"] = reader_sniff_y_1670;
          obj1401.data["y"] = quotient1669;
          var writer_sniff_y_1670 = function(argcv, o) {
            this.data["y"] = o;
          }
          obj1401.methods["y:="] = writer_sniff_y_1670;
          writer_sniff_y_1670.confidential = true;
          lineNumber = 56;
          moduleName = "sniff";
          lineNumber = 55
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], quotient1669)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'y' to be of type Unknown"))
          obj1401.mutable = true;
          sourceObject = obj1401;
          lineNumber = 56
          onSelf = true;
          var call1671 = callmethod(this, "x", [0]);
          obj1401.data["destX"] = call1671;
          var reader_sniff_destX_1672 = function() {
            return this.data["destX"];
          }
          obj1401.methods["destX"] = reader_sniff_destX_1672;
          obj1401.data["destX"] = call1671;
          var writer_sniff_destX_1672 = function(argcv, o) {
            this.data["destX"] = o;
          }
          obj1401.methods["destX:="] = writer_sniff_destX_1672;
          reader_sniff_destX_1672.confidential = true;
          writer_sniff_destX_1672.confidential = true;
          lineNumber = 57;
          moduleName = "sniff";
          lineNumber = 56
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1671)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destX' to be of type Unknown"))
          obj1401.mutable = true;
          sourceObject = obj1401;
          lineNumber = 57
          onSelf = true;
          var call1673 = callmethod(this, "y", [0]);
          obj1401.data["destY"] = call1673;
          var reader_sniff_destY_1674 = function() {
            return this.data["destY"];
          }
          obj1401.methods["destY"] = reader_sniff_destY_1674;
          obj1401.data["destY"] = call1673;
          var writer_sniff_destY_1674 = function(argcv, o) {
            this.data["destY"] = o;
          }
          obj1401.methods["destY:="] = writer_sniff_destY_1674;
          reader_sniff_destY_1674.confidential = true;
          writer_sniff_destY_1674.confidential = true;
          lineNumber = 58;
          moduleName = "sniff";
          lineNumber = 57
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], call1673)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'destY' to be of type Unknown"))
          obj1401.mutable = true;
          sourceObject = obj1401;
          lineNumber = 58
          obj1401.data["angle"] = new GraceNum(180);
          var reader_sniff_angle_1675 = function() {
            return this.data["angle"];
          }
          obj1401.methods["angle"] = reader_sniff_angle_1675;
          obj1401.data["angle"] = new GraceNum(180);
          var writer_sniff_angle_1675 = function(argcv, o) {
            this.data["angle"] = o;
          }
          obj1401.methods["angle:="] = writer_sniff_angle_1675;
          reader_sniff_angle_1675.confidential = true;
          writer_sniff_angle_1675.confidential = true;
          lineNumber = 59;
          moduleName = "sniff";
          lineNumber = 58
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], new GraceNum(180))))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of var 'angle' to be of type Unknown"))
          obj1401.mutable = true;
          sourceObject = obj1401;
          sourceObject = obj1401;
          sourceObject = obj1401;
          sourceObject = obj1401;
          sourceObject = obj1401;
          sourceObject = obj1401;
          sourceObject = obj1401;
          sourceObject = obj1401;
          sourceObject = obj1401;
          sourceObject = obj1401;
          sourceObject = obj1401;
          sourceObject = obj1401;
          sourceObject = obj1401;
          sourceObject = obj1401;
          sourceObject = obj1401;
          sourceObject = obj1401;
          sourceObject = obj1401;
          sourceObject = obj1401;
          sourceObject = obj1401;
          superDepth = origSuperDepth;
        }
        obj_init_1401.apply(inheritingObject, []);
        return obj1401
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj1122.methods["new()object"] = func1400;
    var func1676 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "sniff";
      try {
        lineNumber = 48
        var string1677 = new GraceString("class drawable");
        return string1677
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1676.paramCounts = [
    ];
    func1676.variableArities = [
    ];
    obj1122.methods["asDebugString"] = func1676;
    func1676.definitionLine = 48;
    func1676.definitionModule = "sniff";
    sourceObject = obj1122;
    sourceObject = obj1122;
    superDepth = origSuperDepth;
  }
  obj_init_1122.apply(obj1122, []);
  var var_drawable = obj1122;
  lineNumber = 182
  lineNumber = 219
  lineNumber = 255
  lineNumber = 298
  lineNumber = 315
  var obj1678 = Grace_allocObject();
  obj1678.definitionModule = "sniff";
  obj1678.definitionLine = 315;
  obj1678.outer = this;
  var reader_sniff_outer_1679 = function() {
    return this.outer;
  }
  obj1678.methods["outer"] = reader_sniff_outer_1679;
  function obj_init_1678() {
    var origSuperDepth = superDepth;
    superDepth = obj1678;
    obj1678.annotations = [];
    var func1680 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1680.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (x)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "sniff";
      try {
        lineNumber = 318
        onSelf = true;
        var call1681 = callmethod(this, "position", [0]);
        var call1682 = callmethod(call1681,"x", [0]);
        return call1682
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1680.paramCounts = [
      0,
    ];
    func1680.variableArities = [
      false,
    ];
    obj1678.methods["x"] = func1680;
    func1680.definitionLine = 317;
    func1680.definitionModule = "sniff";
    var func1683 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1683.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (y)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "sniff";
      try {
        lineNumber = 321
        onSelf = true;
        var call1684 = callmethod(this, "position", [0]);
        var call1685 = callmethod(call1684,"y", [0]);
        return call1685
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1683.paramCounts = [
      0,
    ];
    func1683.variableArities = [
      false,
    ];
    obj1678.methods["y"] = func1683;
    func1683.definitionLine = 320;
    func1683.definitionModule = "sniff";
    var func1686 = function(argcv) {
      var curarg = 1;
      if (argcv[0] !=  func1686.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (location)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "sniff";
      try {
        lineNumber = 324
        onSelf = true;
        var call1687 = callmethod(this, "position", [0]);
        return call1687
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func1686.paramCounts = [
      0,
    ];
    func1686.variableArities = [
      false,
    ];
    obj1678.methods["location"] = func1686;
    func1686.definitionLine = 323;
    func1686.definitionModule = "sniff";
    sourceObject = obj1678;
    lineNumber = 316
    var call1688 = callmethod(var_point,"x()y", [1, 1], new GraceNum(0), new GraceNum(0));
    obj1678.data["position"] = call1688;
    var reader_sniff_position_1689 = function() {
      return this.data["position"];
    }
    obj1678.methods["position"] = reader_sniff_position_1689;
    obj1678.data["position"] = call1688;
    var writer_sniff_position_1689 = function(argcv, o) {
      this.data["position"] = o;
    }
    obj1678.methods["position:="] = writer_sniff_position_1689;
    lineNumber = 316;
    moduleName = "sniff";
    if (!Grace_isTrue(callmethod(var_Unknown, "match",
      [1], call1688)))
        throw new GraceExceptionPacket(TypeErrorObject,
              new GraceString("expected "
              + "initial value of var 'position' to be of type Unknown"))
    obj1678.mutable = true;
    sourceObject = obj1678;
    sourceObject = obj1678;
    sourceObject = obj1678;
    superDepth = origSuperDepth;
  }
  obj_init_1678.apply(obj1678, []);
  var var_mouse = obj1678;
  lineNumber = 321
  var func1690 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func1690.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (mouse)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "sniff";
    try {
      lineNumber = 315
      return var_mouse
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func1690.paramCounts = [
    0,
  ];
  func1690.variableArities = [
    false,
  ];
  this.methods["mouse"] = func1690;
  func1690.definitionLine = 321;
  func1690.definitionModule = "sniff";
  lineNumber = 315;
  moduleName = "sniff";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_mouse)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'mouse' to be of type Unknown"))
  return this;
}
gracecode_sniff.imports = [
'mgcollections',
'dom',
'math',
'StandardPrelude',
];
if (gctCache)
  gctCache['sniff'] = "public:\n document\n document:=\n canvas\n canvas:=\n backingCanvas\n backingCanvas:=\n backingContext\n backingContext:=\n mouseDownListener\n mouseDownListener:=\n mouseMoveListener\n mouseMoveListener:=\n trig\n PI\n stopRunning\n stopRunning:=\n initialised\n initialised:=\n backgroundColour\n backgroundColour:=\n registeredObjects\n stepBlocks\n audioTags\n canvasWidth\n canvasWidth:=\n canvasHeight\n canvasHeight:=\n left\n right\n top\n bottom\n centre\n centre:=\n leftCentre\n leftCentre:=\n rightCentre\n rightCentre:=\n above\n above:=\n \u0394\n \u0394:=\n point\n drawable\n rectangle\n SniffCircle\n circle\n image\n value\n mouse\n clear\n always\n whenever()do\n hue()saturation()lightness\n h()s()l\n initialise\n background\n random\n randomPoint\n playSound\n stopSound\n start\n stop\n atModuleEnd\nconstructors-of:point:\n x()y\nmethods-of:point.x()y:\n right\n down\n up\n x\n y\n left\nfresh:rectangle:\n destY:=\n touching\n turn\n tick\n draw\n alwaysBlocks\n width:=\n x\n height\n moveTo\n jumpTo\n width\n stamp\n angle\n face\n bounceFrom\n always\n x:=\n touchingEdge\n bounceOff\n step\n destX:=\n destX\n destY\n colour:=\n y:=\n normaliseAngle\n y\n colour\n forward\n angle:=\n whenever()do\n mousedown\n isPointOver\n asString\n height:=\n bounce\nmethods-of:drawable.new:\n destX:=\n destY:=\n touching\n destX\n destY\n tick\n draw\n alwaysBlocks\n y:=\n normaliseAngle\n forward\n x\n y\n moveTo\n angle:=\n jumpTo\n mousedown\n isPointOver\n whenever()do\n stamp\n angle\n turn\n face\n bounceFrom\n always\n x:=\n touchingEdge\n bounceOff\n bounce\n step\npath:\n sniff\nclasses:\n point\n drawable\nfresh:value:\n destY:=\n touching\n turn\n tick\n draw\n alwaysBlocks\n label:=\n x\n y\n moveTo\n jumpTo\n label\n stamp\n angle\n face\n bounceFrom\n always\n x:=\n touchingEdge\n bounceOff\n step\n destX:=\n destX\n destY\n colour:=\n y:=\n normaliseAngle\n colour\n forward\n angle:=\n whenever()do\n mousedown\n isPointOver\n bounce\nconfidential:\nfresh-methods:\n rectangle\n circle\n image\n value\nfresh:circle:\n destY:=\n touching\n turn\n tick\n draw\n alwaysBlocks\n x\n y\n moveTo\n jumpTo\n stamp\n angle\n radius\n face\n bounceFrom\n always\n x:=\n touchingEdge\n bounceOff\n step\n destX:=\n destX\n destY\n colour:=\n y:=\n normaliseAngle\n colour\n forward\n angle:=\n whenever()do\n mousedown\n isPointOver\n radius:=\n bounce\nfresh:image:\n destY:=\n touching\n turn\n tick\n draw\n alwaysBlocks\n width:=\n x\n height\n moveTo\n jumpTo\n width\n stamp\n angle\n face\n bounceFrom\n always\n url\n x:=\n touchingEdge\n bounceOff\n imgTag\n step\n destX:=\n destX\n destY\n y:=\n normaliseAngle\n y\n forward\n angle:=\n whenever()do\n mousedown\n isPointOver\n url:=\n height:=\n bounce\nconstructors-of:drawable:\n new\nmodules:\n StandardPrelude\n mgcollections\n";
if (originalSourceLines) {
  originalSourceLines["sniff"] = [
    "import \"mgcollections\" as collections",
    "import \"dom\" as dom",
    "import \"math\" as randomModule",
    "",
    "import \"StandardPrelude\" as sp",
    "inherits sp.new",
    "",
    "var document",
    "var canvas",
    "var backingCanvas",
    "var backingContext",
    "var mouseDownListener",
    "var mouseMoveListener",
    "",
    "def trig = dom.window.Math",
    "def PI = 3.14159",
    "",
    "var stopRunning := false",
    "var initialised := false",
    "var backgroundColour := \"white\"",
    "def registeredObjects = collections.list.new",
    "def stepBlocks = collections.list.new",
    "def audioTags = collections.map.new",
    "",
    "var canvasWidth",
    "var canvasHeight",
    "",
    "def left = \"left\"",
    "def right = \"right\"",
    "def top = \"top\"",
    "def bottom = \"bottom\"",
    "",
    "var centre",
    "var leftCentre",
    "var rightCentre",
    "",
    "var above",
    "var Δ",
    "",
    "class point.x(x')y(y') {",
    "    def x is public = x'",
    "    def y is public = y'",
    "    method left(dx) { point.x(x - dx)y(y) }",
    "    method right(dx) { point.x(x + dx)y(y) }",
    "    method up(dy) { point.x(x)y(y - dy) }",
    "    method down(dy) { point.x(x)y(y + dy) }",
    "}",
    "class drawable.new {",
    "    initialise",
    "    registeredObjects.push(self)",
    "    above := self",
    "    Δ := self",
    "    def alwaysBlocks = collections.list.new",
    "    var x is readable := canvasWidth / 2",
    "    var y is readable := canvasHeight / 2",
    "    var destX := x",
    "    var destY := y",
    "    var angle := 180",
    "    method step {",
    "        for (alwaysBlocks) do {b->",
    "            b.apply",
    "        }",
    "        tick",
    "    }",
    "    method tick {}",
    "    method draw(ctx) {}",
    "    method moveTo(p) {",
    "        destX := p.x",
    "        destY := p.y",
    "    }",
    "    method jumpTo(p) {",
    "        x := p.x",
    "        y := p.y",
    "        destX := x",
    "        destY := y",
    "    }",
    "    method isPointOver(p) { false }",
    "    method mousedown {}",
    "    method always(b) {",
    "        alwaysBlocks.push(b)",
    "    }",
    "    method whenever(cond)do(b) {",
    "        always {",
    "            if (cond.apply) then {",
    "                b.apply",
    "            }",
    "        }",
    "    }",
    "    method forward(dist) {",
    "        def y' = trig.cos(angle / 180 * PI) * dist",
    "        def x' = trig.sin(angle / 180 * PI) * dist",
    "        x := x + x'",
    "        y := y + y'",
    "    }",
    "    method normaliseAngle {",
    "        while {angle < 0} do {",
    "            angle := angle + 360",
    "        }",
    "        while {angle > 360} do {",
    "            angle := angle - 360",
    "        }",
    "    }",
    "    method turn(degrees) {",
    "        angle := angle + degrees",
    "        normaliseAngle",
    "    }",
    "    method touchingEdge {",
    "        if (isPointOver(point.x(x)y(0))) then {",
    "            return true",
    "        }",
    "        if (isPointOver(point.x(x)y(canvasHeight))) then {",
    "            return true",
    "        }",
    "        if (isPointOver(point.x(0)y(y))) then {",
    "            return true",
    "        }",
    "        if (isPointOver(point.x(canvasWidth)y(y))) then {",
    "            return true",
    "        }",
    "        return false",
    "    }",
    "    method bounce {",
    "        var dx := 0",
    "        var dy := 0",
    "        if (isPointOver(point.x(x)y(0))) then {",
    "            bounceFrom(top)",
    "        }",
    "        if (isPointOver(point.x(x)y(canvasHeight))) then {",
    "            bounceFrom(bottom)",
    "        }",
    "        if (isPointOver(point.x(0)y(y))) then {",
    "            bounceFrom(left)",
    "        }",
    "        if (isPointOver(point.x(canvasWidth)y(y))) then {",
    "            bounceFrom(right)",
    "        }",
    "        while { touchingEdge } do {",
    "            forward 1",
    "        }",
    "    }",
    "    method bounceFrom(dir) {",
    "        if (dir == \"left\") then {",
    "            angle := 360 - angle",
    "        }",
    "        if (dir == \"right\") then {",
    "            angle := 360 - angle",
    "        }",
    "        if (dir == \"top\") then {",
    "            angle := 180 - angle",
    "        }",
    "        if (dir == \"bottom\") then {",
    "            angle := 180 - angle",
    "        }",
    "        normaliseAngle",
    "        forward 2",
    "    }",
    "    method bounceOff(other) {",
    "        if (x > other.x) then {",
    "            bounceFrom(left)",
    "        }",
    "        if (x < other.x) then {",
    "            bounceFrom(right)",
    "        }",
    "        while { touching(other) } do {",
    "            forward 1",
    "        }",
    "    }",
    "    method touching(other) {",
    "        other.isPointOver(point.x(x)y(y))",
    "    }",
    "    method face(other) {",
    "        if ((other.x != x) || (other.y != y)) then {",
    "            angle := trig.atan2(other.x - x, other.y - y) * 180 / 3.1415",
    "        }",
    "        normaliseAngle",
    "    }",
    "    method stamp {",
    "        draw(backingCanvas.getContext(\"2d\"))",
    "    }",
    "}",
    "",
    "method rectangle {",
    "    object {",
    "        inherits drawable.new",
    "        var width := 100",
    "        var height := 50",
    "        var colour := \"blue\"",
    "        method draw(ctx) {",
    "            ctx.fillStyle := colour",
    "            ctx.fillRect(x - width / 2, y - height / 2, width, height)",
    "        }",
    "        method isPointOver(p) {",
    "            if (p.x < (x - width / 2)) then {",
    "                return false",
    "            }",
    "            if (p.x > (x + width / 2)) then {",
    "                return false",
    "            }",
    "            if (p.y < (y - height / 2)) then {",
    "                return false",
    "            }",
    "            if (p.y > (y + height / 2)) then {",
    "                return false",
    "            }",
    "            return true",
    "        }",
    "        method asString {",
    "            return \"rectangle\"",
    "        }",
    "    }",
    "}",
    "",
    "type SniffCircle = {",
    "    x -> Number",
    "    y -> Number",
    "    radius -> Number",
    "    colour -> String",
    "}",
    "method circle {",
    "    object {",
    "        inherits drawable.new",
    "        var radius is readable := 25",
    "        var colour is readable := \"green\"",
    "        method draw(ctx) {",
    "            ctx.fillStyle := colour",
    "            ctx.beginPath",
    "            ctx.arc(x, y, radius, 0, 6.283)",
    "            ctx.fill",
    "        }",
    "        method isPointOver(p) {",
    "            def dx = (p.x - x)",
    "            def dy = (p.y - y)",
    "            def dist = (dx * dx + dy * dy) ^ 0.5",
    "            if (dist <= radius) then {",
    "                return true",
    "            }",
    "            return false",
    "        }",
    "        method touching(other) {",
    "            if (SniffCircle.match(other)) then {",
    "                def n2 = (((x - other.x) ^ 2) + ((y - other.y) ^ 2))",
    "                if (n2 == 0) then {",
    "                    return true",
    "                }",
    "                if ((n2 ^ 0.5) < (other.radius + radius)) then {",
    "                    return true",
    "                }",
    "                return false",
    "            }",
    "            super.touching(other)",
    "        }",
    "    }",
    "}",
    "",
    "method image {",
    "    object {",
    "        inherits drawable.new",
    "        var width := 64",
    "        var height := 64",
    "        def imgTag = dom.document.createElement(\"img\")",
    "        method url {",
    "            imgTag.src",
    "        }",
    "        method url:=(s) {",
    "            imgTag.src := s",
    "        }",
    "        method draw(ctx) {",
    "            ctx.save",
    "            ctx.translate(x, y)",
    "            ctx.rotate(-(angle + 180) / 180 * 3.1415)",
    "            ctx.drawImage(imgTag, -width / 2, -height / 2, width, height)",
    "            ctx.restore",
    "        }",
    "        method isPointOver(p) {",
    "            // Rotate p and express it relative to (x, y), then just",
    "            // check whether it's within the bounds of the rectangle.",
    "            def c = trig.cos(-(angle + 180) / 180 * 3.1415)",
    "            def s = trig.sin(-(angle + 180) / 180 * 3.1415)",
    "            def rotatedX = c * (p.x - x) - s * (p.y - y)",
    "            def rotatedY = s * (p.x - x) + c * (p.y - y)",
    "            if (rotatedX < (-width / 2)) then {",
    "                return false",
    "            }",
    "            if (rotatedX > (width / 2)) then {",
    "                return false",
    "            }",
    "            if (rotatedY < (-height / 2)) then {",
    "                return false",
    "            }",
    "            if (rotatedY > (height / 2)) then {",
    "                return false",
    "            }",
    "            return true",
    "        }",
    "    }",
    "}",
    "",
    "method value(b) {",
    "    object {",
    "        inherits drawable.new",
    "        var colour := \"blue\"",
    "        var label := \"\"",
    "        method draw(ctx) {",
    "            ctx.fillStyle := colour",
    "            ctx.font := \"20px sans-serif\"",
    "            if (label != \"\") then {",
    "                ctx.fillText(\"{label} {b.apply}\", x, y)",
    "            } else {",
    "                ctx.fillText(\"{b.apply}\", x, y)",
    "            }",
    "        }",
    "    }",
    "}",
    "",
    "def mouse = object {",
    "    var position is public := point.x(0)y(0)",
    "    method x {",
    "        position.x",
    "    }",
    "    method y {",
    "        position.y",
    "    }",
    "    method location {",
    "        position",
    "    }",
    "}",
    "",
    "method clear {",
    "    def ctx = backingCanvas.getContext(\"2d\")",
    "    ctx.fillStyle := backgroundColour",
    "    ctx.fillRect(0, 0, canvasWidth, canvasHeight)",
    "}",
    "method always(b) {",
    "    stepBlocks.push(b)",
    "}",
    "method whenever(c)do(b) {",
    "    stepBlocks.push({",
    "        if (c.apply) then { b.apply }",
    "    })",
    "}",
    "method hue(h)saturation(s)lightness(l) {",
    "    return \"hsl({h}, {s}%, {l}%)\"",
    "}",
    "method h(h)s(s)l(l) {",
    "    hue(h)saturation(s)lightness(l)",
    "}",
    "method initialise {",
    "    if (initialised) then {",
    "        return false",
    "    }",
    "    initialised := true",
    "    document := dom.document",
    "    canvas := document.getElementById(\"standard-canvas\")",
    "    canvasWidth := canvas.width",
    "    canvasHeight := canvas.height",
    "    centre := point.x(canvasWidth / 2)y(canvasHeight / 2)",
    "    leftCentre := point.x(0)y(canvasHeight / 2)",
    "    rightCentre := point.x(canvasWidth)y(canvasHeight / 2)",
    "    mouse.position := centre",
    "    // Save the listener functions so that we can remove them",
    "    // later on.",
    "    mouseMoveListener := { ev ->",
    "        def x = (ev.clientX - canvas.offsetLeft) / canvas.offsetWidth * canvasHeight",
    "        def y = (ev.clientY - canvas.offsetTop - 7) / canvas.offsetHeight * canvasHeight",
    "        mouse.position := point.x(x)y(y)",
    "    }",
    "    canvas.addEventListener(\"mousemove\", mouseMoveListener)",
    "    mouseDownListener := { ev ->",
    "        def x = (ev.clientX - canvas.offsetLeft) / canvas.offsetWidth * canvasHeight",
    "        def y = (ev.clientY - canvas.offsetTop) / canvas.offsetHeight * canvasHeight",
    "        if ((x > (canvasWidth - 20)) && (y < 20)) then {",
    "            ev.preventDefault",
    "            stop",
    "        }",
    "        def p = point.x(x)y(y)",
    "        for (registeredObjects) do {obj->",
    "            if (obj.isPointOver(p)) then {",
    "                obj.mousedown",
    "                ev.preventDefault",
    "            }",
    "        }",
    "    }",
    "    canvas.addEventListener(\"mousedown\", mouseDownListener)",
    "}",
    "method background(col) {",
    "    backgroundColour := col",
    "}",
    "method random(n) {",
    "    (n * randomModule.random).truncate",
    "}",
    "method randomPoint {",
    "    point.x(canvasWidth / 10 + random(canvasWidth * 0.8))",
    "        y(canvasHeight / 10 + random(canvasHeight * 0.8))",
    "}",
    "method playSound(url) {",
    "    if (audioTags.contains(url)) then {",
    "        def audio = audioTags.get(url)",
    "        audio.currentTime := 0",
    "        audio.play",
    "    } else {",
    "        def audio = dom.document.createElement \"audio\"",
    "        audioTags.put(url, audio)",
    "        audio.src := url",
    "        audio.load",
    "        audio.play",
    "    }",
    "}",
    "method stopSound(url) {",
    "    if (audioTags.contains(url)) then {",
    "        def audio = audioTags.get(url)",
    "        audio.pause",
    "    }",
    "}",
    "method start {",
    "    initialise",
    "    stopRunning := false",
    "    backingCanvas := dom.document.createElement(\"canvas\")",
    "    backingCanvas.height := canvasHeight",
    "    backingCanvas.width := canvasWidth",
    "    backingContext := backingCanvas.getContext(\"2d\")",
    "    def mctx = canvas.getContext(\"2d\")",
    "    dom.while { !stopRunning } waiting 10 do {",
    "        for (registeredObjects) do {obj->",
    "            obj.step",
    "        }",
    "        for (stepBlocks) do {step->",
    "            step.apply",
    "        }",
    "        mctx.fillStyle := backgroundColour",
    "        mctx.fillRect(0, 0, canvasWidth, canvasHeight)",
    "        mctx.drawImage(backingCanvas, 0, 0)",
    "        for (registeredObjects) do {obj->",
    "            obj.draw(mctx)",
    "        }",
    "        mctx.fillStyle := \"red\"",
    "        mctx.fillRect(canvasWidth - 20, 0, 20, 20)",
    "    }",
    "}",
    "method stop {",
    "    stopRunning := true",
    "    canvas.removeEventListener(\"mousedown\", mouseDownListener)",
    "    canvas.removeEventListener(\"mousemove\", mouseMoveListener)",
    "}",
    "method atModuleEnd(module) {",
    "    start",
    "}",
    "",
  ];
}