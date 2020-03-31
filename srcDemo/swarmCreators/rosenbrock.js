import Swarm from '../../src/Swarm';
import getArrayWithRandomValues from '../../src/utils/getArrayWithRandomValues';
import rosenbrock, {
  isBetterValueOfBestValue,
  recommendedVelocities,
} from '../../src/objectiveFunctions/rosenbrock';
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
    objectiveFunction: adjustObjectiveFunction(rosenbrock),
  });

  return swarm;
};

export default createSwarm;
