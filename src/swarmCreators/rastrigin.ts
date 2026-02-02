import createConfig from './createConfig';
import { rastrigin } from '../objectiveFunctions';
import Swarm from '../Swarm';
import getArrayWithRandomValues from '../utils/getArrayWithRandomValues';

import type { ObjectiveFunction } from '../types';

const velocity = 0.08;

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
      recommendedVelocities: rastrigin.recommendedVelocities,
      maxX: canvasElement.width,
      maxY: canvasElement.height,
    }),
    isBetterValueOfBestValue: rastrigin.isBetterValueOfBestValue,
    getArrayWithRandomValues,
    objectiveFunction: adjustObjectiveFunction(rastrigin.function),
  });

  return swarm;
};

export default createSwarm;
