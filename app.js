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
var Role;
(function (Role) {
    Role["admin"] = "admin";
    Role[Role["read_only"] = 100] = "read_only";
    Role["author"] = "author";
})(Role || (Role = {}));
var person = {
    name: "Guy",
    age: 23,
    hobbies: ["game", "sports"],
    role: Role.admin
};
var favoriteActivity;
favoriteActivity = ["sports"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toLocaleUpperCase());
    //   console.log(hobby.map())
}
if (person.role === Role.author) {
    console.log("is author");
}
