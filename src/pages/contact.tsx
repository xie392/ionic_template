import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react'

const ContactPage = () => (
	<>
		<IonHeader>
			<IonToolbar>
				<IonTitle>Contact</IonTitle>
			</IonToolbar>
		</IonHeader>
		<IonContent>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					height: '100%'
				}}
			>
				ContactPage content
			</div>
		</IonContent>
	</>
)

export default ContactPage
