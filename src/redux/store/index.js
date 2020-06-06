import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers/index";
// import rootSaga from "../sagas/index";

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  return {
    ...createStore(rootReducer, middleware),
    // runSaga: sagaMiddleware.run(rootSaga),
  };
};

export default configureStore;
