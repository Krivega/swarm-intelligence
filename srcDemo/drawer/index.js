import AnimationRequest from 'request-animation-runner';
import { fillBackground, drawRect } from '../canvas';

const drawer = ({
  canvasElement,
  backgroundColor = 'rgba(217,217,217,0.25)',
  boidColor = '#231f20',
}) => {
  const animationRequest = new AnimationRequest();
  const context = canvasElement.getContext('2d');

  const resetCanvas = () => {
    fillBackground(context, backgroundColor);
  };

  const drawBoid = ({ position }) => {
    const [x, y] = position;

    drawRect(context, { x, y, color: boidColor });
  };

  const draw = (boids) => {
    resetCanvas();
    boids.forEach(drawBoid);
  };

  const start = (swarm) => {
    animationRequest.activate();
    draw(swarm.boids);

    animationRequest.run(() => {
      swarm.nextIteration();
      draw(swarm.boids);
    });
  };

  const stop = () => animationRequest.deactivate();

  return { start, stop };
};

export default drawer;
