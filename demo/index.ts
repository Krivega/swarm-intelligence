import CanvasInscribedOnWindow from './CanvasInscribedOnWindow';
import Configurator from './Configurator';
import renderInfo from './renderInfo';
import { ObjectiveFunctionMouseTracking, drawer } from '../src/render';
import {
  createGriewankSwarm,
  createParaboloidSwarm,
  createRastriginSwarm,
  createRosenbrockSwarm,
  createSchwefelSwarm,
} from '../src/swarmCreators';

import type { Swarm } from '../src';

const configurator = new Configurator();
const canvasInscribedOnWindow = new CanvasInscribedOnWindow();
const { canvasElement } = canvasInscribedOnWindow;
const objectiveFunctionMouseTracking = new ObjectiveFunctionMouseTracking(canvasElement);
const { start: startDraw, stop: stopDraw } = drawer({ canvasElement });

let swarm: Swarm | undefined;

const createSwarmFromConfigurator = (): void => {
  stopDraw();

  const { resolveObjectiveFunction: adjustObjectiveFunction } = objectiveFunctionMouseTracking;
  let formula: string | undefined;

  switch (configurator.typeOfObjectiveFunction) {
    case 'griewank': {
      swarm = createGriewankSwarm({ canvasElement, adjustObjectiveFunction });
      formula = 'f(x,y) = 1 + (1 / 4000) * (x^2 + y^2) - cos(x) * cos(y / sqrt(2))';
      break;
    }
    case 'paraboloid': {
      swarm = createParaboloidSwarm({ canvasElement, adjustObjectiveFunction });
      formula = 'f(x,y) = x^2 + y^2';
      break;
    }
    case 'rastrigin': {
      swarm = createRastriginSwarm({ canvasElement, adjustObjectiveFunction });
      formula = 'f(x,y) = 10 * 2 + (x^2 - 10 * cos(2 * pi * x) + (y^2 - 10 * cos(2 * pi * y))';
      break;
    }
    case 'rosenbrock': {
      swarm = createRosenbrockSwarm({ canvasElement, adjustObjectiveFunction });
      formula = 'f(x,y) = (1 - x)^2 + 100 * (y - x^2)^2';
      break;
    }
    case 'schwefel': {
      swarm = createSchwefelSwarm({ canvasElement, adjustObjectiveFunction });
      formula = 'f(x,y) = - x * sin(2 * sqrt(abs(x))) - y * sin(2 * sqrt(abs(y)))';
      break;
    }
    default: {
      break;
    }
  }

  if (swarm !== undefined && formula !== undefined) {
    startDraw(swarm);
    renderInfo({ formula, swarm, id: configurator.typeOfObjectiveFunction });
  }
};

const setFollowCursorFromConfigurator = (): void => {
  if (configurator.isFollowCursor) {
    objectiveFunctionMouseTracking.startMouseTracking();
  } else {
    objectiveFunctionMouseTracking.stopMouseTracking();
    objectiveFunctionMouseTracking.resetTarget();
  }
};

const initSwarm = (): void => {
  objectiveFunctionMouseTracking.resetTarget();
  createSwarmFromConfigurator();
  setFollowCursorFromConfigurator();
};

const resetBestPositionFromMouse = (): void => {
  if (swarm !== undefined) {
    const [x, y] = objectiveFunctionMouseTracking.target;

    swarm.resetBestPosition([x, y]);
  }
};

objectiveFunctionMouseTracking.onChange(resetBestPositionFromMouse);

configurator.onChangeFollowCursor(setFollowCursorFromConfigurator);
configurator.onChangeObjectiveFunction(createSwarmFromConfigurator);
configurator.onReset(initSwarm);

canvasInscribedOnWindow.onChangeSize(initSwarm);

document.body.append(canvasElement);
initSwarm();
