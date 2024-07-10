// 定义链表节点类
class Node {
  constructor(value) {
    this.value = value; // 节点的值
    this.next = null; // 指向下一个节点的引用
    this.prev = null; // 指向前一个节点的引用
  }
}

// 定义双向链表类
class DoublyLinkedList {
  constructor() {
    this.head = null; // 链表头节点
    this.tail = null; // 链表尾节点
  }

  // 在链表末尾添加节点
  append(value) {
    const newNode = new Node(value);
    if (!this.tail) {
      this.head = this.tail = newNode;
      return;
    }
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }

  // 在链表头部添加节点
  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = this.tail = newNode;
      return;
    }
    this.head.prev = newNode;
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
    console.log(result.join(' <-> '));
  }

  // 从链表中删除指定值的节点
  delete(value) {
    if (!this.head) return;

    if (this.head.value === value) {
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
      return;
    }

    let current = this.head;
    while (current && current.value !== value) {
      current = current.next;
    }

    if (current) {
      if (current.next) {
        current.next.prev = current.prev;
      } else {
        this.tail = current.prev;
      }

      if (current.prev) {
        current.prev.next = current.next;
      }
    }
  }
}

// 使用双向链表
const list = new DoublyLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
list.printList(); // 输出: 0 <-> 1 <-> 2 <-> 3
list.delete(2);
list.printList(); // 输出: 0 <-> 1 <-> 3
list.delete(0);
list.printList(); // 输出: 1 <-> 3
