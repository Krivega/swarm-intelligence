const multiplyArrayByNumber = (array: number[], value: number): number[] => {
  return array.map((item) => {
    return item * value;
  });
};

export default multiplyArrayByNumber;
