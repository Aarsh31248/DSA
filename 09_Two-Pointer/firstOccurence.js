//Approach - 1, Brute Force using sliding windows. Time O(n * m), Space O(1)

let haystack = "onionionsky";
let needle = "onions";

function firstOccurenceInString(haystack, needle) {
  let n = haystack.length;
  let m = needle.length;

  for (let i = 0; i <= n - m; i++) {
    let j = 0;
    while (j < m && haystack[i + j] === needle[j]) {
      j++;
    }

    if (j === m) return i;
  }
  return -1;
}
console.log(firstOccurenceInString(haystack, needle));
