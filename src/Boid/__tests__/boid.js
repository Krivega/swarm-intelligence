import {
  objectiveFunction,
  currentVelocityRatio,
  isBetterValueOfBestValue,
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
  getArrayWithRandomValuesFake,
} from '../../__mocks__';
import { resolveCalcVelocity } from '../../Swarm/computation';
import Boid from '../index';

const calcVelocity = resolveCalcVelocity({
  dimension,
  currentVelocityRatio,
  localVelocityRatio,
  globalVelocityRatio,
  globalBestPosition,
  getArrayWithRandomValues: getArrayWithRandomValuesFake,
});

describe('Boid', () => {
  let boid;

  beforeEach(() => {
    boid = new Boid({
      position: initPosition,
      velocity: initVelocity,
    });
  });

  it('init', () => {
    expect(boid.position).toEqual(initPosition);
    expect(boid.velocity).toEqual(initVelocity);
  });

  it('initBestPosition', () => {
    boid.initBestPosition({ objectiveFunction, isBetterValueOfBestValue });

    expect(boid.bestPosition).toEqual(initPosition);
    expect(boid.bestValue).toBe(valueOfInitPosition);
  });

  it('resetBestPosition', () => {
    const objectiveFunctionJested = jest.fn(objectiveFunction);

    boid.initBestPosition({ isBetterValueOfBestValue, objectiveFunction: objectiveFunctionJested });

    expect(objectiveFunctionJested).toHaveBeenCalledTimes(1);

    boid.nextIteration({
      calcVelocity,
      isBetterValueOfBestValue,
      objectiveFunction: objectiveFunctionJested,
    });

    expect(objectiveFunctionJested).toHaveBeenCalledTimes(2);

    boid.resetBestPosition({
      isBetterValueOfBestValue,
      objectiveFunction: objectiveFunctionJested,
    });

    expect(objectiveFunctionJested).toHaveBeenCalledTimes(3);
    expect(boid.bestPosition).toEqual(nextPosition);
    expect(boid.bestValue).toBe(valueOfNextPosition);
  });

  it('nextIteration to god position', () => {
    boid.initBestPosition({ objectiveFunction, isBetterValueOfBestValue });
    boid.nextIteration({ calcVelocity, objectiveFunction, isBetterValueOfBestValue });

    expect(boid.velocity).toEqual(nextVelocity);
    expect(boid.position).toEqual(nextPosition);
    expect(boid.bestPosition).toEqual(nextPosition);
    expect(boid.bestValue).toBe(valueOfNextPosition);
  });

  it('nextIteration to bad position', () => {
    boid = new Boid({
      objectiveFunction,
      isBetterValueOfBestValue,
      position: initPosition,
      velocity: badVelocity,
    });

    boid.initBestPosition({ objectiveFunction, isBetterValueOfBestValue });
    boid.nextIteration({ calcVelocity, objectiveFunction, isBetterValueOfBestValue });
    expect(boid.velocity).toEqual(badVelocity);
    expect(boid.position).toEqual(initPosition);
    expect(boid.bestPosition).toEqual(initPosition);
    expect(boid.bestValue).toBe(valueOfInitPosition);
  });
});
