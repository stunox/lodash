const { _ } = require('../utils');

describe('initial', () => {
    it('should return all but the last element of the array', () => {
        const arr = [1, 2, 3, 4];
        const result = _.initial(arr);

        expect(result).toEqual([1, 2, 3]);
    });

    it('should return an empty array if the array is empty', () => {
        const arr = [];
        const result = _.initial(arr);

        expect(result).toEqual([]);
    });
});
