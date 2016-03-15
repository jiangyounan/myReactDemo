import { createStore, applyMiddleware } from 'redux';
import thunk  from 'redux-thunk';
import createLogger from 'redux-logger';

const logger = createLogger();


import rootReducer from '../reducers';
//console.log(rootReducer);

const createStoreWithMiddleware = applyMiddleware(
	thunk,logger
)(createStore);


export default function configureStore (initialState) {
		const store = createStoreWithMiddleware(rootReducer,initialState);
		return store;
}

