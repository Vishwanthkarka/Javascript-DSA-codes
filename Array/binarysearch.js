
// method -01
function BinarySearch(arr,low,high,tar){
let mid = low + Math.floor((high-low)/2)
if(arr[mid] == tar){
    return mid
}
else if(tar<arr[mid]){
  return  BinarySearch(arr,low,mid-1,tar)
}
else{
   return BinarySearch(arr,mid+1,high,tar)
}
}
let arr= [1,2,3,4,5,6,7,8,9,10]
let low = 0;
let high = arr.length-1
console.log(BinarySearch(arr,low,high,9))



// method-2
function BinSearch(arr,tar){
let l  = 0;
let r = arr.length-1;


while(l<=r){
    let mid = l+Math.floor((r-l)/2)
    if(arr[mid] == tar){
        return mid
    }
else if(tar<arr[mid]){
r= mid-1
}
else{
    l =mid+1 
}
}
}
console.log(BinSearch([1,2,3,4,5,6,7,8,9,10],9))
