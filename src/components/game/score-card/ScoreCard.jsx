import classNames from 'classnames';
import useConfig from '../../../hooks/useConfig';
import useGame from '../../../hooks/useGame';
import styles from './score-card.module.css';
import IconCard from '../../ui/card/IconCard';
import p1 from './../../../assets/images/player-one.svg';
import p2 from './../../../assets/images/player-two.svg';
import you from './../../../assets/images/you.svg';
import cpu from './../../../assets/images/cpu.svg';
import { DISPLAY_TEXT, PLAYER_ONE } from '../../../utils/constants';
import { MODE_PVP } from '../../../utils/constants';

export default function ScoreCard({ player = PLAYER_ONE }) {
  const [{ mode, isLargeScreen }] = useConfig();
  const [{ scores }] = useGame();

  const text = DISPLAY_TEXT[mode][player];
  const icon =
    mode === MODE_PVP
      ? player === PLAYER_ONE
        ? p1
        : p2
      : player === PLAYER_ONE
      ? you
      : cpu;
  const position = isLargeScreen
    ? 'top'
    : player === PLAYER_ONE
    ? 'left'
    : 'right';
  const score = scores[player];

  return (
    <IconCard
      icon={<img src={icon} alt="player icon" width={54} height={54} />}
      position={position}
      className={classNames(styles.score_card, styles[player])}
    >
      <p>{text}</p>
      <h1 className={styles.score}>{score}</h1>
    </IconCard>
  );
}
