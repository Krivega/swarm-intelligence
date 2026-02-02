import type { Swarm } from '../src';

const functionElement = document.querySelectorAll('.js-function-value')[0] as HTMLElement;
const sizeElement = document.querySelectorAll('.js-size-value')[0] as HTMLElement;
const minValuesElement = document.querySelectorAll('.js-minValues-value')[0] as HTMLElement;
const maxValuesElement = document.querySelectorAll('.js-maxValues-value')[0] as HTMLElement;
const currentVelocityRatioElement = document.querySelectorAll(
  '.js-currentVelocityRatio-value',
)[0] as HTMLElement;
const localVelocityRatioElement = document.querySelectorAll(
  '.js-localVelocityRatio-value',
)[0] as HTMLElement;
const globalVelocityRatioElement = document.querySelectorAll(
  '.js-globalVelocityRatio-value',
)[0] as HTMLElement;
const graphElements = [...document.querySelectorAll('.js-graph')] as HTMLElement[];

const renderInfo = ({
  swarm,
  formula,
  id,
}: {
  swarm: Swarm;
  formula: string;
  id: string;
}): void => {
  graphElements.forEach((element) => {
    const isHidden = element.dataset.id !== id;

    element.classList.toggle('is-hidden', isHidden);
  });

  functionElement.textContent = formula;
  sizeElement.textContent = String(swarm.size);
  minValuesElement.textContent = `[${swarm.minValues.join(', ')}]`;
  maxValuesElement.textContent = `[${swarm.maxValues.join(', ')}]`;
  currentVelocityRatioElement.textContent = String(swarm.currentVelocityRatio);
  localVelocityRatioElement.textContent = String(swarm.localVelocityRatio);
  globalVelocityRatioElement.textContent = String(swarm.globalVelocityRatio);
};

export default renderInfo;
