let arr = [-1, 0, 3, 5, 9, 12]; // Only apply on Ascending array

function binarySearch(arr, target) {
  let l = 0;
  let r = arr.length - 1;

  while (r >= l) {
    let m = Math.floor((l + r) / 2);

    if (arr[m] === target) {
      return m;
    } else if (target > arr[m]) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return -1; // if not found
}

const result = binarySearch(arr, 5);
console.log(result);
// Time complexity - O(log n), Space - O(1)
