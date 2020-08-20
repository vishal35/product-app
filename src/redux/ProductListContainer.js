import React from "react";
import ProductList from "../components/ProductList";
import { connect } from "react-redux";
import * as actions from "./actions";

function ProductListContainer(props) {
  return (
    <div>
      <ProductList {...props} />
    </div>
  );
}

function mapStateToProps({ products: { productDetails } }) {
  return { productDetails };
}

export default connect(mapStateToProps, actions)(ProductListContainer);
