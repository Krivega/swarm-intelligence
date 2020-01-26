import Events from 'events-constructor';

const CHANGE_EVENT_NAME = 'change';

class MousePosition {
  constructor(element) {
    this._element = element;
    this.position = {};
    this._initDefaultPosition();
    this._events = new Events([CHANGE_EVENT_NAME]);
  }

  _initDefaultPosition() {
    const { width, height } = this._element;
    const x = width / 2;
    const y = height / 2;

    this._setPosition({ x, y });
  }

  resetPosition() {
    this._initDefaultPosition();
  }

  startTracking() {
    this._element.addEventListener('mousemove', this._onChangePosition);
  }

  stopTracking() {
    this._element.removeEventListener('mousemove', this._onChangePosition);

    if (this._requestID) {
      window.cancelAnimationFrame(this._requestID);
    }
  }

  onChange(callback) {
    this._events.on(CHANGE_EVENT_NAME, callback);
  }

  _onChangePosition = event => {
    this._requestID = window.requestAnimationFrame(() => {
      const rect = this._element.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      this._setPosition({ x, y });
      this._events.trigger(CHANGE_EVENT_NAME, this.position);
    });
  };

  _setPosition({ x, y }) {
    this.position = { x, y };
  }
}

export default MousePosition;
