// Write a function to print n to 1 using recursion.
function print(n) {
  if (n < 1) return;
  console.log(n);
  print(--n);
}
// const n = 10;
// print(n);

// Write a function to print 1 to n using recursion.
let n = 10;
function print2(x) {
    if (x > n) return;
    console.log(x);
    x = x + 1;
    print2(x)
}
let x = 1;
print2(x);
