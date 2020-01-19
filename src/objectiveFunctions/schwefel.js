export const isBetterValueOfBestValue = (value, bestValue) => value >= 0 && value < bestValue;
export const recommendedVelocities = {
  currentVelocityRatio: 0.03,
  localVelocityRatio: 1.0,
  globalVelocityRatio: 5.0
};

const schwefel = ([x, y]) =>
  +(-x * Math.sin(2 * Math.sqrt(Math.abs(x))) - y * Math.sin(2 * Math.sqrt(Math.abs(y)))).toFixed(
    2
  );

export default schwefel;
