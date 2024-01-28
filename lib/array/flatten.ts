/**
 * Flattens a nested array.
 * If `isDeep` is `true` the array is recursively flattened.
 * Otherwise it's only flattened a single level.
 * @category Array
 * @param {Array} array The array to flatten
 * @param {boolean} [isDeep] Specify a deep flatten
 * @returns {Array} Returns the new flattened array
 * @example
 *
 * flatten([1, [2, 3, [4]]])
 * // => [1, 2, 3, [4]]]
 *
 * // using `isDeep`
 * flatten([1, [2, 3, [4]]], true)
 * // => [1, 2, 3, 4]
 */

function flatten(array, isDeep) {
    const result = new Array();

    if (!array || (isNaN(isDeep) && array.length == 0)) return result;

    for (const value of array) {
        if (Array.isArray(value)) {
            if (typeof isDeep == 'number' && isDeep > 0) isDeep--;
            if (isDeep) flatten(value, isDeep).forEach(v => result.push(v));
            else value.forEach(v => result.push(v));
        } else result.push(value);
    }

    return result;
}

module.exports = flatten;
