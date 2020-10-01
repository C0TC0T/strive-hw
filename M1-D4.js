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

const area = (l1, l2) => l1 * l2;
// function area = (l1, l2) => l1 * l2; //error
// function area(l1, l2) {
// 	return l1 * l2;
// };
//console.log(area(3,4));

/* EXERCISE 2
Write a function "crazySum" which receives two given integers. If the two values are same, then returns triple their sum.
*/

const crazySum = (i, j) => {
	if (typeof (i) === "number" && typeof (j) === "number") {
		if (i === j) {
			return (i + j) * 3;
		} else {
			return i + j;
		}
	} else {
		return "Please input two integers."
	}
}

/* // condensing incomplete
const crazySum = (i, j) => {
	i = (typeof (i) === "number" && typeof (j) === "number") ?
		(i === j ? (i + j) * 3 : i + j) : "Please input two integers.";
} */

//without verifying
//const crazySum = (i, j) => (i === j) ? (i + j) * 3 : i + j;
//console.log(crazySum(3, 3));

/* EXERCISE 3
Write a function "crazyDiff" that computes the
absolute difference between a given number and 19.
Returns triple their absolute difference if
the specified
number is greater than 19.
*/

const crazyDiff2 = (i) => {
	if (typeof (i) === "number") {
		if (i > 19) {
			return i - 19;
		} else if (i < 19) {
			return 19 - i;
		}
	} else {
		return "Please input an integer.";
	}
}
//const crazyDiff = (i) => (i > 19) ? i - 19 : 19 - 1;
// console.log(crazyDiff(3));
// console.log(crazyDiff(300));

/* EXERCISE 4
Write a function "boundary" which accept an integer N and returns true if N is within 20 and 100 (included) or equal to 400.
*/

const boundary = (N) => {
	if (typeof N === "number") {
		if ((N >= 20 && N <= 100) || N === 400)
			return true;
		else
			return false;

	} else {
		return "Please input a integer."
	}
}

//const boundary = (N) => (typeof (N) === "number" &&(N >= 20 && N <= 100) || N === 400)) ? true : false;
//console.log(boundary(1));

/* EXERCISE 5
Write a function "strivify" which accepts a string S. Add to S "Strive" in front of a given string, if the given string begins with "Strive" then return the original string.
*/

const strivify = (S) => (S !== "Strive") ? `Strive${S}` : "Strive"
//console.log(strivify(123));

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

const check3and7 = (n) => {
	if (typeof (n) === "number") {
		if (n > 0) {
			if (n % 3 === 0 && n % 7 === 0) {
				return "It is a multiple of 3 and 7.";
			} else if (n % 3 === 0) {
				return "It is a multiple of 3.";
			} else if (n % 7 === 0) {
				return "It is a multiple of 7.";
			} else {
				return "It is neither multiple of 3 or 7.";
			}
		}
	} else {
		return "Please input an positive integer."
	}
}
//console.log(check3and7(21));
/* EXERCISE 7
Write a function "reverseString" to reverse programmatically a given string (es.: Strive => evirtS).
*/

function reverseString(s) {
	return (s === "") ? "" : reverseString(s.substr(1)) + s.charAt(0);
}
//console.log(reverseString("ASDF"));

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as parameter
*/

function findFirst(str) {
	let match = /[a-zA-z]/.exec(str); // .match will return the value
	if (match)
		return match.index;
	else
		null;
}

function upperFirst(str) {
	return (typeof (str) === "string") ? str.slice(0, findFirst(str)) + str.charAt(findFirst(str)).toUpperCase() + str.substr(findFirst(str) + 1) : "Please input a string."
}
console.log(upperFirst("word"));

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/
function findLast(str) {
	return str.length - findFirst(reverseString(str));
}

function cutString(str) {
	return (typeof (str) === "string") ? str.slice(findFirst(str) + 1, findLast(str) - 1) : "Please input a string.";
}

// console.log(cutString("1word")); // expected output: "or"

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10
*/

function giveMeRandom(n) {
	let array = [];
	if (typeof (n) === "number") {
		for (i = 0; i < n; i++) {
			array.push(Math.floor(Math.random() * 11))
		}
		return array;
	} else {
		return "Please input a number.";
	}
}

//console.log(giveMeRandom(6));
/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit with your tutor.
*/
