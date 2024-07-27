/**
 * Gets the first element of `array`.
 * @category Array
 * @param {Array} array The array to query
 * @returns {*} Returns the first element of `array`
 * @example
 *
 * first([1, 2, 3])
 * // => 1
 *
 * first([])
 * // => undefined
 */

function first(array) {
    if (!array || array.length == 0) return;

    return array[0];
}

module.exports = first;
