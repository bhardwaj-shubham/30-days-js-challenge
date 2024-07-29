// Activity - 1
// Task - 1
// class Node {
// 	constructor(value) {
// 		this.value = value;
// 		this.next = null;
// 	}
// }

// Task - 2
// class LinkedList {
// 	constructor() {
// 		this.head = null;
// 		this.tail = null;
// 	}

// 	// add node at the end of the linked list
// 	append(value) {
// 		if (this.head === null) {
// 			this.head = new Node(value);
// 			this.tail = this.head;
// 			return;
// 		}
// 		const newNode = new Node(value);
// 		this.tail.next = newNode;
// 		this.tail = this.tail.next;
// 	}

// 	// remove the node from the end of the linked list
// 	pop() {
// 		if (this.head === null) {
// 			return;
// 		}
// 		if (this.head === this.tail) {
// 			this.head = null;
// 			this.tail = this.head;
// 			return;
// 		}
// 		let lastNode = this.head;
// 		while (lastNode.next !== null && lastNode.next !== this.tail) {
// 			lastNode = lastNode.next;
// 		}
// 		lastNode.next = null;
// 		this.tail = lastNode;
// 	}

// 	// display all nodes
// 	print() {
// 		if (this.head === null) {
// 			console.log("No node in the linked list!");
// 			return;
// 		}
// 		let cur = this.head;
// 		while (cur !== null) {
// 			console.log(cur.value);
// 			cur = cur.next;
// 		}
// 	}
// }

// main code
// const list = new LinkedList();
// list.append(10);
// list.append(20);
// list.append(30);
// list.append(40);
// list.print();
// list.pop();
// list.pop();
// list.print();
// list.pop();
// list.pop();
// list.print();

// Activity - 2
// Task - 3
// class Stack {
// 	constructor() {
// 		this.stack = [];
// 		this.top = -1;
// 	}

// 	// add element
// 	push(value) {
// 		this.top += 1;
// 		this.stack.push(value);
// 	}

// 	// pop element
// 	pop() {
// 		if (this.top === -1) {
// 			return -1;
// 		}
// 		this.top -= 1;
// 		return this.stack.pop();
// 	}

// 	// peek element
// 	peek() {
// 		if (this.top === -1) {
// 			return -1;
// 		}
// 		return this.stack[this.top];
// 	}
// }

/* main code */
// const stack = new Stack();
// stack.push(10);
// stack.push(20);
// stack.push(30);
// console.log("Top element:", stack.peek());
// console.log("Pop element:", stack.pop());
// console.log("Pop element:", stack.pop());
// console.log("Pop element:", stack.pop());
// console.log("Pop element:", stack.pop());

// Task - 4
// const stack = new Stack();
// const str = "javascript";
// for (let ch of str) {
// 	stack.push(ch);
// }
// let reversedStr = "";
// while (stack.peek() !== -1) {
// 	reversedStr += stack.pop();
// }
// console.log("Original String:", str);
// console.log("Reverse String:", reversedStr);

// Activity - 3
// Task - 5
// class Queue {
// 	constructor() {
// 		this.queue = [];
// 		this.front = -1;
// 	}

// 	// add element
// 	enqueue(value) {
// 		this.front += 1;
// 		this.queue.push(value);
// 	}

// 	// remove element
// 	dequeue() {
// 		if (this.front === -1) {
// 			return -1;
// 		}
// 		this.front -= 1;
// 		return this.queue.shift();
// 	}

// 	// peek element
// 	frontElement() {
// 		if (this.front === -1) {
// 			return -1;
// 		}
// 		return this.queue[0];
// 	}
// }

// const queue = new Queue();
// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// console.log("Front element:", queue.frontElement());
// console.log("Dequeue element:", queue.dequeue());
// console.log("Dequeue element:", queue.dequeue());
// console.log("Dequeue element:", queue.dequeue());
// console.log("Dequeue element:", queue.dequeue());

// Task - 6
// const queue = new Queue();
// queue.enqueue("Document1.pdf");
// queue.enqueue("Image.png");
// queue.enqueue("Word.docx");
// console.log("Processing:", queue.dequeue());
// console.log("Processing:", queue.dequeue());
// console.log("Processing:", queue.dequeue());
// console.log("Processing:", queue.dequeue());

