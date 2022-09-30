/** product: calculate the product of an array of numbers. */
1 * product([2, 3, 4, 5])
1 * 2 * product([3, 4, 5]);
1 * 2 * 3 * product([4, 5])
1 * 2 * 3 * 20
function product(nums, i = 0) {
  if (i === nums.length - 1) return nums[nums.length - 1];

  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0, largestSoFar = 0) {
  if (i === words.length) {
    return largestSoFar;
  }
  largestSoFar = Math.max(words[i].length, largestSoFar);
  return longest(words, i + 1, largestSoFar);
}


/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0, newStr = '') {
  debugger;
  if (str.length <= i) return newStr;
  console.log(newStr);
  newStr += str[i];
  return everyOther(str, i + 2, newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */


function isPalindrome(str, i = str.length - 1, reverseStr = '') {
  if (!str) return false;
  if (i < 0) {
    if (reverseStr === str) return true;
    return false;
  }
  reverseStr += str[i];
  return isPalindrome(str, i - 1, reverseStr);
}


/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {

}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
