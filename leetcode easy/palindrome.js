// https://leetcode.com/problems/palindrome-number/

// let isPalindromevalue = function(x){
//     let newValue = ""
//     let String = x.toString()
// for (let i = x.length-1; i>0;i--){
//      newValue = newValue + String[i]
//      console.log(String[i])
     
// }
// console.log(String)
// }

// isPalindromevalue(234)


// method -02
let isPalindrome = function(x) {
    x = x.toString()
    for (let i =0; i<x.length;i++){
        if(x[i] !== x[x.length-1-i]){
            return false
        }
        
    }
    return true
};

// console.log(isPalindrome(121))

let arr = ["hello", "welcome"]
console.log(arr[0][1])