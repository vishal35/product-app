import React from "react";
import EditProduct from "../components/EditProduct";
import { connect } from "react-redux";
import * as actions from "./actions";

function EditProductContainer(props) {
  return (
    <div>
      <EditProduct {...props} />
    </div>
  );
}

function mapStateToProps({ products: { productDetails } }) {
  return { productDetails };
}

export default connect(mapStateToProps, actions)(EditProductContainer);
