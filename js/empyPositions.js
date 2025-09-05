export default function emptyPositions(board) {
    return board.filter(position => position === 0);
}