//1.
function greetMessage(name){
  console.log(`Good Morning, ${name}`)
}
greetMessage("John")
function greetUsers(array,callback){
  for( element of array ){
    callback(element)
  }
}
greetUsers(["John","Peter","Mark"], greetMessage)
//2.
function sqaure(number){
  return number*number
}
function calcSqaure(array,callback){
  let result = [];
  for (element of array){
    result.push(callback(element));
  }
  return result;
}
console.log(calcSqaure([1,2,3,4,5],sqaure))
