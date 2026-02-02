import AnimationRequest from 'request-animation-runner';

import canvas from './canvas';

import type Swarm from '../Swarm';

const drawer = ({
  canvasElement,
  backgroundColor = 'rgba(217,217,217,0.25)',
  boidColor = '#231f20',
}: {
  canvasElement: HTMLCanvasElement;
  backgroundColor?: string;
  boidColor?: string;
}) => {
  const animationRequest = new AnimationRequest();
  const context = canvasElement.getContext('2d');

  if (context === null) {
    throw new Error('2d context not available');
  }

  const resetCanvas = (): void => {
    canvas.fillBackground(context, backgroundColor);
  };

  const drawBoid = ({ position }: { position: number[] }): void => {
    const [x, y] = position;

    canvas.drawRect(context, { x, y, color: boidColor });
  };

  const draw = (boids: { position: number[] }[]): void => {
    resetCanvas();
    boids.forEach(drawBoid);
  };

  const start = (swarm: Swarm): void => {
    animationRequest.activate();
    draw(swarm.boids);

    animationRequest.run(() => {
      swarm.nextIteration();
      draw(swarm.boids);
    });
  };

  const stop = (): void => {
    animationRequest.deactivate();
  };

  return { start, stop };
};

export default drawer;
