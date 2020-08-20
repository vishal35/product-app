import { ADD_PRODUCT, DELETE_PRODUCT } from "./constants";

const INITIAL_STATE = {
  counter: 0,
  productDetails: [
    {
      id: "1234",
      title: "hghgh",
      description: "ccccccc",
      category: "cccc",
      brand: "bbb",
      price: "11",
    },
    {
      id: "1235",
      title: "hghgh1",
      description: "ccccccc1",
      category: "cccc1",
      brand: "bbb1",
      price: "111",
    },
  ],
};

export default function counterReducer(
  state = INITIAL_STATE,
  { type, payload }
) {
  switch (type) {
    case ADD_PRODUCT: {
      const productDetails = state.productDetails;
      console.log("reducers addproduct", payload);
      return { ...state, productDetails: [...productDetails, payload] };
    }
    case DELETE_PRODUCT: {
      const productId = payload;
      let productDetails = state.productDetails;

      productDetails = productDetails.filter(
        (product) => product.id !== productId
      );
      console.log("DeleteReducers", productDetails);
      return { ...state, productDetails };
    }
    default:
      return state;
  }
}
