function Node(val) {
  this.val = val;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.size = 0;
}

LinkedList.prototype.addToHead = function (val) {
  let newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};

LinkedList.prototype.getAnElement = function (index) {
  if (index < 0 || index >= this.size) {
    return -1;
  } else {
    let curr = this.head;
    for (let i = 0; i < index; i++) {
      curr = curr.next;
    }
    return curr.val;
  }
};

let list = new LinkedList();

list.addToHead(10);
list.addToHead(20);
list.addToHead(30);

console.log(list.getAnElement(2));
