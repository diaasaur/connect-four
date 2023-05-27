import { COLS, ROWS } from './constants';

export function getAvailablePositions(board) {
  const positions = [];
  for (let c = 0; c < COLS; c++) {
    for (let r = ROWS - 1; r >= 0; r--) {
      if (board[r][c] == null) {
        positions.push({ row: r, column: c });
        break;
      }
    }
  }
  if (positions.length === 0) throw new Error('no empty space in board');
  return positions;
}
