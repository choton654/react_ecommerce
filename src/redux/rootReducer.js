import { combineReducers } from 'redux';
import { cartReducer } from './cart/cartReducer';
import { directoryReducer } from './directory/directoryReducer';
import { shopReducer } from './shop/shopReducer';
import { userReducer } from './user/userReducer';

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['cart'],
// };

export const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  shop: shopReducer,
  directory: directoryReducer,
});

// export default persistReducer(persistConfig, rootReducer);
