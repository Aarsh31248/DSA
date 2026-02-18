let str = "A man, a plan, a canal: Panama";

// Approach -1, Time = O(n), Space O(n) because using 2 extra spaces to n length.
function validPalindrome(str) {
  str = str.toLowerCase();
  let filter = "";
  let reverse = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[a-z0-9]/)) {
      filter = filter + str[i];
      reverse = str[i] + reverse;
    }
  }

  return filter === reverse;
}
console.log(validPalindrome(str));

// Approach -2, using 2 pointers. Time = O(n), Space = O(1)
function validPalindrome2(str) {
  str = str.toLowerCase();
  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    if (!str[i].match(/[a-z0-9]/i)) {
      i++;
    } else if (!str[j].match(/[a-z0-9]/i)) {
      j--;
    } else if (str[i] === str[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
}
console.log(validPalindrome2(str));
