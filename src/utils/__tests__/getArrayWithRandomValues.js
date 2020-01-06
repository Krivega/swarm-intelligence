import getArrayWithRandomValues from '../getArrayWithRandomValues';

describe('getArrayWithRandomValues', () => {
  it('base', () => {
    const array = getArrayWithRandomValues(3);

    expect(array.length).toBe(3);
  });
});
