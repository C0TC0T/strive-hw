/* 1) MAX CHAR
Given a string, return the character that is most
commonly used in the string.
--- Examples
    maxChar("abcccccccd") === "c"
    maxChar("apple 1231111") === "1"
*/
// const maxChar = function (str) {
//   const arr = str.split("");
//   const hash = new Map();
//   const result = [];
//   for (i = 0; i < arr.length; i++) {
//     if (hash.get(arr[i]) === undefined) {
//       hash.set(arr[i], true);
//     } else {
//       const value = hash.get(arr[i]);
//       if (value) {
//         hash.set(arr[i], !value);
//       }
//     }
//   }
//   hash.forEach((v, k) => {
//     if (!v) result.push(k);
//   });
//   return result;
// };

const maxChar = function (str) {
  let obj = {};
  for (i = 0; i < str.length; i++) {
    let l = str.charAt(i);
    obj[l] = isNaN(obj[l]) ? 1 : obj[l] + 1;
  }

  return Object.keys(obj).find(
    (key) => obj[key] === Math.max(...Object.values(obj))
  );
};

/* 2) ANAGRAMS
Check to see if two provided strings are anagrams of each other.
One string is an anagram of another if it uses the same characters
in the same quantity. Only consider characters, not spaces
or punctuation.  Consider capital letters to be the same as lower case
--- Examples
  anagrams('rail safety', 'fairy tales') --> True
  anagrams('RAIL! SAFETY!', 'fairy tales') --> True
  anagrams('Hi there', 'Bye there') --> False
*/
const anagrams = function (a, b) {
  let m = a.replace(/[\W_]/g, "").toLowerCase().split("").sort();
  let n = b.replace(/[\W_]/g, "").toLowerCase().split("").sort();
  if (m.length === n.length) {
    for (i = 0; i < m.length; i++) {
      if (m[i] !== n[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

/* 3) ANAGRAMS 2
Given a word and a list of possible anagrams, select the correct sublist.
--- Examples
    "listen" and a list of candidates like "enlists" "google" "inlets" "banana" the program should return a list containing "inlets".
*/
const anagramsArr = function (arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (anagrams(arr[0], arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
};

/* 4) PALINDROME
Given a string, return true if the string is a palindrome
or false if it is not.  Palindromes are strings that
form the same word if it is reversed. Do include spaces
and punctuation in determining if the string is a palindrome.
--- Examples:
    palindrome("abba") === true
    palindrome("abcdefg") === false
 */
const palidrome = function (str) {
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
};

/* 5) REVERSE INT
Given an integer, return an integer that is the reverse
ordering of numbers.
--- Examples
    reverseInt(15) === 51
    reverseInt(981) === 189
    reverseInt(500) === 5
    reverseInt(-15) === -51
    reverseInt(-90) === -9
 */
const reverseInt = function (nbr) {
  let sign = nbr > 0 ? 1 : -1;
  let str = sign < 0 ? nbr.toString().slice(1) : nbr.toString();
  let tmp = 0;
  for (let i = str.length - 1; i > -1; i--) {
    tmp += str[i];
  }
  return parseInt(sign * tmp);
};

/* 6) STEPS
Write a function that accepts a positive number N.
The function should console log a step shape
with N levels using the # character.  Make sure the
step has spaces on the right hand side!
--- Examples
    steps(2)
        '# '
        '##'
    steps(3)
        '#  '
        '## '
        '###'
    steps(4)
        '#   '
        '##  '
        '### '
        '####' */

/* 7) REVERSE STRING
Given a string, return a new string with the reversed
order of characters
--- Examples
    reverse('apple') === 'leppa'
    reverse('hello') === 'olleh'
    reverse('Greetings!') === '!sgniteerG'
 */

/* 8) CHUNK
Given an array and chunk size, divide the array into many subarrays
where each subarray is of length size
--- Examples
    chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
    chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
    chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
    chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
    chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
*/

/* 9) PYRAMID
Write a function that accepts a positive number N.
The function should console log a pyramid shape
with N levels using the # character.  Make sure the
pyramid has spaces on both the left and right hand sides
--- Examples
    pyramid(1)
        '#'
    pyramid(2)
        ' # '
        '###'
    pyramid(3)
        '  #  '
        ' ### '
        '#####' */

/* 10) SPYRAL MATRIX
Write a function that accepts an integer N
and returns a NxN spiral matrix.
--- Examples
    matrix(2)
        [[1, 2],
        [4, 3]]
    matrix(3)
        [[1, 2, 3],
        [8, 9, 4],
        [7, 6, 5]]
    matrix(4)
        [[1, 2, 3, 4],
        [12, 13, 14, 5],
        [11, 16, 15, 6],
        [10,  9,  8, 7]]
*/
