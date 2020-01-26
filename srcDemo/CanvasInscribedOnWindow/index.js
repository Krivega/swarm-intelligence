import Events from 'events-constructor';
import createCanvas, { setSizeCanvas } from '../canvas';

const CHANGE_SIZE_EVENT_NAME = 'change-size';

class CanvasInscribedOnWindow {
  constructor() {
    this._events = new Events([CHANGE_SIZE_EVENT_NAME]);

    this.canvasElement = createCanvas();
    this.setSizeCanvasFromWindow();

    window.addEventListener('resize', this._onChangeSize);
  }

  setSizeCanvasFromWindow = () =>
    setSizeCanvas(
      this.canvasElement,
      document.documentElement.clientWidth,
      document.documentElement.clientHeight
    );

  _onChangeSize = () => {
    window.requestAnimationFrame(() => {
      this.setSizeCanvasFromWindow();
      this._events.trigger(CHANGE_SIZE_EVENT_NAME);
    });
  };

  onChangeSize(callback) {
    this._events.on(CHANGE_SIZE_EVENT_NAME, callback);
  }
}

export default CanvasInscribedOnWindow;
