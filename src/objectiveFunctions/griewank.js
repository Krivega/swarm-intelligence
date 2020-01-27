export const isBetterValueOfBestValue = (value, bestValue) => value >= 0 && value < bestValue;
export const recommendedVelocities = {
  currentVelocityRatio: 0.5,
  localVelocityRatio: 2.0,
  globalVelocityRatio: 5.0
};

const griewankForOne = (item, i) => Math.cos(item / Math.sqrt(i + 1));

const griewank = values =>
  +(
    1 +
    (1 / 4000) * values.map(item => item ** 2).reduce((accumulator, item) => accumulator + item) -
    values.map(griewankForOne).reduce((accumulator, item) => accumulator * item)
  ).toFixed(2);

export default griewank;
