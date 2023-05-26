import useConfig from '../../../hooks/useConfig';
import useGame from '../../../hooks/useGame';
import PillButton from '../../ui/button/PillButton';
import Card from '../../ui/card/Card';
import styles from './outcome.module.css';
import {
  DISPLAY_TEXT,
  OUTCOME_TEXT,
  STATUS_TIE,
  STATUS_WIN,
} from '../../../utils/constants';

export default function Outcome() {
  const [{ outcome }, dispatch] = useGame();
  const [{ mode }] = useConfig();
  const { player, status } = outcome;

  return (
    <Card type="white" className={styles.outcome}>
      <p>{player ? DISPLAY_TEXT[mode][player] : `no winner`}</p>
      <h1 className={styles.status}>
        {status === STATUS_WIN ? OUTCOME_TEXT[mode][player] : STATUS_TIE}
      </h1>
      <PillButton onClick={() => dispatch({ type: 'play again' })}>
        play again
      </PillButton>
    </Card>
  );
}
