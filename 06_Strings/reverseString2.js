let str = "abcdefg";
let k = 2;

function reverseString(str, k) {
  let arr = str.split("");

  for (let x = 0; x < arr.length; x = x + 2 * k) {
    let mid = Math.floor(k / 2);
    for (let i = 0; i < mid; i++) {
      let temp = arr[x + i];
      arr[x + i] = arr[x + k - 1 - i];
      arr[x + k - 1 - i] = temp;
    }
  }

  return arr.join("");
}
console.log(reverseString(str, k));
// Time = O(n), Space = O(n)
