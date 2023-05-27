import useConfig from '../../../hooks/useConfig';
import Counters from '../counters/Counters';
import InteractionHelper from '../interaction-helper/InteractionHelper';
import Marker from '../marker/Marker';
import blackLarge from './../../../assets/images/board-layer-black-large.svg';
import blackSmall from './../../../assets/images/board-layer-black-small.svg';
import whiteLarge from './../../../assets/images/board-layer-white-large.svg';
import whiteSmall from './../../../assets/images/board-layer-white-small.svg';

import styles from './board.module.css';

const imageProps = {
  blackLarge: { src: blackLarge, width: 632, height: 594 },
  blackSmall: { src: blackSmall, width: 335, height: 320 },
  whiteLarge: { src: whiteLarge, width: 632, height: 584 },
  whiteSmall: {
    src: whiteSmall,
    width: 335,
    height: 310,
  },
};

export default function Board() {
  const [{ isSmallScreen, isLargeScreen }] = useConfig();

  return (
    <div className={styles.board}>
      <img
        {...imageProps[isSmallScreen ? 'blackSmall' : 'blackLarge']}
        alt="board layer black"
      />
      <div className={styles.masks}>
        <Counters />
        <img
          {...imageProps[isSmallScreen ? 'whiteSmall' : 'whiteLarge']}
          alt="board layer white"
          style={{ position: 'absolute' }}
        />
        <InteractionHelper />
      </div>
      {isLargeScreen && <Marker />}
    </div>
  );
}
