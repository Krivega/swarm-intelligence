import multiplyArrays from '../multiplyArrays';

describe('multiplyArrays', () => {
  it('2 arrays', () => {
    const value = multiplyArrays([2, 3], [4, 5]);

    expect(value).toEqual([8, 15]);
  });

  it('3 arrays', () => {
    const value = multiplyArrays([2, 3, 2, 3], [4, 5, 4, 0], [4, 5, 4, 0]);

    expect(value).toEqual([32, 75, 32, 0]);
  });
});
