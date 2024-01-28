/**
 * Creates an array of elements split into groups the length of size.
 * If array can't be split evenly, the final chunk will be the remaining elements.
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * chunk([1, 2, 3, 4, 5, 6, 7, 8], 3);
 * // => [[1, 2, 3], [4, 5, 6], [7, 8]]
 *
 * chunk([1, 2, 3, 4, 5, 6, 7, 8], 2);
 * // => [[1, 2], [3, 4], [5, 6], [7, 8]]
 */
function chunk(array, size = 1) {
    size = Math.max(Math.floor(size), 0);

    const length = array == null || array.length < 0 ? 0 : array.length;

    if (!length || size < 1) return [];

    let i = 0;
    let resIndex = 0;
    const result = new Array(Math.ceil(length / size));

    while (i < length) {
        result[resIndex++] = array.slice(i, (i += size));
    }

    return result;
}

module.exports = chunk;
