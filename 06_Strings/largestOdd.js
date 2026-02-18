let str = "3457";

function largestOddNum(str) {
  let i = str.length - 1;
  while (i >= 0) {
    if (Number(str[i]) % 2 === 1) {
      return str.substring(0, i + 1);
    } else {
      i--;
    }
  }
  return "";
}
console.log(largestOddNum(str));
// Time = O(n), Space = O(1)
