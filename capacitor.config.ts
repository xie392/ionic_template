import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
	appId: 'io.ionic.starter',
	appName: 'ionic_template',
	webDir: 'dist',
	server: {
		androidScheme: 'https'
	},
	plugins: {
		CapacitorSQLite: {
			iosDatabaseLocation: 'Library/CossDatabase',
			iosIsEncryption: true,
			iosKeychainPrefix: 'angular-sqlite-app-starter',
			iosBiometric: {
				biometricAuth: false,
				biometricTitle: 'Biometric login for capacitor sqlite'
			},
			androidIsEncryption: true,
			androidBiometric: {
				biometricAuth: false,
				biometricTitle: 'Biometric login for capacitor sqlite',
				biometricSubTitle: 'Log in using your biometric'
			}
			// electronIsEncryption: true,
			// electronWindowsLocation: 'C:\\ProgramData\\CapacitorDatabases',
			// electronMacLocation: '/Volumes/Development_Lacie/Development/Databases',
			// electronLinuxLocation: 'Databases'
		}
	}
}

export default config
