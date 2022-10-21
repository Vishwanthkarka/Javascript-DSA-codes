
// https://leetcode.com/problems/maximum-subarray/
// Method -01 
var maxSubArray = function(nums) {
    let subString
     let maxString = new Array
     if(nums.length==1){
         return nums[0]
     }

 for (let i =0 ; i<nums.length; i++){ 
 
     subString = 0
     for (let j= i; j <nums.length; j++){ 
         subString += nums[j]
         maxString.push(subString)
        //  if( subString > maxString){
        //      maxString = subString
        //  }
     }

    
 } 
 return Math.max(...maxString) 
 };
console.log( maxSubArray([-2,-1]))
