import Swarm from '../../src/Swarm';
import getArrayWithRandomValues from '../../src/utils/getArrayWithRandomValues';
import paraboloid, {
  isBetterValueOfBestValue,
  recommendedVelocities,
} from '../../src/objectiveFunctions/paraboloid';
import createConfig from './createConfig';

const velocity = 0.4;

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
    objectiveFunction: adjustObjectiveFunction(paraboloid),
  });

  return swarm;
};

export default createSwarm;
