function Node(val) {
  this.val = val;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.size = 0;
}

LinkedList.prototype.addToTail = function (val) {
  let newNode = new Node(val);

  if (this.head == null) {
    this.head = newNode;
  } else {
    let curr = this.head;

    while (curr.next != null) {
      curr = curr.next;
    }
    curr.next = newNode;
  }
  this.size++;
};

let list = new LinkedList();
list.addToTail(5);
list.addToTail(6);
list.addToTail(7);
console.log(list)
