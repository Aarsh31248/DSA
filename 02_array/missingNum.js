function findMissingNumber(arr) {
  let n = arr.length;
  let expectedSum = n * (n + 1) / 2;
  let actualSum = 0;

  for (let i = 0; i < arr.length; i++) {
    actualSum = actualSum + arr[i];
  }
  return expectedSum - actualSum;
}
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 9]; //  8 is missing
const result = findMissingNumber(arr);
console.log(result);
