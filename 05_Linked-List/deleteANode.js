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

LinkedList.prototype.deleteElement = function (index) {
  if (index < 0 || index >= this.size) {
    console.log("Index not present");
    return;
  } else if (index == 0) {
    this.head = this.head.next;
  } else {
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    curr.next = curr.next.next;
  }
  this.size--;
};

let list = new LinkedList();

list.addToHead(10);
list.addToHead(20);
list.addToHead(30);

console.log(list);
list.deleteElement(1);
console.log(list);
