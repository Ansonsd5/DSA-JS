// Count distinct element in an array
//Given array is sorted

function uniqueNumbers(inputArray) {
  if (inputArray.length < 1) {
    throw new Error("There are no elements");
  }
  let count = 0; //i points at first element of the array
  for (let j = 1; j < inputArray.length; j++) {
    // j points to second element of array
    if (inputArray[j] != inputArray[j - 1]) {
      //checking if the second element and first are distinct if they are then
      count++; // increment i by one
    }
  }
  return count + 1; //since i started with zeroth index increment it by one
}
const num = uniqueNumbers([-2, 3, 5, 5, 6, 6, 6,7, 8, 9, 9, 9, 10]);
console.log(num);
