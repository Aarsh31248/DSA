// Approach 1 using Set
function linkedListCycle(head) {
  let seenNode = new Set();
  let curr = head;

  while (curr != null) {
    if (seenNode.has(curr)) {
      return true;
    }
    seenNode.add(curr);
    curr = curr.next;
  }
  return false;
}
// Time complexity: O(n), Space complexity: O(n)

// Approach 2 using Floyd's Cycle Finding Algorithm
function linkedListCycle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    
    if (slow === fast) return true;
  }
  return false;
}
// Time complexity: O(n), Space complexity: O(1)
