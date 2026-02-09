function sum(n) {
  if (n == 0) return arr[0]; // if (n < 0) return 0; Means Sum everything until index becomes -1
  return arr[n] + sum(n - 1);
}
let arr = [5, 0, 1, 2, 3];
console.log(sum(arr.length - 1));
