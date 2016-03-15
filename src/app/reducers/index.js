//import {combineReducers} from 'redux-immutable';
import {combineReducers} from 'redux';

import home from './home';
import app from './app';
import scoreLog from './scoreLog';


const rootReducer = combineReducers({
    home,app,scoreLog
});

export default rootReducer;