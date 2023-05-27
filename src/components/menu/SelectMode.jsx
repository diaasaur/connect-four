import { useNavigate } from 'react-router-dom';

import useConfig from './../../hooks/useConfig';
import ButtonGroup from './../ui/button-group/ButtonGroup';
import BrickButton from './../ui/button/BrickButton';

import pvp from './../../assets/images/player-vs-player.svg';
import pvc from './../../assets/images/player-vs-cpu.svg';
import MenuWrapper from './menu-wrapper/MenuWrapper';
import { MODE_PVC, MODE_PVP } from '../../utils/constants';

export default function SelectMode() {
  const [{ isExtraSmallScreen }, dispatch] = useConfig();
  const navigate = useNavigate();

  return (
    <MenuWrapper useCard={!isExtraSmallScreen}>
      <ButtonGroup>
        <BrickButton
          type="red"
          justifyContent="space-between"
          onClick={() => dispatch({ type: 'set mode', mode: MODE_PVC })}
        >
          play vs cpu
          <img src={pvc} alt="icon for player against cpu" />
        </BrickButton>
        <BrickButton
          type="yellow"
          justifyContent="space-between"
          onClick={() => {
            dispatch({ type: 'set mode', mode: MODE_PVP });
          }}
        >
          play vs player
          <img src={pvp} alt="icon for player against player" />
        </BrickButton>
        <BrickButton
          justifyContent="space-between"
          onClick={() => navigate('/rules')}
        >
          game rules
        </BrickButton>
      </ButtonGroup>
    </MenuWrapper>
  );
}
