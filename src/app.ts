<<<<<<< Updated upstream
const userName = "Guy";
// userName = 'Guyburin'
let age = 23;
age = 24;
var result;
// function add(a: number, b: number) {
//   result = a + b;
//   return result;
// }

// console.log(result);

// if (age > 20) {
//   let isOld = true;
// }
// console.log(isOld);

// const add = (a: number, b: number = 1) => a + b;

// // console.log(add(2, 5));

// const printOutput: (output: string | number) => void = (output) =>
//   console.log(output);

// const button = document.querySelector("button");

// if (button) {
//   button.addEventListener("click", (event) => console.log(event));
// }

// printOutput(add(2));

const hobbies = ["games", "sports"];
const activityHobbies = ["running"];

activityHobbies.push(...hobbies);

const person = {
  nickName: "guy",
  ages: 23,
};

const coppyPerson = { ...person };

const add = (...numbers: number[]) => {
  numbers.reduce((value, sum) => {
    return value + sum;
  }, 0);
};

const addNumber = add(5, 2, 3, 4.4);
console.log(addNumber);

const [hobbie1, hobbie2, ...otherHobbies] = hobbies;
console.log(hobbie1, hobbie2);

const { nickName: userNames, ages } = person;

console.log(userNames, ages);
=======
// const names: Array<string> = []; //string[]
// // names[0].split("");

// const promise: Promise<any> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

// promise.then((data) => {
//   // data.split('')
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergeObj = merge<{ name: string; hobbies: string[] }, { age: number }>(
  { name: "guy", hobbies: ["Games"] },
  { age: 23 }
);
console.log(mergeObj);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "No value!";
  if (element.length === 1) {
    descriptionText = "can 1 element!";
  } else {
    descriptionText = `Got ${element.length} elements.`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(["gams", "sport"]));

function extractAndConvert<T extends object, u extends keyof T>(
  obj: T,
  key: U
) {}
>>>>>>> Stashed changes
