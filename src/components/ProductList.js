import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import CardMedia from "@material-ui/core/CardMedia";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    minWidth: "200px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  },
  header: {
    color: "white",
    textAlign: "center",
  },
}));

const ProductList = ({
  productDetails,
  deleteProduct,
  editProduct,
  ...props
}) => {
  const classes = useStyles();
  const handleDeleteClick = (id) => {
    deleteProduct(id);
  };
  const handleEditClick = (product) => {
    if (props && props.history) {
      props.history.push("/edit-product:" + product.id, product);
    }
  };
  return (
    <Paper
      className="root"
      style={{ background: "#0d0b07", padding: "40px 20px" }}
    >
      <h2 className={classes.header}>All Products</h2>
      <Grid container spacing={3}>
        {productDetails.map((product, index) => (
          <>
            <Grid item xs={2}></Grid>
            <Grid item xs={8} key={index}>
              <Card className={classes.root}>
                <CardMedia
                  className={classes.cover}
                  image={product.image}
                  title={product.title}
                />
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                      {product.title}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {product.description}
                    </Typography>
                    <Typography>{product.brand}</Typography>
                    <Typography>{product.category}</Typography>
                    <Typography>{product.price}</Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton onClick={() => handleDeleteClick(product.id)}>
                      <DeleteIcon />
                    </IconButton>
                    <IconButton onClick={() => handleEditClick(product)}>
                      <EditIcon />
                    </IconButton>
                  </CardActions>
                </div>
              </Card>
            </Grid>
            <Grid item xs={2}></Grid>
          </>
        ))}
      </Grid>
    </Paper>
  );
};

export default ProductList;
