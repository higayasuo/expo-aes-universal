import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'cjs'}`,
    },
    rollupOptions: {
      external: ['expo-crypto-universal'],
      output: {
        globals: {},
        interop: 'auto',
      },
    },
  },
  plugins: [
    dts({
      rollupTypes: true,
    }),
  ],
});
