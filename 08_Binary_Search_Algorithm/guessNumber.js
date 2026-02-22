let pickedNumber = 37;

function guess(num) {
  if (num > pickedNumber) return -1;
  if (num < pickedNumber) return 1;
  return 0;
}

function guessNumber(n) {
  let left = 1;
  let right = n;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let res = guess(mid);

    if (res === 0) return mid;

    if (res > 0) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
}
let n = 100;
console.log(guessNumber(n));
