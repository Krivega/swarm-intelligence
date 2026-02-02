import type { Vector, RecommendedVelocities } from '../types';

const isBetterValueOfBestValue = (value: number, bestValue: number): boolean => {
  return value >= 0 && value < bestValue;
};

const recommendedVelocities: RecommendedVelocities = {
  currentVelocityRatio: 0.1,
  localVelocityRatio: 1,
  globalVelocityRatio: 5,
};

const paraboloid = ([x, y]: Vector): number => {
  return Number((x ** 2 + y ** 2).toFixed(2));
};

export default {
  isBetterValueOfBestValue,
  recommendedVelocities,
  function: paraboloid,
};
