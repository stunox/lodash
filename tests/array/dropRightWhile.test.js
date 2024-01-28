const { _ } = require('../utils');

describe('dropRightWhile', () => {
    const users = [
        { user: 'barney', active: true },
        { user: 'fred', active: false },
        { user: 'pebbles', active: false },
    ];

    it('should return an array with the last element removed', () => {
        expect(_.dropRightWhile(users, ({ active }) => !active)).toEqual([
            { user: 'barney', active: true },
        ]);
    });

    it('should return an empty array if the array is empty', () => {
        expect(_.dropRightWhile([])).toEqual([]);
    });

    it('should return an empty array', () => {
        expect(_.dropRightWhile(users, ({ active }) => active)).toEqual([]);
    });

    it('should return an array with the two last elements removed', () => {
        expect(_.dropRightWhile(users, ({ active }) => !active)).toEqual([
            { user: 'barney', active: true },
        ]);
    });
});
