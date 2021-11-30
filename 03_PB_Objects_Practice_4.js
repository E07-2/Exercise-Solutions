// 1st
function isWithinRange(num, obj) {
  if (num >= obj.min && num <= obj.max) {
      return true;
  } else {
      return false;
  }
}
​
console.log(isWithinRange(4, { min: 4, max: 5 }));
​
​
//2nd
const writer = {
  fname: "Brandon",
  lname: "Sanderson",
  books: ["Mistborn","The well of ascension","The hero of ages"]
}
​
const copyOfWriter = {...writer}
copyOfWriter.lname = "James";
console.log(writer)
​
//3rd
function cloneFunc (objToClone) {
  return {...objToClone};
}
const obj1 = {name:"Clara"};
const clonedObj = cloneFunc(obj1);
clonedObj.name = "Matheus";
console.log(obj1)
console.log(clonedObj)
​
​
// BONUS
const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};
​
// Write the command to add the language "Go" to the end of the languages array.
programming.languages.push("Go")
console.log(programming.languages)
​
// Change the difficulty to the value of 7.
//programming.difficulty = 7;
programming["difficulty"] = 7;
console.log(programming.difficulty)
​
//Using the delete keyword, write the command to remove the jokes key from the programming object.
delete programming.jokes
console.log(programming)
​
// Write a command to add a new key called isFun and a value of true to the programming object.
programming.isFun = true;
​
//Using a loop, iterate through the languages array and console.log all of the languages.
// for (__ of __)
for (let element of programming.languages) {
  console.log(element)
}
//Equivalent to:
for (let i = 0; i < programming.languages.length; i++){
  console.log(programming.languages[i])
}
​
//Using a loop, console.log all of the keys in the programming object.
// for (__ in __)
for (let propertyKey in programming) {
  console.log(propertyKey)
}
​
​
//Using a loop, console.log all of the values in the programming object.
​
for (let propertyValues of Object.values(programming)){
  console.log(propertyValues)
}
​
​
//Small conclusion:
/* 
- for (__ of __) is better suited for arrays and also strings.  
- for (__ in __) is better suited for objects.
*/
​
//Create an object method where if the keys "isChallenging" and "isRewarding" have values of "true", then return "Learning the programming languages: "JavaScript, Python, Ruby, Go" is rewarding and challenging. Bonus: In a comment, explain what is printed if we console.log an object method without calling it and why.
​
​
programming.checkChallengeAndReward = function () {
  if(this.isChallenging && this.isRewarding){
    return `Learning the programming languages: ${this.languages} is rewarding and challenging`;
  }
  return `challenging or rewarding is false`;
}
programming.isRewarding = false;
console.log(programming.checkChallengeAndReward())
​
console.log(programming.checkChallengeAndReward)
// We will see the value of the property, and in this case the value is a function.
