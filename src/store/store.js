import { createStore, combineReducers } from 'redux'
import { appLayoutReducer } from './reducer/app-layout-reducer';
import { authReducer } from './reducer/auth-reducer';
export default createStore(combineReducers({
    layout: appLayoutReducer,
    auth: authReducer,
}));
