import computeArrays from './computeArrays';

const foldArrays = (...arrays) =>
  computeArrays(...arrays, (...values) =>
    values.reduce((value, accumulator) => value + accumulator)
  );

export default foldArrays;
