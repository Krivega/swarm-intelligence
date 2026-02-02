/** Position or velocity vector (array of numbers) */
export type Vector = number[];

/** Objective function: takes position, returns value */
export type ObjectiveFunction = (_position: Vector) => number;

/** Compares two values; returns true if first is "better" than second */
export type IsBetterValue = (_value: number, _bestValue: number) => boolean;

/** Returns array of random numbers in [0, 1) */
export type GetArrayWithRandomValues = (_size: number) => number[];

export interface RecommendedVelocities {
  currentVelocityRatio: number;
  localVelocityRatio: number;
  globalVelocityRatio: number;
}

export interface SwarmOptions {
  getArrayWithRandomValues: GetArrayWithRandomValues;
  objectiveFunction: ObjectiveFunction;
  isBetterValueOfBestValue: IsBetterValue;
  currentVelocityRatio: number;
  localVelocityRatio: number;
  globalVelocityRatio: number;
  minValues: Vector;
  maxValues: Vector;
  size: number;
  dimension: number;
}

export interface BoidState {
  velocity: Vector;
  bestPosition: Vector;
  position: Vector;
}
