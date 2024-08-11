// Local storage to store users
const users = JSON.parse(localStorage.getItem("users")) || [];

// Local storage to store posts
const posts = JSON.parse(localStorage.getItem("posts")) || [];

// Local storage to store notifications
const notifications = JSON.parse(localStorage.getItem("notifications")) || [];

// Update the notifications area
function updateNotifications() {
	const notificationsContainer = document.getElementById("notifications");
	notificationsContainer.innerHTML = "";

	if (notifications.length !== 0) {
		document.getElementById("notificationSection").style.display = "block";

		notifications.forEach((notification, index) => {
			const notificationElement = document.createElement("div");
			notificationElement.className = "notification";
			notificationElement.innerHTML = `<p>${notification.message}</p>`;
			notificationsContainer.appendChild(notificationElement);

			// Set a timeout to remove the notification after 5 seconds
			setTimeout(() => {
				notificationsContainer.removeChild(notificationElement);
				// Remove notification from the array and update local storage
				notifications.splice(index, 1);
				localStorage.setItem(
					"notifications",
					JSON.stringify(notifications)
				);
			}, 5000);
		});
		// console.log("Notifications updated:", notifications);
	}
}

// Add a notification
function addNotification(message) {
	notifications.push({ message: message });
	localStorage.setItem("notifications", JSON.stringify(notifications));
	updateNotifications();
	// console.log("Notification added:", message);
}

// Display the notification section if the user is logged in
function showNotificationSection() {
	const notificationSection = document.getElementById("notificationSection");
	const username = localStorage.getItem("username");

	if (username) {
		notificationSection.style.display = "block";
	} else {
		notificationSection.style.display = "none";
	}
}

// Registration form submission
document
	.getElementById("registrationForm")
	.addEventListener("submit", function (event) {
		event.preventDefault();
		const username = document.getElementById("registerUsername").value;
		const email = document.getElementById("registerEmail").value;
		const password = document.getElementById("registerPassword").value;

		// Check if username already exists
		const userExists = users.some((user) => user.username === username);

		if (userExists) {
			alert("Username already exists!");
			return;
		}

		// Save new user
		const newUser = {
			username: username,
			email: email,
			password: password,
		};

		users.push(newUser);
		localStorage.setItem("users", JSON.stringify(users));
		localStorage.setItem("username", username);
		localStorage.setItem("email", email);

		document.getElementById("registrationSection").style.display = "none";
		document.getElementById("loginSection").style.display = "block";
		document.getElementById("registrationForm").reset();
	});

// Login form submission
document
	.getElementById("loginForm")
	.addEventListener("submit", function (event) {
		event.preventDefault();
		const username = document.getElementById("username").value;
		const password = document.getElementById("password").value;

		// Check login credentials
		const user = users.find(
			(user) => user.username === username && user.password === password
		);

		if (user) {
			localStorage.setItem("username", username);
			document.getElementById("loginSection").style.display = "none";
			document.getElementById("postSection").style.display = "block";
			document.getElementById("profileSection").style.display = "block";

			populateProfile(user);
		} else {
			alert("Invalid username or password");
			return;
		}
	});

// Populate profile form with user data
function populateProfile(user) {
	document.getElementById("profileUsername").innerHTML = user?.username;
	document.getElementById("profileEmail").innerHTML = user?.email;
}

// Post form submission
document
	.getElementById("postForm")
	.addEventListener("submit", function (event) {
		event.preventDefault();
		const text = document.getElementById("postText").value;
		const image = document.getElementById("postImage").value;
		const username = localStorage.getItem("username");

		const newPost = {
			username: username,
			text: text,
			image: image ? image : null,
			createdAt: new Date().toISOString(),
			likes: 0,
			comments: [],
		};

		posts.push(newPost);
		localStorage.setItem("posts", JSON.stringify(posts));

		displayPosts();
		document.getElementById("postForm").reset();
	});

