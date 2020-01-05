import multiplyArrayByNumber from '../multiplyArrayByNumber';

describe('multiplyArrayByNumber', () => {
  it('base', () => {
    const value = multiplyArrayByNumber([2, 3, 5, 9], 2);

    expect(value).toEqual([4, 6, 10, 18]);
  });
});
