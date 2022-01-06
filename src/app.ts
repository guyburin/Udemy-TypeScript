// // Class คนๆหนึ่ง
// class Person {
//   // ตัวแปรที่ class จะรับเข้ามา ไม่ได้ประกาศ Access Modifiers(ระดับการเข้าถึง)จะมีสถานะ public
//   name: string;
//   static body: string = "Body";
//   // sexMale ใช้ได้แค่ใน Male เพราะประกาศตัวแปร private ไว้
//   protected age: number;

//   //constructor ไว้ระบุค่าของตัวแปรที่ class รับเข้ามา
//   constructor(name: string, age: number) {
//     // รับตัวแปรจากด้านบนมา assign ค่าให้ตัวแปรใน class
//     this.name = name;
//     this.age = age;
//   }

//   //
//   printDetailPerson(): void {
//     console.log(`My name is : ${this.name} , age : ${this.age}`);
//   }

//   setAge(age: number) {
//     if (age > 0 && age <= 100) this.age = age;
//   }
// }

// //Male Inheritance(สืบทอด) มาจาก Person :
// class Male extends Person {
//   // sexMale ใช้ได้แค่ใน Male เพราะประกาศตัวแปร private ไว้ แก้ไขค่านี้จากนอก class ไม่ได้
//   private sexMale: string;
//   constructor(name: string, age: number) {
//     // super ค่า name age มาเพื่อให้ class Male ใช้งานได้
//     super(name, age);
//     this.sexMale = "Male";
//   }

//   printDetailPerson(): void {
//     console.log(
//       `My name is : ${this.name} [${this.sexMale}], age : ${this.age}`
//     );
//   }
// }

// class Female extends Male {
//   // เหมือนกับ Male แต่สั่นกว่า
//   constructor(name: string, age: number, private sexFemale: string) {
//     //
//     super(name, age);
//     this.sexFemale = "Female";
//   }

//   printDetailPerson(): void {
//     console.log(
//       `My name is : ${this.name} [${this.sexFemale}], age : ${this.age}`
//     );
//   }
// }

// const person1: Person = new Male("Guy", 23);
// // Male ไม่มี setAge แต่เรียกของแม่มาใช้
// person1.setAge(24);
// // ถ้า name เป็น protected จะ error
// console.log(person1.name);
// // printDetailPerson จาก class Male ไม่เหมือนกับ class Peron
// person1.printDetailPerson();
// // static จะเรียกใช้จาก class ได้เลย ไม่ต้อง สร้าง obj
// console.log(`Person.body : ${Person.body}`);
// // บอกว่า Human เหมือนกับ Person
// let Human: typeof Person = Person;
// console.log(`Human.body : ${Human.body}`);

//------------------------------abstract-------------------------------
// Person มีทั้งชายและหญิง แต่ทั้งชายและหญิงนั้นมีร่างกาย
// abstract class Person {
//   constructor(protected sex: string) {}

//   body() {
//     console.log("Body");
//   }

//   abstract setSex(): void 
// }
// // Male กับ Female มีเพศต่างกัน การทำงานใน setSex จึงต่างกัน
// class Male extends Person {
//   constructor(sex: string) {
//     super(sex);
//   }

//   setSex(): void {
//     this.sex = "Male";
//   }
// }

// class Female extends Person {
//   constructor(sex: string) {
//     super(sex);
//   }

//   setSex(): void {
//     this.sex = "Female";
//   }
// }

//--------------------------------Singleton -------------------------------------

class Singleton {

    static instance: Singleton;

    private constructor() {
        console.log("constructor called!");
    }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    public logic() {
        console.log("my logic!");
    }
}
// เรียกใช้แบบนี้ได้ แต่เรียกแบบ let myInstance = new Singleton() ไม่ได้
let myInstance: Singleton = Singleton.getInstance();
myInstance.logic();