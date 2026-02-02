import createConfig from './createConfig';
import { schwefel } from '../objectiveFunctions';
import Swarm from '../Swarm';
import getArrayWithRandomValues from '../utils/getArrayWithRandomValues';

import type { ObjectiveFunction } from '../types';

const createSwarm = ({
  canvasElement,
  adjustObjectiveFunction,
}: {
  canvasElement: HTMLCanvasElement;
  adjustObjectiveFunction: (function_: ObjectiveFunction) => ObjectiveFunction;
}): Swarm => {
  const swarm = new Swarm({
    ...createConfig({
      recommendedVelocities: schwefel.recommendedVelocities,
      maxX: canvasElement.width,
      maxY: canvasElement.height,
    }),
    isBetterValueOfBestValue: schwefel.isBetterValueOfBestValue,
    getArrayWithRandomValues,
    objectiveFunction: adjustObjectiveFunction(schwefel.function),
  });

  return swarm;
};

export default createSwarm;
