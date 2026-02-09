// Write a function that searches for an element in an array and returns the index, if the element is not presennt then just return -1
function find(target) {
  let arr = [8, 65, 74, 32, 5, 85, 4, 16, 14, 6, 3];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
const num = find(56);
// console.log(num);

// Write a function that returns the number of negative numbers in an array
function find() {
  let arr = [2, -8, 6, -2, -7, 3, 4, 0, -1];
  let negNum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negNum++;
    }
  }
  return negNum;
}

const num2 = find();
// console.log(num2);

// Write a function that returns the largest number in an array

function findLargest() {
  let arr = [52, 0, 9, 72, 10, 6];
  let largeNum = arr[0]; // or can use -Infinity

  for(let i =0; i < arr.length; i++){
    if(arr[i] > largeNum){
        largeNum = arr[i]
    }
  }
  return largeNum
}

const num3 = findLargest()
console.log(num3)