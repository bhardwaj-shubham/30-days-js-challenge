// Activity - 1
// Task - 1
const num = 10;
// if (num > 0) {
// 	console.log("Positive number");
// } else if (num < 0) {
// 	console.log("Negative number")
// } else {
// 	console.log("Number is zero")
// }

// Task - 2
const age = 24;
// if (age >= 18) {
// 	console.log("Person eligible to vote.");
// } else {
// 	console.log("Person can not vote.");
// }

// Activity - 2
// Task - 3
num1 = 10, num2 = 14, num3 = 46
// if (num1 > num2 && num1 > num3) {
// 	console.log(`${num1} is largest number.`)
// } else if (num2 > num1 && num2 > num3) {
// 	console.log(`${num2} is largest number.`)
// } else {
// 	console.log(`${num3} is largest number.`)
// }

// Activity - 3
// Task - 4
const day = 4;
// switch(day) {
// case 1:
// 	console.log("Monday");
// 	break;
// case 2:
// 	console.log("Tuesday");
// 	break;
// case 3:
// 	console.log("Wednesday");
// 	break;
// case 4:
// 	console.log("Thursday");
// 	break;
// case 5:
// 	console.log("Friday");
// 	break;
// case 6:
// 	console.log("Saturday");
// 	break;
// case 7:
// 	console.log("Sunday");
// 	break;
// default:
// 	console.log("Wrong day!");
// }

// Task - 5
const marks = 8;
// switch (true) {
//     case (marks >= 90):
//         console.log("Grade A");
//         break;
//     case (marks >= 80):
//         console.log("Grade B");
//         break;
//     case (marks >= 70):
//         console.log("Grade C");
//         break;
//     case (marks >= 60):
//         console.log("Grade D");
//         break;
//     default:
//         console.log("Grade F");
// }

// Acitivity - 4
// Task - 6
const number = 35;
const numberType = number % 2 == 0 ? "Even" : "Odd";
// console.log(numberType);

// Acitivity - 5
// Task - 7
const year = 2024;
if (year % 4 === 0) {
	if (year % 100 !== 0) {
		console.log(`${year} is leap year.`);
	} else {
		if (year % 400 === 0) {
			console.log(`${year} is leap year.`);
		} else {
			console.log(`${year} is not leap year.`);
		}
	}
} else {
	console.log(`${year} is not leap year.`);
}