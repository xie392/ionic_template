import { StrictMode, createElement } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import 'reflect-metadata'
import { JeepSqlite } from 'jeep-sqlite/dist/components/jeep-sqlite'
import sqliteParams from '@/databases/sqlite_params'
import { initializeDataSources } from './databases/utilities'

customElements.define('jeep-sqlite', JeepSqlite)

// const container = document.getElementById('root')
// const root = createRoot(container!)
// root.render(createElement(StrictMode, { children: createElement(App) }))

const rootRender = async () => {
	await initializeDataSources()

	const container = document.getElementById('root')
	const root = createRoot(container!)
	root.render(createElement(StrictMode, { children: createElement(App) }))
}

if (sqliteParams.platform !== 'web') {
	rootRender()
} else {
	window.addEventListener('DOMContentLoaded', async () => {
		// Create the "jeep-sqlite" web component
		const jeepEl = document.createElement('jeep-sqlite')
		// 设置按钮的样式
		//从本地磁盘选择数据库或将数据库保存到本地磁盘
		// jeepEl.buttonOptions = '{"backgroundColor":"#fb2a2a", "top":"70%","fontSize":"1.1em"}'
		document.body.appendChild(jeepEl)
		customElements
			.whenDefined('jeep-sqlite')
			.then(async () => {
				await sqliteParams.connection.initWebStore()
				rootRender()
			})
			.catch((err) => {
				console.log(`Error: ${err}`)
				throw new Error(`Error: ${err}`)
			})
	})
}
