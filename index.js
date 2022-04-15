// function compressionString(string) {
//   let result = ""
//   let count = 0

//   for(let i = 0; i < string.length; i++) {
//     count++
//     if(string[i] != string[i+1]) {
//       result = result + string[i] + count;
//       count = 0;
//     }
//   }
//   return result.replace(/1/g, '');
// }

// RECURSION METHOD

// let i = 0;
// let answerArray = [];

// const duplicatesRecursive = inputArray => {
//   if (inputArray.length === 0) {
//     return answerArray;
//   } else if (!answerArray.includes(inputArray[i])) {
//     answerArray.push(inputArray[i]);
//     inputArray.shift();
//     return duplicatesRecursive(inputArray);
//   } else {
//     inputArray.shift();
//     return duplicatesRecursive(inputArray);
//   }
// };

let result = "";
let count = 0;
let i = 0;

function recursionString(string) {
  count++;
  if (string.length === 0) {
    return answerArray;
  } else if (string[i] != string[i + 1]) {
    result = result + string[i] + count;
    count = 0;
    string = string.substring(1);
    return recursionString(string);
  } else {
    string = string.substring(1);
    return recursionString(string);
  }
}

console.log(recursionString("aaabccdddda"));
