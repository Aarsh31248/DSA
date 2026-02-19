// Implement Stack using 2 Queues

function MyStack() {
  this.q1 = [];
  this.q2 = [];
}

MyStack.prototype.push = function (x) {
  this.q1.push(x);
};

MyStack.prototype.pop = function () {
  let n = this.q1.length;
  for (let i = 0; i < n - 1; i++) {
    let firstElement = this.q1.shift();
    this.q2.push(firstElement);
  }
  let ans = this.q1.shift();

  let temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;

  return ans;
};

MyStack.prototype.top = function () {
  let n = this.q1.length;
  for (let i = 0; i < n - 1; i++) {
    let firstElement = this.q1.shift();
    this.q2.push(firstElement);
  }
  let top = this.q1.shift();
  this.q2.push(top);

  let temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;

  return top;
};

MyStack.prototype.empty = function () {
  return this.q1.length === 0 ? true : false;
};

let stack = new MyStack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack);

let pop = stack.pop();
console.log(pop);

let top = stack.top();
console.log(top);

let empty = stack.empty();
console.log(empty);

console.log(stack);
