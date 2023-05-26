import useConfig from '../../hooks/useConfig';
import {
  DIFFICULTY_EASY,
  DIFFICULTY_HARD,
  DIFFICULTY_MEDIUM,
} from '../../utils/constants';
import ButtonGroup from '../ui/button-group/ButtonGroup';
import BrickButton from '../ui/button/BrickButton';
import MenuWrapper from './menu-wrapper/MenuWrapper';

const levels = [DIFFICULTY_EASY, DIFFICULTY_MEDIUM, DIFFICULTY_HARD];

export default function SelectDifficulty() {
  const [{ isExtraSmallScreen }, dispatch] = useConfig();

  return (
    <MenuWrapper useCard={!isExtraSmallScreen}>
      <ButtonGroup>
        {levels.map(level => (
          <BrickButton
            key={level}
            onClick={() =>
              dispatch({ type: 'set difficulty', difficulty: level })
            }
          >
            {level}
          </BrickButton>
        ))}
      </ButtonGroup>
    </MenuWrapper>
  );
}
