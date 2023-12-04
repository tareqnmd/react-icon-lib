import { defineConfig } from 'vite';

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
				index: './icons/index.js',
			},
		},
		rollupOptions: {
			external: ['react'],
		},
	},
});
