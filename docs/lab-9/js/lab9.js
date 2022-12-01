/**
 * lab8.js 
 * @hridaya 
 */
"use strict";
// console.log("==================Question 1 Solution ================");
// const person = {
//     name: "",
//     dateOfBirth: "",
//     getName: function () {
//         return this.name;
//     },
//     setName: function (name) {
//         this.name = name;
//     }
// }
// let john = Object.create(person);
// john.setName("John");
// console.log(`The person's name is ${john.getName()}`);
// john.dateOfBirth = new Date("December 10, 1998");
// console.log(`${john.getName()} was born on ${john.dateOfBirth.getFullYear()}-${john.dateOfBirth.getMonth() + 1}-${john.dateOfBirth.getDate()}`);

// console.log("==================Question 2 Solution ================");
// let employee = Object.create(person);
// employee.salary = 0;
// employee.hireDate = Date.now();
// employee.doJob = function (jobTitle) {
//     console.log(`${this.getName()} is a ${jobTitle} who earns ${this.salary}`);
// }

// let Anna = Object.create(employee);
// Anna.setName("Anna");
// Anna.salary = "$249.995.50";
// Anna.doJob("Programmer");


// console.log("==================Question 3 Solution ================");
// function Person(name, dateOfBirth) {
//     this.name = name;
//     this.dateOfBirth = new Date(dateOfBirth);
//     this.getName = function () {
//         return this.name;
//     }
//     this.setName = function (name) {
//         this.name = name;
//     }
// }
// Person.prototype.toString = function () {
//     return `{Name: ${this.getName()}, DateOfBirth: ${this.dateOfBirth.getFullYear()}-${this.dateOfBirth.getMonth() + 1}-${this.dateOfBirth.getDate()}}`;
// }
// const Peter = new Person("Peter", "November 10, 1985");
// console.log(Peter.toString());


// class Account {
//     constructor(accountNumber, customerName, balance) {
//         this.accountNumber = accountNumber; //calls setter
//         this.customerName = customerName;
//         this.balance = balance;
//     }
//     get accountNumber() {
//         return this._accountNumber;  //property must match name used in setter
//     }
//     set accountNumber(val) {
//         this._accountNumber = val;
//     }
//     get customerName() {
//         return this._customerName;
//     }
//     set customerName(val) {
//         this._customerName = val;
//     }
//     get balance() {
//         return this._balance;
//     }
//     set balance(val) {
//         this._balance = val;
//     }
// }

// const obj1 = new Account("1", "hridaya", "100");
// console.log(obj1);
// console.log(obj1.accountNumber);
// console.log(obj1.customerName);
// console.log(obj1.balance);

class Account {
    #accountNumber;
    #customerName;
    #balance;
    constructor(accountNumber, customerName, balance) {
        this.accountNumber = accountNumber; //calls setter
        this.customerName = customerName;
        this.balance = balance;
    }
    get accountNumber() {
        return this.#accountNumber;  //property must match name used in setter
    }
    set accountNumber(val) {
        this.#accountNumber = val;
    }
    get customerName() {
        return this.#customerName;
    }
    set customerName(val) {
        this.#customerName = val;
    }
    get balance() {
        return this.#balance;
    }
    set balance(val) {
        this.#balance = val;
    }
}

const obj1 = new Account("1", "hridaya", "100");
console.log(obj1);
console.log(obj1.accountNumber);
console.log(obj1.customerName);
console.log(obj1.balance);

class Person {
    constructor(val) {
        this._name = val;
    }
    get name() {
        return this._name;
    }
    set name(val) {
        this._name = val;
    }
}

const person1 = new Person("Hridaya");
console.log(person1);

person1.name = "hari";

console.log(person1);