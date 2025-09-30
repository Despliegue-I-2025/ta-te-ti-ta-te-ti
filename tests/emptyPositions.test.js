import emptyPositions from "../js/empyPositions.js";

describe("emptyPositions", () => {
  test("devuelve índices vacíos", () => {
    const board = [0, 1, 2, 0, 1, 0, 2, 0, 1];
    expect(emptyPositions(board)).toEqual([0, 3, 5, 7]);
  });

  test("sin posiciones vacías devuelve []", () => {
    const board = [1,2,1,2,1,2,1,2,1];
    expect(emptyPositions(board)).toEqual([]);
  });
});
