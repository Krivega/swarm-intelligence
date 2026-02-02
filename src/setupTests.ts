export const REQUEST_ANIMATION_FRAME_TIMEOUT = 100;

const g = global as unknown as {
  requestAnimationFrame: (callback: (t: number) => void) => number;
  cancelAnimationFrame: (id: number) => void;
};

g.requestAnimationFrame = (callback) => {
  return setTimeout(() => {
    callback(Date.now());
  }, REQUEST_ANIMATION_FRAME_TIMEOUT) as unknown as number;
};
g.cancelAnimationFrame = jest.fn((id: number) => {
  clearTimeout(id as unknown as ReturnType<typeof setTimeout>);
});
