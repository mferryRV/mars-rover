import { readFileSync } from "fs";
import { main } from ".";

[1, 2].forEach((n) => {
  test(`Test Case ${n}`, () => {
    const outputFileArray = readFileSync(`./data/test-${n}-output.txt`, "utf-8")
      .split(/\r?\n/)
      .map((s) => s.trim())
      .toString();
    expect(main(`./data/test-${n}-input.txt`).toString()).toBe(outputFileArray);
  });
});
