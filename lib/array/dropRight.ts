/**
 * Creates a slice of array with n elements dropped from the end.
 * @category Array
 * @param {Array} array The array to query
 * @param {Number} [n=1] The number of elements to drop
 * @returns {Array} Returns the slice of array
 * @example
 *
 * dropRight([1, 2, 3]);
 * // => [1, 2]
 *
 * dropRight([1, 2, 3], 2);
 * // => [1]
 *
 * dropRight([1, 2, 3], 5);
 * // => []
 *
 * dropRight([1, 2, 3], 0);
 * // => [1, 2, 3]
 */

function dropRight(array, n = 1) {
    const length = array.length;

    if (length < 1) return [];

    const result = new Array(length);
    let resIndex = 0;
    let index = 0;

    while (index < length - n) {
        result[resIndex++] = array[index++];
    }

    return result;
}

module.exports = dropRight;
