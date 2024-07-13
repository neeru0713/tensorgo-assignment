import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk'; 
import authReducer from './reducers/authReducer';
import planReducer from './reducers/planReducer';
import notificationReducer from './reducers/notificationReducer';
import spinnerReducer from './reducers/spinnerReducer';
import cartReducer from './reducers/cartReducer'
const rootReducer = combineReducers({
  auth: authReducer,
  plan: planReducer,
  notification: notificationReducer,
  spinner: spinnerReducer,
  cart: cartReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
