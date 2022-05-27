class LLNode {
  constructor(data, next = null) {
    this.value = data;
    this.next = next;
  }
}

export class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  /**
   * Adds a node to the end of the linked list.
   *
   * @param {string|number} data A value to store in the new node.
   * @return {LLNode} The head of the linked list.
   */
  addFirst(data) {
    let newNode = new LLNode(data);
    // If the list is empty, then the first node is the head.
    if(!this.head) {
      this.head = newNode;
      return this.head;
    }
    // Otherwise move point the new node to the current head and made the new
    // node the new head.
    newNode.next = this.head;
    this.head = newNode
    return this.head
  }

  /**
   * Adds a node to the end of the linked list.
   *
   * @param {string|number} data A value to store in the new node.
   * @return {LLNode} The head of the linked list.
   */
  push(data) {
    let newNode = new LLNode(data);
    // If the list is empty, then the first node is the head.
    if(!this.head) {
      this.head = newNode;
      return this.head;
    }
    // Otherwise traverse the list until reaching the end.
    let current = this.head;
    while(current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
    return this.head
  }
}
