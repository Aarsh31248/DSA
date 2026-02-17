let jewels = "aA";
let stones = "aAAbbbb";

// Approach -1, Time = O(n * m), Space = O(1)
function jewelsAndStones(jewels, stones) {
  let res = 0;
  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j < jewels.length; j++) {
      if (stones[i] == jewels[j]) {
        res++;
        break;
      }
    }
  }
  return res;
}
console.log(jewelsAndStones(jewels, stones));

// Approach - 2 (optimized using Set), Time = O(n + m), Space = O(m) or O(1) if character set is fixed(max 52)
function jewelsAndStones2(jewels, stones) {
  let count = 0;
  let set = new Set();

  for (let i = 0; i < jewels.length; i++) {
    set.add(jewels[i]);
  }

  for (let i = 0; i < stones.length; i++) {
    if (set.has(stones[i])) {
      count++;
    }
  }
  return count;
}
console.log(jewelsAndStones2(jewels, stones));
