/* eslint-disable import/prefer-default-export */

import foldArrays from '../utils/foldArrays';

export const calcPosition = ({ currentPosition, velocity }) =>
  foldArrays(currentPosition, velocity);
