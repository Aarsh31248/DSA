let firstBad = 4;

function isBadVersion(m) {
  return m >= firstBad;
}

function firstBadVersion(n) {
  let l = 1;
  let r = n;

  while (l < r) {
    let m = Math.floor((l + r) / 2);
    let ans = isBadVersion(m);

    if (ans === true) {
      r = m; // Include m also
    } else {
      l = m + 1;
    }
  }
  return r;
}

let n = 10;
console.log(firstBadVersion(n));
// Time → O(log n), Space → O(1).
