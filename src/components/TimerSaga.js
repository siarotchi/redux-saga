import React from "react";
import { connect } from "react-redux";
import "../App.scss";
import { startTimer, pauseTimer, resetTimer } from "../redux/action";

const TimerSaga = ({ seconds, isRunning, onStartTimer, onPauseTimer, onResetTimer }) => {
  return (
    <div className="app">
      <div className="time-circle">
        <div className="time">{seconds}</div>
      </div>
      <div className="buttons">
        <button className="play-pause" onClick={onStartTimer}>
          <i className="fa fa-play fa-2x" />
        </button>
        <button className="play-pause" onClick={onPauseTimer}>
          <i className="fa fa-pause fa-2x" />
        </button>
        <button className="reset" onClick={onResetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  seconds: state.seconds,
  isRunning: state.isRunning,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onStartTimer: () => dispatch(startTimer()),
    onPauseTimer: () => dispatch(pauseTimer()),
    onResetTimer: () => dispatch(resetTimer()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TimerSaga);
