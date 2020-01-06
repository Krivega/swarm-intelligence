import {
  currentVelocityRatio,
  localVelocityRatio,
  globalVelocityRatio,
  initPosition,
  nextPosition,
  initVelocity,
  nextVelocity,
  globalBestPosition,
  dimension,
  getArrayWithRandomValuesFake
} from '../../__mocks__';
import { resolveCalcVelocity, calcPosition } from '../computation';

const calcVelocity = resolveCalcVelocity({
  dimension,
  currentVelocityRatio,
  localVelocityRatio,
  globalVelocityRatio,
  globalBestPosition,
  getArrayWithRandomValues: getArrayWithRandomValuesFake
});

describe('computation', () => {
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
