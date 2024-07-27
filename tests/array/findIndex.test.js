const { _ } = require('../utils');

describe('findIndex', () => {
    it('should return the index of the first element that passes the predicate check', () => {
        expect(_.findIndex([1, 2, 3, 4], n => n === 2)).toEqual(1);
    });

    it('should return -1 if no element passes the predicate check', () => {
        expect(_.findIndex([1, 2, 3, 4], n => n === 5)).toEqual(-1);
    });

    it('should return -1 if the array is empty', () => {
        expect(_.findIndex([])).toEqual(-1);
    });

    it('should return the index of the first element that passes the predicate check', () => {
        expect(_.findIndex([1, 2, 3, 3, 4], n => n === 3)).toEqual(2);
    });
});
