import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Snackbar from "@material-ui/core/Snackbar";
import { v4 as uuidv4 } from "uuid";

import Form from "./Form";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
  },
  inputfield: {
    width: "100%",
  },
  grid: {
    padding: "10px 20px",
  },
}));

export default function AddProduct({
  addProduct,
  deleteProduct,
  productDetails,
  ...props
}) {
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const classes = useStyles();
  const [productData, setProductData] = useState({
    id: "",
    title: "",
    description: "",
    category: "",
    brand: "",
    price: "",
    image: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    addProduct({ ...productData, id: uuidv4() });
    setProductData({
      ...productData,
      id: "",
      title: "",
      description: "",
      category: "",
      brand: "",
      price: "",
      image: "",
    });
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 5000);
  };
  const formInputChangedHandler = (event) => {
    setProductData({
      ...productData,
      [event.target.id]: event.target.value,
    });
  };

  const handleImageChange = (e) => {
    setProductData({
      ...productData,
      image: URL.createObjectURL(e.target.files[0]),
    });
  };

  return (
    <div className="formdata">
      <Container component="main" maxWidth="md" elevation={2}>
        <CssBaseline />
        <div className={classes.form}>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Form
              classes={classes}
              productData={productData}
              formInputChangedHandler={formInputChangedHandler}
              handleImageChange={handleImageChange}
              submitHandler={submitHandler}
              type="add"
            />
          </Grid>
        </div>
        <Snackbar
          open={open}
          onClose={handleClose}
          message="Product added successfully"
        />
      </Container>
    </div>
  );
}
