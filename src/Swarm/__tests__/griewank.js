import { minValues, maxValues, size, dimension } from '../../__mocks__';
import getArrayWithRandomValues from '../../utils/getArrayWithRandomValues';
import objectiveFunction, {
  isBetterValueOfBestValue,
  recommendedVelocities,
} from '../../objectiveFunctions/griewank';
import Swarm from '../index';

describe('Swarm griewank', () => {
  let swarm;

  beforeEach(() => {
    swarm = new Swarm({
      ...recommendedVelocities,
      isBetterValueOfBestValue,
      minValues,
      maxValues,
      size,
      dimension,
      getArrayWithRandomValues,
      objectiveFunction,
    });
  });

  it('50 iterations', () => {
    for (let i = 0; i < 50; i++) {
      swarm.nextIteration();
    }

    expect(Math.abs(swarm.bestValue)).toBe(0);
  });

  it('100 iterations', () => {
    for (let i = 0; i < 100; i++) {
      swarm.nextIteration();
    }

    expect(Math.abs(swarm.bestValue)).toBe(0);
  });

  it('resetBestPosition', () => {
    const { bestValue, bestPosition } = swarm;

    for (let i = 0; i < 10; i++) {
      swarm.nextIteration();
    }

    swarm.resetBestPosition(bestPosition);

    expect(swarm.bestPosition).toBe(bestPosition);
    expect(swarm.bestValue).toBe(bestValue);
  });
});
