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
} from '../../__fixtures__';
import Swarm from '../index';

describe('Swarm', () => {
  let swarm: Swarm;

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
    expect(swarm.bestPosition).toEqual(initPosition);
    expect(swarm.bestValue).toBe(valueOfInitPosition);
    expect(swarm.boids.length).toBe(size);
  });
});
