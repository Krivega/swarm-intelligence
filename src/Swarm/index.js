import Boid from '../Boid';
import { getInitPosition, getInitVelocity } from './computation';

class Swarm {
  constructor({
    getArrayWithRandomValues,
    objectiveFunction,
    currentVelocityRatio,
    localVelocityRatio,
    globalVelocityRatio,
    minValues,
    maxValues,
    size,
    dimension
  }) {
    this._getArrayWithRandomValues = getArrayWithRandomValues;
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
    return Array.from({ length: this._size }, () => this._createBoid());
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

    return new Boid({
      objectiveFunction: this._objectiveFunction,
      position,
      velocity
    });
  }
}

export default Swarm;
