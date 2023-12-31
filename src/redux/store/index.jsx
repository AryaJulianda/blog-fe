import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import logger from 'redux-logger';

const persistConfig = {
  key: 'root', 
  storage, 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk,logger));
const persistor = persistStore(store);

export { store, persistor };

