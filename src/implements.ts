// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;
add = (a: number, b: number) => {
  return a + b;
};

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  //   readonly name: string;

  greet(phrase: string): void;
}
class person implements Greetable {
  name?: string;
  age = 23;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string): void {
    if (this.name) {
      console.log(`${phrase} ${this.name}`);
    } else {
      console.log("Hi !");
    }
  }
}
let user1: Greetable;

user1 = new person();
// user1.name = "guy2";

user1.greet("My name is :");
console.log(user1);
