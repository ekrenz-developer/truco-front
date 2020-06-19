import { all } from 'redux-saga/effects';

import room from "./room";

export default function* rootSaga() {
  yield all([
    room()
  ]);
};