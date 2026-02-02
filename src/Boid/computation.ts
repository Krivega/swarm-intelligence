import foldArrays from '../utils/foldArrays';

export const calcPosition = ({
  currentPosition,
  velocity,
}: {
  currentPosition: number[];
  velocity: number[];
}): number[] => {
  return foldArrays(currentPosition, velocity);
};
