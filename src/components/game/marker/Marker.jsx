import useGame from '../../../hooks/useGame';
import markerRed from './../../../assets/images/marker-red.svg';
import markerYellow from './../../../assets/images/marker-yellow.svg';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import styles from './marker.module.css';
import { PLAYER_ONE } from '../../../utils/constants';

export default function Marker() {
  const [{ currentPlayer, markerPosition }] = useGame();
  const prevPosition = useRef(-1);

  useEffect(() => {
    prevPosition.current = markerPosition;
  }, [markerPosition]);

  const start = 32 + 88 * prevPosition.current;
  const end = 32 + 88 * markerPosition;

  return (
    <motion.div
      className={styles.marker}
      animate={{
        x: [start, end],
        transition: {
          duration: 0.15,
          type: 'tween',
        },
        y: -40,
      }}
    >
      <img
        src={currentPlayer === PLAYER_ONE ? markerRed : markerYellow}
        width={38}
        alt="marker"
      />
    </motion.div>
  );
}
