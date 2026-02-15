function oddEvenSequence(head) {
  if (!head || !head.next) return head;

  let odd = head;
  let even = head.next;
  evenStart = even;

  while (odd.next !== null && even.next !== null) {
    odd.next = odd.next.next;
    even.next = even.next.next;
    odd = odd.next;
    even = even.next;
  }
  odd.next = evenStart;
  return head;
}
