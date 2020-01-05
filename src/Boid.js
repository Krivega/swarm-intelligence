import foldArrays from './utils/foldArrays';
import subtractArrays from './utils/subtractArrays';
import multiplyArrays from './utils/multiplyArrays';
import multiplyArrayByNumber from './utils/multiplyArrayByNumber';

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

  // return foldArrays(middleValuesVelocity, minValuesVelocity);
  return getRandomValues({
    randomValues,
    minValues: minValuesVelocity,
    middleValues: middleValuesVelocity
  });
};

class Boid {
  constructor({
    objectiveFunction,
    dimension,
    minValues,
    maxValues,
    position,
    getArrayWithRandomValues
  }) {
    this.objectiveFunction = objectiveFunction;
    this.dimension = dimension;
    this.getArrayWithRandomValues = getArrayWithRandomValues;
    this.minValues = [...minValues];
    this.maxValues = [...maxValues];
    this.position = [...position];
    this.bestPosition = [...position];
    this.bestValue = this.calcValue(this.position);
    this.velocity = getInitVelocity({ dimension, minValues, maxValues, getArrayWithRandomValues });
  }

  calcValue(position) {
    return this.objectiveFunction(position);
  }
}

export default Boid;
