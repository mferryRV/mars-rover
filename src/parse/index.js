import { cardinals, directions, isLostFactory, moveOptions } from "../move";
import { cleanString } from "../utils";

export const parseGrid = (gridString) => {
  try {
    const [xMax, yMax] = gridString
      .split(" ")
      .map((s) => parseInt(cleanString(s)));

    // Validate input
    if (xMax >= 0 && yMax >= 0) {
      return { xMax, yMax };
    } else {
      throw new Error("Grid must be at least 0 x 0");
    }
  } catch (e) {
    console.error(`Grid dimensions '${gridString}' are not valid\n`, e);
  }
};

export const parseRobotText = (grid, robotString) => {
  try {
    const [xStr, yStr, cardinalDirection, moveString] = robotString
      .split(" ")
      .map(cleanString);

    const robot = {
      position: [parseInt(xStr), parseInt(yStr)],
      xyTransform: directions[cardinalDirection],
      checkIsLost: isLostFactory(grid),
    };

    // Defining a robot class would have made this cleaner
    robot.isLost = robot.checkIsLost(robot.position);

    const moves = moveString.split("").map((s) => moveOptions[s]);

    // Validation
    if (robot.isLost) {
      throw new Error("Invalid grid position");
    } else if (!robot.xyTransform) {
      throw new Error("Invalid starting direction");
    } else if (!moves.every((m) => !!m)) {
      throw new Error("Invalid set of moves");
    }
    return { robot, moves };
  } catch (e) {
    console.error(`Robot definition '${robotString}' is not valid\n`, e);
  }
};

export const printParsed = ({ position: [x, y], xyTransform, isLost }) =>
  `(${x}, ${y}, ${cardinals[xyTransform.toString()]})${isLost ? " LOST" : ""}`;
