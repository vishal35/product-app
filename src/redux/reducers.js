import { ADD_PRODUCT } from "./constants";

const INITIAL_STATE = {
  counter: 0,
  productDetails: [],
};

export default function counterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_PRODUCT: {
      return [...state];
    }
    default:
      return state;
  }
}
