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
 * Top-down implementation
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
    const B = list.slice(middle);

    return merge(mergeSortTopDown(left), mergeSortTopDown(B));
}

/**
 * Bottom-up implementation
 *
 * doesn't use recursion. It directly starts at the bottom of the tree
 * and proceeds upwards by iterating over the pieces and merging them.
 */

function mergeSortBottomUp(list) {
    if (list.length <= 1) {
        return list;
    }

    const result = [];
    list.map((i) => result.push([i]));

    while (result.length !== 1) {
        const A = result.shift();
        const B = result.shift();
        result.push(merge(A, B));
    }

    return result[0];
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
    mergeSortBottomUp
}
