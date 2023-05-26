import { aiMove } from './ai-move';

self.addEventListener('message', event => {
  const { board, difficulty } = event.data;

  const result = aiMove(board, difficulty);

  self.postMessage(result);
});
