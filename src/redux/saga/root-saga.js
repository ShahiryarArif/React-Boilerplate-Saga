import { all, fork } from "redux-saga/effects";

import counterSagas from "./counter/counterSaga";

export default function* rootSaga() {
  yield all([fork(counterSagas)]);
}
