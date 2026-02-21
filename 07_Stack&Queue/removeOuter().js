let s = "(()())(())(()(()))";

// Approach - 1, using stack, Time = O(n) Space = O(n)
function removeOuterParentheses(s) {
  let stack = [];
  let ans = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
      if (stack.length > 1) {
        ans = ans + s[i];
      }
    } else {
      if (stack.length > 1) {
        ans = ans + s[i];
      }
      stack.pop();
    }
  }
  return ans;
}
console.log(removeOuterParentheses(s));

// Approach - 2, without using stack, Time = O(n) Space = O(1)
function removeOuterParentheses2(s) {
  let level = 0;
  let ans = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      level++;
      if (level > 1) ans = ans + s[i];
    } else {
      if (level > 1) ans = ans + s[i];
      level--;
    }
  }
  return ans;
}
console.log(removeOuterParentheses2(s));
