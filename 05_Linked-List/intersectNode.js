function intersectNode(headA, headB) {
  let currA = headA;
  let currB = headB;

  let set = new Set();
  while (currB !== null) {
    set.add(currB);
    currB = currB.next;
  }

  while (currA !== null) {
    if (set.has(currA)) return currA;
    currA = currA.next;
  }

  return null;
}
// Time - O(m + n), Space - O(n)
