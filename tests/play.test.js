import play from "../js/play.js";

describe("play", () => {
  test("lanzar error con tablero inválido", () => {
    expect(() => play([1,2,3])).toThrow("Tablero incorrecto");
  });

  test("jugada inicial: tablero vacío → índice válido", () => {
    const board = Array(9).fill(0);
    const move = play(board);
    expect(move).toBeGreaterThanOrEqual(0);
    expect(move).toBeLessThan(9);
  });

  test("si hay jugada ganadora disponible, debe elegirla", () => {
    const board = [
      1, 1, 0,
      2, 2, 0,
      0, 0, 0
    ];
    const move = play(board);
    expect(move).toBe(2); // X gana
  });

  test("si el oponente puede ganar, debe bloquearlo", () => {
    const board = [
      2, 2, 0,
      1, 1, 0,
      0, 0, 0
    ];
    const move = play(board);
    expect(move).toBe(2); // bloquear a O
  });
});
