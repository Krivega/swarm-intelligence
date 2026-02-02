import subtractArrays from '../subtractArrays';

describe('subtractArrays', () => {
  it('base', () => {
    const value = subtractArrays([2, 3], [4, 5]);

    expect(value).toEqual([-2, -2]);
  });
});
