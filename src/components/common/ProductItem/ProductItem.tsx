import React, { FC, useContext } from "react";
import { IProduct } from "../../../models/product";
import { Grid } from "@mui/material";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { productContext } from "../../../contexts/ProductContext";
import { IProductContextType } from "../../../contexts/types";
import { Link } from "react-router-dom";

interface IProductItemProps {
  item: IProduct;
}

const ProductItem: FC<IProductItemProps> = ({ item }) => {
  const { deleteProduct } = useContext(productContext) as IProductContextType;

  return (
    <Grid item xs={8} md={6} lg={4}>
      {item.title}
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={item.image} title={item.title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            ${item.price}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => deleteProduct(item.id)} size="small">
            Delete
          </Button>
          <Button component={Link} to={`/edit/${item.id}`} size="small">
            Edit
          </Button>
          <Button component={Link} to={`/details/${item.id}`} size="small">
            Learn More
          </Button>
        </CardActions>
      </Card>
      ;
    </Grid>
  );
};
export default ProductItem;
