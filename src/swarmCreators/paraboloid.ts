import createConfig from './createConfig';
import { paraboloid } from '../objectiveFunctions';
import Swarm from '../Swarm';
import getArrayWithRandomValues from '../utils/getArrayWithRandomValues';

import type { ObjectiveFunction } from '../types';

const velocity = 0.4;

const createSwarm = ({
  canvasElement,
  adjustObjectiveFunction,
}: {
  canvasElement: HTMLCanvasElement;
  adjustObjectiveFunction: (function_: ObjectiveFunction) => ObjectiveFunction;
}): Swarm => {
  const swarm = new Swarm({
    ...createConfig({
      velocity,
      recommendedVelocities: paraboloid.recommendedVelocities,
      maxX: canvasElement.width,
      maxY: canvasElement.height,
    }),
    isBetterValueOfBestValue: paraboloid.isBetterValueOfBestValue,
    getArrayWithRandomValues,
    objectiveFunction: adjustObjectiveFunction(paraboloid.function),
  });

  return swarm;
};

export default createSwarm;
