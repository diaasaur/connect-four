import classNames from 'classnames';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import useConfig from './hooks/useConfig';
import useTheme from './hooks/useTheme';
import Game from './pages/Game';
import Menu from './pages/Menu';
import Rules from './pages/rules/Rules';
import { AnimatePresence } from 'framer-motion';

export default function App() {
  const [theme] = useTheme();
  const [{ gameStarted }] = useConfig();
  const location = useLocation();

  return (
    <div className={classNames('app', theme)}>
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
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
      </AnimatePresence>
    </div>
  );
}
