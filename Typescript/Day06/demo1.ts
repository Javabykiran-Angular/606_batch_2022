//array

// Array is dynamically shrinkable & growable
// Array does not have any fixed size
// Array hetrogenous array is avaible

let a=[4,5,10,6];
let a1:number[]=[11,55,44];
let a2:any[]=[];
let a3=[2.5,'sumit',true,7];

// for(let i=0;i<a.length;i++){
//   console.log("Array is "+a[i])
// }

// console.log("Array is "+a);
// console.log("Using Join Method "+a.join(' # '))
// console.log("Using Join Method "+a.join());

//foreach

// a.forEach((myvalue,i)=>{
//   console.log(` Value is ${myvalue} whose index is ${i} `)
// });

//Rest Parameter Function

  function display(...item:number[]){
      console.log(item);
  }

  // display(7,88,99,45);
  // display(89)
  // display();

  function display1(name:string,...item:number[]){
    console.log(item);
}

// display1('Sumit',100,88,79,96);

//Push & pop Method
// It works on LIFO Principal => Last In First out
// stack => LIFO

let b:number[]=[];
b.push(40);
// console.log(b);
// b.push(100,22,7,99);
// console.log(b);

// let temp=b.pop();
// console.log(b)
// console.log("Poped Value is "+temp);
// let temp2=b.pop();
// console.log(b)
// console.log("Poped Value is "+temp2);

//Splice method 

//slice method => It copy a section of data & return a new array

let c=['Angular 8','Embber Js','Vue JS','React js','JSP','Core java','Adavnced java','Spring Core','Spring Boot','MySql','Microservices'];

let res=c.slice(1,5);
console.log("Original array :: "+c);

console.log("\n Copied Array :: "+res);

let res1=c.slice();


console.log("\n Copied Array :: "+res1);