// Activity - 4
// Task - 7
// class TreeNode {
// 	constructor(value) {
// 		this.value = value;
// 		this.left = null;
// 		this.right = null;
// 	}
// }

// const node = new TreeNode(10);
// node.left = new TreeNode(20);
// node.right = new TreeNode(30);
// console.log(node);

// Task - 8
// class BinaryTree {
// 	constructor() {
// 		this.root = null;
// 	}

// 	insert(value) {
// 		const newNode = new TreeNode(value);
// 		if (this.root === null) {
// 			this.root = newNode;
// 			return;
// 		}
// 		let cur = this.root;
// 		while (true) {
// 			if (value < cur.value) {
// 				if (cur.left === null) {
// 					cur.left = newNode;
// 					break;
// 				}
// 				cur = cur.left;
// 			} else {
// 				if (cur.right === null) {
// 					cur.right = newNode;
// 					break;
// 				}
// 				cur = cur.right;
// 			}
// 		}
// 	}

// 	_inOrderTraversal(node, result) {
//     if (node !== null) {
//       this._inOrderTraversal(node.left, result);
//       result.push(node.value);
//       this._inOrderTraversal(node.right, result);
//     }
//   }

//   inorder() {
//     const result = [];
//     this._inOrderTraversal(this.root, result);
//     return result;
//   }
// }

// const tree = new BinaryTree();
// tree.insert(10);
// tree.insert(5);
// tree.insert(15);
// tree.insert(3);
// tree.insert(7);

// const result = tree.inorder();
// console.log(result);

// Activity - 5
// Task - 9
// class Graph {
//   	constructor() {
//     	this.adjacencyList = {};
//   	}

//   	// Method to add a vertex to the graph
//   	addVertex(vertex) {
//     	if (!this.adjacencyList[vertex]) {
//       		this.adjacencyList[vertex] = [];
//     	}
//   	}

//   	// Method to add an edge between two vertices
//   	addEdge(vertex1, vertex2) {
//     	if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
//       		this.adjacencyList[vertex1].push(vertex2);
//       		this.adjacencyList[vertex2].push(vertex1);
//     	}
//   	}

//   	// Method to perform BFS
//   	bfs(start) {
//     	const queue = [start];
//     	const result = [];
//     	const visited = {};
//     	let currentVertex;

//     	visited[start] = true;

//     	while (queue.length) {
//       		currentVertex = queue.shift();
//       		result.push(currentVertex);

//       		this.adjacencyList[currentVertex].forEach(neighbor => {
//         		if (!visited[neighbor]) {
//           			visited[neighbor] = true;
//           			queue.push(neighbor);
//         		}
//       		});
//     	}

//     	return result;
//   	}

//   	// Find the shortest path from start to end
//    	bfsShortestPath(start, end) {
//     	const queue = [[start]];
//     	const visited = new Set();

//     	visited.add(start);

//     	while (queue.length) {
//       		const path = queue.shift();
//       		const node = path[path.length - 1];

//       		if (node === end) {
//         		return path;
//       		}

//       		this.adjacencyList[node].forEach(neighbor => {
//         		if (!visited.has(neighbor)) {
//           			visited.add(neighbor);
//           			const newPath = [...path, neighbor];
//           			queue.push(newPath);
//         		}
//       		});
//     	}

//     	return null;
//   	}
// }

// const graph = new Graph();
// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');
// graph.addVertex('D');
// graph.addVertex('E');

// graph.addEdge('A', 'B');
// graph.addEdge('A', 'C');
// graph.addEdge('B', 'D');
// graph.addEdge('C', 'E');
// graph.addEdge('D', 'E');

// console.log(graph.bfs('A'));

// Task - 10
// const graph = new Graph();
// graph.addVertex('A');
// graph.addVertex('B');
// graph.addVertex('C');
// graph.addVertex('D');
// graph.addVertex('E');

// graph.addEdge('A', 'B');
// graph.addEdge('A', 'C');
// graph.addEdge('B', 'D');
// graph.addEdge('C', 'E');
// graph.addEdge('D', 'E');

// console.log(graph.bfsShortestPath('A', 'E'));
