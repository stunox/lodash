const { _ } = require('../utils');

describe('findLastIndex', () => {
    it('should return the index of the last element that passes the predicate check', () => {
        const arr = [1, 2, 3, 4, 5];
        const predicate = x => x % 2 === 0;
        const result = _.findLastIndex(arr, predicate);

        expect(result).toBe(3);
    });

    it('should return -1 if no element passes the predicate check', () => {
        const arr = [1, 3, 5];
        const predicate = x => x % 2 === 0;
        const result = _.findLastIndex(arr, predicate);

        expect(result).toBe(-1);
    });

    it('should return -1 if the array is empty', () => {
        const arr = [];
        const predicate = x => x % 2 === 0;
        const result = _.findLastIndex(arr, predicate);

        expect(result).toBe(-1);
    });

    it('should return -1 if the array is null or undefined', () => {
        const arr = null;
        const predicate = x => x % 2 === 0;
        const result = _.findLastIndex(arr, predicate);

        expect(result).toBe(-1);
    });
});
