"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function abs(name, cb) {
    cb("hii");
}
abs("arun", (value) => {
    console.log(value);
});
//optional and default parameters
function ab(name, age, gender = "cant tell") {
}
ab("arun", 23, "male");
ab("arun", 23);
//Rest parameters
function abc(name, ...hobbies) {
    console.log(name);
    console.log(hobbies);
}
abc("arun", "reading", "swimming", "coding");
function add(a, b) {
    return a + b;
}
//Generics 
// function Generics
function test(a) { }
test("aa");
function log(val) {
    console.log(val);
}
log("hey");
log(12);
//Generics Interface 
//# sourceMappingURL=fnc.js.map