import AnimationRequest from '../index';

describe('AnimationRequest', () => {
  let animationRequest;

  let mockFn;

  beforeEach(() => {
    jest.resetModules();
    animationRequest = new AnimationRequest();
    mockFn = jest.fn();
    jest.useFakeTimers();
  });

  it('request activate', () => {
    animationRequest.activate();

    expect(animationRequest.active).toBe(true);

    animationRequest.request(mockFn);
    jest.runAllTimers();

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('cancelRequest', () => {
    animationRequest.activate();
    animationRequest.request(mockFn);
    animationRequest.cancelRequest();
    jest.runAllTimers();

    expect(mockFn).toHaveBeenCalledTimes(0);
  });

  it('request deactivate', () => {
    animationRequest.activate();
    animationRequest.request(mockFn);
    jest.runAllTimers();

    expect(mockFn).toHaveBeenCalledTimes(1);

    animationRequest.deactivate();
    animationRequest.request(mockFn);
    jest.runAllTimers();

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
