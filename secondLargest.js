// Find the second largest number in an array
function FindSecondLargest() {
  let arr = [4, 19, 3, 12, 19, 7, 1, 18];
  if (arr.length < 2) return null;

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
const num = FindSecondLargest();
console.log(num);
