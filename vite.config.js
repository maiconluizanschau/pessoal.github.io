import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: 'https://maiconluizanschau.github.io/pessoal.github.io/',
  plugins: [react()],
});
