import * as ActionTypes from "./ActionTypes";

export const BugAdded = (desc) => {
  return {
    type: ActionTypes.BugAdded,
    payload: {
      desc,
    },
  };
};

export const BugDeleted = (id) => {
  return {
    type: ActionTypes.BugRemoved,
    payload: {
      id,
    },
  };
};

export const BugResolved = (id) => {
  return {
    type: ActionTypes.BugResolved,
    payload: {
      id,
    },
  };
};
