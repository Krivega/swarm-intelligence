import { REQUEST_ANIMATION_FRAME_TIMEOUT } from '../../setupTests';
import delayPromise from '../../Promise/delayPromise';
import AnimationRequest from '../index';

const delayTimeout = REQUEST_ANIMATION_FRAME_TIMEOUT / 4;

/**
 * Calc desiredCount calls
 * @param {Object} params - Params for execution
 * @param {number} params.timeoutRun - Timeout run frames
 * @param {number} params.fps - Desired Frames per Second
 * @param {number} params.countRuns - Count runs animate
 * @returns {number} count
 */
const calcDesiredCountCalls = ({ timeoutRun, fps, countRuns }) => {
  const timeElapsed = timeoutRun * countRuns;
  const fpsInterval = 1000 / fps;

  let count = timeElapsed / fpsInterval;

  if (timeoutRun > fpsInterval) {
    count = countRuns;
  }

  return Math.floor(count) + 1;
};

describe('AnimationRequest: animate', () => {
  let animationRequest;

  let mockFn;

  let mockFn2;

  beforeEach(() => {
    jest.resetModules();
    animationRequest = new AnimationRequest();
    mockFn = jest.fn();
    mockFn2 = jest.fn();

    animationRequest.activate();
  });

  it('animate: default fps=60', () => {
    const countRuns = 2;
    const fps = 60;

    expect.assertions(1);

    animationRequest.animate(mockFn);

    return delayPromise(REQUEST_ANIMATION_FRAME_TIMEOUT * countRuns + delayTimeout).then(() => {
      animationRequest.deactivate();

      expect(mockFn.mock.calls.length).toBeLessThanOrEqual(
        calcDesiredCountCalls({ fps, countRuns, timeoutRun: REQUEST_ANIMATION_FRAME_TIMEOUT })
      );
    });
  });

  it('animate: call 2 times fps=60', () => {
    const countRuns = 3;
    const fps = 60;

    expect.assertions(2);

    animationRequest.animate(mockFn);
    animationRequest.animate(mockFn2);

    return delayPromise(REQUEST_ANIMATION_FRAME_TIMEOUT * countRuns + delayTimeout).then(() => {
      animationRequest.deactivate();

      expect(mockFn).toHaveBeenCalledTimes(0);
      expect(mockFn2.mock.calls.length).toBeLessThanOrEqual(
        calcDesiredCountCalls({ fps, countRuns, timeoutRun: REQUEST_ANIMATION_FRAME_TIMEOUT })
      );
    });
  });

  it('animate: fps=1', () => {
    const countRuns = 1;
    const fps = 1;

    expect.assertions(1);

    animationRequest.animate(mockFn, fps);

    return delayPromise(REQUEST_ANIMATION_FRAME_TIMEOUT * countRuns + delayTimeout).then(() => {
      animationRequest.deactivate();

      expect(mockFn.mock.calls.length).toBeLessThanOrEqual(
        calcDesiredCountCalls({ fps, countRuns, timeoutRun: REQUEST_ANIMATION_FRAME_TIMEOUT })
      );
    });
  });

  it('animate: less interval', () => {
    const countRuns = 6;
    const fps = countRuns - 2;

    expect.assertions(1);

    animationRequest.animate(mockFn, fps);

    return delayPromise(REQUEST_ANIMATION_FRAME_TIMEOUT * countRuns + delayTimeout).then(() => {
      animationRequest.deactivate();

      expect(mockFn.mock.calls.length).toBeLessThanOrEqual(
        calcDesiredCountCalls({ fps, countRuns, timeoutRun: REQUEST_ANIMATION_FRAME_TIMEOUT })
      );
    });
  });

  it('animate: less 1 fps', () => {
    const countRuns = 2;
    const fps = 1 / 4;

    expect.assertions(1);

    animationRequest.animate(mockFn, fps);

    return delayPromise(REQUEST_ANIMATION_FRAME_TIMEOUT * countRuns + delayTimeout).then(() => {
      animationRequest.deactivate();

      expect(mockFn.mock.calls.length).toBeLessThanOrEqual(
        calcDesiredCountCalls({ fps, countRuns, timeoutRun: REQUEST_ANIMATION_FRAME_TIMEOUT }) + 1 // 1 or 2
      );
    });
  });

  it('animate: more interval', () => {
    const countRuns = 6;
    const fps = countRuns + 2;

    expect.assertions(1);

    animationRequest.animate(mockFn, fps);

    return delayPromise(REQUEST_ANIMATION_FRAME_TIMEOUT * countRuns + delayTimeout).then(() => {
      animationRequest.deactivate();

      expect(mockFn.mock.calls.length).toBeLessThanOrEqual(
        calcDesiredCountCalls({ fps, countRuns, timeoutRun: REQUEST_ANIMATION_FRAME_TIMEOUT })
      );
    });
  });
});
