import { createContext, useReducer } from 'react';
import useMedia from '../hooks/useMedia';
import { MODE_PVP } from '../utils/constants';

export const ConfigContext = createContext();
ConfigContext.displayName = 'ConfigContext';

const initialState = {
  mode: null,
  difficulty: null,
  gameStarted: false,
};

function configReducer(state, action) {
  switch (action.type) {
    case 'set mode':
      return {
        ...state,
        mode: action.mode,
        gameStarted: action.mode === MODE_PVP,
      };
    case 'set difficulty':
      return { ...state, difficulty: action.difficulty, gameStarted: true };
    case 'quit':
      return { ...initialState };
    default:
      throw new Error('unknown action type');
  }
}

export default function ConfigProvider(props) {
  const [state, dispatch] = useReducer(configReducer, initialState);

  const isExtraSmallScreen = useMedia('(max-width: 576px)');
  const isSmallScreen = useMedia('(max-width: 767px)');
  const isLargeScreen = useMedia('(min-width: 1024px');

  const value = [
    { ...state, isSmallScreen, isLargeScreen, isExtraSmallScreen },
    dispatch,
  ];

  return <ConfigContext.Provider {...props} value={value} />;
}
