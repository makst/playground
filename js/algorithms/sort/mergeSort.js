/**
 * Merge sort
 * ----------------------------------------------------------
 * Time complexity                         | Space complexity
 * ----------------------------------------------------------
 * Best        | Average      | Worst      | Worst
 * ----------------------------------------------------------
 * O(n log(n)) | O(n log(n))  | O(n log(n))| O(n)
 * ----------------------------------------------------------
 */

/**
 * https://www.quora.com/What-is-the-difference-between-top-down-merge-sort-and-bottom-up-merge-sort
 *
 *  Top-down implementation
 *
 * is the implementation that uses recursion.
 * It starts at the top of the tree and proceeds downwards
 */
function mergeSortTopDown(list) {
    if (list.length <= 1) {
        return list;
    }

    const middle = list.length / 2;
    const left = list.slice(0, middle);
    const right = list.slice(middle);

    return merge(mergeSortTopDown(left), mergeSortTopDown(right));
}

function merge(left, right) {
    const result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    // something might be left in any of the lists
    // only one of 2 loops will be entered
    while (left.length) {
        result.push(left.shift());
    }
    while(right.length) {
        result.push(right.shift());
    }

    return result;
}

module.exports = {
    mergeSortTopDown,
}
