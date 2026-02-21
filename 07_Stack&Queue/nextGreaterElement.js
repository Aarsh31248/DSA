let nums = [4, 1, 2];
let arr = [1, 3, 4, 2];

function nextGreaterElement(nums, arr) {
  let stack = [];
  let map = {};
  let n = arr.length;

  stack.push(arr[n - 1]);
  map[arr[n - 1]] = -1;

  for (let i = n - 2; i >= 0; i--) {
    while (stack.length !== 0) {
      if (arr[i] > stack[stack.length - 1]) {
        stack.pop();
      } else {
        map[arr[i]] = stack[stack.length - 1];
        break;
      }
    }
    if (stack.length === 0) {
      map[arr[i]] = -1;
    }

    stack.push(arr[i]);
  }

  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    ans.push(map[nums[i]]);
  }
  return ans;
}
console.log(nextGreaterElement(nums, arr));
// Time → O(n),  Space → O(n)
