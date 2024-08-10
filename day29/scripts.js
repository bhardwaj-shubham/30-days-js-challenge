// Local array to store posts
const posts = [];

// login form submission
document
	.getElementById("loginForm")
	.addEventListener("submit", function (event) {
		event.preventDefault();
		const username = document.getElementById("username").value;
		localStorage.setItem("username", username);
		document.getElementById("loginSection").style.display = "none";
		document.getElementById("postSection").style.display = "block";
	});

// post form submission
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
		displayPosts();
		document.getElementById("postForm").reset();
	});

// display posts
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

// liking a post
function likePost(index) {
	posts[index].likes++;
	displayPosts();
}

// adding a comment
function addComment(index, commentText) {
	if (commentText.trim()) {
		posts[index].comments.push(commentText);
		displayPosts();
	}
}

// event listeners to buttons
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

// Initial display of posts
displayPosts();
