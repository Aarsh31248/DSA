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


