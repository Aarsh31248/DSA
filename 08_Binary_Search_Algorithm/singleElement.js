let arr = [1, 1, 2, 3, 3, 4, 4, 5, 5];

// Approach - 1
function singleNonDuplicate(arr) {
  let l = 0;
  let r = arr.length - 1;

  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    // Pair is on the left side
    if (arr[m] === arr[m - 1]) {
      let leftCount = m - 1 - l;
      if (leftCount % 2 === 1) {
        r = m - 2;
      } else {
        l = m + 1;
      }
      // Pair is on the right side
    } else if (arr[m] === arr[m + 1]) {
      let leftCount = m - l;
      if (leftCount % 2 === 1) {
        r = m - 1;
      } else {
        l = m + 2;
      }
    } else {
      return arr[m];
    }
  }
}
console.log(singleNonDuplicate(arr));

// Approach - 2, Cleaner and Shorter version
function singleNonDuplicate2(arr) {
  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    let m = Math.floor((l + r) / 2);

    if (m % 2 === 1) m--; // Force m to be on Even index

    if (arr[m] === arr[m + 1]) {
      l = m + 2;
    } else {
      r = m;
    }
  }
  return arr[l];
}
console.log(singleNonDuplicate2(arr));
