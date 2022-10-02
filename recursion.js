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

function findIndex(arr, val, i = 0) {
  if (arr[i] === val) {
    return i;
  } else if (i >= arr.length - 1) {
    return -1;
  }
  return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = str.length - 1, reverseStr = '') {
  if (i < 0) return reverseStr;
  reverseStr += str[i];
  return revString(str, i - 1, reverseStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];
  for (key in obj) {
    if (typeof obj[key] === 'string') stringArr.push(obj[key]);
    if (typeof obj[key] === 'object') stringArr.push(...gatherStrings(obj[key]))
  }
  return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length - 1) {
  if (left > right) return -1;
  let middle = Math.floor((left + right) / 2);
  console.log(middle);
  if (arr[middle] === val) {
    return middle;
  }
  else if (arr[middle] < val) {
    return binarySearch(arr, val, left = middle + 1, right);
  }
  else {
    return binarySearch(arr, val, left, right = middle - 1);
  }
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
