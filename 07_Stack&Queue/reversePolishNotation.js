let s = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];

function reversePolishNotation(s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i])) {
      stack.push(Number(s[i]));
    } else {
      let b = stack.pop();
      let a = stack.pop();
      let ans;

      if (s[i] === "+") ans = a + b;
      else if (s[i] === "-") ans = a - b;
      else if (s[i] === "*") ans = a * b;
      else if (s[i] === "/") ans = Math.trunc(a / b);

      stack.push(ans);
    }
  }
  return stack.pop();
}
console.log(reversePolishNotation(s));
// Time → O(n), Space → O(n)
