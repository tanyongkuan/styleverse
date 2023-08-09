import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import ViteTsconfigPaths from 'vite-tsconfig-paths';
// import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		ViteTsconfigPaths({
			loose: true,
		}),
	],
	// resolve: {
	// 	alias: {
	// 		'@': `${path.resolve(__dirname, 'src')}`,
	// 		'@/': `${path.resolve(__dirname, 'src')}/`,
	// 		'@components/': `${path.resolve(__dirname, 'src/components')}/`,
	// 		'@helpers/': `${path.resolve(__dirname, 'src/helpers')}/`,
	// 		'@layouts/': `${path.resolve(__dirname, 'src/layouts')}/`,
	// 		'@pages/': `${path.resolve(__dirname, 'src/pages')}/`,
	// 		'@types/': `${path.resolve(__dirname, 'src/types')}/`,
	// 	},
	// },
});
