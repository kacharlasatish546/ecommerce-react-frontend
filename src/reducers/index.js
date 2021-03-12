import { combineReducers } from 'redux';
import UserReducer from '../reducers/user';
import ProductsReducer from '../reducers/product'
import CurrentProductReducer from '../reducers/product'

const rootReducer = combineReducers({
   isUserLoggedIn:UserReducer,
   products:ProductsReducer,
   currentProduct: CurrentProductReducer
});

export default rootReducer;
