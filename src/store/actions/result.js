import * as actions from "./actionsTypes";

export const saveResult = (result) => {
  // const updatedResult = result * 2;
  return {
    type: actions.STORE_RESULT,
    result: result,
  };
};

export const storeResults = (result) => {
  return (dispatch, getState) => {
    setTimeout(() => {
      const oldCounter = getState().ctr.counter;
      console.log('OLD COUNTER', oldCounter);
      dispatch(saveResult(result));
    }, 2000);
  };
};

export const deleteResults = (id) => {
  return {
    type: actions.DELETE_RESULT,
    id: id,
  };
};
