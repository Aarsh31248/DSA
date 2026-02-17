let str = "     fly   me to the moon   ";

// Approach - 1, using In-built function, Time = O(n), Space = O(n)
function lengthOfLastWord(str) {
  let words = str.trim().split(" ");
  words = words[words.length - 1];
  return words.length;
}
console.log(lengthOfLastWord(str));

// Approach - 2, using 2 while loops, , Time = O(n), Space = O(1) 
function lengthOfLastWord2(str) {
  // Trim the spaces
  let n = str.length - 1;
  while (n >= 0) {
    if (str[n] != " ") break;
    --n;
  }
  // n is at the point where last word starts
  // Count the character till you reach the space
  let count = 0;
  while (n >= 0) {
    if (str[n] == " ") break;
    --n;
    ++count;
  }

  return count;
}
console.log(lengthOfLastWord2(str));

