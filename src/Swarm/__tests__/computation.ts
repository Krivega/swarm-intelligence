import {
  minValues,
  maxValues,
  currentVelocityRatio,
  localVelocityRatio,
  globalVelocityRatio,
  initPosition,
  initVelocity,
  nextVelocity,
  globalBestPosition,
  dimension,
  getArrayWithRandomValuesFake,
} from '../../__fixtures__';
import { resolveCalcVelocity, getInitPosition, getInitVelocity } from '../computation';

const calcVelocity = resolveCalcVelocity({
  dimension,
  currentVelocityRatio,
  localVelocityRatio,
  globalVelocityRatio,
  globalBestPosition,
  getArrayWithRandomValues: getArrayWithRandomValuesFake,
});

describe('computation', () => {
  it('calcVelocity', () => {
    const currentVelocity = initVelocity;
    const localBestPosition = initPosition;
    const currentPosition = initPosition;
    const value = calcVelocity({
      currentVelocity,
      localBestPosition,
      currentPosition,
    });

    expect(value).toEqual(nextVelocity);
  });

  it('getInitPosition', () => {
    const value = getInitPosition({
      dimension,
      minValues,
      maxValues,
      getArrayWithRandomValues: getArrayWithRandomValuesFake,
    });

    expect(value).toEqual(initPosition);
  });

  it('getInitVelocity', () => {
    const value = getInitVelocity({
      dimension,
      minValues,
      maxValues,
      getArrayWithRandomValues: getArrayWithRandomValuesFake,
    });

    expect(value).toEqual([-160, 40]);
  });
});
