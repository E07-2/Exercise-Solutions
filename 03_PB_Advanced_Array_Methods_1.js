//  Solution - 1.

/*Write a function called checkInitials which accepts an array of strings. The function should go through the array and display in the terminal the
  element of the arrays that starts with n or s.
checkInitials(["new","cloud","neon","mirtle","solve"]) 
// -> This displays:
//   new
//   neon
//   solve
*/

function checkInitials(array) {
  array.forEach((element) => {
    if (element[0] === "n" || element[0] === "s") {
      console.log(element);
    }
  });
}

checkInitials(["new", "cloud", "neon", "mirtle", "solve"]);

/* 
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

onlyEvenValues([1,2,3]) // [2]
onlyEvenValues([5,1,2,3,10]) // [2,10]
*/

function onlyEvenValues(array) {
  return array.filter((element) => {
    return element % 2 == 0;
  });
}
console.log(onlyEvenValues([1, 2, 3])); // [2]
console.log(onlyEvenValues([5, 1, 2, 3, 10])); // [2,10]

/* 
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string

showFirstAndLast(['colt','matt', 'tim', 'udemy']) // ["ct", "mt", "tm", "uy"]
showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']
*/

function showFirstAndLast(array) {
  return array.map((element) => {
    return `${element[0]}${element[element.length - 1]}`;
  });
}

console.log(showFirstAndLast(["colt", "matt", "tim", "udemy"])); // ["ct", "mt", "tm", "uy"]
console.log(showFirstAndLast(["hi", "goodbye", "smile"])); // ['hi', 'ge', 'se']

//BONUS

/* 
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so that both lowercase and uppercase letters should be counted. Hint: use the split method to separate the word into an array

vowelCount('Elie') // {e:2,i:1};
vowelCount('Tim') // {i:1};
vowelCount('Matt') // {a:1})
vowelCount('hmmm') // {};
vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
//forEach approach
function vowelCount(text) {
  const vowelString = "aeiou";
  let objCounter = {};
  let textAsArray = text.toLowerCase().split("");
  console.log(textAsArray);
  textAsArray.forEach((element) => {
    if (vowelString.includes(element)) {
      objCounter[element] = objCounter[element] + 1 || 1;
    }
  });
  return objCounter;
}

// reduce approach only for checking, too advance for class
// function vowelCount (text) {
//   const vowelString = 'aeiou';
//   return text.toLowerCase().split('').reduce((accum,element)=>{
//     return vowelString.includes(element) ? (accum[element] = (accum[element]+1 || 1),accum) : accum
//   },{})
// }

console.log(vowelCount("Elie")); // {e:2,i:1};
console.log(vowelCount("Tim")); // {i:1};
console.log(vowelCount("Matt")); // {a:1})
console.log(vowelCount("hmmm")); // {};
console.log(vowelCount("I Am awesome and so are you")); // {i: 1, a: 4, e: 3, o: 3, u: 1};

// Solution - 2

//1-Write a function called checkInitials which accepts an array of strings. The function should go through the array and display in the terminal the element of the arrays that starts with n or s.

const checkInitials = (arr) =>
  arr.filter((el) => el.startsWith("n") || el.startsWith("s"));

console.log(checkInitials(["new", "cloud", "neon", "mirtle", "solve"]));

//2- Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function.

const onlyEvenValues = (arr) => arr.filter((el) => el % 2 === 0);

console.log(onlyEvenValues([1, 2, 3])); // [2]
console.log(onlyEvenValues([5, 1, 2, 3, 10])); // [2,10]

//3- Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string

const showFirstAndLast = (arr) => {
  let newArr = arr.map((el) => el[0] + el.slice(-1));
  return newArr;
};

console.log(showFirstAndLast(["colt", "matt", "tim", "udemy"])); // ["ct", "mt", "tm", "uy"]
console.log(showFirstAndLast(["hi", "goodbye", "smile"])); // ['hi', 'ge', 'se']

// 4- Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so that both lowercase and uppercase letters should be counted. Hint: use the split method to separate the word into an array

const vowelCount = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let arrstr = str.toLowerCase().split("");
  let obj = {};
  for (let vowel of vowels) {
    for (let letter of arrstr) {
      if (vowel === letter) {
        obj[letter] = obj[letter] + 1 || 1;
        //obj[letter] ? (obj[letter] += 1) : (obj[letter] = 1);
      }
    }
  }
  return obj;
};
console.log(vowelCount("Elie"));
console.log(vowelCount("I Am awesome and so are you"));

//----------------------
const myFunc = (str) => {
  let obj = {};
  let arr = str.toLowerCase().split("");

  arr.map((letter) =>
    "aeiou".includes(letter)
      ? (obj[letter] = arr.filter((y) => y == letter).length)
      : letter
  );

  return obj;
};
