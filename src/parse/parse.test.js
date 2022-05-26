import { parseGrid, parseRobotText, printParsed } from "./index";

test("Parse grid", () => {
  const { xMax, yMax } = parseGrid("4 8\n");
  expect(xMax).toBe(4);
  expect(yMax).toBe(8);
});

test("Parse robot", () => {
  const grid = { xMax: 4, yMax: 8 };
  const { robot, moves } = parseRobotText(grid, "(0, 2, N) FFRF");
  expect(robot.position.toString()).toBe([0, 2].toString());
  expect(robot.xyTransform.toString()).toBe([0, 1].toString());
  expect(robot.isLost).toBe(false);
  expect(moves.length).toBe(4);
});

test("Print OK robot", () => {
  const robot = { position: [1, 2], xyTransform: [0, 1], isLost: false };
  expect(printParsed(robot)).toBe("(1, 2, N)");
});

test("Print lost robot", () => {
  const robot = { position: [1, 2], xyTransform: [0, 1], isLost: true };
  expect(printParsed(robot)).toBe("(1, 2, N) LOST");
});
