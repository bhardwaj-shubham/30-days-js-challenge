const PI = 3.14159;

const E = 2.71828;

function add(num1, num2) {
	return num1 + num2;
}

function subtract(num1, num2) {
	return num1 - num2;
}

function multiply(num1, num2) {
	return num1 * num2;
}

function divide(num1, num2) {
	if (num2 === 0) {
		throw new Error("Cannot divide by Zero.");
	}
	return num1 / num2;
}

// module.exports = { add, subtract, multiply, divide };
export { PI, E, add, subtract, multiply, divide };
export default add;