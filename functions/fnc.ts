function abs(name : string , cb:(value:string)=>void){

    cb("hii");
}

abs("arun", (value)=>{
    console.log(value);
})

//optional and default parameters

 function ab(name:string, age:number , gender?:string="cant tell"){
      
 }

 ab("arun", 23, "male")
 ab("arun", 23)


 //Rest parameters

 function abc(name:string, ...hobbies:string[]){
     console.log(name);
     console.log(hobbies);
 }
 abc("arun", "reading", "swimming", "coding"); 

 //function overloading

 // function signature
 function add(a:number, b:number):number;
 function add(a:string, b:string):string;

 function add(a:any, b:any):any{
     return a + b;
 }  


 //Generics 

// function Generics

function test <T>(a:T){}

test<string>("aa")

function log<Y>(val:Y){
    console.log(val);
    
}

log<string>("hey");
log(12);


//Generics Interface 

interface halue <T>{
    name : string;
    age : number;
    key : T;

}

function bb(ob:halue<string>){
  
}

bb({name : " Arun ", age : 23, key: "dsjlfkh"});


//Generics Classes

class bottleMaker<T> {
   constructor(key:T){

   }
}

let b1 = new bottleMaker<string>("hey");

// modules 


// Type Assertions

let a : any =  12;

(a as number).toString

(<number>a);

// type casting


let aa = Number("12");
console.log(typeof a);

//non-null Assertion

let h: null| undefined | string;

h = "hey";
h!.at



// type Gaurds

function hh(args : string | number){
    if(typeof args === "string"){
      return " str";
    }
    else if(typeof args === "number"){
        return " num ";
    }
}