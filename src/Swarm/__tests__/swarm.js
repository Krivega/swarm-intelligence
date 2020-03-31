import {
  getArrayWithRandomValuesFake,
  objectiveFunction,
  isBetterValueOfBestValue,
  currentVelocityRatio,
  localVelocityRatio,
  globalVelocityRatio,
  initPosition,
  valueOfInitPosition,
  minValues,
  maxValues,
  size,
  dimension,
} from '../../__mocks__';
import Swarm from '../index';

describe('Swarm', () => {
  let swarm;

  beforeEach(() => {
    swarm = new Swarm({
      isBetterValueOfBestValue,
      objectiveFunction,
      currentVelocityRatio,
      localVelocityRatio,
      globalVelocityRatio,
      minValues,
      maxValues,
      size,
      dimension,
      getArrayWithRandomValues: getArrayWithRandomValuesFake,
    });
  });

  it('init', () => {
    expect(swarm._objectiveFunction).toBe(objectiveFunction);
    expect(swarm._isBetterValueOfBestValue).toBe(isBetterValueOfBestValue);
    expect(swarm._getArrayWithRandomValues).toBe(getArrayWithRandomValuesFake);
    expect(swarm._minValues).toEqual(minValues);
    expect(swarm._maxValues).toEqual(maxValues);
    expect(swarm._currentVelocityRatio).toBe(currentVelocityRatio);
    expect(swarm._localVelocityRatio).toBe(localVelocityRatio);
    expect(swarm._globalVelocityRatio).toBe(globalVelocityRatio);
    expect(swarm._dimension).toBe(dimension);
    expect(swarm._size).toBe(size);
    expect(swarm.bestPosition).toEqual(initPosition);
    expect(swarm.bestValue).toBe(valueOfInitPosition);

    expect(swarm._boids.length).toBe(size);
    expect(swarm.boids.length).toBe(size);
  });
});
