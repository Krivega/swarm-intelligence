const computeArrays = (...args) => {
  const compute = args.pop();
  const [array1, ...otherArrays] = args;

  return array1.map((value1, index) => {
    const otherValues = otherArrays.map((itemArray) => itemArray[index]);

    const values = [value1, ...otherValues];

    return compute(...values);
  });
};

export default computeArrays;
