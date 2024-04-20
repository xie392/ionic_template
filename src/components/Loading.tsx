import { IonContent, IonPage, IonSpinner } from '@ionic/react'

const Loading = () => {
	return (
		<IonPage>
			<IonContent>
				<IonSpinner />
			</IonContent>
		</IonPage>
	)
}

export default Loading
