/**
 
给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。


解题思路：
1. 反转两个节点：将 n + 1 的 next 指向 n
2. 反转多个节点：双指针遍历链表，重复上述操作
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let p1 = head;
  let p2 = null;
  while (p1) {
    const temp = p1.next;
    p1.next = p2;
    p2 = p1;
    p1 = temp;
  }
  return p2;
};
