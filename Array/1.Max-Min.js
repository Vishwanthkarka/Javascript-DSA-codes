// https://www.geeksforgeeks.org/maximum-and-minimum-in-an-array/
// Method-1
// 0 => n
const minMax = (arr) => {
  let max;
  let min;
  let n = arr.length - 1;
  if (n == 0) {
    return [arr[0], arr[0]];
  } else if (n == 1) {
    if (arr[0] > arr[1]) {
      max = arr[0];
      min = arr[1];
      return [min, max];
    }
  }
  let i = 0;
  min = arr[0];
  max = arr[1];
  while (i < n) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    i++;
  }
  return [min, max];
};

console.log(minMax([2, 33, 11, 3, 5, 2, 55, 7]));
console.log(minMax([2]));
console.log(minMax([2, 55]));
