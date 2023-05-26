import useGame from '../../../hooks/useGame';
import PillButton from '../../ui/button/PillButton';
import styles from './header.module.css';
import logo from './../../../assets/images/logo.svg';
import Pause from '../pause/Pause';
import { AnimatePresence } from 'framer-motion';

export default function Header() {
  const [{ paused }, dispatch] = useGame();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <PillButton onClick={() => dispatch({ type: 'pause' })}>
              menu
            </PillButton>
          </li>
          <li className={styles.li}>
            <img src={logo} alt="logo" className={styles.logo} />
          </li>
          <li className={styles.li}>
            <PillButton onClick={() => dispatch({ type: 'reset' })}>
              restart
            </PillButton>
          </li>
        </ul>
      </nav>
      <AnimatePresence>
        {paused && (
          <Pause key="pause" close={() => dispatch({ type: 'resume' })} />
        )}
      </AnimatePresence>
    </header>
  );
}
