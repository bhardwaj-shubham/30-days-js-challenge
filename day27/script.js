const tasks = [];

// display the task on the screen
function displayTasks() {
	checkTableEmpty();

	const taskBody = document.querySelector(".tbody");

	for (let i = 0; i < tasks.length; i++) {
		const title = tasks[i].title;
		const description = tasks[i].description;
		const dueDate = tasks[i].date;

		const newRow = document.createElement("tr");

		const titleCell = document.createElement("td");
		const descriptionCell = document.createElement("td");
		const dateCell = document.createElement("td");

		titleCell.innerHTML = title;
		descriptionCell.innerHTML = description;
		dateCell.innerHTML = dueDate;

		const checkedCell = document.createElement("td");
		const checkedBtn = document.createElement("button");
		checkedBtn.setAttribute("type", "button");
		checkedBtn.classList.add("checked-btn");
		checkedBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;

		const editCell = document.createElement("td");
		const editBtn = document.createElement("button");
		editBtn.setAttribute("type", "button");
		editBtn.classList.add("edit-btn");
		editBtn.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;

		checkedCell.appendChild(checkedBtn);
		editCell.appendChild(editBtn);

		newRow.appendChild(checkedCell);
		newRow.appendChild(titleCell);
		newRow.appendChild(descriptionCell);
		newRow.appendChild(dateCell);
		newRow.appendChild(editCell);

		taskBody.append(newRow);
	}
}

// handle the form submit
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const title = document.getElementById("title").value;
	const description = document.getElementById("description").value;
	const dueDate = document.getElementById("date").value;

	tasks.push({ title, description, date: dueDate });

	form.reset();
	// console.log(tasks);

	checkTableEmpty();
	displayTasks();
});

// Function to check if table is empty
function checkTableEmpty() {
	const rows = document.querySelectorAll("tbody tr:not(#no-data-row)");

	if (rows.length === 0) {
		document.getElementById("no-data-row").style.display = "table-row";
	} else {
		document.getElementById("no-data-row").style.display = "none";
	}
}

// edit button
function populateFormForEdit(task, description, dueDate, row) {
	document.getElementById("submit").innerHTML = "Update";

	document.getElementById("title").value = task;
	document.getElementById("description").value = description;
	document.getElementById("date").value = dueDate;

	// Update the task on click of the update button
	document.getElementById("submit").onclick = function () {
		row.cells[1].textContent = document.getElementById("title").value;
		row.cells[2].textContent = document.getElementById("description").value;
		row.cells[3].textContent = document.getElementById("date").value;

		// Reset the form
		document.getElementById("form").reset();

		document.getElementById("submit").innerHTML = "Add Task";
	};

	checkTableEmpty();
}

// Event delegation for delete and edit buttons
document.querySelector(".tbody").addEventListener("click", (event) => {
	const target = event.target.closest("button");

	if (!target) return;

	const row = target.closest("tr");

	if (target.classList.contains("checked-btn")) {
		if (confirm("Are you sure you want to delete this task?")) {
			row.remove();
		}
	} else if (target.classList.contains("edit-btn")) {
		const title = row.children[1].textContent;
		const description = row.children[2].textContent;
		const dueDate = row.children[3].textContent;

		populateFormForEdit(title, description, dueDate, row);
	}
});

checkTableEmpty();
