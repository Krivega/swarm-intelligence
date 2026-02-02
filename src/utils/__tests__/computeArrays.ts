import computeArrays from '../computeArrays';

describe('computeArrays', () => {
  it('2 arrays', () => {
    const value = computeArrays([2, 3], [4, 5], (value1, value2) => {
      return value1 * value2;
    });

    expect(value).toEqual([8, 15]);
  });

  it('3 arrays', () => {
    const value = computeArrays(
      [2, 3, 2, 3],
      [4, 5, 4, 0],
      [4, 5, 4, 0],
      (value1, value2, value3) => {
        return value1 * value2 * value3;
      },
    );

    expect(value).toEqual([32, 75, 32, 0]);
  });
});
