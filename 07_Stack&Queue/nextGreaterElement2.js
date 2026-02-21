let nums = [1, 2, 3, 4, 3];

function nextGreaterElement2(nums) {
  let arr = [...nums, ...nums];
  let n = arr.length;

  let stack = [];
  let ans = new Array(n).fill(-1);

  stack.push(arr[n - 1]);

  for (let i = n - 2; i >= 0; i--) {
    while (stack.length) {
      let top = stack[stack.length - 1];
      if (arr[i] < top) {
        ans[i] = top;
        break;
      } else {
        stack.pop();
      }
    }
    stack.push(arr[i]);
  }
  return ans.slice(0, n / 2);
}
console.log(nextGreaterElement2(nums));
// Time → O(n),  Space → O(n)
