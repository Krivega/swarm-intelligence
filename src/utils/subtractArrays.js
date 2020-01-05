import computeArrays from './computeArrays';

const subtractArrays = (...arrays) =>
  computeArrays(...arrays, (...values) =>
    values.reduce((value, accumulator) => value - accumulator)
  );

export default subtractArrays;
