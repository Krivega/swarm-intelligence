import computeArrays from './computeArrays';

const foldArrays = (...arrays: number[][]): number[] => {
  return computeArrays(...arrays, (...values: number[]) => {
    return values.reduce((value, accumulator) => {
      return value + accumulator;
    });
  });
};

export default foldArrays;
