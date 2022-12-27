function getFrequencyOne(inputData) {
  let obj = {};
  let finalArray = [];
  if (inputData.length < 1) {
    throw new Error("No elements are available for operation");
  }
  for (let number of inputData) {
    obj[number] = (obj[number] || 0) + 1;
  }

  for (let item in obj) {
    if (obj[item] == 1) {
      finalArray.push(item);
    }
  }

  return finalArray;
}

const result = getFrequencyOne([1, 2, 2, 3, 3, 4, 5, 6, 6]);
console.log(result);
