class Node {
    constructor(item, next, prev) {
        this.item = item;
        this.prev = prev;
        this.next = next;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // O(1)
    addFirst(item) {
        let oldHead = this.head;
        this.head = new Node(item, oldHead, null);

        if (oldHead !== null) {
            oldHead.prev = this.head;
        }
        if (this.tail === null) {
            this.tail = this.head;
        }
    }

    // O(1) [better than singly linked list]
    addLast(item) {
        let oldTail = this.tail;
        this.tail = new Node(item, null, oldTail);

        if (oldTail !== null) {
            oldTail.next = this.tail;
        }
        if (this.head === null) {
            this.head = this.tail;
        }
    }

    // O(1)
    removeFirst() {
        if (this.head !== null) {
            this.head = this.head.next;
            if (this.head !== null) {
                this.head.prev = null;
            }
        }
    }

    // O(1) [better than singly linked list]
    removeLast() {
        if (this.tail !== null) {
            this.tail = this.tail.prev;
            if (this.tail !== null) {
                this.tail.next = null;
            }
        }
    }

    // O(1)
    getFirst() {
        if (this.head === null) {
            return null;
        }
        return this.head.item;
    }

     // O(1)
     getLast() {
        if (this.tail === null) {
            return null;
        }
        return this.tail.item;
    }

    // O(n) - finding the point of insertion
    // O(1) - performing insertion
    insertAfter(itemToFind, newItem) {
        let tmp = this.head;
        while (tmp.item !== itemToFind) {
            tmp = tmp.next;
        }
        if (tmp !== null) {
            const oldNext = tmp.next;
            tmp.next = new Node(newItem, oldNext);
        }
    }

    // O(n) - finding the point of removal
    // O(1) - performing removal
    removeAfter(itemToFind) {
        let tmp = this.head;
        while (tmp.item !== itemToFind) {
            tmp = tmp.next;
        }
        if (tmp !== null) {
            let nextOfNext = null;
            if (tmp.next !== null) {
                nextOfNext = tmp.next.next;
            }
            tmp.next = nextOfNext;
        }
    }

    // O(n)
    size() {
        let result = 0;
        let tmp = this.head;
        while (tmp !== null) {
            result++;
            tmp = tmp.next;
        }
        return result;
    }

    // O(n)
    toArray() {
        let result = [];
        let tmp = this.head;
        while (tmp !== null) {
            result.push(tmp.item);
            tmp = tmp.next;
        }
        return result;
    }
}

module.exports = DoublyLinkedList;
