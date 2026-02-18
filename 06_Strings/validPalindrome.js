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
