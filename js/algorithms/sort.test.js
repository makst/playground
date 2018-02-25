const test = require('tape');
const bubbleSort = require('./sort/bubbleSort');
const bubbleSortNaive = bubbleSort.bubbleSortNaive;
const bubbleSortOptimized = bubbleSort.bubbleSortOptimized;


function sortWithInPlaceAlgo(algo, list) {
    let listCopy = list.map((i) => i);
    algo(listCopy);
    return listCopy;
}

test('sorts [9, 3, 5, 10, 100, 23]', (t) => {
    const unsorted = [9, 10, 100, 23, 5, 3];
    const sorted = [3, 5, 9, 10, 23, 100];

    t.deepEqual(sortWithInPlaceAlgo(bubbleSortNaive, unsorted), sorted);
    t.deepEqual(sortWithInPlaceAlgo(bubbleSortOptimized, unsorted), sorted);
    t.end();
});
