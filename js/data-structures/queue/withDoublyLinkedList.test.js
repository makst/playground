const test = require('tape');
const Queue = require('./withDoublyLinkedList');

test('.constructor() creates an empty queue', (t) => {
    const queue = new Queue();

    t.true(queue.isEmpty());
    t.end();
});

test('.enqueue() adds item', (t) => {
    const queue = new Queue();
    queue.enqueue(20);
    queue.enqueue(21);

    t.equal(queue.head.item, 20);
    t.equal(queue.tail.item, 21);
    t.end();
});

test('.dequeue() returns first added item', (t) => {
    const queue = new Queue();
    queue.enqueue(20);
    queue.enqueue(21);

    t.equal(queue.dequeue(), 20);
    t.equal(queue.dequeue(), 21);
    t.end();
});

test('isEmpty() true when no elements', (t) => {
    const queue = new Queue();

    t.true(queue.isEmpty());
    t.end();
});

test('isEmpty() true when all enqueued elements are dequeued', (t) => {
    const queue = new Queue();
    queue.enqueue(20);
    queue.enqueue(21);
    queue.dequeue();
    queue.dequeue();

    t.true(queue.isEmpty());
    t.end();
});

test('isEmpty() false when elements are there', (t) => {
    const queue = new Queue();
    queue.enqueue(20);
    queue.enqueue(21);

    t.false(queue.isEmpty());
    t.end();
});
