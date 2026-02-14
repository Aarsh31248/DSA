function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// Approach 1 - 2 pass. Time = O(n), Space = O(1)
function reomveNthFromEnd(head, n) {
  let sentinel = new ListNode();
  sentinel.next = head;

  let length = 0;
  while (head != null) {
    head = head.next;
    length++;
  }

  let prevPos = length - n;
  let prev = sentinel;
  for (let i = 0; i < prevPos; i++) {
    prev = prev.next;
  }
  prev.next = prev.next.next;
  return sentinel.next;
}

// Approach 2 - 1 pass. Time = O(n), Space = O(1)
function reomveNthFromEnd2(head, n) {
  let sentinel = new ListNode();
  sentinel.next = head;

  let slow = sentinel;
  let fast = sentinel;
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  while (fast.next !== null) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return sentinel.next;
}
