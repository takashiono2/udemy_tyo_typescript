let hasValue: boolean = false;
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;
let singel: string = 'hello';
let double: string = "hello";
let back: string = `hello`;
let hello = 'hello';

const person = {
  name: {
    first: 'Jack',
    last: 'Smith'
    },age: 21
}
// console.log(person.age);

const fruits: any[] = ['Apple','Banana','Grape']
const book: [string, number, boolean] = ['business',1500,false];

enum CoffeeSize {
  SHORT,
  TALL = 100,
  GRANDE,
  VENTI,
}
const coffee = {
  hot: true,
  size: CoffeeSize.TALL,
}

console.log(CoffeeSize.GRANDE);

let anything: any = true;

type ClothSize = 'small' | 'medium' |  'large'

let clothSize: ClothSize  =  'large'

const cloth: {
  color: string;
  size: ClothSize
} = {
  color: 'white',
  size: 'medium'
}

cloth.size = 'large'

function add(num1: number, num2: number): number{
  return num1 + num2
}

function sayHello(): void{
  console.log('Hello!');
}

const anotherAdd: (n1: number, n2: number) => number = function (num1, num2){
  return num1 +num2;
}

const doubleNumber: (num: number) => number = num => num * 2;

function doubleAndHandle(num: number,cb: (num: number) => number): void{
  const doubleNum = cb(num*2);
  console.log(doubleNum);
}
doubleAndHandle(21,doubleNum=>{
  return doubleNum
});

let unknownInput: unknown;
let anyInput: any;
let text: string;
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
text = anyInput;
if(typeof unknownInput === 'string'){
  text = unknownInput;
}

function error(message: string): never{
  throw new Error(message);
}
console.log(error('this is error'));
