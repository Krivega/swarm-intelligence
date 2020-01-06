import { calcPosition } from './computation';

class Boid {
  constructor({ objectiveFunction, position, velocity }) {
    this._objectiveFunction = objectiveFunction;
    this.position = [...position];
    this.bestPosition = [...position];
    this.bestValue = this._calcValue(this.position);
    this.velocity = velocity;
  }

  _calcValue(position) {
    return this._objectiveFunction(position);
  }

  nextIteration(calcVelocity) {
    this._changeVelocity(calcVelocity);
    this._move(this.velocity);
    this._checkAndUpdateBestPosition();
  }

  _changeVelocity(calcVelocity) {
    const { velocity, bestPosition, position } = this;

    this.velocity = calcVelocity({
      currentVelocity: velocity,
      localBestPosition: bestPosition,
      currentPosition: position
    });
  }

  _move(velocity) {
    this.position = calcPosition({ velocity, currentPosition: this.position });
  }

  _checkAndUpdateBestPosition() {
    const value = this._calcValue(this.position);

    if (value < this.bestValue) {
      this.bestValue = value;
      this.bestPosition = [...this.position];
    }
  }
}

export default Boid;
