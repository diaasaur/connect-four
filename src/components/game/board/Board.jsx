import useConfig from '../../../hooks/useConfig';
import Counters from '../counters/Counters';
import InteractionHelper from '../interaction-helper/InteractionHelper';
import Marker from '../marker/Marker';
import blackLarge from './../../../assets/images/board-layer-black-large.svg';
import blackSmall from './../../../assets/images/board-layer-black-small.svg';
import whiteLarge from './../../../assets/images/board-layer-white-large.svg';
import whiteSmall from './../../../assets/images/board-layer-white-small.svg';

import styles from './board.module.css';

export default function Board() {
  const [{ isSmallScreen, isLargeScreen }] = useConfig();
  const blackLayerImg = isSmallScreen ? blackSmall : blackLarge;
  const whiteLayerImg = isSmallScreen ? whiteSmall : whiteLarge;

  return (
    <div className={styles.board}>
      <img src={blackLayerImg} alt="board layer black" />
      <div className={styles.masks}>
        <Counters />
        <img
          src={whiteLayerImg}
          alt="board layer white"
          style={{ position: 'absolute' }}
        />
        <InteractionHelper />
      </div>
      {isLargeScreen && <Marker />}
    </div>
  );
}
