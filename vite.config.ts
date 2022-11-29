import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcss from 'postcss-rtl';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/@core/assets'),
      '@components': path.resolve(__dirname, 'src/@core/components'),
      '@layouts': path.resolve(__dirname, 'src/@core/layouts'),
      '@store': path.resolve(__dirname, 'src/redux'),
      '@styles': path.resolve(__dirname, 'src/@core/scss'),
      '@configs': path.resolve(__dirname, 'src/configs'),
      '@utils': path.resolve(__dirname, 'src/utility/Utils'),
      '@apollo-utils': path.resolve(__dirname, 'src/utility/apollo'),
      '@hooks': path.resolve(__dirname, 'src/utility/hooks'),
      '@apollo-config': path.resolve(__dirname, 'src/apollo'),
    },
  },
  css: {
    postcss: {
      plugins: [postcss()],
    },
  },
});
