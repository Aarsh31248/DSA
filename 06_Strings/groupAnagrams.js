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

// Approach-1, Time = O(n * m), Space = O(n * m)
function groupAnagrams2(strs) {
  let map = {};

  for (let i = 0; i < strs.length; i++) {
    let freqArr = Array(26).fill(0);
    let s = strs[i];

    for (let j = 0; j < s.length; j++) {
      let index = s[j].charCodeAt(0) - "a".charCodeAt(0);
      freqArr[index]++;
    }

    let key = freqArr.join("#");

    if (!map[key]) {
      map[key] = [s];
    } else {
      map[key].push(s);
    }
  }

  return Object.values(map);
}
console.log(groupAnagrams2(str));
