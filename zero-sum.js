// Input: nums = [-5,-4,-3,-2,0,2,4,6,8], target = 0

// Output: [-4,4]

// Explanation: From the example we can see that nums[1] + nums[6] == 0, 
// which is the required target, so have to return [-4,4].


function zeroSum(array){
for ( let number in array){
for( let j=1; j<= array.length; j++){
    if(array[number]+ array[j] == 0){
        return [array[number],array[j]]
    }
}
}
}

const results = zeroSum([-5,-4,-3,-2,0,2,4,6,8]);
console.log(results)