const functionElement = document.getElementsByClassName('js-function-value')[0];
const sizeElement = document.getElementsByClassName('js-size-value')[0];
const minValuesElement = document.getElementsByClassName('js-minValues-value')[0];
const maxValuesElement = document.getElementsByClassName('js-maxValues-value')[0];
const currentVelocityRatioElement = document.getElementsByClassName(
  'js-currentVelocityRatio-value'
)[0];
const localVelocityRatioElement = document.getElementsByClassName('js-localVelocityRatio-value')[0];
const globalVelocityRatioElement = document.getElementsByClassName(
  'js-globalVelocityRatio-value'
)[0];
const graphElements = Array.from(document.getElementsByClassName('js-graph'));

const renderInfo = ({ swarm, formula, id }) => {
  graphElements.forEach(element => {
    const isHidden = element.dataset.id !== id;

    element.classList.toggle('is-hidden', isHidden);
  });

  functionElement.textContent = formula;
  sizeElement.textContent = swarm._size;
  minValuesElement.textContent = `[${swarm._minValues}]`;
  maxValuesElement.textContent = `[${swarm._maxValues}]`;
  currentVelocityRatioElement.textContent = swarm._currentVelocityRatio;
  localVelocityRatioElement.textContent = swarm._localVelocityRatio;
  globalVelocityRatioElement.textContent = swarm._globalVelocityRatio;
};

export default renderInfo;
