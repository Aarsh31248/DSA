// Approach - 1, using In-built function
function lengthOfLastWord(s) {
  let words = s.trim().split(" ");
  words = words[words.length - 1];
  return words.length;
}
let s = "     fly   me to the moon   ";
// console.log(lengthOfLastWord(s));


