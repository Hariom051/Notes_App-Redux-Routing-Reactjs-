import { applyMiddleware, createStore } from "redux";
import { notesReducer } from "./notes-reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
export const store = createStore(notesReducer, applyMiddleware( logger,thunk));
// store.subscribe((state) => {
//   console.log('State Update ', state);
// });
