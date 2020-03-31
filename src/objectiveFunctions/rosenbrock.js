export const isBetterValueOfBestValue = (value, bestValue) => value >= 0 && value < bestValue;
export const recommendedVelocities = {
  currentVelocityRatio: 0.5,
  localVelocityRatio: 2.0,
  globalVelocityRatio: 5.0,
};

const rosenbrock = ([x, y]) => +((1 - x) ** 2 + 100 * (y - x ** 2) ** 2).toFixed(2);

export default rosenbrock;
