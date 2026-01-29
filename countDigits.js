// Write a function that returns the count of digits in a number

function countDigits(num) {
  if (typeof num != "number") return "Please enter some number";

  const string = Math.abs(num).toString();
  return string.length;
}
const result = countDigits(-259);
// console.log(result);

// Another method
function countDigits2(num) {
  let count = 0;
  if (typeof num != "number") return "Please enter some number";
  if (num === 0) return 1;

  num = Math.abs(num);

  while (num > 0) {
    num = Math.floor(num / 10);
    count = count + 1;
  }
  return count;
}
const result2 = countDigits2(0);
console.log(result2);
