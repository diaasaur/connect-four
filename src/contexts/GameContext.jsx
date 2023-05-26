import { createContext, useReducer } from 'react';
import { getWinner } from '../utils/win-tie';
import {
  COLS,
  ROWS,
  COUNTDOWN,
  PLAYER_ONE,
  PLAYER_TWO,
  STATUS_WIN,
} from '../utils/constants';

export const GameContext = createContext();
GameContext.displayName = 'GameContext';

const initialState = {
  board: (() =>
    Array.from({ length: ROWS }, () => new Array(COLS).fill(null)))(),
  scores: {
    p1: 0,
    p2: 0,
  },

  countdown: COUNTDOWN,
  currentPlayer: PLAYER_ONE,
  openingPlayer: PLAYER_ONE,

  isAnimating: false, // counter animation
  markerPosition: 0,

  paused: false,
  gameover: false,

  outcome: {
    type: null,
    combination: null,
    status: null,
    player: null,
  },
};

const getNextPlayer = currentPlayer =>
  currentPlayer === PLAYER_ONE ? PLAYER_TWO : PLAYER_ONE;

function gameReducer(state, action) {
  switch (action.type) {
    case 'reset': {
      const { openingPlayer, scores } = state;
      return {
        ...initialState,
        currentPlayer: openingPlayer,
        openingPlayer,
        scores,
      };
    }
    case 'pause':
      return { ...state, paused: true };
    case 'resume':
      return { ...state, paused: false };
    case 'animation complete':
      return { ...state, isAnimating: false };
    case 'set countdown':
      return { ...state, countdown: action.countdown };
    case 'set marker':
      return { ...state, markerPosition: action.markerPosition };
    case 'switch player': {
      const { currentPlayer } = state;
      return {
        ...state,
        isAnimating: false,
        countdown: COUNTDOWN,
        currentPlayer: getNextPlayer(currentPlayer),
      };
    }
    case 'play again': {
      const { scores, currentPlayer, openingPlayer } = state;
      return {
        ...initialState,
        scores,
        currentPlayer,
        openingPlayer,
      };
    }
    case 'make move': {
      const { currentPlayer, scores, openingPlayer } = state;
      const { board: newBoard } = action;

      const outcome = getWinner(newBoard);

      const gameover = Boolean(outcome);

      const newScores = { ...scores };
      if (outcome && outcome.status === STATUS_WIN)
        newScores[currentPlayer] = scores[currentPlayer] + 1;

      const newOpeningPlayer = gameover
        ? getNextPlayer(openingPlayer)
        : openingPlayer;
      const newCurrentPlayer = gameover
        ? newOpeningPlayer
        : getNextPlayer(currentPlayer);

      return {
        ...state,
        outcome,
        gameover,
        board: newBoard,
        isAnimating: true,
        countdown: COUNTDOWN,
        scores: newScores,
        currentPlayer: newCurrentPlayer,
        openingPlayer: newOpeningPlayer,
      };
    }

    default:
      throw new Error('unknown action type');
  }
}

export default function GameProvider(props) {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const value = [state, dispatch];
  return <GameContext.Provider {...props} value={value} />;
}
