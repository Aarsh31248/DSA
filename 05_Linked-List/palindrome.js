// Approach 1 - Time O(n), Space O(n)
function palindrome(head) {
  let curr = head;
  let arr = [];
  while (curr != null) {
    arr.push(curr.val);
    curr = curr.next;
  }

  let n = arr.length;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    if (arr[i] !== arr[n - i - 1]) {
      return false;
    }
  }
  return true;
}

// Approach 2 - Time O(n), Space O(1)
function palindrome2(head) {
  if (head == null || head.next == null) return true;

  // Find the middle of LL
  let slow = head;
  let fast = head;

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Reverse the second half
  let prev = null;
  let curr = slow;
  while (curr != null) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  // Find the palindrome
  let firstList = head;
  let secondList = prev;

  while (secondList != null) {
    if (firstList.val !== secondList.val) {
      return false;
    }
    firstList = firstList.next;
    secondList = secondList.next;
  }
  return true;
}
