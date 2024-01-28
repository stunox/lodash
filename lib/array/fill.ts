/**
 * Fills elements of array with value from start up to, but not including, end.
 * @category Array
 * @param {Array} array The array to fill
 * @param {*} value The value to fill array with
 * @param {Number} [start=0] The start position
 * @param {Number} [end=array.length] The end position
 * @returns {Array} Returns `array`
 * @example
 *
 * fill([1, 2, 3], 'a');
 * // => ['a', 'a', 'a']
 *
 * fill(Array(3), 2);
 * // => [2, 2, 2]
 *
 * fill([4, 6, 8], '*', 1, 2);
 * // => [4, '*', '8']
 */

function fill(array, value = undefined, start = 0, end = array.length) {
    const result = Array.from(array);
    let index = start ? start : 0;

    while (index < end) {
        result[index++] = value;
    }

    return result;
}

module.exports = fill;
