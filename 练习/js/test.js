"use strict";
var Flag;
(function (Flag) {
    Flag[Flag["a"] = 0] = "a";
    Flag[Flag["b"] = 1] = "b";
    Flag[Flag["c"] = 3] = "c";
    Flag[Flag["e"] = 4] = "e";
})(Flag || (Flag = {}));
var i = Flag.e;
console.log(Flag.a, Flag.b, Flag.c, Flag.e, i);
