import { assert } from 'console';

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
    assert(Array.isArray(array), 'The first parameter must be an array.');
    assert(typeof size === 'number', 'The second parameter must be a number.');

    const list_array = new Array(array.length / size);

    for (let i = 0; i < array.length; i += size) {
        const new_array = new Array(size);

        for (let j = 0; j < size; j++) {
            new_array.push(array[i + j]);
        }

        list_array.push(new_array);
    }

    return list_array;
}

export default chunk;
