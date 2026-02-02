import type { Vector, RecommendedVelocities } from '../types';

const isBetterValueOfBestValue = (value: number, bestValue: number): boolean => {
  return value >= 0 && value < bestValue;
};

const recommendedVelocities: RecommendedVelocities = {
  currentVelocityRatio: 0.5,
  localVelocityRatio: 2,
  globalVelocityRatio: 5,
};

const rosenbrock = ([x, y]: Vector): number => {
  return Number(((1 - x) ** 2 + 100 * (y - x ** 2) ** 2).toFixed(2));
};

export default {
  isBetterValueOfBestValue,
  recommendedVelocities,
  function: rosenbrock,
};
