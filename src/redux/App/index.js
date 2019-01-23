// @flow strict

import { APP_CHECK } from '../types';

export type AppState = {
	app: boolean
};

const INITIAL_STATE: AppState = {
	app: false
};

export default (state: AppState = INITIAL_STATE, action: Function) => {
	switch (action.type) {
		case APP_CHECK:
			return { ...INITIAL_STATE, app: true };
		default:
			return state;
	}
};
