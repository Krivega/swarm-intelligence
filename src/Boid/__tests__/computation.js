import { initPosition, nextPosition, nextVelocity } from '../../__mocks__';
import { calcPosition } from '../computation';

describe('computation', () => {
  it('calcPosition', () => {
    const currentPosition = initPosition;
    const value = calcPosition({
      currentPosition,
      velocity: nextVelocity
    });

    expect(value).toEqual(nextPosition);
  });
});
