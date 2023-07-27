import React, { useContext, useEffect } from "react";
import { productContext } from "../../../contexts/ProductContext";
import { IProductContextType } from "../../../contexts/types";
import { Grid } from "@mui/material";
import ProductItem from "../ProductItem/ProductItem";

const ProductList = () => {
  const { products, getProducts } = useContext(
    productContext
  ) as IProductContextType;

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);

  return (
    <div>
      <Grid container spacing={2} justifyContent={"center"}>
        {products.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </Grid>
    </div>
  );
};

export default ProductList;
