let arr = [7, 4, 3, 5, 1, 2];

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    let prev = i - 1;

    while (prev >= 0 && arr[prev] > curr) {
      arr[prev + 1] = arr[prev];
      prev--;
    }
    arr[prev + 1] = curr;
  }
  return arr;
}
const result = insertionSort(arr);
console.log(result);
// Time Complexity - O(n power 2), Space - O(1)
