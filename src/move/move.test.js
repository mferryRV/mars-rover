import { rotate, moveForward } from "./index";

test("Robot moves", () => {
  const robot = {
    position: [0, 0],
    xyTransform: [1, 0],
    checkIsLost: () => false,
  };
  expect(moveForward(robot).position.toString()).toBe([1, 0].toString());
});

test("Robot turns left", () => {
  const robot = { xyTransform: [0, 1] };
  expect(rotate("L", robot).xyTransform.toString()).toBe([-1, 0].toString());
});

test("Robot turns right", () => {
  const robot = { xyTransform: [-1, 0] };
  expect(rotate("R", robot).xyTransform.toString()).toBe([0, 1].toString());
});

test("Robots can get lost", () => {
  const robot = {
    position: [0, 0],
    xyTransform: [1, 0],
    checkIsLost: () => true,
  };
  expect(moveForward(robot).isLost).toBe(true);
});

test("Robots that get lost don't move", () => {
  const robot = {
    position: [0, 0],
    xyTransform: [1, 0],
    checkIsLost: () => true,
  };
  expect(moveForward(robot).position.toString()).toBe(
    robot.position.toString()
  );
});

test("Already lost robots don't move", () => {
  const robot = { position: [0, 0], isLost: true };
  expect(moveForward(robot).position.toString()).toBe(
    robot.position.toString()
  );
});

test("Lost robots don't turn", () => {
  const robot = { xyTransform: [0, 1], isLost: true };
  expect(rotate("L", robot).xyTransform.toString()).toBe(
    robot.xyTransform.toString()
  );
});
