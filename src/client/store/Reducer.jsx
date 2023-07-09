import { initialState } from ".";

const Reducer = (state, action) => {
  console.log('BEFORE change - state', state);
  console.log('BEFORE change - action', action);

  switch (action.type) {
    case "GET_ASTEROIDS_WITH_DATES":
      return {
        ...state,
        asteroidsWithDates: action.payload
      }
    default:
      return state;
  }
};

export default Reducer;
