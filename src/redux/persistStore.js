import { persistStore } from 'redux-persist';

const initPersistStore = (store, persistOptions) => new Promise((resolve, reject) => {
	persistStore(store, null, () => {
		resolve(store);
	});
});

export default initPersistStore;