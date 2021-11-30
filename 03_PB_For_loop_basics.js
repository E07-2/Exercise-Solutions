//Q1 : Addition. Write a program to add up the numbers 1 to 20.
let sumOneToTwenty = 0;
for(let i = 1; i <= 20; i++){
  // sumOneToTwenty = sumOneToTwenty + i;
  sumOneToTwenty += i;
}
​
console.log(sumOneToTwenty)
​
//Q2 There are i bottles of beer on the wall. Write a program that will output, "There is one bottle of beer on the wall." "There are two bottles of beer on the wall" up until there are five bottles.
​
for (let i = 1; i <= 5; i++) {
  if(i === 1) {
    // console.log(`There is ${i} bottle of beer on the wall`)
  } else {
    // console.log(`There are ${i} bottles of beer on the wall`)
  }
}
​
//Q3 The odd/even reporter. Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
​
for (let i = 0; i <=20; i++) {
  if (i%2 === 0) {
    // console.log(`The number ${i} is even`)
  } else {
    // console.log(`The number ${i} is odd`)
  }
}
​
// Q4 Multiplication Tables. Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18"). Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
​
for (let i = 0; i<=10; i++) {
  // console.log(`${i}*9 = ${i*9}`)
}
​
//Bonus Q4
/* 
 multiplierVar -> 0 to 10
 tableVar -> 1 to 10
*/
​
for (let tableVar = 1; tableVar<=10; tableVar++) {
  for (let multiplierVar = 0; multiplierVar <= 10; multiplierVar++) {
    // console.log(` ${multiplierVar} * ${tableVar} = ${multiplierVar*tableVar}`)
  }
}
​
// Another way with just one for loop
let tableVar = 1
for (let i = 1; i <= 100; i++) {
  // console.log(`${i%10}*${tableVar} = ${(i%10)*tableVar}`)
  tableVar = i%10 === 0 ? tableVar + 1 : tableVar;
}
​
//Q5 Fizz Buzz Write a program which iterates the integers from 1 to 50. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
​
​
for ( let i = 1; i <= 50; i++) {
  if(i%3 == 0 && i%5 == 0){
    // console.log("FizzBuzz")
  } else if (i%3 == 0) {
    // console.log("Fizz")
  } else if (i%5 == 0) {
    // console.log("Buzz")
  } else {
    // console.log(i)
  }
}
​
​
​
//Q6 Sum of Multiples Write a program to add the multiples of 3 and 5 under 1000.
​
let sum = 0;
​
for (let i = 1; i<=1000; i++) {
  if(i%3 == 0 && i%5 == 0){
    sum += i; // -> sum = sum + i
  }
}
console.log(sum)
​
//Q8 isPalindrome. Write a program to check whether a word is a palindrome or not. Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat, salas
​
let word = "salas";
let pal = true;
​
for (let i = 0; i < word.length-1; i++){
  if(word[i]!==word[word.length-1-i]){
    pal = false;
    break;
  }
}
​
console.log(`${word} is a ${pal} palindrome`)
​
// Another solution without for loop
​
//reverse array method
​
let reverseWord = word.split('').reverse().join('');
​
if(word === reverseWord) {
  console.log(`${word} is a palindrome`)
}else {
  console.log(`${word} is not a palindrome`)
}
​
​
