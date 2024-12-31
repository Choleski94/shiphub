import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import resources from './';

i18next.use(initReactI18next).init({
	compatibilityJSON: 'v3',
	fallbackLng: 'en',
	resources,
	lng: 'en',
	interpolation: {
		// React already escapes values
		escapeValue: false,
	},
});

export default i18next;
