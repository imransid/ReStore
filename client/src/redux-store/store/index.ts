// import {createStore, applyMiddleware } from "redux";
// import createSagaMiddleware from "redux-saga"
// import logger from "redux-logger";

// import rootReducer from "../reducers";
// import rootSaga  from "../saga";

// const sagaMiddleware = createSagaMiddleware();

// const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

// sagaMiddleware.run(rootSaga);

// export default store;


import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from "../reducers";
import rootSaga  from "../saga";
import storage from 'redux-persist/lib/storage'

const sagaMiddleware = createSagaMiddleware();

const middlewareList : any = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewareList.push(logger);
}

const persistConfig : any = {
  key: 'root',
  storage: storage,
  whitelist: ['auth', 'user'],
  blacklist: ['counterReducer'],
  timeout: null,
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);
// Redux: Store
const store = createStore(
  persistedReducer,
  applyMiddleware(createLogger(), ...middlewareList),
);
// Middleware: Redux Persist Persister
sagaMiddleware.run(rootSaga);
let persistor = persistStore(store);
// Exports
export default {store, persistor};