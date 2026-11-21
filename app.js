"use strict";
// primitive types
Object.defineProperty(exports, "__esModule", { value: true });
//number
let a = 12;
//boolean
let b = true;
//String
let c = "Hello World";
//Array
let arr = [1, 2, 3, 4, 5];
// tuple
let tuple = ["Hello", 12];
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
const color = Color.Green;
//any unknown void
let d = 10;
d = "Hello";
d = true;
let e = 10;
e = "Hello";
e = true;
let f = undefined;
//# sourceMappingURL=app.js.map