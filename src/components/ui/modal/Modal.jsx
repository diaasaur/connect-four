import { createPortal } from 'react-dom';
import styles from './modal.module.css';

export default function Modal({ children }) {
  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.content}>{children}</div>
    </div>,
    document.getElementById('portal')
  );
}
