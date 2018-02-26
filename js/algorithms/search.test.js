const test = require('tape');
const binarySearch = require('./search/binarySearch');

test('searches 5 in [3, 5, 9, 10, 23, 100]', (t) => {
    const sorted = [3, 5, 9, 10, 23, 100];
    const lookFor = 5;
    const index = 1;

    t.equal(binarySearch(sorted, lookFor), index);
    t.end();
});

test('searches 9 in [3, 5, 9, 10, 23, 55, 100]', (t) => {
    const sorted = [3, 5, 9, 10, 23, 55, 100];
    const lookFor = 9;
    const index = 2;

    t.equal(binarySearch(sorted, lookFor), index);
    t.end();
});

test('searches 33 in [3, 5, 9, 10, 23, 100]', (t) => {
    const sorted = [3, 5, 9, 10, 23, 100];
    const lookFor = 33;
    const index = -1;

    t.equal(binarySearch(sorted, lookFor), index);
    t.end();
});
