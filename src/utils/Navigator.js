import { Navigation } from 'react-native-navigation';
import VariablesTheme from 'VariablesTheme';
import { strings } from 'Common/locales';
import { iconsMap } from './IconsTab';
import {
	// tabs
	TAB_BAR_1,
	TAB_BAR_2,
	TAB_BAR_3,
	// screens
	SCREEN_EXPLORE
} from './ScreenNavNames';

const Navigator = {
	setDefaultNavigator: () => {
		Navigation.setDefaultOptions({
			bottomTabs: {
				titleDisplayMode: 'alwaysShow',
				visible: true,
				animate: true
			},
			bottomTab: {
				fontSize: 12,
				iconColor: 'grey',
				textColor: 'grey',
				selectedIconColor: VariablesTheme.brandPrimary,
				selectedTextColor: VariablesTheme.brandPrimary
			}
		});
		Navigation.setRoot({
			root: {
				bottomTabs: {
					id: 'buttonTabs',
					children: [
						{
							stack: {
								children: [
									{
										component: {
											name: SCREEN_EXPLORE,
											passProps: {
												title: 'TAB 1'
											}
										}
									}
								],
								options: {
									bottomTab: {
										text: 'Tab 1',
										icon: iconsMap.home,
										testID: TAB_BAR_1
									},
									topBar: {
										title: {
											text: 'Tab 1',
											color: 'black'
										}
									}
								}
							}
						},
						{
							stack: {
								children: [
									{
										component: {
											name: SCREEN_EXPLORE,
											passProps: {
												title: 'TAB 2'
											}
										}
									}
								],
								options: {
									bottomTab: {
										text: 'Tab 2',
										icon: iconsMap.home,
										testID: TAB_BAR_2
									},
									topBar: {
										title: {
											text: 'Tab 2',
											color: 'black'
										}
									}
								}
							}
						},
						{
							stack: {
								children: [
									{
										component: {
											name: SCREEN_EXPLORE,
											passProps: {
												title: 'TAB 3'
											}
										}
									}
								],
								options: {
									bottomTab: {
										text: 'Tab 3',
										icon: iconsMap.home,
										testID: TAB_BAR_3
									},
									topBar: {
										title: {
											text: 'Tab 3',
											color: 'black'
										}
									}
								}
							}
						}
					]
				}
			}
		});
	}
};

export { Navigator };
