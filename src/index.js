//palindrom

// function palindrome(str) {
//   //removing alpha numeric character
//   //regular expression is sequence of characters
//   //that define a specific search pattern.

//   var reg = /[\W_]/g;

//   var smallStr = str.toLowerCase().replace(reg, "");

//   var reversed = str
//     .split("")
//     .reverse()
//     .join("");
//   if (reversed === smallStr) return true;
//   return false;
// }

// console.log(palindrome("racecar"));

// function findWord(str){
//   // return str.split(' ').sort(function(a,b){return b.length - a.length})[0]
//    var words = str.split(' '); //must have space in between
//    console.log(words)
//    var longest = "";

//    for(var word of words){
//    if(word.length > longest.length) longest = word;
//    }
//    return longest.length;

//  }

//    console.log(findWord('The quick brown fox jumped over the lazy dog'));

// function  titleCase(str) {
//   //split the word into array
//   // lowercase it
//   //run for loop
//   // set the first element to uppercase and then add the remainder.

// let words = str.toLowerCase().split(' ')

// for( let i = 0 ; i < words.length; i++){
// words[i] = words[i][0].toUpperCase() + words[i].slice(1)
// }

// return words.join(" ");

// }

// console.log(titleCase("I'm a little tea pot"))

// function titleCased(str){
// const words = str.toLowerCase().split(' ').map((elem) => (
//   elem[0].toUpperCase() + elem.slice(1)
// ))
// return words.join(' ');
// }

// console.log(titleCased("I'm a little tea pot"))

// function largestOfFour(arr){
// //create an empty array
// // loop over the outer array
// //take the first element and save it in var so we can compare.
// //loop over the nested array holding outer array
// // save the the loop in a variable arr [i][j]. console.log to check
// // check with if statement if current element is greate or equal to tempMax
// // assign it to temp max
// // maxes.push(tempmax)

// var maxes = [];
//   for(let i = 0; i < arr.length; i++){
//     var tempMax = arr[i][0];
//     console.log(tempMax)
//     for(let j = 0; j <arr[i].length; j++){
//       var currentElement = arr[i][j];
//       if (currentElement >= tempMax){
//         tempMax = currentElement;
//       }
//     }
//     maxes.push(tempMax)
//   }
//   return maxes;

// }
// console.log(largestOfFour([[4,5,1,3], [13,27,18,26], [32,35,27,39], [1000,10001,857,1]]))

// function largestOfFour(arr){
//  // intialize maxes with 000 so you can compare it later.
//  //run two loops
//  // after assiging loops elements to arr[i][j]
//  //check if current element is greater than max i

//   var maxes = [0,0,0,0];
//     for(let i = 0; i < arr.length; i++){
//       for(let j = 0; j <arr[i].length; j++){
//         var currentElement = arr[i][j];
//         if (currentElement >= maxes[i]){
//           maxes[i] = currentElement;

//         }
//       }
//     }
//     return maxes;

//   }
//   console.log(largestOfFour([[4,5,1,3], [13,27,18,26], [32,35,27,39], [1000,10001,857,1]]))

const findMax = arr => {
  let max = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
};

// console.log(findMax([2,4,5,6]))

const largestOfFour = arr => {
  let maxed = [];
  for (let i = 0; i < arr.length; i++) {
    let innerMax = findMax(arr[i]);
    maxed.push(innerMax);
  }
  return maxed;
};

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 27, 39],
    [1000, 10001, 857, 1]
  ])
);
