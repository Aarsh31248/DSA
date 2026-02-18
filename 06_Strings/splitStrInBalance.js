let str = "RLRRLLRLRL";

function splitStringInBalancedStrings(str) {
  let balance = 0;
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] == "R") {
      balance++;
    } else {
      balance--;
    }

    if (balance === 0) {
      count++;
    }
  }
  return count;
}
console.log(splitStringInBalancedStrings(str));
// Time = O(n), Space = O(1)
