import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Navigation from "./Navigation";
import ProductListContainer from "../redux/ProductListContainer";
import AddProductContainer from "../redux/AddProductContainer";

export const Routes = () => (
  <BrowserRouter>
    <Navigation />
    <Switch>
      <Route path="/" exact component={ProductListContainer} />
      <Route path="/add-product" exact component={AddProductContainer} />
    </Switch>
  </BrowserRouter>
);
