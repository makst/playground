function binarySearch(list, value) {
    let min = 0;
    let max = list.length;
    let middle;

    while (min <= max) {
        middle = Math.floor((min + max) / 2);
        if (list[middle] === value) {
            return middle;
        } else {
            list[middle] < value ? min = middle : max = middle;
        }
    }
    return -1;
}

module.exports = binarySearch;
