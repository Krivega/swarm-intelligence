import foldArrays from '../utils/foldArrays';
import subtractArrays from '../utils/subtractArrays';
import multiplyArrays from '../utils/multiplyArrays';
import multiplyArrayByNumber from '../utils/multiplyArrayByNumber';

const getRandomValues = ({ randomValues, middleValues, minValues }) =>
  foldArrays(multiplyArrays(randomValues, middleValues), minValues);

export const getInitPosition = ({ dimension, maxValues, minValues, getArrayWithRandomValues }) => {
  const middleValuesPosition = subtractArrays(maxValues, minValues);
  const randomValues = getArrayWithRandomValues(dimension);

  return getRandomValues({ randomValues, minValues, middleValues: middleValuesPosition });
};

export const getInitVelocity = ({ dimension, maxValues, minValues, getArrayWithRandomValues }) => {
  const minValuesVelocity = multiplyArrayByNumber(subtractArrays(maxValues, minValues), -1);
  const maxValuesVelocity = subtractArrays(maxValues, minValues);
  const middleValuesVelocity = subtractArrays(maxValuesVelocity, minValuesVelocity);
  const randomValues = getArrayWithRandomValues(dimension);

  return getRandomValues({
    randomValues,
    minValues: minValuesVelocity,
    middleValues: middleValuesVelocity
  });
};

const calcCommonRatio = ({ currentVelocityRatio, velocityRatio }) =>
  (2 * currentVelocityRatio) /
  Math.abs(2 - velocityRatio - Math.sqrt(velocityRatio * velocityRatio - 4 * velocityRatio));

export const resolveCalcVelocity = ({
  dimension,
  currentVelocityRatio,
  localVelocityRatio,
  globalVelocityRatio,
  globalBestPosition,
  getArrayWithRandomValues
}) => ({ currentVelocity, localBestPosition, currentPosition }) => {
  const rndCurrentBestPosition = getArrayWithRandomValues(dimension);
  const rndGlobalBestPosition = getArrayWithRandomValues(dimension);

  const velocityRatio = localVelocityRatio + globalVelocityRatio;
  const commonRatio = calcCommonRatio({ currentVelocityRatio, velocityRatio });

  const localBestVelocity = multiplyArrayByNumber(
    multiplyArrays(rndCurrentBestPosition, subtractArrays(localBestPosition, currentPosition)),
    localVelocityRatio
  );

  const globalBestVelocity = multiplyArrayByNumber(
    multiplyArrays(rndGlobalBestPosition, subtractArrays(globalBestPosition, currentPosition)),
    globalVelocityRatio
  );

  return multiplyArrayByNumber(
    foldArrays(currentVelocity, localBestVelocity, globalBestVelocity),
    commonRatio
  );
};

export const calcPosition = ({ currentPosition, velocity }) =>
  foldArrays(currentPosition, velocity);
