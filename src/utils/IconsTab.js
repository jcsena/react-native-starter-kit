/* eslint-disable new-cap */
import { Platform } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import FontAwesome5, { FA5Style } from 'react-native-vector-icons/FontAwesome5';

const replaceSuffixPattern = /--(active|big|small|very-big)/g;

const arrayIncons = [
	{
		name: 'x',
		key: 'x',
		size: { ios: 25, android: 25 },
		font: Feather
	},
	{
		name: 'home',
		key: 'home',
		size: { ios: 25, android: 25 },
		font: Feather
	},
	{
		name: 'search',
		key: 'search',
		size: { ios: 25, android: 25 },
		font: Feather
	},
	{
		name: 'user',
		key: 'user',
		size: { ios: 25, android: 25 },
		font: Feather
	},
	{
		name: 'star',
		key: 'star',
		size: { ios: 25, android: 25 },
		font: Feather
	},
	{
		name: 'plus-square',
		key: 'plus',
		size: { ios: 27, android: 27 },
		font: Feather
	}
];

const iconsMap = {};
const iconsLoaded = new Promise((resolve, reject) => {
	Promise.all(
		arrayIncons.map(icon =>
			icon.font.getImageSource(icon.name.replace(replaceSuffixPattern, ''), Platform.select(icon.size), icon.color, icon.style)
		)
	)
		.then(sources => {
			arrayIncons.forEach((icon, idx) => {
				iconsMap[icon.key] = sources[idx];
			});
			// Call resolve (and we are done)
			resolve(true);
		})
		.catch(err => {
			throw err;
		});
});

export { iconsMap, iconsLoaded };
