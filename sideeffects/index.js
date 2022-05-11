import { call, put, takeEvery } from "redux-saga/effects";
import { loggin } from "../services/auth";
import { getUserSuccess } from "../store";

function* workGetUserFetch({ payload }) {
  const { userName, password } = payload;
  const response = yield call(() => loggin(userName, password));
  const json = yield response.json();
  yield put(getUserSuccess(json.data));
}

function* userSaga() {
  yield takeEvery("user/getUserFetch", workGetUserFetch);
}

export default userSaga;
