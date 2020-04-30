import { createStore } from "redux";
import userReducer from "../reducers/user";

const store = createStore(userReducer);
//subscribe is a method that gets fired when we dispatch any action
store.subscribe(() => {
  console.log("store data:", store.getState());
});

export default store;
