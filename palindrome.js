function palindrome(x) {
  x = x.toString();
  let y = x.split("").reverse().join("");

  if (x === y) {
    return true;
  } else {
    return false;
  }
}
const result = palindrome(141);
// console.log(result);

// Another Method
function palindrome2(x) {
  if (x < 0) return false;

  let xCopy = x;
  let rev = 0;

  while (x > 0) {
    rem = x % 10;
    rev = rev * 10 + rem;
    x = Math.floor(x / 10);
  }
  return rev === xCopy;
}
const result2 = palindrome2();
console.log(result2);