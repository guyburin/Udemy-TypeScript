// type Admin = {
//   name: string;
//   privileges: string[];
// };

// type Employee = {
//   name: string;
//   startDate: Date;
// };

// // interface ElevatedEmployee extends Admin, Employee {}
// type ElevatedEmployee = Admin & Employee;

// const e1: ElevatedEmployee = {
//   name: "guy",
//   privileges: ["dev"],
//   startDate: new Date(),
// };
// type Combinable = string | number;
// type Numeric = number | boolean;
// type Universal = Combinable & Numeric;

// function add(a: number, b: number): number;
// function add(a: string, b: string): string;
// function add(a: string, b: number): string;
// function add(a: number, b: string): string;
// function add(a: Combinable, b: Combinable) {
//   if (typeof a === "string" || typeof b === "string") {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }

// const result = add("guy", "burin");
// result.split(" ");

// const fetchedUserData = {
//   id: "1",
//   name: "guy",
//   job: { title: "dev", discription: "I am Developer" },
// };

// console.log(fetchedUserData?.job?.title);
// const userInput = undefined;

// const storeData = userInput ?? "Default";
// console.log(storeData);

// // type UnknowEmployee = Employee | Admin;

// // function printEmployeeInformation(emp: UnknowEmployee) {
// //   console.log(`Name : ${emp.name}`);
// //   if ("privileges" in emp) {
// //     console.log(`Privileges: ${emp.privileges}`);
// //   }
// //   if ("startDate" in emp) {
// //     console.log(`Start Date : ${emp.startDate}`);
// //   }
// // }

// // printEmployeeInformation({ name: "Tom", startDate: new Date() });

// // class Car {
// //   drive() {
// //     console.log("Deiving a Car...");
// //   }

// //   loadCargo(amount: number) {
// //     console.log(`Loading cargo ... ${amount}`);
// //   }
// // }

// // class Truck {
// //   drive() {
// //     console.log("Deiving a truck...");
// //   }

// //   loadCargo(amount: number) {
// //     console.log(`Loading cargo ... ${amount}`);
// //   }
// // }

// // type Vehicle = Car | Truck;
// // const v1 = new Car();
// // const v2 = new Truck();

// // function useVehicle(vehicle: Vehicle) {
// //   vehicle.drive();
// //   if (vehicle instanceof Truck) {
// //     vehicle.loadCargo(1000);
// //   }
// // }

// // useVehicle(v1);
// // useVehicle(v2);

// // interface Bird {
// //   type: "bird";
// //   flyingSpeed: number;
// // }

// // interface Horse {
// //   type: "horse";
// //   runningSpeed: number;
// // }

// // type Animal = Bird | Horse;

// // function moveAnimal(animal: Animal) {
// //   let speed;
// //   switch (animal.type) {
// //     case "bird":
// //       speed = animal.flyingSpeed;
// //       break;
// //     case "horse":
// //       speed = animal.runningSpeed;
// //   }
// //   console.log(`Moving Speed is : ${speed}`);
// // }

// // moveAnimal({ type: "bird", flyingSpeed: 15 });

// // // const userInput = <HTMLInputElement>document.getElementById("messageOutput")!;
// // // const userInput = document.getElementById("messageOutput") as HTMLInputElement;
// // const userInput = document.getElementById("messageOutput");

// // if (userInput) {
// //   (userInput as HTMLInputElement).value = "Hi Guy!";
// // }

// // interface ErrorContainer {
// //   [prop: string]: string;
// // }

// // const errorBug: ErrorContainer = {
// //   email: "not valid email",
// //   username: "Start with Charactor",
// // };
