// Activity - 1
// Task - 1
// function matchString(str) {
// 	const regex = /JavaScript/g;
// 	let match;
// 	while ((match = regex.exec(str)) !== null) {
// 		console.log("Match Found At Index:", match.index);
// 	}
// }

// const str = "JavaScript is a programming language. JavaScript used in both frontend and backend!";
// matchString(str);

// Task - 2
// function matchDigits(str) {
// 	const regex = /\d/g;
// 	let match;
// 	while ((match = regex.exec(str)) !== null) {
// 		console.log("Match Found At Index:", match.index);
// 	}
// }

// const str = "There are 123 apples, 456 oranges, and 789 bananas.";
// matchDigits(str);

// Activity - 2
// Task - 3
// function matchCapitalLetterString(str) {
// 	const regex = /\b[A-Z][a-z]*\b/g;
// 	const matches = str.match(regex);
// 	return matches;
// }

// const str = "This is a String With Capitalized Words and some lowercase words.";
// console.log(matchCapitalLetterString(str));

// Task - 4
// function matchAllDigits(str) {
// 	const regex = /\d+/g;
// 	const matches = str.match(regex);
// 	return matches;
// }

// const str = "There are 123 apples, 456 oranges, and 789 bananas.";
// console.log(matchAllDigits(str));

// Activity - 3
// Task - 5
// function matchAllNumbers(str) {
// 	const regex = /\((\d{3})\)\s(\d{3})-(\d{4})/;
// 	const matches = str.match(regex);
// 	if (matches) {
// 	    const areaCode = matches[1];
// 	    const centralOfficeCode = matches[2];
// 	    const lineNumber = matches[3];
// 	    console.log("Area Code:", areaCode);
// 	    console.log("Central Office Code:", centralOfficeCode);
// 	    console.log("Line Number:", lineNumber);
// 	} else {
// 	    console.log("No match found.");
// 	}
// }

// const str = "My phone number is (123) 456-7890.";
// matchAllNumbers(str);

// Task - 6
// function matchUserEmail(email) {
// 	const regex = /^([^@]+)@([^@]+)$/;
// 	const matches = email.match(regex);

// 	if (matches) {
// 	    const username = matches[1];
// 	    const domain = matches[2];
// 	    console.log("Username:", username);
// 	    console.log("Domain:", domain);
// 	} else {
// 	    console.log("No match found.");
// 	}
// }

// const email = "shubham@google.com";
// matchUserEmail(email);

// Activity - 4
// Task - 7
// function matchStringAtStart(str) {
// 	const regex = /^\w+/;
// 	const matches = str.match(regex);

// 	if (matches) {
// 	    console.log("Match:", matches[0]);
// 	} else {
// 	    console.log("No match found.");
// 	}
// }

// const str = "Hello world! Hello again.";
// matchStringAtStart(str);

// Task - 8
// function matchStringAtEnd(str) {
// 	const regex = /\b\w+\b$/;;
// 	const matches = str.match(regex);

// 	if (matches) {
// 	    console.log("Match:", matches[0]);
// 	} else {
// 	    console.log("No match found.");
// 	}
// }

// const str = "Hello world! Hello again";
// matchStringAtEnd(str);

// Activity - 5
// Task - 9
// function validatePassword(password) {
// 	const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
// 	const isValid = regex.test(password);
// 	if (isValid) {
// 		console.log("Password is valid");
// 	} else {
// 		console.log("Password is invalid");
// 	}
// }

// // const password = "Password123!";
// const password = "password";
// validatePassword(password);

// Task - 10
// function validateUrl(url) {
// 	const regex = /^(https?:\/\/)?((([a-zA-Z\d]([a-zA-Z\d-]*[a-zA-Z\d])*)\.)+[a-zA-Z]{2,}|((\d{1,3}\.){3}\d{1,3}))(:\d+)?(\/[-a-zA-Z\d%_.~+]*)*(\?[;&a-zA-Z\d%_.~+=-]*)?(#[-a-zA-Z\d_]*)?$/;
// 	const isValid = regex.test(url);
// 	if (isValid) {
// 		console.log("URL is valid.");
// 	} else {
// 		console.log("URL is invalid.");
// 	}
// }

// const url = "www.google.com/?q=javascript";
// validateUrl(url);