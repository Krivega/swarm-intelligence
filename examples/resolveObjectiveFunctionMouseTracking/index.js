import MousePosition from '../MousePosition';

const resolveObjectiveFunctionMouseTracking = ({ canvasElement, objectiveFunction, onChange }) => {
  const mousePosition = new MousePosition(canvasElement);

  let targetX = mousePosition.position.x;
  let targetY = mousePosition.position.y;

  const objectiveFunctionMouseTracking = ([x, y]) => objectiveFunction([targetX - x, targetY - y]);

  const moveTarget = () => {
    targetX = mousePosition.position.x;
    targetY = mousePosition.position.y;

    onChange([targetX, targetY]);
  };

  mousePosition.onChange(moveTarget);

  return objectiveFunctionMouseTracking;
};

export default resolveObjectiveFunctionMouseTracking;
