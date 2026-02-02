// Approach 1, Space Complexity = O(n)
function findNonRepeatingNum(arr) {
  let hash = {};

  for (let i = 0; i < arr.length; i++) {
    if (!hash[arr[i]]) {
      hash[arr[i]] = 1;
    } else {
      hash[arr[i]]++;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i]] == 1) {
      return arr[i];
    }
  }
}

// Approach 2 = Space Complexity = O(1)
function findNonRepeatingNum2(arr) {
  let xor = 0;

  for (let i = 0; i < arr.length; i++) {
    xor = xor ^ arr[i];
  }
  return xor;
}

const arr = [4, 1, 2, 1, 2];
const result = findNonRepeatingNum(arr);
console.log(result);

const result2 = findNonRepeatingNum2(arr);
console.log(result2);
