// 定义链表节点类
class Node {
  constructor(value) {
    this.value = value; // 节点的值
    this.next = null; // 指向下一个节点的引用
  }
}

// 定义链表类
class LinkedList {
  constructor() {
    this.head = null; // 链表头节点
  }

  // 在链表末尾添加节点
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // 在链表头部添加节点
  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
  }

  // 打印链表
  printList() {
    let current = this.head;
    const result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(' -> '));
  }

  // 删除链表中指定值的节点
  delete(value) {
    if (!this.head) return;

    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    }
  }
}

// 使用链表
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
list.printList(); // 输出: 0 -> 1 -> 2 -> 3
list.delete(2);
list.printList(); // 输出: 0 -> 1 -> 3
