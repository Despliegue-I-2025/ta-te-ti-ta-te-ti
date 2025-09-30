import boardIsCorrect from "../js/boardIsCorrect.js";

describe("boardIsCorrect", () => {
  test("tablero válido", () => {
    expect(boardIsCorrect([0,0,0,1,2,1,2,1,2])).toBe(true);
  });

  test("tablero inválido por longitud", () => {
    expect(boardIsCorrect([0,1,2])).toBe(false);
  });

  test("tablero inválido por valor fuera de rango", () => {
    expect(boardIsCorrect([0,0,0,1,2,3,2,1,2])).toBe(false);
  });

  test("no es array", () => {
    expect(boardIsCorrect("notArray")).toBe(false);
  });
});
