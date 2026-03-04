let arr = [0, 2, 7, 11, 15]; // If array is sorted
let target = 9;

function twoSum(arr, target) {
  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    if (arr[l] + arr[r] > target) {
      r--;
    } else if (arr[l] + arr[r] < target) {
      l++;
    } else {
      return [l + 1, r + 1];
    }
  }
}
console.log(twoSum(arr, target));
// Time O(n), Space O(1)
