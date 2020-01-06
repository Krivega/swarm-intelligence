import {
  objectiveFunction,
  currentVelocityRatio,
  localVelocityRatio,
  globalVelocityRatio,
  initPosition,
  initVelocity,
  badVelocity,
  nextPosition,
  valueOfInitPosition,
  valueOfNextPosition,
  nextVelocity,
  globalBestPosition,
  dimension,
  getArrayWithRandomValues
} from '../../__mocks__';
import { resolveCalcVelocity } from '../computation';
import Boid from '../index';

const calcVelocity = resolveCalcVelocity({
  dimension,
  currentVelocityRatio,
  localVelocityRatio,
  globalVelocityRatio,
  globalBestPosition,
  getArrayWithRandomValues
});

describe('Boid', () => {
  let boid;

  beforeEach(() => {
    boid = new Boid({
      objectiveFunction,
      position: initPosition,
      velocity: initVelocity
    });
  });

  it('init', () => {
    expect(boid._objectiveFunction).toBe(objectiveFunction);
    expect(boid.position).toEqual(initPosition);
    expect(boid.bestPosition).toEqual(initPosition);
    expect(boid.bestValue).toEqual(valueOfInitPosition);
    expect(boid.velocity).toEqual(initVelocity);
  });

  it('nextIteration to god position', () => {
    boid.nextIteration(calcVelocity);

    expect(boid.velocity).toEqual(nextVelocity);
    expect(boid.position).toEqual(nextPosition);
    expect(boid.bestPosition).toEqual(nextPosition);
    expect(boid.bestValue).toEqual(valueOfNextPosition);
  });

  it('nextIteration to bad position', () => {
    boid = new Boid({
      objectiveFunction,
      position: initPosition,
      velocity: badVelocity
    });

    boid.nextIteration(calcVelocity);
    expect(boid.velocity).toEqual(badVelocity);
    expect(boid.position).toEqual(initPosition);
    expect(boid.bestPosition).toEqual(initPosition);
    expect(boid.bestValue).toEqual(valueOfInitPosition);
  });
});
