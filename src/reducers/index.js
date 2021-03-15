import { combineReducers } from 'redux';
import UserReducer from '../reducers/user';
import ProductsReducer from '../reducers/product'
import CurrentProductReducer from '../reducers/product'
import addProductReducer from '../reducers/product'

const rootReducer = combineReducers({
   isUserLoggedIn:UserReducer,
   products:ProductsReducer,
   currentProduct: CurrentProductReducer,
   addProduct: addProductReducer
});

export default rootReducer;
