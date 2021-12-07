/*1. Sort in decreasing order
*/


const arr1 = [5, 2, 1, -10, 8];

arr1.sort( function (element1,element2) {
  if(element1 > element2){
    return -1;
  }else if (element1 < element2) {
    return 1;
  } else {
    return 0;
  }
})

//option 2: 
// arr1.sort((element1,element2)=>element2-element1)

console.log( arr1 ); // 8, 5, 2, 1, -10

/* 2. Range
Create a function filterRange(array, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

For instance:

const arr2 = [5, 3, 8, 1];

const filtered = filterRange(arr2, 1, 4);

console.log( filtered ); // 3,1 (matching values)
*/
function filterRange (array,a,b) {
  const filteredArray = array.filter((element)=>{
     if (element >= a && element <= b){
      return true
     } else {
      return false
     }
  })
  return filteredArray
}

// option 2:
// function filterRange (array,a,b) {
//   return array.filter((element)=>element >= a && element <= b)
// }

const arr2 = [5, 3, 8, 1];

const filtered = filterRange(arr2, 1, 4);

console.log( filtered ); // 3,1 (matching values)

/*3. Return the square
Create a function givePower(array) that calculates the square of each element and returns a new array with the square values.

const arr3 = [3, 4, 5, 6];

const squaredArray = givePower(arr3);

console.log( squaredArray ); // [9,16,25,36] (matching values)
*/
function givePower(array) {
  const mappedArray = array.map((element)=>{
    return Math.pow(element,2);
  })
  return mappedArray
}

const arr3 = [3, 4, 5, 6];

const squaredArray = givePower(arr3);

console.log( squaredArray ); // [9,16,25,36] 

/* 4. Votes!
Create a function totalVotes(array) that calculates how many people voted according to the information of each object. If the object has voted equal true it means the person voted. If the object has voted equal false then it means the person did not vote.
*/
function totalVotes (array) {
  const numberOfpeople = array.reduce((accum,element)=>{
    if(element.voted) {
      return accum + 1
    } else {
      return accum
    }
  },0)
  return numberOfpeople;
}

// //option 2:
// function totalVotes (array) {
//   return array.reduce((accum,element)=>element.voted?accum+1:accum,0)
// }

const voters = [
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted:true},
  {name:'Tami' , age: 54, voted:true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
];

console.log(totalVotes(voters)); // 7
