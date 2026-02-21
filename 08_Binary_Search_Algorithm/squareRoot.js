let x = 20;

// Approach - 1, using Linear Search, Time = O(n) Space = O(1)
function squareRoot(x) {
  let ans;
  for (let i = 0; i * i <= x; i++) {
    ans = i;
  }
  return ans;
}
console.log(squareRoot(x));

// Approach - 2, using Binary Search, Time = O(log n) Space = O(1)
function squareRoot2(x) {
  if (x < 2) return x;

  let left = 2;
  let right = Math.floor(x / 2);
  let ans = 0;

  while (right >= left) {
    let mid = Math.floor((left + right) / 2);
    let square = mid * mid;

    if (square === x) return mid;

    if (square < x) {
      ans = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return ans;
}
console.log(squareRoot2(x));
