import symbolPlay from "../js/symbolPlay.js";

describe("symbolPlay", () => {
  test("empieza X cuando tablero vacío", () => {
    const board = Array(9).fill(0);
    expect(symbolPlay(board)).toBe("X");
  });

  test("si hay misma cantidad de X y O, juega X", () => {
    const board = [1,2,0,0,0,0,0,0,0];
    expect(symbolPlay(board)).toBe("X");
  });

  test("si X tiene una jugada más, juega O", () => {
    const board = [1,2,1,0,0,0,0,0,0];
    expect(symbolPlay(board)).toBe("O");
  });
});
