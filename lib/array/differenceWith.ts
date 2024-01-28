/**
 * This method is like _.difference except that it accepts comparator which is invoked to compare elements of array to values.
 * The order and references of result values are determined by the first array.
 * The comparator is invoked with two arguments: (arrVal, othVal).
 * @category Array
 * @param {Array} array The array to inspect
 * @param {Array} [values] The values to exclude
 * @param {Function} [comparator]
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
 *
 * differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
 * // => [{ 'x': 2, 'y': 1 }]
 */
function differenceWith(array, values = [], comparator) {
    const result = new Array();
    let index = 0;
    let resIndex = 0;
    const length = array.length;

    if (length == 0) return result;
    if (values.length == 0) return array;

    while (index < length) {
        const value = array[index++];
        let isExclude = false;

        for (const v of values) {
            if (comparator(value, v)) {
                isExclude = true;
                break;
            }
        }

        if (!isExclude) {
            result[resIndex++] = value;
        }
    }

    return result;
}

module.exports = differenceWith;
