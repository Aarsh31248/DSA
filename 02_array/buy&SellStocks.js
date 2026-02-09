function stocks(arr) {
  let min = arr[0];
  let profit = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] - min > profit) {
      profit = arr[i] - min;
    }
  }
  return profit > 0 ? profit : 0;
}

let arr = [7, 1, 5, 3, 6, 4];
const result = stocks(arr);
console.log(result);
