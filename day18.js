// Activity - 1
// Task - 1
// function bubbleSort(arr) {
// 	const n = arr.length;
// 	for (let i = 0; i < n; i++) {
// 		for (let j = i+1; j < n; j++) {
// 			if (arr[i] > arr[j]) {
// 				const temp = arr[i];
// 				arr[i] = arr[j];
// 				arr[j] = temp;
// 			}
// 		}
// 	}
// }

// const arr = [12, 45, 23, 4, 24, 21];
// bubbleSort(arr);
// console.log(arr);

// Task - 2
// function selectionSort(arr) {
// 	const n = arr.length;
// 	for (let i = 0; i < n-1; i++) {
// 		let minIndex = i;
// 		for (let j = i+1; j < n; j++) {
// 			if (arr[j] < arr[minIndex]) {
// 				minIndex = j;
// 			}
// 		}
// 		const temp = arr[i];
// 		arr[i] = arr[minIndex];
// 		arr[minIndex] = temp;
// 	}
// 	return arr;
// }

// const arr = [12, 45, 23, 4, 24, 21];
// console.log(selectionSort(arr));

// Task - 3
// function partition(arr, low, high) {
// 	const pivot = arr[high];
// 	let i = low - 1;
// 	for (let j = low; j < high; j++) {
// 		if (arr[j] <= pivot) {
// 			i++;
// 			const temp = arr[i];
// 			arr[i] = arr[j];
// 			arr[j] = temp;
// 		}
// 	}
// 	const temp = arr[i+1];
// 	arr[i+1] = arr[high];
// 	arr[high] = temp;
// 	return i+1;
// }

// function quickSort(arr, low, high) {
// 	if (low < high) {
// 		const pi = partition(arr, low, high);
// 		quickSort(arr, low, pi-1);
// 		quickSort(arr, pi+1, high);
// 	}
// }

// const arr = [12, 45, 23, 4, 24, 21];
// quickSort(arr, 0, arr.length-1);
// console.log(arr);

// Activity - 2
// Task - 4
// function linearSearch(arr, target) {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] === target) {
// 			return i;
// 		}
// 	}
// 	return -1;
// }

// const arr = [12, 45, 23, 4, 24, 21];
// console.log(linearSearch(arr, 4));

// Task - 5
// function binarySearch(arr, target) {
// 	let low = 0, high = arr.length-1;
// 	while (low <= high) {
// 		const mid = Math.floor((low + high) / 2);
// 		if (arr[mid] === target) {
// 			return mid;
// 		} else if (arr[mid] < target) {
// 			low = mid+1;
// 		} else {
// 			high = mid-1;
// 		}
// 	}
// 	return -1;
// }

// const arr = [4, 12, 21, 46, 65, 70];
// console.log(binarySearch(arr, 65));

// Activity - 3
// Task - 6
// function countCharacters(str) {
//   const charCount = {};

//   for (const char of str) {
//     charCount[char] = (charCount[char] || 0) + 1;
//   }

//   return charCount;
// }

// const string = "hello world";
// console.table(countCharacters(string));

// Task - 7
// function lengthOfLongestSubstring(s) {
//   let maxLength = 0;
//   let start = 0;
//   const charIndexMap = {};

//   for (let end = 0; end < s.length; end++) {
//     const char = s[end];

//     if (charIndexMap[char] !== undefined) {
//       start = Math.max(start, charIndexMap[char] + 1);
//     }

//     charIndexMap[char] = end;
//     maxLength = Math.max(maxLength, end - start + 1);
//   }

//   return maxLength;
// }

// const s = "abcabcbb";
// console.log(lengthOfLongestSubstring(s));

// Activity - 4
// Task - 8
// function reverse(arr, low, high) {
// 	while (low < high) {
// 		const temp = arr[low];
// 		arr[low] = arr[high];
// 		arr[high] = temp;
// 		low += 1;
// 		high -= 1;
// 	}
// }

// function rotateArray(arr, k) {
// 	const n = arr.length;
// 	k %= n;

// 	reverse(arr, 0, n-1);
// 	reverse(arr, 0, k-1);
// 	reverse(arr, k, n-1);
// 	return arr;
// }

// const arr = [1, 2, 3, 4, 5];
// const k = 2;
// console.log(rotateArray(arr, k));

// Task - 9
// function mergeArrays(arr1, arr2) {
//   	const mergedArray = [];
//   	let i = 0, j = 0;

//   	while (i < arr1.length && j < arr2.length) {
//     	if (arr1[i] <= arr2[j]) {
//       		mergedArray.push(arr1[i]);
//       		i++;
//     	} else {
//       		mergedArray.push(arr2[j]);
//       		j++;
//     	}
//   	}

//   	while (i < arr1.length) {
//     	mergedArray.push(arr1[i]);
//     	i++;
//   	}

//   	while (j < arr2.length) {
//     	mergedArray.push(arr2[j]);
//     	j++;
//   	}

//   	return mergedArray;
// }

// const arr1 = [1, 3, 5];
// const arr2 = [2, 4, 6];
// console.log(mergeArrays(arr1, arr2));

// Activity - 5
// Task - 10
// function fibonacciDP(n) {
//   	const fibNumbers = [0, 1];

//   	if (n <= 1) {
//     	console.log(fibNumbers.slice(0, n + 1));
//     	return fibNumbers[n];
//   	}

//   	for (let i = 2; i <= n; i++) {
//     	fibNumbers[i] = fibNumbers[i - 1] + fibNumbers[i - 2];
//   	}

//   	return fibNumbers;
// }

// const n = 10;
// console.log(fibonacciDP(n));

// Task - 11
// function knapsack(weights, values, capacity) {
//   	const n = weights.length;
//   	const dp = new Array(n + 1).fill(0).map(() => new Array(capacity + 1).fill(0));

//   	for (let i = 1; i <= n; i++) {
//     	for (let w = 1; w <= capacity; w++) {
//       		if (weights[i - 1] <= w) {
//         		dp[i][w] = Math.max(values[i - 1] + dp[i - 1][w - weights[i - 1]], dp[i - 1][w]);
//       		} else {
//         		dp[i][w] = dp[i - 1][w];
//       		}
//     	}
//   	}

// 	return dp[n][capacity];
// }

// const values = [60, 100, 120];
// const weights = [10, 20, 30];
// const capacity = 50;
// console.log(knapsack(weights, values, capacity));


