import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Navigation from "./Navigation";
import ProductList from "../components/ProductList";
import AddProduct from "../components/AddProduct";

export const Routes = () => (
  <BrowserRouter>
    <Navigation />
    <Switch>
      <Route path="/" exact component={ProductList} />
      <Route path="/add-product" exact component={AddProduct} />
    </Switch>
  </BrowserRouter>
);
