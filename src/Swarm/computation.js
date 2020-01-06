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
