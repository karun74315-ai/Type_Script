"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class bottleMaker {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
let b1 = new bottleMaker("milton ", 120);
//this keyword 
class ab {
    name = " arun";
    getdets() {
        this.name;
    }
}
// access Modifier 
class count {
    name;
    constructor(name) {
        this.name = name;
    }
}
let c1 = new count("Ab");
c1.name = "kh";
//# sourceMappingURL=Part2.js.map