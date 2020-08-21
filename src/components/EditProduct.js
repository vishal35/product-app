import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Snackbar from "@material-ui/core/Snackbar";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
  },
}));
export default function EditProduct({ editProduct, ...props }) {
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const {
    title,
    id,
    description,
    brand,
    price,
    category,
    image,
  } = props.location.state;
  const [productData, setProductData] = useState({
    id: id,
    title: title,
    description: description,
    category: category,
    brand: brand,
    price: price,
    image: image,
  });
  const submitHandler = (e) => {
    e.preventDefault();
    editProduct(productData);
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
      if (props && props.history) {
        props.history.push("/");
      }
    }, 2500);
  };
  const formInputChangedHandler = (event) => {
    setProductData({
      ...productData,
      [event.target.id]: event.target.value,
    });
  };
  const classes = useStyles();
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
        <Snackbar
          open={open}
          onClose={handleClose}
          message="Product Updated successfully"
        />
      </Container>
    </div>
  );
}
