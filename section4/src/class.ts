abstract class Person {
  static speices = 'Homo'
  static isAdult(age: number){
    if(age>17) return true;
    return false;
  }
  constructor(public readonly name: string, protected age: number){
  }

  incrementAge(){
    this.age +=1;
  }
  greeting(this: Person){
    console.log(`Hello,My name is ${this.name}.I am ${this.age} years old.`);
    this.explainJob();
  }
  abstract explainJob(): void;
}

class Teacher extends Person{
  private static instance: Teacher;
  explainJob(){
    console.log(`I am a teach and I teach ${this.subject}` );
  }
  get subject(): string{
    if(!this._subject){
      throw new Error('There is no subject');
    }
    return this._subject
  }
  set subject(value){
    this._subject = value;
  }
  constructor(name: string,age: number,private _subject:string){
    super(name,age);
  }
  static getInstance(){
    if(Teacher.instance) return Teacher.instance;
      Teacher.instance = new Teacher('Quill',38,'Math');
      return Teacher.instance;
    }
  }

  const teacher = Teacher.getInstance();
  const teacher2 = Teacher.getInstance();
  console.log(teacher,teacher2);
