let str = ["flower", "flight", "flow"];

function longestCommonPrefix(str) {
  let x = 0;
  while (x < str[0].length) {
    let char = str[0][x];

    for (let i = 1; i < str.length; i++) {
      if (char !== str[i][x] || x == str[i].length) {
        return str[0].substring(0, x);
      }
    }
    x++;
  }
  return str[0];
}
console.log(longestCommonPrefix(str));
// Time = O(n * m), Space = O(1)
