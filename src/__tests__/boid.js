import Boid, { getInitPosition, getInitVelocity } from '../Boid';

const objectiveFunction = position => position.reduce((value, accumulator) => value + accumulator);
const minValues = [-100, -100];
const maxValues = [100, 100];
const initPosition = [1, 1];
const nextPosition = [2, 2];
const dimension = 2;
const getArrayWithRandomValues = () => [0.1, 0.6];

describe('Boid', () => {
  let boid;

  beforeEach(() => {
    boid = new Boid({
      objectiveFunction,
      dimension,
      minValues,
      maxValues,
      getArrayWithRandomValues,
      position: initPosition
    });
  });

  it('init', () => {
    expect(boid.objectiveFunction).toBe(objectiveFunction);
    expect(boid.getArrayWithRandomValues).toBe(getArrayWithRandomValues);
    expect(boid.dimension).toBe(dimension);
    expect(boid.minValues).toEqual(minValues);
    expect(boid.maxValues).toEqual(maxValues);
    expect(boid.position).toEqual(initPosition);
    expect(boid.bestPosition).toEqual(initPosition);
    expect(boid.bestValue).toEqual(objectiveFunction(initPosition));
    expect(boid.velocity).toEqual([-160, 40]);
  });

  it('calcValue', () => {
    const value = boid.calcValue(nextPosition);

    expect(value).toEqual(objectiveFunction(nextPosition));
  });

  it('getInitPosition', () => {
    const value = getInitPosition({ dimension, getArrayWithRandomValues, minValues, maxValues });

    expect(value).toEqual([-80, 20]);
  });

  it('getInitVelocity', () => {
    const value = getInitVelocity({ dimension, getArrayWithRandomValues, minValues, maxValues });

    expect(value).toEqual([-160, 40]);
  });
});
