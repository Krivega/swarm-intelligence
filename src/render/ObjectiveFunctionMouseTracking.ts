import { Events } from 'events-constructor';

import MousePosition from './MousePosition';

import type { ObjectiveFunction } from '../types';

const CHANGE_EVENT_NAME = 'change';

class ObjectiveFunctionMouseTracking {
  public mousePosition: MousePosition;

  public target: number[] = [0, 0];

  private readonly events: InstanceType<typeof Events>;

  public constructor(canvasElement: HTMLCanvasElement) {
    this.mousePosition = new MousePosition(canvasElement);
    this.events = new Events([CHANGE_EVENT_NAME]);

    this.setTargetFromMouse();

    this.mousePosition.onChange(this.moveTarget);
  }

  public setTargetFromMouse(): void {
    const { x, y } = this.mousePosition.position;

    this.target = [x, y];
  }

  public startMouseTracking = (): void => {
    this.mousePosition.startTracking();
  };

  public stopMouseTracking = (): void => {
    this.mousePosition.stopTracking();
  };

  public resetTarget(): void {
    this.mousePosition.resetPosition();
    this.moveTarget();
  }

  public onChange(callback: () => void) {
    return this.events.on(CHANGE_EVENT_NAME, callback);
  }

  public offChange(callback: () => void) {
    this.events.off(CHANGE_EVENT_NAME, callback);
  }

  public moveTarget = (): void => {
    this.setTargetFromMouse();
    this.events.trigger(CHANGE_EVENT_NAME);
  };

  public resolveObjectiveFunction = (objectiveFunction: ObjectiveFunction) => {
    return ([x, y]: number[]): number => {
      const [targetX, targetY] = this.target;

      return objectiveFunction([targetX - x, targetY - y]);
    };
  };
}

export default ObjectiveFunctionMouseTracking;
