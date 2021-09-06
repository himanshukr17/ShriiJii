import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage:AsyncStorage
}
const persistedReducer = persistReducer(persistConfig, reducers)
const store = createStore(
  persistedReducer,
  {},
  compose(
    applyMiddleware(thunk)
  )
);



  let persistor = persistStore(store)
  
export{store,persistor}
