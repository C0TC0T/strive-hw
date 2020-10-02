/* EXERCISE 11
Write a function "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5.
The function returs the sum of the numbers bigger than 5.
*/
const isString = (str) => {
	return (typeof (str) === "string") ? true : false;
}
const isNumber = (nbr) => {
	return (typeof (nbr) === "number") ? true : false;
}

function giveMeRandom(n) {
	let array = [];
	if (isNumber(n)) {
		for (i = 0; i < n; i++) {
			array.push(Math.floor(Math.random() * 11))
		}
		return array;
	} else {
		return "Please input a number.";
	}
}

const checkArray = (arr) => {
	let sum = [];
	for (i = 0; i < arr.length; i++) {
		if (arr[i] > 5) {
			sum.push(arr[i]);
		}
	}
	return sum.reduce((a, b) => a + b, 0);
}

// let arr = giveMeRandom(6);
// console.log(arr);
// console.log(checkArray(arr));

/* EXERCISE 12
In your eCommerce you have an array of object called shoppingCart. In this array you have a number of objects with a price, name, id and number to be shipped.
Create a function "shippingCartTotal" which calculates the total due to the shop.
*/

const shoppingCart = {
	price: 99,
	name: "iPhone IX",
	id: 9,
	number: 1,
}

const shippingCartTotal = (cart) => {
	return shoppingCart.price * shoppingCart.number;
}

// console.log(shippingCartTotal(shoppingCart));

/* EXERCISE 13
In your eCommerce you have an array of object called shoppingCart. In this array you have a number of objects with a price, name, id and number to be shipped.
Create a function "addToShoppingCart" which receives a new object and add it to shoppingCart and returns the number of items in the shoppingCart.
*/

/* EXERCISE 14
In your eCommerce you have an array of object called shoppingCart. In this array you have a number of objects with a price, name, id and number to be shipped.
Create a function "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in the array.
*/



/* EXERCISE 15
In your eCommerce you have an array of object called shoppingCart. In this array you have a number of objects with a price, name, id and number to be shipped.
Create a function "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/


/* EXERCISE 16
Create a function "loopUntil" which receives an integer X between 0 and 9.
The function loops and prints a random number between 0 and 9 until the random number is bigger than X three times in a row.
*/


/* EXERCISE 17
Write a function "average" which receives an array and return the average value. The function automatically skips non-numeric entries in the array.
*/

/* EXERCISE 18
Write a function "longest" to find the longest string from an given array of strings.
*/

/* EXERCISE 19
Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
Check if the email is valid using string methods. The email (in this example) is valid if the words SPAM and SCAM does not appear.
*/

/* EXERCISE 20
Write a function that receives a date D as parameter and calculates the number of days passes since the D.
*/

/* EXERCISE 21
Write a function "matrixGenerator" that receives X and Y as parameter. The result should be a matrix of X times Y with, as value, the index of the position.
Ex.: X = 3, Y = 2
["00","01","02"
"10","11","12"]
*/
