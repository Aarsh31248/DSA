//Approach - 2, KMP Algorithm. Time O(n + m), Space O(n)

let haystack = "onionionsky";
let needle = "onions";

function firstOccurenceInString(haystack, needle) {
  let n = haystack.length;
  let m = needle.length;

  let lps = [0];
  let i = 0;
  let j = 1;

  while (j < m) {
    if (needle[i] === needle[j]) {
      lps[j] = i + 1;
      i++;
      j++;
    } else {
      if (i === 0) {
        lps[j] = 0;
        j++;
      } else {
        i = lps[i - 1];
      }
    }
  }

  i = j = 0;

  while (i < n) {
    if (haystack[i] === needle[j]) {
      i++;
      j++;
    } else {
      if (j === 0) {
        i++;
      } else {
        j = lps[i - 1];
      }
    }

    if (j === m) {
      return i - m;
    }
  }
}
console.log(firstOccurenceInString(haystack, needle));
