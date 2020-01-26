import Events from 'events-constructor';

const CHANGE_OBJECTIVE_FUNCTION_EVENT_NAME = 'change-objective-function';
const CHANGE_FOLLOW_CURSOR_EVENT_NAME = 'change-follow-cursor';
const RESET_EVENT_NAME = 'reset';

class Configurator {
  constructor() {
    this._events = new Events([
      CHANGE_OBJECTIVE_FUNCTION_EVENT_NAME,
      CHANGE_FOLLOW_CURSOR_EVENT_NAME,
      RESET_EVENT_NAME
    ]);

    this._initElements();
    this._initEventsListeners();
  }

  _initElements() {
    const configuratorElement = document.getElementsByClassName('configurator')[0];

    [this.objectiveFunctionSelectElement] = configuratorElement.getElementsByClassName(
      'js-objective-function-select'
    );
    [this.followCursorElement] = configuratorElement.getElementsByClassName('js-follow-cursor');
    [this.resetElement] = configuratorElement.getElementsByClassName('js-reset');
  }

  _initEventsListeners() {
    this.objectiveFunctionSelectElement.addEventListener(
      'change',
      this._handleChangeObjectiveFunction
    );
    this.followCursorElement.addEventListener('change', this._handleChangeFollowCursor);
    this.resetElement.addEventListener('click', this._handleClickReset);
  }

  _handleChangeObjectiveFunction = () => {
    this._events.trigger(CHANGE_OBJECTIVE_FUNCTION_EVENT_NAME, this.typeOfObjectiveFunction);
  };

  _handleChangeFollowCursor = () => {
    this._events.trigger(CHANGE_FOLLOW_CURSOR_EVENT_NAME, this.isFollowCursor);
  };

  _handleClickReset = () => {
    this._events.trigger(RESET_EVENT_NAME);
  };

  get typeOfObjectiveFunction() {
    return this.objectiveFunctionSelectElement.value;
  }

  get isFollowCursor() {
    return this.followCursorElement.checked;
  }

  onChangeObjectiveFunction(callback) {
    this._events.on(CHANGE_OBJECTIVE_FUNCTION_EVENT_NAME, callback);
  }

  onChangeFollowCursor(callback) {
    this._events.on(CHANGE_FOLLOW_CURSOR_EVENT_NAME, callback);
  }

  onReset(callback) {
    this._events.on(RESET_EVENT_NAME, callback);
  }
}

export default Configurator;
