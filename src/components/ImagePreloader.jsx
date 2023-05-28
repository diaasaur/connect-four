import { useEffect } from 'react';

import blackLarge from './../assets/images/board-layer-black-large.svg';
import blackSmall from './../assets/images/board-layer-black-small.svg';
import whiteLarge from './../assets/images/board-layer-white-large.svg';
import whiteSmall from './../assets/images/board-layer-white-small.svg';
import p1Large from './../assets/images/counter-red-large.svg';
import p1Small from './../assets/images/counter-red-small.svg';
import p2Large from './../assets/images/counter-yellow-large.svg';
import p2Small from './../assets/images/counter-yellow-small.svg';
import turn1 from './../assets/images/turn-background-red.svg';
import turn2 from './../assets/images/turn-background-yellow.svg';
import p1 from './../assets/images/player-one.svg';
import p2 from './../assets/images/player-two.svg';
import you from './../assets/images/you.svg';
import cpu from './../assets/images/cpu.svg';

// preloading board/counter/turn-status images for better ux
const images = [
  blackLarge,
  blackSmall,
  whiteLarge,
  whiteSmall,
  p1Large,
  p1Small,
  p2Large,
  p2Small,
  turn1,
  turn2,
  p1,
  p2,
  you,
  cpu,
];
export default function ImagePreloader() {
  useEffect(() => {
    images.forEach(image => {
      const img = new Image();
      img.src = image;
    });
  }, []);
}
