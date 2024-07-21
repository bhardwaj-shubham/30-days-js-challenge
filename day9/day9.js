// Activity - 1
// Task - 1
const text = (document.getElementById("text").innerHTML = "Chai Aur Code");

// Task - 2
const header = (document.querySelector(".header").style.backgroundColor =
	"red");

// Activity - 2
// Task - 3
const divContent = document.createElement("div");
divContent.className = "div-text";
divContent.innerHTML = "Some text for div element";
document.body.appendChild(divContent);

// Task - 4
const newList = document.createElement("li");
newList.innerHTML = "DOM";
newList.id = "dom";
document.getElementById("lang-list").appendChild(newList);

// Activity 3
// Task - 5
// document.querySelector(".div-text").remove();

// Task - 6
// const lastListElement = document.getElementById("dom");
// document.getElementById("lang-list").removeChild(lastListElement);

// Activity - 4
// Task - 7
const image = document.getElementById("image");
// image.src = "https://picsum.photos/seed/picsum/200";

// Task - 8
// document.querySelector(".header").style.backgroundColor = "";

// Activity - 5
// Task - 9
// const paragraph = document.getElementById("para");
// const paragraphBtn = document.getElementById("btn-para");
// paragraphBtn.addEventListener("click", () => {
// 	paragraph.innerHTML =
// 		"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, cumque perferendis eaque impedit voluptas expedita sed molestiae tenetur, nulla porro eveniet odit deleniti illum. Inventore veniam accusamus facilis esse consequuntur. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, cumque perferendis eaque impedit voluptas expedita sed molestiae tenetur, nulla porro eveniet odit deleniti illum. Inventore veniam accusamus facilis esse consequuntur.";
// });

// Task - 10
image.addEventListener("mouseover", () => {
	image.style.borderColor = "red";
});

image.addEventListener("mouseout", () => {
	image.style.borderColor = "black";
});
