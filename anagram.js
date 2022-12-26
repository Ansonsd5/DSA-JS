// Input: str1 = “listen”  str2 = “silent”
// Output: “Anagram”
// Explanation: All characters of “listen” and “silent” are the same.zx

function isAnagaram(inputString, checkString) {   // function with two inputs
  if (inputString.length != checkString.length) { // checking for length of two strings equal or not
    return false;                                 // if length of inputstring and checkString is not eqaul it can not be a Anagram
  }
  let counter = {};  //empty object
  for (let letter of inputString) {               // getting each letter of word
    counter[letter] = (counter[letter] || 0) + 1; // setting map of letters 
  }

  for (let item of checkString) {                 //getting the letters of checkstrings
    if (!counter[item]) {                         // if the item(letter) not present then it cant become anagram
      return false;                               // end of execution
    } else counter[item] -= 1;                    // if the item(letter) is present decreasing the frequency of it by one
  }     
  return                           // once all items are checked and if there is no more items its a Anagram
}
 

const check = isAnagaram("ajay", "jaay");         // function call with two input and store its value in check

if (check == false) {                             //binary operation with check
  console.log("Its not a Anagram");               // display message 
} else {
  console.log("Its a Anagram");                   //display message 
}
