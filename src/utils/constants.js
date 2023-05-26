export const ROWS = 6;
export const COLS = 7;
export const WINNING_LENGTH = 4;
export const COUNTDOWN = 30;
export const PLAYER_ONE = 'p1';
export const PLAYER_TWO = 'p2';
export const STATUS_WIN = 'win';
export const STATUS_TIE = 'tie';
export const THEME_LIGHT = 'light';
export const THEME_DARK = 'dark';
export const MODE_PVC = 'PvC';
export const MODE_PVP = 'PvP';
export const DIFFICULTY_EASY = 'easy';
export const DIFFICULTY_MEDIUM = 'medium';
export const DIFFICULTY_HARD = 'hard';

export const DISPLAY_TEXT = Object.freeze({
  [MODE_PVP]: {
    [PLAYER_ONE]: 'player 1',
    [PLAYER_TWO]: 'player 2',
  },
  [MODE_PVC]: {
    [PLAYER_ONE]: 'you',
    [PLAYER_TWO]: 'cpu',
  },
});
export const OUTCOME_TEXT = Object.freeze({
  [MODE_PVP]: {
    [PLAYER_ONE]: 'wins',
    [PLAYER_TWO]: 'wins',
  },
  [MODE_PVC]: {
    [PLAYER_ONE]: 'win',
    [PLAYER_TWO]: 'wins',
  },
});
export const TURN_TEXT = Object.freeze({
  [MODE_PVP]: {
    [PLAYER_ONE]: `Player 1's turn`,
    [PLAYER_TWO]: `Player 2's turn`,
  },
  [MODE_PVC]: {
    [PLAYER_ONE]: `Your turn`,
    [PLAYER_TWO]: `CPU's turn`,
  },
});
