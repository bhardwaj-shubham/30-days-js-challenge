// Activity - 1
// Task - 1
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

// function addTwoNumbers(list1, list2) {
// 	let cur1 = list1;
// 	let cur2 = list2;
// 	let carry = 0;
// 	let head = new ListNode(0);
// 	let temp = head;

// 	while (cur1 || cur2 || carry !== 0) {
// 		const digit1 = cur1 ? cur1.val : 0;
// 		const digit2 = cur2 ? cur2.val : 0;

// 		const sum = digit1 + digit2 + carry;
// 		const digit = sum % 10;
// 		carry = Math.floor(sum / 10);

// 		temp.next = new ListNode(digit);
// 		temp = temp.next;

// 		cur1 = cur1 ? cur1.next : null;
// 		cur2 = cur2 ? cur2.next : null;
// 	}
// 	return head.next;
// }

// 1st test case
// list1 = new ListNode(2);
// appendNode(list1, 4);
// appendNode(list1, 3);

// list2 = new ListNode(5);
// appendNode(list2, 6);
// appendNode(list2, 4);

// printNode(addTwoNumbers(list1, list2));

// 2nd test case
// printNode(addTwoNumbers(new ListNode(0), new ListNode(0)));

// Activity - 2
// Task - 2
// function lengthOfLongestSubstring(str) {
// 	const n = str.length;
// 	if (n === 0) {
// 		return 0;
// 	}

// 	let maxLength = 0;
// 	const map = {};
// 	let left = 0, right = 0;
// 	while (right < n) {
// 		if (map[str[right]] !== undefined) {
// 			left = Math.max(left, map[str[right]] + 1);
// 		}
// 		map[str[right]] = right;
// 		maxLength = Math.max(maxLength, right - left + 1);
// 		right += 1;
// 	}
// 	return maxLength;
// }

// 1st test case
// console.log(lengthOfLongestSubstring("abcabcbb"));
// 2nd test case
// console.log(lengthOfLongestSubstring("bbbbb"));
// 3rd test case
// console.log(lengthOfLongestSubstring("pwwkew"));

// Activity - 3
// Task - 3
// function maxArea(height) {
//     let [left, right, max] = [0, height.length - 1, 0];

//     while (left < right) {
//         let containerHeight, area;
//         let containerWidth = right - left;

//         if (height[left] < height[right]) {
//             containerHeight = height[left];
//             left++;
//         } else {
//             containerHeight = height[right];
//             right--;
//         }

//         area = containerWidth * containerHeight;

//         if (area > max) {
//             max = area;
//         }
//     }

//     return max;
// }

// 1st test case
// console.log(maxArea([1,8,6,2,5,4,8,3,7]));
// 2nd test case
// console.log(maxArea([1,1]));

// Activity - 4
// Task - 4
// function threeSum(nums) {
//     const n = nums.length;
//     const ans = [];

//     nums.sort((a, b) => a - b);

//     for (let i = 0; i < n; i++) {
//         if (i !== 0 && nums[i] === nums[i - 1]) {
//             continue;
//         }

//         let j = i + 1;
//         let k = n - 1;

//         while (j < k) {
//             const totalSum = nums[i] + nums[j] + nums[k];
//             if (totalSum < 0) {
//                 j++;
//             } else if (totalSum > 0) {
//                 k--;
//             } else {
//                 ans.push([nums[i], nums[j], nums[k]]);
//                 j++;
//                 k--;
//                 while (j < k && nums[j] === nums[j - 1]) {
//                     j++;
//                 }
//                 while (j < k && nums[k] === nums[k + 1]) {
//                     k--;
//                 }
//             }
//         }
//     }

//     return ans;
// };

// 1st test case
// console.log(threeSum([-1,0,1,2,-1,-4]));
// 2nd test case
// console.log(threeSum([0,1,1]));
// 3rd test case
// console.log(threeSum([0,0,0]));

// Activity - 5
// Task - 5
// function groupAnagrams(strs) {
//     const ans = {};

//     for (const s of strs) {
//         const count = new Array(26).fill(0);
//         for (const c of s) {
//             count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
//         }
//         const key = count.join('');
//         if (!ans[key]) {
//             ans[key] = [];
//         }
//         ans[key].push(s);
//     }

//     return Object.values(ans);
// };

// 1st test case
// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
// 2nd test case
// console.log(groupAnagrams([""]));
// 3rd test case
// console.log(groupAnagrams(["a"]));