function MyQueue() {
  this.s1 = [];
  this.s2 = [];
}

MyQueue.prototype.push = function (x) {
  this.s1.push(x);
};

MyQueue.prototype.pop = function () {
  if (this.s2.length !== 0) {
    return this.s2.pop();
  } else {
    let n = this.s1.length;
    for (let i = 0; i < n; i++) {
      this.s2.push(this.s1.pop());
    }
    return this.s2.pop();
  }
};

MyQueue.prototype.top = function () {
  if (this.s2.length !== 0) {
    return this.s2[this.s2.length - 1];
  } else {
    let n = this.s1.length;
    for (let i = 0; i < n; i++) {
      this.s2.push(this.s1.pop());
    }
    return this.s2[this.s2.length - 1];
  }
};

MyQueue.prototype.empty = function () {
  if (this.s2.length == 0 && this.s1.length == 0) {
    return true;
  } else {
    return false;
  }
};

let queue = new MyQueue();
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);
console.log(queue);

let pop = queue.pop();
console.log(pop);

let top = queue.top();
console.log(top);

let empty = queue.empty();
console.log(empty);

console.log(queue);
