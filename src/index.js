import Swarm from './Swarm';
import createCanvas, { setSizeCanvas } from './canvas';
import getArrayWithRandomValues from './utils/getArrayWithRandomValues';
import paraboloid, { isBetterValueOfBestValue } from './objectiveFunctions/paraboloid';
import resolveObjectiveFunctionMouseTracking from './resolveObjectiveFunctionMouseTracking';
import drawer from './drawer';

export default Swarm;

export {
  drawer,
  createCanvas,
  setSizeCanvas,
  getArrayWithRandomValues,
  paraboloid,
  isBetterValueOfBestValue,
  resolveObjectiveFunctionMouseTracking
};
