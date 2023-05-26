import { COLS, ROWS, WINNING_LENGTH } from './constants';

export function getWinner(board) {
  // row
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c <= COLS - 4; c++) {
      const player = board[r][c];
      const sequence = [
        board[r][c],
        board[r][c + 1],
        board[r][c + 2],
        board[r][c + 3],
      ];

      if (sequence.filter(x => x && x === player).length === WINNING_LENGTH) {
        return {
          player,
          status: 'win',
          type: 'row',
          combination: new Set([
            `${r}${c}`,
            `${r}${c + 1}`,
            `${r}${c + 2}`,
            `${r}${c + 3}`,
          ]),
        };
      }
    }
  }

  // col
  for (let c = 0; c < COLS; c++) {
    for (let r = 0; r <= ROWS - 4; r++) {
      const player = board[r][c];
      const sequence = [
        board[r][c],
        board[r + 1][c],
        board[r + 2][c],
        board[r + 3][c],
      ];

      if (sequence.filter(x => x && x === player).length === WINNING_LENGTH) {
        return {
          player,
          status: 'win',
          type: 'column',
          combination: new Set([
            `${r}${c}`,
            `${r + 1}${c}`,
            `${r + 2}${c}`,
            `${r + 3}${c}`,
          ]),
        };
      }
    }
  }

  // diagonal
  for (let r = 0; r <= ROWS - 4; r++) {
    for (let c = 0; c <= COLS - 4; c++) {
      const player = board[r][c];
      const sequence = [
        board[r][c],
        board[r + 1][c + 1],
        board[r + 2][c + 2],
        board[r + 3][c + 3],
      ];
      if (sequence.filter(x => x && x === player).length === WINNING_LENGTH) {
        return {
          player,
          status: 'win',
          type: 'diagonal',
          combination: new Set([
            `${r}${c}`,
            `${r + 1}${c + 1}`,
            `${r + 2}${c + 2}`,
            `${r + 3}${c + 3}`,
          ]),
        };
      }
    }
  }

  // anti-diagonal
  for (let r = 3; r < ROWS; r++) {
    for (let c = 0; c <= COLS - 4; c++) {
      const player = board[r][c];
      const sequence = [
        board[r][c],
        board[r - 1][c + 1],
        board[r - 2][c + 2],
        board[r - 3][c + 3],
      ];
      if (sequence.filter(x => x && x === player).length === WINNING_LENGTH) {
        return {
          player,
          status: 'win',
          type: 'anti-diagonal',
          combination: new Set([
            `${r}${c}`,
            `${r - 1}${c + 1}`,
            `${r - 2}${c + 2}`,
            `${r - 3}${c + 3}`,
          ]),
        };
      }
    }
  }

  let hasEmptySpace = false;
  board.forEach(
    row =>
      (hasEmptySpace =
        hasEmptySpace || row.findIndex(cell => cell === null) >= 0)
  );
  if (!hasEmptySpace) {
    return {
      combination: null,
      status: 'tie',
      type: 'no empty space',
      player: null,
    };
  }

  return null; // no win or tie
}
