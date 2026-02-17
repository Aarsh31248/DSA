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

// Approach - 2, Time = O(n * m), Space = O(n) or O(1) because res is not used for the logic instead used for storing the result that question is demanding
function findWordsContainChar2(words, x) {
  let res = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (words[i][j] === x) {
        res.push(i);
        break;
      }
    }
  }
  return res;
}
console.log(findWordsContainChar2(words, x));
