// Activity - 1
// Task - 1
// function outerFunction() {
// 	const outer = "I'm from the outer function's scope!";

// 	return () => {
// 		return outer;
// 	}
// }

// const outer = outerFunction();
// console.log(outer());

// Task - 2
// function counter() {
// 	let counter = 0;
// 	return {
// 		increment: () => {
// 			counter++;
// 		},
// 		getCounter: () => {
// 			return counter;
// 		}
// 	}
// }

// const count = counter();
// count.increment();
// count.increment();
// console.log(count.getCounter());

// Activity - 2
// Task - 3
// function generateID() {
// 	let lastId = 0;
// 	return () => {
// 		lastId += 1;
// 		return lastId;
// 	}
// }

// const uniqueId = generateID();
// console.log(uniqueId());
// console.log(uniqueId());

// Task - 4
// function sayGreet(name) {
// 	return () => {
// 		return `Hello, ${name}!`;
// 	}
// }

// const greetRamesh = sayGreet("Ramesh");
// console.log(greetRamesh());

// Activity - 3
// Task - 5
// function arrayFunction(size) {
// 	const functionArr = [];
// 	for (let i = 0; i < size; i++) {
// 		functionArr.push(((index) => {
// 					return () => {
// 						console.log("Inside the push function!", index);
// 					}
// 				})(i));
// 	}
// 	return functionArr;
// }

// const functionArray = arrayFunction(4);
// functionArray[0]();
// functionArray[1]();
// functionArray[2]();
// functionArray[3]();

// Activity - 4
// Task - 6
// function itemsManager() {
// 	const items = [];
// 	return {
// 		addItem: (item) => {
// 			items.push(item);
// 			console.log(`Added: ${item}`);
// 		},
// 		removeItem: (item) => {
// 			const index = items.indexOf(item);
// 			if (index > 0) {
// 				items.splice(index, 1);
// 				console.log(`Removed: ${item}`);
// 			} else {
// 				console.log(`Cannot find an ${item}`);
// 			}
// 		},
// 		listItems: () => {
// 			console.log(`Items: [${items}]`);
// 		}
// 	}
// }

// const itemsList = itemsManager();
// itemsList.addItem("Apple");
// itemsList.addItem("Banana");
// itemsList.addItem("Grapes");
// itemsList.removeItem("Banana");
// itemsList.removeItem("Pineapple");
// itemsList.listItems();

// Activity - 5
// Task - 7
// function memoize(func) {
// 	const cache = {};

// 	return (num) => {
// 		if (cache[num] !== undefined) {
// 			console.log("Returning from cache.");
// 			return cache[num];
// 		} else {
// 			const result = func(num);
// 			cache[num] = result;
// 			console.log("Calculating the result.");
// 			return result;
// 		}
// 	}
// }

// function fibo(n) {
// 	if (n <= 1) return n;
// 	return fibo(n-1) + fibo(n-2);
// }

// const memoizedFibonacci = memoize(fibo);
// console.log(memoizedFibonacci(5));
// console.log(memoizedFibonacci(5));
// console.log(memoizedFibonacci(8));
// console.log(memoizedFibonacci(8));

// Task - 8
// function factorial(n) {
// 	if (n === 0 || n === 1) return 1;
// 	return n * factorial(n-1);
// }

// const memoizedFactorial = memoize(factorial);
// console.log(memoizedFactorial(4));
// console.log(memoizedFactorial(4));
// console.log(memoizedFactorial(8));
// console.log(memoizedFactorial(8));
