import drawer from './drawer';
import ObjectiveFunctionMouseTracking from './ObjectiveFunctionMouseTracking';
import createGriewankSwarm from './swarmCreators/griewank';
import createParaboloidSwarm from './swarmCreators/paraboloid';
import createRastriginSwarm from './swarmCreators/rastrigin';
import createRosenbrockSwarm from './swarmCreators/rosenbrock';
import createSchwefelSwarm from './swarmCreators/schwefel';
import Configurator from './Configurator';
import CanvasInscribedOnWindow from './CanvasInscribedOnWindow';

const configurator = new Configurator();
const canvasInscribedOnWindow = new CanvasInscribedOnWindow();
const { canvasElement } = canvasInscribedOnWindow;
const objectiveFunctionMouseTracking = new ObjectiveFunctionMouseTracking(canvasElement);
const { start: startDraw, stop: stopDraw } = drawer({ canvasElement });

let swarm;

const createSwarmFromConfigurator = () => {
  stopDraw();

  const { resolveObjectiveFunction: adjustObjectiveFunction } = objectiveFunctionMouseTracking;

  switch (configurator.typeOfObjectiveFunction) {
    case 'griewank':
      swarm = createGriewankSwarm({ canvasElement, adjustObjectiveFunction });
      break;
    case 'paraboloid':
      swarm = createParaboloidSwarm({ canvasElement, adjustObjectiveFunction });
      break;
    case 'rastrigin':
      swarm = createRastriginSwarm({ canvasElement, adjustObjectiveFunction });
      break;
    case 'rosenbrock':
      swarm = createRosenbrockSwarm({ canvasElement, adjustObjectiveFunction });
      break;
    case 'schwefel':
      swarm = createSchwefelSwarm({ canvasElement, adjustObjectiveFunction });
      break;
    default:
      break;
  }

  if (swarm) {
    startDraw(swarm);
  }
};

const setFollowCursorFromConfigurator = () => {
  if (configurator.isFollowCursor) {
    objectiveFunctionMouseTracking.startMouseTracking();
  } else {
    objectiveFunctionMouseTracking.stopMouseTracking();
    objectiveFunctionMouseTracking.resetTarget();
  }
};

const initSwarm = () => {
  objectiveFunctionMouseTracking.resetTarget();
  createSwarmFromConfigurator();
  setFollowCursorFromConfigurator();
};

const resetBestPositionFromMouse = () => {
  if (swarm) {
    const [x, y] = objectiveFunctionMouseTracking.target;

    swarm.resetBestPosition([x, y]);
  }
};

objectiveFunctionMouseTracking.onChange(resetBestPositionFromMouse);

configurator.onChangeFollowCursor(setFollowCursorFromConfigurator);
configurator.onChangeObjectiveFunction(createSwarmFromConfigurator);
configurator.onReset(initSwarm);

canvasInscribedOnWindow.onChangeSize(initSwarm);

document.body.appendChild(canvasElement);
initSwarm();
