import Footer from '../footer/Footer';
import styles from './game-layout.module.css';

export default function GameLayout({ children }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.layout}>{children}</div>
      <Footer />
    </div>
  );
}
