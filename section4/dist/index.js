"use strict";
let hasValue = false;
let count = 10;
let float = 3.14;
let negative = -0.12;
let singel = 'hello';
let double = "hello";
let back = `hello`;
let hello = 'hello';
const person = {
    name: {
        first: 'Jack',
        last: 'Smith'
    }, age: 21
};
// console.log(person.age);
const fruits = ['Apple', 'Banana', 'Grape'];
const book = ['business', 1500, false];
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 100] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 101] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 102] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.TALL,
};
console.log(CoffeeSize.GRANDE);
let anything = true;
let clothSize = 'large';
const cloth = {
    color: 'white',
    size: 'medium'
};
cloth.size = 'large';
function add(num1, num2) {
    return num1 + num2;
}
function sayHello() {
    console.log('Hello!');
}
const anotherAdd = function (num1, num2) {
    return num1 + num2;
};
const doubleNumber = num => num * 2;
function doubleAndHandle(num, cb) {
    const doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(21, doubleNum => {
    return doubleNum;
});
let unknownInput;
let anyInput;
let text;
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
text = anyInput;
if (typeof unknownInput === 'string') {
    text = unknownInput;
}
function error(message) {
    throw new Error(message);
}
console.log(error('this is error'));
