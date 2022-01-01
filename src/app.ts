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

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class accountingDepartments extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "IT");
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const accounting = new Department("1", "Accounting");
const itAccounting = new ITDepartment("2", ["Accounting"]);
const accountingDepartment = new accountingDepartments("3", []);

accounting.addEmployee("guy");
accounting.addEmployee("burin");

itAccounting.addEmployee("guy");
itAccounting.addEmployee("burin");

accountingDepartment.addReport("Report Something....!");
accountingDepartment.printReports();

// accounting.empolyee[2] = "panchat";

accounting.describe();
accounting.printEmployee();

itAccounting.describe();
itAccounting.printEmployee();

console.log(itAccounting);

const accountingCoppy = { name: "accounting2", describe: accounting.describe };

accountingCoppy.describe;
