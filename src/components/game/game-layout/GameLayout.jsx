import { motion } from 'framer-motion';
import Footer from '../footer/Footer';
import styles from './game-layout.module.css';
import { genericVariants } from '../../../utils/animation-variants';

export default function GameLayout({ children }) {
  return (
    <motion.div
      className={styles.wrapper}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={genericVariants}
    >
      <div className={styles.layout}>{children}</div>
      <Footer />
    </motion.div>
  );
}
