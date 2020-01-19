import AnimationRequest from 'request-animation-runner';
import { fillBackground, drawRect } from '../canvas';

const drawer = ({ swarm, canvasElement }) => {
  const animationRequest = new AnimationRequest();
  const context = canvasElement.getContext('2d');

  const resetCanvas = () => {
    fillBackground(context, 'rgba(255,241,235,0.25)');
  };

  const draw = boids => {
    resetCanvas();

    boids.forEach(({ position }) => {
      const [x, y] = position;

      drawRect(context, { x, y, color: '#543D5E' });
    });
  };

  draw(swarm.boids);

  animationRequest.run(() => {
    swarm.nextIteration();
    draw(swarm.boids);
  });
};

export default drawer;
