import React from "react";
import ProductList from "../../components/common/ProductList/ProductList";
import Pagination from "../../components/Pagination/Pagination";
import { Box } from "@mui/material";
import Filter from "../../components/common/Filter/Filter";

const CatalogPage = () => {
  console.log("hello");

  return (
    <div>
      <Box sx={{ maxWidth: "max-content", margin: "30px auto" }}>
        <Filter />
      </Box>
      <ProductList />
      <Box sx={{ maxWidth: "max-content", margin: "30px auto" }}>
        <Pagination />
      </Box>
    </div>
  );
};

export default CatalogPage;
