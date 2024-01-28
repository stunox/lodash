/**
 * Creates a slice of array with n elements dropped from the beginning.
 * @category Array
 * @param {Array} array The array to query
 * @param {Number} [n=1] The number of elements to drop
 * @returns {Array} Returns the slice of array
 * @example
 *
 * drop([1, 2, 3]);
 * // => [2, 3]
 *
 * drop([1, 2, 3], 2);
 * // => [3]
 *
 * drop([1, 2, 3], 5);
 * // => []
 *
 * drop([1, 2, 3], 0);
 * // => [1, 2, 3]
 */

function drop(array, n = 1) {
    const length = array.length;

    if (length < 1) return [];

    const result = new Array(length);
    let resIndex = 0;
    let index = n;

    while (index < length) {
        result[resIndex++] = array[index++];
    }

    return result;
}

module.exports = drop;
