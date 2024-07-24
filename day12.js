// Activity - 1
// Task - 1
// function generateError() {
// 	throw new Error("Something went wrong");
// }

// try {
// 	generateError();
// } catch (error) {
// 	console.error(error);
// }

// Task - 2
// function divide(num1, num2) {
// 	if (num2 === 0) {
// 		throw new Error("Cannot divide by zero.");
// 	}
// 	return num1 / num2;
// }

// try {
// 	const result = divide(4, 0);
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

// Activity - 2
// Task - 3
// try {
// 	console.log("Try block executed!");
// 	throw new Error("Something went wrong!");
// } catch (error) {
// 	console.error(error);
// } finally {
// 	console.log("Finally block executed!");
// }

// Activity - 3
// Task - 4
// class MyError extends Error {
// 	constructor(message) {
// 		super(message);
// 		this.name = "CustomError";
// 	}
// }

// function throwError() {
// 	throw new MyError("Something went wrong inside throwError function");
// }

// try {
// 	throwError();
// } catch (error) {
// 	console.error(error);
// }

// Task - 5
// class ValidationError extends Error {
// 	constructor(message) {
// 		super(message);
// 		this.name = "Validation Error";
// 	}
// }

// function validateInput(input) {
// 	if (typeof input !== "string" || input.trim() === "") {
// 		throw new ValidationError("Input string cannot be empty and must be non-empty string.");
// 	}
// 	console.log("Valid String:", input);
// }

// try {
// 	validateInput("  ");
// } catch (error) {
// 	console.error(error);
// }

// Activity - 4
// Task - 6
// function somePromise() {
// 	return new Promise((resolve, reject) => {
// 		const random = Math.random();
// 		if (random < 0.5) {
// 			resolve("Promise resolved!");
// 		} else {
// 			reject(new Error("Promise fail to resolve!"));
// 		}
// 	});
// }

// somePromise()
// 	.then((message) => {
// 		console.log(message);
// 	})
// 	.catch((error) => {
// 		console.error(error);
// 	});

// Task - 7
// async function handlePromise() {
// 	try {
// 		const message = await somePromise();
// 		console.log(message);
// 	} catch (error) {
// 		console.error(error);
// 	}
// }

// handlePromise();

// Activity - 5
// Task - 8
// function getData() {
// 	const API_URL = "https://api.restful-api.org/";

// 	fetch(API_URL)
// 		.then((response) => {
// 			if (!response.ok) {
// 				throw new Error("Something went wrong!");
// 			}
// 			return response.json();
// 		})
// 		.then((data) => {
// 			console.log(data);
// 		})
// 		.catch((error) => {
// 			console.error(error);
// 		});
// }

// getData();

// Task - 9
async function callAPI() {
	const API_URL = "https://api.restful-api.org";

	try {
		const response = await fetch(API_URL);
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.log(error);
	}
}

console.log("Fetching some data...");
callAPI();