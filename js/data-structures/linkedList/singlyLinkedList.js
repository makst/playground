class Node {
    constructor(item, next) {
        this.item = item;
        this.next = next;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    // O(1)
    addFirst(item) {
        this.head = new Node(item, this.head);
    }

    // O(n) - last element unknown
    addLast(item) {
        if (this.head === null) {
            this.addFirst(item);
        } else {
            let tmp = this.head;
            while (tmp.next !== null) {
                tmp = tmp.next;
            }
            tmp.next = new Node(item, null);
        }
    }

    // O(1)
    removeFirst() {
        if (this.head !== null) {
            this.head = this.head.next;
        }
    }

    // O(n) - last element unknown
    removeLast() {
        if (this.head === null) {
            return;
        }
        let tmp = this.head;
        while (tmp.next !== null && tmp.next.next !== null)  {
            tmp = tmp.next;
        }

        tmp.next = null;
    }

    // O(1)
    getFirst() {
        if (this.head === null) {
            return null;
        }
        return this.head.item;
    }

    // O(n) - last element unknown
    getLast() {
        if (this.head === null) {
            return null;
        }

        let tmp = this.head;
        while (tmp.next !== null) {
            tmp = tmp.next;
        }
        return tmp.item;
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

module.exports = SinglyLinkedList;
