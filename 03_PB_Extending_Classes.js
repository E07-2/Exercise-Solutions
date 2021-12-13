class Employee {
  constructor(id, firstName, lastName, taxID, yearSalary) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.taxID = taxID;
    this.yearSalary = yearSalary;
  }

  generatePayslip() {
    let monthlySalary = this.yearSalary / 12;
    return `Employee ID : ${this.id} \n
      Name : ${this.firstName} ${this.lastName} \n
      taxID : ${this.socialSecurityNumber}\n
      Monthly Pay : $ ${monthlySalary}`;
  }
}

class Manager extends Employee {
  constructor(id, firstName, lastName, taxID, yearSalary) {
    // super refers to the parent class, in this case Employee
    // so this call to super calls the parent constructor
    super(id, firstName, lastName, taxID, yearSalary);
    this.managedEmployees = [];
  }

  addManagedEmployee(newEmployee) {
    this.managedEmployees.push(newEmployee);
  }

  removeManagedEmployee(toRemoveEmployee) {
    // to just delete the last element:
    this.managedEmployees.pop()
    // to delete an especific element:
    // this.managedEmployees.filter(function (element) {
    //   return element.id !== toRemoveEmployee.id;
    // });
  }
}

// Create a new employee instance
let emp1 = new Employee(123, 'John', 'Smith', 99090, 24000);

// Create a new manager instance
let manager1 = new Manager(113, 'Frank', 'Pointyhair', 88454, 90000.0);

console.log(emp1.generatePayslip());


console.log(manager1.generatePayslip());


manager1.addManagedEmployee(emp1)

console.log(manager1)
