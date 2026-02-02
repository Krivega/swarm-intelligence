import type { Vector, RecommendedVelocities } from '../types';

const isBetterValueOfBestValue = (value: number, bestValue: number): boolean => {
  return value >= 0 && value < bestValue;
};

const recommendedVelocities: RecommendedVelocities = {
  currentVelocityRatio: 0.5,
  localVelocityRatio: 2,
  globalVelocityRatio: 5,
};

const rastriginForOne = (item: number): number => {
  return item ** 2 - 10 * Math.cos(2 * Math.PI * item);
};

const rastrigin = (values: Vector): number => {
  return Number(
    (
      10 * values.length +
      values.map(rastriginForOne).reduce((accumulator, item) => {
        return accumulator + item;
      }, 0)
    ).toFixed(2),
  );
};

export default {
  isBetterValueOfBestValue,
  recommendedVelocities,
  function: rastrigin,
};
