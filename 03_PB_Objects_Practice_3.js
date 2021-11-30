//Q2 Get Values
const myObject = {
  1: "1", 
  2: "2"
}
​
function getValues(object) {
  return Object.values(object);
}
​
console.log(getValues(myObject));
​
​
//Q3
let person = {
  firstName: "Michael",
  lastName: "Smith", 
  job: "driver",
  age: 20, 
  city: "Paris",
  printValues: function () {
    console.log(`${this.firstName} ${this.lastName} is a ${this.age} year old ${this.job} in ${this.city}`)
  }
}
​
person.printValues()
​
​
//Bonus
function objectToArray (obj) {
  let keys = Object.keys(obj);
  let values = Object.values(obj);
  let finalArray = [];
  for (let i = 0; i < keys.length; i++) {
    finalArray.push([keys[i],values[i]])
  }
  return finalArray
}
​
let result = objectToArray({
  cats: 1,
  dogs: 2, 
  turtles: 4
}) 
​
console.log(result)
