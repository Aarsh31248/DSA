// function reverseString(arr) {
//   arr = arr.reverse();
//   return arr;
// }
// let arr = ["h", "e", "l", "l", "o"];
// const result = reverseString(arr);
// console.log(result);

function reverseString(arr) {
  let length = arr.length;
  let halfLength = Math.floor(length / 2);

  for (let i = 0; i < halfLength; i++) {
    let temp = arr[i];
    arr[i] = arr[length - 1 - i];
    arr[length - 1 - i] = temp;
  }
}

let arr = ["h", "e", "l", "l", "o"];
console.log(arr);
