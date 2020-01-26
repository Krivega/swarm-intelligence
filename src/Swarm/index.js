import Boid from '../Boid';
import { getInitPosition, getInitVelocity, resolveCalcVelocity } from './computation';

class Swarm {
  constructor({
    getArrayWithRandomValues,
    objectiveFunction,
    isBetterValueOfBestValue,
    currentVelocityRatio,
    localVelocityRatio,
    globalVelocityRatio,
    minValues,
    maxValues,
    size,
    dimension
  }) {
    this._getArrayWithRandomValues = getArrayWithRandomValues;
    this._isBetterValueOfBestValue = isBetterValueOfBestValue;
    this._objectiveFunction = objectiveFunction;
    this._dimension = dimension;
    this._size = size;
    this._currentVelocityRatio = currentVelocityRatio;
    this._localVelocityRatio = localVelocityRatio;
    this._globalVelocityRatio = globalVelocityRatio;
    this._minValues = [...minValues];
    this._maxValues = [...maxValues];

    this._boids = this._createSwarm();
  }

  _createSwarm() {
    return Array.from({ length: this._size }, () => {
      const boid = this._createBoid();
      const { bestValue, bestPosition } = boid;

      this._updateBestValues({
        bestValue,
        bestPosition
      });

      return boid;
    });
  }

  _createBoid() {
    const position = getInitPosition({
      dimension: this._dimension,
      getArrayWithRandomValues: this._getArrayWithRandomValues,
      minValues: this._minValues,
      maxValues: this._maxValues
    });
    const velocity = getInitVelocity({
      dimension: this._dimension,
      getArrayWithRandomValues: this._getArrayWithRandomValues,
      minValues: this._minValues,
      maxValues: this._maxValues
    });

    const boid = new Boid({
      position,
      velocity
    });

    boid.initBestPosition({
      objectiveFunction: this._objectiveFunction,
      isBetterValueOfBestValue: this._isBetterValueOfBestValue
    });

    return boid;
  }

  _updateBestValues({ bestValue, bestPosition }) {
    if (this.bestValue === undefined || this._isBetterValueOfBestValue(bestValue, this.bestValue)) {
      this.bestValue = bestValue;
      this.bestPosition = bestPosition;
    }
  }

  nextIteration() {
    this._boids.forEach(boid => this._nextIterationBoid(boid));
  }

  _nextIterationBoid(boid) {
    const calcVelocity = resolveCalcVelocity({
      dimension: this._dimension,
      getArrayWithRandomValues: this._getArrayWithRandomValues,
      currentVelocityRatio: this._currentVelocityRatio,
      localVelocityRatio: this._localVelocityRatio,
      globalVelocityRatio: this._globalVelocityRatio,
      globalBestPosition: this.bestPosition
    });

    boid.nextIteration({
      calcVelocity,
      objectiveFunction: this._objectiveFunction,
      isBetterValueOfBestValue: this._isBetterValueOfBestValue
    });

    const { bestValue, bestPosition } = boid;

    this._updateBestValues({
      bestValue,
      bestPosition
    });
  }

  resetBestPosition(bestPosition) {
    const bestValue = this._objectiveFunction(bestPosition);

    delete this.bestValue;
    this._boids.forEach(boid => this._resetBestPositionBoid(boid));

    this._updateBestValues({
      bestValue,
      bestPosition
    });
  }

  _resetBestPositionBoid(boid) {
    boid.resetBestPosition({
      objectiveFunction: this._objectiveFunction,
      isBetterValueOfBestValue: this._isBetterValueOfBestValue
    });
  }

  get boids() {
    return this._boids.map(({ velocity, bestPosition, position }) => ({
      velocity,
      bestPosition,
      position
    }));
  }
}

export default Swarm;
