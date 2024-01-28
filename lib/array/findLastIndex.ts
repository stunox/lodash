/**
 * This method is like `findIndex` except that it iterates over elements of `collection` from right to left.
 * @category Array
 * @param {Array} array The array to inspect
 * @param {Function|Object|string} predicate The function invoked per iteration
 * @param {number} [fromIndex=array.length-1] The index to search from
 * @returns {number} Returns the index of the found element, else `-1`
 * @example
 *
 * findLastIndex([1, 2, 3, 4], n => n % 2 === 1)
 * // => 2
 *
 * findLastIndex([1, 2, 3, 4], n => n === 5)
 * // => -1
 *
 * findLastIndex([1, 2, 3, 4], n => n === 2, 2)
 * // => 1
 *
 * findLastIndex([1, 2, 3, 4], n => n === 2, 0)
 * // => -1
 */

function findLastIndex(array, predicate, thisArg) {
    let lastIndex = -1;

    if (!array || array.length == 0) return lastIndex;

    for (let i = array.length - 1; i >= 0; i--) {
        if (predicate.call(thisArg, array[i], i, array)) {
            lastIndex = i;
            break;
        }
    }

    return lastIndex;
}

module.exports = findLastIndex;
