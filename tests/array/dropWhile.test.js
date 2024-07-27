const { _ } = require('../utils');
const users = [
    { user: 'barney', active: false },
    { user: 'fred', active: false },
    { user: 'pebbles', active: true },
];

describe('dropWhile', () => {
    it('should return an array with the last element only', () => {
        expect(_.dropWhile(users, ({ active }) => !active)).toEqual([
            { user: 'pebbles', active: true },
        ]);
    });

    it('should return an empty array if the array is empty', () => {
        expect(_.dropWhile([])).toEqual([]);
    });

    it('should return an array with the same elements', () => {
        expect(_.dropWhile(users, ({ active }) => active)).toEqual([
            { user: 'barney', active: false },
            { user: 'fred', active: false },
            { user: 'pebbles', active: true },
        ]);
    });

    it('should return an array with the two first elements removed', () => {
        expect(_.dropWhile(users, ({ active }) => !active)).toEqual([
            { user: 'pebbles', active: true },
        ]);
    });
});
