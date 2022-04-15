// Example
// Input: [7, 9, "hi", 12, "hi", 7, 53]

// Output: [7, 9, "hi", 12, 53]

function answerFunction(array) {
  answerArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!answerArray.includes(array[i])) {
      answerArray.push(array[i]);
    }
  }
  return answerArray;
}
