import { initialState } from ".";

const Reducer = (state, action) => {
  console.log('BEFORE change - state', state);
  console.log('BEFORE change - action', action);

  switch (action.type) {
    case "GET_ASTEROIDS_WITH_DATES":
      return {
        ...state,
        asteroidsWithDates: action.payload,
        error: ''
      }
    case "API_ERROR":
      return {
        ...state,
        error: action.payload.errorMessage,
        asteroidsWithDates: action.payload.asteroidsWithDates
      }
    case "REORDER_ITEMS":
      const localCopy = JSON.parse(JSON.stringify(state.asteroidsWithDates));;
      let tmp = {};
      const dates = Object.keys(state.asteroidsWithDates);
      const ordered = dates.map((date) => {
        if (action.payload) {
          tmp = localCopy[date].sort((a, b) => a.name > b.name ? 1 : -1);
        } else {
          tmp = localCopy[date].sort((a, b) => a.name < b.name ? 1 : -1);
        }
        localCopy[date] = tmp;
      })
      return {
        ...state,
        asteroidsWithDates: localCopy
      }
    default:
      return state;
  }
};

export default Reducer;
