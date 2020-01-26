import Swarm from '../../src/Swarm';
import getArrayWithRandomValues from '../../src/utils/getArrayWithRandomValues';
import schwefel, {
  isBetterValueOfBestValue,
  recommendedVelocities
} from '../../src/objectiveFunctions/schwefel';
import createConfig from './createConfig';

const createSwarm = ({ canvasElement, adjustObjectiveFunction }) => {
  const swarm = new Swarm({
    ...createConfig({
      recommendedVelocities,
      maxX: canvasElement.width,
      maxY: canvasElement.height
    }),
    isBetterValueOfBestValue,
    getArrayWithRandomValues,
    objectiveFunction: adjustObjectiveFunction(schwefel)
  });

  return swarm;
};

export default createSwarm;
