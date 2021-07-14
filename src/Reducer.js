import * as actions from "./ActionTypes";

let lastid = 0;
function Reducer(state = [], action) {
  switch (action.type) {
    case actions.BugAdded:
      return [
        ...state,
        { id: ++lastid, desc: action.payload.desc, resolved: false },
      ];
    case actions.BugRemoved:
      return state.filter((bug) => bug.id !== action.payload.id);
    case actions.BugResolved:
      return state.map((item) =>
        item.id !== action.payload.id ? item : { ...item, resolved: true }
      );
    default:
      return state;
  }
}

export default Reducer;
