import { paraboloid } from '../objectiveFunctions';

export const objectiveFunction = (position: number[]): number => {
  return paraboloid.function(position);
};

export const size = 200;
export const minValues: number[] = [-100, -100];
export const maxValues: number[] = [100, 100];
export const currentVelocityRatio = 0.1;
export const localVelocityRatio = 1;
export const globalVelocityRatio = 5;
export const dimension = 2;
export const getArrayWithRandomValuesFake = (): number[] => {
  return [0.1, 0.6];
};

export const initPosition: number[] = [-80, 20];
export const initVelocity: number[] = [60, -10];
export const badVelocity: number[] = [0, 0];
export const nextVelocity: number[] = [1.607_695_154_586_736_4, -0.267_949_192_431_122_75];
export const nextPosition: number[] = [-78.392_304_845_413_26, 19.732_050_807_568_88];
export const valueOfInitPosition = 6800;
export const valueOfNextPosition = 6534.71;
export const globalBestPosition = initPosition;

export const { isBetterValueOfBestValue } = paraboloid;
