let jewels = "aA";
let stones = "aAAbbbb";

// Approach -1, Time = O(n * m), Space = O(1)
function jewelsAndStones(jewels, stones) {
  let res = 0;
  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j < jewels.length; j++) {
      if (stones[i] == jewels[j]) {
        res++;
      }
    }
  }
  return res;
}
console.log(jewelsAndStones(jewels, stones));


