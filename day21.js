// Activity - 1
// Task - 1
// function twoSum(nums, target) {
// 	const numMap = {};
// 	const n = nums.length;
// 	for (let i = 0; i < n; i++) {
// 		const compl = target - nums[i];
// 		if (numMap[compl]) {
// 			return [numMap[compl], i];
// 		}
// 		numMap[nums[i]] = i;
// 	}
// 	return [];
// }

// console.log(twoSum([2,7,11,15], 9));
// console.log(twoSum([3,2,4], 6));
// console.log(twoSum([3,3], 6));

// Activity - 2
// Task - 2
// function reverse(x) {
// 	let revNum = 0;
// 	let num = Math.abs(x);

// 	while (num !== 0) {
// 		const digit = num % 10;
// 		if (revNum > (Math.floor(Number.MAX_SAFE_INTEGER / 10)) - digit) {
// 			return 0;
// 		}
// 		revNum = revNum * 10 + digit;
// 		num = Math.floor(num / 10);
// 	}

// 	return (x < 0) ? -revNum : revNum;
// }

// console.log(reverse(123))
// console.log(reverse(-123))
// console.log(reverse(120))

// Activity - 3
// Task - 3
// function isPalindrome(x) {
// 	if (x < 0 || (x != 0) && (x % 10 === 0)) {
// 		return false;
// 	}
// 	let rev = 0;
// 	let num = x;

// 	while (num !== 0) {
// 		const digit = num % 10;
// 		rev = rev * 10 + digit;
// 		num = Math.floor(num / 10);
// 	}

// 	return rev === x || x === Math.floor(rev / 10);
// }

// console.log(isPalindrome(121));
// console.log(isPalindrome(-121));
// console.log(isPalindrome(10));

// Activity - 4
// Task - 4
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

// function printNode(node) {
// 	const nodes = [];
// 	let temp = node;
// 	while (temp !== null) {
// 		nodes.push(temp.val);
// 		temp = temp.next;
// 	}
// 	console.log(nodes);
// }

// function mergeTwoLists(list1, list2) {
//   if (!list1 && !list2) return null;
//   if (!list1) return list2;
//   if (!list2) return list1;

//   const head = new ListNode(-1);
//   let temp = head;

//   while (list1 && list2) {
//     if (list1.val <= list2.val) {
//       temp.next = list1;
//       list1 = list1.next;
//     } else {
//       temp.next = list2;
//       list2 = list2.next;
//     }
//     temp = temp.next;
//   }

//   temp.next = list1 || list2;
//   return head.next;
// }

// 1st test case
// list1 = new ListNode(1);
// appendNode(list1, 2);
// appendNode(list1, 3);

// list2 = new ListNode(1);
// appendNode(list2, 3);
// appendNode(list2, 4);

// printNode(mergeTwoLists(list1, list2));

// 2nd test case
// printNode(mergeTwoLists(null, null));

// 3rd test case
// printNode(mergeTwoLists(null, new ListNode(0)));

// Activity - 5
// Task - 5
// function isValid(s) {
//     const stack = [];
//     const openBrackets = '([{';
//     const closeBrackets = ')]}';

//     for (let i = 0; i < s.length; i++) {
//         const ch = s[i];
//         if (openBrackets.includes(ch)) {
//             stack.push(ch);
//         } else {
//             if (stack.length === 0) {
//                 return false;
//             }
//             const top = stack.pop();
//             if (closeBrackets.indexOf(ch) !== openBrackets.indexOf(top)) {
//                 return false;
//             }
//         }
//     }
//     return stack.length === 0;
// }

// // 1st test
// console.log(isValid("()"));
// // 2nd test
// console.log(isValid("()[]{}"));
// // 3rd test
// console.log(isValid("(]"));