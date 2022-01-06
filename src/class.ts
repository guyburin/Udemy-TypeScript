abstract class Department {
  static fiscalYear = 2022;
  // private readonly id: string;
  // private name: string;
  protected empolyee: string[] = [];
  constructor(protected readonly id: string, public name: string) {
    // this.name = n;
    // this.id = id;
  }

  static crateEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

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

  describe(this: Department): void {
    console.log("ITDepartment describe");
  }
}

class accountingDepartments extends Department {
  private lastReport: string;
  private static instance: accountingDepartments;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass value!");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "IT");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (accountingDepartments.instance) {
      return this.instance;
    }
    this.instance = new accountingDepartments("id2", []);
    return this.instance;
  }

  describe() {
    console.log(`AccountDepartment - ID : ${this.id}`);
  }

  addEmployee(name: string) {
    if (name === "guy") {
      return;
    }
    this.empolyee.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}
const employee1 = Department.crateEmployee("guy");
console.log(employee1, Department.fiscalYear);

// const accounting = new Department("1", "Accounting");
const itAccounting = new ITDepartment("2", ["Accounting"]);
// const accountingDepartment = new accountingDepartments("3", []);

const accounting01 = accountingDepartments.getInstance();
const accounting02 = accountingDepartments.getInstance();

console.log(accounting01, accounting02);
// Math.pow();

// accounting.addEmployee("guy");
// accounting.addEmployee("burin");

itAccounting.addEmployee("guy");
itAccounting.addEmployee("burin");

// accountingDepartment.addReport("Report Something....!");
// accountingDepartment.printReports();
// accountingDepartment.printEmployee();
// console.log(accountingDepartment.mostRecentReport);
// accountingDepartment.mostRecentReport = "End report";
// accountingDepartment.describe();

// accounting.empolyee[2] = "panchat";

// accounting.describe();
// accounting.printEmployee();

itAccounting.describe();
itAccounting.printEmployee();

console.log(itAccounting);

// const accountingCoppy = { name: "accounting2", describe: accounting.describe };

// accountingCoppy.describe;
