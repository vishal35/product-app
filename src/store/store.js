import { createStore } from "redux";
import { applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";

export const store = createStore(rootReducer, applyMiddleware());
