const { _, falsey } = require('../utils');

describe('fill', () => {
    it('should use a default `start` of `0` and a default `end` of `length`', () => {
        const array = [1, 2, 3];

        expect(_.fill(array, 'a')).toEqual(['a', 'a', 'a']);
    });

    it('should use `undefined` for `value` if not given', () => {
        expect(_.fill([1, 2, 3])).toEqual(Array(3));
    });

    it('should work with a positive `start`', () => {
        expect(_.fill([1, 2, 3], 'a', 1)).toEqual([1, 'a', 'a']);
    });

    it('should work with a `start` >= `length`', () => {
        [3, 4, 2 ** 32, Infinity].forEach(start => {
            expect(_.fill([1, 2, 3], 'a', start)).toEqual([1, 2, 3]);
        });
    });

    it('should treat falsey `start` values as `0`', () => {
        const actual = falsey.map(start => _.fill([1, 2, 3], 'a', start));

        expect(actual).toEqual([
            ['a', 'a', 'a'],
            ['a', 'a', 'a'],
            ['a', 'a', 'a'],
            ['a', 'a', 'a'],
            ['a', 'a', 'a'],
            ['a', 'a', 'a'],
        ]);
    });
});
