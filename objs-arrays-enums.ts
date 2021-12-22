// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Guy",
//   age: 23,
//   hobbies: ["game", "sports"],
//   role: [2, "author"],
// };

// person.role.push("admin");
// person.role[1] = 10; error !

// person.role = [0, "admin", "user"];

// const admin = 0;
// const read_only = 1;
// const author = 2;

enum Role {
  admin = "admin",
  read_only = 100,
  author = "author",
}

const person = {
  name: "Guy",
  age: 23,
  hobbies: ["game", "sports"],
  role: Role.admin,
};

let favoriteActivity: string[];
favoriteActivity = ["sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toLocaleUpperCase());
  //   console.log(hobby.map())
}

if (person.role === Role.author) {
  console.log("is author");
}
