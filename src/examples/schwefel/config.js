const createConfig = ({ maxX, maxY, recommendedVelocities }) => {
  const size = 200;
  const minValues = [0, 0];
  const maxValues = [maxX, maxY];
  const { currentVelocityRatio, localVelocityRatio, globalVelocityRatio } = recommendedVelocities;
  const dimension = 2;

  return {
    currentVelocityRatio,
    localVelocityRatio,
    globalVelocityRatio,
    minValues,
    maxValues,
    size,
    dimension
  };
};

export default createConfig;
