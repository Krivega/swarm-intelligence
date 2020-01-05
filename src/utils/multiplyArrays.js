import computeArrays from './computeArrays';

const multiplyArrays = (...arrays) =>
  computeArrays(...arrays, (...values) =>
    values.reduce((value, accumulator) => value * accumulator)
  );

export default multiplyArrays;
