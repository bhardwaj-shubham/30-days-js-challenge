// Activity - 1
// Task - 1
// function factorial(n) {
// 	if (n === 0 || n === 1)
// 		return 1;
// 	return n * factorial(n-1);
// }

// console.log(factorial(2));
// console.log(factorial(4));
// console.log(factorial(10));

// Task - 2
// function fibonacci(n) {
// 	if (n <= 1)
// 		return 1;
// 	return fibonacci(n-1) + fibonacci(n-2);
// }

// console.log(fibonacci(4));
// console.log(fibonacci(8));
// console.log(fibonacci(10));

// Activity - 2
// Task - 3
// function arraySum(arr) {
// 	if (arr.length === 0)
// 		return 0;
// 	return arr[0] + arraySum(arr.splice(1));
// }

// console.log(arraySum([1, 2, 3]));
// console.log(arraySum([3, 4, 5]));
// console.log(arraySum([6, 7, 8]));

// Task - 4
// function arrayMax(arr) {
// 	if (arr.length === 0)
// 		return -1;
// 	return Math.max(arr[0], arrayMax(arr.splice(1)));
// }

// console.log(arrayMax([1, 2, 3]));
// console.log(arrayMax([3, 4, 5]));
// console.log(arrayMax([6, 7, 8]));

// Activity - 3
// Task - 5
// function reverseString(str) {
// 	if (str.length <= 1) {
// 		return str;
// 	} else {
// 		return reverseString(str.substring(1)) + str.charAt(0);
// 	}
// }

// console.log(reverseString("hello"));
// console.log(reverseString("javascript"));
// console.log(reverseString("namste"));

// Task - 6
// function isPalindrome(str) {
// 	if (str.length <= 1) {
// 		return true;
// 	} else {
// 		if (str.charAt(0) != str.charAt(str.length-1)) {
// 			return false;
// 		} else {
// 			return isPalindrome(str.substring(1, str.length-1));
// 		}
// 	}
// }

// console.log(isPalindrome("madam"));
// console.log(isPalindrome("racecar"));
// console.log(isPalindrome("javascript"));

// Activity - 4
// Task - 7
// function search(arr, key, start, end) {
// 	if (start > end) {
// 		return -1;
// 	}
// 	const mid = Math.floor((start+end) / 2);
// 	if (arr[mid] === key) {
// 	    return mid;
// 	} else if (arr[mid] < key) {
// 	    return search(arr, key, mid + 1, end);
// 	} else {
// 	    return search(arr, key, start, mid - 1);
// 	}
// }

// function binarySearch(arr, key) {
// 	return search(arr, key, 0, arr.length-1) === -1 ? false : true;
// }

// console.log(binarySearch([1, 2, 3, 4], 4));
// console.log(binarySearch([1, 2, 3, 4], 5));
// console.log(binarySearch([1, 2, 3, 4, 5, 6], 3));

// Task - 8
// function countOccurences(arr, key) {
// 	if (arr.length === 0) {
// 	    return 0;
// 	} else if (arr[0] === key) {
// 	    return 1 + countOccurences(arr.slice(1), key);
// 	} else {
// 	    return countOccurences(arr.slice(1), key);
// 	}
// }

// console.log(countOccurences([1, 2, 3, 4], 4));
// console.log(countOccurences([1, 2, 3, 4], 5));
// console.log(countOccurences([1, 2, 3, 4, 5, 6], 3));

// Activity - 5
// Task - 9
// class Node {
//   constructor(data) {
//     this.left = null;
//     this.right = null;
//     this.data = data;
// 	}
// }

// function inorder(node) {
// 	if (node === null)
// 		return;
// 	inorder(node.left);
// 	console.log(node.data);
// 	inorder(node.right);
// }

// const root = new Node(10);
// root.left = new Node(5);
// root.right = new Node(15);
// root.left.left = new Node(2);
// root.left.right = new Node(8);
// root.right.left = new Node(13);  

// root.right.right = new Node(17);  


// // Perform in-order traversal
// inorder(root);

// Task - 10
// function treeDepth(root) {
//   if (root === null) {
//     return 0;
//   } else {
//     let leftDepth = treeDepth(root.left);
//     let rightDepth = treeDepth(root.right);
//     return Math.max(leftDepth, rightDepth) + 1;
//   }
// }

// // Create some test cases
// const root1 = new Node(1);
// root1.left = new Node(2);
// root1.right = new Node(3);

// const root2 = new Node(1);
// root2.left = new Node(2);
// root2.left.left = new Node(4);
// root2.left.right = new Node(5);

// const root3 = new Node(1);

// // Calculate and log the depth for each test case
// console.log(treeDepth(root1));
// console.log(treeDepth(root2));
// console.log(treeDepth(root3));