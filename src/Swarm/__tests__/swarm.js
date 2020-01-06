import {
  getArrayWithRandomValues,
  objectiveFunction,
  currentVelocityRatio,
  localVelocityRatio,
  globalVelocityRatio,
  minValues,
  maxValues,
  size,
  dimension
} from '../../__mocks__';
import Swarm from '../index';

describe('Swarm', () => {
  let swarm;

  beforeEach(() => {
    swarm = new Swarm({
      objectiveFunction,
      getArrayWithRandomValues,
      currentVelocityRatio,
      localVelocityRatio,
      globalVelocityRatio,
      minValues,
      maxValues,
      size,
      dimension
    });
  });

  it('init', () => {
    expect(swarm._objectiveFunction).toBe(objectiveFunction);
    expect(swarm._getArrayWithRandomValues).toBe(getArrayWithRandomValues);

    expect(swarm._minValues).toEqual(minValues);
    expect(swarm._maxValues).toEqual(maxValues);
    expect(swarm._currentVelocityRatio).toBe(currentVelocityRatio);
    expect(swarm._localVelocityRatio).toBe(localVelocityRatio);
    expect(swarm._globalVelocityRatio).toBe(globalVelocityRatio);
    expect(swarm._dimension).toBe(dimension);
    expect(swarm._size).toBe(size);

    expect(swarm._boids.length).toBe(size);
  });
});
