import { aiMove } from './ai-move';

// using webworker to off load minmax calc from the main thread
// if not countdown will be blocked

self.addEventListener('message', event => {
  const { board, difficulty } = event.data;

  const result = aiMove(board, difficulty);

  self.postMessage(result);
});
