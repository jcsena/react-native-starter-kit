import { Navigation } from 'react-native-navigation';
import { iconsLoaded, Screens, Navigator, Listener } from 'Utils';

import initPersistStore from 'ReduxIndex/persistStore';
import configureStore from 'ReduxIndex/config';

import App from './App';

// AppRegistry.registerComponent('UBroker', () => App);

const store = configureStore();
Navigation.registerComponent(`navigation.loadingApp`, () => App);
Navigation.events().registerAppLaunchedListener(() => {
	Navigation.setRoot({
		root: {
			component: {
				name: 'navigation.loadingApp'
			}
		}
	});
	Promise.all([initPersistStore(store, null), iconsLoaded]).then(([store]) => {
		Listener(store);
		Screens.registerScreens(store);
		Navigator.setDefaultNavigator();
	});
});
