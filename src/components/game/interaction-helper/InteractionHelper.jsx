import { useEffect } from 'react';
import useConfig from '../../../hooks/useConfig';
import useGame from '../../../hooks/useGame';
import styles from './interaction-helper.module.css';
import AiWorker from './../../../utils/worker?worker'; // web worker for ai
import { MODE_PVC, PLAYER_TWO } from '../../../utils/constants';

const columns = new Array(7).fill(null);

export default function InteractionHelper() {
  const [{ isAnimating, gameover, board, currentPlayer }, dispatch] = useGame();
  const [{ mode, difficulty }] = useConfig();

  const isAiTurn = mode === MODE_PVC && currentPlayer === PLAYER_TWO;
  const blockMove = gameover || isAnimating;

  const pickRow = column => {
    for (let row = 5; row >= 0; row--) {
      if (!board[row][column]) return row;
    }
    return null;
  };

  // ai move
  useEffect(() => {
    if (!isAiTurn || blockMove) return;

    const worker = new AiWorker();
    new Promise(resolve => {
      worker.addEventListener('message', event => {
        resolve(event.data);
      });
      worker.postMessage({ board, difficulty });
    })
      .then(res => {
        dispatch({ type: 'make move', board: res });
      })
      .catch(err => console.log(err));
    return () => {
      worker.terminate();
    };
  }, [blockMove, board, difficulty, dispatch, isAiTurn]);

  // human move
  const handleClick = column => {
    if (isAiTurn || blockMove) return;

    const row = pickRow(column);
    if (row === null) return;

    const newBoard = structuredClone(board);
    newBoard[row][column] = currentPlayer;
    dispatch({ type: 'make move', board: newBoard });
  };

  return (
    <div className={styles.helper}>
      {columns.map((column, index) => (
        <div
          className={styles.column}
          key={index}
          onClick={() => handleClick(index)}
          onMouseEnter={() =>
            dispatch({ type: 'set marker', markerPosition: index })
          }
        ></div>
      ))}
    </div>
  );
}
