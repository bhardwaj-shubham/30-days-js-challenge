const WebSocket = require("ws");
const port = 8080;

const wss = new WebSocket.Server({ port });

console.log(`WebSocket server started on ws://localhost:${port}`);

wss.on("connection", (ws) => {
	console.log("New connection established");

	ws.on("message", (data) => {
		try {
			const { username, message } = JSON.parse(data);
			console.log(`Received message from ${username}: ${message}`);

			// Broadcast the message to all connected clients
			wss.clients.forEach((client) => {
				if (client.readyState === WebSocket.OPEN) {
					client.send(JSON.stringify({ username, message }));
				}
			});
		} catch (error) {
			console.error("Error parsing message:", error);
		}
	});

	ws.on("close", () => {
		console.log("Connection closed");
	});

	ws.on("error", (error) => {
		console.error("WebSocket error:", error);
	});
});
