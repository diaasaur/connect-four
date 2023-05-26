import { COLS, PLAYER_ONE, PLAYER_TWO, ROWS } from './constants';

const AI = PLAYER_TWO;
const HUMAN = PLAYER_ONE;

export function calculateScore(board) {
  let score = 0;

  // row
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c <= COLS - 4; c++) {
      const slice = board[r].slice(c, c + 4);
      score += evaluateSlice(slice);
    }
  }
  // col
  for (let c = 0; c < COLS; c++) {
    for (let r = 0; r <= ROWS - 4; r++) {
      const slice = [
        board[r][c],
        board[r + 1][c],
        board[r + 2][c],
        board[r + 3][c],
      ];
      score += evaluateSlice(slice);
    }
  }

  // diagonal
  for (let r = 0; r <= ROWS - 4; r++) {
    for (let c = 0; c <= COLS - 4; c++) {
      const slice = [
        board[r][c],
        board[r + 1][c + 1],
        board[r + 2][c + 2],
        board[r + 3][c + 3],
      ];
      score += evaluateSlice(slice);
    }
  }

  // anti-diagonal
  for (let r = 3; r < ROWS; r++) {
    for (let c = 0; c <= COLS - 4; c++) {
      const slice = [
        board[r][c],
        board[r - 1][c + 1],
        board[r - 2][c + 2],
        board[r - 3][c + 3],
      ];
      score += evaluateSlice(slice);
    }
  }
  return score;
}

function evaluateSlice(slice) {
  let score = 0;

  const playerCount = slice.filter(x => x === AI).length;
  const opponentCount = slice.filter(x => x === HUMAN).length;
  const emptyCount = slice.filter(x => x === null).length;

  if (playerCount === 4) score += 1000;
  else if (opponentCount === 4) score -= 1000;
  else if (playerCount === 3 && emptyCount === 1) score += 100;
  else if (opponentCount === 3 && emptyCount === 1) score -= 100;
  else if (playerCount === 2 && emptyCount === 2) score += 10;
  else if (opponentCount === 2 && emptyCount === 2) score -= 10;

  return score;
}
