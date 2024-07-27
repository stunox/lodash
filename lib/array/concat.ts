/**
 * Creates a new array concatenating array with any additional arrays and/or values.
 * @category Array
 * @param {Array} array The array to concatenate
 * @param {Array} values The values to concatenate
 * @returns {Array} Returns the concatenated array.
 * @example
 *
 * var array = [1]
 * concat(array, 2, [3], [[4]])
 * // => [1, 2, 3, [4]]
 */
function concat(array, ...values) {
    const result = Array.isArray(array) ? Array.from(array) : [array];

    if (values == null || values.length == 0) return result;

    for (const value of values) {
        if (Array.isArray(value)) {
            value.forEach(v => {
                result.push(v);
            });
        } else result.push(value);
    }

    return result;
}

module.exports = concat;
