const rastrigin = ([x, y]) =>
  +(
    10 * 2 +
    x * x +
    y * y -
    10 * Math.cos(2 * Math.pi * x) -
    10 * Math.cos(2 * Math.pi * y)
  ).toFixed(2);

export const isBetterValueOfBestValue = (value, bestValue) => value >= 0 && value < bestValue;

export default rastrigin;
