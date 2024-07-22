// Activity - 1
// Task - 1
const firstParagraphBtn = document.getElementById("first-para-btn");
firstParagraphBtn.addEventListener("click", () => {
	document.querySelector(".first-para").innerHTML =
		"This paragraph now changed by clicked button.";
});

// Task - 2
const imageViewBtn = document.getElementById("check-image-btn");
imageViewBtn.addEventListener("dblclick", () => {
	document.getElementById("image").style.display = "block";
});

// Activity - 2
// Task - 3
const hoverText = document.getElementById("hover-text");

hoverText.addEventListener("mouseover", () => {
	hoverText.style.backgroundColor = "red";
});

// Task - 4
hoverText.addEventListener("mouseleave", () => {
	hoverText.style.backgroundColor = "brown";
});

// Activity - 3
// Task - 5
const inputField = document.getElementById("input-text-field");

inputField.addEventListener("keydown", (e) => {
	console.log(e.target.value);
});

// Task - 6
const inputParagraph = document.getElementById("input-para");

inputField.addEventListener("keyup", (e) => {
	inputParagraph.innerHTML = e.target.value;
});

// Activity - 4
// Task - 7
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const formData = new FormData(e.target);
	const formObject = {};

	formData.forEach((value, key) => {
		formObject[key] = value;
	});

	console.log("Form Data:", formObject);

	console.table(formObject);
});

// Task - 8
const dropdown = document.getElementById("dropdown");
const dropdownText = document.getElementById("dropdown-text");

dropdown.addEventListener("change", (e) => {
	dropdownText.style.display = "block";
	dropdownText.innerHTML = e.target.value;
});

// Activity - 5
// Task - 9
const list = document.getElementById("list");

list.addEventListener("click", (e) => {
	console.log(e.target.textContent);
});

// Task - 10
function addNewProgrammingLanguage() {
	const newListItem = document.createElement("li");
	newListItem.innerHTML = "Golang";
	list.appendChild(newListItem);
}

const addBtn = document.getElementById("add-btn");

addBtn.addEventListener("click", (e) => {
	addNewProgrammingLanguage();
	const itemCount = document.querySelectorAll("#list li").length;
	console.log(itemCount, "New item added!");
});
