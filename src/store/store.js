import { createStore, combineReducers } from 'redux'
import { appLayoutReducer } from './reducer/app-layout-reducer';
export default createStore(combineReducers({
    layout: appLayoutReducer
}));
