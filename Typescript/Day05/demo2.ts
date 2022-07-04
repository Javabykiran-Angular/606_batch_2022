
//Function
// 1 Function has without paramter & without return type
// 2 Function has with paramter & without return type
// 3 Function has without paramter & with return type
// 4 Function has with paramter & with return type

// 1 Function has without paramter & without return type

  function add1(){
    console.log("First type function is called");
  }

  // add1();

  // 2 Function has with paramter & without return type

    function add2(a:number,b:number){
      console.log("Addition "+(a+b));
    }

      // add2(4,2);

  // 3 Function has without paramter & with return type

    function add3():number{
      return (8+4);
    }

    let temp=add3();
    // console.log("value of temp "+temp);

// 4 Function has with paramter & with return type

    function add4(a:number,b:number):number{
      return (a+b)

    }
let temp1=add4(7,7);
console.log("Addition is "+temp1);
