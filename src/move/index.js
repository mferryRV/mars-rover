import { add, multiply } from "mathjs";

// Initial xyTranslation vectors for cardinal direction
export const directions = {
  N: [0, 1],
  S: [0, -1],
  E: [1, 0],
  W: [-1, 0],
};

// Could be simpler but at least it's dry
export const cardinals = Object.keys(directions).reduce((lookup, key) => {
  const arrayString = directions[key].toString();
  lookup[arrayString] = key;
  return lookup;
}, {});

// Factory for creating checkIsLost functions based on grid size
export const isLostFactory =
  ({ xMax, yMax }) =>
  ([x, y]) =>
    !(x >= 0 && x <= xMax && y >= 0 && y <= yMax);

// Some linear algebra here - these are based on a generalised rotation matrix
// [cos(θ), -sin(θ)]
// [sin(θ),  cos(θ)]
const rotationMatrices = {
  L: [
    [0, -1],
    [1, 0],
  ],
  R: [
    [0, 1],
    [-1, 0],
  ],
};

// Executes a rotation on the xyTransform vector with matrix multiplication
const rotate = (move, robot) => {
  // Do nothing if robot is already lost
  if (robot.isLost) return robot;

  return {
    ...robot,
    xyTransform: multiply(rotationMatrices[move], robot.xyTransform),
  };
};

// Executes a translation of the position with vector addition
const moveForward = (robot) => {
  // Do nothing if robot is already lost
  if (robot.isLost) return robot;

  const newPosition = add(robot.position, robot.xyTransform);
  const isLost = robot.checkIsLost(newPosition);
  return {
    ...robot,
    isLost,
    position: isLost ? robot.position : newPosition,
  };
};

export const moveOptions = {
  F: (robot) => moveForward(robot),
  L: (robot) => rotate("L", robot),
  R: (robot) => rotate("R", robot),
};
