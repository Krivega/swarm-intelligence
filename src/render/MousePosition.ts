import { Events } from 'events-constructor';

const CHANGE_EVENT_NAME = 'change';

interface Position {
  x: number;
  y: number;
}

class MousePosition {
  public position: Position = { x: 0, y: 0 };

  private readonly element: HTMLCanvasElement;

  private readonly events: InstanceType<typeof Events>;

  private requestID: number | undefined;

  public constructor(element: HTMLCanvasElement) {
    this.element = element;
    this.initDefaultPosition();
    this.events = new Events([CHANGE_EVENT_NAME]);
  }

  public resetPosition(): void {
    this.initDefaultPosition();
  }

  public startTracking(): void {
    this.element.addEventListener('mousemove', this.onChangePosition);
  }

  public stopTracking(): void {
    this.element.removeEventListener('mousemove', this.onChangePosition);

    if (this.requestID !== undefined) {
      window.cancelAnimationFrame(this.requestID);
    }
  }

  public onChange(callback: () => void): void {
    this.events.on(CHANGE_EVENT_NAME, callback);
  }

  private initDefaultPosition(): void {
    const { width, height } = this.element;
    const x = width / 2;
    const y = height / 2;

    this.setPosition({ x, y });
  }

  private readonly onChangePosition = (event: MouseEvent): void => {
    this.requestID = window.requestAnimationFrame(() => {
      const rect = this.element.getBoundingClientRect();

      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      this.setPosition({ x, y });
      this.events.trigger(CHANGE_EVENT_NAME, this.position);
    });
  };

  private setPosition({ x, y }: Position): void {
    this.position = { x, y };
  }
}

export default MousePosition;
