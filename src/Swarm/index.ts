import Boid from '../Boid';
import { getInitPosition, getInitVelocity, resolveCalcVelocity } from './computation';

import type { SwarmOptions } from '../types';

class Swarm {
  public bestValue: number | undefined;

  public bestPosition: number[] | undefined;

  private readonly getArrayWithRandomValuesFn: SwarmOptions['getArrayWithRandomValues'];

  private readonly isBetterValueOfBestValueFn: SwarmOptions['isBetterValueOfBestValue'];

  private readonly objectiveFunctionFn: SwarmOptions['objectiveFunction'];

  private readonly dimensionSize: number;

  private readonly swarmSize: number;

  private readonly currentVelocityRatioVal: number;

  private readonly localVelocityRatioVal: number;

  private readonly globalVelocityRatioVal: number;

  private readonly minValuesArr: number[];

  private readonly maxValuesArr: number[];

  private readonly boidsArr: Boid[];

  public constructor(options: SwarmOptions) {
    const {
      getArrayWithRandomValues,
      isBetterValueOfBestValue,
      objectiveFunction,
      dimension,
      size,
      currentVelocityRatio,
      localVelocityRatio,
      globalVelocityRatio,
      minValues,
      maxValues,
    } = options;

    this.getArrayWithRandomValuesFn = getArrayWithRandomValues;
    this.isBetterValueOfBestValueFn = isBetterValueOfBestValue;
    this.objectiveFunctionFn = objectiveFunction;
    this.dimensionSize = dimension;
    this.swarmSize = size;
    this.currentVelocityRatioVal = currentVelocityRatio;
    this.localVelocityRatioVal = localVelocityRatio;
    this.globalVelocityRatioVal = globalVelocityRatio;
    this.minValuesArr = [...minValues];
    this.maxValuesArr = [...maxValues];

    this.boidsArr = this.createSwarm();
  }

  public get boids(): { velocity: number[]; bestPosition: number[]; position: number[] }[] {
    return this.boidsArr.map(({ velocity, bestPosition, position }) => {
      return {
        velocity,
        bestPosition: bestPosition ?? position,
        position,
      };
    });
  }

  public get size(): number {
    return this.swarmSize;
  }

  public get minValues(): number[] {
    return [...this.minValuesArr];
  }

  public get maxValues(): number[] {
    return [...this.maxValuesArr];
  }

  public get currentVelocityRatio(): number {
    return this.currentVelocityRatioVal;
  }

  public get localVelocityRatio(): number {
    return this.localVelocityRatioVal;
  }

  public get globalVelocityRatio(): number {
    return this.globalVelocityRatioVal;
  }

  public nextIteration(): void {
    this.boidsArr.forEach((boid) => {
      this.nextIterationBoid(boid);
    });
  }

  public resetBestPosition(bestPosition: number[]): void {
    const bestValue = this.objectiveFunctionFn(bestPosition);

    delete this.bestValue;
    this.boidsArr.forEach((boid) => {
      this.resetBestPositionBoid(boid);
    });

    this.updateBestValues({
      bestValue,
      bestPosition,
    });
  }

  private createSwarm(): Boid[] {
    return Array.from({ length: this.swarmSize }, () => {
      const boid = this.createBoid();
      const { bestValue, bestPosition } = boid;

      if (bestValue !== undefined && bestPosition !== undefined) {
        this.updateBestValues({
          bestValue,
          bestPosition,
        });
      }

      return boid;
    });
  }

  private createBoid(): Boid {
    const position = getInitPosition({
      dimension: this.dimensionSize,
      getArrayWithRandomValues: this.getArrayWithRandomValuesFn,
      minValues: this.minValuesArr,
      maxValues: this.maxValuesArr,
    });
    const velocity = getInitVelocity({
      dimension: this.dimensionSize,
      getArrayWithRandomValues: this.getArrayWithRandomValuesFn,
      minValues: this.minValuesArr,
      maxValues: this.maxValuesArr,
    });

    const boid = new Boid({
      position,
      velocity,
    });

    boid.initBestPosition({
      objectiveFunction: this.objectiveFunctionFn,
      isBetterValueOfBestValue: this.isBetterValueOfBestValueFn,
    });

    return boid;
  }

  private updateBestValues({
    bestValue,
    bestPosition,
  }: {
    bestValue: number;
    bestPosition: number[];
  }): void {
    if (
      this.bestValue === undefined ||
      this.isBetterValueOfBestValueFn(bestValue, this.bestValue)
    ) {
      this.bestValue = bestValue;
      this.bestPosition = bestPosition;
    }
  }

  private nextIterationBoid(boid: Boid): void {
    const globalBest = this.bestPosition ?? [];
    const calcVelocity = resolveCalcVelocity({
      dimension: this.dimensionSize,
      getArrayWithRandomValues: this.getArrayWithRandomValuesFn,
      currentVelocityRatio: this.currentVelocityRatioVal,
      localVelocityRatio: this.localVelocityRatioVal,
      globalVelocityRatio: this.globalVelocityRatioVal,
      globalBestPosition: globalBest,
    });

    boid.nextIteration({
      calcVelocity,
      objectiveFunction: this.objectiveFunctionFn,
      isBetterValueOfBestValue: this.isBetterValueOfBestValueFn,
    });

    const { bestValue, bestPosition } = boid;

    if (bestValue !== undefined && bestPosition !== undefined) {
      this.updateBestValues({
        bestValue,
        bestPosition,
      });
    }
  }

  private resetBestPositionBoid(boid: Boid): void {
    boid.resetBestPosition({
      objectiveFunction: this.objectiveFunctionFn,
      isBetterValueOfBestValue: this.isBetterValueOfBestValueFn,
    });
  }
}

export default Swarm;
