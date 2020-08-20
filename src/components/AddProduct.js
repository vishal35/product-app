import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
  },
}));

export default function AddProduct() {
  const classes = useStyles();
  const [productData, setProductData] = useState({
    title: "",
    description: "",
    category: "",
    brand: "",
    price: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("111", productData);
  };
  const formInputChangedHandler = (event) => {
    setProductData({
      ...productData,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <div className="formdata">
      <Container component="main" maxWidth="md" elevation={2}>
        <CssBaseline />
        {/* <Paper elevation={2}> */}
        <div className={classes.form}>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
          >
            <form className={classes.form} onSubmit={submitHandler}>
              <Grid item xs={12}>
                <TextField
                  className={classes.inputfield}
                  required
                  id="title"
                  label="Product Name"
                  name="title"
                  autoComplete="productName"
                  value={productData.title}
                  onChange={(e) => formInputChangedHandler(e)}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.inputfield}
                  required
                  id="description"
                  label="Product Description"
                  name="description"
                  value={productData.description}
                  onChange={(e) => formInputChangedHandler(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.inputfield}
                  required
                  id="category"
                  label="Product Category"
                  name="category"
                  value={productData.category}
                  onChange={(e) => formInputChangedHandler(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.inputfield}
                  required
                  id="brand"
                  label="Product Brand"
                  name="brand"
                  value={productData.brand}
                  onChange={(e) => formInputChangedHandler(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.inputfield}
                  type="number"
                  required
                  id="price"
                  label="Product Price"
                  name="price"
                  value={productData.price}
                  onChange={(e) => formInputChangedHandler(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Submit
                </Button>
              </Grid>
            </form>
          </Grid>
        </div>
        {/* </Paper> */}
      </Container>
    </div>
  );
}
