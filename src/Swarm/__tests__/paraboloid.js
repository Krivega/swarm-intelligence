import {
  currentVelocityRatio,
  localVelocityRatio,
  globalVelocityRatio,
  minValues,
  maxValues,
  size,
  dimension
} from '../../__mocks__';
import getArrayWithRandomValues from '../../utils/getArrayWithRandomValues';
import objectiveFunction, { isBetterValueOfBestValue } from '../../objectiveFunctions/paraboloid';
import Swarm from '../index';

describe('Swarm parabola', () => {
  let swarm;

  beforeEach(() => {
    swarm = new Swarm({
      currentVelocityRatio,
      isBetterValueOfBestValue,
      localVelocityRatio,
      globalVelocityRatio,
      minValues,
      maxValues,
      size,
      dimension,
      getArrayWithRandomValues,
      objectiveFunction
    });
  });

  it('100 iterations', () => {
    for (let i = 0; i < 100; i++) {
      swarm.nextIteration();
    }

    expect(Math.abs(swarm.bestValue)).toBe(0);
  });

  it('resetBestPosition', () => {
    const { bestValue, bestPosition } = swarm;

    for (let i = 0; i < 100; i++) {
      swarm.nextIteration();
    }

    swarm.resetBestPosition({
      bestValue,
      bestPosition
    });

    expect(bestValue).toBe(bestValue);
  });
});
