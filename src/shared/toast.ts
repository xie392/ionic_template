import { useIonToast } from '@ionic/react'

export function toast(message: string, duration: number = 2000): void {
	const [present] = useIonToast()

	const presentToast = (position: 'top' | 'middle' | 'bottom') => {
		present({
			message: 'Hello World!',
			duration: 1500,
			position: position
		})
	}

	return presentToast('top')
}
