/**
 * Bubble sort
 * -----------------------------------------
 * Time complexity        | Space complexity
 * -----------------------------------------
 * Best | Average | Worst | Worst
 * -----------------------------------------
 * O(n) | O(n^2)  | O(n^2)| O(1)
 * -----------------------------------------
 */
function bubbleSortNaive(list) {
    let swapped = true;

    while (swapped) {
        swapped = false;

        for (let i = 1; i < list.length; i++) {
            if (list[i - 1] > list[i]) {
                let tmp = list[i - 1];
                list[i - 1] = list[i];
                list[i] = tmp;
                swapped = true;
            }
        }
    }
}

function bubbleSortOptimized(list) {
    let swapped = true;
    let n = list.length;
    let newn;

    while (swapped) {
        swapped = false;
        newn = 0;

        for (let i = 1; i < n; i++) {
            if (list[i - 1] > list[i]) {
                let tmp = list[i - 1];
                list[i - 1] = list[i];
                list[i] = tmp;
                /**
                 * https://en.wikipedia.org/wiki/Bubble_sort
                 * It can happen that more than one element is placed in their final position
                 * on a single pass. In particular, after every pass, all elements after the last
                 * swap are sorted, and do not need to be checked again.
                 */
                newn = i;
                swapped = true;
            }
        }

        n = newn;
    }
}

module.exports = {
    bubbleSortNaive,
    bubbleSortOptimized
};
