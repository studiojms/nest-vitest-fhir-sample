/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import swc from 'unplugin-swc';

export default defineConfig({
  test: {
    include: ['**/*.spec.ts', '**/*.test.ts', '!**/*.e2e.spec.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      exclude: [
        '**/*.moc(k|ks).*',
        '**/*.module.ts',
        '**/apm.ts',
        '**/main.ts',
        '*.module.ts',
      ],
    },
    globalSetup: './global-setup.ts',
    globals: true,
    root: './',
  },
  plugins: [swc.vite()],
});
