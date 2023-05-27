import { getAvailablePositions } from './available-positions';
import { calculateScore } from './score';
import { getWinner } from './win-tie';
import {
  COLS,
  DIFFICULTY_EASY,
  DIFFICULTY_HARD,
  DIFFICULTY_MEDIUM,
  PLAYER_ONE,
  PLAYER_TWO,
  STATUS_TIE,
  STATUS_WIN,
} from './constants';

const AI = PLAYER_TWO;
const HUMAN = PLAYER_ONE;

const MAX_DEPTH = {
  [DIFFICULTY_MEDIUM]: 0,
  [DIFFICULTY_HARD]: 5,
};

const WIN_SCORES = {
  [AI]: 100000,
  [HUMAN]: -100000,
};

export function aiMove(board, difficulty) {
  const positions = getAvailablePositions(board);
  let bestScore = -Infinity;
  let bestMove = positions[0];

  // easy difficulty, pick a random possible move
  if (difficulty === DIFFICULTY_EASY) {
    bestMove = positions[Math.floor(Math.random() * positions.length)];
  } else {
    // medium || hard difficulty use minimax to get the bestMove
    positions.forEach(({ row, column }) => {
      board[row][column] = AI; // make move

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
      } else if (score === bestScore) {
        // tie-break
        if (Math.random() < 0.5) {
          bestMove = { row, column }; // randomly select the new move
        } else if (column === Math.floor(COLS / 2)) {
          bestMove = { row, column }; // prioritize the center column
        } else if (row > bestMove.row) {
          bestMove = { row, column }; // prioritize filling rows
        }
      }
    });
  }

  // make the best move
  board[bestMove.row][bestMove.column] = AI;
  return board;
}

// minimax
function minimax({ board, isMaximizing, depth, alpha, beta, difficulty }) {
  const outcome = getWinner(board);
  // terminating condition
  if (depth === MAX_DEPTH[difficulty] || outcome) {
    if (outcome && outcome.status === STATUS_WIN) {
      // win
      return outcome.player === AI
        ? WIN_SCORES[AI] - depth
        : depth + WIN_SCORES[HUMAN];
    } else if (outcome && outcome.status === STATUS_TIE) {
      return 0; // tie
    } else {
      // calculate score for the board at max depth
      return calculateScore(board);
    }
  }

  const positions = getAvailablePositions(board);
  let bestScore = isMaximizing ? -Infinity : Infinity;
  const player = isMaximizing ? AI : HUMAN;

  for (const { row, column } of positions) {
    board[row][column] = player; // make move
    let score = minimax({
      board,
      alpha,
      beta,
      depth: depth + 1,
      isMaximizing: !isMaximizing,
      difficulty,
    });
    board[row][column] = null; // undo move

    if (isMaximizing) {
      bestScore = Math.max(score, bestScore);
      alpha = Math.max(score, alpha);
    } else {
      bestScore = Math.min(score, bestScore);
      beta = Math.min(score, beta);
    }

    if (beta <= alpha) break;
  }

  return bestScore;
}
