import { initialState } from ".";

const Reducer = (state, action) => {
  console.log('BEFORE change - state', state);
  console.log('BEFORE change - action', action);
  let sum;

  switch (action.type) {
    case "SCROLL_UP":
      return {
        ...state,
        system: {
          ...state.system,
          scrollUp: true,
          scrolldown: false
        }
      }
    case "SCROLL_DOWN":
      return {
        ...state,
        system: {
          ...state.system,
          scrollUp: false,
          scrolldown: true
        }
      }
    case "SELECTED_ITEM":
      return {
        ...state,
        system: {
          ...state.system,
          selectedItem: action.payload,
        }
      }
    case "ADD_TO_CART":
    case "REMOVE_FROM_CART":
    case "LOAD_CART":
    case "RESET_CART":
      if (state.cart.length && action.payload) {
        sum = action.payload.map((item, sum = 0) => sum = sum + item.price);
      }
      return {
        ...state,
        cart: action.payload,
      };
    case "SET_LOCATION_AND_TABLE":
    case "LOAD_LOCATION_AND_TABLE":
      return {
        ...state,
        system: {
          ...state.system,
          ...action.payload
        }
      }
    case "SET_ADMIN_LOCATION":
      return {
        ...state,
        system: {
          ...state.system,
          adminLocation: action.payload
        }
      }
    case "SET_ADMIN_IS_ALLOWED":
      return {
        ...state,
        system: {
          ...state.system,
          isJing: action.payload.isJing,
          isTimi: action.payload.isTimi
        }
      }
    case "GET_ALL_BEERS":
        return {
          ...state,
          beers: action.payload
        }
    case "GET_ALL_GUEST_BEERS":
        return {
          ...state,
          guestBeers: action.payload
        }
    case "GET_ALL_SODAS":
        return {
          ...state,
          sodas: action.payload
        }
    case "GET_ALL_COCKTAILS":
        return {
          ...state,
          cocktails: action.payload
        }
    case "GET_ALL_MOCKTAILS":
        return {
          ...state,
          mocktails: action.payload
        }
    case "GET_ALL_WINES":
        return {
          ...state,
          wines: action.payload
        }
    case "GET_ALL_SANGRIAS":
        return {
          ...state,
          sangrias: action.payload
        }
    case "GET_ALL_TAPAS":
        return {
          ...state,
          tapas: action.payload
        }
    case "GET_ALL_NACHOS":
        return {
          ...state,
          nachos: action.payload
        }
    case "GET_ALL_SALADS":
        return {
          ...state,
          salads: action.payload
        }
    case "GET_ALL_RAMENS":
        return {
          ...state,
          ramens: action.payload
        }
    case "GET_ALL_BURGERS":
        return {
          ...state,
          burgers: action.payload
        }
    case "GET_ALL_CANS":
        return {
          ...state,
          cans: action.payload
        }
    case "GET_ALL_BOTTLES":
        return {
          ...state,
          bottles: action.payload
        }
    case "GET_ALL_BBQ":
        return {
          ...state,
          bbq: action.payload
        }
    case "GET_ALL_DESSERTS":
        return {
          ...state,
          desserts: action.payload
        }
    case "GET_ORDERS":
        return {
          ...state,
          orders: action.payload
        }
    case "RESET":
        return {
          ...initialState,
          system: {
            ...state.system,
          }
        };
    default:
      return state;
  }
};

export default Reducer;
