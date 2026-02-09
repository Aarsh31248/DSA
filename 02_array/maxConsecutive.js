function maxCountConsecutiveOnes(arr) {
  let maxCount = 0;
  let currentCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      currentCount = currentCount + 1;
      if (maxCount < currentCount) maxCount = currentCount;
    } else {
      currentCount = 0;
    }
  }
  return maxCount;
}

const arr = [1, 1, 0, 1, 1, 1];
const result = maxCountConsecutiveOnes(arr);
console.log(result);
