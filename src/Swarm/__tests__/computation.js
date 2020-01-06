import {
  minValues,
  maxValues,
  initPosition,
  initVelocity,
  dimension,
  getArrayWithRandomValues
} from '../../__mocks__';
import { getInitPosition, getInitVelocity } from '../computation';

describe('computation', () => {
  it('getInitPosition', () => {
    const value = getInitPosition({ dimension, getArrayWithRandomValues, minValues, maxValues });

    expect(value).toEqual(initPosition);
  });

  it('getInitVelocity', () => {
    const value = getInitVelocity({ dimension, getArrayWithRandomValues, minValues, maxValues });

    expect(value).toEqual(initVelocity);
  });
});
