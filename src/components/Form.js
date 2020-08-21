import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
const Form = (props) => {
  const {
    type,
    classes,
    productData,
    submitHandler,
    handleImageChange,
    formInputChangedHandler,
  } = props;
  return (
    <>
      <form className={classes.form} onSubmit={submitHandler}>
        <Grid item xs={12} className={classes.grid}>
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
        <Grid item xs={12} className={classes.grid}>
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
        <Grid item xs={12} className={classes.grid}>
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
        <Grid item xs={12} className={classes.grid}>
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
        <Grid item xs={12} className={classes.grid}>
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
        {type === "add" && (
          <Grid item xs={12} className={classes.grid}>
            <TextField
              className={classes.inputfield}
              id="img_upld"
              required
              type="file"
              onChange={(e) => handleImageChange(e)}
              accept="image/*"
            />
          </Grid>
        )}
        <Grid item xs={12} className={classes.grid}>
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
    </>
  );
};

export default Form;
