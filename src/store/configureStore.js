import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import accountReducer from "../reducers/accountReducer";

import notesReducer from "../reducers/notesReducer";

import usersReducer from "../reducers/usersReducer";

const configureStore = () => {
  const store = createStore(
    combineReducers({
      regUser: usersReducer,

      notes: notesReducer,

      account: accountReducer,
    }),
    applyMiddleware(thunk)
  );

  return store;
};

export default configureStore;
