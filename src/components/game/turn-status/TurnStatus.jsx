import classNames from 'classnames';
import useGame from '../../../hooks/useGame';
import useConfig from '../../../hooks/useConfig';
import p1 from './../../../assets/images/turn-background-red.svg';
import p2 from './../../../assets/images/turn-background-yellow.svg';
import styles from './turn-status.module.css';
import { useEffect } from 'react';
import { PLAYER_ONE, TURN_TEXT } from '../../../utils/constants';

export default function TurnStatus() {
  const [{ currentPlayer, countdown, paused }, dispatch] = useGame();
  const [{ mode }] = useConfig();

  // timer
  useEffect(() => {
    if (paused) return;
    if (countdown === 0) return dispatch({ type: 'switch player' });

    let id = setTimeout(
      () => dispatch({ type: 'set countdown', countdown: countdown - 1 }),
      1000
    );
    return () => clearTimeout(id);
  }, [paused, countdown, dispatch]);

  return (
    <div className={classNames(styles.turn, styles[currentPlayer])}>
      <img
        src={currentPlayer === PLAYER_ONE ? p1 : p2}
        alt="turn"
        width={191}
        height={150}
      />
      <div className={styles.text}>
        <p className={styles.title}>{TURN_TEXT[mode][currentPlayer]}</p>
        <h1 className={styles.time}>{countdown}s</h1>
      </div>
    </div>
  );
}
