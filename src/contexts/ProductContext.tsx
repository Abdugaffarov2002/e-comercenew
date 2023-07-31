import React, { FC, createContext, useReducer } from "react";
import { IProduct, IProductCreate } from "../models/product";
import { IInitState, IProductContextType, TProductAction } from "./types";
import axios from "axios";
import { API } from "../utils/consts";
import { type } from "os";

export const productContext = createContext<IProductContextType | null>(null);

interface IProductContext {
  children: React.ReactNode;
}

const initState: IInitState = {
  products: [],
  product: null,
};

function reducer(state: IInitState, action: TProductAction) {
  switch (action.type) {
    case "products":
      return { ...state, products: action.payload };
    case "product":
      return { ...state, product: action.payload };

    default:
      return state;
  }
}

const ProductContext: FC<IProductContext> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  async function getProducts() {
    try {
      const { data } = await axios.get<IProduct[]>(API);

      dispatch({
        type: "products",
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function getOneProduct(id: number) {
    const { data } = await axios.get(`${API}/${id}`);

    dispatch({
      type: "product",
      payload: data,
    });
  }

  async function addProduct(newProduct: IProductCreate) {
    await axios.post(API, newProduct);
  }

  async function deleteProduct(id: number) {
    await axios.delete(`${API}/${id}`);
    getProducts();
  }

  async function editProduct(newData: IProduct) {
    await axios.put(`${API}/${newData.id}`, newData);
  }

  const value = {
    products: state.products,
    product: state.product,
    getProducts,
    addProduct,
    deleteProduct,
    getOneProduct,
    editProduct,
  };

  return (
    <productContext.Provider value={value}>{children}</productContext.Provider>
  );
};

export default ProductContext;
