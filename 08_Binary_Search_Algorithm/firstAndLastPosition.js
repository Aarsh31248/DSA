let arr = [5, 7, 7, 8, 8, 10];
let target = 8;

function positionRange(arr, target) {
  let ans = [-1, -1];
  // First occurrence
  let l = 0;
  let r = arr.length - 1;
  while (l < r) {
    let m = Math.floor((l + r) / 2);
    if (arr[m] < target) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  if (arr[l] === target) ans[0] = l;
  // Last occurrence
  l = 0;
  r = arr.length - 1;
  while (l < r) {
    let m = Math.ceil((l + r) / 2);
    if (arr[m] > target) {
      r = m - 1;
    } else {
      l = m;
    }
  }
  if (arr[l] === target) ans[1] = l;
  
  return ans;
}
console.log(positionRange(arr, target));
// Time → O(log n), Space → O(1).
