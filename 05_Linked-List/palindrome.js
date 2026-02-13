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
function palindrome2(head){
  
}

