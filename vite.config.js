import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
	esbuild: {
		jsxInject: `import React from 'react'`,
	},
	build: {
		emptyOutDir: false,
		outDir: 'dist',
		lib: {
			formats: ['es'],
			name: 'React Icon Library',
			entry: {
				index: './lib/index.js',
			},
		},
		rollupOptions: {
			external: ['react'],
		},
	},
	plugins: [dts({ include: ['lib'] })],
});
