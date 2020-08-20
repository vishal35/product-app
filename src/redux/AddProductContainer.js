import React from "react";
import AddProduct from "../components/AddProduct";
import { connect } from "react-redux";
import * as actions from "./actions";

function AddProductContainer(props) {
  return (
    <div>
      <AddProduct {...props} />
    </div>
  );
}

function mapStateToProps({ products: { productDetails } }) {
  return { productDetails };
}

export default connect(mapStateToProps, actions)(AddProductContainer);
