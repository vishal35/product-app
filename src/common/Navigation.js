import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <div>
    <ul className="style-none flex list">
      <li>
        <Link to="/">All Products</Link>
      </li>
      <li>
        <Link to="/add-product">Add Product</Link>
      </li>
    </ul>
  </div>
);

export default Navigation;
