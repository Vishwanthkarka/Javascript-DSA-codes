// https://leetcode.com/problems/sort-colors/submissions/
// Method -1 --> bubblesort

 let sortColors = function(nums) {
    for (let i =0 ; i<nums.length; i++){
        for (let j =0 ;j<nums.length-1-i; j++){
            if(nums[j] >nums[j+1]){
                [nums[j],nums[j+1]] = [nums[j+1],nums[j]]
            }
        
        }
    }
    return nums
}

console.log()