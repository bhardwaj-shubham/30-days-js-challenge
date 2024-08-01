// Activity - 1
// Task - 1
// localStorage.setItem("name", "Shubham");
// console.log(localStorage.getItem("name"));

// Task - 2
// const person = {
// 	name: "Hitesh",
// 	age: 28,
// 	work: "Youtuber",
// };

// localStorage.setItem("person", JSON.stringify(person));

// console.log(JSON.parse(localStorage.getItem("person")));

// Activity - 2
// Task - 3
// const btn = document.getElementById("submit");
// btn.addEventListener("click", (e) => {
// 	e.preventDefault();

// 	const name = document.getElementById("name");
// 	const email = document.getElementById("email");
// 	localStorage.setItem("name", name.value);
// 	localStorage.setItem("email", email.value);

// 	document.getElementById("user-name").innerHTML =
// 		localStorage.getItem("name");
// 	document.getElementById("user-name").style.display = "block";

// 	document.getElementById("user-email").innerHTML =
// 		localStorage.getItem("email");
// 	document.getElementById("user-email").style.display = "block";
// });

// Task - 4
// localStorage.setItem("day", "20");
// localStorage.setItem("language", "javascript");
// localStorage.setItem("author", "Shubham");

// function removeItemFromLocalStorage(key) {
// 	console.log("LocalStorage before removal:");
// 	console.log(localStorage);

// 	localStorage.removeItem(key);

// 	console.log("LocalStorage after removal:");
// 	console.log(localStorage);
// }

// removeItemFromLocalStorage("author");

// Activity - 3
// Task - 5
// function sessionStorageTask() {
// 	const stringValue = "This is a example string";

// 	sessionStorage.setItem("myString", stringValue);

// 	const retrievedValue = sessionStorage.getItem("myString");

// 	console.log(retrievedValue);
// }

// sessionStorageTask();

// Task - 6
// function sessionStorageObject() {
// 	const person = {
// 		name: "Hitesh",
// 		age: 28,
// 		work: "Youtuber",
// 	};

// 	sessionStorage.setItem("person", JSON.stringify(person));

// 	console.log(JSON.parse(sessionStorage.getItem("person")));
// }

// sessionStorageObject();

// Activity - 4
// Task - 7
// const btn = document.getElementById("submit");
// btn.addEventListener("click", (e) => {
// 	e.preventDefault();

// 	const name = document.getElementById("name");
// 	const email = document.getElementById("email");
// 	sessionStorage.setItem("name", name.value);
// 	sessionStorage.setItem("email", email.value);

// 	document.getElementById("user-name").innerHTML =
// 		sessionStorage.getItem("name");
// 	document.getElementById("user-name").style.display = "block";

// 	document.getElementById("user-email").innerHTML =
// 		sessionStorage.getItem("email");
// 	document.getElementById("user-email").style.display = "block";
// });

// Task - 8
// sessionStorage.setItem("day", "20");
// sessionStorage.setItem("language", "javascript");
// sessionStorage.setItem("author", "Shubham");

// function removeItemFromSessionStorage(key) {
// 	console.log("SessionStorage before removal:");
// 	console.log(sessionStorage);

// 	sessionStorage.removeItem(key);

// 	console.log("SessionStorage after removal:");
// 	console.log(sessionStorage);
// }

// removeItemFromSessionStorage("author");

// Activity - 5
// Task - 9
// function storageManager(key, value) {
// 	localStorage.setItem(key, value);
// 	sessionStorage.setItem(key, value);

// 	console.log(localStorage.getItem(key));
// 	console.log(sessionStorage.getItem(key));
// }

// storageManager("token", "token_1234");

// Task - 10
function clearStorage() {
	localStorage.clear();
	sessionStorage.clear();

	console.log("LocalStorage:", localStorage);
	console.log("SessionStorage:", sessionStorage);
}

clearStorage();
