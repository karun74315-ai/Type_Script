class bottleMaker{
    constructor(public name: string, public price: number){

    }
}

let b1 = new bottleMaker("milton ", 120);


//this keyword 
class ab{
    name = " arun";

    getdets(){
        this.name 
    }
}

// access Modifier 

class count{
    constructor(private name : string){

    }
}

let c1 = new count("Ab");
c1.name = "kh";


//Protected Access modifier


class cb{
    protected name = "bb";

    
}

class bn extends cb{
    public met = " mt";
    constructo(){
        this.name = "new"
    }

}

let nm = new bn();


// optional properties
class NAme{
    constructor(public readonly name : string){
        
    }
    ch(){
        this.name = " kh";
    }
}

let hj = new NAme("ll");

// gettter Setters



class Name{
    constructor(private _name : string){    
    }
    get name(){
        return this._name;
    }
    setname(name : string){
        this._name = name;
    }  

}

let n1 = new Name("us");

n1.name; 


//static properties and methods

class Name1{
   version : string = "1.0";    
   static getVersion(){
    return Math.random();
   }
}

//Abstract classes
 

class payment{

    constructor(protected amount : number){}

    getAmount( amount : number){
        return this.amount > 0;
    }
}

