let words = ["abc", "bcd", "aaaa", "cbc"];
let x = "a";

// Approach - 1, using Includes Method
function findWordsContainChar(words, x) {
  let res = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) res.push(i);
  }
  return res;
}
console.log(findWordsContainChar(words, x));


