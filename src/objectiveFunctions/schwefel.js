const schwefel = ([x, y]) =>
  +(-x * Math.sin(2 * Math.sqrt(Math.abs(x))) - y * Math.sin(2 * Math.sqrt(Math.abs(y)))).toFixed(
    2
  );

export const isBetterValueOfBestValue = (value, bestValue) => value >= 0 && value < bestValue;

export default schwefel;
