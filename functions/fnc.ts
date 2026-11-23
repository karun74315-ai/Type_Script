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
