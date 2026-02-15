function removeDuplicates(head) {
  let prev = head;

  while (prev !== null && prev.next !== null) {
    if (prev.val === prev.next.val) {
      prev.next = prev.next.next;
    } else {
      prev = prev.next;
    }
  }
  return head;
}
