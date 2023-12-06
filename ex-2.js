//Exercise #2: At Least Five Function

function atLeastFive(array, operation) {
  let count = 0;
  for (let score of array) {
    let result = operation(score);
    count += result;
  }
  if (count >= 5) {
    return true;
  } else {
    return false;
  }
}

function operation(score) {
  if (score >= 70) {
    return 1;
  } else {
    return 0;
  }
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1, operation);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, operation);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, operation);
console.log(scoreRoom1Result, scoreRoom2Result, scoreRoom3Result);
