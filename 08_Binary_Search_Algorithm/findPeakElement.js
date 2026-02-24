let arr = [1, 2, 1, 3, 5, 6, 4];

function findPeakElement(arr) {
  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    let m = Math.floor((l + r) / 2);

    if (arr[m] < arr[m + 1]) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  return r;
}
console.log(findPeakElement(arr));
// Time → O(log n), Space → O(1).
