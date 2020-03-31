import { calcPosition } from './computation';

class Boid {
  constructor({ position, velocity }) {
    this.position = [...position];
    this.velocity = velocity;
  }

  resetBestPosition({ objectiveFunction, isBetterValueOfBestValue }) {
    delete this.bestValue;
    this.initBestPosition({ objectiveFunction, isBetterValueOfBestValue });
  }

  initBestPosition({ objectiveFunction, isBetterValueOfBestValue }) {
    this._checkAndUpdateBestPosition({ objectiveFunction, isBetterValueOfBestValue });
  }

  nextIteration({ calcVelocity, objectiveFunction, isBetterValueOfBestValue }) {
    this._changeVelocity(calcVelocity);
    this._move(this.velocity);
    this._checkAndUpdateBestPosition({ objectiveFunction, isBetterValueOfBestValue });
  }

  _changeVelocity(calcVelocity) {
    const { velocity, bestPosition, position } = this;

    this.velocity = calcVelocity({
      currentVelocity: velocity,
      localBestPosition: bestPosition,
      currentPosition: position,
    });
  }

  _move(velocity) {
    this.position = calcPosition({ velocity, currentPosition: this.position });
  }

  _checkAndUpdateBestPosition({ objectiveFunction, isBetterValueOfBestValue }) {
    const value = objectiveFunction(this.position);

    if (this.bestValue === undefined || isBetterValueOfBestValue(value, this.bestValue)) {
      this.bestValue = value;
      this.bestPosition = [...this.position];
    }
  }
}

export default Boid;
