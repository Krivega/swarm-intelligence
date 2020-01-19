import Swarm from '../../Swarm';
import createCanvas, { setSizeCanvas } from '../../canvas';
import getArrayWithRandomValues from '../../utils/getArrayWithRandomValues';
import griewank, {
  isBetterValueOfBestValue,
  recommendedVelocities
} from '../../objectiveFunctions/griewank';
import resolveObjectiveFunctionMouseTracking from '../../resolveObjectiveFunctionMouseTracking';
import createConfig from '../createConfig';

export const canvasElement = createCanvas();

const velocity = 0.08;

const setSizeCanvasFromWindow = () =>
  setSizeCanvas(
    canvasElement,
    document.documentElement.clientWidth,
    document.documentElement.clientHeight
  );

setSizeCanvasFromWindow();

/* eslint-disable no-use-before-define */
const onChangeTarget = ([targetX, targetY]) => {
  swarm.resetBestPosition({
    bestValue: objectiveFunction([targetX, targetY]),
    bestPosition: [targetX, targetY]
  });
};
/* eslint-enable no-use-before-define */

const objectiveFunction = resolveObjectiveFunctionMouseTracking({
  canvasElement,
  objectiveFunction: griewank,
  onChange: onChangeTarget
});

const swarm = new Swarm({
  ...createConfig({
    velocity,
    recommendedVelocities,
    maxX: canvasElement.width,
    maxY: canvasElement.height
  }),
  isBetterValueOfBestValue,
  getArrayWithRandomValues,
  objectiveFunction
});

export default swarm;
