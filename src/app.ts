// --------------------------nullish coalescing
// let age: number = 0;

// // if (age) {
// //     console.log("treu");
// // }else{
// //     console.log("false");
// // }
// let ageOR: number = age || 23;
// let ageNull: number = age ?? 23;

// console.log(ageOR, ageNull);

// --------------------------Optional Chaining

// const person = {
//   name: "guy",
//   age: 23 ,
// //   job: { title: "dev", discription: "I am Developer" },
// };

// console.log(person?.job?.title);

//--------------------------Function Overloads
// type strNum = string | number;
// function add(a: number, b: number): number;
// function add(a: string, b: string): string;
// function add(a: string, b: number): string;
// function add(a: number, b: string): string;
// function add(a: strNum, b: strNum) {
//   if (typeof a === "string" || typeof b === "string") {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }

// const resault = add(1,1)
// console.log(resault)

//---------------------- Intersection Types
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Admin, Employee {} ถ้า Admin, Employee เป็น interface
type ElevatedEmployee = Admin & Employee;
// type ElevatedEmployee = Admin & Employee  e1 {name: string,privileges: string[],startDate:Date};
const e1: ElevatedEmployee = {
  name: "guy",
  privileges: ["dev"],
  startDate: new Date(),
};

type Combinables = string | number;
type Numerics = number | boolean;
type Universals = Combinables & Numerics; // type Universals = number เพราะ Combinables กับ Numerics มี number เหมือนกัน

//--------------------------------------------- type guard
type UnknowEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknowEmployee) {
  console.log(`Name : ${emp.name}`);
  if ("privileges" in emp) { // ใช้ type emp === "Admin"
    console.log(`Privileges: ${emp.privileges}`);
  }
  if ("startDate" in emp) {// ใช้ type emp === "Employee"
    console.log(`Start Date : ${emp.startDate}`);
  }
}

printEmployeeInformation({ name: "Tom", startDate: new Date() });
// e1 จะออกทั้ง  privileges และ startDate เพราะ e1 มีข้อมูลที่เป็น type ElevatedEmployee = Admin & Employee;

//---------------------------- type guard
class Car {
  drive() {
    console.log("Deiving a Car...");
  }

  loadCargo(amount: number) {
    console.log(`Loading cargo ... ${amount}`);
  }
}

class Truck {
  drive() {
    console.log("Deiving a truck...");
  }

  loadCargo(amount: number) {
    console.log(`Loading cargo ... ${amount}`);
  }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);
console.log(v2 instanceof Truck)