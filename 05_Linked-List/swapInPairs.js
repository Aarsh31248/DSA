// Approach - 1, Time = O(n), Space = O(1)

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function swapNodesInPairs(head) {
  if (!head || !head.next) return head;

  let dummyNode = new ListNode();
  dummyNode.next = head;

  let p = dummyNode;
  let c = head;
  let n = head.next;

  while (c && n) {
    p.next = n;
    c.next = n.next;
    n.next = c;

    p = c;
    c = p.next;
    n = c && c.next;
  }

  return dummyNode.next;
}
