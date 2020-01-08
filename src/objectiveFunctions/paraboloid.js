const paraboloid = ([x, y]) => +(x * x + y * y).toFixed(2);

export const isBetterValueOfBestValue = (value, bestValue) => value >= 0 && value < bestValue;

export default paraboloid;
