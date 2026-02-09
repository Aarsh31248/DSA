// * * * *
// * * * *
// * * * *
// * * * *
for (let i = 0; i < 4; i++) {
  let row = "";
  for (let j = 0; j < 4; j++) {
    row = row + "* ";
  }
  //   console.log(row);
}

// *
// * *
// * * *
// * * * *
for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + "* ";
  }
  //   console.log(row);
}

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
for (let i = 1; i <= 5; i++) {
  let row = " ";
  for (let j = 1; j <= i; j++) {
    row = row + j;
  }
  //   console.log(row);
}

// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row = row + i;
  }
  // console.log(row);
}

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
let n = 5;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n - i; j++) {
    row = row + (j + 1);
  }
  //   console.log(row);
}

// * * * * *
// * * * *
// * * *
// * *
// *
let m = 5;
for (let i = 0; i < m; i++) {
  let row = "";
  for (let j = 0; j < m - i; j++) {
    row = row + "* ";
  }
  //   console.log(row);
}

//         *
//       * *
//     * * *
//   * * * *
// * * * * *
let a = 5;
for (let i = 0; i < a; i++) {
  let row = "";
  for (let j = 0; j < a - (i + 1); j++) {
    row = row + " ";
  }
  for (let k = 0; k < i + 1; k++) {
    row = row + "*";
  }
  //   console.log(row);
}

// 1
// 1 0
// 1 0 1
// 1 0 1 0
// 1 0 1 0 1
// 1 0 1 0 1 0
for (let i = 0; i < 6; i++) {
  let row = "";
  let flip = 1;
  for (let j = 0; j <= i; j++) {
    row = row + flip;
    if (flip == 1) {
      flip = 0;
    } else {
      flip = 1;
    }
  }
  console.log(row);
}
