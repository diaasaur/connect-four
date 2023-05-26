import Board from './../components/game/board/Board';
import GameLayout from './../components/game/game-layout/GameLayout';
import Header from './../components/game/header/Header';
import Outcome from './../components/game/outcome/Outcome';
import ScoreCard from './../components/game/score-card/ScoreCard';
import TurnStatus from './../components/game/turn-status/TurnStatus';
import useGame from './../hooks/useGame';
import { PLAYER_ONE, PLAYER_TWO } from '../utils/constants';
import GameProvider from '../contexts/GameContext';

export default function GameWrapper() {
  return (
    <GameProvider>
      <Game />
    </GameProvider>
  );
}

function Game() {
  const [{ gameover }] = useGame();

  return (
    <GameLayout>
      <Header />
      <ScoreCard player={PLAYER_ONE} />
      <ScoreCard player={PLAYER_TWO} />
      <Board />
      {gameover ? <Outcome /> : <TurnStatus />}
    </GameLayout>
  );
}
