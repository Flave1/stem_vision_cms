import { createStore, combineReducers, applyMiddleware  } from 'redux'
import { appLayoutReducer } from './reducer/app-layout-reducer';
import { authReducer } from './reducer/auth-reducer';
import thunkMiddleware from 'redux-thunk';
import { productReducer } from './reducer/products-reducer';
import { smserviceReducer } from './reducer/smservice-reducer';
import { documentationReducer } from './reducer/documentation-reducer';
export default createStore(combineReducers({
    layout: appLayoutReducer,
    auth: authReducer,
    product: productReducer,
    smservice: smserviceReducer,
    documentation: documentationReducer,
}, applyMiddleware(thunkMiddleware)));
