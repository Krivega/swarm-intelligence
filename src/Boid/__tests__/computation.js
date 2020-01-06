import {
  minValues,
  maxValues,
  currentVelocityRatio,
  localVelocityRatio,
  globalVelocityRatio,
  initPosition,
  nextPosition,
  initVelocity,
  nextVelocity,
  globalBestPosition,
  dimension,
  getArrayWithRandomValues
} from '../../__mocks__';
import {
  getInitPosition,
  getInitVelocity,
  resolveCalcVelocity,
  calcPosition
} from '../computation';

const calcVelocity = resolveCalcVelocity({
  dimension,
  currentVelocityRatio,
  localVelocityRatio,
  globalVelocityRatio,
  globalBestPosition,
  getArrayWithRandomValues
});

describe('computation', () => {
  it('getInitPosition', () => {
    const value = getInitPosition({ dimension, getArrayWithRandomValues, minValues, maxValues });

    expect(value).toEqual(initPosition);
  });

  it('getInitVelocity', () => {
    const value = getInitVelocity({ dimension, getArrayWithRandomValues, minValues, maxValues });

    expect(value).toEqual(initVelocity);
  });

  it('calcVelocity', () => {
    const currentVelocity = initVelocity;
    const localBestPosition = initPosition;
    const currentPosition = initPosition;
    const value = calcVelocity({
      currentVelocity,
      localBestPosition,
      currentPosition
    });

    expect(value).toEqual(nextVelocity);
  });

  it('calcPosition', () => {
    const currentPosition = initPosition;
    const value = calcPosition({
      currentPosition,
      velocity: nextVelocity
    });

    expect(value).toEqual(nextPosition);
  });
});
