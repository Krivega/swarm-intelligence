const getArrayWithRandomValues = (size: number): number[] => {
  return Array.from({ length: size }, () => {
    return Math.random();
  });
};

export default getArrayWithRandomValues;
