import React, { FC } from "react";
import Navbar from "../../components/common/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

const BaseLayout: FC = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default BaseLayout;
