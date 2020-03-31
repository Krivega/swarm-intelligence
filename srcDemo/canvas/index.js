const createCanvas = () => {
  const canvasElement = document.createElement('canvas');

  return canvasElement;
};

/* eslint-disable no-param-reassign */
export const setSizeCanvas = (canvasElement, width, height) => {
  canvasElement.width = width;
  canvasElement.height = height;
};
/* eslint-enable no-param-reassign */

/* eslint-disable no-param-reassign */
export const fillBackground = (context, color) => {
  const {
    canvas: { width, height },
  } = context;

  context.fillStyle = color;
  context.fillRect(0, 0, width, height);
};
/* eslint-enable no-param-reassign */

/* eslint-disable no-param-reassign */
export const drawRect = (context, { color, x, y, size = 2 }) => {
  context.fillStyle = color;
  context.fillRect(x < 0 ? 0 : x, y < 0 ? 0 : y, size, size);
};
/* eslint-enable no-param-reassign */

export default createCanvas;
