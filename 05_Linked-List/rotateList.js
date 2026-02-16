function rotateListKTimes(head, k) {
  if (!head || !head.next) return head;

  let curr = head;
  let length = 1;
  while (curr.next !== null) {
    curr = curr.next;
    length++;
  }

  k = k % length;
  if (k === 0) return head;

  let slow = head;
  let fast = head;

  for (let i = 0; i < k; i++) {
    fast = fast.next;
  }

  while (fast.next !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  fast.next = head;
  let headNode = slow.next;
  slow.next = null;
  return headNode;
}
// Time Complexity - O(n), Space COmplexity - O(1)
