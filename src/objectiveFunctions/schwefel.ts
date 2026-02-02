import type { Vector, RecommendedVelocities } from '../types';

const isBetterValueOfBestValue = (value: number, bestValue: number): boolean => {
  return value >= 0 && value < bestValue;
};

const recommendedVelocities: RecommendedVelocities = {
  currentVelocityRatio: 0.5,
  localVelocityRatio: 2,
  globalVelocityRatio: 5,
};

const schwefelForOne = (item: number): number => {
  return item * Math.sin(2 * Math.sqrt(Math.abs(item)));
};

const shift = 0; // origin 418.9829

const schwefel = (values: Vector): number => {
  return Number(
    (
      shift * values.length -
      values.map(schwefelForOne).reduce((accumulator, item) => {
        return accumulator + item;
      }, 0)
    ).toFixed(2),
  );
};

export default {
  isBetterValueOfBestValue,
  recommendedVelocities,
  function: schwefel,
};
