// Activity - 1
// Task - 1
// const book = {
// 	title: "The Power of Now",
// 	author: "Eckhart Tolle",
// 	year: "1997"
// };

// console.log(book);

// Task - 2
// console.log(book["title"])
// console.log(book["author"])

// Activity - 2
// Task - 3
// const book = {
// 	title: "The Power of Now",
// 	author: "Eckhart Tolle",
// 	year: "1997",
// 	info: () => `'${book.title}' book by ${book.author}, published ${book.year}`
// };

// console.log(book.info())

// Task - 4
// const book = {
// 	title: "The Power of Now",
// 	author: "Eckhart Tolle",
// 	year: "1997",
// 	updateYear: (newYear) => book.year = newYear
// };

// console.log(book);
// book.updateYear(2001);
// console.log(book);

// Activity - 3
// Task - 5
// const library = {
// 	name: "City Library",
//   	books: [
//     	{
// 	      title: "To Kill a Mockingbird",
// 	      author: "Harper Lee",
// 	      year: 1960
// 	    },
// 	    {
// 	      title: "1984",
// 	      author: "George Orwell",
// 	      year: 1949
// 	    },
// 	    {
// 	      title: "The Great Gatsby",
// 	      author: "F. Scott Fitzgerald",
// 	      year: 1925
// 	    }
//   	]
// };

// console.log(library);

// Task - 6
// console.log(library.name)
// for (let book of library.books) {
// 	console.log(book.title);
// }

// Activity - 4
// Task - 7
// const book = {
// 	title: "The Power of Now",
// 	author: "Eckhart Tolle",
// 	year: "1997",
// 	info: function () {
// 		return `'${this.title}' book by ${this.author}, published ${this.year}`
// 	}
// };

// console.log(book.info());

// Activity - 5
// Task - 8
// for (let prop in book) {
// 	console.log(prop);
// }

// Task - 9
// console.log(Object.keys(book));
// console.log(Object.values(book));