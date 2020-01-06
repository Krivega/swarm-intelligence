import {
  minValues,
  maxValues,
  initPosition,
  dimension,
  getArrayWithRandomValuesFake
} from '../../__mocks__';
import { getInitPosition, getInitVelocity } from '../computation';

describe('computation', () => {
  it('getInitPosition', () => {
    const value = getInitPosition({
      dimension,
      minValues,
      maxValues,
      getArrayWithRandomValues: getArrayWithRandomValuesFake
    });

    expect(value).toEqual(initPosition);
  });

  it('getInitVelocity', () => {
    const value = getInitVelocity({
      dimension,
      minValues,
      maxValues,
      getArrayWithRandomValues: getArrayWithRandomValuesFake
    });

    expect(value).toEqual([-160, 40]);
  });
});
