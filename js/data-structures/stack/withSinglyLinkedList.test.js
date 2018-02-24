const test = require('tape');
const Stack = require('./withSinglyLinkedList');

test('.constructor() creates an empty stack', (t) => {
    const stack = new Stack();

    t.true(stack.isEmpty());
    t.end();
});

test('.push() adds item', (t) => {
    const stack = new Stack();
    stack.push(20);

    t.equal(stack.head.item, 20);
    t.end();
});

test('.pop() returns last added item', (t) => {
    const stack = new Stack();
    stack.push(20);
    stack.push(21);

    t.equal(stack.pop(), 21);
    t.equal(stack.pop(), 20);
    t.end();
});

test('isEmpty() true when no elements', (t) => {
    const stack = new Stack();
    t.true(stack.isEmpty());
    t.end();
});

test('isEmpty() true when all pushed elements are popped', (t) => {
    const stack = new Stack();
    stack.push(20);
    stack.push(21);
    stack.pop();
    stack.pop();

    t.true(stack.isEmpty());
    t.end();
});

test('isEmpty() false when elements are there', (t) => {
    const stack = new Stack();
    stack.push(20);
    stack.push(21);

    t.false(stack.isEmpty());
    t.end();
});
