const objectiveFunction = ([x, y]) => +(x * x - y).toFixed(2);

export const isBetterValueOfBestValue = (value, bestValue) => value >= 0 && value < bestValue;

export default objectiveFunction;
