import React, { useState, useEffect } from "react";
import axios from "axios";
import Cards from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import uuid from "uuid";

const ProductList = ({ productDetails, deleteProducts, ...props }) => {
  console.log("productList", productDetails);
  const handleDeleteClick = (id) => {
    console.log(id);
  };
  return (
    <Paper
      className="root"
      style={{ background: "#0d0b07", padding: "40px 20px" }}
    >
      <h2 style={{ color: "white" }}>All Jobs</h2>
      <Grid container spacing={3} xs={12}>
        {productDetails.map((product, index) => (
          <Grid item xs={4} key={index}>
            <Cards>
              <CardContent>
                <Typography>{product.title}</Typography>
                <Typography>{product.description}</Typography>
                <Typography>{product.brand}</Typography>
                <Typography>{product.category}</Typography>
                <Typography>{product.price}</Typography>
              </CardContent>
              <CardActions>
                <IconButton aria-label="add to favorites">
                  <DeleteIcon onClick={(id) => handleDeleteClick(id)} />
                </IconButton>
              </CardActions>
            </Cards>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default ProductList;
