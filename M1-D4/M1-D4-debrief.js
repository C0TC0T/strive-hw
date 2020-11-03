/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculate the area of the rectangle.
*/

function area(l1, l2) {
  // let rectangleArea =
  return l1 * l2;
}

let x = area(4, 6);

console.log(x);

/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/

function crazySum(n1, n2) {
  if (n1 === n2) {
    return (n1 + n2) * 3;
  } else {
    return n1 + n2;
  }
}

function crazySum(n1, n2) {
  return n1 === n2 ? (n1 + n2) * 3 : n1 + n2;
}

/* EXERCISE 3
Write a function "crazyDiff" that computes the 
absolute difference between a given number and 19. 
Returns triple their absolute difference if 
the specified
number is greater than 19.
*/

function crazyDiff(num) {
  let difference = num - 19;
  if (difference < 0) {
    difference = -difference;
  }
  if (num > 19) {
    difference = difference * 3;
  }
  return difference;
}

console.log(crazyDiff(20));

/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/

function boundary(N) {
  // if(N > 20 && N <= 100) {
  //     return true
  // }
  // if(N === 400) {
  //     return true
  // }
  //   else {
  //     return false;
  //   }

  if ((N > 20 && N <= 100) || N === 400) {
    return true;
  } else {
    return false;
  }
}

console.log(boundary(400));

/* WRITE YOUR CODE HERE */

/* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to S "Strive" in front of a given string, if the given string begins with "Strive" then return the original string.
*/

function strivify(S) {
  if (S === "Strive") {
    return S;
  } else {
    return "Strive" + S;
  }
}

console.log(strivify("Strive"));

/* WRITE YOUR CODE HERE */

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

// function check3and7(num) {
//   if (num % 3 === 0 || num % 7 === 0) {
//     console.log("It's a multiple of 3 or 7!");
//   } else {
//     console.log("It's NOT a multiple of 3 or 7!");
//   }
// }

function check3and7(num) {
  // if (num % 3 === 0 || num % 7 === 0) {
  console.log(
    num % 3 === 0 || num % 7 === 0
      ? "It's a multiple of 3 or 7!"
      : "It's NOT a multiple of 3 or 7!"
  );
}

check3and7(15);

/* WRITE YOUR CODE HERE */

/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/

function reverseString(word) {
  return word.split("").reverse().join("");
}

/* WRITE YOUR CODE HERE */

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
*/

function upperFirst(sentence) {
  let arrayOfWords = sentence.split(" ");
  for (let i = 0; i < arrayOfWords.length; i++) {
    let firstLetter = arrayOfWords[i].charAt(0).toUpperCase();
    arrayOfWords[i] = firstLetter + arrayOfWords[i].substr(1);
  }
  return arrayOfWords.join(" ");
}

console.log(upperFirst("cat dog"));

// Elephant

/* WRITE YOUR CODE HERE */

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

function cutString(str) {
  return str.substr(1).slice(0, str.length - 2);
}

// hello.substr(1)
// ello

console.log(cutString("hello"));

/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/

function giveMeRandom(n) {
  let array = [];
  for (let x = 0; x < n; x++) {
    array.push(Math.floor(Math.random() * 10));
  }
  return array;
}

console.log(giveMeRandom(8));

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit with your tutor.
*/
