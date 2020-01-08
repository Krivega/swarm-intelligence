/**
 * AnimationRequest
 * @class
 */
export default class AnimationRequest {
  _requestID = null;

  _active = false;

  /**
   * request
   *
   * @param {function} animationFunc - Function for animation
   *
   * @returns {undefined}
   */
  request(animationFunc) {
    if (this.active) {
      this.requestID = window.requestAnimationFrame(animationFunc);
    }
  }

  /**
   * Resolve the animation loop calculates time elapsed since the last loop
   * and only draws if your specified fps interval is achieved
   *
   * @param {function} animationFunc - Function for animation
   * @param {string}   fps           - Frames per Second
   *
   * @returns {undefined}
   */
  animate(animationFunc, fps = 60) {
    const fpsInterval = 1000 / fps;

    let delta = 0; // 0 for run for first, set Date.now() if no needs first run

    /**
     * Animate loop
     *
     * @param {number} timestamp - DOMHighResTimeStamp similar to the one returned by performance.now()
     * indicating the point in time when requestAnimationFrame() starts to execute callback functions.
     *
     * @returns {undefined}
     */
    const animateLoop = timestamp => {
      this.request(animateLoop);

      // calc elapsed time since last loop
      const elapsed = timestamp - delta;

      // if enough time has elapsed, draw the next frame

      if (elapsed > fpsInterval) {
        // Get ready for next frame by setting delta=timestamp, but also adjust for your
        // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
        delta = timestamp - (elapsed % fpsInterval);

        animationFunc();
      }
    };

    this.cancelRequest();
    this.request(animateLoop);
  }

  /**
   * cancelRequest
   *
   * @returns {undefined}
   */
  cancelRequest() {
    const { requestID } = this;

    if (requestID) {
      window.cancelAnimationFrame(requestID);
    }
  }

  /**
   * activate
   *
   * @returns {undefined}
   */
  activate() {
    this.cancelRequest();
    this._active = true;
  }

  /**
   * deactivate
   *
   * @returns {undefined}
   */
  deactivate() {
    this.cancelRequest();
    this._active = false;
  }

  /**
   * requestID setter
   *
   * @param {string} requestID requestID
   *
   * @returns {undefined}
   */
  set requestID(requestID) {
    this._requestID = requestID;
  }

  /**
   * requestID getter
   *
   * @returns {string} requestID
   */
  get requestID() {
    return this._requestID;
  }

  /**
   * active getter
   *
   * @returns {boolean} active
   */
  get active() {
    return this._active;
  }
}
