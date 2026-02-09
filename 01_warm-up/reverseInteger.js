function reverse2(num) {
  let ans = parseInt(Math.abs(num).toString().split("").reverse().join(""));
  return ans * Math.sign(num);
}
const result2 = reverse2(-6540);
console.log(result2);

// If the value go outside this range [-2 power31, 2 power31 - 1] then return 0
function reverse(num) {
  let numCopy = num;
  num = Math.abs(num);

  let rev = 0;
  while (num > 0) {
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }
  let limit = Math.pow(2, 31);
  if (rev < -limit || rev > limit - 1) return 0;

  return numCopy < 0 ? -rev : rev;
}
const result = reverse(-321);
console.log(result);
