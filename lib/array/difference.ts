/**
 * Creates an array of array values not included in the other given arrays
 * using SameValueZero for equality comparisons.
 * The order and references of result values are determined by the first array.
 * @category Array
 * @param {Array} array The array to inspect
 * @param {Array} [values] The values to exclude
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * difference([2, 1], [2, 3])
 * // => [1]
 */
function difference(array, values) {
    const result = new Array();
    let index = 0;
    let resIndex = 0;
    const length = array.length;

    if (length == 0) return result;
    if (values == null || values.length == 0) return array;

    while (index < length) {
        const value = array[index++];
        let isExclude = false;

        for (const v of values) {
            if (value === v) {
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

module.exports = difference;
