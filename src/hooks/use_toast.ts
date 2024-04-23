import { useIonToast } from '@ionic/react'

function useToast() {
	const [present] = useIonToast()

	return present({})
}

export { useToast }
