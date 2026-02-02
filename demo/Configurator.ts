import { Events } from 'events-constructor';

const CHANGE_OBJECTIVE_FUNCTION_EVENT_NAME = 'change-objective-function';
const CHANGE_FOLLOW_CURSOR_EVENT_NAME = 'change-follow-cursor';
const RESET_EVENT_NAME = 'reset';

class Configurator {
  public objectiveFunctionSelectElement!: HTMLSelectElement;

  public followCursorElement!: HTMLInputElement;

  public resetElement!: HTMLButtonElement;

  private readonly events: InstanceType<typeof Events>;

  public constructor() {
    this.events = new Events([
      CHANGE_OBJECTIVE_FUNCTION_EVENT_NAME,
      CHANGE_FOLLOW_CURSOR_EVENT_NAME,
      RESET_EVENT_NAME,
    ]);

    this.initElements();
    this.initEventsListeners();
  }

  public get typeOfObjectiveFunction(): string {
    return this.objectiveFunctionSelectElement.value;
  }

  public get isFollowCursor(): boolean {
    return this.followCursorElement.checked;
  }

  public onChangeObjectiveFunction(callback: (typeOfObjectiveFunction: string) => void): void {
    this.events.on(CHANGE_OBJECTIVE_FUNCTION_EVENT_NAME, callback);
  }

  public onChangeFollowCursor(callback: (isFollowCursor: boolean) => void): void {
    this.events.on(CHANGE_FOLLOW_CURSOR_EVENT_NAME, callback);
  }

  public onReset(callback: () => void): void {
    this.events.on(RESET_EVENT_NAME, callback);
  }

  private initElements(): void {
    const configuratorElement = document.querySelectorAll('.configurator')[0] as HTMLElement;

    this.objectiveFunctionSelectElement = configuratorElement.querySelectorAll(
      '.js-objective-function-select',
    )[0] as HTMLSelectElement;
    this.followCursorElement = configuratorElement.querySelectorAll(
      '.js-follow-cursor',
    )[0] as HTMLInputElement;
    this.resetElement = configuratorElement.querySelectorAll('.js-reset')[0] as HTMLButtonElement;
  }

  private initEventsListeners(): void {
    this.objectiveFunctionSelectElement.addEventListener(
      'change',
      this.handleChangeObjectiveFunction,
    );
    this.followCursorElement.addEventListener('change', this.handleChangeFollowCursor);
    this.resetElement.addEventListener('click', this.handleClickReset);
  }

  private readonly handleChangeObjectiveFunction = (): void => {
    this.events.trigger(CHANGE_OBJECTIVE_FUNCTION_EVENT_NAME, this.typeOfObjectiveFunction);
  };

  private readonly handleChangeFollowCursor = (): void => {
    this.events.trigger(CHANGE_FOLLOW_CURSOR_EVENT_NAME, this.isFollowCursor);
  };

  private readonly handleClickReset = (): void => {
    this.events.trigger(RESET_EVENT_NAME);
  };
}

export default Configurator;
