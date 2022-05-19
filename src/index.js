import { question } from "readline-sync";
import { readFileSync } from "fs";
import { parseGrid, parseRobotText, printParsed } from "./parse";

export const main = (fileName) => {
  let userInput;

  if (!fileName) {
    userInput =
      process.argv.length > 2
        ? process.argv[2]
        : question("Which file would you like to read? ");
  }

  // Read inputs from file
  const inputText = readFileSync(fileName || userInput, "utf-8");
  const [gridText, ...robotsText] = inputText.split(/\r?\n/);

  // Get the grid
  const grid = parseGrid(gridText);

  // Process each robot
  return robotsText
    .map((line) => parseRobotText(grid, line))
    .map(
      (parsed) =>
        parsed &&
        parsed.moves.reduce(
          (robotUpdate, move) => move(robotUpdate),
          parsed.robot
        )
    )
    .map((robot) => robot && printParsed(robot));
};
