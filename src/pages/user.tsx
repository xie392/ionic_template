import { IonButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/react'
import { userService } from '@/service'
// import { UserService } from '@/service/user.service'

// const userService = container.get<UserService>('UserService')
//
console.log(userService)

const UserPage = () => {
	const addUser = async () => {
		const user = {
			id: 0,
			userId: 'test',
			nickName: 'test',
			email: 'test@test.com',
			avatar: '',
			phone: '',
			remark: '',
			tag: '',
			publicKey: '',
			privateKey: '',
			signature: ''
		}

		const result = await userService.createUser(user)
		console.log(result)
	}

	const findAllUser = async () => {
		const result = await userService.getAllUsers()
		console.log(result)
	}

	return (
		<>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Library</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonButton onClick={addUser}>Add User</IonButton>
				<IonButton onClick={findAllUser}>Find All User</IonButton>
				<p>This is the user page</p>
				<p>You can add a user here</p>

				<IonButton routerLink="/home">Go to Home</IonButton>
			</IonContent>
		</>
	)
}

export default UserPage
