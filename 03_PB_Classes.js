//1. Person Class
class Person {
  constructor (name,age) {
    this.name = name;
    this.age = age;
  }
  describe () {
    console.log(`${this.name}, ${this.age} years old`)
  }
}

const person1 = new Person("Mark",37);
person1.describe();


//2. Employee Class
class Employee {
  constructor (firstName,lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullname() {
    console.log(`${this.firstName} ${this.lastName}`)
  }

  email () {
    console.log(`${this.firstName}.${this.lastName}@company.com`.toLowerCase())
  }
}

const emp1 = new Employee("John", "Smith")
emp1.fullname() //➞ "John Smith"

const emp2 = new Employee("Mary",  "Sue")
emp2.email() //➞ "mary.sue@company.com"

const emp3 = new Employee("Antony", "Walker")
console.log(emp3.firstName) //➞ "Antony"

//3. TV class
class TV {

  brand;
  #channel = 1;
  #volume = 50;

  constructor(brand) {
    this.brand = brand;
  }

  status () {
    console.log(`${this.brand} at channel ${this.#channel} and volume to ${this.#volume}`)
  }

  incVolume () {
    this.#volume < 100 ? this.#volume++ : console.log("volume reached max")
  }
