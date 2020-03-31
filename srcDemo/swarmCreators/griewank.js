import Swarm from '../../src/Swarm';
import getArrayWithRandomValues from '../../src/utils/getArrayWithRandomValues';
import griewank, {
  isBetterValueOfBestValue,
  recommendedVelocities,
} from '../../src/objectiveFunctions/griewank';
import createConfig from './createConfig';

const velocity = 0.08;

const createSwarm = ({ canvasElement, adjustObjectiveFunction }) => {
  const swarm = new Swarm({
    ...createConfig({
      velocity,
      recommendedVelocities,
      maxX: canvasElement.width,
      maxY: canvasElement.height,
    }),
    isBetterValueOfBestValue,
    getArrayWithRandomValues,
    objectiveFunction: adjustObjectiveFunction(griewank),
  });

  return swarm;
};

export default createSwarm;
