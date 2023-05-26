import { useLayoutEffect } from 'react';
import useTheme from './../hooks/useTheme';
import useConfig from './../hooks/useConfig';
import SelectDifficulty from './../components/menu/SelectDifficulty';
import SelectMode from './../components/menu/SelectMode';
import { MODE_PVC, THEME_DARK, THEME_LIGHT } from '../utils/constants';

export default function Menu() {
  const [{ mode, isExtraSmallScreen }] = useConfig();
  const [, setTheme] = useTheme();

  const showDifficultySelector = mode === MODE_PVC; // ask to select difficulty if mode is Player vs Computer

  // change theme if card is used
  useLayoutEffect(() => {
    if (isExtraSmallScreen) return;

    setTheme(THEME_DARK);
    return () => setTheme(THEME_LIGHT); // reset to light when unmount
  }, [setTheme, isExtraSmallScreen]);

  return <>{showDifficultySelector ? <SelectDifficulty /> : <SelectMode />}</>;
}
