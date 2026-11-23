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
