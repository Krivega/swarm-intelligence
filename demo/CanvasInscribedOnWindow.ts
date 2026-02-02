import { Events } from 'events-constructor';

import { canvas } from '../src/render';

const CHANGE_SIZE_EVENT_NAME = 'change-size';

class CanvasInscribedOnWindow {
  public canvasElement: HTMLCanvasElement;

  private readonly events: InstanceType<typeof Events>;

  public constructor() {
    this.events = new Events([CHANGE_SIZE_EVENT_NAME]);

    this.canvasElement = canvas.createCanvas();
    this.setSizeCanvasFromWindow();

    window.addEventListener('resize', this.handleChangeSize);
  }

  public setSizeCanvasFromWindow = (): void => {
    canvas.setSizeCanvas(
      this.canvasElement,
      document.documentElement.clientWidth,
      document.documentElement.clientHeight,
    );
  };

  public onChangeSize(callback: () => void): void {
    this.events.on(CHANGE_SIZE_EVENT_NAME, callback);
  }

  private readonly handleChangeSize = (): void => {
    window.requestAnimationFrame(() => {
      this.setSizeCanvasFromWindow();
      this.events.trigger(CHANGE_SIZE_EVENT_NAME);
    });
  };
}

export default CanvasInscribedOnWindow;
