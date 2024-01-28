/**
 * Creates a slice of array excluding elements dropped from the end.
 * Elements are dropped until predicate returns falsey.
 * The predicate is invoked with three arguments: (value, index, array).
 * @category Array
 * @param {Array} array The array to query
 * @param {Function} predicate The function invoked per iteration
 * @returns {Array} Returns the slice of array
 * @example
 *
 * const users = [
 *    { user: 'barney', active: true },
 *    { user: 'fred', active: false },
 *   { user: 'pebbles', active: false }
 * ]
 *
 * dropRightWhile(users, ({ active }) => !active);
 * // => objects for ['barney']
 */
function dropRightWhile(array, predicate) {
    const length = array.length;

    if (length < 1) return [];

    const result = Array.from(array);
    let index = length - 1;
    let slice = false;

    while (!slice) {
        if (!predicate(array[index--])) {
            slice = true;
        }
    }

    return result.slice(0, index - 1);
}

module.exports = dropRightWhile;
