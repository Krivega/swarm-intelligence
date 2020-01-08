import Events from '../Events';

const CHANGE_EVENT_NAME = ['change'];

class MousePosition {
  constructor(element) {
    this.position = {};
    this._initDefaultPosition(element);
    this._events = new Events([CHANGE_EVENT_NAME]);
    this._initListenerMouseMove(element);
  }

  _initDefaultPosition(element) {
    const { width, height } = element;
    const x = width / 2;
    const y = height / 2;

    this._setPosition({ x, y });
  }

  _initListenerMouseMove(element) {
    const changePosition = event =>
      window.requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        this._setPosition({ x, y });
        this._events.trigger(CHANGE_EVENT_NAME, this.position);
      });

    element.addEventListener('mousemove', changePosition);
  }

  _setPosition({ x, y }) {
    this.position = { x, y };
  }

  onChange(callback) {
    this._events.on(CHANGE_EVENT_NAME, callback);
  }
}

export default MousePosition;
