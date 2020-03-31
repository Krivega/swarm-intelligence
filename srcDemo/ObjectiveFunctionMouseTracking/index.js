import Events from 'events-constructor';
import MousePosition from '../MousePosition';

const CHANGE_EVENT_NAME = 'change';

class ObjectiveFunctionMouseTracking {
  constructor(canvasElement) {
    this.mousePosition = new MousePosition(canvasElement);
    this._events = new Events([CHANGE_EVENT_NAME]);

    this.setTargetFromMouse();

    this.mousePosition.onChange(this.moveTarget);
  }

  setTargetFromMouse() {
    const { x, y } = this.mousePosition.position;

    this.target = [x, y];
  }

  moveTarget = () => {
    this.setTargetFromMouse();
    this._events.trigger(CHANGE_EVENT_NAME);
  };

  resolveObjectiveFunction = (objectiveFunction) => ([x, y]) => {
    const [targetX, targetY] = this.target;

    return objectiveFunction([targetX - x, targetY - y]);
  };

  startMouseTracking = () => this.mousePosition.startTracking();

  stopMouseTracking = () => this.mousePosition.stopTracking();

  resetTarget() {
    this.mousePosition.resetPosition();
    this.moveTarget();
  }

  onChange(callback) {
    this._events.on(CHANGE_EVENT_NAME, callback);
  }
}

export default ObjectiveFunctionMouseTracking;
