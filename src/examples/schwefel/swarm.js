import Swarm from '../../Swarm';
import createCanvas, { setSizeCanvas } from '../../canvas';
import getArrayWithRandomValues from '../../utils/getArrayWithRandomValues';
import schwefel, {
  isBetterValueOfBestValue,
  recommendedVelocities
} from '../../objectiveFunctions/schwefel';
import resolveObjectiveFunctionMouseTracking from '../../resolveObjectiveFunctionMouseTracking';
import createConfig from './config';

export const canvasElement = createCanvas();

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
  objectiveFunction: schwefel,
  onChange: onChangeTarget
});

const swarm = new Swarm({
  ...createConfig({ recommendedVelocities, maxX: canvasElement.width, maxY: canvasElement.height }),
  isBetterValueOfBestValue,
  getArrayWithRandomValues,
  objectiveFunction
});

export default swarm;
