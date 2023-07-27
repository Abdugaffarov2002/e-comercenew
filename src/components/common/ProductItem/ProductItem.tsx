import React, { FC } from "react";
import { IProduct } from "../../../models/product";
import { Grid } from "@mui/material";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface IProductItemProps {
  item: IProduct;
}

const ProductItem: FC<IProductItemProps> = ({ item }) => {
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
          <Button size="small">Delete</Button>
          <Button size="small">Edit </Button>
        </CardActions>
      </Card>
      ;
    </Grid>
  );
};
export default ProductItem;
