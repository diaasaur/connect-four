import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig(command => {
  const config = {
    base: '/connect-four',
    plugins: [react()],
  };

  if (command !== 'serve') {
    config.base = '/connect-four/';
  }

  return config;
});
