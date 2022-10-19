//https://www.geeksforgeeks.org/write-a-program-to-reverse-an-array-or-string/

//Method -1
// Time Complexity : O(n)
const reverseArray = (arr) => {
  let newArr = new Array();
  for (let i = arr.length - 1; i > 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
};
console.log(reverseArray([1, 2, 34, 88, 21, 345, 67, 4]));

