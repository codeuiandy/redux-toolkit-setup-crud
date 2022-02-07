import { configureStore } from "@reduxjs/toolkit";
import users from "../reducers/users";
const store = configureStore(
  {
    reducer: {
      users,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
