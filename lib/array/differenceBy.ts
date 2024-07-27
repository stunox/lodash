/**
 * This method is like _.difference except that it accepts iteratee
 * which is invoked for each element of array and values to generate the criterion by which they're compared.
 * The order and references of result values are determined by the first array.
 * The iteratee is invoked with one argument:
 * (value).
 * The order and references of result values are determined by the first array.
 * @category Array
 * @param {Array} array The array to inspect
 * @param {Array} [values] The values to exclude
 * @param {Function} [iteratee]
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
 * // => [1.2]
 */
function differenceBy(array, values = [], iteratee) {
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
            if (iteratee(value) === iteratee(v)) {
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

module.exports = differenceBy;
