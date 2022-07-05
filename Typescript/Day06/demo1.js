//array
// Array is dynamically shrinkable & growable
// Array does not have any fixed size
// Array hetrogenous array is avaible
var a = [4, 5, 10, 6];
var a1 = [11, 55, 44];
var a2 = [];
var a3 = [2.5, 'sumit', true, 7];
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
function display() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log(item);
}
// display(7,88,99,45);
// display(89)
// display();
function display1(name) {
    var item = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        item[_i - 1] = arguments[_i];
    }
    console.log(item);
}
// display1('Sumit',100,88,79,96);
//Push & pop Method
// It works on LIFO Principal => Last In First out
// stack => LIFO
var b = [];
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
var c = ['Angular 8', 'Embber Js', 'Vue JS', 'React js', 'JSP', 'Core java', 'Adavnced java', 'Spring Core', 'Spring Boot', 'MySql', 'Microservices'];
var res = c.slice(1, 5);
console.log("Original array :: " + c);
console.log("\n Copied Array :: " + res);
var res1 = c.slice();
console.log("\n Copied Array :: " + res1);
