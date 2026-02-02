import { calcPosition } from './computation';

import type { ObjectiveFunction, IsBetterValue } from '../types';

type CalcVelocityFunction = (_params: {
  currentVelocity: number[];
  localBestPosition: number[];
  currentPosition: number[];
}) => number[];

class Boid {
  public position: number[];

  public velocity: number[];

  public bestValue: number | undefined;

  public bestPosition: number[] | undefined;

  public constructor({ position, velocity }: { position: number[]; velocity: number[] }) {
    this.position = [...position];
    this.velocity = velocity;
  }

  public resetBestPosition({
    objectiveFunction,
    isBetterValueOfBestValue,
  }: {
    objectiveFunction: ObjectiveFunction;
    isBetterValueOfBestValue: IsBetterValue;
  }): void {
    delete this.bestValue;
    this.initBestPosition({ objectiveFunction, isBetterValueOfBestValue });
  }

  public initBestPosition({
    objectiveFunction,
    isBetterValueOfBestValue,
  }: {
    objectiveFunction: ObjectiveFunction;
    isBetterValueOfBestValue: IsBetterValue;
  }): void {
    this.checkAndUpdateBestPosition({ objectiveFunction, isBetterValueOfBestValue });
  }

  public nextIteration({
    calcVelocity,
    objectiveFunction,
    isBetterValueOfBestValue,
  }: {
    calcVelocity: CalcVelocityFunction;
    objectiveFunction: ObjectiveFunction;
    isBetterValueOfBestValue: IsBetterValue;
  }): void {
    this.applyVelocity(calcVelocity);
    this.move(this.velocity);
    this.checkAndUpdateBestPosition({ objectiveFunction, isBetterValueOfBestValue });
  }

  private applyVelocity(calcVelocity: CalcVelocityFunction): void {
    const { velocity, bestPosition, position } = this;
    const localBestPosition = bestPosition ?? position;

    this.velocity = calcVelocity({
      currentVelocity: velocity,
      localBestPosition,
      currentPosition: position,
    });
  }

  private move(velocity: number[]): void {
    this.position = calcPosition({ velocity, currentPosition: this.position });
  }

  private checkAndUpdateBestPosition({
    objectiveFunction,
    isBetterValueOfBestValue,
  }: {
    objectiveFunction: ObjectiveFunction;
    isBetterValueOfBestValue: IsBetterValue;
  }): void {
    const value = objectiveFunction(this.position);

    if (this.bestValue === undefined || isBetterValueOfBestValue(value, this.bestValue)) {
      this.bestValue = value;
      this.bestPosition = [...this.position];
    }
  }
}

export default Boid;
