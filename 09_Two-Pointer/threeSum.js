let arr = [-1, 0, 1, 2, -1, 4];

function threeSum(arr) {
  arr.sort((a, b) => a - b);
  let ans = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === 0 || arr[i] !== arr[i - 1]) {
      twoSum(arr, i, ans);
    }
  }
  return ans;
}

function twoSum(arr, x, ans) {
  let i = x + 1;
  let j = arr.length - 1;

  while (i < j) {
    let sum = arr[x] + arr[i] + arr[j];

    if (sum > 0) {
      j--;
    } else if (sum < 0) {
      i++;
    } else {
      ans.push([arr[x], arr[i], arr[j]]);
      i++;
      j--;
      while (i < j && arr[i] === arr[i - 1]) i++;
    }
  }
}
console.log(threeSum(arr));
// Time O(n2), Space O(n)
