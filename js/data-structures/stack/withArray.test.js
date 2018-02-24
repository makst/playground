const test = require('tape');
const Stack = require('./withArray');

test('.constructor() creates stack with size', (t) => {
    const stack = new Stack(10);
    t.equal(stack.maxSize, 10);
    t.end();
});

test('.push() updates underlying array', (t) => {
    const stack = new Stack(10);
    stack.push(20);
    stack.push(21);
    t.equal(stack._store[0], 20);
    t.equal(stack._store[1], 21);
    t.end();
});

test('.push() updates top pointer', (t) => {
    const stack = new Stack(10);
    stack.push(20);
    stack.push(21);
    t.equal(stack._top, 1);
    t.end();
});

test('.pop() returns last added elements', (t) => {
    const stack = new Stack(10);
    stack.push(20);
    stack.push(21);
    t.equal(stack.pop(), 21);
    t.equal(stack.pop(), 20);
    t.end();
});

test('.pop() updates top pointer', (t) => {
    const stack = new Stack(10);
    stack.push(20);
    stack.push(21);
    stack.push(22);
    stack.push(23);
    stack.pop();
    t.equal(stack._top, 2);
    t.end();
});

test('.push() does not add item after max size is reached', (t) => {
    const stack = new Stack(2);
    stack.push(20);
    stack.push(21);
    stack.push(22);
    stack.push(22);
    t.equal(stack._store.length, 2);
    t.equal(stack._top, 1);
    t.end();
});

test('isEmpty() true when no elements', (t) => {
    const stack = new Stack(2);
    t.true(stack.isEmpty());
    t.end();
});

test('isEmpty() true when all pushed elements are popped', (t) => {
    const stack = new Stack(2);
    stack.push(20);
    stack.push(21);
    stack.pop();
    stack.pop();
    t.true(stack.isEmpty());
    t.end();
});

test('isEmpty() false when elements are there', (t) => {
    const stack = new Stack(2);
    stack.push(20);
    stack.push(21);
    t.false(stack.isEmpty());
    t.end();
});
