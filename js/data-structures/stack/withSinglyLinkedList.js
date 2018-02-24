class Node {
    constructor(item, next) {
        this.item = item;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.head = null;
    }

    push(item) {
        this.head = new Node(item, this.head);
    }

    pop() {
        let result = null;
        if (this.head !== null) {
            result = this.head.item;
            this.head = this.head.next;
        }
        return result;
    }

    isEmpty() {
        return this.head === null;
    }
}

module.exports = Stack;
