import classNames from 'classnames';
import { Navigate, Route, Routes } from 'react-router-dom';
import useConfig from './hooks/useConfig';
import useTheme from './hooks/useTheme';
import Game from './pages/Game';
import Menu from './pages/Menu';
import Rules from './pages/rules/Rules';

export default function App() {
  const [theme] = useTheme();
  const [{ gameStarted }] = useConfig();

  return (
    <div className={classNames('app', theme)}>
      <Routes>
        <Route path="/rules" element={<Rules />} />
        <Route
          path="/"
          element={gameStarted ? <Navigate to="/game" /> : <Menu />}
        />
        <Route
          path="/game"
          element={gameStarted ? <Game /> : <Navigate to="/" />}
        />
      </Routes>
    </div>
  );
}
