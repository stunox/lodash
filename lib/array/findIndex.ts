/**
 * This method is like `find` except that it returns the index of the first element `predicate`
 * returns truthy for instead of the element itself.
 * @category Array
 * @param {Array} array The array to inspect
 * @param {Function|Object|string} predicate The function invoked per iteration
 * @returns {Number} Returns the index of the found element, else `-1`
 * @example
 *
 * const users = [
 *  { 'user': 'barney',  'active': false },
 *  { 'user': 'fred',    'active': false },
 *  { 'user': 'pebbles', 'active': true }
 * ]
 *
 * findIndex(users, function(chr) {
 * return chr.user == 'barney';
 * });
 * // => 0
 */
function findIndex(array, predicate) {
    let index = 0;
    let found = false;

    while (index < array.length) {
        if (predicate(array[index++])) {
            found = true;
            break;
        }
    }

    return found ? index - 1 : -1;
}

module.exports = findIndex;
