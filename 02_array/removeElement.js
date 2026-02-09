// Given an integer array arr and an integer val, remove all the val in arr in-place. Then return the number of elements in nums which are not equal to val

function removeElement(arr) {
  let x = 0;
  let val = 2;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != val) {
      arr[x] = arr[i];
      x = x + 1;
    }
  }
  return x;
}
let arr = [0, 1, 2, 2, 3, 0, 4, 2];
const result = removeElement(arr);
console.log(result);
