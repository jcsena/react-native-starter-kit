// import ReactNative from 'react-native';
import I18n from 'react-native-i18n';
import moment from 'moment';

// Import all locales
import es from './es';
import en from './en';

// Should the app fallback to English if user locale doesn't exists
I18n.fallbacks = true;

// If the current locale in device is not es or en
I18n.defaultLocale = 'es';

// Define the supported translations
I18n.translations = {
	es,
	en
};

I18n.pluralization = count => {
	if (!count) return ['zero'];
	return count === 1 ? ['one'] : ['other'];
};

I18n.missingTranslation = () => '';

const currentLocale = I18n.currentLocale();

// // Is it a RTL language?
// export const isRTL = currentLocale.indexOf('he') === 0 || currentLocale.indexOf('ar') === 0;

// // Allow RTL alignment in RTL languages
// ReactNative.I18nManager.allowRTL(isRTL);

// Localizing momentjs to Spanish or English
if (currentLocale.indexOf('es') === 0) {
	require('moment/locale/es.js'); // eslint-disable-line
	moment.locale('es');
} else {
	moment.locale('en');
}

export function getLocale() {
	if (currentLocale.indexOf('es') === 0) {
		return 'es';
	}
	return 'en';
}

// The method we'll use instead of a regular string
export function strings(name, params = {}) {
	return I18n.t(name, params);
}

export function getLocaleFromValue(input) {
	const locale = getLocale();
	return typeof input === 'string'
		? input
		: typeof input === 'object' ? input[locale] : 'Invalid';
}

export default I18n;
