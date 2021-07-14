import React from "react";
import Store from "./Store";
import { AddBug, ResolveBug } from "./Store/Bugs";

const App = () => {
  Store.subscribe(() => {
    console.log("State Changed:", Store.getState());
  });
  Store.dispatch(AddBug("BUG 1"));
  Store.dispatch(AddBug("BUG 2"));
  Store.dispatch(AddBug("BUG 3"));
  Store.dispatch(ResolveBug(1));
  console.log(Store.getState());
  return <div></div>;
};

export default App;
