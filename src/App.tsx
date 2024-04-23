import { Redirect, Route } from 'react-router-dom'
import {
	IonApp,
	IonIcon,
	IonLabel,
	IonRouterOutlet,
	IonTabBar,
	IonTabButton,
	IonTabs,
	setupIonicReact,
	IonToast
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import routes from '~react-pages'
import { Suspense, createElement, useEffect } from 'react'
import Loading from './components/loading'
import { playCircle, radio, library } from 'ionicons/icons'
import { useIonRouter } from '@ionic/react'
import { App as CapApp } from '@capacitor/app'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css'

/* Theme variables */
import '@/styles/main.scss'
import { toast } from './shared/toast'

setupIonicReact()

const App: React.FC = () => {
	const ionRouter = useIonRouter()

	useEffect(() => {
		// toast('Hello World!')
		// 监听返回事件
		const handleBackButton = (ev: any) => {
			const wihteList = ['/home', '/contact', '/user']

			// 退出程序
			ev.detail.register(-1, () => {
				if (!ionRouter.canGoBack()) {
					// 是否在白名单内
					if (wihteList.includes(ionRouter.routeInfo.pathname)) {
						// 提示
						return
					}
					CapApp.exitApp()
				}
			})
		}

		document.addEventListener('ionBackButton', handleBackButton)

		return () => {
			document.removeEventListener('ionBackButton', handleBackButton)
		}
	}, [])

	return (
		<IonApp>
			<IonReactRouter>
				<IonTabs>
					<IonRouterOutlet>
						<Suspense fallback={<Loading />}>
							<Redirect exact path="/" to="/home" />
							{routes.map((route, i) => (
								<Route
									key={i}
									path={route.path}
									exact
									render={(props) => createElement(route.element.type, props)}
								/>
							))}
							{/* 后备路由 */}
							<Route render={() => <Redirect to="/home" />} />
						</Suspense>
					</IonRouterOutlet>

					<IonTabBar slot="bottom" className="h-14" translucent>
						<IonTabButton tab="home" href="/home">
							<IonIcon icon={playCircle} />
							<IonLabel>聊天</IonLabel>
						</IonTabButton>

						<IonTabButton tab="contact" href="/contact">
							<IonIcon icon={radio} />
							<IonLabel>联系人</IonLabel>
						</IonTabButton>

						<IonTabButton tab="user" href="/user">
							<IonIcon icon={library} />
							<IonLabel>我的</IonLabel>
						</IonTabButton>
					</IonTabBar>
				</IonTabs>
			</IonReactRouter>
		</IonApp>
	)
}
export default App
