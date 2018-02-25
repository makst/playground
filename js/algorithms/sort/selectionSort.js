/**
 * Selection sort
 * -------------------------------------------
 * Time complexity          | Space complexity
 * -------------------------------------------
 * Best   | Average | Worst | Worst
 * -------------------------------------------
 * O(n^2) | O(n^2)  | O(n^2)| O(1)
 * -------------------------------------------
 */
function selectionSort(list) {
    for (let i = 0; i < list.length; i++) {
        let minIndex = i;

        for (let j = i + 1; j < list.length; j++) {
            if (list[j] < list[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex != i) {
            let tmp = list[i];
            list[i] = list[minIndex];
            list[minIndex] = tmp;
        }
    }
}

module.exports = selectionSort;
