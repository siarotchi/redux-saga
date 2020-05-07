const initialState = {
  isRunning: false,
  seconds: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "START_TIMER": {
      return {
        ...state,
        isRunning: true,
      };
    }
    case "PAUSE_TIMER": {
      console.log(state.isRunning);
      return {
        ...state,
        isRunning: false,
      };
    }
    case "RESET_TIMER": {
      return {
        ...state,
        isRunning: false,
        seconds: 0,
      };
    }
    case "INCREMENT_TIMER": {
      return {
        ...state,
        seconds: state.seconds + 1,
      };
    }
    default:
      return state;
  }
};
