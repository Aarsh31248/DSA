function merge(num1, m, num2, n) {
  let num1Copy = num1.slice(0, m);
  let p1 = 0;
  let p2 = 0;

  for (let i = 0; i < m + n; i++) {
    if (p2 >= n || (p1 < m && num1Copy[p1] < num2[p2])) {
      num1[i] = num1Copy[p1];
      p1++;
    } else {
      num1[i] = num2[p2];
      p2++;
    }
  }
} // Time complexity = O(m+n), Space Complexity = O(m)

// Second approach, without using the extra space of copy array
function merge2(num1, m, num2, n) {
  let p1 = m - 1;
  let p2 = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    if (p2 < 0) break;

    if (p1 >= 0 && num1[p1] > num2[p2]) {
      num1[i] = num1[p1];
      p1--;
    } else {
      num1[i] = num2[p2];
      p2--;
    }
  }
} // Time complexity = O(m+n), Space Complexity = O(1)

const num1 = [1, 2, 3, 0, 0, 0];
const num2 = [2, 5, 6];
const m = 3;
const n = 3;
// merge(num1, m, num2, n);
// console.log(num1);

merge2(num1, m, num2, n);
console.log(num1);
