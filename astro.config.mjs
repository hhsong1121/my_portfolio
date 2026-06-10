// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://hhsong1121.github.io',
	base: '/my_portfolio',
	vite: {
		plugins: [tailwindcss()],
	},
});
