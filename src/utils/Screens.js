import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import getTheme from 'Theme';
import WrapComponent from './WrapComponent'; //eslint-disable-line
import { Explore } from 'Containers';
import {
	// screens
	SCREEN_EXPLORE
} from './ScreenNavNames';

const theme = getTheme();
const Screens = {
	registerScreens: Store => {
		// in this sections the containers are registed
		Navigation.registerComponentWithRedux(SCREEN_EXPLORE, () => WrapComponent(Explore, theme), Provider, Store);
	}
};

export { Screens };
