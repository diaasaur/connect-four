import p1Large from './../../../assets/images/counter-red-large.svg';
import p1Small from './../../../assets/images/counter-red-small.svg';
import p2Large from './../../../assets/images/counter-yellow-large.svg';
import p2Small from './../../../assets/images/counter-yellow-small.svg';
import styles from './counter.module.css';
import useConfig from '../../../hooks/useConfig';
import useGame from '../../../hooks/useGame';
import { motion } from 'framer-motion';

const util = {
  small: {
    p1: p1Small,
    p2: p2Small,
  },
  large: {
    p1: p1Large,
    p2: p2Large,
  },
};

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: () => {
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: 'tween', duration: 0.5 },
        opacity: { duration: 0.01 },
      },
    };
  },
};

export default function Counter({ type, row, won }) {
  const [{ isSmallScreen }] = useConfig();
  const [, dispatch] = useGame();
  const src = util[isSmallScreen ? 'small' : 'large'][type];

  if (!type) return <div className={styles.counter}></div>;
  return (
    <motion.div
      className={styles.counter}
      animate={{
        y: [-row * 85 - 100, 0], // TODO: smallCounter? better bounce
        transition: {
          duration: 0.2,
          type: 'spring',
          delay: 0.025,
        },
      }}
      onAnimationComplete={() => dispatch({ type: 'animation complete' })}
    >
      <img src={src} alt="counter" />
      {won && (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 40"
          className={styles.circle}
          initial="hidden"
          animate="visible"
        >
          <motion.circle
            cx="20"
            cy="20"
            r="10"
            stroke="white"
            strokeWidth="5"
            variants={draw}
          />
        </motion.svg>
      )}
    </motion.div>
  );
}
