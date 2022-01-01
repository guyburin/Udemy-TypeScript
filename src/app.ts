class Department {
  // private readonly id: string;
  // private name: string;
  private empolyee: string[] = [];
  constructor(private readonly id: string, public name: string) {
    // this.name = n;
    // this.id = id;
  }

  describe(this: Department) {
    console.log(`Department #${this.id}: ${this.name}`);
  }

  addEmployee(employee: string) {
    // this.id = "di2";
    this.empolyee.push(employee);
  }

  printEmployee() {
    console.log(this.empolyee.length);
    console.log(this.empolyee);
  }
}

const accounting = new Department("1", "Accounting");

accounting.addEmployee("guy");
accounting.addEmployee("burin");

// accounting.empolyee[2] = "panchat";

accounting.describe();
accounting.printEmployee();

console.log(accounting);

const accountingCoppy = { name: "accounting2", describe: accounting.describe };

accountingCoppy.describe;
