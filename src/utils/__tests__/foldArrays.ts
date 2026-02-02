import foldArrays from '../foldArrays';

describe('foldArrays', () => {
  it('base', () => {
    const value = foldArrays([2, 3], [4, 5]);

    expect(value).toEqual([6, 8]);
  });
});
