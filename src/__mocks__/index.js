import parabola, {
  isBetterValueOfBestValue as _isBetterValueOfBestValue
} from '../objectiveFunctions/parabola';

export const objectiveFunction = position => parabola(position);
export const isBetterValueOfBestValue = _isBetterValueOfBestValue;

export const size = 200;
export const minValues = [-100, -100];
export const maxValues = [100, 100];
export const currentVelocityRatio = 0.1;
export const localVelocityRatio = 1.0;
export const globalVelocityRatio = 5.0;
export const dimension = 2;
export const getArrayWithRandomValuesFake = () => [0.1, 0.6];

export const initPosition = [-80, 20];
export const initVelocity = [60, -10];
export const badVelocity = [0, 0];
export const nextVelocity = [1.6076951545867364, -0.26794919243112275];
export const nextPosition = [-78.39230484541326, 19.73205080756888];
export const valueOfInitPosition = 6380;
export const valueOfNextPosition = 6125.62;
export const globalBestPosition = initPosition;
