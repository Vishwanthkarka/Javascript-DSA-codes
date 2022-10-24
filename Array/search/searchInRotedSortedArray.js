// https://leetcode.com/problems/search-in-rotated-sorted-array/
//  Method -1 Binary search

const search = (nums,tar) => {
let left = 0;
let right = nums.length-1;
while(left <= right){
let mid = left + Math.floor((right-left)/2)
if(tar == nums[mid]){
    return mid
}
// left sorted portion
else if (nums[left] <= nums[mid]){
    if(tar =>nums[mid]|| tar<= nums[left]){
        left = mid+1
    }
    else{
        right = mid-1
    }

}

// right sorted portion
else{
    if(tar <= nums[mid] || tar>= nums[right]){
       
        right = mid-1
    }
    else{
        left = mid+1
    }
}
} 
return -1
}

console.log(search([[5,1,3]],5))