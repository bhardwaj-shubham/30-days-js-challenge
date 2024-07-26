// Activity - 1
// Task - 1
// class Person {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}

// 	getGreeting() {
// 		return `Hello, my name is ${this.name} and I am ${this.age} years old.`
// 	}

// 	setAge(age) {
// 		this.age = age;
// 	}

// 	getAge() {
// 		return this.age;
// 	}

// 	static getGreeting() {
// 		return 'Hello, I am Person class.';
// 	}
// }

// const person = new Person("Himesh", 26);
// console.log(person.getGreeting());

// Task - 2
// person.setAge(24);
// console.log(person.getAge());

// Activity - 2
// Task - 3
// class Student extends Person {
// 	constructor(name, age, studentId) {
// 		super(name, age);
// 		this.studentId = studentId;
// 		Student.count++;
// 	}

// 	getStudentId() {
// 		return this.studentId;
// 	}

// 	getGreeting() {
// 		return `Hello, my name is ${this.name} and I am ${this.age} years old. My studentId is ${this.studentId}.`
// 	}
// }

// const student = new Student("Raju", 22, 1001);
// console.log(student.getStudentId());

// Task - 4
// console.log(student.getGreeting());

// Activity - 3
// Task - 5
// console.log(Person.getGreeting());

// Task - 6
// Student.count = 0;
// const student = new Student("Remo", 22, 1001);
// const student2 = new Student("Hitesh", 28, 1002);
// console.log("No of students: ", Student.count);

// Activity - 4
// Task - 7
// class Person {
// 	constructor(firstName, lastName) {
// 		this.firstName = firstName;
// 		this.lastName = lastName;
// 	}

// 	getFullName() {
// 		return `My name is ${this.firstName} ${this.lastName}.`
// 	}

// 	setFullName(firstName, lastName) {
// 		this.firstName = firstName;
// 		this.lastName = lastName;
// 	}
// }

// const person = new Person("John", "Doe");
// console.log(person.getFullName());

// Task - 8
// person.setFullName("Marry", "Jane");
// console.log(person.getFullName());

// Activity - 5
// Task - 9
class Account {
	#balance;

	constructor(initialBalance) {
		this.#balance = initialBalance;
	}

	deposit(amount) {
		if (amount > 0) {
			this.#balance += amount;
			console.log(`Deposited: $${this.#balance}.`);
		} else {
			console.log("Deposited amount must be positive.");
		}
	}

	withdraw(amount) {
		if (amount > 0 && amount <= this.#balance) {
			this.#balance -= amount;
			console.log(`Withdrew: $${amount}.`);
		} else {
			console.log("Insufficient balance or invalid amount.");
		}
	}

	getBalance() {
		return this.#balance;
	}
}

// Task - 10
const myAccount = new Account(1000);
myAccount.deposit(500);
myAccount.withdraw(200);
myAccount.withdraw(1500);
console.log(`Current Balance: $${myAccount.getBalance()}.`);
