import { question } from "readline-sync";
import { readFileSync } from "fs";
import { parseGrid, parseRobotText, printParsed } from "./parse";

const fileName =
  process.argv.length > 2
    ? process.argv[2]
    : question("Which file would you like to read? ");

// Read inputs from file
const inputText = readFileSync(fileName, "utf-8");
const [gridText, ...robotsText] = inputText.split(/\r?\n/);

// Get the grid
const grid = parseGrid(gridText);

// Process each robot
robotsText
  .map((line) => parseRobotText(grid, line))
  .map(({ robot, moves }) =>
    moves.reduce((robotUpdate, move) => move(robotUpdate), robot)
  )
  .map((robot) => printParsed(robot));
