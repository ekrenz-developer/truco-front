import { all } from 'redux-saga/effects';

import get from "./tables";

export default function* rootSaga() {
  yield all([
    get()
  ]);
};