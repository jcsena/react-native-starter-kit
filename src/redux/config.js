import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import storage from 'redux-persist/es/storage';
import { persistCombineReducers } from 'redux-persist';
import reduxIndex from './reduxIndex';

let middleware = [thunk];

const config = {
	key: 'root',
	storage,
	blacklist: []
};

const reducer = persistCombineReducers(config, reduxIndex);

if (__DEV__) {
	// eslint-disable-line
	const logger = require('redux-logger').createLogger(); // eslint-disable-line
	const reduxImmutableStateInvariant = require('redux-immutable-state-invariant').default(); // eslint-disable-line
	middleware = [...middleware, reduxImmutableStateInvariant, logger.__esModule ? logger.default : logger];
} else {
	middleware = [...middleware];
}

const configureStore = initialState => {
	// return create first create store
	return createStore(reducer, initialState, applyMiddleware(...middleware));
};

export default configureStore;
