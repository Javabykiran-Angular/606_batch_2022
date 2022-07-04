//anonymous functions
// function does not have any name

  let t1=function (){
    console.log("anonymous functions is called..");
  }

  // t1();

    let t2=function (a:number,b:number):number {
      return (a+b);
    }

    // console.log("Addition is "+t2(8,4));

    // fat Arrow Function/ Arrow function 
    
   let t3=()=>{
        console.log("fat arrow function is called ")
      }

      // t3();
    

      let t4=(a:number,b:number):number=>{
        return (a+b);
      }

      // console.log(`Addition is  ${t4(5,5)} `);

      //optional paramter function

      function add1(a:number,b?:number|undefined){

        console.log("Value of a is "+a)
        console.log("Value of b is "+b)
        console.log("Addition of a+b is "+(a+b))

      }

      // add1(4,8)

      
      function add2(a?:number,b?:number|undefined){

        console.log("Value of a is "+a) // undefined
        console.log("Value of b is "+b) // undefined
        console.log("Addition of a+b is "+(a+b)) //nan

      }

      // add2();

      //Default parameter function

      function add3(a:number,b:number=7){
        console.log("Value of a is "+a) // 5
        console.log("Value of b is "+b) // 7
        console.log("Addition of a+b is "+(a+b)) //
      }

      // add3(5);

      function add4(a:number=4,b:number){
        console.log("Value of a is "+a) // 5
        console.log("Value of b is "+b) // 7
        console.log("Addition of a+b is "+(a+b)) //
      }

      // add4(10,8);

      function add5(a:number=4,b?:number){
        console.log("Value of a is "+a) // 4
        console.log("Value of b is "+b) // undefined
        console.log("Addition of a+b is "+(a+b)) //NAN
      }

      // add5();