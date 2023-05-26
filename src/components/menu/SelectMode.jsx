import { useNavigate } from 'react-router-dom';

import useConfig from './../../hooks/useConfig';
import ButtonGroup from './../ui/button-group/ButtonGroup';
import BrickButton from './../ui/button/BrickButton';

import pvp from './../../assets/images/player-vs-player.svg';
import pvc from './../../assets/images/player-vs-cpu.svg';
import { MODE_PVC, MODE_PVP } from '../../utils/constants';

export default function SelectMode() {
  const [, dispatch] = useConfig();
  const navigate = useNavigate();

  return (
    <ButtonGroup>
      <BrickButton
        type="red"
        justifyContent="space-between"
        onClick={() => dispatch({ type: 'set mode', mode: MODE_PVC })}
      >
        play vs cpu
        <img src={pvc} alt="Play vs CPU" />
      </BrickButton>
      <BrickButton
        type="yellow"
        justifyContent="space-between"
        onClick={() => {
          dispatch({ type: 'set mode', mode: MODE_PVP });
        }}
      >
        play vs player
        <img src={pvp} alt="Play vs Player" />
      </BrickButton>
      <BrickButton
        justifyContent="space-between"
        onClick={() => navigate('/rules')}
      >
        game rules
      </BrickButton>
    </ButtonGroup>
  );
}
