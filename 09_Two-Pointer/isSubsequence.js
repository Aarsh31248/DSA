let s = "abc";
let t = "abcde";

function isSubsequence(s, t) {
  let i = 0;
  let j = 0;

  while (j < t.length && i < s.length) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }
  return i === s.length;
}
console.log(isSubsequence(s, t));
// Time O(n), Space O(1)
