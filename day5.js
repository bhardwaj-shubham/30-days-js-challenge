// Activity - 1
// Task - 1
// function isNumberEven(num) {
// 	return num % 2 === 0;
// }

// if (isNumberEven(10)) {
// 	console.log("Number is Even");
// } else {
// 	console.log("Number is Odd");
// }

// Task - 2
// function findSquare(num) {
// 	return num * num;
// }

// console.log(findSquare(10));

// Activity - 2
// Task - 3
// const maximumNumber = function (num1, num2) {
// 	return num1 > num2 ? num1 : num2;
// }

// console.log(maximumNumber(10, 20))

// Task - 4
// const greet = function(name, message) {
// 	return name.concat(", ", message);
// }

// console.log(greet("Remo", "How are you?"));

// Activity - 3
// Task - 5
// const sumOfNumber = (num1, num2) => {
// 	return num1 + num2;
// }

// console.log(sumOfNumber(10, 4));

// Task - 6
// const doesStringContains = (str, char) => {
// 	return str.includes(char);
// }

// console.log(doesStringContains("The quick brown fox jumps over the lazy dog.", "fox"));

// Activity - 4
// Task - 7
// function product(num1, num2 = 20) {
// 	return num1 * num2;
// }

// console.log(product(10, 4));
// console.log(product(10));

// Task - 8
// function greetMessage(name, age = 20) {
// 	return `Hello, my name is ${name} and I am ${age} years old.`;
// }

// console.log(greetMessage("Rohit", 36));
// console.log(greetMessage("Hitesh"));

// Activity - 5
// Task - 9
// function callerFunction(fn, n) {
// 	return () => {
// 		for (let i = 0; i < n; i++) {
// 			fn();
// 		}
// 	}
// }

// function greet() {
// 	console.log("Have a good day!");
// }

// const callFourTimes = callerFunction(greet, 4);
// callFourTimes()

// Task - 10
// function employeeSalary(healthInsurance, lifeInsurance, salary) {
// 	return lifeInsurance(healthInsurance(salary));
// }

// function healthInsurance(salary) {
// 	return salary * 0.9;
// }

// function lifeInsurance(salary) {
// 	return salary * 0.9;
// }

// console.log(employeeSalary(healthInsurance, lifeInsurance, 1000000));