import { combineReducers } from "redux";
import counterReducer from "../redux/reducers";

export const rootReducer = combineReducers({
  products: counterReducer,
});
