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
//Protected Access modifier
class cb {
    name = "bb";
}
class bn extends cb {
    met = " mt";
    constructo() {
        this.name = "new";
    }
}
let nm = new bn();
// optional properties
class NAme {
    name;
    constructor(name) {
        this.name = name;
    }
    ch() {
        this.name = " kh";
    }
}
let hj = new NAme("ll");
// gettter Setters
class Name {
    _name;
    constructor(_name) {
        this._name = _name;
    }
    get name() {
        return this._name;
    }
    setname(name) {
        this._name = name;
    }
}
let n1 = new Name("us");
n1.name;
//static properties and methods
class Name1 {
    version = "1.0";
    static getVersion() {
        return Math.random();
    }
}
//Abstract classes
class payment {
    amount;
    constructor(amount) {
        this.amount = amount;
    }
    getAmount(amount) {
        return this.amount > 0;
    }
}
//# sourceMappingURL=Part2.js.map