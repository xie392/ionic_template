import i18next from 'i18next'

export declare global {
	interface Window {
		$t: typeof i18next.t
	}
}

declare module 'react' {
	export type $t = typeof i18next.t
}
