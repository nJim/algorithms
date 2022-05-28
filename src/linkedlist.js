class LLNode {
  constructor(data, next = null) {
    this.value = data;
    this.next = next;
  }
}

// Many of these method names align with Java.
// https://www.geeksforgeeks.org/linked-list-in-java/
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
   addLast(data) {
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

  /**
   * Adds a node to the linked list at a specific position by index.
   *
   * @param {number} index The position of the new node.
   * @param {string|number} data A value to store in the new node.
   * @return {LLNode} The head of the linked list.
   */
  add(index, data) {
    // If the index is zero then use the addFirst method.
    if (index === 0) {
      this.addFirst(data)
      return this.head;
    }

    let newNode = new LLNode(data);
    let current = this.head;
    // Iterate through the linked list to arrive at the insertion point.
    for (let i = 0; i < index - 1; i++) {
      if (current.next == null) {
        // Throw an error if the provided index is larger than the linked list.
        throw 'Error: Provided index is too large for linked list.';
      }
      current = current.next;
    }
    // Connect the rest of the linked list to the new node.
    newNode.next = current.next
    // Connect new node to the previous part of the linked list.
    current.next = newNode;
    return this.head;
  }

  /**
   * Gets the value of the first node in the linked list.
   *
   * @return {LLNode} The head node of the linked list.
   */
  getFirst() {
    if (this.head == null) {
      // Throw an error if the linked list does not contain any nodes.
      throw 'Error: The linked list does not contain any nodes.';
    }
    return this.head;
  }

  /**
   * Gets the value of the last node in the linked list.
   *
   * @return {LLNode} The tail node of the linked list.
   */
  getLast() {
    if (this.head == null) {
      // Throw an error if the linked list does not contain any nodes.
      throw 'Error: The linked list does not contain any nodes.';
    }
    let current = this.head;
    while(current.next !== null) {
      current = current.next;
    }
    return current;
  }

  /**
   * Adds a node to the linked list at a specific position by index.
   *
   * @param {number} index A value to store in the new node.
   * @return {LLNode} The given node of the linked list.
   */
  get(index) {
    if (this.head == null) {
      // Throw an error if the linked list does not contain any nodes.
      throw 'Error: The linked list does not contain any nodes.';
    }
    let current = this.head;
    for (let i=0; i < index; i++) {
      if (current.next == null) {
        // Throw an error if trying to get a value from an invalid index.
        throw 'Error: A node does not exist at the given index.';
      }
      current = current.next;
    }
    return current;
  }

  /**
   * Delete all nodes from the linked list.
   *
   * @return {null} The value of the linked list head.
   */
  clear() {
    if (this.head == null) {
      // Exit early if the linked list is already empty.
      return this.head;
    }
    let current = this.head;
    while(current.next !== null) {
      let temp = current.next;
      current.value = undefined;
      current.next = undefined;
      delete current.value;
      delete current.next;
      current = temp;
    }
    this.head = null;
    return this.head;
  }
}
