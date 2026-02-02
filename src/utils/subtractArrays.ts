import computeArrays from './computeArrays';

const subtractArrays = (...arrays: number[][]): number[] => {
  return computeArrays(...arrays, (...values: number[]) => {
    return values.reduce((value, accumulator) => {
      return value - accumulator;
    });
  });
};

export default subtractArrays;
