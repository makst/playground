class Node {
    constructor(item, next, prev) {
        this.item = item;
        this.next = next;
        this.prev = prev;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    enqueue(item) {
        const oldTail = this.tail;
        this.tail = new Node(item, null, oldTail);

        if (oldTail !== null) {
            oldTail.next = this.tail;
        }

        if (this.head === null) {
            this.head = this.tail;
        }
    }

    dequeue() {
        let result = null;

        if (this.head !== null) {
            result = this.head.item;
            this.head = this.head.next;
            if (this.head !== null) {
                this.head.prev = null;
            }
        }

        return result;
    }

    isEmpty() {
        return this.head === null;
    }
}

module.exports = Queue;
