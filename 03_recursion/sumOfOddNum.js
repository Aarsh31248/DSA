function sum(n) {
  if (n < 0) return 0;

  if (arr[n] % 2 !== 0) {
    return arr[n] + sum(n - 1);  //  // Add if odd
  } else {
    return sum(n - 1); // Skip if even
  }
}
let arr = [4, 5, 0, 1, 2, 3];
console.log(sum(arr.length - 1));
