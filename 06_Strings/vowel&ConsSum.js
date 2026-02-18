let str = "successes";

function sumOfMaxVowelAndConsonant(str) {
  let map = {};
  for (let i = 0; i < str.length; i++) {
    if (!map[str[i]]) {
      map[str[i]] = 1;
    } else {
      map[str[i]]++;
    }
  }

  let vowels = ["a", "e", "i", "o", "u"];
  let maxVowel = 0;
  let maxConsonant = 0;
  let mapKeys = Object.keys(map);

  for (let i = 0; i < mapKeys.length; i++) {
    if (vowels.includes(mapKeys[i])) {
      if (map[mapKeys[i]] > maxVowel) {
        maxVowel = map[mapKeys[i]];
      }
    } else {
      if (map[mapKeys[i]] > maxConsonant) {
        maxConsonant = map[mapKeys[i]];
      }
    }
  }
  return maxVowel + maxConsonant;
}
console.log(sumOfMaxVowelAndConsonant(str));
// Time = O(n), Space = O(1)
