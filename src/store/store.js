import { createStore, combineReducers, applyMiddleware  } from 'redux'
import { appLayoutReducer } from './reducer/app-layout-reducer';
import { authReducer } from './reducer/auth-reducer';
import thunkMiddleware from 'redux-thunk';
export default createStore(combineReducers({
    layout: appLayoutReducer,
    auth: authReducer,
}, applyMiddleware(thunkMiddleware)));
