let str = ["eat", "tea", "tan", "ate", "nat", "bat"];

// Approach-1, Time = O(n * m log m), Space = O(n * m)
// n is no of strings & m is max length of each string
function groupAnagrams(str) {
  let map = {};
  for (let i = 0; i < str.length; i++) {
    let sortedStr = str[i].split("").sort().join("");

    if (!map[sortedStr]) {
      map[sortedStr] = [str[i]];
    } else {
      map[sortedStr].push(str[i]);
    }
  }
  return [...Object.values(map)];
}
console.log(groupAnagrams(str));
