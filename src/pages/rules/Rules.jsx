import { useNavigate } from 'react-router-dom';
import IconButton from '../../components/ui/button/IconButton';
import IconCard from '../../components/ui/card/IconCard';
import icon from './../../assets/images/check.svg';
import styles from './rules.module.css';
import { motion } from 'framer-motion';
import { genericVariants } from '../../utils/animation-variants';

const howToPlay = [
  'Red goes first in the first game.',
  'Players must alternate turns, and only one disc can be dropped in each turn.',
  'The game ends when there is a 4-in-a-row or a stalemate.',
  'The starter of the previous game goes second on the next game.',
];

export default function Rules() {
  const navigate = useNavigate();

  const Icon = (
    <IconButton onClick={() => navigate('/')}>
      <img src={icon} alt="check" width={64} height={64} />
    </IconButton>
  );

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={genericVariants}
    >
      <IconCard icon={Icon}>
        <section className={styles.rules}>
          <h1 className={styles.title}>rules</h1>
          <article>
            <h2 className={styles.subtitle}>objective</h2>
            <p>
              Be the first player to connect 4 of the same colored discs in a
              row (either vertically, horizontally, or diagonally).
            </p>
          </article>
          <article>
            <h2 className={styles.subtitle}>how to play</h2>
            <ul className={styles.steps}>
              {howToPlay.map((step, index) => (
                <li key={index} className={styles.step}>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>
      </IconCard>
    </motion.div>
  );
}
