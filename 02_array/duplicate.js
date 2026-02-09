// Given an integer array arr sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements  should be kept as same. then return the number of unique elements in arr

function duplicate(arr) {
  let x = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] > arr[x]) {
      x = x + 1;
      arr[x] = arr[i];
    }
  }
  return x + 1;
}
let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const result = duplicate(arr);
console.log(result); //  Number of unique elements
console.log(arr); // Changed array
