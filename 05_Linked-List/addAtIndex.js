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

LinkedList.prototype.addToTail = function (val) {
  let newNode = new Node(val);

  if (this.head == null) {
    this.head = newNode;
  } else {
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = newNode;
  }

  this.size++;
};

LinkedList.prototype.addToIndex = function (index, val) {
  if (index < 0 || index > this.size) {
    throw new Error("Index out of bounds");
  }

  if (index == 0) {
    this.addToHead(val);
    return;
  } else if (index == this.size) {
    this.addToTail(val);
    return;
  } else {
    let newNode = new Node(val);
    let curr = this.head;

    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    newNode.next = curr.next;
    curr.next = newNode;
  }
  this.size++;
};
