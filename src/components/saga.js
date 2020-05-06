import { call, put, delay, timeEvery, take, race, select} from 'redux-saga'

let isRunning = false;
let count = 0;

function pauseSaga() {
    while(true) {
        yield take('TIMER_RUN')
        return
    }
}

function timerLoopSaga() {
    while(true) {
        const {end, pause} = yield race({
            timeout: delay(1000),
            pause: take('TIMER_PAUSE'),
            end: take('TIMER_STOP')
        })
        if(end) return

        if(pause) yield call(pauseSaga)

        count++
    }
}

function timerSaga() {
    if(isRunning) return

    isRunning = true
    yield call(timerLoopSaga)
}

function rootWatcher() {
    yield takeEvery('TIMER_START', timerSaga)
}