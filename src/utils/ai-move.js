import { getAvailablePositions } from './available-positions';
import { calculateScore } from './score';
import { getWinner } from './win-tie';
import {
  DIFFICULTY_EASY,
  DIFFICULTY_HARD,
  DIFFICULTY_MEDIUM,
  PLAYER_ONE,
  PLAYER_TWO,
  STATUS_WIN,
} from './constants';

const AI = PLAYER_TWO;
const HUMAN = PLAYER_ONE;

const MAX_DEPTH = {
  [DIFFICULTY_MEDIUM]: 3,
  [DIFFICULTY_HARD]: 7,
};

export function aiMove(board, difficulty) {
  const positions = getAvailablePositions(board);
  let bestScore = -Infinity;
  let bestMove = positions[0];

  // easy difficulty
  if (difficulty === DIFFICULTY_EASY) {
    bestMove = positions[Math.floor(Math.random() * positions.length)];
  } else {
    // medium | hard difficulty use minimax to get bestMove
    positions.forEach(({ row, column }) => {
      board[row][column] = AI;

      let score = minimax({
        board,
        isMaximizing: false, // human's turn
        alpha: -Infinity,
        beta: Infinity,
        depth: 0,
        difficulty,
      });

      board[row][column] = null; // undo

      if (score > bestScore) {
        bestScore = score;
        bestMove = { row, column };
      }

      console.log({ column, score });
    });
  }

  // make the best move
  board[bestMove.row][bestMove.column] = AI;

  console.log(JSON.stringify(board));
  return board;
}

// minimax
function minimax({ board, isMaximizing, depth, alpha, beta, difficulty }) {
  // terminating condition
  const outcome = getWinner(board); // check if board wins
  if (depth === MAX_DEPTH[difficulty] || outcome) {
    if (outcome) {
      const { status, player } = outcome;
      return status === STATUS_WIN ? (player === AI ? 1000000 : -1000000) : 0;
    }
    return calculateScore(board);
  }
  const positions = getAvailablePositions(board);

  // ai's move
  if (isMaximizing) {
    let bestScore = -Infinity;
    for (const { row, column } of positions) {
      board[row][column] = AI;
      let score = minimax({
        board,
        alpha,
        beta,
        depth: depth + 1,
        isMaximizing: false,
        difficulty,
      });
      board[row][column] = null; // undo
      bestScore = Math.max(score, bestScore);
      alpha = Math.max(score, alpha);

      if (bestScore >= beta) break;
    }
    return bestScore;
  } else {
    // human's move
    let bestScore = Infinity;
    for (const { row, column } of positions) {
      board[row][column] = HUMAN;
      let score = minimax({
        board,
        alpha,
        beta,
        depth: depth + 1,
        isMaximizing: true,
        difficulty,
      });
      board[row][column] = null; // undo

      bestScore = Math.min(score, bestScore);
      beta = Math.min(score, beta);

      if (bestScore <= alpha) break;
    }
    return bestScore;
  }
}
