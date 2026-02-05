let arr = [7, 1, 5, 4, 12, -10, 0, 3, 2];

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (min != i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

const result = selectionSort(arr);
console.log(result);
// Time Complexity - O(n power 2), Space - O(1)
