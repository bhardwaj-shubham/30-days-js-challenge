// Activity - 1
// Task - 1
// function findMedianSortedArrays(nums1, nums2) {
// 	const n1 = nums1.length;
// 	const n2 = nums2.length;

// 	if (n1 > n2) {
// 		return findMedianSortedArrays(nums2, nums1);
// 	}

// 	const n = n1 + n2;
// 	const left = Math.floor((n1 + n2 + 1) / 2);
// 	let low = 0;
// 	let high = n1;

// 	while (low <= high) {
// 		const mid1 = Math.floor((low + high) / 2);
// 		const mid2 = left - mid1;

// 		const l1 = mid1 === 0 ? -Infinity : nums1[mid1 - 1];
//         const l2 = mid2 === 0 ? -Infinity : nums2[mid2 - 1];
//         const r1 = mid1 === n1 ? Infinity : nums1[mid1];
//         const r2 = mid2 === n2 ? Infinity : nums2[mid2];

// 		if (l1 <= r2 && l2 <= r1) {
// 			if (n % 2 === 1) {
// 				return Math.max(l1, l2);
// 			} else {
// 				return (Math.max(l1, l2) + Math.min(r1, r2)) / 2;
// 			}
// 		} else if (l1 > r2) {
// 			high = mid1 - 1;
// 		} else {
// 			low = mid1 + 1;
// 		}
// 	}

// 	return 0;
// }

// 1st test case
// console.log(findMedianSortedArrays([1, 3], [2]));
// 2nd test case
// console.log(findMedianSortedArrays([1, 2], [3, 4]));

// Activity - 2
// Task - 2
// class ListNode {
// 	constructor(val=0, next=null) {
// 		this.val = val;
// 		this.next = next;
// 	}
// }

// function appendNode(node, val) {
// 	const newNode = new ListNode(val);
// 	if (node === null) {
// 		node = newNode;
// 		return;
// 	}
// 	let temp = node;
// 	while (temp.next !== null) {
// 		temp = temp.next;
// 	}
// 	temp.next = newNode;
// }

// function appendList(list) {
// 	if (!list || list.length === 0)
// 		return null;

// 	const head = new ListNode(list[0]);
// 	let tail = head;
// 	for (let i = 1; i < list.length; i++) {
// 		tail.next = new ListNode(list[i]);
// 		tail = tail.next;
// 	}
// 	return head;
// }

// function printNode(node) {
// 	const nodes = [];
// 	let temp = node;
// 	console.log(temp);
// 	while (temp !== null) {
// 		nodes.push(temp.val);
// 		temp = temp.next;
// 	}
// 	console.log(nodes);
// }

// function merge (left, right) {
//     if (!left) {
//         return right;
//     } else if (!right) {
//         return left;
//     } else if (left.val < right.val){
//         left.next = merge(left.next, right);
//         return left;
//     } else {
//         right.next = merge(left, right.next);
//         return right;
//     }
// }

// function helper(lists, start, end) {
//     if (start === end) {
//         return lists[start];
//     } else if (start < end) {
//         const mid = parseInt((start + end) / 2);
//         const left = helper(lists, start, mid);
//         const right = helper(lists, mid + 1, end);
//         return merge(left, right);
//     } else {
//         return null;
//     }
// }

// function mergeKLists(lists) {
// 	return helper(lists, 0, lists.length - 1);
// }

// 1st test case
// const list1 = appendList([1, 4, 5]);
// const list2 = appendList([1, 3, 4]);
// const list3 = appendList([2, 6]);
// printNode(mergeKLists([list1, list2, list3]));

// 2nd test case
// printNode(mergeKLists([]));

// Activity - 3
// Task - 3
// function trap(height) {
//     const n = height.length;
//     let left = 0;
//     let right = n - 1;
//     let waterTrapped = 0;
//     let maxLeft = 0;
//     let maxRight = 0;

//     while (left <= right) {
//         if (height[left] <= height[right]) {
//             if (height[left] >= maxLeft) {
//                 maxLeft = height[left];
//             } else {
//                 waterTrapped += maxLeft - height[left];
//             }
//             left++;
//         } else {
//             if (height[right] >= maxRight) {
//                 maxRight = height[right];
//             } else {
//                 waterTrapped += maxRight - height[right];
//             }
//             right--;
//         }
//     }
//     return waterTrapped;
// }

// 1st test case
// console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));

// 2nd test case
// console.log(trap([4,2,0,3,2,5]));

// Activity - 4
// Task - 4
// function solveNQueens(n) {
//     const result = [];

//     const DFS = (queens, xy_dif, xy_sum) => {
//         const p = queens.length;
//         if (p === n) {
//             result.push(queens.map(i => '.'.repeat(i) + 'Q' + '.'.repeat(n - i - 1)));
//             return;
//         }
//         for (let q = 0; q < n; q++) {
//             if (!queens.includes(q) && !xy_dif.includes(p - q) && !xy_sum.includes(p + q)) {
//                 DFS(queens.concat([q]), xy_dif.concat([p - q]), xy_sum.concat([p + q]));
//             }
//         }
//     };

//     DFS([], [], []);
//     return result;
// };

// 1st test case
// console.log(solveNQueens(4));

// 2nd test case
// console.log(solveNQueens(1));

// Activity - 5
// Task - 5
// function ladderLength(beginWord, endWord, wordList) {
//     const wordSet = new Set(wordList)
//     let queue = [beginWord];
//     let steps = 1;

//     while (queue.length) {
//         const next = [];

//         for (let word of queue) {
//             if (word === endWord)
//             	return steps;

//             for (let i = 0; i < word.length; i++) {

//                 for (let j = 0; j < 26; j++) {
//                     const newWord = word.slice(0, i) + String.fromCharCode(j + 97) + word.slice(i + 1);

//                     if (wordSet.has(newWord)) {
//                         next.push(newWord);
//                         wordSet.delete(newWord);
//                     }
//                 }
//             }
//         }
//         queue = next
//         steps++;
//     }
//     return 0;
// }

// 1st test case
// console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"]));

// 2nd test case
// console.log(ladderLength("hit", "cog", ["hot","dot","dog","lot","log"]))