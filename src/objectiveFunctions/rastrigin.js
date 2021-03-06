export const isBetterValueOfBestValue = (value, bestValue) => value >= 0 && value < bestValue;
export const recommendedVelocities = {
  currentVelocityRatio: 0.5,
  localVelocityRatio: 2.0,
  globalVelocityRatio: 5.0,
};

const rastriginForOne = (item) => item ** 2 - 10 * Math.cos(2 * Math.PI * item);

const rastrigin = (values) =>
  +(
    10 * values.length +
    values.map(rastriginForOne).reduce((accumulator, item) => accumulator + item, 0)
  ).toFixed(2);

export default rastrigin;
