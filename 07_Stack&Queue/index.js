// Stack can use only 3 operations, push(), pop(), stack[stack.length - 1]

let stack = [];

stack.push(1); // Adding from top
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log(stack);

stack.pop(); // Removing from top
stack.pop();

console.log(stack);

let topOfStack = stack[stack.length - 1]; // Top Element in the stack (Peek)
console.log(topOfStack);

// Queue can use only 3 operations, push(), shift(), queue[0]

let queue = [];

queue.push(1); // Adding from back (enqueue)
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);

console.log(queue);

queue.shift(); // Removing from front (dequeue)
queue.shift();

console.log(queue);

let topOfQueue = queue[0]; // First element in the Queue (Peek)
console.log(topOfQueue);

// Stack & Queue are similar to arrays, but with restricted access
