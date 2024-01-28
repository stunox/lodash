/**
 * Creates an array with all falsey values removed.
 * The values false, null, 0, "", undefined, and NaN are falsey.
 * @category Array
 * @param {Array} array The array to compact.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * compact([0, 1, false, 2, '', 3]);
 * // => [1, 2, 3]
 */
function compact(array) {
    const result = new Array();
    let index = 0;

    if (!array) return result;

    for (const value of array) {
        if (value) result[index++] = value;
    }

    return result;
}

module.exports = compact;
