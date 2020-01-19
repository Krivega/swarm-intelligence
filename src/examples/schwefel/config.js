const createConfig = ({ maxX, maxY, recommendedVelocities, velocity = 0.1 }) => {
  const size = 200;
  const minValues = [0, 0];
  const maxValues = [maxX, maxY];
  const { currentVelocityRatio, localVelocityRatio, globalVelocityRatio } = recommendedVelocities;
  const dimension = 2;

  return {
    localVelocityRatio,
    globalVelocityRatio,
    minValues,
    maxValues,
    size,
    dimension,
    currentVelocityRatio: currentVelocityRatio * velocity
  };
};

export default createConfig;
