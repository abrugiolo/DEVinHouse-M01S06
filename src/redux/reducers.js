// import { combineReducers } from "redux";
import * as types from "./types";

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case types.BUSCAR:
      return { ...state, processos: action.payload };
    case types.BUSCAR_ID:
      return { ...state, processos: action.payload };
    default:
      return state;
  }
};

export default rootReducer;

// export const rootReducer = combineReducers({
//   reducer,
// });
