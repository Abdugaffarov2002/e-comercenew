import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import ProductContext from "./contexts/ProductContext";
import AuthContext from "./contexts/AuthContext/AuthContext";
function App() {
  return (
    <BrowserRouter>
      <ProductContext>
        <AuthContext children={undefined} />
        <AppRoutes />
      </ProductContext>
    </BrowserRouter>
  );
}

export default App;
