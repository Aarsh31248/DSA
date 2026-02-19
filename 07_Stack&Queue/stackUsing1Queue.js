// Implement Stack using 1 Queue

function MyStack() {
  this.q = [];
}

MyStack.prototype.push = function (x) {
  this.q.push(x);
};

MyStack.prototype.pop = function () {
  let n = this.q.length;
  for (let i = 0; i < n - 1; i++) {
    this.q.push(this.q.shift());
  }
  return this.q.shift();
};

MyStack.prototype.top = function () {
  let n = this.q.length;
  for (let i = 0; i < n - 1; i++) {
    this.q.push(this.q.shift());
  }
  let front = this.q[0];
  this.q.push(this.q.shift());

  return front;
};

MyStack.prototype.empty = function () {
  return this.q.length === 0 ? true : false;
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
