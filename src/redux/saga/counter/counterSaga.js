import {
  put,
  takeLatest,
  all,
  call,
  takeEvery,
  takeLeading,
} from "redux-saga/effects";
import { counterActions } from "redux/saga-action/counter/counter-actions";
import {
  incrementCounter,
  decrementCounter,
} from "redux/slice/counter/counter-slice";

import axious from "axios";
import { fakeApiCall } from "redux/slice/counter/counter-slice";

const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));
function* apiTest(action) {
  try {
    yield call(delay, 3000);
    const response = yield call(
      axious,
      `https://jsonplaceholder.typicode.com/todos/${action.payload + 1}`
    );
    const response2 = yield call(
      axious,
      `https://jsonplaceholder.typicode.com/todos/${action.payload + 2}`
    );
    const response3 = yield call(
      axious,
      `https://jsonplaceholder.typicode.com/todos/${action.payload + 3}`
    );
    console.log("after delay");

    console.log("response1 first func", response.data);
    console.log("response2 second fun", response2.data);
    console.log("response3 second fun", response3.data);

    if (response) {
      yield put(fakeApiCall({ mydata: response.data }));
    }
  } catch (error) {}
}
function* apiTest2(action) {
  try {
    console.log("beofre delay");
    yield call(delay, 2000);
    const response = yield call(
      axious,
      "https://jsonplaceholder.typicode.com/todos/2"
    );
    const response2 = yield call(
      axious,
      "https://jsonplaceholder.typicode.com/todos/3"
    );
    const response3 = yield call(
      axious,
      "https://jsonplaceholder.typicode.com/todos/4"
    );
    console.log("after delay");

    console.log("response3 second fun", response.data);
    console.log("response2 second fun", response2.data);
    console.log("response3 second fun", response3.data);

    if (response) {
      yield put(fakeApiCall({ mydata: response.data }));
    }
  } catch (error) {}
}
function* watchCounterSaga() {
  yield takeLeading(counterActions.APITEST, apiTest);
  // yield takeLatest(counterActions.APITEST, apiTest2);
}

export default function* CounterSaga() {
  yield all([watchCounterSaga()]);
}
