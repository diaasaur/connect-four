import useGame from '../../../hooks/useGame';
import Counter from '../counter/Counter';
import styles from './counters.module.css';

export default function Counters() {
  const [{ board, outcome }] = useGame();

  return (
    <div className={styles.counters}>
      {board.map((row, rowIndex) => {
        return row.map((col, colIndex) => {
          return (
            <Counter
              key={`${rowIndex}, ${colIndex}`}
              row={rowIndex}
              type={col}
              won={
                outcome?.combination &&
                outcome?.combination?.has(`${rowIndex}${colIndex}`)
              }
            />
          );
        });
      })}
    </div>
  );
}
