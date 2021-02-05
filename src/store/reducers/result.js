import * as actionType from "../actions/actionsTypes";
import { updateObject } from "../utility";

const initialState = {
  results: [],
};

const deleteResult = (state, action) => {
  const updated = state.results.filter((result) => result.id !== action.id);
  return updateObject(state, {
    results: updated,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.STORE_RESULT:
      return updateObject(state, {
        results: state.results.concat({
          id: new Date(),
          value: action.result * 2,
        }),
      });
    case actionType.DELETE_RESULT:
      deleteResult(state, action);
      break;
    default:
      return state;
  }
};

export default reducer;
