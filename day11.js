// Activity - 1
// Task - 1
// const delayedMessage = new Promise((res, rej) => {
// 	setTimeout(() => {
// 		res("This message is print after 2 secs.")
// 	}, 2000);
// });

// delayedMessage.then((message) => {
// 	console.log(message);
// });

// Task - 2
// const delayedErrorMessage = new Promise((res, rej) => {
// 	setTimeout(() => {
// 		rej("This error message is print after 2 secs.")
// 	}, 2000);
// });

// delayedErrorMessage.then((message) => {
// 	console.log(message);
// }).catch((error) => {
// 	console.log("Error: ", error);
// });

// Activity - 2
// Task - 3
// const fetchData = () => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve("Fetched data from server...");
// 		}, 2000);
// 	});
// };

// const processData = (data) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve(`${data} Processed Data.`);
// 		}, 1000);
// 	});
// };

// const displayData = (data) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve(`${data} Displayed data to user.`);
// 		}, 500);
// 	});
// };

// fetchData()
// 	.then((message) => {
// 		console.log(message);
// 		return processData(message);
// 	})
// 	.then((message) => {
// 		console.log(message);
// 		return displayData(message);
// 	})
// 	.then((message) => {
// 		console.log(message);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

// Activity - 3
// Task - 4
// const fetchData = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		resolve("Some Data ...");
// 	}, 2000);
// });

// async function getData() {
// 	const data = await fetchData;
// 	console.log(data);
// }

// console.log("Getting data...");
// getData();

// Task - 5
// const fetchData = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		reject("Something went wrong!!!");
// 	}, 2000);
// });

// async function getData() {
// 	try {
// 		const data = await fetchData;
// 		console.log(data);
// 	} catch (error) {
// 		console.log("Error:", error);
// 	}
// }

// console.log("Getting data...");
// getData();

// Activity - 4
// Task - 6
// function callAPI() {
// 	const API_URL = "https://api.restful-api.dev/objects";

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

// console.log("Fetching some data...");
// callAPI();

// Task - 7
// async function callAPI() {
// 	const API_URL = "https://api.restful-api.dev/objects";

// 	try {
// 		const response = await fetch(API_URL);
// 		const data = await response.json();
// 		console.log(data);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// console.log("Fetching some data...");
// callAPI();

// Activity - 5
// Task - 8
const promise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Promise 1 resolved");
	}, 1000);
});

const promise2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Promise 2 resolved");
	}, 2000);
});

const promise3 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Promise 3 resolved");
	}, 3000);
});

// Promise.all([promise1, promise2, promise3])
// 	.then((values) => {
// 		values.forEach((value) => {
// 			console.log(value);
// 		});
// 	})
// 	.catch((error) => {
// 		console.error("One or more promises rejected.", error);
// 	});

// Task - 9
Promise.race([promise1, promise2, promise3])
	.then((value) => {
		console.log(value);
	})
	.catch((error) => {
		console.error("One of Promise rejected", error);
	});