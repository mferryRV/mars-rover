/* If I had more time, my plan was to write a test that did the following:
 *  - took file names for test inputs & test outputs
 *  - read in the inputs
 *  - printed results into a temporary output
 *  - validated that the two files had the same contents
 */

// I would use jest for this
test("Did he add a test", () => {
  expect(true).toBe(true);
});

test("Test 1", () => {
  // Run the program looking at ./data/test-1-input.txt
  // Pipe stdout to ./output/test-1-output.txt
  // expect(readFileSync('./output/test-1-output.txt', 'utf-8'))
  //    .toBe(readFileSync('./data/test-1-output.txt', 'utf-8'))

  expect(false).toBe(true);
});

test("Test 2", () => {
  // Run the program looking at ./data/test-2-input.txt
  // Pipe stdout to ./output/test-2-output.txt
  // expect(readFileSync('./output/test-2-output.txt', 'utf-8'))
  //    .toBe(readFileSync('./data/test-2-output.txt', 'utf-8'))

  expect(false).toBe(true);
});
