/**
 * Creates a slice of array excluding elements dropped from the beginning.
 * Elements are dropped until predicate returns falsey.
 * The predicate is invoked with three arguments: (value, index, array).
 * @category Array
 * @param {Array} array The array to query
 * @param {Function} predicate The function invoked per iteration
 * @returns {Array} Returns the slice of array
 * @example
 *
 * const users = [
 *  { 'user': 'barney', 'active': false },
 *  { 'user': 'fred',   'active': false },
 *  { 'user': 'pebbles', 'active': true }
 * ]
 *
 * dropWhile(users, ({ active }) => !active);
 * // => objects for ['pebbles']
 */
function dropWhile(array, predicate) {
    const length = array.length;

    if (length < 1) return [];

    const result = Array.from(array);
    let index = 0;
    let slice = false;

    while (!slice) {
        if (!predicate(array[index++])) {
            slice = true;
        }
    }

    return result.slice(index - 1, length);
}

module.exports = dropWhile;
