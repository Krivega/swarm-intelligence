import { minValues, maxValues, size, dimension } from '../../__fixtures__';
import { schwefel } from '../../objectiveFunctions';
import getArrayWithRandomValues from '../../utils/getArrayWithRandomValues';
import Swarm from '../index';

describe('Swarm schwefel', () => {
  let swarm: Swarm;

  beforeEach(() => {
    swarm = new Swarm({
      ...schwefel.recommendedVelocities,
      isBetterValueOfBestValue: schwefel.isBetterValueOfBestValue,
      objectiveFunction: schwefel.function,
      minValues,
      maxValues,
      size,
      dimension,
      getArrayWithRandomValues,
    });
  });

  it('50 iterations', () => {
    for (let i = 0; i < 50; i++) {
      swarm.nextIteration();
    }

    expect(Math.abs(swarm.bestValue ?? 0)).toBeLessThan(70);
  });

  it('100 iterations', () => {
    for (let i = 0; i < 100; i++) {
      swarm.nextIteration();
    }

    expect(Math.abs(swarm.bestValue ?? 0)).toBeLessThan(70);
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
