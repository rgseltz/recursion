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

function longest(words) {

}

/** everyOther: return a string with every other letter. */

function everyOther(str) {

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {

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
