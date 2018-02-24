const test = require('tape');
const SinglyLinkedList = require('./singlyLinkedList');

test('.constructor() creates linked list with size 0', (t) => {
    const linkedList = new SinglyLinkedList();
    t.equal(linkedList.size(), 0);
    t.equal(linkedList.head, null);
    t.end();
});

test('.addFirst() updates head', (t) => {
    const linkedList = new SinglyLinkedList();
    linkedList.addFirst(20);

    t.equal(linkedList.size(), 1);
    t.equal(linkedList.head.item, 20);
    t.end();
});

test('.addLast() adds an item to the end', (t) => {
    const linkedList = new SinglyLinkedList();
    linkedList.addLast(20);
    linkedList.addLast(21);

    t.equal(linkedList.size(), 2);
    t.equal(linkedList.head.item, 20);
    t.equal(linkedList.head.next.item, 21);
    t.equal(linkedList.head.next.next, null);
    t.end();
});

test('.getFirst() gets first item', (t) => {
    const linkedList = new SinglyLinkedList();
    linkedList.addLast(20);
    linkedList.addLast(21);

    t.equal(linkedList.size(), 2);
    t.equal(linkedList.getFirst(), 20);
    t.end();
});

test('.getLast() gets last item', (t) => {
    const linkedList = new SinglyLinkedList();
    linkedList.addLast(20);
    linkedList.addLast(21);
    linkedList.addLast(22);

    t.equal(linkedList.size(), 3);
    t.equal(linkedList.getLast(), 22);
    t.end();
});

test('.removeFirst() removes first item', (t) => {
    const linkedList = new SinglyLinkedList();
    linkedList.addLast(20);
    linkedList.addLast(21);
    linkedList.addLast(22);
    linkedList.removeFirst();

    t.equal(linkedList.size(), 2);
    t.equal(linkedList.getFirst(), 21);
    t.end();
});

test('.removeLast() removes last item', (t) => {
    const linkedList = new SinglyLinkedList();
    linkedList.addLast(20);
    linkedList.addLast(21);
    linkedList.addLast(22);
    linkedList.removeLast();

    t.equal(linkedList.size(), 2);
    t.equal(linkedList.getLast(), 21);
    t.end();
});

test('.toArray() returns items in an array', (t) => {
    const linkedList = new SinglyLinkedList();
    linkedList.addLast(20);
    linkedList.addLast(21);
    linkedList.addLast(22);
    linkedList.addLast(23);
    linkedList.addLast(24);
    linkedList.addLast(25);

    linkedList.removeLast();
    linkedList.removeFirst();

    t.deepEqual(linkedList.toArray(), [21, 22, 23, 24]);
    t.end();
});

test('.insertAfter() inserts an item in between others', (t) => {
    const linkedList = new SinglyLinkedList();
    linkedList.addLast(20);
    linkedList.addLast(22);
    linkedList.addLast(23);
    linkedList.insertAfter(20, 21);
    linkedList.removeFirst();

    t.equal(linkedList.size(), 3);
    t.equal(linkedList.getFirst(), 21);
    t.end();
});

test('.removeAfter() removes an item in between others', (t) => {
    const linkedList = new SinglyLinkedList();
    linkedList.addLast(20);
    linkedList.addLast(21);
    linkedList.addLast(22);
    linkedList.addLast(23);

    linkedList.removeAfter(20);

    t.equal(linkedList.size(), 3);
    t.deepEqual(linkedList.toArray(), [20, 22, 23]);
    t.end();
});

test('.size() returns correct size', (t) => {
    const linkedList = new SinglyLinkedList();
    linkedList.addLast(20);
    linkedList.addLast(21);
    linkedList.addLast(22);
    linkedList.addFirst(19);
    linkedList.addFirst(18);

    t.equal(linkedList.size(), 5);
    t.deepEqual(linkedList.toArray(), [18, 19, 20, 21, 22]);
    t.end();
});
