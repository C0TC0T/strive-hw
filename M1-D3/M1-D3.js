/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can google / use StackOverflow BUT we suggest you to use just the material provided
- You can ask for tutor's help
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/

/* EXERCISE 1
Create and array with the first 5 positive numbers
*/

let positiveArray = [1, 2, 3, 4, 5];

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

const user = {
	name: "Alpha",
	surename: "Banana",
	emailAddress: "ab@strive.school",
	age: 18,
}

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license
*/
user.hasDrivingLicense = false;

/* EXERCISE 4
Remove from the previously created object the age
*/

delete user.age;

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address
*/

const user2 = {
	name: "Beta",
	surename: "Chocolate",
	emailAddress: "bc@strive.school",
	age: 16,
}
// [" "] if you are in the dyn environment, it helps you match the key
if (user["email"] !== user2.emailAddress) {
	console.log("Two different users")
} else {
	console.log("Same email address!")
}

/* EXERCISE 6
You are working for an eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50€, they can have free shipping (otherwise it costs 10€).
Write an algorithm that calculate totalCost based on this assumption.
*/
const currentUser = Object.assign({}, user);
currentUser.totalShoppingCart = 50;
currentUser.totalCost = (currentUser.totalShoppingCart >= 50) ? currentUser.totalShoppingCart : currentUser.totalShoppingCart + 10;
//console.log(currentUser.totalCost);

/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalShopping.
*/

let isBlackFriday = true;
currentUser.totalShopping = isBlackFriday = true ? currentUser.totalCost * 0.8 : currentUser.totalCost;

/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it and change the licensePlate without affecting the original car.
Do it for five cars.
*/
const car = {
	brand: "Toyota",
	model: "Corolla",
	licensePlate: "NL1-LDK-36",
}

const cars = []
for (let c = 0; c <= 4; c++) {
	cars.push(Object.assign({}, car)); // much nicer and compact
	cars[c].licensePlate = car.licensePlate.slice(0, -1) + c;
	console.log(cars[c]);
}

/*
const cars = ["car1", "car2", "car3", "car4", "car5"]
for (let c = 0; c <= 4; c++) { //5 or loop
	cars[c] = Object.assign({}, car); // cars[c] = <-- WARNING this is adding to the array cars, elements in cars is not named as is cars1
	cars[c].licensePlate = car.licensePlate.slice(0, -1) + c;
	console.log(cars[c]);
}
*/

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise
*/

let carsForRent = []; //cannot be const
carsForRent = cars.slice();
//console.log({carsForRent});

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/
//console.log({ carsForRent });
carsForRent.shift();
carsForRent.pop();
//console.log({ carsForRent });

/* EXERCISE 11
Print in the console, the types of a single car, of the car licensePlate and of the brand
*/
//console.log({ cars });
//delete cars[0].model
console.log(typeof (cars[0]));
console.log(typeof (cars[0].licensePlate));
console.log(typeof (cars[0].brand));

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in the variable totalCars the number of cars in both carsForSale and carsForRent arrays
*/

let carsForSale = [];
for (let c = 7; c <= 9; c++) {
	carsForSale = carsForRent.slice();
	carsForSale[c - 7].licensePlate = carsForRent[c - 7].licensePlate.slice(0, -1) + c;
}
const totalCars = carsForRent.length + carsForSale.length;
//console.log(carsForSale, totalCars);

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array
*/

console.log(carsForSale);
//seems they want this printing method?
for (let p = 0; p < carsForSale.length; p++) {
	console.log(carsForSale[p].model)
	console.log(carsForSale[p].brand)
}

/* WHEN YOU ARE FINISHED
Send the code on Discord via a message to your tutor! In the next days we'll also learn how to use GIT
*/
