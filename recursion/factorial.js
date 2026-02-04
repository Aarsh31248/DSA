function fact(n) {
  if (n < 0) return "Factorial not defined for negative numbers";

  if (n === 0 || n === 1) return 1;
  return n * fact(n - 1);
}
const result = fact(5);
console.log(result);
