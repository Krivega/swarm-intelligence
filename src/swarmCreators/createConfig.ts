import type { RecommendedVelocities } from '../types';

interface CreateConfigParams {
  maxX: number;
  maxY: number;
  recommendedVelocities: RecommendedVelocities;
  velocity?: number;
}

interface CreateConfigResult {
  localVelocityRatio: number;
  globalVelocityRatio: number;
  minValues: number[];
  maxValues: number[];
  size: number;
  dimension: number;
  currentVelocityRatio: number;
}

const createConfig = ({
  maxX,
  maxY,
  recommendedVelocities,
  velocity = 0.1,
}: CreateConfigParams): CreateConfigResult => {
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
    currentVelocityRatio: Number((currentVelocityRatio * velocity).toFixed(2)),
  };
};

export default createConfig;
