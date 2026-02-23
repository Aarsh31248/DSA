let arr = [3, 4, 5, 1, 2];

function findMin(arr) {
  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    if (arr[l] <= arr[r]) return arr[l];

    let m = Math.floor((l + r) / 2);

    if (arr[l] > arr[m]) {
      r = m;
    } else {
      l = m + 1;
    }
  }
  return arr[l];
}
console.log(findMin(arr));
// Time → O(log n), Space → O(1)
