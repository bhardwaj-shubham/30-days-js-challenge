let ws;
let username = "";

document.getElementById("joinButton").addEventListener("click", () => {
	username = document.getElementById("usernameInput").value.trim();
	if (username && !ws) {
		ws = new WebSocket("ws://localhost:8080");

		ws.onopen = () => {
			console.log("Connected to WebSocket server");
			document.getElementById("loginScreen").style.display = "none";
			document.getElementById("chatContainer").style.display = "flex";
		};

		ws.onmessage = (event) => {
			console.log("Received message:", event.data);
			if (event.data.startsWith("{")) {
				try {
					const data = JSON.parse(event.data);
					const { username, message } = data;
					displayMessage(username, message, "received");
				} catch (error) {
					console.error("Error parsing incoming message:", error);
				}
			} else {
				console.log("Received non-JSON message:", event.data);
			}
		};

		ws.onclose = () => console.log("Disconnected from WebSocket server");
		ws.onerror = (error) => console.error("WebSocket error:", error);
	} else {
		alert("Please enter a username.");
	}
});

function sendMessage(message) {
	if (message) {
		ws.send(JSON.stringify({ username, message }));
		displayMessage(username, message, "sent");
	}
}

function displayMessage(username, message, type) {
	console.log(`Displaying message from ${username}: ${message}`);
	const messagesDiv = document.getElementById("messages");
	const newMessageDiv = document.createElement("div");
	newMessageDiv.className = `message ${type}`;
	newMessageDiv.innerHTML = `<strong>${username}:</strong> ${message}`;
	messagesDiv.appendChild(newMessageDiv);
	messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

document.getElementById("sendButton").addEventListener("click", () => {
	const messageInput = document.getElementById("messageInput");
	sendMessage(messageInput.value);
	messageInput.value = "";
});

document
	.getElementById("messageInput")
	.addEventListener("keypress", (event) => {
		if (event.key === "Enter") {
			event.preventDefault();
			sendMessage(document.getElementById("messageInput").value);
			document.getElementById("messageInput").value = "";
		}
	});
