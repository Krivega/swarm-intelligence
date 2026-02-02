import foldArrays from '../utils/foldArrays';
import multiplyArrayByNumber from '../utils/multiplyArrayByNumber';
import multiplyArrays from '../utils/multiplyArrays';
import subtractArrays from '../utils/subtractArrays';

const calcCommonRatio = ({
  currentVelocityRatio,
  velocityRatio,
}: {
  currentVelocityRatio: number;
  velocityRatio: number;
}): number => {
  return (
    (2 * currentVelocityRatio) /
    Math.abs(2 - velocityRatio - Math.sqrt(velocityRatio * velocityRatio - 4 * velocityRatio))
  );
};

type ResolveCalcVelocityParams = {
  dimension: number;
  currentVelocityRatio: number;
  localVelocityRatio: number;
  globalVelocityRatio: number;
  globalBestPosition: number[];
  getArrayWithRandomValues: (_size: number) => number[];
};

export const resolveCalcVelocity = (params: ResolveCalcVelocityParams) => {
  return ({
    currentVelocity,
    localBestPosition,
    currentPosition,
  }: {
    currentVelocity: number[];
    localBestPosition: number[];
    currentPosition: number[];
  }): number[] => {
    const {
      dimension,
      currentVelocityRatio,
      localVelocityRatio,
      globalVelocityRatio,
      globalBestPosition,
      getArrayWithRandomValues,
    } = params;

    const rndCurrentBestPosition = getArrayWithRandomValues(dimension);
    const rndGlobalBestPosition = getArrayWithRandomValues(dimension);

    const velocityRatio = localVelocityRatio + globalVelocityRatio;
    const commonRatio = calcCommonRatio({ currentVelocityRatio, velocityRatio });

    const localBestVelocity = multiplyArrayByNumber(
      multiplyArrays(rndCurrentBestPosition, subtractArrays(localBestPosition, currentPosition)),
      localVelocityRatio,
    );

    const globalBestVelocity = multiplyArrayByNumber(
      multiplyArrays(rndGlobalBestPosition, subtractArrays(globalBestPosition, currentPosition)),
      globalVelocityRatio,
    );

    return foldArrays(
      multiplyArrayByNumber(currentVelocity, commonRatio),
      multiplyArrayByNumber(localBestVelocity, commonRatio),
      multiplyArrayByNumber(globalBestVelocity, commonRatio),
    );
  };
};

const getRandomValues = ({
  randomValues,
  middleValues,
  minValues,
}: {
  randomValues: number[];
  middleValues: number[];
  minValues: number[];
}): number[] => {
  return foldArrays(multiplyArrays(randomValues, middleValues), minValues);
};

export const getInitPosition = ({
  dimension,
  maxValues,
  minValues,
  getArrayWithRandomValues,
}: {
  dimension: number;
  maxValues: number[];
  minValues: number[];
  getArrayWithRandomValues: (_size: number) => number[];
}): number[] => {
  const middleValuesPosition = subtractArrays(maxValues, minValues);
  const randomValues = getArrayWithRandomValues(dimension);

  return getRandomValues({
    randomValues,
    minValues,
    middleValues: middleValuesPosition,
  });
};

export const getInitVelocity = ({
  dimension,
  maxValues,
  minValues,
  getArrayWithRandomValues,
}: {
  dimension: number;
  maxValues: number[];
  minValues: number[];
  getArrayWithRandomValues: (_size: number) => number[];
}): number[] => {
  const minValuesVelocity = multiplyArrayByNumber(subtractArrays(maxValues, minValues), -1);
  const maxValuesVelocity = subtractArrays(maxValues, minValues);
  const middleValuesVelocity = subtractArrays(maxValuesVelocity, minValuesVelocity);
  const randomValues = getArrayWithRandomValues(dimension);

  return getRandomValues({
    randomValues,
    minValues: minValuesVelocity,
    middleValues: middleValuesVelocity,
  });
};
