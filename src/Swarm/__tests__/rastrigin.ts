import { minValues, maxValues, size, dimension } from '../../__fixtures__';
import { rastrigin } from '../../objectiveFunctions';
import getArrayWithRandomValues from '../../utils/getArrayWithRandomValues';
import Swarm from '../index';

describe('Swarm rastrigin', () => {
  let swarm: Swarm;

  beforeEach(() => {
    swarm = new Swarm({
      ...rastrigin.recommendedVelocities,
      isBetterValueOfBestValue: rastrigin.isBetterValueOfBestValue,
      objectiveFunction: rastrigin.function,
      minValues,
      maxValues,
      size,
      dimension,
      getArrayWithRandomValues,
    });
  });

  it('50 iterations', () => {
    for (let i = 0; i < 2; i++) {
      swarm.nextIteration();
    }

    expect(Math.abs(swarm.bestValue ?? 0)).toBeLessThan(50);
  });

  it('100 iterations', () => {
    for (let i = 0; i < 100; i++) {
      swarm.nextIteration();
    }

    expect(Math.abs(swarm.bestValue ?? 0)).toBeLessThan(50);
  });

  it('resetBestPosition', () => {
    const { bestValue, bestPosition } = swarm;

    for (let i = 0; i < 10; i++) {
      swarm.nextIteration();
    }

    expect(bestPosition).toBeDefined();

    if (bestPosition === undefined) {
      return;
    }

    swarm.resetBestPosition(bestPosition);
    expect(swarm.bestPosition).toBe(bestPosition);
    expect(swarm.bestValue).toBe(bestValue);
  });
});
