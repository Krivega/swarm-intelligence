import Swarm from '../../src/Swarm';
import getArrayWithRandomValues from '../../src/utils/getArrayWithRandomValues';
import rastrigin, {
  isBetterValueOfBestValue,
  recommendedVelocities,
} from '../../src/objectiveFunctions/rastrigin';
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
    objectiveFunction: adjustObjectiveFunction(rastrigin),
  });

  return swarm;
};

export default createSwarm;
