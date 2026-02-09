let arr = [4, 9, 1, 0, 2];

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1;
}

const result = linearSearch(arr, 9);
console.log(result); // Time Complexity - O(n)
