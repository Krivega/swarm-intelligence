const createCanvas = (): HTMLCanvasElement => {
  const canvasElement = document.createElement('canvas');

  return canvasElement;
};

const setSizeCanvas = (canvasElement: HTMLCanvasElement, width: number, height: number): void => {
  /* eslint-disable no-param-reassign -- canvas dimensions must be set in place */
  canvasElement.width = width;
  canvasElement.height = height;
  /* eslint-enable no-param-reassign */
};

const fillBackground = (context: CanvasRenderingContext2D, color: string): void => {
  const {
    canvas: { width, height },
  } = context;

  context.fillStyle = color;
  context.fillRect(0, 0, width, height);
};

const drawRect = (
  context: CanvasRenderingContext2D,
  { color, x, y, size = 2 }: { color: string; x: number; y: number; size?: number },
): void => {
  context.fillStyle = color;
  context.fillRect(x < 0 ? 0 : x, y < 0 ? 0 : y, size, size);
};

export default {
  createCanvas,
  setSizeCanvas,
  fillBackground,
  drawRect,
};
