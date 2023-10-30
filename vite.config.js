import { defineConfig } from 'vite';

export default defineConfig({
	esbuild: {
		jsxInject: `import React from 'react'`,
	},
	build: {
		outDir: 'dist',
		lib: {
			name: 'React Icon Library',
			entry: {
				index: './icons/index.js',
			},
			formats: ['es'],
		},
		rollupOptions: {
			external: ['react'],
		},
	},
});
