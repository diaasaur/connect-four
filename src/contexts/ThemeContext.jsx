import { createContext, useMemo, useState } from 'react';
import { THEME_LIGHT } from '../utils/constants';

export const ThemeContext = createContext();
ThemeContext.displayName = 'ThemeContext';

export default function ThemeProvider(props) {
  const [theme, setTheme] = useState(THEME_LIGHT); // light - purple, dark - dark-purple
  const value = useMemo(() => [theme, setTheme], [theme]);

  return <ThemeContext.Provider {...props} value={value} />;
}
