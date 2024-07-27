/**
 * Creates a slice of `array` from `start` up to, but not including, `end`.
 * @category Array
 * @param {Array} array The array to slice
 * @param {Number} [start=0] The start position
 * @param {Number} [end=array.length] The end position
 * @returns {Array} Returns the slice of `array`
 * @example
 *
 * slice([1, 2, 3], 1, 2);
 * // => [2]
 */

function slice(array, start = 0, end = array.length) {
    const result = new Array(end - start);
    let resIndex = 0;
    let index = start;

    if (start == 0 && end == array.length) return Array.from(array);

    while (index < end) {
        result[resIndex++] = array[index++];
    }

    return result;
}

module.exports = slice;
