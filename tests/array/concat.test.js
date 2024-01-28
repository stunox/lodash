const assert = require('assert');
const concat = require('../../lib/array/concat');

describe('concat', () => {
    it('should shallow clone `array`', () => {
        const array = [1, 2, 3];
        const actual = concat(array);

        expect(actual).toEqual(array);
        assert.notStrictEqual(actual, array);
    });

    it('should concat arrays and values', () => {
        const array = [1];
        const actual = concat(array, 2, [3], [[4]]);

        expect(actual).toEqual([1, 2, 3, [4]]);
        expect(array).toEqual([1]);
    });

    it('should cast non-array `array` values to arrays', () => {
        const values = [, null, undefined, false, true, 1, NaN, 'a'];
        let expected = values.map((value, index) => (index ? [value] : []));
        let actual = values.map((value, index) => (index ? concat(value) : concat()));

        expect(actual).toEqual(expected);

        expected = values.map(value => [value, 2, [3]]);

        actual = values.map(value => concat(value, [2], [[3]]));

        expect(actual).toEqual(expected);
    });
});
