import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    server: {
      deps: {
        inline: ['expo-crypto'],
      },
    },
  },
});
