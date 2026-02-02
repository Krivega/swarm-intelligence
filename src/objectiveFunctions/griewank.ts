import type { Vector, RecommendedVelocities } from '../types';

const isBetterValueOfBestValue = (value: number, bestValue: number): boolean => {
  return value >= 0 && value < bestValue;
};

const recommendedVelocities: RecommendedVelocities = {
  currentVelocityRatio: 0.5,
  localVelocityRatio: 2,
  globalVelocityRatio: 5,
};

const griewankForOne = (item: number, i: number): number => {
  return Math.cos(item / Math.sqrt(i + 1));
};

const griewank = (values: Vector): number => {
  return Number(
    (
      1 +
      (1 / 4000) *
        values
          .map((item) => {
            return item ** 2;
          })
          .reduce((accumulator, item) => {
            return accumulator + item;
          }) -
      values.map(griewankForOne).reduce((accumulator, item) => {
        return accumulator * item;
      })
    ).toFixed(2),
  );
};

export default {
  isBetterValueOfBestValue,
  recommendedVelocities,
  function: griewank,
};
