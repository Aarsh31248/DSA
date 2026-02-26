let arr = [1, 1, 2, 3, 3, 3, 4, 5, 5];

function findKClosestElement(arr, k, x) {
  let l = 0;
  let r = arr.length - k;

  while (l < r) {
    let m = Math.floor((l + r) / 2);
    // Finding distance to x for both ends
    if (x - arr[m] > arr[m + k] - x) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  return arr.slice(l, l + k);
}
console.log(findKClosestElement(arr, 4, 3));
// Time → O(log n), Space → O(1).
