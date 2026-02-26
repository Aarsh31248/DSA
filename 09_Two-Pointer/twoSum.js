let arr = [3, 2, 4];

// Approach - 1, Time = O(n2), Space = O(1)
function twoSum(arr, target) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
}
console.log(twoSum(arr, 6));

// Approach - 2, Time = O(n), Space = O(n)
function twoSum2(arr, target) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = i;
  }
  for (let i = 0; i < arr.length; i++) {
    let pair = target - arr[i];
    if (map[pair] !== undefined && map[pair] !== i) {
      return [i, map[pair]];
    }
  }
}
console.log(twoSum2(arr, 6));
