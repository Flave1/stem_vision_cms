import { createStore, combineReducers, applyMiddleware  } from 'redux'
import { appLayoutReducer } from './reducer/app-layout-reducer';
import { authReducer } from './reducer/auth-reducer';
import thunkMiddleware from 'redux-thunk';
import { productReducer } from './reducer/products-reducer';
import { smserviceReducer } from './reducer/smservice-reducer';
export default createStore(combineReducers({
    layout: appLayoutReducer,
    auth: authReducer,
    product: productReducer,
    smservice: smserviceReducer,
}, applyMiddleware(thunkMiddleware)));
