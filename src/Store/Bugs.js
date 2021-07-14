// Action Types
const BugAdded = "BugCreated";
const BugRemoved = "BugDeleted";
const BugResolved = "BugResolved";

// Action Methods
export const AddBug = (desc) => {
  return {
    type: BugAdded,
    payload: {
      desc,
    },
  };
};
export const RemoveBug = (id) => {
  return {
    type: BugRemoved,
    payload: {
      id,
    },
  };
};
export const ResolveBug = (id) => {
  return {
    type: BugResolved,
    payload: {
      id,
    },
  };
};
// Reducer
let lastId = 0;
const Reducer = (state = [], action) => {
  switch (action.type) {
    case BugAdded:
      return [
        ...state,
        { id: ++lastId, desc: action.payload.desc, resolved: false },
      ];
    case BugRemoved:
      return state.filter((item) => item.id !== action.payload.id);
    case BugResolved:
      return state.map((item) =>
        item.id !== action.payload.id ? item : { ...item, resolved: true }
      );
    default:
      return state;
  }
};

export default Reducer;
