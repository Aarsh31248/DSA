function intersectionOfTwoLinkedList(headA, headB) {
  let i = headA;
  let j = headB;

  while (i !== j) {
    i = i === null ? headB : i.next;
    j = j === null ? headA : j.next;
  }
  return i;
}

// Another apporach using 2 pointers, Time - O(n + m), space O(1)
