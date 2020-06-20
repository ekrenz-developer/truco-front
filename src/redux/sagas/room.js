import { put, call, takeLatest } from "redux-saga/effects";
import {
  GET_TABLES_START, 
  GET_TABLES_ERROR, 
  GET_TABLES_COMPLETE,
  GET_ROOMS_START,
  GET_ROOMS_ERROR,
  GET_ROOMS_COMPLETE,
  GET_RANDOM_ROOM_START,
  GET_RANDOM_ROOM_ERROR,
  GET_RANDOM_ROOM_COMPLETE
} from "../../consts/actionTypes";
import { apiCall } from "../api/index";

export function* getTables({ payload }) {
  try {
    const response = yield call(apiCall, "/tables", null, null, 'GET');
    yield put({ type: GET_TABLES_COMPLETE, response});
  } catch (err) {
    yield put({ type: GET_TABLES_ERROR, err});
  }
}

export function* getRooms() {
  try {
    const response = yield call(apiCall, "/rooms", null, null, 'GET');
    yield put({ type: GET_ROOMS_COMPLETE, response});
  } catch (err) {
    yield put({ type: GET_ROOMS_ERROR, err});
  }
}

export function* getRandomRoom() {
  try {
    const response = yield call(apiCall, "/rooms/random", null, null, 'GET');
/*
    const response = {
      data: {
        data: "3"
      }
    }
*/
    yield put({ type: GET_RANDON_ROOM_COMPLETE, response});
  } catch (err) {
    yield put({ type: GET_RANDON_ROOM_ERROR, err});
  }
}

export default function* room() {
  yield takeLatest(GET_TABLES_START, getTables);
  yield takeLatest(GET_ROOMS_START, getRooms);
  yield takeLatest(GET_RANDOM_ROOM_START, getRandomRoom);
}