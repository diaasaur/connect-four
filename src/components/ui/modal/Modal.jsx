import { createPortal } from 'react-dom';
import styles from './modal.module.css';
import { motion } from 'framer-motion';
import {
  modalVariants,
  overlayVariants,
} from '../../../utils/animation-variants';

export default function Modal({ children }) {
  return createPortal(
    <motion.div
      className={styles.overlay}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={overlayVariants}
    >
      <motion.div
        className={styles.content}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={modalVariants}
      >
        {children}
      </motion.div>
    </motion.div>,
    document.getElementById('portal')
  );
}
