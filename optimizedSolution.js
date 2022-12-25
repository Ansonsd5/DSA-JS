// Input: nums = [-5,-4,-3,-2,0,2,4,6,8], target = 0

// Output: [-4,4]

// Explanation: From the example we can see that nums[1] + nums[6] == 0, 
// which is the required target, so have to return [-4,4].

function zeroSumOptimized(array){
  let  left = 0;
  let right = array.length-1;

  while( left< right){
    if(array[left]-array[right]== 0){
        return [array[left],array[right]]
    }
    right--;
  }
left ++;
  
}

const result =  zeroSumOptimized([-5,-4,-3,-2,0,2,4,6,8]);
console.log(result);