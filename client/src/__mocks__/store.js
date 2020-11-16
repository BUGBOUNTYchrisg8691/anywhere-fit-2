import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import classesReducer from "../reducers/classesReducer";

export const middlewares = [thunk, logger];
export const createStoreWithMiddlewares = applyMiddleware(...middlewares)(
  createStore
);
export const store = createStoreWithMiddlewares(classesReducer);
