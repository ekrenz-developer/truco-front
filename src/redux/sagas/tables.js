import { put, call, takeLatest } from "redux-saga/effects";
import { GET_TABLES_START, GET_TABLES_ERROR, GET_TABLES_COMPLETE } from "../../consts/actionTypes";
import { apiCall } from "../api/index";

export function* getTables({ payload }){
  try {
    const response = yield call(apiCall, "/tables", null, null, 'GET');
    yield put({ type: GET_TABLES_COMPLETE, response});
  } catch (err) {
    yield put({ type: GET_TABLES_ERROR, err});
  }
}

export default function* get() {
  yield takeLatest(GET_TABLES_START, getTables);
}