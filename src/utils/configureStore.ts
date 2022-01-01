import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
  key: 'root',
  // version: 0,
  storage: AsyncStorage,
  // debug: true,
  stateReconciler: autoMergeLevel2,
  blacklist: ['app', 'navigation']
};

const persistEnhancer = (onComplete?) => (createStore) => (reducer, initialState, enhancer) => {
  const store = createStore(persistReducer(persistConfig, reducer), initialState, enhancer);
  const persist = persistStore(store, null, onComplete);
  return {
    persist,
    ...store
  };
};

export { persistEnhancer };
