// import { } from "@mui/icons-material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import BaseLayout from "../layouts/BaseLayout/BaseLayout";
import CatalogPage from "../pages/CatalogPage/CatalogPage";
import AddProductPage from "../pages/AddProductPage/AddProductPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/add" element={<AddProductPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
