/** Node: node for a singly linked list. */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */
class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */
  push(val) {
    const newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  /** unshift(val): add new value to start of list. */
  unshift(val) {
    const newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  /** pop(): return & remove last item. */
  pop() {
    if (this.head === null) {
      throw new Error('List is empty.');
    }

    let currentNode = this.head;
    let previousNode = null;

    while (currentNode.next !== null) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    const poppedValue = currentNode.val;

    if (previousNode === null) {
      this.head = null;
      this.tail = null;
    } else {
      previousNode.next = null;
      this.tail = previousNode;
    }

    this.length--;
    return poppedValue;
  }

  /** shift(): return & remove first item. */
  shift() {
    if (this.head === null) {
      throw new Error('List is empty.');
    }

    const shiftedValue = this.head.val;
    this.head = this.head.next;

    if (this.head === null) {
      this.tail = null;
    }

    this.length--;
    return shiftedValue;
  }

  /** getAt(idx): get val at idx. */
  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error('Invalid index.');
    }

    let count = 0;
    let currentNode = this.head;

    while (count !== idx) {
      currentNode = currentNode.next;
      count++;
    }

    return currentNode.val;
  }

  /** setAt(idx, val): set val at idx to val */
  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      throw new Error('Invalid index.');
    }

    let count = 0;
    let currentNode = this.head;

    while (count !== idx) {
      currentNode = currentNode.next;
      count++;
    }

    currentNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */
  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) {
      throw new Error('Invalid index.');
    }

    if (idx === 0) {
      this.unshift(val);
      return;
    }

    if (idx === this.length) {
      this.push(val);
      return;
    }

    let count = 0;
    let currentNode = this.head;
    let previousNode = null;

    while (count !== idx) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      count++;
    }

    const newNode = new Node(val);
    newNode.next = currentNode;
    previousNode.next = newNode;

    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */
  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error('Invalid index.');
    }

    if (idx === 0) {
      return this.shift();
    }

    if (idx === this.length - 1) {
      return this.pop();
    }

    let count = 0;
    let currentNode = this.head;
    let previousNode = null;

    while (count !== idx) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      count++;
    }

    previousNode.next = currentNode.next;
    this.length--;

    return currentNode.val;
  }

  /** average(): return an average of all values in the list */
  average() {
    if (this.head === null) {
      return 0;
    }

    let sum = 0;
    let currentNode = this.head;

    while (currentNode !== null) {
      sum += currentNode.val;
      currentNode = currentNode.next;
    }

    return sum / this.length;
  }
}

module.exports = LinkedList;
