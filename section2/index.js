var hasValue = false;
var count = 10;
var float = 3.14;
var negative = -0.12;
var singel = 'hello';
var double = "hello";
var back = "hello";
var hello = 'hello';
var person = {
    name: {
        first: 'Jack',
        last: 'Smith'
    }, age: 21
};
// console.log(person.age);
var fruits = ['Apple', 'Banana', 'Grape'];
var book = ['business', 1500, false];
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 100] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 101] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 102] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
console.log(CoffeeSize.GRANDE);
var anything = true;
var clothSize = 'large';
var cloth = {
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
var anotherAdd = function (num1, num2) {
    return num1 + num2;
};
var doubleNumber = function (num) { return num * 2; };
function doubleAndHandle(num, cb) {
    var doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(21, function (doubleNum) {
    return doubleNum;
});
var unknownInput;
var anyInput;
var text;
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
