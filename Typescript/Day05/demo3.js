//anonymous functions
// function does not have any name
var t1 = function () {
    console.log("anonymous functions is called..");
};
// t1();
var t2 = function (a, b) {
    return (a + b);
};
// console.log("Addition is "+t2(8,4));
// fat Arrow Function/ Arrow function 
var t3 = function () {
    console.log("fat arrow function is called ");
};
// t3();
var t4 = function (a, b) {
    return (a + b);
};
// console.log(`Addition is  ${t4(5,5)} `);
//optional paramter function
function add1(a, b) {
    console.log("Value of a is " + a);
    console.log("Value of b is " + b);
    console.log("Addition of a+b is " + (a + b));
}
// add1(4,8)
function add2(a, b) {
    console.log("Value of a is " + a); // undefined
    console.log("Value of b is " + b); // undefined
    console.log("Addition of a+b is " + (a + b)); //nan
}
// add2();
//Default parameter function
function add3(a, b) {
    if (b === void 0) { b = 7; }
    console.log("Value of a is " + a); // 5
    console.log("Value of b is " + b); // 7
    console.log("Addition of a+b is " + (a + b)); //
}
// add3(5);
function add4(a, b) {
    if (a === void 0) { a = 4; }
    console.log("Value of a is " + a); // 5
    console.log("Value of b is " + b); // 7
    console.log("Addition of a+b is " + (a + b)); //
}
// add4(10,8);
function add5(a, b) {
    if (a === void 0) { a = 4; }
    console.log("Value of a is " + a); // 4
    console.log("Value of b is " + b); // undefined
    console.log("Addition of a+b is " + (a + b)); //NAN
}
add5();
