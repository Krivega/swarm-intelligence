const computeArrays = <T>(
  ...args: [...arrays: number[][], compute: (...vals: number[]) => T]
): T[] => {
  const compute = args.pop() as (...vals: number[]) => T;
  const [array1, ...otherArrays] = args as number[][];

  return array1.map((value1, index) => {
    const otherValues = otherArrays.map((itemArray) => {
      return itemArray[index];
    });
    const values = [value1, ...otherValues];

    return compute(...values);
  });
};

export default computeArrays;
