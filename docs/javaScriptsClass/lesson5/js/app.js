// // app.js -- hello world example
//"use strict";
// console.log('Hello JavaScript')

// var address = {
//     street: 'Main street',
//     'house number': 1000,
//     apartment: {
//         'floor': 3,
//         'number': 301,
//     },
// }

// var address2 = {
//     street: 'main street',
//     'house number': 2000,
//     apartment: {
//         'floor': 3,
//         'number': 301,
//     },
// }

// console.log(address)
// console.log(address.street)
// // console.log(address."house number");
// console.log(address['house number'])
// console.log(address.apartment.floor + ', ' + address.apartment.number)

// // ---------------------
// // Lexical environment
// // Global env
// console.log('this is ' + this)
// var eye = 0



// // Function env
// function sumNumber0(numbers, j) {
//     var sum = 0
//     console.log('sum' + sum)
// }

// // Block env
// function sumNumbers1(numbers) {
//     var sum = 0
//     for (let i = 0; i < numbers.length; i++) {
//         const j = 'block env'
//         sum += numbers[i]
//         sumNumber0(numbers, j)
//     }
//     // console.log(j);
//     // console.log(i);
//     return sum
// }
// console.log(sumNumbers1([1, 2, 3]))
// // console.log(sum);
// // alert("Hello JavaScript");

// // JS Functional Programming language
// // First-class function
// var f = function (array) {
//     // TODO
// }

// function invokeMe(x) {
//     x()
// }
// // invokeMe(function() {
// //     console.log("Hello callback function");
// // }); // anonymous

// // Using Arrow function
// invokeMe(() => console.log('Hello callback arrow function'))

// function printArgs() {
//     for (let i = 0; i < arguments.length; i++) {
//         console.log(arguments[i])
//     }
// }

// printArgs(1, 2, 3, function () { })

// // const printArgs2 = () => {
// //     for(let i = 0; i < arguments.length; i++) { // arrow functions do not the Arguments objects
// //         console.log(arguments[i]);
// //     }
// // };

// // printArgs2(1,2,3);

// // Common Array methods -- higher order functions (HoF)
// // array.reduce
// const a = [1, 2, 3]
// const sum1 = a.reduce((accum, nextVal) => accum + nextVal)
// const sum2 = a.reduce((accum, nextVal) => accum + nextVal, 0)
// // accum= 1; next = 2; 1+2 = 3
// // accum = 3; next = 3; 3+3 = 6;
// // accum = 6
// // return accum=6
// console.log(sum1)
// console.log(sum2)

// // Rest parameters syntax
// function calc(multiplier, base, ...numbers) {
//     var val = numbers.reduce((accumulator, num) => accumulator + num, base)
//     return multiplier * val
// }
// var total = calc(2, 6, 10, 8, 9)
// console.log(total)

// // Spread operator syntax
// // For function definition
// const numbers = [1, 2, 3]
// function sum(x, y, z) {
//     return x + y + z
// }
// console.log(sum(...numbers))

// // For Array definition
// let initialNumbers = [0, 1, 2]
// let newNumber = 15
// let updatedNumbers = [...initialNumbers, newNumber]
// console.log(updatedNumbers)

// // Destructuring assignment
// let num1, num2, rest
//     ;[num1, num2] = [10, 20]
// console.log(num1) // prints 10
// console.log(num2) // prints 20
//     ;[num1, num2, ...rest] = [10, 20, 30, 40, 50]
// console.log(rest) // prints Array [30,40,50]
// const names = ['Anna', 'Bob']
// const [x, y] = names
// console.log(x + ', ' + y)

// const q = 12
// const p = '12'
// const sumpq = p + q // concat 1212, addition: 24
// const sumqp = q + p
// console.log(sumpq)
// console.log(sumqp)

// //
// function max(x, y) {
//     let max
//     //
//     //
//     return max
// }

// function printName(name) {
//     console.log(name)
// }

// function f() {
//     var a = 1, b = 20, c;
//     console.log("inside f" + a + " " + b + " " + c); // 1 20 undefined 

//     function g() {
//         b = 300, c = 4000;
//         console.log(a + " " + b + " " + c); // 1 300 4000 		   
//         a = a + b + c;
//         console.log(a + " " + b + " " + c); // 4301 300 4000 
//     }

//     console.log(a + " " + b + " " + c); // 1 20 undefined 
//     g();
//     console.log(a + " " + b + " " + c); // 4301 20 undefined 
// }
// f();


// var x = 10;

// function main() {
//     console.log("<br>x1 is " + x);
//     x = 20;
//     console.log("<br>x2 is " + x);
//     if (x > 0) {
//         console.log("<br>x3 is " + x);
//         x = 10; // x=30; 
//         console.log("<br>x333 is " + x);
//     }
//     console.log("<br>x4 is " + x);
//     x = 40; // x=40; 
//     function f()
//         x = 5;
//         console.log("<br>x5 is " + x);
//     }
//     f();
//     console.log("<br>x6 is " + x);


// }
// main();
// console.log("<br>x7 is " + x);

x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
    console.log(x);
    console.log(a);
    var f = function (a, b, c) {
        b = a;
        console.log(b);
        b = c;
        var x = 5;
    }
    f(a, b, c);
    console.log(b);
    var x = 10;
}
c(8, 9, 10);
console.log(b);
console.log(x);

