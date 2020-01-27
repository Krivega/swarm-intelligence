export const isBetterValueOfBestValue = (value, bestValue) => value >= 0 && value < bestValue;
export const recommendedVelocities = {
  currentVelocityRatio: 0.1,
  localVelocityRatio: 1.0,
  globalVelocityRatio: 5.0
};

const paraboloid = ([x, y]) => +(x ** 2 + y ** 2).toFixed(2);

export default paraboloid;
