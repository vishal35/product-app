import { ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT } from "./constants";

const INITIAL_STATE = {
  productDetails: [
    {
      id: "1234",
      title: "Redmi Note 9 Pro Max",
      description:
        "64MP rear camera with ultra-wide, super macro, portrait, night mode, 960fps slowmotion, AI scene recognition, pro color, HDR, pro mode | 32MP front camera",
      category: "Mobile",
      brand: "Redemi",
      price: "17600",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81DvimWN5xL._SL1500_.jpg",
    },
    {
      id: "1235",
      title: "Samsung Galaxy M31",
      description:
        "Quad Camera Setup - 64MP (F1.8) Main Camera +8MP (F2.2) Ultra Wide Camera +5MP(F2.2) Depth Camera +5MP(F2.4) Macro Camera and 32MP (F2.0) front facing Camera",
      category: "Mobile",
      brand: "Samsung",
      price: "17500",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71-Su4Wr0HL._SL1500_.jpg",
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
    case EDIT_PRODUCT: {
      console.log("reducer editproduct payload", payload);
      const productId = payload.id;
      let productDetails = state.productDetails;
      console.log("editproduct state", productDetails);

      productDetails = productDetails.map((product) => {
        if (product.id === payload.id) {
          return payload;
        } else {
          return product;
        }
      });
      console.log("editproduct", productDetails);
      return { ...state, productDetails };
    }
    default:
      return state;
  }
}
