const Person = {
	name: "Ram",
	age: 26,
	role: "Software Engineer",
	info: () => {
		console.log(`Hello, My name is ${Person.name}. My age is ${Person.age}. I am a ${Person.role}.`);
	}
}

module.exports = { Person };