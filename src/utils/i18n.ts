import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

export const languages = ['zh', 'cn', 'en', 'tc']
export const defaultLanguage = 'zh'

const translations = await Promise.all(
	languages.map(async (language) => {
		const translation = await import(`../locales/${language}.json`)
		return {
			[language]: { translation }
		}
	})
)

const locales = translations.reduce((acc, cur) => Object.assign(acc, cur), {})

export default i18next.use(LanguageDetector).init({
	detection: {
		lookupLocalStorage: 'coss_language'
	},
	resources: locales,
	fallbackLng: defaultLanguage,
	// debug: false,
	interpolation: {
		escapeValue: false
	}
})

/**
 * 获取所有语言
 * @returns
 */
export function getAllLanguageSlugs() {
	return languages.map((lang) => {
		return { params: { lang: lang } }
	})
}

/**
 * 获取当前语言
 * @returns
 */
export function getLanguage(lang: string) {
	return languages.includes(lang) ? lang : defaultLanguage
}

export const $t = i18next.t
