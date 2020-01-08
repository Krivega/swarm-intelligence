import Swarm from '../../Swarm';
import createCanvas, { setSizeCanvas } from '../../canvas';
import getArrayWithRandomValues from '../../utils/getArrayWithRandomValues';
import paraboloid, { isBetterValueOfBestValue } from '../../objectiveFunctions/paraboloid';
import resolveObjectiveFunctionMouseTracking from '../../resolveObjectiveFunctionMouseTracking';
import drawer from '../../drawer';

document.body.style.overflow = 'hidden';

const canvasElement = createCanvas();
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
  objectiveFunction: paraboloid,
  onChange: onChangeTarget
});

const size = 200;
const minValues = [0, 0];
const maxValues = [canvasElement.width, canvasElement.height];
const currentVelocityRatio = 0.02;
const localVelocityRatio = 1.0;
const globalVelocityRatio = 5.0;
const dimension = 2;
const swarm = new Swarm({
  currentVelocityRatio,
  isBetterValueOfBestValue,
  localVelocityRatio,
  globalVelocityRatio,
  minValues,
  maxValues,
  size,
  dimension,
  getArrayWithRandomValues,
  objectiveFunction
});

document.body.appendChild(canvasElement);
drawer({ swarm, canvasElement });
