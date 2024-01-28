const { _ } = require('../utils');

describe('first', () => {
    it('should return the first element of an array', () => {
        const arr = [1, 2, 3, 4, 5];
        const result = _.first(arr);

        expect(result).toBe(1);
    });

    it('should return undefined if the array is empty', () => {
        const arr = [];
        const result = _.first(arr);

        expect(result).toBeUndefined();
    });

    it('should return undefined if the array is null or undefined', () => {
        const arr = null;
        const result = _.first(arr);

        expect(result).toBeUndefined();
    });
});
