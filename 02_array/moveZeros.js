function moveZeros(arr) {
  let x = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
      arr[x] = arr[i];
      x++;
    }
  }
  for (let i = x; i < arr.length; i++) {
    arr[i] = 0;
  }
}

const arr = [0, 1, 0, 3, 12,0];
moveZeros(arr);
console.log(arr);
