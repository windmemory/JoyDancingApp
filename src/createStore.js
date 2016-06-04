import { createStore, applyMiddleware } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import thunk from 'redux-thunk';
import { AsyncStorage } from 'react-native';

import rootReducer from './reducers';

const createJDStore = applyMiddleware(thunk)(createStore);

const configureStore = (onComplete = () => {}) => {
  const store = autoRehydrate()(createJDStore)(rootReducer);
  persistStore(store, {storage: AsyncStorage}, onComplete);
  return store;
}

export default configureStore;
