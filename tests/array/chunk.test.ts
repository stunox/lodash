import chunk from '../../lib/array/chunk';

describe('chunk', () => {
    it('should return chunked arrays', () => {
        expect(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)).toEqual([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8],
        ]);
    });
});
