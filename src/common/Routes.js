import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./Navigation";
import ProductListContainer from "../redux/ProductListContainer";
import AddProductContainer from "../redux/AddProductContainer";
import EditProductContainer from "../redux/EditProductContainer";

export const Routes = () => (
  <BrowserRouter>
    <Navigation />
    <Switch>
      <Route path="/" exact component={ProductListContainer} />
      <Route path="/add-product" exact component={AddProductContainer} />
      <Route path="/edit-product:id" exact component={EditProductContainer} />
    </Switch>
  </BrowserRouter>
);
