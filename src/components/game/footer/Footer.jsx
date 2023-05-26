import classNames from 'classnames';
import useGame from '../../../hooks/useGame';
import styles from './footer.module.css';

export default function Footer() {
  const [{ outcome }] = useGame();

  return (
    <div className={classNames(styles.footer, outcome && outcome.player)}></div>
  );
}
