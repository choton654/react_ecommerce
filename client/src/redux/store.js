import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './rootReducer';

// const middlewares = [logger];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk)),
);

// export const persistor = persistStore(store);

// export default { store, persistor };
