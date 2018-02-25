const test = require('tape');
const bubbleSort = require('./sort/bubbleSort');
const mergeSort = require('./sort/mergeSort');
const selectionSort = require('./sort/selectionSort');

const bubbleSortNaive = bubbleSort.bubbleSortNaive;
const bubbleSortOptimized = bubbleSort.bubbleSortOptimized;
const mergeSortTopDown = mergeSort.mergeSortTopDown;
const mergeSortBottomUp = mergeSort.mergeSortBottomUp;

function sortWithInPlaceAlgo(algo, list) {
    let listCopy = list.map((i) => i);
    algo(listCopy);
    return listCopy;
}

test('sorts [9, 10, 100, 23, 5, 3]', (t) => {
    const unsorted = [9, 10, 100, 23, 5, 3];
    const sorted = [3, 5, 9, 10, 23, 100];

    t.deepEqual(sortWithInPlaceAlgo(bubbleSortNaive, unsorted), sorted);
    t.deepEqual(sortWithInPlaceAlgo(bubbleSortOptimized, unsorted), sorted);
    t.deepEqual(sortWithInPlaceAlgo(selectionSort, unsorted), sorted);
    t.deepEqual(mergeSortTopDown(unsorted), sorted);
    t.deepEqual(mergeSortBottomUp(unsorted), sorted);
    t.end();
});

test('sorts [9, 10, 100, 23, 5, 3, 55]', (t) => {
    const unsorted = [9, 10, 100, 23, 5, 3, 55];
    const sorted = [3, 5, 9, 10, 23, 55, 100];

    t.deepEqual(sortWithInPlaceAlgo(bubbleSortNaive, unsorted), sorted);
    t.deepEqual(sortWithInPlaceAlgo(bubbleSortOptimized, unsorted), sorted);
    t.deepEqual(sortWithInPlaceAlgo(selectionSort, unsorted), sorted);
    t.deepEqual(mergeSortTopDown(unsorted), sorted);
    t.deepEqual(mergeSortBottomUp(unsorted), sorted);
    t.end();
});
