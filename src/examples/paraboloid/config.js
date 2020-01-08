const createConfig = ({ maxX, maxY }) => {
  const size = 200;
  const minValues = [0, 0];
  const maxValues = [maxX, maxY];
  const currentVelocityRatio = 0.03;
  const localVelocityRatio = 1.0;
  const globalVelocityRatio = 5.0;
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
