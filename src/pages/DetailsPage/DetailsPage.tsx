import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { productContext } from "../../contexts/ProductContext";
import { IProductContextType } from "../../contexts/types";
import ProductItem from "../../components/common/ProductItem/ProductItem";
import { CircularProgress } from "@mui/material";

const DetailsPage = () => {
  const { id } = useParams();
  const { product, getOneProduct } = useContext(
    productContext
  ) as IProductContextType;

  useEffect(() => {
    id && getOneProduct(+id);
  }, []);

  console.log(product);

  return (
    <div>{product ? <ProductItem item={product} /> : <CircularProgress />}</div>
  );
};

export default DetailsPage;
