import * as actions from "./actionsTypes";

export const increment = () => {
  return {
    type: actions.INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: actions.DECREMENT,
  };
};

export const add = (value) => {
  return {
    type: actions.ADD,
    value: value,
  };
};

export const subtract = (value) => {
  return {
    type: actions.SUBTRACT,
    value: value,
  };
};
