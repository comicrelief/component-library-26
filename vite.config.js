import { defineConfig, transformWithEsbuild } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    {
      name: 'treat-js-as-jsx',
      async transform(code, id) {
        if (!id.match(/src\/.*\.js$/)) return null;
        return transformWithEsbuild(code, id, {
          loader: 'jsx',
          jsx: 'automatic',
        });
      },
    },
    react({ include: /\.(jsx|js)$/ }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'ComponentLibrary2026',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [
        '@hookform/resolvers',
        '@splidejs/react-splide',
        'lazysizes',
        'lodash',
        'moment',
        'prop-types',
        'pure-react-carousel',
        'react',
        'react-canvas-confetti',
        'react-currency-format',
        'react-dom',
        'react-hook-form',
        'react-modal',
        'react-range-slider-input',
        'react-responsive',
        'react-spinners',
        'react-uid',
        'styled-components',
        'youtube-player',
        'yup',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled',
        },
      },
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
});
