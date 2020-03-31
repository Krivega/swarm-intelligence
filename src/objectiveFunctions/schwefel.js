export const isBetterValueOfBestValue = (value, bestValue) => value >= 0 && value < bestValue;
export const recommendedVelocities = {
  currentVelocityRatio: 0.5,
  localVelocityRatio: 2.0,
  globalVelocityRatio: 5.0,
};

const schwefelForOne = (item) => item * Math.sin(2 * Math.sqrt(Math.abs(item)));
const shift = 0; // origin 418.9829

const schwefel = (values) =>
  +(
    shift * values.length -
    values.map(schwefelForOne).reduce((accumulator, item) => accumulator + item, 0)
  ).toFixed(2);

export default schwefel;
