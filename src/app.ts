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
