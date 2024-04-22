import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import pages from 'vite-plugin-pages'
import { fileURLToPath } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		legacy(),
		pages({
			extendRoute(route, parent) {
				if (route.path === '/') {
					return route
				}
				return {
					...route,
					path: '/' + route.path,
					meta: { auth: true }
				}
			}
		})
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	},
	server: {
		port: 5000
	}
	// test: {
	// 	globals: true,
	// 	environment: 'jsdom',
	// 	setupFiles: './src/setupTests.ts'
	// }
})
