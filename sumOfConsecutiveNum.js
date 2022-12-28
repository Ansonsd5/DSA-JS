// Largest Sum of n consecutive numbers

function largestSum(array, num) {
  if (num > array.length) {
    throw new Error("Given number is too big");
  } else {
    let max = 0;
    for (let i = 0; i < array.length - num + 1; i++) {
      let temp = 0;

      {
        for (let j = 0; j < num; j++) {
          console.log(i, j);
          temp+= array[i + j];
        }
        if (temp > max) {
          max = temp;
        }
      }
    }
    return max;
  }
}

const result = largestSum([1, 3, 2, 5, 7, 3, 8, 4], 3);
console.log("The Largest consecutive Sum is :", result);
