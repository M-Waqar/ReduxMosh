import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
// import Reducer from "./Reducer";
import Reducer from "./Store/Bugs";

const store = createStore(Reducer, devToolsEnhancer({ trace: true }));

export default store;
