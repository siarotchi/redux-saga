import { call, put, delay, takeEvery, take, race, select } from "redux-saga/effects";
import { incrementTimer, startTimer, pauseTimer, resetTimer } from "./action";

let isRunning = false;

//#1
function* pauseSaga() {
  while (true) {
    yield take("START_TIMER");
    return;
  }
}

//#2
function* rootSagaLoop() {
  console.log("we are in LOOP");

  while (true) {
    yield put(incrementTimer());

    const { end, pause } = yield race({
      timeout: delay(1000),
      pause: take("PAUSE_TIMER"),
      end: take("RESET_TIMER"),
    });
    if (end) yield put(resetTimer);

    if (pause) yield take(pauseSaga);
  }
}

//#3
function* timerSaga() {
  if (isRunning) return;

  isRunning = true;
  yield call(rootSagaLoop);
}

//#4
export default function* rootSaga() {
  yield takeEvery("START_TIMER", timerSaga);
}