// Display posts
function displayPosts() {
	const postFeed = document.getElementById("postFeed");
	postFeed.innerHTML = "";

	const loggedInUsername = localStorage.getItem("username");

	posts.forEach((post, index) => {
		const postContainer = document.createElement("div");
		postContainer.className = "post-container";

		const postClass =
			post.username === loggedInUsername
				? "logged-in-user"
				: "other-user";

		const postContent = `
            <div class="${postClass}">
                <h2>${post.username}</h2>
                <p class="timestamp">${new Date(
					post.createdAt
				).toLocaleString()}</p>
                <p>${post.text}</p>
                ${
					post.image
						? `<img src="${post.image}" alt="Post Image" class="post-image">`
						: ""
				}
                <div class="post-actions">
                    <button class="like-button" data-index="${index}">Like (${
			post.likes
		})</button>
                    <button class="comment-button" data-index="${index}">Comment</button>
                </div>
                <div class="post-stats">
                    <p>${post.likes} Likes | ${
			post.comments.length
		} Comments</p>
                </div>
                <div class="comments-section">
                    ${post.comments
						.map((comment) => `<p>${comment}</p>`)
						.join("")}
                </div>
                <div class="add-comment">
                    <input type="text" class="comment-input" placeholder="Add a comment..." data-index="${index}">
                    <button class="submit-comment" data-index="${index}">Post</button>
                </div>
            </div>
        `;

		postContainer.innerHTML = postContent;
		postFeed.appendChild(postContainer);
	});

	addEventListeners();
}

// Like post
function likePost(index) {
	posts[index].likes++;
	localStorage.setItem("posts", JSON.stringify(posts));

	addNotification(`Your post by ${posts[index].username} has been liked!`);
	displayPosts();
}

// Add comment
function addComment(index, commentText) {
	if (commentText.trim()) {
		posts[index].comments.push(commentText);
		localStorage.setItem("posts", JSON.stringify(posts));

		addNotification(
			`Your post by ${posts[index].username} has a new comment!`
		);
		displayPosts();
	}
}

// Event listeners to buttons
function addEventListeners() {
	const likeButtons = document.querySelectorAll(".like-button");
	const commentButtons = document.querySelectorAll(".submit-comment");

	likeButtons.forEach((button) => {
		button.addEventListener("click", function () {
			const index = this.getAttribute("data-index");
			likePost(index);
		});
	});

	commentButtons.forEach((button) => {
		button.addEventListener("click", function () {
			const index = this.getAttribute("data-index");
			const commentInput = document.querySelector(
				`.comment-input[data-index="${index}"]`
			);
			const commentText = commentInput.value;
			addComment(index, commentText);
		});
	});
}

document.addEventListener("DOMContentLoaded", () => {
	// Get elements
	const loginSection = document.getElementById("loginSection");
	const registerSection = document.getElementById("registrationSection");

	const showRegisterLink = document.getElementById("showRegisterLink");
	const showLoginLink = document.getElementById("showLoginLink");

	const updateProfileButton = document.getElementById("updateProfileButton");
	const updateProfileForm = document.getElementById("updateProfileSection");
	const cancelUpdateButton = document.getElementById("cancelUpdateButton");

	// Show registration form
	if (showRegisterLink) {
		showRegisterLink.addEventListener("click", (event) => {
			event.preventDefault();
			loginSection.style.display = "none";
			registerSection.style.display = "block";
		});
	}

	// Show login form
	if (showLoginLink) {
		showLoginLink.addEventListener("click", (event) => {
			event.preventDefault();
			registerSection.style.display = "none";
			loginSection.style.display = "block";
		});
	}

	// Handle profile section visibility and updates
	if (updateProfileButton) {
		updateProfileButton.addEventListener("click", () => {
			updateProfileForm.style.display = "block";

			const username = localStorage.getItem("username") || "";
			const email = localStorage.getItem("email") || "";

			document.getElementById("newUsername").value = username;
			document.getElementById("newEmail").value = email;

			updateProfileButton.style.display = "none";
		});
	}

	if (cancelUpdateButton) {
		cancelUpdateButton.addEventListener("click", () => {
			updateProfileForm.style.display = "none";
			updateProfileButton.style.display = "block";
		});
	}

	// Handle update profile form submission
	if (updateProfileForm) {
		updateProfileForm.addEventListener("submit", function (event) {
			event.preventDefault();

			const newUsername = document.getElementById("newUsername").value;
			const newEmail = document.getElementById("newEmail").value;

			const oldUsername = localStorage.getItem("username") || "";

			// Update user profile
			const userIndex = users.findIndex(
				(user) => user.username === oldUsername
			);

			if (userIndex !== -1) {
				users[userIndex].username = newUsername;
				users[userIndex].email = newEmail;

				localStorage.setItem("users", JSON.stringify(users));

				alert("Profile updated successfully!");
			} else {
				alert("User not found!");
				return;
			}

			// Update profile information
			localStorage.setItem("username", newUsername);
			localStorage.setItem("email", newEmail);

			document.getElementById("profileUsername").innerHTML = newUsername;
			document.getElementById("profileEmail").innerHTML = newEmail;

			updateProfileForm.style.display = "none";
			updateProfileButton.style.display = "block";
		});
	}

	// Initial display of posts and notifications
	displayPosts();
	updateNotifications();
});
