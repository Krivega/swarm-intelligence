export const objectiveFunction = position =>
  position.reduce((value, accumulator) => value + accumulator);

export const size = 10;
export const minValues = [-100, -100];
export const maxValues = [100, 100];
export const currentVelocityRatio = 0.1;
export const localVelocityRatio = 1.0;
export const globalVelocityRatio = 5.0;
export const dimension = 2;
export const getArrayWithRandomValues = () => [0.1, 0.6];

export const initPosition = [-80, 20];
export const initVelocity = [-160, 40];
export const badVelocity = [0, 0];
export const nextVelocity = [-4.287187078897964, 1.071796769724491];
export const nextPosition = [-84.28718707889796, 21.07179676972449];
export const valueOfInitPosition = -60;
export const valueOfNextPosition = -63.21539030917347;
export const globalBestPosition = initPosition;
