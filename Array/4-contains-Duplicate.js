// https://leetcode.com/problems/contains-duplicate
// method - 1
function Duplicate (arr){
    let count =0 
for (let i =0; i<arr.length; i++){
    for (let j =i+1; j<arr.length;j++){
        console.log(arr[i], arr[j])
        if(arr[i] == arr[j]){
          
count=+ 1
        }
      
    }
}
if(count >0 ){
    console.log(count)
    return true
}
else{
    return false
}
}

 // Method - 2 
const Duplicate1 = (arr) => {
let unique = new Set(arr)
console.log(unique.size-1)
return unique.size !== arr.length
}

console.log( Duplicate1([1,2,3,4]))